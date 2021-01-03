import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.page.html",
  styleUrls: ["./admin.page.scss"],
})
export class AdminPage implements OnInit {
  appPages = [
    {
      title: "Dashboard",
      url: "/admin/dashboard",
      icon: "apps",
    },
    {
      title: "Users",
      url: "/admin/users",
      icon: "people",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
