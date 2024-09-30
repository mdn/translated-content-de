---
title: Startseite
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Home_page
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{LearnSidebar}}

Die erste Seite, die wir erstellen werden, ist die Startseite der Website, die entweder vom Hauptverzeichnis der Seite (`/`) oder des Katalogs (`catalog/`) aus zugänglich ist. Diese wird einige statische Texte anzeigen, die die Seite beschreiben, zusammen mit dynamisch berechneten "Anzahlen" verschiedener Datensatztypen in der Datenbank.

Wir haben bereits eine Route für die Startseite erstellt. Um die Seite zu vervollständigen, müssen wir unsere Controller-Funktion aktualisieren, um "Anzahlen" von Datensätzen aus der Datenbank abzurufen, und eine Ansicht (Template) erstellen, die wir zur Darstellung der Seite verwenden können.

> [!NOTE]
> Wir werden Mongoose verwenden, um Informationen aus der Datenbank zu erhalten.
> Bevor Sie fortfahren, möchten Sie möglicherweise den Abschnitt [Mongoose-Grundlagen](/de/docs/Learn/Server-side/Express_Nodejs/mongoose#mongoose_primer) über das [Suchen nach Datensätzen](/de/docs/Learn/Server-side/Express_Nodejs/mongoose#searching_for_records) erneut lesen.

## Route

Wir haben unsere Indexseiten-Routen in einem [vorherigen Tutorial](/de/docs/Learn/Server-side/Express_Nodejs/routes) erstellt.
Zur Erinnerung: Alle Routenfunktionen sind in **/routes/catalog.js** definiert:

```js
// GET catalog home page.
router.get("/", book_controller.index); //This actually maps to /catalog/ because we import the route with a /catalog prefix
```

Die Indexfunktion des Buchcontrollers, die als Parameter übergeben wird (`book_controller.index`), hat eine "Platzhalter"-Implementierung, die in **/controllers/bookController.js** definiert ist:

```js
exports.index = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Site Home Page");
});
```

Diese Controller-Funktion erweitern wir, um Informationen aus unseren Modellen abzurufen und sie dann mit einem Template (Ansicht) darzustellen.

## Controller

Die Index-Controller-Funktion muss Informationen darüber abrufen, wie viele `Book`, `BookInstance` (alle), `BookInstance` (verfügbar), `Author` und `Genre` Datensätze wir in der Datenbank haben, diese Daten in einem Template rendern, um eine HTML-Seite zu erstellen, und sie dann in einer HTTP-Antwort zurückgeben.

Öffnen Sie **/controllers/bookController.js**. Nahe dem Anfang der Datei sollten Sie die exportierte `index()`-Funktion sehen.

```js
const Book = require("../models/book");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Site Home Page");
});
```

Ersetzen Sie den gesamten Code oben durch das folgende Codefragment.
Das Erste, was dies tut, ist, alle Modelle zu importieren (`require()`).
Wir müssen dies tun, da wir sie verwenden werden, um unsere Dokumentenzählungen zu erhalten.
Der Code benötigt auch "express-async-handler", das eine Wrapper bietet, um [Ausnahmen in Routen-Handler-Funktionen zu fangen](/de/docs/Learn/Server-side/Express_Nodejs/routes#handling_exceptions_in_route_functions).

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

Wir verwenden die Methode [`countDocuments()`](<https://mongoosejs.com/docs/api/model.html#Model.countDocuments()>), um die Anzahl der Instanzen jedes Modells zu erhalten.
Diese Methode wird für ein Modell aufgerufen, mit einem optionalen Satz von Bedingungen, die erfüllt werden müssen, und gibt ein `Query`-Objekt zurück.
Die Abfrage kann durch Aufruf von [`exec()`](https://mongoosejs.com/docs/api/query.html#Query.prototype.exec) ausgeführt werden, die ein `Promise` zurückgibt, das entweder mit einem Ergebnis erfüllt wird oder abgelehnt wird, wenn ein Datenbankfehler auftritt.

Da die Abfragen für Dokumentenzählungen unabhängig voneinander sind, verwenden wir [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um sie parallel auszuführen.
Die Methode gibt ein neues Promise zurück, auf dessen Abschluss wir [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) warten (die Ausführung pausiert innerhalb _dieser Funktion_ bei `await`).
Wenn alle Abfragen abgeschlossen sind, wird das von `all()` zurückgegebene Promise erfüllt, die Ausführung der Routen-Handler-Funktion wird fortgesetzt und das Array mit den Ergebnissen der Datenbankabfragen gefüllt.

Wir rufen dann [`res.render()`](https://expressjs.com/en/4x/api.html#res.render) auf und geben eine Ansicht (Template) namens '**index**' an sowie Objekte, die die Ergebnisse der Datenbankabfragen der Ansichts-Vorlage zuordnen.
Die Daten werden als Schlüssel-Wert-Paare geliefert und können im Template über den Schlüssel zugegriffen werden.

> [!NOTE]
> Wenn Sie in einer Pug-Vorlage einen Schlüssel/Variable verwenden, der/die nicht übergeben wurde, wird er/sie als leerer String gerendert und in Ausdrücken als `false` bewertet.
> Andere Vorlagensprachen erfordern möglicherweise, dass Sie Werte für alle Objekte übergeben, die Sie verwenden.

Beachten Sie, dass der Code sehr einfach ist, da wir davon ausgehen können, dass die Datenbankabfragen erfolgreich sind.
Wenn eine der Datenbankoperationen fehlschlägt, wird die ausgelöste Ausnahme von `asyncHandler()` abgefangen und an den nächsten Middleware-Handler in der Kette weitergeleitet.

## Ansicht

Öffnen Sie **/views/index.pug** und ersetzen Sie dessen Inhalt mit dem nachstehenden Text.

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

Die Ansicht ist unkompliziert. Wir erweitern das **layout.pug**-Basistemplate und überschreiben den `block` namens '**content**'. Die erste `h1`-Überschrift wird der escapte Text für die `title`-Variable sein, die in die `render()`-Funktion übergeben wurde—beachten Sie die Verwendung von `h1=`, so dass der folgende Text als JavaScript-Ausdruck behandelt wird. Wir fügen dann einen Absatz ein, der die LocalLibrary vorstellt.

Unter der Überschrift _Dynamischer Inhalt_ listen wir die Anzahl der Kopien jedes Modells auf.
Beachten Sie, dass die Template-Werte für die Daten die Schlüssel sind, die beim Aufruf von `render()` in der Routen-Handler-Funktion angegeben wurden.

> [!NOTE]
> Wir haben die Zählwerte nicht escaped (d.h. wir haben die `!{}`-Syntax verwendet), da die Zählwerte berechnet werden. Wenn die Informationen von Endbenutzern bereitgestellt würden, würden wir die Variable zur Anzeige escapen.

## Wie sieht es aus?

An diesem Punkt sollten wir alles erstellt haben, was benötigt wird, um die Indexseite anzuzeigen. Führen Sie die Anwendung aus und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite ähnlich dem folgenden Screenshot aussehen.

![Startseite - Express Local Library-Website](locallibary_express_home.png)

> [!NOTE]
> Sie werden die Seitenleistenlinks noch nicht _verwenden_ können, da die URLs, Ansichten und Templates für diese Seiten noch nicht definiert sind. Wenn Sie es versuchen, erhalten Sie Fehlermeldungen wie "NOT IMPLEMENTED: Book list", abhängig davon, auf welchen Link Sie klicken. Diese Zeichenfolgenliterale (die durch richtige Daten ersetzt werden) wurden in den verschiedenen Controllern angegeben, die in Ihrer "controllers"-Datei gespeichert sind.

## Nächste Schritte

- Kehren Sie zurück zu [Express Tutorial Teil 5: Anzeige von Bibliotheksdaten](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie fort mit dem nächsten Unterartikel von Teil 5: [Buchlistenseite](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Book_list_page).
