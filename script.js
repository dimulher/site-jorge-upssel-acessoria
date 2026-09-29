(function(){
  var revealTargets = document.querySelectorAll('.gap, .offer-card, .faq-list details');
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting){
        entry.target.style.animation = 'fadeUp .7s ease forwards';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: .15 });
  revealTargets.forEach(function(el){
    el.style.opacity = '0';
    io.observe(el);
  });
})();

var styleSheet = document.createElement('style');
styleSheet.textContent = '@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}';
document.head.appendChild(styleSheet);
