const loginsec=document.querySelector('.login-section')
const loginlink=document.querySelector('.login-link')
const registerlink=document.querySelector('.register-link')
registerlink.addEventListener('click',()=>{
    loginsec.classList.add('active')
})
loginlink.addEventListener('click',()=>{
    loginsec.classList.remove('active')
})
;
// typed js 
const typed=new Typed('.multiple-text',{
    strings:['Together we ride, Together we save!'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});