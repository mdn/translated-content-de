---
title: Buchinstanz erstellen Formular
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_BookInstance_form
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

Dieser Unterartikel zeigt, wie Sie eine Seite/ein Formular definieren, um `BookInstance` Objekte zu erstellen. Dies ähnelt sehr dem Formular, das wir zum [Erstellen von `Book` Objekten](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_book_form) verwendet haben.

## Validierungs- und Säuberungsmethoden importieren

Öffnen Sie **/controllers/bookinstanceController.js** und fügen Sie die folgenden Zeilen am Anfang der Datei hinzu:

```js
const { body, validationResult } = require("express-validator");
```

## Controller—GET-Route

Am Anfang der Datei benötigen Sie das _Book_ Modul (erforderlich, da jede `BookInstance` mit einem bestimmten `Book` verknüpft ist).

```js
const Book = require("../models/book");
```

Finden Sie die exportierte `bookinstance_create_get()` Controller-Methode und ersetzen Sie sie durch den folgenden Code.

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

Der Controller erhält eine sortierte Liste aller Bücher (`allBooks`) und übergibt sie über `book_list` an die Ansicht **`bookinstance_form.pug`** (zusammen mit einem `title`). Beachten Sie, dass kein Buch ausgewählt wurde, wenn wir dieses Formular zum ersten Mal anzeigen, also übergeben wir die Variable `selected_book` nicht an `render()`. Aus diesem Grund hat `selected_book` im Template den Wert `undefined`.

## Controller—POST-Route

Finden Sie die exportierte `bookinstance_create_post()` Controller-Methode und ersetzen Sie sie durch den folgenden Code.

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
    }
    // Data from form is valid
    await bookInstance.save();
    res.redirect(bookInstance.url);
  }),
];
```

Die Struktur und das Verhalten dieses Codes ist dasselbe wie beim Erstellen unserer anderen Objekte. Zuerst validieren und säubern wir die Daten. Wenn die Daten ungültig sind, zeigen wir das Formular erneut zusammen mit den ursprünglich vom Benutzer eingegebenen Daten und einer Liste von Fehlermeldungen an. Wenn die Daten gültig sind, speichern wir den neuen `BookInstance` Datensatz und leiten den Benutzer zur Detailseite weiter.

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
> Das obige Template kodiert die _Status_ Werte (Wartung, Verfügbar, etc.) fest und "erinnert" sich nicht an die vom Benutzer eingegebenen Werte. Sollten Sie dies wünschen, überlegen Sie, die Liste neu zu implementieren, indem Sie Optionsdaten vom Controller übergeben und den ausgewählten Wert festlegen, wenn das Formular erneut angezeigt wird.

Die Struktur und das Verhalten der Ansicht sind fast identisch mit dem **book_form.pug** Template, daher werden wir es nicht im Detail durchgehen. Das einzige, was zu beachten ist, ist die Zeile, in der wir das Datum "zurückgeben" auf `bookinstance.due_back_yyyy_mm_dd` setzen, wenn wir das Datumseingabefeld für eine bestehende Instanz ausfüllen.

```pug
input#due_back.form-control(type='date', name='due_back' value=(undefined===bookinstance ? '' : bookinstance.due_back_yyyy_mm_dd))
```

Der Datumswert muss im Format `YYYY-MM-DD` gesetzt werden, da dies von [`<input>` Elementen mit `type="date"`](/de/docs/Web/HTML/Reference/Elements/input/date) erwartet wird. Allerdings wird das Datum nicht in diesem Format gespeichert, daher müssen wir es vor dem Setzen des Wertes im Steuerelement konvertieren. Die Methode `due_back_yyyy_mm_dd()` wird im nächsten Abschnitt zum `BookInstance` Modell hinzugefügt.

## Modell—virtuelle Methode `due_back_yyyy_mm_dd()`

Öffnen Sie die Datei, in der Sie das `BookInstanceSchema` Modell definiert haben (**models/bookinstance.js**). Fügen Sie die unten gezeigte virtuelle Funktion `due_back_yyyy_mm_dd()` hinzu (nach der virtuellen Funktion `due_back_formatted()`):

```js
BookInstanceSchema.virtual("due_back_yyyy_mm_dd").get(function () {
  return DateTime.fromJSDate(this.due_back).toISODate(); // format 'YYYY-MM-DD'
});
```

## Wie sieht es aus?

Führen Sie die Anwendung aus und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wählen Sie dann den Link _Create new book instance (copy)_ aus. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite ungefähr so aussehen wie auf dem nachfolgenden Screenshot. Nachdem Sie eine gültige `BookInstance` eingereicht haben, sollte sie gespeichert werden, und Sie werden zur Detailseite weitergeleitet.

![Erstellen einer Buchinstanz der Bibliotheksanwendung Screenshot von localhost:3000. Die Seite ist in zwei Spalten unterteilt. Die schmale linke Spalte hat eine vertikale Navigationsleiste mit 10 Links, die durch eine helle horizontale Linie in zwei Abschnitte unterteilt sind. Der obere Abschnitt führt zu bereits erstellten Daten. Die unteren Links führen zu Formularen zur Erstellung neuer Daten. Die breite rechte Spalte enthält das Formular zum Erstellen einer Buchinstanz mit einer Überschrift 'Create BookInstance' und vier Eingabefeldern mit den Bezeichnungen 'Book', 'Imprint', 'Date when book available' und 'Status'. Das Formular ist ausgefüllt. Unten im Formular befindet sich ein 'Submit'-Button.](locallibary_express_bookinstance_create_empty.png)

## Nächste Schritte

- Kehren Sie zurück zum [Express Tutorial Part 6: Arbeiten mit Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms).
- Fahren Sie mit dem nächsten Unterartikel von Teil 6 fort: [Autor löschen Formular](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Delete_author_form).
