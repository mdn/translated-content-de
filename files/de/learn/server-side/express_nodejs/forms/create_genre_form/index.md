---
title: Genre-Formular erstellen
slug: Learn/Server-side/Express_Nodejs/forms/Create_genre_form
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

Dieser Unterartikel zeigt, wie wir unsere Seite zum Erstellen von `Genre`-Objekten definieren (dies ist ein guter Ausgangspunkt, da das `Genre` nur ein Feld besitzt, seinen `name`, und keine Abhängigkeiten hat). Wie bei allen anderen Seiten müssen wir Routen, Controller und Ansichten einrichten.

## Validierungs- und Sanitisierungsmethoden importieren

Um den _express-validator_ in unseren Controllern zu verwenden, müssen wir die Funktionen, die wir nutzen möchten, aus dem `'express-validator'`-Modul _require_n.

Öffnen Sie **/controllers/genreController.js** und fügen Sie folgende Zeile am Anfang der Datei ein, bevor Sie mit den Routenhändler-Funktionen beginnen:

```js
const { body, validationResult } = require("express-validator");
```

> [!NOTE]
> Diese Syntax erlaubt es uns, `body` und `validationResult` als die zugehörigen Middleware-Funktionen zu verwenden, wie Sie im unten stehenden Abschnitt über die Post-Route sehen werden. Sie ist äquivalent zu:
> 
> ```js
> const validator = require("express-validator");
> const body = validator.body;
> const validationResult = validator.validationResult;
> ```

## Controller—GET-Route

Finden Sie die exportierte `genre_create_get()` Controller-Methode und ersetzen Sie sie durch den folgenden Code. Dieser rendert die **genre_form.pug** Ansicht und übergibt eine Titel-Variable.

```js
// Display Genre create form on GET.
exports.genre_create_get = (req, res, next) => {
  res.render("genre_form", { title: "Create Genre" });
};
```

