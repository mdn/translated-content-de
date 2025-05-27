---
title: Genre-Formular erstellen
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_genre_form
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

Dieser Unterartikel zeigt, wie wir unsere Seite definieren, um `Genre`-Objekte zu erstellen (dies ist ein guter Einstiegspunkt, da das `Genre` nur ein Feld, seinen `name`, hat und keine Abhängigkeiten). Wie bei allen anderen Seiten müssen wir Routen, Controller und Ansichten einrichten.

## Validierungs- und Bereinigungsmethoden importieren

Um den _express-validator_ in unseren Controllern zu verwenden, müssen wir die Funktionen, die wir verwenden möchten, aus dem Modul `'express-validator'` _anfordern_.

Öffnen Sie **/controllers/genreController.js** und fügen Sie die folgende Zeile am Anfang der Datei ein, vor allen Route-Handler-Funktionen:

```js
const { body, validationResult } = require("express-validator");
```

Beachten Sie, dass `require("express-validator")` nur ein Funktionsaufruf ist, der ein Objekt zurückgibt, und wir die beiden Eigenschaften `body` und `validationResult` aus dem Objekt [destruieren](/de/docs/Web/JavaScript/Reference/Operators/Destructuring), sodass wir sie direkt als Variablen verwenden können.

## Controller—GET-Route

Suchen Sie die exportierte `genre_create_get()` Controller-Methode und ersetzen Sie sie durch den folgenden Code.
Dies rendert die **genre_form.pug** Ansicht und übergibt eine Titelvariable.

```js
// Display Genre create form on GET.
exports.genre_create_get = (req, res, next) => {
  res.render("genre_form", { title: "Create Genre" });
};
```

Bitte beachten Sie, dass dies den Platzhalter-Asynchronhandler ersetzt, den wir im [Express-Tutorial Teil 4: Routen und Controller](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes#genre_controller) hinzugefügt haben, durch eine "normale" Express-Route-Handler-Funktion.
Wir benötigen den `asyncHandler()` Wrapper für diese Route nicht, da sie keinen Code enthält, der eine Ausnahme werfen kann.

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
        genre,
        errors: errors.array(),
      });
      return;
    }
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
  }),
];
```

Das Erste, was auffällt, ist, dass der Controller anstelle einer einzelnen Middleware-Funktion (mit den Argumenten `(req, res, next)`) ein _Array_ von Middleware-Funktionen angibt.
Das Array wird an die Router-Funktion übergeben und jede Methode wird der Reihe nach aufgerufen.

> [!NOTE]
> Dieser Ansatz ist erforderlich, da die Validatoren Middleware-Funktionen sind.

Die erste Methode im Array definiert einen Body-Validator (`body()`), der das Feld validiert und bereinigt. Dies verwendet `trim()`, um Leerzeichen zu entfernen, überprüft, dass das _name_ Feld nicht leer ist, und verwendet dann `escape()`, um gefährliche HTML-Zeichen zu entfernen).

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

Nachdem wir die Validatoren angegeben haben, erstellen wir eine Middleware-Funktion, um mögliche Validierungsfehler zu extrahieren. Wir verwenden `isEmpty()`, um zu überprüfen, ob es Fehler im Validierungsergebnis gibt. Wenn ja, rendern wir das Formular erneut und übergeben unser bereinigtes Genre-Objekt und das Array der Fehlermeldungen (`errors.array()`).

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
      genre,
      errors: errors.array(),
    });
    return;
  }
  // Data from form is valid.
  // …
});
```

