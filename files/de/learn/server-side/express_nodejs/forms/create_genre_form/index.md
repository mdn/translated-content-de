---
title: Erstellen Sie das Genre-Formular
slug: Learn/Server-side/Express_Nodejs/forms/Create_genre_form
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

Dieser Unterartikel zeigt, wie wir unsere Seite zum Erstellen von `Genre`-Objekten definieren (dies ist ein guter Ausgangspunkt, da das `Genre` nur ein Feld, seinen `name`, und keine Abhängigkeiten hat). Wie bei allen anderen Seiten müssen wir Routen, Controller und Ansichten einrichten.

## Importieren von Validierungs- und Bereinigungsmethoden

Um den _express-validator_ in unseren Controllern zu verwenden, müssen wir die Funktionen, die wir verwenden möchten, aus dem `'express-validator'` Modul _require_.

Öffnen Sie **/controllers/genreController.js** und fügen Sie die folgende Zeile am Anfang der Datei ein, vor allen Routen-Handler-Funktionen:

```js
const { body, validationResult } = require("express-validator");
```

> [!NOTE]
> Diese Syntax erlaubt uns, `body` und `validationResult` als die zugehörigen Middleware-Funktionen zu verwenden, wie Sie im nachfolgenden Abschnitt zur POST-Route sehen werden. Es ist gleichbedeutend mit:
>
> ```js
> const validator = require("express-validator");
> const body = validator.body;
> const validationResult = validator.validationResult;
> ```

## Controller—GET-Route

Suchen Sie die exportierte `genre_create_get()` Controller-Methode und ersetzen Sie sie durch den folgenden Code.
Dies rendert die **genre_form.pug** Ansicht und übergibt dabei eine Titelvariable.

```js
// Display Genre create form on GET.
exports.genre_create_get = (req, res, next) => {
  res.render("genre_form", { title: "Create Genre" });
};
```

