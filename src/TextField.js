import React from 'react';
import style from './style';

const TextField = ({name, onChange, onBlur, label, error}) => (
	   <div style={style.inputGroup}>
			<label>
				{label}
				<input 
					style={style.input}
					type='text' 
					name={name} 
					onChange={onChange} 
					onBlur={onBlur} />
			</label>
			{error && <div style={style.error}>{error}</div>}	
		</div>
);
			
		

export default TextField;