// util
const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

// drawer
const drawer = $('.drawer');
$('.menu-btn').addEventListener('click',()=>drawer.classList.add('open'));
$('.overlay').addEventListener('click',()=>drawer.classList.remove('open'));

// back
$$('.js-back').forEach(b=>b.addEventListener('click',()=>history.back()));

// search
const q = $('#searchInput');
if(q){
  q.addEventListener('input',()=>{
    const word = q.value.trim().toLowerCase();
    $$('.card').forEach(card=>{
      const name = card.dataset.name.toLowerCase();
      card.style.display = name.includes(word) ? '' : 'none';
    });
  });
}

// tabs
const applyFilter = (mode)=>{
  $$('.card').forEach(card=>{
    if(mode==='all'){ card.style.display=''; return; }
    const area = card.dataset.area;
    card.style.display = (mode==='inner' && area==='学内') || (mode==='outer' && area==='学外') ? '' : 'none';
  });
  if(mode==='map'){ $('#mapSection')?.scrollIntoView({behavior:'smooth'}); }
  else { $('#listSection')?.scrollIntoView({behavior:'smooth'}); }
};
$('#tabAll')?.addEventListener('click', ()=>applyFilter('all'));
$('#tabInner')?.addEventListener('click', ()=>applyFilter('inner'));
$('#tabOuter')?.addEventListener('click', ()=>applyFilter('outer'));
$('#tabMap')?.addEventListener('click', ()=>applyFilter('map'));

// carousel for detail
function initCarousel(root){
  const imgs = $$('.carousel-img', root);
  let i = 0;
  const show = (n)=>imgs.forEach((im,idx)=>im.style.display = idx===n?'':'none');
  $('.prev', root).addEventListener('click',()=>{ i=(i-1+imgs.length)%imgs.length; show(i); });
  $('.next', root).addEventListener('click',()=>{ i=(i+1)%imgs.length; show(i); });
  show(0);
}
window.initCarousel = initCarousel;
