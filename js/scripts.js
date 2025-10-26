/* Real-time clock 
 * This updates the element with id="clock" every second.
 */
(function () {
  const el = document.getElementById('clock');
  if (!el) return; // if clock element missing, do nothing

  function pad(n) { 
    return n.toString().padStart(2, '0'); 
  }

  // Formats the current date/time as: HH:MM:SS · YYYY-MM-DD
  function formatTime(now) {
    const hours = pad(now.getHours());
    const minutes = pad(now.getMinutes());
    const seconds = pad(now.getSeconds());
    const time = [hours, minutes, seconds].join(':');
    const date = now.getFullYear() + '-' + pad(now.getMonth() + 1) + '-' + pad(now.getDate());
    return time + ' · ' + date;
  }

  function update() {
    el.textContent = formatTime(new Date());
  }

  update();
  setInterval(update, 1000);
})();