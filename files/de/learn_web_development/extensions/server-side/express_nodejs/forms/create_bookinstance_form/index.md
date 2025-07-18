---
title: Erstellen eines BookInstance-Formulars
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_BookInstance_form
l10n:
  sourceCommit: 8443cb34d9944d8eb8e2c5add598bec26ed6d21f
---

Dieser Unterartikel zeigt, wie eine Seite/ein Formular definiert wird, um `BookInstance`-Objekte zu erstellen.
Dies ist sehr ähnlich zu dem Formular, das wir verwendet haben, um [`Book`-Objekte zu erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_book_form).

## Validierungs- und Bereinigungsmethoden importieren

Öffnen Sie **/controllers/bookinstanceController.js** und fügen Sie die folgenden Zeilen am Anfang der Datei hinzu:

```js
const { body, validationResult } = require("express-validator");
```

## Controller—GET-Route

Am Anfang der Datei, importieren Sie das _Book_-Modul (erforderlich, da jede `BookInstance` einem bestimmten `Book` zugeordnet ist).

```js
const Book = require("../models/book");
```

Suchen Sie die exportierte `bookinstance_create_get()`-Controller-Methode und ersetzen Sie sie durch den folgenden Code.

```js
// Display BookInstance create form on GET.
exports.bookinstance_create_get = async (req, res, next) => {
  const allBooks = await Book.find({}, "title").sort({ title: 1 }).exec();

  res.render("bookinstance_form", {
    title: "Create BookInstance",
    book_list: allBooks,
  });
};
```

Der Controller erhält eine sortierte Liste aller Bücher (`allBooks`) und übergibt diese über `book_list` an die Ansicht **`bookinstance_form.pug`** (zusammen mit einem `title`).
Beachten Sie, dass beim ersten Anzeigen dieses Formulars kein Buch ausgewählt wurde, sodass wir die Variable `selected_book` nicht an `render()` übergeben.
Aufgrund dessen wird `selected_book` im Template den Wert `undefined` haben.

## Controller—POST-Route

Suchen Sie die exportierte `bookinstance_create_post()`-Controller-Methode und ersetzen Sie sie durch den folgenden Code.

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
  async (req, res, next) => {
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
  },
];
```

Die Struktur und das Verhalten dieses Codes entsprechen dem Erstellen unserer anderen Objekte.
Zuerst validieren und bereinigen wir die Daten. Sind die Daten ungültig, zeigen wir das Formular zusammen mit den ursprünglich vom Benutzer eingegebenen Daten und einer Liste von Fehlermeldungen erneut an.
Sind die Daten gültig, speichern wir den neuen `BookInstance`-Eintrag und leiten den Benutzer zur Detailseite weiter.

## Ansicht

Erstellen Sie **/views/bookinstance_form.pug** und kopieren Sie den unten stehenden Text hinein.

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
> Das obige Template codiert die _Status_-Werte (Wartung, Verfügbar usw.) fest und "merkt" sich nicht die eingegebenen Werte des Benutzers.
> Falls gewünscht, ziehen Sie in Betracht, die Liste neu zu implementieren, indem Sie Optionsdaten vom Controller übergeben und den ausgewählten Wert setzen, wenn das Formular erneut angezeigt wird.

Die Struktur und das Verhalten der Ansicht sind fast identisch mit dem **book_form.pug**-Template, daher werden wir es nicht im Detail durchgehen.
Das einzig Bemerkenswerte ist die Zeile, in der wir das "Fälligkeitsdatum" auf `bookinstance.due_back_yyyy_mm_dd` setzen, wenn wir das Datumsfeld für eine bestehende Instanz füllen.

```pug
input#due_back.form-control(type='date', name='due_back' value=(undefined===bookinstance ? '' : bookinstance.due_back_yyyy_mm_dd))
```

Der Datumswert muss im Format `YYYY-MM-DD` gesetzt werden, da dies von [`<input>`-Elementen mit `type="date"`](/de/docs/Web/HTML/Reference/Elements/input/date) erwartet wird, jedoch wird das Datum nicht in diesem Format gespeichert, also müssen wir es vor dem Setzen des Wertes im Steuerelement umwandeln.
Die Methode `due_back_yyyy_mm_dd()` wird im `BookInstance`-Modell im nächsten Abschnitt hinzugefügt.

## Modell—virtuelle `due_back_yyyy_mm_dd()` Methode

Öffnen Sie die Datei, in der Sie das `BookInstanceSchema`-Modell definiert haben (**models/bookinstance.js**).
Fügen Sie die virtuelle Funktion `due_back_yyyy_mm_dd()` (nach der virtuellen Funktion `due_back_formatted()`) hinzu:

```js
BookInstanceSchema.virtual("due_back_yyyy_mm_dd").get(function () {
  return DateTime.fromJSDate(this.due_back).toISODate(); // format 'YYYY-MM-DD'
});
```

## Wie sieht es aus?

Führen Sie die Anwendung aus und öffnen Sie Ihren Browser auf `http://localhost:3000/`.
Wählen Sie dann den Link _Neues BookInstance (Kopie) erstellen_. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite ähnlich wie im folgenden Screenshot aussehen. Nachdem Sie eine gültige `BookInstance` übermittelt haben, sollte sie gespeichert werden, und Sie werden zur Detailseite weitergeleitet.

![Erstellen Sie eine BookInstance der Local Library-Anwendung Screenshot von localhost:3000. Die Seite ist in zwei Spalten unterteilt. Die schmale linke Spalte hat eine vertikale Navigationsleiste mit 10 Links, die durch eine hellfarbige horizontale Linie in zwei Abschnitte unterteilt sind. Der obere Abschnitt verlinkt zu bereits erstellten Daten. Die unteren Links führen zu Formularen zur Erstellung neuer Daten. Die breite rechte Spalte hat das Buchinstanz-Erstellungsformular mit einer Überschrift 'Create BookInstance' und vier Eingabefeldern mit den Bezeichnungen 'Book', 'Imprint', 'Date when book available' und 'Status'. Das Formular ist ausgefüllt. Es gibt eine 'Submit'-Taste am unteren Rand des Formulars.](locallibary_express_bookinstance_create_empty.png)

## Nächste Schritte

- Kehren Sie zurück zum [Express Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms).
- Fahren Sie mit dem nächsten Unterartikel von Teil 6 fort: [Autor löschen-Formular](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Delete_author_form).
