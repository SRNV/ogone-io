
      import { Ogone } from 'file:///home/rudy/Documents/Perso/Ogone/src/main/OgoneBase.ts';
      import {
        setReactivity,
        _h,
        _ap,
        _at,
        imp,
        construct,
        setOgone,
        setNodeProps,
        setPosition,
        setProps,
        useSpread,
        setNodes,
        removeNodes,
        destroy,
        setEvents,
        routerSearch,
        setActualRouterTemplate,
        setNodeAsyncContext,
        setAsyncContext,
        OnodeRecycleWebComponent,
        saveUntilRender,
        bindValue,
        bindClass,
        bindHTML,
        bindStyle,
        setContext,
        setDevToolContext,
        displayError,
        showPanel,
        infosMessage,
        hmr,
        hmrTemplate,
        hmrRuntime,
        startConnection,
        createClient,
        renderSlots,
        renderNode,
        renderStore,
        renderRouter,
        renderAsyncRouter,
        renderAsyncStores,
        renderAsyncComponent,
        renderComponent,
        renderAsync,
        renderingProcess,
        renderContext,
        triggerLoad,
        setDeps,
        setHMRContext,
        routerGo,
        OnodeTriggerDefault,
        OnodeUpdate,
        OnodeRenderTexts,
        OnodeReactions,
        initStore,
        OnodeUpdateStore,
        OnodeUpdateService,
        OnodeUpdateProps,
        OnodePlugWebComponent,
        OnodeDestroyPluggedWebcomponent,
        OnodeListRendering,
      } from 'file:///home/rudy/Documents/Perso/Ogone/src/main/Ogone.ts';
      // outputs
      Ogone.types["data-3106648828-nt"] = "component";
