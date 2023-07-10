
function ShowTime(time){
  let Time = document.querySelector('#date-time')
  setInterval(()=>{
    const now = time.now();
    let formattedDateTime = now.toFormat("MMMM d'th' yyyy, h:mm:ss a")
    formattedDateTime = formattedDateTime.replace('AM', 'am').replace('PM', 'pm');
    // const formattedDateTime = now.toLocaleString({
    //   month: 'long',
    //   day: 'numeric',
    //   year: 'numeric',
    //   hour: 'numeric',
    //   minute: 'numeric',
    //   second: 'numeric',
    //   hour12: true,
    // });
    Time.textContent = formattedDateTime
  }, 1)
}

export default ShowTime