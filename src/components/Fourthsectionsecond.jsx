export default function Fouthsectionsecond({id, title, active, setSeclected }) {
    return (
        <li className="active" className={active ? "firstcontainer active" : "firstcontainer"}
        onClick={()=> setSeclected(id)}>
            {title}
        </li>
    )
}