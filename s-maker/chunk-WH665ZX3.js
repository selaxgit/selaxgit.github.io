import{$b as L,$c as ze,$d as it,Aa as s,Ac as B,Ae as oe,Ba as C,Be as Ct,Ca as Y,Da as X,De as gt,Ea as w,Ee as re,Fe as _t,Ga as c,Ge as vt,Ha as g,Kd as We,M as he,Md as Ye,Nd as Xe,Oa as ve,Od as qe,Pa as Fe,Pb as T,Qa as Se,Qb as De,Ra as xe,Rb as D,Rc as Ne,S as p,Sa as l,Sb as K,T as f,Ta as R,Tb as V,Td as Qe,Ua as q,Ub as Be,Uc as Ae,Ud as Ze,Vc as ee,Vd as Ke,W as Ce,Wa as be,Wc as Oe,Xa as Me,Xc as te,Xd as G,Ya as we,Yc as ie,Zc as He,Zd as et,_c as $e,_d as tt,ab as ye,be as nt,ca as ge,cc as P,cd as Ue,ce as ot,da as u,dc as N,dd as Je,de as rt,ea as h,eb as U,ec as A,ee as st,fb as J,fe as O,gc as Ve,ge as ut,hb as Ee,he as lt,ia as F,ic as y,j as $,ja as b,jc as Le,jd as ne,kb as me,kd as Ge,ke as at,le as mt,mb as Q,nb as Z,oa as _,ob as E,oc as Pe,qa as m,qe as ct,ra as _e,re as dt,sa as z,se as pt,te as ft,ua as M,ub as Te,z as ae,za as n,ze as ht}from"./chunk-FGQYVVFQ.js";import"./chunk-XP2N47VC.js";import{k as Re}from"./chunk-XJADAOP3.js";import"./chunk-WDCVTZT5.js";import"./chunk-ZKQ77EQL.js";import"./chunk-Q75QCHGE.js";import"./chunk-JOYMENOW.js";import{L as Ie,Q as ke,W as je,i as k}from"./chunk-FY46XAGK.js";function It(r,d){r&1&&(n(0,"div",19),C(1,"mat-spinner"),s())}function kt(r,d){r&1&&(n(0,"span",20),l(1,"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043B"),s())}var jt="\u0424\u0430\u0439\u043B \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D",Ft=32,xt=(()=>{class r{get bgFilename(){return this.bgFile?.name??jt}constructor(e){this.framesService=e,this.hasBgFile=F(!1),this.hasFileError=F(!1),this.loadingState=F(!1),this.formGroup=new $e({tileWidth:new G(Ft,te.required),tileHeight:new G(Ft,te.required),frameName:new G("Frame",te.required),checkDuplicates:new G(!1)}),this.treeId=null,this.bgFile=null}onChoiceBgFile(){y.uploadFile("image/*").subscribe(e=>{this.bgFile=e,this.hasBgFile.set(!0),this.hasFileError.set(!1)})}onClearBgFile(){this.bgFile=null,this.hasBgFile.set(!1)}onApply(){if(!this.formGroup.valid){this.formGroup.markAllAsTouched();return}if(!this.hasBgFile()){this.hasFileError.set(!0);return}this.cutFrames()}onClose(){this.dialogRef?.close()}setData(e){this.projectId=e.projectId,this.treeId=e.treeId}onCloseModal(){this.loadingState()||this.onClose()}cutFrames(){return k(this,null,function*(){if(!this.bgFile)return;Le.blurActiveElement(),this.formGroup.disable();let e=Number(this.formGroup.get("tileWidth")?.value),i=Number(this.formGroup.get("tileHeight")?.value),t=!!this.formGroup.get("checkDuplicates")?.value,o=this.formGroup.get("frameName")?.value;if(isNaN(e)||isNaN(i))return;o||(o="Frame"),this.loadingState.set(!0);let a=yield A.fileToCanvas(this.bgFile),x=0,S=[];for(;x+i<=a.height;){let v=0;for(;v+e<=a.width;){let I=document.createElement("canvas"),j=I.getContext("2d");if(!j)continue;I.width=e,I.height=i,j.drawImage(a,v,x,e,i,0,0,e,i);let H=yield A.canvasToBlob(I),le=`${o}-${v}-${x}`,Tt=new File([H],`${le}.png`);S.push({name:le,file:Tt,deleted:!1}),v+=e}x+=i}let W=new DataTransfer;if(t){for(let v=0;v<S.length;v++){let I=S[v];if(!I.deleted)for(let j=v+1;j<S.length;j++){let H=S[j];if(H.deleted)continue;(yield y.compareFiles(I.file,H.file))&&(H.deleted=!0)}}for(let v of S)v.deleted||W.items.add(v.file);yield $(this.framesService.addFromFiles(this.projectId,this.treeId,W.files))}else{for(let v of S)W.items.add(v.file);yield $(this.framesService.addFromFiles(this.projectId,this.treeId,W.files))}this.dialogRef?.close(!0)})}static{this.\u0275fac=function(i){return new(i||r)(h(B))}}static{this.\u0275cmp=b({type:r,selectors:[["app-cut-frames-from-file-modal"]],decls:27,vars:14,consts:[["class","loading-container",4,"ngIf"],[1,"jst-modal-container"],[1,"container",3,"formGroup"],[1,"text-center","text-bold","mt-10"],[1,"flex-row-centered","mt-10"],["label","\u0428\u0438\u0440\u0438\u043D\u0430","formControlName","tileWidth",1,"w-coords",3,"clearButton","min"],["label","\u0412\u044B\u0441\u043E\u0442\u0430","formControlName","tileHeight",1,"w-coords",3,"clearButton","min"],["label","\u0424\u0430\u0439\u043B \u0434\u043B\u044F \u043D\u0430\u0440\u0435\u0437\u043A\u0438",1,"mt-10",3,"readonlyState","value"],["JSTIconSuffix",""],["mat-icon-button","","color","accent","title","\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0444\u0430\u0439\u043B \u0434\u043B\u044F \u043D\u0430\u0440\u0435\u0437\u043A\u0438",3,"click","disabled"],["mat-icon-button","","color","primary","title","\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u0430\u0439\u043B \u0434\u043B\u044F \u043D\u0430\u0440\u0435\u0437\u043A\u0438",1,"ml-10",3,"click","disabled"],["JSTHint",""],["class","text-danger",4,"ngIf"],["label","\u0418\u043C\u044F \u0444\u0440\u0435\u0439\u043C\u0430","formControlName","frameName",1,"mt-10",3,"clearButton"],["JSTTextSuffix",""],["label","\u0423\u0431\u0440\u0430\u0442\u044C \u0434\u0443\u0431\u043B\u0438\u043A\u0430\u0442\u044B \u0444\u0440\u0435\u0439\u043C\u043E\u0432","formControlName","checkDuplicates"],[1,"jst-modal-footer-buttons"],["mat-raised-button","","color","primary",3,"click","disabled"],["mat-raised-button","","color","accent",3,"click","disabled"],[1,"loading-container"],[1,"text-danger"]],template:function(i,t){i&1&&(_(0,It,2,0,"div",0),n(1,"div",1)(2,"div",2)(3,"label",3),l(4,"\u0420\u0430\u0437\u043C\u0435\u0440 \u0442\u0430\u0439\u043B\u043E\u0432"),s(),n(5,"div",4),C(6,"jst-touchspin",5)(7,"jst-touchspin",6),s(),n(8,"jst-input",7),Y(9,8),n(10,"button",9),c("click",function(){return t.onClearBgFile()}),n(11,"mat-icon"),l(12,"highlight_off"),s()(),n(13,"button",10),c("click",function(){return t.onChoiceBgFile()}),n(14,"mat-icon"),l(15,"more_horiz"),s()(),X(),Y(16,11),_(17,kt,2,0,"span",12),X(),s(),n(18,"jst-input",13),Y(19,14),l(20,"-$x-$y"),X(),s(),C(21,"jst-checkbox",15),s(),n(22,"div",16)(23,"button",17),c("click",function(){return t.onApply()}),l(24,"\u041D\u0430\u0440\u0435\u0437\u0430\u0442\u044C \u0444\u0440\u0435\u0439\u043C\u044B"),s(),n(25,"button",18),c("click",function(){return t.onClose()}),l(26,"\u0417\u0430\u043A\u0440\u044B\u0442\u044C"),s()()()),i&2&&(m("ngIf",t.loadingState()),u(2),m("formGroup",t.formGroup),u(4),m("clearButton",!1)("min",10),u(),m("clearButton",!1)("min",10),u(),m("readonlyState",!0)("value",t.bgFilename),u(2),m("disabled",!t.hasBgFile()||t.loadingState()),u(3),m("disabled",t.loadingState()),u(4),m("ngIf",t.hasFileError()),u(),m("clearButton",!1),u(5),m("disabled",t.loadingState()),u(2),m("disabled",t.loadingState()))},dependencies:[E,Q,Ge,ie,He,Ue,Je,ne,D,T,De,V,K,N,P,st,et,it,tt,rt,ot,nt,lt,ut],styles:["[_nghost-%COMP%]{position:relative;flex:auto;display:flex;flex-direction:column;width:400px;max-width:100%}.container[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:10px}.w-coords[_ngcontent-%COMP%]{width:136px;margin-left:15px}.w-coords[_ngcontent-%COMP%]:first-child{margin-left:0}"],changeDetection:0})}}return r})();var ue=class extends ke{constructor(){super(),this.useMove=!1,this.selectedRect=null,this.mouseCoords=null,this.gRect=new Re,this.initialize()}setFileCanvas(d){this.sprite&&this.sprite.destroy(!0),this.sprite=new je(Ie.from(d)),this.addChild(this.sprite)}initialize(){this.eventMode="static",this.sortableChildren=!0,this.gRect.zIndex=10,this.addChild(this.gRect),this.on("pointerdown",d=>{!this.useMove&&this.sprite&&(this.gRect.clear(),this.selectedRect=null,this.mouseCoords=this.toLocal({x:d.globalX,y:d.globalY}))}),this.on("pointerup",d=>{if(this.mouseCoords&&this.sprite){let e=this.toLocal({x:d.globalX,y:d.globalY}),i=Math.abs(e.x-this.mouseCoords.x),t=Math.abs(e.y-this.mouseCoords.y),o=Math.min(e.x,this.mouseCoords.x),a=Math.min(e.y,this.mouseCoords.y);i>0&&t>0?this.selectedRect={x:o,y:a,width:i,height:t}:this.selectedRect=null}this.mouseCoords=null}),this.on("pointerleave",()=>{this.mouseCoords=null}),this.on("pointermove",d=>{if(!this.mouseCoords||!this.sprite)return;let e=this.toLocal({x:d.globalX,y:d.globalY}),i=Math.abs(e.x-this.mouseCoords.x),t=Math.abs(e.y-this.mouseCoords.y),o=Math.min(e.x,this.mouseCoords.x),a=Math.min(e.y,this.mouseCoords.y);this.drawRect(o,a,i,t)})}drawRect(d,e,i,t){this.gRect.clear().rect(d,e,i,t).stroke({width:1,color:0})}};var Rt=["pixiContainer"];function Vt(r,d){if(r&1){let e=w();n(0,"div",3)(1,"smc-scale-buttons",12),c("zoomEvent",function(t){p(e);let o=g();return f(o.onZoom(t))}),s(),n(2,"div",13),l(3,'\u0414\u043B\u044F \u0441\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0437\u0430\u0436\u043C\u0438\u0442\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0443 "\u043F\u0440\u043E\u0431\u0435\u043B"'),s()()}}function Lt(r,d){if(r&1){let e=w();n(0,"div",14)(1,"jst-select-file-container",15),c("selectFilesEvent",function(t){p(e);let o=g();return f(o.onSelectFile(t))}),s()()}}function Pt(r,d){if(r&1){let e=w();n(0,"button",16),c("click",function(){p(e);let t=g();return f(t.onSelectOtherFile())}),l(1,"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u0440\u0443\u0433\u043E\u0439 \u0444\u0430\u0439\u043B"),s(),n(2,"div",17),l(3,"\u0424\u0430\u0439\u043B:"),s(),l(4)}if(r&2){let e=g();u(4),q(" ",e.filename()," ")}}var bt=(()=>{class r{constructor(e,i){this.jstDialogService=e,this.framesService=i,this.filename=F(null),this.appPixi=new Ve,this.cutFrameContainer=new ue,this.fileCanvas=null,this.treeId=null,this.keyDown=t=>{t.code==="Space"&&(this.appPixi.useMove=!0,this.cutFrameContainer.useMove=!0,this.pixiContainerRef?.nativeElement&&(this.pixiContainerRef.nativeElement.style.cursor="move"))},this.keyUp=t=>{t.code==="Space"&&(this.appPixi.useMove=!1,this.cutFrameContainer.useMove=!1,this.pixiContainerRef?.nativeElement&&(this.pixiContainerRef.nativeElement.style.cursor="default"))}}ngAfterViewInit(){this.initializePixi(),window.addEventListener("keydown",this.keyDown),window.addEventListener("keyup",this.keyUp)}ngOnDestroy(){window.removeEventListener("keydown",this.keyDown),window.removeEventListener("keyup",this.keyUp),this.appPixi.destroy()}onZoom(e){this.appPixi.setZoom(e)}onSelectOtherFile(){y.uploadFile("image/*").subscribe(e=>this.setFile(e))}onSelectFile(e){let i=e[0];i.type.startsWith("image")&&this.setFile(i)}onApply(){this.cutFrameContainer.selectedRect&&this.jstDialogService.showModal("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0444\u0440\u0435\u0439\u043C\u0430",oe,{label:"\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0444\u0440\u0435\u0439\u043C\u0430",applyTitle:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u044B\u0440\u0435\u0437\u0430\u043D\u043D\u044B\u0439 \u0444\u0440\u0435\u0439\u043C"}).subscribe(e=>k(this,null,function*(){if(e!==void 0&&this.fileCanvas&&this.cutFrameContainer.selectedRect){let i=yield A.cropCanvasToFile(e,this.fileCanvas,this.cutFrameContainer.selectedRect);i&&(yield $(this.framesService.add(this.projectId,this.treeId,i))),this.dialogRef?.close(!0)}}))}onClose(){this.dialogRef?.close()}setData(e){this.projectId=e.projectId,this.treeId=e.treeId}setFile(e){return k(this,null,function*(){this.filename.set(e.name),this.fileCanvas=yield A.fileToCanvas(e),this.cutFrameContainer.setFileCanvas(this.fileCanvas)})}initializePixi(){this.appPixi.useScale=!0,this.appPixi.initialize(this.pixiContainerRef.nativeElement).then(()=>{this.appPixi.attachScaleContainer(this.cutFrameContainer)})}static{this.\u0275fac=function(i){return new(i||r)(h(O),h(B))}}static{this.\u0275cmp=b({type:r,selectors:[["app-cut-from-file-modal"]],viewQuery:function(i,t){if(i&1&&ve(Rt,5),i&2){let o;Fe(o=Se())&&(t.pixiContainerRef=o.first)}},decls:15,vars:6,consts:[["pixiContainer",""],[1,"jst-modal-container"],[1,"flex-auto","flex-col"],[1,"toolbar"],[1,"flex-auto","flex-col","p-relative"],[1,"pixi-container"],["class","drop-container",4,"ngIf"],[1,"jst-modal-footer-buttons"],[1,"flex-row-align-center"],[1,"flex-auto","flex-row-align-center"],["mat-raised-button","","color","primary",3,"click","disabled"],["mat-raised-button","","color","accent",3,"click"],[3,"zoomEvent"],[1,"flex-auto","text-right"],[1,"drop-container"],["accept","image/*",1,"select-file-container",3,"selectFilesEvent"],["mat-stroked-button","","color","primary",3,"click"],[1,"ml-10"]],template:function(i,t){if(i&1){let o=w();n(0,"div",1)(1,"div",2),_(2,Vt,4,0,"div",3),n(3,"div",4),C(4,"div",5,0),s(),_(6,Lt,2,0,"div",6),s(),n(7,"div",7)(8,"div",8)(9,"div",9),_(10,Pt,5,1),s(),n(11,"button",10),c("click",function(){return p(o),f(t.onApply())}),l(12,"\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C \u0444\u0440\u0435\u0439\u043C"),s(),n(13,"button",11),c("click",function(){return p(o),f(t.onClose())}),l(14,"\u0417\u0430\u043A\u0440\u044B\u0442\u044C"),s()()()()}i&2&&(u(2),M(t.filename()?2:-1),u(4),m("ngIf",!t.filename()),u(),z("jst-not-align",t.filename()),u(3),M(t.filename()?10:-1),u(),m("disabled",!t.filename()))},dependencies:[E,Q,D,T,V,mt,at,gt],styles:["[_nghost-%COMP%]{flex:auto;display:flex;flex-direction:column;width:80vw;height:80vh}.drop-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;position:absolute;inset:0;z-index:1}.select-file-container[_ngcontent-%COMP%]{width:60%;height:60%}.toolbar[_ngcontent-%COMP%]{display:flex;align-items:center;padding:3px 10px;border-bottom:1px solid rgb(229,229,229)}.pixi-container[_ngcontent-%COMP%]{position:absolute;inset:5px;z-index:0;overflow:hidden}"],changeDetection:0})}}return r})();var Mt=50,Nt=800,wt=(()=>{class r{constructor(e,i){this.cdr=e,this.jstDialogService=i,this.scrImage=null,this.scale=Mt,this.title=F("<\u043D\u0435 \u0437\u0430\u0434\u0430\u043D\u043E>"),this.tile=null,this.modalResult={}}onWheel(e){e.deltaY<0?this.scale=Math.min(this.scale+10,Nt):this.scale=Math.max(this.scale-10,1)}get imgTransform(){return`scale(${this.scale/Mt})`}get hasTile(){return!!this.tile}get hasChanged(){return Object.keys(this.modalResult).length>0}setData(e){e?.tile&&(this.tile=e.tile,this.tile.file&&this.setVieFile(this.tile.file),this.title.set(`${this.tile.name} (${this.tile.width}x${this.tile.height})`))}onChangeFile(){y.uploadFile("image/*").subscribe(e=>k(this,null,function*(){let i=yield y.getFileDimensions(e);this.setVieFile(e),this.modalResult.file=e,this.modalResult.width=i.width,this.modalResult.height=i.height}))}onChangeName(){this.jstDialogService.showModal("\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0444\u0440\u0435\u0439\u043C\u0430",oe,{label:"\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0444\u0440\u0435\u0439\u043C\u0430",applyTitle:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C",value:this.tile?.name}).subscribe(e=>{e!==void 0&&(this.title.set(`${e} (${this.tile?.width}x${this.tile?.height})`),this.modalResult.name=e)})}onApply(){this.hasChanged?this.dialogRef?.close(this.modalResult):this.dialogRef?.close()}onClose(){this.dialogRef?.close()}setVieFile(e){let i=new FileReader;i.onload=()=>{this.scrImage=i.result,this.cdr.detectChanges()},i.readAsDataURL(e)}static{this.\u0275fac=function(i){return new(i||r)(h(Ee),h(O))}}static{this.\u0275cmp=b({type:r,selectors:[["fc-view-frame-modal"]],hostBindings:function(i,t){i&1&&c("wheel",function(a){return t.onWheel(a)})},decls:21,vars:7,consts:[[1,"jst-modal-container"],[1,"title-container"],[1,"view-container"],[3,"src"],[1,"slider"],["min","1","max","800","step","1"],["matSliderThumb","",3,"ngModelChange","ngModel"],[1,"jst-modal-footer-buttons","jst-not-align"],[1,"flex-row"],[1,"flex-auto"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","primary",3,"click","disabled"],["mat-raised-button","","color","accent",3,"click"]],template:function(i,t){i&1&&(n(0,"div",0)(1,"div",1)(2,"strong"),l(3,"\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435:"),s(),l(4),s(),n(5,"div",2),C(6,"img",3),n(7,"div",4)(8,"mat-slider",5)(9,"input",6),we("ngModelChange",function(a){return Me(t.scale,a)||(t.scale=a),a}),s()()()(),n(10,"div",7)(11,"div",8)(12,"div",9)(13,"button",10),c("click",function(){return t.onChangeFile()}),l(14,"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0444\u0430\u0439\u043B"),s(),n(15,"button",11),c("click",function(){return t.onChangeName()}),l(16," \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 "),s()(),n(17,"button",11),c("click",function(){return t.onApply()}),l(18,"\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C"),s(),n(19,"button",12),c("click",function(){return t.onClose()}),l(20,"\u0417\u0430\u043A\u0440\u044B\u0442\u044C"),s()()()()),i&2&&(u(4),q(" ",t.title()," "),u(2),_e("transform",t.imgTransform),m("src",t.scrImage,ge),u(3),be("ngModel",t.scale),u(6),m("disabled",!t.hasTile),u(2),m("disabled",!t.hasChanged))},dependencies:[Ke,Qe,Ze,ne,Oe,ie,ze,D,T],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:80vw;height:80vh}.title-container[_ngcontent-%COMP%]{padding:10px}.view-container[_ngcontent-%COMP%]{position:relative;flex:auto;display:flex;flex-direction:column;align-items:center;justify-content:center;overflow:hidden}.slider[_ngcontent-%COMP%]{position:absolute;left:40px;right:20px;bottom:5px;z-index:1}.slider[_ngcontent-%COMP%]   .mat-mdc-slider[_ngcontent-%COMP%]{width:99%;margin:0}"],changeDetection:0})}}return r})();function Ot(r,d){if(r&1&&(n(0,"div",12),l(1),s()),r&2){let e=g(2);u(),R(e.loadingMessage())}}function Ht(r,d){if(r&1&&(n(0,"div",10),C(1,"mat-spinner"),_(2,Ot,2,1,"div",12),s()),r&2){let e=g();u(2),M(e.loadingMessage()?2:-1)}}function $t(r,d){if(r&1){let e=w();n(0,"smc-tiles-list",13),c("removeEvent",function(t){p(e);let o=g();return f(o.onRemove(t))})("downloadEvent",function(t){p(e);let o=g();return f(o.onDownload(t))})("clickEvent",function(t){p(e);let o=g();return f(o.onClickTile(t))})("dragEndEvent",function(t){p(e);let o=g();return f(o.onDragEndTile(t))}),s(),n(1,"div",14)(2,"span"),l(3," \u0412\u0441\u0435\u0433\u043E: "),n(4,"strong"),l(5),s()(),n(6,"span",15),l(7," \u041D\u0435\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0445: "),n(8,"strong"),l(9),s()(),n(10,"span",15),l(11," \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F: "),n(12,"strong"),l(13),s()()()}if(r&2){let e=g();m("visibleUsed",!0)("visibleDownload",!0)("visibleRemove",!0)("tiles",e.tiles()),u(5),R(e.tiles().length),u(4),R(e.countNotUsed()),u(4),R(e.countUsed())}}function zt(r,d){r&1&&(n(0,"div",11),l(1,"\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445"),s())}var yt="s-marker:fc-list:sortby",Et=(()=>{class r{constructor(e,i,t,o){this.jstDialogService=e,this.sessionStorageService=i,this.treeStore=t,this.framesService=o,this.selectedNode$=this.treeStore.selectedNode$,this.isLoading=F(!1),this.loadingMessage=F(null),this.tiles=F([]),this.countNotUsed=me(()=>this.tiles().filter(x=>!x.used).length),this.countUsed=me(()=>this.tiles().filter(x=>x.used).length),this.sortBy=F("none"),this.currentTreeId=null,this.destroyRef$=he(Ce);let a=i.get(yt);a&&this.sortBy.set(a)}ngOnInit(){this.treeStore.selectedNode$.pipe(L(this.destroyRef$)).subscribe(e=>{this.currentTreeId=e?.id??null,this.fetchTiles()})}onDownload(e){if(!e.file)return;let i=URL.createObjectURL(e.file),t=document.createElement("a");t.setAttribute("href",i),t.setAttribute("download",`${e.name}.png`),t.click()}onClickTile(e){this.jstDialogService.showModal("\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0442\u0430\u0439\u043B\u0430",wt,{tile:e}).subscribe(i=>{i&&this.framesService.update(e.id,i).subscribe(()=>{this.framesService.clearCacheById(e.id),this.fetchTiles()})})}onDragEndTile(e){this.tiles.update(i=>{let t=i.findIndex(o=>o.id===e);return t>=0&&i.splice(t,1),i})}onRemoveDuplicatesFrames(){this.jstDialogService.showConfirm("\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0434\u0443\u0431\u043B\u0438 \u0444\u0440\u0435\u0439\u043C\u044B?").subscribe(e=>{e&&this.removeDuplicatesFrames()})}onRemoveNotUsedFrames(){this.jstDialogService.showConfirm("\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u0441\u0435 \u043D\u0435\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0435 \u0444\u0440\u0435\u0439\u043C\u044B?").subscribe(e=>{if(e){let i=this.tiles().filter(t=>!t.used).map(t=>t.id);i.length>0&&(this.isLoading.set(!0),this.framesService.batchRemove(i).subscribe(()=>this.fetchTiles()))}})}setSortBy(e){this.sortBy.set(e),this.sessionStorageService.set(yt,e),this.sortFilesList()}onCutFromFile(){this.jstDialogService.showModal("\u0412\u044B\u0440\u0435\u0437\u0430\u0442\u044C \u0444\u0440\u0435\u0439\u043C \u0438\u0437 \u0444\u0430\u0439\u043B\u0430",bt,{projectId:this.projectId,treeId:this.currentTreeId},!0).subscribe(e=>{e&&this.fetchTiles()})}onCutFramesFromFile(){this.jstDialogService.showModal("\u041D\u0430\u0440\u0435\u0437\u0430\u0442\u044C \u0444\u0440\u0435\u0439\u043C\u044B \u0438\u0437 \u0444\u0430\u0439\u043B\u0430",xt,{projectId:this.projectId,treeId:this.currentTreeId},!0).subscribe(e=>{e&&this.fetchTiles()})}onAddFromFiles(){y.uploadFile("image/*",!0).subscribe(e=>{this.isLoading.set(!0),this.framesService.addFromFiles(this.projectId,this.currentTreeId,e).subscribe(()=>this.fetchTiles())})}onRemove(e){this.jstDialogService.showConfirm("\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u0444\u0440\u0435\u0439\u043C?").subscribe(i=>{i&&(this.isLoading.set(!0),this.framesService.remove(e.id).pipe(ae(()=>this.isLoading.set(!1))).subscribe(()=>{this.tiles.update(t=>{let o=t.findIndex(a=>a.id===e.id);return o>=0&&t.splice(o,1),t})}))})}fetchTiles(){this.isLoading.set(!0),this.framesService.fetchTiles(this.projectId,this.currentTreeId).pipe(L(this.destroyRef$),ae(()=>this.isLoading.set(!1))).subscribe(e=>{this.tiles.set(e)})}sortFilesList(){switch(this.sortBy()){case"used":this.tiles.update(e=>e.sort((i,t)=>Number(t.used)-Number(i.used)));break;case"not-used":this.tiles.update(e=>e.sort((i,t)=>Number(i.used)-Number(t.used)));break}}removeDuplicatesFrames(){this.isLoading.set(!0),this.loadingMessage.set("\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0434\u0443\u0431\u043B\u0435\u0439 \u0444\u0440\u0435\u0439\u043C\u043E\u0432..."),this.framesService.removeDuplicatesTiles(this.tiles(),e=>this.loadingMessage.set(e)).subscribe(()=>{this.loadingMessage.set(null),this.fetchTiles()})}static{this.\u0275fac=function(i){return new(i||r)(h(O),h(Ae),h(ee),h(B))}}static{this.\u0275cmp=b({type:r,selectors:[["fc-frames-list"]],inputs:{projectId:"projectId"},decls:38,vars:12,consts:[["settingsMenu","matMenu"],[1,"flex-row-align-center","border-bottom"],["mat-button","","color","primary",1,"ml-10",3,"click"],[1,"ml-10","v-divider"],["mat-button","","color","primary",1,"ml-10","mat-button-with-icon",3,"matMenuTriggerFor"],[1,"flex-row-align-center"],[1,"tree-title"],["mat-menu-item","",3,"click"],["mat-menu-item","",3,"click","disabled"],[1,"text-danger"],[1,"loading-container"],[1,"empty-message"],[1,"loading-container__message"],[3,"removeEvent","downloadEvent","clickEvent","dragEndEvent","visibleUsed","visibleDownload","visibleRemove","tiles"],[1,"statusbar"],[1,"ml-10"]],template:function(i,t){if(i&1){let o=w();n(0,"div",1)(1,"button",2),c("click",function(){return p(o),f(t.onAddFromFiles())}),l(2,"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0444\u0440\u0435\u0439\u043C \u0438\u0437 \u0444\u0430\u0439\u043B\u0430"),s(),C(3,"div",3),n(4,"button",2),c("click",function(){return p(o),f(t.onCutFramesFromFile())}),l(5,"\u041D\u0430\u0440\u0435\u0437\u0430\u0442\u044C \u0444\u0440\u0435\u0439\u043C\u044B \u0438\u0437 \u0444\u0430\u0439\u043B\u0430"),s(),C(6,"div",3),n(7,"button",2),c("click",function(){return p(o),f(t.onCutFromFile())}),l(8,"\u0412\u044B\u0440\u0435\u0437\u0430\u0442\u044C \u043E\u0434\u0438\u043D \u0444\u0440\u0435\u0439\u043C \u0438\u0437 \u0444\u0430\u0439\u043B\u0430"),s(),C(9,"div",3),n(10,"button",4)(11,"div",5)(12,"span"),l(13,"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"),s(),n(14,"mat-icon"),l(15,"arrow_drop_down"),s()()(),n(16,"div",6)(17,"span"),l(18),U(19,"async"),s()(),n(20,"mat-menu",null,0)(22,"button",7),c("click",function(){return p(o),f(t.setSortBy("used"))}),n(23,"span"),l(24,"\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0441\u043F\u0435\u0440\u0432\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0435 \u0444\u0440\u0435\u0439\u043C\u044B"),s()(),n(25,"button",7),c("click",function(){return p(o),f(t.setSortBy("not-used"))}),n(26,"span"),l(27,"\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0441\u043F\u0435\u0440\u0432\u0430 \u043D\u0435\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0435 \u0444\u0440\u0435\u0439\u043C\u044B"),s()(),C(28,"mat-divider"),n(29,"button",8),c("click",function(){return p(o),f(t.onRemoveNotUsedFrames())}),n(30,"span",9),l(31,"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043D\u0435\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0435 \u0444\u0440\u0435\u0439\u043C\u044B"),s()(),n(32,"button",8),c("click",function(){return p(o),f(t.onRemoveDuplicatesFrames())}),n(33,"span",9),l(34,"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0434\u0443\u0431\u043B\u0438 \u0444\u0440\u0435\u0439\u043C\u043E\u0432"),s()()()(),_(35,Ht,3,1,"div",10)(36,$t,14,7)(37,zt,2,0,"div",11)}if(i&2){let o,a=xe(21);u(10),m("matMenuTriggerFor",a),u(8),R((o=(o=J(19,10,t.selectedNode$))==null?null:o.name)!==null&&o!==void 0?o:"\u041A\u043E\u0440\u0435\u043D\u044C \u0434\u0435\u0440\u0435\u0432\u0430"),u(5),z("text-bold",t.sortBy()==="used"),u(3),z("text-bold",t.sortBy()==="not-used"),u(3),m("disabled",t.countNotUsed()===0),u(3),m("disabled",t.tiles().length===0),u(3),M(t.isLoading()?35:-1),u(),M(t.tiles().length>0?36:37)}},dependencies:[E,Z,D,T,V,K,N,P,qe,Ye,We,Xe,dt,ct,_t],styles:["[_nghost-%COMP%]{position:relative;flex:auto;display:flex;flex-direction:column}.tree-title[_ngcontent-%COMP%]{flex:auto;text-align:right;padding-right:10px}.statusbar[_ngcontent-%COMP%]{font-size:12px;padding:5px 10px;border-top:1px solid rgb(229,229,229)}"],changeDetection:0})}}return r})();function Ut(r,d){r&1&&(n(0,"div",0),C(1,"mat-spinner"),s())}function Jt(r,d){if(r&1){let e=w();C(0,"smc-header",1),n(1,"div",2)(2,"div",3)(3,"smc-tree",4),c("dropToNodeEvent",function(t){p(e);let o=g(2);return f(o.onFrameToTreeNode(t))}),s()(),n(4,"div",5),C(5,"fc-frames-list",6),s()()}if(r&2){let e=d,i=g(2);m("project",e)("currentModule",i.currentModule),u(3),m("projectId",e.id),u(2),m("projectId",e.id)}}function Gt(r,d){r&1&&C(0,"smc-page-not-found")}function Wt(r,d){if(r&1&&(_(0,Jt,6,4),U(1,"async"),_(2,Gt,1,0,"smc-page-not-found")),r&2){let e,i=g();M((e=J(1,1,i.project$))?0:2,e)}}var hn=(()=>{class r{constructor(e,i,t,o,a,x){this.titleService=e,this.activatedRoute=i,this.projectStore=t,this.treeService=o,this.framesTreeDBService=a,this.framesService=x,this.currentModule=ft,this.isInitializing=this.projectStore.isInitializing$,this.project$=this.projectStore.project$,this.activatedRoute.paramMap.pipe(L()).subscribe(S=>{this.projectStore.initialize(S.get("pid"))}),this.project$.pipe(L()).subscribe(S=>{S&&this.titleService.setTitle(`${this.currentModule.name} | ${S.name??""} | ${pt}`)}),this.treeService.setBaseService(this.framesTreeDBService)}onFrameToTreeNode(e){this.framesService.update(e.id,{treeId:e.treeId}).subscribe()}static{this.\u0275fac=function(i){return new(i||r)(h(Te),h(Be),h(Ne),h(re),h(Pe),h(B))}}static{this.\u0275cmp=b({type:r,selectors:[["fc-home"]],features:[ye([re,ee])],decls:3,vars:3,consts:[[1,"flex-auto","flex-row-centered"],[3,"project","currentModule"],[1,"flex-auto","flex-row"],[1,"flex-col","w-350","border-right"],["treeStorageKey","fc-tree-selected","askRemoveTree","\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u0443 \u0432\u0435\u0442\u043A\u0443 \u0438 \u0435\u0435 \u043F\u043E\u0442\u043E\u043C\u043A\u043E\u0432?<br>\u041F\u0440\u0438 \u044D\u0442\u043E\u043C \u0443\u0434\u0430\u043B\u044F\u0442\u0441\u044F \u0432\u0441\u0435 \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u043C\u0438 \u0441 \u043D\u0438\u043C\u0438 \u0444\u0440\u0435\u0439\u043C\u044B",3,"dropToNodeEvent","projectId"],[1,"flex-col","flex-auto"],[3,"projectId"]],template:function(i,t){i&1&&(_(0,Ut,2,0,"div",0),U(1,"async"),_(2,Wt,3,3)),i&2&&M(J(1,1,t.isInitializing)?0:2)},dependencies:[E,Z,N,P,ht,Ct,vt,Et],styles:["[_nghost-%COMP%]{flex:auto;display:flex;flex-direction:column}"],changeDetection:0})}}return r})();export{hn as FCHomeComponent};
