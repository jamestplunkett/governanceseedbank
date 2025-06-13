document.addEventListener('DOMContentLoaded', () => {
  const q = document.getElementById('searchBox');
  const tags = document.querySelectorAll('.tagBtn');
  const items = document.querySelectorAll('.pattern');
  const filter = () => {
    const term = q.value.toLowerCase();
    const active = Array.from(tags).filter(t => t.classList.contains('active')).map(t => t.dataset.tag);
    items.forEach(it => {
      const text = it.innerText.toLowerCase();
      const itsTags = it.dataset.tags.split(',');
      const matchQ = text.includes(term);
      const matchTag = active.length === 0 || active.every(tg => itsTags.includes(tg));
      it.style.display = (matchQ && matchTag) ? '' : 'none';
    });
  };
  q.addEventListener('input', filter);
  tags.forEach(btn => btn.addEventListener('click', () => { btn.classList.toggle('active'); filter(); }));
});