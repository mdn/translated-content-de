---
title: Erstellen Sie das Formular für Genre
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_genre_form
l10n:
  sourceCommit: 8443cb34d9944d8eb8e2c5add598bec26ed6d21f
---

Dieser Unterartikel zeigt, wie wir unsere Seite zum Erstellen von `Genre`-Objekten definieren (dies ist ein guter Ausgangspunkt, da das `Genre` nur ein Feld hat, seinen `name`, und keine Abhängigkeiten). Wie bei allen anderen Seiten müssen wir Routen, Controller und Ansichten einrichten.

## Importieren von Validierungs- und Bereinigungsmethoden

Um den _express-validator_ in unseren Controllern zu verwenden, müssen wir die Funktionen, die wir verwenden möchten, aus dem `'express-validator'`-Modul _anfordern_.

Öffnen Sie **/controllers/genreController.js** und fügen Sie die folgende Zeile am Anfang der Datei hinzu, vor allen Routen-Handler-Funktionen:

```js
const { body, validationResult } = require("express-validator");
```

Beachten Sie, dass `require("express-validator")` einfach ein Funktionsaufruf ist, der ein Objekt zurückgibt, und wir die beiden Eigenschaften, `body` und `validationResult`, aus dem Objekt [destrukturieren](/de/docs/Web/JavaScript/Reference/Operators/Destructuring), sodass wir sie direkt als Variablen verwenden können.

## Controller—GET-Route

Finden Sie die exportierte `genre_create_get()`-Controller-Methode und ersetzen Sie sie durch den folgenden Code.
Dies rendert die **genre_form.pug**-Ansicht und übergibt eine Titelvariable.

```js
// Display Genre create form on GET.
exports.genre_create_get = (req, res, next) => {
  res.render("genre_form", { title: "Create Genre" });
};
```

## Controller—POST-Route

Finden Sie die exportierte `genre_create_post()`-Controller-Methode und ersetzen Sie sie durch den folgenden Code.

```js
// Handle Genre create on POST.
exports.genre_create_post = [
  // Validate and sanitize the name field.
  body("name", "Genre name must contain at least 3 characters")
    .trim()
    .isLength({ min: 3 })
    .escape(),

  // Process request after validation and sanitization.
  async (req, res, next) => {
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
      return;
    }

    // New genre. Save and redirect to its detail page.
    await genre.save();
    res.redirect(genre.url);
  },
];
```

Das Erste, das auffällt, ist, dass der Controller statt einer einzelnen Middleware-Funktion (mit den Argumenten `(req, res, next)`) ein _Array_ von Middleware-Funktionen angibt.
Das Array wird der Router-Funktion übergeben und jede Methode wird der Reihe nach aufgerufen.

> [!NOTE]
> Dieser Ansatz ist notwendig, da die Validatoren Middleware-Funktionen sind.

Die erste Methode im Array definiert einen Body-Validator (`body()`), der das Feld validiert und bereinigt. Dies verwendet `trim()`, um jeglichen führenden/nachgestellten Leerraum zu entfernen, überprüft, dass das _name_-Feld nicht leer ist, und entfernt dann mithilfe von `escape()` alle gefährlichen HTML-Zeichen.

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

Nachdem wir die Validatoren spezifiziert haben, erstellen wir eine Middleware-Funktion, um etwaige Validierungsfehler zu extrahieren. Wir verwenden `isEmpty()`, um zu überprüfen, ob Fehler im Validierungsergebnis vorhanden sind. Wenn es Fehler gibt, rendern wir das Formular erneut, indem wir unser bereinigtes Genre-Objekt und das Array von Fehlermeldungen (`errors.array()`) übergeben.

```js
// Process request after validation and sanitization.
async (req, res, next) => {
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
};
```

