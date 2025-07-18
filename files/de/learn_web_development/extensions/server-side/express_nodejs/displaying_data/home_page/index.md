---
title: Startseite
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Home_page
l10n:
  sourceCommit: 8443cb34d9944d8eb8e2c5add598bec26ed6d21f
---

Die erste Seite, die wir erstellen werden, ist die Startseite der Website, die sowohl vom Seitenwurzelverzeichnis (`/`) als auch vom Katalogwurzelverzeichnis (`catalog/`) aus zugänglich ist. Diese wird einige statische Texte anzeigen, die die Seite beschreiben, zusammen mit dynamisch berechneten "Zählerständen" verschiedener Aufzeichnungstypen in der Datenbank.

Wir haben bereits eine Route für die Startseite erstellt. Um die Seite zu vervollständigen, müssen wir unsere Controller-Funktion aktualisieren, um "Zählerstände" von Aufzeichnungen aus der Datenbank abzurufen, und eine Ansicht (Template) erstellen, die wir zum Rendern der Seite verwenden können.

> [!NOTE]
> Wir werden Mongoose verwenden, um Informationen aus der Datenbank zu erhalten.
> Bevor Sie fortfahren, möchten Sie möglicherweise den Abschnitt [Mongoose-Grundlagen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#mongoose_primer) über [Suche nach Aufzeichnungen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#searching_for_records) erneut lesen.

## Route

Wir haben unsere Indexseiten-Routen in einem [früheren Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes) erstellt. Zur Erinnerung: Alle Routenfunktionen sind in **/routes/catalog.js** definiert:

```js
// GET catalog home page.
router.get("/", book_controller.index); // This actually maps to /catalog/ because we import the route with a /catalog prefix
```

Die Indexfunktion des Buchcontrollers, die als Parameter übergeben wird (`book_controller.index`), hat eine "Platzhalter"-Implementierung, die in **/controllers/bookController.js** definiert ist:

```js
exports.index = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Site Home Page");
};
```

Diese Controller-Funktion erweitern wir, um Informationen von unseren Modellen zu erhalten und dann mit einem Template (Ansicht) zu rendern.

## Controller

Die Index-Controller-Funktion muss Informationen darüber abrufen, wie viele `Book`, `BookInstance` (alle), `BookInstance` (verfügbar), `Author` und `Genre` Aufzeichnungen wir in der Datenbank haben, diese Daten in einem Template rendern, um eine HTML-Seite zu erstellen, und sie dann in einer HTTP-Antwort zurückgeben.

Öffnen Sie **/controllers/bookController.js**. Nahe der Spitze der Datei sollten Sie die exportierte `index()`-Funktion sehen.

```js
const Book = require("../models/book");

exports.index = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Site Home Page");
};
```

Ersetzen Sie den gesamten Code oben durch den folgenden Codeausschnitt. Das erste, was dies tut, ist das Importieren (`require()`) aller Modelle. Wir müssen dies tun, da wir sie verwenden werden, um unsere Dokumentenzählungen zu erhalten.

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

Wir verwenden die Methode [`countDocuments()`](<https://mongoosejs.com/docs/api/model.html#Model.countDocuments()>), um die Anzahl der Instanzen jedes Modells zu ermitteln. Diese Methode wird auf einem Modell aufgerufen, mit einem optionalen Satz von Bedingungen, gegen die abgeglichen werden soll, und gibt ein `Query`-Objekt zurück. Die Abfrage kann ausgeführt werden, indem [`exec()`](https://mongoosejs.com/docs/api/query.html#Query.prototype.exec) aufgerufen wird, das ein `Promise` zurückgibt, das entweder mit einem Ergebnis erfüllt oder abgelehnt wird, wenn ein Datenbankfehler vorliegt.

Da die Abfragen für Dokumentenzählungen unabhängig voneinander sind, verwenden wir [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um sie parallel auszuführen. Die Methode gibt ein neues Versprechen zurück, auf dessen Abschluss wir [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) warten (die Ausführung pausiert innerhalb _dieser Funktion_ bei `await`). Wenn alle Abfragen abgeschlossen sind, wird das von `all()` zurückgegebene Versprechen erfüllt, die Ausführung der Routenhandlerfunktion wird fortgesetzt und das Array mit den Ergebnissen der Datenbankabfragen gefüllt.

Dann rufen wir [`res.render()`](https://expressjs.com/en/5x/api.html#res.render) auf, wobei eine Ansicht (Template) namens '**index**' und Objekte spezifiziert werden, die die Ergebnisse der Datenbankabfragen auf das Template abbilden. Die Daten werden als Schlüssel-Wert-Paare geliefert und können im Template über den Schlüssel angesprochen werden.

> [!NOTE]
> Wenn Sie einen Schlüssel/Variable in einem Pug-Template verwenden, der nicht übergeben wurde, wird er als leerer String gerendert und in Ausdrücken als `false` ausgewertet. Andere Template-Sprachen benötigen möglicherweise, dass Sie Werte für alle Objekte übergeben, die Sie verwenden.

Beachten Sie, dass der Code sehr einfach ist, weil wir annehmen können, dass die Datenbankabfragen erfolgreich sind. Wenn eine der Datenbankoperationen fehlschlägt, wird die ausgelöste Ausnahme dazu führen, dass das Promise ablehnt und Express den Fehler an den `next`-Middleware-Handler in der Kette weiterleitet.

## Ansicht

Öffnen Sie **/views/index.pug** und ersetzen Sie deren Inhalt durch den unten stehenden Text.

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

Die Ansicht ist einfach. Wir erweitern das **layout.pug**-Basistemplate, indem wir den `block` namens '**content**' überschreiben. Die erste `h1`-Überschrift wird der escapte Text für die `title`-Variable sein, die in der `render()`-Funktion übergeben wurde—beachten Sie die Verwendung von `h1=`, damit der nachfolgende Text als JavaScript-Ausdruck behandelt wird. Dann fügen wir einen Absatz ein, der die LocalLibrary vorstellt.

Unter der Überschrift _Dynamischer Inhalt_ listen wir die Anzahl der Kopien jedes Modells auf. Beachten Sie, dass die Templatewerte für die Daten die beim Aufruf von `render()` im Routenhandler spezifizierten Schlüssel sind.

> [!NOTE]
> Wir haben die Zählwerte nicht escapet (d.h. wir haben die Syntax `!{}` verwendet), weil die Zählwerte berechnet sind. Wenn die Informationen von Endbenutzern bereitgestellt würden, würden wir die Variable für die Anzeige escapen.

## Wie sieht es aus?

An diesem Punkt sollten wir alles erstellt haben, was benötigt wird, um die Indexseite anzuzeigen. Starten Sie die Anwendung und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wenn alles richtig eingerichtet ist, sollte Ihre Seite in etwa so aussehen wie der folgende Screenshot.

![Startseite - Express Local Library Seite](locallibary_express_home.png)

> [!NOTE]
> Sie werden die Seitenleisten-Links noch nicht _verwenden_ können, da die URLs, Ansichten und Templates für diese Seiten noch nicht definiert sind. Wenn Sie es versuchen, erhalten Sie Fehler wie "NICHT IMPLEMENTIERT: Buchliste", je nachdem, auf welchen Link Sie klicken. Diese String-Literale (die durch echte Daten ersetzt werden) wurden in den verschiedenen Controllern spezifiziert, die sich in Ihrer "controllers"-Datei befinden.

## Nächste Schritte

- Kehren Sie zum [Express Tutorial Teil 5: Anzeigen von Bibliotheksdaten](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data) zurück.
- Fahren Sie mit dem nächsten Unterartikel von Teil 5 fort: [Buchlisten-Seite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_list_page).
