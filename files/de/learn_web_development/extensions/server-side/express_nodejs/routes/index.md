---
title: "Express-Tutorial Teil 4: Routen und Controller"
short-title: "4: Routen und Controller"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/routes
l10n:
  sourceCommit: 977386fc14a76dec21374aef1e0571900b28dab4
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

In diesem Tutorial richten wir Routen (Code zur Verarbeitung von URLs) mit Platzhalter-Handler-Funktionen für alle Ressourcen-Endpunkte ein, die wir später für die Website [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) benötigen. Am Ende haben wir eine modulare Struktur für unseren Code zur Routenverarbeitung, die wir in den folgenden Artikeln um echte Handler-Funktionen erweitern können. Außerdem werden Sie gut verstehen, wie Sie mit Express modulare Routen erstellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction">Einführung in Express/Node</a>.
        Bearbeiten Sie die vorherigen Tutorial-Teile (einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose">Express-Tutorial Teil 3: Eine Datenbank verwenden (mit Mongoose)</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie einfache Routen erstellt werden.
        Alle benötigten URL-Endpunkte einrichten.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Im [vorherigen Tutorial-Artikel](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose) haben wir _Mongoose_-Modelle für die Interaktion mit der Datenbank definiert und mit einem eigenständigen Skript einige anfängliche Bibliothekseinträge erstellt. Nun können wir den Code schreiben, um diese Informationen den Benutzern anzuzeigen. Zunächst müssen wir festlegen, welche Informationen auf unseren Seiten angezeigt werden sollen, und passende URLs definieren, unter denen diese Ressourcen zurückgegeben werden. Anschließend erstellen wir die Routen (URL-Handler) und Views (Templates), mit denen die Seiten angezeigt werden.

Das folgende Diagramm zeigt zur Erinnerung den grundlegenden Datenfluss und die Komponenten, die bei der Verarbeitung einer HTTP-Anfrage und -Antwort implementiert werden müssen. Neben Views und Routen zeigt es „Controller“ – Funktionen, die den Code für die Weiterleitung von Anfragen vom Code für deren eigentliche Verarbeitung trennen.

Da wir die Modelle bereits erstellt haben, müssen wir hauptsächlich Folgendes erstellen:

- „Routen“, die unterstützte Anfragen (und alle in den Anfrage-URLs codierten Informationen) an die passenden Controller-Funktionen weiterleiten.
- Controller-Funktionen, die die angeforderten Daten aus den Modellen abrufen, eine HTML-Seite zur Anzeige der Daten erstellen und sie an die Benutzer zurückgeben, damit diese sie im Browser ansehen können.
- Views (Templates), mit denen die Controller die Daten rendern.

![Diagramm des grundlegenden Datenflusses eines MVC-Express-Servers: „Routes“ empfangen die an den Express-Server gesendeten HTTP-Anfragen und leiten sie an die passende „Controller“-Funktion weiter. Der Controller liest und schreibt Daten über die Modelle. Die Modelle sind mit der Datenbank verbunden und ermöglichen dem Server den Datenzugriff. Controller verwenden „Views“, auch Templates genannt, um die Daten zu rendern. Der Controller sendet das HTML als HTTP-Antwort an den Client zurück.](mvc_express.png)

Letztlich werden wir möglicherweise Seiten benötigen, die Listen und Detailinformationen zu Büchern, Genres, Autoren und Buchexemplaren anzeigen, sowie Seiten zum Erstellen, Aktualisieren und Löschen von Einträgen. Das ist zu viel für einen einzigen Artikel. Deshalb konzentriert sich dieser Artikel hauptsächlich darauf, Routen und Controller einzurichten, die Platzhalterinhalte zurückgeben. In den folgenden Artikeln erweitern wir die Controller-Methoden, damit sie mit Modelldaten arbeiten.

Der erste Abschnitt bietet eine kurze Einführung in die Verwendung der Express-Middleware [Router](https://expressjs.com/en/5x/api/#router). Dieses Wissen nutzen wir anschließend, um die Routen für LocalLibrary einzurichten.

## Einführung in Routen

Eine Route ist ein Abschnitt Express-Code, der ein [HTTP-Verb](/de/docs/Web/HTTP/Reference/Methods) (`GET`, `POST`, `PUT`, `DELETE` usw.), einen URL-Pfad beziehungsweise ein URL-Muster und eine Funktion zur Verarbeitung dieses Musters miteinander verknüpft.

Es gibt mehrere Möglichkeiten, Routen zu erstellen. In diesem Tutorial verwenden wir die Middleware [`express.Router`](https://expressjs.com/en/guide/routing/#express-router). Damit können wir die Routen-Handler für einen bestimmten Bereich einer Website zusammenfassen und über ein gemeinsames Routenpräfix zugänglich machen. Alle bibliotheksbezogenen Routen legen wir in einem „catalog“-Modul ab. Falls wir später Routen für Benutzerkonten oder andere Funktionen hinzufügen, können wir diese separat gruppieren.

> [!NOTE]
> Express-Anwendungsrouten haben wir bereits kurz unter [Einführung in Express > Routen-Handler erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#creating_route_handlers) behandelt. Abgesehen von der besseren Unterstützung für die Modularisierung (wie im folgenden Unterabschnitt beschrieben) ist die Verwendung von _Router_ der direkten Definition von Routen auf dem _Express-Anwendungsobjekt_ sehr ähnlich.

Der Rest dieses Abschnitts gibt einen Überblick darüber, wie Sie mit `Router` Routen definieren.

### Separate Routenmodule definieren und verwenden

Der folgende Code zeigt anhand eines konkreten Beispiels, wie wir ein Routenmodul erstellen und in einer _Express_-Anwendung verwenden.

Zunächst erstellen wir in einem Modul namens **wiki.js** Routen für ein Wiki. Der Code importiert zuerst das Express-Anwendungsobjekt, erstellt damit ein `Router`-Objekt und fügt diesem anschließend mit der Methode `get()` einige Routen hinzu. Zum Schluss exportiert das Modul das `Router`-Objekt.

```js
// wiki.js - Wiki route module.

const express = require("express");

const router = express.Router();

// Home page route.
router.get("/", (req, res) => {
  res.send("Wiki home page");
});

// About page route.
router.get("/about", (req, res) => {
  res.send("About this wiki");
});

module.exports = router;
```

> [!NOTE]
> Oben definieren wir die Callback-Funktionen der Routen-Handler direkt in den Router-Funktionen. In LocalLibrary werden wir diese Callback-Funktionen in einem separaten Controller-Modul definieren.

Um das Router-Modul in unserer Hauptanwendungsdatei zu verwenden, laden wir zunächst das Routenmodul (**wiki.js**) mit `require()`. Anschließend rufen wir `use()` auf der _Express_-Anwendung auf, um den Router mit dem URL-Pfad „wiki“ zur Middleware-Verarbeitungskette hinzuzufügen.

```js
const wiki = require("./wiki.js");

// …
app.use("/wiki", wiki);
```

Die beiden in unserem Wiki-Routenmodul definierten Routen sind dann unter `/wiki/` und `/wiki/about/` erreichbar.

### Routenfunktionen

Unser Modul definiert oben zwei typische Routenfunktionen. Die unten erneut gezeigte „about“-Route wird mit der Methode `Router.get()` definiert, die nur auf HTTP-GET-Anfragen reagiert. Das erste Argument dieser Methode ist der URL-Pfad. Das zweite ist eine Callback-Funktion, die aufgerufen wird, wenn eine HTTP-GET-Anfrage für diesen Pfad eingeht.

```js
router.get("/about", (req, res) => {
  res.send("About this wiki");
});
```

Die Callback-Funktion erhält drei Argumente (üblicherweise wie gezeigt benannt: `req`, `res`, `next`). Sie enthalten das HTTP-Request-Objekt, die HTTP-Antwort und die _next_-Funktion in der Middleware-Kette.

> [!NOTE]
> Router-Funktionen sind [Express-Middleware](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#using_middleware). Das bedeutet, dass sie die Anfrage entweder abschließen (beantworten) oder die Funktion `next` in der Kette aufrufen müssen. Im obigen Fall schließen wir die Anfrage mit `send()` ab. Das Argument `next` wird daher nicht verwendet (und wir verzichten darauf, es anzugeben).
>
> Die obige Router-Funktion erhält eine einzige Callback-Funktion. Sie können jedoch beliebig viele Callback-Argumente oder ein Array von Callback-Funktionen angeben. Jede Funktion ist Teil der Middleware-Kette und wird in der Reihenfolge aufgerufen, in der sie der Kette hinzugefügt wurde (sofern nicht eine vorhergehende Funktion die Anfrage abschließt).

Die Callback-Funktion ruft hier [`send()`](https://expressjs.com/en/5x/api/#res.send) auf dem Antwortobjekt auf, um bei einer GET-Anfrage für den Pfad (`/about`) die Zeichenfolge „About this wiki“ zurückzugeben. Es gibt [mehrere weitere Antwortmethoden](https://expressjs.com/en/guide/routing/#response-methods), mit denen sich der Anfrage-Antwort-Zyklus abschließen lässt. Beispielsweise können Sie mit [`res.json()`](https://expressjs.com/en/5x/api/#res.json) eine JSON-Antwort oder mit [`res.sendFile()`](https://expressjs.com/en/5x/api/#res.sendFile) eine Datei senden. Beim Aufbau unserer Bibliothek werden wir am häufigsten [`render()`](https://expressjs.com/en/5x/api/#res.render) verwenden. Diese Methode erstellt mithilfe von Templates und Daten HTML-Seiten und gibt sie zurück – darauf gehen wir in einem späteren Artikel ausführlicher ein.

### HTTP-Verben

Die obigen Beispielrouten verwenden die Methode `Router.get()`, um auf HTTP-`GET`-Anfragen für einen bestimmten Pfad zu reagieren.

`Router` bietet auch Routenmethoden für alle anderen [HTTP-Verben](/de/docs/Web/HTTP/Reference/Methods), die größtenteils genauso verwendet werden: `post()`, `put()`, `delete()`, `options()`, `trace()`, `copy()`, `lock()`, `mkcol()`, `move()`, `purge()`, `propfind()`, `proppatch()`, `unlock()`, `report()`, `mkactivity()`, `checkout()`, `merge()`, `m-search()`, `notify()`, `subscribe()`, `unsubscribe()`, `patch()`, `search()` und `connect()`.

Der folgende Code verhält sich beispielsweise wie die vorherige Route `/about`, reagiert aber nur auf HTTP-POST-Anfragen.

```js
router.post("/about", (req, res) => {
  res.send("About this wiki");
});
```

Websites sollten idealerweise die Routenmethode (und HTTP-Methode) verwenden, die am besten zur jeweiligen Operation passt.
Eine clientseitig gerenderte Anwendung sollte beispielsweise `Router.get()` zum Lesen aus der Datenbank, `Router.post()` zum Erstellen neuer Einträge, `Router.put()` oder `Router.patch()` zum Aktualisieren von Einträgen und `Router.delete()` zum Löschen von Daten verwenden.

Beachten Sie jedoch, dass serverseitig gerenderte Anwendungen, wie die in diesem Tutorial entwickelte, üblicherweise `Router.post()` für alle Routen verwenden, die Daten ändern.
Der Grund dafür ist, dass HTML-`<form>`-Elemente standardmäßig nur [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)- und [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfragen senden können.

Für diese Einschränkung gibt es verschiedene Umgehungsmöglichkeiten. Sie können beispielsweise das „gewünschte“ HTTP-Verb in einer `POST`-Anfrage codieren und die Express-Middleware [method-override](https://www.npmjs.com/package/method-override) verwenden, um die Anfrage vor der Übergabe an den Router auf das passende HTTP-Verb umzustellen.
Bei einfachen Anwendungen ist es meist übertrieben, Code nur für die Verwendung der passenden HTTP-Verben umzuschreiben.
Es kann sich jedoch lohnen, etwa um die Serverprotokollierung zu verbessern oder wenn der Server sowohl serverseitig als auch clientseitig gerenderte Inhalte über denselben Endpunkt bereitstellen muss.

### Routenpfade

Routenpfade definieren die Endpunkte, an die Anfragen gesendet werden können. Die bisherigen Beispiele waren einfache Zeichenfolgen, die genau wie angegeben verwendet werden: „/“, „/about“, „/book“, „/any-random.path“.

Routenpfade können auch Zeichenfolgenmuster sein. Diese verwenden eine Form der Syntax regulärer Ausdrücke, um _Muster_ für übereinstimmende Endpunkte zu definieren.
Die meisten unserer LocalLibrary-Routen werden Zeichenfolgen und keine regulären Ausdrücke verwenden.
Außerdem werden wir Routenparameter einsetzen, die im nächsten Abschnitt beschrieben werden.

### Routenparameter

Routenparameter sind _benannte URL-Segmente_, mit denen Werte an bestimmten Positionen einer URL erfasst werden. Ein benanntes Segment beginnt mit einem Doppelpunkt, gefolgt vom Namen (z. B. `/:your_parameter_name/`). Die erfassten Werte werden im Objekt `req.params` gespeichert, wobei die Parameternamen als Schlüssel dienen (z. B. `req.params.your_parameter_name`).

Betrachten wir beispielsweise eine URL, die Informationen über Benutzer und Bücher enthält: `http://localhost:3000/users/34/books/8989`. Mit den Pfadparametern `userId` und `bookId` können wir diese Informationen wie folgt extrahieren:

```js
app.get("/users/:userId/books/:bookId", (req, res) => {
  // Access userId via: req.params.userId
  // Access bookId via: req.params.bookId
  res.send(req.params);
});
```

> [!NOTE]
> Die URL _/book/create_ stimmt mit einer Route wie `/book/:bookId` überein (denn `:bookId` ist ein Platzhalter für _jede_ Zeichenfolge und passt somit auch auf `create`). Die erste Route, die mit einer eingehenden URL übereinstimmt, wird verwendet. Wenn Sie URLs der Form `/book/create` gesondert verarbeiten möchten, muss deren Routen-Handler daher vor der Route `/book/:bookId` definiert werden.

Routenparameternamen (wie oben `bookId`) können beliebige gültige JavaScript-Bezeichner sein, die mit einem Buchstaben, `_` oder `$` beginnen. Nach dem ersten Zeichen dürfen Ziffern folgen, jedoch keine Bindestriche oder Leerzeichen.
Sie können auch Namen verwenden, die keine gültigen JavaScript-Bezeichner sind, einschließlich solcher mit Leerzeichen, Bindestrichen, Emoticons oder anderen Zeichen. Diese müssen Sie jedoch als Zeichenfolge in Anführungszeichen definieren und über die Klammernotation darauf zugreifen.
Zum Beispiel:

```js
app.get('/users/:"user id"/books/:"book-id"', (req, res) => {
  // Access quoted param using bracket notation
  const user = req.params["user id"];
  const book = req.params["book-id"];
  res.send({ user, book });
});
```

### Wildcards

Wildcard-Parameter erfassen ein oder mehrere Zeichen über mehrere Segmente hinweg und geben jedes Segment als Wert in einem Array zurück.
Sie werden wie reguläre Parameter definiert, beginnen jedoch mit einem Sternchen.

Betrachten wir beispielsweise die URL `http://localhost:3000/users/34/books/8989`. Mit der Wildcard `example` können wir alle Informationen nach `users/` extrahieren:

```js
app.get("/users/*example", (req, res) => {
  // req.params would contain { "example": ["34", "books", "8989"]}
  res.send(req.params);
});
```

### Optionale Teile

Mit geschweiften Klammern können Teile des Pfads als optional definiert werden.
Im folgenden Beispiel erfassen wir einen Dateinamen mit beliebiger Erweiterung (oder ohne Erweiterung).

```js
app.get("/file/:filename{.:ext}", (req, res) => {
  // Given URL: http://localhost:3000/file/somefile.md`
  // req.params would contain { "filename": "somefile", "ext": "md"}
  res.send(req.params);
});
```

### Reservierte Zeichen

Die folgenden Zeichen sind reserviert: `(()[]?+!)`.
Wenn Sie sie verwenden möchten, müssen Sie ihnen einen Backslash (`\`) voranstellen.

Das Pipe-Zeichen (`|`) können Sie in einem regulären Ausdruck ebenfalls nicht verwenden.

Das ist alles, was Sie für den Einstieg in Routen benötigen.
Weitere Informationen finden Sie bei Bedarf in der Express-Dokumentation: [Grundlagen des Routings](https://expressjs.com/en/starter/basic-routing/) und [Routing-Leitfaden](https://expressjs.com/en/guide/routing/). Die folgenden Abschnitte zeigen, wie wir die Routen und Controller für LocalLibrary einrichten.

### Fehler und Ausnahmen in Routenfunktionen behandeln

Die zuvor gezeigten Routenfunktionen haben alle die Argumente `req` und `res`, die für die Anfrage beziehungsweise die Antwort stehen.
Routenfunktionen erhalten außerdem ein drittes Argument, `next`. Es enthält eine Callback-Funktion, mit der Fehler oder Ausnahmen an die Express-Middleware-Kette weitergegeben werden können. Von dort gelangen sie schließlich zu Ihrem globalen Code für die Fehlerbehandlung.

Ab Express 5 wird `next` automatisch mit dem Ablehnungswert aufgerufen, wenn ein Routen-Handler eine [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt, die später abgelehnt wird. Bei der Verwendung von Promises ist daher kein Code zur Fehlerbehandlung in den Routenfunktionen erforderlich.
Das ermöglicht sehr kompakten Code bei der Arbeit mit asynchronen, Promise-basierten APIs, insbesondere mit [`async` und `await`](/de/docs/Learn_web_development/Extensions/Async_JS/Promises#async_and_await).

Der folgende Code verwendet beispielsweise die Methode `find()`, um eine Datenbank abzufragen, und rendert anschließend das Ergebnis.

```js
exports.get("/about", async (req, res, next) => {
  const successfulResult = await About.find({}).exec();
  res.render("about_view", { title: "About", list: successfulResult });
});
```

Der folgende Code zeigt dasselbe Beispiel mit einer Promise-Kette.
Beachten Sie, dass Sie den Fehler bei Bedarf mit `catch()` abfangen und eine eigene Behandlung implementieren können.

```js
exports.get(
  "/about",
  // Removed 'async'
  (req, res, next) =>
    About.find({})
      .exec()
      .then((successfulResult) => {
        res.render("about_view", { title: "About", list: successfulResult });
      })
      .catch((err) => {
        next(err);
      }),
);
```

> [!NOTE]
> Die meisten modernen APIs sind asynchron und Promise-basiert. Deshalb ist die Fehlerbehandlung häufig so unkompliziert.
> Für dieses Tutorial ist das tatsächlich alles, was Sie über Fehlerbehandlung _wissen müssen_.

Express 5 fängt Ausnahmen, die in synchronem Code ausgelöst werden, automatisch ab und leitet sie weiter:

```js
app.get("/", (req, res) => {
  // Express will catch this
  throw new Error("SynchronousException");
});
```

Ausnahmen in asynchronem Code, der von Routen-Handlern oder Middleware aufgerufen wird, müssen Sie jedoch mit [`catch()`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) abfangen. Sie werden vom Standardmechanismus nicht erfasst:

```js
app.get("/", (req, res, next) => {
  setTimeout(() => {
    try {
      // You must catch and propagate this error yourself
      throw new Error("AsynchronousException");
    } catch (err) {
      next(err);
    }
  }, 100);
});
```

Wenn Sie schließlich ältere asynchrone Methoden verwenden, die einen Fehler oder ein Ergebnis an eine Callback-Funktion übergeben, müssen Sie den Fehler selbst weiterleiten.
Das folgende Beispiel zeigt, wie das geht.

```js
router.get("/about", (req, res, next) => {
  About.find({}).exec((err, queryResults) => {
    if (err) {
      // Propagate the error
      return next(err);
    }
    // Successful, so render
    res.render("about_view", { title: "About", list: queryResults });
  });
});
```

Weitere Informationen finden Sie unter [Fehlerbehandlung](https://expressjs.com/en/guide/error-handling/).

## Für LocalLibrary benötigte Routen

Die URLs, die wir letztlich für unsere Seiten benötigen, sind unten aufgeführt. Dabei wird _object_ durch den Namen eines unserer Modelle (book, bookinstance, genre, author) ersetzt, _objects_ steht für dessen Pluralform und _id_ für das eindeutige Feld (`_id`), das jede Mongoose-Modellinstanz standardmäßig erhält.

- `catalog/` — Die Start-/Indexseite.
- `catalog/<objects>/` — Die Liste aller Bücher, Buchexemplare, Genres oder Autoren (z. B. `/catalog/books/`, `/catalog/genres/` usw.).
- `catalog/<object>/<id>` — Die Detailseite eines bestimmten Buchs, Buchexemplars, Genres oder Autors mit dem angegebenen Wert im Feld `_id` (z. B. `/catalog/book/584493c1f4887f06c0e67d37`).
- `catalog/<object>/create` — Das Formular zum Erstellen eines neuen Buchs, Buchexemplars, Genres oder Autors (z. B. `/catalog/book/create`).
- `catalog/<object>/<id>/update` — Das Formular zum Aktualisieren eines bestimmten Buchs, Buchexemplars, Genres oder Autors mit dem angegebenen Wert im Feld `_id` (z. B. `/catalog/book/584493c1f4887f06c0e67d37/update`).
- `catalog/<object>/<id>/delete` — Das Formular zum Löschen eines bestimmten Buchs, Buchexemplars, Genres oder Autors mit dem angegebenen Wert im Feld `_id` (z. B. `/catalog/book/584493c1f4887f06c0e67d37/delete`).

Die Startseite und die Listenseiten codieren keine zusätzlichen Informationen. Die zurückgegebenen Ergebnisse hängen zwar vom Modelltyp und vom Inhalt der Datenbank ab, die Abfragen zum Abrufen der Informationen bleiben jedoch immer gleich (ebenso wird der Code zum Erstellen von Objekten immer ähnlich sein).

Die anderen URLs dienen dagegen dazu, eine bestimmte Dokument- beziehungsweise Modellinstanz anzusprechen: Sie codieren die Identität des Elements in der URL (oben als `<id>` dargestellt). Wir werden Pfadparameter verwenden, um diese Information zu extrahieren und an den Routen-Handler zu übergeben. In einem späteren Artikel nutzen wir sie, um dynamisch zu bestimmen, welche Informationen aus der Datenbank abgerufen werden sollen. Indem wir die Information in der URL codieren, benötigen wir nur eine Route für jede Ressource eines bestimmten Typs (beispielsweise eine Route, um jedes einzelne Buch anzuzeigen).

> [!NOTE]
> Express erlaubt Ihnen, URLs nach Belieben aufzubauen: Sie können Informationen wie oben gezeigt im URL-Pfad codieren oder URL-`GET`-Parameter verwenden (z. B. `/book/?id=6`). Unabhängig vom gewählten Ansatz sollten die URLs übersichtlich, logisch und lesbar sein ([beachten Sie dazu die Empfehlungen des W3C](https://www.w3.org/Provider/Style/URI)).

Als Nächstes erstellen wir für alle oben genannten URLs die Callback-Funktionen der Routen-Handler und den Routencode.

## Callback-Funktionen der Routen-Handler erstellen

Bevor wir unsere Routen definieren, erstellen wir zunächst alle Platzhalter-Callback-Funktionen, die von ihnen aufgerufen werden. Die Callback-Funktionen speichern wir in separaten „Controller“-Modulen für `Book`, `BookInstance`, `Genre` und `Author` (Sie können eine beliebige Datei- und Modulstruktur verwenden, aber diese Aufteilung erscheint für das Projekt angemessen).

Erstellen Sie zunächst im Stammverzeichnis des Projekts einen Ordner für die Controller (**/controllers**) und darin separate Controller-Dateien beziehungsweise -Module für jedes Modell:

```plain
/express-locallibrary-tutorial  # the project root
  /controllers
    authorController.js
    bookController.js
    bookinstanceController.js
    genreController.js
```

### Author-Controller

Öffnen Sie die Datei **/controllers/authorController.js** und geben Sie den folgenden Code ein:

```js
const Author = require("../models/author");

// Display list of all Authors.
exports.author_list = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author list");
};

// Display detail page for a specific Author.
exports.author_detail = async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Author detail: ${req.params.id}`);
};

// Display Author create form on GET.
exports.author_create_get = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author create GET");
};

// Handle Author create on POST.
exports.author_create_post = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author create POST");
};

// Display Author delete form on GET.
exports.author_delete_get = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author delete GET");
};

// Handle Author delete on POST.
exports.author_delete_post = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author delete POST");
};

// Display Author update form on GET.
exports.author_update_get = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author update GET");
};

// Handle Author update on POST.
exports.author_update_post = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author update POST");
};
```

Das Modul lädt zunächst das Modell `Author`, das wir später zum Abrufen und Aktualisieren unserer Daten verwenden werden.
Anschließend exportiert es Funktionen für jede der URLs, die wir verarbeiten möchten.
Beachten Sie, dass für die Operationen zum Erstellen, Aktualisieren und Löschen Formulare verwendet werden. Deshalb gibt es zusätzliche Methoden zur Verarbeitung der POST-Anfragen dieser Formulare – darauf gehen wir später im Artikel über Formulare ein.

Die Funktionen antworten mit einer Zeichenfolge, die darauf hinweist, dass die zugehörige Seite noch nicht erstellt wurde.
Wenn eine Controller-Funktion Pfadparameter erhalten soll, werden diese in der Antwortzeichenfolge ausgegeben (siehe oben `req.params.id`).

#### BookInstance-Controller

Öffnen Sie die Datei **/controllers/bookinstanceController.js** und fügen Sie den folgenden Code ein (er folgt demselben Muster wie das Controller-Modul für `Author`):

```js
const BookInstance = require("../models/bookinstance");

// Display list of all BookInstances.
exports.bookinstance_list = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance list");
};

// Display detail page for a specific BookInstance.
exports.bookinstance_detail = async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: BookInstance detail: ${req.params.id}`);
};

// Display BookInstance create form on GET.
exports.bookinstance_create_get = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance create GET");
};

// Handle BookInstance create on POST.
exports.bookinstance_create_post = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance create POST");
};

// Display BookInstance delete form on GET.
exports.bookinstance_delete_get = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance delete GET");
};

