import React from 'react';
import styles from './Articles.module.css'
// import imageSrc from '../assets/pexels-spencer-selover.jpg';
import avatar from '../assets/user.png'


const ArticleArabic = () => {
    return (
      <section id="arabic-content" lang="ar" dir="rtl">
      <div className={styles.container}>
        <div className={styles.pageContainer}>
          <article className={styles.card}>
            {/* <img src={imageSrc} alt="wellness" /> */}
            <h1 className={styles.lHeading}>
            العميل سعيد للغاية </h1>
              <div className={styles.meta}>
                  <small>
                  24 مايو 2024
                  </small>
              </div>
              
              <p className={styles.paragraph}>
              مرحبًا، إنه حقًا ألم يجب اتباعه. ل
يكره الآلام والملذات. مع الحقيقة بالفعل
إنهم يتخلون عن الحق، وفصل تلك الملذات بالعمل عن ملذاتنا يصد مشكلة كبيرة من وسيلة الحصول عليها.
              </p>

              <p className={styles.lQuote}>
              في بعض الأحيان أتساءل عما إذا كانت أجهزة الكمبيوتر تفهم حقًا ما نطلب منهم القيام به، أو إذا كانت جيدة حقًا في التظاهر.
              </p>

              <p className={styles.paragraph}>
              إذا كان العميل ذكيًا جدًا، فسوف يتمكن من تحقيق النتيجة المرجوة.
يمكننا أن نفكر في الأمر على أنه هروب من الأخلاق، فغالبًا ما يكون ألم الواجبات الشاقة هو كراهية الفاسدين، فهو يهرب من التملق، وتعميه ملذات الراحة.
              </p>

              <div className={styles.wrapper}>
                <p className={styles.writer}>كتب بواسطة</p>
                <img src={avatar} alt="" className={styles.figure} />
                <div className={styles.div}>
                  <p className={styles.author}>Jane Doe</p>
                  <p>شغوف بإضفاء الحيوية على تصميمات مواقع الويب ومشاركة المعرفة مع الآخرين</p>
                </div>
              </div>
          </article>

        </div>
      </div>
    </section>
       
    );
  };
  export default ArticleArabic;