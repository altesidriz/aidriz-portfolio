import React from 'react';
import styles from './portfolio.module.css';
import Project from '../../components/project/Project';

const items = [
  {
    id: 1,
    title: "Booking Application",
    img: "https://firebasestorage.googleapis.com/v0/b/images-6e809.appspot.com/o/portfolio%2FbookingScreen.png?alt=media&token=674e0bed-1abc-4e86-9ff8-69100596cdf3",
    desc: "A website application where you can rent a property for your stays or vacation",
  },
  {
    id: 2,
    title: "Blade and Soul",
    img: "https://firebasestorage.googleapis.com/v0/b/images-6e809.appspot.com/o/portfolio%2FbnsScreen.png?alt=media&token=e4d8e257-fbca-4b8f-9f40-553c98624727",
    desc: "A clone web site of one of my favourite games Blade and Soul, where you can register upload pictures, comment on blog page, and purchase in game items (note that nothing in this project is realted with purcases or copyrights with the game IRL)",
  },
  {
    id: 3,
    title: "VroomVend App",
    img: "https://firebasestorage.googleapis.com/v0/b/images-6e809.appspot.com/o/portfolio%2FcarScreen.png?alt=media&token=5cf4506b-c544-4dd1-b5e4-d6cf807611ac",
    desc: "Website Application where ou can find cars check prices and contact with offerer. Also you can be an offerer and upload your own car to sell it.",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://firebasestorage.googleapis.com/v0/b/images-6e809.appspot.com/o/portfolio%2FplayScreen.png?alt=media&token=a5eb900f-327e-4b54-8673-7fb9c5487c01",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
];

const Portfolio = () => {

  return (
    <div className={styles.container}>
      <div className={styles.progress}>My Works</div>
      {items.map((item) => (
        <Project item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Portfolio