---
title: Startseite
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Home_page
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

Die erste Seite, die wir erstellen werden, ist die Startseite der Website, die entweder vom Hauptverzeichnis der Seite (`/`) oder vom Katalog (`catalog/`) aus zugänglich ist. Diese Seite zeigt statischen Text an, der die Website beschreibt, zusammen mit dynamisch berechneten "Anzahlen" verschiedener Datensatztypen in der Datenbank.

Wir haben bereits eine Route für die Startseite erstellt. Um die Seite zu vervollständigen, müssen wir unsere Controller-Funktion aktualisieren, um "Anzahlen" von Datensätzen aus der Datenbank abzurufen, und eine Ansicht (Template) erzeugen, die wir zur Darstellung der Seite verwenden können.

> [!NOTE]
> Wir werden Mongoose verwenden, um Informationen aus der Datenbank zu erhalten. Bevor Sie fortfahren, möchten Sie vielleicht den Abschnitt über den [Mongoose Primer](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#mongoose_primer) und [Suche nach Datensätzen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#searching_for_records) erneut lesen.

## Route

Wir haben unsere Indexseiten-Routen in einem [früheren Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes) erstellt. Zur Erinnerung: Alle Routenfunktionen sind in **/routes/catalog.js** definiert:

```js
// GET catalog home page.
router.get("/", book_controller.index); //This actually maps to /catalog/ because we import the route with a /catalog prefix
```

Die Bücher-Controller-Indexfunktion, die als Parameter übergeben wird (`book_controller.index`), hat eine "Platzhalter"-Implementierung in **/controllers/bookController.js**:

```js
exports.index = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Site Home Page");
});
```

Diese Controller-Funktion erweitern wir, um Informationen aus unseren Modellen zu erhalten und sie dann mithilfe eines Templates (View) darzustellen.

## Controller

Die Index-Controller-Funktion muss Informationen darüber abrufen, wie viele `Book`, `BookInstance` (alle), `BookInstance` (verfügbar), `Author` und `Genre`-Datensätze wir in der Datenbank haben. Diese Daten werden in einem Template gerendert, um eine HTML-Seite zu erstellen, die dann in einer HTTP-Antwort zurückgegeben wird.

Öffnen Sie **/controllers/bookController.js**. Nahe dem Anfang der Datei sollten Sie die exportierte `index()`-Funktion sehen.

```js
const Book = require("../models/book");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Site Home Page");
});
```

Ersetzen Sie den gesamten obigen Code durch das folgende Code-Fragment. Das Erste, was dieser Code tut, ist, alle Modelle zu importieren (`require()`). Das ist notwendig, da wir sie verwenden, um die Dokumentenzahlen zu erhalten. Der Code benötigt ebenfalls "express-async-handler", das einen Wrapper bereitstellt, um [Ausnahmen in Routen-Handler-Funktionen abzufangen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes#handling_exceptions_in_route_functions).

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

Wir verwenden die Methode [`countDocuments()`](<https://mongoosejs.com/docs/api/model.html#Model.countDocuments()>), um die Anzahl der Instanzen jedes Modells zu ermitteln. Diese Methode wird auf einem Modell aufgerufen, mit einem optionalen Satz von Bedingungen zum Abgleichen, und sie gibt ein `Query`-Objekt zurück. Die Abfrage kann mithilfe von [`exec()`](https://mongoosejs.com/docs/api/query.html#Query.prototype.exec) ausgeführt werden, was ein `Promise` zurückgibt, das entweder bei einem Ergebnis erfüllt wird oder bei einem Datenbankfehler abgelehnt wird.

Da die Abfragen für die Dokumentenzahlen unabhängig voneinander sind, verwenden wir [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um sie parallel auszuführen. Die Methode gibt ein neues Promise zurück, auf das wir mit `await` warten (die Ausführung pausiert innerhalb _dieser Funktion_ bei `await`). Wenn alle Abfragen abgeschlossen sind, wird das von `all()` zurückgegebene Promise erfüllt, die Ausführung der Routen-Handler-Funktion wird fortgesetzt und das Array wird mit den Ergebnissen der Datenbankabfragen gefüllt.

Dann rufen wir [`res.render()`](https://expressjs.com/en/4x/api.html#res.render) auf und spezifizieren eine Ansicht (Template) namens '**index**' und Objekte, die die Ergebnisse der Datenbankabfragen auf das View-Template abbilden. Die Daten werden als Schlüssel-Wert-Paare bereitgestellt und können im Template mit dem Schlüssel zugegriffen werden.

> [!NOTE]
> Wenn Sie einen Schlüssel/Variable in einem Pug-Template verwenden, die nicht übergeben wurde, wird sie als leerer String gerendert und in Ausdrücken als `false` ausgewertet. Andere Templating-Sprachen erfordern möglicherweise, dass Sie Werte für alle verwendeten Objekte übergeben.

Beachten Sie, dass der Code sehr einfach ist, weil wir annehmen können, dass die Datenbankabfragen erfolgreich sind. Wenn eine der Datenbankoperationen fehlschlägt, wird die geworfene Ausnahme von `asyncHandler()` abgefangen und an den `next` Middleware-Handler in der Kette übergeben.

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

Die Ansicht ist unkompliziert. Wir erweitern das **layout.pug** Basistemplate und überschreiben den `block` namens '**content**'. Die erste `h1`-Überschrift wird der escapte Text für die `title`-Variable sein, die in die `render()`-Funktion übergeben wurde – beachten Sie die Verwendung von `h1=`, damit der folgende Text als JavaScript-Ausdruck behandelt wird. Wir fügen dann einen Absatz hinzu, der die LocalLibrary vorstellt.

Unter der Überschrift _Dynamischer Inhalt_ listen wir die Anzahl der Kopien jedes Modells auf. Beachten Sie, dass die Template-Werte für die Daten die Schlüssel sind, die angegeben wurden, als `render()` in der Routen-Handler-Funktion aufgerufen wurde.

> [!NOTE]
> Wir haben die Zählwerte nicht escapt (d.h. wir haben die Syntax `!{}` verwendet), weil die Zählwerte berechnet werden. Wäre die Information von Endnutzern bereitgestellt worden, würden wir die Variable zur Anzeige escapen.

## Wie sieht es aus?

An diesem Punkt sollten wir alles erstellt haben, was zum Anzeigen der Indexseite notwendig ist. Führen Sie die Anwendung aus und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite in etwa wie der folgende Screenshot aussehen.

![Startseite - Express Local Library site](locallibary_express_home.png)

> [!NOTE]
> Sie werden die Sidebar-Links noch nicht _verwenden_ können, da die URLs, Ansichten und Templates für diese Seiten noch nicht definiert wurden. Wenn Sie es versuchen, erhalten Sie möglicherweise Fehler wie "NOT IMPLEMENTED: Book list", abhängig von dem Link, auf den Sie klicken. Diese String-Literale (die durch echte Daten ersetzt werden) wurden in den verschiedenen Controllern spezifiziert, die in Ihrer "controllers" Datei leben.

## Nächste Schritte

- Kehren Sie zurück zu [Express Tutorial Teil 5: Anzeigen von Bibliotheksdaten](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie mit dem nächsten Unterartikel des Teils 5 fort: [Bücherlisten-Seite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_list_page).
