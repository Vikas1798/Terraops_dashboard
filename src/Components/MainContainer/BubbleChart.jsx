import ReactApexChart from 'react-apexcharts';

const BubbleChart = (props) => {

    // Configure ApexCharts bubble chart
    const chartOptions = {
        chart: {
            type: 'bubble',
            toolbar: {
                show: false,
                tools: {
                    download: false
                }
            },
            events: {
                dataPointSelection: (event, chartContext, { dataPointIndex }) => {
                    const selectedData = props.initialData[dataPointIndex];
                    props.handleBubbleClick({ data: selectedData });
                }
            }
        },
        colors: ['#FF4560'],
        fill: {
            opacity: 0.8,
        },
        xaxis: { title: { text: 'Population' } },
        yaxis: { title: { text: 'Revenue' } },
        tooltip: {
            custom: ({ series, seriesIndex, dataPointIndex }) => {
                const selectedData = props.initialData[dataPointIndex];
                return `<div class='bg-basicWhite px-3 py-2 rounded-xl'> Company: ${selectedData.name}<br/> Revenue: ${selectedData.revenue} <br/> Population: ${selectedData.population}</div>`;
            }
        }
    };

    const chartSeries = [
        {
            name: 'Revenue',
            data: props.initialData.map((item) => ({ x: item.x, y: item.y, z: item.z, name: item.name }))
        }
    ];

    return (
        <div className="w-full mx-auto overflow-hidden bg-fourth p-2 lg:p-5 rounded-xl animate-fade">
            <h2 className='text-2xl font-semibold  mb-5'>Population vs Revenue</h2>
            <ReactApexChart
                options={chartOptions}
                series={chartSeries}
                type="bubble"
                height={300}
                className='w-full bg-white rounded-lg lg:p-3'
            />
        </div>
    )
}

export default BubbleChart;