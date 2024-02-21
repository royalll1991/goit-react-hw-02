
import FriendListItem from './FriendListItem/FriendListItem'
import css from '../FriendList/FriendList.module.css'

const FriendList = ({friends}) => {
    return (<ul className={css.list}>
        {friends.map((friend) => (
                <li className={css.box} key={friend.id}>
                    <FriendListItem 
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                </li>
            ))}
        
    </ul>
    );
};

export default FriendList;