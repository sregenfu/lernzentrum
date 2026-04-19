const data = [20, 5, 13, 10, 20, 5, 3, 8,7,15,20,10];

const svg = d3.select("#chart")
  .attr("viewBox", "0 0 960 600");

// Farbskala: kleiner Wert = hellblau, großer Wert = dunkelblau
const color = d3.scaleSequential()
  .domain([0, d3.max(data)])
  .interpolator(d3.interpolateOranges);

// Radiusskala
const r = d3.scaleLinear()
  .domain([0, d3.max(data)])
  .range([8, 50]);

svg.selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
  .attr("cx", (d, i) => 50 + i * 70) // Abstand zwischen den Kreisen
  .attr("cy", d => 120 - r(d)) //.attr("cy", 100)
  .attr("r",  d => r(d))
  .attr("fill", d => color(d));

  // Wert als Text in den Kreis
svg.selectAll("text")
  .data(data)
  .enter()
  .append("text")
  .attr("x", (d, i) => 50 + i * 70)
  .attr("y", 104)
  .attr("text-anchor", "middle")
  .attr("fill", d => d > 20 ? "#020" : "#000")
  .attr("font-size", "12px")
  .text(d => d);