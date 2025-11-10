---
title: "Express Tutorial Teil 4: Routen und Controller"
short-title: "4: Routen und Controller"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/routes
l10n:
  sourceCommit: bdb97b3e01499ce52f02caa3f51d6dd245a48782
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

In diesem Tutorial richten wir Routen (URL-Verarbeitungscode) mit "Dummy"-Handlerfunktionen für alle Ressourcenendpunkte ein, die wir eventual auf der [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website)-Website benötigen werden. Nach Abschluss werden wir eine modulare Struktur für unseren Routenverarbeitungscode haben, die wir in den folgenden Artikeln mit echten Handlerfunktionen erweitern können. Wir werden auch ein sehr gutes Verständnis dafür haben, wie man modulare Routen mit Express erstellt!

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction">Express/Node-Einführung</a>.
        Schließen Sie die vorherigen Tutorial-Themen ab (einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose">Express Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose)</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Verstehen, wie man einfache Routen erstellt.
        Einrichten aller unserer URL-Endpunkte.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Im [letzten Tutorial-Artikel](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose) haben wir _Mongoose_-Modelle definiert, um mit der Datenbank zu interagieren, und ein (eigenständiges) Skript verwendet, um einige anfängliche Bibliotheksdatensätze zu erstellen. Jetzt können wir den Code schreiben, um diese Informationen den Benutzern zu präsentieren. Das Erste, was wir tun müssen, ist zu bestimmen, welche Informationen wir auf unseren Seiten anzeigen möchten, und dann geeignete URLs zu definieren, um diese Ressourcen zurückzugeben. Dann müssen wir die Routen (URL-Handler) und Ansichten (Templates) erstellen, um diese Seiten anzuzeigen.

Das untenstehende Diagramm dient als Erinnerung an den Hauptdatenfluss und die Punkte, die bei der Bearbeitung einer HTTP-Anforderung/-Antwort implementiert werden müssen. Zusätzlich zu den Ansichten und Routen zeigt das Diagramm "Controller" — Funktionen, die den Code zur Routenanfrage von dem Code trennen, der die Anfragen tatsächlich verarbeitet.

Da wir bereits die Modelle erstellt haben, müssen wir hauptsächlich Folgendes erstellen:

- "Routen", um die unterstützten Anfragen (und alle in den Anforderungs-URLs kodierten Informationen) an die entsprechenden Controller-Funktionen weiterzuleiten.
- Controller-Funktionen, um die angeforderten Daten von den Modellen zu erhalten, eine HTML-Seite zu erstellen, die die Daten anzeigt, und sie dem Benutzer zur Ansicht im Browser zurückzugeben.
- Ansichten (Templates), die von den Controllern verwendet werden, um die Daten darzustellen.

![Hauptdatenflussdiagramm eines MVC-Express-Servers: 'Routen' empfangen die an den Express-Server gesendeten HTTP-Anfragen und leiten sie an die entsprechenden 'Controller'-Funktionen weiter. Der Controller liest und schreibt Daten von den Modellen. Modelle sind mit der Datenbank verbunden, um dem Server Datenzugriff zu ermöglichen. Controller verwenden 'Ansichten', auch Templates genannt, um die Daten darzustellen. Der Controller sendet die HTML-HTTP-Antwort als HTTP-Antwort zurück an den Client.](mvc_express.png)

Letztendlich könnten wir Seiten haben, die Listen und Detailinformationen für Bücher, Genres, Autoren und Buchinstanzen anzeigen, zusammen mit Seiten zum Erstellen, Aktualisieren und Löschen von Datensätzen. Das ist eine Menge, um es in einem Artikel zu dokumentieren. Daher wird sich der Großteil dieses Artikels darauf konzentrieren, unsere Routen und Controller so einzurichten, dass sie "Dummy"-Inhalte zurückgeben. Wir werden die Controller-Methoden in unseren anschließenden Artikeln erweitern, um mit Modelldaten zu arbeiten.

Der erste Abschnitt unten bietet einen kurzen "Primer" dazu, wie die Express-[Router](https://expressjs.com/en/5x/api.html#router)-Middleware verwendet wird. Dieses Wissen werden wir dann in den folgenden Abschnitten nutzen, wenn wir die LocalLibrary-Routen einrichten.

## Einführung in Routen

Eine Route ist ein Abschnitt von Express-Code, der ein HTTP-Verb (`GET`, `POST`, `PUT`, `DELETE`, usw.), einen URL-Pfad/-Muster und eine Funktion assoziiert, die aufgerufen wird, um dieses Muster zu bearbeiten.

Es gibt mehrere Möglichkeiten, Routen zu erstellen. Für dieses Tutorial werden wir die [`express.Router`](https://expressjs.com/en/guide/routing.html#express-router)-Middleware verwenden, da sie uns ermöglicht, die Routen-Handler für einen bestimmten Teil einer Site zusammenzufassen und sie mit einem gemeinsamen Routen-Präfix zuzugreifen. Wir werden alle unsere bibliotheksbezogenen Routen in einem "catalog"-Modul belassen, und wenn wir Routen zum Bearbeiten von Benutzerkonten oder anderen Funktionen hinzufügen, können wir sie separat gruppiert halten.

> [!NOTE]
> Wir haben Express-Anwendungsrouten kurz in unserer [Express-Einführung > Erstellen von Routenhandlern](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#creating_route_handlers) besprochen. Andere als der bessere Support für Modularisierung (wie im ersten Unterabschnitt unten besprochen), ist die Verwendung von _Router_ sehr ähnlich wie das direkte Definieren von Routen auf dem _Express-Anwendungsobjekt_.

Der Rest dieses Abschnitts bietet einen Überblick darüber, wie der `Router` verwendet werden kann, um die Routen zu definieren.

### Definieren und Verwenden separater Routenmodule

Der untenstehende Code bietet ein konkretes Beispiel dafür, wie wir ein Routemodul erstellen und es dann in einer _Express_-Anwendung verwenden können.

Zuerst erstellen wir Routen für ein Wiki in einem Modul namens **wiki.js**. Der Code importiert zunächst das Express-Anwendungsobjekt, verwendet es, um ein `Router`-Objekt zu erhalten und fügt dann ein paar Routen hinzu, indem er die `get()`-Methode verwendet. Zuletzt exportiert das Modul das `Router`-Objekt.

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
> Oben definieren wir unsere Routen-Handler-Callbacks direkt in den Router-Funktionen. In der LocalLibrary werden wir diese Callbacks in einem separaten Controllermodul definieren.

Um das Routermodul in unserer Haupt-App-Datei zu verwenden, `require()` wir zuerst das Routemodul (**wiki.js**). Dann rufen wir `use()` auf der _Express_-Anwendung auf, um den Router zum Middleware-Verarbeitungspfad hinzuzufügen und geben einen URL-Pfad von 'wiki' an.

```js
const wiki = require("./wiki.js");

// …
app.use("/wiki", wiki);
```

Die beiden in unserem Wiki-Routemodul definierten Routen sind dann von `/wiki/` und `/wiki/about/` aus zugänglich.

### Routenfunktionen

Das Modul oben definiert ein paar typische Routenfunktionen. Die "about"-Route (unten reproduziert) wird mit der `Router.get()`-Methode definiert, die nur auf HTTP-GET-Anfragen antwortet. Das erste Argument dieser Methode ist der URL-Pfad, während das zweite eine Callback-Funktion ist, die aufgerufen wird, wenn eine HTTP-GET-Anfrage mit dem Pfad empfangen wird.

```js
router.get("/about", (req, res) => {
  res.send("About this wiki");
});
```

Das Callback nimmt drei Argumente entgegen (normalerweise wie gezeigt benannt: `req`, `res`, `next`), die das HTTP-Anfrage-Objekt, die HTTP-Antwort und die _nächste_ Funktion in der Middleware-Kette enthalten.

> [!NOTE]
> Router-Funktionen sind [Express-Middleware](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#using_middleware), was bedeutet, dass sie entweder die Anfrage abschließen (darauf antworten) oder die `next`-Funktion in der Kette aufrufen müssen. Im obigen Fall schließen wir die Anfrage mit `send()` ab, sodass das `next`-Argument nicht verwendet wird (und wir entscheiden uns, es nicht anzugeben).
>
> Die obenstehende Router-Funktion nimmt ein einzelnes Callback an, Sie können jedoch beliebig viele Callback-Argumente angeben oder ein Array von Callback-Funktionen. Jede Funktion ist Teil der Middleware-Kette und wird in der Reihenfolge aufgerufen, in der sie zur Kette hinzugefügt wird (es sei denn, eine vorherige Funktion schließt die Anfrage ab).

Die Callback-Funktion ruft `send()` auf der Antwort auf, um die Zeichenkette "About this wiki" zurückzugeben, wenn wir eine GET-Anfrage mit dem Pfad (`/about`) erhalten. Es gibt eine [Reihe anderer Antwortmethoden](https://expressjs.com/en/guide/routing.html#response-methods), um den Anforderungs-/Antwortzyklus zu beenden. Beispielsweise könnten Sie `res.json()` aufrufen, um eine JSON-Antwort zu senden, oder `res.sendFile()`, um eine Datei zu senden. Die Antwortmethode, die wir am häufigsten verwenden werden, während wir die Bibliothek aufbauen, ist `render()`, die HTML-Dateien mit Hilfe von Templates und Daten erstellt — darüber werden wir in einem späteren Artikel noch viel mehr sprechen!

### HTTP-Verben

Die obigen Beispielrouten verwenden die `Router.get()`-Methode, um auf HTTP-GET-Anfragen mit einem bestimmten Pfad zu antworten.

Der `Router` bietet auch Routenmethoden für alle anderen HTTP-Verben, die meistens auf dieselbe Weise verwendet werden: `post()`, `put()`, `delete()`, `options()`, `trace()`, `copy()`, `lock()`, `mkcol()`, `move()`, `purge()`, `propfind()`, `proppatch()`, `unlock()`, `report()`, `mkactivity()`, `checkout()`, `merge()`, `m-search()`, `notify()`, `subscribe()`, `unsubscribe()`, `patch()`, `search()` und `connect()`.

Das nachstehende Beispiel zeigt, dass der Code genauso funktioniert wie die vorherige `/about`-Route, jedoch nur auf HTTP-POST-Anfragen reagiert.

```js
router.post("/about", (req, res) => {
  res.send("About this wiki");
});
```

### Routenpfade

Die Routenpfade definieren die Endpunkte, an denen Anfragen gestellt werden können. Die Beispiele, die wir bisher gesehen haben, waren nur Zeichenketten und werden genau so verwendet, wie sie geschrieben sind: '/', '/about', '/book', '/any-random.path'.

Routenpfade können auch Zeichenkettenmuster sein. Zeichenkettenmuster verwenden eine Form von regulärer Ausdruckssyntax, um _Muster_ von Endpunkten zu definieren, die übereinstimmen.
Die meisten unserer Routen für die LocalLibrary werden Zeichenketten und keine regulären Ausdrücke verwenden.
Wir werden auch Routenparameter verwenden, wie im nächsten Abschnitt besprochen.

### Routenparameter

Routenparameter sind _benannte URL-Segmente_, die verwendet werden, um Werte an bestimmten Positionen in der URL zu erfassen. Die benannten Segmente werden mit einem Doppelpunkt vorangestellt und dann der Name (z.B. `/:your_parameter_name/`). Die erfassten Werte werden im `req.params`-Objekt unter Verwendung der Parameternamen als Schlüssel gespeichert (z.B. `req.params.your_parameter_name`).

Betrachten Sie zum Beispiel eine URL, die codierte Informationen über Benutzer und Bücher enthält: `http://localhost:3000/users/34/books/8989`. Wir können diese Informationen wie unten gezeigt extrahieren, mit den Pfadparametern `userId` und `bookId`:

```js
app.get("/users/:userId/books/:bookId", (req, res) => {
  // Access userId via: req.params.userId
  // Access bookId via: req.params.bookId
  res.send(req.params);
});
```

> [!NOTE]
> Die URL _/book/create_ wird von einer Route wie `/book/:bookId` übereinstimmt (da `:bookId` ein Platzhalter für _jede_ Zeichenkette ist, passt also `create`). Die erste Route, die mit einer eingehenden URL übereinstimmt, wird verwendet, also falls Sie `/book/create`-URLs konkret verarbeiten wollen, muss ihr Routen-Handler vor Ihrer `/book/:bookId`-Route definiert sein.

Routenparameternamen (zum Beispiel `bookId`, oben) können beliebige gültige JavaScript-Bezeichner sein, die mit einem Buchstaben, `_`, oder `$` beginnen. Sie können Ziffern nach dem ersten Zeichen einbeziehen, aber keine Bindestriche und Leerzeichen.
Sie können auch Namen verwenden, die keine gültigen JavaScript-Bezeichner sind, einschließlich Leerzeichen, Bindestrichen, Emoticons oder anderen Zeichen, aber Sie müssen sie mit einer Zeichenkette definieren und mit der Punktnotation darauf zugreifen.
Beispiel:

```js
app.get('/users/:"user id"/books/:"book-id"', (req, res) => {
  // Access quoted param using bracket notation
  const user = req.params["user id"];
  const book = req.params["book-id"];
  res.send({ user, book });
});
```

### Platzhalter

Platzhalterparameter stimmen mit einem oder mehreren Zeichen über mehrere Segmente überein und geben jedes Segment als Wert in einem Array zurück.
Sie werden auf die gleiche Weise wie reguläre Parameter definiert, aber einem Sternchen wird vorangestellt.

Angenommen, die URL lautet `http://localhost:3000/users/34/books/8989`, so können wir alle Informationen nach `users/` mit dem Platzhalter `example` extrahieren:

```js
app.get("/users/*example", (req, res) => {
  // req.params would contain { "example": ["34", "books", "8989"]}
  res.send(req.params);
});
```

### Optionale Teile

Klammern können verwendet werden, um Teile des Pfads zu definieren, die optional sind.
Beispielsweise passen wir unten einen Dateinamen mit beliebiger Erweiterung (oder ohne) an.

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

Sie können das Pipe-Zeichen (`|`) auch nicht in einem regulären Ausdruck verwenden.

Das ist alles, was Sie benötigen, um mit Routen zu starten.
Falls nötig, finden Sie mehr Informationen in den Express-Dokumentationen: [Grundlegendes Routing](https://expressjs.com/en/starter/basic-routing.html) und [Leitfaden zum Routing](https://expressjs.com/en/guide/routing.html). Die folgenden Abschnitte zeigen, wie wir die Routen und Controller für die LocalLibrary einrichten werden.

### Fehler- und Ausnahmebehandlung in den Routenfunktionen

Die zuvor gezeigten Routenfunktionen haben alle die Argumente `req` und `res`, die jeweils die Anfrage und die Antwort repräsentieren.
Routenfunktionen erhalten auch ein drittes Argument, `next`, das eine Callback-Funktion enthält, die aufgerufen werden kann, um Fehler oder Ausnahmen an die Express-Middleware-Kette zu übergeben, wo sie schließlich zu Ihrem globalen Fehlerbehandlungscode propagiert werden.

Ab Express 5 wird `next` automatisch mit dem Ablehnungswert aufgerufen, wenn ein Routenhandler ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt, das anschließend abgelehnt wird; daher ist kein Fehlerbehandlungscode in Routenfunktionen erforderlich, wenn Promises verwendet werden.
Dies führt zu sehr kompaktem Code, wenn mit asynchronen, auf Promises basierenden APIs gearbeitet wird, insbesondere beim Verwenden von [`async` und `await`](/de/docs/Learn_web_development/Extensions/Async_JS/Promises#async_and_await).

Das folgende Codebeispiel verwendet die Methode `find()`, um eine Datenbank abzufragen und dann das Ergebnis darzustellen.

```js
exports.get("/about", async (req, res, next) => {
  const successfulResult = await About.find({}).exec();
  res.render("about_view", { title: "About", list: successfulResult });
});
```

Der Code unten zeigt dasselbe Beispiel mit einer Promise-Kette.
Beachten Sie, dass Sie, wenn Sie wollten, den Fehler `catch()` könnten und Ihre eigene individuelle Behandlung implementieren könnten.

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
> Die meisten modernen APIs sind asynchron und basieren auf Promises, daher ist die Fehlerbehandlung oft so einfach.
> Das ist sicherlich alles, was Sie wirklich _wissen_ müssen über Fehlerbehandlung für dieses Tutorial!

Express 5 fängt automatisch Ausnahmen ein, die in synchronem Code geworfen werden, und leitet sie weiter:

```js
app.get("/", (req, res) => {
  // Express will catch this
  throw new Error("SynchronousException");
});
```

Sie müssen jedoch Ausnahmen, die im asynchronen Code von Routenhandlern oder Middleware-Handlern auftreten, mit einem [`catch()`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block verarbeiten. Diese werden nicht vom Standardcode abgefangen:

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

Zum Schluss, wenn Sie den älteren Stil asynchroner Methoden verwenden, die einen Fehler oder ein Ergebnis in einer Callback-Funktion zurückgeben, dann müssen Sie den Fehler selbst weitergeben.
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

Weitere Informationen finden Sie unter [Fehlerbehandlung](https://expressjs.com/en/guide/error-handling.html).

## Routen, die für die LocalLibrary benötigt werden

Die URLs, die wir letztendlich für unsere Seiten benötigen, sind unten aufgelistet, wobei _object_ durch den Namen jedes unserer Modelle (Buch, Buchinstanz, Genre, Autor) ersetzt wird, und _objects_ die Mehrzahl von object ist und _id_ das eindeutige Instanzfeld (`_id`), das jedem Mongoose-Modellinstanz standardmäßig zugewiesen wird.

- `catalog/` — Die Startseite/Indexseite.
- `catalog/<objects>/` — Die Liste aller Bücher, Buchinstanzen, Genres oder Autoren (z.B. /`catalog/books/`, /`catalog/genres/`, usw.)
- `catalog/<object>/<id>` — Die Detailseite für ein bestimmtes Buch, eine Buchinstanz, ein Genre oder einen Autoren mit dem angegebenen `_id`-Feldwert (z.B. `/catalog/book/584493c1f4887f06c0e67d37)`).
- `catalog/<object>/create` — Das Formular zum Erstellen eines neuen Buches, einer Buchinstanz, eines Genres oder eines Autors (z.B. `/catalog/book/create)`).
- `catalog/<object>/<id>/update` — Das Formular zum Aktualisieren eines bestimmten Buches, einer Buchinstanz, eines Genres oder eines Autors mit dem angegebenen `_id`-Feldwert (z.B. `/catalog/book/584493c1f4887f06c0e67d37/update)`).
- `catalog/<object>/<id>/delete` — Das Formular zum Löschen eines bestimmten Buches, einer Buchinstanz, eines Genres oder eines Autors mit dem angegebenen `_id`-Feldwert (z.B. `/catalog/book/584493c1f4887f06c0e67d37/delete)`).

Die ersten Start- und Übersichtsseiten enkodieren keine zusätzlichen Informationen. Während die zurückgegeben Ergebnisse von Modelltyp und dem Inhalt in der Datenbank abhängen, werden die Abfragen, um die Informationen zu erhalten, immer gleich sein (ähnlich wird der Code für das Erstellen von Objekten immer ähnlich sein).

Im Gegensatz dazu werden die anderen URLs verwendet, um auf ein bestimmtes Dokument/Modellinstanz zu wirken—diese kodieren die Identität des Elements in der URL (wie oben mit `<id>` gezeigt). Wir werden Pfadparameter verwenden, um die kodierten Informationen zu extrahieren und an den Routenhandler weiterzuleiten (und in einem späteren Artikel verwenden wir diese, um dynamisch zu bestimmen, welche Informationen aus der Datenbank abgerufen werden sollen). Indem wir die Informationen in unserer URL kodieren, benötigen wir nur eine Route für jede Ressource eines bestimmten Typs (z.B. eine Route, um die Anzeige eines einzelnen Buchartikels zu bearbeiten).

> [!NOTE]
> Express erlaubt es Ihnen, Ihre URLs beliebig zu gestalten – Sie können Informationen im Hauptteil der URL wie oben gezeigt enkodieren oder URL-`GET`-Parameter verwenden (z.B. `/book/?id=6`). Unabhängig davon, welchen Ansatz Sie verwenden, sollten die URLs sauber, logisch und lesbar gehalten werden ([sehen Sie sich den W3C-Rat hier an](https://www.w3.org/Provider/Style/URI)).

Als Nächstes erstellen wir unsere Routenhandler-Callback-Funktionen und Routen-Code für alle oben genannten URLs.

## Erstellen Sie die Routenhandler-Callback-Funktionen

Bevor wir unsere Routen definieren, erstellen wir zuerst alle Dummy-/Skelett-Callback-Funktionen, die sie aufrufen. Die Callbacks werden in separaten "Controller"-Modulen für `Book`, `BookInstance`, `Genre` und `Author` abgelegt (Sie können jede Datei-/Modulstruktur verwenden, aber dies scheint eine geeignete Granularität für dieses Projekt zu sein).

Beginnen Sie damit, einen Ordner für unsere Controller im Projektstamm (**/controllers**) zu erstellen und dann separate Controller-Dateien/-Module für die Verwaltung jedes der Modelle zu erstellen:

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

Das Modul erfordert zuerst das `Author`-Modell, das später verwendet wird, um auf unsere Daten zuzugreifen und diese zu aktualisieren.
Es exportiert dann Funktionen für jede der URLs, die wir bearbeiten möchten.
Beachten Sie, dass die Operationen für Erstellen, Aktualisieren und Löschen Formulare verwenden und daher zusätzliche Methoden haben, um Anforderungs-Post-Anfragen zu bearbeiten — wir werden diese Methoden im "Formularartikel" später besprechen.

Die Funktionen antworten mit einer Zeichenfolge, die angibt, dass die zugehörige Seite noch nicht erstellt wurde.
Wenn eine Controller-Funktion erwartet wird, um Pfadparameter zu empfangen, werden diese in der Nachrichtenzeichenkette ausgegeben (siehe `req.params.id` oben).

#### BookInstance-Controller

Öffnen Sie die Datei **/controllers/bookinstanceController.js** und kopieren Sie den folgenden Code hinein (dies folgt einem identischen Muster wie das `Author`-Controllermodul):

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

Öffnen Sie die Datei **/controllers/genreController.js** und kopieren Sie den folgenden Text hinein (dies folgt einem identischen Muster wie die `Author`- und `BookInstance`-Dateien):

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
Dies folgt demselben Muster wie die anderen Controllermodule, hat jedoch zusätzlich eine `index()`-Funktion für die Anzeige der Willkommensseite der Website:

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

## Erstellen Sie das Katalogroutenmodul

Als nächstes erstellen wir _Routen_ für alle URLs [die von der LocalLibrary-Website benötigt werden](#routen,_die_für_die_locallibrary_benötigt_werden), welche die zuvor definierten Controller-Funktionen aufrufen werden.

Das Grundgerüst hat bereits einen **./routes**-Ordner mit Routen für den _Index_ und _Benutzer_.
Erstellen Sie eine weitere Routen-Datei — **catalog.js** — in diesem Ordner, wie gezeigt.

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

Das Modul erfordert Express und verwendet es dann, um ein `Router`-Objekt zu erstellen. Die Routen werden alle auf dem Router eingerichtet, der dann exportiert wird.

Die Routen werden entweder mit `.get()` oder `.post()`-Methoden auf dem Router-Objekt definiert. Alle Pfade sind mit Zeichenketten definiert (wir verwenden keine Zeichenmuster oder regulären Ausdrücke).
Routen, die auf eine spezifische Ressource (z.B. ein Buch) wirken, verwenden Pfadparameter, um die Objekt-ID aus der URL zu erhalten.

Die Handler-Funktionen stammen alle von den Controllermodulen, die wir im vorherigen Abschnitt erstellt haben.

### Aktualisieren Sie das Indexroutenmodul

Wir haben jetzt alle unsere neuen Routen eingerichtet, aber wir haben immer noch eine Route zur ursprünglichen Seite. Lassen Sie uns stattdessen zu der neuen Startseite umleiten, die wir unter dem Pfad `/catalog` erstellt haben.

Öffnen Sie **/routes/index.js** und ersetzen Sie die vorhandene Route durch die folgende Funktion.

```js
// GET home page.
router.get("/", (req, res) => {
  res.redirect("/catalog");
});
```

> [!NOTE]
> Dies ist unsere erste Verwendung der [redirect()](https://expressjs.com/en/5x/api.html#res.redirect)-Antwortmethode. Diese leitet zur angegebenen Seite um, indem sie standardmäßig den HTTP-Statuscode "302 Found" sendet. Sie können den zurückgegeben Statuscode bei Bedarf ändern und entweder absolute oder relative Pfade angeben.

### Aktualisieren Sie app.js

Der letzte Schritt besteht darin, die Routen zur Middleware-Kette hinzuzufügen.
Das tun wir in `app.js`.

Öffnen Sie **app.js** und fügen Sie die Katalog-Route unterhalb der anderen Routen hinzu (fügen Sie die dritte Zeile, die unten gezeigt wird, unterhalb der anderen beiden Zeilen hinzu, die bereits in der Datei vorhanden sein sollten):

```js
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const catalogRouter = require("./routes/catalog"); // Import routes for "catalog" area of site
```

Fügen Sie als nächstes die Katalog-Route zum Middleware-Stapel unter den anderen Routen hinzu (fügen Sie die dritte Zeile hinzu, die unten gezeigt wird, unterhalb der anderen beiden Zeilen, die bereits in der Datei vorhanden sein sollten):

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/catalog", catalogRouter); // Add catalog routes to middleware chain.
```

> [!NOTE]
> Wir haben unser Katalogmodul zu einem Pfad `/catalog` hinzugefügt. Dieser wird allen im Katalogmodul definierten Pfaden vorangestellt. Beispielsweise lautet die URL für den Zugriff auf eine Liste von Büchern: `/catalog/books/`.

Das war's. Wir sollten nun Routen und Skelettfunktionen für alle URLs aktiviert haben, die wir letztendlich auf der LocalLibrary-Website unterstützen werden.

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

Navigieren Sie dann zu einer Reihe von LocalLibrary-URLs und überprüfen Sie, dass Sie keine Fehlerseite (HTTP 404) erhalten. Eine kleine Reihe von URLs ist unten zu Ihrer Verfügung aufgeführt:

- `http://localhost:3000/`
- `http://localhost:3000/catalog`
- `http://localhost:3000/catalog/books`
- `http://localhost:3000/catalog/bookinstances/`
- `http://localhost:3000/catalog/authors/`
- `http://localhost:3000/catalog/genres/`
- `http://localhost:3000/catalog/book/5846437593935e2f8c2aa226`
- `http://localhost:3000/catalog/book/create`

## Zusammenfassung

Wir haben jetzt alle Routen für unsere Website erstellt, zusammen mit Dummy-Controller-Funktionen, die wir in späteren Artikeln mit einer vollständigen Implementierung füllen können. Auf dem Weg haben wir eine Menge grundlegender Informationen über Express-Routen, das Behandeln von Ausnahmen, und einige Ansätze zur Strukturierung unserer Routen und Controller gelernt.

In unserem nächsten Artikel erstellen wir eine ordentliche Willkommensseite für die Website, indem wir Ansichten (Templates) und in unseren Modellen gespeicherte Informationen verwenden.

## Siehe auch

- [Grundlegendes Routing](https://expressjs.com/en/starter/basic-routing.html) (Express-Dokumentation)
- [Routing-Leitfaden](https://expressjs.com/en/guide/routing.html) (Express-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
