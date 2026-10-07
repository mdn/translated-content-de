---
title: Formular zum Erstellen eines Genres
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_genre_form
l10n:
  sourceCommit: 306f0d17c10c4bfa8179b81fe676102ea0b0b6fa
---

Dieser Unterartikel zeigt, wie wir eine Seite zum Erstellen von `Genre`-Objekten definieren. Das ist ein guter Ausgangspunkt, denn `Genre` hat nur ein Feld, `name`, und keine Abhängigkeiten. Wie bei den anderen Seiten müssen wir Routen, Controller und Views einrichten.

## Methoden zur Validierung und Bereinigung importieren

Um _express-validator_ in unseren Controllern zu verwenden, müssen wir die benötigten Funktionen aus dem Modul `'express-validator'` mit _require_ importieren.

Öffnen Sie **/controllers/genreController.js** und fügen Sie vor allen Route-Handler-Funktionen die folgende Zeile am Anfang der Datei ein:

```js
const { body, validationResult } = require("express-validator");
```

Beachten Sie, dass `require("express-validator")` lediglich ein Funktionsaufruf ist, der ein Objekt zurückgibt. Aus diesem Objekt [destrukturieren](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) wir die beiden Eigenschaften `body` und `validationResult`, damit wir sie direkt als Variablen verwenden können.

## Controller – GET-Route

Suchen Sie die exportierte Controller-Methode `genre_create_get()` und ersetzen Sie sie durch den folgenden Code. Dieser rendert die View **genre_form.pug** und übergibt eine Titelvariable.

```js
// Display Genre create form on GET.
exports.genre_create_get = (req, res, next) => {
  res.render("genre_form", { title: "Create Genre" });
};
```

## Controller – POST-Route

Suchen Sie die exportierte Controller-Methode `genre_create_post()` und ersetzen Sie sie durch den folgenden Code.

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

Zunächst ist wichtig, dass der Controller statt einer einzelnen Middleware-Funktion (mit den Argumenten `(req, res, next)`) ein _Array_ von Middleware-Funktionen definiert. Das Array wird an die Router-Funktion übergeben, die jede Funktion der Reihe nach aufruft.

> [!NOTE]
> Dieser Ansatz ist nötig, weil die Validatoren Middleware-Funktionen sind.

Die erste Funktion im Array definiert einen Body-Validator (`body()`), der das Feld validiert und bereinigt. Sie entfernt mit `trim()` voranstehende und nachfolgende Leerzeichen, prüft, ob das Feld _name_ nicht leer ist, und entfernt anschließend mit `escape()` potenziell gefährliche HTML-Zeichen.

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

Nach der Definition der Validatoren erstellen wir eine Middleware-Funktion, die etwaige Validierungsfehler ermittelt. Mit `isEmpty()` prüfen wir, ob das Validierungsergebnis Fehler enthält. Falls ja, rendern wir das Formular erneut und übergeben unser bereinigtes Genre-Objekt sowie das Array der Fehlermeldungen (`errors.array()`).

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

