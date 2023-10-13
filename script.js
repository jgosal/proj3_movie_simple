let allMovies = [];


//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie);
    document.write("A new movie is added");
    document.write("<br>");
}

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
    document.write("Printing all movies....");
    for (let i = 0; i < allMovies.length; i++) {
        document.write(allMovies[i].title + ", rating of " + allMovies[i].rating + ", havewatched: " + allMovies[i].haveWatched);
        document.write("<br>");
    }
    document.write("You have " + allMovies.length + " movies in total");
    document.write("<br>");
}


//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
    document.write("printing movie that has a rating higher than " + rating);
    document.write("<br>");
    let count = 0;
    for (let i = 0; i < allMovies.length; i++) {
        if (allMovies[i].rating > rating) {
            document.write(allMovies[i].title + " has a rating of " + allMovies[i].rating);
            document.write("<br>");
            count++;
        }
    }
    document.write("In total, there are " + count + " matches");
    document.write("<br>");
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    document.write("changing the status of the movie...");
    document.write("<br>");
    for (let i = 0; i < allMovies.length; i++) {
        if (allMovies[i].title == title) {
            if (allMovies[i].haveWatched == true) {
                allMovies[i].haveWatched = false;
            } else {
                allMovies[i].haveWatched = true;
            }
        }
    }
}

function make_every_document_write_on_a_different_line(code) {
  /*Makes every document.write() on a different line.

  Args:
    code: A string containing the JavaScript code.

  Returns:
    A string containing the modified JavaScript code.
  */

  new_code = ""
  for (line in code.splitlines()) {
    if (line.startswith("document.write")) {
      new_code += line + "\n";
    } else {
      new_code += line;
    }
  }
  return new_code;
}

////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace console.log with display on web page*/
document.write("---------------- <br>");
document.write("running program...... <br>");
document.write("---------------- <br>");
printMovies();


let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
document.write("---------------- <br>");
addMovie(movie1);
document.write("---------------- <br>");



changeWatched("Spiderman");
/*replace console.log with display on web page*/
document.write("---------------- <br>");

printMovies();

/*replace console.log with display on web page*/
document.write("---------------- <br>");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
document.write("---------------- <br>");

printMovies();
/*replace console.log with display on web page*/
document.write("---------------- <br>");

highRatings(3.5);