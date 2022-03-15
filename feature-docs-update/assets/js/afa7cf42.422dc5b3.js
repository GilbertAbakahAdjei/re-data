"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9],{3905:function(e,a,t){t.d(a,{Zo:function(){return u},kt:function(){return s}});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=r.createContext({}),m=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):d(d({},a),e)),t},u=function(e){var a=m(e.components);return r.createElement(o.Provider,{value:a},e.children)},_={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},p=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=m(t),s=n,c=p["".concat(o,".").concat(s)]||p[s]||_[s]||i;return t?r.createElement(c,d(d({ref:a},u),{},{components:t})):r.createElement(c,d({ref:a},u))}));function s(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,d=new Array(i);d[0]=p;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,d[1]=l;for(var m=2;m<i;m++)d[m]=t[m];return r.createElement.apply(null,d)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2604:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return u},default:function(){return p}});var r=t(7462),n=t(3366),i=(t(7294),t(3905)),d=["components"],l={sidebar_position:4},o="Data Validation",m={unversionedId:"reference/data_preparation/data_validation",id:"reference/data_preparation/data_validation",isDocsHomePage:!1,title:"Data Validation",description:"Data validation refers to checking if data within your dataset, meet certain criteria. Validation often needs to be done on data that comes as text but represents something specific like number identifier, email, date, ip_address.",source:"@site/docs/reference/data_preparation/data_validation.md",sourceDirName:"reference/data_preparation",slug:"/reference/data_preparation/data_validation",permalink:"/feature-docs-update/docs/reference/data_preparation/data_validation",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/reference/data_preparation/data_validation.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Data Normalization",permalink:"/feature-docs-update/docs/reference/data_preparation/data_normalization"},next:{title:"Q&A \ud83d\udcac",permalink:"/feature-docs-update/docs/qa"}},u=[{value:"Date &amp; Time",id:"date--time",children:[{value:"re_data.valid_date_eu",id:"re_datavalid_date_eu",children:[]},{value:"re_data.valid_date_us",id:"re_datavalid_date_us",children:[]},{value:"re_data.valid_date_inverse",id:"re_datavalid_date_inverse",children:[]},{value:"re_data.valid_date_iso_8601",id:"re_datavalid_date_iso_8601",children:[]},{value:"re_data.valid_time_12h",id:"re_datavalid_time_12h",children:[]},{value:"re_data.valid_time_24h",id:"re_datavalid_time_24h",children:[]},{value:"re_data.valid_time",id:"re_datavalid_time",children:[]}]},{value:"Numbers",id:"numbers",children:[{value:"re_data.valid_number",id:"re_datavalid_number",children:[]},{value:"re_data.is_number_decimal_point",id:"re_datais_number_decimal_point",children:[]},{value:"re_data.valid_number_decimal_comma",id:"re_datavalid_number_decimal_comma",children:[]},{value:"re_data.valid_number_percentage",id:"re_datavalid_number_percentage",children:[]},{value:"re_data.valid_number_percentage_point",id:"re_datavalid_number_percentage_point",children:[]},{value:"re_data.valid_number_percentage_comma",id:"re_datavalid_number_percentage_comma",children:[]}]},{value:"IP",id:"ip",children:[{value:"re_data.valid_ip_v4",id:"re_datavalid_ip_v4",children:[]},{value:"re_data.valid_ip_v6",id:"re_datavalid_ip_v6",children:[]},{value:"re_data.valid_ip",id:"re_datavalid_ip",children:[]}]},{value:"Email",id:"email",children:[{value:"re_data.valid_email",id:"re_datavalid_email",children:[]}]},{value:"UUID",id:"uuid",children:[{value:"re_data.valid_uuid",id:"re_datavalid_uuid",children:[]}]},{value:"Your ideas",id:"your-ideas",children:[]}],_={toc:u};function p(e){var a=e.components,t=(0,n.Z)(e,d);return(0,i.kt)("wrapper",(0,r.Z)({},_,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"data-validation"},"Data Validation"),(0,i.kt)("p",null,"Data validation refers to checking if data within your dataset, meet certain criteria. Validation often needs to be done on data that comes as text but represents something specific like number identifier, email, date, ip_address."),(0,i.kt)("p",null,"Check out the list of currently available validations and let us know if you could use some different ones on ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://www.getre.io/slack"},"Slack \ud83d\ude0a"))," or ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/re-data/re-data/issues/new?assignees=&labels=&template=macro_request.md&title=%5BMACRO%5D"},"Github")),"."),(0,i.kt)("h2",{id:"date--time"},"Date & Time"),(0,i.kt)("h3",{id:"re_datavalid_date_eu"},(0,i.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.valid_date_eu"},"re_data.valid_date_eu")),(0,i.kt)("p",null,"Arguments:\n",(0,i.kt)("em",{parentName:"p"},"column: The column to perform validation on.")),(0,i.kt)("p",null,"Return type: boolean"),(0,i.kt)("p",null,"This macro checks if data meets european date format. (-./) allowed as separators."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"=> select date_time, {{ re_data.valid_date_eu('date_time')}} as valid_date_eu\n\n  date_time  | valid_date_eu\n------------+---------------\n 31-01-2020 |          true\n 01/31/2020 |         false\n 05.05.2020 |          true\n\n")),(0,i.kt)("h3",{id:"re_datavalid_date_us"},(0,i.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.valid_date_us"},"re_data.valid_date_us")),(0,i.kt)("p",null,"Arguments:\n",(0,i.kt)("em",{parentName:"p"},"column: The column to perform validation on.")),(0,i.kt)("p",null,"Return type: boolean"),(0,i.kt)("p",null,"This macro checks if data meets us date format."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"=> select date_time, {{ re_data.valid_date_us('date_time')}} as valid_date_us\n\n  date_time  | valid_date_us\n------------+---------------\n 31-01-2020 |         false\n 01/31/2020 |          true\n 05.05.2020 |          true\n\n")),(0,i.kt)("h3",{id:"re_datavalid_date_inverse"},(0,i.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.valid_date_inverse"},"re_data.valid_date_inverse")),(0,i.kt)("p",null,"Arguments:\n",(0,i.kt)("em",{parentName:"p"},"column: The column to perform validation on.")),(0,i.kt)("p",null,"Return type: boolean"),(0,i.kt)("p",null,"This macro checks if data is in inversed date format."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"=> select date_time, {{ re_data.valid_date_eu('date_time')}} as valid_date_inverse\n\n date_time  | valid_date_inverse\n------------+--------------------\n 31-01-2020 |              false\n 01/31/2020 |              false\n 05.05.2020 |              false\n 2020-01-31 |               true\n")),(0,i.kt)("h3",{id:"re_datavalid_date_iso_8601"},(0,i.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.valid_date_iso_8601"},"re_data.valid_date_iso_8601")),(0,i.kt)("p",null,"Arguments:\n",(0,i.kt)("em",{parentName:"p"},"column: The column to perform validation on.")),(0,i.kt)("p",null,"Return type: boolean"),(0,i.kt)("p",null,"This macro checks if data is valid is time format."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"=> select date_time, {{ re_data.valid_date_iso_8601('date_time')}} as valid_date_iso_8601\n\n         date_time         | valid_date_iso_8601\n---------------------------+---------------------\n 31-01-2020                |               false\n 2020-01-31T12:59:00+02:00 |                true\n 2020-01-31T12:59:00       |                true\n")),(0,i.kt)("h3",{id:"re_datavalid_time_12h"},(0,i.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.valid_time_12h"},"re_data.valid_time_12h")),(0,i.kt)("p",null,"Arguments:\n",(0,i.kt)("em",{parentName:"p"},"column: The column to perform validation on.")),(0,i.kt)("p",null,"Return type: boolean"),(0,i.kt)("p",null,"This macro checks if data is valid 12h time (HH:MM) format."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"=> select date_time, {{ re_data.valid_time_12h('date_time')}} as valid_time_12h\n\n         date_time         | valid_time_12h\n---------------------------+----------------\n 23:59                     |          false\n 12:59                     |           true\n 13:59:01                  |          false\n")),(0,i.kt)("h3",{id:"re_datavalid_time_24h"},(0,i.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.valid_time_24h"},"re_data.valid_time_24h")),(0,i.kt)("p",null,"Arguments:\n",(0,i.kt)("em",{parentName:"p"},"column: The column to perform validation on.")),(0,i.kt)("p",null,"Return type: boolean"),(0,i.kt)("p",null,"This macro checks if data is valid 24h time (HH:MM) format."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"=> select date_time, {{ re_data.valid_time_24h('date_time')}} as valid_time_24h\n\n         date_time         | valid_time_24h\n---------------------------+----------------\n 23:59                     |           true\n 12:59                     |           true\n 13:59:01                  |          false\n")),(0,i.kt)("h3",{id:"re_datavalid_time"},(0,i.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.valid_time"},"re_data.valid_time")),(0,i.kt)("p",null,"Arguments:\n",(0,i.kt)("em",{parentName:"p"},"column: The column to perform validation on.")),(0,i.kt)("p",null,"Return type: boolean"),(0,i.kt)("p",null,"This macro checks if data is valid time, see examples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"=> select date_time, {{ re_data.valid_time('date_time')}} as valid_time\n\n         date_time         | valid_time\n---------------------------+------------\n 2020-01-31                |      false\n 23:59                     |       true\n 12:59                     |       true\n 13:59:01                  |       true\n 12:59:01,55               |       true\n 11:59:00                  |       true\n")),(0,i.kt)("h2",{id:"numbers"},"Numbers"),(0,i.kt)("h3",{id:"re_datavalid_number"},(0,i.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.valid_number"},"re_data.valid_number")),(0,i.kt)("p",null,"Arguments:\n",(0,i.kt)("em",{parentName:"p"},"column: The column to perform validation on.")),(0,i.kt)("p",null,"Return type: boolean"),(0,i.kt)("p",null,"This macro checks if data is valid integer number."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"=> select date_time, {{ re_data.valid_number('number')}} as is_number\n\n    number    | is_number\n--------------+-----------\n 133          |      true\n 1232.232     |     false\n")),(0,i.kt)("h3",{id:"re_datais_number_decimal_point"},(0,i.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.is_number_decimal_point"},"re_data.is_number_decimal_point")),(0,i.kt)("p",null,"Arguments:\n",(0,i.kt)("em",{parentName:"p"},"column: The column to perform validation on.")),(0,i.kt)("p",null,"Return type: boolean"),(0,i.kt)("p",null,"This macro checks if data is valid number with deciaml point."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"=> select date_time, {{ re_data.is_number_decimal_point_decimal_point('number')}} as is_number\n\n    number    | is_number_decimal_point\n--------------+-------------------------\n 133          |                   false\n 1232.232     |                    true\n")),(0,i.kt)("h3",{id:"re_datavalid_number_decimal_comma"},(0,i.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.valid_number_decimal_comma"},"re_data.valid_number_decimal_comma")),(0,i.kt)("p",null,"Arguments:\n",(0,i.kt)("em",{parentName:"p"},"column: The column to perform validation on.")),(0,i.kt)("p",null,"Return type: boolean"),(0,i.kt)("p",null,"This macro checks if data is valid number with deciaml comma."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"=> select date_time, {{ re_data.valid_number_decimal_comma('number')}} as is_number_decimal_comma\n\n    number    | is_number_decimal_comma\n--------------+-------------------------\n 133          |                   false\n 1232.232     |                   false\n 2332,123     |                    true\n")),(0,i.kt)("h3",{id:"re_datavalid_number_percentage"},(0,i.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.valid_number_percentage"},"re_data.valid_number_percentage")),(0,i.kt)("p",null,"Arguments:\n",(0,i.kt)("em",{parentName:"p"},"column: The column to perform validation on.")),(0,i.kt)("p",null,"Return type: boolean"),(0,i.kt)("p",null,"This macro checks if data is in percentage format."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"=> select date_time, {{ re_data.valid_number_percentage('number')}} as number_percentage\n\n    number    | is_percentage\n--------------+---------------\n 1,3%         |          true\n 123%         |          true\n 13  %        |         false\n 76.234%      |          true\n")),(0,i.kt)("h3",{id:"re_datavalid_number_percentage_point"},(0,i.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.valid_number_percentage_point"},"re_data.valid_number_percentage_point")),(0,i.kt)("p",null,"Arguments:\n",(0,i.kt)("em",{parentName:"p"},"column: The column to perform validation on.")),(0,i.kt)("p",null,"Return type: boolean"),(0,i.kt)("p",null,"This macro checks if data in percentage format (using point for decimals)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"=> select date_time, {{ re_data.valid_number_percentage_point('number')}} as is_percentage_decimal_point\n\n    number    | is_percentage_decimal_point\n--------------+-----------------------------\n 1,3%         |                       false\n 123%         |                        true\n 13  %        |                       false\n 76.234%      |                        true\n")),(0,i.kt)("h3",{id:"re_datavalid_number_percentage_comma"},(0,i.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.valid_number_percentage_comma"},"re_data.valid_number_percentage_comma")),(0,i.kt)("p",null,"Arguments:\n",(0,i.kt)("em",{parentName:"p"},"column: The column to perform validation on.")),(0,i.kt)("p",null,"Return type: boolean"),(0,i.kt)("p",null,"This macro checks if data in percentage format (using comma for decimals)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"=> select date_time, {{ re_data.valid_number_percentage_comma('number')}} as is_percentage_decimal_comma\n\n    number    | is_percentage_decimal_comma\n--------------+-----------------------------\n 1,3%         |                        true\n 123%         |                        true\n 13  %        |                       false\n 76.234%      |                       false\n")),(0,i.kt)("h2",{id:"ip"},"IP"),(0,i.kt)("h3",{id:"re_datavalid_ip_v4"},(0,i.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.valid_ip_v4"},"re_data.valid_ip_v4")),(0,i.kt)("p",null,"Arguments:\n",(0,i.kt)("em",{parentName:"p"},"column: The column to perform validation on.")),(0,i.kt)("p",null,"Return type: boolean"),(0,i.kt)("p",null,"This macro checks if data is valid ip_v4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"=> select ip_address, {{ re_data.valid_ip_v4('ip_address')}} as valid_ip_v4\n               ip_address               | valid_ip_v4\n----------------------------------------+-------------\n 1.2.3.4                                |        true\n 01.102.103.104                         |        true\n 124.171.228.4                          |        true\n 192.168.1.35                           |        true\n 01.1.1                                 |       false\n")),(0,i.kt)("h3",{id:"re_datavalid_ip_v6"},(0,i.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.valid_ip_v6"},"re_data.valid_ip_v6")),(0,i.kt)("p",null,"Arguments:\n",(0,i.kt)("em",{parentName:"p"},"column: The column to perform validation on.")),(0,i.kt)("p",null,"Return type: boolean"),(0,i.kt)("p",null,"This macro checks if data is valid ip_v6."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"=> select ip_address, {{ re_data.valid_ip_v6('ip_address')}} as valid_ip_v6\n               ip_address               | valid_ip_v6\n----------------------------------------+-------------\n 1.2.3.4                                |       false\n 2001:db8:3333:4444:5555:6666:7777:8888 |        true\n 2001:db8::                             |        true\n ::1234:5678                            |        true\n 2001:db8::1234:5678                    |        true\n ::11.22.33.44                          |        true\n 2001:db8::123.123.123.123              |        true\n 2001:db8::1234:5678:5.6.7.8            |        true\n 2001:db8:3333:4444:5555:6666:1.2.3.4   |        true\n ::11.22.33.44                          |        true\n 2001:db8::123.123.123.123              |        true\n ::1234:5678:91.123.4.56                |        true\n ::1234:5678:1.2.3.4                    |        true\n 2001:db8::1234:5678:5.6.7.8            |        true\n")),(0,i.kt)("h3",{id:"re_datavalid_ip"},(0,i.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.valid_ip"},"re_data.valid_ip")),(0,i.kt)("p",null,"Arguments:\n",(0,i.kt)("em",{parentName:"p"},"column: The column to perform validation on.")),(0,i.kt)("p",null,"Return type: boolean"),(0,i.kt)("p",null,"This macro checks if data is valid ip either ipv4 or ipv6."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"=> select ip_address, {{ re_data.valid_ip('ip_address')}} as valid_ip\n               ip_address               | valid_ip\n----------------------------------------+----------\n 1.2.3.4                                |     true\n 232.232.33                             |    false\n 232.3232.232.232+2312                  |    false\n ::::erwerwe                            |    false\n 2001:db8:3333:4444:5555:6666:7777:8888 |     true\n")),(0,i.kt)("h2",{id:"email"},"Email"),(0,i.kt)("h3",{id:"re_datavalid_email"},(0,i.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.valid_email"},"re_data.valid_email")),(0,i.kt)("p",null,"Arguments:\n",(0,i.kt)("em",{parentName:"p"},"column: The column to perform validation on.")),(0,i.kt)("p",null,"Return type: boolean"),(0,i.kt)("p",null,"This macro checks if data is valid email, using plus sign is not allowed (treated are error)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"=> select email, {{ re_data.valid_email('email')}} as valid_email\n              email              | valid_email\n---------------------------------+-------------\n test@fakemail.com               |        true\n novalidemail@                   |       false\n novalidemail@com                |       false\n test+alovalidemail@fakemail.com |       false\n")),(0,i.kt)("h2",{id:"uuid"},"UUID"),(0,i.kt)("h3",{id:"re_datavalid_uuid"},(0,i.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.valid_uuid"},"re_data.valid_uuid")),(0,i.kt)("p",null,"Arguments:\n",(0,i.kt)("em",{parentName:"p"},"column: The column to perform validation on.")),(0,i.kt)("p",null,"Return type: boolean"),(0,i.kt)("p",null,"This macro checks if data is valid universally unique identifier (UUID)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"=> select uuid, {{ re_data.valid_uuid('uuid')}} as valid_uuid\n                 uuid                  | valid_uuid\n---------------------------------------+------------\n ace1245c-3af5-11ec-8d3d-0242ac130003  |       true\n notanuid                              |      false\n d0d61836-3af5-11ec-8d3d-0242ac130003  |       true\n 343422-234324-234234-4234234-23432    |      false\n 343422-234324-234234-4234234-234xxx32 |      false\n")),(0,i.kt)("h2",{id:"your-ideas"},"Your ideas"),(0,i.kt)("p",null,"If you have other suggestions of validations you would like to be supported (or you would like to add one),\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://www.getre.io/slack"},"let us know on Slack! \ud83d\ude0a"))))}p.isMDXComponent=!0}}]);