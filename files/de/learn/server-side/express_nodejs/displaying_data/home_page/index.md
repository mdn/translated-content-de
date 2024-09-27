---
title: Startseite
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Home_page
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{LearnSidebar}}

Die erste Seite, die wir erstellen, wird die Startseite der Website sein, die entweder vom Website-Wurzelverzeichnis (`/`) oder vom Katalog-Wurzelverzeichnis (`catalog/`) aus zugänglich ist. Diese Seite zeigt einige statische Texte, die die Website beschreiben, sowie dynamisch berechnete "Anzahlen" verschiedener Datensatztypen in der Datenbank.

Wir haben bereits eine Route für die Startseite erstellt. Um die Seite zu vervollständigen, müssen wir unsere Controller-Funktion aktualisieren, um "Anzahlen" von Datensätzen aus der Datenbank abzurufen, und eine Ansicht (Template) erstellen, die wir verwenden können, um die Seite darzustellen.

> [!NOTE]
> Wir werden Mongoose verwenden, um Informationen aus der Datenbank zu erhalten.
> Bevor Sie fortfahren, möchten Sie vielleicht den Abschnitt des [Mongoose-Leitfadens](/de/docs/Learn/Server-side/Express_Nodejs/mongoose#mongoose_primer) über das [Suchen nach Datensätzen](/de/docs/Learn/Server-side/Express_Nodejs/mongoose#searching_for_records) noch einmal lesen.

## Route

Wir haben unsere Index-Seitenrouten in einem [früheren Tutorial](/de/docs/Learn/Server-side/Express_Nodejs/routes) erstellt.
Zur Erinnerung: Alle Routenfunktionen sind in **/routes/catalog.js** definiert:

```js
// GET catalog home page.
router.get("/", book_controller.index); //This actually maps to /catalog/ because we import the route with a /catalog prefix
```

Die im Buch-Controller übergebene Indexfunktion (`book_controller.index`) hat eine "Platzhalter"-Implementierung, die in **/controllers/bookController.js** definiert ist:

```js
exports.index = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Site Home Page");
});
```

Diese Controller-Funktion erweitern wir, um Informationen aus unseren Modellen abzurufen und sie dann mithilfe einer Vorlage (View) darzustellen.

## Controller

Die Index-Controller-Funktion muss Informationen darüber abrufen, wie viele `Book`, `BookInstance` (alle), `BookInstance` (verfügbar), `Author` und `Genre` Datensätze wir in der Datenbank haben, diese Daten in einem Template rendern, um eine HTML-Seite zu erstellen, und dann als HTTP-Antwort zurückgeben.

Öffnen Sie **/controllers/bookController.js**. Nahe dem Anfang der Datei sollten Sie die exportierte `index()`-Funktion sehen.

```js
const Book = require("../models/book");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Site Home Page");
});
```

Ersetzen Sie den gesamten obigen Code durch folgendes Codefragment.
Das Erste, was dieses tut, ist, alle Modelle zu importieren (`require()`).
Das müssen wir tun, da wir sie verwenden werden, um unsere Dokumentenzählung zu erhalten.
Der Code erfordert auch "express-async-handler", das eine Wrapper-Funktion bereitstellt, um [Ausnahmen abzufangen, die in Routen-Handler-Funktionen geworfen werden](/de/docs/Learn/Server-side/Express_Nodejs/routes#handling_exceptions_in_route_functions).

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
Diese Methode wird auf einem Modell aufgerufen, mit einem optionalen Satz von Bedingungen zum Abgleichen, und gibt ein `Query`-Objekt zurück.
Die Abfrage kann durch Aufrufen von [`exec()`](https://mongoosejs.com/docs/api/query.html#Query.prototype.exec) ausgeführt werden, was ein `Promise` zurückgibt, das entweder mit einem Ergebnis erfüllt wird oder zurückgewiesen wird, wenn ein Datenbankfehler auftritt.

Da die Abfragen für die Dokumentenzählungen unabhängig voneinander sind, verwenden wir [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um sie parallel auszuführen.
Die Methode gibt ein neues Versprechen zurück, auf das wir mit [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) warten (die Ausführung pausiert innerhalb _dieser Funktion_ bei `await`).
Wenn alle Abfragen abgeschlossen sind, wird das von `all()` zurückgegebene Versprechen erfüllt, und die Ausführung der Routen-Handler-Funktion wird fortgesetzt und das Array mit den Ergebnissen der Datenbankabfragen gefüllt.

Wir rufen dann [`res.render()`](https://expressjs.com/en/4x/api.html#res.render) auf und spezifizieren eine Ansicht (Template) namens '**index**' sowie Objekte, die die Ergebnisse der Datenbankabfragen auf das Ansichtstemplate abbilden.
Die Daten werden als Schlüssel-Werte-Paare bereitgestellt und können im Template mit dem Schlüssel abgerufen werden.

> [!NOTE]
> Wenn Sie eine Variable in einer Pug-Vorlage verwenden, die nicht übergeben wurde, wird diese als leerer String gerendert und in Ausdrücken als `false` ausgewertet.
> Andere Vorlagensprachen erfordern möglicherweise, dass Sie Werte für alle Objekte übergeben, die Sie verwenden.

Beachten Sie, dass der Code sehr einfach ist, da wir davon ausgehen können, dass die Datenbankabfragen erfolgreich sind.
Wenn irgendeine der Datenbankoperationen fehlschlägt, wird die Ausnahme, die ausgelöst wird, von `asyncHandler()` abgefangen und an den `next` Middleware-Handler in der Kette weitergegeben.

## Ansicht

Öffnen Sie **/views/index.pug** und ersetzen Sie den Inhalt durch den untenstehenden Text.

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

Die Ansicht ist unkompliziert. Wir erweitern das Basis-Template **layout.pug** und überschreiben den `block` namens '**content**'. Die erste `h1`-Überschrift wird der maskierte Text für die `title`-Variable sein, die in die `render()`-Funktion übergeben wurde — beachten Sie die Verwendung von `h1=`, sodass der folgende Text als JavaScript-Ausdruck behandelt wird. Dann fügen wir einen Absatz hinzu, der die LocalLibrary vorstellt.

Unter der Überschrift _Dynamischer Inhalt_ listen wir die Anzahl der Kopien jedes Modells auf.
Beachten Sie, dass die Template-Werte für die Daten die Schlüssel sind, die angegeben wurden, als `render()` im Routen-Handler aufgerufen wurde.

> [!NOTE]
> Wir haben die Zählwerte nicht maskiert (d.h. wir haben die Syntax `!{}` verwendet), da die Zählwerte berechnet werden. Wäre die Information von den Endbenutzern bereitgestellt worden, hätten wir die Variable für die Anzeige maskiert.

## Wie sieht es aus?

Zu diesem Zeitpunkt sollten wir alles erstellt haben, was erforderlich ist, um die Index-Seite anzuzeigen. Führen Sie die Anwendung aus und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wenn alles korrekt eingerichtet ist, sollte Ihre Website in etwa wie der folgende Screenshot aussehen.

![Startseite - Express Local Library Website](locallibary_express_home.png)

> [!NOTE]
> Sie werden die Seitenleistenlinks noch nicht _verwenden_ können, da die URLs, Ansichten und Templates für diese Seiten noch nicht definiert sind. Wenn Sie es versuchen, erhalten Sie Fehler wie "NOT IMPLEMENTED: Book list", je nachdem, auf welchen Link Sie klicken. Diese Zeichenfolgenliterale (die durch korrekte Daten ersetzt werden) wurden in den verschiedenen Controllern angegeben, die sich in Ihrer "controllers" Datei befinden.

## Nächste Schritte

- Kehren Sie zurück zu [Express Tutorial Teil 5: Anzeige von Bibliotheksdaten](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie mit dem nächsten Unterartikel von Teil 5 fort: [Buchlistenseite](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Book_list_page).
