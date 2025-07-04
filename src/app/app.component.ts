import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.component.scss',
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'HabitTrackingFrontEnd';
  constructor(private titleService: Title) {
    // Đặt tiêu đề trang web từ component
    this.titleService.setTitle(this.title);
  }
}

