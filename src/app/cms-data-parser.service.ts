import { Injectable } from '@angular/core';

@Injectable()
export class CmsDataParserService {

  typeMap = [
    {
      type: 'text',
      nameList: [
        'link',
        'categoryId',
        'articleTitle',
        'uploadUserName',
        'articleId',
        'imgTitle',
        'flowerCount',
        'viewCount',
        'description'
      ]
    },
    {
      type: 'time',
      nameList: [
        'uploadTime'
      ]
    },
    {
      type: 'image',
      nameList: [
        'imgUrl'
      ]
    },
    {
      type: 'select',
      nameList: [
        'category',
        'preventDiscuss',
        'icFlowerCount'
      ]
    },
    {
      type: 'multimedia',
      nameList: [

      ]
    }, {
      type: 'richText',
      nameList: [

      ]
    }, {
      type: 'articleContent',
      nameList: [
        'articleContent', 'contentJson', 'contentMap'
      ]
    },
    {
      type: 'fieldMap',
      nameList: [
        'fieldMap',
        'fields',
      ]
    }
  ];

  constructor() { }

  resolveType(name) {
    let g
    this.typeMap.forEach(v => {
      if (v.nameList.indexOf(name) != -1) {
        g = v.type;
      }
    });
    return g;
  }

  dataToFieldList(data) {
    return Object.keys(data).map(v => {
      return {
        name: v,
        value: data[v],
        type: this.resolveType(v)
      }
    });
  }
}
