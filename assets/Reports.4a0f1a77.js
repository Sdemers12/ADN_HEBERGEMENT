import{_ as h,C as m,j as g,m as _,r as f,o as r,c as a,a as e,l as c,F as v,k as w,y as i,q as b,p as y,g as x}from"./index.bcbaf3df.js";const k={name:"Reports",components:{Card:m},data(){return{show:!1}},computed:{...g(i,["boycotts"])},created(){this.getAllBoycottsReported()},methods:{..._(i,["getAllBoycottsReported","deleteAllBoycottsReported"]),toggleModal(){this.show=!this.show},closeModal(){this.show=!1}}},s=o=>(y("data-v-fcb9603f"),o=o(),x(),o),C={class:"flex lg:flex-row flex-col max-w-screen-xl"},B={class:"mb-12 lg:mb-0 lg:mr-12"},M=s(()=>e("p",null,"Tous les boycotts signal\xE9s",-1)),A=s(()=>e("hr",null,null,-1)),R=["show"],S={key:0,class:"h-modal fixed z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden p-4 md:inset-0",id:"popup-modal"},z={class:"relative z-50 h-auto w-auto"},L={class:"relative rounded-lg bg-white shadow"},I=s(()=>e("svg",{"aria-hidden":"true",class:"h-5 w-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1)),j=s(()=>e("span",{class:"sr-only"},"Fermer la fen\xEAtre",-1)),F=[I,j],N={class:"p-6 text-center"},V=s(()=>e("svg",{"aria-hidden":"true",class:"mx-auto mb-4 h-14 w-14 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})],-1)),q=s(()=>e("h3",{class:"mb-5 text-lg font-normal text-gray-500"},"\xCAtes-vous s\xFBr de vouloir supprimer tous les boycotts report\xE9s ?",-1)),E={key:0,class:"absolute inset-0 z-40 bg-black opacity-25"},T={class:"o-container-row w-full flex-wrap gap-7"};function $(o,t,D,G,d,n){const u=f("Card");return r(),a("div",C,[e("div",B,[M,A,e("button",{class:"btn-delete",show:d.show,onClick:t[0]||(t[0]=l=>n.toggleModal()),"data-modal-toggle":"popup-modal"},"Supprimer tous les signalements",8,R),d.show?(r(),a("div",S,[e("div",z,[e("div",L,[e("button",{type:"button",class:"absolute top-3 right-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900",onClick:t[1]||(t[1]=l=>n.closeModal())},F),e("div",N,[V,q,e("button",{type:"button",class:"mr-2 inline-flex items-center rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300",onClick:t[2]||(t[2]=l=>(o.deleteAllBoycottsReported(),n.closeModal()))},"Confirmer"),e("button",{type:"button",class:"rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-4",onClick:t[3]||(t[3]=l=>n.closeModal())},"Annuler")])])]),d.show?(r(),a("div",E)):c("",!0)])):c("",!0)]),e("div",T,[(r(!0),a(v,null,w(o.boycotts,(l,p)=>(r(),b(u,{key:p,boycott:l},null,8,["boycott"]))),128))])])}const J=h(k,[["render",$],["__scopeId","data-v-fcb9603f"]]);export{J as default};