// Handle BookInstance delete on POST.
exports.bookinstance_delete_post = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance delete POST");
};

// Display BookInstance update form on GET.
exports.bookinstance_update_get = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance update GET");
};

// Handle bookinstance update on POST.
exports.bookinstance_update_post = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance update POST");
};
```

#### Genre-Controller

Öffnen Sie die Datei **/controllers/genreController.js** und fügen Sie den folgenden Text ein (er folgt demselben Muster wie die Dateien für `Author` und `BookInstance`):

```js
const Genre = require("../models/genre");

// Display list of all Genre.
exports.genre_list = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre list");
};

// Display detail page for a specific Genre.
exports.genre_detail = async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Genre detail: ${req.params.id}`);
};

// Display Genre create form on GET.
exports.genre_create_get = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre create GET");
};

// Handle Genre create on POST.
exports.genre_create_post = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre create POST");
};

// Display Genre delete form on GET.
exports.genre_delete_get = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre delete GET");
};

// Handle Genre delete on POST.
exports.genre_delete_post = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre delete POST");
};

// Display Genre update form on GET.
exports.genre_update_get = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre update GET");
};

// Handle Genre update on POST.
exports.genre_update_post = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre update POST");
};
```

#### Book-Controller

Öffnen Sie die Datei **/controllers/bookController.js** und fügen Sie den folgenden Code ein.
Er folgt demselben Muster wie die anderen Controller-Module, enthält aber zusätzlich eine Funktion `index()` zur Anzeige der Begrüßungsseite der Website:

