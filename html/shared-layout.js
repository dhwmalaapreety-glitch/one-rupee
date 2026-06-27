(function () {
  if (document.querySelector('header.nav') && document.querySelector('footer')) return;

  const pageBase = new URL('.', window.location.href);
  const headerUrl = new URL('../components/header.html', pageBase).href;
  const navbarUrl = new URL('../components/navbar.html', pageBase).href;
  const footerUrl = new URL('../components/footer.html', pageBase).href;

  async function fetchHtml(url) {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Component load failed');
    return response.text();
  }

  async function injectHeadFragment(url) {
    const html = await fetchHtml(url);
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    Array.from(doc.head.children).forEach((node) => {
      const tagName = node.tagName.toLowerCase();

      if (tagName === 'title') {
        if (!document.title || document.title.includes('[Page Name]')) {
          document.title = node.textContent.trim();
        }
        return;
      }

      if (tagName === 'link') {
        const href = node.getAttribute('href');
        if (href && document.querySelector(`link[href="${href}"]`)) return;
      }

      if (tagName === 'meta') {
        const name = node.getAttribute('name');
        const property = node.getAttribute('property');
        if (name && document.querySelector(`meta[name="${name}"]`)) return;
        if (property && document.querySelector(`meta[property="${property}"]`)) return;
      }

      document.head.appendChild(node.cloneNode(true));
    });
  }

  async function injectComponent(url, position) {
    const html = await fetchHtml(url);
    const root = document.getElementById('root');

    if (position === 'before-root') {
      if (root) {
        root.insertAdjacentHTML('beforebegin', html);
      } else {
        document.body.insertAdjacentHTML('afterbegin', html);
      }
    } else if (position === 'after-root') {
      if (root) {
        root.insertAdjacentHTML('afterend', html);
      } else {
        document.body.insertAdjacentHTML('beforeend', html);
      }
    }
  }

  (async function () {
    await injectHeadFragment(headerUrl);
    await injectComponent(navbarUrl, 'before-root');
    await injectComponent(footerUrl, 'after-root');
  })();
})();
