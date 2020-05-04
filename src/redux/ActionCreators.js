const ADD_ITEM = "ADD_ITEM";
const DEL_ITEM = "DEL_ITEM";

export const addItem = (heading, description) => ({
    type: ADD_ITEM,
    payload: {
        heading: heading,
        description: description,
    },
});
export const delItem = (id) => ({
    type: DEL_ITEM,
    payload: id,
});
