import React from 'react';
import styles from './Articles.module.css'
import avatar from '../assets/user.png'
// import imageSrc from '../assets/pexels-prasanth-inturi.jpg';


const ArticleEnglish = () => {
    return (
      <section id="english-content">
      <div className={styles.container}>
        <div className={styles.pageContainer}>
          <article className={styles.card}>
             {/* <img src={imageSrc} alt="wellness" />  */}
            <h1 className={styles.lHeading}>
              Lorem ipsum dolor sit amet. </h1>
              <div className={styles.meta}>
                  <small>
                      May 24, 2024
                  </small>
              </div>
              
              <p className={styles.paragraph}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                dolores ipsum odit voluptatum explicabo dicta fugiat excepturi,
                fuga nihil aliquam corrupti impedit in voluptatibus omnis aut
                aspernatur, quibusdam dolore, tenetur optio non. Vero cum quidem
                veritatis deserunt eaque voluptates distinctio labore, ab
                voluptatum nostrum molestiae magnam ex repellat adipisci
                expedita.
              </p>

              <p className={styles.lQuote}>
              Sometimes I wonder if computers really understand what we're asking them to do, 
              or if they're just really good at pretending.
              </p>

              <p className={styles.paragraph}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Possimus fuga modi quasi sit, laboriosam officiis saepe dolor
                iste odio esse corrupti illum blanditiis fugit commodi obcaecati
                voluptatum. 
              </p>

              <div className={styles.wrapper}>
                <p className={styles.writer}>Written by</p>
                <img src={avatar} alt="" className={styles.figure} />
                <div className={styles.div}>
                  <p className={styles.author}>Jane Doe</p>
                  <p>Passionate about bringing life to website designs and sharing knowledge with others</p>
                </div>
              </div>
          </article>
        </div>
      </div>
    </section>
       
    );
  };
  export default ArticleEnglish;