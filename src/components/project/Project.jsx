import React from 'react';
import styles from './project.module.css';

const Project = ({item}) => {
  return (
    <div className={styles.single}>
        <div className={styles.image}>
          <div className={styles.border}>
            <div className={styles.projectImg}>
              <img src={item.img} alt="" />
            </div>
            <img src="./monitor.png" alt="" />
          </div>
        </div>
        <div className={styles.description}>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <button>See Demo</button>
        </div>
      </div>
  )
}

export default Project