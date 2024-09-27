---
title: Erstellen Sie das Buchformular
slug: Learn/Server-side/Express_Nodejs/forms/Create_book_form
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

Dieser Unterartikel zeigt, wie Sie eine Seite/ein Formular zum Erstellen von `Book`-Objekten definieren. Dies ist etwas komplexer als die entsprechenden `Author`- oder `Genre`-Seiten, da wir verfügbare `Author`- und `Genre`-Datensätze in unserem `Book`-Formular abrufen und anzeigen müssen.

## Importieren von Validierungs- und Bereinigungsmethoden

Öffnen Sie **/controllers/bookController.js** und fügen Sie die folgende Zeile am Anfang der Datei (vor den Routenfunktionen) hinzu:

```js
const { body, validationResult } = require("express-validator");
```

## Controller—GET-Route

Suchen Sie die exportierte `book_create_get()` Controller-Methode und ersetzen Sie sie durch den folgenden Code:

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

Dies verwendet `await` für das Ergebnis von `Promise.all()`, um alle `Author`- und `Genre`-Objekte parallel abzurufen (die gleiche Vorgehensweise wird im [Express Tutorial Teil 5: Anzeigen von Bibliotheksdaten](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data) verwendet).
Diese werden dann als Variablen namens `authors` und `genres` (zusammen mit dem Seiten-`title`) an die Ansicht **`book_form.pug`** übergeben.

## Controller—POST-Route

Suchen Sie die exportierte `book_create_post()` Controller-Methode und ersetzen Sie sie durch den folgenden Code.

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

Die Struktur und das Verhalten dieses Codes sind fast identisch mit den POST-Routenfunktionen der Formulare [`Genre`](/de/docs/Learn/Server-side/Express_Nodejs/forms/Create_genre_form) und [`Author`](/de/docs/Learn/Server-side/Express_Nodejs/forms/Create_author_form). Zuerst validieren und bereinigen wir die Daten. Wenn die Daten ungültig sind, zeigen wir das Formular erneut zusammen mit den ursprünglich vom Benutzer eingegebenen Daten und einer Liste von Fehlermeldungen an. Wenn die Daten gültig sind, speichern wir den neuen `Book`-Datensatz und leiten den Benutzer zur Buchdetailseite um.

Der Hauptunterschied im Vergleich zum anderen Formularbearbeitungscode ist, wie wir die Genreinformationen bereinigen.
Das Formular gibt ein Array von `Genre`-Elementen zurück (während für andere Felder ein String zurückgegeben wird).
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

Wir verwenden dann ein Platzhalterzeichen (`*`) im Bereinigungsprogramm, um jedes Element des Genre-Arrays individuell zu validieren. Der folgende Code zeigt, wie - das bedeutet "bereinigen Sie jedes Element unter dem Schlüssel `genre`".

```js
[
  // …
  body("genre.*").escape(),
  // …
];
```

Der letzte Unterschied im Vergleich zum anderen Formularbearbeitungscode besteht darin, dass wir alle vorhandenen Genres und Autoren an das Formular übergeben müssen.
Um die Genres zu markieren, die vom Benutzer ausgewählt wurden, durchlaufen wir alle Genres und fügen den `checked="true"`-Parameter denen hinzu, die in unseren POST-Daten enthalten waren (wie im unten wiedergegebenen Codefragment).

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

Die Struktur und das Verhalten der Ansicht sind fast gleich wie beim **genre_form.pug**-Template.

Die Hauptunterschiede bestehen darin, wie wir die Auswahlfelder umsetzen: `Author` und `Genre`.

- Die Genres werden als Kontrollkästchen angezeigt und verwenden den `checked`-Wert, den wir im Controller festgelegt haben, um zu bestimmen, ob das Kästchen ausgewählt werden sollte oder nicht.
- Die Autoren werden als alphabetisch geordnete Einzelauswahl-Dropdown-Liste angezeigt (die an das Template übergebene Liste ist bereits sortiert, sodass wir dies nicht im Template tun müssen).
  Wenn der Benutzer zuvor einen Buchautor ausgewählt hat (z.B. beim Korrigieren ungültiger Feldwerte nach der ursprünglichen Formulareinreichung oder beim Aktualisieren von Buchdetails), wird der Autor erneut ausgewählt, wenn das Formular angezeigt wird. Hier bestimmen wir, welchen Autor wir auswählen, indem wir die ID der aktuellen Autorenoption mit dem Wert vergleichen, der zuvor vom Benutzer eingegeben wurde (über die `book`-Variable übergeben).

> [!NOTE]
> Wenn ein Fehler im übermittelten Formular vorliegt und das Formular erneut gerendert werden soll, sind die ID des neuen Buchautors und die IDs der vorhandenen Buchautoren vom Typ `Schema.Types.ObjectId`. Um sie zu vergleichen, müssen wir sie zuerst in Strings umwandeln.

## Wie sieht es aus?

Starten Sie die Anwendung, öffnen Sie Ihren Browser unter `http://localhost:3000/` und wählen Sie den Link _Create new book_ aus. Wenn alles korrekt eingerichtet ist, sollte Ihre Website ungefähr wie der folgende Screenshot aussehen. Nachdem Sie ein gültiges Buch eingereicht haben, sollte es gespeichert werden und Sie werden zur Buchdetailseite weitergeleitet.

![Screenshot des leeren Bucherstellungsformulars der lokalen Bibliothek auf localhost:3000. Die Seite ist in zwei Spalten unterteilt. Die schmale linke Spalte hat eine vertikale Navigationsleiste mit 10 Links, die durch eine hellfarbene horizontale Linie in zwei Abschnitte unterteilt sind. Der obere Abschnitt verlinkt zu bereits erstellten Daten. Die unteren Links führen zu Formularen zum Erstellen neuer Daten. Die breite rechte Spalte enthält das Bucherstellungsformular mit einer Überschrift 'Create Book' und vier Eingabefeldern mit den Bezeichnungen 'Title', 'Author', 'Summary', 'ISBN' und 'Genre', gefolgt von vier Genre-Kontrollkästchen: Fantasy, Science Fiction, französische Poesie und Action. Am unteren Ende des Formulars befindet sich eine 'Submit'-Schaltfläche.](locallibary_express_book_create_empty.png)

## Nächste Schritte

Kehren Sie zurück zu [Express Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn/Server-side/Express_Nodejs/forms).

Fahren Sie mit dem nächsten Unterartikel von Teil 6 fort: [Create BookInstance form](/de/docs/Learn/Server-side/Express_Nodejs/forms/Create_BookInstance_form).
