---
title: Genre-Detailseite
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

Die Genre-_Detailseite_ muss die Informationen für eine bestimmte Genre-Instanz anzeigen, wobei ihr automatisch generiertes `_id`-Feld als Bezeichner verwendet wird. Die ID des benötigten Genre-Datensatzes ist am Ende der URL codiert und wird basierend auf der Routen-Definition (**/genre/:id**) automatisch extrahiert. Sie wird dann innerhalb des Controllers über die Anforderungsparameter aufgerufen: `req.params.id`.

Die Seite sollte den Genrenamen und eine Liste aller Bücher des Genres mit Links zu den Detailseiten der einzelnen Bücher anzeigen.

## Controller

Öffnen Sie **/controllers/genreController.js** und binden Sie das `Book`-Modul am Anfang der Datei ein (die Datei sollte bereits das `Genre`-Modul und "express-async-handler" einbinden).

```js
const Book = require("../models/book");
```

Finden Sie die exportierte `genre_detail()`-Controller-Methode und ersetzen Sie sie durch den folgenden Code.

```js
// Display detail page for a specific Genre.
exports.genre_detail = asyncHandler(async (req, res, next) => {
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
    genre: genre,
    genre_books: booksInGenre,
  });
});
```

Wir verwenden zuerst `Genre.findById()`, um Genre-Informationen für eine bestimmte ID zu erhalten, und `Book.find()`, um alle Buchdatensätze zu erhalten, die diese zugehörige Genre-ID haben. Da die beiden Anfragen nicht voneinander abhängig sind, verwenden wir `Promise.all()`, um die Datenbankabfragen parallel auszuführen (dieser Ansatz für parallele Abfragen wurde bereits auf der [Startseite](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Home_page#controller) demonstriert).

Wir `await` auf das zurückgegebene Versprechen, und sobald es abgeschlossen ist, überprüfen wir die Ergebnisse. Wenn das Genre nicht in der Datenbank existiert (d. h. es möglicherweise gelöscht wurde), dann wird `findById()` erfolgreich ohne Ergebnisse zurückkehren. In diesem Fall möchten wir eine "Nicht gefunden"-Seite anzeigen, so dass wir ein `Error`-Objekt erstellen und es an die nächste Middleware-Funktion in der Kette übergeben.

> [!NOTE]
> Fehler, die an die nächste Middleware-Funktion übergeben werden, werden an unseren Fehlerbehandlungscode weitergeleitet (dies wurde eingerichtet, als wir das [App-Grundgerüst erstellt haben](/de/docs/Learn/Server-side/Express_Nodejs/skeleton_website#app.js) - weitere Informationen finden Sie unter [Fehlerbehandlung](/de/docs/Learn/Server-side/Express_Nodejs/Introduction#handling_errors)).

Wenn das `genre` gefunden wird, rufen wir `render()` auf, um die Ansicht anzuzeigen. Die Ansichts-Vorlage ist **genre_detail** (.pug). Die Werte für den Titel, `genre` und `booksInGenre` werden unter Verwendung der entsprechenden Schlüssel (`title`, `genre` und `genre_books`) in die Vorlage übergeben.

## View

Erstellen Sie **/views/genre_detail.pug** und füllen Sie sie mit dem untenstehenden Text:

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

Die Ansicht ähnelt sehr unseren anderen Vorlagen. Der Hauptunterschied besteht darin, dass wir den übergebenen `title` nicht für die erste Überschrift verwenden (er wird jedoch in der zugrunde liegenden **layout.pug**-Vorlage verwendet, um den Seitentitel festzulegen).

## Wie sieht es aus?

Führen Sie die Anwendung aus und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wählen Sie den Link _Alle Genres_ und dann eines der Genres (z.B. "Fantasy"). Wenn alles korrekt eingerichtet ist, sollte Ihre Seite in etwa so aussehen wie der folgende Screenshot.

![Genre-Detailseite - Express Local Library Site](locallibary_express_genre_detail.png)

> [!NOTE]
> Sie könnten eine Fehlermeldung ähnlich der untenstehenden erhalten, wenn `req.params.id` (oder eine andere ID) nicht in eine [`mongoose.Types.ObjectId()`](https://mongoosejs.com/docs/api/mongoose.html#Mongoose.prototype.Types) umgewandelt werden kann.
>
> ```bash
> Cast to ObjectId failed for value " 59347139895ea23f9430ecbb" at path "_id" for model "Genre"
> ```
>
> Die wahrscheinlichste Ursache ist, dass die ID, die an die Mongoose-Methoden übergeben wird, tatsächlich keine ID ist. [`Mongoose.prototype.isValidObjectId()`](<https://mongoosejs.com/docs/api/mongoose.html#Mongoose.prototype.isValidObjectId()>) kann verwendet werden, um zu überprüfen, ob eine bestimmte ID gültig ist.

## Nächste Schritte

- Kehren Sie zurück zum [Express Tutorial Teil 5: Bibliotheksdaten anzeigen](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie mit dem nächsten Unterartikel von Teil 5 fort: [Buch-Detailseite](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Book_detail_page).