```js
const Book = require("../models/book");

exports.index = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Site Home Page");
};

// Display list of all books.
exports.book_list = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book list");
};

// Display detail page for a specific book.
exports.book_detail = async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Book detail: ${req.params.id}`);
};

// Display book create form on GET.
exports.book_create_get = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book create GET");
};

// Handle book create on POST.
exports.book_create_post = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book create POST");
};

// Display book delete form on GET.
exports.book_delete_get = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book delete GET");
};

// Handle book delete on POST.
exports.book_delete_post = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book delete POST");
};

// Display book update form on GET.
exports.book_update_get = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book update GET");
};

// Handle book update on POST.
exports.book_update_post = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book update POST");
};
```

## Das catalog-Routenmodul erstellen

Als Nächstes erstellen wir _Routen_ für alle [von der LocalLibrary-Website benötigten URLs](#für_locallibrary_benötigte_routen). Diese rufen die Controller-Funktionen auf, die wir in den vorherigen Abschnitten definiert haben.

Das Grundgerüst enthält bereits einen Ordner **./routes** mit Routen für _index_ und _users_.
Erstellen Sie darin wie gezeigt eine weitere Routendatei: **catalog.js**.

```plain
/express-locallibrary-tutorial # the project root
  /routes
    index.js
    users.js
    catalog.js
