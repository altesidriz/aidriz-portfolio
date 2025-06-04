import styles from './portfolio.module.css';
import Project from '../../components/project/Project';

const items = [
  {
    id: 1,
    title: "Booking Application",
    img: "https://firebasestorage.googleapis.com/v0/b/images-6e809.appspot.com/o/portfolio%2FbookingScreen.png?alt=media&token=5ee404ca-e598-4824-ba1d-1f2dca1d1520",
    desc: "A website application where you can rent a property for your stays or vacation",
    link: 'https://booking.idrizaltes.tech/'
  },
  {
    id: 2,
    title: "Blade and Soul",
    img: "https://firebasestorage.googleapis.com/v0/b/images-6e809.appspot.com/o/portfolio%2FbnsScreen.png?alt=media&token=e4d8e257-fbca-4b8f-9f40-553c98624727",
    desc: "A clone web site of one of my favourite games Blade and Soul, where you can register upload pictures, comment on blog page, and purchase in game items (note that nothing in this project is realted with purcases or copyrights with the game IRL)",
    link: 'https://www.bnscloud.shop/'
  },
  {
    id: 3,
    title: "Car Rent Application",
    img: "https://firebasestorage.googleapis.com/v0/b/images-6e809.appspot.com/o/portfolio%2FcarScreen.png?alt=media&token=5cf4506b-c544-4dd1-b5e4-d6cf807611ac",
    desc: "Website Application where ou can find cars check prices and contact with offerer. Also you can be an offerer and upload your own car to sell it.",
    link: '#'
  },
  {
    id: 4,
    title: "Video Sharing Application",
    img: "https://firebasestorage.googleapis.com/v0/b/images-6e809.appspot.com/o/portfolio%2FvideoApp.png?alt=media&token=fd8f7843-0f42-4fcc-8a0c-1112c9345fd2",
    desc: "Music and video player application where you can listen to your favorite music and watch videos",
    link: 'https://video.idrizaltes.tech/'
  },
];

const Portfolio = () => {

  return (
    <div className={styles.container}>
      <div className={styles.progress}>My Works</div>
      {items.map((item) => (
        <Project item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Portfolio