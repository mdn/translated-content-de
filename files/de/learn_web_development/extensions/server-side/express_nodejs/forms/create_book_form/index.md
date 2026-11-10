---
title: Formular zum Erstellen eines Buchs
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_book_form
l10n:
  sourceCommit: d775e1249487f1a7ab9a8a031c70ca71bc892d63
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_author_form", "Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_BookInstance_form", "Learn_web_development/Extensions/Server-side/Express_Nodejs/forms")}}

Dieser Unterartikel zeigt, wie Sie eine Seite mit einem Formular zum Erstellen von `Book`-Objekten definieren. Das ist etwas aufwendiger als bei den entsprechenden Seiten für `Author` und `Genre`, da wir die verfügbaren `Author`- und `Genre`-Datensätze abrufen und im `Book`-Formular anzeigen müssen.

## Methoden zur Validierung und Bereinigung importieren

Öffnen Sie **controllers/bookController.js** und fügen Sie am Anfang der Datei (vor den Routenfunktionen) die folgende Zeile hinzu:

```js
import { body, validationResult } from "express-validator";
```

## Controller – GET-Route

Suchen Sie die exportierte Controller-Methode `bookCreateGet()` und ersetzen Sie sie durch den folgenden Code:

```js
// Display book create form on GET.
export const bookCreateGet = async (req, res, next) => {
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

Hier wird mit `await` auf das Ergebnis von `Promise.all()` gewartet, um alle `Author`- und `Genre`-Objekte parallel abzurufen (derselbe Ansatz wie in [Express-Tutorial Teil 5: Bibliotheksdaten anzeigen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data)).
Anschließend werden sie zusammen mit dem Seitentitel `title` als Variablen namens `authors` und `genres` an die View **`book_form.pug`** übergeben.

## Controller – POST-Route

Suchen Sie die exportierte Controller-Methode `bookCreatePost()` und ersetzen Sie sie durch den folgenden Code:

```js
// Handle book create on POST.
export const bookCreatePost = [
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

Aufbau und Verhalten dieses Codes entsprechen fast genau den POST-Routenfunktionen für die Formulare [`Genre`](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_genre_form) und [`Author`](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_author_form). Zuerst validieren und bereinigen wir die Daten. Sind die Daten ungültig, zeigen wir das Formular erneut an – zusammen mit den ursprünglich eingegebenen Daten und einer Liste von Fehlermeldungen. Sind die Daten gültig, speichern wir den neuen `Book`-Datensatz und leiten die Benutzer zur Detailseite des Buchs weiter.

Der wesentliche Unterschied zum Code für die anderen Formulare besteht darin, wie wir die Genre-Angaben bereinigen.
Das Formular gibt für die Genres ein Array von `Genre`-Einträgen zurück (für die anderen Felder dagegen einen String).
Damit wir die Angaben validieren können, wandeln wir die Daten aus der Anfrage zunächst in ein Array um (das ist für den nächsten Schritt erforderlich).

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

Anschließend verwenden wir im Sanitizer einen Platzhalter (`*`), um jeden Eintrag im Genre-Array einzeln zu bereinigen. Der folgende Code zeigt, wie das geht: Er bedeutet „Bereinige jeden Eintrag unter dem Schlüssel `genre`“.

```js
[
  // …
  body("genre.*").escape(),
  // …
];
```

Ein weiterer Unterschied zum Code für die anderen Formulare ist, dass wir alle vorhandenen Genres und Autoren an das Formular übergeben müssen.
Um die von den Benutzern ausgewählten Genres zu markieren, durchlaufen wir alle Genres und fügen bei den Genres, die in den übermittelten Daten enthalten sind, den Parameter `checked="true"` hinzu (wie im folgenden Codeausschnitt gezeigt).

```js
// Mark our selected genres as checked.
for (const genre of allGenres) {
  if (book.genre.includes(genre._id)) {
    genre.checked = "true";
  }
}
```

## View

Erstellen Sie **views/book_form.pug** und fügen Sie den folgenden Text ein.

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

Aufbau und Verhalten der View sind fast identisch mit denen der Vorlage **genre_form.pug**.

Die wesentlichen Unterschiede liegen in der Umsetzung der Auswahlfelder für `Author` und `Genre`.

- Die Genres werden als Kontrollkästchen angezeigt. Anhand des im Controller gesetzten Werts `checked` wird bestimmt, ob ein Kästchen ausgewählt sein soll.
- Die Autoren werden in einer alphabetisch sortierten Dropdown-Liste mit Einfachauswahl angezeigt (die an die Vorlage übergebene Liste ist bereits sortiert, sodass wir sie in der Vorlage nicht erneut sortieren müssen).
  Wenn zuvor ein Autor für das Buch ausgewählt wurde (etwa beim Korrigieren ungültiger Feldwerte nach dem ersten Absenden des Formulars oder beim Aktualisieren der Buchdetails), wird dieser Autor beim Anzeigen des Formulars erneut ausgewählt. Dazu vergleichen wir die ID der aktuellen Autorenoption mit dem zuvor eingegebenen Wert (der über die Variable `book` übergeben wird).

> [!NOTE]
> Wenn das abgesendete Formular einen Fehler enthält und deshalb erneut angezeigt werden muss, sind die ID des Autors des neuen Buchs und die Autoren-IDs der vorhandenen Bücher vom Typ `Schema.Types.ObjectId`. Um sie vergleichen zu können, müssen wir sie daher zuerst in Strings umwandeln.

## Wie sieht das aus?

Starten Sie die Anwendung, öffnen Sie `http://localhost:3000/` in Ihrem Browser und wählen Sie den Link _Create new book_. Wenn alles richtig eingerichtet ist, sollte Ihre Website ungefähr wie im folgenden Screenshot aussehen. Nachdem Sie ein gültiges Buch über das Formular erstellt haben, sollte es gespeichert werden und Sie sollten zur Detailseite des Buchs gelangen.

![Screenshot des leeren Formulars „Create Book“ der Local Library auf localhost:3000. Die Seite ist in zwei Spalten unterteilt. Die schmale linke Spalte enthält eine vertikale Navigationsleiste mit zehn Links, die durch eine helle horizontale Linie in zwei Bereiche getrennt sind. Die Links im oberen Bereich führen zu bereits erstellten Daten, die unteren zu Formularen zum Erstellen neuer Daten. Die breite rechte Spalte enthält das Formular mit der Überschrift „Create Book“ und den Feldern „Title“, „Author“, „Summary“, „ISBN“ und „Genre“. Darunter folgen vier Genre-Kontrollkästchen: „fantasy“, „science fiction“, „french poetry“ und „action“. Am unteren Ende des Formulars befindet sich eine Schaltfläche „Submit“.](locallibary_express_book_create_empty.png)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_author_form", "Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_BookInstance_form", "Learn_web_development/Extensions/Server-side/Express_Nodejs/forms")}}