Beachten Sie, dass dies den Platzhalter für den asynchronen Handler ersetzt, den wir im [Express Tutorial Teil 4: Routen und Controller](/de/docs/Learn/Server-side/Express_Nodejs/routes#genre_controller) hinzugefügt haben, durch eine "normale" Express-Routen-Handler-Funktion. Wir benötigen den `asyncHandler()` Wrapper für diese Route nicht, da sie keinen Code enthält, der eine Ausnahme werfen kann.

## Controller—POST-Route

Suchen Sie die exportierte `genre_create_post()` Controller-Methode und ersetzen Sie sie durch den folgenden Code.

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
      // Data ist gültig.
      // Überprüfen, ob ein Genre mit demselben Namen bereits existiert.
      const genreExists = await Genre.findOne({ name: req.body.name })
        .collation({ locale: "en", strength: 2 })
        .exec();
      if (genreExists) {
        // Genre existiert, Weiterleitung zur Detailseite.
        res.redirect(genreExists.url);
      } else {
        await genre.save();
        // Neues Genre gespeichert. Weiterleitung zur Genre-Detailseite.
        res.redirect(genre.url);
      }
    }
  }),
];
```

Das erste, was zu beachten ist, ist, dass anstelle einer einzelnen Middleware-Funktion (mit den Argumenten `(req, res, next)`) der Controller ein _Array_ von Middleware-Funktionen angibt. Das Array wird an die Router-Funktion übergeben und jede Methode wird der Reihe nach aufgerufen.

> [!NOTE]
> Dieser Ansatz ist notwendig, da die Validatoren Middleware-Funktionen sind.

Die erste Methode im Array definiert einen Body-Validator (`body()`), der das Feld validiert und bereinigt. Dies verwendet `trim()`, um Leerzeichen am Ende/Anfang zu entfernen, prüft, dass das _name_-Feld nicht leer ist, und verwendet dann `escape()`, um gefährliche HTML-Zeichen zu entfernen).

```js
[
  // Sicherstellen, dass das Namensfeld nicht leer ist.
  body("name", "Genre name must contain at least 3 characters")
    .trim()
    .isLength({ min: 3 })
    .escape(),
  // …
];
```

Nachdem Sie die Validatoren angegeben haben, erstellen wir eine Middleware-Funktion, um alle Validierungsfehler zu extrahieren. Wir verwenden `isEmpty()`, um zu überprüfen, ob es Fehler im Validierungsergebnis gibt. Falls ja, wird das Formular erneut gerendert und dabei unser bereinigtes Genre-Objekt und das Array von Fehlermeldungen (`errors.array()`) übergeben.

```js
// Anfrage nach Validierung und Bereinigung verarbeiten.
asyncHandler(async (req, res, next) => {
  // Extrahiere die Validierungsfehler aus einer Anfrage.
  const errors = validationResult(req);

  // Erstelle ein Genre-Objekt mit bereinigten und getrimmten Daten.
  const genre = new Genre({ name: req.body.name });

  if (!errors.isEmpty()) {
    // Es gibt Fehler. Das Formular erneut mit bereinigten Werten/Fehlermeldungen rendern.
    res.render("genre_form", {
      title: "Create Genre",
      genre: genre,
      errors: errors.array(),
    });
    return;
  } else {
    // Die Formulardaten sind gültig.
    // …
  }
});
```

Wenn die Genre-Namensdaten gültig sind, führen wir eine Groß-/Kleinschreibungs-unabhängige Suche durch, um zu sehen, ob ein `Genre` mit demselben Namen bereits existiert (da wir keine doppelten oder fast doppelten Datensätze erzeugen wollen, die sich nur durch Groß-/Kleinschreibung unterscheiden, z.B.: "Fantasy", "fantasy", "FaNtAsY", usw.). Um Groß-/Kleinschreibung und Akzente beim Suchen zu ignorieren, verketten wir die [`collation()`](<https://mongoosejs.com/docs/api/query.html#Query.prototype.collation()>) Methode und geben den Gebietsschema-Wert 'en' und die Stärke 2 an (für weitere Informationen siehe das MongoDB [Collation](https://www.mongodb.com/docs/manual/reference/collation/) Thema).

Wenn ein `Genre` mit übereinstimmendem Namen bereits existiert, leiten wir auf seine Detailseite weiter. Wenn nicht, speichern wir das neue `Genre` und leiten zur Detailseite weiter. Beachten Sie, dass wir hier das Ergebnis der Datenbankabfrage `await`en, wie es bei anderen Routen-Handlern der Fall ist.

```js
// Prüfen, ob ein Genre mit demselben Namen bereits existiert.
const genreExists = await Genre.findOne({ name: req.body.name })
  .collation({ locale: "en", strength: 2 })
  .exec();
if (genreExists) {
  // Genre existiert, Weiterleitung zur Detailseite.
  res.redirect(genreExists.url);
} else {
  await genre.save();
  // Neues Genre gespeichert. Weiterleitung zur Genre-Detailseite.
  res.redirect(genre.url);
}
```

Dieses Muster wird in all unseren Post-Controllern verwendet: Wir führen Validatoren mit Bereinigern aus, überprüfen dann auf Fehler und rendern entweder das Formular mit Fehlerinformationen erneut oder speichern die Daten.

## Ansicht

Die gleiche Ansicht wird sowohl in den `GET`- als auch `POST`-Controllern/Routen verwendet, wenn wir ein neues `Genre` erstellen (und später auch, wenn wir ein `Genre` aktualisieren). Im `GET`-Fall ist das Formular leer und wir übergeben nur eine Titelvariable. Im `POST`-Fall hat der Benutzer zuvor ungültige Daten eingegeben – in der `genre`-Variablen übergeben wir eine bereinigte Version der eingegebenen Daten und in der `errors`-Variablen ein Array von Fehlermeldungen. Der folgende Code zeigt den Controller-Code zum Rendern der Vorlage in beiden Fällen.

```js
// Rendern der GET-Route
res.render("genre_form", { title: "Create Genre" });

