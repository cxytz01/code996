var T=Object.defineProperty,R=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var _=(u,e,t)=>e in u?T(u,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):u[e]=t,C=(u,e)=>{for(var t in e||(e={}))M.call(e,t)&&_(u,t,e[t]);if(p)for(var t of p(e))P.call(e,t)&&_(u,t,e[t]);return u},y=(u,e)=>R(u,$(e));import{r as W}from"./index.af225479.js";import{_ as L}from"./Footer.c748d00b.js";const h=Vue.defineComponent({props:{data:{type:Array,default:()=>[]}},setup(u){const e=u,t=Vue.ref(null);function a(){new chartXkcd.Bar(t.value,{data:{labels:e.data.map(o=>o.time),datasets:[{data:e.data.map(o=>o.count)}]},options:{backgroundColor:"#212121",strokeColor:"#fff",unxkcdify:!1}})}return Vue.onMounted(()=>{Vue.nextTick(()=>{a()})}),(o,n)=>(Vue.openBlock(),Vue.createElementBlock("svg",{class:"bar-chart",ref_key:"bar",ref:t},null,512))}}),v=Vue.defineComponent({props:{data:{type:Array,default:()=>[]}},setup(u){const e=u,t=Vue.ref(null);function a(){new chartXkcd.Pie(t.value,{data:{labels:e.data.map(o=>o.time),datasets:[{data:e.data.map(o=>o.count)}]},options:{backgroundColor:"#212121",strokeColor:"#fff"}})}return Vue.onMounted(()=>{Vue.nextTick(()=>{a()})}),(o,n)=>(Vue.openBlock(),Vue.createElementBlock("svg",{class:"bar-chart",ref_key:"bar",ref:t},null,512))}});function f(u){return u.reduce((e,t)=>e+t.count,0)}function k(u,e,t=2){return+(u/e*100).toFixed(t)}function E(u=[]){return u[Math.floor(Math.random()*u.length)]}function B(u=0){const e=[-21,0,48,63,100,130,150];let t=Number.MAX_VALUE,a=0;for(let o=0;o<e.length;o++){const n=e[o],s=Math.abs(u-n);s<t&&(t=s,a=o)}return e[a]}const H={class:"table-box"},q={class:"container table"},U=Vue.createElementVNode("th",{class:"l"},"\u65F6\u95F4\u7C7B\u578B",-1),I={class:"l"},X=Vue.createElementVNode("p",{class:"tips"},"* \u9AD8\u4EAE\u5217\u4E3A\u8BE5\u9879\u76EE\u6700\u63A5\u8FD1\u7684\u6307\u6807",-1),j=Vue.defineComponent({props:{index996:Number,isStandard:Boolean},setup(u){const e=u,t=[{label:"\u65E5\u5747\u516C\u53F8\u6253\u5361\u65F6\u957F",key:"value",unit:"h"},{label:"\u65E5\u5747\u6709\u6548\u5DE5\u4F5C\u65F6\u95F4",key:"codeTime",unit:"h"},{label:"\u6BCF\u5468\u5B9E\u9645\u5DE5\u65F6",key:"weekTime",unit:"h"},{label:"\u9884\u8BA1\u6BCF\u5468\u52A0\u73ED\u65F6\u957F",key:"overtime",unit:"h"},{label:"\u52A0\u73ED\u65F6\u95F4\u5360\u6BD4",key:"overtimeRate",unit:"%"},{label:"996\u6307\u6570",key:"index996",unit:""}],a=[{type:"955",value:8,codeTime:6,weekTime:30,overtime:-7.5,overtimeRate:-16,index996:-21},{type:"965",value:9,codeTime:7.5,weekTime:37.5,overtime:0,overtimeRate:0,index996:0},{type:"966",value:9,codeTime:7.5,weekTime:45,overtime:7.5,overtimeRate:16,index996:48},{type:"995",value:12,codeTime:9.5,weekTime:47.5,overtime:10,overtimeRate:21,index996:63},{type:"996",value:12,codeTime:9.5,weekTime:57,overtime:19.5,overtimeRate:34,index996:100},{type:"997",value:12,codeTime:9.5,weekTime:66.5,overtime:29,overtimeRate:44,index996:130},{type:"9126",value:15,codeTime:12.5,weekTime:75,overtime:37.5,overtimeRate:50,index996:150}],o=Vue.ref(0);o.value=B(e.index996),Vue.watch(()=>e.index996,s=>{o.value=B(s)});const n=s=>o.value===s&&e.isStandard?"active":"";return(s,d)=>(Vue.openBlock(),Vue.createElementBlock("div",H,[Vue.createElementVNode("table",q,[Vue.createElementVNode("thead",null,[Vue.createElementVNode("tr",null,[U,(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(a,r=>Vue.createElementVNode("th",{class:Vue.normalizeClass(n(r.index996))},Vue.toDisplayString(r.type),3)),64))])]),Vue.createElementVNode("tbody",null,[(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(t,r=>Vue.createElementVNode("tr",null,[Vue.createElementVNode("td",I,Vue.toDisplayString(r.label),1),(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(a,c=>Vue.createElementVNode("td",{class:Vue.normalizeClass(n(c.index996))},Vue.toDisplayString(c[r.key])+Vue.toDisplayString(r.unit),3)),64))])),64))])]),X]))}});function z(u){const{openingTime:e,closingTime:t}=G(u),{workHourPl:a}=Y(u,e);return{openingTime:e,closingTime:t,workHourPl:a}}function G(u){const e=u.reduce((c,l)=>c+l.count**2,0)/u.length,t=Math.sqrt(e),o=u.map((c,l)=>{var i,V;const m=c.count/t;return y(C({},c),{score:m,prevScore:(c.count-(((i=u[l-1])==null?void 0:i.count)||c.count))/t,nextScore:((((V=u[l+1])==null?void 0:V.count)||c.count)-c.count)/t})}).filter(c=>c.score>=.5),n=o.filter(c=>+c.time>=8&&+c.time<=12),s=o.filter(c=>+c.time>=17&&+c.time<=23),d=n.sort((c,l)=>Number(c.time)-Number(l.time))[0],r=s.sort((c,l)=>Number(l.time)-Number(c.time))[0];return Math.abs(d==null?void 0:d.prevScore),(r==null?void 0:r.score)+(r==null?void 0:r.nextScore)<.25||(r==null?void 0:r.score)+(r==null?void 0:r.nextScore)>.5,{openingTime:d,closingTime:r}}function Y(u=[],e){const t=u.filter(i=>+i.time>=+(e==null?void 0:e.time)&&+i.time<=+(e==null?void 0:e.time)+9),a=u.filter(i=>!t.includes(i)),o=t.reduce((i,V)=>i+V.count,0),n=a.reduce((i,V)=>i+V.count,0),s=u.sort((i,V)=>V.count-i.count),d=s.slice(0,9),r=s.slice(9,s.length+1),c=d.reduce((i,V)=>i+V.count,0),l=r.reduce((i,V)=>i+V.count,0);return{workHourPl:[{time:"\u5DE5\u4F5C",count:o,timeCount:d.length},{time:"\u52A0\u73ED",count:n,timeCount:r.length}],workingTimeCount:o,workingElseTimeCount:n,top9TimeCount:c,top9ElseTimeCount:l}}function O(u){const e=u.slice(0,5),t=u[5],a=u[6],o=f(u),n={workday:f(e),saturday:t.count,sunday:a.count},s={workday:k(n.workday,o),saturday:k(n.saturday,o),sunday:k(n.sunday,o)},d=[{time:"\u5DE5\u4F5C\u65E5",count:n.workday},{time:"\u5468\u672B",count:n.saturday+n.sunday}],r=Q(s),l=[5,6,6,7,7][r-1];return{totalCount:o,commitCount:n,commitRatio:s,workDayType:r,workDayTypeValue:l,workWeekPl:d}}function Q(u){let e=1;return u.workday>=90?e=1:u.workday>=85&&u.workday<90?e=2:u.workday>=79&&u.workday<85?e=3:u.workday>=72&&u.workday<79?e=4:u.workday<72&&(e=5),e}function D(u=""){let e=[];return u.split(",").forEach(t=>{const a=t.split("_");e.push({time:a[1],count:Number(a[0])})}),e}function J(u){return[{name:"\u5468\u4E00",key:"1"},{name:"\u5468\u4E8C",key:"2"},{name:"\u5468\u4E09",key:"3"},{name:"\u5468\u56DB",key:"4"},{name:"\u5468\u4E94",key:"5"},{name:"\u5468\u516D",key:"6"},{name:"\u5468\u65E5",key:"7"}].map(t=>{const a=u.find(o=>o.time===t.key);return{time:t.name,count:(a==null?void 0:a.count)||0}})}function K(){const u=VueRouter.useRouter(),{query:e}=u.currentRoute.value;(!e.time||!e.hour||!e.week)&&u.push({name:"index",query:{error:"url_query_error"}})}function N(){const u=VueRouter.useRouter(),{query:e}=u.currentRoute.value,t=D(e.hour),a=J(D(e.week)),o=e.time.split("_"),n=`${o[0]} \u223C ${o[1]}`,s=t.reduce((d,r)=>d+r.count,0);return{hourData:t,weekData:a,timeRange:o,timeStr:n,totalCount:s}}function Z(){const{hourData:u,weekData:e,totalCount:t}=N(),{openingTime:a,closingTime:o,workHourPl:n}=z(u),{workDayTypeValue:s,workWeekPl:d}=O(e),{index996:r,index996Str:c,overTimeRadio:l}=ee({workHourPl:n,workWeekPl:d,hourData:u}),m=te({workHourPl:n,workWeekPl:d,index996:r,overTimeRadio:l}),i=Number(a==null?void 0:a.time),V=Number(o==null?void 0:o.time)%12,F=r<160||t>50;return{workingType:`${i||"?"}${V||"?"}${s||"?"}`,workingTypeStr:`\u65E9${i||"?"}\u665A${V||"?"}\u4E00\u5468${s||"?"}\u5929`,workHourPl:n,workWeekPl:d,totalCount:t,index996:r,index996Str:c,overTimeRadio:l,isStandard:F,MSG_TYPE:m}}function ee({workHourPl:u,workWeekPl:e,hourData:t}){const a=u[0].count,o=u[1].count,n=e[0].count,s=e[1].count,d=(o+a*s/(n+s)).toFixed(0),r=a+o;let c=Math.ceil(d/r*100);c===0&&t.length<9&&(c=ue({hourData:t,totalCount:r}));const l=c*3;let m="";return l<=10?m=E(["\u4EE4\u4EBA\u7FA1\u6155\u7684\u5DE5\u4F5C","\u606D\u559C\uFF0C\u4F60\u4EEC\u6CA1\u6709\u798F\u62A5","\u4F60\u5C31\u662F\u642C\u7816\u754C\u7684\u6B27\u7687\u5427"]):l>10&&l<=50?m=E(["\u4F60\u8FD8\u6709\u5269\u4F59\u4EF7\u503C"]):l>50&&l<=90?m=E(["\u52A0\u6CB9\uFF0C\u8001\u677F\u7684\u6CD5\u62C9\u5229\u9760\u4F60\u4E86"]):l>90&&l<=110?m=E(["\u597D\u5144\u5F1F\uFF0C\u4E0B\u8F88\u5B50\u522B996\u4E86","\u4F60\u7684\u798F\u62A5\u5DF2\u7ECF\u4FEE\u6EE1\u4E86"]):l>110&&(m=E(["\u4F60\u4EEC\u60F3\u5FC5\u5C31\u662F\u5377\u738B\u4E2D\u7684\u5377\u738B\u5427"])),{index996:l,index996Str:m,overTimeRadio:c}}function ue({hourData:u,totalCount:e}){const a=e/u.length*9;return Math.ceil(e/a*100)-100}function te(u){const{workHourPl:e,workWeekPl:t,overTimeRadio:a}=u;let o="";const n=e[0].count+e[1].count,s=t[0].count+t[1].count;return n!==s&&(o="commit_is_fake"),(n<100||s<100)&&(o="commit_is_low"),a>65&&(o="overTimeRadio_is_too_high"),o}const oe={class:"result"},ne=Vue.createElementVNode("h1",null,"#CODE996 Result",-1),ae={class:"main wrapper"},ce={class:"top-result container"},re={key:0},se={class:"result-line"},le={key:0,class:"score-box"},ie={class:"score-number"},de={class:"subtitle"},Ve={class:"content"},me={key:0},Ee=Vue.createTextVNode(" \u63A8\u6D4B\u4F60\u4EEC\u7684\u5DE5\u4F5C\u65F6\u95F4\u7C7B\u578B\u4E3A\uFF1A "),Fe={class:"p1"},ke={class:"p2"},pe={key:1},_e=Vue.createTextVNode(" \u63A8\u6D4B\u4F60\u4EEC\u7684\u52A0\u73ED\u65F6\u95F4\u5360\u6BD4\u4E3A\uFF1A "),Ce={class:"p1"},ye={key:0,class:"p2"},he={key:2},ve={key:0},fe={key:1},Be=Vue.createTextVNode(" \u603B commit \u6570\uFF1A "),De={class:"p1"},Ne=Vue.createTextVNode(" \u5206\u6790\u65F6\u95F4\u6BB5\uFF1A "),we={class:"p1"},Ae={key:1,class:"exp"},xe=Vue.createTextVNode(" 996\u6307\u6570\uFF1A\u4E3A0\u5219\u4E0D\u52A0\u73ED\uFF0C\u503C\u8D8A\u5927\u4EE3\u8868\u52A0\u73ED\u8D8A\u4E25\u91CD\uFF0C996\u5DE5\u4F5C\u5236\u5BF9\u5E94\u7684\u503C\u4E3A100\uFF0C\u8D1F\u503C\u8BF4\u660E\u5DE5\u4F5C\u975E\u5E38\u8F7B\u677E\u3002 "),ge={class:"content container"},be={class:"section"},Se={class:"item"},Te=Vue.createElementVNode("h2",null,"\u6309\u5C0F\u65F6commit\u5206\u5E03",-1),Re={key:0,class:"item"},$e=Vue.createElementVNode("h2",null,"\u52A0\u73ED/\u5DE5\u4F5Ccommit\u5360\u6BD4\uFF08\u6309\u5C0F\u65F6\uFF09",-1),Me={class:"section"},Pe={class:"item"},We=Vue.createElementVNode("h2",null,"\u6309\u5929commit\u5206\u5E03",-1),Le={key:0,class:"item"},He=Vue.createElementVNode("h2",null,"\u52A0\u73ED/\u5DE5\u4F5Ccommit\u5360\u6BD4\uFF08\u6309\u5929\uFF09",-1),qe=Vue.createElementVNode("h2",{id:"compare-table"},"\u5DE5\u4F5C\u65F6\u95F4\u53C2\u7167\u8868\uFF1A",-1),Ue=Vue.createElementVNode("div",{class:"container"},[Vue.createElementVNode("h2",{class:"title"},"\u6CE8\u610F\u4E8B\u9879\uFF1A"),Vue.createElementVNode("p",null,"\u5206\u6790\u7ED3\u679C\u4EC5\u4F9B\u53C2\u8003\uFF0C\u4E0D\u4EE3\u8868\u4EFB\u4F55\u5EFA\u8BAE"),Vue.createElementVNode("p",null,"\u539F\u59CB\u5206\u6790\u6570\u636E\u901A\u8FC7 URL \u4F20\u8F93\uFF0C\u8BF7\u614E\u91CD\u5206\u4EAB URL \u7ED9\u7B2C\u4E09\u65B9"),Vue.createElementVNode("p",null,"\u8BF7\u52FF\u7528\u4E8E\u6B63\u5F0F\u573A\u5408")],-1),ze=Vue.defineComponent({setup(u){const e=Vue.ref([]),t=Vue.ref([]),a=Vue.ref([]),o=Vue.ref([]),n=Vue.ref({});function s(){const{hourData:c,weekData:l,timeStr:m,totalCount:i}=N(),{workingType:V,workingTypeStr:F,index996:w,index996Str:A,overTimeRadio:x,isStandard:g,workHourPl:b,workWeekPl:S}=Z();e.value=[...c],t.value=[...l],a.value=[...b],o.value=[...S],n.value={workingType:V,workingTypeStr:F,totalCount:i,timeStr:m,index996:w,index996Str:A,overTimeRadio:x,isStandard:g}}const d=()=>{const c=document.getElementById("compare-table");c&&c.scrollIntoView({behavior:"smooth"})},r=()=>{W.push({name:"index"})};return K(),Vue.onMounted(()=>{s()}),(c,l)=>(Vue.openBlock(),Vue.createElementBlock("div",oe,[Vue.createElementVNode("div",{class:"header"},[Vue.createElementVNode("div",{class:"wrapper"},[Vue.createElementVNode("span",{class:"button back",onClick:r},"\u8FD4\u56DE"),ne])]),Vue.createElementVNode("div",ae,[Vue.createElementVNode("div",ce,[n.value.isStandard?(Vue.openBlock(),Vue.createElementBlock("h1",re,"\u8BE5\u9879\u76EE\u7684996\u6307\u6570\u662F\uFF1A")):Vue.createCommentVNode("",!0),Vue.createElementVNode("div",se,[n.value.isStandard?(Vue.openBlock(),Vue.createElementBlock("div",le,[Vue.createElementVNode("div",ie,Vue.toDisplayString(n.value.index996),1),Vue.createElementVNode("div",de,Vue.toDisplayString(n.value.index996Str),1)])):Vue.createCommentVNode("",!0),Vue.createElementVNode("div",Ve,[n.value.isStandard?(Vue.openBlock(),Vue.createElementBlock("p",me,[Ee,Vue.createElementVNode("span",Fe,Vue.toDisplayString(n.value.workingType),1),Vue.createElementVNode("span",ke,"("+Vue.toDisplayString(n.value.workingTypeStr)+")",1)])):Vue.createCommentVNode("",!0),n.value.isStandard?(Vue.openBlock(),Vue.createElementBlock("p",pe,[_e,Vue.createElementVNode("span",Ce,Vue.toDisplayString(n.value.overTimeRadio)+"%",1),n.value.index996<0?(Vue.openBlock(),Vue.createElementBlock("span",ye,"(\u5DE5\u4F5C\u4E0D\u9971\u548C)")):Vue.createCommentVNode("",!0)])):Vue.createCommentVNode("",!0),n.value.isStandard?Vue.createCommentVNode("",!0):(Vue.openBlock(),Vue.createElementBlock("p",he,[n.value.totalCount<=50?(Vue.openBlock(),Vue.createElementBlock("span",ve,"\u8BE5\u9879\u76EE\u7684commit\u6570\u91CF\u8FC7\u5C11\uFF0C\u53EA\u663E\u793A\u57FA\u672C\u4FE1\u606F")):(Vue.openBlock(),Vue.createElementBlock("span",fe,"\u8BE5\u9879\u76EE\u4E3A\u5F00\u6E90\u9879\u76EE\uFF0C\u53EA\u663E\u793A\u57FA\u672C\u4FE1\u606F"))])),Vue.createElementVNode("p",null,[Be,Vue.createElementVNode("span",De,Vue.toDisplayString(n.value.totalCount),1)]),Vue.createElementVNode("p",null,[Ne,Vue.createElementVNode("span",we,Vue.toDisplayString(n.value.timeStr),1)])])]),n.value.isStandard?(Vue.openBlock(),Vue.createElementBlock("p",Ae,[xe,Vue.createElementVNode("a",{onClick:d},"\u5177\u4F53\u53EF\u53C2\u8003\u4E0B\u65B9\u8868\u683C")])):Vue.createCommentVNode("",!0)]),Vue.createElementVNode("div",ge,[Vue.createElementVNode("div",be,[Vue.createElementVNode("div",Se,[Te,Vue.createVNode(h,{data:e.value},null,8,["data"])]),n.value.isStandard?(Vue.openBlock(),Vue.createElementBlock("div",Re,[$e,Vue.createVNode(v,{data:a.value},null,8,["data"])])):Vue.createCommentVNode("",!0)]),Vue.createElementVNode("div",Me,[Vue.createElementVNode("div",Pe,[We,Vue.createVNode(h,{data:t.value},null,8,["data"])]),n.value.isStandard?(Vue.openBlock(),Vue.createElementBlock("div",Le,[He,Vue.createVNode(v,{data:o.value},null,8,["data"])])):Vue.createCommentVNode("",!0)])]),qe,Vue.createVNode(j,{index996:n.value.index996,isStandard:n.value.isStandard},null,8,["index996","isStandard"]),Ue]),Vue.createVNode(L)]))}});export{ze as default};
