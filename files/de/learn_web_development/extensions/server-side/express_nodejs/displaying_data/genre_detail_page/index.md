---
title: Detailseite eines Genres
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page
l10n:
  sourceCommit: d775e1249487f1a7ab9a8a031c70ca71bc892d63
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Author_list_page", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_detail_page", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data")}}

Die _Detailseite_ eines Genres soll die Informationen zu einem bestimmten Genre anzeigen. Als Kennung dient der Wert seines automatisch generierten Feldes `_id`.
Die ID des gewünschten Genre-Datensatzes steht am Ende der URL und wird anhand der Routendefinition (**/genre/:id**) automatisch extrahiert.
Im Controller ist sie über die Request-Parameter zugänglich: `req.params.id`.

Die Seite soll den Namen des Genres und eine Liste aller Bücher dieses Genres anzeigen, jeweils mit einem Link zur Detailseite des Buches.

## Controller

Öffnen Sie **controllers/genreController.js** und importieren Sie das Modul `Book` am Anfang der Datei (das Modul `Genre` sollte bereits importiert sein).

```js
import Book from "../models/book.js";
```

Suchen Sie die exportierte Controller-Methode `genreDetail()` und ersetzen Sie sie durch den folgenden Code.

```js
// Display detail page for a specific Genre.
export const genreDetail = async (req, res, next) => {
  // Get details of genre and all associated books (in parallel)
  const [genre, booksInGenre] = await Promise.all([
    Genre.findById(req.params.id).exec(),
    Book.find({ genre: req.params.id }, "title summary").exec(),
  ]);
  if (genre === null) {
    // No results.
    const err = new Error("Genre not found");
    err.status = 404;
    return next(err);
  }

  res.render("genre_detail", {
    title: "Genre Detail",
    genre,
    genre_books: booksInGenre,
  });
};
```

Zunächst verwenden wir `Genre.findById()`, um die Genre-Informationen für eine bestimmte ID abzurufen, und `Book.find()`, um alle Buch-Datensätze mit derselben zugehörigen Genre-ID abzurufen.
Da die beiden Abfragen nicht voneinander abhängen, verwenden wir `Promise.all()`, um sie parallel auszuführen (dieselbe Vorgehensweise wurde bereits auf der [Startseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Home_page#controller) gezeigt).

Wir warten mit `await` auf die zurückgegebene Promise und prüfen die Ergebnisse, sobald sie erfüllt oder abgelehnt wurde.
Wenn das Genre nicht in der Datenbank vorhanden ist (etwa weil es gelöscht wurde), liefert `findById()` erfolgreich ein leeres Ergebnis zurück.
In diesem Fall möchten wir eine „Nicht gefunden“-Seite anzeigen. Dazu erstellen wir ein `Error`-Objekt und übergeben es an die nächste Middleware-Funktion `next` in der Kette.

> [!NOTE]
> Fehler, die an die Middleware-Funktion `next` übergeben werden, gelangen zu unserem Code für die Fehlerbehandlung (dieser wurde beim [Erstellen des Grundgerüsts der Anwendung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website#app.js) eingerichtet). Weitere Informationen finden Sie unter [Fehler behandeln](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#handling_errors) und [Fehler und Ausnahmen in den Routenfunktionen behandeln](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes#handling_errors_and_exceptions_in_the_route_functions).

Wenn das `genre` gefunden wurde, rufen wir `render()` auf, um die Ansicht anzuzeigen.
Die Ansichtsvorlage heißt **genre_detail** (.pug).
Die Werte für den Titel, `genre` und `booksInGenre` werden über die entsprechenden Schlüssel (`title`, `genre` und `genre_books`) an die Vorlage übergeben.

## Ansicht

Erstellen Sie **views/genre_detail.pug** und füllen Sie die Datei mit folgendem Inhalt:

```pug
extends layout

block content

  h1 Genre: #{genre.name}

  div(style='margin-left:20px;margin-top:20px')

    h2(style='font-size: 1.5rem;') Books
    if genre_books.length
      dl
        each book in genre_books
          dt
            a(href=book.url) #{book.title}
          dd #{book.summary}
    else
      p This genre has no books.
```

Die Ansicht ähnelt unseren anderen Vorlagen sehr. Der wichtigste Unterschied besteht darin, dass wir den übergebenen `title` nicht für die erste Überschrift verwenden (er wird jedoch in der zugrunde liegenden Vorlage **layout.pug** verwendet, um den Seitentitel festzulegen).

## Wie sieht das Ergebnis aus?

Starten Sie die Anwendung und öffnen Sie `http://localhost:3000/` in Ihrem Browser. Wählen Sie den Link _All genres_ und anschließend eines der Genres aus (z. B. „Fantasy“). Wenn alles richtig eingerichtet ist, sollte Ihre Seite etwa wie im folgenden Screenshot aussehen.

![Genre-Detailseite der Express-Local-Library-Website](locallibary_express_genre_detail.png)

> [!NOTE]
> Möglicherweise erhalten Sie einen Fehler wie den folgenden, wenn `req.params.id` (oder eine andere ID) nicht in eine [`mongoose.Types.ObjectId()`](https://mongoosejs.com/docs/api/mongoose.html#Mongoose.prototype.Types) umgewandelt werden kann.
>
> ```bash
> Cast to ObjectId failed for value " 59347139895ea23f9430ecbb" at path "_id" for model "Genre"
> ```
>
> Die wahrscheinlichste Ursache ist, dass der an die Mongoose-Methoden übergebene Wert keine gültige ID ist.
> Mit [`Mongoose.prototype.isValidObjectId()`](<https://mongoosejs.com/docs/api/mongoose.html#Mongoose.prototype.isValidObjectId()>) können Sie prüfen, ob eine bestimmte ID gültig ist.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Author_list_page", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_detail_page", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data")}}
