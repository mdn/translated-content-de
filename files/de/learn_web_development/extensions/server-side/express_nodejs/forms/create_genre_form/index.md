---
title: Erstellen Sie ein Genreformular
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_genre_form
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Dieser Unterartikel zeigt, wie wir unsere Seite definieren, um `Genre`-Objekte zu erstellen (dies ist ein guter Ausgangspunkt, da `Genre` nur ein Feld, seinen `name`, und keine Abhängigkeiten hat). Wie bei allen anderen Seiten müssen wir Routen, Controller und Ansichten einrichten.

## Importieren von Validierungs- und Bereinigungsmethoden

Um den _express-validator_ in unseren Controllern zu verwenden, müssen wir die Funktionen, die wir verwenden möchten, aus dem Modul `'express-validator'` \_require_n.

Öffnen Sie **/controllers/genreController.js** und fügen Sie die folgende Zeile am Anfang der Datei hinzu, bevor Sie einen Routen-Handler definieren:

```js
const { body, validationResult } = require("express-validator");
```

> [!NOTE]
> Diese Syntax ermöglicht es uns, `body` und `validationResult` als die zugehörigen Middleware-Funktionen zu verwenden, wie Sie im Abschnitt der Post-Route weiter unten sehen werden. Es ist gleichbedeutend mit:
>
> ```js
> const validator = require("express-validator");
> const body = validator.body;
> const validationResult = validator.validationResult;
> ```

## Controller—GET-Route

Finden Sie die exportierte `genre_create_get()` Controller-Methode und ersetzen Sie sie mit dem folgenden Code.
Dies rendert die **genre_form.pug**-Ansicht und übergibt eine `title`-Variable.

```js
// Display Genre create form on GET.
exports.genre_create_get = (req, res, next) => {
  res.render("genre_form", { title: "Create Genre" });
};
```

