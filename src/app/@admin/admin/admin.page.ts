import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.page.html",
  styleUrls: ["./admin.page.scss"],
})
export class AdminPage implements OnInit {
  appPages = [
    {
      title: "Schedule",
      url: "/app/tabs/schedule",
      icon: "calendar",
    },
    {
      title: "Speakers",
      url: "/app/tabs/speakers",
      icon: "people",
    },
    {
      title: "Map",
      url: "/app/tabs/map",
      icon: "map",
    },
    {
      title: "About",
      url: "/app/tabs/about",
      icon: "information-circle",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
