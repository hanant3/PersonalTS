import * as d3 from 'd3';
import './style.css';

const draw = (props) => {
    d3.select('.vis-barchart > *').remove();
    const data = props.data;
    const margin = {top: 20, right: 20, bottom: 45, left: 55};
    const width = props.width - margin.left - margin.right;
    const height = props.height - margin.top - margin.bottom;

    // Append a div that will be used as a tooltip
    const tooltip = d3.select('.vis-barchart')
        .append('div')
        .style('opacity', 0)
        .attr('class', 'tooltip')
        .style('background-color', 'white')
        .style('border', 'solid')
        .style('border-width', '2px')
        .style('border-radius', '5px')
        .style('padding', '5px')
        .style('position', 'absolute')
        .style('display', 'none'); // This will be set to 'block' on mouseover

    
    let svg = d3.select('.vis-barchart').append('svg')
            .attr('width',width + margin.left + margin.right)
            .attr('height',height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // // format the data
    // data.forEach(function(d) {
    //     d.age = +d.age;
    // });

    // Scale the range of the data in the domains
    let x = d3.scaleBand()
          .range([0, width])
          .padding(0.1)
          .domain(data.map(function(d) { return d.name; }));
    
    let y = d3.scaleLinear()
          .range([height, 0]);
          
    y.domain([0, d3.max(data, function(d) { return d.age; })]);
    

    // append the circles for the scatter plot
    svg.selectAll(".dot")
        .data(data)
        .enter().append("circle")
        .attr("class", "dot")
        .attr("r", 5) //radius of the circle
        .attr("cx", function(d) { return x(d.name); })
        // .attr("width", x.bandwidth())
        .attr("cy", function(d) { return y(d.age); })
        // .attr("height", function(d) { return height - y(d.age); });
        .on('mouseover', function (event, d) {
            tooltip
                .style('display', 'block')
                .style('opacity', 0);
        })
        .on('mousemove', function (event, d) {
            tooltip
                .html('Age: ' + d.age + '<br>Gender: ' + d.gender + '<br>Status: ' + d.status) // Construct the tooltip content here
                .style('left', (event.pageX + 10) + 'px')
                .style('top', (event.pageY + 10) + 'px');
        })
        .on('mouseout', function () {
            tooltip
                .style('opacity', 0)
                .style('display', 'none');
        });

    // add the x Axis
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));
    
    // Add X axis label
    svg.append("text")
        .attr("text-anchor", "end")
        .attr("x", width / 2 + margin.left)
        .attr("y", height + margin.bottom - 5) // Adjust this value to position the label below the x-axis
        .text("User");  // Replace with your actual x-axis label


    // add the y Axis
    svg.append("g")
        .call(d3.axisLeft(y));
    
    // Add Y axis label
    svg.append("text")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(-90)")
        .attr("y", -margin.left + 20) // Adjust this value to position the label to the left of the y-axis
        .attr("x", -height / 3)
        .text("Mental Health Index");  // Replace with your actual y-axis label
}

export default draw;