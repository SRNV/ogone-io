const ROOT_UUID="o931933345",_ogone_node_="o-node",Ogone={types:{},root:!1,require:{},stores:{},clients:[],arrays:{},render:{},protocols:{},contexts:{},components:{},classes:{},errorPanel:null,warnPanel:null,successPanel:null,infosPanel:null,errors:0,firstErrorPerf:null,mod:{"*":[]},ComponentCollectionManager:null,instances:{},routerReactions:[],actualRoute:null,files:[],directories:[],controllers:{},main:"",allowedTypes:["app","router","store","controller","async","component"],router:{react:[],actualRoute:null,go:(...e)=>{routerGo(...e)}},get isDeno(){return"undefined"!=typeof Deno&&!!Deno.chmod}};function displayError1(){}class OgoneBaseClass extends HTMLElement{key=null;data=null;pluggedWebComponentIsSync=!1;dependencies=null;state=0;activated=!0;namespace=null;store={};contexts={for:{}};promises=[];resolve=null;async={then:null,catch:null,finally:null};dispatchAwait=null;promiseResolved=!1;react=[];texts=[];childs=[];refs={};type="component";constructor(){if(super(),!Ogone.root){let e={props:null,parentCTXId:"",dependencies:null,requirements:null,routes:null,isRoot:!0,isTemplate:!0,isTemplatePrivate:!1,isTemplateProtected:!1,isAsync:!1,isController:!1,isAsyncNode:!1,isRouter:!1,isStore:!1,isImported:!1,isRemote:!1,index:0,level:0,position:[0],flags:null,isOriginalNode:!0,uuid:ROOT_UUID,extends:"-nt"};setOgone(this,e),e=null,Ogone.root=!0}}get firstNode(){return this.nodes[0]}get lastNode(){return this.nodes[this.nodes.length-1]}get extending(){return`${this.uuid}${this.extends}`}get name(){return _ogone_node_}set name(e){}get isComponent(){return this.isTemplate}get isRecursiveConnected(){return!!(this.nodes?.length&&this.firstNode.isConnected&&this.lastNode.isConnected)}get isConnected(){return!!this.firstNode&&!!this.nodes?.find((e=>e.isConnected))}get context(){const e=this,t=this.component;if(t)return t.contexts.for[e.key]||(t.contexts.for[e.key]={list:[this],parentNode:this.parentNode,name:this.name}),t.contexts.for[e.key]}connectedCallback(){if(this.isController)this.remove();else switch(setPosition(this),setContext(this),"router"===this.type&&setActualRouterTemplate(this),this.isTemplate&&(setProps(this),OnodeUpdateProps(this)),renderingProcess(this),!0){case"router"===this.type:renderRouter(this);break;case"store"===this.type:renderStore(this);break;case"async"===this.type:renderAsync(this);break;default:renderNode(this)}}rerender(){if(this.isRoot)return Ogone.root=!1,document.body.innerHTML="",void document.body.append(document.createElement(_ogone_node_));if(this.isRouter)return this.actualRoute=null,setActualRouterTemplate(this),void renderRouter(this);for(let e=this.context.list.length,t=0;e>t;e--)destroy(this.context.list.pop());renderContext(this,!0)}}window.customElements.define(_ogone_node_,OgoneBaseClass),window.addEventListener("popstate",(e=>{routerGo(location.pathname,e.state)}));const mapProxies=new Map;function setReactivity(e,t,n=""){return new Proxy(e,{get(e,o,...s){let r;const i=`${n}.${o.toString()}`.replace(/^[^\w]+/i,"");if("prototype"===o)r=Reflect.get(e,o,...s);else{if(mapProxies.get(e[o]))return mapProxies.get(e[o]);(e[o]instanceof Object||Array.isArray(e[o]))&&!mapProxies.has(e[o])?(r=setReactivity(e[o],t,i),mapProxies.set(e[o],r)):r=Reflect.get(e,o,...s)}return r},set(e,o,s,...r){if(e[o]===s)return!0;const i=`${n}.${o.toString()}`.replace(/^[^\w]+/i,""),a=Reflect.set(e,o,s,...r);return t(i),a},deleteProperty(e,o){const s=`${n}.${o.toString()}`.replace(/^[^\w]+/i,""),r=Reflect.deleteProperty(e,o);return t(s),r}})}function _ap(e,t){t.placeholder?e.append(t,t.placeholder):e.append(t)}function _h(...e){return document.createElement(...e)}function _at(e,t,n){return e.setAttribute(t,n)}function construct(e){const t=e;if(t.type&&(e.dependencies=t.dependencies,e.isComponent)){const{data:n,runtime:o,Refs:s}=Ogone.components[t.uuid](e);e.data=n,e.component=e,e.runtime=o,e.component.runtime=o,e.component.refs=s,e.requirements=t.requirements,e.props=t.props,e.type=Ogone.types[e.extending]}}function setOgone(e,t){const n={original:e,isRemote:!1,isRoot:!1,isImported:!1,position:[0],index:0,level:0,uuid:"",extends:"-nt",positionInParentComponent:[0],levelInParentComponent:0,component:e,parentComponent:t.parentComponent,render:null,nodes:[],replacer:null,getContext:null,promise:null,routes:null,locationPath:null,actualTemplate:null,actualRouteName:null,actualRoute:null,key:`n${Math.random()}`,routeChanged:null,historyState:null,methodsCandidate:[]};if(Object.assign(e,n,t),e.renderNodes=Ogone.render[e.extending],e.isRouter){e.locationPath=location.pathname,e.routeChanged=!0;const t=new URL(location.href),n=new Map(t.searchParams.entries());e.historyState={query:n}}construct(e),Ogone.subscribeComponent&&Ogone.subscribeComponent(e)}function setNodeProps(e){const t=e,n=e;if(t&&n&&t.nodes&&t.nodeProps)for(let e of t.nodes)for(let s of t.nodeProps)n.component.react.push((()=>o(e,s))),o(e,s);function o(e,n){const o=t.getContext({position:t.position,getText:`(${n[1]})`});return e.setAttribute(n[0],o),e.isConnected}}function setPosition(e){const t=e;t.position&&"number"==typeof t.level&&"number"==typeof t.index&&(t.position[t.level]=t.index)}function setProps(e){const t=e,n=e;t&&n&&(t.index||(t.index=0),n.props=t.props,t.positionInParentComponent&&void 0===t.levelInParentComponent||(n.positionInParentComponent=t.positionInParentComponent,t.positionInParentComponent[t.levelInParentComponent]=t.index),OnodeUpdateProps(e))}function useSpread(e){const t=e,n=e;if(!n)return;const o=n.parent;let s,r;t.isTemplate&&t.flags&&t.flags.spread&&o?(s=()=>{const o=t.getContext({position:t.positionInParentComponent,getText:`{${t.flags.spread}}`});return Object.entries(o).forEach((([e,t])=>{OnodeUpdateService(n,e,t)})),e.component.activated},r=n.parent):!t.isTemplate&&t.flags&&t.flags.spread&&(s=()=>{const n=t.getContext({position:t.position,getText:`{${t.flags.spread}}`});return Object.entries(n).forEach((([e,n])=>{if(t.nodes)for(let o of t.nodes)o.setAttribute(e,n)})),e.component.activated},r=n.component),s&&s(),r&&s&&r.react.push(s)}function setNodes(e){const t=e;t.renderNodes&&(t.isTemplate?t.nodes=Array.from(t.renderNodes(e.component).childNodes):t.nodes=[t.renderNodes(e.component,t.position,t.index,t.level)],t.methodsCandidate&&t.methodsCandidate.length&&t.methodsCandidate.forEach(((e,n,o)=>{if(t.nodes)for(let n of t.nodes)n.extending?saveUntilRender(n,e):e(n);delete o[n]})))}function removeNodes(e){const t=e;if(!t.nodes)return e;function n(e){e.extending?destroy(e):e.remove()}return t.actualTemplate&&n(t.actualTemplate),t.nodes.forEach((e=>{n(e)})),e}function destroy(e){const t=e,n=e;n&&(e.context.list.forEach((e=>{removeNodes(e),e.remove()})),removeNodes(e),t.isTemplate&&(OnodeDestroyPluggedWebcomponent(n),n.component.runtime("destroy"),t.component.activated=!1,e.component.texts.splice(0),e.component.react.splice(0)),e.context.list.splice(0),e.remove())}function setEvents(e){const t=e,n=e;if(!(t.flags&&t.getContext&&n&&t.nodes))return;const o=e.isComponent?n.positionInParentComponent:t.position,s=e.isComponent?e.parentComponent:n;for(let e of t.nodes)for(let n of t.flags.events)"wheel"===n.type?e.extending?saveUntilRender(e,(r=>{r.hasWheel=!0,r.addEventListener(n.type,(r=>{const i=r.path.find((e=>e&&e.hasWheel));if((!i||i.isSameNode(e))&&t.getContext&&s){const e=t.getContext({getText:`${n.filter}`,position:o}),i=t.getContext({position:o});switch(!0){case"right"===e&&r.wheelDeltaX<0:case"left"===e&&r.wheelDeltaX>0:case"up"===e&&r.wheelDeltaY>0:case"down"===e&&r.wheelDeltaY<0:case null===e:s.component.runtime(n.case,i,r)}}}))})):(e.hasWheel=!0,e.addEventListener(n.type,(r=>{const i=r.path.find((e=>e&&e.hasWheel));if((!i||i.isSameNode(e))&&t.getContext&&s){const e=t.getContext({getText:`${n.filter}`,position:o}),i=t.getContext({position:o});switch(!0){case"right"===e&&r.wheelDeltaX<0:case"left"===e&&r.wheelDeltaX>0:case"up"===e&&r.wheelDeltaY>0:case"down"===e&&r.wheelDeltaY<0:case null===e:s.component.runtime(n.case,i,r)}}}))):n.type.startsWith("key")&&s?document.addEventListener(n.type,(e=>{const r=t.getContext({getText:`${n.filter}`,position:o}),i=t.getContext({position:o});switch(!0){case e.charCode===r:case e.key===r:case e.keyCode===r:case e.code.toLowerCase()===r:case!r:s.component.runtime(n.case,i,e)}})):"router-go"===n.name&&n.eval?e.extending?saveUntilRender(e,(e=>{e.addEventListener("click",(e=>{routerGo(t.getContext({getText:`${n.eval}`,position:o}),history.state)}))})):e.addEventListener("click",(e=>{routerGo(t.getContext({getText:`${n.eval}`,position:o}),history.state)})):"router-dev-tool"===n.name&&n.eval?e.addEventListener("click",(()=>{})):"event"===n.name&&n.type.startsWith("animation")?e.extending?saveUntilRender(e,(e=>{e.addEventListener(n.type,(e=>{if(n.eval!==e.animationName)return;const r=t.getContext({position:o});s&&s.component.runtime(n.case,r,e)}))})):e.addEventListener(n.type,(e=>{if(n.eval!==e.animationName)return;const r=t.getContext({position:o});s&&s.component.runtime(n.case,r,e)})):e.extending?saveUntilRender(e,(e=>{e.addEventListener(n.type,(e=>{const r=t.getContext({position:o});s&&s.component.runtime(n.case,r,e)}))})):e.addEventListener(n.type,(e=>{const r=t.getContext({position:o});s&&s.component.runtime(n.case,r,e)}))}function routerSearch(e,t,n){if("string"!=typeof n)return!1;const{path:o}=t,s=o.toString().split("/"),r=n.split("/"),i={};if(!s.filter((e=>e.trim().length)).length!=!r.filter((e=>e.trim().length)).length)return!1;if(s.length!==r.length)return!1;return!s.find(((e,t,n)=>{if(!e.startsWith(":"))return r[t]!==e}))&&(s.forEach(((e,t)=>{if(e.startsWith(":")){const n=e.slice(1,e.length);i[n]=r[t]}})),t.params=i,!0)}function setActualRouterTemplate(e){const t=e,n=e;n.routes=t.routes,n.locationPath=t.locationPath;const o=n.locationPath;let s=n.routes.find((t=>t.path===o||routerSearch(e,t,o)||404===t.path)),r=s&&s.params;for(;s&&s.redirect;)s=n.routes.find((e=>s&&e.name===s.redirect)),s&&(s.params=r);if(s&&(t.actualRouteName=s.name||null),s)if(s&&!s.once&&t.actualRoute!==s.component){const e=document.createElement(_ogone_node_);t.actualTemplate=e,t.actualRoute=s.component,t.routeChanged=!0;let n={isTemplate:!0,isTemplatePrivate:s.isTemplatePrivate,isTemplateProtected:s.isTemplateProtected,isRouter:s.isRouter,isStore:!1,isAsync:s.isAsync,isAsyncNode:!1,isController:!1,placeholder:new Text(" "),requirements:t.requirements,routes:t.routes,isOriginalNode:!1,dependencies:[],extends:"-nt",uuid:s.uuid,tree:t.tree,params:s.params||null,props:t.props,parentComponent:t.parentComponent,parentCTXId:t.component.parentCTXId,positionInParentComponent:t.positionInParentComponent.slice(),levelInParentComponent:t.levelInParentComponent,index:t.index,level:t.level,position:t.position,flags:t.flags,isRoot:!1,name:s.name||s.component,parentNodeKey:t.key,routerCalling:t};setOgone(e,n),n=null,e.isAsync="async"===e.type,e.isRouter="router"===e.type,e.isStore="store"===e.type,s.title&&(document.title=s.title)}else t.routeChanged=!1;else t.actualTemplate=new Text(" "),t.actualRoute=null,t.routeChanged=!0}function setNodeAsyncContext(e){const t=e;if(t.flags&&t.flags.await){const n=new Promise(((n,o)=>{try{if("boolean"==typeof t.flags.await)e.firstNode.addEventListener("load",(()=>{n(!1)}));else{const o=t.getContext({getText:t.flags.await,position:t.position});e.firstNode.addEventListener(o,(()=>{n(!1)}))}}catch(e){o(e)}}));t.component.promises.push(n)}}function setAsyncContext(e){const t=e,n=e;if(n&&(t.flags&&t.flags.then&&(n.async.then=t.flags.then),t.flags&&t.flags.catch&&(n.async.catch=t.flags.catch),t.flags&&t.flags.finally&&(n.async.finally=t.flags.finally),t.flags&&t.flags.defer)){const e=n.parentContext({getText:t.flags.defer,position:t.positionInParentComponent});n.component.promises.push(e)}}function saveUntilRender(e,t){e.methodsCandidate&&e.methodsCandidate.push(t)}function bindValue(e){const t=e,n=e;if(t.flags&&t.flags.bind&&n&&t.nodes)for(let e of t.nodes){e.addEventListener("keydown",(o=>{const s=t.flags.bind;if(t.getContext({position:t.position,getText:s})!==e.value){const o=t.getContext({position:t.position}),r=Object.values(o),i=Object.keys(o);new Function(...i,"n",`${s} = n.value;`).bind(n.component.data)(...r,e),OnodeUpdate(n,s)}})),e.addEventListener("keyup",(o=>{const s=t.flags.bind;if(t.getContext({position:t.position,getText:s})!==e.value){const o=t.getContext({position:t.position}),r=Object.values(o),i=Object.keys(o);new Function(...i,"n",`${s} = n.value;`).bind(n.component.data)(...r,e),OnodeUpdate(n,s)}})),e.addEventListener("change",(o=>{const s=t.flags.bind;if(t.getContext({position:t.position,getText:s})!==e.value){const o=t.getContext({position:t.position}),r=Object.values(o),i=Object.keys(o);new Function(...i,"n",`${s} = n.value;`).bind(n.component.data)(...r,e),OnodeUpdate(n,s)}})),n.component.react.push((t=>o(e,t))),o(e,!0)}function o(e,n){const o=t.flags.bind,s=t.getContext({position:t.position,getText:o});return!0===n&&(e.value=s),"string"==typeof n&&o.indexOf(n)>-1&&void 0!==s&&e.value!==s&&(e.value=s),e.isConnected}}function bindClass(e){const t=e,n=e;if(t.flags&&t.flags.class&&n&&t.nodes)for(let e of t.nodes)n.component.react.push((()=>o(e))),o(e);function o(e){const n=t.getContext({position:t.position,getText:t.flags.class});if("string"==typeof n)e.classList.value=n;else if("object"==typeof n){const t=Object.keys(n);e.classList.add(...t.filter((e=>n[e]))),e.classList.remove(...t.filter((e=>!n[e])))}else Array.isArray(n)&&(e.classList.value=n.join(" "));return e.isConnected}}function bindHTML(e){const t=e,n=e;if(t.flags&&t.flags.html&&n&&t.nodes&&!t.isTemplate)for(let e of t.nodes)n.component.react.push((()=>o(e))),o(e);function o(e){const n=t.getContext({position:t.position,getText:t.flags.html});return"string"==typeof n&&(e.innerHTML="",e.insertAdjacentHTML("beforeend",n)),e.isConnected}}function bindStyle(e){const t=e,n=e;if(t.flags&&t.flags.style&&n&&t.nodes)for(let e of t.nodes)n.component.react.push((()=>o(e))),o(e);function o(e){const n=t.getContext({position:t.position,getText:t.flags.style});return"string"==typeof n?Object.keys(e.style).forEach((t=>{e.style[t]=n[t]})):"object"==typeof n&&Object.entries(n).forEach((([t,n])=>e.style[t]=n)),e.isConnected}}function setContext(e){const t=e;if(t.key){if(t.isTemplate){if(t.parentComponent&&(t.parent=t.parentComponent,t.parent.childs.push(t)),Ogone.contexts[t.component.parentCTXId]&&t.parentComponent){const e=Ogone.contexts[t.component.parentCTXId].bind(t.parentComponent.data);t.parentContext=e,t.getContext=e}}else Ogone.contexts[e.extending]&&t&&t.component&&(t.getContext=Ogone.contexts[e.extending].bind(t.component.data));"store"===t.type&&t.parent&&(t.namespace=e.getAttribute("namespace")||void 0,t.parent.store[t.namespace]=t)}}function renderSlots(e){const t=e;if(!t.nodes)return;const n=Array.from(e.querySelectorAll("[slot]"));for(let n of t.nodes.filter((e=>1===e.nodeType))){const t=n.querySelector("slot:not([name])");t&&t.replaceWith(...Array.from(e.childNodes))}for(let e of n){const n=e.getAttribute("slot");for(let o of t.nodes){const t=o.querySelector(`slot[name="${n}"]`);t&&(e.removeAttribute("slot"),t.replaceWith(e))}}}function renderNode(e){const t=e,n=e;if(e)if(t.isTemplate){if(OnodeUpdateProps(e),t.isTemplatePrivate||t.isTemplateProtected){e.attachShadow({mode:t.isTemplatePrivate?"closed":"open"}).append(...t.nodes)}else e.childNodes.length&&renderSlots(e),"async"===t.type?e.placeholder.replaceWith(...t.nodes,e.placeholder):e.replaceWith(...t.nodes);OnodeRenderTexts(e,!0),"async"!==t.type&&OnodeTriggerDefault(n,{router:{params:t.params,state:history.state,path:location.pathname}})}else e.childNodes.length&&renderSlots(e),e.replaceWith(...t.nodes)}function renderStore(e){const t=e,n=e;if(n){if(n.namespace!==t.namespace){const e="the attribute namespace is not the same provided in the component store",o=new Error(`[Ogone] ${e}`);throw displayError(e,"Store Module: Bad Namsepace Exception",new Error(`\n      store namespace: ${t.namespace}\n      attribute namespace: ${n.namespace}\n      `)),o}OnodeTriggerDefault(n),removeNodes(e),e.remove()}}function renderRouter(e){const t=e,n=e;n&&(OnodeUpdateProps(e),t.replacer||(t.replacer=document.createElement("section")),e.parentNode&&e.replaceWith(t.replacer),t.routeChanged&&(t.replacer.innerHTML="",t.replacer.append(t.actualTemplate,t.actualTemplate.placeholder)),n.component.runtime(`router:${t.actualRouteName||t.locationPath}`,history.state))}function renderAsyncRouter(e){const t=e;if(!t.nodes)return;const n=e=>e.isComponent&&e.isRouter,o=t.nodes.filter(n);for(let e of t.nodes.filter((e=>1===e.nodeType))){const t=Array.from(e.querySelectorAll(_ogone_node_)).filter(n);for(let e of t)o.push(e)}for(let e of o)e.connectedCallback()}function renderAsyncStores(e){const t=e;if(!t.nodes)return;const n=e=>e.isComponent&&e.component&&e.isStore,o=t.nodes.filter(n);for(let e of t.nodes.filter((e=>1===e.nodeType))){const t=Array.from(e.querySelectorAll(_ogone_node_)).filter(n);for(let e of t)o.push(e)}for(let e of o)e.connectedCallback(),removeNodes(e),e.remove()}function renderAsyncComponent(e){const t=e,n=e;if(!n||!t||!t.nodes)return;const o=e=>e.isComponent&&e.isAsync&&e.flags&&e.flags.await;for(let e of t.nodes.filter((e=>1===e.nodeType))){const s=Array.from(e.querySelectorAll(_ogone_node_)).filter(o);e.isComponent&&e&&e.component&&"async"===e.component.type&&s.push(e);for(let e of s)if(e.component){const o=new CustomEvent(`${t.key}:${e.key}:resolve`);e.component.dispatchAwait=()=>{e.dispatchEvent(o)};const s=new Promise((n=>{e&&e.component.promiseResolved?n(!0):e.addEventListener(`${t.key}:${e.key}:resolve`,(()=>{n(!0)}))}));n.component.promises.push(s)}}}function renderComponent(e){const t=e;if(!t.nodes)return;const n=e=>e.component&&"component"===e.component.type;for(let e of t.nodes.filter((e=>1===e.nodeType))){const t=Array.from(e.querySelectorAll(_ogone_node_)).filter(n);let o=e;o.isComponent&&o.extending&&o.component&&"component"===o.component.type&&t.push(o);for(let e of t)renderingProcess(e)}}function renderAsync(e,t){const n=e,o=e;if(!o)return;renderAsyncStores(e),renderAsyncRouter(e),renderComponent(e),renderAsyncComponent(e);const s=Array.from(e.childNodes),r=e.placeholder;s.length||e.isTemplatePrivate||e.isTemplateProtected||e.replaceWith(r),o.component.resolve=(...s)=>new Promise((t=>{setTimeout((()=>{setAsyncContext(e),t(!0)}),0)})).then((()=>{Promise.all(o.component.promises).then((n=>{renderNode(e),o.async.then&&t&&o.parent&&o.parent.runtime(o.async.then,{value:s,await:n})})).catch((e=>{o.async.catch&&t&&o.parent&&o.parent.runtime(o.async.catch,e),displayError(e.message,`Error in Async component. component: ${n.name}`,e)})).finally((()=>{o.async.finally&&t&&o.parent&&o.parent.runtime(o.async.finally)}))})),OnodeTriggerDefault(o,n.params,n.historyState)}function renderingProcess(e){const t=e;setNodes(e),t.isAsyncNode&&setNodeAsyncContext(e),t.isOriginalNode&&setDeps(e),!t.isTemplate&&t.nodeProps&&setNodeProps(e),setEvents(e),bindClass(e),bindStyle(e),bindValue(e),bindHTML(e),useSpread(e),"router"===t.type&&triggerLoad(e)}function renderContext(e,t){const n=e;if(!(t||e&&n.getContext&&n.isOriginalNode))return!1;if(!n.getContext)return!1;const o=n.getContext({getLength:!0,position:n.position});return OnodeListRendering(e,{callingNewComponent:n.isTemplate,length:o}),!0}function triggerLoad(e){const t=e,n=e;if(!n)return;const o=Ogone.routerReactions;n.component.runtime(0,t.historyState),o.push((o=>(t.locationPath=o,setActualRouterTemplate(e),renderRouter(e),n.component.activated)))}function setDeps(e){const t=e;t.isOriginalNode&&t.getContext&&t.original&&((t.isComponent&&t.parentComponent?t.parentComponent:t.component).react.push((()=>renderContext(t))),renderContext(t))}function routerGo(e,t){Ogone.actualRoute!==e&&(Ogone.actualRoute=e,Ogone.routerReactions.forEach(((n,o,s)=>{n&&!n(e,t)&&delete s[o]})),history.pushState(t||{},"",e||"/"))}function OnodeTriggerDefault(e,t,n){e.component.activated&&("store"===e.type&&initStore(e),OnodeUpdateProps(e),e.component.runtime(0,t,n))}function OnodeUpdate(e,t){"store"!==e.type?(e.component.runtime(`update:${t}`),OnodeReactions(e,t),OnodeRenderTexts(e,t),e.component.childs.filter((e=>"store"!==e.type)).forEach((e=>{OnodeUpdateProps(e,t)}))):OnodeUpdateStore(e,t)}function OnodeRenderTexts(e,t,n={}){e.component.texts.forEach(((n,o,s)=>{const{code:r,position:i,dependencies:a,getContext:c}=n;if(!a||a.includes(t))if(e.component.activated){if(!c)return delete s[o];if("string"==typeof t&&r.indexOf(t)<0)return;const e=c({getText:r,position:i});n.data!==e&&(n.data=e.length?e:" ")}else delete s[o]}))}function OnodeReactions(e,t){e.component.react.forEach(((e,n,o)=>{e&&!e(t)&&delete o[n]}))}function initStore(e){Ogone.stores[e.namespace]||(Ogone.stores[e.namespace]={...e.component.data}),Ogone.clients.push([e.key,(t,n,o)=>{const s=e.parentComponent,{data:r}=e.component;return t===e.namespace&&r&&s&&s.data&&(o?Ogone.stores[e.namespace][n]=r[n]:r[n]=Ogone.stores[e.namespace][n],s.data[n]!==r[n]&&(s.data[n]=r[n],OnodeUpdate(s,n))),e.component.activated}])}function OnodeUpdateStore(e,t){const[n,o]=Ogone.clients.find((([t])=>t===e.key));o&&(o(e.component.namespace,t,!0),Ogone.clients.filter((([t])=>t!==e.key)).forEach((([n,o],s,r)=>{o&&!o(e.component.namespace,t,!1)&&delete r[s]})))}function OnodeUpdateService(e,t,n,o){const{data:s}=e.component;if(s&&n!==s[t]||o&&s){const o=s[t];if(s[t]=n,e.pluggedWebComponentIsSync&&(e.pluggedWebComponent&&"function"==typeof e.pluggedWebComponent.beforeUpdate&&e.pluggedWebComponent.beforeUpdate(t,s[t],n),e.pluggedWebComponent&&n!==e.pluggedWebComponent[t]&&(e.pluggedWebComponent[t]=n)),e.pluggedWebComponent&&"function"==typeof e.pluggedWebComponent.attributeChangedCallback&&e.pluggedWebComponent.attributeChangedCallback(t,o,n),OnodeUpdate(e,t),"async"===e.type){if(!e.dependencies)return;t&&e.dependencies.find((e=>e.indexOf(t)>-1))&&e.component.runtime("async:update",{updatedParentProp:t})}}}function OnodeUpdateProps(e,t){e.component.activated&&"store"!==e.type&&e?.component?.requirements&&e.props&&e.component.requirements.forEach((([n])=>{const o=e.props.find((e=>e[0]===n));if(!o)return;const s=e.parentContext({getText:`${o[1]}`,position:e.positionInParentComponent});OnodeUpdateService(e,n,s,!!t)}))}function OnodeDestroyPluggedWebcomponent(e){e.pluggedWebComponent&&"function"==typeof e.pluggedWebComponent.beforeDestroy&&e.pluggedWebComponent.beforeDestroy(),e.pluggedWebComponent&&(e.pluggedWebComponent=!1,e.pluggedWebComponentIsSync=!1)}function OnodeListRendering(e,t){if(!e||!t)return;let{callingNewComponent:n,length:o}=t;"object"!=typeof o||(o=1);const s=e.context;if(s&&s.list.length!==o){for(let t=s.list.length,r=o;t<r;t++){let o;o=document.createElement(s.name,{is:e.extending});let r={type:e.type,index:t,isOriginalNode:!1,level:e.level,placeholder:new Text(" "),position:e.position.slice(),flags:e.flags,original:e,isRoot:!1,name:e.name,tree:e.tree,namespace:e.namespace,isTemplate:e.isTemplate,isTemplatePrivate:e.isTemplatePrivate,isTemplateProtected:e.isTemplateProtected,isImported:e.isImported,isAsync:e.isAsync,isAsyncNode:e.isAsyncNode,isRouter:e.isRouter,isStore:e.isStore,isRemote:e.isRemote,extends:e.extends,uuid:e.uuid,routes:e.routes,parentNodeKey:e.parentNodeKey};Object.assign(r,n?{props:e.props,dependencies:e.dependencies,requirements:e.requirements,params:e.params,parentComponent:e.parentComponent,parentCTXId:e.parentCTXId,positionInParentComponent:e.positionInParentComponent?e.positionInParentComponent.slice():[],levelInParentComponent:e.levelInParentComponent}:{component:e.component,nodeProps:e.nodeProps}),setOgone(o,r),r=null,e.placeholder.replaceWith(o,e.placeholder),s.list.push(o)}if(s.list.length!==o){for(let e=s.list.length,t=o;e>t;e--)destroy(s.list.pop());return!0}}}const ogone_types_component="component",ogone_types_async="async",___template_="template",___div_="div",___space_="space",___img_="img",o931933345="o931933345",o931933345_nt="o931933345-nt",o931933345_n9="o931933345-n9",o3714168153="o3714168153",o3714168153_nt="o3714168153-nt",o3714168153_n5="o3714168153-n5",o3714168153_n6="o3714168153-n6",o3714168153_n7="o3714168153-n7",o3714168153_n8="o3714168153-n8",o3714168153_t19="o3714168153-t19",o3714168153_n10="o3714168153-n10",o3714168153_t24="o3714168153-t24",o3606436968="o3606436968",o3606436968_nt="o3606436968-nt",o3606436968_n5="o3606436968-n5",o3606436968_nd6="o3606436968-nd6";Ogone.types[o931933345_nt]=ogone_types_component,Ogone.types[o3714168153_nt]=ogone_types_component,Ogone.types[o3606436968_nd6]=ogone_types_async,Ogone.types[o3606436968_nt]=ogone_types_async,Ogone.components[o931933345]=function(e){const t={};return{data:t,Refs:{},runtime:function(e,t,n,o=0){try{e}catch(e){throw displayError1("Error in the component: \n\t ./src/App.o3",e.message,e),e}}.bind(t)}},Ogone.components[o3714168153]=function(e){const t={};Ogone.protocols[o3714168153]=Ogone.protocols[o3714168153]||class{expose=!1};const n=setReactivity(new Ogone.protocols[o3714168153],(t=>OnodeUpdate(e,t)));return{data:n,Refs:t,runtime:function(e,n,o,s=0){try{if("string"==typeof e&&![].includes(e))return;{const[e]=t.container,n=e.getBoundingClientRect();document.addEventListener("mousemove",(e=>{e.clientX<n.width?this.expose=!0:this.expose=!1,console.warn("expose",this.expose,e,n)}))}}catch(e){throw displayError1("Error in the component: \n\t ./src/components/Header.o3",e.message,e),e}}.bind(n)}},Ogone.components[o3606436968]=function(e){const t={resolve:(...t)=>{if(e.component.resolve){const n=e.component.resolve(...t);return e.component.dispatchAwait&&(e.component.dispatchAwait(),e.component.dispatchAwait=!1,e.component.promiseResolved=!0),e.component.resolve=null,n}if(null===e.component.resolve){const e=new Error("Double use of resolution in async component");throw displayError1(e.message,"Double Resolution of Promise",{message:"component: ./src/components/AsyncLogo.o3"}),e}}};Object.freeze(t);const n={};return{data:n,Refs:{},runtime:async function(e,n,o,s=0){try{if("string"==typeof e&&![].includes(e))return;t.resolve()}catch(e){throw displayError1("Error in the component: \n\t ./src/components/AsyncLogo.o3",e.message,e),e}}.bind(n)}},Ogone.contexts[o3606436968_nt]=function(opts){const GET_TEXT=opts.getText,GET_LENGTH=opts.getLength,POSITION=opts.position;try{return GET_TEXT?eval("("+GET_TEXT+")"):{}}catch(e){return void 0}},Ogone.contexts[o3606436968_n5]=Ogone.contexts[o3606436968_nt],Ogone.contexts[o3606436968_nd6]=function(opts){const GET_TEXT=opts.getText,GET_LENGTH=opts.getLength,POSITION=opts.position;try{return GET_TEXT?eval("("+GET_TEXT+")"):{}}catch(e){return void 0}},Ogone.contexts[o3714168153_nt]=function(opts){const GET_TEXT=opts.getText,GET_LENGTH=opts.getLength,POSITION=opts.position;try{return GET_TEXT?eval("("+GET_TEXT+")"):{}}catch(e){return void 0}},Ogone.contexts[o3714168153_n5]=Ogone.contexts[o3714168153_nt],Ogone.contexts[o3714168153_n10]=Ogone.contexts[o3714168153_n5],Ogone.contexts[o3714168153_t24]=Ogone.contexts[o3714168153_n10],Ogone.contexts[o3714168153_n8]=Ogone.contexts[o3714168153_n5],Ogone.contexts[o3714168153_t19]=Ogone.contexts[o3714168153_n8],Ogone.contexts[o3714168153_n7]=Ogone.contexts[o3714168153_n5],Ogone.contexts[o3714168153_n6]=Ogone.contexts[o3714168153_n5],Ogone.contexts[o931933345_nt]=function(opts){const GET_TEXT=opts.getText,GET_LENGTH=opts.getLength,POSITION=opts.position;try{return GET_TEXT?eval("("+GET_TEXT+")"):{}}catch(e){return void 0}},Ogone.contexts[o931933345_n9]=Ogone.contexts[o931933345_nt],Ogone.render[o931933345_nt]=function(e,t=[],n=0,o=0){let s=t.slice(),r=null;const i=_h(___template_),a=_h(_ogone_node_);return _at(i,o931933345,""),o++,r={isRoot:!1,isOriginalNode:!0,original:a,placeholder:new Text(" "),name:"Header",tree:"null>Header",flags:{events:[],else:!1},isTemplate:!0,isTemplatePrivate:!1,isTemplateProtected:!1,isAsync:!1,isRouter:!1,isStore:!1,isController:!1,isAsyncNode:!1,isImported:!0,isRemote:!1,extends:"-nt",uuid:"o931933345",positionInParentComponent:s,levelInParentComponent:o,parentComponent:e,parentCTXId:"o931933345-n9",props:[],uuid:"o3714168153",routes:null,namespace:"",requirements:[],dependencies:[]},a.placeholder=r.placeholder,setOgone(a,r),r=null,_at(a,o931933345,""),o--,_ap(i,a),i},Ogone.render[o3714168153_nt]=function(e,t=[],n=0,o=0){let s=t.slice(),r=null;const i=_h(___template_),a=_h(___div_),c=_h(_ogone_node_),p=_h(___space_),l=_h(___div_),d=_h(___div_);return _at(i,o3714168153,""),o++,_at(a,o3714168153,""),e.refs.container=e.refs.container||[],e.refs.container[n]=a,_at(a,"class","container"),o++,r={isRoot:!1,isOriginalNode:!0,original:c,placeholder:new Text(" "),name:"AsyncLogo",tree:"null>div>AsyncLogo",flags:{events:[],else:!1},isTemplate:!0,isTemplatePrivate:!1,isTemplateProtected:!1,isAsync:!0,isRouter:!1,isStore:!1,isController:!1,isAsyncNode:!1,isImported:!0,isRemote:!1,extends:"-nt",uuid:"o3714168153",positionInParentComponent:s,levelInParentComponent:o,parentComponent:e,parentCTXId:"o3714168153-n6",props:[],uuid:"o3606436968",routes:null,namespace:"",requirements:null,dependencies:[]},c.placeholder=r.placeholder,setOgone(c,r),r=null,_at(c,o3714168153,""),_at(p,o3714168153,""),_at(l,o3714168153,""),_at(l,"class","item"),_ap(l,"Docs"),_at(d,o3714168153,""),_at(d,"class","item"),_ap(d,"Api"),o--,_ap(a,c),_ap(a,p),_ap(a,l),_ap(a,d),o--,_ap(i,a),i},Ogone.render[o3606436968_nd6]=function(e,t=[],n=0,o=0){t.slice();const s=_h(___img_);return _at(s,o3606436968,""),_at(s,"src","./ogone-svg.svg"),s},Ogone.render[o3606436968_nt]=function(e,t=[],n=0,o=0){let s=t.slice(),r=null;const i=_h(___template_),a=_h(___div_),c=_h(_ogone_node_);return _at(i,o3606436968,""),o++,_at(a,o3606436968,""),_at(a,"class","back"),o++,r={isRoot:!1,isOriginalNode:!0,original:c,placeholder:new Text(" "),tree:"null>div>img",position:s,level:o,index:n,component:e,flags:{await:!0,events:[],else:!1},isTemplate:!1,isTemplatePrivate:!1,isTemplateProtected:!1,isAsync:!1,isRouter:!1,isStore:!1,isController:!1,isAsyncNode:!0,isImported:!1,isRemote:!1,extends:"-nd6",uuid:"o3606436968"},c.placeholder=r.placeholder,setOgone(c,r),r=null,e.promises.push(new Promise((e=>{c.connectedCallback();for(let t of c.nodes)t.addEventListener("load",(()=>{e()}))}))),_at(c,o3606436968,""),o--,_ap(a,c),o--,_ap(i,a),i};