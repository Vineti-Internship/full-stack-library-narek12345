import React from 'react';

class Author extends React.Component {
  state = {
    authors: []
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
            authors.map(author => (
              <div>
                <h3>Author: {author.fName} {author.lName}</h3>
                <h3>The books of the author </h3>
              {
                author.books.map((book,index) => (
                  <div>
                    book{index+1}
                    <h5>name: {book.name}</h5>
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