import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const l=document.querySelector(".feedback-form");let t={email:"",message:""};const o=()=>{try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e===null)return;t=e;for(const a in e)l.elements[a].value=e[a]}catch(e){console.log(e)}};o();const s=e=>{const a=e.target.value,r=e.target.name;t[r]=a,localStorage.setItem("feedback-form-state",JSON.stringify(t))},n=e=>{if(e.preventDefault(),Object.values(t).includes("")||Object.values(t).includes(null)){alert("Fill please all fields");return}console.log(t),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset(),t={email:"",message:""}};l.addEventListener("input",s);l.addEventListener("submit",n);
//# sourceMappingURL=2-form.js.map
