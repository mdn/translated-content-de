---
title: Buchinstanz-Formular erstellen
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_BookInstance_form
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Dieser Unterartikel zeigt, wie man eine Seite/ein Formular definiert, um `BookInstance`-Objekte zu erstellen. Dies ähnelt sehr dem Formular, das wir verwendet haben, um [`Book`-Objekte zu erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_book_form).

## Validierungs- und Sanitizing-Methoden importieren

Öffnen Sie **/controllers/bookinstanceController.js** und fügen Sie die folgenden Zeilen am Anfang der Datei hinzu:

```js
const { body, validationResult } = require("express-validator");
```

## Controller—GET-Route

Am Anfang der Datei benötigen wir das _Book_-Modul (notwendig, da jede `BookInstance` mit einem bestimmten `Book` verknüpft ist).

```js
const Book = require("../models/book");
```

Finden Sie die exportierte `bookinstance_create_get()`-Controller-Methode und ersetzen Sie sie durch den folgenden Code.

```js
// Display BookInstance create form on GET.
exports.bookinstance_create_get = asyncHandler(async (req, res, next) => {
  const allBooks = await Book.find({}, "title").sort({ title: 1 }).exec();

  res.render("bookinstance_form", {
    title: "Create BookInstance",
    book_list: allBooks,
  });
});
```

Der Controller erhält eine sortierte Liste aller Bücher (`allBooks`) und übergibt sie über `book_list` an die Ansicht **`bookinstance_form.pug`** (zusammen mit einem `title`). Beachten Sie, dass noch kein Buch ausgewählt wurde, wenn wir dieses Formular zum ersten Mal anzeigen; daher übergeben wir die Variable `selected_book` nicht an `render()`. Deshalb wird `selected_book` im Template den Wert `undefined` haben.

## Controller—POST-Route

Finden Sie die exportierte `bookinstance_create_post()`-Controller-Methode und ersetzen Sie sie durch den folgenden Code.

```js
// Handle BookInstance create on POST.
exports.bookinstance_create_post = [
  // Validate and sanitize fields.
  body("book", "Book must be specified").trim().isLength({ min: 1 }).escape(),
  body("imprint", "Imprint must be specified")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("status").escape(),
  body("due_back", "Invalid date")
    .optional({ values: "falsy" })
    .isISO8601()
    .toDate(),

  // Process request after validation and sanitization.
  asyncHandler(async (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create a BookInstance object with escaped and trimmed data.
    const bookInstance = new BookInstance({
      book: req.body.book,
      imprint: req.body.imprint,
      status: req.body.status,
      due_back: req.body.due_back,
    });

    if (!errors.isEmpty()) {
      // There are errors.
      // Render form again with sanitized values and error messages.
      const allBooks = await Book.find({}, "title").sort({ title: 1 }).exec();

      res.render("bookinstance_form", {
        title: "Create BookInstance",
        book_list: allBooks,
        selected_book: bookInstance.book._id,
        errors: errors.array(),
        bookinstance: bookInstance,
      });
      return;
    } else {
      // Data from form is valid
      await bookInstance.save();
      res.redirect(bookInstance.url);
    }
  }),
];
```

Die Struktur und das Verhalten dieses Codes sind analog zum Erstellen unserer anderen Objekte. Zuerst validieren und bereinigen wir die Daten. Falls die Daten ungültig sind, wird das Formular zusammen mit den ursprünglich vom Benutzer eingegebenen Daten und einer Liste von Fehlermeldungen erneut angezeigt. Wenn die Daten gültig sind, speichern wir den neuen `BookInstance`-Datensatz und leiten den Benutzer auf die Detailseite um.

## Ansicht

Erstellen Sie **/views/bookinstance_form.pug** und kopieren Sie den untenstehenden Text hinein.