```

Öffnen Sie **/routes/catalog.js** und fügen Sie den folgenden Code ein:

```js
const express = require("express");

// Require controller modules.
const book_controller = require("../controllers/bookController");
const author_controller = require("../controllers/authorController");
const genre_controller = require("../controllers/genreController");
const book_instance_controller = require("../controllers/bookinstanceController");

const router = express.Router();

/// BOOK ROUTES ///

// GET catalog home page.
router.get("/", book_controller.index);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get("/book/create", book_controller.book_create_get);

// POST request for creating Book.
router.post("/book/create", book_controller.book_create_post);

// GET request to delete Book.
router.get("/book/:id/delete", book_controller.book_delete_get);

// POST request to delete Book.
router.post("/book/:id/delete", book_controller.book_delete_post);

// GET request to update Book.
router.get("/book/:id/update", book_controller.book_update_get);

// POST request to update Book.
router.post("/book/:id/update", book_controller.book_update_post);

// GET request for one Book.
router.get("/book/:id", book_controller.book_detail);

// GET request for list of all Book items.
router.get("/books", book_controller.book_list);

/// AUTHOR ROUTES ///

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get("/author/create", author_controller.author_create_get);

// POST request for creating Author.
router.post("/author/create", author_controller.author_create_post);

// GET request to delete Author.
router.get("/author/:id/delete", author_controller.author_delete_get);

