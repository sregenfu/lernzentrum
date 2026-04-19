// Tag 6 – Echte Daten mit d3.csv()
// Ziel: CSV laden, Typkonvertierung, visualisieren
// Voraussetzung: data/lernzeiten.csv im Projektordner vorhanden
//   tag,minuten
//   Mo,45
//   Di,30
//   Mi,60
//   Do,20
//   Fr,50

d3.csv("data/lernzeiten.csv", d => ({
  tag:     d.tag,
  minuten: +d.minuten   // + konvertiert String zu Number
}))
  .then(data => {
    const width = 760, height = 420;
    const margin = { top: 24, right: 20, bottom: 52, left: 64 };
    const innerWidth  = width  - margin.left - margin.right;
    const innerHeight = height - margin.top  - margin.bottom;

    const svg = d3.select("#chart")
      .attr("viewBox", `0 0 ${width} ${height}`);

    const g = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3.scaleBand()
      .domain(data.map(d => d.tag))
      .range([0, innerWidth])
      .padding(0.2);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.minuten)])
      .nice()
      .range([innerHeight, 0]);

    g.append("g")
      .attr("transform", `translate(0,${innerHeight})`)
      .call(d3.axisBottom(x));

    g.append("g")
      .call(d3.axisLeft(y).ticks(6));

    // Y-Achsen-Beschriftung
    g.append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", -innerHeight / 2)
      .attr("y", -50)
      .attr("text-anchor", "middle")
      .attr("fill", "#64748b")
      .attr("font-size", "13px")
      .text("Minuten");

    g.selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x",      d => x(d.tag))
      .attr("y",      d => y(d.minuten))
      .attr("width",  x.bandwidth())
      .attr("height", d => innerHeight - y(d.minuten))
      .attr("fill", "#2563eb");
  })
  .catch(err => {
    console.error("Fehler beim Laden der CSV:", err);
    d3.select("#chart")
      .attr("viewBox", "0 0 400 80")
      .append("text")
      .attr("x", 20).attr("y", 40)
      .attr("fill", "#dc2626")
      .attr("font-size", "14px")
      .text("CSV nicht gefunden – Server im Projekt-Root starten.");
  });
