import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-Sidenav',
  templateUrl: './Sidenav.component.html',
  styleUrls: ['./Sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Input('ShowSideNav')
  showDropdown: boolean = false;
  showList: boolean = false;
  errorPath: string = "error";

  navItems = [
    {
      "path": "dashboard",
      "iconName": "dashboard",
      "label": "Dashboard"
    },
    {
      "path": "",
      "iconName": "switch_access_shortcut",
      "label": "Shortcuts"
    },
    {
      "path": "errorPath",
      "iconName": "visibility",
      "label": "Overview"
    },
    {
      "path": "events",
      "iconName": "calendar_month",
      "label": "Events"
    },
    {
      "path": "errorPath",
      "iconName": "question_mark",
      "label": "About"
    },
    {
      "path": "errorPath",
      "iconName": "support_agent",
      "label": "Services"
    },
    {
      "path": "errorPath",
      "iconName": "contacts",
      "label": "Contacts"
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  ShowList(){
    this.showList = true;
  }

  HideList(){
    this.showList = false;
  }

}
