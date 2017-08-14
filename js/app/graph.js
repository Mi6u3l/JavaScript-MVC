define(['d3'], (d3) => {
    class Graph {
        constructor(modelName, foregroundPercentage, total, backgroundColor, foregroundColor) {
            this.foregroundPercentage = foregroundPercentage;
            this.backgroundColor = backgroundColor;
            this.foregroundColor = foregroundColor;
            this.modelName = modelName;
            this.total = total;
        }

        init() {
            let τ = 2 * Math.PI,
                width = 210,
                height = 210,
                outerRadius = Math.min(width, height) / 2,
                innerRadius = 98;
            const arc = d3.svg.arc()
                .innerRadius(innerRadius)
                .outerRadius(outerRadius)
                .startAngle(0);

            const svg = d3.select('#graphsContainer').append('graph').append('svg')
                .attr('class', 'graphs-container')
                .attr('viewBox', `0 0 ${Math.min(width, height)} ${Math.min(width, height)}`)
                .attr('preserveAspectRatio', 'xMinYMin')
                .append('g')
                .attr('transform', `translate(${Math.min(width, height) / 2},${Math.min(width, height) / 2})`);

            const title = svg.append('text')
                .text(this.modelName)
                .attr('text-anchor', 'middle')
                .attr('class', 'graph-title')
                .attr('fill','#a4a4a4')
                .attr('dx', 2)
                .attr('dy', -18);

            const total = svg.append('text')
                .text(this.total)
                .attr('text-anchor', 'middle')
                .attr('class', 'graph-text')
                .attr('fill', '#373737')
                .attr('dx', 2)
                .attr('dy', 10);

            const background = svg.append('path')
                .datum({
                    endAngle: τ,
                })
                .style('fill', this.backgroundColor)
                .attr('d', arc);

            const foreground = svg.append('path')
                .datum({
                    endAngle: 0 * τ,
                })
                .style('fill', this.foregroundColor)
                .attr('d', arc);


            foreground.transition()
                .duration(750)
                .call(arcTween, (this.foregroundPercentage / 100) * τ);


            function arcTween(transition, newAngle) {
                transition.attrTween('d', (d) => {
                    const interpolate = d3.interpolate(d.endAngle, newAngle);
                    return function (t) {
                        d.endAngle = interpolate(t);
                        return arc(d);
                    };
                });
            }
        }
    }
    return Graph;
});