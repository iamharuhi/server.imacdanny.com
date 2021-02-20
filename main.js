function clock()
{
// We create a new Date object and assign it to a variable called "time".
var time = new Date(),

    // Access the "getHours" method on the Date object with the dot accessor.
    hours = time.getHours(),

    // Access the "getMinutes" method with the dot accessor.
    minutes = time.getMinutes(),
    seconds = time.getSeconds(),
    year = time.getYear(),
    day = time.getDay(),
	month = time.getMonth(),
	daym = time.getDate();

	if (year < 1000)
		year += 1900

	document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);

	var dayarray=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")
	var montharray=new Array("January","February","March","April","May","June","July","August","September","October","November","December")

	document.querySelectorAll('.date')[0].innerHTML = dayarray[day]+", "+montharray[month]+" "+daym+", "+year;

  function harold(standIn) {
    if (standIn < 10) {
      standIn = '0' + standIn
    }
    return standIn;
  }
}

setInterval(clock, 1000);
