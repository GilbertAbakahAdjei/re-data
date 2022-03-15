"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[11],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return u}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),l=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=l(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),g=l(r),u=a,m=g["".concat(p,".").concat(u)]||g[u]||d[u]||i;return r?n.createElement(m,o(o({ref:e},c),{},{components:r})):n.createElement(m,o({ref:e},c))}));function u(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=g;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s.mdxType="string"==typeof t?t:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9766:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],s={sidebar_position:2},p="Integrations",l={unversionedId:"introduction/integrations",id:"introduction/integrations",title:"Integrations",description:"Data warehouses & engines",source:"@site/docs/introduction/integrations.md",sourceDirName:"introduction",slug:"/introduction/integrations",permalink:"/fix-integration-tests-reserved-col-names/docs/introduction/integrations",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/introduction/integrations.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"What is re_data?",permalink:"/fix-integration-tests-reserved-col-names/docs/introduction/whatis"},next:{title:"Quickstart - dbt users",permalink:"/fix-integration-tests-reserved-col-names/docs/getting_started/installation/for_dbt_users"}},c={},d=[{value:"Data warehouses &amp; engines",id:"data-warehouses--engines",level:2},{value:"Notifications",id:"notifications",level:2}],g={toc:d};function u(t){var e=t.components,r=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},g,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"integrations"},"Integrations"),(0,i.kt)("h2",{id:"data-warehouses--engines"},"Data warehouses & engines"),(0,i.kt)("p",null,"We support most of the main data warehouses supported by dbt. We plan to add support for Spark/Databricks."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"}),(0,i.kt)("th",{parentName:"tr",align:"center"},"Integration"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Status"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("img",{height:"40",width:"30%",src:"https://miro.medium.com/max/1024/0*eDEy4S8zFfYnRt1X.png"})),(0,i.kt)("td",{parentName:"tr",align:"center"},"BigQuery"),(0,i.kt)("td",{parentName:"tr",align:"right"},"Supported")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("img",{height:"40",width:"30%",src:"https://www.pngkey.com/png/full/20-201458_when-ubers-engineering-team-published-a-blog-post.png"})),(0,i.kt)("td",{parentName:"tr",align:"center"},"PostgreSQL"),(0,i.kt)("td",{parentName:"tr",align:"right"},"Supported")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("img",{height:"40",width:"30%",src:"https://dbdb.io/media/logos/amazon-redshift.png"})),(0,i.kt)("td",{parentName:"tr",align:"center"},"Redshift"),(0,i.kt)("td",{parentName:"tr",align:"right"},"Supported")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("img",{height:"40",width:"30%",src:"https://www.snowflake.com/wp-content/themes/snowflake/img/snowflake-logo-blue@2x.png"})),(0,i.kt)("td",{parentName:"tr",align:"center"},"Snowflake"),(0,i.kt)("td",{parentName:"tr",align:"right"},"Supported")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("img",{height:"40",width:"30%",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Apache_Spark_logo.svg/1200px-Apache_Spark_logo.svg.png"})),(0,i.kt)("td",{parentName:"tr",align:"center"},"Apache Spark"),(0,i.kt)("td",{parentName:"tr",align:"right"},"Planned")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("img",{height:"30",width:"30%",src:"https://credentials.databricks.com/assets/themes/credentials.databricks.com/images/databricks-logo.png"})),(0,i.kt)("td",{parentName:"tr",align:"center"},"Databricks"),(0,i.kt)("td",{parentName:"tr",align:"right"},"Planned")))),(0,i.kt)("h2",{id:"notifications"},"Notifications"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"}),(0,i.kt)("th",{parentName:"tr",align:"center"},"Integration"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Status"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("img",{height:"30",width:"30%",src:"https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg"})),(0,i.kt)("td",{parentName:"tr",align:"center"},"Slack"),(0,i.kt)("td",{parentName:"tr",align:"right"},"Supported")))),(0,i.kt)("p",null,"Let us know on ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://www.getre.io/slack"},"Slack! \ud83d\ude0a"))," if you would like to add supported for other tools!"))}u.isMDXComponent=!0}}]);