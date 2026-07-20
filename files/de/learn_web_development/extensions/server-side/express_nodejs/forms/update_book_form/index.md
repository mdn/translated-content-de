---
title: Formular zum Aktualisieren eines Buches
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Update_Book_form
l10n:
  sourceCommit: b5ee197a87ea18acbc4dd9544efa8c0e46253785
---

In diesem letzten Unterartikel erfahren Sie, wie Sie eine Seite definieren, auf der `Book`-Objekte aktualisiert werden. Die Formularbearbeitung beim Aktualisieren eines Buches ist ähnlich wie bei der Erstellung eines Buches, mit dem Unterschied, dass Sie das Formular in der `GET`-Route mit Werten aus der Datenbank füllen müssen.

## Controller—GET-Route

Öffnen Sie **/controllers/bookController.js**. Suchen Sie die exportierte Methode `book_update_get()` und ersetzen Sie sie durch den folgenden Code.

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

Der Controller erhält die ID des zu aktualisierenden `Book`-Objekts aus dem URL-Parameter (`req.params.id`).
Er `awaitet` das von `Promise.all()` zurückgegebene Versprechen, um den angegebenen `Book`-Datensatz (unter Füllung der Genre- und Author-Felder) und alle `Author`- und `Genre`-Datensätze zu erhalten.

Wenn die Vorgänge abgeschlossen sind, überprüft die Funktion, ob Bücher gefunden wurden, und wenn keine gefunden wurden, wird ein Fehler "Buch nicht gefunden" an die Fehlerbehandlungsmiddleware gesendet.

> [!NOTE]
> Dass keine Bücher gefunden werden, ist für eine Suche **kein Fehler**, aber für diese Anwendung schon, da wir wissen, dass ein passender Buchdatensatz existieren muss! Der obige Code testet im Callback auf (`book===null`), aber ebenso gut könnte die Methode [`orFail()`](<https://mongoosejs.com/docs/api/query.html#Query.prototype.orFail()>) an die Abfrage angehängt werden.

Wir markieren dann die derzeit ausgewählten Genres als ausgewählt und rendern die **book_form.pug**-Ansicht, wobei Variablen für `title`, das Buch, alle `authors` und alle `genres` übergeben werden.

## Controller—POST-Route

Suchen Sie die exportierte Methode `book_update_post()` und ersetzen Sie sie durch den folgenden Code.

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

Dies ist sehr ähnlich zur POST-Route, die verwendet wird, wenn ein `Book` erstellt wird.
Zuerst validieren und bereinigen wir die Buchdaten aus dem Formular und verwenden sie, um ein neues `Book`-Objekt zu erstellen (wobei wir seinen `_id`-Wert auf die ID des zu aktualisierenden Objekts setzen). Sollten bei der Validierung der Daten Fehler auftreten, rendern wir das Formular erneut und zeigen zusätzlich die vom Benutzer eingegebenen Daten, die Fehler und die Listen der Genren und Autoren an. Wenn keine Fehler vorliegen, rufen wir `Book.findByIdAndUpdate()` auf, um das `Book`-Dokument zu aktualisieren, und leiten dann zur Detailseite weiter.

## Ansicht

Es besteht keine Notwendigkeit, die Ansicht für das Formular (**/views/book_form.pug**) zu ändern, da dieselbe Vorlage sowohl für die Erstellung als auch für die Aktualisierung des Buches funktioniert.

## Einen Update-Button hinzufügen

Öffnen Sie die **book_detail.pug**-Ansicht und stellen Sie sicher, dass am unteren Rand der Seite Links sowohl zum Löschen als auch zum Aktualisieren von Büchern vorhanden sind, wie unten gezeigt.

```pug
  hr
  p
    a(href=book.url+'/delete') Delete Book
  p
    a(href=book.url+'/update') Update Book
```

Sie sollten nun in der Lage sein, Bücher von der _Book detail_-Seite aus zu aktualisieren.

## Wie sieht das aus?

Führen Sie die Anwendung aus, öffnen Sie Ihren Browser unter `http://localhost:3000/`, wählen Sie den Link _All books_, und wählen Sie dann ein bestimmtes Buch aus. Wählen Sie abschließend den _Update Book_-Link.

Das Formular sollte genau wie die _Create book_-Seite aussehen, nur mit einem Titel 'Update book' und vorab mit Datensatzwerten gefüllt.

![Der Abschnitt 'Buch aktualisieren' der Local Library-Anwendung. Die linke Spalte hat eine vertikale Navigationsleiste. Die rechte Spalte hat ein Formular zum Aktualisieren des Buches mit einer Überschrift, die 'Update book' lautet. Es gibt fünf Eingabefelder mit den Bezeichnungen Titel, Autor, Zusammenfassung, ISBN, Genre. Genre ist ein Optionsfeld mit Kontrollkästchen. Am Ende befindet sich ein Button mit der Aufschrift 'Submit'.](locallibary_express_book_update_noerrors.png)

> [!NOTE]
> Die anderen Seiten zum Aktualisieren von Objekten können auf ähnliche Weise implementiert werden. Wir haben das als Herausforderung gelassen.

## Nächste Schritte

- Zurück zu [Express Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms).
