import { Link } from 'react-router-dom'
import './ProfileCard.css'

export default function ProfileCard () {
    return (
        <ul className='dropdown-menu'>
            <li>
                <Link to='#'>Your Profile</Link>
            </li>
        </ul>
    )
}