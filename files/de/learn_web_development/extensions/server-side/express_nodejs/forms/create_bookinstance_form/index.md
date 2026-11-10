---
title: Formular zum Erstellen einer BookInstance
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_BookInstance_form
l10n:
  sourceCommit: d775e1249487f1a7ab9a8a031c70ca71bc892d63
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_book_form", "Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Delete_author_form", "Learn_web_development/Extensions/Server-side/Express_Nodejs/forms")}}

Dieser Unterartikel zeigt, wie Sie eine Seite mit einem Formular zum Erstellen von `BookInstance`-Objekten definieren. Das Vorgehen ähnelt dem Formular zum [Erstellen von `Book`-Objekten](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_book_form).

## Methoden zur Validierung und Bereinigung importieren

Öffnen Sie **controllers/bookinstanceController.js** und fügen Sie am Anfang der Datei die folgenden Zeilen hinzu:

```js
import { body, validationResult } from "express-validator";
```

## Controller – GET-Route

Importieren Sie am Anfang der Datei das _Book_-Modul, da jede `BookInstance` einem bestimmten `Book` zugeordnet ist.

```js
import Book from "../models/book.js";
```

Suchen Sie die exportierte Controller-Methode `bookInstanceCreateGet()` und ersetzen Sie sie durch den folgenden Code:

```js
// Display BookInstance create form on GET.
export const bookInstanceCreateGet = async (req, res, next) => {
  const allBooks = await Book.find({}, "title").sort({ title: 1 }).exec();

  res.render("bookinstance_form", {
    title: "Create BookInstance",
    book_list: allBooks,
  });
};
```

Der Controller ruft eine sortierte Liste aller Bücher (`allBooks`) ab und übergibt sie über `book_list` an die View **`bookinstance_form.pug`** (zusammen mit einem `title`).
Wenn wir dieses Formular zum ersten Mal anzeigen, ist noch kein Buch ausgewählt. Daher übergeben wir die Variable `selected_book` nicht an `render()`.
Im Template hat `selected_book` deshalb den Wert `undefined`.

## Controller – POST-Route

Suchen Sie die exportierte Controller-Methode `bookInstanceCreatePost()` und ersetzen Sie sie durch den folgenden Code:

```js
// Handle BookInstance create on POST.
export const bookInstanceCreatePost = [
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

Aufbau und Verhalten dieses Codes entsprechen denen beim Erstellen unserer anderen Objekte.
Zuerst validieren und bereinigen wir die Daten. Sind die Daten ungültig, zeigen wir das Formular erneut an – mit den ursprünglich eingegebenen Daten und einer Liste der Fehlermeldungen.
Sind die Daten gültig, speichern wir den neuen `BookInstance`-Datensatz und leiten die Benutzer zur Detailseite weiter.

## View

Erstellen Sie **views/bookinstance_form.pug** und fügen Sie den folgenden Text ein:

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
> Das obige Template enthält fest vorgegebene _Status_-Werte (Maintenance, Available usw.) und merkt sich die von den Benutzern eingegebenen Werte nicht.
> Wenn Sie möchten, können Sie die Liste so umsetzen, dass die Optionen vom Controller übergeben werden und beim erneuten Anzeigen des Formulars der zuvor ausgewählte Wert gesetzt wird.

Aufbau und Verhalten der View entsprechen weitgehend denen des Templates **book_form.pug**. Deshalb gehen wir hier nicht näher darauf ein.
Beachten Sie lediglich die Zeile, in der wir das Rückgabedatum auf `bookinstance.due_back_yyyy_mm_dd` setzen, wenn wir das Datumsfeld für eine vorhandene Instanz befüllen.

```pug
input#due_back.form-control(type='date', name='due_back' value=(undefined===bookinstance ? '' : bookinstance.due_back_yyyy_mm_dd))
```

Der Datumswert muss das Format `YYYY-MM-DD` haben, da [`<input>`-Elemente mit `type="date"`](/de/docs/Web/HTML/Reference/Elements/input/date) dieses Format erwarten. Das Datum wird jedoch nicht in diesem Format gespeichert. Deshalb müssen wir es umwandeln, bevor wir den Wert im Eingabefeld setzen.
Die Methode `due_back_yyyy_mm_dd()` wird im nächsten Abschnitt zum `BookInstance`-Modell hinzugefügt.

## Modell – virtuelle Methode `due_back_yyyy_mm_dd()`

Öffnen Sie die Datei, in der Sie das Modell `BookInstanceSchema` definiert haben (**models/bookinstance.js**).
Fügen Sie die unten gezeigte virtuelle Funktion `due_back_yyyy_mm_dd()` nach der virtuellen Funktion `due_back_formatted()` hinzu:

```js
BookInstanceSchema.virtual("due_back_yyyy_mm_dd").get(function () {
  return this.due_back ? this.due_back.toISOString().slice(0, 10) : "";
});
```

## Wie sieht das Ergebnis aus?

Starten Sie die Anwendung und öffnen Sie `http://localhost:3000/` in Ihrem Browser.
Wählen Sie dann den Link _Create new book instance (copy)_. Wenn alles richtig eingerichtet ist, sollte Ihre Website etwa wie im folgenden Screenshot aussehen. Nachdem Sie eine gültige `BookInstance` übermittelt haben, sollte sie gespeichert werden und Sie sollten zur Detailseite gelangen.

![Screenshot des Formulars zum Erstellen einer BookInstance in der Local-Library-Anwendung unter localhost:3000. Die Seite ist in zwei Spalten aufgeteilt. Die schmale linke Spalte enthält eine vertikale Navigationsleiste mit zehn Links, die durch eine helle horizontale Linie in zwei Bereiche getrennt sind. Die Links im oberen Bereich führen zu bereits erstellten Daten. Die Links im unteren Bereich führen zu Formularen zum Erstellen neuer Daten. Die breite rechte Spalte enthält das ausgefüllte Formular zum Erstellen einer BookInstance mit der Überschrift „Create BookInstance“ und vier Eingabefeldern mit den Beschriftungen „Book“, „Imprint“, „Date when book available“ und „Status“. Am Ende des Formulars befindet sich eine Schaltfläche „Submit“.](locallibary_express_bookinstance_create_empty.png)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_book_form", "Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Delete_author_form", "Learn_web_development/Extensions/Server-side/Express_Nodejs/forms")}}
