const ctx = document.getElementById('tokenChart').getContext('2d');
new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Liquidity', 'Marketing', 'Team', 'Community'],
    datasets: [{
      label: 'Token Distribution',
      data: [40, 20, 10, 30],
      backgroundColor: ['#ff007a', '#00ffe7', '#ffaa00', '#00ff6e'],
      borderWidth: 1
    }]
  },
  options: {
    plugins: { legend: { labels: { color: '#fff' } } }
  }
});
