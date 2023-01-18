import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {filter, forkJoin, map, mergeMap, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  static readonly BASE_USER = 'GuusLieben'
  static readonly BASE_URL = 'https://api.github.com/users/';

  static readonly EVENTS = '/events';
  static readonly ORGANIZATIONS = '/orgs';

  static readonly PER_PAGE = 100;
  static readonly MAX_PAGES = 2;

  constructor(private http: HttpClient) {
  }

  getRecentCommits(): Observable<GitHubCommits> {
    const userEvents = this.getEvents(GithubService.BASE_USER);
    return userEvents.pipe(
      filter((data: any) => data.length > 0),
      map((data: any) => {
          const commits = this.filterCommits(data);
          return this.aggregateCommits(commits);
        }
      ));
  }

  getRecentProjects(): Observable<GitHubProject[]> {
    const users = this.getOrganizations(GithubService.BASE_USER);
    return users.pipe(
      mergeMap((orgs: string[]) => {
        const requests: Observable<GitHubProject[]>[] = [];
        orgs.push(GithubService.BASE_USER);
        orgs.forEach((org: string) => {
          requests.push(this.getRepositories(org));
        });
        return forkJoin(requests);
      }),
      map((data: GitHubProject[][]) => {
        return data.reduce((acc: GitHubProject[], val: GitHubProject[]) => acc.concat(val), []);
      }),
      map((data: GitHubProject[]) => {
        return this.sortProjects(data);
      })
    );
  }

  private sortProjects(projects: GitHubProject[]): GitHubProject[] {
    return projects.sort((a, b) => {
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    });
  }

  private getOrganizations(user: string): Observable<string[]> {
    return this.http.get(`${GithubService.BASE_URL}${user}${GithubService.ORGANIZATIONS}`)
      .pipe(
        map((data: any) => data.map((o: any) => o.login))
      );
  }

  private getRepositories(user: string): Observable<GitHubProject[]> {
    return this.http.get(`${GithubService.BASE_URL}${user}/repos`)
      .pipe(
        map((data: any) => {
          console.log('Got data for user ' + user + ' with length ' + data.length, data);
          return data.map((r: any) => {
            return r as GitHubProject;
          })
        })
      );
  }

  private getEvents(user: string): Observable<any> {
    const requests: Observable<any>[] = [];
    for (let i = 1; i <= GithubService.MAX_PAGES; i++) {
      const url = `${GithubService.BASE_URL}${user}${GithubService.EVENTS}?page=${i}&per_page=${GithubService.PER_PAGE}`;
      const observable = this.http.get(url).pipe(
        map((data: any) => {
          return data;
        })
      );
      requests.push(observable);
    }
    return forkJoin(requests, (values: any) => {
      return values.reduce((acc: any[], val: any[]) => acc.concat(val), []);
    });
  }

  private filterCommits(events: any): GitHubCommit[] {
    const commits: GitHubCommit[] = [];
    events
      .filter((e: any) => e.type === 'PushEvent')
      .forEach((e: any) => {
        e.payload.commits.forEach((c: any) => {
          commits.push({
            message: c.message,
            // Instead of making a separate request to get the URL from the commit information, we can just transform
            // the URL with the information we already have.
            url: this.transformCommitUrl(c.url),
            sha: c.sha.substring(0, 7),
            repo: {
              name: e.repo.name,
              url: e.repo.url
            }
          });
        });
      });
    return commits;
  }

  private transformCommitUrl(url: string): string {
    return url.replace('api.', '')
      .replace('repos/', '')
      .replace('/commits/', '/commit/');
  }

  private aggregateCommits(commits: GitHubCommit[]): GitHubCommits {
    const aggregatedCommits: GitHubCommits = {};
    commits.forEach((c: GitHubCommit) => {
      if (aggregatedCommits[c.repo.name]) {
        aggregatedCommits[c.repo.name].commits.push(c);
      } else {
        aggregatedCommits[c.repo.name] = {
          url: c.repo.url,
          commits: [c]
        };
      }
    });
    return aggregatedCommits;
  }
}

export type GitHubProject = {
  html_url: string,
  name: string,
  full_name: string,
  description?: string,
  updated_at: string,
  language?: string,
}

export type GitHubCommit = {
  message: string,
  url: string,
  sha: string,
  repo: {
    name: string,
    url: string,
  },

}

export type GitHubCommits = {
  [key: string]: {
    url: string,
    commits: GitHubCommit[]
  }
};
