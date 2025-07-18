---
title: Bucherstellungsformular
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_book_form
l10n:
  sourceCommit: 8443cb34d9944d8eb8e2c5add598bec26ed6d21f
---

Dieser Unterartikel zeigt, wie Sie eine Seite/ein Formular definieren, um `Book`-Objekte zu erstellen. Dies ist etwas komplizierter als die entsprechenden Seiten für `Author` oder `Genre`, da wir in unserem `Book`-Formular verfügbare `Author`- und `Genre`-Datensätze abrufen und anzeigen müssen.

## Importieren von Validierungs- und Bereinigungsmethoden

Öffnen Sie **/controllers/bookController.js** und fügen Sie die folgende Zeile am Anfang der Datei hinzu (vor den Routenfunktionen):

```js
const { body, validationResult } = require("express-validator");
```

## Controller—GET-Route

Suchen Sie die exportierte `book_create_get()`-Controller-Methode und ersetzen Sie sie durch den folgenden Code:

```js
// Display book create form on GET.
exports.book_create_get = async (req, res, next) => {
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
};
```

Dies verwendet `await` auf das Ergebnis von `Promise.all()`, um alle `Author`- und `Genre`-Objekte parallel abzurufen (dieselbe Vorgehensweise wie im [Express Tutorial Teil 5: Bibliotheksdaten anzeigen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data)).
Diese werden dann als Variablen namens `authors` und `genres` (zusammen mit dem Seiten-`title`) an die Ansicht **`book_form.pug`** übergeben.

## Controller—POST-Route

Suchen Sie die exportierte `book_create_post()`-Controller-Methode und ersetzen Sie sie durch den folgenden Code.

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

  async (req, res, next) => {
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
        book,
        errors: errors.array(),
      });
      return;
    }

    // Data from form is valid. Save book.
    await book.save();
    res.redirect(book.url);
  },
];
```

Die Struktur und das Verhalten dieses Codes sind fast identisch mit den POST-Routenfunktionen für die [`Genre`](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_genre_form) und [`Author`](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_author_form)-Formulare. Zuerst validieren und bereinigen wir die Daten. Sind die Daten ungültig, zeigen wir das Formular zusammen mit den ursprünglich vom Benutzer eingegebenen Daten und einer Liste von Fehlermeldungen erneut an. Sind die Daten gültig, speichern wir den neuen `Book`-Datensatz und leiten den Benutzer zur Detailseite des Buches weiter.

Der Hauptunterschied im Vergleich zu anderen Formularverarbeitungscodes besteht darin, wie wir die Genre-Informationen bereinigen.
Das Formular gibt ein Array von `Genre`-Elementen zurück (während es für andere Felder einen String zurückgibt).
Um die Informationen zu validieren, konvertieren wir die Anfrage zunächst in ein Array (erforderlich für den nächsten Schritt).

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

Dann verwenden wir ein Wildcard (`*`) im Sanitizer, um jeden Eintrag des Genre-Arrays einzeln zu validieren. Der folgende Code zeigt, wie - dies übersetzt sich in "bereinige jedes Element unter dem Schlüssel `genre`".

```js
[
  // …
  body("genre.*").escape(),
  // …
];
```

Der letzte Unterschied im Vergleich zu anderen Formularverarbeitungscodes besteht darin, dass wir alle vorhandenen Genres und Autoren an das Formular übergeben müssen.
Um die vom Benutzer ausgewählten Genres zu markieren, iterieren wir durch alle Genres und fügen das `checked="true"`-Attribut zu denen hinzu, die in unseren POST-Daten enthalten waren (wie im nachstehenden Codefragment reproduziert).

```js
// Mark our selected genres as checked.
for (const genre of allGenres) {
  if (book.genre.includes(genre._id)) {
    genre.checked = "true";
  }
}
```

## Ansicht

Erstellen Sie **/views/book_form.pug** und kopieren Sie den untenstehenden Text hinein.

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

Die Struktur und das Verhalten der Ansicht sind fast identisch mit der **genre_form.pug**-Vorlage.

Die Hauptunterschiede liegen in der Implementierung der Auswahlfelder: `Author` und `Genre`.

- Die Genres werden als Kontrollkästchen angezeigt und verwenden den im Controller festgelegten `checked`-Wert, um zu bestimmen, ob das Kästchen ausgewählt werden soll oder nicht.
- Die Autoren werden als alphabetisch sortierte Einzelauswahl-Dropdown-Liste angezeigt (die an die Vorlage übergebene Liste ist bereits sortiert, daher müssen wir dies nicht in der Vorlage tun).
  Hat der Benutzer bereits einen Buchautor ausgewählt (d.h. beim Korrigieren ungültiger Feldwerte nach der ersten Formularübermittlung oder beim Aktualisieren von Buchdetails), wird der Autor erneut ausgewählt, wenn das Formular angezeigt wird. Hier bestimmen wir den auszuwählenden Autor, indem wir die ID der aktuellen Autorenoption mit dem vom Benutzer zuvor eingegebenen Wert vergleichen (übergeben über die `book`-Variable).

> [!NOTE]
> Wenn im übermittelten Formular ein Fehler auftritt, dann sind beim erneuten Rendern des Formulars die ID des neuen Buchautors und die IDs der bestehenden Buchen vom Typ `Schema.Types.ObjectId`. Um sie zu vergleichen, müssen wir sie zuerst in Strings umwandeln.

## Wie sieht das aus?

Führen Sie die Anwendung aus, öffnen Sie Ihren Browser unter `http://localhost:3000/` und wählen Sie den Link _Create new book_ aus. Wenn alles korrekt eingerichtet ist, sollte Ihre Webseite dem folgenden Screenshot ähneln. Sobald Sie ein gültiges Buch einreichen, sollte es gespeichert werden und Sie werden zur Buchdetailseite weitergeleitet.

![Screenshot des leeren lokalen Bibliotheksformulars zum Erstellen eines Buches auf localhost:3000. Die Seite ist in zwei Spalten unterteilt. Die schmale linke Spalte hat eine vertikale Navigationsleiste mit 10 Links, die durch eine helle horizontale Linie in zwei Abschnitte unterteilt ist. Der obere Abschnitt verlinkt zu bereits erstellten Daten. Die unteren Links führen zu Formularen zur Erstellung neuer Daten. Die breite rechte Spalte enthält das Formular zur Bucherstellung mit einer Überschrift 'Create Book' und vier Eingabefeldern mit den Bezeichnungen 'Title', 'Author', 'Summary', 'ISBN' und 'Genre', gefolgt von vier Genre-Auswahlkästchen: Fantasy, Science Fiction, Französische Poesie und Action. Unten im Formular befindet sich ein 'Submit'-Button.](locallibary_express_book_create_empty.png)

## Nächste Schritte

Kehren Sie zurück zu [Express Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms).

Fahren Sie mit dem nächsten Unterartikel von Teil 6 fort: [Formular für die Erstellung von Buchinstanzen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_BookInstance_form).
