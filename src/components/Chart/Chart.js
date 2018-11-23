import React from "react";

import "./Chart.css";

import * as d3 from "d3";

export class Chart extends React.Component {
  componentDidUpdate() {
    const dataset = this.props.points;
    const w = document.querySelector(".Chart").offsetWidth;
    const h = document.querySelector(".Chart").offsetHeight;

    const padding = 60;

    const xScale = d3
      .scaleLinear()
      .domain([0, d3.max(dataset, d => d["x"])])
      .range([padding, w - padding]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(dataset, d => d["y"])])
      .range([h - padding, padding]);

    d3.select(".Chart")
      .selectAll("svg")
      .remove();

    setTimeout(() => {});

    const svg = d3
      .select(".Chart")
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .style("background-color", "#ccc");

    svg
      .selectAll("circle")
      .data(dataset)
      .enter()
      .append("circle")
      .attr("cx", d => xScale(d["x"]))
      .attr("cy", d => yScale(d["y"]))
      .attr("r", d => 5)
      .attr("fill", d => d["color"]);

    svg
      .selectAll("text")
      .data(dataset)
      .enter()
      .append("text")
      .text(d => d["x"] + "," + d["y"])
      .attr("x", d => xScale(d["x"]) + 10)
      .attr("y", d => yScale(d["y"]));

    const xAxis = d3.axisBottom(xScale);

    const yAxis = d3.axisLeft(yScale);

    svg
      .append("g")
      .attr("transform", "translate(0," + (h - padding) + ")")
      .call(xAxis);

    svg
      .append("g")
      .attr("transform", "translate(" + padding + "," + 0 + ")")
      .call(yAxis);

    const polylinePoints = dataset.reduce((acc, point) => {
      return acc + xScale(point["x"]) + "," + yScale(point["y"]) + " ";
    }, "");

    svg
      .append("polyline")
      .attr("points", polylinePoints)
      .attr("stroke-width", "2")
      .attr("stroke", "#000")
      .attr("fill", "none");
  }

  render() {
    return <div className="Chart" />;
  }
}
