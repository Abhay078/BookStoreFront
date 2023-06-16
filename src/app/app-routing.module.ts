import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BooksComponent } from './components/books/books.component';
import { AuthenticationGuard } from './authentication.guard';
import { CartComponent } from './components/cart/cart.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { OrderComponent } from './components/order/order.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signUp',component:SignUpComponent},
  {path:'dashboard',component:DashboardComponent,
  canActivate:[AuthenticationGuard],children:[
    {path:'book',component:BooksComponent},
    {path:'bookdetail',component:BookDetailComponent},
    {path:'cart',component:CartComponent},
    {path:'wishlist',component:WishListComponent},
    {path:'order',component:OrderComponent}
  ]},
  

    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
