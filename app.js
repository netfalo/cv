import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import VueMaterial from 'vue-material'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false;

Vue.use(VueMaterial);
Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        data: [
            {
                id: 0,
                type: "education",
                label: "University",
                title: "Software Engineering, Bsc",
                place: "Budapest University of Technology and Economics, Budapest",
                description: "",
                startDate: new Date(2009, 8, 0),
                endDate: new Date(2014, 1, 28)
            },
            {
                id: 1,
                type: "education",
                label: "University",
                title: "Business Administration and Management, Ba",
                place: "Corvinus University of Budapest",
                description: "",
                startDate: new Date(2010, 8, 0),
                endDate: new Date(2016, 5, 29)
            },
            {
                id: 2,
                type: "work",
                label: "Ericsson",
                title: "C++ Developer",
                place: "Ericsson, Budapest",
                description: "",
                startDate: new Date(2014, 0, 12),
                endDate: new Date(2016, 7, 30)
            },
            {
                id: 3,
                type: "education",
                label: "Ericsson",
                title: "Product Owner Talent Program",
                place: "Ericsson, Budapest",
                description: "",
                startDate: new Date(2015, 8, 1),
                endDate: new Date(2016, 2, 30)
            },
            {
                id: 4,
                type: "work",
                label: "Ericsson",
                title: "CICD PO",
                place: "Ericsson, Budapest",
                description: "",
                startDate: new Date(2016, 3, 0),
                endDate: new Date(2016, 7, 30)
            },
            {
                id: 5,
                type: "work",
                label: "Ericsson",
                title: "Software Developer",
                place: "Ericsson, Stockholm",
                description: "",
                startDate: new Date(2016, 8, 1),
                endDate: new Date(2017, 0, 30)
            },
            {
                id: 6,
                type: "work",
                label: "Ericsson",
                title: "Software Architect",
                place: "Ericsson, Stockholm",
                description: "",
                startDate: new Date(2017, 1, 1),
                endDate: new Date()
            }
        ],
        selected: -1
    },
    mutations: {
        select(state, row) {
            state.selected = row;
        }
    }
});

new Vue({
    el: '#app',
    store: store,
    components: { App },
    template: '<App/>'
});
