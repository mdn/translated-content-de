---
title: "Express Tutorial Teil 4: Routen und Controller"
short-title: "4: Routen und Controller"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/routes
l10n:
  sourceCommit: d1bfebdc3cb5663f82ffd12188729002db600e10
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

In diesem Tutorial richten wir Routen (URL-Verarbeitungscode) mit "Dummy"-Handlerfunktionen für alle Ressourcenendpunkte ein, die wir schließlich auf der [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website)-Website benötigen werden. Bei Abschluss werden wir eine modulare Struktur für unseren Routenbearbeitungscode haben, die wir in den folgenden Artikeln mit echten Handlerfunktionen erweitern können. Wir werden auch ein wirklich gutes Verständnis dafür haben, wie man modulare Routen mit Express erstellt!

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction">Einführung in Express/Node</a>.
        Schließen Sie die vorherigen Tutorial-Themen ab (einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose">Express Tutorial Teil 3: Verwenden einer Datenbank (mit Mongoose)</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, wie man einfache Routen erstellt.
        Alle unsere URL-Endpunkte einzurichten.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Im [letzten Tutorialartikel](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose) haben wir _Mongoose_-Modelle definiert, um mit der Datenbank zu interagieren, und ein (eigenständiges) Skript verwendet, um einige anfängliche Bibliothekseinträge zu erstellen. Jetzt können wir den Code schreiben, um den Nutzern diese Informationen zu präsentieren. Zunächst müssen wir bestimmen, welche Informationen wir auf unseren Seiten anzeigen möchten, und dann geeignete URLs für die Rückgabe dieser Ressourcen definieren. Dann müssen wir die Routen (URL-Handler) und Ansichten (Templates) erstellen, um diese Seiten anzuzeigen.

Das unten stehende Diagramm dient als Erinnerung an den Hauptdatenfluss und die zu implementierenden Dinge beim Umgang mit einer HTTP-Anfrage/Antwort. Zusätzlich zu den Views und Routen zeigt das Diagramm "Controller" — Funktionen, die den Code zur Routenanfrage von dem Code trennen, der die Anfragen tatsächlich verarbeitet.

Da wir bereits die Modelle erstellt haben, müssen wir hauptsächlich Folgendes erstellen:

- "Routen", um die unterstützten Anfragen (und alle in den Anforderungs-URLs codierten Informationen) an die entsprechenden Controller-Funktionen weiterzuleiten.
- Controller-Funktionen, um die angeforderten Daten aus den Modellen zu erhalten, eine HTML-Seite zur Anzeige der Daten zu erstellen und sie dem Benutzer zur Ansicht im Browser zurückzugeben.
- Views (Templates), die von den Controllern verwendet werden, um die Daten darzustellen.

![Hauptdatenflussdiagramm eines MVC-Express-Servers: 'Routes' empfangen die an den Express-Server gesendeten HTTP-Anfragen und leiten sie an die entsprechenden 'Controller'-Funktionen weiter. Der Controller liest und schreibt Daten aus den Modellen. Modelle sind mit der Datenbank verbunden, um der Server-Datenzugriff zu bieten. Controller verwenden 'Views', auch Templates genannt, um die Daten darzustellen. Der Controller sendet die HTML-HTTP-Antwort als HTTP-Antwort zurück an den Client.](mvc_express.png)

Letztendlich könnten wir Seiten haben, um Listen und Detailinformationen für Bücher, Genres, Autoren und Buchinstanzen anzuzeigen, zusammen mit Seiten zum Erstellen, Aktualisieren und Löschen von Datensätzen. Das ist viel, um alles in einem Artikel zu dokumentieren. Daher wird sich der größte Teil dieses Artikels darauf konzentrieren, unsere Routen und Controller einzurichten, um "Dummy"-Inhalte zurückzugeben. Wir werden die Controllermethoden in unseren nachfolgenden Artikeln erweitern, um mit Modelldaten zu arbeiten.

Der erste Abschnitt unten bietet einen kurzen "Leitfaden" zur Verwendung der Express-[Router](https://expressjs.com/en/5x/api.html#router)-Middleware. Wir werden dieses Wissen dann in den folgenden Abschnitten anwenden, wenn wir die LocalLibrary-Routen einrichten.

## Routen-Leitfaden

Eine Route ist ein Abschnitt von Express-Code, der ein [HTTP-Verb](/de/docs/Web/HTTP/Reference/Methods) (`GET`, `POST`, `PUT`, `DELETE`, etc.), einen URL-Pfad/-Muster und eine Funktion verknüpft, die aufgerufen wird, um dieses Muster zu verarbeiten.

Es gibt mehrere Möglichkeiten, Routen zu erstellen. Für dieses Tutorial werden wir die [`express.Router`](https://expressjs.com/en/guide/routing.html#express-router)-Middleware verwenden, da sie es uns ermöglicht, die Routen-Handler für einen bestimmten Teil einer Seite zusammenzufassen und mit einem gemeinsamen Routen-Prefix darauf zuzugreifen. Wir behalten alle unsere bibliotheksbezogenen Routen in einem "Katalog"-Modul, und wenn wir Routen zum Umgang mit Benutzerkonten oder anderen Funktionen hinzufügen, können wir sie separat gruppieren.

> [!NOTE]
> Wir haben Express-Anwendungsrouten kurz in unserer [Express Einführung > Erstellen von Routen-Handlern](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#creating_route_handlers) besprochen. Abgesehen von der besseren Unterstützung für Modularisierung (wie im ersten Unterabschnitt unten beschrieben) ist die Verwendung von _Router_ sehr ähnlich zur direkten Definition von Routen auf dem _Express-Anwendungsobjekt_.

Der Rest dieses Abschnitts bietet einen Überblick darüber, wie der `Router` verwendet werden kann, um die Routen zu definieren.

### Definieren und Verwenden separater Routen-Module

Der folgende Code bietet ein konkretes Beispiel dafür, wie wir ein Routen-Modul erstellen und dann in einer _Express_-Anwendung verwenden können.

Zuerst erstellen wir Routen für ein Wiki in einem Modul namens **wiki.js**. Der Code importiert zunächst das Express-Anwendungsobjekt, verwendet es, um ein `Router`-Objekt zu erhalten, und fügt dann ein paar Routen hinzu, indem die `get()`-Methode verwendet wird. Zuletzt exportiert das Modul das `Router`-Objekt.

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
> Oben definieren wir unsere Routen-Handler-Callbacks direkt in den Router-Funktionen. In der LocalLibrary werden wir diese Callbacks in einem separaten Controller-Modul definieren.

Um das Router-Modul in unserer Hauptanwendungsdatei zu verwenden, benötigen wir zuerst das Routenmodul (**wiki.js**). Dann rufen wir `use()` auf der _Express_-Anwendung auf, um den Router an den Middleware-Verarbeitungspfad hinzuzufügen, wobei ein URL-Pfad von 'wiki' angegeben wird.

```js
const wiki = require("./wiki.js");

// …
app.use("/wiki", wiki);
```

Die beiden im Wiki-Routenmodul definierten Routen sind dann von `/wiki/` und `/wiki/about/` aus zugänglich.

### Routen-Funktionen

Unser Modul oben definiert ein paar typische Routen-Funktionen. Die "about"-Route (unten reproduziert) wird mithilfe der `Router.get()`-Methode definiert, die nur auf HTTP-GET-Anfragen reagiert. Das erste Argument dieser Methode ist der URL-Pfad, während das zweite eine Callback-Funktion ist, die aufgerufen wird, wenn eine HTTP-GET-Anfrage mit dem Pfad empfangen wird.

```js
router.get("/about", (req, res) => {
  res.send("About this wiki");
});
```

Das Callback nimmt drei Argumente (meistens so benannt: `req`, `res`, `next`), die das HTTP-Anfrageobjekt, die HTTP-Antwort und die _nächste_ Funktion in der Middleware-Kette enthalten werden.

> [!NOTE]
> Router-Funktionen sind [Express Middleware](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#using_middleware), was bedeutet, dass sie entweder die Anfrage abschließen (auf die Anfrage antworten) oder die `next`-Funktion in der Kette aufrufen müssen. Im obigen Fall schließen wir die Anfrage mit `send()` ab, sodass das `next`-Argument nicht verwendet wird (und wir entscheiden uns, es nicht anzugeben).
>
> Die Router-Funktion oben nimmt ein einzelnes Callback-Argument entgegen, aber Sie können so viele Callback-Argumente angeben, wie Sie möchten, oder ein Array von Callback-Funktionen. Jede Funktion ist Teil der Middleware-Kette und wird in der Reihenfolge aufgerufen, in der sie der Kette hinzugefügt wird (es sei denn, eine vorhergehende Funktion schließt die Anfrage ab).

Die Callback-Funktion hier ruft [`send()`](https://expressjs.com/en/5x/api.html#res.send) auf der Antwort auf, um die Zeichenfolge "About this wiki" zurückzugeben, wenn wir eine GET-Anfrage mit dem Pfad (`/about`) erhalten. Es gibt eine [Reihe anderer Antwortmethoden](https://expressjs.com/en/guide/routing.html#response-methods), um den Anfrage-/Antwort-Zyklus zu beenden. Zum Beispiel könnten Sie [`res.json()`](https://expressjs.com/en/5x/api.html#res.json) aufrufen, um eine JSON-Antwort zu senden, oder [`res.sendFile()`](https://expressjs.com/en/5x/api.html#res.sendFile), um eine Datei zu senden. Die Antwortmethode, die wir am häufigsten verwenden werden, während wir die Bibliothek aufbauen, ist [`render()`](https://expressjs.com/en/5x/api.html#res.render), die HTML-Dateien mithilfe von Templates und Daten erstellt und zurückgibt — darüber werden wir in einem späteren Artikel ausführlich sprechen!

### HTTP-Verben

Die obigen Beispielrouten verwenden die `Router.get()`-Methode, um auf HTTP-`GET`-Anfragen mit einem bestimmten Pfad zu reagieren.

Der `Router` stellt auch Routenmethoden für alle anderen [HTTP-Verben](/de/docs/Web/HTTP/Reference/Methods) zur Verfügung, die meistens auf genau die gleiche Weise verwendet werden: `post()`, `put()`, `delete()`, `options()`, `trace()`, `copy()`, `lock()`, `mkcol()`, `move()`, `purge()`, `propfind()`, `proppatch()`, `unlock()`, `report()`, `mkactivity()`, `checkout()`, `merge()`, `m-search()`, `notify()`, `subscribe()`, `unsubscribe()`, `patch()`, `search()` und `connect()`.

Zum Beispiel verhält sich der folgende Code genauso wie die vorherige `/about`-Route, reagiert jedoch nur auf HTTP-POST-Anfragen.

```js
router.post("/about", (req, res) => {
  res.send("About this wiki");
});
```

Websites sollten idealerweise die Routenmethode (und HTTP-Methode) verwenden, die am besten der durchgeführten Operation entspricht.
Zum Beispiel sollte eine clientseitig gerenderte Anwendung `Router.get()` zum Lesen aus der Datenbank, `Router.post()` zum Erstellen neuer Datensätze, `Router.put()` oder `Router.patch()` zum Aktualisieren von Datensätzen und `Router.delete()` zum Löschen von Daten verwenden.

Beachten Sie jedoch, dass serverseitig gerenderte Anwendungen, wie die in diesem Tutorial gezeigte, häufig `Router.post()` für alle Routen verwenden, die Daten ändern.
Der Grund dafür ist, dass HTML `<form>`-Elemente standardmäßig nur [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)- und [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfragen senden können.

Es gibt verschiedene Lösungen für diese Einschränkung, zum Beispiel durch das Encodieren des "gewünschten" HTTP-Verbs in einer `POST`-Anfrage und die Verwendung der [method-override](https://www.npmjs.com/package/method-override)-Express-Middleware, um die Anfrage vor der Weiterleitung an den Router in das geeignete HTTP-Verb zu ändern.
Für grundlegende Anwendungen ist es in der Regel übertrieben, den Code nur für die Verwendung der richtigen HTTP-Verben umzuschreiben.
Es kann sich jedoch lohnen, das Serverprotokoll zu verbessern oder wenn der Server Inhalte sowohl server- als auch clientseitig über den gleichen Endpunkt verarbeiten muss.

### Routenpfade

Die Routenpfade definieren die Endpunkte, an denen Anfragen gestellt werden können. Die Beispiele, die wir bisher gesehen haben, waren nur Zeichenfolgen und werden genau so verwendet, wie sie geschrieben sind: '/', '/about', '/book', '/any-random.path'.

Routenpfade können auch Zeichenfolgenmuster sein. Zeichenfolgenmuster verwenden eine Form der regulären Ausdruckssyntax, um _Muster_ von Endpunkten zu definieren, die übereinstimmen sollen.
Die meisten unserer Routen für die LocalLibrary werden Zeichenfolgen und keine regulären Ausdrücke verwenden.
Wir werden auch Routenparameter verwenden, wie im nächsten Abschnitt besprochen.

### Routenparameter

Routenparameter sind _benannte URL-Segmente_, die Werte an bestimmten Positionen in der URL erfassen. Die benannten Segmente sind mit einem Doppelpunkt und dann dem Namen vorangestellt (z.B. `/:your_parameter_name/`). Die erfassten Werte werden im `req.params`-Objekt mit den Parameternamen als Schlüssel gespeichert (z.B. `req.params.your_parameter_name`).

Betrachten Sie also beispielsweise eine URL, die codiert ist, um Informationen über Benutzer und Bücher zu enthalten: `http://localhost:3000/users/34/books/8989`. Wir können diese Informationen wie unten gezeigt extrahieren, mit den `userId`- und `bookId`-Pfadparametern:

```js
app.get("/users/:userId/books/:bookId", (req, res) => {
  // Access userId via: req.params.userId
  // Access bookId via: req.params.bookId
  res.send(req.params);
});
```

> [!NOTE]
> Die URL _/book/create_ wird von einer Route wie `/book/:bookId` übereinstimmen (da `:bookId` ein Platzhalter für _jede_ Zeichenfolge ist, somit passt `create`). Die erste Route, die mit einer eingehenden URL übereinstimmt, wird verwendet, daher muss der Routen-Handler für `/book/create`-URLs spezifisch vor Ihrer `/book/:bookId`-Route definiert werden.

Routenparameternamen (zum Beispiel `bookId`, oben) können jedes gültige JavaScript-Identifikator sein, der mit einem Buchstaben, `_` oder `$` beginnt. Sie können Ziffern nach dem ersten Zeichen einschließen, aber keine Bindestriche und Leerzeichen.
Sie können auch Namen verwenden, die keine gültigen JavaScript-Identifikatoren sind, einschließlich Leerzeichen, Bindestriche, Emoticons oder andere Zeichen, aber Sie müssen sie mit einer Anführungszeichen-definierten Zeichenfolge definieren und mit Klammernotierung darauf zugreifen.
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

Wildcard-Parameter stimmen mit einem oder mehreren Zeichen über mehrere Segmente überein und geben jedes Segment als Wert in einem Array zurück.
Sie werden auf die gleiche Weise wie reguläre Parameter definiert, jedoch mit einem Asterisk vorangestellt.

Betrachten Sie also die URL `http://localhost:3000/users/34/books/8989`, wir können alle Informationen nach `users/` mit dem `example`-Wildcard extrahieren:

```js
app.get("/users/*example", (req, res) => {
  // req.params would contain { "example": ["34", "books", "8989"]}
  res.send(req.params);
});
```

### Optionale Teile

Klammern können verwendet werden, um Teile des Pfades zu definieren, die optional sind.
Zum Beispiel passen wir unten einen Dateinamen mit jeder Dateierweiterung (oder keiner) an.

```js
app.get("/file/:filename{.:ext}", (req, res) => {
  // Given URL: http://localhost:3000/file/somefile.md`
  // req.params would contain { "filename": "somefile", "ext": "md"}
  res.send(req.params);
});
```

### Reservierte Zeichen

Die folgenden Zeichen sind reserviert: `(()[]?+!)`.
Wenn Sie sie verwenden möchten, müssen Sie sie mit einem Backslash (`\`) escapen.

Sie können auch nicht das Pipe-Zeichen (`|`) in einem regulären Ausdruck verwenden.

Das ist alles, was Sie benötigen, um mit den Routen zu beginnen.
Falls erforderlich, finden Sie weitere Informationen in den Express-Dokumentationen: [Grundlegendes Routing](https://expressjs.com/en/starter/basic-routing.html) und [Routing-Leitfaden](https://expressjs.com/en/guide/routing.html). Die folgenden Abschnitte zeigen, wie wir unsere Routen und Controller für die LocalLibrary einrichten werden.

### Umgang mit Fehlern und Ausnahmen in den Routen-Funktionen

Die früher gezeigten Routen-Funktionen haben alle Argumente `req` und `res`, die die Anfrage und Antwort darstellen, jeweils.
Routen-Funktionen erhalten auch ein drittes Argument, `next`, das eine Callback-Funktion enthält, die aufgerufen werden kann, um alle Fehler oder Ausnahmen an die Express-Middleware-Kette weiterzugeben, wo sie schließlich zu Ihrem globalen Fehlerbehandlungscode gelangen.

Ab Express 5 wird `next` automatisch mit dem Ablehnungswert aufgerufen, wenn ein Routen-Handler ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt, das anschließend abgelehnt wird; daher ist kein Fehlerbehandlungscode in Routen-Funktionen erforderlich, wenn Promises verwendet werden.
Dies führt zu sehr kompaktem Code, wenn Sie mit asynchronen, auf Promises basierenden APIs arbeiten, insbesondere bei der Verwendung von [`async` und `await`](/de/docs/Learn_web_development/Extensions/Async_JS/Promises#async_and_await).

Zum Beispiel wird im folgenden Code die `find()`-Methode verwendet, um eine Datenbank abzufragen und dann das Ergebnis zu rendern.

```js
exports.get("/about", async (req, res, next) => {
  const successfulResult = await About.find({}).exec();
  res.render("about_view", { title: "About", list: successfulResult });
});
```

Der unten stehende Code zeigt dasselbe Beispiel mit einer Promise-Kette.
Beachten Sie, dass Sie, wenn Sie dies möchten, die Fehler `catch()` und Ihre eigene benutzerdefinierte Verarbeitung implementieren könnten.

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
> Die meisten modernen APIs sind asynchron und basieren auf Promises, sodass die Fehlerbehandlung oft so einfach ist.
> Sicherlich ist das alles, was Sie wirklich über die Fehlerbehandlung für dieses Tutorial wissen _müssen_!

Express 5 fängt und leitet automatisch Ausnahmen weiter, die in synchronem Code geworfen werden:

```js
app.get("/", (req, res) => {
  // Express will catch this
  throw new Error("SynchronousException");
});
```

Sie müssen jedoch [`catch()`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Ausnahmen abfangen, die in asynchronem Code, der von Routen-Handlern oder Middleware aufgerufen wird, auftreten. Diese werden nicht vom Standard-Code abgefangen:

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

Wenn Sie schließlich die ältere Art von asynchronen Methoden verwenden, die einen Fehler oder ein Ergebnis in einer Callback-Funktion zurückgeben, müssen Sie den Fehler selbst weiterleiten.
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

Für weitere Informationen siehe [Fehlerbehandlung](https://expressjs.com/en/guide/error-handling.html).

## Benötigte Routen für die LocalLibrary

Die URLs, die wir letztendlich für unsere Seiten benötigen, sind unten aufgelistet, wobei _object_ durch den Namen jedes unserer Modelle (book, bookinstance, genre, author), _objects_ durch den Plural von object und _id_ durch das eindeutige Instanzfeld (`_id`), das jedem Mongoose-Modellinstanz standardmäßig zugewiesen wird, ersetzt wird.

- `catalog/` — Die Startseite/Indexseite.
- `catalog/<objects>/` — Die Liste aller Bücher, Bucheninstanzen, Genres oder Autoren (z.B. /`catalog/books/`, /`catalog/genres/`, etc.)
- `catalog/<object>/<id>` — Die Detailseite für ein bestimmtes Buch, eine Buchinstanz, ein Genre oder einen Autor mit dem angegebenen `_id`-Feldwert (z.B. `/catalog/book/584493c1f4887f06c0e67d37)`).
- `catalog/<object>/create` — Das Formular zum Erstellen eines neuen Buches, einer Buchinstanz, eines Genres oder eines Autors (z.B. `/catalog/book/create)`).
- `catalog/<object>/<id>/update` — Das Formular zum Aktualisieren eines bestimmten Buches, einer Buchinstanz, eines Genres oder eines Autors mit dem angegebenen `_id`-Feldwert (z.B. `/catalog/book/584493c1f4887f06c0e67d37/update)`).
- `catalog/<object>/<id>/delete` — Das Formular zum Löschen eines bestimmten Buches, einer Buchinstanz, eines Genres oder eines Autors mit dem angegebenen `_id`-Feldwert (z.B. `/catalog/book/584493c1f4887f06c0e67d37/delete)`).

Die erste Startseite und die Listen-Seiten codieren keine zusätzlichen Informationen. Während die zurückgegebenen Ergebnisse vom Modeltyp und dem Inhalt in der Datenbank abhängen, sind die Abfragen, um die Informationen zu erhalten, immer gleich (ähnlich wie der ausgeführte Code zur Objekterstellung immer ähnlich ist).

Im Gegensatz dazu werden die anderen URLs verwendet, um auf ein bestimmtes Dokument/Modellinstanz zu wirken — diese codieren die Identität des Elements in der URL (oben als `<id>` dargestellt). Wir verwenden Pfadparameter, um die codierten Informationen zu extrahieren und an den Routen-Handler zu übergeben (und in einem späteren Artikel verwenden wir dies, um dynamisch zu bestimmen, welche Informationen aus der Datenbank abgerufen werden sollen). Durch die Codierung der Informationen in unserer URL benötigen wir nur eine Route für jede Ressource eines bestimmten Typs (z.B. eine Route, um die Anzeige jedes einzelnen Buchelements zu verarbeiten).

> [!NOTE]
> Express erlaubt Ihnen, Ihre URLs nach Belieben zu konstruieren — Sie können Informationen im Hauptteil der URL wie oben gezeigt codieren oder URL-`GET`-Parameter verwenden (z.B. `/book/?id=6`). Unabhängig davon, welche Methode Sie verwenden, sollten die URLs sauber, logisch und lesbar gehalten werden ([sehen Sie sich hier den W3C-Rat an](https://www.w3.org/Provider/Style/URI)).

Als Nächstes erstellen wir unsere Routen-Handler-Callback-Funktionen und den Routen-Code für alle oben genannten URLs.

## Erstellen der Routen-Handler-Callback-Funktionen

Bevor wir unsere Routen definieren, erstellen wir zuerst alle Dummy-/Skeleton-Callback-Funktionen, die sie aufrufen werden. Die Callbacks werden in separaten "Controller"-Modulen für `Book`, `BookInstance`, `Genre` und `Author` gespeichert (Sie können jede Datei-/Modulstruktur verwenden, aber dies scheint für dieses Projekt eine geeignete Granularität zu sein).

Beginnen Sie damit, einen Ordner für unsere Controller im Projekt-Stammverzeichnis (**/controllers**) zu erstellen und dann separate Controller-Dateien/Module zu erstellen, um jeweils jedes der Modelle zu bearbeiten:

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

Das Modul benötigt zuerst das `Author`-Modell, das wir später verwenden werden, um auf unsere Daten zuzugreifen und sie zu aktualisieren.
Dann exportiert es Funktionen für jede der URLs, die wir bearbeiten möchten.
Beachten Sie, dass die Erstellungs-, Aktualisierungs- und Löschoperationen Formulare verwenden und daher auch zusätzliche Methoden zur Bearbeitung von Formular-Post-Anfragen haben — wir werden diese Methoden im "Formular-Artikel" später besprechen.

Die Funktionen antworten mit einem String, der angibt, dass die zugehörige Seite noch nicht erstellt wurde.
Wenn erwartet wird, dass eine Controller-Funktion Pfadparameter empfängt, werden diese in der Nachrichtenzeichenfolge ausgegeben (siehe `req.params.id` oben).

#### BookInstance-Controller

Öffnen Sie die Datei **/controllers/bookinstanceController.js** und kopieren Sie den folgenden Code hinein (dies folgt einem identischen Muster zum `Author`-Controller-Modul):

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

Öffnen Sie die Datei **/controllers/genreController.js** und kopieren Sie den folgenden Text hinein (dies folgt einem identischen Muster zu den `Author`- und `BookInstance`-Dateien):

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

Öffnen Sie die Datei **/controllers/bookController.js** und kopieren Sie den folgenden Code hinein.
Dies folgt demselben Muster wie die anderen Controller-Module, hat jedoch zusätzlich eine `index()`-Funktion zur Anzeige der Willkommensseite der Website:

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

Als nächstes erstellen wir _Routen_ für alle URLs, [die von der LocalLibrary-Website benötigt werden](#benötigte_routen_für_die_locallibrary), die die in den vorherigen Abschnitten definierten Controller-Funktionen aufrufen.

Das Skelett enthält bereits einen **./routes**-Ordner, der Routen für den _Index_ und _Benutzer_ enthält.
Erstellen Sie eine weitere Routen-Datei — **catalog.js** — in diesem Ordner, wie unten gezeigt.

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

Das Modul benötigt Express und verwendet es dann, um ein `Router`-Objekt zu erstellen. Die Routen werden alle auf dem Router eingerichtet, der dann exportiert wird.

Die Routen werden entweder mit `.get()`- oder `.post()`-Methoden auf dem Router-Objekt definiert.
Alle Pfade sind mit Zeichenfolgen definiert (wir verwenden keine Zeichenfolgenmuster oder regulären Ausdrücke).
Routen, die auf eine spezifische Ressource wirken (z.B. Buch), verwenden Pfadparameter, um die Objekt-ID aus der URL zu erhalten.

Die Handler-Funktionen werden alle aus den Controller-Modulen importiert, die wir im vorherigen Abschnitt erstellt haben.

### Aktualisieren des Index-Routenmoduls

Wir haben alle unsere neuen Routen eingerichtet, aber wir haben immer noch eine Route zur ursprünglichen Seite. Lassen Sie uns stattdessen auf die neue Indexseite weiterleiten, die wir unter dem Pfad `/catalog` erstellt haben.

Öffnen Sie **/routes/index.js** und ersetzen Sie die vorhandene Route mit der folgenden Funktion.

```js
// GET home page.
router.get("/", (req, res) => {
  res.redirect("/catalog");
});
```

> [!NOTE]
> Dies ist unsere erste Verwendung der [redirect()](https://expressjs.com/en/5x/api.html#res.redirect)-Antwortmethode. Diese leitet zur angegebenen Seite um und sendet standardmäßig den HTTP-Statuscode "302 Found". Sie können den zurückgegebenen Statuscode bei Bedarf ändern und entweder absolute oder relative Pfade angeben.

### Aktualisieren Sie app.js

Der letzte Schritt ist das Hinzufügen der Routen zur Middleware-Kette.
Wir tun dies in `app.js`.

Öffnen Sie **app.js** und erfordern Sie die Katalogroute unterhalb der anderen Routen (fügen Sie die dritte unten angezeigte Zeile hinzu, unter den anderen beiden, die bereits in der Datei vorhanden sein sollten):

```js
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const catalogRouter = require("./routes/catalog"); // Import routes for "catalog" area of site
```

Fügen Sie als Nächstes die Katalogroute dem Middleware-Stack unterhalb der anderen Routen hinzu (fügen Sie die dritte unten angezeigte Zeile hinzu, unter den anderen beiden, die bereits in der Datei vorhanden sein sollten):

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/catalog", catalogRouter); // Add catalog routes to middleware chain.
```

> [!NOTE]
> Wir haben unser Katalogmodul unter einem Pfad `/catalog` hinzugefügt. Dies wird allen im Katalogmodul definierten Pfaden vorangestellt. Beispielsweise lautet die URL, um eine Liste von Büchern aufzurufen: `/catalog/books/`.

Das war's. Wir sollten jetzt Routen und Skeleton-Funktionen für alle URLs aktiviert haben, die wir schließlich auf der LocalLibrary-Website unterstützen werden.

### Testen der Routen

Um die Routen zu testen, starten Sie die Website zuerst mit Ihrem üblichen Ansatz

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

Navigieren Sie dann zu einer Anzahl von LocalLibrary-URLs und verifizieren Sie, dass Sie keine Fehlerseite (HTTP 404) erhalten. Eine kleine Anzahl von URLs ist unten für Ihre Bequemlichkeit aufgelistet:

- `http://localhost:3000/`
- `http://localhost:3000/catalog`
- `http://localhost:3000/catalog/books`
- `http://localhost:3000/catalog/bookinstances/`
- `http://localhost:3000/catalog/authors/`
- `http://localhost:3000/catalog/genres/`
- `http://localhost:3000/catalog/book/5846437593935e2f8c2aa226`
- `http://localhost:3000/catalog/book/create`

## Zusammenfassung

Wir haben jetzt alle Routen für unsere Website erstellt, zusammen mit Dummy-Controller-Funktionen, die wir in späteren Artikeln mit einer vollständigen Implementierung füllen können. Unterwegs haben wir eine Menge grundlegender Informationen über Express-Routen, den Umgang mit Ausnahmen und einige Ansätze zur Strukturierung unserer Routen und Controller gelernt.

In unserem nächsten Artikel werden wir eine ordentliche Willkommensseite für die Website erstellen, indem wir Views (Templates) und Informationen verwenden, die in unseren Modellen gespeichert sind.

## Siehe auch

- [Grundlegendes Routing](https://expressjs.com/en/starter/basic-routing.html) (Express-Dokumentation)
- [Routing-Leitfaden](https://expressjs.com/en/guide/routing.html) (Express-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
