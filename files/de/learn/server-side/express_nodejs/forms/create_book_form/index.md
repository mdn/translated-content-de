---
title: Formular zur Erstellung eines Buches
slug: Learn/Server-side/Express_Nodejs/forms/Create_book_form
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

In diesem Unterartikel wird gezeigt, wie eine Seite/ein Formular zur Erstellung von `Book`-Objekten definiert wird. Dies ist etwas komplizierter als die entsprechenden Seiten für `Author` oder `Genre`, da wir in unserem `Book`-Formular die verfügbaren `Author`- und `Genre`-Datensätze abrufen und anzeigen müssen.

## Importieren von Validierungs- und Bereinigungsmethoden

Öffnen Sie **/controllers/bookController.js** und fügen Sie folgende Zeile am Anfang der Datei hinzu (vor den Routenfunktionen):

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

Dies verwendet `await` für das Ergebnis von `Promise.all()`, um alle `Author`- und `Genre`-Objekte parallel abzurufen (die gleiche Methode, die im [Express Tutorial Teil 5: Daten der Bibliothek anzeigen](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data) verwendet wird). Diese werden dann der Ansicht **`book_form.pug`** als Variablen namens `authors` und `genres` (zusammen mit dem Seitentitel `title`) übergeben.

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

Die Struktur und das Verhalten dieses Codes sind fast genau die gleichen wie die der POST-Routenfunktionen für die [`Genre`](/de/docs/Learn/Server-side/Express_Nodejs/forms/Create_genre_form) und [`Autor`](/de/docs/Learn/Server-side/Express_Nodejs/forms/Create_author_form) Formulare. Zuerst validieren und bereinigen wir die Daten. Wenn die Daten ungültig sind, zeigen wir das Formular erneut mit den ursprünglich vom Benutzer eingegebenen Daten und einer Liste von Fehlermeldungen an. Wenn die Daten gültig sind, speichern wir den neuen `Book`-Datensatz und leiten den Benutzer zur Buchdetailseite weiter.

Der Hauptunterschied zu den anderen Formularverarbeitungen besteht darin, wie wir die Genresinformationen bereinigen.
Das Formular gibt ein Array von `Genre`-Elementen zurück (während für andere Felder ein String zurückgegeben wird).
Um die Informationen zu validieren, konvertieren wir die Anforderung zuerst in ein Array (erforderlich für den nächsten Schritt).

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

Wir verwenden dann ein Platzhalterzeichen (`*`) im Bereiniger, um jedes der Einträge des Genres-Arrays individuell zu validieren. Der folgende Code zeigt, wie - dies übersetzt sich in "jedes Element unter dem Schlüssel `genre` bereinigen".

```js
[
  // …
  body("genre.*").escape(),
  // …
];
```

Der letzte Unterschied zu den anderen Formularverarbeitungen besteht darin, dass wir alle vorhandenen Genres und Autoren in das Formular einfügen müssen.
Um die vom Benutzer ausgewählten Genres zu kennzeichnen, durchlaufen wir alle Genres und fügen den `checked="true"` Parameter zu denen hinzu, die in unseren Post-Daten enthalten waren (wie im folgenden Codeauszug gezeigt).

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

Die Struktur und das Verhalten der Ansicht sind fast die gleichen wie bei der **genre_form.pug**-Vorlage.

Die Hauptunterschiede liegen in der Implementierung der Felder vom Typ Auswahl: `Author` und `Genre`.

- Die Menge der Genres wird als Kontrollkästchen angezeigt und verwendet den im Controller festgelegten `checked`-Wert, um zu bestimmen, ob das Kästchen ausgewählt werden soll oder nicht.
- Die Menge der Autoren wird als alphabetisch sortierte Drop-Down-Liste mit Einzelwahlmöglichkeit angezeigt (die Liste, die an die Vorlage übergeben wird, ist bereits sortiert, sodass wir dies nicht in der Vorlage tun müssen). Wenn der Benutzer zuvor einen Buchautor ausgewählt hat (d. h. beim Korrigieren ungültiger Feldwerte nach der ersten Formularübermittlung oder beim Aktualisieren von Buchdetails), wird der Autor beim Anzeigen des Formulars erneut ausgewählt. Hier bestimmen wir, welchen Autor wir auswählen, indem wir die ID der aktuellen Autorenoption mit dem Wert vergleichen, den der Benutzer zuvor eingegeben hat (übergeben in der `book`-Variable).

> [!NOTE]
> Wenn ein Fehler im übermittelten Formular auftritt, dann sind, wenn das Formular neu gerendert werden soll, die ID des neuen Buchautors und die IDs der bestehenden Buchautoren vom Typ `Schema.Types.ObjectId`. Um sie zu vergleichen, müssen wir sie zuerst in Strings umwandeln.

## Wie sieht es aus?

Führen Sie die Anwendung aus, öffnen Sie Ihren Browser unter `http://localhost:3000/` und wählen Sie den Link _Create new book_. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite ungefähr wie der folgende Screenshot aussehen. Nachdem Sie ein gültiges Buch übermittelt haben, sollte es gespeichert werden und Sie werden zur Buchdetailseite weitergeleitet.

![Screenshot des leeren lokalen Bibliotheksformulars zur Bucherstellung auf localhost:3000. Die Seite ist in zwei Spalten unterteilt. Die schmale linke Spalte hat eine vertikale Navigationsleiste mit 10 Links, die durch eine hellfarbige horizontale Linie in zwei Sektionen unterteilt sind. Der obere Abschnitt verlinkt zu bereits erstellten Daten. Die unteren Links führen zu Formularen zur Erstellung neuer Daten. Die breite rechte Spalte enthält das Bucherstellungsformular mit einer Überschrift "Create Book" und vier Eingabefeldern mit den Bezeichnungen "Title", "Author", "Summary", "ISBN" und "Genre", gefolgt von vier Genre-Kontrollkästchen: Fantasy, Science Fiction, Französische Poesie und Action. Am unteren Ende des Formulars befindet sich ein "Submit"-Button.](locallibary_express_book_create_empty.png)

## Nächste Schritte

Kehren Sie zurück zu [Express Tutorial Part 6: Mit Formularen arbeiten](/de/docs/Learn/Server-side/Express_Nodejs/forms).

Fahren Sie mit dem nächsten Unterartikel von Teil 6 fort: [Create BookInstance form](/de/docs/Learn/Server-side/Express_Nodejs/forms/Create_BookInstance_form).
