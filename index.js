var candleStickData = require("./data.json");

var stockChart = new ej.charts.StockChart({
  primaryYAxis: {
    lineStyle: { color: "transparent" },
    majorTickLines: { color: "transparent", width: 0 },
    crosshairTooltip: { enable: true }
  },
  primaryXAxis: {
    majorGridLines: { color: "transparent" },
    crosshairTooltip: { enable: true },
    title: "Months"
  },
  


  enableSelector: false,
  series: [
    {
      dataSource: candleStickData,
      type: "Candle",

     
    }
  ],
 // title: "AAPL Stock Price"
});
stockChart.appendTo("#container");
