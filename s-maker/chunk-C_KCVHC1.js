import {j}from'./chunk-Dppgbxmh.js';import {a5 as cT,am as q,a7 as Yt,b6 as pee,d,ac as Co,_ as _l,c as ct,U,D as Dn,p as pu,a9 as bme,A as Ae,Q as v,a1 as j$1,S as A,V as _,aR as O1,R,aD as sr,a3 as T,a2 as g,ao as z,aS as hF,N,aE as ar,aa as Ii,ab as ti,d8 as Xn,bK as It,d9 as du,a8 as Ce,bk as Q,bv as V,ae as Ne,bj as y,bU as ei,bo as he,bp as pe,bq as ne$1,br as te$1,di as np,bs as Te,bV as Ct,cX as Ke$1,ce as Y,ct as X,by as G,cz as Be,bX as ee$1,bb as F,cp as Ze$1,dd as $8,dj as Ie,bO as tt,cS as br,dk as gu,cj as nt,aG as Re,aH as se,bz as Pt,bx as le,bn as Je$1,d7 as fn$1,bB as Ve,cA as xe,cx as rt,cY as Bn,bu as dn$1,bP as ht,cs as pn$1,d0 as Dt,dl as at,dm as wt,bt as sn$1,df as _n$1,ai as it,ah as w,b3 as pF,r as E,dn as nn,b4 as on$1,al as Qe,bW as cn$1,aj as de,ak as fe}from'./main-U6NTPQWP.js';var ee=new y("CdkAccordion"),We=(()=>{class t{_stateChanges=new F;_openCloseAllActions=new F;id=d(Ze$1).getId("cdk-accordion-");multi=false;openAll(){this.multi&&this._openCloseAllActions.next(true);}closeAll(){this._openCloseAllActions.next(false);}ngOnChanges(e){this._stateChanges.next(e);}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete();}static \u0275fac=function(n){return new(n||t)};static \u0275dir=Q({type:t,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:[2,"multi","multi",V]},exportAs:["cdkAccordion"],features:[Ne([{provide:ee,useExisting:t}]),nt]})}return t})(),Ze=(()=>{class t{accordion=d(ee,{optional:true,skipSelf:true});_changeDetectorRef=d(Ve);_expansionDispatcher=d($8);_openCloseAllSubscription=xe.EMPTY;closed=new ee$1;opened=new ee$1;destroyed=new ee$1;expandedChange=new ee$1;id=d(Ze$1).getId("cdk-accordion-child-");get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let n=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,n);}else this.closed.emit();this._changeDetectorRef.markForCheck();}}_expanded=false;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e);}_disabled=E(false);_removeUniqueSelectionListener=()=>{};ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,n)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===n&&this.id!==e&&(this.expanded=false);}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions());}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe();}toggle(){this.disabled||(this.expanded=!this.expanded);}close(){this.disabled||(this.expanded=false);}open(){this.disabled||(this.expanded=true);}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e);})}static \u0275fac=function(n){return new(n||t)};static \u0275dir=Q({type:t,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",V],disabled:[2,"disabled","disabled",V]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[Ne([{provide:ee,useValue:void 0}])]})}return t})(),Ke=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ne$1({type:t});static \u0275inj=te$1({})}return t})();var tn=["body"],an=["bodyWrapper"],on=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],rn=["mat-expansion-panel-header","*","mat-action-row"];function sn(t,o){}var ln=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],dn=["mat-panel-title","mat-panel-description","*"];function pn(t,o){t&1&&(at(0,"span",1),nn(),at(1,"svg",2),on$1(2,"path",3),wt()());}var ne=new y("MAT_ACCORDION"),Xe=new y("MAT_EXPANSION_PANEL"),cn=(()=>{class t{_template=d(cn$1);_expansionPanel=d(Xe,{optional:true});static \u0275fac=function(n){return new(n||t)};static \u0275dir=Q({type:t,selectors:[["ng-template","matExpansionPanelContent",""]]})}return t})(),Ge=new y("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),M=(()=>{class t extends Ze{_viewContainerRef=d(Ct);_animationsDisabled=Ke$1();_document=d(Y);_ngZone=d(X);_elementRef=d(G);_renderer=d(Be);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e;}_hideToggle=false;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e;}_togglePosition;afterExpand=new ee$1;afterCollapse=new ee$1;_inputChanges=new F;accordion=d(ne,{optional:true,skipSelf:true});_lazyContent;_body;_bodyWrapper;_portal;_headerId=d(Ze$1).getId("mat-expansion-panel-header-");constructor(){super();let e=d(Ge,{optional:true});this._expansionDispatcher=d($8),e&&(this.hideToggle=e.hideToggle);}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":false}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded;}close(){this.expanded=false;}open(){this.expanded=true;}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(It(null),Ie(()=>this.expanded&&!this._portal),tt(1)).subscribe(()=>{this._portal=new br(this._lazyContent._template,this._viewContainerRef);}),this._setupAnimationEvents();}ngOnChanges(e){this._inputChanges.next(e);}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete();}_containsFocus(){if(this._body){let e=this._document.activeElement,n=this._body.nativeElement;return e===n||n.contains(e)}return  false}_transitionEndListener=({target:e,propertyName:n})=>{e===this._bodyWrapper?.nativeElement&&n==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit();});};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this._transitionEndListener),e.classList.add("mat-expansion-panel-animations-enabled");},200);});}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=U({type:t,selectors:[["mat-expansion-panel"]],contentQueries:function(n,i,s){if(n&1&&ei(s,cn,5),n&2){let l;he(l=pe())&&(i._lazyContent=l.first);}},viewQuery:function(n,i){if(n&1&&Je$1(tn,5)(an,5),n&2){let s;he(s=pe())&&(i._body=s.first),he(s=pe())&&(i._bodyWrapper=s.first);}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(n,i){n&2&&z("mat-expanded",i.expanded)("mat-expansion-panel-spacing",i._hasSpacing());},inputs:{hideToggle:[2,"hideToggle","hideToggle",V],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[Ne([{provide:ne,useValue:void 0},{provide:Xe,useExisting:t}]),Ae,nt],ngContentSelectors:rn,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(n,i){n&1&&(Re(on),se(0),v(1,"div",2,0)(3,"div",3,1)(5,"div",4),se(6,1),Pt(7,sn,0,0,"ng-template",5),_(),se(8,2),_()()),n&2&&(g(),le("inert",i.expanded?null:""),g(2),T("id",i.id),le("aria-labelledby",i._headerId),g(4),T("cdkPortalOutlet",i._portal));},dependencies:[gu],styles:[`.mat-expansion-panel {
  box-sizing: content-box;
  display: block;
  margin: 0;
  overflow: hidden;
}
.mat-expansion-panel.mat-expansion-panel-animations-enabled {
  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel {
  position: relative;
  background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  color: var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));
  border-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-expansion-panel:not([class*=mat-elevation-z]) {
  box-shadow: var(--mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
  border-radius: 0;
}
.mat-accordion .mat-expansion-panel:first-of-type {
  border-top-right-radius: var(--mat-expansion-container-shape, 12px);
  border-top-left-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-accordion .mat-expansion-panel:last-of-type {
  border-bottom-right-radius: var(--mat-expansion-container-shape, 12px);
  border-bottom-left-radius: var(--mat-expansion-container-shape, 12px);
}
@media (forced-colors: active) {
  .mat-expansion-panel {
    outline: solid 1px;
  }
}

.mat-expansion-panel-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {
  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
  grid-template-rows: 1fr;
}
@supports not (grid-template-rows: 0fr) {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}
@media print {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}

.mat-expansion-panel-content {
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
  visibility: hidden;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {
  transition: visibility 190ms linear;
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {
  visibility: visible;
}
.mat-expansion-panel-content {
  font-family: var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));
  line-height: var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));
  letter-spacing: var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking));
}

