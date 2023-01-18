import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {GitHubCommit, GitHubCommits, GitHubProject, GithubService} from "../services/github.service";
import {CursorComponent} from "../cursor/cursor.component";

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input()
  projects: any[] = [];

  data: GitHubProject[] = [];
  commits?: GitHubCommits;

  readonly limit: { [key in "projects" | "commits"]: number } = {
    projects: 6,
    commits: 10,
  };

  @Input()
  cursorComponent?: CursorComponent;

  constructor(private service: GithubService) {
  }

  ngOnInit(): void {
    // this.service.getProjects().subscribe((data: any) => {
    //   this.data = this.sortProjects(data);
    // });
    this.service.getRecentCommits().subscribe((data: GitHubCommits) => {
      this.commits = data;
      setTimeout(() => {
        this.cursorComponent?.adaptLinks()
      }, 250)
    })
    this.service.getRecentProjects().subscribe((data: GitHubProject[]) => {
      this.data = data;
      setTimeout(() => {
        this.cursorComponent?.adaptLinks()
      }, 250)
    })
  }

  sanitize(title: string): string {
    const project = title.split('/')[1];
    return project.replace(/-/g, ' ');
  }

  formatTimestamp(updated_at: string) {
    const date = new Date(updated_at);
    // dd-MM-yyyy at hh:mm
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`;
  }
}
