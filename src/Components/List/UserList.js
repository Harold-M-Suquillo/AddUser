import User from './User'
import Card from '../UI/Card'
import styles from './UserList.module.css';


export default function UserList(props){
    return(
        <Card>
            <div id={styles['user-container']}>
                {(props.users.length === 0) && <User userName={null} age={null}/>}
                {(props.users.length !== 0) && 
                    props.users.map((user, i) => (
                        <User userName={user.user} age={user.age} key={'user_' + i}/>))}
            </div>
        </Card>
    );
}


