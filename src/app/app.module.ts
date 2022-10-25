import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './views/layout/layout.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './views/header/header.component';
import { MaterialModule } from './material/material/material.module';
import { MenuButtonsComponent } from './views/menu-buttons/menu-buttons.component';
import { LocationComponent } from './views/location/location.component';
import { PersonelInfoComponent } from './views/personel-info/personel-info.component';
import { SocialLinkComponent } from './views/social-link/social-link.component';
import { ContactInfoComponent } from './views/contact-info/contact-info.component';
import { SkillsComponent } from './views/skills/skills.component';
import { AdditionalInfoComponent } from './views/additional-info/additional-info.component';
import { PrivacyPolicyComponent } from './views/privacy-policy/privacy-policy.component';
import { FormsComponent } from './views/forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './views/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    HeaderComponent,
    MenuButtonsComponent,
    LocationComponent,
    PersonelInfoComponent,
    SocialLinkComponent,
    ContactInfoComponent,
    SkillsComponent,
    AdditionalInfoComponent,
    PrivacyPolicyComponent,
    FormsComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
