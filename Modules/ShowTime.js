function ShowTime(time) {
  const Time = document.querySelector('#date-time');
  setInterval(() => {
    const now = time.now();
    let formattedDateTime = now.toFormat("MMMM d'th' yyyy, h:mm:ss a");
    formattedDateTime = formattedDateTime.replace('AM', 'am').replace('PM', 'pm');
    Time.textContent = formattedDateTime;
  }, 1);
}

export default ShowTime;