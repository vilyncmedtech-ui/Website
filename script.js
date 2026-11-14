const menuToggle=document.querySelector(".menu-toggle");const nav=document.querySelector(".nav");
menuToggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open));menuToggle.textContent=open?"×":"☰";});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menuToggle.setAttribute("aria-expanded","false");menuToggle.textContent="☰";}));
document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));btn.classList.add("active");const f=btn.dataset.filter;document.querySelectorAll(".product-card").forEach(card=>{card.classList.toggle("hidden",f!=="all"&&card.dataset.category!==f);});}));
document.querySelectorAll(".product-link").forEach(link=>link.addEventListener("click",()=>{const p=link.dataset.product;document.getElementById("productInput").value=p;}));
document.getElementById("year").textContent=new Date().getFullYear();
document.getElementById("enquiryForm").addEventListener("submit",e=>{e.preventDefault();const form=e.currentTarget;const data=new FormData(form);const subject=encodeURIComponent("Website enquiry: "+data.get("enquiryType"));const body=encodeURIComponent(
"Enquiry type: "+data.get("enquiryType")+"\nProduct / equipment: "+(data.get("product")||"Not specified")+
"\nName: "+data.get("name")+"\nHospital / clinic: "+(data.get("institution")||"Not specified")+
"\nPhone: "+data.get("phone")+"\nEmail: "+(data.get("email")||"Not provided")+
"\nAdditional details: "+(data.get("message")||"None"));
document.getElementById("formStatus").textContent="Your email application should open with the enquiry details. Please review and send the message.";
window.location.href="mailto:vilyncmedtech@gmail.com?subject="+subject+"&body="+body;
});