(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{282:function(t,e,n){"use strict";n.r(e);var r=n(13),a=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"react"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react"}},[t._v("#")]),t._v(" React")]),t._v(" "),e("h3",{attrs:{id:"事件处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件处理"}},[t._v("#")]),t._v(" 事件处理")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("回调中使用箭头函数：此语法问题在于每次渲染时都会创建不同的回调函数。在大多数情况下，这没什么问题，但如果该回调函数作为 prop 传入子组件时，这些组件可能会进行额外的重新渲染。我们通常建议在构造器中绑定或使用 class fields 语法来避免这类性能问题( public class fields "),e("em",[t._v("实验性")]),t._v(" 语法)。")])]),t._v(" "),e("h3",{attrs:{id:"鼠标和指针事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#鼠标和指针事件"}},[t._v("#")]),t._v(" 鼠标和指针事件")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("通过点击元素以外的地方来关闭已打开的弹出框"),e("br"),t._v("\n通常实现这个功能的方法是在 window 对象中附上一个 click 事件以关闭弹窗")])]),t._v(" "),e("p",[t._v("注：Node.contains()返回的是一个布尔值，来表示传入的节点是否为该节点的后代节点")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("class OuterClickExample extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { isOpen: false };\n    this.toggleContainer = React.createRef();\n\n    this.onClickHandler = this.onClickHandler.bind(this);\n    this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);\n  }\n\n  componentDidMount() {\n    window.addEventListener('click', this.onClickOutsideHandler);\n  }\n\n  componentWillUnmount() {\n    window.removeEventListener('click', this.onClickOutsideHandler);\n  }\n\n  onClickHandler() {\n    this.setState(currentState => ({\n      isOpen: !currentState.isOpen\n    }));\n  }\n\n  onClickOutsideHandler(event) {\n    if (this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {\n      this.setState({ isOpen: false });\n    }\n  }\n\n  render() {\n    return (\n      <div ref={this.toggleContainer}>\n        <button onClick={this.onClickHandler}>Select an option</button>\n        {this.state.isOpen && (\n          <ul>\n            <li>Option 1</li>\n            <li>Option 2</li>\n            <li>Option 3</li>\n          </ul>\n        )}\n      </div>\n    );\n  }\n}\n")])])]),e("h2",{attrs:{id:"redux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redux"}},[t._v("#")]),t._v(" Redux")]),t._v(" "),e("h3",{attrs:{id:"redux上手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redux上手"}},[t._v("#")]),t._v(" redux上⼿")]),t._v(" "),e("ol",[e("li",[t._v("需要⼀个store来存储数据")]),t._v(" "),e("li",[t._v("store里的reducer初始化state并"),e("strong",[t._v("定义state修改规")])]),t._v(" "),e("li",[t._v("通过dispatch一个action来提交对数据的修改")]),t._v(" "),e("li",[t._v("action提交到reducer函数⾥里里，根据传⼊入的action的type，返回新的state")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('import {createStore} from "redux";\nfunction countReducer(state = 0, action) {\n  switch (action.type) {\n    case "ADD":\n      return state + 1;\n    case "MINUS":\n      return state - 1;\n    default:\n      return state;\n  }\n}\nconst store = createStore(countReducer);\nexport default store;\n')])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(' \nimport React, {Component} from "react";\nimport store from "../store/";\n\nexport default class ReduxPage extends Component {\n  componentDidMount() {\n    store.subscribe(() => {\n      this.forceUpdate();\n    }); \n  }\n  add = () => {\n    store.dispatch({type: "ADD"});\n  };\n  minus = () => {\n    store.dispatch({type: "MINUS"});\n  };\n  render() {\n    console.log("store", store); //sy-log\n    return (\n      <div>\n        <h3>ReduxPage</h3>\n        <p>{store.getState()}</p>\n        <button onClick={this.add}>add</button>\n        <button onClick={this.minus}>minus</button>\n      </div>\n    );\n  }\n}\n\n')])])]),e("h3",{attrs:{id:"reducer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reducer"}},[t._v("#")]),t._v(" Reducer")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("reducer 就是⼀个纯函数，接收旧的 state 和 action，返回新的 state。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("(previousState, action) => newState\n")])])]),e("p",[t._v("思考:有如下函数， 聚合成⼀个函数，并把第一个函数的返回值传递给下一个函数，如何处理。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('function f1(arg) {\n  console.log("f1", arg);\n  return arg;\n}\nfunction f2(arg) {\n  console.log("f2", arg);\n  return arg; \n}\nfunction f3(arg) {\n  console.log("f3", arg);\n  return arg;\n}\n')])])]),e("h3",{attrs:{id:"compose"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compose"}},[t._v("#")]),t._v(" compose")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("其实 compose 函数做的事就是把 const res = fn1(fn2(fn3(fn4(x)))) 这种嵌套的调用方式改成"),e("br"),t._v("\nconst res = compose(fn1,fn2,fn3,fn4)(x) 的方式调用。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("export default function compose(...funcs) {\n  if (funcs.length === 0) {\n    return arg => arg\n  }\n\n  if (funcs.length === 1) {\n    return funcs[0]\n  }\n\n  return funcs.reduce((a, b) => (...args) => a(b(...args)))\n}\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import {compose} from 'redux'\nlet x = 10\nfunction fn1(x) {return x + 1}\nfunction fn2(x) {return x + 2}\nfunction fn3(x) {return x + 3}\nfunction fn4(x) {return x + 4}\n\n// 假设我这里想求得这样的值\nlet a = fn1(fn2(fn3(fn4(x)))) // 10 + 4 + 3 + 2 + 1 = 20\n\n// 根据compose的功能，我们可以把上面的这条式子改成如下：\nlet composeFn = compose(fn1, fn2, fn3, fn4)\nlet b = composeFn(x) // 理论上也应该得到20\n其实执行的就是: [fn1,fn2,fn3.fn4].reduce((a, b) => (...args) => a(b(...args)))\n")])])]),e("h3",{attrs:{id:"核心实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#核心实现"}},[t._v("#")]),t._v(" 核心实现")]),t._v(" "),e("ul",[e("li",[t._v("存储状态state")]),t._v(" "),e("li",[t._v("获取状态getState")]),t._v(" "),e("li",[t._v("更新状态dispatch")]),t._v(" "),e("li",[t._v("变更订阅subscribe")])]),t._v(" "),e("h3",{attrs:{id:"createstore"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#createstore"}},[t._v("#")]),t._v(" createStore")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("export function createStore(reducer, enhancer) {\n  if (enhancer) {\n    return enhancer(createStore)(reducer);\n  }\n\n  let currentState;\n\n  const currentListeners = [];\n  \n  function getState() {\n    return currentState;\n  }\n\n  function dispatch(action) {\n    currentState = reducer(currentState, action);\n    currentListeners.map(v => v());\n\n    return action;\n  }\n\n  function subscribe(listener) {\n    currentListeners.push(listener);\n    // 返回取消订阅的函数\n    return () => {\n      const index = currentListeners.indexOf(listener);\n      currentListeners.splice(index, 1);\n    };\n  }\n\n  // 手动执行一下dispatch，赋上初始值\n  dispatch({type:'@@XXX-OOO-REDUX'});\n  \n  return {\n    getState,\n    dispatch,\n    subscribe,\n  };\n}\n")])])]),e("h3",{attrs:{id:"异步"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#异步"}},[t._v("#")]),t._v(" 异步")]),t._v(" "),e("p",[t._v("Redux只是个纯粹的状态管理器，默认只支持同步，实现异步任务 比如延迟，网络请求，需要中间件的 支持，比如我们使⽤最简单的redux-thunk和redux-logger 。"),e("br"),t._v("\n中间件就是⼀个函数，对 store.dispatch ⽅法进行改造，在发出 Action 和执行 Reducer 这两步之 间，添加了其他功能。")]),t._v(" "),e("h3",{attrs:{id:"applymiddleware"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#applymiddleware"}},[t._v("#")]),t._v(" applyMiddleware")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("export function applyMiddleware(...middlewares) {\n  return createStore => reducer => {\n    const store = createStore(reducer);\n    let dispatch = store.dispatch;\n    \n    const midApi = {\n      getState: store.getState,\n      dispatch: action => dispatch(action),\n    };\n\n    const middlewareChain = middlewares.map(middleware => middleware(midApi));\n\n    // 加强dispatch，执行dispatch的时候将所有的中间件全都执行一遍\n    dispatch = compose(...middlewareChain)(store.dispatch);\n\n    // 返回store，同时加强dispatch\n    return {\n      ...store,\n      dispatch,\n    };\n  }\n}\n")])])]),e("h3",{attrs:{id:"redux-thunk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redux-thunk"}},[t._v("#")]),t._v(" redux-thunk")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("function thunk({ dispatch, getState }) {\n  // next 就是下一个中间件处理的结果---返回的一个新的(加强的)dispatch\n  return next => action => {\n    if (typeof action === 'function') {\n      return action(dispatch, getState);\n    }\n    return next(action);\n  }\n}\n")])])]),e("h3",{attrs:{id:"redux-logger"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redux-logger"}},[t._v("#")]),t._v(" redux-logger")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("function logger({ dispatch, getState }) {\n  // next 就是下一个中间件处理的结果---返回的一个新的(加强的)dispatch\n  return next => action => {\n    console.log('#############################');\n    // prev state\n    const prevState = getState();\n    console.log('prev state: ', prevState);\n\n    // next state\n    const returnValue = next(action);\n    const nextState = getState();\n    console.log('next state: ', nextState);\n\n    console.log('#############################');\n\n    return returnValue;\n  }\n}\n")])])]),e("h3",{attrs:{id:"redux-promise"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redux-promise"}},[t._v("#")]),t._v(" redux-promise")]),t._v(" "),e("p",[e("code",[t._v("简版:")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("function promise({ dispatch }) {\n  return next => action => {\n    return isPromise(action) ? action.then(dispatch) : next(action);\n  };\n}\n")])])]),e("h3",{attrs:{id:"combinereducers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#combinereducers"}},[t._v("#")]),t._v(" combineReducers")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("function combineReducers(reducers) {\n  // 返回一个新的reducer\n  return function combination(state = {}, action) {\n    const nextState = {};\n    let hasChanged = false;\n    for(let key in reducers) {\n      const reducer = reducers[key];\n      nextState[key] = reducer(state[key], action)\n      hasChanged = hasChanged || nextState[key] !== state[key];\n    }\n\n    hasChanged = hasChanged || Object.keys(nextState).length !== Object.keys(state).length;\n\n    return hasChanged ? nextState : state;\n  };\n}\n")])])]),e("h3",{attrs:{id:"koa-compose"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#koa-compose"}},[t._v("#")]),t._v(" koa-compose")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("function compose (middleware) {\n  if (!Array.isArray(middleware)) throw new TypeError('Middleware stack must be an array!')\n  for (const fn of middleware) {\n    if (typeof fn !== 'function') throw new TypeError('Middleware must be composed of functions!')\n  }\n\n  return function (context, next) {\n    // last called middleware #\n    let index = -1\n    return dispatch(0)\n    function dispatch (i) {\n      if (i <= index) return Promise.reject(new Error('next() called multiple times'))\n      index = i\n      let fn = middleware[i]\n      if (i === middleware.length) fn = next\n      if (!fn) return Promise.resolve()\n      try {\n        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));\n      } catch (err) {\n        return Promise.reject(err)\n      }\n    }\n  }\n}\n")])])]),e("h2",{attrs:{id:"react-redux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-redux"}},[t._v("#")]),t._v(" React-Redux")]),t._v(" "),e("p",[t._v("每次都重新调用render和getState太low了，想用更react的方式来写，需要react-redux的支持。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ yarn add react-redux\n")])])]),e("p",[t._v("提供了两个api")]),t._v(" "),e("ol",[e("li",[t._v("Provider 为后代组件提供store")]),t._v(" "),e("li",[t._v("connect 为组件提供数据和变更方法")])]),t._v(" "),e("p",[t._v("全局提供store，index.js")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('import React from "react";\nimport ReactDOM from "react-dom";\nimport App from "./App";\nimport {Provider} from "react-redux";\nimport store from "./store/";\n// 把Provider放在根组件外层，使子组件能获得store \nReactDOM.render(\n  <Provider store={store}>\n    <App />\n  </Provider>,\n  document.getElementById("root")\n);\n')])])]),e("p",[t._v("获取状态数据，ReactReduxPage.js")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('import React, { Component } from "react";\nimport { connect } from "react-redux";\nclass ReactReduxPage extends Component {\n  render() {\n    const { num, add, minus, asyAdd } = this.props;\n    return (\n      <div>\n        <h1>ReactReduxPage</h1>\n        <p>{num}</p>\n        <button onClick={add}>add</button>\n        <button onClick={minus}>minus</button>\n      </div>\n    ); \n  }\n}\n\nconst mapStateToProps = state => {\n  return {\n    num: state,\n  };\n};\n\nconst mapDispatchToProps = {\n  add: () => {\n    return { type: "add" };\n  },\n  minus: () => {\n    return { type: "minus" };\n  }\n}\n\n// mapDispatchToProps也可以是一个函数\nconst mapDispatchToProps = (dispatch, ownProps) => {\n    let creators = {\n      add: payload => ({type: "ADD", payload}),\n      minus: () => ({type: "MINUS"})\n    };\n    creators = bindActionCreators(creators, dispatch);\n    return {dispatch, ...creators};\n  }\n\n\nexport default connect(\n  mapStateToProps, //状态映射 mapStateToProps \n  mapDispatchToProps, //派发事件映射\n)(ReactReduxPage);\n')])])]),e("blockquote",[e("p",[t._v("connect中的参数:state映射和事件映射")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('import React, {useContext, useReducer, useLayoutEffect} from "react";\nconst Context = React.createContext();\nexport const connect = (\n  mapStateToProps = state => state,\n  mapDispatchToProps\n) => WrappendComponent => props => {\n  const store = useContext(Context);\n  const {dispatch, getState, subscribe} = store;\n  const stateProps = mapStateToProps(getState());\n  let dispatchProps = {dispatch};\n  \n  // 函数组件中引起更新\n  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);\n\n  if (typeof mapDispatchToProps === "function") {\n    dispatchProps = mapDispatchToProps(dispatch);\n  } else if (typeof mapDispatchToProps === "object") {\n    dispatchProps = bindActionCreators(mapDispatchToProps, dispatch);\n  }\n\n  // 这里不能用useEffect，因为useEffect有延迟，组件渲染完成之后才会延迟执行，在组件渲染完到延迟执行的, \n  // 这个间隙可能会有store state发生改变，但是，这个时候还没有订阅，就可能会丢失一些数据信息。\n  useLayoutEffect(() => {\n    const unsubscribe = store.subscribe(() => {\n      // 执行组件更新\n      forceUpdate();\n    });\n    return () => {\n      if (unsubscribe) {\n        unsubscribe();\n      }\n    };\n  }, [store]);\n\n  return <WrappendComponent {...props} {...stateProps} {...dispatchProps} />;\n};\n\nexport function Provider({store, children}) {\n  return <Context.Provider value={store}>{children}</Context.Provider>;\n}\n\nfunction bindActionCreator(creator, dispatch) {\n  return (...args) => dispatch(creator(...args));\n}\n\n// 这个方法在Redux里面\nfunction bindActionCreators(creators, dispatch) {\n  const obj = {};\n  for (let key in creators) {\n    obj[key] = bindActionCreator(creators[key], dispatch);\n  }\n  return obj; \n}\n\n// 自定义hook\nexport function useSelector(selector) {\n  // 获取store\n  const store = useStore();\n  const { getState } = store;\n  const selectedState = selector(getState());\n\n  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);\n  useLayoutEffect(() => {\n    const unsubscribe = store.subscribe(() => {\n      // 执行组件更新\n      forceUpdate();\n    });\n    return () => {\n      if (unsubscribe) {\n        unsubscribe();\n      }\n    };\n  }, [store]);\n\n  return selectedState;\n}\n\nexport function useStore() {\n  const store = React.useContent(Content);\n  return store;\n}\n\nexport function useDispatch() {\n  const store = useStore();\n  return store.dispatch;\n}\n')])])])])}),[],!1,null,null,null);e.default=a.exports}}]);