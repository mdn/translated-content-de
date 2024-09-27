---
title: Genre-Formular erstellen
slug: Learn/Server-side/Express_Nodejs/forms/Create_genre_form
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

Dieser Unterartikel zeigt, wie wir unsere Seite zum Erstellen von `Genre`-Objekten definieren (dies ist ein guter Startpunkt, da das `Genre` nur ein Feld, seinen `name`, hat und keine Abhängigkeiten). Wie bei allen anderen Seiten müssen wir Routen, Controller und Ansichten einrichten.

## Importieren von Validierungs- und Bereinigungsmethoden

Um _express-validator_ in unseren Controllern zu verwenden, müssen wir die Funktionen, die wir nutzen möchten, aus dem `'express-validator'`-Modul \_require_n.

Öffnen Sie **/controllers/genreController.js** und fügen Sie die folgende Zeile am Anfang der Datei hinzu, vor allen Route-Handler-Funktionen:

```js
const { body, validationResult } = require("express-validator");
```

> [!NOTE]
> Diese Syntax ermöglicht es uns, `body` und `validationResult` als die zugehörigen Middleware-Funktionen zu verwenden, wie Sie im folgenden Abschnitt zur Post-Route sehen werden. Es ist gleichbedeutend mit:
>
> ```js
> const validator = require("express-validator");
> const body = validator.body;
> const validationResult = validator.validationResult;
> ```

## Controller—GET-Route

Finden Sie die exportierte `genre_create_get()` Controller-Methode und ersetzen Sie sie durch den folgenden Code.
Dies rendert die **genre_form.pug** Ansicht und übergibt eine Titelvariable.

```js
// Display Genre create form on GET.
exports.genre_create_get = (req, res, next) => {
  res.render("genre_form", { title: "Create Genre" });
};
```

