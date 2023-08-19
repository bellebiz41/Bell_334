const ctx = document.getElementById('barchart');       
const barchart =new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['ปี1 เทอม 1', 'ปี1 เทอม 2', 'ปี2 เทอม 1'],
    datasets: [{
      label: 'เกรด',
      data: [3.14,3.5,3.08],
      backgroundColor: [
        'rgba(255, 99, 132,0.7)',
        'rgba(255, 159, 64,0.7)',
        'rgba(255, 205, 86,0.7)',
      ],
      backgroundColor: [
        'rgba(255, 99, 132,0.7)',
        'rgba(255, 159, 64,0.7)',
        'rgba(255, 205, 86,0.7)',
      ],
      borderWidth: 3
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
});

const ctx2 = document.getElementById('doughnut');        
const doughnut =new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ['java', 'css', 'html'],
    datasets: [{
      label: 'ความถนัดในภาษา',
      data: [20,40,45],
      backgroundColor: [
        'rgb(255, 112, 119,0.7)',
        'rgb(255, 146, 62,0.7)',
        'rgb(95, 146, 62,0.7)',
      ],
      backgroundColor: [
        'rgb(255, 112, 119,0.7)',
        'rgb(255, 146, 62,0.7)',
        'rgb(95, 146, 62,0.7)',
      ],
      borderWidth: 3
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
});

const ctx4 = document.getElementById('radar');      
const radar =new Chart(ctx4, {
  type: 'radar',
  data: {
    labels: [
      'Eating',
      'Drinking',
      'Sleeping',
      'Designing',
      'Coding',
      'Cycling',
      'Running'
    ],
    datasets:  [{
      label: 'ปีที่1',
      data: [50, 20, 40, 60, 60, 30, 50],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    },
    {
      label: 'ปีที่2',
      data: [55, 40, 70, 70, 75, 40, 55],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
  },
});