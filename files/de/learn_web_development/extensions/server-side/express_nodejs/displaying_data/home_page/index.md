---
title: Startseite
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Home_page
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

Die erste Seite, die wir erstellen werden, ist die Startseite der Website, die sowohl von der Website- (`/`) als auch vom Katalog-Root (`catalog/`) aus zugänglich ist. Diese wird statischen Text enthalten, der die Seite beschreibt, zusammen mit dynamisch berechneten "Anzahlen" von verschiedenen Datensatztypen in der Datenbank.

Wir haben bereits eine Route für die Startseite erstellt. Um die Seite zu vervollständigen, müssen wir unsere Controller-Funktion aktualisieren, um die "Anzahlen" von Datensätzen aus der Datenbank zu holen, und eine Ansicht (Template) erstellen, die wir zur Darstellung der Seite verwenden können.

> [!NOTE]
> Wir werden Mongoose verwenden, um Datenbankinformationen abzurufen.
> Bevor Sie fortfahren, möchten Sie möglicherweise den Abschnitt [Mongoose-Einführung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#mongoose_primer) über [Suche nach Datensätzen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#searching_for_records) erneut lesen.

## Route

Wir haben die Routen für unsere Indexseite in einem [früheren Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes) erstellt.
Zur Erinnerung, alle Routenfunktionen sind in **/routes/catalog.js** definiert:

```js
// GET catalog home page.
router.get("/", book_controller.index); // This actually maps to /catalog/ because we import the route with a /catalog prefix
```

Die Indexfunktion des Buch-Controllers, die als Parameter übergeben wird (`book_controller.index`), hat eine "Platzhalter"-Implementierung in **/controllers/bookController.js**:

```js
exports.index = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Site Home Page");
};
```

Diese Controller-Funktion erweitern wir, um Informationen aus unseren Modellen zu holen und sie dann mit einem Template (Ansicht) darzustellen.

## Controller

Die Index-Controller-Funktion muss Informationen darüber abrufen, wie viele `Book`, `BookInstance` (alle), `BookInstance` (verfügbar), `Author` und `Genre` Datensätze wir in der Datenbank haben, diese Daten in einem Template darstellen, um eine HTML-Seite zu erstellen, und sie dann in einer HTTP-Antwort zurückgeben.

Öffnen Sie **/controllers/bookController.js**. Nahe am Anfang der Datei sollten Sie die exportierte `index()` Funktion sehen.

```js
const Book = require("../models/book");

exports.index = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Site Home Page");
};
```

Ersetzen Sie den gesamten Code oben mit folgendem Codefragment.
Das Erste, was dies tut, ist alle Modelle zu importieren (`require()`).
Dies ist notwendig, da wir sie verwenden, um unsere Anzahlen an Dokumenten zu erhalten.

```js
const Book = require("../models/book");
const Author = require("../models/author");
const Genre = require("../models/genre");
const BookInstance = require("../models/bookinstance");

exports.index = async (req, res, next) => {
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
};
```

Wir verwenden die Methode [`countDocuments()`](<https://mongoosejs.com/docs/api/model.html#Model.countDocuments()>), um die Anzahl der Instanzen jedes Modells zu ermitteln.
Diese Methode wird auf ein Modell aufgerufen, mit einem optionalen Satz von Bedingungen, gegen die abgeglichen werden soll, und gibt ein `Query`-Objekt zurück.
Die Abfrage kann durch Aufruf von [`exec()`](https://mongoosejs.com/docs/api/query.html#Query.prototype.exec) ausgeführt werden, das ein `Promise` zurückgibt, das entweder mit einem Ergebnis erfüllt wird oder abgelehnt wird, wenn ein Datenbankfehler vorliegt.

Da die Abfragen für Dokumentenzählungen unabhängig voneinander sind, verwenden wir [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um sie parallel auszuführen.
Diese Methode gibt ein neues Promise zurück, das wir auf den Abschluss [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) können (die Ausführung pausiert innerhalb _dieser Funktion_ bei `await`).
Wenn alle Abfragen abgeschlossen sind, wird das von `all()` zurückgegebene Promise erfüllt, die Ausführung der Routen-Handler-Funktion wird fortgesetzt und das Array mit den Ergebnissen der Datenbankabfragen gefüllt.

Wir rufen dann [`res.render()`](https://expressjs.com/en/5x/api/#res.render) auf und geben eine Ansicht (Template) namens '**index**' und Objekte an, die die Ergebnisse der Datenbankabfragen mit dem Ansichts-Template abbilden.
Die Daten werden als Schlüssel-Wert-Paare bereitgestellt und können im Template mit dem Schlüssel abgerufen werden.

> [!NOTE]
> Wenn Sie einen Schlüssel/eine Variable in einem Pug-Template verwenden, die nicht übergeben wurde, wird diese als Leerzeichen gerendert und in Ausdrücken als `false` ausgewertet.
> Andere Template-Sprachen erfordern möglicherweise, dass Sie Werte für alle Objekte übergeben, die Sie verwenden.

Beachten Sie, dass der Code sehr einfach ist, weil wir davon ausgehen können, dass die Datenbankabfragen erfolgreich sind.
Wenn eine der Datenbankoperationen fehlschlägt, wird die ausgelöste Ausnahme dazu führen, dass das Promise abgelehnt wird, und Express wird den Fehler an den `next` Middleware-Handler in der Kette weiterleiten.

## Ansicht

Öffnen Sie **/views/index.pug** und ersetzen Sie den Inhalt mit dem unten stehenden Text.

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

Die Ansicht ist übersichtlich. Wir erweitern das **layout.pug** Basistemplate und überschreiben den `block` namens '**content**'. Die erste `h1` Überschrift wird der escapte Text der `title` Variable sein, die in die `render()` Funktion übergeben wurde—beachten Sie die Verwendung von `h1=`, sodass der folgende Text als JavaScript-Ausdruck behandelt wird. Wir fügen dann einen Absatz hinzu, der die LocalLibrary vorstellt.

Unter der Überschrift _Dynamischer Inhalt_ listen wir die Anzahl der Kopien jedes Modells auf.
Beachten Sie, dass die Template-Werte für die Daten die Schlüssel sind, die angegeben wurden, als `render()` in der Routen-Handler-Funktion aufgerufen wurde.

> [!NOTE]
> Wir haben die Zählwerte nicht escaped (d.h. wir haben die `!{}` Syntax verwendet), weil die Zählwerte berechnet werden. Wenn die Informationen von Endnutzern bereitgestellt würden, würden wir die Variable zur Anzeige escapen.

## Wie sieht es aus?

Zu diesem Zeitpunkt sollten wir alles erstellt haben, was benötigt wird, um die Indexseite anzuzeigen. Führen Sie die Anwendung aus und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite etwa wie der folgende Screenshot aussehen.

![Startseite - Express Local Library Website](locallibary_express_home.png)

> [!NOTE]
> Sie werden die Seitenleistenlinks noch nicht _verwenden_ können, da die URLs, Ansichten und Templates für diese Seiten noch nicht definiert sind. Wenn Sie es versuchen, erhalten Sie beispielsweise Fehler wie "NOT IMPLEMENTED: Book list", abhängig von dem Link, den Sie anklicken. Diese Literalzeichenfolgen (die durch richtige Daten ersetzt werden) wurden in den verschiedenen Controllern angegeben, die sich in Ihrer "controllers" Datei befinden.

## Nächste Schritte

- Kehren Sie zurück zu [Express Tutorial Teil 5: Anzeige von Bibliotheksdaten](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie mit dem nächsten Teilartikel von Teil 5 fort: [Buchliste-Seite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_list_page).
