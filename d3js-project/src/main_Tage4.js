// Tag 4 – Transitionen und Animation
// Ziel: Balken beim Laden und bei Datenwechsel animieren

const width = 760, height = 420;
const margin = { top: 24, right: 20, bottom: 52, left: 56 };
const innerWidth  = width  - margin.left - margin.right;
const innerHeight = height - margin.top  - margin.bottom;

const svg = d3.select("#chart")
  .attr("viewBox", `0 0 ${width} ${height}`);

const g = svg.append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

const categories = ["Mo", "Di", "Mi", "Do", "Fr"];

const x = d3.scaleBand()
  .domain(categories)
  .range([0, innerWidth])
  .padding(0.2);

const y = d3.scaleLinear()
  .domain([0, 50])
  .range([innerHeight, 0]);

g.append("g")
  .attr("transform", `translate(0,${innerHeight})`)
  .call(d3.axisBottom(x));
g.append("g")
  .call(d3.axisLeft(y).ticks(6));

function update(data) {
  g.selectAll("rect")
    .data(data, d => d.name)
    .join(
      enter => enter.append("rect")
        .attr("x",      d => x(d.name))
        .attr("y",      innerHeight)   // Startposition: unten
        .attr("width",  x.bandwidth())
        .attr("height", 0)             // Starthöhe: 0
        .attr("fill", "#2563eb"),
      update => update,
      exit => exit.remove()
    )
    .transition()
    .duration(600)
    .delay((d, i) => i * 80)
    .ease(d3.easeCubicOut)
    .attr("y",      d => y(d.value))
    .attr("height", d => innerHeight - y(d.value));
}

const initialData = categories.map(name => ({
  name,
  value: Math.round(Math.random() * 40 + 5)
}));
update(initialData);

d3.select("main").insert("button", "svg")
  .text("Neue Werte animieren")
  .style("margin", "12px 0")
  .style("display", "block")
  .on("click", () => {
    const newData = categories.map(name => ({
      name,
      value: Math.round(Math.random() * 40 + 5)
    }));
    update(newData);
  });
