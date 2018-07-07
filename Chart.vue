<template>
    <div id="chart"></div>
</template>

<script>
    import {GoogleCharts} from 'google-charts';
    export default {
        name: "Chart",
        data: function() {
            return {
                timelineChart: null,
                chartColumns: [
                    {type: 'string', id: 'Type'},
                    {type: 'string', id: 'Topic'},
                    {type: 'string', role: 'tooltip' },
                    {type: 'date', id: 'Start'},
                    {type: 'date', id: 'End'}
                ]
            }
        },
        mounted() {
            GoogleCharts.load(this.init, 'timeline');
        },
        methods: {
            init: function () {
                const d = this.$store.state.data
                    .sort(function (a, b) {
                        return a.id > b.id;
                    })
                    .map(function (item) {
                    return [item.label, item.title, '', item.startDate, item.endDate];
                });
                const chartData = [this.chartColumns, ...d];
                const data = GoogleCharts.api.visualization.arrayToDataTable(chartData);
                this.timelineChart = new GoogleCharts.api.visualization.Timeline(document.getElementById('chart'));
                GoogleCharts.api.visualization.events.addListener(this.timelineChart, 'select', this.selectHandler);
                this.timelineChart.draw(data);
            },
            selectHandler: function() {
                const row = this.timelineChart.getSelection()[0].row;
                this.$store.commit('select', row);
            }
        }
    }
</script>

<style scoped>

</style>