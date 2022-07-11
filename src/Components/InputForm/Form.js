import React from 'react';
import styles from './Form.module.css';
import Card from '../UI/Card';

export default function Form(){
    return (
        <Card>
            <form>
					<div>
						<div className={`${styles['center-container']} ${styles['form-input-container']}`}>
							<label>UserName</label>
							<input/>
						</div>

						<div className={`${styles['center-container']} ${styles['form-input-container']}`}>
							<label>Age (Years)</label>
							<input/>
						</div>
					</div>
                <div className={styles['center-container']}>
                	<button>Add User</button>
                </div>
            </form>
      	</Card>
    );	
}