import styles from './portfolio.module.css';
import Project from '../../components/project/Project';

const items = [
  {
    id: 1,
    title: "Blade and Soul",
    img: "https://firebasestorage.googleapis.com/v0/b/images-6e809.appspot.com/o/portfolio%2FbnsScreen.png?alt=media&token=e4d8e257-fbca-4b8f-9f40-553c98624727",
    desc: "A clone website of one of my favorite games, Blade and Soul, where you can register, upload pictures, comment on the blog page, and purchase in-game items (note: this project is not affiliated with or endorsed by the official Blade & Soul game or NCSOFT). Use email: altes@gmail.com, password: 123456 to test the admin features.",
    link: 'https://www.bnslive.store/'
  },
  {
    id: 2,
    title: "Booking Application",
    img: "https://firebasestorage.googleapis.com/v0/b/images-6e809.appspot.com/o/portfolio%2FbookingScreen.png?alt=media&token=5ee404ca-e598-4824-ba1d-1f2dca1d1520",
    desc: "A web application where you can rent properties for your stays or vacations.",
    link: 'https://booking.idrizaltes.tech/'
  },
  {
    id: 3,
    title: "Video Sharing Application",
    img: "https://firebasestorage.googleapis.com/v0/b/images-6e809.appspot.com/o/portfolio%2FvideoApp.png?alt=media&token=fd8f7843-0f42-4fcc-8a0c-1112c9345fd2",
    desc: "A music and video sharing application where you can listen to your favorite songs and stream video content.",
    link: 'https://video.idrizaltes.tech/'
  },
  {
    id: 4,
    title: "Car Rental Application",
    img: "https://firebasestorage.googleapis.com/v0/b/images-6e809.appspot.com/o/portfolio%2FcarScreen.png?alt=media&token=5cf4506b-c544-4dd1-b5e4-d6cf807611ac",
    desc: "A platform to browse cars, compare prices, and connect with sellers. Users can also list their own vehicles for sale. (Currently under active development.)",
    link: '#'
  }
];

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.progress}>My Works</div>
      {items.map((item) => (
        <Project item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;