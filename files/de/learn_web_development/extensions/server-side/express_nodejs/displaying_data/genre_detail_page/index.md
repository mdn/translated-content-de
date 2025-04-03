---
title: Genre-Detailseite
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

Die Genre-_Detail_-Seite muss die Informationen für eine bestimmte Genre-Instanz anzeigen, wobei das automatisch generierte `_id`-Feld als Identifikator verwendet wird. Die ID des benötigten Genre-Datensatzes wird am Ende der URL kodiert und basierend auf der Routendefinition (**/genre/:id**) automatisch extrahiert. Sie wird dann im Controller über die Anfrage-Parameter `req.params.id` abgerufen.

Die Seite sollte den Namen des Genres und eine Liste aller Bücher in diesem Genre anzeigen, mit Links zu den Detailseiten der jeweiligen Bücher.

## Controller

Öffnen Sie **/controllers/genreController.js** und benötigen Sie das Modul `Book` am Anfang der Datei (die Datei sollte bereits das `Genre`-Modul und "express-async-handler" `require()`).

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

Wir verwenden zuerst `Genre.findById()`, um Genre-Informationen für eine bestimmte ID zu erhalten, und `Book.find()`, um alle Bücher-Datensätze zu erhalten, die dieselbe zugeordnete Genre-ID haben. Da die beiden Abfragen nicht voneinander abhängen, verwenden wir `Promise.all()`, um die Datenbankabfragen parallel auszuführen (dieser Ansatz zum parallelen Ausführen von Abfragen wurde auf der [Startseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Home_page#controller) demonstriert).

Wir `await` auf das zurückgegebene Versprechen, und sobald es abgeschlossen ist, überprüfen wir die Ergebnisse. Wenn das Genre nicht in der Datenbank existiert (d.h. es wurde möglicherweise gelöscht), wird `findById()` erfolgreich ohne Ergebnisse zurückkehren. In diesem Fall möchten wir eine "nicht gefunden"-Seite anzeigen, daher erstellen wir ein `Error`-Objekt und übergeben es an die `next`-Middleware-Funktion in der Kette.

> [!NOTE]
> Fehler, die an die `next`-Middleware-Funktion übergeben werden, werden an unseren Fehlerbehandlungscode weitergeleitet (dies wurde eingerichtet, als wir das [App-Skelett generiert](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website#app.js) haben - für weitere Informationen siehe [Fehlerbehandlung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#handling_errors)).

Wenn das `genre` gefunden wird, rufen wir `render()` auf, um die Ansicht anzuzeigen. Die Vorlagendatei ist **genre_detail** (.pug). Die Werte für den Titel, `genre` und `booksInGenre` werden unter Verwendung der entsprechenden Schlüssel (`title`, `genre` und `genre_books`) in die Vorlage übergeben.

## Ansicht

Erstellen Sie **/views/genre_detail.pug** und füllen Sie es mit dem folgenden Text:

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

Die Ansicht ist sehr ähnlich zu all unseren anderen Vorlagen. Der Hauptunterschied ist, dass wir den übergebenen `title` nicht für die erste Überschrift verwenden (er wird jedoch in der zugrunde liegenden **layout.pug**-Vorlage verwendet, um den Seitentitel festzulegen).

## Wie sieht es aus?

Führen Sie die Anwendung aus und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wählen Sie den Link _Alle Genres_, dann eines der Genres (z.B. "Fantasy"). Wenn alles korrekt eingerichtet ist, sollte Ihre Seite in etwa wie der folgende Screenshot aussehen.

![Genre-Detailseite - Express Local Library Site](locallibary_express_genre_detail.png)

> [!NOTE]
> Möglicherweise erhalten Sie einen ähnlichen Fehler wie unten, wenn `req.params.id` (oder eine andere ID) nicht in einen [`mongoose.Types.ObjectId()`](https://mongoosejs.com/docs/api/mongoose.html#Mongoose.prototype.Types) umgewandelt werden kann.
>
> ```bash
> Cast to ObjectId failed for value " 59347139895ea23f9430ecbb" at path "_id" for model "Genre"
> ```
>
> Die wahrscheinlichste Ursache ist, dass die in die Mongoose-Methoden eingegebene ID tatsächlich keine ID ist. [`Mongoose.prototype.isValidObjectId()`](<https://mongoosejs.com/docs/api/mongoose.html#Mongoose.prototype.isValidObjectId()>) kann verwendet werden, um zu überprüfen, ob eine bestimmte ID gültig ist.

## Nächste Schritte

- Kehren Sie zur [Express-Anleitung Teil 5: Bibliotheksdaten anzeigen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data) zurück.
- Gehen Sie zum nächsten Unterartikel von Teil 5: [Buch-Detailseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_detail_page).
