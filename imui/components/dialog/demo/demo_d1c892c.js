define("components/dialog/demo/demo.jsx",function(e,t){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var l=0;l<t.length;l++){var n=t[l];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,l,n){return l&&e(t.prototype,l),n&&e(t,n),t}}(),i=e("node_modules/react/react"),c=l(i),r=e("node_modules/react-dom/index"),f=l(r),d=e("components/dialog/index.jsx"),s=l(d),m=e("components/button/index.jsx"),p=l(m),E=e("external/demo/index"),b=e("components/dialog/demo/doc.md"),C=l(b),h=function(e){function t(e){n(this,t);var l=a(this,Object.getPrototypeOf(t).call(this,e));return l.state={visible1:!1,visible2:!1,visible3:!1},l.onClose1=l.onClose1.bind(l),l.onClick1=l.onClick1.bind(l),l.onClose2=l.onClose2.bind(l),l.onClick2=l.onClick2.bind(l),l.onClose3=l.onClose3.bind(l),l.onClick3=l.onClick3.bind(l),l}return u(t,e),o(t,[{key:"onClose1",value:function(){this.setState({visible1:!1})}},{key:"onClick1",value:function(){this.setState({visible1:!0})}},{key:"onClose2",value:function(){this.setState({visible2:!1})}},{key:"onClick2",value:function(){this.setState({visible2:!0})}},{key:"onClose3",value:function(){this.setState({visible3:!1})}},{key:"onClick3",value:function(){this.setState({visible3:!0})}},{key:"render",value:function(){return c.default.createElement(E.Demo,{name:"Dialog",doc:c.default.createElement(C.default,null)},c.default.createElement(E.DemoPanel,{title:"默认弹窗"},c.default.createElement(p.default,{onClick:this.onClick1},"显示"),c.default.createElement(s.default,{visible:this.state.visible1,onClose:this.onClose1,title:"简单示例"},c.default.createElement("p",null,"哈哈哈哈"))),c.default.createElement(E.DemoPanel,{title:"自定义按钮"},c.default.createElement(p.default,{onClick:this.onClick2},"显示"),c.default.createElement(s.default,{visible:this.state.visible2,onClose:this.onClose2,closeable:!1,button:[c.default.createElement(p.default,{onClick:this.onClose2,size:"s",key:"confirm"},"确认"),c.default.createElement(p.default,{onClick:this.onClose2,size:"s",key:"cancel"},"取消")]},c.default.createElement("p",null,"按钮示例"))),c.default.createElement(E.DemoPanel,{title:"超长内容"},c.default.createElement(p.default,{onClick:this.onClick3},"显示"),c.default.createElement(s.default,{visible:this.state.visible3,onClose:this.onClose3,closeable:!1,width:800,button:[c.default.createElement(p.default,{onClick:this.onClose3,size:"s",key:"confirm"},"确认"),c.default.createElement(p.default,{onClick:this.onClose3,size:"s",key:"cancel"},"取消")]},c.default.createElement("p",null,"超长内容的滚动条"),c.default.createElement("p",null,"超长内容"),c.default.createElement("p",null,"超长内容"),c.default.createElement("p",null,"超长内容"),c.default.createElement("p",null,"超长内容"),c.default.createElement("p",null,"超长内容"),c.default.createElement("p",null,"超长内容"),c.default.createElement("p",null,"超长内容"),c.default.createElement("p",null,"超长内容"),c.default.createElement("p",null,"超长内容"),c.default.createElement("p",null,"超长内容"),c.default.createElement("p",null,"超长内容"),c.default.createElement("p",null,"超长内容"),c.default.createElement("p",null,"超长内容"),c.default.createElement("p",null,"超长内容"),c.default.createElement("p",null,"超长内容"),c.default.createElement("p",null,"超长内容"),c.default.createElement("p",null,"超长内容"),c.default.createElement("p",null,"超长内容"),c.default.createElement("p",null,"超长内容"),c.default.createElement("p",null,"超长内容"),c.default.createElement("p",null,"超长内容"),c.default.createElement("p",null,"超长内容"),c.default.createElement("p",null,"超长内容"),c.default.createElement("p",null,"超长内容"),c.default.createElement("p",null,"超长内容"),c.default.createElement("p",null,"超长内容"),c.default.createElement("p",null,"超长内容"),c.default.createElement("p",null,"超长内容"),c.default.createElement("p",null,"超长内容"),c.default.createElement("p",null,"超长内容"),c.default.createElement("p",null,"超长内容"),c.default.createElement("p",null,"超长内容"),c.default.createElement("p",null,"超长内容"),c.default.createElement("p",null,"超长内容"),c.default.createElement("p",null,"超长内容"),c.default.createElement("p",null,"超长内容"),c.default.createElement("p",null,"超长内容"),c.default.createElement("p",null,"超长内容"),c.default.createElement("p",null,"超长内容"),c.default.createElement("p",null,"超长内容"))))}}]),t}(c.default.Component);t.default=h;var k=document.getElementById("demo");k&&f.default.render(c.default.createElement(h,null),k)});