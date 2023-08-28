import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isSidebarClosed = false;

  darkMode : boolean = true;

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }

  toggleDarkMode() {
    this.darkMode=!this.darkMode;
    const body = document.querySelector('body') as HTMLElement;
    body.classList.toggle('dark');
    const modeText = document.querySelector('.mode-text') as HTMLElement;
    const toggle = document.querySelector('.toggle-switch') as HTMLElement;
    toggle.classList.toggle('dark');
    if (body.classList.contains('dark')) {
      modeText.innerText = 'Light Mode';
    } else {
      modeText.innerText = 'Dark Mode';
    }
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateSidebarState();
  }

  updateSidebarState() {
    this.isSidebarClosed = window.innerWidth <= 900;
  }


}
