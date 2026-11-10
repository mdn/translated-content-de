---
title: Formular zum Erstellen eines Autors
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_author_form
l10n:
  sourceCommit: d775e1249487f1a7ab9a8a031c70ca71bc892d63
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_genre_form", "Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_book_form", "Learn_web_development/Extensions/Server-side/Express_Nodejs/forms")}}

Dieser Unterartikel zeigt, wie Sie eine Seite zum Erstellen von `Author`-Objekten definieren.

## Methoden zur Validierung und Bereinigung importieren

Wie beim [Formular zum Erstellen eines Genres](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_genre_form) müssen wir die Funktionen, die wir verwenden möchten, _importieren_, um _express-validator_ zu nutzen.

Öffnen Sie **controllers/authorController.js** und fügen Sie am Anfang der Datei (oberhalb der Routenfunktionen) die folgende Zeile hinzu:

```js
import { body, validationResult } from "express-validator";
```

## Controller – GET-Route

Suchen Sie die exportierte Controller-Methode `authorCreateGet()` und ersetzen Sie sie durch den folgenden Code. Dieser rendert die View **author_form.pug** und übergibt eine `title`-Variable.

```js
// Display Author create form on GET.
export const authorCreateGet = (req, res, next) => {
  res.render("author_form", { title: "Create Author" });
};
```

## Controller – POST-Route

Suchen Sie die exportierte Controller-Methode `authorCreatePost()` und ersetzen Sie sie durch den folgenden Code.

```js
// Handle Author create on POST.
export const authorCreatePost = [
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
> Validieren Sie _Namen_ niemals mit `isAlphanumeric()` (wie wir es oben getan haben), da viele Namen Zeichen aus anderen Zeichensätzen enthalten.
> Wir tun es hier, um zu zeigen, wie der Validator verwendet und mit weiteren Validatoren sowie der Fehlerausgabe verkettet werden kann.

Aufbau und Verhalten dieses Codes entsprechen fast genau dem Code zum Erstellen eines `Genre`-Objekts. Zuerst validieren und bereinigen wir die Daten. Sind die Daten ungültig, zeigen wir das Formular erneut an – zusammen mit den ursprünglich eingegebenen Daten und einer Liste von Fehlermeldungen. Sind die Daten gültig, speichern wir den neuen Autorendatensatz und leiten die Benutzer zur Detailseite des Autors weiter.

Anders als beim POST-Handler für `Genre` prüfen wir vor dem Speichern nicht, ob das `Author`-Objekt bereits existiert. Das wäre möglicherweise sinnvoll, denn derzeit können mehrere Autoren denselben Namen haben.

Der Validierungscode zeigt mehrere neue Möglichkeiten:

- Wir können Validatoren verketten und mit `withMessage()` die Fehlermeldung festlegen, die angezeigt wird, wenn die vorherige Validierungsmethode fehlschlägt.
  So lassen sich ohne viel doppelten Code spezifische Fehlermeldungen ausgeben.

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

- Mit der Funktion `optional()` können wir eine nachfolgende Validierung nur dann ausführen, wenn ein Feld ausgefüllt wurde. So können wir optionale Felder validieren.
  Im folgenden Beispiel prüfen wir, ob das optionale Geburtsdatum ein ISO8601-konformes Datum ist. Das übergebene Objekt `{ values: "falsy" }` bedeutet, dass sowohl eine leere Zeichenfolge als auch `null` als leerer Wert akzeptiert werden.

  ```js
  [
    body("date_of_birth", "Invalid date of birth")
      .optional({ values: "falsy" })
      .isISO8601()
      .toDate(),
  ];
  ```

- Parameter werden aus der Anfrage als Zeichenfolgen empfangen. Mit `toDate()` (oder `toBoolean()`) können wir sie in die passenden JavaScript-Typen umwandeln (wie am Ende der obigen Validatorenkette gezeigt).

## View

Erstellen Sie **views/author_form.pug** und fügen Sie den folgenden Text ein.

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

Aufbau und Verhalten dieser View entsprechen genau der Vorlage **genre_form.pug**. Daher beschreiben wir sie nicht noch einmal.

> [!NOTE]
> Einige Browser unterstützen den Eingabetyp `type="date"` nicht. In diesen Browsern werden weder ein Datumsauswahl-Widget noch der standardmäßige Platzhalter `dd/mm/yyyy` angezeigt; stattdessen erscheint ein leeres Textfeld. Eine mögliche Abhilfe besteht darin, das Attribut `placeholder='dd/mm/yyyy'` ausdrücklich hinzuzufügen. So erhalten Benutzer auch in Browsern mit eingeschränkter Unterstützung einen Hinweis auf das gewünschte Textformat.

### Aufgabe: Sterbedatum hinzufügen

In der obigen Vorlage fehlt ein Feld für die Eingabe von `date_of_death`. Erstellen Sie das Feld nach demselben Muster wie die Formulargruppe für das Geburtsdatum!

## Wie sieht das Ergebnis aus?

Starten Sie die Anwendung, öffnen Sie `http://localhost:3000/` in Ihrem Browser und wählen Sie den Link _Neuen Autor erstellen_. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite ungefähr wie im folgenden Screenshot aussehen. Nachdem Sie einen Wert eingegeben haben, sollte er gespeichert werden und Sie sollten zur Detailseite des Autors weitergeleitet werden.

![Seite zum Erstellen eines Autors auf der Express-Local-Library-Website](locallibary_express_author_create_empty.png)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_genre_form", "Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_book_form", "Learn_web_development/Extensions/Server-side/Express_Nodejs/forms")}}
