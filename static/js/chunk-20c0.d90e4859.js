(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-20c0"],{JZdC:function(t,e,r){"use strict";r.r(e);var n=r("xash"),o={data:function(){return{list:null,page:1,limit:10,total:0,courseQuery:{}}},created:function(){this.getList()},methods:{getList:function(){var t=this;n.a.getListCourse().then(function(e){t.list=e.data.list})},resetData:function(){this.courseQuery={},this.getList()}}},l=r("KHd+"),a=Object(l.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-container"},[t._v("\n  课程列表\n\n  "),t._v(" "),r("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[r("el-form-item",[r("el-input",{attrs:{placeholder:"课程名称"},model:{value:t.courseQuery.title,callback:function(e){t.$set(t.courseQuery,"title",e)},expression:"courseQuery.title"}})],1),t._v(" "),r("el-form-item",[r("el-select",{attrs:{clearable:"",placeholder:"课程状态"},model:{value:t.courseQuery.status,callback:function(e){t.$set(t.courseQuery,"status",e)},expression:"courseQuery.status"}},[r("el-option",{attrs:{value:"Normal",label:"已发布"}}),t._v(" "),r("el-option",{attrs:{value:"Draft",label:"未发布"}})],1)],1),t._v(" "),r("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(e){t.getList()}}},[t._v("查询")]),t._v(" "),r("el-button",{attrs:{type:"default"},on:{click:function(e){t.resetData()}}},[t._v("清空")])],1),t._v(" "),r("el-table",{attrs:{data:t.list,border:"",fit:"","highlight-current-row":""}},[r("el-table-column",{attrs:{label:"序号",width:"70",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s((t.page-1)*t.limit+e.$index+1)+"\n      ")]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"title",label:"课程名称",width:"80"}}),t._v(" "),r("el-table-column",{attrs:{label:"课程状态",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s("Normal"===e.row.status?"已发布":"未发布")+"\n      ")]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"lessonNum",label:"课时数"}}),t._v(" "),r("el-table-column",{attrs:{prop:"gmtCreate",label:"添加时间",width:"160"}}),t._v(" "),r("el-table-column",{attrs:{prop:"viewCount",label:"浏览数量",width:"60"}}),t._v(" "),r("el-table-column",{attrs:{label:"操作",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("router-link",{attrs:{to:"/teacher/edit/"+e.row.id}},[r("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit"}},[t._v("编辑课程基本信息")])],1),t._v(" "),r("router-link",{attrs:{to:"/teacher/edit/"+e.row.id}},[r("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit"}},[t._v("编辑课程大纲息")])],1),t._v(" "),r("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete"},on:{click:function(r){t.removeDataById(e.row.id)}}},[t._v("删除课程信息")])]}}])})],1),t._v(" "),r("el-pagination",{staticStyle:{padding:"30px 0","text-align":"center"},attrs:{"current-page":t.page,"page-size":t.limit,total:t.total,layout:"total, prev, pager, next, jumper"},on:{"current-change":t.getList}})],1)},[],!1,null,null,null);a.options.__file="list.vue";e.default=a.exports},xash:function(t,e,r){"use strict";var n=r("t3Un");e.a={addCourseInfo:function(t){return Object(n.a)({url:"/eduservice/course/addCourseInfo",method:"post",data:t})},getListTeacher:function(){return Object(n.a)({url:"/eduservice/teacher/findAll",method:"get"})},getCourseInfoId:function(t){return Object(n.a)({url:"/eduservice/course/getCourseInfo/"+t,method:"get"})},updateCourseInfo:function(t){return Object(n.a)({url:"/eduservice/course/updateCourseInfo",method:"post",data:t})},getPublihCourseInfo:function(t){return Object(n.a)({url:"/eduservice/course/getPublishCourseInfo/"+t,method:"get"})},publihCourse:function(t){return Object(n.a)({url:"/eduservice/course/publishCourse/"+t,method:"post"})},getListCourse:function(){return Object(n.a)({url:"/eduservice/course",method:"get"})}}}}]);