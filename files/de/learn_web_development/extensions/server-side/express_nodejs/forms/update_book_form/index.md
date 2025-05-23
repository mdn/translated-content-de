---
title: Formular zur Aktualisierung eines Buches
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Update_Book_form
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

Dieser letzte Unterartikel zeigt, wie Sie eine Seite definieren, um `Book`-Objekte zu aktualisieren. Das Formularhandling beim Aktualisieren eines Buches ähnelt dem beim Erstellen eines Buches, außer dass Sie das Formular in der `GET`-Route mit Werten aus der Datenbank füllen müssen.

## Controller—GET-Route

Öffnen Sie **/controllers/bookController.js**. Suchen Sie die exportierte `book_update_get()` Controller-Methode und ersetzen Sie sie durch den folgenden Code.

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
    book: book,
  });
});
```

Der Controller erhält die ID des zu aktualisierenden `Book` aus dem URL-Parameter (`req.params.id`). Er `awaitet` auf das von `Promise.all()` zurückgegebene Versprechen, um die angegebene `Book`-Aufzeichnung zu erhalten (dessen Genre- und Autorfelder ausgefüllt sind) sowie alle `Author`- und `Genre`-Aufzeichnungen.

Wenn die Operationen abgeschlossen sind, prüft die Funktion, ob Bücher gefunden wurden, und sendet andernfalls einen Fehler "Book not found" an die Fehlerbehandlungsmiddleware.

> [!NOTE]
> Das Nichtfinden eines Buches ist **kein Fehler** für eine Suche — aber es ist ein Fehler für diese Anwendung, weil wir wissen, dass ein passender Buchdatensatz vorhanden sein muss! Der obige Code vergleicht im Callback (`book===null`), aber er hätte ebenso gut die Methode [orFail()](<https://mongoosejs.com/docs/api/query.html#Query.prototype.orFail()>) an die Abfrage anhängen können.

Wir markieren dann die aktuell ausgewählten Genres als ausgewählt und rendern die **book_form.pug** Ansicht, indem wir Variablen für `title`, Buch, alle `authors` und alle `genres` übergeben.

## Controller—POST-Route

Suchen Sie die exportierte `book_update_post()` Controller-Methode und ersetzen Sie sie durch den folgenden Code.

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
        book: book,
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

Dies ist sehr ähnlich zu der POST-Route, die verwendet wird, wenn ein `Book` erstellt wird. Zuerst validieren und bereinigen wir die Buchdaten aus dem Formular und verwenden sie, um ein neues `Book`-Objekt zu erstellen (wobei wir den `_id`-Wert auf die ID des zu aktualisierenden Objekts setzen). Wenn es Fehler bei der Validierung der Daten gibt, rendern wir das Formular erneut und zeigen zusätzlich die vom Benutzer eingegebenen Daten, die Fehler sowie Listen von Genres und Autoren an. Wenn es keine Fehler gibt, rufen wir `Book.findByIdAndUpdate()` auf, um das `Book`-Dokument zu aktualisieren, und leiten dann zur Detailseite um.

## Ansicht

Es ist nicht nötig, die Ansicht für das Formular (**/views/book_form.pug**) zu ändern, da dieselbe Vorlage sowohl für das Erstellen als auch für das Aktualisieren des Buches funktioniert.

## Eine Aktualisierungsschaltfläche hinzufügen

Öffnen Sie die **book_detail.pug** Ansicht und stellen Sie sicher, dass am Ende der Seite Links zum Löschen und Aktualisieren von Büchern vorhanden sind, wie unten gezeigt.

```pug
  hr
  p
    a(href=book.url+'/delete') Delete Book
  p
    a(href=book.url+'/update') Update Book
```

Sie sollten jetzt in der Lage sein, Bücher von der _Buchdetail_-Seite aus zu aktualisieren.

## Wie sieht es aus?

Führen Sie die Anwendung aus, öffnen Sie Ihren Browser unter `http://localhost:3000/`, wählen Sie den _Alle Bücher_-Link und dann ein bestimmtes Buch aus. Wählen Sie schließlich den _Buch aktualisieren_-Link aus.

Das Formular sollte genauso aussehen wie die _Buch erstellen_-Seite, nur mit dem Titel 'Buch aktualisieren' und mit vorab ausgefüllten Datensatzwerten.

![Der Abschnitt zum Aktualisieren eines Buches der Local Library-Anwendung. Die linke Spalte hat eine vertikale Navigationsleiste. Die rechte Spalte hat ein Formular zum Aktualisieren des Buches mit einer Überschrift, die 'Buch aktualisieren' lautet. Es gibt fünf Eingabefelder mit den Bezeichnungen Titel, Autor, Zusammenfassung, ISBN, Genre. Genre ist ein Auswahlfeld für Kontrollkästchen. Am Ende befindet sich eine Schaltfläche mit der Bezeichnung 'Senden'.](locallibary_express_book_update_noerrors.png)

> [!NOTE]
> Die anderen Seiten zum Aktualisieren von Objekten können auf ähnliche Weise implementiert werden. Wir haben dies als Herausforderung gelassen.

## Nächste Schritte

- Kehren Sie zurück zum [Express Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms).
