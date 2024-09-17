const options = {
  chart: {
    height: "60px",
    maxWidth: "100%",
    type: "area",
    fontFamily: "Inter, sans-serif",
    dropShadow: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    enabled: true,
    x: {
      show: false,
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.55,
      opacityTo: 0,
      shade: "#1C64F2",
      gradientToColors: ["#1C64F2"],
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 2,
  },
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: 0,
    },
  },
  series: [
    {
      name: "New users",
      data: [
        15000, 14500, 14000, 13500, 13000, 12500, 12000, 11500, 11000, 10500,
      ],
      color: "#1A56DB",
    },
  ],
  xaxis: {
    categories: [
      "90 Days ago",
      "80 Days ago",
      "70 Days ago",
      "60 Days ago",
      "50 Days ago",
      "40 Days ago",
      "30 Days ago",
      "20 Days ago",
      "10 Days ago",
    ],
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
};

// Инициализация первого графика
if (
  document.getElementById("area-chart1") &&
  typeof ApexCharts !== "undefined"
) {
  const chart1 = new ApexCharts(
    document.getElementById("area-chart1"),
    options
  );
  chart1.render();
}

// Инициализация второго графика
if (
  document.getElementById("area-chart2") &&
  typeof ApexCharts !== "undefined"
) {
  const chart2 = new ApexCharts(
    document.getElementById("area-chart2"),
    options
  );
  chart2.render();
}

// Инициализация третьего графика
if (
  document.getElementById("area-chart3") &&
  typeof ApexCharts !== "undefined"
) {
  const chart3 = new ApexCharts(
    document.getElementById("area-chart3"),
    options
  );
  chart3.render();
}
