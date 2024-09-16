import { Component, inject } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { AsyncPipe, NgIf } from "@angular/common";

@Component({
  selector: "app-layout-header",
  templateUrl: "./header.component.html",
  imports: [
    RouterLinkActive,
    RouterLink, ],
  standalone: true,
})
export class HeaderComponent {
  
}
