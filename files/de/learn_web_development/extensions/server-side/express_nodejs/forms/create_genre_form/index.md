---
title: Formular zum Erstellen eines Genre
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_genre_form
l10n:
  sourceCommit: d775e1249487f1a7ab9a8a031c70ca71bc892d63
---

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_author_form", "Learn_web_development/Extensions/Server-side/Express_Nodejs/forms")}}

Dieser Unterartikel zeigt, wie wir die Seite zum Erstellen von `Genre`-Objekten definieren. Das ist ein guter Ausgangspunkt, weil `Genre` nur ein Feld, `name`, und keine Abhängigkeiten hat. Wie bei anderen Seiten müssen wir Routen, Controller und Views einrichten.

## Validierungs- und Bereinigungsmethoden importieren

Um _express-validator_ in unseren Controllern zu verwenden, müssen wir die benötigten Funktionen aus dem Modul `'express-validator'` _importieren_.

Öffnen Sie **controllers/genreController.js** und fügen Sie vor allen Route-Handler-Funktionen die folgende Zeile am Anfang der Datei ein:

```js
import { body, validationResult } from "express-validator";
```

Diese Deklaration importiert die beiden benannten Exporte `body` und `validationResult`, sodass wir sie direkt verwenden können.

## Controller – GET-Route

Suchen Sie die exportierte Controller-Methode `genreCreateGet()` und ersetzen Sie sie durch den folgenden Code. Dieser rendert die View **genre_form.pug** und übergibt eine Titelvariable.

```js
// Display Genre create form on GET.
export const genreCreateGet = (req, res, next) => {
  res.render("genre_form", { title: "Create Genre" });
};
```

## Controller – POST-Route

Suchen Sie die exportierte Controller-Methode `genreCreatePost()` und ersetzen Sie sie durch den folgenden Code.

```js
// Handle Genre create on POST.
export const genreCreatePost = [
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

Beachten Sie zunächst, dass der Controller statt einer einzelnen Middleware-Funktion (mit den Argumenten `(req, res, next)`) ein _Array_ von Middleware-Funktionen angibt. Das Array wird an die Router-Funktion übergeben, die jede Funktion der Reihe nach aufruft.

> [!NOTE]
> Dieser Ansatz ist erforderlich, weil die Validatoren Middleware-Funktionen sind.

Die erste Funktion im Array definiert einen Body-Validator (`body()`), der das Feld validiert und bereinigt. Er entfernt mit `trim()` führende und nachfolgende Leerzeichen, prüft, ob das Feld _name_ nicht leer ist, und entfernt anschließend mit `escape()` potenziell gefährliche HTML-Zeichen.

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

Nach der Definition der Validatoren erstellen wir eine Middleware-Funktion, die mögliche Validierungsfehler ausliest. Mit `isEmpty()` prüfen wir, ob das Validierungsergebnis Fehler enthält. Falls ja, rendern wir das Formular erneut und übergeben dabei unser bereinigtes Genre-Objekt und das Array der Fehlermeldungen (`errors.array()`).

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

Wenn der Genre-Name gültig ist, suchen wir ohne Berücksichtigung der Groß- und Kleinschreibung nach einem bereits vorhandenen `Genre` mit demselben Namen. So vermeiden wir doppelte oder nahezu doppelte Einträge, die sich nur in der Groß- und Kleinschreibung unterscheiden, etwa „Fantasy“, „fantasy“ und „FaNtAsY“. Damit bei der Suche Groß- und Kleinschreibung sowie Akzente ignoriert werden, verketten wir die Methode [`collation()`](<https://mongoosejs.com/docs/api/query.html#Query.prototype.collation()>) und geben das Locale 'en' sowie eine Stärke von 2 an. Weitere Informationen finden Sie im MongoDB-Thema [Collation](https://www.mongodb.com/docs/manual/reference/collation/).

Wenn bereits ein `Genre` mit einem passenden Namen vorhanden ist, leiten wir zu dessen Detailseite weiter. Andernfalls speichern wir das neue `Genre` und leiten zu seiner Detailseite weiter. Beachten Sie, dass wir hier mit `await` auf das Ergebnis der Datenbankabfrage warten, wie auch in den anderen Route-Handlern.

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

Dasselbe Muster verwenden wir in allen unseren POST-Controllern: Wir führen Validatoren (mit Bereinigungsfunktionen) aus, prüfen auf Fehler und rendern entweder das Formular mit den Fehlerinformationen erneut oder speichern die Daten.

## View

Wenn wir ein neues `Genre` erstellen, wird sowohl im `GET`- als auch im `POST`-Controller bzw. der jeweiligen Route dieselbe View gerendert. Später wird sie auch verwendet, wenn wir ein `Genre` _aktualisieren_. Bei `GET` ist das Formular leer, und wir übergeben nur eine Titelvariable. Bei `POST` hat die nutzende Person zuvor ungültige Daten eingegeben: In der Variablen `genre` geben wir eine bereinigte Version dieser Daten zurück, in der Variablen `errors` ein Array von Fehlermeldungen. Der folgende Code zeigt, wie der Controller die Vorlage in beiden Fällen rendert.

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

Erstellen Sie **views/genre_form.pug** und fügen Sie den folgenden Text ein.

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

Vieles an dieser Vorlage dürfte Ihnen aus den vorherigen Tutorials bekannt vorkommen. Zunächst erweitern wir die Basisvorlage **layout.pug** und überschreiben den `block` mit dem Namen '**content**'. Anschließend folgt eine Überschrift mit dem `title`, den wir vom Controller über die Methode `render()` übergeben haben.

Danach folgt der Pug-Code für unser HTML-Formular. Es sendet die Daten mit `method="POST"` an den Server. Da `action` eine leere Zeichenfolge ist, werden die Daten an dieselbe URL wie die der Seite gesendet.

Das Formular definiert ein einzelnes Pflichtfeld namens „name“ vom Typ „text“. Der Standard-_value_ des Feldes hängt davon ab, ob die Variable `genre` definiert ist. Beim Aufruf über die `GET`-Route ist das Feld leer, da es sich um ein neues Formular handelt. Beim Aufruf über eine `POST`-Route enthält es den ursprünglich eingegebenen (ungültigen) Wert.

Der letzte Teil der Seite behandelt die Fehlerausgabe. Wenn die Fehlervariable definiert ist, gibt er eine Liste der Fehler aus. Mit anderen Worten: Dieser Abschnitt erscheint nicht, wenn die Vorlage über die `GET`-Route gerendert wird.

> [!NOTE]
> Dies ist nur eine Möglichkeit, Fehler anzuzeigen. Sie können aus der Fehlervariablen auch die Namen der betroffenen Felder auslesen und damit steuern, wo die Fehlermeldungen angezeigt werden, ob benutzerdefiniertes CSS angewendet wird usw.

## Wie sieht das aus?

Starten Sie die Anwendung, öffnen Sie `http://localhost:3000/` in Ihrem Browser und wählen Sie den Link _Create new genre_. Wenn alles richtig eingerichtet ist, sollte Ihre Seite ungefähr wie im folgenden Screenshot aussehen. Nachdem Sie einen Wert eingegeben haben, sollte er gespeichert werden und Sie sollten zur Detailseite des Genre gelangen.

