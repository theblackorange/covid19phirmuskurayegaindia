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

var a=document.getElementById("d1l1").addEventListener("click",total);
var b=document.getElementById("d1l2").addEventListener("click",present);
// var c=document.getElementById("d1l3").addEventListener("click",present);



function present()
{
 //New confirmed in present date
// fetch("https://api.covid19api.com/summary").then((res)=>{
// return(res.json());
// }).then((res2)=>{
// document.getElementById("d2l1").innerHTML=res2.Countries[76].NewConfirmed;

// })


// //death on present date
// fetch("https://api.covid19api.com/summary").then((res)=>{
// return(res.json());
// }).then((res2)=>{
//   document.getElementById("d2l2").innerHTML=res2.Countries[76].NewDeaths;

// })


// //Recovered cases in present date
// fetch("https://api.covid19api.com/summary").then((res)=>{
// return(res.json());
// }).then((res2)=>{
// document.getElementById("d2l3").innerHTML=res2.Countries[76].NewRecovered;

// })
//Confirmes,death,recovered on present date
fetch("https://api.covid19api.com/summary").then((res)=>{
return(res.json());
}).then((res2)=>{
document.getElementById("d2l1").innerHTML=res2.Countries[76].NewConfirmed;
document.getElementById("d2l2").innerHTML=res2.Countries[76].NewDeaths;
document.getElementById("d2l3").innerHTML=res2.Countries[76].NewRecovered;
document.getElementById("d2l4").innerHTML=(res2.Countries[76].NewConfirmed-((res2.Countries[76].NewDeaths)+(res2.Countries[76].NewRecovered)))
})


}

function total()
{
//confirmed cases in India
fetch("https://api.covid19api.com/country/India").then((res)=>{
return(res.json());
}).then((res2)=>{

  document.getElementById("d2l1").innerHTML=res2[res2.length-1].Confirmed;

})


//deaths in India
fetch("https://api.covid19api.com/country/India").then((res)=>{
return(res.json());
}).then((res2)=>{

  document.getElementById("d2l2").innerHTML=res2[res2.length-1].Deaths;

})




fetch("https://api.covid19api.com/country/India").then((res)=>{
return(res.json());
}).then((res2)=>{

document.getElementById("d2l3").innerHTML=res2[res2.length-1].Recovered;

})

//active cases in India
fetch("https://api.covid19api.com/country/India").then((res)=>{
return(res.json());
}).then((res2)=>{

  document.getElementById("d2l4").innerHTML=res2[res2.length-1].Active;

})
}

var active=[];
var confirmed=[];
var death=[];
var recovered=[];

fetch("https://api.covid19api.com/dayone/country/India").then((res)=>{
return(res.json());
}).then((res2)=>{
for(var i=0;i<res2.length;i++){
active.push(res2[i].Active);
confirmed.push(res2[i].Confirmed);
death.push(res2[i].Deaths);
recovered.push(res2[i].Recovered);
}
console.log(active[107]);
  
  Highcharts.chart('middlebox', {

  title: {
    text: 'Report from 30th January to Present Day'
  },

  subtitle: {
    text: 'COVID-19'
  },

  yAxis: {
    title: {
      text: 'Number of People'
    }
  },

  xAxis: {
    accessibility: {
      rangeDescription: 'Range: 2010 to 2017'
    }
  },

  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 0
    }
  },

  series: [{
    name: 'Active',
    data: active
  }, {
    name: 'Confirmed',
    data: confirmed
  }, {
    name: 'Deaths',
    data: death
  }, {
    name: 'Recovered',
    data: recovered
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }

});
});