---
title: Startseite
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Home_page
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

Die erste Seite, die wir erstellen werden, ist die Startseite der Website, die entweder vom Seiten- (`/`) oder Katalog-Root (`catalog/`) aus zugänglich ist. Diese wird einige statische Texte zur Beschreibung der Seite anzeigen, zusammen mit dynamisch berechneten "Anzahlen" verschiedener Datensatztypen in der Datenbank.

Wir haben bereits eine Route für die Startseite erstellt. Um die Seite fertigzustellen, müssen wir unsere Controller-Funktion aktualisieren, um "Anzahlen" von Datensätzen aus der Datenbank abzurufen, und eine Ansicht (Template) erstellen, die wir zum Rendern der Seite verwenden können.

> [!NOTE]
> Wir werden Mongoose verwenden, um Datenbankinformationen abzurufen.
> Bevor Sie fortfahren, möchten Sie möglicherweise den Abschnitt [Mongoose-Einführung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#mongoose_primer) über das [Suchen von Datensätzen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#searching_for_records) erneut lesen.

## Route

Wir haben unsere Indexseiten-Routen in einem [vorherigen Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes) erstellt. Zur Erinnerung, alle Routenfunktionen sind in **/routes/catalog.js** definiert:

```js
// GET catalog home page.
router.get("/", book_controller.index); // This actually maps to /catalog/ because we import the route with a /catalog prefix
```

Die im Parameter übergebene `book_controller.index` Funktion hat eine "Platzhalter"-Implementierung, die in **/controllers/bookController.js** definiert ist:

```js
exports.index = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Site Home Page");
});
```

Es ist diese Controller-Funktion, die wir erweitern, um Informationen von unseren Modellen abzurufen und diese dann mit einem Template (View) zu rendern.

## Controller

Die Index-Controller-Funktion muss Informationen darüber abrufen, wie viele `Book`, `BookInstance` (alle), `BookInstance` (verfügbar), `Author` und `Genre` Datensätze wir in der Datenbank haben, diese Daten in einer Vorlage rendern, um eine HTML-Seite zu erstellen, und diese dann in einer HTTP-Antwort zurückgeben.

Öffnen Sie **/controllers/bookController.js**. Nahe dem Anfang der Datei sollten Sie die exportierte `index()` Funktion sehen.

```js
const Book = require("../models/book");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Site Home Page");
});
```

Ersetzen Sie den gesamten obigen Code durch das folgende Codefragment. Das Erste, was getan wird, ist das Importieren (`require()`) aller Modelle. Wir müssen dies tun, da wir sie verwenden werden, um unsere Dokumentanzahlen zu erhalten. Der Code erfordert auch "express-async-handler", das eine Umhüllung bietet, um [Ausnahmen abzufangen, die in Routen-Handler-Funktionen geworfen werden](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes#handling_exceptions_in_route_functions).

```js
const Book = require("../models/book");
const Author = require("../models/author");
const Genre = require("../models/genre");
const BookInstance = require("../models/bookinstance");

const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  // Get details of books, book instances, authors and genre counts (in parallel)
  const [
    numBooks,
    numBookInstances,
    numAvailableBookInstances,
    numAuthors,
    numGenres,
  ] = await Promise.all([
    Book.countDocuments({}).exec(),
    BookInstance.countDocuments({}).exec(),
    BookInstance.countDocuments({ status: "Available" }).exec(),
    Author.countDocuments({}).exec(),
    Genre.countDocuments({}).exec(),
  ]);

  res.render("index", {
    title: "Local Library Home",
    book_count: numBooks,
    book_instance_count: numBookInstances,
    book_instance_available_count: numAvailableBookInstances,
    author_count: numAuthors,
    genre_count: numGenres,
  });
});
```

Wir verwenden die Methode [`countDocuments()`](<https://mongoosejs.com/docs/api/model.html#Model.countDocuments()>), um die Anzahl der Instanzen jedes Modells zu erhalten. Diese Methode wird auf einem Modell aufgerufen, mit einem optionalen Satz von Bedingungen, die abgeglichen werden sollen, und gibt ein `Query` Objekt zurück. Die Abfrage kann durch Aufrufen von [`exec()`](https://mongoosejs.com/docs/api/query.html#Query.prototype.exec) ausgeführt werden, welches ein `Promise` zurückgibt, das entweder mit einem Ergebnis erfüllt wird oder abgelehnt wird, wenn ein Datenbankfehler auftritt.

Da die Abfragen für die Dokumentenzählungen unabhängig voneinander sind, verwenden wir [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um sie parallel auszuführen. Die Methode gibt ein neues Promise zurück, das wir mit [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) auf die Fertigstellung warten (die Ausführung stoppt innerhalb _dieser Funktion_ bei `await`). Wenn alle Abfragen abgeschlossen sind, wird das von `all()` zurückgegebene Promise erfüllt, und die Ausführung der Routen-Handler-Funktion wird fortgesetzt, wobei das Array mit den Ergebnissen der Datenbankabfragen gefüllt wird.

Wir rufen dann [`res.render()`](https://expressjs.com/en/4x/api.html#res.render) auf und spezifizieren eine Ansicht (Template) namens '**index**' und Objekte, die die Ergebnisse der Datenbankabfragen zur View-Vorlage zuordnen. Die Daten werden als Schlüssel-Wert-Paare bereitgestellt und können im Template mit dem Schlüssel abgerufen werden.

> [!NOTE]
> Wenn Sie einen Schlüssel/eine Variable in einem Pug-Template verwenden, die nicht übergeben wurde, wird sie als leerer String angezeigt und in Ausdrücken als `false` ausgewertet. Andere Template-Sprachen können erfordern, dass Sie Werte für alle Objekte, die Sie verwenden, übergeben.

Beachten Sie, dass der Code sehr einfach ist, da wir davon ausgehen können, dass die Datenbankabfragen erfolgreich sind. Wenn eine der Datenbankoperationen fehlschlägt, wird die geworfene Ausnahme von `asyncHandler()` abgefangen und an den `next` Middleware-Handler in der Kette weitergegeben.

## Ansicht

Öffnen Sie **/views/index.pug** und ersetzen Sie dessen Inhalt mit dem unten stehenden Text.

```pug
extends layout

block content
  h1= title
  p Welcome to #[em LocalLibrary], a very basic Express website developed as a tutorial example on the Mozilla Developer Network.

  h2 Dynamic content

  p The library has the following record counts:

  ul
    li #[strong Books:] !{book_count}
    li #[strong Copies:] !{book_instance_count}
    li #[strong Copies available:] !{book_instance_available_count}
    li #[strong Authors:] !{author_count}
    li #[strong Genres:] !{genre_count}
```

Die Ansicht ist unkompliziert. Wir erweitern das **layout.pug** Basistemplate und überschreiben den `block` namens '**content**'. Die erste `h1` Überschrift wird der escaperte Text für die `title` Variable sein, die an die `render()` Funktion übergeben wurde—beachten Sie die Verwendung von `h1=`, sodass der folgende Text als JavaScript-Ausdruck behandelt wird. Wir fügen dann einen Absatz ein, der die LocalLibrary vorstellt.

Unter der Überschrift _Dynamic content_ listen wir die Anzahl der Kopien jedes Modells auf. Beachten Sie, dass die Templatewerte für die Daten die Schlüssel sind, die angegeben wurden, als `render()` im Routen-Handler aufgerufen wurde.

> [!NOTE]
> Wir haben die Zählwerte nicht escaped (d.h. wir haben die `!{}` Syntax verwendet), da die Zählwerte berechnet werden. Wenn die Informationen von Endbenutzern bereitgestellt würden, würden wir die Variable zur Darstellung escapen.

## Wie sieht es aus?

An diesem Punkt sollten wir alles erstellt haben, was nötig ist, um die Indexseite anzuzeigen. Führen Sie die Anwendung aus und öffnen Sie Ihren Browser auf `http://localhost:3000/`. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite etwa wie der folgende Screenshot aussehen.

![Startseite - Express Local Library Seite](locallibary_express_home.png)

> [!NOTE]
> Sie werden die Seitenleistenlinks noch nicht _nutzen_ können, da die URLs, Ansichten und Templates für diese Seiten noch nicht definiert wurden. Wenn Sie es versuchen, erhalten Sie Fehler wie "NICHT IMPLEMENTIERT: Buchliste", abhängig davon, auf welchen Link Sie klicken. Diese Zeichenfolgenliterale (die durch ordnungsgemäße Daten ersetzt werden) wurden in den verschiedenen Controllern angegeben, die in Ihrer "controllers" Datei vorhanden sind.

## Nächste Schritte

- Kehren Sie zurück zu [Express Tutorial Teil 5: Anzeige von Bibliotheksdaten](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie mit dem nächsten Unterartikel von Teil 5 fort: [Buchlisten-Seite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_list_page).