Ogone.types["data-1749377316-nd6"] = "async";
Ogone.types["data-1749377316-nt"] = "async";
Ogone.components['data-3106648828'] = function(Onode) {
    const data = {
    };
    let Controllers;
    let Store;
    const ___ = (prop, inst, value)=>{
        OnodeUpdate(Onode, prop);
        return value;
    };
    const ____r = (name, use, once)=>{
        Onode.component.runtime(name, use[0], use[1], once);
    };
    const Refs = {
    };
    let Async;
    return {
        data,
        Refs,
        runtime: (function runtime(_state, ctx, event, _once = 0) {
            try {
                switch(_state){
                    default:
                }
            } catch (err) {
                displayError('Error in the component: \n\t src/App.o3', err.message, err);
                throw err;
            }
        }).bind(data)
    };
};
Ogone.components['data-1749377316'] = function(Onode) {
    const data = {
    };
    let Controllers;
    let Store;
    const ___ = (prop, inst, value)=>{
        OnodeUpdate(Onode, prop);
        return value;
    };
    const ____r = (name, use, once)=>{
        Onode.component.runtime(name, use[0], use[1], once);
    };
    const Refs = {
    };
    const Async = {
        resolve: (...args)=>{
            if (Onode.component.resolve) {
                const promise = Onode.component.resolve(...args);
                if (Onode.component.dispatchAwait) {
                    Onode.component.dispatchAwait();
                    Onode.component.dispatchAwait = false;
                    Onode.component.promiseResolved = true;
                }
                Onode.component.resolve = null;
                return promise;
            } else if (Onode.component.resolve === null) {
                const DoubleUseOfResolveException = new Error('Double use of resolution in async component');
                displayError(DoubleUseOfResolveException.message, 'Double Resolution of Promise', {
                    message: `component: src/components/AsyncLogo.o3`
                });
                throw DoubleUseOfResolveException;
            }
        }
    };
    // freeze Async Object;
    Object.freeze(Async);
    return {
        data,
        Refs,
        runtime: (async function runtime(_state, ctx, event, _once = 0) {
            try {
                if (typeof _state === "string" && ![].includes(_state)) {
                    return;
                }
                switch(_state){
                    default:
                        Async.resolve();
                }
            } catch (err) {
                displayError('Error in the component: \n\t src/components/AsyncLogo.o3', err.message, err);
                throw err;
            }
        }).bind(data)
    };
};
Ogone.contexts['data-1749377316-nt'] = function(opts) {
    const GET_TEXT = opts.getText;
    const GET_LENGTH = opts.getLength;
    const POSITION = opts.position;
    try {
        if (GET_TEXT) {
            return eval('(' + GET_TEXT + ')');
        }
        return {
        };
    } catch (err) {
        if (typeof undefined === 'undefined' || !undefined) {
            return undefined;
        }
        displayError('Error in component:\n\t src/components/AsyncLogo.o3 ' + `${GET_TEXT}`, err.message, err);
        throw err;
    }
};
Ogone.contexts['data-1749377316-n5'] = Ogone.contexts['data-1749377316-nt'];
Ogone.contexts['data-1749377316-nd6'] = function(opts) {
    const GET_TEXT = opts.getText;
    const GET_LENGTH = opts.getLength;
    const POSITION = opts.position;
    try {
        if (GET_TEXT) {
            return eval('(' + GET_TEXT + ')');
        }
        return {
        };
    } catch (err) {
        if (typeof undefined === 'undefined' || !undefined) {
            return undefined;
        }
        displayError('Error in component:\n\t src/components/AsyncLogo.o3 ' + `${GET_TEXT}`, err.message, err);
        throw err;
    }
};
Ogone.contexts['data-1749377316-n3'] = Ogone.contexts['data-1749377316-nt'];
Ogone.contexts['data-1749377316-t7'] = Ogone.contexts['data-1749377316-n3'];
Ogone.contexts['data-3106648828-nt'] = function(opts) {
    const GET_TEXT = opts.getText;
    const GET_LENGTH = opts.getLength;
    const POSITION = opts.position;
    try {
        if (GET_TEXT) {
            return eval('(' + GET_TEXT + ')');
        }
        return {
        };
    } catch (err) {
        if (typeof undefined === 'undefined' || !undefined) {
            return undefined;
        }
        displayError('Error in component:\n\t src/App.o3 ' + `${GET_TEXT}`, err.message, err);
        throw err;
    }
};
Ogone.contexts['data-3106648828-n9'] = Ogone.contexts['data-3106648828-nt'];
Ogone.contexts['data-3106648828-n10'] = Ogone.contexts['data-3106648828-n9'];
Ogone.contexts['data-3106648828-n7'] = Ogone.contexts['data-3106648828-nt'];
Ogone.contexts['data-3106648828-t17'] = Ogone.contexts['data-3106648828-n7'];
Ogone.render['data-3106648828-nt'] = function(ctx, pos = [], i = 0, l = 0) {
    let p = pos.slice();
    let o = null;
    const nt = _h('null'), n7 = _h('style'), t17 = `.head[data-3106648828] { background: #efefef;border-bottom: 1px solid #ccc;height: 60px;width: 100%;padding-left: 100px;; }`, n9 = _h('div'), n10 = _h("ogone-node");
    _at(nt, 'data-3106648828', '');
    l++;
    _at(n7, 'data-3106648828', '');
    l++; /**/ 
    l--;
    _ap(n7, t17);
    _at(n9, 'data-3106648828', '');
    _at(n9, 'class', 'head');
    l++;
    o = {
        isRoot: false,
        isOriginalNode: true,
        original: n10,
        placeholder: new Text(' '),
        name: "AsyncLogo",
        tree: "null>div>AsyncLogo",
        flags: {
            "if": "",
            "then": "",
            "defer": "",
            "await": "",
            "style": "",
            "class": "",
            "html": "",
            "catch": "",
            "events": [],
            "elseIf": "",
            "finally": "",
            "spread": "",
            "else": false
        },
        isTemplate: true,
        isTemplatePrivate: true,
        isTemplateProtected: false,
        isAsync: true,
        isRouter: false,
        isStore: false,
        isController: false,
        isAsyncNode: false,
        isImported: true,
        isRemote: false,
        extends: '-nt',
        uuid: 'data-3106648828',
        positionInParentComponent: p,
        levelInParentComponent: l,
        parentComponent: ctx,
        parentCTXId: 'data-3106648828-n10',
        props: [],
        uuid: 'data-1749377316',
        routes: null,
        namespace: '',
        requirements: null,
        dependencies: []
    };
    n10.placeholder = o.placeholder;
    setOgone(n10, o);
    o = null;
    _at(n10, 'data-3106648828', '');
    l--;
    _ap(n9, n10);
    l--;
    _ap(nt, n7);
    _ap(nt, n9);
    return nt;
};
Ogone.render['data-1749377316-nd6'] = function(ctx, pos = [], i = 0, l = 0) {
    let p = pos.slice();
    let o = null;
    const nd6 = _h('img');
    _at(nd6, 'data-1749377316', '');
    _at(nd6, 'src', '/src/public/ogone-svg.svg');
    return nd6;
};
Ogone.render['data-1749377316-nt'] = function(ctx, pos = [], i = 0, l = 0) {
    let p = pos.slice();
    let o = null;
    const nt = _h('null'), n3 = _h('style'), t7 = `.back[data-1749377316] { background: white;border-radius: 100%;height: fit-content;width: fit-content;border: 1px solid #ccc;filter: drop-shadow(0px 5px 10px #00000025); } .back[data-1749377316] img[data-1749377316] { width: 150px;height: 150px;; }`, n5 = _h('div'), nd6 = _h("ogone-node");
    _at(nt, 'data-1749377316', '');
    l++;
    _at(n3, 'data-1749377316', '');
    l++; /**/ 
    l--;
    _ap(n3, t7);
    _at(n5, 'data-1749377316', '');
    _at(n5, 'class', 'back');
    l++;
    o = {
        isRoot: false,
        isOriginalNode: true,
        original: nd6,
        placeholder: new Text(' '),
        tree: "null>div>img",
        position: p,
        level: l,
        index: i,
        component: ctx,
        flags: {
            "if": "",
            "then": "",
            "defer": "",
            "await": true,
            "style": "",
            "class": "",
            "html": "",
            "catch": "",
            "events": [],
            "elseIf": "",
            "finally": "",
            "spread": "",
            "else": false
        },
        isTemplate: false,
        isTemplatePrivate: false,
        isTemplateProtected: false,
        isAsync: false,
        isRouter: false,
        isStore: false,
        isController: false,
        isAsyncNode: true,
        isImported: false,
        isRemote: false,
        extends: '-nd6',
        uuid: 'data-1749377316'
    };
    nd6.placeholder = o.placeholder;
    setOgone(nd6, o);
    o = null;
    ctx.promises.push(new Promise((rs)=>{
        nd6.connectedCallback();
        for (let n of nd6.nodes){
            n.addEventListener('load', ()=>{
                rs();
            });
        }
    }));
    _at(nd6, 'data-1749377316', '');
    l--;
    _ap(n5, nd6);
    l--;
    _ap(nt, n3);
    _ap(nt, n5);
    return nt;
};

    