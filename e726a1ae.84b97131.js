(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{212:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(7),o=(r(0),r(236)),l={id:"colorlog",title:"Colorlog plugin",sidebar_label:"Colorlog plugin"},c={unversionedId:"plugins/colorlog",id:"plugins/colorlog",isDocsHomePage:!1,title:"Colorlog plugin",description:"PyPI",source:"@site/docs/plugins/colorlog.md",slug:"/plugins/colorlog",permalink:"/docs/next/plugins/colorlog",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/plugins/colorlog.md",version:"current",lastUpdatedBy:"Shagun Sodhani",lastUpdatedAt:1602780941,sidebar_label:"Colorlog plugin",sidebar:"docs",previous:{title:"Ax Sweeper plugin",permalink:"/docs/next/plugins/ax_sweeper"},next:{title:"Joblib Launcher plugin",permalink:"/docs/next/plugins/joblib_launcher"}},i=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],p={rightToc:i};function s(e){var t=e.components,l=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,l,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://pypi.org/project/hydra-colorlog/"}),Object(o.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/pypi/v/hydra-colorlog",alt:"PyPI"}))),"\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/pypi/l/hydra-colorlog",alt:"PyPI - License"})),"\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/pypi/pyversions/hydra-colorlog",alt:"PyPI - Python Version"})),"\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://pypistats.org/packages/hydra-colorlog"}),Object(o.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/pypi/dm/hydra-colorlog.svg",alt:"PyPI - Downloads"}))),"\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/plugins/hydra_colorlog/example"}),Object(o.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"}))),"\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/plugins/hydra_colorlog"}),Object(o.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Plugin%20source-informational",alt:"Plugin source"})))),Object(o.b)("p",null,"Adds ",Object(o.b)("a",{class:"external",href:"https://github.com/borntyping/python-colorlog",target:"_blank"},"colorlog")," colored logs for ",Object(o.b)("inlineCode",{parentName:"p"},"hydra/job_logging")," and ",Object(o.b)("inlineCode",{parentName:"p"},"hydra/hydra_logging"),"."),Object(o.b)("h3",{id:"installation"},"Installation"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-commandline"}),"pip install hydra_colorlog --upgrade\n")),Object(o.b)("h3",{id:"usage"},"Usage"),Object(o.b)("p",null,"Override ",Object(o.b)("inlineCode",{parentName:"p"},"hydra/job_logging")," and ",Object(o.b)("inlineCode",{parentName:"p"},"hydra/hydra_logging")," your config:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"defaults:\n  - hydra/job_logging: colorlog\n  - hydra/hydra_logging: colorlog\n")),Object(o.b)("p",null,"See included ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/plugins/hydra_colorlog/example"}),"example"),"."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Colored log output",src:r(247).default})))}s.isMDXComponent=!0},236:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=s(r),u=n,d=b["".concat(l,".").concat(u)]||b[u]||g[u]||o;return r?a.a.createElement(d,c(c({ref:t},p),{},{components:r})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var p=2;p<o;p++)l[p]=r[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},247:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/colorlog-b20147697b9d16362f62a5d0bb58347f.png"}}]);