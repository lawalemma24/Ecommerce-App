export const addItem = (food) => {
    return {
        type : "ADDITEM",
        payload : food
    }
}

export const delItem = (food) => {
    return {
        type : "DELITEM",
        payload : food
    }
}