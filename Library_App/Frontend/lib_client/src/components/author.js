import React from 'react';

class Author extends React.Component {
  state = {
    authors: []
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
    const status = await response.status;
    if(status === 204){
        console.log('deleted succesfully');
        this.componentDidMount()
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
    const status = await response.status;
    if(status === 201){
        console.log('posted succesfully');
        this.componentDidMount()
    }
  }
  async componentDidMount(){
    const result = await fetch('http://localhost:3000/authors');
    this.setState({authors: await result.json()})
    console.log(this.state)
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
                <input type='text' placeholder='book name' ref="name"></input>
                <input type='text' placeholder='book genre'></input>
                <input type='text' placeholder='book description'></input>
                <input type='text' placeholder='book pages'></input>
                <button onClick={()=>(this.postHandler(author.id,"posted book","posted genre","posted desc",88))}>Add</button>
              {
                author.books.map((book,ind) => (
                  <div key={ind}>
                    book{ind+1}
                    <button>Edit</button>
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