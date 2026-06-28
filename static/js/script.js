// ----- Ambient background: drifting code symbols + circuit lines -----
  (function(){
    const canvas = document.getElementById('bgCanvas');
    const ctx = canvas.getContext('2d');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const symbols = ['</>','{ }','=>','( )',';','#','0 1','git','npm','</','/>','const','{...}'];
    let particles = [];
    let w, h, dpr;

    function resize(){
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(9, Math.min(18, Math.round((w * h) / 130000)));
      particles = Array.from({length: count}, () => spawn());
    }

    function spawn(yStart){
      return {
        x: Math.random() * w,
        y: yStart !== undefined ? yStart : Math.random() * h,
        vy: 0.10 + Math.random() * 0.18,
        sway: Math.random() * Math.PI * 2,
        swaySpeed: 0.003 + Math.random() * 0.005,
        swayAmp: 14 + Math.random() * 22,
        size: 30 + Math.random() * 26,
        alpha: 0.14 + Math.random() * 0.16,
        symbol: symbols[Math.floor(Math.random() * symbols.length)]
      };
    }

    function step(){
      ctx.clearRect(0, 0, w, h);
      ctx.textBaseline = 'middle';

      // connecting lines between nearby particles
      for(let i = 0; i < particles.length; i++){
        for(let j = i + 1; j < particles.length; j++){
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if(dist < 260){
            ctx.strokeStyle = `rgba(149,185,208,${0.09 * (1 - dist/260)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // symbols
      particles.forEach(p => {
        ctx.font = `600 ${p.size}px "JetBrains Mono", monospace`;
        ctx.fillStyle = `rgba(149,185,208,${p.alpha})`;
        const x = p.x + Math.sin(p.sway) * p.swayAmp;
        ctx.fillText(p.symbol, x, p.y);
        p.y -= p.vy;
        p.sway += p.swaySpeed;
        if(p.y < -40){ Object.assign(p, spawn(h + 40)); }
      });
    }

    function loop(){ step(); requestAnimationFrame(loop); }

    resize();
    window.addEventListener('resize', resize);

    if(reduced){
      step(); // draw one static frame, no animation
    } else {
      requestAnimationFrame(loop);
    }
  })();

  // ----- Topbar shrink on scroll -----
  const topbar = document.getElementById('topbar');
  window.addEventListener('scroll', () => {
    topbar.classList.toggle('scrolled', window.scrollY > 30);
  });

  // ----- Nav: smooth scroll + active indicator -----
  const navLinks = document.querySelectorAll('.nav-link');
  const navIndicator = document.getElementById('navIndicator');
  const allNavTargets = document.querySelectorAll('[data-target]');
  const sections = document.querySelectorAll('main section');

  function moveIndicator(btn){
    if(!btn) return;
    navIndicator.style.width = btn.offsetWidth + 'px';
    navIndicator.style.transform = `translateX(${btn.offsetLeft - 6}px)`;
  }

  function setActive(id){
    navLinks.forEach(l => l.classList.toggle('active', l.dataset.target === id));
    const activeBtn = document.querySelector(`.nav-link[data-target="${id}"]`);
    moveIndicator(activeBtn);
  }

  allNavTargets.forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById(el.dataset.target);
      if(target){ target.scrollIntoView({behavior:'smooth'}); }
      closeMobile();
    });
  });

  window.addEventListener('load', () => setActive('home'));
  window.addEventListener('resize', () => {
    const current = document.querySelector('.nav-link.active');
    moveIndicator(current);
  });

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){ setActive(entry.target.id); }
    });
  }, {rootMargin:'-45% 0px -45% 0px'});
  sections.forEach(s => sectionObserver.observe(s));

  // ----- Mobile menu -----
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  function closeMobile(){ hamburger.classList.remove('open'); mobileMenu.classList.remove('open'); }
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  // ----- Scroll reveal -----
  const revealEls = document.querySelectorAll('.reveal');
  revealEls.forEach((el, i) => { el.style.transitionDelay = (i % 6) * 70 + 'ms'; });
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){ entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); }
    });
  }, {threshold:.15});
  revealEls.forEach(el => revealObserver.observe(el));

  // ----- Project card 3D tilt -----
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      const rotateX = ((y / r.height) - 0.5) * -10;
      const rotateY = ((x / r.width) - 0.5) * 10;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      card.style.setProperty('--mx', x + 'px');
      card.style.setProperty('--my', y + 'px');
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });

  // ----- Contact flip cards: tap to flip on touch -----
  document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if(window.matchMedia('(hover: none)').matches){
        e.preventDefault();
        card.classList.toggle('flipped');
      }
    });
  });

  // ----- Message form -----
  const messageForm = document.getElementById('messageForm');
  const messageNote = document.getElementById('messageNote');
  messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('mName').value.trim();
    const email = document.getElementById('mEmail').value.trim();
    const message = document.getElementById('mMessage').value.trim();
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`);
    window.location.href = `mailto:rabiaahmed16111999@gmail.com?subject=${subject}&body=${body}`;
    messageNote.textContent = 'Opening your email app…';
    messageNote.classList.add('sent');
    setTimeout(() => {
      messageNote.textContent = 'Opens your email app — nothing is stored.';
      messageNote.classList.remove('sent');
    }, 4000);
  });

  // ----- Typed terminal code -----
  const codeLines = [
    {k:'const',t:' developer', p:' = {'},
    {pad:1, k:'name', p:': ', s:'"Rabia Ahmed"', p2:','},
    {pad:1, k:'role', p:': ', s:'"Full-Stack Developer"', p2:','},
    {pad:1, k:'stack', p:': [', s:'"TypeScript", "React", "Node.js"', p2:'],'},
    {pad:1, k:'location', p:': ', s:'"Karachi, PK"', p2:','},
    {pad:1, k:'available', p:': ', s:'true', p2:''},
    {p:'};'}
  ];

  const typedEl = document.getElementById('typedCode');
  function lineToHTML(line){
    let out = '';
    if(line.pad) out += '&nbsp;&nbsp;';
    if(line.k) out += `<span class="key">${line.k}</span>`;
    if(line.t) out += line.t;
    if(line.p) out += `<span class="punc">${line.p}</span>`;
    if(line.s) out += `<span class="str">${line.s}</span>`;
    if(line.p2) out += `<span class="punc">${line.p2}</span>`;
    return out;
  }

  async function typeCode(){
    typedEl.innerHTML = '';
    for(const line of codeLines){
      const span = document.createElement('div');
      span.innerHTML = lineToHTML(line);
      typedEl.appendChild(span);
      await new Promise(r => setTimeout(r, 160));
    }
    const cursor = document.createElement('span');
    cursor.className = 'cursor-blink';
    typedEl.appendChild(cursor);
  }
  window.addEventListener('load', typeCode);
