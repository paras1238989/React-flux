import React from 'react'
import authorStore from './stores/authorStore';
import {createAuthor as CreateAuthorAction} from './actions/authorActions';

class AuthorPage extends React.Component{
    //Fetch all the authors from Store in the state. This will execute once on startup
    constructor(){
        super();
        this.state={
            authors:authorStore.getAllAuthors()
        }
        //bind getAuthor to the current instance of the AuthorPage class. Wihout this getAuthor() what is this.setState()
        this.getAuthor=this.getAuthor.bind(this)
    }
    //This method is bound to the button. When button clicked this method is invoked where it fetches the 
    //value from the text field using refs and passes it to CreateAuthor of Acion
    createAuthor(){
        CreateAuthorAction(this.refs.aname.value)
    }
    //getAuthor is invoked before everytime the component is about to be re mounted. 
    // Logic is to fetch the updated the list of authors from the store
    getAuthor(){
        this.setState({
            authors:authorStore.getAllAuthors()
        })
    }
    //Calling getAuthor before the component is about to be mounted whenever there is a 
    //CHANGE from authorStore
    componentWillMount(){
        authorStore.on('change',this.getAuthor)
    }
    render(){
        //VIEW section
        //To print the authors in a <li> fetching all the latest authors from AuthorPage components' state
        const authors=this.state.authors;
        var li=authors.map(
            (a)=><li>{a.authorName}</li>
        )
        return(
            <div>
                {/*VIEW SECTION*/}
                <label>Enter the Author</label>
                <input type="text" ref="aname"/>
                {/*BIND the button to the createAuthor() so that when it is clicked the method is invoked
                    and is aware which component has invoked it.
                */}
                <button onClick={this.createAuthor.bind(this)}>Create Author</button>
                <h3>Authors Names:</h3>
                <ul>
                    {
                        li
                    }
                </ul>
            </div>
        )
    }
}
//NEXT STEP -> TO ACTIONS IN FLUX
export default AuthorPage;