Falls die Genre-Namensdaten gültig sind, führen wir eine nicht auf Groß-/Kleinschreibung achtende Suche durch, um zu sehen, ob bereits ein `Genre` mit demselben Namen existiert (da wir keine doppelten oder nahezu doppelten Datensätze erstellen möchten, die sich nur in der Groß-/Kleinschreibung unterscheiden, wie: "Fantasy", "fantasy", "FaNtAsY" und so weiter).
Um Groß-/Kleinschreibung und Akzente bei der Suche zu ignorieren, verkettet man die [`collation()`](<https://mongoosejs.com/docs/api/query.html#Query.prototype.collation()>) Methode, wobei die Sprache 'en' und Stärke 2 spezifiziert werden (für weitere Informationen siehe das MongoDB-Thema [Collation](https://www.mongodb.com/docs/manual/reference/collation/)).

Wenn ein `Genre` mit einem übereinstimmenden Namen bereits existiert, leiten wir zur Detailseite weiter.
Falls nicht, speichern wir das neue `Genre` und leiten zur Detailseite weiter.
Beachten Sie, dass wir hier das Ergebnis der Datenbankabfrage `await`-en, und demselben Muster folgen wie bei anderen Route-Handlern.

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

Dieses Muster wird in all unseren Post-Controllern verwendet: Wir führen Validatoren (mit Bereinigern) aus, überprüfen dann auf Fehler und rendern entweder das Formular mit Fehlerinformationen erneut oder speichern die Daten.

## Ansicht

Dasselbe Formular wird in den `GET`- und `POST`-Controllern/Routen gerendert, wenn wir ein neues `Genre` erstellen (und später auch, wenn wir ein `Genre` _aktualisieren_). Im `GET`-Fall ist das Formular leer, und wir übergeben nur eine Titelvariable. Im `POST`-Fall hat der Benutzer zuvor ungültige Daten eingegeben — in der `genre`-Variable geben wir eine bereinigte Version der eingegebenen Daten zurück und in der `errors`-Variable ein Array von Fehlermeldungen.
Der folgende Code zeigt den Controller-Code zum Rendern des Templates für beide Fälle.

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

Erstellen Sie **/views/genre_form.pug** und kopieren Sie den untenstehenden Text hinein.

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

Vieles von diesem Template wird Ihnen aus unseren früheren Tutorials bekannt vorkommen. Zuerst erweitern wir das **layout.pug** Basistemplate und überschreiben den `block` namens '**content**'. Dann haben wir eine Überschrift mit dem `title`, den wir aus dem Controller (über die `render()`-Methode) übergeben haben.

Als nächstes haben wir den Pug-Code für unser HTML-Formular, das `method="POST"` verwendet, um die Daten an den Server zu senden. Da die `action` ein leerer String ist, werden die Daten an dieselbe URL wie die Seite gesendet.

Das Formular definiert ein einziges erforderliches Feld vom Typ "text" namens "name". Der Standard-_value_ des Feldes hängt davon ab, ob die `genre`-Variable definiert ist. Wenn es von der `GET`-Route aufgerufen wird, ist es leer, da dies ein neues Formular ist. Wenn es von einer `POST`-Route aufgerufen wird, enthält es den (ungültigen) Wert, den der Benutzer ursprünglich eingegeben hat.

Der letzte Teil der Seite ist der Fehlercode. Dieser druckt eine Liste von Fehlern, falls die Fehler-Variable definiert wurde (mit anderen Worten: dieser Abschnitt wird nicht erscheinen, wenn das Template auf der `GET`-Route gerendert wird).

> [!NOTE]
> Dies ist nur eine Möglichkeit, die Fehler darzustellen. Sie können auch die Namen der betroffenen Felder aus der Fehler-Variable erhalten und diese verwenden, um zu steuern, wo die Fehlermeldungen dargestellt werden, ob benutzerdefiniertes CSS angewendet werden soll, usw.

## Wie sieht es aus?

Führen Sie die Anwendung aus, öffnen Sie Ihren Browser unter `http://localhost:3000/` und wählen Sie dann den Link _Create new genre_ aus. Wenn alles korrekt eingerichtet ist, sollte Ihre Website ungefähr so aussehen wie auf dem folgenden Screenshot. Nachdem Sie einen Wert eingegeben haben, sollte er gespeichert werden, und Sie werden zur Genre-Detailseite weitergeleitet.

![Genre Create Page - Express Local Library site](locallibary_express_genre_create_empty.png)

Der einzige Fehler, den wir serverseitig validieren, ist, dass das Genre-Feld mindestens drei Zeichen haben muss. Der untenstehende Screenshot zeigt, wie die Fehlerliste aussehen würde, wenn Sie ein Genre mit nur einem oder zwei Zeichen angeben (hervorgehoben in Gelb).

![The Create Genre section of the Local library application. The left column has a vertical navigation bar. The right section is the create a new Genre from with a heading that reads 'Create Genre'. There is one input field labeled 'Genre'. There is a submit button at the bottom. There is an error message that reads 'Genre name required' directly below the Submit button. The error message was highlighted by the author of this article. There is no visual indication in the form that the genre is required nor that the error message only appears on error.](locallibary_express_genre_create_error.png)

> [!NOTE]
> Unsere Validierung verwendet `trim()`, um sicherzustellen, dass Leerzeichen nicht als Genre-Name akzeptiert werden. Wir validieren auch, dass das Feld auf der Clientseite nicht leer ist, indem wir das {{Glossary("Boolean/HTML", "boolesche Attribut")}} `required` zur Felddefinition im Formular hinzufügen:
>
> ```pug
> input#name.form-control(type='text', placeholder='Fantasy, Poetry etc.' name='name' required value=(undefined===genre ? '' : genre.name) )
> ```

## Nächste Schritte

1. Kehren Sie zurück zu [Express-Tutorial Teil 6: Arbeiten mit Formularen.](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms)
2. Fahren Sie fort mit dem nächsten Unterartikel von Teil 6: [Autor-Formular erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_author_form).