Beachten Sie, dass dies den Platzhalter-Handler ersetzt, den wir im [Express-Tutorial Teil 4: Routen und Controller](/de/docs/Learn/Server-side/Express_Nodejs/routes#genre_controller) hinzugefügt haben, mit einer "normalen" Express Route-Handler-Funktion.
Wir benötigen den `asyncHandler()` Wrapper für diese Route nicht, da sie keinen Code enthält, der eine Ausnahme werfen könnte.

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

Das erste, was zu beachten ist, ist, dass der Controller anstelle einer einzelnen Middleware-Funktion (mit Argumenten `(req, res, next)`) ein _Array_ von Middleware-Funktionen angibt.
Das Array wird an die Router-Funktion übergeben und jede Methode wird der Reihe nach aufgerufen.

> [!NOTE]
> Dieser Ansatz ist notwendig, da die Validatoren Middleware-Funktionen sind.

Die erste Methode im Array definiert einen Body-Validator (`body()`), der das Feld validiert und bereinigt. Es verwendet `trim()`, um führende und nachgestellte Leerzeichen zu entfernen, überprüft, dass das _name_-Feld nicht leer ist, und verwendet dann `escape()`, um gefährliche HTML-Zeichen zu entfernen.

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

Nachdem die Validatoren festgelegt sind, erstellen wir eine Middleware-Funktion, um eventuelle Validierungsfehler zu extrahieren. Wir verwenden `isEmpty()`, um zu prüfen, ob es Fehler im Validierungsergebnis gibt. Wenn ja, rendern wir das Formular erneut und übergeben unser bereinigtes Genre-Objekt und das Array der Fehlermeldungen (`errors.array()`).

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

Wenn die Genre-Namensdaten gültig sind, führen wir eine Groß-/Kleinschreibungs-unabhängige Suche durch, um festzustellen, ob ein `Genre` mit demselben Namen bereits existiert (da wir keine doppelten oder fast doppelten Einträge anlegen möchten, die sich nur in der Groß-/Kleinschreibung unterscheiden, wie: "Fantasy", "fantasy", "FaNtAsY" usw.).
Um Groß-/Kleinschreibung und Akzente bei der Suche zu ignorieren, nutzen wir die Methode [`collation()`](<https://mongoosejs.com/docs/api/query.html#Query.prototype.collation()>), wobei wir die Locale 'en' und eine Stärke von 2 angeben (für mehr Informationen siehe das MongoDB-Thema [Collation](https://www.mongodb.com/docs/manual/reference/collation/)).

Wenn ein `Genre` mit einem übereinstimmenden Namen bereits existiert, leiten wir zur Detailseite weiter.
Ist das nicht der Fall, speichern wir das neue `Genre` und leiten zur Detailseite weiter.
Beachten Sie, dass wir hier auf das Ergebnis der Datenbankabfrage mithilfe von `await` warten, analog zu anderen Route-Handlern.

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

Dieses Muster verwenden wir in allen unseren Post-Controllern: Wir führen Validatoren (mit Bereinigungen) aus, prüfen auf Fehler und rendern das Formular entweder mit Fehlerinformationen erneut oder speichern die Daten.

## Ansicht

Die gleiche Ansicht wird in beiden `GET` und `POST` Controllern/Routen verwendet, wenn wir ein neues `Genre` erstellen (und später auch, wenn wir ein `Genre` _aktualisieren_). Im `GET`-Fall ist das Formular leer und wir übergeben nur eine Titelvariable. Im `POST`-Fall hat der Benutzer zuvor ungültige Daten eingegeben—im `genre`-Variable übergeben wir eine bereinigte Version der eingegebenen Daten zurück und in der `errors`-Variable ein Array von Fehlermeldungen.
Der unten stehende Code zeigt den Controller-Code zum Rendern der Vorlage in beiden Fällen.

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

Vieles von dieser Vorlage wird Ihnen aus unseren vorherigen Tutorials bekannt vorkommen. Zuerst erweitern wir die **layout.pug** Basisschablone und überschreiben den `block` namens '**content**'. Dann haben wir eine Überschrift mit dem aus dem Controller übergebenen `title` (durch die `render()`-Methode).

Als nächstes haben wir den Pug-Code für unser HTML-Formular, das `method="POST"` verwendet, um die Daten an den Server zu senden und da das `action` ein leerer String ist, werden die Daten an dieselbe URL wie die Seite gesendet.

Das Formular definiert ein einzelnes erforderliches Feld vom Typ "text", genannt "name". Der Standard-_value_ des Feldes hängt davon ab, ob die `genre`-Variable definiert ist. Wenn es von der `GET`-Route aufgerufen wird, ist es leer, da dies ein neues Formular ist. Wenn es von einer `POST`-Route aufgerufen wird, wird es den (ungültigen) ursprünglich vom Benutzer eingegebenen Wert enthalten.

Der letzte Teil der Seite ist der Fehlercode. Dies druckt eine Liste von Fehlern, sofern die Fehler-Variable definiert wurde (mit anderen Worten, dieser Abschnitt erscheint nicht, wenn die Vorlage auf der `GET`-Route gerendert wird).

> [!NOTE]
> Dies ist nur eine Möglichkeit, die Fehler darzustellen. Sie können auch die Namen der betroffenen Felder aus der Fehler-Variable erhalten und diese verwenden, um zu steuern, wo die Fehlermeldungen angezeigt werden, ob benutzerdefiniertes CSS angewendet wird usw.

## Wie sieht es aus?

Führen Sie die Anwendung aus, öffnen Sie Ihren Browser unter `http://localhost:3000/` und wählen Sie den Link _Neues Genre erstellen_. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite ungefähr wie der folgende Screenshot aussehen. Nachdem Sie einen Wert eingegeben haben, sollte dieser gespeichert werden und Sie gelangen zur Genre-Detailseite.

![Genre-Erstellungsseite - Express Local Library Website](locallibary_express_genre_create_empty.png)

Der einzige Fehler, den wir serverseitig validieren, ist, dass das Genre-Feld mindestens drei Zeichen haben muss. Der folgende Screenshot zeigt, wie die Fehlerliste aussehen würde, wenn Sie ein Genre mit nur einem oder zwei Zeichen angeben (in Gelb hervorgehoben).

![Der Abschnitt für die Erstellung eines Genres der Local Library-Anwendung. Die linke Spalte hat eine vertikale Navigationsleiste. Der rechte Abschnitt ist das Formular für die Erstellung eines neuen Genres mit einer Überschrift, die 'Genre erstellen' lautet. Es gibt ein Eingabefeld mit dem Etikett 'Genre'. Am unteren Rand befindet sich eine Schaltfläche zum Absenden. Darunter befindet sich eine Fehlermeldung mit dem Text 'Genre-Name erforderlich', die vom Autor dieses Artikels hervorgehoben wurde. Es gibt keine visuelle Angabe im Formular, dass das Genre erforderlich ist oder dass die Fehlermeldung nur bei Auftreten eines Fehlers angezeigt wird.](locallibary_express_genre_create_error.png)

> [!NOTE]
> Unsere Validierung nutzt `trim()`, um sicherzustellen, dass Leerraum nicht als Genre-Name akzeptiert wird. Wir validieren auch, dass das Feld auf der Clientseite nicht leer ist, indem wir das [boolesche Attribut](/de/docs/Glossary/Boolean/HTML) `required` zur Felddefinition im Formular hinzugefügt haben:
>
> ```pug
> input#name.form-control(type='text', placeholder='Fantasy, Poetry etc.' name='name' required value=(undefined===genre ? '' : genre.name) )
> ```

## Nächste Schritte

1. Kehren Sie zurück zu [Express Tutorial Teil 6: Arbeiten mit Formularen.](/de/docs/Learn/Server-side/Express_Nodejs/forms)
2. Fahren Sie mit dem nächsten Unterartikel von Teil 6 fort: [Create Author form](/de/docs/Learn/Server-side/Express_Nodejs/forms/Create_author_form).
