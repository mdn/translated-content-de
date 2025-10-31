---
title: Formular zum Aktualisieren eines Buches
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Update_Book_form
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Dieser letzte Unterartikel zeigt, wie Sie eine Seite zum Aktualisieren von `Book`-Objekten definieren. Die Formularbearbeitung beim Aktualisieren eines Buches ähnelt der beim Erstellen eines Buches, mit der Ausnahme, dass Sie das Formular in der `GET`-Route mit Werten aus der Datenbank füllen müssen.

## Controller—GET-Route

Öffnen Sie **/controllers/bookController.js**. Finden Sie die exportierte Methode `book_update_get()` des Controllers und ersetzen Sie sie durch den folgenden Code.

```js
// Display book update form on GET.
exports.book_update_get = async (req, res, next) => {
  // Get book, authors and genres for form.
  const [book, allAuthors, allGenres] = await Promise.all([
    Book.findById(req.params.id).populate("author").exec(),
    Author.find().sort({ family_name: 1 }).exec(),
    Genre.find().sort({ name: 1 }).exec(),
  ]);

  if (book === null) {
    // No results.
    const err = new Error("Book not found");
    err.status = 404;
    return next(err);
  }

  // Mark our selected genres as checked.
  allGenres.forEach((genre) => {
    if (book.genre.includes(genre._id)) genre.checked = "true";
  });

  res.render("book_form", {
    title: "Update Book",
    authors: allAuthors,
    genres: allGenres,
    book,
  });
};
```

Der Controller erhält die ID des zu aktualisierenden `Book` aus dem URL-Parameter (`req.params.id`).
Er `await`et auf das von `Promise.all()` zurückgegebene Versprechen, um den angegebenen `Book`-Datensatz (inklusive der Felder für Genre und Autor) sowie alle `Author`- und `Genre`-Datensätze zu erhalten.

Wenn die Operationen abgeschlossen sind, prüft die Funktion, ob Bücher gefunden wurden, und sendet, falls keine gefunden wurden, einen Fehler "Book not found" an die Fehlerbehandlungsmiddleware.

> [!NOTE]
> Kein Ergebnis bei der Buchsuche zu finden, ist bei einer Suche **kein Fehler**, in dieser Anwendung jedoch schon, da wir wissen, dass es einen passenden Bücher-Datensatz geben muss! Der obige Code testet in der Rückrufmethode auf (`book===null`), aber er hätte genauso gut die Methode [`orFail()`](<https://mongoosejs.com/docs/api/query.html#Query.prototype.orFail()>) an die Abfrage ketten können.

Wir markieren dann die aktuell ausgewählten Genres als ausgewählt und rendern die Ansicht **book_form.pug**, indem wir Variablen für `title`, book, alle `authors` und alle `genres` übergeben.

## Controller—POST-Route

Finden Sie die exportierte Methode `book_update_post()` des Controllers und ersetzen Sie sie durch den folgenden Code.

```js
// Handle book update on POST.
exports.book_update_post = [
  // Convert the genre to an array.
  (req, res, next) => {
    if (!Array.isArray(req.body.genre)) {
      req.body.genre =
        typeof req.body.genre === "undefined" ? [] : [req.body.genre];
    }
    next();
  },

  // Validate and sanitize fields.
  body("title", "Title must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("author", "Author must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("summary", "Summary must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("isbn", "ISBN must not be empty").trim().isLength({ min: 1 }).escape(),
  body("genre.*").escape(),

  // Process request after validation and sanitization.
  async (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create a Book object with escaped/trimmed data and old id.
    const book = new Book({
      title: req.body.title,
      author: req.body.author,
      summary: req.body.summary,
      isbn: req.body.isbn,
      genre: typeof req.body.genre === "undefined" ? [] : req.body.genre,
      _id: req.params.id, // This is required, or a new ID will be assigned!
    });

    if (!errors.isEmpty()) {
      // There are errors. Render form again with sanitized values/error messages.

      // Get all authors and genres for form
      const [allAuthors, allGenres] = await Promise.all([
        Author.find().sort({ family_name: 1 }).exec(),
        Genre.find().sort({ name: 1 }).exec(),
      ]);

      // Mark our selected genres as checked.
      for (const genre of allGenres) {
        if (book.genre.indexOf(genre._id) > -1) {
          genre.checked = "true";
        }
      }
      res.render("book_form", {
        title: "Update Book",
        authors: allAuthors,
        genres: allGenres,
        book,
        errors: errors.array(),
      });
      return;
    }

    // Data from form is valid. Update the record.
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, book, {});
    // Redirect to book detail page.
    res.redirect(updatedBook.url);
  },
];
```

Diese Methode ist der POST-Route beim Erstellen eines `Book` sehr ähnlich.
Zuerst validieren und bereinigen wir die Buchdaten aus dem Formular und verwenden sie, um ein neues `Book`-Objekt zu erstellen (indem wir dessen `_id`-Wert auf die ID des zu aktualisierenden Objekts setzen). Wenn beim Validieren der Daten Fehler auftreten, rendern wir das Formular erneut, wobei die vom Benutzer eingegebenen Daten, die Fehler und Listen von Genres und Autoren angezeigt werden. Wenn keine Fehler vorliegen, rufen wir `Book.findByIdAndUpdate()` auf, um das `Book`-Dokument zu aktualisieren, und leiten dann zur Detailseite weiter.

## Ansicht

Es ist nicht nötig, die Ansicht für das Formular (**/views/book_form.pug**) zu ändern, da die gleiche Vorlage sowohl für das Erstellen als auch für das Aktualisieren des Buches funktioniert.

## Einen Aktualisieren-Button hinzufügen

Öffnen Sie die Ansicht **book_detail.pug** und stellen Sie sicher, dass es am unteren Ende der Seite Links sowohl zum Löschen als auch zum Aktualisieren von Büchern gibt, wie unten gezeigt.

```pug
  hr
  p
    a(href=book.url+'/delete') Delete Book
  p
    a(href=book.url+'/update') Update Book
```

Sie sollten nun in der Lage sein, Bücher von der _Book detail_-Seite aus zu aktualisieren.

## Wie sieht das aus?

Führen Sie die Anwendung aus, öffnen Sie Ihren Browser unter `http://localhost:3000/`, wählen Sie den Link _All books_, und dann ein bestimmtes Buch. Wählen Sie schließlich den _Update Book_-Link.

Das Formular sollte genauso aussehen wie die Seite _Create book_, nur mit dem Titel 'Update book' und vorausgefüllt mit den Datensatzwerten.

![Der Abschnitt zum Aktualisieren von Büchern der lokalen Bibliotheksanwendung. Die linke Spalte hat eine vertikale Navigationsleiste. Die rechte Spalte enthält ein Formular zum Aktualisieren des Buches mit einer Überschrift, die 'Update book' lautet. Es gibt fünf Eingabefelder mit den Bezeichnungen Titel, Autor, Zusammenfassung, ISBN, Genre. Genre ist ein Kontrollkästchen-Optionenfeld. Am Ende befindet sich eine Schaltfläche mit der Bezeichnung 'Submit'.](locallibary_express_book_update_noerrors.png)

> [!NOTE]
> Die anderen Seiten zum Aktualisieren von Objekten können auf ähnliche Weise implementiert werden. Wir haben das als Herausforderung belassen.

## Nächste Schritte

- Kehren Sie zurück zum [Express Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms).
