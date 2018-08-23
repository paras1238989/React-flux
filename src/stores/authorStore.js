//How can we have multiple stores?
import {EventEmitter} from 'events'
import Dispatcher from '../dispatcher/appDispatcher'
//class to handle our stores. Store is just a container to hold the states. 
class authorStore extends EventEmitter{
    constructor(){
        super();
        //These are the default values of the store. HARD CODED. This will be available to all the views.
        this.authors=[
            {authorName:'Author1'},
            {authorName:'Author2'},
            {authorName:'Author3'},
        ]
    }
    //This method when invoked will push the new author in authorStore.authors array.
    //Once added it will raise a flag in the application saying CHANGE
    //This CHANGE is picked up by AuthorPage componentWillMount()
    createAuthor(authorName1){
        this.authors.push({authorName:authorName1})
        this.emit('change')
    }
    //getAllAuthors() is like a getter from JAVA pojo class.
    //This is invoked by the AuthorPage for fetching all the authors present in authorStore.authors array
    getAllAuthors(){
        console.log(this.authors)
        return this.authors;

    }
    //authorStore.handleActions() object is first registered with the Dispatcher
    //and bound to the already present object authorstore
    //handleAcions() will switch between all the possible operations create/update/delete etc 
    //and invoke the action type mentioned in JSON sent from the authorActions.js
    
    handleActions(action){
        switch(action.type){
            case 'CREATE_AUTHOR':{
                this.createAuthor(action.authorName)
                break;
            }
        }
    }
}
//A new instance of authorStore() is create if not present and assigned to a constant.
//appDispatcher object is referenced for binding the authorstore.handleActions() 
const authorstore=new authorStore();
Dispatcher.register(authorstore.handleActions.bind(authorstore));
export default authorstore;