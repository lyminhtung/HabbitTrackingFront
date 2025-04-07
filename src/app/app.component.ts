import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss',
  imports: [RouterOutlet,RouterModule],
   template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'HabitTrackingFrontEnd';
  constructor(private titleService: Title) {
    // Đặt tiêu đề trang web từ component
    this.titleService.setTitle(this.title);
  }
}
