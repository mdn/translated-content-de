---
title: Erstellen eines Author-Formulars
slug: Learn/Server-side/Express_Nodejs/forms/Create_author_form
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

Dieser Unterartikel zeigt, wie man eine Seite zum Erstellen von `Author`-Objekten definiert.

## Importieren von Validierungs- und Bereinigungsmethoden

Wie beim [Genre-Formular](/de/docs/Learn/Server-side/Express_Nodejs/forms/Create_genre_form) müssen wir, um _express-validator_ zu verwenden, die Funktionen \_require_n, die wir verwenden möchten.

Öffnen Sie **/controllers/authorController.js** und fügen Sie folgende Zeile oben in der Datei (über den Routenfunktionen) hinzu:

```js
const { body, validationResult } = require("express-validator");
```

## Controller—Get-Route

Finden Sie die exportierte `author_create_get()` Controller-Methode und ersetzen Sie sie durch den folgenden Code. Dieser rendert die **author_form.pug** Ansicht und übergibt eine `title` Variable.

```js
// Display Author create form on GET.
exports.author_create_get = (req, res, next) => {
  res.render("author_form", { title: "Create Author" });
};
```

## Controller—Post-Route

Finden Sie die exportierte `author_create_post()` Controller-Methode und ersetzen Sie sie durch den folgenden Code.

```js
// Handle Author create on POST.
exports.author_create_post = [
  // Validate and sanitize fields.
  body("first_name")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("First name must be specified.")
    .isAlphanumeric()
    .withMessage("First name has non-alphanumeric characters."),
  body("family_name")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Family name must be specified.")
    .isAlphanumeric()
    .withMessage("Family name has non-alphanumeric characters."),
  body("date_of_birth", "Invalid date of birth")
    .optional({ values: "falsy" })
    .isISO8601()
    .toDate(),
  body("date_of_death", "Invalid date of death")
    .optional({ values: "falsy" })
    .isISO8601()
    .toDate(),

  // Process request after validation and sanitization.
  asyncHandler(async (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create Author object with escaped and trimmed data
    const author = new Author({
      first_name: req.body.first_name,
      family_name: req.body.family_name,
      date_of_birth: req.body.date_of_birth,
      date_of_death: req.body.date_of_death,
    });

    if (!errors.isEmpty()) {
      // There are errors. Render form again with sanitized values/errors messages.
      res.render("author_form", {
        title: "Create Author",
        author: author,
        errors: errors.array(),
      });
      return;
    } else {
      // Data from form is valid.

      // Save author.
      await author.save();
      // Redirect to new author record.
      res.redirect(author.url);
    }
  }),
];
```

> [!WARNING]
> Validieren Sie niemals _Namen_ mit `isAlphanumeric()` (wie wir es oben gemacht haben), da viele Namen andere Zeichensätze verwenden.
> Wir tun dies hier, um zu demonstrieren, wie der Validator verwendet wird und wie er mit anderen Validatoren und Fehlerberichten verkettet werden kann.

Die Struktur und das Verhalten dieses Codes sind fast genau gleich wie beim Erstellen eines `Genre`-Objekts. Zuerst validieren und bereinigen wir die Daten. Wenn die Daten ungültig sind, zeigen wir das Formular zusammen mit den ursprünglich vom Benutzer eingegebenen Daten und einer Liste von Fehlermeldungen erneut an. Wenn die Daten gültig sind, speichern wir den neuen Autoren-Datensatz und leiten den Benutzer zur Autorendetailseite weiter.

Im Gegensatz zum `Genre`-Post-Handler überprüfen wir nicht, ob das `Author`-Objekt bereits existiert, bevor wir es speichern. Man könnte argumentieren, dass wir das tun sollten, auch wenn wir jetzt mehrere Autoren mit demselben Namen haben können.

Der Validierungscode demonstriert mehrere neue Funktionen:

- Wir können Validatoren verkettet anwenden, wobei `withMessage()` verwendet wird, um die Fehlermeldung anzugeben, die angezeigt wird, wenn die vorherige Validierungsmethode fehlschlägt.
  Dies macht es sehr einfach, spezifische Fehlermeldungen ohne viel Code-Duplikation bereitzustellen.

  ```js
  [
    // Validate and sanitize fields.
    body("first_name")
      .trim()
      .isLength({ min: 1 })
      .escape()
      .withMessage("First name must be specified.")
      .isAlphanumeric()
      .withMessage("First name has non-alphanumeric characters."),
    // …
  ];
  ```

