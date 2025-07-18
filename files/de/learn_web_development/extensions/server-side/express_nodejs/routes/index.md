---
title: "Express-Tutorial Teil 4: Routen und Controller"
short-title: "4: Routen und Controller"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/routes
l10n:
  sourceCommit: 8443cb34d9944d8eb8e2c5add598bec26ed6d21f
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

In diesem Tutorial richten wir Routen (URL-Verarbeitungscode) mit "Dummy"-Handler-Funktionen für alle Ressourcenendpunkte ein, die wir letztendlich auf der [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) Website benötigen werden. Am Ende haben wir eine modulare Struktur für unseren Routen-Verarbeitungscode, die wir in den folgenden Artikeln mit echten Handler-Funktionen erweitern können. Außerdem werden wir ein wirklich gutes Verständnis dafür haben, wie man mit Express modulare Routen erstellt!

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction">Express/Node-Einführung</a>.
        Schließen Sie die vorherigen Tutorial-Themen ab (einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose">Express-Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose)</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das Erstellen einfacher Routen verstehen.
        Alle unsere URL-Endpunkte einrichten.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Im [letzten Tutorial-Artikel](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose) haben wir _Mongoose_-Modelle definiert, um mit der Datenbank zu interagieren, und ein (eigenständiges) Skript verwendet, um einige anfängliche Bibliotheksdatensätze zu erstellen. Nun können wir den Code schreiben, um diese Informationen Benutzern zu präsentieren. Das Erste, was wir tun müssen, ist zu bestimmen, welche Informationen wir in unseren Seiten anzeigen möchten, und anschließend geeignete URLs für die Rückgabe dieser Ressourcen zu definieren. Dann müssen wir die Routen (URL-Handler) und Ansichten (Vorlagen) erstellen, um diese Seiten anzuzeigen.

Das unten stehende Diagramm erinnert an den Hauptdatenfluss und die Dinge, die implementiert werden müssen, wenn eine HTTP-Anfrage/Antwort bearbeitet wird. Zusätzlich zu den Ansichten und Routen zeigt das Diagramm "Controller" – Funktionen, die den Code zum Routing von Anfragen vom Code, der die Anfragen tatsächlich verarbeitet, trennen.

Da wir bereits die Modelle erstellt haben, müssen wir hauptsächlich Folgendes erstellen:

- "Routen", um die unterstützten Anfragen (und alle Informationen, die in Anfrage-URLs kodiert sind) an die entsprechenden Controller-Funktionen weiterzuleiten.
- Controller-Funktionen, um die angeforderten Daten von den Modellen abzurufen, eine HTML-Seite zu erstellen, die die Daten anzeigt, und diese zur Ansicht an den Benutzer zurückzugeben.
- Ansichten (Vorlagen), die von den Controllern verwendet werden, um die Daten darzustellen.

![Hauptdatenfluss-Diagramm eines MVC-Express-Servers: 'Routen' empfangen die HTTP-Anfragen, die an den Express-Server gesendet werden, und leiten sie an die entsprechende 'Controller'-Funktion weiter. Der Controller liest und schreibt Daten aus den Modellen. Modelle sind mit der Datenbank verbunden, um dem Server den Datenzugriff bereitzustellen. Controller verwenden 'Ansichten', auch Vorlagen genannt, um die Daten darzustellen. Der Controller sendet die HTML-HTTP-Antwort als HTTP-Antwort zurück an den Client.](mvc_express.png)

Letztendlich könnten wir Seiten haben, um Listen und Detailinformationen für Bücher, Genres, Autoren und Buchinstanzen anzuzeigen sowie Seiten, um Datensätze zu erstellen, zu aktualisieren und zu löschen. Das ist viel, um es in einem Artikel zu dokumentieren. Daher konzentriert sich der größte Teil dieses Artikels darauf, unsere Routen und Controller so einzurichten, dass sie "Dummy"-Inhalte zurückgeben. Wir werden die Controllermethoden in unseren folgenden Artikeln erweitern, um mit Modelldaten zu arbeiten.

Der erste Abschnitt unten bietet eine kurze "Einführung" in die Verwendung von Express [Router](https://expressjs.com/en/5x/api.html#router) Middleware. Wir werden dieses Wissen dann in den folgenden Abschnitten anwenden, wenn wir die LocalLibrary-Routen einrichten.

## Routen-Einführung

Eine Route ist ein Abschnitt von Express-Code, der ein HTTP-Verb (`GET`, `POST`, `PUT`, `DELETE`, usw.), einen URL-Pfad/ein URL-Muster und eine Funktion, die für das Muster zuständig ist, assoziiert.

Es gibt mehrere Möglichkeiten, Routen zu erstellen. In diesem Tutorial werden wir die [`express.Router`](https://expressjs.com/en/guide/routing.html#express-router) Middleware verwenden, da sie es uns ermöglicht, die Routen-Handler für einen bestimmten Teil einer Site zusammenzufassen und sie mit einem gemeinsamen Routen-Präfix zuzugreifen. Wir werden alle unsere bibliotheksbezogenen Routen in einem "catalog"-Modul halten, und falls wir Routen für die Verwaltung von Benutzerkonten oder andere Funktionen hinzufügen, können wir sie gesondert gruppieren.

> [!NOTE]
> Wir haben Express-Anwendungsrouten kurz in unserer [Express Einführung > Erstellen von Routen-Handlern](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#creating_route_handlers) besprochen. Abgesehen von der besseren Unterstützung für Modularisierung (wie im ersten Unterabschnitt unten besprochen) ist die Verwendung von _Router_ sehr ähnlich zur direkten Definition von Routen auf dem _Express-Anwendungsobjekt_.

Der Rest dieses Abschnitts gibt einen Überblick darüber, wie der `Router` verwendet werden kann, um die Routen zu definieren.

### Definieren und Verwenden separater Routenmodule

Der folgende Code liefert ein konkretes Beispiel dafür, wie wir ein Routenmodul erstellen und dann in einer _Express_ Anwendung verwenden können.

Zuerst erstellen wir Routen für ein Wiki in einem Modul namens **wiki.js**. Der Code importiert zuerst das Express-Anwendungsobjekt, verwendet es, um ein `Router`-Objekt zu erhalten, und fügt dann ein paar Routen mit der `get()`-Methode hinzu. Zu guter Letzt exportiert das Modul das `Router`-Objekt.

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

Um das Router-Modul in unserer Haupt-App-Datei zu verwenden, müssen wir zuerst das Routenmodul (**wiki.js**) mit `require()` einfügen. Dann rufen wir `use()` auf dem _Express_-Anwendungsobjekt auf, um den Router dem Middleware-Verarbeitungspfad hinzuzufügen, indem wir einen URL-Pfad 'wiki' spezifizieren.

```js
const wiki = require("./wiki.js");

// …
app.use("/wiki", wiki);
```

Die beiden in unserem Wiki-Routenmodul definierten Routen sind dann von `/wiki/` und `/wiki/about/` aus zugänglich.

### Routenfunktionen

Unser obiges Modul definiert ein paar typische Routenfunktionen. Die "about"-Route (unten reproduziert) wird mit der `Router.get()` Methode definiert, die nur auf HTTP-GET-Anfragen antwortet. Das erste Argument dieser Methode ist der URL-Pfad, während das zweite eine Callback-Funktion ist, die aufgerufen wird, wenn eine HTTP-GET-Anfrage mit dem Pfad empfangen wird.

```js
router.get("/about", (req, res) => {
  res.send("About this wiki");
});
```

Das Callback nimmt drei Argumente entgegen (normalerweise wie gezeigt benannt: `req`, `res`, `next`), die das HTTP-Anfrageobjekt, die HTTP-Antwort und die _next_-Funktion in der Middleware-Kette enthalten.

> [!NOTE]
> Router-Funktionen sind [Express-Middleware](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#using_middleware), was bedeutet, dass sie entweder die Anfrage abschließen (auf die Anfrage antworten) oder die `next`-Funktion in der Kette aufrufen müssen. Im obigen Fall schließen wir die Anfrage mit `send()` ab, daher wird das `next`-Argument nicht verwendet (und wir entscheiden uns, es nicht zu spezifizieren).
>
> Die Router-Funktion oben nimmt ein einzelnes Callback entgegen, aber Sie können so viele Callback-Argumente angeben, wie Sie möchten, oder ein Array von Callback-Funktionen. Jede Funktion ist Teil der Middleware-Kette und wird in der Reihenfolge aufgerufen, in der sie zur Kette hinzugefügt wird (es sei denn, eine vorherige Funktion schließt die Anfrage ab).

Die Callback-Funktion ruft [`send()`](https://expressjs.com/en/5x/api.html#res.send) für die Antwort auf, um den String "About this wiki" zurückzusenden, wenn wir eine GET-Anfrage mit dem Pfad (`/about`) erhalten. Es gibt eine [Reihe anderer Antwortmethoden](https://expressjs.com/en/guide/routing.html#response-methods), um den Anfrage-/Antwortzyklus zu beenden. Beispielsweise könnten Sie [`res.json()`](https://expressjs.com/en/5x/api.html#res.json) aufrufen, um eine JSON-Antwort zu senden, oder [`res.sendFile()`](https://expressjs.com/en/5x/api.html#res.sendFile), um eine Datei zu senden. Die Antwortmethode, die wir am häufigsten verwenden werden, während wir die Bibliothek aufbauen, ist [`render()`](https://expressjs.com/en/5x/api.html#res.render), die HTML-Dateien mit Vorlagen und Daten erstellt und zurückgibt — darüber werden wir in einem späteren Artikel viel mehr sprechen!

### HTTP-Verben

Die obigen Beispielrouten verwenden die `Router.get()` Methode, um auf HTTP-GET-Anfragen mit einem bestimmten Pfad zu antworten.

Der `Router` bietet auch Routenmöglichkeiten für alle anderen HTTP-Verben, die meist auf genau gleiche Weise verwendet werden: `post()`, `put()`, `delete()`, `options()`, `trace()`, `copy()`, `lock()`, `mkcol()`, `move()`, `purge()`, `propfind()`, `proppatch()`, `unlock()`, `report()`, `mkactivity()`, `checkout()`, `merge()`, `m-search()`, `notify()`, `subscribe()`, `unsubscribe()`, `patch()`, `search()`, und `connect()`.

Beispielsweise verhält sich der unten stehende Code genau wie die vorherige `/about`-Route, antwortet jedoch nur auf HTTP-POST-Anfragen.

```js
router.post("/about", (req, res) => {
  res.send("About this wiki");
});
```

### Routenpfade

Die Routenpfade definieren die Endpunkte, an denen Anfragen gestellt werden können. Die Beispiele, die wir bisher gesehen haben, waren nur Strings und wurden genau so verwendet, wie sie geschrieben sind: '/', '/about', '/book', '/any-random.path'.

Routenpfade können auch String-Muster sein. String-Muster verwenden eine Form von regulärem Ausdruck, um _Muster_ von Endpunkten zu definieren, die übereinstimmen.
Die meisten unserer Routen für die LocalLibrary werden Strings und keine regulären Ausdrücke verwenden.
Wir verwenden auch Routenparameter, wie im nächsten Abschnitt besprochen wird.

### Routenparameter

Routenparameter sind _benannte URL-Segmente_, die verwendet werden, um Werte an bestimmten Positionen in der URL zu erfassen. Die benannten Segmente haben einen Doppelpunkt vorangestellt, gefolgt von dem Namen (z.B., `/:your_parameter_name/`). Die erfassten Werte werden im `req.params` Objekt unter Verwendung der Namen der Parameter als Schlüssel gespeichert (z.B., `req.params.your_parameter_name`).

So zum Beispiel bei einer URL, die Informationen über Benutzer und Bücher enthält: `http://localhost:3000/users/34/books/8989`. Wir können diese Informationen wie unten gezeigt extrahieren, mit den `userId` und `bookId` Pfadparametern:

```js
app.get("/users/:userId/books/:bookId", (req, res) => {
  // Access userId via: req.params.userId
  // Access bookId via: req.params.bookId
  res.send(req.params);
});
```

> [!NOTE]
> Die URL _/book/create_ wird durch eine Route wie `/book/:bookId` übereinstimmen (weil `:bookId` ein Platzhalter für _jeden_ String ist, daher passt `create`). Die erste Route, die mit einer eingehenden URL übereinstimmt, wird verwendet. Wenn Sie also `/book/create` URLs spezifisch verarbeiten möchten, muss deren Routen-Handler vor Ihrer `/book/:bookId`-Route definiert werden.

Routenparameternamen (beispielsweise `bookId` oben) können beliebige gültige JavaScript-Identifier sein, die mit einem Buchstaben, `_`, oder `$` beginnen. Sie können Ziffern nach dem ersten Zeichen einschließen, aber keine Bindestriche und Leerzeichen.
Sie können auch Namen verwenden, die keine gültigen JavaScript-Identifier sind, einschließlich Leerzeichen, Bindestrichen, Emojis oder anderen Zeichen, aber Sie müssen sie mit einem Anführungszeichen definieren und mit der Klammernnotation darauf zugreifen.
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

Wildcard-Parameter passen zu einem oder mehreren Zeichen über mehrere Segmente und geben jedes Segment als Wert in einem Array zurück.
Sie werden auf die gleiche Weise wie reguläre Parameter definiert, sind jedoch mit einem Sternchen vorangestellt.

So zum Beispiel bei der URL `http://localhost:3000/users/34/books/8989`, können wir alle Informationen nach `users/` mit dem `example` Wildcard extrahieren:

```js
app.get("/users/*example", (req, res) => {
  // req.params would contain { "example": ["34", "books", "8989"]}
  res.send(req.params);
});
```

### Optionale Teile

Klammern können verwendet werden, um Teile des Pfads zu definieren, die optional sind.
Zum Beispiel, unten stimmen wir mit einem Dateinamen mit beliebiger Erweiterung (oder keiner) überein.

```js
app.get("/file/:filename{.:ext}", (req, res) => {
  // Given URL: http://localhost:3000/file/somefile.md`
  // req.params would contain { "filename": "somefile", "ext": "md"}
  res.send(req.params);
});
```

### Reservierte Zeichen

Die folgenden Zeichen sind reserviert: `(()[]?+!)`.
Wenn Sie sie verwenden möchten, müssen Sie sie mit einem Backslash (`\`) maskieren.

Außerdem können Sie das Pipeline-Zeichen (`|`) in einem regulären Ausdruck nicht verwenden.

Das ist alles, was Sie benötigen, um mit Routen zu beginnen.
Falls notwendig, können Sie mehr Informationen in den Express-Dokumentationen finden: [Grundlegendes Routing](https://expressjs.com/en/starter/basic-routing.html) und [Routing-Leitfaden](https://expressjs.com/en/guide/routing.html). Die folgenden Abschnitte zeigen, wie wir unsere Routen und Controller für die LocalLibrary einrichten werden.

### Umgang mit Fehlern und Ausnahmen in den Routenfunktionen

Die zuvor gezeigten Routenfunktionen haben alle Argumente `req` und `res`, die die Anfrage und die Antwort darstellen.
Routenfunktionen wird auch ein drittes Argument, `next`, übergeben, das eine Callback-Funktion enthält, die aufgerufen werden kann, um Fehler oder Ausnahmen an die Express-Middleware-Kette weiterzugeben, wo sie schließlich zu Ihrem globalen Fehlerbehandlungscode propagiert werden.

Ab Express 5 wird `next` automatisch mit dem Ablehnungswert aufgerufen, wenn ein Routen-Handler ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt, das danach abgelehnt wird; daher ist kein Fehlerbehandlungscode in Routenfunktionen erforderlich, wenn Promises verwendet werden.
Dies führt zu sehr kompaktem Code bei der Arbeit mit asynchronen, auf Promises basierenden APIs, insbesondere bei der Verwendung von [`async` und `await`](/de/docs/Learn_web_development/Extensions/Async_JS/Promises#async_and_await).

Zum Beispiel verwendet der folgende Code die `find()`-Methode, um eine Datenbank abzufragen und dann das Ergebnis darzustellen.

```js
exports.get("/about", async (req, res, next) => {
  const successfulResult = await About.find({}).exec();
  res.render("about_view", { title: "About", list: successfulResult });
});
```

Der untenstehende Code zeigt das gleiche Beispiel mit einer Promise-Kette.
Beachten Sie, dass Sie, wenn Sie wollten, den Fehler mit `catch()` abfangen und eine eigene Anpassung implementieren könnten.

```js
exports.get("/about", (req, res, next) => {
  // Removed 'async'
  return About.find({})
    .exec()
    .then((successfulResult) => {
      res.render("about_view", { title: "About", list: successfulResult });
    });
  /*
    .catch(err => {
      next(err);
    });
    */
});
```

> [!NOTE]
> Die meisten modernen APIs sind asynchron und auf Promises basierend, daher ist die Fehlerbehandlung oft so unkompliziert.
> Sicherlich ist das alles, was Sie wirklich _wissen_ müssen, über die Fehlerbehandlung für dieses Tutorial!

Express 5 fängt automatisch alle Ausnahmen ab und leitet sie weiter, wenn sie in synchronem Code auftreten:

```js
app.get("/", (req, res) => {
  // Express will catch this
  throw new Error("SynchronousException");
});
```

Allerdings müssen Sie Ausnahmen, die in asynchronem Code auftreten, den die Routen-Handler oder Middleware aufrufen, mit [`catch()`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) behandeln. Diese werden nicht vom Standardcode abgefangen:

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

Wenn Sie schließlich den älteren Stil asynchroner Methoden verwenden, die ein Ergebnis oder einen Fehler an eine Callback-Funktion zurückgeben, müssen Sie den Fehler selbst weitergeben.
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

Für mehr Informationen siehe [Fehlerbehandlung](https://expressjs.com/en/guide/error-handling.html).

## Routen, die für die LocalLibrary benötigt werden

Die URLs, die wir letztendlich für unsere Seiten benötigen, sind unten aufgeführt, wobei _object_ durch den Namen jedes unserer Modelle (Buch, Buchinstanz, Genre, Autor) ersetzt wird, _objects_ der Plural von Objekt ist, und _id_ das einzigartige Instanzfeld (`_id`) ist, das standardmäßig jeder Mongoose-Modellinstanz zugewiesen wird.

- `catalog/` — Die Start-/Index-Seite.
- `catalog/<objects>/` — Die Liste aller Bücher, Buchinstanzen, Genres oder Autoren (z.B., /`catalog/books/`, /`catalog/genres/`, etc.)
- `catalog/<object>/<id>` — Die Detailseite für ein bestimmtes Buch, eine Buchinstanz, ein Genre oder einen Autor mit dem angegebenen `_id` Feldwert (z.B., `/catalog/book/584493c1f4887f06c0e67d37)`).
- `catalog/<object>/create` — Das Formular, um ein neues Buch, eine Buchinstanz, ein Genre oder einen Autor zu erstellen (z.B., `/catalog/book/create)`).
- `catalog/<object>/<id>/update` — Das Formular, um ein bestimmtes Buch, eine Buchinstanz, ein Genre oder einen Autor mit dem angegebenen `_id` Feldwert zu aktualisieren (z.B., `/catalog/book/584493c1f4887f06c0e67d37/update)`).
- `catalog/<object>/<id>/delete` — Das Formular, um ein bestimmtes Buch, eine Buchinstanz, ein Genre oder einen Autor mit dem angegebenen `_id` Feldwert zu löschen (z.B., `/catalog/book/584493c1f4887f06c0e67d37/delete)`).

Die erste Startseite und die Listen-Seiten kodieren keine zusätzlichen Informationen. Während die zurückgegebenen Ergebnisse von dem Modelltyp und dem Inhalt in der Datenbank abhängen, werden die durchgeführten Abfragen, um die Informationen zu erhalten, immer gleich sein (ähnlich wird der Code zur Erstellung von Objekten immer ähnlich sein).

Im Gegensatz dazu werden die anderen URLs verwendet, um auf ein spezifisches Dokument/eine Modellinstanz zu wirken — diese kodieren die Identität des Elements in der URL (oben als `<id>` dargestellt). Wir verwenden Pfadparameter, um die kodierten Informationen zu extrahieren und an den Routen-Handler zu übergeben (und in einem späteren Artikel verwenden wir dies, um dynamisch zu bestimmen, welche Informationen aus der Datenbank abgerufen werden sollen). Indem wir die Informationen in unsere URL kodieren, benötigen wir nur eine Route für jede Ressource eines bestimmten Typs (z.B., eine Route, um die Darstellung jedes einzelnen Buchs zu behandeln).

> [!NOTE]
> Express erlaubt Ihnen, Ihre URLs beliebig zu konstruieren — Sie können Informationen wie oben gezeigt im Hauptteil der URL kodieren oder URL `GET`-Parameter verwenden (z.B., `/book/?id=6`). Welche Methode auch immer Sie verwenden, die URLs sollten sauber, logisch und gut lesbar sein ([schauen Sie sich den W3C-Rat hier an](https://www.w3.org/Provider/Style/URI)).

Als Nächstes erstellen wir unsere Routen-Handler-Callback-Funktionen und den Routencode für alle oben genannten URLs.

## Erstellen der Routen-Handler-Callback-Funktionen

Bevor wir unsere Routen definieren, erstellen wir zunächst alle Dummy-/Skelett-Callback-Funktionen, die sie aufrufen werden. Die Callbacks werden in separaten "Controller"-Modulen für `Book`, `BookInstance`, `Genre` und `Author` gespeichert (Sie können jede Datei-/Modulstruktur verwenden, aber dies scheint eine geeignete Granularität für dieses Projekt zu sein).

Beginnen Sie damit, ein Verzeichnis für unsere Controller im Projektstammverzeichnis zu erstellen (**/controllers**) und dann separate Controller-Dateien/Module für die Bearbeitung jedes der Modelle zu erstellen:

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

Das Modul erfordert zunächst das `Author` Modell, das wir später verwenden, um auf unsere Daten zuzugreifen und diese zu aktualisieren.
Es exportiert dann Funktionen für jede der URLs, die wir bearbeiten möchten.
Beachten Sie, dass die Erstellungs-, Aktualisierungs- und Löschoperationen Formulare verwenden und daher auch zusätzliche Methoden zur Bearbeitung von Formular-Post-Anfragen haben — wir werden diese Methoden im späteren "Formular-Artikel" diskutieren.

Die Funktionen antworten mit einem String, der angibt, dass die zugehörige Seite noch nicht erstellt wurde.
Wenn eine Controller-Funktion Pfadparameter erhalten soll, werden diese im Nachrichten-String ausgegeben (siehe `req.params.id` oben).

#### BookInstance-Controller

Öffnen Sie die Datei **/controllers/bookinstanceController.js** und kopieren Sie den folgenden Code (dies folgt dem gleichen Muster wie das `Author` Controller-Modul):

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

Öffnen Sie die Datei **/controllers/genreController.js** und kopieren Sie den folgenden Text (dies folgt dem gleichen Muster wie die `Author` und `BookInstance` Dateien):

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
Dies folgt dem gleichen Muster wie die anderen Controller-Module, hat aber zusätzlich eine `index()` Funktion zum Darstellen der Webseite der Begrüßungsseite:

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

Als nächstes erstellen wir _Routen_ für alle URLs [die von der LocalLibrary-Website benötigt werden](#routen,_die_für_die_locallibrary_benötigt_werden), die die Controller-Funktionen aufrufen, die wir in den vorherigen Abschnitten definiert haben.

Das Grundgerüst enthält bereits einen **./routes** Ordner mit Routen für den _index_ und die _users_.
Erstellen Sie eine weitere Routen-Datei — **catalog.js** — innerhalb dieses Ordners, wie gezeigt.

```plain
/express-locallibrary-tutorial # the project root
  /routes
    index.js
    users.js
    catalog.js
