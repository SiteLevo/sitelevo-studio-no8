/* STUDIO No. 8 - delt script: reveal-animationer, mobilmenu, nav-skygge */
(function () {
  // Reveal ved scroll
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

  // Nav-skygge ved scroll
  var nav = document.querySelector('.nav');
  if (nav) {
    var onScroll = function () { nav.classList.toggle('scrolled', window.scrollY > 8); };
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Mobilmenu
  var toggle = document.querySelector('.nav__toggle');
  var links = document.querySelector('.nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', function () { links.classList.toggle('open'); });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // Fast Ring/Book-bjælke vises først, når hero er scrollet forbi
  var sticky = document.querySelector('.sticky-cta');
  var topBlock = document.querySelector('.hero') || document.querySelector('.page-hero');
  if (sticky && topBlock) {
    var stickyToggle = function () {
      sticky.classList.toggle('visible', window.scrollY > topBlock.offsetHeight - 40);
    };
    stickyToggle(); window.addEventListener('scroll', stickyToggle, { passive: true });
  }
})();
