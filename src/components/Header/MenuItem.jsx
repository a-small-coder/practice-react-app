const MenuItem = (props) => {

    return (
        <a class="menu-block__item menu-item" href={`main-site-${props.link}`}>{props.title}</a>
    )
}

export default MenuItem