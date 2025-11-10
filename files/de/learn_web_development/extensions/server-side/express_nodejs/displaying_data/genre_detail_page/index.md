---
title: Genre-Detailseite
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page
l10n:
  sourceCommit: 8443cb34d9944d8eb8e2c5add598bec26ed6d21f
---

Die Genre-_Detail_-Seite muss die Informationen für eine bestimmte Genre-Instanz anzeigen, wobei das automatisch generierte `_id`-Feld als Kennzeichen verwendet wird. Die ID des benötigten Genre-Datensatzes wird am Ende der URL kodiert und basierend auf der Routen-Definition (**/genre/:id**) automatisch extrahiert. Sie wird dann im Controller über die Anfrageparameter `req.params.id` aufgerufen.

Die Seite sollte den Namen des Genres und eine Liste aller Bücher des Genres mit Links zu den Detailseiten jedes Buches anzeigen.

## Controller

Öffnen Sie **/controllers/genreController.js** und fügen Sie am Anfang der Datei das `Book`-Modul hinzu (die Datei sollte bereits das `Genre`-Modul `require()`).

```js
const Book = require("../models/book");
```

Finden Sie die exportierte `genre_detail()`-Controller-Methode und ersetzen Sie sie durch den folgenden Code.

```js
// Display detail page for a specific Genre.
exports.genre_detail = async (req, res, next) => {
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

Wir verwenden zuerst `Genre.findById()`, um die Genre-Informationen für eine bestimmte ID zu erhalten, und `Book.find()`, um alle Buchdatensätze zu erhalten, die dieselbe Genre-ID zugeordnet haben. Da die beiden Anfragen nicht voneinander abhängig sind, verwenden wir `Promise.all()`, um die Datenbankabfragen parallel auszuführen (dieser Ansatz zur parallelen Ausführung von Abfragen wurde auf der [Startseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Home_page#controller) demonstriert).

Wir `await` das zurückgegebene Promise, und sobald es sich erledigt hat, überprüfen wir die Ergebnisse. Wenn das Genre in der Datenbank nicht existiert (d.h. es könnte gelöscht worden sein), gibt `findById()` erfolgreich ohne Ergebnisse zurück. In diesem Fall möchten wir eine "nicht gefunden" Seite anzeigen, daher erstellen wir ein `Error`-Objekt und übergeben es der `next`-Middleware-Funktion in der Kette.

> [!NOTE]
> Fehler, die an die `next`-Middleware-Funktion übergeben werden, propagieren sich in unseren Fehlerbehandlungscode (dies wurde eingerichtet, als wir das [App-Skelett generierten](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website#app.js). Für mehr Informationen siehe [Fehlerbehandlung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#handling_errors) und [Fehler- und Ausnahmenbehandlung in den Routenfunktionen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes#handling_errors_and_exceptions_in_the_route_functions)).

Wenn das `genre` gefunden wird, rufen wir `render()` auf, um die Ansicht darzustellen. Das View-Template ist **genre_detail** (.pug). Die Werte für den Titel, `genre` und `booksInGenre` werden mit den entsprechenden Schlüsseln (`title`, `genre` und `genre_books`) in das Template übergeben.

## Ansicht

Erstellen Sie **/views/genre_detail.pug** und füllen Sie es mit dem unten stehenden Text:

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

Die Ansicht ist sehr ähnlich zu all unseren anderen Templates. Der Hauptunterschied besteht darin, dass wir `title`, das für die erste Überschrift übergeben wird, nicht verwenden (obwohl es im zugrundeliegenden **layout.pug**-Template verwendet wird, um den Seitentitel festzulegen).

## Wie sieht es aus?

Führen Sie die Anwendung aus und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wählen Sie den Link _Alle Genres_, dann wählen Sie eines der Genres aus (z. B. "Fantasy"). Wenn alles korrekt eingerichtet ist, sollte Ihre Seite ungefähr wie der folgende Screenshot aussehen.

![Genre Detail Seite - Express Local Library Seite](locallibary_express_genre_detail.png)

> [!NOTE]
> Sie könnten einen Fehler ähnlich dem unten stehenden bekommen, wenn `req.params.id` (oder eine andere ID) nicht in ein [`mongoose.Types.ObjectId()`](https://mongoosejs.com/docs/api/mongoose.html#Mongoose.prototype.Types) umgewandelt werden kann.
>
> ```bash
> Cast to ObjectId failed for value " 59347139895ea23f9430ecbb" at path "_id" for model "Genre"
> ```
>
> Die wahrscheinlichste Ursache ist, dass die in die Mongoose-Methoden übergebene ID tatsächlich keine ID ist. [`Mongoose.prototype.isValidObjectId()`](<https://mongoosejs.com/docs/api/mongoose.html#Mongoose.prototype.isValidObjectId()>) kann verwendet werden, um zu überprüfen, ob eine bestimmte ID gültig ist.

## Nächste Schritte

- Kehren Sie zurück zu [Express Tutorial Teil 5: Anzeige von Bibliotheksdaten](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie fort zum nächsten Unterartikel von Teil 5: [Buch-Detailseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_detail_page).
