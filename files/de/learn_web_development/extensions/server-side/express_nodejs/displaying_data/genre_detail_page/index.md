---
title: Genre-Detailseite
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Die Genre-_Detailseite_ muss die Informationen für eine bestimmte Genre-Instanz anzeigen und verwendet dabei ihr automatisch generiertes `_id`-Feld als Bezeichner.
Die ID des benötigten Genre-Datensatzes ist am Ende der URL kodiert und wird basierend auf der Routen-Definition automatisch extrahiert (**/genre/:id**).
Sie wird dann im Controller über die Anfrageparameter: `req.params.id` abgerufen.

Die Seite sollte den Genre-Namen und eine Liste aller Bücher im Genre mit Links zu den Detailseiten der einzelnen Bücher anzeigen.

## Controller

Öffnen Sie **/controllers/genreController.js** und importieren Sie das `Book`-Modul am Anfang der Datei (die Datei sollte bereits das `Genre`-Modul und "express-async-handler" `require()`).

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

Wir verwenden zunächst `Genre.findById()`, um Genre-Informationen für eine bestimmte ID zu erhalten, und `Book.find()`, um alle Buchdatensätze zu bekommen, die diese zugehörige Genre-ID haben.
Da die beiden Anfragen nicht voneinander abhängig sind, verwenden wir `Promise.all()`, um die Datenbankabfragen parallel auszuführen (dieser Ansatz zum parallelen Ausführen von Abfragen wurde auf der [Startseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Home_page#controller) demonstriert).

Wir `await` auf das zurückgegebene Promise, und sobald es abgeschlossen ist, überprüfen wir die Ergebnisse.
Wenn das Genre nicht in der Datenbank existiert (d.h. es könnte gelöscht worden sein), dann wird `findById()` erfolgreich ohne Ergebnisse zurückkehren.
In diesem Fall möchten wir eine "nicht gefunden"-Seite anzeigen, also erstellen wir ein `Error`-Objekt und übergeben es der `next` Middleware-Funktion in der Kette.

> [!NOTE]
> Fehler, die an die `next` Middleware-Funktion übergeben werden, propagieren sich zu unserem Fehlerbehandlungscode (dies wurde eingerichtet, als wir das [App-Grundgerüst erzeugt haben](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website#app.js) - für weitere Informationen siehe [Fehlerbehandlung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#handling_errors)).

Wenn das `genre` gefunden wird, dann rufen wir `render()` auf, um die Ansicht anzuzeigen.
Die Ansichtsvorlage ist **genre_detail** (.pug).
Die Werte für den Titel, `genre` und `booksInGenre` werden mit den entsprechenden Schlüsseln (`title`, `genre` und `genre_books`) an die Vorlage übergeben.

## Ansicht

Erstellen Sie **/views/genre_detail.pug** und füllen Sie es mit dem untenstehenden Text:

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

Die Ansicht ist sehr ähnlich zu all unseren anderen Vorlagen. Der Hauptunterschied besteht darin, dass wir den übergebenen `title`-Wert nicht für die erste Überschrift verwenden (er wird jedoch in der zugrunde liegenden **layout.pug**-Vorlage verwendet, um den Seitentitel festzulegen).

## Wie sieht es aus?

Führen Sie die Anwendung aus und öffnen Sie Ihren Browser auf `http://localhost:3000/`. Wählen Sie den Link _Alle Genres_, und wählen Sie dann eines der Genres aus (z.B. "Fantasy"). Wenn alles richtig eingerichtet ist, sollte Ihre Seite etwa wie der folgende Screenshot aussehen.

![Genre-Detailseite - Express Local Library Seite](locallibary_express_genre_detail.png)

> [!NOTE]
> Sie könnten einen Fehler ähnlich dem folgenden erhalten, wenn `req.params.id` (oder eine andere ID) nicht in ein [`mongoose.Types.ObjectId()`](https://mongoosejs.com/docs/api/mongoose.html#Mongoose.prototype.Types) umgewandelt werden kann.
>
> ```bash
> Cast to ObjectId failed for value " 59347139895ea23f9430ecbb" at path "_id" for model "Genre"
> ```
>
> Die wahrscheinlichste Ursache ist, dass die an die Mongoose-Methoden übergebene ID tatsächlich keine ID ist.
> [`Mongoose.prototype.isValidObjectId()`](<https://mongoosejs.com/docs/api/mongoose.html#Mongoose.prototype.isValidObjectId()>) kann verwendet werden, um zu überprüfen, ob eine bestimmte ID gültig ist.

## Nächste Schritte

- Kehren Sie zurück zu [Express Tutorial Teil 5: Anzeigende Bibliotheksdaten](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie mit dem nächsten Unterartikel von Teil 5 fort: [Buch-Detailseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_detail_page).
