---
title: Aktualisieren Sie das Book-Formular
slug: Learn/Server-side/Express_Nodejs/forms/Update_Book_form
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

Dieser letzte Unterartikel zeigt, wie Sie eine Seite definieren, um `Book`-Objekte zu aktualisieren. Die Formularbearbeitung beim Aktualisieren eines Buches ähnelt der beim Erstellen eines Buches, außer dass Sie das Formular in der `GET`-Route mit Werten aus der Datenbank ausfüllen müssen.

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

Der Controller erhält die ID des zu aktualisierenden `Book` aus dem URL-Parameter (`req.params.id`). Er `awaitet` auf das von `Promise.all()` zurückgegebene Versprechen, um den angegebenen `Book`-Datensatz zu erhalten (einschließlich der Felder Genre und Autor) sowie alle `Author`- und `Genre`-Datensätze.

Wenn die Operationen abgeschlossen sind, überprüft die Funktion, ob Bücher gefunden wurden, und wenn keine gefunden wurden, sendet sie den Fehler "Buch nicht gefunden" an die Fehlerbehandlungsmiddleware.

> [!NOTE]
> Das Nichtfinden von Büchern ist **kein Fehler** für eine Suche – aber in dieser Anwendung ist es das, weil wir wissen, dass es einen passenden Buchdatensatz geben muss! Der obige Code vergleicht in der Rückruffunktion (`book===null`), aber man könnte genauso gut die Methode [orFail()](<https://mongoosejs.com/docs/api/query.html#Query.prototype.orFail()>) an die Abfrage anhängen.

Wir markieren dann die derzeit ausgewählten Genres als geprüft und rendern die Ansicht **book_form.pug**, wobei Variablen für `title`, das Buch, alle `authors` und alle `genres` übergeben werden.

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

Dies ist der POST-Route beim Erstellen eines `Book` sehr ähnlich. Zuerst validieren und bereinigen wir die Buchdaten aus dem Formular und verwenden diese, um ein neues `Book`-Objekt zu erstellen (mit der `_id` auf die ID des zu aktualisierenden Objekts gesetzt). Wenn es beim Validieren der Daten Fehler gibt, rendern wir das Formular neu und zeigen zusätzlich die vom Benutzer eingegebenen Daten, die Fehler sowie Listen der Genres und Autoren an. Gibt es keine Fehler, dann rufen wir `Book.findByIdAndUpdate()` auf, um das `Book`-Dokument zu aktualisieren, und leiten dann zur Detailseite weiter.

## Ansicht

Es ist nicht nötig, die Ansicht für das Formular (**/views/book_form.pug**) zu ändern, da dieselbe Vorlage sowohl für das Erstellen als auch für das Aktualisieren des Buches funktioniert.

## Aktualisieren Sie die Schaltfläche hinzufügen

Öffnen Sie die Ansicht **book_detail.pug** und stellen Sie sicher, dass am Seitenende Links sowohl zum Löschen als auch zum Aktualisieren von Büchern vorhanden sind, wie unten gezeigt.

```pug
  hr
  p
    a(href=book.url+'/delete') Delete Book
  p
    a(href=book.url+'/update') Update Book
```

Sie sollten nun in der Lage sein, Bücher von der _Book detail_-Seite aus zu aktualisieren.

## Wie sieht es aus?

Führen Sie die Anwendung aus, öffnen Sie Ihren Browser unter `http://localhost:3000/`, wählen Sie den Link _All books_, und wählen Sie dann ein bestimmtes Buch aus. Wählen Sie schließlich den Link _Update Book_.

Das Formular sollte genauso aussehen wie die Seite _Create book_, nur mit einem Titel 'Update book' und vorab mit Datensatzwerten ausgefüllt.

![Der Abschnitt zum Aktualisieren von Büchern der Local Library-Anwendung. Die linke Spalte hat eine vertikale Navigationsleiste. Die rechte Spalte enthält ein Formular zum Aktualisieren des Buches mit einer Überschrift, die 'Buch aktualisieren' lautet. Es gibt fünf Eingabefelder mit den Bezeichnungen Titel, Autor, Zusammenfassung, ISBN, Genre. Genre ist ein Auswahlfeld mit Kontrollkästchenoptionen. Am Ende befindet sich eine Schaltfläche mit der Aufschrift 'Absenden'.](locallibary_express_book_update_noerrors.png)

> [!NOTE]
> Die anderen Seiten zum Aktualisieren von Objekten können auf ähnliche Weise implementiert werden. Wir haben das als Herausforderung belassen.

## Nächste Schritte

- Kehren Sie zurück zu [Express Tutorial Part 6: Arbeiten mit Formularen](/de/docs/Learn/Server-side/Express_Nodejs/forms).
