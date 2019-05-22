import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { BusnissWomenComponent } from './busniss-women/busniss-women.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { LogInComponent } from './auth/log-in/log-in.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthComponent } from './auth/auth.component';
import { SignComponent } from './auth/sign/sign.component';
import { AuthService } from './auth/auth.service';
import { SideBarComponent } from './side-bar/side-bar.component';
import { environment } from 'src/environments/environment';
import { LoaderComponent } from './auth/loader/loader.component';
import { EditingComponent } from './about/editing/editing.component';
import { NestedAboutComponent } from './about/nested-about/nested-about.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { UserService } from './user.service';
import { MessagesComponent } from './messages/messages.component';
import {  ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    EventsComponent,
    BusnissWomenComponent,
    ContactComponent,
    LogInComponent,
    AuthComponent,
    SignComponent,
    SideBarComponent,
    LoaderComponent,
    EditingComponent,
    NestedAboutComponent,
    UsersListComponent,
    MessagesComponent,
   
   
  
   
  
  ],
  imports: [
    
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
