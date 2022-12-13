import s from './styles/Fotter.module.css'


const Fotter = () => {
    return (
        <div className={s.fotter__color}>
            <h3 className={s.fotter__logo}>ITECH</h3>
            <div className={s.fotter__textBlock}>
                <p className={s.fotter__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non bibendum erat, a hendrerit lacus. Sed sit amet tellus ex. In dictum, nibh et finibus condimentum, sapien dolor consequat felis, et faucibus enim augue faucibus nibh
                </p>
                <p className={s.fotter__text}>
                    Nam non aliquam nibh. Pellentesque ullamcorper rutrum orci ut scelerisque. Integer consequat eget lacus gravida iaculis. Morbi ac turpis non elit vulputate maximus at ac elit. In porta massa eget eros sagittis, nec tincidunt felis ullamcorper.
                </p>
            </div>

        </div>
    )
}

export default Fotter;