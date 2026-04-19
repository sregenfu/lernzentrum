// Tag 5 – Interaktion und Tooltips
// Ziel: Hover-Effekte und schwebender Tooltip

const width = 760, height = 420;
const margin = { top: 24, right: 20, bottom: 52, left: 56 };
const innerWidth  = width  - margin.left - margin.right;
const innerHeight = height - margin.top  - margin.bottom;

const data = [
  { name: "Mo", value: 12 },
  { name: "Di", value: 28 },
  { name: "Mi", value: 9  },
  { name: "Do", value: 34 },
  { name: "Fr", value: 20 }
];

// Tooltip-Div außerhalb des SVG anlegen
const tooltip = d3.select("body").append("div")
  .style("position",       "absolute")
  .style("background",     "#1e293b")
  .style("color",          "#fff")
  .style("padding",        "6px 12px")
  .style("border-radius",  "6px")
  .style("font-size",      "13px")
  .style("pointer-events", "none")
  .style("opacity",        0);

const svg = d3.select("#chart")
  .attr("viewBox", `0 0 ${width} ${height}`);

const g = svg.append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

const x = d3.scaleBand()
  .domain(data.map(d => d.name))
  .range([0, innerWidth])
  .padding(0.2);

const y = d3.scaleLinear()
  .domain([0, d3.max(data, d => d.value)])
  .nice()
  .range([innerHeight, 0]);

g.append("g")
  .attr("transform", `translate(0,${innerHeight})`)
  .call(d3.axisBottom(x));
g.append("g")
  .call(d3.axisLeft(y).ticks(6));

g.selectAll("rect")
  .data(data)
  .join("rect")
  .attr("x",      d => x(d.name))
  .attr("y",      d => y(d.value))
  .attr("width",  x.bandwidth())
  .attr("height", d => innerHeight - y(d.value))
  .attr("fill",   "#2563eb")
  .style("cursor", "pointer")
  .on("mouseover", (event, d) => {
    tooltip.style("opacity", 1)
      .html(`<strong>${d.name}</strong>: ${d.value} Min.`);
    d3.select(event.currentTarget).attr("fill", "#1d4ed8");
  })
  .on("mousemove", event => {
    tooltip
      .style("left", (event.pageX + 14) + "px")
      .style("top",  (event.pageY - 32) + "px");
  })
  .on("mouseout", event => {
    tooltip.style("opacity", 0);
    d3.select(event.currentTarget).attr("fill", "#2563eb");
  });