```pug
extends layout

block content
  h1=title

  form(method='POST')
    div.form-group
      label(for='book') Book:
      select#book.form-control(name='book' required)
        option(value='') --Please select a book--
        for book in book_list
          if selected_book==book._id.toString()
            option(value=book._id, selected) #{book.title}
          else
            option(value=book._id) #{book.title}

    div.form-group
      label(for='imprint') Imprint:
      input#imprint.form-control(type='text' placeholder='Publisher and date information' name='imprint' required value=(undefined===bookinstance ? '' : bookinstance.imprint) )
    div.form-group
      label(for='due_back') Date when book available:
      input#due_back.form-control(type='date' name='due_back' value=(undefined===bookinstance ? '' : bookinstance.due_back_yyyy_mm_dd))

    div.form-group
      label(for='status') Status:
      select#status.form-control(name='status' required)
        option(value='') --Please select a status--
        each val in ['Maintenance', 'Available', 'Loaned', 'Reserved']
          if undefined===bookinstance || bookinstance.status!=val
            option(value=val)= val
          else
            option(value=val selected)= val

    button.btn.btn-primary(type='submit') Submit

  if errors
    ul
      for error in errors
        li!= error.msg
```

> [!NOTE]
> Das obige Template codiert die _Status_-Werte (Maintenance, Available, usw.) fest und "merkt" sich nicht die vom Benutzer eingegebenen Werte.
> Sollten Sie dies wünschen, ziehen Sie in Betracht, die Liste erneut zu implementieren, sodass Optionsdaten vom Controller übergeben und der ausgewählte Wert beim erneuten Anzeigen des Formulars gesetzt wird.

Die Struktur und das Verhalten der Ansicht sind fast identisch mit dem **book_form.pug**-Template, daher werden wir darauf nicht im Detail eingehen. Eine bemerkenswerte Zeile ist jedoch die, in der wir das "zurückzugeben bis"-Datum auf `bookinstance.due_back_yyyy_mm_dd` setzen, wenn wir das Datumsfeld für eine vorhandene Instanz ausfüllen.

```pug
input#due_back.form-control(type='date', name='due_back' value=(undefined===bookinstance ? '' : bookinstance.due_back_yyyy_mm_dd))
```

Der Datumswert muss im Format `YYYY-MM-DD` gesetzt werden, da dies von [`<input>`-Elementen mit `type="date"`](/de/docs/Web/HTML/Reference/Elements/input/date) erwartet wird. Allerdings wird das Datum nicht in diesem Format gespeichert, daher müssen wir es konvertieren, bevor wir den Wert in der Steuerung festlegen. Die Methode `due_back_yyyy_mm_dd()` wird im nächsten Abschnitt zum `BookInstance`-Modell hinzugefügt.

## Modell—virtuelle `due_back_yyyy_mm_dd()`-Methode

Öffnen Sie die Datei, in der Sie das `BookInstanceSchema`-Modell definiert haben (**models/bookinstance.js**). Fügen Sie die unten gezeigte virtuelle Funktion `due_back_yyyy_mm_dd()` hinzu (nach der virtuellen Funktion `due_back_formatted()`):

```js
BookInstanceSchema.virtual("due_back_yyyy_mm_dd").get(function () {
  return DateTime.fromJSDate(this.due_back).toISODate(); // format 'YYYY-MM-DD'
});
```

## Wie sieht es aus?

Starten Sie die Anwendung und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wählen Sie dann den Link _Create new book instance (copy)_. Wenn alles korrekt eingerichtet ist, sollte Ihre Site ähnlich wie im folgenden Screenshot aussehen. Nachdem Sie eine gültige `BookInstance` übermittelt haben, sollte sie gespeichert werden und Sie werden zur Detailseite weitergeleitet.

![Erstellen Sie eine Buchinstanz der lokalen Bibliotheksanwendung Screenshot von localhost:3000. Die Seite ist in zwei Spalten unterteilt. Die schmale linke Spalte hat eine vertikale Navigationsleiste mit 10 Links, die in zwei Abschnitte durch eine hellfarbige horizontale Linie unterteilt sind. Der obere Abschnitt linkt zu bereits erstellten Daten. Die unteren Links führen zu Formularen zum Erstellen neuer Daten. Die breite rechte Spalte hat das Formular für die Buchinstanz mit einer 'Create BookInstance' Überschrift und vier Eingabefeldern mit den Bezeichnungen 'Book', 'Imprint', 'Date when book available' und 'Status'. Das Formular ist ausgefüllt. Es gibt einen 'Submit'-Button am unteren Ende des Formulars.](locallibary_express_bookinstance_create_empty.png)

## Nächste Schritte

- Kehren Sie zurück zum [Express Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms).
- Fahren Sie mit dem nächsten Unterartikel von Teil 6 fort: [Autor löschen Formular](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Delete_author_form).
