import Home from '../components/Home.vue';
import MovieDetails from '../components/MovieDetails.vue';
import GetTicket from '../components/GetTicket.vue';

export default {
    routes: [
        {path: '/', component: Home},
        {path: '/movie/:id', component: MovieDetails},
        {path: '/movie/:id/ticket', component: GetTicket},
    ],
    mode: 'history'
}