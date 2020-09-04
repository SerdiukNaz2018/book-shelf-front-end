import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  sidebarIsVisible: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  onImageClick(event) {
    event.preventDefault();
    this.sidebarIsVisible = !this.sidebarIsVisible;
  }
}
