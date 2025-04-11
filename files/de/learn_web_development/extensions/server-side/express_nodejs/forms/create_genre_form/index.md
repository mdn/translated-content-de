---
title: Genre-Formular erstellen
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_genre_form
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Dieser Unterartikel zeigt, wie wir unsere Seite zur Erstellung von `Genre`-Objekten definieren (dies ist ein guter Ausgangspunkt, da das `Genre` nur ein Feld hat, seinen `name`, und keine Abhängigkeiten). Wie bei allen anderen Seiten müssen wir Routen, Controller und Ansichten einrichten.

## Validierungs- und Bereinigungsmethoden importieren

Um den _express-validator_ in unseren Controllern zu verwenden, müssen wir die Funktionen, die wir nutzen möchten, aus dem Modul `'express-validator'` _require_.

Öffnen Sie **/controllers/genreController.js** und fügen Sie am Anfang der Datei, vor den Routen-Handler-Funktionen, die folgende Zeile ein:

```js
const { body, validationResult } = require("express-validator");
```

> [!NOTE]
> Diese Syntax ermöglicht es uns, `body` und `validationResult` als zugehörige Middleware-Funktionen zu verwenden, wie Sie im Abschnitt zur POST-Route unten sehen werden. Es ist äquivalent zu:
>
> ```js
> const validator = require("express-validator");
> const body = validator.body;
> const validationResult = validator.validationResult;
> ```

## Controller—GET-Route

Finden Sie die exportierte `genre_create_get()` Controller-Methode und ersetzen Sie sie durch den folgenden Code.
Diese rendert die Ansicht **genre_form.pug** und übergibt eine Titel-Variable.

```js
// Display Genre create form on GET.
exports.genre_create_get = (req, res, next) => {
  res.render("genre_form", { title: "Create Genre" });
};
```