Beachten Sie, dass dies den Platzhalter für den asynchronen Handler ersetzt, den wir im [Express-Leitfaden Teil 4: Routen und Controller](/de/docs/Learn/Server-side/Express_Nodejs/routes#genre_controller) hinzugefügt haben, durch eine "normale" Express-Routenhandler-Funktion. Wir benötigen den `asyncHandler()` Wrapper für diese Route nicht, da sie keinen Code enthält, der eine Ausnahme werfen kann.

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

Das erste, was zu beachten ist, ist, dass der Controller nicht aus einer einzelnen Middleware-Funktion (mit Argumenten `(req, res, next)`) besteht, sondern ein _Array_ von Middleware-Funktionen spezifiziert. Das Array wird an die Router-Funktion übergeben und jede Methode wird nacheinander aufgerufen.

> [!NOTE]
> Dieser Ansatz ist notwendig, da die Validatoren Middleware-Funktionen sind.

Die erste Methode im Array definiert einen Body-Validator (`body()`), der das Feld validiert und saniert. Dabei wird `trim()` verwendet, um Leerzeichen am Anfang und Ende zu entfernen, geprüft, dass das _name_-Feld nicht leer ist, und `escape()`, um gefährliche HTML-Zeichen zu entfernen.

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

Nachdem die Validatoren spezifiziert wurden, erstellen wir eine Middleware-Funktion, um eventuell auftretende Validierungsfehler zu extrahieren. Wir verwenden `isEmpty()`, um zu überprüfen, ob es Fehler im Validierungsergebnis gibt. Falls ja, rendern wir das Formular erneut, indem wir unser saniertes Genre-Objekt und das Array der Fehlermeldungen (`errors.array()`) übergeben.

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

Wenn die Genredaten gültig sind, führen wir eine Groß-/Kleinschreibung-unabhängige Suche durch, um zu sehen, ob ein `Genre` mit dem gleichen Namen bereits existiert (da wir keine doppelten oder fast doppelten Einträge erstellen wollen, die sich nur in der Groß-/Kleinschreibung unterscheiden, wie: "Fantasy", "fantasy", "FaNtAsY" usw.). Um bei der Suche Groß-/Kleinschreibung und Akzente zu ignorieren, nutzen wir die [`collation()`](<https://mongoosejs.com/docs/api/query.html#Query.prototype.collation()>) Methode, wobei wir die 'en'-Lokale und die Stärke 2 angeben (für weitere Informationen siehe das MongoDB [Kollation](https://www.mongodb.com/docs/manual/reference/collation/) Thema).

Wenn ein `Genre` mit einem übereinstimmenden Namen bereits existiert, leiten wir zur Detailseite um. Wenn nicht, speichern wir das neue `Genre` und leiten zur Detailseite um. Beachten Sie, dass wir hier auf das Ergebnis der Datenbankabfrage `await`en, indem wir dem gleichen Muster wie bei anderen Routenhandlern folgen.

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

Dieses Muster wird in all unseren Post-Controllern verwendet: Wir führen Validatoren (mit Sanisierern) aus, überprüfen auf Fehler und rendern entweder das Formular mit Fehlerinformationen erneut oder speichern die Daten.

## Ansicht

Die gleiche Ansicht wird in beiden `GET`- und `POST`-Controllern/Routen verwendet, wenn wir ein neues `Genre` erstellen (und später auch, wenn wir ein `Genre` _aktualisieren_). Im `GET`-Fall ist das Formular leer, und wir übergeben nur eine Titel-Variable. Im `POST`-Fall hat der Benutzer zuvor ungültige Daten eingegeben—im `genre`-Variable geben wir eine sanierte Version der eingegebenen Daten zurück, und im `errors`-Variable geben wir ein Array von Fehlermeldungen zurück. Der unten stehende Code zeigt den Code des Controllers zum Rendern der Vorlage in beiden Fällen.

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

Erstellen Sie **/views/genre_form.pug** und kopieren Sie den untenstehenden Text.

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

Viel von diesem Template wird Ihnen aus unseren vorherigen Tutorials bekannt vorkommen. Zuerst erweitern wir das **layout.pug** Basistemplate und überschreiben den `block` namens '**content**'. Danach haben wir eine Überschrift mit dem `title`, den wir aus dem Controller (über die `render()`-Methode) übergeben haben.

Als Nächstes haben wir den Pug-Code für unser HTML-Formular, das `method="POST"` verwendet, um die Daten an den Server zu senden, und da die `action` ein leerer String ist, wird es die Daten an dieselbe URL wie die Seite senden.

Das Formular definiert ein einziges erforderliches Feld vom Typ "text" namens "name". Der Standard-_Wert_ des Feldes hängt davon ab, ob die `genre`-Variable definiert ist. Wenn es von der `GET`-Route aufgerufen wird, wird es leer sein, da dies ein neues Formular ist. Wenn es von einer `POST`-Route aufgerufen wird, enthält es den ursprünglich eingegebenen (ungültigen) Wert des Benutzers.

Der letzte Teil der Seite ist der Fehlercode. Dieser druckt eine Liste von Fehlern, wenn die Fehler-Variable definiert wurde (mit anderen Worten, dieser Abschnitt wird nicht angezeigt, wenn das Template auf der `GET`-Route gerendert wird).

> [!NOTE]
> Dies ist nur eine Möglichkeit, die Fehler zu rendern. Sie können auch die Namen der betroffenen Felder aus der Fehler-Variable erhalten und diese verwenden, um zu steuern, wo die Fehlermeldungen gerendert werden, ob benutzerdefiniertes CSS angewendet werden soll usw.

## Wie sieht es aus?

Führen Sie die Anwendung aus, öffnen Sie Ihren Browser unter `http://localhost:3000/`, und wählen Sie den Link _Neues Genre erstellen_. Wenn alles richtig eingerichtet ist, sollte Ihre Website in etwa wie im folgenden Screenshot aussehen. Nachdem Sie einen Wert eingegeben haben, sollte er gespeichert werden und Sie werden zur Genre-Detailseite weitergeleitet.

![Genre-Erstellungsseite - Express Local Library-Website](locallibary_express_genre_create_empty.png)

Der einzige Fehler, den wir serverseitig validieren, ist, dass das Genre-Feld mindestens drei Zeichen haben muss. Der untenstehende Screenshot zeigt, wie die Fehlerliste aussieht, wenn Sie ein Genre mit nur einem oder zwei Zeichen angeben (hervorgehoben in Gelb).

![Der Bereich 'Create Genre' der Bibliotheksanwendung. Die linke Spalte hat eine vertikale Navigationsleiste. Der rechte Abschnitt ist das Formular zum Erstellen eines neuen Genres mit einer Überschrift, die 'Genre erstellen' lautet. Es gibt ein Eingabefeld mit der Bezeichnung 'Genre'. Unten gibt es eine Schaltfläche zum Absenden. Es gibt eine Fehlermeldung unterhalb der Schaltfläche 'Senden', die 'Genre-Name erforderlich' lautet. Die Fehlermeldung wurde vom Autor dieses Artikels hervorgehoben. Im Formular gibt es keinen visuellen Hinweis darauf, dass das Genre erforderlich ist, noch dass die Fehlermeldung nur bei einem Fehler angezeigt wird.](locallibary_express_genre_create_error.png)

> [!NOTE]
> Unsere Validierung verwendet `trim()`, um sicherzustellen, dass Leerzeichen nicht als Genre-Name akzeptiert werden. Wir validieren auch, dass das Feld clientseitig nicht leer ist, indem wir das [boolesche Attribut](/de/docs/Glossary/Boolean/HTML) `required` zur Felddefinition im Formular hinzufügen:
>
> ```pug
> input#name.form-control(type='text', placeholder='Fantasy, Poetry etc.' name='name' required value=(undefined===genre ? '' : genre.name) )
> ```

## Nächste Schritte

1. Kehren Sie zurück zu [Express-Leitfaden Teil 6: Arbeiten mit Formularen.](/de/docs/Learn/Server-side/Express_Nodejs/forms)
2. Fahren Sie mit dem nächsten Unterartikel von Teil 6 fort: [Autorenformular erstellen](/de/docs/Learn/Server-side/Express_Nodejs/forms/Create_author_form).
