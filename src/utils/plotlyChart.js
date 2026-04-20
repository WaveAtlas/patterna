import Plotly from 'plotly.js-dist-min'

export function renderPlotlyChart(targetId = 'myDiv') {
  const trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    type: 'scatter',
    mode: 'lines+markers',
    name: 'Series A',
    line: { color: '#1976d2', width: 3 },
    marker: { size: 8 },
  }

  const trace2 = {
    x: [1, 2, 3, 4],
    y: [16, 5, 11, 9],
    type: 'scatter',
    mode: 'lines+markers',
    name: 'Series B',
    line: { color: '#26a69a', width: 3 },
    marker: { size: 8 },
  }

  const data = [trace1, trace2]
  const layout = {
    title: {
      text: 'Quarterly Trend',
      x: 0,
      xanchor: 'left',
      font: { size: 20, color: '#1f2937' },
    },
    paper_bgcolor: '#ffffff',
    plot_bgcolor: '#ffffff',
    margin: { l: 48, r: 24, t: 56, b: 48 },
    legend: { orientation: 'h', y: -0.2 },
    xaxis: {
      title: { text: 'Period' },
      gridcolor: '#e5e7eb',
      zerolinecolor: '#e5e7eb',
    },
    yaxis: {
      title: { text: 'Value' },
      gridcolor: '#e5e7eb',
      zerolinecolor: '#e5e7eb',
    },
  }
  const config = {
    responsive: true,
    displaylogo: false,
  }

  Plotly.newPlot(targetId, data, layout, config)
}
