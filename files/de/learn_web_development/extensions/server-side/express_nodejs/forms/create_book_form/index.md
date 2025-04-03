---
title: Buch Erstellungsformular
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_book_form
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

Dieser Unterartikel zeigt, wie man eine Seite/ein Formular zum Erstellen von `Book`-Objekten definiert. Dies ist etwas komplizierter als die entsprechenden `Author`- oder `Genre`-Seiten, da wir verfügbare `Author`- und `Genre`-Einträge in unserem `Book`-Formular abrufen und anzeigen müssen.

## Importieren von Validierungs- und Bereinigungsmethoden

Öffnen Sie **/controllers/bookController.js** und fügen Sie die folgende Zeile am Anfang der Datei (vor den Routinenfunktionen) hinzu:

```js
const { body, validationResult } = require("express-validator");
```

## Controller—GET-Route

Finden Sie die exportierte `book_create_get()`-Controller-Methode und ersetzen Sie sie durch den folgenden Code:

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

Dies verwendet `await` auf das Ergebnis von `Promise.all()`, um alle `Author`- und `Genre`-Objekte parallel abzurufen (der gleiche Ansatz, der im [Express Tutorial Teil 5: Bibliotheksdaten anzeigen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data) verwendet wird). Diese werden dann als Variablen mit den Namen `authors` und `genres` (zusammen mit dem Seiten-`title`) an die Ansicht **`book_form.pug`** übergeben.

## Controller—POST-Route

Finden Sie die exportierte `book_create_post()`-Controller-Methode und ersetzen Sie sie durch den folgenden Code.

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

Der Aufbau und das Verhalten dieses Codes sind fast genau gleich wie bei den POST-Routenfunktionen für die [`Genre`](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_genre_form)- und [`Author`](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_author_form)-Formulare. Zuerst validieren und bereinigen wir die Daten. Wenn die Daten ungültig sind, wird das Formular zusammen mit den ursprünglich vom Benutzer eingegebenen Daten und einer Liste von Fehlermeldungen erneut angezeigt. Wenn die Daten gültig sind, speichern wir den neuen `Book`-Eintrag und leiten den Benutzer zur Buchdetailseite um.

Der Hauptunterschied im Vergleich zum anderen Formularhandlungscode besteht darin, wie wir die Genre-Informationen bereinigen.
Das Formular gibt ein Array von `Genre`-Elementen zurück (während für andere Felder ein String zurückgegeben wird).
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

Dann verwenden wir ein Jokerzeichen (`*`) im Bereinigungsprogram, um jeden Eintrag des Genre-Arrays individuell zu validieren. Der unten stehende Code zeigt, wie das gemacht wird - das bedeutet "bereinige jeden Eintrag unter dem Schlüssel `genre`".

```js
[
  // …
  body("genre.*").escape(),
  // …
];
```

Der letzte Unterschied im Vergleich zum anderen Formularhandlungscode besteht darin, dass wir alle vorhandenen Genres und Autoren an das Formular übergeben müssen. Um die Genres zu kennzeichnen, die der Benutzer ausgewählt hat, iterieren wir durch alle Genres und fügen den `checked="true"` Parameter denjenigen hinzu, die in unseren Post-Daten enthalten waren (wie im unten stehenden Codefragment reproduziert).

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

Der Aufbau und das Verhalten der Ansicht sind fast genau gleich wie bei der **genre_form.pug**-Vorlage.

Die Hauptunterschiede liegen darin, wie wir die Felder vom Typ Auswahl implementieren: `Author` und `Genre`.

- Die Menge der Genres wird als Kontrollkästchen angezeigt und verwendet den `checked`-Wert, den wir im Controller gesetzt haben, um zu bestimmen, ob das Kästchen ausgewählt sein soll oder nicht.
- Die Menge der Autoren wird als einfach auswählbare alphabetisch geordnete Dropdown-Liste angezeigt (die Liste, die an die Vorlage übergeben wird, ist bereits sortiert, daher müssen wir dies nicht in der Vorlage tun).
  Wenn der Benutzer zuvor einen Buchautor ausgewählt hat (d.h. bei der Korrektur ungültiger Feldwerte nach der ersten Formularübermittlung oder beim Aktualisieren von Buchdetails), wird der Autor beim Anzeigen des Formulars erneut ausgewählt. Hier bestimmen wir, welcher Autor ausgewählt werden soll, indem wir die ID der aktuellen Autorenoption mit dem zuvor vom Benutzer eingegebenen Wert vergleichen (übergeben über die `book`-Variable).

> [!NOTE]
> Wenn im übermittelten Formular ein Fehler vorliegt, sind beim erneuten Rendern des Formulars die ID des neuen Buchautors und die IDs der bestehenden Buchautoren vom Typ `Schema.Types.ObjectId`. Um sie zu vergleichen, müssen wir sie zuerst in Zeichenfolgen umwandeln.

## Wie sieht das aus?

Führen Sie die Anwendung aus, öffnen Sie Ihren Browser unter `http://localhost:3000/` und wählen Sie den Link _Neues Buch erstellen_ aus. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite in etwa wie auf dem folgenden Bildschirmfoto aussehen. Nachdem Sie ein gültiges Buch übermittelt haben, sollte es gespeichert werden und Sie werden zur Buchdetailseite weitergeleitet.

![Screenshot des leeren "Lokale Bibliothek Buch Erstellen“-Formulars auf localhost:3000. Die Seite ist in zwei Spalten unterteilt. Die schmale linke Spalte hat eine vertikale Navigationsleiste mit 10 Links, die durch eine hellfarbene horizontale Linie in zwei Abschnitte unterteilt sind. Der obere Abschnitt verlinkt zu bereits erstellten Daten. Die unteren Links führen zu Formularen zum Erstellen neuer Daten. Die breite rechte Spalte enthält das Buch-Erstellen-Formular mit einer Überschrift 'Buch erstellen' und vier Eingabefeldern mit den Bezeichnungen 'Titel', 'Autor', 'Zusammenfassung', 'ISBN' und 'Genre', gefolgt von vier Genre-Kontrollkästchen: Fantasy, Science-Fiction, französische Poesie und Action. Es gibt eine 'Absenden'-Schaltfläche am unteren Rand des Formulars.](locallibary_express_book_create_empty.png)

## Nächste Schritte

Zurückkehren zu [Express Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms).

Weiter zum nächsten Unterartikel von Teil 6: [Buchinstanz-Formular erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_BookInstance_form).
