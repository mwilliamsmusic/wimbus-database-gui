export const initialState = {toggle:'edit'};

export const navbarReducer = (state, action) => {
    switch(action.type) {
        case('edit'):
            return {
                ...state,
                toggle: 'edit'
            };
        case('upload') :
            return{
                ...state,
                toggle: 'upload'
            };
        default:
            return state;
    }
};
