const data = [12, 25, 8, 32, 19, 27, 14];

const svg = d3.select("#chart");
const width = 760;
const height = 420;
const margin = { top: 24, right: 24, bottom: 50, left: 52 };

const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

const x = d3
  .scaleBand()
  .domain(d3.range(data.length))
  .range([0, innerWidth])
  .padding(0.2);

const y = d3
  .scaleLinear()
  .domain([0, d3.max(data)])
  .nice()
  .range([innerHeight, 0]);

const g = svg
  .attr("viewBox", `0 0 ${width} ${height}`)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

g
  .append("g")
  .attr("transform", `translate(0,${innerHeight})`)
  .call(d3.axisBottom(x).tickFormat((d) => `P${Number(d) + 1}`));

g.append("g").call(d3.axisLeft(y));

g
  .selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", (_, i) => x(i))
  .attr("y", (d) => y(d))
  .attr("width", x.bandwidth())
  .attr("height", (d) => innerHeight - y(d))
  .attr("rx", 6)
  .attr("fill", "#3b82f6");
