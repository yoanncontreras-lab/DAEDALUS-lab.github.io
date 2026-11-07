(() => {
  const cfg = window.DAEDALUS_CONFIG || {};
  document.querySelectorAll('[data-config]').forEach(el => {
    const key=el.getAttribute('data-config');
    const val=cfg[key];
    el.textContent=(typeof val==='string'&&val.trim())?val:'À compléter avant publication';
    if(!val) el.classList.add('missing-info');
  });
  document.querySelectorAll('[data-email-link]').forEach(el => {
    const value=cfg.contactEmail;
    if(value&&/.+@.+\..+/.test(value)){
      el.href='mailto:'+value; el.textContent=value; el.classList.remove('is-disabled'); el.removeAttribute('aria-disabled');
    } else {el.removeAttribute('href');el.textContent='Adresse e-mail à renseigner';el.classList.add('is-disabled');el.setAttribute('aria-disabled','true');}
  });
  document.querySelectorAll('[data-phone-link]').forEach(el=>{
    const digits=(cfg.phone||'').replace(/[^0-9+]/g,'');
    if(digits) el.href='tel:'+(digits.startsWith('0')?'+33'+digits.slice(1):digits); else el.removeAttribute('href');
  });
  const notice=document.querySelector('.draft-notice');
  if(notice) notice.hidden=Boolean(cfg.legalInfoReviewed);
  const toggle=document.querySelector('[data-menu-button]');
  const mobile=document.querySelector('[data-mobile-menu]');
  if(toggle&&mobile){
    toggle.addEventListener('click',()=>{
      const open=toggle.getAttribute('aria-expanded')!=='true';
      toggle.setAttribute('aria-expanded',String(open)); mobile.hidden=!open;
    });
    mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobile.hidden=true;toggle.setAttribute('aria-expanded','false');}));
  }
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=String(new Date().getFullYear()));
})();