---
title: Formular zur Erstellung von BookInstance
slug: Learn/Server-side/Express_Nodejs/forms/Create_BookInstance_form
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

Dieser Unterartikel zeigt, wie Sie eine Seite/ein Formular definieren, um `BookInstance`-Objekte zu erstellen. Dies ist sehr ähnlich dem Formular, das wir verwendet haben, um [`Book`-Objekte zu erstellen](/de/docs/Learn/Server-side/Express_Nodejs/forms/Create_book_form).

## Importieren von Validierungs- und Bereinigungsmethoden

Öffnen Sie **/controllers/bookinstanceController.js** und fügen Sie die folgenden Zeilen am Anfang der Datei hinzu:

```js
const { body, validationResult } = require("express-validator");
```

## Controller—GET-Route

Fügen Sie am Anfang der Datei das _Book_-Modul hinzu (notwendig, da jede `BookInstance` mit einem bestimmten `Book` verbunden ist).

```js
const Book = require("../models/book");
```

Suchen Sie die exportierte `bookinstance_create_get()`-Controller-Methode und ersetzen Sie sie durch den folgenden Code.

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

Der Controller erhält eine sortierte Liste aller Bücher (`allBooks`) und übergibt diese über `book_list` an die Ansicht **`bookinstance_form.pug`** (zusammen mit einem `title`). Beachten Sie, dass beim ersten Anzeigen dieses Formulars kein Buch ausgewählt wurde, daher übergeben wir die Variable `selected_book` nicht an `render()`. Aus diesem Grund hat `selected_book` im Template den Wert `undefined`.

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

Die Struktur und das Verhalten dieses Codes sind dieselben wie bei der Erstellung unserer anderen Objekte. Zuerst validieren und bereinigen wir die Daten. Wenn die Daten ungültig sind, zeigen wir das Formular erneut zusammen mit den ursprünglich vom Benutzer eingegebenen Daten und einer Liste von Fehlermeldungen an. Wenn die Daten gültig sind, speichern wir den neuen `BookInstance`-Eintrag und leiten den Benutzer zur Detailseite weiter.

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
> Das obige Template kodiert die _Status_-Werte (Wartung, Verfügbar, etc.) fest und "erinnert" sich nicht an die eingegebenen Werte des Benutzers. Sollten Sie dies wünschen, ziehen Sie in Betracht, die Liste neu zu implementieren, die Option-Daten vom Controller zu übergeben und den ausgewählten Wert zu setzen, wenn das Formular erneut angezeigt wird.

Die Struktur und das Verhalten der Ansicht ist nahezu identisch mit dem **book_form.pug**-Template, weshalb wir nicht im Detail darauf eingehen. Wichtig ist die Zeile, in der wir das "fällig zurück"-Datum auf `bookinstance.due_back_yyyy_mm_dd` setzen, wenn wir das Datumsfeld für eine bestehende Instanz ausfüllen.

```pug
input#due_back.form-control(type='date', name='due_back' value=(undefined===bookinstance ? '' : bookinstance.due_back_yyyy_mm_dd))
```

Der Datumswert muss im Format `YYYY-MM-DD` gesetzt werden, da dies von [`<input>`-Elementen mit `type="date"`](/de/docs/Web/HTML/Element/input/date) erwartet wird, jedoch wird das Datum nicht in diesem Format gespeichert, sodass wir es vor der Einstellung des Wertes im Steuerungselement konvertieren müssen. Die `due_back_yyyy_mm_dd()`-Methode wird im nächsten Abschnitt zum `BookInstance`-Modell hinzugefügt.

## Modell—virtuelle `due_back_yyyy_mm_dd()`-Methode

Öffnen Sie die Datei, in der Sie das `BookInstanceSchema`-Modell definiert haben (**models/bookinstance.js**). Fügen Sie die nachfolgend gezeigte virtuelle Funktion `due_back_yyyy_mm_dd()` (nach der virtuellen Funktion `due_back_formatted()`) hinzu:

```js
BookInstanceSchema.virtual("due_back_yyyy_mm_dd").get(function () {
  return DateTime.fromJSDate(this.due_back).toISODate(); // format 'YYYY-MM-DD'
});
```

## Wie sieht es aus?

Führen Sie die Anwendung aus und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wählen Sie dann den Link _Create new book instance (copy)_. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite in etwa wie der folgende Screenshot aussehen. Nachdem Sie eine gültige `BookInstance` übermittelt haben, sollte diese gespeichert werden und Sie werden zur Detailseite weitergeleitet.

![Screenshot der Erstellung einer BookInstance der Local-Library-Anwendung von localhost:3000. Die Seite ist in zwei Spalten unterteilt. Die schmale linke Spalte hat eine vertikale Navigationsleiste mit 10 Links, die in zwei Abschnitte durch eine helle horizontale Linie unterteilt sind. Der obere Abschnitt führt zu bereits erstellten Daten. Die unteren Links führen zu neuen Datenformularen. Die breite rechte Spalte enthält das Formular zur Erstellung einer BookInstance mit der Überschrift 'Create BookInstance' und vier Eingabefeldern, die mit 'Book', 'Imprint', 'Date when book available' und 'Status' beschriftet sind. Das Formular ist ausgefüllt. Am unteren Ende des Formulars befindet sich ein 'Submit'-Button.](locallibary_express_bookinstance_create_empty.png)

## Nächste Schritte

- Kehren Sie zu [Express Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn/Server-side/Express_Nodejs/forms) zurück.
- Fahren Sie mit dem nächsten Unterartikel von Teil 6 fort: [Formular zum Löschen eines Autors](/de/docs/Learn/Server-side/Express_Nodejs/forms/Delete_author_form).
