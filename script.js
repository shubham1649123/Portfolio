var typed = new Typed('#element', {
    strings: ['I am Shubham.', 'Software Engineer.', 'Web Developer.'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});
const btn=document.querySelector("#build_project");
btn.addEventListener("click",()=>{
    window.location.href="build.html";
})
