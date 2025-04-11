---
title: Erstellen Sie ein Autorenformular
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_author_form
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Dieser Unterartikel zeigt, wie Sie eine Seite zum Erstellen von `Author`-Objekten definieren.

## Import von Validierungs- und Bereinigungsmethoden

Wie beim [Genre-Formular](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_genre_form), müssen wir, um _express-validator_ zu nutzen, die Funktionen, die wir verwenden möchten, _require_-n.

Öffnen Sie **/controllers/authorController.js** und fügen Sie die folgende Zeile am Anfang der Datei (oberhalb der Routenfunktionen) hinzu:

```js
const { body, validationResult } = require("express-validator");
```

## Controller—GET-Route

Suchen Sie die exportierte `author_create_get()` Controller-Methode und ersetzen Sie sie durch den folgenden Code. Dieser rendert die **author_form.pug**-Ansicht und übergibt eine `title`-Variable.

```js
// Display Author create form on GET.
exports.author_create_get = (req, res, next) => {
  res.render("author_form", { title: "Create Author" });
};
```

## Controller—POST-Route

Suchen Sie die exportierte `author_create_post()` Controller-Methode und ersetzen Sie sie durch den folgenden Code.

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
> Validieren Sie _Namen_ niemals mit `isAlphanumeric()`, wie wir es oben getan haben, da es viele Namen gibt, die andere Zeichensätze verwenden.
> Wir tun dies hier, um zu demonstrieren, wie der Validator verwendet wird und wie er mit anderen Validatoren und Fehlerberichten verknüpft werden kann.

Die Struktur und das Verhalten dieses Codes sind fast genau gleich wie beim Erstellen eines `Genre`-Objekts. Zuerst validieren und bereinigen wir die Daten. Wenn die Daten ungültig sind, zeigen wir das Formular erneut an, zusammen mit den ursprünglich vom Benutzer eingegebenen Daten und einer Liste von Fehlermeldungen. Wenn die Daten gültig sind, speichern wir den neuen Autoren-Datensatz und leiten den Benutzer zur Autorendetailseite weiter.

Im Gegensatz zum `Genre`-POST-Handler überprüfen wir nicht, ob das `Author`-Objekt bereits existiert, bevor wir es speichern. Man könnte argumentieren, dass wir dies tun sollten, jedoch können wir so mehrere Autoren mit demselben Namen haben.

Der Validierungscode zeigt einige neue Features:

- Wir können Validatoren verketten und `withMessage()` verwenden, um die Fehlermeldung anzugeben, die angezeigt werden soll, wenn die vorhergehende Validierungsmethode fehlschlägt. Dies macht es sehr einfach, spezifische Fehlermeldungen bereitzustellen, ohne viel Code zu duplizieren.

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

- Wir können die Funktion `optional()` verwenden, um eine nachfolgende Validierung nur dann auszuführen, wenn ein Feld eingegeben wurde (dies ermöglicht es uns, optionale Felder zu validieren). Beispielsweise überprüfen wir unten, ob das optionale Geburtsdatum ein ISO8601-konformes Datum ist (das übergebene `{ values: "falsy" }`-Objekt bedeutet, dass wir entweder eine leere Zeichenfolge oder `null` als leeren Wert akzeptieren).

  ```js
  [
    body("date_of_birth", "Invalid date of birth")
      .optional({ values: "falsy" })
      .isISO8601()
      .toDate(),
  ];
  ```

- Parameter werden als Zeichenfolgen von der Anfrage empfangen. Wir können `toDate()` (oder `toBoolean()`) verwenden, um diese in die richtigen JavaScript-Typen zu konvertieren (wie am Ende der Validierungskette oben gezeigt).

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

Die Struktur und das Verhalten dieser Ansicht sind genau gleich wie bei der Vorlage **genre_form.pug**, daher werden wir sie hier nicht erneut beschreiben.

> [!NOTE]
> Einige Browser unterstützen den Eingabetyp `type="date"` nicht, sodass Sie nicht das Datumswahl-Widget oder den Standard `dd/mm/yyyy`-Platzhalter erhalten, sondern stattdessen ein leeres Textfeld. Eine Möglichkeit, dies zu umgehen, besteht darin, explizit das Attribut `placeholder='dd/mm/yyyy'` hinzuzufügen, sodass Sie auch in weniger fähigen Browsern Informationen über das gewünschte Textformat erhalten.

### Herausforderung: Hinzufügen des Todesdatums

In der obigen Vorlage fehlt ein Feld zur Eingabe des `date_of_death`. Erstellen Sie das Feld nach dem gleichen Muster wie die Geburtsdatums-Formulargruppe!

## Wie sieht es aus?

Führen Sie die Anwendung aus, öffnen Sie Ihren Browser unter `http://localhost:3000/`, und wählen Sie den Link _Create new author_. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite in etwa wie im folgenden Screenshot aussehen. Nachdem Sie einen Wert eingegeben haben, sollte er gespeichert werden und Sie gelangen zur Autorendetailseite.

![Autorenerstellungsseite - Express Local Library Seite](locallibary_express_author_create_empty.png)

> [!NOTE]
> Wenn Sie mit verschiedenen Eingabeformaten für die Daten experimentieren, stellen Sie möglicherweise fest, dass das Format `yyyy-mm-dd` nicht wie erwartet funktioniert. Dies liegt daran, dass JavaScript Datumszeichenfolgen als Zeit von 0 Stunden betrachtet, aber zusätzlich Datumszeichenfolgen in diesem Format (dem ISO8601-Standard) als Zeit 0 Stunden UTC und nicht als lokale Zeit behandelt. Wenn Ihre Zeitzone westlich von UTC liegt, wird das angezeigte Datum, da es lokal ist, einen Tag vor dem von Ihnen eingegebenen Datum liegen. Dies ist eine von mehreren Komplexitäten (wie mehrteilige Familiennamen und mehrfache Autoren bei Büchern), die wir hier nicht behandeln.

## Nächste Schritte

- Kehren Sie zurück zu [Express Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms).
- Fahren Sie fort zum nächsten Unterartikel von Teil 6: [Erstellen Sie ein Buchformular](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_book_form).
