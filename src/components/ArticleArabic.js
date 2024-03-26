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
              <p className={styles.paragraph}>
              إذا كان العميل ذكيًا جدًا، فسوف يتمكن من تحقيق النتيجة المرجوة. يمكننا أن نقول أن هناك هروبًا في الأخلاق، وأن هذا الألم غالبًا ما يكون ألم الواجبات الشاقة، وأنه يكره الفاسدين، ويهرب من التملق، وتعميه ملذات الراحة. وبالعقل يريد أن ينتقدهم، ولكنه يسعى إلى الحق كله، لأنه سيعاقب بشيء لا يعرفونه عن الأشغال الشاقة. هذا هو! تجنب المشاكل الأكبر! هل ستتفاجأون أيها الصغار عندما تفترضون أن معظم هذه الأعمال بطريقة فاسدة تعيق العمل المنتظم الذي يريد الإنسان أن يحقق أشياء أعظم، أو يحصل على ملذات، أو يؤلمه؟
فهل يلوم قلة الرغبة في ذلك ويكره تلك الطرق التي تؤدي إلى الكراهية؟ سيتقبلون ألم الحقيقة، أين المرونة؟
من الحياة هنا في
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