// Rendern der POST-Route
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

Vieles von dieser Vorlage wird aus unseren vorherigen Tutorials bekannt sein. Zuerst erweitern wir die **layout.pug** Basisvorlage und überschreiben den `block` mit dem Namen '**content**'. Dann haben wir eine Überschrift mit dem `title`, den wir aus dem Controller (über die `render()`-Methode) übergeben haben.

Als nächstes haben wir den Pug-Code für unser HTML-Formular, das `method="POST"` verwendet, um die Daten an den Server zu senden; und da die `action` ein leerer String ist, werden die Daten an dieselbe URL wie die Seite gesendet.

Das Formular definiert ein einziges erforderliches Feld vom Typ "Text" namens "name". Der Standard-_value_ des Feldes hängt davon ab, ob die `genre`-Variable definiert ist. Wenn es von der `GET`-Route aufgerufen wird, bleibt es leer, da dies ein neues Formular ist. Wenn es von einer `POST`-Route aufgerufen wird, enthält es den ursprünglich vom Benutzer eingegebenen (ungültigen) Wert.

Der letzte Teil der Seite ist der Fehlercode. Dieser druckt eine Liste von Fehlermeldungen aus, wenn die Fehler-Variable definiert wurde (mit anderen Worten, dieser Abschnitt wird nicht erscheinen, wenn die Vorlage über die `GET`-Route gerendert wird).

> [!NOTE]
> Dies ist nur eine Möglichkeit, die Fehler anzuzeigen. Sie können auch die Namen der betroffenen Felder aus der Fehler-Variable erhalten und diese verwenden, um zu steuern, wo die Fehlermeldungen angezeigt werden sollen, ob benutzerdefiniertes CSS angewendet werden soll, usw.

## Wie sieht es aus?

Führen Sie die Anwendung aus, öffnen Sie Ihren Browser unter `http://localhost:3000/` und wählen Sie dann den Link _Neues Genre erstellen_. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite ungefähr wie der folgende Screenshot aussehen. Nachdem Sie einen Wert eingegeben haben, sollte er gespeichert werden, und Sie werden zur Genre-Detailseite weitergeleitet.

![Genre Create Page - Express Local Library site](locallibary_express_genre_create_empty.png)

Das einzige, gegen das wir serverseitig validieren, ist, dass das Genre-Feld mindestens drei Zeichen enthalten muss. Der folgende Screenshot zeigt, wie die Fehlerliste aussehen würde, wenn Sie ein Genre mit nur einem oder zwei Zeichen angeben (in Gelb hervorgehoben).

![The Create Genre section of the Local library application. The left column has a vertical navigation bar. The right section is the create a new Genre from with a heading that reads 'Create Genre'. There is one input field labeled 'Genre'. There is a submit button at the bottom. There is an error message that reads 'Genre name required' directly below the Submit button. The error message was highlighted by the author of this article. There is no visual indication in the form that the genre is required nor that the error message only appears on error.](locallibary_express_genre_create_error.png)

> [!NOTE]
> Unsere Validierung verwendet `trim()`, um sicherzustellen, dass Leerzeichen nicht als Genre-Name akzeptiert werden. Wir validieren auf der Client-Seite auch, dass das Feld nicht leer ist, indem wir das [boolesche Attribut](/de/docs/Glossary/Boolean/HTML) `required` zur Felddefinition im Formular hinzufügen:
>
> ```pug
> input#name.form-control(type='text', placeholder='Fantasy, Poetry etc.' name='name' required value=(undefined===genre ? '' : genre.name) )
> ```

## Nächste Schritte

1. Rückkehr zu [Express Tutorial Teil 6: Arbeiten mit Formularen.](/de/docs/Learn/Server-side/Express_Nodejs/forms)
2. Fahren Sie mit dem nächsten Unterartikel von Teil 6 fort: [Autor-Formular erstellen](/de/docs/Learn/Server-side/Express_Nodejs/forms/Create_author_form).
