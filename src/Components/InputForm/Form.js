import React, {useState} from 'react';
import styles from './Form.module.css';
import Card from '../UI/Card';

export default function Form(props){
	const [userName, setUserName] = useState('');
	const [age, setAge] = useState('');

	const changeUserNameHandler = (e) => {
		setUserName(e.target.value);
	}

	const changeAgeHandler = (e) => {
		setAge(e.target.value);
	}

	const submitHandler = (e) => {
		e.preventDefault();
		// Check if user did not submit all data
		if (userName.trim().length !== 0 && age.trim().length !== 0){
			props.onSubmitForm(userName, age);
		}
		setUserName('');
		setAge('');
	}



    return (
        <Card>
            <form onSubmit={submitHandler}>
					<div>
						<div className={`${styles['center-container']} ${styles['form-input-container']}`}>
							<label>UserName</label>
							<input type="text" value={userName} onChange={changeUserNameHandler}/>
						</div>
						<div className={`${styles['center-container']} ${styles['form-input-container']}`}>
							<label>Age (Years)</label>
							<input type="number" min="1" max="125" step="1" value={age} onChange={changeAgeHandler}/>
						</div>
					</div>
                <div className={styles['center-container']}>
                	<button type="submit">Add User</button>
                </div>
            </form>
      	</Card>
    );	
}