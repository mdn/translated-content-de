---
title: Startseite
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Home_page
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Die erste Seite, die wir erstellen werden, ist die Startseite der Webseite, die sowohl vom Site-Root (`/`) als auch vom Katalog-Root (`catalog/`) aus zugänglich ist. Diese wird statischen Text zur Beschreibung der Seite anzeigen, zusammen mit dynamisch berechneten "Counts" von verschiedenen Datensatztypen in der Datenbank.

Wir haben bereits eine Route für die Startseite erstellt. Um die Seite zu vervollständigen, müssen wir unsere Controller-Funktion aktualisieren, um "Counts" von Datensätzen aus der Datenbank abzurufen, und eine Ansicht (Template) erstellen, die wir zum Rendern der Seite verwenden können.

> [!NOTE]
> Wir werden Mongoose verwenden, um Informationen aus der Datenbank abzurufen.
> Bevor Sie fortfahren, möchten Sie vielleicht den [Mongoose-Leitfaden](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#mongoose_primer) Abschnitt zu [Aufzeichnungen suchen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#searching_for_records) erneut lesen.

## Route

Wir haben unsere Routen für die Indexseite in einem [vorherigen Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes) erstellt.
Zur Erinnerung, alle Routenfunktionen sind in **/routes/catalog.js** definiert:

```js
// GET catalog home page.
router.get("/", book_controller.index); //This actually maps to /catalog/ because we import the route with a /catalog prefix
```

Die im Buch-Controller übergebene Indexfunktion als Parameter (`book_controller.index`) hat eine "Platzhalter"-Implementierung, die in **/controllers/bookController.js** definiert ist:

```js
exports.index = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Site Home Page");
});
```

Diese Controller-Funktion erweitern wir, um Informationen aus unseren Modellen zu erhalten und sie dann mit einem Template (Ansicht) zu rendern.

## Controller

Die Index-Controller-Funktion muss Informationen darüber abrufen, wie viele `Book`, `BookInstance` (alle), `BookInstance` (verfügbar), `Author` und `Genre` Datensätze wir in der Datenbank haben, diese Daten in einem Template rendern, um eine HTML-Seite zu erstellen, und sie dann in einer HTTP-Antwort zurückgeben.

Öffnen Sie **/controllers/bookController.js**. Nahe dem Anfang der Datei sollten Sie die exportierte `index()` Funktion sehen.

```js
const Book = require("../models/book");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Site Home Page");
});
```

Ersetzen Sie den gesamten obigen Code durch das folgende Codefragment.
Das erste, was dies tut, ist, alle Modelle zu importieren (`require()`).
Wir müssen dies tun, da wir sie verwenden werden, um unsere Dokumentenzählungen zu erhalten.
Der Code erfordert auch "express-async-handler", das eine Wrapper-Funktion bereitstellt, um [Ausnahmen abzufangen, die in Route-Handler-Funktionen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes#handling_exceptions_in_route_functions) geworfen werden.

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
Diese Methode wird auf einem Modell aufgerufen, mit einem optionalen Satz von Bedingungen, gegen die abgeglichen werden soll, und gibt ein `Query`-Objekt zurück.
Die Abfrage kann durch Aufruf von [`exec()`](https://mongoosejs.com/docs/api/query.html#Query.prototype.exec) ausgeführt werden, das ein `Promise` zurückgibt, das entweder mit einem Ergebnis erfüllt oder abgelehnt wird, wenn ein Datenbankfehler auftritt.

Da die Abfragen für die Dokumentenzählungen unabhängig voneinander sind, verwenden wir [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um sie parallel auszuführen.
Die Methode gibt ein neues Versprechen zurück, das wir [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) auf die Fertigstellung erwarten (die Ausführung pausiert innerhalb _dieser Funktion_ bei `await`).
Wenn alle Abfragen abgeschlossen sind, erfüllt das von `all()` zurückgegebene Versprechen, wodurch die Ausführung der Routen-Handler-Funktion fortgesetzt wird und das Array mit den Ergebnissen der Datenbankabfragen gefüllt wird.

Wir rufen dann [`res.render()`](https://expressjs.com/en/4x/api.html#res.render) auf, wobei wir eine Ansicht (Template) namens '**index**' und Objekte angeben, die die Ergebnisse der Datenbankabfragen auf das Template abbilden.
Die Daten werden als Schlüssel-Wert-Paare bereitgestellt und können im Template mit dem Schlüssel abgerufen werden.

> [!NOTE]
> Wenn Sie in einem Pug-Template einen Schlüssel/eine Variable verwenden, der/die nicht übergeben wurde, wird er/sie als Leerzeichen angezeigt und in Ausdrücken als `false` ausgewertet.
> Andere Template-Sprachen erfordern möglicherweise, dass Sie für alle Objekte, die Sie verwenden, Werte übergeben.

Beachten Sie, dass der Code sehr einfach ist, da wir davon ausgehen können, dass die Datenbankabfragen erfolgreich sind.
Wenn eine der Datenbankoperationen fehlschlägt, wird die geworfene Ausnahme von `asyncHandler()` abgefangen und an den `next` Middleware-Handler in der Kette weitergegeben.

## Ansicht

Öffnen Sie **/views/index.pug** und ersetzen Sie den Inhalt durch den unten stehenden Text.

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

Die Ansicht ist unkompliziert. Wir erweitern das **layout.pug** Standardtemplate und überschreiben den `block`, der '**content**' genannt wird. Die erste `h1` Überschrift wird der escapete Text für die `title` Variable sein, die in die `render()` Funktion übergeben wurde—beachten Sie die Verwendung von `h1=`, damit der folgende Text als JavaScript-Ausdruck behandelt wird. Wir fügen dann einen Absatz hinzu, der die LocalLibrary vorstellt.

Unter der Überschrift _Dynamischer Inhalt_ listen wir die Anzahl der Kopien jedes Modells auf.
Beachten Sie, dass die Template-Werte für die Daten die Schlüssel sind, die angegeben wurden, als `render()` in der Routen-Handler-Funktion aufgerufen wurde.

> [!NOTE]
> Wir haben die Zählwerte nicht escapet (d.h. wir haben die `!{}` Syntax verwendet), da die Zählwerte berechnet werden. Wenn die Informationen von Endbenutzern bereitgestellt würden, würden wir die Variable zur Anzeige escapen.

## Wie sieht das aus?

An diesem Punkt sollten wir alles erstellt haben, was notwendig ist, um die Indexseite anzuzeigen. Führen Sie die Anwendung aus und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wenn alles korrekt eingerichtet ist, sollte Ihre Webseite etwa wie der folgende Screenshot aussehen.

![Startseite - Express Local Library Seite](locallibary_express_home.png)

> [!NOTE]
> Sie werden die Sidebar-Links noch nicht _verwenden_ können, da die URLs, Ansichten und Templates für diese Seiten noch nicht definiert sind. Wenn Sie es versuchen, erhalten Sie Fehler wie "NOT IMPLEMENTED: Book list", je nachdem, welchen Link Sie anklicken. Diese String-Literale (die durch ordnungsgemäße Daten ersetzt werden) wurden in den verschiedenen Controllern angegeben, die sich in Ihrer "controllers" Datei befinden.

## Nächste Schritte

- Zurück zum [Express Tutorial Teil 5: Anzeigen von Bibliotheksdaten](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie mit dem nächsten Unterartikel von Teil 5 fort: [Buchlisten-Seite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_list_page).
