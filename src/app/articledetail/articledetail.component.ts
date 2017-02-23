import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { CmsDataParserService } from '../cms-data-parser.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import {FormGroup} from '@angular/forms';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-articledetail',
  templateUrl: './articledetail.component.html',
  styleUrls: ['./articledetail.component.css']
})
export class ArticledetailComponent implements OnInit {

  constructor(public articleService: ArticleService, private route: ActivatedRoute, private router: Router,private cmsdp:CmsDataParserService) {
    route.params.switchMap((params) => {
      return [articleService.getArticleByid(params["id"])]
    }).subscribe((article)=>{
      this.info=article;
      this.fields=this.cmsdp.dataToFieldList(article);
    })
  }

  ngOnInit() {
  }

  info = {};
  fields=[];
  getInfoString(){
    return JSON.stringify(this.info,null,"\t");
  }
  onsubmit(articleForm){
    console.log(articleForm.form.value);
  }
  toggleValid(a){
    a.valid=!a.valid;
  }
}
