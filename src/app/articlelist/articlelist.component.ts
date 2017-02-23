import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-articlelist',
  templateUrl: './articlelist.component.html',
  styleUrls: ['./articlelist.component.css']
})
export class ArticlelistComponent implements OnInit {

  constructor(http:Http) {
    http.get("/api/http://cmsservice.100bt.com/GetArticleListJson.action?CategoryName_Key=%E5%A5%A5%E5%A5%87_%E9%A6%96%E9%A1%B5_%E5%A5%A5%E5%A5%87%E5%9C%88&Article_Page_Name_Key=everyday_first_news").toPromise().then((d)=>{
      this.articleList=d.json().articleList;
    })
  }

  articleList=[];

  ngOnInit() {

  }

}
