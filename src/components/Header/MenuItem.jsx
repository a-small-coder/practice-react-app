import { Link } from "react-router-dom"

const MenuItem = (props) => {

    return (
        <Link class="menu-block__item menu-item" to={`${props.link}`}>{props.title}</Link>
    )
}

export default MenuItem