```

Öffnen Sie **/routes/catalog.js** und kopieren Sie den unten stehenden Code hinein:

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

Das Modul erfordert Express und verwendet es dann, um ein `Router`-Objekt zu erstellen. Die Routen werden alle auf dem Router eingerichtet, der dann exportiert wird.

Die Routen werden entweder mit den Methoden `.get()` oder `.post()` auf dem Router-Objekt definiert. Alle Pfade sind mit Strings definiert (wir verwenden keine String-Muster oder reguläre Ausdrücke).
Routen, die auf einer spezifischen Ressource agieren (z.B., Buch), verwenden Pfadparameter, um die Objekt-ID aus der URL zu erhalten.

Die Handler-Funktionen werden alle aus den Controller-Modulen importiert, die wir im vorherigen Abschnitt erstellt haben.

### Aktualisieren des Index-Routenmoduls

Wir haben alle unsere neuen Routen eingerichtet, aber wir haben immer noch eine Route zur ursprünglichen Seite. Lassen Sie uns stattdessen auf die neue Indexseite umleiten, die wir unter dem Pfad `/catalog` erstellt haben.

Öffnen Sie **/routes/index.js** und ersetzen Sie die bestehende Route mit der unten stehenden Funktion.

```js
// GET home page.
router.get("/", (req, res) => {
  res.redirect("/catalog");
});
```

> [!NOTE]
> Dies ist unsere erste Nutzung der [redirect()](https://expressjs.com/en/5x/api.html#res.redirect) Antwortmethode. Dies leitet auf die angegebene Seite um und sendet standardmäßig den HTTP-Statuscode "302 Found". Sie können den zurückgegebenen Statuscode bei Bedarf ändern und entweder absolute oder relative Pfade angeben.

### Aktualisieren der app.js

Der letzte Schritt besteht darin, die Routen in die Middleware-Kette aufzunehmen.
Wir tun dies in `app.js`.

Öffnen Sie **app.js** und importieren Sie die Katalogroute unter den anderen Routen (fügen Sie die dritte Zeile hinzu, wie unten gezeigt, unter den anderen beiden, die bereits in der Datei vorhanden sein sollten):

```js
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const catalogRouter = require("./routes/catalog"); // Import routes for "catalog" area of site
```

Fügen Sie als Nächstes die Katalogroute zum Middleware-Stack unter den anderen Routen hinzu (fügen Sie die dritte Zeile hinzu, wie unten gezeigt, unter den anderen beiden, die bereits in der Datei vorhanden sein sollten):

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/catalog", catalogRouter); // Add catalog routes to middleware chain.
```

