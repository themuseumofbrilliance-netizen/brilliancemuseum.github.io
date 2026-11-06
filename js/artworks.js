/* Progressive enhancement: all works and catalogue records exist in the HTML. */
(() => {
  const gallery = document.querySelector('#gallery');
  if (!gallery) return;
  const works = [...gallery.querySelectorAll('.artwork')];
  const tools = document.querySelector('#gallery-tools');
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const search = document.querySelector('#artwork-search');
  const status = document.querySelector('#gallery-status');
  const empty = document.querySelector('#gallery-empty');
  let category = 'all';
  function filterWorks() {
    const query = search.value.trim().toLocaleLowerCase();
    gallery.classList.toggle('is-filtered', category !== 'all' || Boolean(query));
    let count = 0;
    works.forEach(work => {
      const matchesCategory = category === 'all' || work.dataset.categories.split(' ').includes(category);
      const matchesSearch = !query || work.dataset.search.toLocaleLowerCase().includes(query);
      work.hidden = !(matchesCategory && matchesSearch);
      if (!work.hidden) count++;
    });
    gallery.hidden = count === 0;
    empty.hidden = count !== 0;
    empty.querySelector('h2').textContent = category === 'series' && !query ? 'A space for series.' : 'No works found.';
    empty.querySelector('p').textContent = category === 'series' && !query
      ? 'Series will appear here as they are catalogued. Explore All to see the current works.'
      : 'Try another category or clear your search to see more works.';
    status.textContent = count + (count === 1 ? ' work' : ' works');
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === category)));
  }
  buttons.forEach(button => button.addEventListener('click', () => { category = button.dataset.filter; filterWorks(); }));
  search.addEventListener('input', filterWorks);
  tools.hidden = false;

  const dialog = document.querySelector('#artwork-dialog');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const records = document.querySelector('#catalogue-records');
  const title = document.querySelector('#dialog-title');
  const visual = document.querySelector('#dialog-visual');
  const copy = document.querySelector('#dialog-record');
  const progress = document.querySelector('#dialog-progress');
  const previous = document.querySelector('#previous-work');
  const next = document.querySelector('#next-work');
  const close = document.querySelector('#close-artwork');
  let currentWork;
  let opener;
  function showWork(work) {
    currentWork = work;
    const record = document.getElementById(work.dataset.record);
    title.textContent = record.querySelector('h3').textContent;
    copy.replaceChildren(record.querySelector('.record-content').cloneNode(true));
    visual.replaceChildren();
    const image = work.querySelector('img');
    if (image) {
      const full = new Image();
      full.src = image.getAttribute('src');
      full.alt = image.alt;
      visual.append(full);
    } else {
      const script = document.createElement('div');
      script.className = 'dialog-script';
      const label = document.createElement('p');
      label.textContent = 'The Blue Cowboy & The Blob';
      const credit = document.createElement('span');
      credit.textContent = 'A screenplay by Keo · Written work';
      script.append(label, credit);
      visual.append(script);
    }
    const visible = works.filter(item => !item.hidden);
    const index = visible.indexOf(work);
    progress.textContent = (index + 1) + ' / ' + visible.length;
    previous.disabled = index <= 0;
    next.disabled = index >= visible.length - 1;
  }
  works.forEach(work => work.querySelector('[data-open-work]').addEventListener('click', event => {
    event.preventDefault();
    opener = event.currentTarget;
    showWork(work);
    dialog.showModal();
    close.focus();
  }));
  function move(delta) {
    const visible = works.filter(item => !item.hidden);
    const target = visible[visible.indexOf(currentWork) + delta];
    if (target) showWork(target);
  }
  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => { if (opener && opener.isConnected) opener.focus(); });
  records.hidden = true;
})();