// POST request to delete Author.
router.post("/author/:id/delete", author_controller.author_delete_post);

// GET request to update Author.
router.get("/author/:id/update", author_controller.author_update_get);

// POST request to update Author.
router.post("/author/:id/update", author_controller.author_update_post);

// GET request for one Author.
router.get("/author/:id", author_controller.author_detail);

// GET request for list of all Authors.
router.get("/authors", author_controller.author_list);

/// GENRE ROUTES ///

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get("/genre/create", genre_controller.genre_create_get);

// POST request for creating Genre.
router.post("/genre/create", genre_controller.genre_create_post);

// GET request to delete Genre.
router.get("/genre/:id/delete", genre_controller.genre_delete_get);

// POST request to delete Genre.
router.post("/genre/:id/delete", genre_controller.genre_delete_post);

// GET request to update Genre.
router.get("/genre/:id/update", genre_controller.genre_update_get);

// POST request to update Genre.
router.post("/genre/:id/update", genre_controller.genre_update_post);

// GET request for one Genre.
router.get("/genre/:id", genre_controller.genre_detail);

// GET request for list of all Genre.
router.get("/genres", genre_controller.genre_list);

/// BOOKINSTANCE ROUTES ///

// GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
router.get(
  "/bookinstance/create",
  book_instance_controller.bookinstance_create_get,
);

