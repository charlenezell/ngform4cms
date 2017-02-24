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
import { MaterialModule } from '@angular/material';
import { InputTimeComponent } from './input-time/input-time.component';
import { InputJSONComponent } from './input-json/input-json.component';
import { InputImageComponent } from './input-image/input-image.component';
import { InputBaseComponent } from './input-base/input-base.component';
import { InputSelectComponent } from './input-select/input-select.component';
// other imports

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
    DfieldComponent,
    InputTimeComponent,
    InputJSONComponent,
    InputImageComponent,
    InputBaseComponent,
    InputSelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
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
