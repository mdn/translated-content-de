---
title: Aktualisierungsformular für Bücher
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Update_Book_form
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

Dieser abschließende Teilartikel zeigt, wie Sie eine Seite definieren, um `Book`-Objekte zu aktualisieren. Die Formularbearbeitung beim Aktualisieren eines Buches ähnelt der beim Erstellen, mit der Ausnahme, dass Sie das Formular in der `GET`-Route mit Werten aus der Datenbank befüllen müssen.

## Controller—GET-Route

Öffnen Sie **/controllers/bookController.js**. Finden Sie die exportierte `book_update_get()`-Controllermethode und ersetzen Sie diese mit dem folgenden Code.

```js
// Display book update form on GET.
exports.book_update_get = asyncHandler(async (req, res, next) => {
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
});
```

Der Controller erhält die ID des zu aktualisierenden `Book` aus dem URL-Parameter (`req.params.id`).
Er wartet auf das Versprechen, das von `Promise.all()` zurückgegeben wird, um den angegebenen `Book`-Datensatz zu erhalten (wobei die Felder Genre und Autor befüllt werden) sowie alle `Author`- und `Genre`-Datensätze.

Wenn die Vorgänge abgeschlossen sind, prüft die Funktion, ob Bücher gefunden wurden. Wenn keine gefunden wurden, sendet sie einen Fehler "Book not found" an die Fehlerbehandlungsmiddleware.

> [!NOTE]
> Keine Buchergebnisse zu finden ist **kein Fehler** bei einer Suche — aber es ist ein Fehler für diese Anwendung, da wir wissen, dass es einen entsprechenden Buchdatensatz geben muss! Der oben stehende Code vergleicht (buch===null) im Callback, könnte aber genauso gut die Methode [orFail()](<https://mongoosejs.com/docs/api/query.html#Query.prototype.orFail()>) an die Abfrage anfügen.

Wir markieren dann die derzeit ausgewählten Genres als ausgewählt und rendern die **book_form.pug**-Ansicht, wobei Variablen für `title`, book, alle `authors` und alle `genres` übergeben werden.

## Controller—POST-Route

Finden Sie die exportierte `book_update_post()`-Controllermethode und ersetzen Sie diese mit dem folgenden Code.

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
  asyncHandler(async (req, res, next) => {
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
  }),
];
```

Dies ist der POST-Route, die beim Erstellen eines `Book` verwendet wird, sehr ähnlich.
Zuerst validieren und bereinigen wir die Buchdaten aus dem Formular und verwenden sie, um ein neues `Book`-Objekt zu erstellen (wobei der `_id`-Wert auf die ID des zu aktualisierenden Objekts gesetzt wird). Wenn es bei der Validierung der Daten Fehler gibt, rendern wir das Formular erneut, wobei zusätzlich die vom Benutzer eingegebenen Daten, die Fehler und die Listen der Genres und Autoren angezeigt werden. Wenn es keine Fehler gibt, rufen wir `Book.findByIdAndUpdate()` auf, um das `Book`-Dokument zu aktualisieren, und leiten dann zur Detailseite weiter.

## Ansicht

Es besteht keine Notwendigkeit, die Ansicht für das Formular (**/views/book_form.pug**) zu ändern, da dieselbe Vorlage sowohl für das Erstellen als auch für das Aktualisieren des Buches funktioniert.

## Eine Schaltfläche zum Aktualisieren hinzufügen

Öffnen Sie die **book_detail.pug**-Ansicht und stellen Sie sicher, dass es sowohl Links zum Löschen als auch zum Aktualisieren von Büchern am Ende der Seite gibt, wie unten gezeigt.

```pug
  hr
  p
    a(href=book.url+'/delete') Delete Book
  p
    a(href=book.url+'/update') Update Book
```

Sie sollten nun in der Lage sein, Bücher von der _Buchdetail_-Seite aus zu aktualisieren.

## Wie sieht es aus?

Führen Sie die Anwendung aus, öffnen Sie Ihren Browser unter `http://localhost:3000/`, wählen Sie den Link _Alle Bücher_ und dann ein bestimmtes Buch aus. Wählen Sie schließlich den Link _Buch aktualisieren_.

Das Formular sollte genauso aussehen wie die Seite _Buch erstellen_, nur mit dem Titel 'Buch aktualisieren' und vorausgefüllten Datensatzwerten.

![Der Abschnitt zum Aktualisieren des Buches der lokalen Bibliotheksanwendung. Die linke Spalte hat eine vertikale Navigationsleiste. Die rechte Spalte hat ein Formular zum Aktualisieren des Buches mit einer Überschrift, die 'Buch aktualisieren' lautet. Es gibt fünf Eingabefelder mit den Bezeichnungen Titel, Autor, Zusammenfassung, ISBN, Genre. Genre ist ein Auswahlfeld mit Checkbox-Optionen. Es gibt einen Button mit der Bezeichnung 'Absenden' am Ende.](locallibary_express_book_update_noerrors.png)

> [!NOTE]
> Die anderen Seiten zum Aktualisieren von Objekten können auf ähnliche Weise implementiert werden. Wir haben dies als Herausforderung belassen.

## Nächste Schritte

- Kehren Sie zurück zu [Express Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms).
