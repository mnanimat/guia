
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
tabs.forEach(t=>{
  t.addEventListener('click',()=>{
    tabs.forEach(x=>x.classList.remove('active'));
    panels.forEach(p=>p.style.display='none');
    t.classList.add('active');
    document.getElementById('panel-'+t.dataset.tab).style.display='block';
    window.scrollTo({top:0, behavior:'smooth'});
  });
});
document.querySelectorAll('.card img').forEach(img=>{
  img.addEventListener('click',()=>{
    const lb = document.getElementById('lightbox');
    lb.querySelector('img').src = img.src;
    lb.classList.add('open');
  });
});
document.getElementById('lightbox').addEventListener('click', e=>{
  if(e.target.id==='lightbox' || e.target.tagName==='IMG') document.getElementById('lightbox').classList.remove('open');
});
document.addEventListener('keydown', e=>{ if(e.key==='Escape') document.getElementById('lightbox').classList.remove('open'); });
