(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{48312:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(5075)}])},63495:function(a,b,c){"use strict";var d=c(47568),e=c(34051),f=c.n(e),g=c(85893),h=c(91669),i=c(36979),j=c(14418),k=c(93205),l=c(54641),m=c(54609),n=c(30035),o=c(67294),p=c(21755),q=c(44718),r=c(54306),s=c(99113),t=c(21267),u=c(11163),v=function(){var a=(0,q.R)().connection,b=(0,r.O)(),c=(0,o.useState)("FC2L1WtTyzsCRmtrofq5yFky4oVr5yofM9T1uwETo9Lb"),e=c[0];c[1];var v=(0,o.useState)(),w=v[0],x=v[1],y=(0,o.useState)(!1),z=y[0],A=y[1],B=(0,o.useMemo)(function(){return s.I.make(a).use((0,t.t)(b))},[a,b]);(0,o.useEffect)(function(){B&&B.candyMachinesV2().findByAddress({address:new p.PublicKey(e)}).then(function(a){console.log(a),x(a),console.log("Candy Machine: "+a)}).catch(function(a){console.log(a)})},[B]);var C,D=(0,u.useRouter)(),E=(0,o.useCallback)((C=(0,d.Z)(f().mark(function a(c){var d;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!c.defaultPrevented){a.next=2;break}return a.abrupt("return");case 2:if(!(!b.connected||!w)){a.next=4;break}return a.abrupt("return");case 4:if(null!==b.publicKey){a.next=7;break}return alert("Public key is not available"),a.abrupt("return");case 7:return a.prev=7,A(!0),a.next=11,B.candyMachinesV2().mint({candyMachine:w});case 11:d=a.sent,console.log(d),D.push("/newMint?mint=".concat(d.nft.address.toBase58())),a.next=20;break;case 16:a.prev=16,a.t0=a.catch(7),console.log("ERROR ",a.t0),alert(a.t0);case 20:return a.prev=20,A(!1),a.finish(20);case 23:case"end":return a.stop()}},a,null,[[7,16,20,23]])})),function(a){return C.apply(this,arguments)}),[B,b,w]);return(0,g.jsx)("div",{children:(0,g.jsxs)(h.g,{spacing:20,children:[(0,g.jsx)(i.W,{children:(0,g.jsxs)(h.g,{spacing:8,children:[(0,g.jsx)(j.X,{color:"white",as:"h1",size:"2xl",noOfLines:1,textAlign:"center",children:"Welcome Buildoor."}),(0,g.jsxs)(k.x,{color:"bodyText",fontSize:"xl",textAlign:"center",children:["Each buildoor is randomly generated and can be staked to receive",(0,g.jsx)(k.x,{as:"b",children:" $BLD"}),". Use your ",(0,g.jsx)(k.x,{as:"b",children:" $BLD"})," to upgrade your buildoor and receive perks within the community!"]})]})}),(0,g.jsxs)(l.U,{spacing:10,children:[(0,g.jsx)(m.E,{src:"avatar1.png",alt:""}),(0,g.jsx)(m.E,{src:"avatar2.png",alt:""}),(0,g.jsx)(m.E,{src:"avatar3.png",alt:""}),(0,g.jsx)(m.E,{src:"avatar4.png",alt:""}),(0,g.jsx)(m.E,{src:"avatar5.png",alt:""})]}),(0,g.jsx)(n.z,{bgColor:"accent",color:"white",maxW:"380px",onClick:E,isLoading:z,children:(0,g.jsx)(k.x,{children:"mint buildoor"})})]})})};b.Z=v},23194:function(a,b,c){"use strict";var d=c(85893),e=c(67294),f=c(36979),g=c(91669),h=c(14418),i=c(30035),j=c(54641),k=c(93205),l=c(22531),m=c(13495),n=c(54306),o=function(){var a=(0,m.h)(),b=(0,n.O)(),c=b.wallet,o=b.connect,p=(0,e.useCallback)(function(b){!b.defaultPrevented&&(c?o().catch(function(){}):a.setVisible(!0))},[c,o,a]);return(0,d.jsx)(f.W,{children:(0,d.jsxs)(g.g,{spacing:20,children:[(0,d.jsx)(h.X,{color:"white",as:"h1",size:"3xl",noOfLines:2,textAlign:"center",children:"Mint your buildoor. Earn $BLD. Level up."}),(0,d.jsx)(i.z,{bgColor:"accent",color:"white",maxW:"380px",onClick:p,children:(0,d.jsxs)(j.U,{children:[(0,d.jsx)(k.x,{children:"become a buildoor"}),(0,d.jsx)(l.m,{})]})})]})})};b.Z=o},38123:function(a,b,c){"use strict";var d=c(85893),e=c(54641),f=c(95034),g=c(58455),h=c(214),i=c.n(h),j=function(){return(0,d.jsxs)(e.U,{width:"full",padding:4,children:[(0,d.jsx)(f.L,{}),(0,d.jsx)(g.a,{className:i()["wallet-adapter-button-trigger"]})]})};b.Z=j},5075:function(a,b,c){"use strict";c.r(b);var d=c(85893),e=c(23100),f=c(97073),g=c(95034),h=c(7754),i=c(9008),j=c.n(i),k=c(214),l=c.n(k),m=c(23194),n=c(38123),o=c(54306),p=c(63495),q=function(){var a=(0,o.O)().connected;return(0,d.jsxs)("div",{className:l().container,children:[(0,d.jsxs)(j(),{children:[(0,d.jsx)("title",{children:"Buildoors"}),(0,d.jsx)("meta",{name:"The NFT Collection for Buildoors"}),(0,d.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,d.jsx)(e.xu,{w:"full",h:"calc(100vh)",bgImage:a?"":"url(/home-background.svg)",backgroundPosition:"center",children:(0,d.jsxs)(f.K,{w:"full",h:"calc(100vh)",justify:"center",children:[(0,d.jsx)(n.Z,{}),(0,d.jsx)(g.L,{}),(0,d.jsx)(h.M,{children:a?(0,d.jsx)(p.Z,{}):(0,d.jsx)(m.Z,{})}),(0,d.jsx)(g.L,{}),(0,d.jsx)(h.M,{children:(0,d.jsx)(e.xu,{marginBottom:4,color:"white",children:(0,d.jsx)("a",{href:"https://twitter.com/_buildspace",target:"_blank",rel:"noopener noreferrer",children:"built with @_buildspace"})})})]})})]})};b.default=q},214:function(a){a.exports={container:"Home_container__bCOhY","wallet-adapter-button-trigger":"Home_wallet-adapter-button-trigger__JFx79"}}},function(a){a.O(0,[614,774,888,179],function(){var b;return a(a.s=48312)}),_N_E=a.O()}])