Wenn der Genrename gültig ist, suchen wir ohne Berücksichtigung der Groß- und Kleinschreibung nach einem bereits vorhandenen `Genre` mit demselben Namen. So vermeiden wir doppelte oder nahezu identische Einträge, die sich nur in der Schreibweise unterscheiden, etwa „Fantasy“, „fantasy“ und „FaNtAsY“. Damit bei der Suche Groß- und Kleinschreibung sowie Akzente ignoriert werden, verketten wir die Methode [`collation()`](<https://mongoosejs.com/docs/api/query.html#Query.prototype.collation()>) mit dem Gebietsschema 'en' und der Stärke 2. Weitere Informationen finden Sie im MongoDB-Thema [Collation](https://www.mongodb.com/docs/manual/reference/collation/).

Falls bereits ein `Genre` mit passendem Namen existiert, leiten wir zu dessen Detailseite weiter. Andernfalls speichern wir das neue `Genre` und leiten zu seiner Detailseite weiter. Beachten Sie, dass wir hier mit `await` auf das Ergebnis der Datenbankabfrage warten, wie auch in den anderen Route-Handlern.

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

Dieses Muster verwenden wir in allen unseren POST-Controllern: Wir führen Validatoren einschließlich der Bereinigungsfunktionen aus und prüfen anschließend auf Fehler. Je nach Ergebnis rendern wir das Formular mit Fehlerinformationen erneut oder speichern die Daten.

## View

Beim Erstellen eines neuen `Genre` wird sowohl im `GET`- als auch im `POST`-Controller beziehungsweise in den entsprechenden Routen dieselbe View gerendert. Später verwenden wir sie auch, wenn wir ein `Genre` _aktualisieren_. Beim `GET`-Aufruf ist das Formular leer; wir übergeben lediglich eine Titelvariable. Beim `POST`-Aufruf hat die Person zuvor ungültige Daten eingegeben. Über die Variable `genre` geben wir eine bereinigte Version dieser Daten zurück, über `errors` ein Array von Fehlermeldungen. Der folgende Code zeigt, wie der Controller das Template in beiden Fällen rendert.

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

Vieles an diesem Template kennen Sie bereits aus unseren vorherigen Tutorials. Zuerst erweitern wir das Basis-Template **layout.pug** und überschreiben den `block` namens '**content**'. Anschließend folgt eine Überschrift mit dem `title`, den wir über die Methode `render()` vom Controller übergeben haben.

Danach folgt der Pug-Code für unser HTML-Formular. Es verwendet `method="POST"`, um die Daten an den Server zu senden. Da `action` eine leere Zeichenfolge ist, werden die Daten an dieselbe URL wie die der Seite gesendet.

Das Formular definiert ein einziges Pflichtfeld vom Typ „text“ namens „name“. Der anfängliche _Wert_ des Feldes hängt davon ab, ob die Variable `genre` definiert ist. Bei einem Aufruf über die `GET`-Route ist das Feld leer, da es sich um ein neues Formular handelt. Bei einem Aufruf über eine `POST`-Route enthält es den (ungültigen) Wert, der ursprünglich eingegeben wurde.

Der letzte Teil der Seite ist der Code zur Fehlerausgabe. Er gibt eine Liste von Fehlern aus, sofern die Fehlervariable definiert ist. Mit anderen Worten: Dieser Abschnitt erscheint nicht, wenn das Template über die `GET`-Route gerendert wird.

> [!NOTE]
> Dies ist nur eine Möglichkeit, die Fehler auszugeben. Sie können aus der Fehlervariable auch die Namen der betroffenen Felder abrufen und damit steuern, wo die Fehlermeldungen erscheinen, ob benutzerdefiniertes CSS angewendet wird usw.

## Wie sieht das Ergebnis aus?

Starten Sie die Anwendung, öffnen Sie `http://localhost:3000/` in Ihrem Browser und wählen Sie den Link _Create new genre_. Wenn alles richtig eingerichtet ist, sollte Ihre Website ungefähr wie im folgenden Screenshot aussehen. Nachdem Sie einen Wert eingegeben haben, sollte er gespeichert werden und Sie sollten zur Detailseite des Genres gelangen.

![Seite zum Erstellen eines Genres auf der Express-Local-Library-Website](locallibary_express_genre_create_empty.png)

Die einzige Bedingung, die wir serverseitig validieren, ist, dass das Genrefeld mindestens drei Zeichen enthalten muss. Der folgende Screenshot zeigt, wie die Fehlerliste aussieht, wenn Sie ein Genre mit nur einem oder zwei Zeichen angeben (gelb hervorgehoben).

![Der Bereich zum Erstellen eines Genres in der Local-Library-Anwendung. Die linke Spalte enthält eine vertikale Navigationsleiste. Rechts befindet sich das Formular zum Erstellen eines neuen Genres mit der Überschrift „Create Genre“. Es gibt ein Eingabefeld mit der Beschriftung „Genre“ und darunter eine Schaltfläche zum Absenden. Direkt unter der Schaltfläche steht die Fehlermeldung „Genre name required“, die von der Autorin oder dem Autor dieses Artikels hervorgehoben wurde. Im Formular selbst gibt es keinen sichtbaren Hinweis darauf, dass das Genre erforderlich ist oder dass die Fehlermeldung nur bei einem Fehler erscheint.](locallibary_express_genre_create_error.png)

> [!NOTE]
> Unsere Validierung verwendet `trim()`, damit Leerzeichen allein nicht als Genrename akzeptiert werden. Außerdem prüfen wir auf Clientseite, dass das Feld nicht leer ist, indem wir seiner Definition im Formular das {{Glossary("Boolean/HTML", "boolesche Attribut")}} `required` hinzufügen:
>
> ```pug
> input#name.form-control(type='text', placeholder='Fantasy, Poetry etc.' name='name' required value=(undefined===genre ? '' : genre.name) )
> ```

## Nächste Schritte

1. Kehren Sie zu [Express-Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms) zurück.
2. Fahren Sie mit dem nächsten Unterartikel von Teil 6 fort: [Autorenformular erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_author_form).
