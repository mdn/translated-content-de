---
title: "Express Tutorial Teil 4: Routen und Controller"
short-title: "4: Routen und Controller"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/routes
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

In diesem Tutorial richten wir Routen (Code zur URL-Verarbeitung) mit "Dummy"-Handler-Funktionen für alle Ressourcenziele ein, die wir letztendlich auf der [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) Website benötigen. Nach Abschluss werden wir eine modulare Struktur für unseren Routings-Code haben, die wir in den folgenden Artikeln mit realen Handler-Funktionen erweitern können. Wir werden auch ein wirklich gutes Verständnis dafür haben, wie man modulare Routen mit Express erstellt!

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction">Express/Node Einführung</a>.
        Schließen Sie vorherige Tutorial-Themen ab (einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose">Express Tutorial Teil 3: Benutzung einer Datenbank (mit Mongoose)</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie man einfache Routen erstellt.
        Alle unsere URL-Endpunkte einrichten.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Im [letzten Tutorial-Artikel](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose) haben wir _Mongoose_-Modelle definiert, um mit der Datenbank zu interagieren, und ein eigenständiges Skript verwendet, um einige initiale Bibliothekseinträge zu erstellen. Jetzt können wir den Code schreiben, um diese Informationen den Nutzern zu präsentieren. Das Erste, was wir tun müssen, ist festzulegen, welche Informationen wir auf unseren Seiten anzeigen möchten, und dann geeignete URLs für die Rückgabe dieser Ressourcen zu definieren. Dann müssen wir die Routen (URL-Handler) und Ansichten (Vorlagen) erstellen, um diese Seiten anzuzeigen.

Das unten stehende Diagramm dient als Erinnerung an den Hauptdatenfluss und die zu implementierenden Dinge beim Bearbeiten einer HTTP-Anfrage/-Antwort. Neben den Ansichten und Routen zeigt das Diagramm "Controller" — Funktionen, die den Code zur Routenanfrage von dem Code trennen, der die Anfrage tatsächlich verarbeitet.

Da wir die Modelle bereits erstellt haben, müssen wir hauptsächlich Folgendes erstellen:

- "Routen", um die unterstützten Anfragen (und alle in den Anforderungs-URLs kodierten Informationen) an die entsprechenden Controller-Funktionen weiterzuleiten.
- Controller-Funktionen, um die angeforderten Daten aus den Modellen zu erhalten, eine HTML-Seite zu erstellen, die die Daten anzeigt, und sie dem Benutzer im Browser anzuzeigen.
- Ansichten (Vorlagen), die von den Controllern verwendet werden, um die Daten darzustellen.

![Hauptdatenflussdiagramm eines MVC-Express-Servers: 'Routen' empfangen die an den Express-Server gesendeten HTTP-Anfragen und leiten sie an die entsprechenden 'Controller'-Funktionen weiter. Der Controller liest und schreibt Daten aus den Modellen. Modelle sind mit der Datenbank verbunden, um dem Server den Datenzugang zu ermöglichen. Controller verwenden 'Ansichten', auch Vorlagen genannt, um die Daten darzustellen. Der Controller sendet die HTML-HTTP-Antwort als HTTP-Antwort zurück an den Client.](mvc_express.png)

Letztendlich könnten wir Seiten haben, um Listen und Detailinformationen zu Büchern, Genres, Autoren und Buchinstanzen anzuzeigen, sowie Seiten zum Erstellen, Aktualisieren und Löschen von Datensätzen. Das ist viel auf einmal zu dokumentieren. Daher konzentriert sich der größte Teil dieses Artikels darauf, unsere Routen und Controller so einzurichten, dass "Dummy"-Inhalte zurückgegeben werden. Wir werden die Controllermethoden in unseren nachfolgenden Artikeln erweitern, um mit Modelldaten zu arbeiten.

Der erste Abschnitt unten bietet einen kurzen "Leitfaden" zur Verwendung der Express [Router](https://expressjs.com/en/5x/api/#router) Middleware. Wir werden dieses Wissen dann in den folgenden Abschnitten verwenden, wenn wir die LocalLibrary-Routen einrichten.

## Routenleitfaden

Eine Route ist ein Abschnitt von Express-Code, der ein [HTTP-Verb](/de/docs/Web/HTTP/Reference/Methods) (`GET`, `POST`, `PUT`, `DELETE`, usw.), einen URL-Pfad/-Muster und eine Funktion verknüpft, die aufgerufen wird, um dieses Muster zu bearbeiten.

Es gibt mehrere Möglichkeiten, Routen zu erstellen. Für dieses Tutorial verwenden wir die [`express.Router`](https://expressjs.com/en/guide/routing/#express-router) Middleware, da sie es uns ermöglicht, die Routings-Handler für einen bestimmten Teil einer Website zusammenzufassen und sie mit einem gemeinsamen Routen-Präfix zuzugreifen. Wir werden alle bibliotheksbezogenen Routen in einem "Katalog"-Modul behalten, und wenn wir Routen zum Bearbeiten von Benutzerkonten oder anderen Funktionen hinzufügen, können wir diese separat gruppiert halten.

> [!NOTE]
> Wir haben Express-Anwendungen zuvor kurz in unserer [Express-Einführung > Erstellen von Routings-Handlern](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#creating_route_handlers) besprochen. Abgesehen von einer besseren Unterstützung für Modularisierung (wie im ersten Unterabschnitt unten diskutiert), ist die Verwendung von _Router_ sehr ähnlich wie die direkte Definition von Routen auf dem _Express-Anwendungsobjekt_.

Der Rest dieses Abschnitts bietet einen Überblick darüber, wie der `Router` zur Definition von Routen verwendet werden kann.

### Definition und Verwendung separater Routings-Module

Der Code unten bietet ein konkretes Beispiel dafür, wie wir ein Routenmodul erstellen und es dann in eine _Express_-Anwendung verwenden können.

Zuerst erstellen wir Routen für ein Wiki in einem Modul namens **wiki.js**. Der Code importiert zuerst das Express-Anwendungsobjekt, verwendet es, um ein `Router`-Objekt zu erhalten, und fügt dann ein paar Routen hinzu, indem er die Methode `get()` verwendet. Schließlich exportiert das Modul das `Router`-Objekt.

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
> Oben definieren wir unsere Routings-Handler-Rückrufe direkt in den Router-Funktionen. In der LocalLibrary werden wir diese Rückrufe in einem separaten Controllermodul definieren.

Um das Routermodul in unserer Hauptanwendungsdatei zu verwenden, fordern wir zuerst das Routenmodul an (**wiki.js**). Dann rufen wir `use()` auf der _Express_-Anwendung auf, um den Router zum Middleware-Verarbeitungspfad hinzuzufügen und einen URL-Pfad von 'wiki' anzugeben.

```js
const wiki = require("./wiki.js");

// …
app.use("/wiki", wiki);
```

Die beiden Routen, die in unserem Wiki-Routenmodul definiert sind, sind dann unter `/wiki/` und `/wiki/about/` zugänglich.

### Routings-Funktionen

Unser Modul definiert oben ein paar typische Routings-Funktionen. Die "about"-Route (unten wiedergegeben) wird mit der `Router.get()` Methode definiert, die nur auf HTTP GET-Anfragen antwortet. Das erste Argument dieser Methode ist der URL-Pfad, während das zweite eine Rückruffunktion ist, die aufgerufen wird, falls eine HTTP GET-Anfrage mit dem Pfad empfangen wird.

```js
router.get("/about", (req, res) => {
  res.send("About this wiki");
});
```

Der Rückruf nimmt drei Argumente (üblicherweise wie gezeigt benannt: `req`, `res`, `next`) an, die das HTTP-Anfrageobjekt, die HTTP-Antwort und die _nächste_ Funktion in der Middleware-Kette enthalten.

> [!NOTE]
> Router-Funktionen sind [Express-Middleware](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#using_middleware), was bedeutet, dass sie entweder die Anfrage abschließen (beantworten), oder die `next` Funktion in der Kette aufrufen müssen. Im obigen Fall schließen wir die Anfrage mit `send()` ab, sodass das `next` Argument nicht verwendet wird (und wir uns entscheiden, es nicht anzugeben).
>
> Die Routerfunktion oben nimmt einen einzelnen Rückruf an, aber Sie können so viele Rückrufargumente angeben wie Sie möchten, oder ein Array von Rückruffunktionen. Jede Funktion ist Teil der Middleware-Kette und wird in der Reihenfolge aufgerufen, in der sie zur Kette hinzugefügt wurde (es sei denn, eine vorherige Funktion schließt die Anfrage ab).

Die Rückruffunktion hier ruft [`send()`](https://expressjs.com/en/5x/api/#res.send) auf der Antwort auf, um den String "About this wiki" zurückzugeben, wenn wir eine GET-Anfrage mit dem Pfad (`/about`) erhalten. Es gibt eine [Anzahl anderer Antwortmethoden](https://expressjs.com/en/guide/routing/#response-methods), um den Anfrage-/Antwortzyklus zu beenden. Zum Beispiel könnten Sie [`res.json()`](https://expressjs.com/en/5x/api/#res.json) verwenden, um eine JSON-Antwort zu senden, oder [`res.sendFile()`](https://expressjs.com/en/5x/api/#res.sendFile), um eine Datei zu senden. Die Antwortmethode, die wir am häufigsten verwenden werden, wenn wir die Bibliothek aufbauen, ist [`render()`](https://expressjs.com/en/5x/api/#res.render), die HTML-Dateien mit Vorlagen und Daten erstellt und zurückgibt—darüber werden wir in einem späteren Artikel ausführlich sprechen!

### HTTP-Verben

Die oben gezeigten Routen verwenden die Methode `Router.get()`, um auf HTTP `GET`-Anfragen mit einem bestimmten Pfad zu antworten.

Der `Router` bietet auch Routenmethoden für alle anderen [HTTP-Verben](/de/docs/Web/HTTP/Reference/Methods), die überwiegend auf dieselbe Weise verwendet werden: `post()`, `put()`, `delete()`, `options()`, `trace()`, `copy()`, `lock()`, `mkcol()`, `move()`, `purge()`, `propfind()`, `proppatch()`, `unlock()`, `report()`, `mkactivity()`, `checkout()`, `merge()`, `m-search()`, `notify()`, `subscribe()`, `unsubscribe()`, `patch()`, `search()`, und `connect()`.

Beispielsweise verhält sich der Code unten genauso wie die vorherige `/about`-Route, beantwortet jedoch nur HTTP POST-Anfragen.

```js
router.post("/about", (req, res) => {
  res.send("About this wiki");
});
```

Webseiten sollten idealerweise die Routenmethoden (und HTTP-Methoden) verwenden, die am besten mit der auszuführenden Operation übereinstimmen.
Zum Beispiel sollte eine clientgerenderte Anwendung `Router.get()` für das Lesen aus der Datenbank, `Router.post()` für das Erstellen neuer Datensätze, `Router.put()` oder `Router.patch()` für das Aktualisieren von Datensätzen und `Router.delete()` für das Löschen von Daten verwenden.

Beachten Sie jedoch, dass serverseitig gerenderte Anwendungen, wie die in diesem Tutorial demonstrierte, üblicherweise `Router.post()` für alle Routen verwenden, die Daten ändern.
Der Grund dafür ist, dass HTML `<form>`-Elemente standardmäßig nur [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) und [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST) Anfragen senden können.

Es gibt verschiedene Workarounds für diese Einschränkung, wie zum Beispiel das Kodieren des "gewünschten" HTTP-Verbs in einer `POST`-Anfrage und die Verwendung der [method-override](https://www.npmjs.com/package/method-override) Express-Middleware, um die Anfrage vor dem Weitergeben an den Router in das entsprechende HTTP-Verb zu ändern.
Für grundlegende Anwendungen ist es normalerweise übertrieben, den Code nur für die korrekte Verwendung von HTTP-Verben umzuschreiben.
Es könnte sich lohnen, das Server-Logging zu verbessern, oder wenn der Server sowohl serverseitig als auch clientseitig gerenderte Inhalte über denselben Endpunkt behandeln muss.

### Routenpfade

Die Routenpfade definieren die Endpunkte, an denen Anfragen gemacht werden können. Die Beispiele, die wir bisher gesehen haben, waren nur Strings und werden genau so verwendet, wie sie geschrieben sind: '/', '/about', '/book', '/any-random.path'.

Routenpfade können auch String-Muster sein. String-Muster verwenden eine Art reguläre Ausdrucks-Syntax, um _Muster_ von Endpunkten zu definieren, die übereinstimmen.
Die meisten unserer Routen für die LocalLibrary werden Strings und keine regulären Ausdrücke verwenden.
Wir werden auch Routenparameter verwenden, wie im nächsten Abschnitt besprochen.

### Routenparameter

Routenparameter sind benannte URL-Segmente, die verwendet werden, um Werte an bestimmten Positionen in der URL zu erfassen. Die benannten Segmente werden mit einem Doppelpunkt und dann dem Namen vorangestellt (z.B., `/:your_parameter_name/`). Die erfassten Werte werden im `req.params` Objekt mit den Parameternamen als Schlüssel gespeichert (z.B., `req.params.your_parameter_name`).

Betrachten wir also zum Beispiel eine URL, die Informationen über Benutzer und Bücher kodiert: `http://localhost:3000/users/34/books/8989`. Wir können diese Informationen wie unten gezeigt extrahieren, mit den `userId` und `bookId` Pfadparametern:

```js
app.get("/users/:userId/books/:bookId", (req, res) => {
  // Access userId via: req.params.userId
  // Access bookId via: req.params.bookId
  res.send(req.params);
});
```

> [!NOTE]
> Die URL _/book/create_ wird von einer Route wie `/book/:bookId` übereinstimmt (da `:bookId` ein Platzhalter für _beliebigen_ String ist, daher passt `create`). Die erste Route, die mit einer eingehenden URL übereinstimmt, wird verwendet, daher muss, wenn Sie URLs wie `/book/create` spezifisch verarbeiten möchten, deren Routenhandler vor Ihrer `/book/:bookId` Route definiert werden.

Routenparameternamen (zum Beispiel `bookId` oben) können jedes gültige JavaScript-Kennzeichen sein, das mit einem Buchstaben, `_` oder `$` beginnt. Sie können Ziffern nach dem ersten Zeichen enthalten, jedoch keine Bindestriche und Leerzeichen.
Sie können auch Namen verwenden, die keine gültigen JavaScript-Kennzeichen sind, einschließlich Leerzeichen, Bindestriche, Emoticons oder irgend einem anderen Zeichen, aber Sie müssen sie mit einem Anführungszeichen definieren und mit der Klammernotation darauf zugreifen.
Zum Beispiel:

```js
app.get('/users/:"user id"/books/:"book-id"', (req, res) => {
  // Access quoted param using bracket notation
  const user = req.params["user id"];
  const book = req.params["book-id"];
  res.send({ user, book });
});
```

### Platzhalter

Platzhalterparameter passen auf ein oder mehrere Zeichen über mehrere Segmente hinweg und geben jedes Segment als einen Wert in einem Array zurück.
Sie werden auf die gleiche Weise wie reguläre Parameter definiert, jedoch mit einem Sternchen vorangestellt.

Betrachten wir also die URL `http://localhost:3000/users/34/books/8989`, wir können alle Informationen nach `users/` mit dem `example` Platzhalter extrahieren:

```js
app.get("/users/*example", (req, res) => {
  // req.params would contain { "example": ["34", "books", "8989"]}
  res.send(req.params);
});
```

### Optionale Teile

Klammern können verwendet werden, um Teile des Pfades zu definieren, die optional sind.
Zum Beispiel unten, um einen Dateinamen mit einer beliebigen Erweiterung (oder keiner) zu matchen.

```js
app.get("/file/:filename{.:ext}", (req, res) => {
  // Given URL: http://localhost:3000/file/somefile.md`
  // req.params would contain { "filename": "somefile", "ext": "md"}
  res.send(req.params);
});
```

### Reservierte Zeichen

Die folgenden Zeichen sind reserviert: `(()[]?+!)`.
Wenn Sie sie verwenden möchten, müssen Sie diese mit einem Backslash (`\`) escapen.

Sie können das Pipe-Zeichen (`|`) auch nicht in einem regulären Ausdruck verwenden.

Das ist alles, was Sie benötigen, um mit den Routen anzufangen.
Bei Bedarf finden Sie mehr Informationen in den Express-Dokumentationen: [Grundlegendes Routing](https://expressjs.com/en/starter/basic-routing/) und [Routing-Leitfaden](https://expressjs.com/en/guide/routing/). Die folgenden Abschnitte zeigen, wie wir unsere Routen und Controller für die LocalLibrary einrichten.

### Fehler und Ausnahmen in den Routenfunktionen handhaben

Die Routenfunktionen, die wir früher gezeigt haben, haben alle Argumente `req` und `res`, die die Anfrage und die Antwort jeweils repräsentieren.
Routenfunktionen wird auch ein drittes Argument, `next`, übergeben, das eine Rückruffunktion enthält, die aufgerufen werden kann, um alle Fehler oder Ausnahmen in die Express-Middleware-Kette zu übergeben, wo sie letztendlich zu Ihrem globalen Fehlerbehandlungscode weitergeleitet werden.

Ab Express 5 wird `next` automatisch mit dem Ablehnungswert aufgerufen, wenn ein Routenhandler ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt, das anschließend abgelehnt wird; daher ist kein Fehlerbehandlungscode in den Routenfunktionen erforderlich, wenn Promises verwendet werden.
Das führt zu einem sehr kompakten Code, wenn mit asynchronen, auf Promises basierenden APIs gearbeitet wird, insbesondere beim Verwenden von [`async` und `await`](/de/docs/Learn_web_development/Extensions/Async_JS/Promises#async_and_await).

Zum Beispiel verwendet der folgende Code die `find()` Methode, um eine Datenbank abzufragen und dann das Ergebnis darzustellen.

```js
exports.get("/about", async (req, res, next) => {
  const successfulResult = await About.find({}).exec();
  res.render("about_view", { title: "About", list: successfulResult });
});
```

Der unten gezeigte Code zeigt dasselbe Beispiel mit einer Promise-Kette.
Beachten Sie, dass Sie, wenn Sie möchten, den Fehler abfangen und Ihre eigene benutzerdefinierte Verarbeitung implementieren könnten.

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
> Die meisten modernen APIs sind asynchron und auf Promises basierend, sodass die Fehlerbehandlung oft so einfach ist.
> Sicherlich ist das alles, was Sie wirklich über die Fehlerbehandlung in diesem Tutorial wissen _müssen_!

Express 5 fängt automatisch Ausnahmen ein und leitet sie weiter, die im synchronen Code geworfen werden:

```js
app.get("/", (req, res) => {
  // Express will catch this
  throw new Error("SynchronousException");
});
```

Sie müssen jedoch [`catch()`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Ausnahmen behandeln, die in asynchronem Code auftreten, der von Routenhandlern oder Middleware aufgerufen wird. Diese werden nicht durch den Standardcode gefangen:

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

Schließlich, wenn Sie den älteren Stil der asynchronen Methoden verwenden, die ein Fehler- oder ein Ergebnis in einer Rückruf-Funktion zurückgeben, dann müssen Sie den Fehler selbst propagieren.
Das folgende Beispiel zeigt, wie.

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

## Routen benötigt für die LocalLibrary

Die URLs, die wir letztendlich für unsere Seiten benötigen, sind unten aufgelistet, wobei _object_ durch den Namen jedes unserer Modelle (Buch, Buchinstanz, Genre, Autor), _objects_ das Plural von object, und _id_ das eindeutige Instanzfeld (`_id`) ist, das standardmäßig jedem Mongoose-Modellinstanz gegeben wird.

- `catalog/` — Die Start-/Indexseite.
- `catalog/<objects>/` — Die Liste aller Bücher, Buchinstanzen, Genres oder Autoren (z.B. /`catalog/books/`, /`catalog/genres/`, etc.)
- `catalog/<object>/<id>` — Die Detailseite für ein bestimmtes Buch, eine Buchinstanz, ein Genre oder einen Autor mit dem gegebenen `_id` Feldwert (z.B. `/catalog/book/584493c1f4887f06c0e67d37)`).
- `catalog/<object>/create` — Das Formular zum Erstellen eines neuen Buchs, einer Buchinstanz, eines Genres oder eines Autors (z.B. `/catalog/book/create)`).
- `catalog/<object>/<id>/update` — Das Formular zum Aktualisieren eines bestimmten Buchs, einer Buchinstanz, eines Genres oder eines Autors mit dem gegebenen `_id` Feldwert (z.B. `/catalog/book/584493c1f4887f06c0e67d37/update)`).
- `catalog/<object>/<id>/delete` — Das Formular zum Löschen eines bestimmten Buchs, einer Buchinstanz, eines Genres oder eines Autors mit dem gegebenen `_id` Feldwert (z.B. `/catalog/book/584493c1f4887f06c0e67d37/delete)`).

Die erste Startseite und die Listen-Seiten kodieren keine zusätzlichen Informationen. Während die zurückgegebenen Ergebnisse vom Modelltyp und den Inhalten in der Datenbank abhängen, bleiben die Abfragen, um die Informationen zu erhalten, immer gleich (ähnlich ist der Code, der für das Erstellen von Objekten ausgeführt wird, immer ähnlich).

Die anderen URLs hingegen werden verwendet, um auf ein bestimmtes Dokument/Modellinstanz zuzugreifen—diese kodieren die Identität des Elements in der URL (oben als `<id>` angezeigt). Wir verwenden Pfadparameter, um die kodierten Informationen zu extrahieren und sie an den Routenhandler zu übergeben (und in einem späteren Artikel werden wir dies verwenden, um dynamisch zu bestimmen, welche Informationen aus der Datenbank abgerufen werden sollen). Indem wir die Informationen in unserer URL kodieren, benötigen wir nur eine Route für jede Ressource eines bestimmten Typs (z.B. eine Route, um jede einzelne Buchinstanz anzuzeigen).

> [!NOTE]
> Express erlaubt es Ihnen, Ihre URLs beliebig zu konstruieren — Sie können Informationen im Body der URL nach oben wie oben gezeigt kodieren oder URL `GET`-Parameter verwenden (z.B. `/book/?id=6`). Egal, welche Herangehensweise Sie verwenden, die URLs sollten sauber, logisch und lesbar gehalten werden ([sehen Sie hier in den W3C-Ratschlägen nach](https://www.w3.org/Provider/Style/URI)).

Als nächstes erstellen wir unsere Routenhandler-Rückruffunktionen und den Routencode für alle oben genannten URLs.

## Erstellen der Routenhandler-Rückruffunktionen

Bevor wir unsere Routen definieren, erstellen wir zuerst alle Dummy-/Skeleton-Rückruffunktionen, die sie aufrufen werden. Die Rückrufe werden in separaten "Controller"-Modulen für `Book`, `BookInstance`, `Genre`, und `Author` gespeichert (Sie können jede Datei-/Modulstruktur verwenden, aber dies scheint eine angemessene Granularität für dieses Projekt zu sein).

Beginnen Sie damit, einen Ordner für unsere Controller im Projektstamm (**/controllers**) zu erstellen und dann separate Controller-Dateien/Module zum Bearbeiten jedes Modells zu erstellen:

```plain
/express-locallibrary-tutorial  # the project root
  /controllers
    authorController.js
    bookController.js
    bookinstanceController.js
    genreController.js
```

### Autor-Controller

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

Das Modul erfordert zuerst das `Author` Modell, das wir später verwenden werden, um auf unsere Daten zuzugreifen und sie zu aktualisieren.
Es exportiert dann Funktionen für jede der URLs, die wir bearbeiten möchten.
Beachten Sie, dass die Erstellungs-, Aktualisierungs- und Löschvorgänge Formulare verwenden und daher auch zusätzliche Methoden für die Handhabung von Formular-POST-Anfragen haben — wir werden diese Methoden im "Formular-Artikel" später besprechen.

Die Funktionen antworten mit einem String, der angibt, dass die zugehörige Seite noch nicht erstellt wurde.
Wenn von einer Controller-Funktion erwartet wird, dass sie Pfadparameter empfängt, werden diese in der Nachrichtenzeichenkette ausgegeben (siehe `req.params.id` oben).

#### Buchinstanz-Controller

Öffnen Sie die Datei **/controllers/bookinstanceController.js** und kopieren Sie den folgenden Code (dies folgt einem identischen Muster wie das `Author`-Controllermodul):

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

Öffnen Sie die Datei **/controllers/genreController.js** und kopieren Sie den folgenden Text ein (dies folgt einem identischen Muster wie die `Author`- und `BookInstance`-Dateien):

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

#### Buch-Controller

Öffnen Sie die Datei **/controllers/bookController.js** und kopieren Sie den folgenden Code hinein.
Dies folgt demselben Muster wie die anderen Controllermodule, hat jedoch zusätzlich eine `index()` Funktion, um die Willkommenseite der Website anzuzeigen:

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

## Erstellen des Katalog-Routenmoduls

Als nächstes erstellen wir _Routen_ für alle URLs, die [von der LocalLibrary-Website benötigt werden](#routen_benötigt_für_die_locallibrary), die die in den vorherigen Abschnitten definierten Controller-Funktionen aufrufen.

Das Grundgerüst hat bereits einen **./routes** Ordner, der Routen für den _Index_ und _Benutzer_ enthält.
Erstellen Sie eine weitere Routendatei — **catalog.js** — in diesem Ordner, wie gezeigt.

```plain
/express-locallibrary-tutorial # the project root
  /routes
    index.js
    users.js
    catalog.js
```

Öffnen Sie **/routes/catalog.js** und kopieren Sie den folgenden Code hinein:

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

Das Modul fordert Express an und verwendet es dann, um ein `Router`-Objekt zu erstellen. Die Routen werden alle auf dem Router eingerichtet, der dann exportiert wird.

Die Routen werden entweder mit dem `.get()` oder `.post()` Methoden auf dem Router-Objekt definiert.
Alle Pfade sind mit Strings definiert (wir verwenden keine String-Muster oder regulären Ausdrücke).
Routen, die auf eine spezifische Ressource (z.B. Buch) wirken, verwenden Pfadparameter, um die Objekt-ID aus der URL abzurufen.

Die Handler-Funktionen werden alle aus den Controller-Modulen importiert, die wir im vorherigen Abschnitt erstellt haben.

### Aktualisieren des Index-Routenmoduls

Wir haben alle unsere neuen Routen eingerichtet, aber wir haben immer noch eine Route zur ursprünglichen Seite. Lassen Sie uns stattdessen auf die neue Indexseite umleiten, die wir unter dem Pfad `/catalog` erstellt haben.

Öffnen Sie **/routes/index.js** und ersetzen Sie die vorhandene Route durch die folgende Funktion.

```js
// GET home page.
router.get("/", (req, res) => {
  res.redirect("/catalog");
});
```

> [!NOTE]
> Dies ist unsere erste Verwendung der [redirect()](https://expressjs.com/en/5x/api/#res.redirect) Antwortmethode. Diese leitet auf die angegebene Seite um, indem sie standardmäßig den HTTP-Statuscode "302 Found" sendet. Sie können den zurückgegebenen Statuscode bei Bedarf ändern und entweder absolute oder relative Pfade angeben.

### Update der app.js

Der letzte Schritt besteht darin, die Routen zur Middleware-Kette hinzuzufügen.
Wir tun dies in `app.js`.

Öffnen Sie **app.js** und erfordern Sie die Katalogroute unterhalb der anderen Routen (fügen Sie die dritte Zeile wie unten gezeigt hinzu, unter die anderen zwei, die bereits in der Datei vorhanden sein sollten):

```js
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const catalogRouter = require("./routes/catalog"); // Import routes for "catalog" area of site
```

Fügen Sie als nächstes die Katalogroute zum Middleware-Stack unterhalb der anderen Routen hinzu (fügen Sie die dritte Zeile wie unten gezeigt hinzu, unter die anderen zwei, die bereits in der Datei vorhanden sein sollten):

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/catalog", catalogRouter); // Add catalog routes to middleware chain.
```

> [!NOTE]
> Wir haben unser Katalogmodul unter einem Pfad `/catalog` hinzugefügt. Dies wird allen im Katalogmodul definierten Pfaden vorangestellt. Um beispielsweise eine Liste der Bücher zuzugreifen, ist die URL: `/catalog/books/`.

Das war es. Wir sollten jetzt Routen und Skeleton-Funktionen für alle URLs haben, die wir schließlich auf der LocalLibrary-Website unterstützen werden.

### Testen der Routen

Um die Routen zu testen, starten Sie zuerst die Website mit Ihrem üblichen Ansatz

- Die Standardmethode

  ```bash
  # Windows
  SET DEBUG=express-locallibrary-tutorial:* & npm start

  # macOS or Linux
  DEBUG=express-locallibrary-tutorial:* npm start
  ```

- Wenn Sie zuvor [nodemon](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website#enable_server_restart_on_file_changes) eingerichtet haben, können Sie stattdessen verwenden:

  ```bash
  npm run serverstart
  ```

Navigieren Sie dann zu einer Anzahl von LocalLibrary-URLs und vergewissern Sie sich, dass Sie keine Fehlerseite (HTTP 404) erhalten. Eine kleine Anzahl von URLs ist unten zu Ihrer Bequemlichkeit aufgelistet:

- `http://localhost:3000/`
- `http://localhost:3000/catalog`
- `http://localhost:3000/catalog/books`
- `http://localhost:3000/catalog/bookinstances/`
- `http://localhost:3000/catalog/authors/`
- `http://localhost:3000/catalog/genres/`
- `http://localhost:3000/catalog/book/5846437593935e2f8c2aa226`
- `http://localhost:3000/catalog/book/create`

## Zusammenfassung

Wir haben nun alle Routen für unsere Seite erstellt, zusammen mit Dummy-Controllerfunktionen, die wir in späteren Artikeln mit einer vollständigen Implementierung ausstatten können. Unterwegs haben wir viele grundlegende Informationen über Express-Routen, die Behandlung von Ausnahmen und einige Ansätze zur Strukturierung unserer Routen und Controller gelernt.

In unserem nächsten Artikel werden wir eine richtige Willkommenseite für die Seite erstellen, unter Verwendung von Ansichten (Vorlagen) und Informationen, die in unseren Modellen gespeichert sind.

## Siehe auch

- [Grundlegendes Routing](https://expressjs.com/en/starter/basic-routing/) (Express-Dokumentation)
- [Routing-Leitfaden](https://expressjs.com/en/guide/routing/) (Express-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
