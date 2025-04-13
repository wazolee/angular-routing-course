import { Component, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { ROUTER_TOKENS } from 'src/app/app.routes';
import { Pie } from 'src/app/models/pie';
import { CartService } from 'src/app/services/cart.service';
import { PieService } from 'src/app/services/pie.service';

@Component({
  standalone: true,
  imports: [
    MatButtonModule,
  ],
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() pie!: Pie;
  readonly activateRoute = inject(ActivatedRoute);
  readonly cartService = inject(CartService);
  readonly pieService = inject(PieService);
  readonly router = inject(Router);

  selectPie(pie: Pie) {
    this.pieService.setSelectedPie(pie.id);
    this.router.navigate([`../${ROUTER_TOKENS.SHOP}`], { relativeTo: this.activateRoute });
  }
}
