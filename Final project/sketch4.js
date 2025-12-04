// contact.js - simple client-side message board using localStorage

(function () {
  const form = document.getElementById('msgForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const msgsContainer = document.getElementById('msgsContainer');
  const clearAllBtn = document.getElementById('clearAll');

  const STORAGE_KEY = 'lan_contact_messages_v1';

  // load messages from localStorage
  function loadMsgs() {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  }

  function saveMsgs(msgs) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(msgs));
  }

  function formatTime(ts) {
    const d = new Date(ts);
    return d.toLocaleString();
  }

  function render() {
    const msgs = loadMsgs();
    msgsContainer.innerHTML = '';
    if (msgs.length === 0) {
      const p = document.createElement('p');
      p.style.color = '#777';
      p.style.fontStyle = 'italic';
      p.textContent = 'No messages yet — be the first!';
      msgsContainer.appendChild(p);
      return;
    }

    msgs.slice().reverse().forEach((m) => {
      const card = document.createElement('div');
      card.className = 'msg';

      const info = document.createElement('div');
      info.className = 'info';

      const meta = document.createElement('div');
      meta.className = 'meta';
      meta.textContent = `${m.name ? m.name : 'Anonymous'} • ${formatTime(m.time)}`;

      const text = document.createElement('div');
      text.className = 'text';
      text.textContent = m.text;

      info.appendChild(meta);
      info.appendChild(text);

      const actions = document.createElement('div');
      actions.className = 'actions';

      const del = document.createElement('button');
      del.className = 'delete-btn';
      del.textContent = 'Delete';
      del.addEventListener('click', () => {
        deleteMsg(m.id);
      });

      actions.appendChild(del);

      card.appendChild(info);
      card.appendChild(actions);

      msgsContainer.appendChild(card);
    });
  }

  function addMsg(name, email, text) {
    const msgs = loadMsgs();
    const id = Date.now() + '-' + Math.floor(Math.random()*10000);
    msgs.push({ id, name, email, text, time: Date.now() });
    saveMsgs(msgs);
    render();
  }

  function deleteMsg(id) {
    let msgs = loadMsgs();
    msgs = msgs.filter(m => m.id !== id);
    saveMsgs(msgs);
    render();
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const text = messageInput.value.trim();
    if (!text) {
      alert('Please enter a message.');
      return;
    }
    addMsg(name, email, text);
    form.reset();
  });

  clearAllBtn.addEventListener('click', () => {
    if (!confirm('Clear all messages? This cannot be undone.')) return;
    localStorage.removeItem(STORAGE_KEY);
    render();
  });

  // initial render
  render();
})();
