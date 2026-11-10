---
title: Startseite
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Home_page
l10n:
  sourceCommit: d775e1249487f1a7ab9a8a031c70ca71bc892d63
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_list_page", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data")}}

Die erste Seite, die wir erstellen, ist die Startseite der Website. Sie ist sowohl über die Wurzel der Website (`/`) als auch über die des Katalogs (`catalog/`) erreichbar. Sie zeigt einen statischen Text, der die Website beschreibt, sowie dynamisch berechnete Anzahlen verschiedener Datensatztypen in der Datenbank.

Wir haben bereits eine Route für die Startseite erstellt. Um die Seite fertigzustellen, müssen wir unsere Controller-Funktion so aktualisieren, dass sie die Anzahlen der Datensätze aus der Datenbank abruft. Außerdem müssen wir eine Ansicht (Vorlage) erstellen, mit der wir die Seite rendern können.

> [!NOTE]
> Wir verwenden Mongoose, um Informationen aus der Datenbank abzurufen.
> Bevor Sie fortfahren, können Sie im Abschnitt [Einführung in Mongoose](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#mongoose_primer) den Teil zum [Suchen nach Datensätzen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#searching_for_records) erneut lesen.

## Route

Wir haben die Routen für unsere Startseite in einem [vorherigen Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes) erstellt.
Zur Erinnerung: Alle Routenfunktionen sind in **routes/catalog.js** definiert:

```js
// GET catalog home page.
router.get("/", bookController.index); // This actually maps to /catalog/ because we import the route with a /catalog prefix
```

Die als Parameter übergebene Indexfunktion des Book-Controllers (`bookController.index`) hat eine Platzhalterimplementierung in **controllers/bookController.js**:

```js
export const index = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Site Home Page");
};
```

Diese Controller-Funktion erweitern wir, um Informationen aus unseren Modellen abzurufen und sie anschließend mithilfe einer Vorlage (Ansicht) zu rendern.

## Controller

Die Indexfunktion des Controllers muss ermitteln, wie viele Datensätze der Typen `Book`, `BookInstance` (alle), `BookInstance` (verfügbar), `Author` und `Genre` in der Datenbank vorhanden sind. Anschließend muss sie diese Daten mit einer Vorlage als HTML-Seite rendern und in einer HTTP-Antwort zurückgeben.

Öffnen Sie **controllers/bookController.js**. Nahe dem Anfang der Datei sollten Sie die exportierte Funktion `index()` sehen.

```js
import Book from "../models/book.js";

export const index = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Site Home Page");
};
```

Ersetzen Sie den gesamten obigen Code durch das folgende Codefragment.
Zunächst werden darin alle Modelle importiert.
Das ist nötig, weil wir mit ihnen die Anzahl der Dokumente ermitteln.

```js
import Book from "../models/book.js";
import Author from "../models/author.js";
import Genre from "../models/genre.js";
import BookInstance from "../models/bookinstance.js";

export const index = async (req, res, next) => {
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

Mit der Methode [`countDocuments()`](<https://mongoosejs.com/docs/api/model.html#Model.countDocuments()>) ermitteln wir die Anzahl der Instanzen jedes Modells.
Die Methode wird für ein Modell aufgerufen, kann optional Bedingungen zum Abgleich erhalten und gibt ein `Query`-Objekt zurück.
Die Abfrage kann durch einen Aufruf von [`exec()`](https://mongoosejs.com/docs/api/query.html#Query.prototype.exec) ausgeführt werden. Dieser gibt ein `Promise` zurück, das entweder mit einem Ergebnis erfüllt oder bei einem Datenbankfehler zurückgewiesen wird.

Da die Abfragen nach der Anzahl der Dokumente voneinander unabhängig sind, führen wir sie mit [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) parallel aus.
Die Methode gibt ein neues Promise zurück, auf dessen Abschluss wir mit [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) warten (die Ausführung wird bei `await` innerhalb _dieser Funktion_ angehalten).
Sobald alle Abfragen abgeschlossen sind, wird das von `all()` zurückgegebene Promise erfüllt. Die Ausführung der Route-Handler-Funktion wird fortgesetzt, und das Array enthält die Ergebnisse der Datenbankabfragen.

Anschließend rufen wir [`res.render()`](https://expressjs.com/en/5x/api/response/#resrender) auf. Dabei geben wir eine Ansicht (Vorlage) namens „**index**“ sowie ein Objekt an, das die Ergebnisse der Datenbankabfragen der Ansichtsvorlage zuordnet.
Die Daten werden als Schlüssel-Wert-Paare übergeben und können in der Vorlage über den jeweiligen Schlüssel abgerufen werden.

> [!NOTE]
> Wenn Sie in einer Pug-Vorlage einen Schlüssel oder eine Variable verwenden, die nicht übergeben wurde, wird an dieser Stelle eine leere Zeichenfolge ausgegeben. In Ausdrücken wird der Wert als `false` ausgewertet.
> Bei anderen Vorlagensprachen müssen Sie möglicherweise für alle verwendeten Objekte Werte übergeben.

Der Code ist sehr einfach, weil wir davon ausgehen können, dass die Datenbankabfragen erfolgreich sind.
Wenn eine der Datenbankoperationen fehlschlägt, führt die ausgelöste Ausnahme dazu, dass das Promise zurückgewiesen wird. Express übergibt den Fehler dann an den nächsten Middleware-Handler `next` in der Kette.

## Ansicht

Öffnen Sie **views/index.pug** und ersetzen Sie den Inhalt durch den folgenden Text.

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

Die Ansicht ist einfach aufgebaut. Wir erweitern die Basisvorlage **layout.pug** und überschreiben den `block` namens „**content**“. Die erste `h1`-Überschrift enthält den maskierten Text der Variablen `title`, die an die Funktion `render()` übergeben wurde. Beachten Sie die Schreibweise `h1=`, durch die der nachfolgende Text als JavaScript-Ausdruck behandelt wird. Danach folgt ein Absatz, der die LocalLibrary vorstellt.

Unter der Überschrift _Dynamic content_ listen wir die Anzahl der Exemplare für jedes Modell auf.
Die Vorlagenwerte für diese Daten entsprechen den Schlüsseln, die beim Aufruf von `render()` in der Route-Handler-Funktion angegeben wurden.

> [!NOTE]
> Wir haben die Werte für die Anzahlen nicht maskiert (d.h. wir haben die Syntax `!{}` verwendet), weil diese Werte berechnet werden. Wenn die Informationen von Endbenutzern stammen würden, müssten wir die Variablen für die Anzeige maskieren.

## Wie sieht das Ergebnis aus?

Jetzt sollten wir alles erstellt haben, was für die Anzeige der Indexseite nötig ist. Starten Sie die Anwendung und öffnen Sie `http://localhost:3000/` in Ihrem Browser. Wenn alles richtig eingerichtet ist, sollte Ihre Website ungefähr wie im folgenden Screenshot aussehen.

![Startseite der Express-LocalLibrary-Website](locallibary_express_home.png)

> [!NOTE]
> Sie können die Links in der Seitenleiste noch nicht _verwenden_, da die URLs, Ansichten und Vorlagen für diese Seiten noch nicht definiert wurden. Wenn Sie darauf klicken, erhalten Sie je nach Link beispielsweise eine Fehlermeldung wie „NOT IMPLEMENTED: Book list“. Diese Zeichenfolgenliterale, die später durch die richtigen Daten ersetzt werden, wurden in den verschiedenen Controllern im Verzeichnis „controllers“ festgelegt.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_list_page", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data")}}
