---
title: Create Author Form
slug: Learn/Server-side/Express_Nodejs/forms/Create_author_form
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

Dieser Unterartikel zeigt, wie man eine Seite zur Erstellung von `Author`-Objekten definiert.

## Importieren von Validierungs- und Bereinigungsmethoden

Wie bei dem [Genre-Formular](/de/docs/Learn/Server-side/Express_Nodejs/forms/Create_genre_form), müssen wir, um _express-validator_ zu verwenden, die benötigten Funktionen \_require_n.

Öffnen Sie **/controllers/authorController.js** und fügen Sie die folgende Zeile am Anfang der Datei (oberhalb der Routenfunktionen) hinzu:

```js
const { body, validationResult } = require("express-validator");
```

## Controller—GET-Route

Finden Sie die exportierte `author_create_get()` Controller-Methode und ersetzen Sie sie mit dem folgenden Code. Dieser rendert die **author_form.pug** View und übergibt eine `title`-Variable.

```js
// Display Author create form on GET.
exports.author_create_get = (req, res, next) => {
  res.render("author_form", { title: "Create Author" });
};
```

## Controller—POST-Route

Finden Sie die exportierte `author_create_post()` Controller-Methode und ersetzen Sie sie mit dem folgenden Code.

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
> Validieren Sie _Namen_ niemals mit `isAlphanumeric()` (wie wir es oben getan haben), da es viele Namen gibt, die andere Zeichensätze verwenden.
> Wir tun dies hier, um zu demonstrieren, wie der Validator verwendet wird und wie er mit anderen Validatoren und Fehlerberichten verkettet werden kann.

Die Struktur und das Verhalten dieses Codes sind fast identisch mit denen zur Erstellung eines `Genre`-Objekts. Zuerst validieren und bereinigen wir die Daten. Wenn die Daten ungültig sind, zeigen wir das Formular zusammen mit den ursprünglich vom Benutzer eingegebenen Daten und einer Liste von Fehlermeldungen erneut an. Wenn die Daten gültig sind, speichern wir den neuen Autoren-Datensatz und leiten den Benutzer zur Detailseite des Autors um.

Im Gegensatz zum `Genre`-Post-Handler überprüfen wir nicht, ob das `Author`-Objekt bereits existiert, bevor wir es speichern. Man könnte argumentieren, dass wir sollten, auch wenn wir so derzeit mehrere Autoren mit dem gleichen Namen haben können.

Der Validierungscode zeigt einige neue Funktionen:

- Wir können Validatoren verkettet verwenden und mit `withMessage()` die Fehlermeldung angeben, die angezeigt werden soll, wenn die vorherige Validierungsmethode fehlschlägt.
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

- Mit der Funktion `optional()` können wir eine nachfolgende Validierung nur dann ausführen, wenn ein Feld ausgefüllt wurde (dies erlaubt uns die Validierung optionaler Felder).
  Zum Beispiel überprüfen wir unten, ob das optionale Geburtsdatum ein ISO8601-konformes Datum ist (das übergebene Objekt `{ values: "falsy" }` bedeutet, dass wir entweder einen leeren String oder `null` als leeren Wert akzeptieren).

  ```js
  [
    body("date_of_birth", "Invalid date of birth")
      .optional({ values: "falsy" })
      .isISO8601()
      .toDate(),
  ];
  ```

- Parameter werden als Strings von der Anfrage empfangen. Wir können `toDate()` (oder `toBoolean()`) verwenden, um diese in die korrekten JavaScript-Typen zu konvertieren (wie am Ende der Validatorenkette oben gezeigt).

## View

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

Die Struktur und das Verhalten dieser Ansicht sind genau die gleichen wie für die **genre_form.pug** Vorlage, also werden wir sie nicht erneut beschreiben.

> [!NOTE]
> Einige Browser unterstützen das Eingabefeld `type="date"` nicht, sodass Sie nicht das Datumsauswahl-Widget oder die Standardeingabeaufforderung `dd/mm/yyyy` erhalten, sondern stattdessen ein leeres Textfeld. Eine Umgehungslösung ist, das Attribut `placeholder='dd/mm/yyyy'` explizit hinzuzufügen, damit Sie in weniger fähigen Browsern dennoch Informationen über das gewünschte Textformat erhalten.

### Herausforderung: Hinzufügen des Todesdatums

Das obige Template fehlt ein Feld für die Eingabe des `date_of_death`. Erstellen Sie das Feld nach dem gleichen Muster wie die Geburtsdatums-Formulargruppe!

## Wie sieht es aus?

Führen Sie die Anwendung aus, öffnen Sie Ihren Browser unter `http://localhost:3000/` und wählen Sie den Link _Create new author_. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite etwa so aussehen wie in folgendem Screenshot. Nachdem Sie einen Wert eingegeben haben, sollte er gespeichert werden und Sie werden zur Autordetailseite weitergeleitet.

![Author Create Page - Express Local Library site](locallibary_express_author_create_empty.png)

> [!NOTE]
> Wenn Sie mit verschiedenen Eingabeformaten für die Daten experimentieren, könnten Sie feststellen, dass das Format `yyyy-mm-dd` sich nicht wie erwartet verhält. Dies liegt daran, dass JavaScript Datum-Strings so behandelt, als ob sie die Zeit von 0 Stunden enthalten, und zusätzlich Datum-Strings in diesem Format (dem ISO 8601 Standard) als die Zeit 0 Stunden UTC anstatt der lokalen Zeit betrachtet. Wenn Ihre Zeitzone westlich von UTC liegt, wird die Datumsanzeige, da sie lokal ist, einen Tag vor dem von Ihnen eingegebenen Datum befinden. Dies ist eine von mehreren Komplexitäten (wie mehrteilige Familiennamen und Bücher mit mehreren Autoren), die wir hier nicht ansprechen.

## Nächste Schritte

- Kehren Sie zurück zum [Express Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn/Server-side/Express_Nodejs/forms).
- Fahren Sie mit dem nächsten Unterartikel von Teil 6 fort: [Create Book Form](/de/docs/Learn/Server-side/Express_Nodejs/forms/Create_book_form).
