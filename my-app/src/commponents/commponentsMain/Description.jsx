import s from "../styles/Description.module.css"

const Description = (props) => {
    return (
        <div className={s.description__block}>
            <h2 className={s.description__title}>О нас</h2>
            <p className={s.description__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non bibendum erat, a hendrerit lacus. Sed sit amet tellus ex. In dictum, nibh et finibus condimentum, sapien dolor consequat felis, et faucibus enim augue faucibus nibh
                </p>
                <p className={s.description__text}>
                    Nam non aliquam nibh. Pellentesque ullamcorper rutrum orci ut scelerisque. Integer consequat eget lacus gravida iaculis. Morbi ac turpis non elit vulputate maximus at ac elit. In porta massa eget eros sagittis, nec tincidunt felis ullamcorper.
                </p>
                <h2 className={s.description__title}> {props.search ? 'Поиск по запросу: ' + props.search : 'Все смартфоны'}</h2>
        </div>
    )
}
export default Description;