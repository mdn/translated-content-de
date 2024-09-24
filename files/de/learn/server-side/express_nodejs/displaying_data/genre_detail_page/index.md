---
title: Genre-Detailseite
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

Die Genre-_Detailseite_ muss die Informationen für eine bestimmte Genre-Instanz anzeigen, wobei der automatisch generierte `_id`-Feldwert als Bezeichner verwendet wird. Die ID des benötigten Genre-Datensatzes ist am Ende der URL kodiert und wird basierend auf der Routen-Definition (**/genre/:id**) automatisch extrahiert. Sie wird dann im Controller über die Anfrageparameter abgerufen: `req.params.id`.

Die Seite sollte den Namen des Genres und eine Liste aller Bücher in diesem Genre mit Links zu den Detailseiten der einzelnen Bücher anzeigen.

## Controller

Öffnen Sie **/controllers/genreController.js** und importieren Sie das `Book`-Modul am Anfang der Datei (die Datei sollte bereits das `Genre`-Modul und "express-async-handler" importieren).

```js
const Book = require("../models/book");
```

Finden Sie die exportierte `genre_detail()`-Controller-Methode und ersetzen Sie sie durch den folgenden Code.

```js
// Detailseite für ein bestimmtes Genre anzeigen.
exports.genre_detail = asyncHandler(async (req, res, next) => {
  // Details des Genres und aller zugehörigen Bücher abrufen (parallel)
  const [genre, booksInGenre] = await Promise.all([
    Genre.findById(req.params.id).exec(),
    Book.find({ genre: req.params.id }, "title summary").exec(),
  ]);
  if (genre === null) {
    // Keine Ergebnisse.
    const err = new Error("Genre nicht gefunden");
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

Wir verwenden zuerst `Genre.findById()`, um Genre-Informationen für eine bestimmte ID zu erhalten, und `Book.find()`, um alle Buchdatensätze abzurufen, die dieselbe zugehörige Genre-ID haben. Da die beiden Anfragen nicht voneinander abhängig sind, verwenden wir `Promise.all()`, um die Datenbankabfragen parallel auszuführen (dieser Ansatz zur parallelen Ausführung von Abfragen wurde auf der [Startseite](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Home_page#controller) demonstriert).

Wir `await` auf das zurückgegebene Versprechen und überprüfen die Ergebnisse, sobald es erfüllt ist. Existiert das Genre nicht in der Datenbank (d. h., es könnte gelöscht worden sein), gibt `findById()` erfolgreich ohne Ergebnisse zurück. In diesem Fall möchten wir eine "nicht gefunden"-Seite anzeigen, also erstellen wir ein `Error`-Objekt und leiten es an die `next` Middleware-Funktion in der Kette weiter.

> [!NOTE]
> Fehler, die an die `next` Middleware-Funktion übergeben werden, werden an unseren Fehlerbehandlungscode weitergeleitet (dies wurde eingerichtet, als wir das [App-Skelett generierten](/de/docs/Learn/Server-side/Express_Nodejs/skeleton_website#app.js) - für weitere Informationen siehe [Fehlerbehandlung](/de/docs/Learn/Server-side/Express_Nodejs/Introduction#handling_errors)).

Wenn das `genre` gefunden wird, rufen wir `render()` auf, um die Ansicht anzuzeigen. Die Vorlagendatei ist **genre_detail** (.pug). Die Werte für den Titel, `genre` und `booksInGenre` werden unter Verwendung der entsprechenden Schlüssel (`title`, `genre` und `genre_books`) in die Vorlage übergeben.

## Ansicht

Erstellen Sie **/views/genre_detail.pug** und füllen Sie sie mit dem folgenden Text:

```pug
extends layout

block content

  h1 Genre: #{genre.name}

  div(style='margin-left:20px;margin-top:20px')

    h2(style='font-size: 1.5rem;') Bücher
    if genre_books.length
      dl
        each book in genre_books
          dt
            a(href=book.url) #{book.title}
          dd #{book.summary}
    else
      p Dieses Genre hat keine Bücher.
```

Die Ansicht ist sehr ähnlich zu all unseren anderen Vorlagendateien. Der Hauptunterschied besteht darin, dass wir den übergebenen `title` nicht für die erste Überschrift verwenden (obwohl er in der zugrunde liegenden **layout.pug**-Vorlage verwendet wird, um den Seitentitel festzulegen).

## Wie sieht es aus?

Führen Sie die Anwendung aus und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wählen Sie den Link _Alle Genres_ und dann eines der Genres (z. B. "Fantasy"). Wenn alles korrekt eingerichtet ist, sollte Ihre Seite in etwa wie auf dem folgenden Screenshot aussehen.

![Genre-Detailseite - Express Local Library Seite](locallibary_express_genre_detail.png)

> [!NOTE]
> Sie könnten einen Fehler ähnlich dem unten stehenden erhalten, wenn `req.params.id` (oder eine andere ID) nicht in ein [`mongoose.Types.ObjectId()`](https://mongoosejs.com/docs/api/mongoose.html#Mongoose.prototype.Types) umgewandelt werden kann.
>
> ```bash
> Cast to ObjectId failed for value " 59347139895ea23f9430ecbb" at path "_id" for model "Genre"
> ```
>
> Der wahrscheinlichste Grund ist, dass die ID, die in die Mongoose-Methoden übergeben wird, tatsächlich keine ID ist. [`Mongoose.prototype.isValidObjectId()`](<https://mongoosejs.com/docs/api/mongoose.html#Mongoose.prototype.isValidObjectId()>) kann verwendet werden, um zu überprüfen, ob eine bestimmte ID gültig ist.

## Nächste Schritte

- Kehren Sie zurück zu [Express Tutorial Teil 5: Bibliotheksdaten anzeigen](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie mit dem nächsten Unterartikel von Teil 5 fort: [Buch-Detailseite](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Book_detail_page).
