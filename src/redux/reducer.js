import { CREATE_LIGHT, CREATE_DARK } from "./actions";

const defaultStore = {
    themeDefault: '',
};

const reducer = (state = defaultStore, action) => {
    switch (action.type) {
        case "CREATE_LIGHT":
            return { ...state, themeDefault: CREATE_LIGHT.payload };
        case "CREATE_DARK":
            return { ...state, themeDefault: CREATE_DARK.payload };

            default:
                return state;
    }
};

export default reducer;
