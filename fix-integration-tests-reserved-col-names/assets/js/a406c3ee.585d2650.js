"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[421],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=s,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(h,a(a({ref:t},d),{},{components:r})):n.createElement(h,a({ref:t},d))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2365:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var n=r(7462),s=r(3366),o=(r(7294),r(3905)),a=["components"],i={sidebar_position:1},l="Tests history",c={unversionedId:"reference/tests/history",id:"reference/tests/history",title:"Tests history",description:"re_data adds dbt macros which make it possible to save test history to your data warehouse & later on investigate them with our reliability UI.",source:"@site/docs/reference/tests/history.md",sourceDirName:"reference/tests",slug:"/reference/tests/history",permalink:"/fix-integration-tests-reserved-col-names/docs/reference/tests/history",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/reference/tests/history.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Anomalies",permalink:"/fix-integration-tests-reserved-col-names/docs/reference/anomaly_detection"},next:{title:"Testing metrics",permalink:"/fix-integration-tests-reserved-col-names/docs/reference/tests/metrics"}},d={},u=[{value:"on-run-end",id:"on-run-end",level:2},{value:"re_data_test_history",id:"re_data_test_history",level:2},{value:"Tests view",id:"tests-view",level:2}],p={toc:u};function m(e){var t=e.components,i=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tests-history"},"Tests history"),(0,o.kt)("p",null,"re_data adds dbt macros which make it possible to save test history to your data warehouse & later on investigate them with our reliability UI."),(0,o.kt)("h2",{id:"on-run-end"},"on-run-end"),(0,o.kt)("p",null,"To start saving tests you just need to call re_data ",(0,o.kt)("inlineCode",{parentName:"p"},"save_test_history")," macro in ",(0,o.kt)("inlineCode",{parentName:"p"},"on-run-end")," hook. You can do it by adding the code below into your ",(0,o.kt)("inlineCode",{parentName:"p"},"dbt_project.yml"),". In case of having some other hooks existing already you just need to add this as an item into the list."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:"dbt_project.yml","dbt_project.yml":!0},'\non-run-end:\n  - "{{ re_data.save_test_history(results) }}"\n\n')),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"on-run-end hooks are called for dbt tests since dbt 1.0.0, so this re_data feature is only available with the new dbt version."))),(0,o.kt)("h2",{id:"re_data_test_history"},"re_data_test_history"),(0,o.kt)("p",null,"re_data test history model contains information about tests and their stats."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select * from toy_shop_re.re_data_test_history\n        table_name        | column_name |                                 test_name                                  | status |       run_at\n--------------------------+-------------+----------------------------------------------------------------------------+--------+---------------------\n postgres.toy_shop.orders | amount      | not_null_orders_amount                                                     | Fail   | 2022-01-13 08:49:39\n postgres.toy_shop.orders | status      | accepted_values_orders_status__pending__shipped__delivered__not_paid__paid | Fail   | 2022-01-13 08:49:39\n postgres.toy_shop.orders | customer_id | not_null_orders_customer_id                                                | Pass   | 2022-01-13 08:49:39\n postgres.toy_shop.orders | created_at  | not_null_orders_created_at                                                 | Pass   | 2022-01-13 08:49:39\n postgres.toy_shop.orders | status      | not_null_orders_status                                                     | Pass   | 2022-01-13 08:49:39\n")),(0,o.kt)("h2",{id:"tests-view"},"Tests view"),(0,o.kt)("p",null,"Tests view lets you see the history of all dbt tests run. You can filter on the table, time, etc."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"GraphExample",src:r(2156).Z,width:"1588",height:"862"})))}m.isMDXComponent=!0},2156:function(e,t,r){t.Z=r.p+"assets/images/tests-692afa30c97d5c95c361c7a5a64fba17.png"}}]);