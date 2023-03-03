let weeknames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

setInterval(() => {
  let a = new Date()
  let weekname = weeknames[a.getDay() - 1]
  let weekbox1 = document.getElementById('weekbox1')
  weekbox1.innerText = weekname

  let datetext = a.getDate().toString()
  let monthtext = (a.getMonth() + 1).toString()
  let yeartext = a.getFullYear().toString()
  let final_date = datetext + "/" + monthtext + "/" + yeartext;

  let datebox = document.getElementById("datebox")
  datebox.innerText = final_date


  let hour = a.getHours()
  let finalhour
  if (hour < 10) {
    finalhour = "0" + hour.toString()
  }
  else {
    finalhour = hour.toString()
  }

  let minutes = a.getMinutes()
  let finalminute
  if (minutes < 10) {
    finalminute = "0" + minutes.toString()
  }
  else {
    finalminute = minutes.toString()
  }

  let seconds = a.getSeconds()
  let finalseconds
  if(seconds<10){
    finalseconds="0"+seconds.toString()
  }
  else{
    finalseconds=seconds.toString()
  }
  

  let hourbox = document.getElementById('hour')
  hourbox.innerText = finalhour

  let minutebox = document.getElementById('minute')
  minutebox.innerText = finalminute

  let secondbox = document.getElementById('second')
  secondbox.innerText = finalseconds


}, 1000)