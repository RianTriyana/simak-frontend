
// sidebar-menu

var header = document.getElementById("sidebar-menu");
var menus = header.getElementsByClassName("menu");
for (var i = 0; i < menus.length; i++) {
  menus[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

// chart-student 
let student = document.getElementById('chartStudent').getContext('2d');
let labels = ['Kelas X', 'kelas XI', 'Kelas XII'];
let colorStudent =  ['#00C9F2','#FFDC09','#26468B'];


let chartStudent = new Chart(student, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [60, 10, 30],
            backgroundColor: colorStudent
        }],
        labels : labels
    },
    options: {
        responsive: true,
        legend: {
            position: 'center'
    
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


// chart-teacher

let teacher = document.getElementById('chartTeacher').getContext('2d');
let label = ['Perbulan'];
let colorTeacher =  ['#00C9F2'];


let chartTeacher = new Chart(teacher, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [100],
            backgroundColor: colorTeacher
        }],
      label : label
    },

    options: {
        responsive: true,
        legend: {
            position: 'center'
    
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
