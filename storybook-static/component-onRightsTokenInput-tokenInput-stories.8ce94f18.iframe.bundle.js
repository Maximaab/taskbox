/*! For license information please see component-onRightsTokenInput-tokenInput-stories.8ce94f18.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_1_lesson=self.webpackChunk_1_lesson||[]).push([[802],{"./src/component/onRightsTokenInput/tokenInput.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TokenInputDisable:()=>TokenInputDisable,TokenInputOnFocus:()=>TokenInputOnFocus,TokenInputRights:()=>TokenInputRights,TokenInputWithError:()=>TokenInputWithError,__namedExportsOrder:()=>__namedExportsOrder,default:()=>tokenInput_stories});var react=__webpack_require__("./node_modules/react/index.js");const tokenInput_module_PageWrapper="tokenInput_PageWrapper__2OFBA",tokenInput_module_inputWrapper="tokenInput_inputWrapper__9bI4+",tokenInput_module_border="tokenInput_border__L-r9o",tokenInput_module_emailWrapper="tokenInput_emailWrapper__1iGxw",tokenInput_module_input="tokenInput_input__NoPxN",tokenInput_module_inputError="tokenInput_inputError__MzjfX",tokenInput_module_error="tokenInput_error__nf5jn";var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TokenInput=props=>{const{label,id,type,error,disabled,value,classNameInput,showBorder,err}=props,finalId=function useLabelId(id){const generatedId=(0,react.useId)();if(!id)return generatedId;return id}(id),classes={input:(0,clsx.A)(tokenInput_module_input,error&&tokenInput_module_error,classNameInput)};return(0,jsx_runtime.jsxs)("div",{className:tokenInput_module_PageWrapper,children:[(0,jsx_runtime.jsx)("div",{className:tokenInput_module_emailWrapper,children:label&&(0,jsx_runtime.jsx)("label",{htmlFor:finalId,children:label})}),(0,jsx_runtime.jsx)("div",{className:(0,clsx.A)(tokenInput_module_inputWrapper,{[tokenInput_module_border]:showBorder,[tokenInput_module_inputError]:error&&err}),children:(0,jsx_runtime.jsx)("input",{className:classes.input,id:finalId,type,value,disabled,placeholder:error?"Error":"Input"})})]})};TokenInput.__docgenInfo={description:"",methods:[],displayName:"TokenInput",props:{label:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},classNameInput:{required:!1,tsType:{name:"string"},description:""},showBorder:{required:!1,tsType:{name:"boolean"},description:""},err:{required:!1,tsType:{name:"boolean"},description:""}}};const tokenInput_stories={argTypes:{error:{control:"boolean"},label:{control:"boolean"},value:{control:"boolean"},classNameInput:{description:"Styles directly for the input tag"},showBorder:{control:"boolean"},err:{control:"boolean"}},component:TokenInput,title:"Components/TokenInput"},TokenInputRights={args:{id:"super-input-email",label:"Email",type:"email",showBorder:!0}},TokenInputWithError={args:{error:"Error",id:"super-input-error",type:"text",err:!0,showBorder:!0}},TokenInputDisable={args:{disabled:!0,id:"super-input-error",type:"text"}},TokenInputOnFocus={args:{id:"super-input-error",type:"text"}},__namedExportsOrder=["TokenInputRights","TokenInputWithError","TokenInputDisable","TokenInputOnFocus"];TokenInputRights.parameters={...TokenInputRights.parameters,docs:{...TokenInputRights.parameters?.docs,source:{originalSource:'{\n  args: {\n    id: "super-input-email",\n    label: "Email",\n    type: "email",\n    showBorder: true\n  }\n}',...TokenInputRights.parameters?.docs?.source}}},TokenInputWithError.parameters={...TokenInputWithError.parameters,docs:{...TokenInputWithError.parameters?.docs,source:{originalSource:'{\n  args: {\n    error: "Error",\n    id: "super-input-error",\n    type: "text",\n    err: true,\n    showBorder: true\n  }\n}',...TokenInputWithError.parameters?.docs?.source}}},TokenInputDisable.parameters={...TokenInputDisable.parameters,docs:{...TokenInputDisable.parameters?.docs,source:{originalSource:'{\n  args: {\n    disabled: true,\n    id: "super-input-error",\n    type: "text"\n  }\n}',...TokenInputDisable.parameters?.docs?.source}}},TokenInputOnFocus.parameters={...TokenInputOnFocus.parameters,docs:{...TokenInputOnFocus.parameters?.docs,source:{originalSource:'{\n  args: {\n    id: "super-input-error",\n    type: "text"\n  }\n}',...TokenInputOnFocus.parameters?.docs?.source}}}},"./node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);