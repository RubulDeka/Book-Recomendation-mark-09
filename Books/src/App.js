import { useState } from "react";
import "./App.js";

function App() {
  var books = [
    {
      id: 1,
      title: "Eloquent JavaScript",
      rating: "4 / 5",
      category: "javascript",
    },

    {
      id: 2,
      title: "JavaScript: The Definitive Guide",
      rating: "4.5 / 5",
      category: "javascript",
    },

    {
      id: 3,
      title: "You Don't Know JS",
      rating: "3.5 / 5",
      category: "javascript",
    },

    {
      id: 4,
      title: "Shiva Trilogy",
      rating: "5/5",
      category: "fiction",
    },

    {
      id: 5,
      title: "The Hunger Games",
      rating: "5/5",
      category: "fiction",
    },

    {
      id: 6,
      title: "Harry Potter and the Sorcerer's Stone",
      rating: "4.5/5",
      category: "fiction",
    },

    {
      id: 7,
      title: "Never Split the Difference",
      rating: "3.5/5",
      category: "business",
    },

    {
      id: 8,
      title: "Loonshots",
      rating: "5/5",
      category: "business",
    },

    {
      id: 9,
      title: "The Lean Startup",
      rating: "4/5",
      category: "business",
    },
  ];

  const [bookList, setBookList] = useState(books);

  const categories = [
    "all",
    ...new Set(
      books.map((book) => {
        return book.category;
      })
    ),
  ];

  const handleClick = (category) => {
    if (category === "all") {
      return setBookList(books);
    }
    const result = books.filter((book) => {
      return book.category === category;
    });
    setBookList(result);
  };

  return (
    <div className="App">
      <h1>
        <span>📚</span> goodBooks
      </h1>
      <p>Checkout my favorite books. Select a genre to get started</p>

      {categories.map((category) => {
        return (
          <button
            key={category}
            className="btn"
            onClick={() => {
              handleClick(category);
            }}
          >
            {category}
          </button>
        );
      })}
      <hr />

      {bookList.map((book, index) => {
        return (
          <div className="container" key={index}>
            <p>{book.title}</p>
            <small>{book.rating}</small>
          </div>
        );
      })}
    </div>
  );
}

export default App;
