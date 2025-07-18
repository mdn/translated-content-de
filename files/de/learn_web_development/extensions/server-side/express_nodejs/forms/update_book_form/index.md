---
title: Formular zum Aktualisieren eines Buches
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Update_Book_form
l10n:
  sourceCommit: 8443cb34d9944d8eb8e2c5add598bec26ed6d21f
---

Dieses abschließende Unterkapitel zeigt, wie Sie eine Seite definieren, um `Book`-Objekte zu aktualisieren. Die Formularbearbeitung beim Aktualisieren eines Buches ist ähnlich wie beim Erstellen eines Buches, außer dass Sie das Formular in der `GET`-Route mit Werten aus der Datenbank füllen müssen.

## Controller—GET-Route

Öffnen Sie **/controllers/bookController.js**. Suchen Sie die exportierte Methode `book_update_get()` im Controller und ersetzen Sie sie durch den folgenden Code.

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
Er `awaits` das von `Promise.all()` zurückgegebene Versprechen, um den angegebenen `Book`-Datensatz (unter Einbeziehung der Genre- und Autorenfelder) und alle `Author`- und `Genre`-Datensätze zu erhalten.

Wenn die Operationen abgeschlossen sind, prüft die Funktion, ob Bücher gefunden wurden, und wenn keine gefunden wurden, sendet sie einen Fehler "Buch nicht gefunden" an die Fehlerbehandlungsmiddleware.

> [!NOTE]
> Das Nichtfinden von Büchern ist **kein Fehler** bei einer Suche, aber für diese Anwendung ist es das, weil wir wissen, dass es einen passenden Buchdatensatz geben muss! Der obige Code testet für (`book===null`) im Callback, aber er könnte ebenso gut die Methode [`orFail()`](<https://mongoosejs.com/docs/api/query.html#Query.prototype.orFail()>) an die Abfrage anhängen.

Wir markieren dann die derzeit ausgewählten Genres als überprüft und rendern die **book_form.pug**-Ansicht, wobei Variablen für `title`, Buch, alle `authors` und alle `genres` übergeben werden.

## Controller—POST-Route

Suchen Sie die exportierte Methode `book_update_post()` im Controller und ersetzen Sie sie durch den folgenden Code.

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

Dies ist der POST-Route beim Erstellen eines `Book` sehr ähnlich.
Zuerst validieren und bereinigen wir die Buchdaten aus dem Formular und verwenden sie, um ein neues `Book`-Objekt zu erstellen (indem wir den `_id`-Wert auf die ID des zu aktualisierenden Objekts setzen). Wenn es Fehler beim Validieren der Daten gibt, rendern wir das Formular erneut, wobei die eingegebenen Daten des Benutzers, die Fehler und die Listen von Genres und Autoren zusätzlich angezeigt werden. Wenn es keine Fehler gibt, rufen wir `Book.findByIdAndUpdate()` auf, um das `Book`-Dokument zu aktualisieren, und leiten dann zur Detailseite weiter.

## Ansicht

Es ist nicht notwendig, die Ansichten für das Formular (**/views/book_form.pug**) zu ändern, da dieselbe Vorlage sowohl für das Erstellen als auch für das Aktualisieren des Buches funktioniert.

## Einen Aktualisieren-Button hinzufügen

Öffnen Sie die **book_detail.pug**-Ansicht und stellen Sie sicher, dass sich am unteren Rand der Seite Links sowohl zum Löschen als auch zum Aktualisieren von Büchern befinden, wie unten gezeigt.

```pug
  hr
  p
    a(href=book.url+'/delete') Delete Book
  p
    a(href=book.url+'/update') Update Book
```

Sie sollten jetzt in der Lage sein, Bücher von der _Buch-Detail_ Seite zu aktualisieren.

## Wie sieht es aus?

Führen Sie die Anwendung aus, öffnen Sie Ihren Browser unter `http://localhost:3000/`, wählen Sie den _Alle Bücher_ Link aus und wählen Sie dann ein bestimmtes Buch aus. Schließlich wählen Sie den _Buch aktualisieren_ Link aus.

Das Formular sollte genauso aussehen wie die _Buch erstellen_ Seite, nur mit einem Titel 'Buch aktualisieren', und es ist mit Datensatzwerten vorausgefüllt.

![Der Abschnitt zur Aktualisierung von Büchern in der lokalen Bibliotheksanwendung. Die linke Spalte hat eine vertikale Navigationsleiste. Die rechte Spalte hat ein Formular zur Aktualisierung des Buches mit der Überschrift 'Buch aktualisieren'. Es gibt fünf Eingabefelder mit den Bezeichnungen Titel, Autor, Zusammenfassung, ISBN, Genre. Genre ist ein Checkbox-Auswahlfeld. Am Ende befindet sich ein Button mit der Bezeichnung 'Einreichen'.](locallibary_express_book_update_noerrors.png)

> [!NOTE]
> Die anderen Seiten zur Aktualisierung von Objekten können auf ähnliche Weise implementiert werden. Wir haben es als Herausforderung belassen.

## Nächste Schritte

- Kehren Sie zurück zu [Express Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms).
