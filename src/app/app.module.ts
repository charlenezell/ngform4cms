import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {RouterModule,Routes } from '@angular/router';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ArticleService} from './article.service';
import {CmsDataParserService} from './cms-data-parser.service';
import { AppComponent } from './app.component';
import { ArticlelistComponent } from './articlelist/articlelist.component';
import { ArticledetailComponent } from './articledetail/articledetail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InputTextComponent } from './input-text/input-text.component';
import { DformComponent } from './dform/dform.component';
import { DfieldComponent } from './dfield/dfield.component';

const appRoutes: Routes = [
  { path: 'a/:id', component: ArticledetailComponent },
  { path: '', component: ArticlelistComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ArticlelistComponent,
    ArticledetailComponent,
    PageNotFoundComponent,
    InputTextComponent,
    DformComponent,
    DfieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes,{
      useHash:true
    })
  ],
  providers: [ArticleService,CmsDataParserService],
  bootstrap: [AppComponent]
})

// RouterModule.forRoot([
//   {
//     path: '/',
//     component: AppComponent
//   }
// ])

export class AppModule { }
