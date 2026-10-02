const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#nav');

toggle?.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded',open);
});

document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

// Populate contact details and external profile links from config.js.
const s=window.practiceSettings||{};
const email=s.email||'';
const phone=s.phone||'';
const emailLink=document.querySelector('#email-link');
const phoneLink=document.querySelector('#phone-link');
const contactButton=document.querySelector('#contact-email-button');

if(emailLink){
  emailLink.textContent=email;
  emailLink.href=email?`mailto:${email}`:'#';
}
if(phoneLink){
  phoneLink.textContent=phone;
  phoneLink.href=phone?`tel:${phone.replace(/[^0-9+]/g,'')}`:'#';
}
if(contactButton){
  contactButton.href=email?`mailto:${email}`:'#';
}

document.querySelectorAll('[data-platform]').forEach(card=>{
  const key=card.dataset.platform;
  const url=s[key]||'';
  const status=card.querySelector('.platform-status');
  if(url){
    card.href=url;
    card.classList.add('active');
    if(status) status.textContent='Visit my profile →';
  }else{
    card.classList.add('inactive');
    card.addEventListener('click',e=>e.preventDefault());
  }
});
