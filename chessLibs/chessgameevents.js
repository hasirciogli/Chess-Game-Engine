
var events = {"draw" : []};

export const registerEvent = ( eventName, params, fFunc ) =>{
    events[eventName].push({id: 0, fn: fFunc, params: params});
    return 0;
}


export const runEvents = (  ) =>{
    events["draw"].forEach(element => {
        element.fn(element.params);
    });
}

export const runEvent = ( event ) =>{
    events[event].forEach(element => {
        element.fn(element.params);
    });
}