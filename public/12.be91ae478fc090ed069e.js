webpackJsonp([12],{1060:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("component-view",{attrs:{doc:e.doc}})},staticRenderFns:[]}},687:function(e,t,i){function a(e){i(941)}var r=i(9)(i(850),i(1060),a,null,null);e.exports=r.exports},850:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{doc:{component:"pickers",edit:"PickersView",title:"Pickers",desc:"The <code>v-date-picker</code> and <code>v-time-picker</code> are stand-alone components that can be utilized in many existing Vuetify components. They offer the user a visual reprensetation for selecting date and time.",examples:[{header:"Date pickers - Light",file:"pickers/1",desc:"Date pickers come in two orientation variations, portrait <strong>(default)</strong> and landscape."},{header:"Date pickers - Dark",file:"pickers/2",desc:"Date pickers come in a dark variant which utilizes the applications primary accent color."},{header:"Date pickers - In dialog and menu",file:"pickers/3",desc:"<p>When integrating a picker into a <code>v-text-field</code>, it is recommended to use the <strong>readonly</strong> prop. This will prevent mobile keyboards from triggering. To save vertical space, you can also hide the picker title.</p><p>Pickers expose a scoped slot that allow you to hook into save and cancel functionality. This will maintain an old value which can be replaced if the user cancels.</p>"},{header:"Date pickers - Allowed dates",file:"pickers/11",desc:"You can specify allowed dates using arrays, objects, and functions."},{header:"Custom format",file:"pickers/12",desc:"You can specify a custom date format. This will be returned through the <prop>formatted-value</code> prop. Using the sync property (new in Vue 2.3), you can link up a formatted version of the date."},{header:"Time pickers - Light",file:"pickers/4",desc:"Time pickers have the light theme enabled by default."},{header:"Time pickers - Dark",file:"pickers/5",desc:"An alternate dark theme can be used for dark theme applications."},{header:"Time pickers - In dialog and menu",file:"pickers/6",desc:"Due to the flexibility of pickers, you can really dial in the experience exactly how you want it."},{header:"Time pickers - 24h format",file:"pickers/7",desc:"A time picker can be switched to 24hr format."}],props:{"v-date-picker":{model:{type:["null, String, Date Object, Number"],default:"null",description:"Controls the displayed date."},params:[["actions","Boolean","True","Use this when using actions inside the picker"],["dark","Boolean","True","Applies the dark theme"],["landscape","Boolean","True","Orients picker horizontal"],["no-title","Boolean","True","Hide the picker title"],["date-format","Function","val => new Date(val).toISOString().substr(0, 10)","This is the date format emitted on the <strong>formatted-value</strong> prop when the picker's model changes."],["formatted-value","Function","val => new Date(val).toISOString().substr(0, 10)","This is the formatted value."],["days","Array","[Sunday -> Saturday]","Used to change the day text. Does NOT support changing the order"],["months","Array","[January -> December]","Used to change the month text. Does NOT support changing the order"],["scrollable","Boolean","False","Allows the use of the mousewheel in the picker"],["allowed-dates","Array, Object, Function","null","Restricts which dates can be selected"]]},"v-time-picker":{model:{type:["String"],default:"null",description:"Controls the displayed time."},params:[["actions","Boolean","True","Use this when using actions inside the picker"],["dark","Boolean","True","Applies the dark theme"],["landscape","Boolean","True","Orients picker horizontal"],["no-title","Boolean","True","Hide the picker title"],["format","String","ampm","Available options are ['ampm', '24hr']"],["scrollable","Boolean","False","Allows the use of the mousewheel in the picker"]]}}}}},mounted:function(){this.$emit("view",this.meta())},preFetch:function(){return this.methods.meta()},methods:{meta:function(){return{title:"Pickers | Vuetify.js",h1:"Pickers",description:"Pickers directive for Vuetify Framework",keywords:"vuetify, pickers, directives"}}}}},896:function(e,t,i){t=e.exports=i(452)(void 0),t.push([e.i,"#pickers-view{min-height:150vh}#pickers-view .component-example .col{margin:1rem auto}",""])},941:function(e,t,i){var a=i(896);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(453)("4c77f24f",a,!0)}});