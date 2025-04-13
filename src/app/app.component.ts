import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    MatMenuModule,
    MatButtonModule,
    HeaderComponent,
    HomeComponent,
    RouterOutlet
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

constructor(private readonly router:Router){}

ngOnInit(): void {
  this.router.events.subscribe((event) => {
    console.log('router event:', event);
  });
}


}
