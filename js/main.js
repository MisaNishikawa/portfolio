jQuery(document).ready(function( $ ) {

  // Smooth scroll for the menu and links with .scrollto classes
  $('.smothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 62
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $('.carousel').carousel({
    interval: 3500
  });

//   // JavaScript Chart
//   var doughnutData = [{
//       value: 50,
//       color: "#1abc9c"
//     },
//     {
//       value: 50,
//       color: "#ecf0f1"
//     }
//   ];
//   var myDoughnut = new Chart(document.getElementById("javascript").getContext("2d")).Doughnut(doughnutData);

//   // jQuery Chart
//   var doughnutData = [{
//     value: 40,
//     color: "#1abc9c"
//   },
//   {
//     value: 60,
//     color: "#ecf0f1"
//   }
//   ];
//   var myDoughnut = new Chart(document.getElementById("jQuery").getContext("2d")).Doughnut(doughnutData);

//   // PHP Chart
//   var doughnutData = [{
//     value: 50,
//     color: "#1abc9c"
//   },
//   {
//     value: 50,
//     color: "#ecf0f1"
//   }
//   ];
//   var myDoughnut = new Chart(document.getElementById("PHP").getContext("2d")).Doughnut(doughnutData);

//   // HTML Chart
//   var doughnutData = [{
//     value: 60,
//     color: "#1abc9c"
//   },
//   {
//     value: 40,
//     color: "#ecf0f1"
//   }
//   ];
//   var myDoughnut = new Chart(document.getElementById("html").getContext("2d")).Doughnut(doughnutData);

//   // Laravel Chart
//   var doughnutData = [{
//     value: 40,
//     color: "#1abc9c"
//   },
//   {
//     value: 60,
//     color: "#ecf0f1"
//   }
//   ];
//   var myDoughnut = new Chart(document.getElementById("Laravel").getContext("2d")).Doughnut(doughnutData);

//   // MySQL Chart
//   var doughnutData = [{
//     value: 50,
//     color: "#1abc9c"
//   },
//   {
//     value: 50,
//     color: "#ecf0f1"
//   }
//   ];
//   var myDoughnut = new Chart(document.getElementById("MySQL").getContext("2d")).Doughnut(doughnutData);
});
