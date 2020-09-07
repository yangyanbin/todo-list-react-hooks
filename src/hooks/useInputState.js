import {useState,useCallback} from 'react';

export default function useInputState(defaultValue){
	const [value,setValue] = useState(defaultValue);
	function onChange(e){
		setValue(e.target.value);
	}
	const reset = useCallback(()=>setValue(''),[setValue]);
	return [value,onChange,reset]
}