<template>
    <md-card>
        <md-card-header>
            <div class="md-title">{{item.title}}</div>
            <div class="md-subhead">{{item.place}}</div>
            <div class="md-subhead">{{item.startDate | formatDate}} - {{item.endDate | formatDate}}</div>
        </md-card-header>
        <md-card-content>
            {{item.description}}
        </md-card-content>
    </md-card>
</template>

<script>
    import moment from 'moment'

    function isItToday(date) {
        function format(date) {
            const format = 'YYYY MMM DD';
            return moment(date).format(format);
        }
        return format(date) === format(new Date());
    }
    
    export default {
        name: "Card",
        props: ['item'],
        filters: {
            formatDate: function (date) {
                if (isItToday(date)) {
                    return 'Now';
                } else {
                    return moment(date).format('YYYY MMM');
                }
            }
        }
    }
</script>

<style scoped>

</style>