---
title: Formular zur Erstellung eines Buchinstanz
slug: Learn/Server-side/Express_Nodejs/forms/Create_BookInstance_form
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

Dieser Unterartikel zeigt, wie eine Seite beziehungsweise ein Formular zur Erstellung von `BookInstance`-Objekten definiert wird.
Dies ähnelt sehr dem Formular, das wir zur [Erstellung von `Book`-Objekten](/de/docs/Learn/Server-side/Express_Nodejs/forms/Create_book_form) verwendet haben.

## Importieren von Validierungs- und Bereinigungsmethoden

Öffnen Sie **/controllers/bookinstanceController.js** und fügen Sie am Anfang der Datei die folgenden Zeilen hinzu:

```js
const { body, validationResult } = require("express-validator");
```

## Controller—GET-Route

Fügen Sie am Anfang der Datei das _Book_-Modul hinzu (erforderlich, da jede `BookInstance` mit einem bestimmten `Book` verknüpft ist).

```js
const Book = require("../models/book");
```

Finden Sie die exportierte `bookinstance_create_get()`-Controllermethode und ersetzen Sie sie durch den folgenden Code.

```js
// Anzeige des Buchinstanz-Erstellungsformulars bei GET.
exports.bookinstance_create_get = asyncHandler(async (req, res, next) => {
  const allBooks = await Book.find({}, "title").sort({ title: 1 }).exec();

  res.render("bookinstance_form", {
    title: "Create BookInstance",
    book_list: allBooks,
  });
});
```

Der Controller erhält eine sortierte Liste aller Bücher (`allBooks`) und übergibt sie über `book_list` an die Ansicht **`bookinstance_form.pug`** (zusammen mit einem `title`).
Beachten Sie, dass kein Buch ausgewählt ist, wenn wir dieses Formular zum ersten Mal anzeigen. Daher übergeben wir die Variable `selected_book` nicht an `render()`.
Aus diesem Grund hat `selected_book` im Template den Wert `undefined`.

## Controller—POST-Route

Finden Sie die exportierte `bookinstance_create_post()`-Controllermethode und ersetzen Sie sie durch den folgenden Code.

```js
// Verarbeitung der Buchinstanz-Erstellung bei POST.
exports.bookinstance_create_post = [
  // Felder validieren und bereinigen.
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

  // Anfrage nach Validierung und Bereinigung verarbeiten.
  asyncHandler(async (req, res, next) => {
    // Extrahieren der Validierungsfehler aus einer Anfrage.
    const errors = validationResult(req);

    // Erstellen eines Buchinstanz-Objekts mit bereinigten und getrimmten Daten.
    const bookInstance = new BookInstance({
      book: req.body.book,
      imprint: req.body.imprint,
      status: req.body.status,
      due_back: req.body.due_back,
    });

    if (!errors.isEmpty()) {
      // Es gibt Fehler.
      // Formular erneut mit bereinigten Werten und Fehlermeldungen anzeigen.
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
      // Daten aus dem Formular sind gültig
      await bookInstance.save();
      res.redirect(bookInstance.url);
    }
  }),
];
```

Der Aufbau und das Verhalten dieses Codes sind identisch mit denen für die Erstellung unserer anderen Objekte.
Zuerst validieren und bereinigen wir die Daten. Wenn die Daten ungültig sind, zeigen wir das Formular erneut mit den ursprünglich von der Benutzenden eingegebenen Daten und einer Liste von Fehlermeldungen an.
Wenn die Daten gültig sind, speichern wir den neuen `BookInstance`-Datensatz und leiten die Nutzenden auf die Detailseite weiter.

## Ansicht

