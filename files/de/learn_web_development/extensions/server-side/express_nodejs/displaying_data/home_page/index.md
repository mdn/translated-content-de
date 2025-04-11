---
title: Startseite
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Home_page
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Die erste Seite, die wir erstellen werden, ist die Startseite der Website, die entweder über das Seiten- (`/`) oder Katalog-Root (`catalog/`) erreichbar ist. Diese Seite zeigt einige statische Texte zur Beschreibung der Seite sowie dynamisch berechnete "Zähler" für verschiedene Datensatztypen in der Datenbank an.

Wir haben bereits eine Route für die Startseite erstellt. Um die Seite fertigzustellen, müssen wir unsere Controller-Funktion aktualisieren, um die "Zähler" von Datensätzen aus der Datenbank abzurufen, und eine Ansicht (Template) erstellen, die wir zur Darstellung der Seite verwenden können.

> [!NOTE]
> Wir werden Mongoose verwenden, um Informationen aus der Datenbank zu erhalten.
> Bevor Sie fortfahren, möchten Sie vielleicht den [Mongoose-Leitfaden](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#mongoose_primer) Abschnitt über das [Suchen nach Datensätzen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#searching_for_records) noch einmal lesen.

## Route

Wir haben unsere Indexseiternouten in einem [früheren Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes) erstellt. Zur Erinnerung, alle Routenfunktionen sind in **/routes/catalog.js** definiert:

```js
// GET catalog home page.
router.get("/", book_controller.index); //This actually maps to /catalog/ because we import the route with a /catalog prefix
```

Die Indexfunktion des Buch-Controllers, die als Parameter übergeben wird (`book_controller.index`), hat eine "Platzhalter"-Implementierung, die in **/controllers/bookController.js** definiert ist:

```js
exports.index = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Site Home Page");
});
```

Diese Controller-Funktion erweitern wir, um Informationen von unseren Modellen zu erhalten und sie dann mit einem Template (View) darzustellen.

## Controller

Die Index-Controller-Funktion muss Informationen darüber abrufen, wie viele `Book`, `BookInstance` (alle), `BookInstance` (verfügbar), `Author` und `Genre` Datensätze wir in der Datenbank haben, diese Daten in einem Template rendern, um eine HTML-Seite zu erstellen, und sie dann in einer HTTP-Antwort zurückgeben.

Öffnen Sie **/controllers/bookController.js**. Nahe der Spitze der Datei sollten Sie die exportierte `index()` Funktion sehen.

```js
const Book = require("../models/book");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Site Home Page");
});
```

Ersetzen Sie den gesamten obigen Code durch das folgende Codefragment. Das Erste, was dies tut, ist das Importieren (`require()`) aller Modelle. Wir müssen dies tun, weil wir sie verwenden, um die Dokumentenzähler zu erhalten. Der Code erfordert auch "express-async-handler", das einen Wrapper bereitstellt, um [Ausnahmen, die in Routenerhandler-Funktionen geworfen werden](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes#handling_exceptions_in_route_functions) abzufangen.

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

Wir verwenden die Methode [`countDocuments()`](<https://mongoosejs.com/docs/api/model.html#Model.countDocuments()>), um die Anzahl der Instanzen jedes Modells abzurufen. Diese Methode wird auf einem Modell aufgerufen, mit einer optionalen Menge von Bedingungen, die erfüllt werden sollen, und gibt ein `Query`-Objekt zurück. Die Abfrage kann durch Aufrufen von [`exec()`](https://mongoosejs.com/docs/api/query.html#Query.prototype.exec) ausgeführt werden, das ein `Promise` zurückgibt, das entweder mit einem Ergebnis erfüllt oder bei einem Datenbankfehler abgelehnt wird.

Da die Abfragen für die Dokumentenzähler voneinander unabhängig sind, verwenden wir [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um sie parallel auszuführen. Die Methode gibt ein neues Promise zurück, auf dessen Abschluss wir mit [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) warten (die Ausführung pausiert _innerhalb dieser Funktion_ bei `await`). Wenn alle Abfragen abgeschlossen sind, wird das von `all()` zurückgegebene Promise erfüllt, die Ausführung der Routenhandler-Funktion fortgesetzt und das Array mit den Ergebnissen der Datenbankabfragen gefüllt.

Wir rufen dann [`res.render()`](https://expressjs.com/en/4x/api.html#res.render) auf, spezifizieren eine Ansicht (Template) namens '**index**' und Objekte, die die Ergebnisse der Datenbankabfragen auf das View-Template abbilden. Die Daten werden als Schlüssel-Wert-Paare bereitgestellt und können im Template mit dem Schlüssel abgerufen werden.

> [!NOTE]
> Wenn Sie einen Schlüssel/Variable in einem Pug-Template verwenden, der/die nicht übergeben wurde, wird er/sie als leerer String gerendert und in Ausdrücken als `false` bewertet. Andere Template-Sprachen können erfordern, dass Sie Werte für alle Objekte übergeben, die Sie verwenden.

Beachten Sie, dass der Code sehr einfach ist, weil wir annehmen können, dass die Datenbankabfragen erfolgreich sind. Wenn eine der Datenbankoperationen fehlschlägt, wird die geworfene Ausnahme von `asyncHandler()` abgefangen und an den `next` Middleware-Handler in der Kette weitergegeben.

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

Die Ansicht ist unkompliziert. Wir erweitern das **layout.pug** Basistemplate und überschreiben den `block` namens '**content**'. Die erste `h1` Überschrift wird der escapte Text für die `title` Variable sein, die in die `render()` Funktion übergeben wurde—beachten Sie die Verwendung von `h1=`, damit der folgende Text als JavaScript-Ausdruck behandelt wird. Dann fügen wir einen Absatz ein, der die LocalLibrary vorstellt.

Unter der Überschrift _Dynamischer Inhalt_ listen wir die Anzahl der Kopien jedes Modells auf. Beachten Sie, dass die Template-Werte für die Daten die Schlüssel sind, die beim Aufrufen von `render()` in der Routenhandler-Funktion angegeben wurden.

> [!NOTE]
> Wir haben die Zählerwerte nicht escaped (d.h. wir haben die Syntax `!{}` verwendet), weil die Zählerwerte berechnet werden. Wenn die Informationen von Endbenutzern bereitgestellt würden, würden wir die Variable zur Anzeige escapen.

## Wie sieht es aus?

An diesem Punkt sollten wir alles erstellt haben, was nötig ist, um die Indexseite anzuzeigen. Starten Sie die Anwendung und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite ähnlich wie der folgende Screenshot aussehen.

![Startseite - Express Local Library Seite](locallibary_express_home.png)

> [!NOTE]
> Sie werden die Links in der Seitenleiste noch nicht _benutzen_ können, da die URLs, Ansichten und Templates für diese Seiten noch nicht definiert sind. Wenn Sie es versuchen, erhalten Sie Fehler wie "NOT IMPLEMENTED: Book list", abhängig davon, auf welchen Link Sie klicken. Diese String-Literale (die durch richtige Daten ersetzt werden) wurden in den verschiedenen Controllern angegeben, die sich in Ihrer "controllers" Datei befinden.

## Nächste Schritte

- Zurück zu [Express Tutorial Teil 5: Anzeige von Bibliotheksdaten](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data).
- Weiter zum nächsten Unterartikel von Teil 5: [Buchlisten-Seite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_list_page).