// POST request for creating BookInstance.
router.post(
  "/bookinstance/create",
  book_instance_controller.bookinstance_create_post,
);

// GET request to delete BookInstance.
router.get(
  "/bookinstance/:id/delete",
  book_instance_controller.bookinstance_delete_get,
);

// POST request to delete BookInstance.
router.post(
  "/bookinstance/:id/delete",
  book_instance_controller.bookinstance_delete_post,
);

// GET request to update BookInstance.
router.get(
  "/bookinstance/:id/update",
  book_instance_controller.bookinstance_update_get,
);

// POST request to update BookInstance.
router.post(
  "/bookinstance/:id/update",
  book_instance_controller.bookinstance_update_post,
);

// GET request for one BookInstance.
router.get("/bookinstance/:id", book_instance_controller.bookinstance_detail);

// GET request for list of all BookInstance.
router.get("/bookinstances", book_instance_controller.bookinstance_list);

module.exports = router;
```

Das Modul lädt Express und erstellt damit ein `Router`-Objekt. Alle Routen werden auf diesem Router eingerichtet, der anschließend exportiert wird.

Die Routen werden mit den Methoden `.get()` oder `.post()` des Router-Objekts definiert.
Alle Pfade werden als Zeichenfolgen angegeben (wir verwenden weder Zeichenfolgenmuster noch reguläre Ausdrücke).
Routen, die eine bestimmte Ressource (z. B. ein Buch) betreffen, verwenden Pfadparameter, um die ID des Objekts aus der URL zu lesen.

Alle Handler-Funktionen werden aus den Controller-Modulen importiert, die wir im vorherigen Abschnitt erstellt haben.

### Das index-Routenmodul aktualisieren

Wir haben alle neuen Routen eingerichtet, aber es gibt noch eine Route zur ursprünglichen Seite. Stattdessen leiten wir sie zur neuen Indexseite unter `/catalog` weiter.

Öffnen Sie **/routes/index.js** und ersetzen Sie die bestehende Route durch die folgende Funktion.

```js
// GET home page.
router.get("/", (req, res) => {
  res.redirect("/catalog");
});
```

> [!NOTE]
> Hier verwenden wir zum ersten Mal die Antwortmethode [redirect()](https://expressjs.com/en/5x/api/#res.redirect). Sie leitet zur angegebenen Seite weiter und sendet dabei standardmäßig den HTTP-Statuscode „302 Found“. Bei Bedarf können Sie den zurückgegebenen Statuscode ändern sowie absolute oder relative Pfade angeben.

### app.js aktualisieren

Im letzten Schritt fügen wir die Routen zur Middleware-Kette hinzu.
Das erledigen wir in `app.js`.

Öffnen Sie **app.js** und laden Sie das catalog-Routenmodul unterhalb der anderen Routen (fügen Sie die unten gezeigte dritte Zeile unter den beiden anderen ein, die bereits in der Datei vorhanden sein sollten):

```js
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const catalogRouter = require("./routes/catalog"); // Import routes for "catalog" area of site
```

Fügen Sie anschließend die catalog-Route unterhalb der anderen Routen zum Middleware-Stack hinzu (fügen Sie die unten gezeigte dritte Zeile unter den beiden anderen ein, die bereits in der Datei vorhanden sein sollten):

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/catalog", catalogRouter); // Add catalog routes to middleware chain.
```

