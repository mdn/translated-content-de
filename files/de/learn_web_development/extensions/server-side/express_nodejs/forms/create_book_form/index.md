---
title: Erstellen Sie ein Buchformular
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_book_form
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Dieser Unterartikel zeigt, wie Sie eine Seite/ein Formular definieren, um `Book`-Objekte zu erstellen. Dies ist etwas komplizierter als die entsprechenden Seiten für `Author` oder `Genre`, da wir verfügbare `Author`- und `Genre`-Datensätze in unserem `Book`-Formular abrufen und anzeigen müssen.

## Importieren von Validierungs- und Reinigungsmethoden

Öffnen Sie **/controllers/bookController.js** und fügen Sie die folgende Zeile oben in der Datei hinzu (vor den Routenfunktionen):

```js
const { body, validationResult } = require("express-validator");
```

## Controller—GET-Route

Finden Sie die exportierte `book_create_get()` Controller-Methode und ersetzen Sie sie durch den folgenden Code:

```js
// Display book create form on GET.
exports.book_create_get = asyncHandler(async (req, res, next) => {
  // Get all authors and genres, which we can use for adding to our book.
  const [allAuthors, allGenres] = await Promise.all([
    Author.find().sort({ family_name: 1 }).exec(),
    Genre.find().sort({ name: 1 }).exec(),
  ]);

  res.render("book_form", {
    title: "Create Book",
    authors: allAuthors,
    genres: allGenres,
  });
});
```

Dies verwendet `await` für das Ergebnis von `Promise.all()`, um alle `Author` und `Genre` Objekte parallel zu erhalten (dieselbe Vorgehensweise wie im [Express Tutorial Teil 5: Anzeigen von Bibliotheksdaten](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data)).
Diese werden dann an die Ansicht **`book_form.pug`** als Variablen mit den Namen `authors` und `genres` übergeben (zusammen mit dem Seitentitel `title`).

## Controller—POST-Route

Finden Sie die exportierte `book_create_post()` Controller-Methode und ersetzen Sie sie durch den folgenden Code.

```js
// Handle book create on POST.
exports.book_create_post = [
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

    // Create a Book object with escaped and trimmed data.
    const book = new Book({
      title: req.body.title,
      author: req.body.author,
      summary: req.body.summary,
      isbn: req.body.isbn,
      genre: req.body.genre,
    });

    if (!errors.isEmpty()) {
      // There are errors. Render form again with sanitized values/error messages.

      // Get all authors and genres for form.
      const [allAuthors, allGenres] = await Promise.all([
        Author.find().sort({ family_name: 1 }).exec(),
        Genre.find().sort({ name: 1 }).exec(),
      ]);

      // Mark our selected genres as checked.
      for (const genre of allGenres) {
        if (book.genre.includes(genre._id)) {
          genre.checked = "true";
        }
      }
      res.render("book_form", {
        title: "Create Book",
        authors: allAuthors,
        genres: allGenres,
        book: book,
        errors: errors.array(),
      });
    } else {
      // Data from form is valid. Save book.
      await book.save();
      res.redirect(book.url);
    }
  }),
];
```

Die Struktur und das Verhalten dieses Codes sind fast genau so wie die Post-Routen-Funktionen für die [`Genre`](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_genre_form) und [`Author`](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_author_form) Formulare. Zuerst validieren und bereinigen wir die Daten. Wenn die Daten ungültig sind, zeigen wir das Formular zusammen mit den ursprünglich vom Benutzer eingegebenen Daten und einer Liste von Fehlermeldungen erneut an. Wenn die Daten gültig sind, speichern wir den neuen `Book`-Datensatz und leiten den Benutzer zur Buchdetailseite um.

Der Hauptunterschied im Vergleich zu den anderen Formularbearbeitungscodes besteht darin, wie wir die Genre-Informationen bereinigen.
Das Formular gibt ein Array von `Genre`-Elementen zurück (während es für andere Felder einen String zurückgibt).
Um die Informationen zu validieren, konvertieren wir die Anfrage zuerst in ein Array (erforderlich für den nächsten Schritt).

```js
[
  // Convert the genre to an array.
  (req, res, next) => {
    if (!Array.isArray(req.body.genre)) {
      req.body.genre =
        typeof req.body.genre === "undefined" ? [] : [req.body.genre];
    }
    next();
  },
  // …
];
```

Dann verwenden wir ein Platzhalterzeichen (`*`) im Reiniger, um jedes einzelne Genre-Array-Element zu validieren. Der folgende Code zeigt wie - dies bedeutet "bereinige jedes Element unter dem Schlüssel `genre`".

```js
[
  // …
  body("genre.*").escape(),
  // …
];
```

Der letzte Unterschied im Vergleich zu den anderen Formularbearbeitungscodes besteht darin, dass wir alle bestehenden Genres und Autoren an das Formular übergeben müssen.
Um die vom Benutzer markierten Genres zu kennzeichnen, durchlaufen wir alle Genres und fügen den `checked="true"` Parameter für diejenigen hinzu, die in unseren Post-Daten vorhanden waren (wie im folgenden Codefragment dargestellt).

