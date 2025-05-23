---
title: Genre-Formular erstellen
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_genre_form
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

Dieser Unterartikel zeigt, wie wir unsere Seite definieren, um `Genre`-Objekte zu erstellen (dies ist ein guter Ausgangspunkt, da das `Genre` nur ein Feld hat, seinen `name`, und keine Abhängigkeiten). Wie bei allen anderen Seiten müssen wir Routen, Controller und Ansichten einrichten.

## Importieren von Validierungs- und Bereinigungsmethoden

Um den _express-validator_ in unseren Controllern zu verwenden, müssen wir die Funktionen, die wir nutzen möchten, aus dem Modul `'express-validator'` _require_.

Öffnen Sie **/controllers/genreController.js**, und fügen Sie die folgende Zeile am Anfang der Datei hinzu, vor den Route-Handler-Funktionen:

```js
const { body, validationResult } = require("express-validator");
```

Beachten Sie, dass `require("express-validator")` nur ein Funktionsaufruf ist, der ein Objekt zurückgibt, und wir [destrukturieren](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) die beiden Eigenschaften `body` und `validationResult` aus dem Objekt, damit wir sie direkt als Variablen verwenden können.

## Controller—GET-Route

Suchen Sie die exportierte `genre_create_get()` Controller-Methode und ersetzen Sie sie durch den folgenden Code. Dies rendert die **genre_form.pug**-Ansicht und übergibt eine Titelvariable.

```js
// Display Genre create form on GET.
exports.genre_create_get = (req, res, next) => {
  res.render("genre_form", { title: "Create Genre" });
};
```

Beachten Sie, dass dies den Platzhalter-Asynchronhandler ersetzt, den wir im [Express Tutorial Teil 4: Routen und Controller](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes#genre_controller) hinzugefügt haben, durch eine "normale" Express-Routenhandler-Funktion. Wir benötigen nicht den `asyncHandler()`-Wrapper für diese Route, da sie keinen Code enthält, der eine Ausnahme werfen kann.

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

Das Erste, was zu beachten ist, dass der Controller statt einer einzigen Middleware-Funktion (mit Argumenten `(req, res, next)`) ein _Array_ von Middleware-Funktionen angibt. Das Array wird an die Router-Funktion übergeben und jede Methode wird der Reihe nach aufgerufen.

> [!NOTE]
> Dieser Ansatz ist notwendig, da die Validatoren Middleware-Funktionen sind.

Die erste Methode im Array definiert einen Body-Validator (`body()`), der das Feld validiert und bereinigt. Sie verwendet `trim()`, um führende/nachgestellte Leerzeichen zu entfernen, überprüft, dass das Feld _name_ nicht leer ist, und verwendet dann `escape()`, um gefährliche HTML-Zeichen zu entfernen.

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

Nachdem wir die Validatoren angegeben haben, erstellen wir eine Middleware-Funktion, um Validierungsfehler zu extrahieren. Wir verwenden `isEmpty()`, um zu überprüfen, ob es Fehler im Validierungsergebnis gibt. Wenn vorhanden, rendern wir das Formular erneut, indem wir unser bereinigtes Genre-Objekt und das Array der Fehlermeldungen (`errors.array()`) übergeben.

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
  }
  // Data from form is valid.
  // …
});
```

Wenn die Genre-Namensdaten gültig sind, führen wir eine nicht fallunterscheidende Suche durch, um zu sehen, ob bereits ein `Genre` mit demselben Namen existiert (da wir keine doppelten oder nahezu doppelten Einträge erstellen möchten, die sich nur in Groß- und Kleinschreibung unterscheiden, wie: "Fantasy", "fantasy", "FaNtAsY" und so weiter). Um Groß- und Kleinschreibung sowie Akzente bei der Suche zu ignorieren, verketten wir die Methode [`collation()`](<https://mongoosejs.com/docs/api/query.html#Query.prototype.collation()>), indem wir die Locale 'en' und die Stärke 2 spezifizieren (für weitere Informationen siehe das MongoDB-Thema [Sortierung](https://www.mongodb.com/docs/manual/reference/collation/)).

Wenn bereits ein `Genre` mit einem übereinstimmenden Namen existiert, leiten wir zur Detailseite des Genres um. Wenn nicht, speichern wir das neue `Genre` und leiten zur Detailseite weiter. Beachten Sie, dass wir hier auf das Ergebnis der Datenbankabfrage `await`en, wobei wir dem gleichen Muster wie in anderen Routenhandlern folgen.

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

Dieses Muster wird in allen unseren Post-Controllern verwendet: Wir führen Validatoren (mit Bereinigern) aus, prüfen dann auf Fehler und rendern entweder das Formular mit Fehlermeldungen erneut oder speichern die Daten.

## Ansicht

Die gleiche Ansicht wird sowohl in den `GET`- als auch in den `POST`-Controllern/Routen gerendert, wenn wir ein neues `Genre` erstellen (und später wird sie auch verwendet, wenn wir ein `Genre` _aktualisieren_). Im Fall des `GET` ist das Formular leer und wir übergeben nur eine Titelvariable. Im Fall des `POST` hat der Benutzer zuvor ungültige Daten eingegeben—im `genre`-Variable übergeben wir eine bereinigte Version der eingegebenen Daten und in der `errors`-Variable übergeben wir ein Array von Fehlermeldungen. Der folgende Code zeigt den Controller-Code für das Rendern der Vorlage in beiden Fällen.

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

Ein Großteil dieser Vorlage wird Ihnen aus unseren vorherigen Tutorials bekannt vorkommen. Zuerst erweitern wir die **layout.pug**-Basisvorlage und überschreiben den `block`, der '**content**' heißt. Anschließend haben wir eine Überschrift mit dem `title`, den wir vom Controller (über die `render()`-Methode) übergeben haben.

Als Nächstes haben wir den Pug-Code für unser HTML-Formular, das `method="POST"` verwendet, um die Daten an den Server zu senden und, weil `action` ein leerer String ist, die Daten an die gleiche URL wie die Seite sendet.

Das Formular definiert ein einziges erforderliches Feld vom Typ "text" mit dem Namen "name". Der Standardwert des Feldes hängt davon ab, ob die Variable `genre` definiert ist. Wenn es von der `GET`-Route aufgerufen wird, wird es leer sein, da es ein neues Formular ist. Wenn es von einer `POST`-Route aufgerufen wird, enthält es den (ungültigen) Wert, der ursprünglich vom Benutzer eingegeben wurde.

Der letzte Teil der Seite ist der Fehlercode. Dieser druckt eine Liste von Fehlern aus, falls die Fehler-Variable definiert wurde (mit anderen Worten, dieser Abschnitt wird nicht erscheinen, wenn die Vorlage auf der `GET`-Route gerendert wird).

> [!NOTE]
> Dies ist nur eine Möglichkeit, die Fehler zu rendern. Sie können auch die Namen der betroffenen Felder von der Fehler-Variable erhalten und diese verwenden, um zu steuern, wo die Fehlermeldungen gerendert werden, ob benutzerdefiniertes CSS angewendet werden soll usw.

## Wie sieht es aus?

Führen Sie die Anwendung aus, öffnen Sie Ihren Browser auf `http://localhost:3000/`, und wählen Sie dann den Link _Create new genre_ aus. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite etwa wie der folgende Screenshot aussehen. Nachdem Sie einen Wert eingegeben haben, sollte er gespeichert werden, und Sie werden zur Genre-Detailseite weitergeleitet.

