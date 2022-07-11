import React from 'react';
import styles from './User.module.css';

export default function user(props){
    return (
        <>
        {(props.userName === null && props.age === null) && 
            <p id={styles['no-user']}>No Users</p>}
        {(props.userName != null && props.age != null) && 
            <p id={styles['user']}>{`${props.userName} (${props.age} years old)`}</p>}
        </>
    );
}