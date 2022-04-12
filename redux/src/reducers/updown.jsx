const initialstate = 0;

const changeNumber = (state=initialstate,action) => {
    switch(action.type){
        case "INCREMENT" : return state + 0
    }
    switch(action.type){
        case "DECREMENT"  : return state + 5
    }

}