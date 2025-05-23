---
title: Autor-Formular erstellen
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_author_form
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

Dieser Unterartikel zeigt, wie Sie eine Seite zum Erstellen von `Author`-Objekten definieren.

## Validierungs- und Sanitizierungsmethoden importieren

Wie beim [Genre-Formular](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_genre_form) müssen wir zur Verwendung von _express-validator_ die Funktionen laden (_require_), die wir verwenden möchten.

Öffnen Sie **/controllers/authorController.js** und fügen Sie die folgende Zeile am Anfang der Datei hinzu (oberhalb der Routenfunktionen):

```js
const { body, validationResult } = require("express-validator");
```

## Controller—GET-Route

Finden Sie die exportierte `author_create_get()` Controller-Methode und ersetzen Sie sie durch den folgenden Code. Dieser rendert die **author_form.pug** Ansicht, wobei eine `title`-Variable übergeben wird.

```js
// Display Author create form on GET.
exports.author_create_get = (req, res, next) => {
  res.render("author_form", { title: "Create Author" });
};
```

## Controller—POST-Route

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
    }
    // Data from form is valid.

    // Save author.
    await author.save();
    // Redirect to new author record.
    res.redirect(author.url);
  }),
];
```

> [!WARNING]
> Validieren Sie _Namen_ niemals mit `isAlphanumeric()` (wie wir es oben getan haben), da es viele Namen gibt, die andere Zeichensätze verwenden.
> Wir tun dies hier, um zu demonstrieren, wie der Validator verwendet wird und wie er mit anderen Validatoren und Fehlermeldungen verkettet werden kann.

Die Struktur und das Verhalten dieses Codes sind fast genau gleich wie bei der Erstellung eines `Genre`-Objekts. Zuerst validieren und reinigen wir die Daten. Wenn die Daten ungültig sind, zeigen wir das Formular mit den ursprünglich eingegebenen Daten und einer Liste von Fehlermeldungen erneut an. Wenn die Daten gültig sind, speichern wir den neuen Autorendatensatz und leiten den Benutzer zur Detailseite des Autors weiter.

Anders als beim `Genre`-POST-Handler überprüfen wir nicht, ob das `Author`-Objekt bereits existiert, bevor wir es speichern. Man könnte argumentieren, dass wir das tun sollten, obwohl wir jetzt mehrere Autoren mit demselben Namen haben können.

Der Validierungscode demonstriert mehrere neue Funktionen:

- Wir können Validatoren verketten und mit `withMessage()` die Fehlermeldung angeben, die angezeigt werden soll, wenn die vorherige Validierungsmethode fehlschlägt.
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

- Wir können die Funktion `optional()` verwenden, um eine anschließende Validierung nur durchzuführen, wenn ein Feld eingegeben wurde (dies ermöglicht es uns, optionale Felder zu validieren).
  Zum Beispiel überprüfen wir weiter unten, ob das optionale Geburtsdatum ein ISO8601-konformes Datum ist (das übergebene `{ values: "falsy" }`-Objekt bedeutet, dass wir entweder eine leere Zeichenkette oder `null` als leeren Wert akzeptieren).

  ```js
  [
    body("date_of_birth", "Invalid date of birth")
      .optional({ values: "falsy" })
      .isISO8601()
      .toDate(),
  ];
  ```

- Parameter werden als Strings von der Anfrage empfangen. Wir können `toDate()` (oder `toBoolean()`) verwenden, um diese in die korrekten JavaScript-Typen umzuwandeln (wie am Ende der Validatorenkette oben gezeigt).

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

Die Struktur und das Verhalten dieser Ansicht sind genau die gleichen wie bei der **genre_form.pug** Vorlage, daher werden wir sie nicht erneut beschreiben.

> [!NOTE]
> Einige Browser unterstützen den Eingabetyp `type="date"` nicht, sodass Sie das Datumsauswahl-Widget oder den Standardplatzhalter `dd/mm/yyyy` nicht erhalten, sondern stattdessen ein leeres Textfeld. Eine Lösung besteht darin, explizit das Attribut `placeholder='dd/mm/yyyy'` hinzuzufügen, sodass Sie in weniger leistungsfähigen Browsern dennoch Informationen über das gewünschte Textformat erhalten.

### Herausforderung: Das Todesdatum hinzufügen

In der oben genannten Vorlage fehlt ein Feld zum Eingeben des `date_of_death`. Erstellen Sie das Feld nach demselben Muster wie die Gruppe für das Geburtsdatum!

## Wie sieht das aus?

Starten Sie die Anwendung, öffnen Sie Ihren Browser und gehen Sie zu `http://localhost:3000/`, und wählen Sie dann den Link _Neuen Autor erstellen_. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite ungefähr wie der folgende Screenshot aussehen. Nachdem Sie einen Wert eingegeben haben, sollte er gespeichert werden, und Sie werden zur Detailseite des Autors weitergeleitet.

![Seite zum Erstellen eines Autors - Express Local Library Seite](locallibary_express_author_create_empty.png)

> [!NOTE]
> Wenn Sie mit verschiedenen Eingabeformaten für die Daten experimentieren, stellen Sie möglicherweise fest, dass sich das Format `yyyy-mm-dd` nicht richtig verhält. Dies liegt daran, dass JavaScript Datumszeichenfolgen als einschließlich der Zeit von 0 Stunden behandelt, aber zusätzlich Datumszeichenfolgen in diesem Format (dem ISO 8601 Standard) als einschließlich der Zeit 0 Stunden UTC statt der lokalen Zeit betrachtet. Wenn Ihre Zeitzone westlich von UTC liegt, wird die Datumsausgabe, da sie lokal ist, einen Tag vor dem von Ihnen eingegebenen Datum liegen. Dies ist eine von mehreren Komplexitäten (wie mehrteilige Nachnamen und Bücher mit mehreren Autoren), die wir hier nicht behandeln.

## Nächste Schritte

- Kehren Sie zurück zu [Express Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms).
- Fahren Sie mit dem nächsten Unterartikel von Teil 6 fort: [Buchformular erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_book_form).
