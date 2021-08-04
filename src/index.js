/* eslint-disable no-console */
import './style.css';
import myTvFetch from './lib/tv-api';
import Card from './components/card';
import Modal from './components/modal';
import myInteractionFetch from './lib/interactions-api';
import CommentReservation from './components/comment-reservation';

const commentReservation = new CommentReservation; 
const modal = new Modal('body', myInteractionFetch, commentReservation);
const newCards = new Card('movies-wrapper', modal);

const query = 'simpsons';
myTvFetch(query, newCards);
myTvFetch(query, modal);
// myInteractionFetch(CommentReservation);