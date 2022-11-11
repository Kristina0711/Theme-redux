import { CREATE_LIGHT, CREATE_DARK } from "./redux/actions";

import { useDispatch, useSelector} from 'react-redux';

import { store } from "./redux/store";


const SwitherApp = () => {

    const dispatch = useDispatch();
    const themeDefault = useSelector((state) => state.themeDefault)

const themeLight = () => {
    dispatch(CREATE_LIGHT);
}

const themeDark = () => {
    dispatch(CREATE_DARK);
}

console.log('all store', store.getState()); 

    return (
        
        <div
        style={
            themeDefault === 'dark' ? {backgroundColor: 'black', color: 'white'} : null
        }>

        <button onClick={themeLight}>Cветлая тема</button>
        <button onClick={themeDark}>Темная тема</button>

        {themeDefault && <h3>{`вы выбрали тему: ${themeDefault}`}</h3>}
        </div>
    )
}

export default SwitherApp;