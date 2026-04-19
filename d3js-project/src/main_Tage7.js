// Tag 7 – Mini-Projekt: vollständiges, responsives Diagramm
// Ziel: Alles aus Tag 1–6 kombiniert + Titel, Legende, Quellenangabe
// Voraussetzung: data/lernzeiten.csv vorhanden (Server im Projekt-Root)

d3.csv("data/lernzeiten.csv", d => ({
  tag:     d.tag,
  minuten: +d.minuten
}))
  .then(data => {
    const width = 760, height = 460;
    const margin = { top: 64, right: 20, bottom: 52, left: 64 };
    const innerWidth  = width  - margin.left - margin.right;
    const innerHeight = height - margin.top  - margin.bottom;

    const svg = d3.select("#chart")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .style("width",  "100%")   // responsiv: passt sich Container an
      .style("height", "auto");

    // Titel
    svg.append("text")
      .attr("x", width / 2)
      .attr("y", 32)
      .attr("text-anchor", "middle")
      .attr("font-size",   "18px")
      .attr("font-weight", "600")
      .attr("fill", "#1e293b")
      .text("Lernminuten pro Wochentag");

    const g = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3.scaleBand()
      .domain(data.map(d => d.tag))
      .range([0, innerWidth])
      .padding(0.25);

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

    // Tooltip
    const tooltip = d3.select("body").append("div")
      .style("position",       "absolute")
      .style("background",     "#1e293b")
      .style("color",          "#fff")
      .style("padding",        "6px 12px")
      .style("border-radius",  "6px")
      .style("font-size",      "13px")
      .style("pointer-events", "none")
      .style("opacity",        0);

    // Balken mit Einblend-Animation
    g.selectAll("rect")
      .data(data)
      .join(enter => enter.append("rect")
        .attr("x",      d => x(d.tag))
        .attr("y",      innerHeight)
        .attr("width",  x.bandwidth())
        .attr("height", 0)
        .attr("fill",   "#2563eb")
      )
      .on("mouseover", (event, d) => {
        tooltip.style("opacity", 1)
          .html(`<strong>${d.tag}</strong>: ${d.minuten} Min.`);
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
      })
      .transition()
      .duration(700)
      .delay((d, i) => i * 80)
      .ease(d3.easeCubicOut)
      .attr("y",      d => y(d.minuten))
      .attr("height", d => innerHeight - y(d.minuten));

    // Legende
    const legend = svg.append("g")
      .attr("transform", `translate(${margin.left}, ${height - 10})`);
    legend.append("rect")
      .attr("width", 14).attr("height", 14)
      .attr("fill", "#2563eb").attr("rx", 2);
    legend.append("text")
      .attr("x", 20).attr("y", 12)
      .attr("font-size", "12px")
      .attr("fill", "#64748b")
      .text("Lernminuten (eigene Messung)");

    // Quellenangabe
    svg.append("text")
      .attr("x", width - margin.right)
      .attr("y", height - 2)
      .attr("text-anchor", "end")
      .attr("font-size", "11px")
      .attr("fill", "#94a3b8")
      .text("Quelle: data/lernzeiten.csv");
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
