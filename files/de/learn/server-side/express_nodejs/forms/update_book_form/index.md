---
title: Formular zum Aktualisieren eines Buches
slug: Learn/Server-side/Express_Nodejs/forms/Update_Book_form
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

Dieser letzte Unterartikel zeigt, wie man eine Seite definiert, um `Book`-Objekte zu aktualisieren. Die Formularhandhabung beim Aktualisieren eines Buches ist der bei der Erstellung eines Buches sehr ähnlich, mit der Ausnahme, dass Sie das Formular in der `GET`-Route mit Werten aus der Datenbank füllen müssen.

## Controller—GET-Route

Öffnen Sie **/controllers/bookController.js**. Finden Sie die exportierte `book_update_get()` Controller-Methode und ersetzen Sie sie durch den folgenden Code.

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

Der Controller erhält die ID des zu aktualisierenden `Book` aus dem URL-Parameter (`req.params.id`). Er wartet auf das Erfüllen des Versprechens, das von `Promise.all()` zurückgegeben wird, um den angegebenen `Book` Datensatz (mit aufgefüllten genre- und autor-Feldern) und alle `Author`- und `Genre`-Datensätze zu erhalten.

Wenn die Operationen abgeschlossen sind, prüft die Funktion, ob Bücher gefunden wurden, und wenn keine gefunden wurden, wird ein Fehler "Book not found" an die Fehlerbehandlungsmiddleware gesendet.

> [!NOTE]
> Keine Bücher zu finden, ist **kein Fehler** bei einer Suche — aber es ist einer für diese Anwendung, weil wir wissen, dass es einen passenden Buchdatensatz geben muss! Der obige Code vergleicht (`book===null`) im Callback, aber es könnte genauso gut die Methode [orFail()](<https://mongoosejs.com/docs/api/query.html#Query.prototype.orFail()>) zur Anfrage daisy chainen.

Wir markieren dann die aktuell ausgewählten Genres als überprüft und rendern dann die **book_form.pug**-Ansicht, wobei Variablen für `title`, book, alle `authors` und alle `genres` übergeben werden.

## Controller—POST-Route

Finden Sie die exportierte `book_update_post()` Controller-Methode und ersetzen Sie sie durch den folgenden Code.

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

Dies ist der POST-Route sehr ähnlich, die bei der Erstellung eines `Book` verwendet wird.
Zuerst validieren und bereinigen wir die Buchdaten aus dem Formular und verwenden sie, um ein neues `Book`-Objekt zu erstellen (wobei wir seinen `_id`-Wert auf die ID des zu aktualisierenden Objekts setzen). Wenn es Fehler bei der Validierung der Daten gibt, rendern wir das Formular erneut und zeigen zusätzlich die vom Benutzer eingegebenen Daten, die Fehler und die Listen der Genres und Autoren an. Wenn es keine Fehler gibt, rufen wir `Book.findByIdAndUpdate()` auf, um das `Book`-Dokument zu aktualisieren und leiten dann zu dessen Detailseite weiter.

## Ansicht

Es ist nicht erforderlich, die Ansicht für das Formular (**/views/book_form.pug**) zu ändern, da dieselbe Vorlage sowohl für das Erstellen als auch für das Aktualisieren des Buches funktioniert.

## Einen Aktualisierungs-Button hinzufügen

Öffnen Sie die **book_detail.pug**-Ansicht und stellen Sie sicher, dass es am Ende der Seite Links sowohl zum Löschen als auch zum Aktualisieren von Büchern gibt, wie unten gezeigt.

```pug
  hr
  p
    a(href=book.url+'/delete') Delete Book
  p
    a(href=book.url+'/update') Update Book
```

Sie sollten nun in der Lage sein, Bücher von der _Book detail_-Seite zu aktualisieren.

## Wie sieht es aus?

Führen Sie die Anwendung aus, öffnen Sie Ihren Browser unter `http://localhost:3000/`, wählen Sie den _All books_ Link, und wählen Sie dann ein bestimmtes Buch. Wählen Sie schließlich den _Update Book_ Link.

Das Formular sollte genau wie die Seite „Create book“ aussehen, nur mit dem Titel „Update book“ und vorausgefüllten Datensatzwerten.

![Der Abschnitt "Buch aktualisieren" der Anwendung Local Library. Die linke Spalte hat eine vertikale Navigationsleiste. Die rechte Spalte enthält ein Formular zum Aktualisieren des Buches mit einer Überschrift, die "Update book" lautet. Es gibt fünf Eingabefelder mit den Bezeichnungen Title, Author, Summary, ISBN, Genre. Genre ist ein Optionsfeld mit Kontrollkästchen. Es gibt einen Button mit der Beschriftung "Submit" am Ende.](locallibary_express_book_update_noerrors.png)

> [!NOTE]
> Die anderen Seiten zum Aktualisieren von Objekten können auf ähnliche Weise implementiert werden. Wir haben das als Herausforderung überlassen.

## Nächste Schritte

- Zurück zu [Express Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn/Server-side/Express_Nodejs/forms).
