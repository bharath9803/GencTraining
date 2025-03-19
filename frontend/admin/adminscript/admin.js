document.addEventListener('DOMContentLoaded', function () {
    // Dummy data for the chart
    const revenueData = [5000, 7000, 8000, 6000, 9000]; // Example revenue for the last 5 months
    const customerData = [50, 70, 80, 60, 90]; // Example number of customers for the last 5 months

    const ctx = document.getElementById('revenueChart').getContext('2d');
    const revenueChart = new Chart(ctx, {
        type: 'line', // Change to 'bar' for a bar chart
        data: {
            labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5'],
            datasets: [
                {
                    label: 'Total Revenue',
                    data: revenueData,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderWidth: 1
                },
                {
                    label: 'Number of Customers',
                    data: customerData,
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