- Mit der `optional()` Funktion können wir eine anschließende Validierung nur dann ausführen, wenn ein Feld eingegeben wurde (dies ermöglicht es uns, optionale Felder zu validieren).
  Zum Beispiel überprüfen wir unten, ob das optionale Geburtsdatum ein ISO8601-kompatibles Datum ist (das übergebene `{ values: "falsy" }`-Objekt bedeutet, dass wir entweder einen leeren String oder `null` als leeren Wert akzeptieren).

  ```js
  [
    body("date_of_birth", "Invalid date of birth")
      .optional({ values: "falsy" })
      .isISO8601()
      .toDate(),
  ];
  ```

- Parameter werden von der Anfrage als Strings empfangen. Wir können `toDate()` (oder `toBoolean()`) verwenden, um diese in die richtigen JavaScript-Typen umzuwandeln (wie am Ende der obigen Validator-Kette gezeigt).

## Ansicht

Erstellen Sie **/views/author_form.pug** und kopieren Sie den untenstehenden Text hinein.

```pug
extends layout

block content
  h1=title

  form(method='POST')
    div.form-group
      label(for='first_name') First Name:
      input#first_name.form-control(type='text', placeholder='First name (Christian)' name='first_name' required value=(undefined===author ? '' : author.first_name) )
      label(for='family_name') Family Name:
      input#family_name.form-control(type='text', placeholder='Family name (Surname)' name='family_name' required value=(undefined===author ? '' : author.family_name))
    div.form-group
      label(for='date_of_birth') Date of birth:
      input#date_of_birth.form-control(type='date' name='date_of_birth' value=(undefined===author ? '' : author.date_of_birth) )
    button.btn.btn-primary(type='submit') Submit

  if errors
    ul
      for error in errors
        li!= error.msg
```

Die Struktur und das Verhalten für diese Ansicht sind genau dieselben wie für die **genre_form.pug** Vorlage, daher werden wir sie nicht erneut beschreiben.

> [!NOTE]
> Einige Browser unterstützen den Eingabetyp `type="date"` nicht, daher wird das Datepicker-Widget oder der Standardplatzhalter `dd/mm/yyyy` nicht angezeigt, sondern stattdessen ein leeres einfaches Textfeld. Ein Workaround besteht darin, das Attribut `placeholder='dd/mm/yyyy'` explizit hinzuzufügen, damit auch in weniger leistungsfähigen Browsern Informationen zum gewünschten Textformat angezeigt werden.

### Herausforderung: Hinzufügen des Todesdatums

Die obenstehende Vorlage fehlt ein Feld zur Eingabe des `date_of_death`. Erstellen Sie das Feld entsprechend dem Muster der Geburtsdatum-Formulargruppe!

## Wie sieht es aus?

Starten Sie die Anwendung, öffnen Sie Ihren Browser unter `http://localhost:3000/`, und wählen Sie den Link _Create new author_ aus. Wenn alles richtig eingerichtet ist, sollte Ihre Seite in etwa so aussehen wie der folgende Screenshot. Nachdem Sie einen Wert eingegeben haben, sollte er gespeichert werden und Sie werden auf die Autorendetailseite weitergeleitet.

![Author Create Page - Express Local Library site](locallibary_express_author_create_empty.png)

> [!NOTE]
> Wenn Sie mit verschiedenen Eingabeformaten für die Daten experimentieren, stellen Sie möglicherweise fest, dass das Format `yyyy-mm-dd` sich falsch verhält. Dies liegt daran, dass JavaScript Datumsstrings als einschließlich der Uhrzeit 0 Stunden behandelt, zusätzlich jedoch Datumsstrings in diesem Format (dem ISO 8601-Standard) als einschließlich der Uhrzeit 0 Stunden UTC und nicht der lokalen Zeit behandelt. Wenn Ihre Zeitzone westlich von UTC liegt, wird die Datumsanzeige als lokal betrachtet einen Tag vor dem eingegebenen Datum sein. Dies ist eine von mehreren Komplexitäten (wie mehrteilige Nachnamen und Bücher von mehreren Autoren), die wir hier nicht behandeln.

## Nächste Schritte

- Kehren Sie zurück zu [Express Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn/Server-side/Express_Nodejs/forms).
- Fahren Sie fort mit dem nächsten Unterartikel von Teil 6: [Buchformular erstellen](/de/docs/Learn/Server-side/Express_Nodejs/forms/Create_book_form).
