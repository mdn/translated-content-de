---
title: Genre-Detailseite
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Die _Detail_-Seite eines Genres muss die Informationen für eine bestimmte Genre-Instanz anzeigen, wobei der automatisch generierte Wert des `_id`-Felds als Kennung verwendet wird. Die ID des erforderlichen Genre-Datensatzes ist am Ende der URL kodiert und wird basierend auf der Routendefinition (**/genre/:id**) automatisch extrahiert. Sie wird dann innerhalb des Controllers über die Anfrageparameter `req.params.id` abgerufen.

Die Seite sollte den Namen des Genres und eine Liste aller Bücher in diesem Genre mit Links zu den jeweiligen Buchdetailseiten anzeigen.

## Controller

Öffnen Sie **/controllers/genreController.js** und fügen Sie das `Book`-Modul am Anfang der Datei hinzu (die Datei sollte bereits das `Genre`-Modul und "express-async-handler" `require()`).

```js
const Book = require("../models/book");
```

Finden Sie die exportierte `genre_detail()`-Controllermethode und ersetzen Sie sie durch den folgenden Code.

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

Wir verwenden zuerst `Genre.findById()`, um die Genre-Informationen für eine bestimmte ID abzurufen, und `Book.find()`, um alle Buchdatensätze abzurufen, die dieselbe zugehörige Genre-ID haben. Da die beiden Anfragen nicht voneinander abhängig sind, verwenden wir `Promise.all()`, um die Datenbankabfragen parallel auszuführen. Diese Vorgehensweise zum parallelen Ausführen von Abfragen wurde bereits auf der [Startseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Home_page#controller) demonstriert.

Wir `await` das zurückgegebene Versprechen, und sobald es abgeschlossen ist, überprüfen wir die Ergebnisse. Wenn das Genre in der Datenbank nicht existiert (z.B. könnte es gelöscht worden sein), dann wird `findById()` erfolgreich mit keinen Ergebnissen zurückkehren. In diesem Fall möchten wir eine "nicht gefunden"-Seite anzeigen, daher erstellen wir ein `Error`-Objekt und übergeben es der `next`-Middleware-Funktion in der Kette.

> [!NOTE]
> Fehler, die an die `next`-Middleware-Funktion übergeben werden, gelangen in unseren Fehlerbehandlungscode (dies wurde eingerichtet, als wir das [App-Skelett generierten](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website#app.js) — für weitere Informationen siehe [Fehlerbehandlung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#handling_errors)).

Wenn das `genre` gefunden wird, rufen wir `render()` auf, um die Ansicht anzuzeigen. Das Ansichts-Template ist **genre_detail** (.pug). Die Werte für den Titel, `genre` und `booksInGenre` werden mit den entsprechenden Schlüsseln (`title`, `genre` und `genre_books`) in das Template übergeben.

## Ansicht

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

Die Ansicht ist sehr ähnlich zu all unseren anderen Templates. Der Hauptunterschied besteht darin, dass wir den übergebenen `title` nicht für die erste Überschrift verwenden (obwohl er im darunterliegenden **layout.pug**-Template verwendet wird, um den Seitentitel festzulegen).

## Wie sieht es aus?

Führen Sie die Anwendung aus und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wählen Sie den Link _Alle Genres_, dann wählen Sie eines der Genres aus (z.B. "Fantasy"). Wenn alles korrekt eingerichtet ist, sollte Ihre Seite ungefähr wie der folgende Screenshot aussehen.

![Genre-Detailseite - Express Local Library-Seite](locallibary_express_genre_detail.png)

> [!NOTE]
> Sie könnten einen Fehler ähnlich dem unten stehenden erhalten, wenn `req.params.id` (oder eine andere ID) nicht in eine [`mongoose.Types.ObjectId()`](https://mongoosejs.com/docs/api/mongoose.html#Mongoose.prototype.Types) umgewandelt werden kann.
>
> ```bash
> Cast to ObjectId failed for value " 59347139895ea23f9430ecbb" at path "_id" for model "Genre"
> ```
>
> Die wahrscheinlichste Ursache ist, dass die in die mongoose-Methoden übergebene ID tatsächlich keine ID ist. [`Mongoose.prototype.isValidObjectId()`](<https://mongoosejs.com/docs/api/mongoose.html#Mongoose.prototype.isValidObjectId()>) kann verwendet werden, um zu überprüfen, ob eine bestimmte ID gültig ist.

## Nächste Schritte

- Kehren Sie zurück zu [Express Tutorial Teil 5: Bibliotheksdaten anzeigen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie mit dem nächsten Unterartikel von Teil 5 fort: [Buchdetailseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_detail_page).
