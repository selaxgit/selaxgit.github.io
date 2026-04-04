import{a as J}from"./chunk-NLMGDOU2.js";import{Cb as z,Db as U,E as s,Eb as F,Gb as V,Hb as G,J as E,Jb as j,K as S,Kb as H,L as t,Pa as v,Qa as M,R,Ra as B,S as C,T,U as O,V as x,Z as P,aa as c,ea as A,ga as l,h as o,ha as k,ma as D,na as d,nd as g,ne as Z,oa as p,ob as X,od as b,rb as y,se as q,tb as w,ub as I,va as h,wa as f,wb as N,xa as u,ya as m,zb as L}from"./chunk-SBT7SQSD.js";import"./chunk-VB56BUGO.js";function cr(r,i){r&1&&m(0,"div",2)}var lr=new S("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var K=(()=>{class r{_elementRef=t(P);_ngZone=t(T);_changeDetectorRef=t(X);_renderer=t(A);_cleanupTransitionEnd;constructor(){let e=L(),n=t(lr,{optional:!0});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),n&&(n.color&&(this.color=this._defaultColor=n.color),this.mode=n.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=$(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=$(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new C;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(n){return new(n||r)};static \u0275cmp=l({type:r,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(n,a){n&2&&(D("aria-valuenow",a._isIndeterminate()?null:a.value)("mode",a.mode),B("mat-"+a.color),M("_mat-animation-noopable",a._isNoopAnimation)("mdc-linear-progress--animation-ready",!a._isNoopAnimation)("mdc-linear-progress--indeterminate",a._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",y],bufferValue:[2,"bufferValue","bufferValue",y],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(n,a){n&1&&(f(0,"div",0),m(1,"div",1),d(2,cr,1,0,"div",2),u(),f(3,"div",3),m(4,"span",4),u(),f(5,"div",5),m(6,"span",4),u()),n&2&&(c(),v("flex-basis",a._getBufferBarFlexBasis()),c(),p(a.mode==="buffer"?2:-1),c(),v("transform",a._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--mat-progress-bar-track-height, 4px);
  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2,changeDetection:0})}return r})();function $(r,i=0,e=100){return Math.max(i,Math.min(e,r))}var Q=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275mod=k({type:r});static \u0275inj=E({imports:[z]})}return r})();function pr(r,i){r&1&&h(0,"mat-progress-bar",0)}var _=class r{loadingState=x(!1);router=t(G);destroyRef=t(R);constructor(){this.router.events.pipe(N(this.destroyRef)).subscribe(i=>{i instanceof U?this.loadingState.set(!0):i instanceof F&&this.loadingState.set(!1)})}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=l({type:r,selectors:[["app-root"]],decls:2,vars:1,consts:[["mode","indeterminate"]],template:function(e,n){e&1&&(d(0,pr,1,0,"mat-progress-bar",0),h(1,"router-outlet")),e&2&&p(n.loadingState()?0:-1)},dependencies:[V,Q,K],styles:["[_nghost-%COMP%]{flex:auto;display:flex;flex-direction:column}mat-progress-bar[_ngcontent-%COMP%]{position:absolute}"],changeDetection:0})};var W=[{path:":pid/frames-collection",loadComponent:()=>import("./chunk-2H5H4CHW.js").then(r=>r.FCHomePagePage)}];var Y=[{path:":pid/landscape-generator",loadComponent:()=>import("./chunk-D5YOVMNN.js").then(r=>r.LGHomePage)}];var rr=[{path:"",loadComponent:()=>import("./chunk-R7VIOSF3.js").then(r=>r.ProjectsListPage)},{path:":pid",loadComponent:()=>import("./chunk-IVRQIO5U.js").then(r=>r.ProjectHomePage)}];var er=()=>{let r=t(q);return r.hasChanged()?t(b).showCustomConfirm("\u0422\u0435\u043A\u0443\u0449\u0430\u044F \u0441\u0446\u0435\u043D\u0430 \u043D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0430","\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0430",[{title:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u0446\u0435\u043D\u0443 \u0438 \u043F\u0435\u0440\u0435\u0439\u0442\u0438",color:"primary",value:1},{title:"\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0431\u0435\u0437 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F",color:"warn",value:2},{title:"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0435\u0440\u0435\u0445\u043E\u0434",color:"accent",value:3}],g.Vertical).pipe(s(e=>{switch(e){case 1:return r.saveScene().pipe(s(()=>(r.resetEditScene(),o(!0))));case 2:return r.resetEditScene(),o(!0);default:return o(!1)}})):(r.resetEditScene(),o(!0))};var nr=[{path:":pid/scene-builder/:id",canDeactivate:[er],loadComponent:()=>import("./chunk-S24MSMXL.js").then(r=>r.SBHomePage)}];var tr=()=>{let r=t(Z);return r.hasChanged()?t(b).showCustomConfirm("\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0441\u043F\u0440\u0430\u0439\u0442 \u043D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D","\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0430",[{title:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u043F\u0440\u0430\u0439\u0442 \u0438 \u043F\u0435\u0440\u0435\u0439\u0442\u0438",color:"primary",value:1},{title:"\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0431\u0435\u0437 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F",color:"warn",value:2},{title:"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0435\u0440\u0435\u0445\u043E\u0434",color:"accent",value:3}],g.Vertical).pipe(s(e=>{switch(e){case 1:return r.saveSprite().pipe(s(()=>(r.reset(),o(!0))));case 2:return r.reset(),o(!0);default:return o(!1)}})):(r.reset(),o(!0))};var ar=[{path:":pid/sprites-collection",loadComponent:()=>import("./chunk-D32MOPRR.js").then(r=>r.SCHomePagePage)},{path:":pid/sprites-collection/:id",canDeactivate:[tr],loadComponent:()=>import("./chunk-Z4ZQ5N3Y.js").then(r=>r.SCEditPage)}];var ir=[{path:":pid/tiles-grid-editor/:id",loadComponent:()=>import("./chunk-4LWD4RXJ.js").then(r=>r.TGEHomePage)}];var or=[...rr,...W,...ar,...Y,...ir,...nr,{path:"**",component:J}];var sr={providers:[O(),j(or),I(),H({dbParams:{dbVersion:1,dbName:"s-maker-db-v5",dbTables:["projects","frames-tree","frames","sprites-tree","sprites","tiles-grid","scenes"]}})]};w(_,sr).catch(r=>{r instanceof Error?console.error(r.message):console.error("An unknown error occurred")});
