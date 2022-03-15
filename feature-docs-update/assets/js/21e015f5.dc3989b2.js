"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[720],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return p}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),m=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=m(a),p=r,h=u["".concat(c,".").concat(p)]||u[p]||s[p]||i;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9594:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return d},default:function(){return u}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],o={sidebar_position:1,dbt_docs_base_url:"https://re-data.github.io/dbt-re-data"},c="Metrics",m={unversionedId:"reference/data_monitoring/metrics",id:"reference/data_monitoring/metrics",isDocsHomePage:!1,title:"Metrics",description:"How metrics look like",source:"@site/docs/reference/data_monitoring/metrics.md",sourceDirName:"reference/data_monitoring",slug:"/reference/data_monitoring/metrics",permalink:"/feature-docs-update/docs/reference/data_monitoring/metrics",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/reference/data_monitoring/metrics.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,dbt_docs_base_url:"https://re-data.github.io/dbt-re-data"},sidebar:"tutorialSidebar",previous:{title:"Config",permalink:"/feature-docs-update/docs/reference/data_monitoring/config"},next:{title:"Models",permalink:"/feature-docs-update/docs/reference/data_monitoring/models"}},d=[{value:"How metrics look like",id:"how-metrics-look-like",children:[]},{value:"Time based vs Global metrics",id:"time-based-vs-global-metrics",children:[]},{value:"Default metrics",id:"default-metrics",children:[{value:"Default Table level metrics",id:"default-table-level-metrics",children:[]},{value:"row_count",id:"row_count",children:[]},{value:"freshness",id:"freshness",children:[]},{value:"schema_changes",id:"schema_changes",children:[]},{value:"Default Column level metrics",id:"default-column-level-metrics",children:[]},{value:"min",id:"min",children:[]},{value:"max",id:"max",children:[]},{value:"avg",id:"avg",children:[]},{value:"stddev",id:"stddev",children:[]},{value:"variance",id:"variance",children:[]},{value:"min_length",id:"min_length",children:[]},{value:"max_length",id:"max_length",children:[]},{value:"avg_length",id:"avg_length",children:[]},{value:"nulls_count",id:"nulls_count",children:[]},{value:"missing_count",id:"missing_count",children:[]},{value:"missing_percent",id:"missing_percent",children:[]},{value:"nulls_percent",id:"nulls_percent",children:[]}]},{value:"Extra Metrics",id:"extra-metrics",children:[{value:"Extra Table Metrics",id:"extra-table-metrics",children:[]},{value:"distinct_table_rows",id:"distinct_table_rows",children:[]},{value:"Extra Column Metrics",id:"extra-column-metrics",children:[]},{value:"match_regex",id:"match_regex",children:[]},{value:"match_regex_percent",id:"match_regex_percent",children:[]},{value:"not_match_regex",id:"not_match_regex",children:[]},{value:"distinct_values",id:"distinct_values",children:[]},{value:"duplicate_values",id:"duplicate_values",children:[]},{value:"duplicate_rows",id:"duplicate_rows",children:[]},{value:"unique_rows",id:"unique_rows",children:[]},{value:"approx_distinct_values",id:"approx_distinct_values",children:[]}]},{value:"Defining your metric",id:"defining-your-metric",children:[]},{value:"Your metric ideas",id:"your-metric-ideas",children:[]}],s={toc:d};function u(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"metrics"},"Metrics"),(0,i.kt)("h2",{id:"how-metrics-look-like"},"How metrics look like"),(0,i.kt)("p",null,"re_data metrics are currently ",(0,i.kt)("em",{parentName:"p"},"just")," expressions which\nare added to select statements run automatically by re_data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="re_data query"',title:'"re_data','query"':!0},"select metric1, metric2, metric3\nfrom your_table\nwhere data in time_window\n")),(0,i.kt)("p",null,"These simple definitions still make it possible to create a wide variety of metrics.\nIf metrics you would like to monitor are more complicated than that, we advise creating dbt models filtering/joining/grouping data and monitoring models created with re_data."),(0,i.kt)("h2",{id:"time-based-vs-global-metrics"},"Time based vs Global metrics"),(0,i.kt)("p",null,"We recommend that most of your metrics computed would be time-based (data is then filtered by the ",(0,i.kt)("inlineCode",{parentName:"p"},"time_filter")," column specified in config."),(0,i.kt)("p",null,"In cases when such a column is not available (or for some reason you don't want to use it),\nre_data can compute global metrics for a table. Global metrics don't filter by time and work on data from the whole table. You can pass ",(0,i.kt)("inlineCode",{parentName:"p"},"time_filter: null")," in the re_data table config to compute global metrics."),(0,i.kt)("h2",{id:"default-metrics"},"Default metrics"),(0,i.kt)("p",null,"Default metrics are computed for all monitored tables. They can be either:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"table-level - metric for the whole table"),(0,i.kt)("li",{parentName:"ul"},"column-level - metric for a specific column in the table")),(0,i.kt)("p",null,"Almost all metrics can be found in the ",(0,i.kt)("inlineCode",{parentName:"p"},"re_data_metrics")," model crated by re_data.\nApart from that re_data also creates models from specific metrics (As views filtering from metrics table)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv",metastring:'title="Sample table for example metrics"',title:'"Sample',table:!0,for:!0,example:!0,'metrics"':!0},"__      title               rental_rate rating      created_at\n1       Chamber Italian     4.99        NC-17       2021-09-01T11:00:00\n2       Grosse Wonderful    4.99        R           2021-09-01T12:00:00\n3       Airport Pollock     4.99        R           2021-09-01T15:00:00\n4       Bright Encounters   4.99        PG-13       2021-09-01T09:00:00\n5       Academy Dinosaur    0.99        PG-13       2021-09-01T08:00:00\n6       Ace Goldfinger      4.99        G           2021-09-01T10:00:00\n7       Adaptation Holes    2.99        NC-17       2021-09-01T11:00:00\n8       Affair Prejudice    2.99        G           2021-09-01T19:00:00\n9       African Egg         2.99        G           2021-09-01T20:00:00\n10      Agent Truman        2.99        PG          2021-09-01T07:00:00\n11      Airplane Sierra     4.99        PG-13       2021-09-02T09:00:00\n12      Alabama Devil       2.99        PG-13       2021-09-02T10:00:00\n13      Aladdin Calendar    4.99        NC-17       2021-09-02T11:00:00\n14      Alamo Videotape     0.99        G           2021-09-02T12:00:00\n15      Alaska Phantom      0.99        PG          2021-09-02T13:00:00\n16      Date Speed          0.99        R           2021-09-02T14:00:00\n17      Ali Forever         4.99        PG          2021-09-02T15:00:00\n18      Alice Fantasia      0.99        NC-17       2021-09-02T16:00:00\n19      Alien Center        2.99        NC-17       2021-09-02T17:00:00\n")),(0,i.kt)("p",null,"Below is a list of currently available metrics and how they are computed internally by re_data:"),(0,i.kt)("h3",{id:"default-table-level-metrics"},"Default Table level metrics"),(0,i.kt)("h3",{id:"row_count"},(0,i.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_row_count"},"row_count")),(0,i.kt)("p",null,"Numbers of rows added to the table in a specific time range."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"row_count = 10 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,i.kt)("h3",{id:"freshness"},(0,i.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_freshness"},"freshness")),(0,i.kt)("p",null,"Information about the latest record in a given time frame. Suppose we are calculating the ",(0,i.kt)("inlineCode",{parentName:"p"},"freshness")," metric in the table above for the time window ",(0,i.kt)("inlineCode",{parentName:"p"},"[2021-09-01T00:00:00, 2021-09-02T00:00:00)"),". We observe that the latest record\nin that time frame appears in row 9 with ",(0,i.kt)("inlineCode",{parentName:"p"},"created_at=2021-09-01T20:00:00"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"freshness")," is the difference between the end of the time window and the latest record in the time frame in seconds. For this example described, freshness would be calculated as "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"2021-09-02T00:00:00 - 2021-09-01T20:00:00 = 14400\n")),(0,i.kt)("h3",{id:"schema_changes"},"schema_changes"),(0,i.kt)("p",null,"Information about schema changes in the monitored table."),(0,i.kt)("p",null,"Stored separately from the rest of the metrics in the ",(0,i.kt)("inlineCode",{parentName:"p"},"re_data_schema_changes")," model."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Schema changes are metric different from the rest.\nBecause information about schema changes is gathered by comparing schemas\nbetween re_data runs this metric ",(0,i.kt)("strong",{parentName:"p"},"doesn't")," filter changes to time-window specified and\nin fact, ",(0,i.kt)("strong",{parentName:"p"},"doesn't")," use time_window settings at all."))),(0,i.kt)("h3",{id:"default-column-level-metrics"},"Default Column level metrics"),(0,i.kt)("h3",{id:"min"},(0,i.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_min"},"min")),(0,i.kt)("p",null,"Minimal value appearing in a given numeric column."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"min(rental_rate) = 0.99 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,i.kt)("h3",{id:"max"},(0,i.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_max"},"max")),(0,i.kt)("p",null,"Maximal value appearing in a given numeric column."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"max(rental_rate) = 4.99 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,i.kt)("h3",{id:"avg"},(0,i.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_avg"},"avg")),(0,i.kt)("p",null,"Average of all values appearing in a given numeric column."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"avg(rental_rate) = 3.79 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,i.kt)("h3",{id:"stddev"},(0,i.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_stddev"},"stddev")),(0,i.kt)("p",null,"The standard deviation of all values appearing in a given numeric column."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"stddev(rental_rate) = 1.3984117975602022 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,i.kt)("h3",{id:"variance"},(0,i.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_variance"},"variance")),(0,i.kt)("p",null,"The variance of all values appearing in a given numeric column."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"variance(rental_rate) = 1.9555555555555557 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,i.kt)("h3",{id:"min_length"},(0,i.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_min_length"},"min_length")),(0,i.kt)("p",null,"Minimal length of all strings appearing in a given column."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"min_length(rating) = 1 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,i.kt)("h3",{id:"max_length"},(0,i.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_max_length"},"max_length")),(0,i.kt)("p",null,"Maximal length of all strings appearing in a given column"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"max_length(rating) = 5 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,i.kt)("h3",{id:"avg_length"},(0,i.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_avg_length"},"avg_length")),(0,i.kt)("p",null,"The average length of all strings appearing in a given column"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"avg_length(rating) = 2.4 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,i.kt)("h3",{id:"nulls_count"},(0,i.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_nulls_count"},"nulls_count")),(0,i.kt)("p",null,"A number of nulls in a given column."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"nulls_count(rating) = 0 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,i.kt)("h3",{id:"missing_count"},(0,i.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_missing_count"},"missing_count")),(0,i.kt)("p",null,"A number of nulls and empty string values in a given column for the specific time range."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"missing_count(rating) = 0 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,i.kt)("h3",{id:"missing_percent"},(0,i.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_missing_percent"},"missing_percent")),(0,i.kt)("p",null,"A percentage of nulls and empty string values in a given column for the specific time range."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"missing_percent(rating) = 0 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,i.kt)("h3",{id:"nulls_percent"},(0,i.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_nulls_percent"},"nulls_percent")),(0,i.kt)("p",null,"A percentage of null values in a given column for the specific time range."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"nulls_percent(rating) = 0 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,i.kt)("h2",{id:"extra-metrics"},"Extra Metrics"),(0,i.kt)("p",null,"There are metrics provided by re_data but are not computed by default in monitored tables. It is worth noting some of these metrics may be computationally heavy which is why they aren't computed by default."),(0,i.kt)("h3",{id:"extra-table-metrics"},"Extra Table Metrics"),(0,i.kt)("h3",{id:"distinct_table_rows"},(0,i.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_distinct_table_rows"},"distinct_table_rows")),(0,i.kt)("p",null,"This metric computes the distinct number of rows in the given table"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\ndistinct_rows = 10\n")),(0,i.kt)("h3",{id:"extra-column-metrics"},"Extra Column Metrics"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.regex_match_expression"},(0,i.kt)("inlineCode",{parentName:"a"},"regex_match_expression"))," is resolved at runtime depending on the database in use."))),(0,i.kt)("h3",{id:"match_regex"},(0,i.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_match_regex"},"match_regex")),(0,i.kt)("p",null,"Determines the count of values in a given column that matches the specified regex. Suppose we want to check if\nthe rating column matches a specific regular expression pattern and we define it in our dbt_project.yml file."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"regex")," ",(0,i.kt)("strong",{parentName:"li"},"must")," be specified for this metric to work else a compiler exception would be raised.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="specifying match_regex config"',title:'"specifying',match_regex:!0,'config"':!0},"vars:\n  re_data:monitored:\n    - tables:\n        - name: sample_table\n          time_filter: created_at\n\n          metrics:\n            column:\n              rating:\n                - match_regex:\n                    regex: ([0-9]+)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select coalesce(\n        sum(\n            case when {{ regex_match_expression('rating', '([0-9]+)') }}\n                then 1\n            else 0\n            end\n        ), 0\n    ) from your_table\nwhere created_at between time_window_start and time_window_end\n\n------------------------------------------------------------------------\n1       Chamber Italian     4.99        NC-17       2021-09-01T11:00:00\n4       Bright Encounters   4.99        PG-13       2021-09-01T09:00:00\n5       Academy Dinosaur    0.99        PG-13       2021-09-01T08:00:00\n7       Adaptation Holes    2.99        NC-17       2021-09-01T11:00:00\n\nmatch_regex = 4 where created_at is between 2021-09-01T00:00:00 and 2021-09-02T00:00:00\n")),(0,i.kt)("h3",{id:"match_regex_percent"},(0,i.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_match_regex_percent"},"match_regex_percent")),(0,i.kt)("p",null,"Determines the percentage of values in a given column that matches the specified regex."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Suppose we use the same configuration for the match_regex metric above, we have\nmatch_regex_percent = 40 where created_at is between 2021-09-01T00:00:00 and 2021-09-02T00:00:00\n")),(0,i.kt)("h3",{id:"not_match_regex"},(0,i.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_not_match_regex"},"not_match_regex")),(0,i.kt)("p",null,"Determines the count of values in a given column that does ",(0,i.kt)("strong",{parentName:"p"},"not")," match the specified regex."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Suppose we pass in ([0-9]+) as our regex parameter,\nnot_match_regex = 6 where created_at is between 2021-09-01T00:00:00 and 2021-09-02T00:00:00\n")),(0,i.kt)("h3",{id:"distinct_values"},(0,i.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_distinct_values"},"distinct_values")),(0,i.kt)("p",null,"Determines the count of values in a given column that are unique."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rating  count\n-----------------\nPG-13   2\nG       3\nNC-17   2\nPG      1\nR       2\ntime window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\ndistinct_values = 5. (PG)\n")),(0,i.kt)("h3",{id:"duplicate_values"},(0,i.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_duplicate_values"},"duplicate_values")),(0,i.kt)("p",null,"Determines the count of values in a given column that are duplicated."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rating  count\n-----------------\nPG-13   2\nG       3\nNC-17   2\nPG      1\nR       2\n\ntime window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\nduplicate_values = 4. (PG-13, G, NC-17, R)\n")),(0,i.kt)("h3",{id:"duplicate_rows"},(0,i.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_duplicate_rows"},"duplicate_rows")),(0,i.kt)("p",null,"Determines the count of rows in a given column that have values which are duplicates."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rating  count\n-----------------\nPG-13   2\nG       3\nNC-17   2\nPG      1\nR       2\n\ntime window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\nduplicate_count = 9. (PG-13[2], G[3], NC-17[2], R[2])\n")),(0,i.kt)("h3",{id:"unique_rows"},(0,i.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_unique_rows"},"unique_rows")),(0,i.kt)("p",null,"Determines the count of rows in a given column that have values which are unique."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rating  count\n-----------------\nPG-13   2\nG       3\nNC-17   2\nPG      1\nR       2\n\ntime window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\ndistinct_count = 1 (PG)\n")),(0,i.kt)("h3",{id:"approx_distinct_values"},(0,i.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_approx_distinct_values"},"approx_distinct_values")),(0,i.kt)("p",null,"Determines the approximate distinct count of values in a given column. This metric is useful in large tables where an approximation is sufficient and query performance is required. ",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Note:")," Postgres does not support for approximate count of distinct values unlike ",(0,i.kt)("a",{parentName:"p",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.bigquery__approx_distinct_values"},"bigquery"),", ",(0,i.kt)("a",{parentName:"p",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.snowflake__approx_distinct_values"},"snowflake")," and ",(0,i.kt)("a",{parentName:"p",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.redshift__approx_distinct_values"},"redshift"),"."),(0,i.kt)("h2",{id:"defining-your-metric"},"Defining your metric"),(0,i.kt)("p",null,"Defining your own metric is very easy.\nYou can create both table-level or column-level metrics."),(0,i.kt)("p",null,"Metrics can be defined in any place in your dbt project, as macros with names following the pattern: ",(0,i.kt)("inlineCode",{parentName:"p"},"re_data_metric_(your_name)")," "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Both column and table level metrics take a dictionary called ",(0,i.kt)("inlineCode",{parentName:"li"},"context"),". Any extra configuration passed to a metric in ",(0,i.kt)("inlineCode",{parentName:"li"},"re_data:monitored")," would be merged with the context dicionary."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},'   # Below is the structure of a context dictionary by default\n   {\n       "column_name": # contains the name of the column to compute the metric on. null in table metrics\n       "table_name": # contains the full table name for reference in metric query definition\n       "metric_name": # name of the metric being computed\n       "time_filter": # time column used to filter the time window\n   }\n')))),(0,i.kt)("p",null,"Here are examples of custom metrics (one table, one column level)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="macros/my_metrics.sql"',title:'"macros/my_metrics.sql"'},"{% macro re_data_metric_buy_count(context) %}\n    coalesce(\n        sum(\n            case when event_type = 'buy'\n                then 1\n            else 0\n            end\n        ), 0\n    )\n{% endmacro %}\n\n{% macro re_data_metric_distinct_count(context) %}\n    count(distinct( {{context.column_name}} ))\n{% endmacro %}\n")),(0,i.kt)("p",null,"Some important difference between table and column level metrics are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Table level metrics reference column names directly."),(0,i.kt)("li",{parentName:"ul"},"Column level metrics reference it through ",(0,i.kt)("inlineCode",{parentName:"li"},"context.column_name")," variable. (Which makes them more re-usable)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tip:")," When using sub queries in custom metrics, remember to filter the records to the time frame in context. We can use ",(0,i.kt)("a",{parentName:"li",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.in_time_window"},(0,i.kt)("inlineCode",{parentName:"a"},"in_time_window({{context.time_fiter}})"))," macro to achieve this. The macro ",(0,i.kt)("a",{parentName:"li",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_distinct_table_rows"},"distinct_table_rows")," is a good example.")),(0,i.kt)("h2",{id:"your-metric-ideas"},"Your metric ideas"),(0,i.kt)("p",null,"If you have other suggestions of metrics you would like supported, please let us know on ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://www.getre.io/slack"},"Slack! \ud83d\ude0a"))))}u.isMDXComponent=!0}}]);