Wenn die Genre-Namensdaten gültig sind, führen wir eine nicht case-sensitive Suche durch, um zu sehen, ob ein `Genre` mit dem gleichen Namen bereits existiert (da wir keine Duplikate oder Beinahe-Duplikate erstellen möchten, die sich nur durch Groß-/Kleinschreibung unterscheiden, wie z.B.: "Fantasy", "fantasy", "FaNtAsY" usw.).
Um bei der Suche Groß-/Kleinschreibung und Akzente zu ignorieren, hängen wir die [`collation()`](<https://mongoosejs.com/docs/api/query.html#Query.prototype.collation()>) Methode an, indem wir die Lokale 'en' und die Stärke von 2 angeben (weitere Informationen finden Sie im MongoDB [Collation](https://www.mongodb.com/docs/manual/reference/collation/) Thema).

Wenn ein `Genre` mit einem passenden Namen bereits existiert, leiten wir zur Detailseite weiter.
Wenn nicht, speichern wir das neue `Genre` und leiten zur Detailseite weiter.
Beachten Sie, dass wir hier auf das Ergebnis der Datenbankanfrage `await`en, nach dem gleichen Muster wie bei anderen Routen-Handlern.

```js
// Check if Genre with same name already exists.
const genreExists = await Genre.findOne({ name: req.body.name })
  .collation({ locale: "en", strength: 2 })
  .exec();
if (genreExists) {
  // Genre exists, redirect to its detail page.
  res.redirect(genreExists.url);
}

// New genre. Save and redirect to its detail page.
await genre.save();
res.redirect(genre.url);
```

Dieses Muster wird in allen unseren Post-Controllern verwendet: Wir führen Validatoren (mit Bereinigern) aus, überprüfen dann auf Fehler und rendern entweder das Formular mit Fehlerinformationen erneut oder speichern die Daten.

## Ansicht

Die gleiche Ansicht wird sowohl in den `GET`- als auch in den `POST`-Controllern/Routen verwendet, wenn wir ein neues `Genre` erstellen (und später auch, wenn wir ein `Genre` _aktualisieren_). Im `GET`-Fall ist das Formular leer und wir übergeben nur eine Titelvariable. Im `POST`-Fall hat der Benutzer zuvor ungültige Daten eingegeben – in der `genre`-Variable übergeben wir eine bereinigte Version der eingegebenen Daten und in der `errors`-Variable übergeben wir ein Array der Fehlermeldungen.
Der untenstehende Code zeigt den Controller-Code für das Rendern der Vorlage in beiden Fällen.

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

Vieles an dieser Vorlage wird Ihnen aus unseren vorherigen Tutorials vertraut sein. Zuerst erweitern wir die **layout.pug**-Basistemplate und überschreiben den `block` namens '**content**'. Dann haben wir eine Überschrift mit dem `title`, den wir vom Controller übergeben haben (via der `render()`-Methode).

Als nächstes haben wir den Pug-Code für unser HTML-Formular, das `method="POST"` verwendet, um die Daten an den Server zu senden, und weil das `action` ein leerer String ist, werden die Daten an dieselbe URL wie die Seite gesendet.

Das Formular definiert ein einzelnes erforderliches Feld vom Typ „text“ mit dem Namen „name“. Der Standardwert dieses Feldes hängt davon ab, ob die Variable `genre` definiert ist. Wenn es von der `GET`-Route aufgerufen wird, wird es leer sein, da dies ein neues Formular ist. Wenn es von einer `POST`-Route aus aufgerufen wird, enthält es den (ungültigen) Wert, den der Benutzer ursprünglich eingegeben hat.

Der letzte Teil der Seite ist der Fehlercode. Dieser druckt eine Liste von Fehlern aus, wenn die Fehler-Variable definiert ist (mit anderen Worten, dieser Abschnitt wird nicht auftauchen, wenn die Vorlage auf der `GET`-Route gerendert wird).

> [!NOTE]
> Dies ist nur eine Möglichkeit, die Fehler darzustellen. Sie können auch die Namen der betroffenen Felder aus der Fehler-Variable erhalten und diese verwenden, um zu steuern, wo die Fehlermeldungen gerendert werden sollen, ob benutzerdefiniertes CSS angewendet werden soll usw.

## Wie sieht es aus?

Führen Sie die Anwendung aus, öffnen Sie Ihren Browser auf `http://localhost:3000/`, und wählen Sie den Link _Create new genre_. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite ähnlich wie im folgenden Screenshot aussehen. Nachdem Sie einen Wert eingegeben haben, sollte dieser gespeichert werden, und Sie werden zur Genre-Detailseite geleitet.

![Genre Create Page - Express Local Library site](locallibary_express_genre_create_empty.png)

Der einzige Fehler, gegen den wir serverseitig validieren, ist, dass das Genre-Feld mindestens drei Zeichen haben muss. Der untenstehende Screenshot zeigt, wie die Fehlerliste aussehen würde, wenn Sie ein Genre mit nur einem oder zwei Zeichen angeben (gelb hervorgehoben).

![Der Abschnitt im Local Library-Anwendungsbereich für das Erstellen eines Genres. Die linke Spalte hat eine vertikale Navigationsleiste. Der rechte Abschnitt ist das Formular zum Erstellen eines neuen Genres mit der Überschrift 'Create Genre'. Es gibt ein Eingabefeld mit der Beschriftung 'Genre'. Am unteren Rand befindet sich ein Senden-Button. Es gibt eine Fehlermeldung, die 'Genre name required' direkt unter dem Senden-Button liest. Die Fehlermeldung wurde vom Autor dieses Artikels hervorgehoben. Es gibt keinen visuellen Hinweis im Formular, dass das Genre erforderlich ist oder dass die Fehlermeldung nur bei einem Fehler erscheint.](locallibary_express_genre_create_error.png)

> [!NOTE]
> Unsere Validierung verwendet `trim()`, um sicherzustellen, dass Leerzeichen nicht als Genres akzeptiert werden. Wir validieren auch, dass das Feld auf der Client-Seite nicht leer ist, indem wir das {{Glossary("Boolean/HTML", "boolesche Attribut")}} `required` zur Felddefinition im Formular hinzufügen:
>
> ```pug
> input#name.form-control(type='text', placeholder='Fantasy, Poetry etc.' name='name' required value=(undefined===genre ? '' : genre.name) )
> ```

## Nächste Schritte

1. Kehren Sie zurück zu [Express Tutorial Part 6: Arbeiten mit Formularen.](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms)
2. Fahren Sie mit dem nächsten Unterartikel von Teil 6 fort: [Erstellen Sie das Autorenformular](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_author_form).
