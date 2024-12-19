---
title: Erstellen Sie das Author-Formular
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_author_form
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Dieser Unterartikel zeigt, wie Sie eine Seite zum Erstellen von `Author`-Objekten definieren.

## Importieren von Validierungs- und Sanitierungsmethoden

Wie beim [Genre-Formular](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_genre_form) müssen wir zum Verwenden von _express-validator_ die Funktionen _require_, die wir verwenden möchten.

Öffnen Sie **/controllers/authorController.js** und fügen Sie die folgende Zeile oben in der Datei (über den Rout-Funktionen) hinzu:

```js
const { body, validationResult } = require("express-validator");
```

## Controller—Get-Route

Suchen Sie die exportierte `author_create_get()`-Controller-Methode und ersetzen Sie sie durch den folgenden Code. Diese rendert die **author_form.pug** Ansicht und übergibt eine `title` Variable.

```js
// Display Author create form on GET.
exports.author_create_get = (req, res, next) => {
  res.render("author_form", { title: "Create Author" });
};
```

## Controller—Post-Route

Suchen Sie die exportierte `author_create_post()`-Controller-Methode und ersetzen Sie sie durch den folgenden Code.

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
> Validieren Sie niemals _Namen_ mit `isAlphanumeric()` (wie wir es oben getan haben), da es viele Namen gibt, die andere Zeichensätze verwenden.
> Wir tun es hier, um zu demonstrieren, wie der Validator verwendet wird und wie er mit anderen Validatoren und Fehlermeldungen verknüpft werden kann.

Die Struktur und das Verhalten dieses Codes sind fast genau die gleichen wie beim Erstellen eines `Genre`-Objekts. Zuerst validieren und sanitieren wir die Daten. Wenn die Daten ungültig sind, wird das Formular zusammen mit den ursprünglich vom Benutzer eingegebenen Daten und einer Liste der Fehlermeldungen erneut angezeigt. Wenn die Daten gültig sind, speichern wir den neuen Autorendatensatz und leiten den Benutzer zur Autor-Detailseite weiter.

Anders als beim `Genre`-Post-Handler prüfen wir nicht, ob das `Author`-Objekt bereits existiert, bevor wir es speichern. Argumentativ sollten wir das tun, obwohl wir jetzt mehrere Autoren mit demselben Namen haben können.

Der Validierungscode zeigt mehrere neue Funktionen:

- Wir können Validatoren verknüpfen, indem wir `withMessage()` verwenden, um die Fehlermeldung anzugeben, die angezeigt werden soll, wenn die vorherige Validierungsmethode fehlschlägt.
  Dies macht es sehr einfach, spezifische Fehlermeldungen ohne viel Code-Duplizierung bereitzustellen.

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

- Wir können die Funktion `optional()` verwenden, um eine nachfolgende Validierung nur auszuführen, wenn ein Feld eingegeben wurde (dies erlaubt es uns, optionale Felder zu validieren).
  Zum Beispiel überprüfen wir unten, ob das optionale Geburtsdatum ein ISO8601-konformes Datum ist (das übergebene Objekt `{ values: "falsy" }` bedeutet, dass wir entweder eine leere Zeichenkette oder `null` als leeren Wert akzeptieren).

  ```js
  [
    body("date_of_birth", "Invalid date of birth")
      .optional({ values: "falsy" })
      .isISO8601()
      .toDate(),
  ];
  ```

- Parameter werden aus der Anfrage als Zeichenketten empfangen. Wir können `toDate()` (oder `toBoolean()`) verwenden, um diese in die richtigen JavaScript-Typen zu konvertieren (wie am Ende der Validatorenkette oben gezeigt).

## Ansicht

Erstellen Sie **/views/author_form.pug** und kopieren Sie den folgenden Text hinein.

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

Die Struktur und das Verhalten dieser Ansicht sind genau so wie bei der **genre_form.pug**-Vorlage, daher werden wir sie nicht erneut beschreiben.

> [!NOTE]
> Einige Browser unterstützen den Eingabetyp `type="date"` nicht, sodass Sie das Datumsauswahl-Widget oder den Standardplatzhalter `dd/mm/yyyy` nicht erhalten, sondern stattdessen ein leeres einfaches Textfeld. Ein Workaround besteht darin, das Attribut `placeholder='dd/mm/yyyy'` explizit hinzuzufügen, damit Sie in weniger fähigen Browsern dennoch Informationen über das gewünschte Textformat erhalten.

### Herausforderung: Hinzufügen des Todesdatums

Das obige Template fehlt ein Feld zum Eingeben des `date_of_death`. Erstellen Sie das Feld nach demselben Muster wie die Geburtsdatum-Formgruppe!

## Wie sieht es aus?

Führen Sie die Anwendung aus, öffnen Sie Ihren Browser unter `http://localhost:3000/` und wählen Sie den Link _Neuen Autor erstellen_. Wenn alles richtig eingerichtet ist, sollte Ihre Seite in etwa wie der folgende Screenshot aussehen. Nachdem Sie einen Wert eingegeben haben, sollte er gespeichert werden und Sie werden zur Autorendetailseite weitergeleitet.

![Author Create Page - Express Local Library site](locallibary_express_author_create_empty.png)

> [!NOTE]
> Wenn Sie mit verschiedenen Eingabeformaten für die Daten experimentieren, stellen Sie möglicherweise fest, dass das Format `yyyy-mm-dd` nicht korrekt funktioniert. Dies liegt daran, dass JavaScript Datumsstrings als die Zeit 0 Uhr behandelt, aber zusätzlich Datumsstrings in diesem Format (dem ISO 8601 Standard) als die Zeit 0 Uhr UTC behandelt, anstatt der lokalen Zeit. Wenn Ihre Zeitzone westlich von UTC liegt, wird die Datumsanzeige, lokal, einen Tag vor dem von Ihnen eingegebenen Datum sein. Dies ist eine von mehreren Komplexitäten (wie mehrteilige Familiennamen und Mehr-Autor-Bücher), die wir hier nicht ansprechen.

## Nächste Schritte

- Kehren Sie zurück zu [Express Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms).
- Fahren Sie mit dem nächsten Unterartikel von Teil 6 fort: [Buchformular erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_book_form).
