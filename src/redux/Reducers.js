import { ITEMS } from "../shared/items";
export const initialState = {
    items: ITEMS,
};
const ADD_ITEM = "ADD_ITEM";
const DEL_ITEM = "DEL_ITEM";
// const addComment = (dishId, rating, author, comment) => ({
//     type: ActionTypes.ADD_COMMENT,
//     payload: {
//         dishId: dishId,
//         rating: rating,
//         author: author,
//         comment: comment,
//     },
// });
export const Reducer = (state = ITEMS, actions) => {
    switch (actions.type) {
        case ADD_ITEM:
            var item = actions.payload;
            item.id = state[state.length - 1]
                ? state[state.length - 1].id + 1
                : 0;
            console.log(item);
            return state.concat(item);
        case DEL_ITEM:
            console.log(state);
            state =
                state === undefined
                    ? undefined
                    : state.filter((i) => i.id !== actions.payload);
            state.sort((a, b) => {
                return a.id < b.id;
            });
            return state;
        default:
            return state;
    }
};
