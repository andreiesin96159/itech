import s from "../styles/Baner.module.css"

const Baner = () => {
    return (
        <div className={s.baner}>
          <div className={s.baner__block}>
            <h1 className={s.baner__title}>Лучшие цены<br/><span className={s.baner__title__color}>на все смартфоны</span></h1>
            <button className={s.baner__button}>Купить iPhone</button>
            </div>
        </div>
    )
}
export default Baner;