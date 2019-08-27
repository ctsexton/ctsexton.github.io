(function() {
  const container = d3.select("#chart")
  const svg = container.append("svg")

  function makeChart(data) {
    svg.selectAll("g")
      .data(data)
      .join("g")
      .append("text")
        .attr("y", (d, i) => i * 20)
        .text(d => d.stop_name)
  }

  const thing = new Promise(resolve => {
    resolve(d3.csv('https://raw.githubusercontent.com/metro-ontime/performance_tracker/master/performance_tracker/data/line_info/804/804_0_stations.csv'))})
    .then(makeChart);

})()
