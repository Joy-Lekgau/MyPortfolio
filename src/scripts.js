// Real-time clock: updates the element with id="clock" every second
(function(){
  const el = document.getElementById('clock');
  if(!el) return;
  function pad(n){return n.toString().padStart(2,'0')}
  function update(){
    const now = new Date();
    // Format: HH:MM:SS · YYYY-MM-DD (local)
    const time = [pad(now.getHours()), pad(now.getMinutes()), pad(now.getSeconds())].join(':');
    const date = now.getFullYear() + '-' + pad(now.getMonth()+1) + '-' + pad(now.getDate());
    el.textContent = time + ' · ' + date;
  }
  update();
  setInterval(update, 1000);
})();
