import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isSidebarClosed = false;

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }

  toggleDarkMode() {
    const body = document.querySelector('body') as HTMLElement;
    body.classList.toggle('dark');
    const modeText = document.querySelector('.mode-text') as HTMLElement;
    if (body.classList.contains('dark')) {
      modeText.innerText = 'Light Mode';
    } else {
      modeText.innerText = 'Dark Mode';
    }
  }
}
