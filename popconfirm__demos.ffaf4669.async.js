"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[8312],{455759:function(B,m,n){n.d(m,{Z:function(){return g}});var I=n(97857),d=n.n(I),r=n(805574),e=n.n(r),a=n(513769),h=n.n(a),f=n(642461),u=n.n(f),D=n(294184),O=n.n(D),_=n(427712),C=n(260869),$=n(518475),E=n(667294),N=n(106465),M=n(73287),U=n(344682),X=n(218283),z=n(586775),L=n(905303),G=n(479625),k=n(824504),F=n(667128),w=n(974638),q=n(9783),R=n.n(q),ln=n(141035),sn=function(i){var s,x,A=i.componentCls,H=i.iconCls,Z=i.antCls,W=i.zIndexPopup,K=i.colorText,S=i.colorWarning,b=i.marginXXS,y=i.marginXS,T=i.fontSize,Y=i.fontWeightStrong,Q=i.colorTextHeading;return R()({},A,(x={zIndex:W},R()(x,"&".concat(Z,"-popover"),{fontSize:T}),R()(x,"".concat(A,"-message"),(s={marginBottom:y,display:"flex",flexWrap:"nowrap",alignItems:"start"},R()(s,"> ".concat(A,"-message-icon ").concat(H),{color:S,fontSize:T,lineHeight:1,marginInlineEnd:y}),R()(s,"".concat(A,"-title"),{fontWeight:Y,color:Q,"&:only-child":{fontWeight:"normal"}}),R()(s,"".concat(A,"-description"),{marginTop:b,color:K}),s)),R()(x,"".concat(A,"-buttons"),{textAlign:"end",whiteSpace:"nowrap",button:{marginInlineStart:y}}),x))},nn=(0,ln.Z)("Popconfirm",function(l){return sn(l)},function(l){var i=l.zIndexPopupBase;return{zIndexPopup:i+60}}),P=n(785893),rn=["prefixCls","placement","className","style"],V=function(i){var s=i.prefixCls,x=i.okButtonProps,A=i.cancelButtonProps,H=i.title,Z=i.description,W=i.cancelText,K=i.okText,S=i.okType,b=S===void 0?"primary":S,y=i.icon,T=y===void 0?(0,P.jsx)(u(),{}):y,Y=i.showCancel,Q=Y===void 0?!0:Y,tn=i.close,hn=i.onConfirm,mn=i.onCancel,un=i.onPopupClick,en=E.useContext(M.E_),an=en.getPrefixCls,Pn=(0,k.Z)("Popconfirm",F.Z.Popconfirm),cn=e()(Pn,1),J=cn[0],vn=(0,z.Z)(H),gn=(0,z.Z)(Z);return(0,P.jsxs)("div",{className:"".concat(s,"-inner-content"),onClick:un,children:[(0,P.jsxs)("div",{className:"".concat(s,"-message"),children:[T&&(0,P.jsx)("span",{className:"".concat(s,"-message-icon"),children:T}),(0,P.jsxs)("div",{className:"".concat(s,"-message-text"),children:[vn&&(0,P.jsx)("div",{className:O()("".concat(s,"-title")),children:vn}),gn&&(0,P.jsx)("div",{className:"".concat(s,"-description"),children:gn})]})]}),(0,P.jsxs)("div",{className:"".concat(s,"-buttons"),children:[Q&&(0,P.jsx)(L.ZP,d()(d()({onClick:mn,size:"small"},A),{},{children:W!=null?W:J==null?void 0:J.cancelText})),(0,P.jsx)(X.Z,{buttonProps:d()(d()({size:"small"},(0,G.n)(b)),x),actionFn:hn,close:tn,prefixCls:an("btn"),quitOnNullishReturnValue:!0,emitEvent:!0,children:K!=null?K:J==null?void 0:J.okText})]})]})},dn=function(i){var s=i.prefixCls,x=i.placement,A=i.className,H=i.style,Z=h()(i,rn),W=E.useContext(M.E_),K=W.getPrefixCls,S=K("popconfirm",s),b=nn(S),y=e()(b,1),T=y[0];return T((0,P.jsx)(w.ZP,{placement:x,className:O()(S,A),style:H,content:(0,P.jsx)(V,d()({prefixCls:S},Z))}))},v=dn,t=["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"],c=void 0,o=E.forwardRef(function(l,i){var s=l.prefixCls,x=l.placement,A=x===void 0?"top":x,H=l.trigger,Z=H===void 0?"click":H,W=l.okType,K=W===void 0?"primary":W,S=l.icon,b=S===void 0?(0,P.jsx)(u(),{}):S,y=l.children,T=l.overlayClassName,Y=l.onOpenChange,Q=l.onVisibleChange,tn=h()(l,t),hn=E.useContext(M.E_),mn=hn.getPrefixCls,un=(0,C.default)(!1,{value:l.open,defaultValue:l.defaultOpen}),en=e()(un,2),an=en[0],Pn=en[1],cn=function(p,j){Pn(p,!0),Q==null||Q(p),Y==null||Y(p,j)},J=function(p){cn(!1,p)},vn=function(p){var j;return(j=l.onConfirm)===null||j===void 0?void 0:j.call(c,p)},gn=function(p){var j;cn(!1,p),(j=l.onCancel)===null||j===void 0||j.call(c,p)},xn=function(p){p.keyCode===_.Z.ESC&&an&&cn(!1,p)},En=function(p){var j=l.disabled,fn=j===void 0?!1:j;fn||cn(p)},Cn=mn("popconfirm",s),Mn=O()(Cn,T),Sn=nn(Cn),pn=e()(Sn,1),In=pn[0];return In((0,P.jsx)(U.Z,d()(d()({},(0,$.default)(tn,["title"])),{},{trigger:Z,placement:A,onOpenChange:En,open:an,ref:i,overlayClassName:Mn,content:(0,P.jsx)(V,d()(d()({okType:K,icon:b},l),{},{prefixCls:Cn,close:J,onConfirm:vn,onCancel:gn})),"data-popover-inject":!0,children:(0,N.Tm)(y,{onKeyDown:function(p){if(E.isValidElement(y)){var j,fn;y==null||(j=(fn=y.props).onKeyDown)===null||j===void 0||j.call(fn,p)}xn(p)}})})))});o._InternalPanelDoNotUseOrYouWillBeFired=v;var g=o},979331:function(B,m,n){n.d(m,{Z:function(){return dn}});var I=n(97857),d=n.n(I),r=n(9783),e=n.n(r),a=n(805574),h=n.n(a),f=n(513769),u=n.n(f),D=n(100628),O=n.n(D),_=n(294184),C=n.n(_),$=n(33413),E=n(667294),N=n(544695),M=n(189265),U=n(73287),X=n(147315),z=n(947170),L=n(510274),G=n(548073),k=n(141035),F=n(986943),w=function(t){var c,o,g,l,i,s=t.componentCls,x="".concat(s,"-inner");return e()({},s,e()({},"&".concat(s,"-small"),(i={minWidth:t.switchMinWidthSM,height:t.switchHeightSM,lineHeight:"".concat(t.switchHeightSM,"px")},e()(i,"".concat(s,"-inner"),(c={paddingInlineStart:t.switchInnerMarginMaxSM,paddingInlineEnd:t.switchInnerMarginMinSM},e()(c,"".concat(x,"-checked"),{marginInlineStart:"calc(-100% + ".concat(t.switchPinSizeSM+t.switchPadding*2,"px - ").concat(t.switchInnerMarginMaxSM*2,"px)"),marginInlineEnd:"calc(100% - ".concat(t.switchPinSizeSM+t.switchPadding*2,"px + ").concat(t.switchInnerMarginMaxSM*2,"px)")}),e()(c,"".concat(x,"-unchecked"),{marginTop:-t.switchHeightSM,marginInlineStart:0,marginInlineEnd:0}),c)),e()(i,"".concat(s,"-handle"),{width:t.switchPinSizeSM,height:t.switchPinSizeSM}),e()(i,"".concat(s,"-loading-icon"),{top:(t.switchPinSizeSM-t.switchLoadingIconSize)/2,fontSize:t.switchLoadingIconSize}),e()(i,"&".concat(s,"-checked"),(g={},e()(g,"".concat(s,"-inner"),(o={paddingInlineStart:t.switchInnerMarginMinSM,paddingInlineEnd:t.switchInnerMarginMaxSM},e()(o,"".concat(x,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),e()(o,"".concat(x,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(t.switchPinSizeSM+t.switchPadding*2,"px + ").concat(t.switchInnerMarginMaxSM*2,"px)"),marginInlineEnd:"calc(-100% + ".concat(t.switchPinSizeSM+t.switchPadding*2,"px - ").concat(t.switchInnerMarginMaxSM*2,"px)")}),o)),e()(g,"".concat(s,"-handle"),{insetInlineStart:"calc(100% - ".concat(t.switchPinSizeSM+t.switchPadding,"px)")}),g)),e()(i,"&:not(".concat(s,"-disabled):active"),(l={},e()(l,"&:not(".concat(s,"-checked) ").concat(x),e()({},"".concat(x,"-unchecked"),{marginInlineStart:t.marginXXS/2,marginInlineEnd:-t.marginXXS/2})),e()(l,"&".concat(s,"-checked ").concat(x),e()({},"".concat(x,"-checked"),{marginInlineStart:-t.marginXXS/2,marginInlineEnd:t.marginXXS/2})),l)),i)))},q=function(t){var c,o=t.componentCls;return e()({},o,(c={},e()(c,"".concat(o,"-loading-icon").concat(t.iconCls),{position:"relative",top:(t.switchPinSize-t.fontSize)/2,color:t.switchLoadingIconColor,verticalAlign:"top"}),e()(c,"&".concat(o,"-checked ").concat(o,"-loading-icon"),{color:t.switchColor}),c))},R=function(t){var c,o,g=t.componentCls,l=t.motion,i="".concat(g,"-handle");return e()({},g,(o={},e()(o,i,{position:"absolute",top:t.switchPadding,insetInlineStart:t.switchPadding,width:t.switchPinSize,height:t.switchPinSize,transition:"all ".concat(t.switchDuration," ease-in-out"),"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:t.colorWhite,borderRadius:t.switchPinSize/2,boxShadow:t.switchHandleShadow,transition:"all ".concat(t.switchDuration," ease-in-out"),content:'""'}}),e()(o,"&".concat(g,"-checked ").concat(i),{insetInlineStart:"calc(100% - ".concat(t.switchPinSize+t.switchPadding,"px)")}),e()(o,"&:not(".concat(g,"-disabled):active"),l?(c={},e()(c,"".concat(i,"::before"),{insetInlineEnd:t.switchHandleActiveInset,insetInlineStart:0}),e()(c,"&".concat(g,"-checked ").concat(i,"::before"),{insetInlineEnd:0,insetInlineStart:t.switchHandleActiveInset}),c):{}),o))},ln=function(t){var c,o,g,l,i=t.componentCls,s="".concat(i,"-inner");return e()({},i,(l={},e()(l,s,(c={display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:t.switchInnerMarginMax,paddingInlineEnd:t.switchInnerMarginMin,transition:"padding-inline-start ".concat(t.switchDuration," ease-in-out, padding-inline-end ").concat(t.switchDuration," ease-in-out")},e()(c,"".concat(s,"-checked, ").concat(s,"-unchecked"),{display:"block",color:t.colorTextLightSolid,fontSize:t.fontSizeSM,transition:"margin-inline-start ".concat(t.switchDuration," ease-in-out, margin-inline-end ").concat(t.switchDuration," ease-in-out"),pointerEvents:"none"}),e()(c,"".concat(s,"-checked"),{marginInlineStart:"calc(-100% + ".concat(t.switchPinSize+t.switchPadding*2,"px - ").concat(t.switchInnerMarginMax*2,"px)"),marginInlineEnd:"calc(100% - ".concat(t.switchPinSize+t.switchPadding*2,"px + ").concat(t.switchInnerMarginMax*2,"px)")}),e()(c,"".concat(s,"-unchecked"),{marginTop:-t.switchHeight,marginInlineStart:0,marginInlineEnd:0}),c)),e()(l,"&".concat(i,"-checked ").concat(s),(o={paddingInlineStart:t.switchInnerMarginMin,paddingInlineEnd:t.switchInnerMarginMax},e()(o,"".concat(s,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),e()(o,"".concat(s,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(t.switchPinSize+t.switchPadding*2,"px + ").concat(t.switchInnerMarginMax*2,"px)"),marginInlineEnd:"calc(-100% + ".concat(t.switchPinSize+t.switchPadding*2,"px - ").concat(t.switchInnerMarginMax*2,"px)")}),o)),e()(l,"&:not(".concat(i,"-disabled):active"),(g={},e()(g,"&:not(".concat(i,"-checked) ").concat(s),e()({},"".concat(s,"-unchecked"),{marginInlineStart:t.switchPadding*2,marginInlineEnd:-t.switchPadding*2})),e()(g,"&".concat(i,"-checked ").concat(s),e()({},"".concat(s,"-checked"),{marginInlineStart:-t.switchPadding*2,marginInlineEnd:t.switchPadding*2})),g)),l))},sn=function(t){var c,o=t.componentCls;return e()({},o,d()(d()(d()({},(0,G.Wf)(t)),{},e()({position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:t.switchMinWidth,height:t.switchHeight,lineHeight:"".concat(t.switchHeight,"px"),verticalAlign:"middle",background:t.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:"all ".concat(t.motionDurationMid),userSelect:"none"},"&:hover:not(".concat(o,"-disabled)"),{background:t.colorTextTertiary}),(0,G.Qy)(t)),{},(c={},e()(c,"&".concat(o,"-checked"),e()({background:t.switchColor},"&:hover:not(".concat(o,"-disabled)"),{background:t.colorPrimaryHover})),e()(c,"&".concat(o,"-loading, &").concat(o,"-disabled"),{cursor:"not-allowed",opacity:t.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}}),e()(c,"&".concat(o,"-rtl"),{direction:"rtl"}),c)))},nn=(0,k.Z)("Switch",function(v){var t=v.fontSize*v.lineHeight,c=v.controlHeight/2,o=2,g=t-o*2,l=c-o*2,i=(0,F.TS)(v,{switchMinWidth:g*2+o*4,switchHeight:t,switchDuration:v.motionDurationMid,switchColor:v.colorPrimary,switchDisabledOpacity:v.opacityLoading,switchInnerMarginMin:g/2,switchInnerMarginMax:g+o+o*2,switchPadding:o,switchPinSize:g,switchBg:v.colorBgContainer,switchMinWidthSM:l*2+o*2,switchHeightSM:c,switchInnerMarginMinSM:l/2,switchInnerMarginMaxSM:l+o+o*2,switchPinSizeSM:l,switchHandleShadow:"0 2px 4px 0 ".concat(new L.C("#00230b").setAlpha(.2).toRgbString()),switchLoadingIconSize:v.fontSizeIcon*.75,switchLoadingIconColor:"rgba(0, 0, 0, ".concat(v.opacityLoading,")"),switchHandleActiveInset:"-30%"});return[sn(i),ln(i),R(i),q(i),w(i)]}),P=n(785893),rn=["prefixCls","size","disabled","loading","className","rootClassName","style"],V=E.forwardRef(function(v,t){var c,o=v.prefixCls,g=v.size,l=v.disabled,i=v.loading,s=v.className,x=v.rootClassName,A=v.style,H=u()(v,rn);(0,N.ZP)("checked"in v||!("value"in v),"Switch","`value` is not a valid prop, do you mean `checked`?");var Z=E.useContext(U.E_),W=Z.getPrefixCls,K=Z.direction,S=Z.switch,b=E.useContext(X.Z),y=(l!=null?l:b)||i,T=W("switch",o),Y=(0,P.jsx)("div",{className:"".concat(T,"-handle"),children:i&&(0,P.jsx)(O(),{className:"".concat(T,"-loading-icon")})}),Q=nn(T),tn=h()(Q,2),hn=tn[0],mn=tn[1],un=(0,z.Z)(g),en=C()(S==null?void 0:S.className,(c={},e()(c,"".concat(T,"-small"),un==="small"),e()(c,"".concat(T,"-loading"),i),e()(c,"".concat(T,"-rtl"),K==="rtl"),c),s,x,mn),an=d()(d()({},S==null?void 0:S.style),A);return hn((0,P.jsx)(M.Z,{component:"Switch",children:(0,P.jsx)($.Z,d()(d()({},H),{},{prefixCls:T,className:en,style:an,disabled:y,ref:t,loadingIcon:Y}))}))});V.__ANT_SWITCH=!0;var dn=V},351713:function(B,m,n){n.r(m);var I=n(805574),d=n.n(I),r=n(667294),e=n(455759),a=n(905303),h=n(785893),f=function(){var D=(0,r.useState)(!1),O=d()(D,2),_=O[0],C=O[1],$=(0,r.useState)(!1),E=d()($,2),N=E[0],M=E[1],U=function(){C(!0)},X=function(){M(!0),setTimeout(function(){C(!1),M(!1)},2e3)},z=function(){console.log("Clicked cancel button"),C(!1)};return(0,h.jsx)(e.Z,{title:"Title",description:"Open Popconfirm with async logic",open:_,onConfirm:X,okButtonProps:{loading:N},onCancel:z,children:(0,h.jsx)(a.ZP,{type:"primary",onClick:U,children:"Open Popconfirm with async logic"})})};m.default=f},7280:function(B,m,n){n.r(m);var I=n(667294),d=n(373656),r=n(455759),e=n(905303),a=n(785893),h=function(O){console.log(O),d.ZP.success("Click on Yes")},f=function(O){console.log(O),d.ZP.error("Click on No")},u=function(){return(0,a.jsx)(r.Z,{title:"Delete the task",description:"Are you sure to delete this task?",onConfirm:h,onCancel:f,okText:"Yes",cancelText:"No",children:(0,a.jsx)(e.ZP,{danger:!0,children:"Delete"})})};m.default=u},126005:function(B,m,n){n.r(m);var I=n(805574),d=n.n(I),r=n(667294),e=n(373656),a=n(455759),h=n(905303),f=n(979331),u=n(785893),D=function(){var _=(0,r.useState)(!1),C=d()(_,2),$=C[0],E=C[1],N=(0,r.useState)(!0),M=d()(N,2),U=M[0],X=M[1],z=function(w){X(w)},L=function(){E(!1),e.ZP.success("Next step.")},G=function(){E(!1),e.ZP.error("Click on cancel.")},k=function(w){if(!w){E(w);return}console.log(U),U?L():E(w)};return(0,u.jsxs)("div",{children:[(0,u.jsx)(a.Z,{title:"Delete the task",description:"Are you sure to delete this task?",open:$,onOpenChange:k,onConfirm:L,onCancel:G,okText:"Yes",cancelText:"No",children:(0,u.jsx)(h.ZP,{danger:!0,children:"Delete a task"})}),(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),"Whether directly execute\uFF1A",(0,u.jsx)(f.Z,{defaultChecked:!0,onChange:z})]})};m.default=D},645327:function(B,m,n){n.r(m);var I=n(825035),d=n(667294),r=n(455759),e=n(905303),a=n(785893),h=function(){return(0,a.jsx)(r.Z,{title:"Delete the task",description:"Are you sure to delete this task?",icon:(0,a.jsx)(I.Z,{style:{color:"red"}}),children:(0,a.jsx)(e.ZP,{danger:!0,children:"Delete"})})};m.default=h},526587:function(B,m,n){n.r(m);var I=n(667294),d=n(455759),r=n(905303),e=n(785893),a=function(){return(0,e.jsx)(d.Z,{title:"Delete the task",description:"Are you sure to delete this task?",okText:"Yes",cancelText:"No",children:(0,e.jsx)(r.ZP,{danger:!0,children:"Delete"})})};m.default=a},890255:function(B,m,n){n.r(m);var I=n(667294),d=n(373656),r=n(455759),e=n(905303),a=n(785893),h="Are you sure to delete this task?",f="Delete the task",u=function(){d.ZP.info("Clicked on Yes.")},D=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{style:{marginLeft:70,whiteSpace:"nowrap"},children:[(0,a.jsx)(r.Z,{placement:"topLeft",title:h,description:f,onConfirm:u,okText:"Yes",cancelText:"No",children:(0,a.jsx)(e.ZP,{children:"TL"})}),(0,a.jsx)(r.Z,{placement:"top",title:h,description:f,onConfirm:u,okText:"Yes",cancelText:"No",children:(0,a.jsx)(e.ZP,{children:"Top"})}),(0,a.jsx)(r.Z,{placement:"topRight",title:h,description:f,onConfirm:u,okText:"Yes",cancelText:"No",children:(0,a.jsx)(e.ZP,{children:"TR"})})]}),(0,a.jsxs)("div",{style:{width:70,float:"left"},children:[(0,a.jsx)(r.Z,{placement:"leftTop",title:h,description:f,onConfirm:u,okText:"Yes",cancelText:"No",children:(0,a.jsx)(e.ZP,{children:"LT"})}),(0,a.jsx)(r.Z,{placement:"left",title:h,description:f,onConfirm:u,okText:"Yes",cancelText:"No",children:(0,a.jsx)(e.ZP,{children:"Left"})}),(0,a.jsx)(r.Z,{placement:"leftBottom",title:h,description:f,onConfirm:u,okText:"Yes",cancelText:"No",children:(0,a.jsx)(e.ZP,{children:"LB"})})]}),(0,a.jsxs)("div",{style:{width:70,marginLeft:304},children:[(0,a.jsx)(r.Z,{placement:"rightTop",title:h,description:f,onConfirm:u,okText:"Yes",cancelText:"No",children:(0,a.jsx)(e.ZP,{children:"RT"})}),(0,a.jsx)(r.Z,{placement:"right",title:h,description:f,onConfirm:u,okText:"Yes",cancelText:"No",children:(0,a.jsx)(e.ZP,{children:"Right"})}),(0,a.jsx)(r.Z,{placement:"rightBottom",title:h,description:f,onConfirm:u,okText:"Yes",cancelText:"No",children:(0,a.jsx)(e.ZP,{children:"RB"})})]}),(0,a.jsxs)("div",{style:{marginLeft:70,clear:"both",whiteSpace:"nowrap"},children:[(0,a.jsx)(r.Z,{placement:"bottomLeft",title:h,description:f,onConfirm:u,okText:"Yes",cancelText:"No",children:(0,a.jsx)(e.ZP,{children:"BL"})}),(0,a.jsx)(r.Z,{placement:"bottom",title:h,description:f,onConfirm:u,okText:"Yes",cancelText:"No",children:(0,a.jsx)(e.ZP,{children:"Bottom"})}),(0,a.jsx)(r.Z,{placement:"bottomRight",title:h,description:f,onConfirm:u,okText:"Yes",cancelText:"No",children:(0,a.jsx)(e.ZP,{children:"BR"})})]})]})};m.default=D},22053:function(B,m,n){n.r(m);var I=n(667294),d=n(455759),r=n(905303),e=n(785893),a=function(){var f=function(){return new Promise(function(D){setTimeout(function(){return D(null)},3e3)})};return(0,e.jsx)(d.Z,{title:"Title",description:"Open Popconfirm with Promise",onConfirm:f,onOpenChange:function(){return console.log("open change")},children:(0,e.jsx)(r.ZP,{type:"primary",children:"Open Popconfirm with Promise"})})};m.default=a},935642:function(B,m,n){n.r(m);var I=n(667294),d=n(455759),r=n(785893),e=d.Z._InternalPanelDoNotUseOrYouWillBeFired,a=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e,{title:"Are you OK?",description:"Does this look good?"}),(0,r.jsx)(e,{title:"Are you OK?",description:"Does this look good?",placement:"bottomRight",style:{width:250}}),(0,r.jsx)(e,{icon:null,title:"Are you OK?"}),(0,r.jsx)(e,{icon:null,title:"Are you OK?",description:"Does this look good?"})]})};m.default=a},913019:function(B,m,n){n.r(m);var I=n(667294),d=n(455759),r=n(879348),e=n(785893),a=d.Z._InternalPanelDoNotUseOrYouWillBeFired,h=function(){return(0,e.jsxs)(r.ZP,{theme:{token:{wireframe:!0}},children:[(0,e.jsx)(a,{title:"Are you OK?"}),(0,e.jsx)(a,{title:"Are you OK?",placement:"bottomRight",style:{width:250}})]})};m.default=h},33413:function(B,m,n){var I=n(487462),d=n(204942),r=n(297685),e=n(912402),a=n(667294),h=n(294184),f=n.n(h),u=n(821770),D=n(915105),O=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],_=a.forwardRef(function(C,$){var E,N=C.prefixCls,M=N===void 0?"rc-switch":N,U=C.className,X=C.checked,z=C.defaultChecked,L=C.disabled,G=C.loadingIcon,k=C.checkedChildren,F=C.unCheckedChildren,w=C.onClick,q=C.onChange,R=C.onKeyDown,ln=(0,e.Z)(C,O),sn=(0,u.default)(!1,{value:X,defaultValue:z}),nn=(0,r.Z)(sn,2),P=nn[0],rn=nn[1];function V(c,o){var g=P;return L||(g=c,rn(g),q==null||q(g,o)),g}function dn(c){c.which===D.Z.LEFT?V(!1,c):c.which===D.Z.RIGHT&&V(!0,c),R==null||R(c)}function v(c){var o=V(!P,c);w==null||w(o,c)}var t=f()(M,U,(E={},(0,d.Z)(E,"".concat(M,"-checked"),P),(0,d.Z)(E,"".concat(M,"-disabled"),L),E));return a.createElement("button",(0,I.Z)({},ln,{type:"button",role:"switch","aria-checked":P,disabled:L,className:t,ref:$,onKeyDown:dn,onClick:v}),G,a.createElement("span",{className:"".concat(M,"-inner")},a.createElement("span",{className:"".concat(M,"-inner-checked")},k),a.createElement("span",{className:"".concat(M,"-inner-unchecked")},F)))});_.displayName="Switch",m.Z=_}}]);