Erstellen Sie **/views/bookinstance_form.pug** und kopieren Sie den folgenden Text hinein.

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
          if selected_book == book._id.toString()
            option(value=book._id, selected) #{book.title}
          else
            option(value=book._id) #{book.title}

    div.form-group
      label(for='imprint') Imprint:
      input#imprint.form-control(type='text' placeholder='Verleger- und Datumsinformation' name='imprint' required value=(undefined===bookinstance ? '' : bookinstance.imprint) )
    div.form-group
      label(for='due_back') Datum, an dem das Buch verfügbar ist:
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
> Das oben gezeigte Template kodiert die _Status_-Werte (Maintenance, Available, etc.) fest und "merkt" sich nicht die vom Nutzenden eingegebenen Werte.
> Falls Sie dies wünschen, erwägen Sie die erneute Implementierung der Liste, um Optionsdaten vom Controller zu übergeben und den ausgewählten Wert festzulegen, wenn das Formular erneut angezeigt wird.

Die Struktur und das Verhalten der Ansicht ist fast identisch mit der `book_form.pug`-Vorlage, daher werden wir nicht im Detail darauf eingehen.
Ein Punkt, den es zu beachten gilt, ist die Zeile, in der wir das Rückgabedatum (`due back`) auf `bookinstance.due_back_yyyy_mm_dd` setzen, wenn wir das Dateneingabefeld für eine bestehende Instanz befüllen.

```pug
input#due_back.form-control(type='date', name='due_back' value=(undefined===bookinstance ? '' : bookinstance.due_back_yyyy_mm_dd))
```

Der Datumswert muss im Format `YYYY-MM-DD` gesetzt werden, da dies von [`<input>`-Elementen mit `type="date"`](/de/docs/Web/HTML/Element/input/date) erwartet wird. Da das Datum jedoch nicht in diesem Format gespeichert ist, müssen wir es konvertieren, bevor wir den Wert im Feld festlegen.
Die Methode `due_back_yyyy_mm_dd()` wird im nächsten Abschnitt dem `BookInstance`-Modell hinzugefügt.

## Modell—virtuelle `due_back_yyyy_mm_dd()`-Methode

Öffnen Sie die Datei, in der Sie das `BookInstanceSchema`-Modell definiert haben (**models/bookinstance.js**).
Fügen Sie die unten gezeigte virtuelle Funktion `due_back_yyyy_mm_dd()` hinzu (nach der virtuellen Funktion `due_back_formatted()`):

```js
BookInstanceSchema.virtual("due_back_yyyy_mm_dd").get(function () {
  return DateTime.fromJSDate(this.due_back).toISODate(); // Format 'YYYY-MM-DD'
});
```

## Wie sieht es aus?

Starten Sie die Anwendung und öffnen Sie Ihren Browser unter `http://localhost:3000/`.
Wählen Sie dann den Link _Create new book instance (copy)_. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite in etwa wie der folgende Screenshot aussehen. Nach dem Absenden einer gültigen `BookInstance` sollte diese gespeichert sein, und Sie werden zur Detailseite weitergeleitet.

![Erstellung einer Buchinstanz in der lokalen Bibliotheksanwendung, Screenshot von localhost:3000. Die Seite ist in zwei Spalten unterteilt. Die schmale linke Spalte enthält eine vertikale Navigationsleiste mit 10 Links, die in zwei Abschnitte durch eine hellfarbene horizontale Linie getrennt sind. Der obere Abschnitt verlinkt zu bereits erstellten Daten. Die unteren Links führen zu Formularen zur Erstellung neuer Daten. Die breite rechte Spalte enthält das Formular zur Erstellung einer Buchinstanz mit der Überschrift 'Create BookInstance' und vier Eingabefeldern, die mit 'Book', 'Imprint', 'Date when book available' und 'Status' beschriftet sind. Das Formular ist ausgefüllt. Unten im Formular befindet sich ein 'Submit'-Button.](locallibary_express_bookinstance_create_empty.png)

## Nächste Schritte

- Zurück zu [Express-Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn/Server-side/Express_Nodejs/forms).
- Weiter zum nächsten Unterartikel von Teil 6: [Autor-Löschformular](/de/docs/Learn/Server-side/Express_Nodejs/forms/Delete_author_form).