![Seite zum Erstellen eines Genre auf der Express-Local-Library-Website](locallibary_express_genre_create_empty.png)

Serverseitig validieren wir als einzige Fehlerbedingung, dass das Genre-Feld mindestens drei Zeichen enthalten muss. Der folgende Screenshot zeigt, wie die Fehlerliste aussieht, wenn Sie ein Genre mit nur einem oder zwei Zeichen eingeben (gelb hervorgehoben).

![Der Bereich zum Erstellen eines Genre in der Local-Library-Anwendung. Links befindet sich eine vertikale Navigationsleiste. Rechts ist ein Formular zum Erstellen eines neuen Genre mit der Überschrift „Create Genre“ zu sehen. Es enthält ein Eingabefeld mit der Beschriftung „Genre“ und darunter eine Schaltfläche zum Absenden. Direkt unter der Schaltfläche steht die Fehlermeldung „Genre name required“, die vom Autor dieses Artikels hervorgehoben wurde. Im Formular selbst gibt es keinen visuellen Hinweis darauf, dass das Genre-Feld erforderlich ist oder dass die Fehlermeldung nur im Fehlerfall erscheint.](locallibary_express_genre_create_error.png)

> [!NOTE]
> Unsere Validierung verwendet `trim()`, damit Leerzeichen allein nicht als Genre-Name akzeptiert werden. Außerdem prüfen wir auf Clientseite, dass das Feld nicht leer ist, indem wir seiner Definition im Formular das {{Glossary("Boolean/HTML", "boolesche Attribut")}} `required` hinzufügen:
>
> ```pug
> input#name.form-control(type='text', placeholder='Fantasy, Poetry etc.' name='name' required value=(undefined===genre ? '' : genre.name) )
> ```

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_author_form", "Learn_web_development/Extensions/Server-side/Express_Nodejs/forms")}}
