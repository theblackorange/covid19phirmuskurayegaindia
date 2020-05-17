var redZone=["South Andamans", "Kurnool","Guntur", "Krishna", "Chittoor", "Nellore","Munger", "Patna", "Rohtas", "Buxar", "Gaya", "Chandigarh", "Raipur","Delhi","New Delhi", "Ahemadabad", "Surat", "Vadodara", "Gandhinagar", "Srinagar", "Ranchi", "Bangaluru", "Mysuru","Kannur","Indore", "Bhopal","Ujjain","Gwalior", "Mumbai","Pune","Solapur","Jajapur", "Jalandar","Patiala","Jodhpur","Kota", "Ajmer","Chennai", "Madhurai","Hyderabad","Agra", "Lucknow","Moradabad","Meerut", "Varanasi","Kolkata","Howrah"]
var orangeZone=["West Godavari", "East Godavari", "Y.S.R.","Anantapur", "Prakasam","Srikakulam", "Visakhapatanam", "Dhubri", "MArigaon", "Goalpara","Nalanda", "Kaimur","Siwan", "Gopalganj", "Bhojpur", "Begusarai", "Aurangabad", "Madhubani","PurbiChamparan", "Bhagalpur", "Arwal","Saran","Nawada", "Lakhisarai","Banka", "Vaishali","Darbhanga", "Jehanabad", "Madhepura", "Purnia","Surajpur", "Rajkot", "Narmada", "Kachchh", "Gurugram", "Jammu","Khorda","Puducherry", "Ghaziabad","Prayagraj","Dehradun"]
var greenZone=["Nicobars", "Vizianagaram", "Tawang", "Dibugarh", "Muzaffarpur", "Bilaspur", "Durg", "Bastar", "Dadra And Nagar Haveli", "Goa", "Junagadh","Cuttack","Puri","Sambalpur"]


var cityName = document.getElementById("cityName");
function geoLocationFunc() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

var city;
function showPosition(position) {

  	document.getElementById("click-image").innerHTML="";
  	document.getElementById("zoning").innerHTML="";

  	document.getElementById("location-image").innerHTML = "";

  	var locate="https://freegeoip.app/json/";
        fetch(locate).then((res)=>{
		return(res.json());
		}).then((res2)=>{
			cityName.innerHTML=res2.city;

			city=res2.city;
			var flag=0;
		  	for(var i=0;i<redZone.length;i++)
		  	{
		  		if(city==redZone[i])
		  		{
		  			flag=1;
		  			document.getElementById("home").style.backgroundImage="url('images/redzone.jpg')";
		  			document.getElementById("home").style.color="white";
		  			document.getElementById("zone").innerHTML="You're in RED ZONE";

		  		}

		  	}
		  	for(var j=0;j<orangeZone.length;j++)
		  	{
		  		if(city==orangeZone[j])
		  		{
		  			flag=1;
		  			document.getElementById("home").style.backgroundImage="url('images/orangezone.jpg')";
		  			document.getElementById("home").style.color="white";
		  			document.getElementById("zone").innerHTML="You're in ORANGE ZONE";

		  		}

		  	}
		  	
		  	for(var k=0;k<greenZone.length;k++)
		  	{
		  		if(city==greenZone[k])
		  		{
		  			flag=1;
		  			document.getElementById("home").style.backgroundImage="url('images/greenzone.jpg')";
		  			document.getElementById("home").style.color="white";
		  			document.getElementById("zone").innerHTML="You're in GREEN ZONE";
		  		}
		  	}
		  	if(flag===0){
		  		document.getElementById("zone").innerHTML="Sorry! we couldn't list out your city. Kindly, wait for next release";
		  	}
		  	
  	})
}

/*
function totalCasesFunc(){

	fetch("https://api.covid19api.com/country/India").then((res)=>{
	return(res.json());
}).then((res2)=>{
	
	document.getElementById("total-cases").innerHTML=res2[res2.length-1].Confirmed;

}*/

function feedbackFunc(){
	var a=document.getElementById("feedback").value;
	document.getElementById("feedback-output").innerHTML="Thanks for your feedback!"
}

var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
