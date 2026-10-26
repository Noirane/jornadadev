
(()=>{
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
const elements=document.querySelectorAll('.section h2,.section .eyebrow,.section p,.grid > *, .modules > *, .mentorgrid > *, .cta .btn');
if(!reduced.matches && 'IntersectionObserver' in window){
  const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}})},{threshold:.09,rootMargin:'0px 0px -25px 0px'});
  elements.forEach((el,i)=>{el.classList.add('reveal');if(el.parentElement?.classList.contains('grid')||el.parentElement?.classList.contains('modules'))el.classList.add('delay-'+(i%4));observer.observe(el)});
}else{elements.forEach(el=>el.classList.add('is-visible'))}
// Subtle pointer-responsive depth, only for fine pointers.
if(window.matchMedia('(hover:hover) and (pointer:fine)').matches && !reduced.matches){
 document.querySelectorAll('.grid > *, .modules > *').forEach(card=>{
  let frame=0;
  card.addEventListener('pointermove',ev=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{const r=card.getBoundingClientRect(),x=(ev.clientX-r.left)/r.width-.5,y=(ev.clientY-r.top)/r.height-.5;card.style.transform=`perspective(850px) rotateX(${-y*4}deg) rotateY(${x*5}deg) translateY(-5px)`})});
  card.addEventListener('pointerleave',()=>{cancelAnimationFrame(frame);card.style.transform=''})
 });
}
})();