> [!NOTE]
> Wir haben unser catalog-Modul unter dem Pfad `/catalog` hinzugefügt. Dieser wird allen im catalog-Modul definierten Pfaden vorangestellt. Die URL für die Liste der Bücher lautet daher beispielsweise `/catalog/books/`.

Das war's. Nun sollten für alle URLs, die die LocalLibrary-Website später unterstützen soll, Routen und Funktionsgerüste eingerichtet sein.

### Die Routen testen

Um die Routen zu testen, starten Sie die Website zunächst wie gewohnt:

- Mit der Standardmethode

  ```bash
  # Windows
  SET DEBUG=express-locallibrary-tutorial:* & npm start

  # macOS or Linux
  DEBUG=express-locallibrary-tutorial:* npm start
  ```

- Falls Sie zuvor [nodemon](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website#enable_server_restart_on_file_changes) eingerichtet haben, können Sie stattdessen Folgendes verwenden:

  ```bash
  npm run serverstart
  ```

Rufen Sie anschließend mehrere LocalLibrary-URLs auf und überprüfen Sie, ob keine Fehlerseite (HTTP 404) angezeigt wird. Zur Orientierung finden Sie hier einige URLs:

- `http://localhost:3000/`
- `http://localhost:3000/catalog`
- `http://localhost:3000/catalog/books`
- `http://localhost:3000/catalog/bookinstances/`
- `http://localhost:3000/catalog/authors/`
- `http://localhost:3000/catalog/genres/`
- `http://localhost:3000/catalog/book/5846437593935e2f8c2aa226`
- `http://localhost:3000/catalog/book/create`

## Zusammenfassung

Wir haben nun alle Routen für unsere Website sowie Platzhalter-Controller-Funktionen erstellt, die wir in späteren Artikeln vollständig implementieren können. Dabei haben wir wichtige Grundlagen zu Express-Routen, zur Behandlung von Ausnahmen und zu Möglichkeiten der Strukturierung unserer Routen und Controller kennengelernt.

Im nächsten Artikel erstellen wir mithilfe von Views (Templates) und den in unseren Modellen gespeicherten Informationen eine richtige Begrüßungsseite für die Website.

## Siehe auch

- [Grundlagen des Routings](https://expressjs.com/en/starter/basic-routing/) (Express-Dokumentation)
- [Routing-Leitfaden](https://expressjs.com/en/guide/routing/) (Express-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