```js
// Mark our selected genres as checked.
for (const genre of allGenres) {
  if (book.genre.includes(genre._id)) {
    genre.checked = "true";
  }
}
```

## Ansicht

Erstellen Sie **/views/book_form.pug** und kopieren Sie den folgenden Text hinein.

```pug
extends layout

block content
  h1= title

  form(method='POST')
    div.form-group
      label(for='title') Title:
      input#title.form-control(type='text', placeholder='Name of book' name='title' required value=(undefined===book ? '' : book.title) )
    div.form-group
      label(for='author') Author:
      select#author.form-control(name='author' required)
        option(value='') --Please select an author--
        for author in authors
          if book
            if author._id.toString()===book.author._id.toString()
              option(value=author._id selected) #{author.name}
            else
              option(value=author._id) #{author.name}
          else
            option(value=author._id) #{author.name}
    div.form-group
      label(for='summary') Summary:
      textarea#summary.form-control(placeholder='Summary' name='summary' required)= undefined===book ? '' : book.summary
    div.form-group
      label(for='isbn') ISBN:
      input#isbn.form-control(type='text', placeholder='ISBN13' name='isbn' value=(undefined===book ? '' : book.isbn) required)
    div.form-group
      label Genre:
      div
        for genre in genres
          div(style='display: inline; padding-right:10px;')
            if genre.checked
              input.checkbox-input(type='checkbox', name='genre', id=genre._id, value=genre._id, checked)
            else
              input.checkbox-input(type='checkbox', name='genre', id=genre._id, value=genre._id)
            label(for=genre._id) &nbsp;#{genre.name}
    button.btn.btn-primary(type='submit') Submit

  if errors
    ul
      for error in errors
        li!= error.msg
```

Die Struktur und das Verhalten der Ansicht sind fast genauso wie bei der **genre_form.pug**-Vorlage.

Die wichtigsten Unterschiede bestehen darin, wie wir die Auswahl-Felder implementieren: `Author` und `Genre`.

- Die Genres werden als Auswahlkästchen angezeigt, und verwenden den `checked` Wert, den wir im Controller gesetzt haben, um zu bestimmen, ob das Kästchen ausgewählt werden soll.
- Die Autoren werden als alphabetisch sortierte Einzelauswahl-Dropdown-Liste angezeigt (die Liste, die an die Vorlage weitergegeben wird, ist bereits sortiert, daher müssen wir dies nicht in der Vorlage tun).
  Wenn der Benutzer zuvor einen Buchautor ausgewählt hat (z. B. beim Korrigieren ungültiger Feldwerte nach der ersten Formularübermittlung oder beim Aktualisieren von Buchdetails), wird der Autor erneut ausgewählt, wenn das Formular angezeigt wird. Hier bestimmen wir, welchen Autor wir auswählen, indem wir die ID der aktuellen Autorenoption mit dem zuvor vom Benutzer eingegebenen Wert vergleichen (übergeben über die `book`-Variable).

> [!NOTE]
> Wenn ein Fehler im übermittelten Formular auftritt, sind die ID des neuen Buchautors und die IDs der existierenden Buchautoren vom Typ `Schema.Types.ObjectId`, wenn das Formular neu gerendert werden soll. Um sie zu vergleichen, müssen wir sie zuerst in Strings konvertieren.

## Wie sieht es aus?

Führen Sie die Anwendung aus, öffnen Sie Ihren Browser mit `http://localhost:3000/` und wählen Sie den Link _Neues Buch erstellen_. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite etwa wie der folgende Screenshot aussehen. Nachdem Sie ein gültiges Buch eingereicht haben, sollte es gespeichert sein und Sie werden zur Buchdetailseite weitergeleitet.

![Screenshot des leeren Local Library Create Book Formulars auf localhost:3000. Die Seite ist in zwei Spalten unterteilt. Die schmale linke Spalte hat eine vertikale Navigationsleiste mit 10 Links, die durch eine hellfarbene horizontale Linie in zwei Abschnitte unterteilt sind. Der obere Abschnitt führt zu bereits erstellten Daten. Die unteren Links führen zu Formularen zur Erstellung neuer Daten. Die breite rechte Spalte enthält das Bucherstellungsformular mit der Überschrift 'Create Book' und vier Eingabefeldern mit den Bezeichnungen 'Title', 'Author', 'Summary', 'ISBN' und 'Genre', gefolgt von vier Genre-Auswahlkästchen: Fantasy, Science Fiction, Französische Poesie und Action. Unten im Formular befindet sich eine Schaltfläche 'Submit'.](locallibary_express_book_create_empty.png)

## Nächste Schritte

Zurück zum [Express Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms).

Fahren Sie mit dem nächsten Unterartikel von Teil 6 fort: [Erstellen Sie ein BookInstance-Formular](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_BookInstance_form).