.mat-expansion-panel-body {
  padding: 0 24px 16px;
}

.mat-expansion-panel-spacing {
  margin: 16px 0;
}
.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-top: 0;
}
.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-bottom: 0;
}

.mat-action-row {
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 8px 16px 24px;
  border-top-color: var(--mat-expansion-actions-divider-color, var(--mat-sys-outline));
}
.mat-action-row .mat-button-base,
.mat-action-row .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-action-row .mat-button-base,
[dir=rtl] .mat-action-row .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`],encapsulation:2})}return t})();var te=(()=>{class t{panel=d(M,{host:true});_element=d(G);_focusMonitor=d(fn$1);_changeDetectorRef=d(Ve);_parentChangeSubscription=xe.EMPTY;constructor(){d(rt).load(Bn);let e=this.panel,n=d(Ge,{optional:true}),i=d(new dn$1("tabindex"),{optional:true}),s=e.accordion?e.accordion._stateChanges.pipe(Ie(l=>!!(l.hideToggle||l.togglePosition))):ht;this.tabIndex=parseInt(i||"")||0,this._parentChangeSubscription=pn$1(e.opened,e.closed,s,e._inputChanges.pipe(Ie(l=>!!(l.hideToggle||l.disabled||l.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(Ie(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),n&&(this.expandedHeight=n.expandedHeight,this.collapsedHeight=n.collapsedHeight);}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle();}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return !this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:Dt(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,n){e?this._focusMonitor.focusVia(this._element,e,n):this._element.nativeElement.focus(n);}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this);});}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element);}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=U({type:t,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(n,i){n&1&&j$1("click",function(){return i._toggle()})("keydown",function(l){return i._keydown(l)}),n&2&&(le("id",i.panel._headerId)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i._getPanelId())("aria-expanded",i._isExpanded())("aria-disabled",i.panel.disabled),_n$1("height",i._getHeaderHeight()),z("mat-expanded",i._isExpanded())("mat-expansion-toggle-indicator-after",i._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",i._getTogglePosition()==="before"));},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:sn$1(e)]},ngContentSelectors:dn,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(n,i){n&1&&(Re(ln),at(0,"span",0),se(1),se(2,1),se(3,2),wt(),R(4,pn,3,0,"span",1)),n&2&&(z("mat-content-hide-toggle",!i._showToggle()),g(4),N(i._showToggle()?4:-1));},styles:[`.mat-expansion-panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-radius: inherit;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header::before {
  border-radius: inherit;
}
.mat-expansion-panel-header {
  height: var(--mat-expansion-header-collapsed-state-height, 48px);
  font-family: var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));
  font-size: var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));
  font-weight: var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));
  line-height: var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));
  letter-spacing: var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking));
}
.mat-expansion-panel-header.mat-expanded {
  height: var(--mat-expansion-header-expanded-state-height, 64px);
}
.mat-expansion-panel-header[aria-disabled=true] {
  color: var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-expansion-panel-header:not([aria-disabled=true]) {
  cursor: pointer;
}
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
  background: var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
    background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  }
}
.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {
  background: var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
.mat-expansion-panel-header._mat-animation-noopable {
  transition: none;
}
.mat-expansion-panel-header:focus, .mat-expansion-panel-header:hover {
  outline: none;
}
.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {
  background: inherit;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {
  flex-direction: row-reverse;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 16px 0 0;
}
[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 0 0 16px;
}

.mat-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
}
.mat-content.mat-content-hide-toggle {
  margin-right: 8px;
}
[dir=rtl] .mat-content.mat-content-hide-toggle {
  margin-right: 0;
  margin-left: 8px;
}
.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-left: 24px;
  margin-right: 0;
}
[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-right: 24px;
  margin-left: 0;
}

