(self.webpackChunkwiki_docusaurus=self.webpackChunkwiki_docusaurus||[]).push([[9514,6035,1706],{3616:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return te}});var a=n(7294),r=n(3905),o=n(2263),i=n(6291),l=n(1525),c=n(2122),s=n(9756),u=n(6010),d=n(6700),m=n(944),b=n(1839),p=n(3783),f=n(7898),h=n(6742),v=n(3919),E=n(5537),g=function(e){return a.createElement("svg",(0,c.Z)({width:"20",height:"20",role:"img"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},k=n(4478),C=n(4973),_="sidebar_15mo",Z="sidebarWithHideableNavbar_267A",N="sidebarHidden_2kNb",S="sidebarLogo_3h0W",I="menu_Bmed",y="menuLinkText_2aKo",P="menuWithAnnouncementBar_2WvA",w="collapseSidebarButton_1CGd",R="collapseSidebarButtonIcon_3E-R",A="sidebarMenuIcon_fgN0",M="sidebarMenuCloseIcon_1lpH",x="menuLinkExternal_1OhN";var T=function e(t,n){return"link"===t.type?(0,d.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},B=(0,a.memo)((function(e){var t=e.items,n=(0,s.Z)(e,["items"]);return t.map((function(e,t){return a.createElement(L,(0,c.Z)({key:t,item:e},n))}))}));function L(e){switch(e.item.type){case"category":return a.createElement(F,e);case"link":default:return a.createElement(O,e)}}function F(e){var t,n,r,o=e.item,i=e.onItemClick,l=e.collapsible,d=e.activePath,m=(0,s.Z)(e,["item","onItemClick","collapsible","activePath"]),b=o.items,p=o.label,f=T(o,d),h=(n=f,r=(0,a.useRef)(n),(0,a.useEffect)((function(){r.current=n}),[n]),r.current),v=(0,a.useState)((function(){return!!l&&(!f&&o.collapsed)})),E=v[0],g=v[1],k=(0,a.useRef)(null),C=(0,a.useState)(void 0),_=C[0],Z=C[1],N=function(e){var t;void 0===e&&(e=!0),Z(e?(null==(t=k.current)?void 0:t.scrollHeight)+"px":void 0)};(0,a.useEffect)((function(){f&&!h&&E&&g(!1)}),[f,h,E]);var S=(0,a.useCallback)((function(e){e.preventDefault(),_||N(),setTimeout((function(){return g((function(e){return!e}))}),100)}),[_]);return 0===b.length?null:a.createElement("li",{className:(0,u.Z)("menu__list-item",{"menu__list-item--collapsed":E})},a.createElement("a",(0,c.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--sublist":l,"menu__link--active":l&&f},t[y]=!l,t)),onClick:l?S:void 0,href:l?"#!":void 0},m),p),a.createElement("ul",{className:"menu__list",ref:k,style:{height:_},onTransitionEnd:function(){E||N(!1)}},a.createElement(B,{items:b,tabIndex:E?"-1":"0",onItemClick:i,collapsible:l,activePath:d})))}function O(e){var t,n=e.item,r=e.onItemClick,o=e.activePath,i=(e.collapsible,(0,s.Z)(e,["item","onItemClick","activePath","collapsible"])),l=n.href,d=n.label,m=T(n,o);return a.createElement("li",{className:"menu__list-item",key:d},a.createElement(h.Z,(0,c.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--active":m},t[x]=!(0,v.Z)(l),t)),to:l},(0,v.Z)(l)&&{isNavLink:!0,exact:!0,onClick:r},i),d))}function H(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,C.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,C.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,u.Z)("button button--secondary button--outline",w),onClick:t},a.createElement(g,{className:R}))}function D(e){var t=e.responsiveSidebarOpened,n=e.onClick;return a.createElement("button",{"aria-label":t?(0,C.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,C.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:n},t?a.createElement("span",{className:(0,u.Z)(A,M)},"\xd7"):a.createElement(k.Z,{className:A,height:24,width:24}))}var W=function(e){var t,n,r=e.path,o=e.sidebar,i=e.sidebarCollapsible,l=void 0===i||i,c=e.onCollapse,s=e.isHidden,h=function(){var e=(0,m.Z)().isAnnouncementBarClosed,t=(0,a.useState)(!e),n=t[0],r=t[1];return(0,f.Z)((function(t){var n=t.scrollY;e||r(0===n)})),n}(),v=(0,d.LU)(),g=v.navbar.hideOnScroll,k=v.hideableSidebar,C=(0,m.Z)().isAnnouncementBarClosed,y=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1];(0,b.Z)(t);var r=(0,p.Z)();return(0,a.useEffect)((function(){r===p.D.desktop&&n(!1)}),[r]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,a.useCallback)((function(e){e.target.blur(),n(!1)}),[n]),toggleResponsiveSidebar:(0,a.useCallback)((function(){n((function(e){return!e}))}),[n])}}(),w=y.showResponsiveSidebar,R=y.closeResponsiveSidebar,A=y.toggleResponsiveSidebar;return a.createElement("div",{className:(0,u.Z)(_,(t={},t[Z]=g,t[N]=s,t))},g&&a.createElement(E.Z,{tabIndex:-1,className:S}),a.createElement("div",{className:(0,u.Z)("menu","menu--responsive","thin-scrollbar",I,(n={"menu--show":w},n[P]=!C&&h,n))},a.createElement(D,{responsiveSidebarOpened:w,onClick:A}),a.createElement("ul",{className:"menu__list"},a.createElement(B,{items:o,onItemClick:R,collapsible:l,activePath:r}))),k&&a.createElement(H,{onClick:c}))},U=n(3541),Y=n(4608),K=n(5977),j="docPage_31aa",z="docMainContainer_3ufF",J="docMainContainerEnhanced_3NYZ",Q="docSidebarContainer_3Kbt",V="docSidebarContainerHidden_3pA8",q="collapsedDocSidebar_2JMH",G="expandSidebarButtonIcon_1naQ",X="docItemWrapperEnhanced_2vyJ",$="docItemWrapper_3FMP";function ee(e){var t,n,i,c,s,m=e.currentDocRoute,b=e.versionMetadata,p=e.children,f=(0,o.default)(),h=f.siteConfig,v=f.isClient,E=b.pluginId,k=b.permalinkToSidebar,_=b.docsSidebars,Z=b.version,N=k[m.path],S=_[N],I=(0,a.useState)(!1),y=I[0],P=I[1],w=(0,a.useState)(!1),R=w[0],A=w[1],M=(0,a.useCallback)((function(){R&&A(!1),P(!y)}),[R]);return a.createElement(l.Z,{key:v,wrapperClassName:d.kM.wrapper.docPages,pageClassName:d.kM.page.docPage,searchMetadatas:{version:Z,tag:(0,d.os)(E,Z)}},a.createElement("div",{className:j},S&&a.createElement("div",{className:(0,u.Z)(Q,(t={},t[V]=y,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(Q)&&y&&A(!0)},role:"complementary"},a.createElement(W,{key:N,sidebar:S,path:m.path,sidebarCollapsible:null==(n=null==(i=h.themeConfig)?void 0:i.sidebarCollapsible)||n,onCollapse:M,isHidden:R}),R&&a.createElement("div",{className:q,title:(0,C.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,C.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:M,onClick:M},a.createElement(g,{className:G}))),a.createElement("main",{className:(0,u.Z)(z,(c={},c[J]=y||!S,c))},a.createElement("div",{className:(0,u.Z)("container padding-vert--lg",$,(s={},s[X]=y,s))},a.createElement(r.Zo,{components:U.Z},p)))))}var te=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,o=t.find((function(e){return(0,K.LX)(r.pathname,e)}));return o?a.createElement(ee,{currentDocRoute:o,versionMetadata:n},(0,i.Z)(t)):a.createElement(Y.default,e)}},4608:function(e,t,n){"use strict";n.r(t);var a=n(7294),r=n(1525),o=n(4973);t.default=function(){return a.createElement(r.Z,{title:"Page Not Found"},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},6979:function(e,t,n){"use strict";var a=n(2122),r=n(9756),o=n(7294),i=n(3935),l=n(2263),c=n(5977),s=n(4996),u=n(6742),d=n(9105),m=n(6397),b=n(7052),p=n(6747),f=n(5613),h=null;function v(e){var t=e.hit,n=e.children;return o.createElement(u.Z,{to:t.url},n)}function E(e){var t=e.state,n=e.onClose,a=(0,m.Z)().generateSearchPageLink;return o.createElement(u.Z,{to:a(t.query),onClick:n},"See all ",t.context.nbHits," results")}function g(e){var t,u,m=e.contextualSearch,g=(0,r.Z)(e,["contextualSearch"]),k=(0,l.default)().siteMetadata,C=(0,f.Z)(),_=null!=(t=null==(u=g.searchParameters)?void 0:u.facetFilters)?t:[],Z=m?[].concat(C,_):_,N=Object.assign({},g.searchParameters,{facetFilters:Z}),S=(0,s.C)().withBaseUrl,I=(0,c.k6)(),y=(0,o.useRef)(null),P=(0,o.useState)(!1),w=P[0],R=P[1],A=(0,o.useState)(null),M=A[0],x=A[1],T=(0,o.useCallback)((function(){return h?Promise.resolve():Promise.all([n.e(3763).then(n.bind(n,3763)),Promise.all([n.e(532),n.e(6945)]).then(n.bind(n,6945)),Promise.all([n.e(532),n.e(9846)]).then(n.bind(n,9846))]).then((function(e){var t=e[0].DocSearchModal;h=t}))}),[]),B=(0,o.useCallback)((function(){T().then((function(){R(!0)}))}),[T,R]),L=(0,o.useCallback)((function(){R(!1)}),[R]),F=(0,o.useCallback)((function(e){T().then((function(){R(!0),x(e.key)}))}),[T,R,x]),O=(0,o.useRef)({navigate:function(e){var t=e.suggestionUrl;I.push(t)}}).current,H=(0,o.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:S(""+t.pathname+t.hash)})}))})).current,D=(0,o.useMemo)((function(){return function(e){return o.createElement(E,(0,a.Z)({},e,{onClose:L}))}}),[L]),W=(0,o.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",k.docusaurusVersion),e}),[k.docusaurusVersion]);return(0,b.D)({isOpen:w,onOpen:B,onClose:L,onInput:F,searchButtonRef:y}),o.createElement(o.Fragment,null,o.createElement(d.Z,null,o.createElement("link",{rel:"preconnect",href:"https://"+g.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),o.createElement(p.a,{onTouchStart:T,onFocus:T,onMouseOver:T,onClick:B,ref:y}),w&&(0,i.createPortal)(o.createElement(h,(0,a.Z)({onClose:L,initialScrollY:window.scrollY,initialQuery:M,navigator:O,transformItems:H,hitComponent:v,resultsFooterComponent:D,transformSearchClient:W},g,{searchParameters:N})),document.body))}t.Z=function(){var e=(0,l.default)().siteConfig;return o.createElement(g,e.themeConfig.algolia)}}}]);