---
title: Erstellen Sie ein Autor-Formular
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_author_form
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

Dieser Unterartikel zeigt, wie eine Seite zum Erstellen von `Author` Objekten definiert wird.

## Validierungs- und Bereinigungsmethoden importieren

Wie beim [Genre-Formular](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_genre_form) müssen wir, um _express-validator_ zu verwenden, die Funktionen _require_ die wir verwenden möchten.

Öffnen Sie **/controllers/authorController.js** und fügen Sie die folgende Zeile oben in der Datei hinzu (über den Routenfunktionen):

```js
const { body, validationResult } = require("express-validator");
```

## Controller—GET-Route

Suchen Sie die exportierte `author_create_get()` Controller-Methode und ersetzen Sie sie durch den folgenden Code. Dieser rendert die **author_form.pug** Ansicht und übergibt eine `title` Variable.

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
        author,
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
> Validieren Sie niemals _Namen_ mit `isAlphanumeric()` (wie wir es oben getan haben), da es viele Namen gibt, die andere Zeichensätze verwenden.
> Wir tun es hier, um zu demonstrieren, wie der Validator verwendet wird und wie er mit anderen Validatoren und Fehlerberichten verknüpft werden kann.

Die Struktur und das Verhalten dieses Codes sind fast genau wie beim Erstellen eines `Genre` Objekts. Zuerst validieren und bereinigen wir die Daten. Wenn die Daten ungültig sind, zeigen wir das Formular erneut an, zusammen mit den ursprünglich vom Benutzer eingegebenen Daten und einer Liste von Fehlermeldungen. Wenn die Daten gültig sind, speichern wir den neuen Datensatz des Autors und leiten den Benutzer zur Autorendetailseite weiter.

Im Gegensatz zum `Genre` Post-Handler überprüfen wir nicht, ob das `Author` Objekt bereits existiert, bevor wir es speichern. Man könnte argumentieren, dass wir das tun sollten, obwohl wir jetzt mehrere Autoren mit demselben Namen haben können.

Der Validierungscode demonstriert mehrere neue Funktionen:

- Wir können Validatoren verknüpfen, indem wir `withMessage()` verwenden, um die Fehlermeldung anzugeben, die angezeigt werden soll, wenn die vorherige Validierungsmethode fehlschlägt.
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

- Wir können die Funktion `optional()` verwenden, um eine nachfolgende Validierung nur dann auszuführen, wenn ein Feld eingegeben wurde (damit können wir optionale Felder validieren).
  Zum Beispiel überprüfen wir unten, dass das optionale Geburtsdatum ein ISO8601-konformes Datum ist (das übergebene `{ values: "falsy" }` Objekt bedeutet, dass wir entweder eine leere Zeichenkette oder `null` als leeren Wert akzeptieren).

  ```js
  [
    body("date_of_birth", "Invalid date of birth")
      .optional({ values: "falsy" })
      .isISO8601()
      .toDate(),
  ];
  ```

- Parameter werden als Zeichenfolgen von der Anfrage empfangen. Wir können `toDate()` (oder `toBoolean()`) verwenden, um sie in die richtigen JavaScript-Typen zu konvertieren (wie am Ende der Validatorenkette oben gezeigt).

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

Die Struktur und das Verhalten für diese Ansicht sind genau wie bei der **genre_form.pug** Vorlage, daher beschreiben wir sie nicht erneut.

> [!NOTE]
> Einige Browser unterstützen den Eingabetyp `type="date"` nicht, sodass Sie das Datumsauswahl-Widget oder den Standard-`dd/mm/yyyy` Platzhalter nicht erhalten, sondern stattdessen ein leeres, einfaches Textfeld. Ein Workaround besteht darin, das Attribut `placeholder='dd/mm/yyyy'` explizit hinzuzufügen, sodass Sie unter weniger leistungsfähigen Browsern dennoch Informationen über das gewünschte Textformat erhalten.

### Herausforderung: Hinzufügen des Sterbedatums

Das obige Template fehlt ein Feld zur Eingabe des `date_of_death`. Erstellen Sie das Feld nach dem gleichen Muster wie die Geburtsdatums-Formulargruppe!

## Wie sieht es aus?

Führen Sie die Anwendung aus, öffnen Sie Ihren Browser unter `http://localhost:3000/`, und wählen Sie dann den Link _Create new author_. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite dem folgenden Screenshot ähneln. Nachdem Sie einen Wert eingegeben haben, sollte er gespeichert werden und Sie werden zur Autorendetailseite weitergeleitet.

![Autor Erstellungsseite - Express Local Library site](locallibary_express_author_create_empty.png)

> [!NOTE]
> Wenn Sie mit verschiedenen Eingabeformaten für die Daten experimentieren, stellen Sie möglicherweise fest, dass das Format `yyyy-mm-dd` fehlerhaft ist. Dies liegt daran, dass JavaScript Datumzeichenfolgen als die Zeit von 0 Stunden enthält, darüber hinaus jedoch Datumzeichenfolgen in diesem Format (dem ISO 8601-Standard) als die Zeit von 0 Stunden UTC und nicht die lokale Zeit behandelt. Wenn Ihre Zeitzone westlich von UTC liegt, wird die Datumsausgabe, die lokal ist, einen Tag vor dem von Ihnen eingegebenen Datum anzeigen. Dies ist eine von mehreren Komplikationen (wie mehrteiligen Familiennamen und Büchern mit mehreren Autoren), die wir hier nicht behandeln.

## Nächste Schritte

- Kehren Sie zum [Express Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms) zurück.
- Fahren Sie mit dem nächsten Unterartikel von Teil 6 fort: [Create Book form](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_book_form).