.mat-expansion-panel-header-title {
  color: var(--mat-expansion-header-text-color, var(--mat-sys-on-surface));
}

.mat-expansion-panel-header-title,
.mat-expansion-panel-header-description {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 16px;
  align-items: center;
}
[dir=rtl] .mat-expansion-panel-header-title,
[dir=rtl] .mat-expansion-panel-header-description {
  margin-right: 0;
  margin-left: 16px;
}
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {
  color: inherit;
}

.mat-expansion-panel-header-description {
  flex-grow: 2;
  color: var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant));
}

.mat-expansion-panel-animations-enabled .mat-expansion-indicator {
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {
  transform: rotate(180deg);
}
.mat-expansion-indicator::after {
  border-style: solid;
  border-width: 0 2px 2px 0;
  content: "";
  padding: 3px;
  transform: rotate(45deg);
  vertical-align: middle;
  color: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-legacy-header-indicator-display, none);
}
.mat-expansion-indicator svg {
  width: 24px;
  height: 24px;
  margin: 0 -8px;
  vertical-align: middle;
  fill: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-header-indicator-display, inline-block);
}

@media (forced-colors: active) {
  .mat-expansion-panel-content {
    border-top: 1px solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
`],encapsulation:2})}return t})();var Ye=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=Q({type:t,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]})}return t})(),I=(()=>{class t extends We{_keyManager;_ownHeaders=new Xn;_headers;hideToggle=false;displayMode="default";togglePosition="after";ngAfterContentInit(){this._headers.changes.pipe(It(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(n=>n.panel.accordion===this)),this._ownHeaders.notifyOnChanges();}),this._keyManager=new du(this._ownHeaders).withWrap().withHomeAndEnd();}_handleHeaderKeydown(e){this._keyManager.onKeydown(e);}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e);}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy();}static \u0275fac=(()=>{let e;return function(i){return (e||(e=Ce(t)))(i||t)}})();static \u0275dir=Q({type:t,selectors:[["mat-accordion"]],contentQueries:function(n,i,s){if(n&1&&ei(s,te,5),n&2){let l;he(l=pe())&&(i._headers=l);}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(n,i){n&2&&z("mat-accordion-multi",i.multi);},inputs:{hideToggle:[2,"hideToggle","hideToggle",V],displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[Ne([{provide:ne,useExisting:t}]),Ae]})}return t})(),$e=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ne$1({type:t});static \u0275inj=te$1({imports:[Ke,np,Te]})}return t})();var un=["scroll"],hn=(t,o)=>o.id;function gn(t,o){if(t&1){let e=it();v(0,"mat-expansion-panel",9)(1,"mat-expansion-panel-header")(2,"mat-panel-title"),A(3," \u041A\u043E\u0440\u0435\u043D\u044C \u0434\u0435\u0440\u0435\u0432\u0430 "),_()(),v(4,"smc-tiles-list",11),j$1("selectedEvent",function(i){de(e);let s=w();return fe(s.handleSelectTile(i))}),_()();}if(t&2){let e=w(),n=pF(12);T("expanded",e.hasSelectedTile(n)),g(4),T("withBlackout",false)("scrolling",false)("backgroundIcon",null)("tiles",n)("useCheckbox",true)("useCheckboxMulti",e.multiple());}}function xn(t,o){if(t&1){let e=it();v(0,"mat-expansion-panel",9)(1,"mat-expansion-panel-header")(2,"mat-panel-title"),A(3),_()(),v(4,"smc-tiles-list",11),j$1("selectedEvent",function(i){de(e);let s=w(2);return fe(s.handleSelectTile(i))}),_()();}if(t&2){let e=w().$implicit,n=pF(0),i=w();T("expanded",i.hasSelectedTile(n)),g(3),Qe(" ",e.name," "),g(),T("withBlackout",false)("scrolling",false)("backgroundIcon",null)("tiles",n)("useCheckbox",true)("useCheckboxMulti",i.multiple());}}function fn(t,o){if(t&1&&(O1(0),R(1,xn,5,8,"mat-expansion-panel",9)),t&2){let e=o.$implicit,n=hF(w().getTreeObjects(e.id));g(),N(n.length>0?1:-1);}}function _n(t,o){t&1&&(v(0,"div",10),A(1,"\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445"),_());}var Je=class t extends cT{panelTitle=q("\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0440\u0435\u0439\u043C");multiple=q(false);selectedTiles=q([]);scrollRef=Yt.required("scroll");accordion=Yt.required(I);accordionPanels=pee();framesTreeStore=d(Co);currentTiles=[];framesStore=d(_l);constructor(){super(),ct(()=>{let o=this.selectedTiles();this.framesStore.setSelectedByIds(o);});}getTreeObjects(o=null){return this.framesStore.getFilteredTiles(o)}handleSelectTile(o){this.multiple()?this.currentTiles=o:this.closePanel(o);}hasSelectedTile(o){return o.some(e=>e.selected)}handleApply(){this.closePanel(this.currentTiles);}handleClose(){this.closePanel(null);}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=U({type:t,selectors:[["ng-component"]],viewQuery:function(e,n){e&1&&Ii(n.scrollRef,un,5)(n.accordion,I,5)(n.accordionPanels,M,5),e&2&&ti(3);},inputs:{panelTitle:[1,"panelTitle"],multiple:[1,"multiple"],selectedTiles:[1,"selectedTiles"]},features:[Ae],decls:17,vars:9,consts:[["scroll",""],["cancelButtonTitle","\u0417\u0430\u043A\u0440\u044B\u0442\u044C",1,"flex-auto",3,"closeEvent","applyEvent","panelTitle","visibleFooter"],[1,"flex-row-align-center","border-bottom"],[1,"flex-row"],["matButton","",3,"click","disabled"],[1,"container"],[1,"scroll-container"],[1,"scroll"],["multi",""],[3,"expanded"],[1,"empty-message"],[3,"selectedEvent","withBlackout","scrolling","backgroundIcon","tiles","useCheckbox","useCheckboxMulti"]],template:function(e,n){if(e&1&&(v(0,"s-slide-panel-container",1),j$1("closeEvent",function(){return n.handleClose()})("applyEvent",function(){return n.handleApply()}),v(1,"div",2)(2,"div",3)(3,"button",4),j$1("click",function(){return n.accordion().openAll()}),A(4," \u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u0441\u0435 "),_(),v(5,"button",4),j$1("click",function(){return n.accordion().closeAll()}),A(6," \u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u0441\u0435 "),_()()(),v(7,"div",5)(8,"div",6)(9,"div",7,0)(11,"mat-accordion",8),O1(12),R(13,gn,5,7,"mat-expansion-panel",9),sr(14,fn,2,2,null,null,hn),_()()(),R(16,_n,2,0,"div",10),_()()),e&2){T("panelTitle",n.panelTitle())("visibleFooter",n.multiple()),g(3),T("disabled",n.accordionPanels().length===0),g(2),T("disabled",n.accordionPanels().length===0),g(3),z("display-none",n.accordionPanels().length===0),g(4);let i=hF(n.getTreeObjects());g(),N(i.length>0?13:-1),g(),ar(n.framesTreeStore.flatTree()),g(2),N(n.accordionPanels().length===0?16:-1);}},dependencies:[Dn,pu,$e,I,M,te,Ye,bme,j],styles:["[_nghost-%COMP%]{--mat-expansion-container-background-color: none;display:flex;flex:auto;flex-direction:column;width:60vw}[_nghost-%COMP%]     .mat-expansion-panel{margin-bottom:6px;border:1px solid #c6c6c6}.container[_ngcontent-%COMP%]{display:flex;flex:auto;flex-direction:column;padding:10px}"]})};export{$e as $,I,Je as J,M,Ye as Y,te as t};