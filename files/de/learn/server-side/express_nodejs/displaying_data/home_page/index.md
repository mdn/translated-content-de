---
title: Startseite
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Home_page
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

Die erste Seite, die wir erstellen werden, ist die Startseite der Website, die sowohl über den Root der Seite (`/`) als auch über den Katalog (`catalog/`) erreichbar ist. Diese wird einen statischen Text anzeigen, der die Website beschreibt, zusammen mit dynamisch berechneten "Zählungen" verschiedener Datensatztypen in der Datenbank.

Wir haben bereits eine Route für die Startseite erstellt. Um die Seite zu vervollständigen, müssen wir unsere Controller-Funktion aktualisieren, um "Zählungen" von Datensätzen aus der Datenbank abzurufen, und eine Ansicht (Template) erstellen, die wir zur Darstellung der Seite verwenden können.

> [!NOTE]
> Wir werden Mongoose verwenden, um Datenbankinformationen zu erhalten.
> Bevor Sie fortfahren, möchten Sie möglicherweise den Abschnitt [Mongoose-Grundlagen](/de/docs/Learn/Server-side/Express_Nodejs/mongoose#mongoose_primer) über [Suche nach Datensätzen](/de/docs/Learn/Server-side/Express_Nodejs/mongoose#searching_for_records) noch einmal lesen.

## Route

Wir haben unsere Routen für die Indexseite in einem [früheren Tutorial](/de/docs/Learn/Server-side/Express_Nodejs/routes) erstellt.
Zur Erinnerung: Alle Routenfunktionen sind in **/routes/catalog.js** definiert:

```js
// GET katalog Startseite.
router.get("/", book_controller.index); // Dies mappt tatsächlich auf /catalog/, weil wir die Route mit einem /catalog Präfix importieren
```

Die im Parameter übergebene Indexfunktion des Buch-Controllers (`book_controller.index`) hat eine "Platzhalter"-Implementierung in **/controllers/bookController.js**:

```js
exports.index = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Startseite der Website");
});
```

Diese Controller-Funktion wird erweitert, um Informationen aus unseren Modellen abzurufen und dann mit einem Template (Ansicht) zu rendern.

## Controller

Die Index-Controller-Funktion muss Informationen darüber abrufen, wie viele `Book`, `BookInstance` (alle), `BookInstance` (verfügbar), `Author` und `Genre` Datensätze wir in der Datenbank haben, und diese Daten in einem Template rendern, um eine HTML-Seite zu erstellen, die dann in einer HTTP-Antwort zurückgegeben wird.

Öffnen Sie **/controllers/bookController.js**. Nahe am Anfang der Datei sollten Sie die exportierte `index()` Funktion sehen.

```js
const Book = require("../models/book");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Startseite der Website");
});
```

Ersetzen Sie den gesamten obigen Code durch das folgende Codefragment.
Das Erste, was dies tut, ist das Importieren (`require()`) aller Modelle.
Wir müssen dies tun, weil wir sie verwenden werden, um unsere Dokumentenzählungen zu erhalten.
Der Code benötigt auch "express-async-handler", das einen Wrapper bereitstellt, um [Ausnahmen in Routenhandler-Funktionen abzufangen](/de/docs/Learn/Server-side/Express_Nodejs/routes#handling_exceptions_in_route_functions).

```js
const Book = require("../models/book");
const Author = require("../models/author");
const Genre = require("../models/genre");
const BookInstance = require("../models/bookinstance");

const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  // Details zu Büchern, Buchinstanzen, Autoren und Genres gleichzeitig abrufen
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

Wir verwenden die [`countDocuments()`](<https://mongoosejs.com/docs/api/model.html#Model.countDocuments()>) Methode, um die Anzahl der Instanzen jedes Modells zu erhalten.
Diese Methode wird auf einem Modell aufgerufen, mit einem optionalen Satz von Bedingungen, gegen die abgeglichen werden soll, und gibt ein `Query` Objekt zurück.
Die Abfrage kann durch Aufruf von [`exec()`](https://mongoosejs.com/docs/api/query.html#Query.prototype.exec) ausgeführt werden, das ein `Promise` zurückgibt, das entweder mit einem Ergebnis erfüllt oder abgelehnt wird, wenn ein Datenbankfehler vorliegt.

Da die Abfragen für Dokumentenzählungen unabhängig voneinander sind, verwenden wir [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um sie parallel auszuführen.
Die Methode gibt ein neues Promise zurück, auf das wir [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) für die Vollendung warten (die Ausführung pausiert innerhalb _dieser Funktion_ bei `await`).
Wenn alle Abfragen abgeschlossen sind, wird das von `all()` zurückgegebene Promise erfüllt, die Ausführung der Routenhandler-Funktion wird fortgesetzt und es wird das Array mit den Ergebnissen der Datenbankabfragen gefüllt.

Dann rufen wir [`res.render()`](https://expressjs.com/en/4x/api.html#res.render) auf und geben eine Ansicht (Template) mit dem Namen '**index**' sowie Objekte an, die die Ergebnisse der Datenbankabfragen mit dem Ansichts-Template abbilden.
Die Daten werden als Schlüssel-Wert-Paare bereitgestellt und können im Template mit dem Schlüssel abgerufen werden.

> [!NOTE]
> Wenn Sie einen Schlüssel/Variable in einem Pug-Template verwenden, der/die nicht übergeben wurde, wird diese/dieser als Leerzeichen gerendert und in Ausdrücken als `false` ausgewertet.
> Andere Template-Sprachen erfordern möglicherweise, dass Sie Werte für alle Objekte übergeben, die Sie verwenden.

Beachten Sie, dass der Code sehr einfach ist, weil wir davon ausgehen können, dass die Datenbankabfragen erfolgreich sind.
Wenn eine der Datenbankoperationen fehlschlägt, wird die Ausnahme, die ausgelöst wird, von `asyncHandler()` abgefangen und an den `next` Middleware-Handler in der Kette übergeben.

## Ansicht

Öffnen Sie **/views/index.pug** und ersetzen Sie den Inhalt durch den folgenden Text.

```pug
extends layout

block content
  h1= title
  p Willkommen bei #[em LocalLibrary], einer sehr einfachen Express-Website, die als Tutorial-Beispiel auf dem Mozilla Developer Network entwickelt wurde.

  h2 Dynamischer Inhalt

  p Die Bibliothek hat die folgenden Datensatzanzahlen:

  ul
    li #[strong Bücher:] !{book_count}
    li #[strong Exemplare:] !{book_instance_count}
    li #[strong Verfügbare Exemplare:] !{book_instance_available_count}
    li #[strong Autoren:] !{author_count}
    li #[strong Genres:] !{genre_count}
```

Die Ansicht ist unkompliziert. Wir erweitern das **layout.pug** Basis-Template und überschreiben den `block` namens '**content**'. Die erste `h1` Überschrift wird der escapeierte Text für die `title` Variable sein, die in die `render()` Funktion übergeben wurde—beachten Sie die Verwendung von '`h1=`', sodass der folgende Text als JavaScript-Ausdruck behandelt wird. Anschließend fügen wir einen Absatz hinzu, der die LocalLibrary einführt.

Unter der Überschrift _Dynamischer Inhalt_ listen wir die Anzahl der Exemplare jedes Modells auf.
Beachten Sie, dass die Template-Werte für die Daten die Schlüssel sind, die angegeben wurden, als `render()` in der Routenhandler-Funktion aufgerufen wurde.

> [!NOTE]
> Wir haben die Zählwerte nicht escapeiert (d.h. wir haben die `!{}` Syntax verwendet), da die Zählwerte berechnet werden. Wenn die Informationen von Endnutzern bereitgestellt würden, würden wir die Variable zur Anzeige escapeieren.

## Wie sieht es aus?

An diesem Punkt sollten wir alles erstellt haben, was benötigt wird, um die Indexseite anzuzeigen. Führen Sie die Anwendung aus und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite etwa wie der folgende Screenshot aussehen.

![Startseite - Express Local Library Website](locallibary_express_home.png)

> [!NOTE]
> Sie werden die Seitenleisten-Links noch nicht _verwenden_ können, da die URLs, Ansichten und Templates für diese Seiten noch nicht definiert sind. Wenn Sie es versuchen, erhalten Sie Fehler wie "NICHT IMPLEMENTIERT: Buchliste", je nachdem, auf welchen Link Sie klicken. Diese Zeichenfolgen-Literale (die durch echte Daten ersetzt werden) wurden in den verschiedenen Controllern angegeben, die sich in Ihrer "controllers" Datei befinden.

## Nächste Schritte

- Kehren Sie zurück zu [Express Tutorial Teil 5: Anzeigen von Bibliotheksdaten](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie fort mit dem nächsten Unterartikel von Teil 5: [Buchliste-Seite](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Book_list_page).
