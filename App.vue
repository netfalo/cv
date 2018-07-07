<template>
    <div>
        <md-card>
            <md-card-header>
                <div class="md-title">Timeline</div>
                <div class="md-subhead"><i>Select a period by clicking on a bar.</i></div>
            </md-card-header>
            <md-card-content>
                <chart></chart>
            </md-card-content>
            <md-card-actions>
                <md-button v-on:click="reset">Reset</md-button>
            </md-card-actions>
        </md-card>
        <div v-if="work(items).length > 0">
            <div class="section md-title">Work Experience</div>
            <card v-for="item in work(items)" :key="item.id" :item="item" />
        </div>
        <div v-if="education(items).length > 0">
            <div class="section md-title">Educations</div>
            <card v-for="item in education(items)" :key="item.id" :item="item" />
        </div>

    </div>
</template>

<style scoped>
    .md-card, .section {
        width: 80%;
        margin: 10px auto;
        vertical-align: top;
    }
</style>

<script>
    import Chart from './Chart'
    import Card from './Card'

    export default {
        name: 'RegularCards',
        computed: {
            items: function () {
                const tmp = this.$store.state.data;
                return tmp.sort(function (a, b) {
                    return a.id < b.id;
                });
            }
        },
        methods: {
            work: function(items) {
                const selected = this.$store.state.selected;
                return items.filter(function (item) {
                    return item.type === 'work'
                        && (selected === -1 || item.id === selected);
                });
            },
            education: function (items) {
                const selected = this.$store.state.selected;
                return items.filter(function(item) {
                    return item.type === 'education'
                        && (selected === -1 || item.id === selected);
                });
            },
            reset: function () {
                this.$store.commit('select', -1);
            }
        },
        components: {
            Chart,
            Card
        }
    }
</script>