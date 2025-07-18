---
title: Erstellen eines Autorenformulars
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_author_form
l10n:
  sourceCommit: 8443cb34d9944d8eb8e2c5add598bec26ed6d21f
---

Dieser Unterartikel zeigt, wie Sie eine Seite zum Erstellen von `Author`-Objekten definieren.

## Importieren von Validierungs- und Bereinigungsmethoden

Wie beim [Genres-Formular](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_genre_form) müssen wir, um _express-validator_ zu verwenden, die Funktionen \_require_n, die wir verwenden möchten.

Öffnen Sie **/controllers/authorController.js** und fügen Sie die folgende Zeile am Anfang der Datei ein (oberhalb der Routenfunktionen):

```js
const { body, validationResult } = require("express-validator");
```

## Controller—GET-Route

Suchen Sie die exportierte Methode `author_create_get()` im Controller und ersetzen Sie sie durch den folgenden Code. Dies rendert die Ansicht **author_form.pug** und übergibt eine `title`-Variable.

```js
// Display Author create form on GET.
exports.author_create_get = (req, res, next) => {
  res.render("author_form", { title: "Create Author" });
};
```

## Controller—POST-Route

Suchen Sie die exportierte Methode `author_create_post()` im Controller und ersetzen Sie sie durch den folgenden Code.

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
  async (req, res, next) => {
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
        author,
        errors: errors.array(),
      });
      return;
    }

    // Data from form is valid.
    // Save and redirect to new author record.
    await author.save();
    res.redirect(author.url);
  },
];
```

> [!WARNING]
> Validieren Sie _Namen_ niemals mit `isAlphanumeric()` (wie wir es oben getan haben), da es viele Namen gibt, die andere Zeichensätze verwenden.
> Wir tun dies hier, um zu demonstrieren, wie der Validator verwendet wird und wie er mit anderen Validatoren und Fehlermeldungen verkettet werden kann.

Die Struktur und das Verhalten dieses Codes ist fast genau gleich wie beim Erstellen eines `Genre`-Objekts. Zuerst validieren und bereinigen wir die Daten. Wenn die Daten ungültig sind, wird das Formular zusammen mit den ursprünglich vom Benutzer eingegebenen Daten und einer Liste von Fehlermeldungen erneut angezeigt. Wenn die Daten gültig sind, speichern wir den neuen Autoren-Datensatz und leiten den Benutzer zur Autorendetailseite weiter.

Anders als beim `Genre`-POST-Handler überprüfen wir nicht, ob das `Author`-Objekt bereits existiert, bevor wir es speichern. Man könnte argumentieren, dass wir das sollten, obwohl wir dadurch mehrere Autoren mit demselben Namen haben können.

Der Validierungscode demonstriert einige neue Funktionen:

- Wir können Validatoren verkettet verwenden und mit `withMessage()` die Fehlermeldung angeben, die angezeigt werden soll, wenn die vorhergehende Validierungsmethode fehlschlägt.
  Das macht es sehr einfach, spezifische Fehlermeldungen ohne viel Code-Duplikation zu liefern.

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

- Wir können die Funktion `optional()` verwenden, um eine nachfolgende Validierung nur dann auszuführen, wenn ein Feld eingegeben wurde (dies ermöglicht es uns, optionale Felder zu validieren).
  Zum Beispiel überprüfen wir unten, ob das optionale Geburtsdatum ein ISO8601-konformes Datum ist (das übergebene Objekt `{ values: "falsy" }` bedeutet, dass wir sowohl einen leeren String als auch `null` als leeren Wert akzeptieren).

  ```js
  [
    body("date_of_birth", "Invalid date of birth")
      .optional({ values: "falsy" })
      .isISO8601()
      .toDate(),
  ];
  ```

- Parameter werden als Strings von der Anfrage empfangen. Wir können `toDate()` (oder `toBoolean()`) verwenden, um diese in die richtigen JavaScript-Typen zu konvertieren (wie am Ende der Validator-Kette oben gezeigt).

## Ansicht

Erstellen Sie **/views/author_form.pug** und kopieren Sie den Text unten hinein.

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

Die Struktur und das Verhalten dieser Ansicht ist genau wie beim **genre_form.pug**-Template, daher werden wir es nicht erneut beschreiben.

> [!NOTE]
> Einige Browser unterstützen den Eingabetyp `type="date"` nicht, sodass Sie das Datumsauswahl-Widget oder den Standardplatzhalter `dd/mm/jjjj` nicht erhalten, sondern stattdessen ein leeres Textfeld. Eine Lösung dafür ist, das Attribut `placeholder='dd/mm/jjjj'` explizit hinzuzufügen, damit Sie auch in weniger leistungsfähigen Browsern Informationen über das gewünschte Textformat erhalten.

### Herausforderung: Hinzufügen des Todesdatums

Das obige Template fehlt ein Feld zum Eingeben des `date_of_death`. Erstellen Sie das Feld nach dem gleichen Muster wie die Geburtsdatums-Formulargruppe!

## Wie sieht es aus?

Führen Sie die Anwendung aus, öffnen Sie Ihren Browser unter `http://localhost:3000/`, und wählen Sie den Link _Create new author_. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite ungefähr wie der folgende Screenshot aussehen. Nachdem Sie einen Wert eingegeben haben, sollte er gespeichert werden, und Sie werden zur Autorendetailseite weitergeleitet.

![Autorenerstellungsseite - Express Local Library site](locallibary_express_author_create_empty.png)

> [!NOTE]
> Wenn Sie mit verschiedenen Eingabeformaten für die Daten experimentieren, stellen Sie möglicherweise fest, dass das Format `yyyy-mm-dd` nicht korrekt funktioniert. Das liegt daran, dass JavaScript Datumsstrings so behandelt, als ob sie die Zeit von 0 Stunden beinhalten, und zusätzlich Datumsstrings in diesem Format (dem ISO 8601-Standard) als Zeit von 0 Stunden UTC anstelle der lokalen Zeit behandelt. Wenn Ihre Zeitzone westlich von UTC liegt, wird die Datumsanzeige, da sie lokal ist, einen Tag vor dem von Ihnen eingegebenen Datum liegen. Dies ist eine von mehreren Komplexitäten (wie z. B. mehrteilige Familiennamen und Bücher mit mehreren Autoren), die wir hier nicht behandeln.

## Nächste Schritte

- Zurück zum [Express Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms) gehen.
- Fahren Sie mit dem nächsten Unterartikel von Teil 6 fort: [Buch-Formular erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_book_form).
