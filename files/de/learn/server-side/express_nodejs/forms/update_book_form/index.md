---
title: Update Book Formular
slug: Learn/Server-side/Express_Nodejs/forms/Update_Book_form
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

Dieser letzte Unterartikel zeigt, wie Sie eine Seite definieren, um `Book`-Objekte zu aktualisieren. Die Formularbearbeitung beim Aktualisieren eines Buches ähnelt der beim Erstellen eines Buches, außer dass Sie das Formular in der `GET`-Route mit Werten aus der Datenbank füllen müssen.

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

Der Controller ruft die ID des zu aktualisierenden `Book` aus dem URL-Parameter ab (`req.params.id`). Er `awaited` das Versprechen, das von `Promise.all()` zurückgegeben wird, um den angegebenen `Book`-Datensatz zu erhalten (wobei seine Genre- und Autorenfelder gefüllt werden) und alle `Author`- und `Genre`-Datensätze.

Wenn die Operationen abgeschlossen sind, prüft die Funktion, ob Bücher gefunden wurden, und wenn keine gefunden wurden, sendet sie einen Fehler "Book not found" an die Fehlerbehandlungsmiddleware.

> [!NOTE]
> Keine Buchergebnisse zu finden ist **kein Fehler** bei einer Suche — aber für diese Anwendung schon, da wir wissen, dass ein entsprechender Buchdatensatz vorhanden sein muss! Der obige Code vergleicht im Callback auf (`book===null`), es könnte jedoch ebenso gut die Methode [orFail()](<https://mongoosejs.com/docs/api/query.html#Query.prototype.orFail()>) an die Abfrage angehängt werden.

Wir markieren dann die derzeit ausgewählten Genres als überprüft und rendern die **book_form.pug** Ansicht, wobei Variablen für `title`, Buch, alle `authors` und alle `genres` übergeben werden.

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
    } else {
      // Data from form is valid. Update the record.
      const updatedBook = await Book.findByIdAndUpdate(req.params.id, book, {});
      // Redirect to book detail page.
      res.redirect(updatedBook.url);
    }
  }),
];
```

Dies ähnelt sehr der POST-Route, die beim Erstellen eines `Book` verwendet wird. Zuerst validieren und bereinigen wir die Buchdaten aus dem Formular und verwenden sie, um ein neues `Book`-Objekt zu erstellen (wobei sein `_id`-Wert auf die ID des zu aktualisierenden Objekts gesetzt wird). Wenn bei der Validierung der Daten Fehler auftreten, rendern wir das Formular erneut und zeigen zusätzlich die vom Benutzer eingegebenen Daten, die Fehler sowie Listen von Genres und Autoren an. Wenn keine Fehler vorliegen, rufen wir `Book.findByIdAndUpdate()` auf, um das `Book`-Dokument zu aktualisieren, und leiten dann auf die Detailseite weiter.

## View

Es ist nicht notwendig, die View für das Formular (**/views/book_form.pug**) zu ändern, da dieselbe Vorlage sowohl für die Erstellung als auch für die Aktualisierung des Buches funktioniert.

## Einen Aktualisierungs-Button hinzufügen

Öffnen Sie die **book_detail.pug** Ansicht und stellen Sie sicher, dass am unteren Rand der Seite sowohl Links zum Löschen als auch zum Aktualisieren von Büchern vorhanden sind, wie unten gezeigt.

```pug
  hr
  p
    a(href=book.url+'/delete') Delete Book
  p
    a(href=book.url+'/update') Update Book
```

Sie sollten nun in der Lage sein, Bücher von der _Buchdetail_-Seite aus zu aktualisieren.

## Wie sieht es aus?

Führen Sie die Anwendung aus, öffnen Sie Ihren Browser unter `http://localhost:3000/`, wählen Sie den Link _Alle Bücher_ aus und wählen Sie dann ein bestimmtes Buch aus. Wählen Sie schließlich den _Buch aktualisieren_ Link.

Das Formular sollte genauso aussehen wie die _Buch erstellen_ Seite, nur mit einem Titel 'Buch aktualisieren' und mit Datensatzwerten vorausgefüllt.

![Der Bereich zum Aktualisieren von Büchern der Local Library Anwendung. Die linke Spalte hat eine vertikale Navigationsleiste. Die rechte Spalte hat ein Formular zum Aktualisieren des Buches mit der Überschrift 'Buch aktualisieren'. Es gibt fünf Eingabefelder mit den Bezeichnungen Titel, Autor, Zusammenfassung, ISBN, Genre. Genre ist ein Kontrollkästchen-Auswahlfeld. Am Ende gibt es einen mit 'Senden' beschrifteten Button.](locallibary_express_book_update_noerrors.png)

> [!NOTE]
> Die anderen Seiten zum Aktualisieren von Objekten können auf ähnliche Weise implementiert werden. Wir haben das als Herausforderung offengelassen.

## Nächste Schritte

- Kehren Sie zurück zum [Express Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn/Server-side/Express_Nodejs/forms).
