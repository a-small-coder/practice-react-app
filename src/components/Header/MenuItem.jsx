const MenuItem = (props) => {

    return (
        <a class="menu-block__item menu-item" href={`${props.link}`}>{props.title}</a>
    )
}

export default MenuItem