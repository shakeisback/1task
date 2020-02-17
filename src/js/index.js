import '@babel/polyfill';
import Vue from 'vue/dist/vue.esm.js';
import axios from 'axios';
import _ from 'lodash';


document.addEventListener('DOMContentLoaded', () => {
    Vue.component('parallax-list', {
        data() {
            return {
                paralaxData: [{
                        background: 'https://images.unsplash.com/photo-1551582045-6ec9c11d8697?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                        title: 'Winter',
                    },
                    {
                        background: 'https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                        title: 'Spring',
                    },
                    {
                        background: 'https://images.unsplash.com/photo-1553649084-3e42773ff0e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                        title: 'Summer',
                    },
                    {
                        background: 'https://images.unsplash.com/photo-1429198739803-7db875882052?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                        title: 'Autumn',
                    }

                ]
            }
        },
        template: `
            <ul class="parallax__list">
              <paralax-item :article="item" v-for="item in paralaxData"></paralax-item>
            </ul>
        `,

    });








    Vue.component('paralax-item', {
        props: ['article'],
        template: `
            <li class="paralax__item" ref="item">
                <div class="paralax__bg" ref="bg" v-bind:style="{ 'background-image': 'url(' + article.background + ')' }"></div>
                <h1 class="paralax__title">{{ article.title }}</h1>
            </li>
        
        `,
        created() {
            window.addEventListener('scroll', this.handleScroll);
        },
        methods: {
            handleScroll() {
                const parentHeight = this.$refs.item.offsetHeight
                const parallaxHeight = this.$refs.bg.offsetHeight
                const availableOffset = parallaxHeight - parentHeight
                let animationValue = (window.pageYOffset * 0.20)
                if (animationValue <= availableOffset && animationValue >= 0) {
                    this.$refs.bg.style.transform = `translate3d(0, ${animationValue}px , 0)
                    `
                }
            }
        },

    })
    const vue = new Vue({
        el: '#app',
    });

    window.VUE = vue;
});