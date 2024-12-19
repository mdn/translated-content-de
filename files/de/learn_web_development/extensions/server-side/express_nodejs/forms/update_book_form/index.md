---
title: Aktualisierungsformular für Bücher
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Update_Book_form
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Dieser letzte Unterartikel zeigt, wie Sie eine Seite definieren, um `Book`-Objekte zu aktualisieren. Die Formularbearbeitung beim Aktualisieren eines Buches ähnelt der bei der Erstellung eines Buches, außer dass Sie das Formular in der `GET`-Route mit Werten aus der Datenbank ausfüllen müssen.

## Controller—GET-Route

Öffnen Sie **/controllers/bookController.js**. Finden Sie die exportierte `book_update_get()` Controller-Methode und ersetzen Sie diese durch den folgenden Code.

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

Der Controller erhält die ID des zu aktualisierenden `Book` aus dem URL-Parameter (`req.params.id`).
Es wird auf das Versprechen, das von `Promise.all()` zurückgegeben wird, gewartet (`await`), um den angegebenen `Book`-Datensatz (unter Einbeziehung seiner Genre- und Autorfelder) sowie alle `Author`- und `Genre`-Datensätze zu erhalten.

Wenn die Operationen abgeschlossen sind, überprüft die Funktion, ob Bücher gefunden wurden. Falls keine gefunden wurden, sendet sie einen Fehler "Book not found" an die Fehlerbehandlungsmiddleware.

> [!NOTE]
> Keine Büchergebnisse zu finden, ist **keine Fehler** bei einer Suche – aber es ist ein Fehler für diese Anwendung, da wir wissen, dass es einen passenden Buchdatensatz geben muss! Der obige Code vergleicht im Callback (`book===null`), aber es könnte ebenso gut die Methode [orFail()](<https://mongoosejs.com/docs/api/query.html#Query.prototype.orFail()>) an die Abfrage gekettet haben.

Wir markieren dann die derzeit ausgewählten Genres als ausgewählt und rendern die **book_form.pug**-Ansicht, wobei Variablen für `title`, `book`, alle `authors` und alle `genres` übergeben werden.

## Controller—POST-Route

Finden Sie die exportierte `book_update_post()` Controller-Methode und ersetzen Sie diese durch den folgenden Code.

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

Dies ist der POST-Route, die verwendet wird, wenn ein `Book` erstellt wird, sehr ähnlich.
Zuerst validieren und bereinigen wir die Buchdaten aus dem Formular und verwenden diese, um ein neues `Book`-Objekt zu erstellen (indem wir seinen `_id`-Wert auf die ID des zu aktualisierenden Objekts setzen). Wenn beim Validieren der Daten Fehler auftreten, rendern wir das Formular erneut und zeigen zusätzlich die vom Benutzer eingegebenen Daten, die Fehler und Listen von Genres und Autoren an. Wenn keine Fehler auftreten, rufen wir `Book.findByIdAndUpdate()` auf, um das `Book`-Dokument zu aktualisieren, und leiten dann zur Detailseite weiter.

## Ansicht

Es ist nicht nötig, die Ansicht für das Formular (**/views/book_form.pug**) zu ändern, da dieselbe Vorlage sowohl für das Erstellen als auch für das Aktualisieren des Buches funktioniert.

## Einen Aktualisierungsbutton hinzufügen

Öffnen Sie die **book_detail.pug**-Ansicht und stellen Sie sicher, dass sich am unteren Rand der Seite Links sowohl zum Löschen als auch zum Aktualisieren von Büchern befinden, wie unten gezeigt.

```pug
  hr
  p
    a(href=book.url+'/delete') Delete Book
  p
    a(href=book.url+'/update') Update Book
```

Sie sollten nun in der Lage sein, Bücher von der _Book detail_-Seite aus zu aktualisieren.

## Wie sieht es aus?

Führen Sie die Anwendung aus, öffnen Sie Ihren Browser unter `http://localhost:3000/`, wählen Sie den _Alle Bücher_-Link und dann ein bestimmtes Buch. Wählen Sie schließlich den _Buch aktualisieren_-Link.

Das Formular sollte genauso aussehen wie die _Buch erstellen_-Seite, nur mit einem Titel "Buch aktualisieren" und vorab gefüllten Datensätzen.

![Der Abschnitt zum Aktualisieren von Büchern der Lokalen Bibliotheksanwendung. Die linke Spalte hat eine vertikale Navigationsleiste. Die rechte Spalte hat ein Formular zum Aktualisieren des Buches mit einer Überschrift, die 'Buch aktualisieren' lautet. Es gibt fünf Eingabefelder mit den Bezeichnungen Title, Author, Summary, ISBN, Genre. Genre ist ein Kontrollkästchen-Optionsfeld. Am Ende gibt es eine Schaltfläche mit der Beschriftung 'Abschicken'.](locallibary_express_book_update_noerrors.png)

> [!NOTE]
> Die anderen Seiten zum Aktualisieren von Objekten können auf ähnliche Weise implementiert werden. Wir haben das als Herausforderung belassen.

## Nächste Schritte

- Zurück zu [Express Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms).
