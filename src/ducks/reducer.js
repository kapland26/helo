const initialState = {
    username: "",
    id: "",
    profile_pic: "",
}

const UPDATE_USERNAME = 'UPDATE_USERNAME';
const UPDATE_ID = 'UPDATE_ID';
const UPDATE_PROFILE_PIC = 'UPDATE_PROFILE_PIC';


function reducer(state = initialState, action){
    console.log("Inside reducer with type: "+action.type+" and payload: "+action.payload)
    switch(action.type){
        case UPDATE_USERNAME:
            return Object.assign({},state,{username: action.payload});
        case UPDATE_ID:
            return Object.assign({},state,{id: action.payload});
        case UPDATE_PROFILE_PIC:
            return Object.assign({},state,{profile_pic: action.payload});
        default:
            return state;
    }
}

export function updateUsername(username){
    return {
        type: UPDATE_USERNAME,
        payload: username
    };
}

export function updateId(id){
    return {
        type: UPDATE_ID,
        payload: id
    };
}

export function updateProfPic(profile_pic){
    return {
        type: UPDATE_PROFILE_PIC,
        payload: profile_pic
    };
}


export default reducer;