Beachten Sie, dass dies den Platzhalter-Asynchronhandler ersetzt, den wir im [Express Tutorial Teil 4: Routen und Controller](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes#genre_controller) hinzugefügt haben, durch eine "normale" Express-Routen-Handler-Funktion.
Wir benötigen den `asyncHandler()`-Wrapper für diese Route nicht, da sie keinen Code enthält, der eine Ausnahme auslösen könnte.

## Controller—POST-Route

Finden Sie die exportierte `genre_create_post()` Controller-Methode und ersetzen Sie sie durch den folgenden Code.

```js
// Handle Genre create on POST.
exports.genre_create_post = [
  // Validate and sanitize the name field.
  body("name", "Genre name must contain at least 3 characters")
    .trim()
    .isLength({ min: 3 })
    .escape(),

  // Process request after validation and sanitization.
  asyncHandler(async (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create a genre object with escaped and trimmed data.
    const genre = new Genre({ name: req.body.name });

    if (!errors.isEmpty()) {
      // There are errors. Render the form again with sanitized values/error messages.
      res.render("genre_form", {
        title: "Create Genre",
        genre: genre,
        errors: errors.array(),
      });
      return;
    } else {
      // Data from form is valid.
      // Check if Genre with same name already exists.
      const genreExists = await Genre.findOne({ name: req.body.name })
        .collation({ locale: "en", strength: 2 })
        .exec();
      if (genreExists) {
        // Genre exists, redirect to its detail page.
        res.redirect(genreExists.url);
      } else {
        await genre.save();
        // New genre saved. Redirect to genre detail page.
        res.redirect(genre.url);
      }
    }
  }),
];
```

Das erste, was auffällt, ist, dass anstelle einer einzelnen Middleware-Funktion (mit Argumenten `(req, res, next)`) der Controller ein _Array_ von Middleware-Funktionen angibt.
Das Array wird an die Router-Funktion übergeben und jede Methode wird der Reihe nach aufgerufen.

> [!NOTE]
> Dieser Ansatz ist erforderlich, da die Validatoren Middleware-Funktionen sind.

Die erste Methode im Array definiert einen Body-Validator (`body()`), der das Feld validiert und bereinigt. Dabei wird `trim()` verwendet, um alle führenden/nachgestellten Leerzeichen zu entfernen, überprüft, dass das _name_-Feld nicht leer ist, und dann `escape()`, um gefährliche HTML-Zeichen zu entfernen.

```js
[
  // Validate that the name field is not empty.
  body("name", "Genre name must contain at least 3 characters")
    .trim()
    .isLength({ min: 3 })
    .escape(),
  // …
];
```

Nachdem wir die Validatoren angegeben haben, erstellen wir eine Middleware-Funktion, um etwaige Validierungsfehler zu extrahieren. Wir verwenden `isEmpty()`, um zu überprüfen, ob es Fehler im Validierungsergebnis gibt. Wenn ja, rendern wir das Formular erneut und übergeben unser bereinigtes Genre-Objekt und das Array von Fehlermeldungen (`errors.array()`).

```js
// Process request after validation and sanitization.
asyncHandler(async (req, res, next) => {
  // Extract the validation errors from a request.
  const errors = validationResult(req);

  // Create a genre object with escaped and trimmed data.
  const genre = new Genre({ name: req.body.name });

  if (!errors.isEmpty()) {
    // There are errors. Render the form again with sanitized values/error messages.
    res.render("genre_form", {
      title: "Create Genre",
      genre: genre,
      errors: errors.array(),
    });
    return;
  } else {
    // Data from form is valid.
    // …
  }
});
```

Wenn die Genredaten gültig sind, führen wir eine Groß- und Kleinschreibung ignorierende Suche durch, um zu sehen, ob ein `Genre` mit demselben Namen bereits existiert (da wir keine doppelten oder fast doppelten Einträge erstellen möchten, die nur in der Groß- und Kleinschreibung variieren, wie: "Fantasy", "fantasy", "FaNtAsY" usw.).
Um die Groß- und Kleinschreibung sowie Akzente bei der Suche zu ignorieren, verketten wir die [`collation()`](<https://mongoosejs.com/docs/api/query.html#Query.prototype.collation()>) Methode und spezifizieren die Locale 'en' und eine Stärke von 2 (für weitere Informationen siehe das MongoDB-Thema [Collation](https://www.mongodb.com/docs/manual/reference/collation/)).

Wenn ein `Genre` mit einem passenden Namen bereits existiert, leiten wir zur Detailseite um.
Falls nicht, speichern wir das neue `Genre` und leiten zur Detailseite um.
Beachten Sie, dass wir hier das Ergebnis der Datenbankabfrage `awaiten`, indem wir dem gleichen Muster wie bei anderen Routen-Handlern folgen.

```js
// Check if Genre with same name already exists.
const genreExists = await Genre.findOne({ name: req.body.name })
  .collation({ locale: "en", strength: 2 })
  .exec();
if (genreExists) {
  // Genre exists, redirect to its detail page.
  res.redirect(genreExists.url);
} else {
  await genre.save();
  // New genre saved. Redirect to genre detail page.
  res.redirect(genre.url);
}
```

Dieses Muster wird in allen unseren Post-Controllern verwendet: Wir führen Validatoren (mit Bereinigern) aus, überprüfen auf Fehler und rendern entweder das Formular mit Fehlerinformationen erneut oder speichern die Daten.

## Ansicht

Die gleiche Ansicht wird in beiden Controllern/Routen `GET` und `POST` gerendert, wenn wir ein neues `Genre` erstellen (und später auch, wenn wir ein `Genre` _aktualisieren_). Im Fall von `GET` ist das Formular leer, und wir übergeben einfach eine Titel-Variable. Im Fall von `POST` hat der Benutzer bereits ungültige Daten eingegeben—im `genre`-Variablen geben wir eine bereinigte Version der eingegebenen Daten zurück und in der `errors`-Variablen geben wir ein Array von Fehlermeldungen zurück.
Der Code unten zeigt den Controller-Code zum Rendern der Vorlage in beiden Fällen.

```js
// Render the GET route
res.render("genre_form", { title: "Create Genre" });

// Render the POST route
res.render("genre_form", {
  title: "Create Genre",
  genre,
  errors: errors.array(),
});
```

Erstellen Sie **/views/genre_form.pug** und kopieren Sie den folgenden Text hinein.

```pug
extends layout

block content

  h1 #{title}

  form(method='POST')
    div.form-group
      label(for='name') Genre:
      input#name.form-control(type='text', placeholder='Fantasy, Poetry etc.' name='name' required value=(undefined===genre ? '' : genre.name) )
    button.btn.btn-primary(type='submit') Submit

  if errors
    ul
      for error in errors
        li!= error.msg
```

Vieles an dieser Vorlage wird Ihnen aus unseren vorherigen Tutorials bekannt vorkommen. Zuerst erweitern wir die Basisvorlage **layout.pug** und überschreiben den `block` mit dem Namen '**content**'. Dann haben wir eine Überschrift mit dem `title`, den wir vom Controller (über die `render()`-Methode) übergeben haben.

Als nächstes haben wir den Pug-Code für unser HTML-Formular, das `method="POST"` verwendet, um die Daten an den Server zu senden, und da die `action` eine leere Zeichenkette ist, werden die Daten an die gleiche URL wie die Seite gesendet.

Das Formular definiert ein einziges erforderliches Feld des Typs "text" namens "name". Der Standardwert (_value_) des Feldes hängt davon ab, ob die `genre`-Variable definiert ist. Wenn es von der `GET`-Route aufgerufen wird, ist es leer, da dies ein neues Formular ist. Wenn es von einer `POST`-Route aufgerufen wird, enthält es den (ungültigen) Wert, den der Benutzer ursprünglich eingegeben hat.

Der letzte Teil der Seite ist der Fehlercode. Dieser druckt eine Fehlerliste, wenn die Fehler-Variable definiert wurde (mit anderen Worten, dieser Abschnitt wird nicht angezeigt, wenn die Vorlage bei der `GET`-Route gerendert wird).

> [!NOTE]
> Dies ist nur eine Möglichkeit, die Fehler darzustellen. Sie können auch die Namen der betroffenen Felder aus der Fehler-Variable abrufen und verwenden diese, um zu steuern, wo die Fehlermeldungen dargestellt werden sollen, ob benutzerdefiniertes CSS angewendet werden soll usw.

## Wie sieht es aus?

Führen Sie die Anwendung aus, öffnen Sie Ihren Browser und gehen Sie zu `http://localhost:3000/`, dann wählen Sie den _Create new genre_ Link. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite ungefähr wie der folgende Screenshot aussehen. Nachdem Sie einen Wert eingegeben haben, sollte er gespeichert werden und Sie werden zur Genre-Detailseite weitergeleitet.

![Genre Create Page - Express Local Library site](locallibary_express_genre_create_empty.png)

Der einzige Fehler, den wir serverseitig validieren, ist, dass das Genrefeld mindestens drei Zeichen haben muss. Der Screenshot unten zeigt, wie die Fehlerliste aussehen würde, wenn Sie ein Genre mit nur einem oder zwei Zeichen eingeben (gelb hervorgehoben).

![Der Abschnitt Create Genre der Local Library-Anwendung. Die linke Spalte hat eine vertikale Navigationsleiste. Der rechte Abschnitt ist das Formular zum Erstellen eines neuen Genres mit einer Überschrift, die 'Create Genre' liest. Es gibt ein Eingabefeld, das mit 'Genre' beschriftet ist. Am unteren Rand befindet sich eine Schaltfläche zum Absenden. Unter der Schaltfläche zum Absenden befindet sich eine Fehlermeldung, die 'Genre name required' liest. Die Fehlermeldung wurde vom Autor dieses Artikels hervorgehoben. Es gibt keinen visuellen Hinweis im Formular, dass das Genre erforderlich ist oder dass die Fehlermeldung nur bei einem Fehler angezeigt wird.](locallibary_express_genre_create_error.png)

> [!NOTE]
> Unsere Validierung verwendet `trim()`, um sicherzustellen, dass Leerzeichen nicht als Genre-Name akzeptiert werden. Wir validieren auch, dass das Feld auf der Client-Seite nicht leer ist, indem wir das {{Glossary("Boolean/HTML", "boolesche Attribut")}} `required` zur Felddefinition im Formular hinzufügen:
>
> ```pug
> input#name.form-control(type='text', placeholder='Fantasy, Poetry etc.' name='name' required value=(undefined===genre ? '' : genre.name) )
> ```

## Nächste Schritte

1. Kehren Sie zurück zu [Express Tutorial Teil 6: Arbeiten mit Formularen.](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms)
2. Fahren Sie mit dem nächsten Unterartikel von Teil 6 fort: [Autor-Formular erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_author_form).
