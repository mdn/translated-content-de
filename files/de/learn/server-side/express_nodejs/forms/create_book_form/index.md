---
title: Erstellen eines Buchformulars
slug: Learn/Server-side/Express_Nodejs/forms/Create_book_form
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

Dieser Unterartikel zeigt, wie Sie eine Seite/ein Formular definieren, um `Book`-Objekte zu erstellen. Dies ist etwas komplizierter als die entsprechenden Seiten für `Author` oder `Genre`, da wir die verfügbaren `Author`- und `Genre`-Einträge in unserem `Book`-Formular abrufen und anzeigen müssen.

## Methoden zur Validierung und Bereinigung importieren

Öffnen Sie **/controllers/bookController.js**, und fügen Sie die folgende Zeile am Anfang der Datei (vor den Routenfunktionen) hinzu:

```js
const { body, validationResult } = require("express-validator");
```

## Controller—get Route

Suchen Sie die exportierte Methode `book_create_get()` und ersetzen Sie sie durch den folgenden Code:

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

Dies verwendet `await` für das Ergebnis von `Promise.all()`, um alle `Author`- und `Genre`-Objekte parallel abzurufen (der gleiche Ansatz wird im [Express Tutorial Teil 5: Bibliotheksdaten anzeigen](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data) verwendet).
Diese werden dann an die Ansicht **`book_form.pug`** als Variablen namens `authors` und `genres` übergeben (zusammen mit dem Seiten-`title`).

## Controller—post Route

Suchen Sie die exportierte Methode `book_create_post()` und ersetzen Sie sie durch den folgenden Code.

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

Die Struktur und das Verhalten dieses Codes sind fast genau gleich wie die der Post-Routenfunktionen für die [`Genre`](/de/docs/Learn/Server-side/Express_Nodejs/forms/Create_genre_form) und [`Author`](/de/docs/Learn/Server-side/Express_Nodejs/forms/Create_author_form) Formulare. Zuerst validieren und bereinigen wir die Daten. Wenn die Daten ungültig sind, zeigen wir das Formular erneut an zusammen mit den Daten, die ursprünglich vom Benutzer eingegeben wurden, und einer Liste von Fehlermeldungen. Wenn die Daten gültig sind, speichern wir den neuen `Book`-Eintrag und leiten den Benutzer zur Buchdetailseite weiter.

Der Hauptunterschied im Vergleich zu den anderen Formularverarbeitungscodes ist, wie wir die Genre-Informationen bereinigen.
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

Dann verwenden wir ein Platzhalterzeichen (`*`) im Bereinigungsprogramm, um jeden Eintrag im Genre-Array einzeln zu validieren. Der untenstehende Code zeigt, wie das aussieht - dies bedeutet "jeden Artikel unter dem Schlüssel `genre` bereinigen".

```js
[
  // …
  body("genre.*").escape(),
  // …
];
```

Der letzte Unterschied im Vergleich zu den anderen Formularverarbeitungscodes besteht darin, dass wir alle vorhandenen Genres und Autoren an das Formular übergeben müssen.
Um die Genres zu markieren, die vom Benutzer ausgewählt wurden, durchlaufen wir alle Genres und fügen das `checked="true"`-Attribut zu denen hinzu, die in unseren Post-Daten waren (wie im folgenden Codefragment reproduziert).

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

Die Struktur und das Verhalten der Ansicht sind fast gleich wie bei der Vorlage **genre_form.pug**.

Die Hauptunterschiede bestehen darin, wie wir die Felder vom Typ Auswahl implementieren: `Author` und `Genre`.

- Die Gruppe der Genres wird als Kontrollkästchen angezeigt, und der im Controller gesetzte `checked`-Wert wird verwendet, um zu bestimmen, ob das Kästchen ausgewählt sein soll oder nicht.
- Die Gruppe der Autoren wird als alphabetisch geordnete Einzelauswahl-Dropdown-Liste angezeigt (die Liste, die an die Vorlage übergeben wird, ist bereits sortiert, sodass wir das in der Vorlage nicht tun müssen).
  Wenn der Benutzer zuvor einen Buchautor ausgewählt hat (d. h. beim Korrigieren ungültiger Feldwerte nach der ersten Formularübermittlung oder beim Aktualisieren der Buchdetails), wird der Autor erneut ausgewählt, wenn das Formular angezeigt wird. Hier bestimmen wir, welcher Autor ausgewählt wird, indem wir die ID der aktuellen Autorenoption mit dem vom Benutzer zuvor eingegebenen Wert vergleichen (über die Variable `book` übergeben).

> [!NOTE]
> Wenn ein Fehler im übermittelten Formular auftritt, dann, wenn das Formular neu gerendert werden soll, sind die ID des neuen Buchautors und die bestehenden IDs der Buchautoren vom Typ `Schema.Types.ObjectId`. Also müssen wir sie zuerst in Strings konvertieren, um sie zu vergleichen.

## Wie sieht das aus?

Führen Sie die Anwendung aus, öffnen Sie Ihren Browser mit `http://localhost:3000/`, und wählen Sie den Link _Create new book_ aus. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite etwa wie der folgende Screenshot aussehen. Nachdem Sie ein gültiges Buch eingereicht haben, sollte es gespeichert werden und Sie werden zur Buchdetailseite weitergeleitet.

![Screenshot des leeren Formulars zur Erstellung eines Buches der lokalen Bibliothek auf localhost:3000. Die Seite ist in zwei Spalten unterteilt. Die schmale linke Spalte hat eine vertikale Navigationsleiste mit 10 Links, die durch eine helle horizontale Linie in zwei Abschnitte unterteilt sind. Der obere Abschnitt verlinkt zu bereits erstellten Daten. Die unteren Links führen zu Formularen für neue Daten. Die breite rechte Spalte enthält das Formular zur Erstellung eines Buches mit einer Überschrift 'Create Book' und vier Eingabefeldern mit den Beschriftungen 'Title', 'Author', 'Summary', 'ISBN' und 'Genre', gefolgt von vier Genre-Kontrollkästchen: Fantasy, Science Fiction, französische Poesie und Action. Unten im Formular befindet sich ein 'Submit'-Button.](locallibary_express_book_create_empty.png)

## Nächste Schritte

Kehren Sie zurück zu [Express Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn/Server-side/Express_Nodejs/forms).

Fahren Sie mit dem nächsten Unterartikel von Teil 6 fort: [Erstellen eines BookInstance-Formulars](/de/docs/Learn/Server-side/Express_Nodejs/forms/Create_BookInstance_form).
