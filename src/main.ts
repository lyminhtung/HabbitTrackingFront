// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';  // Import `provideRouter`
import { routes } from './app/app-routing.module';  // Import routes
import { AppComponent } from './app/app.component';  // Import AppComponent
import { provideHttpClient } from '@angular/common/http';
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),  // Cung cấp các route cho ứng dụng
    provideHttpClient(),
  ],
});
