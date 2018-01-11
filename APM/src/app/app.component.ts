import { Component } from "@angular/core";
import { ProductService } from "./products/product.service";

@Component({
  selector: 'pm-root',
  templateUrl: './shared/menu.component.html'
})

export class AppComponent {
  pageTitle: string = "Acme Product Manager";
}
