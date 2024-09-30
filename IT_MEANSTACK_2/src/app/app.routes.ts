import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductcreateComponent } from './productcreate/productcreate.component';
import { ProductupdateComponent } from './productupdate/productupdate.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { AddToCardComponent } from './add-to-card/add-to-card.component';

export const routes: Routes = [
    { path: 'home', component: ProductComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path : 'productcreate' , component : ProductcreateComponent},
    {path : 'productupdate/:id' , component : ProductupdateComponent},
    { path: 'productdetails/:id', component: ProductdetailsComponent },
    { path: 'addtocard/:id', component: AddToCardComponent }


    // Redirect to home if no path is specified

];
