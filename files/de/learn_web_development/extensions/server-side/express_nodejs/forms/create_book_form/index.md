---
title: Formular zum Erstellen eines Buches
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_book_form
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

Dieser Unterartikel zeigt, wie Sie eine Seite/ein Formular zum Erstellen von `Book`-Objekten definieren. Dies ist etwas komplexer als die entsprechenden Seiten für `Author` oder `Genre`, da wir die verfügbaren `Author`- und `Genre`-Einträge in unserem `Book`-Formular abrufen und anzeigen müssen.

## Importieren von Validierungs- und Bereinigungsmethoden

Öffnen Sie **/controllers/bookController.js** und fügen Sie die folgende Zeile am oberen Ende der Datei hinzu (vor den Routenfunktionen):

```js
const { body, validationResult } = require("express-validator");
```

## Controller—GET-Route

Finden Sie die exportierte `book_create_get()`-Controllermethode und ersetzen Sie sie durch den folgenden Code:

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

Dabei wird `await` auf das Ergebnis von `Promise.all()` verwendet, um alle `Author`- und `Genre`-Objekte parallel abzurufen (dieselbe Methode, die im [Express Tutorial Teil 5: Anzeigen von Bibliotheksdaten](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data) verwendet wird).
Diese werden dann als Variablen mit den Namen `authors` und `genres` (zusammen mit dem Seiten-`title`) an die Ansicht **`book_form.pug`** übergeben.

## Controller—POST-Route

Finden Sie die exportierte `book_create_post()`-Controllermethode und ersetzen Sie sie durch den folgenden Code.

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
        book,
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

Die Struktur und das Verhalten dieses Codes sind fast genau gleich wie die der POST-Routenfunktionen der Formulare [`Genre`](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_genre_form) und [`Author`](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_author_form). Zunächst validieren und bereinigen wir die Daten. Wenn die Daten ungültig sind, zeigen wir das Formular erneut zusammen mit den ursprünglich vom Benutzer eingegebenen Daten und einer Liste von Fehlermeldungen an. Wenn die Daten gültig sind, speichern wir den neuen `Book`-Datensatz und leiten den Benutzer zur Buchdetailseite weiter.

Der Hauptunterschied im Vergleich zu anderem Code zur Formularverarbeitung besteht darin, wie wir die Genreinformationen bereinigen.
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

Dann verwenden wir ein Wildcard (`*`) im Bereinigungsprogramm, um jeden einzelnen Eintrag des Genrearrays zu validieren. Der folgende Code zeigt, wie – das bedeutet „Bereinigen Sie jedes Element unter dem Schlüssel `genre`“.

```js
[
  // …
  body("genre.*").escape(),
  // …
];
```

Der finale Unterschied im Vergleich zu anderem Code zur Formularverarbeitung besteht darin, dass wir alle vorhandenen Genres und Autoren an das Formular übergeben müssen.
Um die vom Benutzer angekreuzten Genres zu markieren, durchlaufen wir alle Genres und fügen das Parameter `checked="true"` bei denen hinzu, die in unseren POST-Daten enthalten waren (wie im folgenden Codefragment dargestellt).

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

Die Struktur und das Verhalten der Ansicht ähneln stark dem der **genre_form.pug**-Vorlage.

Die Hauptunterschiede liegen darin, wie wir die Auswahlfelder implementieren: `Author` und `Genre`.

- Die Genres werden als Kontrollkästchen angezeigt und verwenden den im Controller gesetzten `checked`-Wert, um zu bestimmen, ob das Kästchen ausgewählt werden soll oder nicht.
- Die Autoren werden als alphabetisch geordnete Dropdownliste für Einzelauswahl angezeigt (die Liste, die an die Vorlage übergeben wird, ist bereits sortiert, sodass wir dies in der Vorlage nicht tun müssen).
  Wenn der Benutzer zuvor einen Buchautor ausgewählt hat (z.B. beim Korrigieren ungültiger Feldwerte nach der ersten Formularübermittlung oder beim Aktualisieren von Buchdetails), wird der Autor beim Anzeigen des Formulars erneut ausgewählt. Hier bestimmen wir, welchen Autor wir auswählen, indem wir die ID der aktuellen Autorenoption mit dem zuvor vom Benutzer eingegebenen Wert vergleichen (übergeben über die `book`-Variable).

> [!NOTE]
> Wenn ein Fehler im übermittelten Formular vorliegt, sind, wenn das Formular erneut gerendert werden soll, die ID des neuen Buchautors und die IDs der Autoren bestehender Bücher vom Typ `Schema.Types.ObjectId`. Daher müssen wir sie zuerst in Strings konvertieren, um sie vergleichen zu können.

## Wie sieht es aus?

Führen Sie die Anwendung aus, öffnen Sie Ihren Browser unter `http://localhost:3000/`, und wählen Sie dann den Link _Create new book_. Wenn alles richtig eingerichtet ist, sollte Ihre Seite in etwa wie der folgende Screenshot aussehen. Nachdem Sie ein gültiges Buch eingereicht haben, wird es gespeichert und Sie werden zur Buchdetailseite weitergeleitet.

![Screenshot des leeren Lokalen Bibliotheks-Formulars zum Erstellen eines Buches auf localhost:3000. Die Seite ist in zwei Spalten unterteilt. Die schmale linke Spalte hat eine vertikale Navigationsleiste mit 10 Links, die in zwei Abschnitte durch eine hellfarbige horizontale Linie getrennt sind. Der obere Abschnitt enthält Links zu bereits erstellten Daten. Die unteren Links führen zu Formularen zur Erstellung neuer Daten. Die breite rechte Spalte enthält das Bucherstellungsformular mit einer Überschrift 'Create Book' und vier Eingabefeldern mit den Bezeichnungen 'Title', 'Author', 'Summary', 'ISBN' und 'Genre' gefolgt von vier Genre-Kontrollkästchen: Fantasy, Science Fiction, französische Poesie und Action. Am unteren Rand des Formulars befindet sich ein 'Submit'-Button.](locallibary_express_book_create_empty.png)

## Nächste Schritte

Kehren Sie zurück zu [Express Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms).

Fahren Sie mit dem nächsten Unterartikel von Teil 6 fort: [BookInstance-Formular erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_BookInstance_form).
