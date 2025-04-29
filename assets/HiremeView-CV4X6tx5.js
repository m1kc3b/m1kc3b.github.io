import{_ as n,f as l,g as i,c,a,o as s}from"./index-DkG_yz2K.js";const o={class:"blog-post"},r={__name:"HiremeView",setup(p){let e=null;return l(()=>{e=document.createElement("script"),e.setAttribute("type","text/javascript"),e.innerHTML=`
    (function (C, A, L) {
      let p = function (a, ar) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    Cal("init", "30min", {origin:"https://cal.com"});
    Cal.ns["30min"]("inline", {
      elementOrSelector:"#my-cal-inline",
      config: {"layout":"month_view"},
      calLink: "m1kc3b/30min",
    });
    Cal.ns["30min"]("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#0f0f23"},"dark":{"cal-brand":"#33ff00"}},"hideEventTypeDetails":true,"layout":"month_view"});
  `,document.body.appendChild(e)}),i(()=>{e&&document.body.removeChild(e)}),(m,t)=>(s(),c("article",o,t[0]||(t[0]=[a("header",null,[a("h1",null,"🤝 Hire me"),a("p",{class:"subtitle"},"Got a project in mind, an idea to explore, or just want to chat? Book a time directly in my calendar below. It’s quick, no strings attached, and a great way for us to see how I can help — whether it's Rust 🦀, WebAssembly, or creative web development.")],-1),a("section",null,[a("div",{id:"my-cal-inline",style:{width:"100%",height:"100%",overflow:"scroll"}})],-1)])))}},u=n(r,[["__scopeId","data-v-67c8983f"]]);export{u as default};
