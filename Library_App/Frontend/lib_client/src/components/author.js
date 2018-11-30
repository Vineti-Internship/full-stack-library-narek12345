import React from 'react';

class Author extends React.Component {
  state = {
    authors: [],
    bookName: '',
    bookPages: '',
    bookGenre: '',
    bookDesc: '',
  }
  delHandler = async (id) =>{
    const headers = new Headers();
    headers.append('Content-Type','application/json');
    const options = {
        method: "DELETE",
        headers,
        body:JSON.stringify({
            id
        })
    };
    const request = new Request(`http://localhost:3000/books/${id}`,options);
    const response = await fetch(request);
    if(response.ok){
        console.log('deleted succesfully');
        this.fetchAuthors()
    }
  }
  
  putHandler = async (bookID,authorID,bookName,bookGenre,bookDesc,bookPages) => {
    const headers = new Headers();
    headers.append('Content-Type','application/json');
    const options = {
        method: "PUT",
        headers,
        body:JSON.stringify({
            name: bookName,
            pages: bookPages,
            genre: bookGenre,
            description: bookDesc,
            author_id: authorID
        })
    };
    const request = new Request(`http://localhost:3000/books/${bookID}`,options);
    const response = await fetch(request);
    if(response.ok){
        console.log('updated succesfully');
        this.fetchAuthors()
    }
  }

  postHandler = async (authorID,bookName,bookGenre,bookDesc,bookPages) => {
    const headers = new Headers();
    headers.append('Content-Type','application/json');
    const options = {
        method: "POST",
        headers,
        body:JSON.stringify({
            name: bookName,
            pages: bookPages,
            genre: bookGenre,
            description: bookDesc,
            author_id: authorID
        })
    };
    const request = new Request('http://localhost:3000/books/',options);
    const response = await fetch(request);
    if(response.ok){
        console.log('posted succesfully');
        this.fetchAuthors()
    }
  }
  async componentDidMount(){
    this.fetchAuthors();
  }

  fetchAuthors = async() => {
    const result = await fetch('http://localhost:3000/authors');
    this.setState({authors: await result.json()})
    console.log(this.state)
  };
  inputHandler = (e,param) =>{
    const newState = {};
    newState[param] = e.target.value;
    this.setState(newState);
    console.log(this.state[param]); 
  }

  render() {
    const {authors} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Authors</h1>
          {
            authors.map((author,index) => (
              <div key={index}>
                <h3>Author: {author.fName} {author.lName}</h3>
                <h3>The books of the author </h3>
                <input type='text' placeholder='book name' onChange={(e)=>{this.inputHandler(e,'bookName')}} ></input>
                <input type='text' placeholder='book genre' onChange={(e)=>{this.inputHandler(e,'bookGenre')}} ></input>
                <input type='text' placeholder='book description' onChange={(e)=>{this.inputHandler(e,'bookDesc')}}></input>
                <input type='text' placeholder='book pages' onChange={(e)=>{this.inputHandler(e,'bookPages')}}></input>
                <button onClick={()=>(this.postHandler(author.id,this.state.bookName,this.state.bookGenre,this.state.bookDesc,this.state.bookPages))}>Add</button>
              {
                author.books.map((book,ind) => (
                  <div key={ind}>
                    book{ind+1}
                    <input type='text' placeholder='book name' onChange={(e)=>{this.inputHandler(e,'bookName')}} ></input>
                    <input type='text' placeholder='book genre' onChange={(e)=>{this.inputHandler(e,'bookGenre')}} ></input>
                    <input type='text' placeholder='book description' onChange={(e)=>{this.inputHandler(e,'bookDesc')}}></input>
                    <input type='text' placeholder='book pages' onChange={(e)=>{this.inputHandler(e,'bookPages')}}></input>
                    <button onClick={()=>(this.putHandler(book.id,author.id,this.state.bookName,this.state.bookGenre,this.state.bookDesc,this.state.bookPages))}>Edit</button>
                    <button onClick={()=>(this.delHandler(book.id))}>Remove</button>
                    <h5>name: {book.name}</h5>
                    <h5>genre: {book.genre}</h5>
                    <h5>description: {book.description}</h5>
                    <h5>pages: {book.pages}</h5>
                    </div>
                ))
              }
              </div>
            ))
          }
        </header>
      </div>
    );
  }
}

export default Author;