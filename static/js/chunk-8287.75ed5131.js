(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-8287"],{VTSi:function(e,t,i){"use strict";i.r(t);var o=i("t3Un"),a=function(e){return Object(o.a)({url:"/eduservice/chapter/getChapterVideo/"+e,method:"get"})},s=function(e){return Object(o.a)({url:"/eduservice/chapter/addChapter",method:"post",data:e})},n=function(e){return Object(o.a)({url:"/eduservice/chapter/getChapterInfo/"+e,method:"get"})},r=function(e){return Object(o.a)({url:"/eduservice/chapter/updateChapter",method:"post",data:e})},d=function(e){return Object(o.a)({url:"/eduservice/chapter/"+e,method:"delete"})},l={addVideo:function(e){return Object(o.a)({url:"/eduservice/video/addVideo",method:"post",data:e})},getVideo:function(e){return Object(o.a)({url:"/eduservice/video/getVideoInfo/"+e,method:"get"})},updateVideo:function(e){return Object(o.a)({url:"/eduservice/video/updateVideo",method:"post",data:e})},deleteVideo:function(e){return Object(o.a)({url:"/eduservice/video/"+e,method:"delete"})}},c={data:function(){return{saveBtnDisabled:!1,courseId:"",chapterVideoList:[],chapter:{title:"",sort:0},video:{title:"",sort:0,free:0,videoSourceId:"",videoOriginalName:""},dialogChapterFormVisible:!1,dialogVideoFormVisible:!1,fileList:[],BASE_API:"http://localhost:8222"}},created:function(){this.$route.params&&this.$route.params.id&&(this.courseId=this.$route.params.id,this.getChapterVideo())},methods:{handleVodRemove:function(){var e=this;l.deleteAliyunvod(this.video.videoSourceId).then(function(t){e.$message({type:"success",message:"删除视频成功!"}),e.fileList=[],e.video.videoSourceId="",e.video.videoOriginalName=""})},beforeVodRemove:function(e,t){return this.$confirm("确定移除 "+e.name+"？")},handleVodUploadSuccess:function(e,t,i){this.video.videoSourceId=e.data.videoId,this.video.videoOriginalName=t.name},handleUploadExceed:function(){this.$message.warning("想要重新上传视频，请先删除已上传的视频")},removeVideo:function(e){var t=this;this.$confirm("此操作将删除小节, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){l.deleteVideo(e).then(function(e){t.$message({type:"success",message:"删除小节成功!"}),t.getChapterVideo()})})},openVideo:function(e){this.dialogVideoFormVisible=!0,this.video={},this.fileList=[],this.video.chapterId=e},openEditVideo:function(e){var t=this;this.dialogVideoFormVisible=!0,l.getVideo(e).then(function(e){t.video=e.data.video})},updateVideo:function(){var e=this;l.updateVideo(this.video).then(function(t){e.dialogVideoFormVisible=!1,e.$message({type:"success",message:"修改小节成功!"}),e.getChapterVideo()})},addVideo:function(){var e=this;this.video.courseId=this.courseId,l.addVideo(this.video).then(function(t){e.dialogVideoFormVisible=!1,e.$message({type:"success",message:"添加小节成功!"}),e.getChapterVideo()})},saveOrUpdateVideo:function(){this.video.id?this.updateVideo():this.addVideo()},removeChapter:function(e){var t=this;this.$confirm("此操作将删除章节, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){d(e).then(function(e){t.$message({type:"success",message:"删除成功!"}),t.getChapterVideo()})})},openEditChatper:function(e){var t=this;this.dialogChapterFormVisible=!0,n(e).then(function(e){t.chapter=e.data.chapter})},openChapterDialog:function(){this.dialogChapterFormVisible=!0,this.chapter.title="",this.chapter.sort=0},addChapter:function(){var e=this;this.chapter.courseId=this.courseId,s(this.chapter).then(function(t){e.dialogChapterFormVisible=!1,e.$message({type:"success",message:"添加章节成功!"}),e.getChapterVideo()})},updateChapter:function(){var e=this;r(this.chapter).then(function(t){e.dialogChapterFormVisible=!1,e.$message({type:"success",message:"修改章节成功!"}),e.getChapterVideo()})},saveOrUpdate:function(){this.chapter.id?this.updateChapter():this.addChapter()},getChapterVideo:function(){var e=this;a(this.courseId).then(function(t){e.chapterVideoList=t.data.allChapterVideo})},previous:function(){this.$router.push({path:"/course/info/"+this.courseId})},next:function(){this.$router.push({path:"/course/publish/"+this.courseId})}}},u=(i("oCEg"),i("KHd+")),p=Object(u.a)(c,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("h2",{staticStyle:{"text-align":"center"}},[e._v("发布新课程")]),e._v(" "),i("el-steps",{staticStyle:{"margin-bottom":"40px"},attrs:{active:2,"process-status":"wait","align-center":""}},[i("el-step",{attrs:{title:"填写课程基本信息"}}),e._v(" "),i("el-step",{attrs:{title:"创建课程大纲"}}),e._v(" "),i("el-step",{attrs:{title:"最终发布"}})],1),e._v(" "),i("el-button",{attrs:{type:"text"},on:{click:function(t){e.openChapterDialog()}}},[e._v("添加章节")]),e._v(" "),i("ul",{staticClass:"chanpterList"},e._l(e.chapterVideoList,function(t){return i("li",{key:t.id},[i("p",[e._v("\n                "+e._s(t.title)+"\n\n                "),i("span",{staticClass:"acts"},[i("el-button",{attrs:{type:"text"},on:{click:function(i){e.openVideo(t.id)}}},[e._v("添加小节")]),e._v(" "),i("el-button",{attrs:{type:"text"},on:{click:function(i){e.openEditChatper(t.id)}}},[e._v("编辑")]),e._v(" "),i("el-button",{attrs:{type:"text"},on:{click:function(i){e.removeChapter(t.id)}}},[e._v("删除")])],1)]),e._v(" "),i("ul",{staticClass:"chanpterList videoList"},e._l(t.children,function(t){return i("li",{key:t.id},[i("p",[e._v(e._s(t.title)+"\n\n                "),i("span",{staticClass:"acts"},[i("el-button",{attrs:{type:"text"},on:{click:function(i){e.openEditVideo(t.id)}}},[e._v("编辑")]),e._v(" "),i("el-button",{attrs:{type:"text"},on:{click:function(i){e.removeVideo(t.id)}}},[e._v("删除")])],1)])])}))])})),e._v(" "),i("div",[i("el-button",{on:{click:e.previous}},[e._v("上一步")]),e._v(" "),i("el-button",{attrs:{disabled:e.saveBtnDisabled,type:"primary"},on:{click:e.next}},[e._v("下一步")])],1),e._v(" "),i("el-dialog",{attrs:{visible:e.dialogChapterFormVisible,title:"添加章节"},on:{"update:visible":function(t){e.dialogChapterFormVisible=t}}},[i("el-form",{attrs:{model:e.chapter,"label-width":"120px"}},[i("el-form-item",{attrs:{label:"章节标题"}},[i("el-input",{model:{value:e.chapter.title,callback:function(t){e.$set(e.chapter,"title",t)},expression:"chapter.title"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"章节排序"}},[i("el-input-number",{attrs:{min:0,"controls-position":"right"},model:{value:e.chapter.sort,callback:function(t){e.$set(e.chapter,"sort",t)},expression:"chapter.sort"}})],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogChapterFormVisible=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.saveOrUpdate}},[e._v("确 定")])],1)],1),e._v(" "),i("el-dialog",{attrs:{visible:e.dialogVideoFormVisible,title:"添加课时"},on:{"update:visible":function(t){e.dialogVideoFormVisible=t}}},[i("el-form",{attrs:{model:e.video,"label-width":"120px"}},[i("el-form-item",{attrs:{label:"课时标题"}},[i("el-input",{model:{value:e.video.title,callback:function(t){e.$set(e.video,"title",t)},expression:"video.title"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"课时排序"}},[i("el-input-number",{attrs:{min:0,"controls-position":"right"},model:{value:e.video.sort,callback:function(t){e.$set(e.video,"sort",t)},expression:"video.sort"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"是否免费"}},[i("el-radio-group",{model:{value:e.video.free,callback:function(t){e.$set(e.video,"free",t)},expression:"video.free"}},[i("el-radio",{attrs:{label:!0}},[e._v("免费")]),e._v(" "),i("el-radio",{attrs:{label:!1}},[e._v("默认")])],1)],1),e._v(" "),i("el-form-item",{attrs:{label:"上传视频"}},[i("el-upload",{staticClass:"upload-demo",attrs:{"on-success":e.handleVodUploadSuccess,"on-remove":e.handleVodRemove,"before-remove":e.beforeVodRemove,"on-exceed":e.handleUploadExceed,"file-list":e.fileList,action:e.BASE_API+"/eduvod/video/uploadAlyiVideo",limit:1}},[i("el-button",{attrs:{size:"small",type:"primary"}},[e._v("上传视频")]),e._v(" "),i("el-tooltip",{attrs:{placement:"right-end"}},[i("div",{attrs:{slot:"content"},slot:"content"},[e._v("最大支持1G，"),i("br"),e._v("\n                支持3GP、ASF、AVI、DAT、DV、FLV、F4V、"),i("br"),e._v("\n                GIF、M2T、M4V、MJ2、MJPEG、MKV、MOV、MP4、"),i("br"),e._v("\n                MPE、MPG、MPEG、MTS、OGG、QT、RM、RMVB、"),i("br"),e._v("\n                SWF、TS、VOB、WMV、WEBM 等视频格式上传")]),e._v(" "),i("i",{staticClass:"el-icon-question"})])],1)],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogVideoFormVisible=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{disabled:e.saveVideoBtnDisabled,type:"primary"},on:{click:e.saveOrUpdateVideo}},[e._v("确 定")])],1)],1)],1)},[],!1,null,"1c651080",null);p.options.__file="chapter.vue";t.default=p.exports},ffqV:function(e,t,i){},oCEg:function(e,t,i){"use strict";var o=i("ffqV");i.n(o).a}}]);