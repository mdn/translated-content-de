---
title: Autorformular erstellen
slug: Learn/Server-side/Express_Nodejs/forms/Create_author_form
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

Dieser Unterartikel zeigt, wie man eine Seite zur Erstellung von `Author`-Objekten definiert.

## Importieren von Validierungs- und Bereinigungsmethoden

Wie beim [Genre-Formular](/de/docs/Learn/Server-side/Express_Nodejs/forms/Create_genre_form), müssen wir zur Verwendung von _express-validator_ die Funktionen, die wir nutzen möchten, _require_.

Öffnen Sie **/controllers/authorController.js** und fügen Sie die folgende Zeile am Anfang der Datei hinzu (über den Routenfunktionen):

```js
const { body, validationResult } = require("express-validator");
```

## Controller—GET-Route

Suchen Sie die exportierte `author_create_get()` Controller-Methode und ersetzen Sie sie durch den folgenden Code. Dies rendert die **author_form.pug** Ansicht und übergibt eine `title`-Variable.

```js
// Anzeige des Autoren-Erstellungsformulars bei GET.
exports.author_create_get = (req, res, next) => {
  res.render("author_form", { title: "Create Author" });
};
```

## Controller—POST-Route

Suchen Sie die exportierte `author_create_post()` Controller-Methode und ersetzen Sie sie durch den folgenden Code.

```js
// Verarbeitung der Autoren-Erstellung bei POST.
exports.author_create_post = [
  // Validieren und Bereinigen der Felder.
  body("first_name")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Vorname muss angegeben werden.")
    .isAlphanumeric()
    .withMessage("Vorname enthält nicht-alphanumerische Zeichen."),
  body("family_name")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Nachname muss angegeben werden.")
    .isAlphanumeric()
    .withMessage("Nachname enthält nicht-alphanumerische Zeichen."),
  body("date_of_birth", "Ungültiges Geburtsdatum")
    .optional({ values: "falsy" })
    .isISO8601()
    .toDate(),
  body("date_of_death", "Ungültiges Sterbedatum")
    .optional({ values: "falsy" })
    .isISO8601()
    .toDate(),

  // Verarbeitung der Anfrage nach Validierung und Bereinigung.
  asyncHandler(async (req, res, next) => {
    // Extrahieren der Validierungsfehler aus einer Anfrage.
    const errors = validationResult(req);

    // Erstellen eines Autor-Objekts mit bereinigten und getrimmten Daten
    const author = new Author({
      first_name: req.body.first_name,
      family_name: req.body.family_name,
      date_of_birth: req.body.date_of_birth,
      date_of_death: req.body.date_of_death,
    });

    if (!errors.isEmpty()) {
      // Es gibt Fehler. Formular erneut mit bereinigten Werten/Fehlermeldungen rendern.
      res.render("author_form", {
        title: "Create Author",
        author: author,
        errors: errors.array(),
      });
      return;
    } else {
      // Daten aus Formular sind gültig.

      // Autor speichern.
      await author.save();
      // Zu neuem Autoren-Datensatz weiterleiten.
      res.redirect(author.url);
    }
  }),
];
```

> [!WARNING]
> Validieren Sie niemals _Namen_ mit `isAlphanumeric()` (wie wir es oben getan haben), da viele Namen andere Zeichensätze verwenden.
> Wir tun es hier, um zu demonstrieren, wie der Validator verwendet wird und wie er mit anderen Validatoren und Fehlermeldungen kombiniert werden kann.

Die Struktur und das Verhalten dieses Codes ist fast genauso wie bei der Erstellung eines `Genre`-Objekts. Zuerst validieren und bereinigen wir die Daten. Wenn die Daten ungültig sind, zeigen wir das Formular erneut mit den ursprünglich vom Benutzer eingegebenen Daten und einer Liste von Fehlermeldungen an. Wenn die Daten gültig sind, speichern wir den neuen Autorendatensatz und leiten den Benutzer zur Autorendetailseite weiter.

Im Gegensatz zum `Genre`-Post-Handler überprüfen wir nicht, ob das `Author`-Objekt bereits existiert, bevor wir es speichern. Man könnte argumentieren, dass wir es tun sollten, obwohl wir derzeit mehrere Autoren mit demselben Namen haben können.

Der Validierungscode demonstriert einige neue Funktionen:

