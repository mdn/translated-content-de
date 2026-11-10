---
title: Formular zum Aktualisieren eines Buchs
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Update_Book_form
l10n:
  sourceCommit: d775e1249487f1a7ab9a8a031c70ca71bc892d63
---

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Delete_author_form", "Learn_web_development/Extensions/Server-side/Express_Nodejs/forms")}}

Dieser letzte Teilartikel zeigt, wie Sie eine Seite zum Aktualisieren von `Book`-Objekten definieren. Die Verarbeitung des Formulars beim Aktualisieren eines Buchs ähnelt der beim Erstellen eines Buchs. Allerdings müssen Sie das Formular in der `GET`-Route mit Werten aus der Datenbank vorbelegen.

## Controller – GET-Route

Öffnen Sie **controllers/bookController.js**. Suchen Sie die exportierte Controller-Methode `bookUpdateGet()` und ersetzen Sie sie durch den folgenden Code.

```js
// Display book update form on GET.
export const bookUpdateGet = async (req, res, next) => {
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

Der Controller liest die ID des zu aktualisierenden `Book` aus dem URL-Parameter (`req.params.id`). Er wartet mit `await` auf das von `Promise.all()` zurückgegebene Promise, um den angegebenen `Book`-Datensatz (einschließlich seiner Felder für Genre und Autor) sowie alle `Author`- und `Genre`-Datensätze abzurufen.

Nach Abschluss der Operationen prüft die Funktion, ob ein Buch gefunden wurde. Falls nicht, leitet sie den Fehler „Book not found“ an die Middleware zur Fehlerbehandlung weiter.

> [!NOTE]
> Dass eine Suche keine Bücher liefert, ist **kein Fehler**. Für diese Anwendung ist es jedoch ein Fehler, da wir wissen, dass ein passender Buchdatensatz vorhanden sein muss! Der obige Code prüft auf (`book===null`), hätte aber ebenso die Methode [`orFail()`](<https://mongoosejs.com/docs/api/query.html#Query.prototype.orFail()>) an die Abfrage anhängen können.

Anschließend markieren wir die aktuell ausgewählten Genres als ausgewählt und rendern die Ansicht **book_form.pug**. Dabei übergeben wir Variablen für `title`, das Buch sowie alle `authors` und `genres`.

## Controller – POST-Route

Suchen Sie die exportierte Controller-Methode `bookUpdatePost()` und ersetzen Sie sie durch den folgenden Code.

```js
// Handle book update on POST.
export const bookUpdatePost = [
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
    await Book.findByIdAndUpdate(req.params.id, book, {});
    // Redirect to book detail page.
    res.redirect(book.url);
  },
];
```

Dies ähnelt stark der POST-Route zum Erstellen eines `Book`. Zunächst validieren und bereinigen wir die Buchdaten aus dem Formular und erstellen damit ein neues `Book`-Objekt. Dessen `_id` setzen wir auf die ID des zu aktualisierenden Objekts. Treten bei der Validierung Fehler auf, rendern wir das Formular erneut und zeigen zusätzlich die vom Benutzer eingegebenen Daten, die Fehler sowie Listen der Genres und Autoren an. Wenn keine Fehler auftreten, rufen wir `Book.findByIdAndUpdate()` auf, um das `Book`-Dokument zu aktualisieren, und leiten anschließend zu dessen Detailseite weiter.

## Ansicht

Die Formularansicht (**views/book_form.pug**) muss nicht geändert werden, da dieselbe Vorlage sowohl für das Erstellen als auch für das Aktualisieren eines Buchs funktioniert.

## Schaltfläche zum Aktualisieren hinzufügen

Öffnen Sie die Ansicht **book_detail.pug** und stellen Sie sicher, dass sich am Ende der Seite Links zum Löschen und Aktualisieren von Büchern befinden, wie unten gezeigt.

```pug
  hr
  p
    a(href=book.url+'/delete') Delete Book
  p
    a(href=book.url+'/update') Update Book
```

Sie sollten Bücher nun über die _Buchdetailseite_ aktualisieren können.

## Wie sieht das aus?

Starten Sie die Anwendung, öffnen Sie `http://localhost:3000/` in Ihrem Browser und wählen Sie den Link _Alle Bücher_ aus. Wählen Sie dann ein bestimmtes Buch und schließlich den Link _Buch aktualisieren_ aus.

Das Formular sollte genauso aussehen wie die Seite _Buch erstellen_, jedoch den Titel „Buch aktualisieren“ tragen und mit den Werten des Datensatzes vorbelegt sein.

![Der Bereich zum Aktualisieren eines Buchs in der Anwendung „Local Library“. Die linke Spalte enthält eine vertikale Navigationsleiste. In der rechten Spalte befindet sich ein Formular zum Aktualisieren des Buchs mit der Überschrift „Buch aktualisieren“. Es gibt fünf Eingabefelder mit den Beschriftungen „Titel“, „Autor“, „Zusammenfassung“, „ISBN“ und „Genre“. Das Genre wird über Kontrollkästchen ausgewählt. Am Ende befindet sich eine Schaltfläche mit der Beschriftung „Absenden“.](locallibary_express_book_update_noerrors.png)

> [!NOTE]
> Die anderen Seiten zum Aktualisieren von Objekten können auf ähnliche Weise implementiert werden. Das überlassen wir Ihnen als Übung.

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Delete_author_form", "Learn_web_development/Extensions/Server-side/Express_Nodejs/forms")}}
