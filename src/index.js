/* eslint-disable no-console */
import './style.css';
import myTvFetch from './lib/tv-api';
import Card from './components/card';
import Modal from './components/modal';

const modal = new Modal('body');
const newCards = new Card('movies-wrapper', modal);

const query = 'simpsons';
myTvFetch(query, newCards);
myTvFetch(query, modal);
// myInteractionFetch(CommentReservation);