> [!NOTE]
> Wir haben unser Katalogmodul unter einem Pfad `/catalog` hinzugefügt. Dies wird allen im Katalogmodul definierten Pfaden vorangestellt. Wenn Sie also zum Beispiel eine Liste von Büchern aufrufen möchten, wird die URL: `/catalog/books/` sein.

Das war's. Wir sollten jetzt Routen und Skelettfunktionen für alle URLs eingerichtet haben, die wir letztendlich auf der LocalLibrary-Website unterstützen werden.

### Testen der Routen

Um die Routen zu testen, starten Sie zuerst die Website mit Ihrer üblichen Methode

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

Navigieren Sie dann zu einer Reihe von LocalLibrary-URLs und überprüfen Sie, dass Sie keine Fehlerseite (HTTP 404) erhalten. Eine kleine Auswahl von URLs wird nachfolgend für Ihre Bequemlichkeit aufgeführt:

- `http://localhost:3000/`
- `http://localhost:3000/catalog`
- `http://localhost:3000/catalog/books`
- `http://localhost:3000/catalog/bookinstances/`
- `http://localhost:3000/catalog/authors/`
- `http://localhost:3000/catalog/genres/`
- `http://localhost:3000/catalog/book/5846437593935e2f8c2aa226`
- `http://localhost:3000/catalog/book/create`

## Zusammenfassung

Wir haben jetzt alle Routen für unsere Seite erstellt, zusammen mit Dummy-Controller-Funktionen, die wir in späteren Artikeln mit einer vollständigen Implementierung füllen können. Unterwegs haben wir viel grundlegende Informationen über Express-Routen, das Behandeln von Ausnahmen und einige Ansätze zur Strukturierung unserer Routen und Controller gelernt.

In unserem nächsten Artikel werden wir eine richtige Begrüßungsseite für die Seite erstellen, unter Verwendung von Ansichten (Vorlagen) und Informationen, die in unseren Modellen gespeichert sind.

## Siehe auch

- [Grundlegendes Routing](https://expressjs.com/en/starter/basic-routing.html) (Express-Dokumentation)
- [Routing-Leitfaden](https://expressjs.com/en/guide/routing.html) (Express-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