![Genre-Erstellungsseite - Express Local Library-Site](locallibary_express_genre_create_empty.png)

Der einzige Fehler, den wir serverseitig validieren, ist, dass das Genre-Feld mindestens drei Zeichen haben muss. Der Screenshot unten zeigt, wie die Fehlerliste aussehen würde, wenn Sie ein Genre mit nur einem oder zwei Zeichen angeben (hervorgehoben in Gelb).

![Der Bereich Genre erstellen der Lokalen Bibliotheksanwendung. Die linke Spalte hat eine vertikale Navigationsleiste. Der rechte Abschnitt ist das Erstellen eines neuen Genres mit einer Überschrift, die 'Create Genre' lautet. Es gibt ein Eingabefeld mit der Bezeichnung 'Genre'. Am unteren Rand befindet sich eine Schaltfläche 'Submit'. Direkt unterhalb der Schaltfläche 'Submit' gibt es eine Fehlermeldung, die lautet 'Genre name required'. Die Fehlermeldung wurde vom Autor dieses Artikels hervorgehoben. Es gibt keine visuelle Anzeige im Formular, dass das Genre erforderlich ist, noch dass die Fehlermeldung nur bei einem Fehler angezeigt wird.](locallibary_express_genre_create_error.png)

> [!NOTE]
> Unsere Validierung verwendet `trim()`, um sicherzustellen, dass Leerzeichen nicht als Genre-Name akzeptiert werden. Wir validieren auch, dass das Feld auf der Clientseite nicht leer ist, indem wir das {{Glossary("Boolean/HTML", "Boolesche Attribut")}} `required` zur Felddefinition im Formular hinzufügen:
>
> ```pug
> input#name.form-control(type='text', placeholder='Fantasy, Poetry etc.' name='name' required value=(undefined===genre ? '' : genre.name) )
> ```

## Nächste Schritte

1. Kehren Sie zurück zu [Express Tutorial Teil 6: Arbeiten mit Formularen.](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms)
2. Fahren Sie mit dem nächsten Unterartikel von Teil 6 fort: [Autor-Formular erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_author_form).
