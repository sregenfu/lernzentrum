// Tag 3 – Data Join mit .join() und key-Funktionen
// Ziel: Diagramm per Button-Klick dynamisch aktualisieren

const width = 760, height = 420;
const margin = { top: 24, right: 20, bottom: 52, left: 56 };
const innerWidth  = width  - margin.left - margin.right;
const innerHeight = height - margin.top  - margin.bottom;

const svg = d3.select("#chart")
  .attr("viewBox", `0 0 ${width} ${height}`);

const g = svg.append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

const categories = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

function randomData() {
  return categories.map(name => ({
    name,
    value: Math.round(Math.random() * 40 + 5)
  }));
}

const x = d3.scaleBand()
  .domain(categories)
  .range([0, innerWidth])
  .padding(0.2);

const y = d3.scaleLinear()
  .range([innerHeight, 0]);

const xAxisG = g.append("g")
  .attr("transform", `translate(0,${innerHeight})`);
const yAxisG = g.append("g");

function update(data) {
  y.domain([0, d3.max(data, d => d.value)]).nice();

  xAxisG.call(d3.axisBottom(x));
  yAxisG.call(d3.axisLeft(y).ticks(6));

  g.selectAll("rect")
    .data(data, d => d.name)   // key-Funktion: Identität per Name
    .join("rect")              // enter + update + exit in einem
    .attr("x",      d => x(d.name))
    .attr("y",      d => y(d.value))
    .attr("width",  x.bandwidth())
    .attr("height", d => innerHeight - y(d.value))
    .attr("fill", "#2563eb");
}

update(randomData());

// Button zum Auslösen
d3.select("main").insert("button", "svg")
  .text("Neue Daten laden")
  .style("margin", "12px 0")
  .style("display", "block")
  .on("click", () => update(randomData()));