Beachten Sie, dass dies den Platzhalter für den asynchronen Handler ersetzt, den wir im [Express Tutorial Teil 4: Routen und Controller](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes#genre_controller) hinzugefügt haben, mit einer „normalen“ Express-Routen-Handler-Funktion. Wir benötigen den `asyncHandler()`-Wrapper für diese Route nicht, da sie keinen Code enthält, der eine Ausnahme werfen kann.

## Controller—POST-Route

Finden Sie die exportierte `genre_create_post()` Controller-Methode und ersetzen Sie sie mit dem folgenden Code.

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

Das erste, was zu beachten ist, ist, dass der Controller anstelle einer einzelnen Middleware-Funktion (mit Argumenten `(req, res, next)`) ein _Array_ von Middleware-Funktionen spezifiziert. Das Array wird an die Router-Funktion übergeben und jede Methode wird nacheinander aufgerufen.

> [!NOTE]
> Dieser Ansatz ist erforderlich, da die Validatoren Middleware-Funktionen sind.

Die erste Methode im Array definiert einen Body-Validator (`body()`), der das Feld validiert und bereinigt. Dies verwendet `trim()`, um führende/nachfolgende Leerzeichen zu entfernen, überprüft, dass das _name_-Feld nicht leer ist, und verwendet dann `escape()`, um gefährliche HTML-Zeichen zu entfernen.

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

Nachdem wir die Validatoren spezifiziert haben, erstellen wir eine Middleware-Funktion, um möglicherweise auftretende Validierungsfehler zu extrahieren. Wir verwenden `isEmpty()`, um zu überprüfen, ob in den Validierungsergebnissen Fehler vorliegen. Falls ja, rendern wir das Formular erneut und übergeben unser bereinigtes Genre-Objekt und das Array der Fehlermeldungen (`errors.array()`).

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

Wenn die Genre-Namensdaten gültig sind, führen wir eine Groß-/Kleinschreibung-unabhängige Suche durch, um zu prüfen, ob bereits ein `Genre` mit demselben Namen existiert (da wir keine doppelten oder fast doppelten Datensätze erstellen möchten, die sich nur in der Groß-/Kleinschreibung unterscheiden, wie z. B.: "Fantasy", "fantasy", "FaNtAsY" usw.). Um Groß-/Kleinschreibung und Akzente bei der Suche zu ignorieren, verwenden wir die [`collation()`](<https://mongoosejs.com/docs/api/query.html#Query.prototype.collation()>) Methode, die die Lokale 'en' und Stärke 2 angibt (für weitere Informationen siehe das MongoDB-Thema [Collation](https://www.mongodb.com/docs/manual/reference/collation/)).

Falls ein `Genre` mit einem passenden Namen bereits existiert, leiten wir zur Detailseite weiter. Falls nicht, speichern wir das neue `Genre` und leiten zur Detailseite weiter. Beachten Sie, dass wir hier auf den Ergebnis der Datenbankabfrage `await` verwenden, analog zu dem Muster in anderen Routen-Handlern.

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

Dieses gleiche Muster wird in allen unseren Post-Controllern verwendet: Wir führen Validatoren (mit Bereinigungen) aus, prüfen auf Fehler und rendere entweder das Formular mit Fehlermeldungen erneut oder speichern die Daten.

## Ansicht

Die gleiche Ansicht wird in beiden Controller/Routes `GET` und `POST` gerendert, wenn wir ein neues `Genre` erstellen (und später wird es auch verwendet, wenn wir ein `Genre` aktualisieren). Im Fall `GET` ist das Formular leer und wir übergeben nur eine `title`-Variable. Im Fall `POST` hat der Benutzer zuvor ungültige Daten eingegeben – in der `genre`-Variable übergeben wir eine bereinigte Version der eingegebenen Daten und in der `errors`-Variable übergeben wir ein Array von Fehlermeldungen. Der Code unten zeigt den Controller-Code zum Rendern der Vorlage in beiden Fällen.

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

Vieles an dieser Vorlage wird Ihnen aus unseren vorherigen Tutorials bekannt vorkommen. Zunächst erweitern wir die **layout.pug**-Basisvorlage und überschreiben den `block` mit dem Namen '**content**'. Dann haben wir eine Überschrift mit dem vom Controller (über die `render()`-Methode) übergebenen `title`.

Als nächstes haben wir den Pug-Code für unser HTML-Formular, das `method="POST"` verwendet, um die Daten an den Server zu senden, und da die `action` ein leerer String ist, werden die Daten an dieselbe URL wie die Seite gesendet.

Das Formular definiert ein einziges erforderliches Feld vom Typ "text" mit dem Namen "name". Der Standardwert des Felds hängt davon ab, ob die `genre`-Variable definiert ist. Falls es von der `GET`-Route aufgerufen wurde, wird es leer sein, da dies ein neues Formular ist. Falls es von einer `POST`-Route aufgerufen wurde, wird es den (ungültigen) vom Benutzer ursprünglich eingegebenen Wert enthalten.

Der letzte Teil der Seite ist der Fehlercode. Dieser druckt eine Liste von Fehlern, falls die Fehlervariable definiert wurde (mit anderen Worten, dieser Abschnitt wird nicht angezeigt, wenn die Vorlage auf der `GET`-Route gerendert wird).

> [!NOTE]
> Dies ist nur eine Möglichkeit, die Fehler anzuzeigen. Sie können auch die Namen der betroffenen Felder aus der Fehler-Variable erhalten und diese verwenden, um zu steuern, wo die Fehlermeldungen angezeigt werden, ob benutzerdefinierte CSS angewendet werden soll usw.

## Wie sieht es aus?

Führen Sie die Anwendung aus, öffnen Sie Ihren Browser unter `http://localhost:3000/` und wählen Sie den Link _Create new genre_ aus. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite dem folgenden Screenshot ähneln. Nachdem Sie einen Wert eingegeben haben, sollte er gespeichert werden und Sie werden zur Genre-Detailseite weitergeleitet.

![Genre Create Page - Express Local Library site](locallibary_express_genre_create_empty.png)

Der einzige Fehler, den wir serverseitig validieren, ist, dass das Genre-Feld mindestens drei Zeichen haben muss. Der Screenshot unten zeigt, wie die Fehlerliste aussehen würde, wenn Sie ein Genre mit nur einem oder zwei Zeichen angeben (hervorgehoben in Gelb).

![Der Abschnitt "Genre erstellen" der lokalen Bibliotheksanwendung. Die linke Spalte hat eine vertikale Navigationsleiste. Der rechte Abschnitt ist das Formular zum Erstellen eines neuen Genres mit einer Überschrift, die 'Create Genre' lautet. Es gibt ein Eingabefeld mit der Bezeichnung 'Genre'. Unten befindet sich eine Schaltfläche 'Submit'. Unter der Schaltfläche "Submit" befindet sich eine Fehlermeldung mit der Aufschrift "Genre name required". Die Fehlermeldung wurde vom Autor dieses Artikels hervorgehoben. Im Formular gibt es keinen visuellen Hinweis darauf, dass das Genre erforderlich ist, noch erscheint die Fehlermeldung nur bei einem Fehler.](locallibary_express_genre_create_error.png)

> [!NOTE]
> Unsere Validierung verwendet `trim()`, um sicherzustellen, dass Leerzeichen nicht als Genre-Name akzeptiert werden. Wir validieren auch, dass das Feld clientseitig nicht leer ist, indem wir das {{Glossary("Boolean/HTML", "boolesche Attribut")}} `required` zur Felddefinition im Formular hinzufügen:
>
> ```pug
> input#name.form-control(type='text', placeholder='Fantasy, Poetry etc.' name='name' required value=(undefined===genre ? '' : genre.name) )
> ```

## Nächste Schritte

1. Zurück zu [Express Tutorial Teil 6: Arbeiten mit Formularen.](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms)
2. Fahren Sie mit dem nächsten Unterartikel von Teil 6 fort: [Autorformular erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_author_form).
