(self.webpackChunkwiki_docusaurus=self.webpackChunkwiki_docusaurus||[]).push([[9586],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return c},kt:function(){return s}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=u(n),s=a,k=d["".concat(p,".").concat(s)]||d[s]||m[s]||i;return n?r.createElement(k,o(o({ref:e},c),{},{components:n})):r.createElement(k,o({ref:e},c))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8054:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o={id:"ATTiny85\u8c03\u8bd5\u8bb0\u5f55",title:"ATTiny85 \u8c03\u8bd5\u8bb0\u5f55"},l={unversionedId:"ATTiny85\u8c03\u8bd5\u8bb0\u5f55",id:"ATTiny85\u8c03\u8bd5\u8bb0\u5f55",isDocsHomePage:!1,title:"ATTiny85 \u8c03\u8bd5\u8bb0\u5f55",description:"Bootloader",source:"@site/docs/ATTiny85\u8c03\u8bd5\u8bb0\u5f55.md",sourceDirName:".",slug:"/ATTiny85\u8c03\u8bd5\u8bb0\u5f55",permalink:"/ATTiny85\u8c03\u8bd5\u8bb0\u5f55",editUrl:"https://github.com/worst0/Wiki_Docusaurus/edit/main/docs/ATTiny85\u8c03\u8bd5\u8bb0\u5f55.md",version:"current",lastUpdatedAt:1606694066,formattedLastUpdatedAt:"11/30/2020",frontMatter:{id:"ATTiny85\u8c03\u8bd5\u8bb0\u5f55",title:"ATTiny85 \u8c03\u8bd5\u8bb0\u5f55"}},p=[{value:"Bootloader",id:"bootloader",children:[]},{value:"Arduino \u4f5c\u4e3a ISP \u4e0b\u8f7d\u5668",id:"arduino-\u4f5c\u4e3a-isp-\u4e0b\u8f7d\u5668",children:[]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]},{value:"\u53c2\u8003\u4e0e\u81f4\u8c22",id:"\u53c2\u8003\u4e0e\u81f4\u8c22",children:[]}],u={toc:p};function c(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"bootloader"},"Bootloader"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'P:\\Arduino\\hardware\\tools\\avr/bin/avrdude -C "P:\\Arduino\\hardware\\tools\\avr/etc/avrdude.conf" -v -pattiny85 -carduino -PCOM4 -b119200 -Uflash:w:D:\\t85_default.hex:i -U lfuse:w:0xE1:m -U hfuse:w:0xDD:m -U efuse:w:0xFE:m\n')),(0,i.kt)("h2",{id:"arduino-\u4f5c\u4e3a-isp-\u4e0b\u8f7d\u5668"},"Arduino \u4f5c\u4e3a ISP \u4e0b\u8f7d\u5668"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Attiny"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Arduino"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Pin 1\uff08PB5\uff09"),(0,i.kt)("td",{parentName:"tr",align:"center"},"D10")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Pin 4 \uff08GND\uff09"),(0,i.kt)("td",{parentName:"tr",align:"center"},"GND")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Pin 5 \uff08PB0\uff09"),(0,i.kt)("td",{parentName:"tr",align:"center"},"D11")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Pin 6 \uff08PB1\uff09"),(0,i.kt)("td",{parentName:"tr",align:"center"},"D12")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Pin 7 \uff08PB2\uff09"),(0,i.kt)("td",{parentName:"tr",align:"center"},"D13")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Pin 8 \uff08VCC\uff09"),(0,i.kt)("td",{parentName:"tr",align:"center"},"5V")))),(0,i.kt)("p",null,"\u5148\u7ed9 Arduino \u70e7 ISP \u7a0b\u5e8f\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200426144425.png",alt:null})),(0,i.kt)("p",null,"\u6253\u5f00 IDE \u9996\u9009\u9879\uff0c\u5728\u9644\u52a0\u5f00\u53d1\u677f\u5730\u5740\u4e2d\u586b\u5199\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://raw.githubusercontent.com/damellis/attiny/ide-1.6.x-boards-manager/package_damellis_attiny_index.json\n")),(0,i.kt)("p",null,"\u6253\u5f00\u5f00\u53d1\u677f\u7ba1\u7406\u5668\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200426144642.png",alt:null})),(0,i.kt)("p",null,"\u641c\u7d22\u5e76\u5b89\u88c5\uff08\u53ef\u80fd\u9700\u8981\u4ee3\u7406\uff09\uff1a\n",(0,i.kt)("img",{parentName:"p",src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200426144732.png",alt:null})),(0,i.kt)("p",null,"\u70e7\u5f55\u65f6\u6ce8\u610f\u9009\u5bf9\u82af\u7247\u578b\u53f7\u3001\u65f6\u949f\u901f\u7387\uff08Internal 16 MHz\uff09\u3001Arduino \u6240\u5728\u7684\u7aef\u53e3\uff0c\u6ce8\u610f\u7f16\u7a0b\u5668\u9009\u62e9 ",(0,i.kt)("inlineCode",{parentName:"p"},"Arduino as ISP"),"\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200426144834.png",alt:null})),(0,i.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,i.kt)("h2",{id:"\u53c2\u8003\u4e0e\u81f4\u8c22"},"\u53c2\u8003\u4e0e\u81f4\u8c22"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.csdn.net/Argon_Ghost/article/details/103637870?depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-4&utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-4"},"\u57fa\u4e8e ATTiny85 \u7684 digispark Arduino \u6700\u5c0f\u7cfb\u7edf\u7684\u81ea\u5236\u6559\u7a0b\uff08\u4e00\uff09")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.csdn.net/Argon_Ghost/article/details/103859931"},"\u57fa\u4e8e ATTiny85 \u7684 digispark Arduino \u6700\u5c0f\u7cfb\u7edf\u7684\u81ea\u5236\u6559\u7a0b\uff08\u4e8c\uff09")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/73336394"},"Digispark USB \u5f00\u53d1\u677f\u628a\u73a9\u7b14\u8bb0\uff08\u4e00\uff09\uff1a\u8ba4\u8bc6\u8fd9\u5757\u5c0f\u5de7\u3001\u4fbf\u5b9c\u3001\u591a\u529f\u80fd\u7684 Arduino \u517c\u5bb9\u677f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://digistump.com/wiki/digispark/tutorials/connecting"},"Connecting and Programming Your Digispark")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://iremo-tw.blogspot.com/2018/03/attiny85-micronucleus-bootloader.html"},"Attiny85 Micronucleus bootloader \u71d2\u9304")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.jianshu.com/p/55e86b4e0194"},"ATtiny85 \u5236\u4f5c\u8ff7\u4f60\u5c0f\u6e38\u620f\u673a")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://blog.sina.com.cn/s/blog_6566538d0102w6qk.html"},"DigiSpark ATtiny85 8 \u811a Arduino AVR ISP \u7f16\u7a0b\u7684\u90a3\u70b9\u4e8b\u513f BootLoader \u7194\u4e1d")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://digistump.com/wiki/digispark/quickref"},"Quick Reference Frequently requested info"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u6587\u7ae0\u4f5c\u8005\uff1a",(0,i.kt)("strong",{parentName:"p"},"Power Lin"),"\n\u539f\u6587\u5730\u5740\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://wiki-power.com"},"https://wiki-power.com"),"\n\u7248\u6743\u58f0\u660e\uff1a\u6587\u7ae0\u91c7\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/4.0/deed.zh"},"CC BY-NC-SA 4.0")," \u534f\u8bae\uff0c\u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u3002")))}c.isMDXComponent=!0}}]);