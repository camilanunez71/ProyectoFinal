// Evitar variables globales
(() => {
  // Toggle nav móvil
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  navToggle?.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    document.body.classList.toggle('nav-open');
  });

  // Poner año en footer
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  // Cargar posts de ejemplo (assets/data/posts.json)
  async function loadPosts() {
    try {
      const res = await fetch('assets/data/posts.json');
      if(!res.ok) return;
      const posts = await res.json();
      const list = document.getElementById('latest-posts');
      if(!list) return;
      posts.slice(0,3).forEach(post => {
        const li = document.createElement('li');
        li.innerHTML = `<article><h3><a href="${post.url}">${post.title}</a></h3><p>${post.excerpt}</p></article>`;
        list.appendChild(li);
      });
    } catch(e){
      console.error('No se pudieron cargar los posts', e);
    }
  }
  loadPosts();

})();