- Wir können Validatoren kombinieren, indem wir `withMessage()` verwenden, um die Fehlermeldung anzugeben, die angezeigt werden soll, wenn die vorherige Validierungsmethode fehlschlägt.
  Dies macht es sehr einfach, spezifische Fehlermeldungen ohne viel Code-Duplikation bereitzustellen.

  ```js
  [
    // Validieren und Bereinigen der Felder.
    body("first_name")
      .trim()
      .isLength({ min: 1 })
      .escape()
      .withMessage("Vorname muss angegeben werden.")
      .isAlphanumeric()
      .withMessage("Vorname enthält nicht-alphanumerische Zeichen."),
    // …
  ];
  ```

- Wir können die `optional()`-Funktion verwenden, um eine nachfolgende Validierung nur dann auszuführen, wenn ein Feld eingegeben wurde (dies ermöglicht es uns, optionale Felder zu validieren).
  Zum Beispiel überprüfen wir unten, ob das optionale Geburtsdatum ein ISO8601-konformes Datum ist (das übergebene `{ values: "falsy" }` Objekt bedeutet, dass wir entweder einen leeren String oder `null` als leeren Wert akzeptieren).

  ```js
  [
    body("date_of_birth", "Ungültiges Geburtsdatum")
      .optional({ values: "falsy" })
      .isISO8601()
      .toDate(),
  ];
  ```

- Parameter werden als Strings aus der Anforderung entgegengenommen. Wir können `toDate()` (oder `toBoolean()`) verwenden, um diese in die richtigen JavaScript-Typen zu konvertieren (wie am Ende der Validierungskette oben gezeigt).

## Ansicht

Erstellen Sie **/views/author_form.pug** und kopieren Sie den unten stehenden Text hinein.

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

Die Struktur und das Verhalten dieser Ansicht ist genau dasselbe wie für die **genre_form.pug** Vorlage, daher werden wir es nicht noch einmal beschreiben.

> [!NOTE]
> Einige Browser unterstützen das Eingabefeld `type="date"` nicht, sodass Sie nicht das Datumsauswahl-Widget oder den Standardplatzhalter `dd/mm/yyyy` erhalten, sondern stattdessen ein leeres einfaches Textfeld. Ein Workaround besteht darin, das Attribut `placeholder='dd/mm/yyyy'` explizit hinzuzufügen, sodass in weniger fähigen Browsern dennoch Informationen über das gewünschte Textformat bereitgestellt werden.

### Herausforderung: Hinzufügen des Sterbedatums

Im obigen Template fehlt ein Feld zur Eingabe des `date_of_death`. Erstellen Sie das Feld nach dem gleichen Muster wie die Geburtsdatums-Formulargruppe!

## Wie sieht es aus?

Starten Sie die Anwendung, öffnen Sie Ihren Browser unter `http://localhost:3000/`, und wählen Sie den Link _Neuen Autor erstellen_. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite ungefähr wie der folgende Screenshot aussehen. Nachdem Sie einen Wert eingegeben haben, sollte er gespeichert werden und Sie werden zur Autorendetailseite weitergeleitet.

![Autorenerstellungsseite - Express Local Library Seite](locallibary_express_author_create_empty.png)

> [!NOTE]
> Wenn Sie mit verschiedenen Eingabeformaten für die Daten experimentieren, stellen Sie möglicherweise fest, dass das Format `yyyy-mm-dd` problematisch ist. Dies liegt daran, dass JavaScript Datumsstrings als inklusive der Uhrzeit von 0 Stunden behandelt, aber zusätzlich Datumsstrings in diesem Format (dem ISO 8601-Standard) als inklusive der Uhrzeit 0 Stunden UTC betrachtet, anstatt der lokalen Zeit. Wenn Ihre Zeitzone westlich von UTC liegt, wird die Datumsanzeige, da sie lokal ist, einen Tag vor dem von Ihnen eingegebenen Datum angezeigt. Dies ist eine von mehreren Komplexitäten (wie mehrteilige Nachnamen und Bücher mit mehreren Autoren), die wir hier nicht adressieren.

## Nächste Schritte

- Kehren Sie zurück zu [Express Tutorial Teil 6: Umgang mit Formularen](/de/docs/Learn/Server-side/Express_Nodejs/forms).
- Fahren Sie fort mit dem nächsten Unterartikel von Teil 6: [Buchformular erstellen](/de/docs/Learn/Server-side/Express_Nodejs/forms/Create_book_form).
