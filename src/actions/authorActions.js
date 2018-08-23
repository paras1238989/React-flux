import Dispatcher from '../dispatcher/appDispatcher'

//Reference the solo Dispatcher we have made to which the particular JSON object
// [{type,authorName}] will be sent.
//dispatch() lets us push the JSON object to the Dispatcher
//[type,name] ===> type stands for the kind of operation you want the store to perform.
export function createAuthor(authorName){
    Dispatcher.dispatch({
        type:"CREATE_AUTHOR",
        authorName
    })
}

//NEXT STEP -> Dispatcher in flux