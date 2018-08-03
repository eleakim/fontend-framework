require('../scss/home.scss');

import Vue from 'vue';


var app = new Vue({
    name: 'app',
    data: {
        title: 'Generate your team!'
    },
    methods: {
        fetchCharacter() {
            fetch('https://swapi.co/api/people', {
                method: 'GET'
            }).then(response => console.log(response))
        }
    }
})
