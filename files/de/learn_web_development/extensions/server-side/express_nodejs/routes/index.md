---
title: "Express-Tutorial Teil 4: Routen und Controller"
short-title: "4: Routen und Controller"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/routes
l10n:
  sourceCommit: d775e1249487f1a7ab9a8a031c70ca71bc892d63
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

In diesem Tutorial richten wir Routen (Code zur Verarbeitung von URLs) mit Platzhalter-Handlerfunktionen für alle Ressourcen-Endpunkte ein, die wir später für die Website [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) benötigen. Am Ende verfügen wir über eine modulare Struktur für unseren Code zur Routenverarbeitung, die wir in den folgenden Artikeln um echte Handlerfunktionen erweitern können. Außerdem werden Sie gut verstehen, wie sich mit Express modulare Routen erstellen lassen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction">Einführung in Express/Node</a>.
        Arbeiten Sie die vorherigen Tutorial-Themen durch (einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose">Express-Tutorial Teil 3: Eine Datenbank verwenden (mit Mongoose)</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie einfache Routen erstellt werden.
        Alle URL-Endpunkte einrichten.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Im [vorherigen Tutorial-Artikel](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose) haben wir _Mongoose_-Modelle für die Interaktion mit der Datenbank definiert und mit einem eigenständigen Skript einige erste Bibliotheksdatensätze erstellt. Nun können wir den Code schreiben, der diese Informationen den Nutzern präsentiert. Zunächst müssen wir festlegen, welche Informationen wir auf unseren Seiten anzeigen möchten, und anschließend geeignete URLs definieren, über die diese Ressourcen bereitgestellt werden. Danach erstellen wir die Routen (URL-Handler) und Views (Templates), um diese Seiten anzuzeigen.

Das folgende Diagramm veranschaulicht noch einmal den grundlegenden Datenfluss und die Komponenten, die für die Verarbeitung einer HTTP-Anfrage und -Antwort implementiert werden müssen. Neben Views und Routen zeigt es „Controller“ – Funktionen, die den Code für die Weiterleitung von Anfragen vom Code für deren eigentliche Verarbeitung trennen.

Da wir die Modelle bereits erstellt haben, müssen wir hauptsächlich Folgendes erstellen:

- „Routen“, die unterstützte Anfragen (und alle in den Anfrage-URLs enthaltenen Informationen) an die passenden Controller-Funktionen weiterleiten.
- Controller-Funktionen, die die angeforderten Daten aus den Modellen abrufen, eine HTML-Seite zur Anzeige der Daten erstellen und sie an die Nutzer zurückgeben, damit diese sie im Browser ansehen können.
- Views (Templates), mit denen die Controller die Daten rendern.

![Diagramm des grundlegenden Datenflusses eines MVC-Express-Servers: „Routes“ empfangen die an den Express-Server gesendeten HTTP-Anfragen und leiten sie an die passende „Controller“-Funktion weiter. Der Controller liest und schreibt Daten über die Modelle. Die Modelle sind mit der Datenbank verbunden und ermöglichen dem Server den Datenzugriff. Controller verwenden „Views“, auch Templates genannt, um die Daten zu rendern. Der Controller sendet die HTML-Antwort als HTTP-Antwort an den Client zurück.](mvc_express.png)

Letztlich könnten wir Seiten mit Listen und Detailinformationen zu Büchern, Genres, Autoren und Buchexemplaren sowie Seiten zum Erstellen, Aktualisieren und Löschen von Datensätzen bereitstellen. Das ist zu viel für einen einzigen Artikel. Daher konzentriert sich dieser Artikel vor allem darauf, unsere Routen und Controller so einzurichten, dass sie Platzhalterinhalte zurückgeben. In den folgenden Artikeln erweitern wir die Controller-Methoden, damit sie mit Modelldaten arbeiten.

Der erste Abschnitt bietet eine kurze Einführung in die Verwendung der Express-[Router](https://expressjs.com/en/5x/api/router/)-Middleware. Dieses Wissen nutzen wir anschließend, um die Routen für LocalLibrary einzurichten.

## Einführung in Routen

Eine Route ist ein Abschnitt Express-Code, der eine [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) (`GET`, `POST`, `PUT`, `DELETE` usw.), einen URL-Pfad bzw. ein URL-Muster und eine Funktion miteinander verknüpft, die zur Verarbeitung dieses Musters aufgerufen wird.

Es gibt verschiedene Möglichkeiten, Routen zu erstellen. In diesem Tutorial verwenden wir die [`express.Router`](https://expressjs.com/en/guide/routing/#expressrouter)-Middleware. Damit können wir die Routen-Handler für einen bestimmten Teil einer Website zusammenfassen und über ein gemeinsames Routenpräfix erreichbar machen. Alle Routen für unsere Bibliothek kommen in ein „catalog“-Modul. Falls wir später Routen für Benutzerkonten oder andere Funktionen hinzufügen, können wir diese separat gruppieren.

> [!NOTE]
> In [Express-Einführung > Routen-Handler erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#creating_route_handlers) haben wir Routen einer Express-Anwendung bereits kurz besprochen. Abgesehen von der besseren Unterstützung für Modularisierung (wie im ersten Unterabschnitt erläutert) ähnelt die Verwendung von _Router_ stark der direkten Definition von Routen am _Express-Anwendungsobjekt_.

Der Rest dieses Abschnitts gibt einen Überblick darüber, wie sich mit `Router` Routen definieren lassen.

### Separate Routenmodule definieren und verwenden

Der folgende Code zeigt an einem konkreten Beispiel, wie wir ein Routenmodul erstellen und anschließend in einer _Express_-Anwendung verwenden.

Zunächst erstellen wir in einem Modul namens **wiki.js** Routen für ein Wiki. Der Code importiert zuerst die Funktion `Router` aus Express, erstellt damit einen Router und fügt diesem dann mit der Methode `get()` einige Routen hinzu. Abschließend exportiert das Modul das `Router`-Objekt.

```js
// wiki.js - Wiki route module.

import { Router } from "express";

const router = Router();

// Home page route.
router.get("/", (req, res) => {
  res.send("Wiki home page");
});

// About page route.
router.get("/about", (req, res) => {
  res.send("About this wiki");
});

export default router;
```

> [!NOTE]
> Oben definieren wir die Callback-Funktionen unserer Routen-Handler direkt in den Router-Funktionen. Für LocalLibrary definieren wir diese Callbacks in einem separaten Controller-Modul.

Um das Router-Modul in der Hauptdatei unserer Anwendung zu verwenden, `import`ieren wir zunächst das Routenmodul (**wiki.js**). Anschließend rufen wir `use()` an der _Express_-Anwendung auf, um den Router unter dem URL-Pfad „wiki“ in die Middleware-Kette aufzunehmen.

```js
import wiki from "./wiki.js";

// …
app.use("/wiki", wiki);
```

Die beiden im Wiki-Routenmodul definierten Routen sind dann unter `/wiki/` und `/wiki/about/` erreichbar.

### Routenfunktionen

Unser Modul oben definiert einige typische Routenfunktionen. Die unten erneut gezeigte „about“-Route wird mit der Methode `Router.get()` definiert und reagiert nur auf HTTP-GET-Anfragen. Das erste Argument dieser Methode ist der URL-Pfad; das zweite ist eine Callback-Funktion, die aufgerufen wird, wenn eine HTTP-GET-Anfrage für diesen Pfad eingeht.

```js
router.get("/about", (req, res) => {
  res.send("About this wiki");
});
```

Der Callback erhält drei Argumente (üblicherweise wie gezeigt benannt: `req`, `res`, `next`): das HTTP-Request-Objekt, die HTTP-Response und die Funktion _next_ in der Middleware-Kette.

> [!NOTE]
> Router-Funktionen sind [Express-Middleware](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#using_middleware). Das bedeutet, dass sie die Anfrage entweder abschließen (beantworten) oder die Funktion `next` in der Kette aufrufen müssen. Im obigen Fall schließen wir die Anfrage mit `send()` ab. Daher verwenden wir das Argument `next` nicht und verzichten darauf, es anzugeben.
>
> Die obige Router-Funktion erhält einen einzigen Callback. Sie können aber beliebig viele Callback-Argumente oder ein Array von Callback-Funktionen angeben. Jede Funktion ist Teil der Middleware-Kette und wird in der Reihenfolge aufgerufen, in der sie hinzugefügt wurde – es sei denn, eine vorherige Funktion schließt die Anfrage ab.

Die Callback-Funktion ruft hier [`send()`](https://expressjs.com/en/5x/api/response/#ressend) an der Response auf, um bei einer GET-Anfrage für den Pfad (`/about`) die Zeichenfolge „About this wiki“ zurückzugeben. Zum Abschließen des Anfrage-Antwort-Zyklus stehen [weitere Response-Methoden](https://expressjs.com/en/guide/routing/#response-methods) zur Verfügung. Sie könnten beispielsweise [`res.json()`](https://expressjs.com/en/5x/api/response/#resjson) aufrufen, um eine JSON-Antwort zu senden, oder [`res.sendFile()`](https://expressjs.com/en/5x/api/response/#ressendfile), um eine Datei zu senden. Beim Aufbau der Bibliothek werden wir am häufigsten die Response-Methode [`render()`](https://expressjs.com/en/5x/api/response/#resrender) verwenden. Sie erstellt mithilfe von Templates und Daten HTML-Dateien und gibt sie zurück – darauf gehen wir in einem späteren Artikel ausführlicher ein.

### HTTP-Methoden

Die obigen Beispielrouten verwenden die Methode `Router.get()`, um auf HTTP-`GET`-Anfragen für einen bestimmten Pfad zu reagieren.

`Router` stellt außerdem Routenmethoden für alle anderen [HTTP-Methoden](/de/docs/Web/HTTP/Reference/Methods) bereit. Diese werden größtenteils genauso verwendet: `post()`, `put()`, `delete()`, `options()`, `trace()`, `copy()`, `lock()`, `mkcol()`, `move()`, `purge()`, `propfind()`, `proppatch()`, `unlock()`, `report()`, `mkactivity()`, `checkout()`, `merge()`, `m-search()`, `notify()`, `subscribe()`, `unsubscribe()`, `patch()`, `search()` und `connect()`.

Der folgende Code verhält sich beispielsweise genauso wie die vorherige `/about`-Route, reagiert aber nur auf HTTP-POST-Anfragen.

```js
router.post("/about", (req, res) => {
  res.send("About this wiki");
});
```

Websites sollten idealerweise die Routenmethode (und HTTP-Methode) verwenden, die am besten zur ausgeführten Operation passt.
Eine clientseitig gerenderte Anwendung sollte beispielsweise `Router.get()` zum Lesen aus der Datenbank, `Router.post()` zum Erstellen neuer Datensätze, `Router.put()` oder `Router.patch()` zum Aktualisieren von Datensätzen und `Router.delete()` zum Löschen von Daten verwenden.

Beachten Sie jedoch, dass serverseitig gerenderte Anwendungen wie die in diesem Tutorial häufig `Router.post()` für alle Routen verwenden, die Daten verändern.
Der Grund dafür ist, dass HTML-Elemente vom Typ `<form>` standardmäßig nur [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)- und [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfragen senden können.

Für diese Einschränkung gibt es verschiedene Umgehungsmöglichkeiten. Beispielsweise lässt sich die „gewünschte“ HTTP-Methode in einer `POST`-Anfrage codieren und die Express-Middleware [method-override](https://www.npmjs.com/package/method-override) verwenden, um die Anfrage vor der Übergabe an den Router auf die passende HTTP-Methode umzustellen.
Bei einfachen Anwendungen wäre es meist übertrieben, Code nur für die Verwendung der passenden HTTP-Methoden umzuschreiben.
Es kann sich jedoch lohnen, wenn dadurch die Serverprotokollierung verbessert wird oder der Server über denselben Endpunkt sowohl serverseitig als auch clientseitig gerenderte Inhalte verarbeiten muss.

### Routenpfade

Die Routenpfade definieren die Endpunkte, an die Anfragen gesendet werden können. Die bisherigen Beispiele waren einfache Zeichenfolgen und werden genau wie angegeben verwendet: '/', '/about', '/book', '/any-random.path'.

Routenpfade können auch Zeichenfolgenmuster sein. Diese verwenden eine Form der Syntax regulärer Ausdrücke, um _Muster_ von Endpunkten zu definieren, mit denen abgeglichen wird.
Die meisten unserer Routen für LocalLibrary verwenden Zeichenfolgen statt regulärer Ausdrücke.
Außerdem verwenden wir Routenparameter, die im nächsten Abschnitt erläutert werden.

### Routenparameter

Routenparameter sind _benannte URL-Segmente_, mit denen Werte an bestimmten Positionen in einer URL erfasst werden. Den benannten Segmenten wird ein Doppelpunkt vorangestellt, gefolgt vom Namen (z. B. `/:your_parameter_name/`). Die erfassten Werte werden im Objekt `req.params` gespeichert, wobei die Parameternamen als Schlüssel dienen (z. B. `req.params.your_parameter_name`).

Betrachten wir beispielsweise eine URL, die Informationen über Nutzer und Bücher enthält: `http://localhost:3000/users/34/books/8989`. Mit den Pfadparametern `userId` und `bookId` können wir diese Informationen wie folgt extrahieren:

```js
app.get("/users/:userId/books/:bookId", (req, res) => {
  // Access userId via: req.params.userId
  // Access bookId via: req.params.bookId
  res.send(req.params);
});
```

> [!NOTE]
> Die URL _/book/create_ wird von einer Route wie `/book/:bookId` erfasst (denn `:bookId` ist ein Platzhalter für _jede_ Zeichenfolge und passt daher auch auf `create`). Es wird die erste Route verwendet, die zu einer eingehenden URL passt. Wenn Sie `/book/create`-URLs gezielt verarbeiten möchten, muss deren Routen-Handler daher vor der Route `/book/:bookId` definiert werden.

Namen von Routenparametern (beispielsweise `bookId` oben) können beliebige gültige JavaScript-Bezeichner sein, die mit einem Buchstaben, `_` oder `$` beginnen. Nach dem ersten Zeichen dürfen Ziffern folgen, jedoch keine Bindestriche oder Leerzeichen.
Sie können auch Namen verwenden, die keine gültigen JavaScript-Bezeichner sind, einschließlich Leerzeichen, Bindestrichen, Emoticons oder anderen Zeichen. Diese müssen Sie allerdings als Zeichenfolge in Anführungszeichen definieren und per Klammernotation auf sie zugreifen.
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
Sie werden wie reguläre Parameter definiert, erhalten aber ein vorangestelltes Sternchen.

Betrachten wir beispielsweise die URL `http://localhost:3000/users/34/books/8989`. Mit der Wildcard `example` können wir alle Informationen nach `users/` extrahieren:

```js
app.get("/users/*example", (req, res) => {
  // req.params would contain { "example": ["34", "books", "8989"]}
  res.send(req.params);
});
```

### Optionale Teile

Mit geschweiften Klammern lassen sich Teile des Pfads als optional kennzeichnen.
Im folgenden Beispiel erfassen wir etwa einen Dateinamen mit beliebiger Erweiterung (oder ohne Erweiterung).

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

Auch das Pipe-Zeichen (`|`) können Sie in einem regulären Ausdruck nicht verwenden.

Das ist alles, was Sie für den Einstieg in Routen benötigen.
Weitere Informationen finden Sie bei Bedarf in der Express-Dokumentation: [Grundlegendes Routing](https://expressjs.com/en/starter/basic-routing/) und [Routing-Leitfaden](https://expressjs.com/en/guide/routing/). Die folgenden Abschnitte zeigen, wie wir die Routen und Controller für LocalLibrary einrichten.

### Fehler und Ausnahmen in Routenfunktionen behandeln

Die zuvor gezeigten Routenfunktionen haben die Argumente `req` und `res`, die die Anfrage bzw. die Antwort repräsentieren.
Routenfunktionen erhalten außerdem ein drittes Argument, `next`. Es enthält eine Callback-Funktion, die aufgerufen werden kann, um Fehler oder Ausnahmen an die Express-Middleware-Kette weiterzugeben. Von dort gelangen sie schließlich zu Ihrem globalen Code für die Fehlerbehandlung.

Ab Express 5 wird `next` automatisch mit dem Ablehnungswert aufgerufen, wenn ein Routen-Handler ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt, das anschließend abgelehnt wird. Bei der Verwendung von Promises ist in Routenfunktionen daher kein eigener Code für die Fehlerbehandlung erforderlich.
Das ermöglicht sehr kompakten Code bei der Arbeit mit asynchronen Promise-basierten APIs, insbesondere mit [`async` und `await`](/de/docs/Learn_web_development/Extensions/Async_JS/Promises#async_and_await).

Der folgende Code fragt beispielsweise mit der Methode `find()` eine Datenbank ab und rendert anschließend das Ergebnis.

```js
router.get("/about", async (req, res, next) => {
  const successfulResult = await About.find({}).exec();
  res.render("about_view", { title: "About", list: successfulResult });
});
```

Der folgende Code zeigt dasselbe Beispiel mit einer Promise-Kette.
Beachten Sie, dass Sie den Fehler bei Bedarf mit `catch()` abfangen und selbst behandeln können.

```js
router.get(
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
> Die meisten modernen APIs sind asynchron und Promise-basiert, sodass die Fehlerbehandlung oft so einfach ist.
> Für dieses Tutorial ist das tatsächlich alles, was Sie über Fehlerbehandlung _wissen müssen_.

Express 5 fängt Ausnahmen, die in synchronem Code ausgelöst werden, automatisch ab und leitet sie weiter:

```js
app.get("/", (req, res) => {
  // Express will catch this
  throw new Error("SynchronousException");
});
```

Ausnahmen in asynchronem Code, der von Routen-Handlern oder Middleware aufgerufen wird, müssen Sie hingegen mit [`catch()`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) abfangen. Der Standardmechanismus fängt diese nicht ab:

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

Wenn Sie eine ältere asynchrone API verwenden, die einen Fehler oder ein Ergebnis an eine Callback-Funktion übergibt, müssen Sie den Fehler selbst weiterleiten.
Das folgende Beispiel zeigt dies anhand der Callback-Version der Node-Funktion `readFile()`.

```js
import { readFile } from "node:fs";

router.get("/about", (req, res, next) => {
  readFile("about.txt", "utf8", (err, text) => {
    if (err) {
      // Propagate the error
      return next(err);
    }
    // Successful, so send the file contents
    res.send(text);
  });
});
```

Weitere Informationen finden Sie unter [Fehlerbehandlung](https://expressjs.com/en/guide/error-handling/).

## Für LocalLibrary benötigte Routen

Die URLs, die wir schließlich für unsere Seiten benötigen, sind unten aufgeführt. Dabei steht _object_ für den Namen eines unserer Modelle (book, bookinstance, genre, author), _objects_ für dessen Pluralform und _id_ für das eindeutige Feld (`_id`), das jede Mongoose-Modellinstanz standardmäßig erhält.

- `catalog/` — Die Start- bzw. Indexseite.
- `catalog/<objects>/` — Die Liste aller Bücher, Buchexemplare, Genres oder Autoren (z. B. `/catalog/books/`, `/catalog/genres/` usw.).
- `catalog/<object>/<id>` — Die Detailseite für ein bestimmtes Buch, Buchexemplar, Genre oder einen bestimmten Autor mit dem angegebenen `_id`-Feldwert (z. B. `/catalog/book/584493c1f4887f06c0e67d37`).
- `catalog/<object>/create` — Das Formular zum Erstellen eines neuen Buchs, Buchexemplars, Genres oder Autors (z. B. `/catalog/book/create`).
- `catalog/<object>/<id>/update` — Das Formular zum Aktualisieren eines bestimmten Buchs, Buchexemplars, Genres oder Autors mit dem angegebenen `_id`-Feldwert (z. B. `/catalog/book/584493c1f4887f06c0e67d37/update`).
- `catalog/<object>/<id>/delete` — Das Formular zum Löschen eines bestimmten Buchs, Buchexemplars, Genres oder Autors mit dem angegebenen `_id`-Feldwert (z. B. `/catalog/book/584493c1f4887f06c0e67d37/delete`).

Die Startseite und die Listenseiten enthalten in ihren URLs keine zusätzlichen Informationen. Die zurückgegebenen Ergebnisse hängen zwar vom Modelltyp und vom Inhalt der Datenbank ab, die Abfragen zum Abrufen der Informationen bleiben jedoch immer gleich (ebenso ist der Code zum Erstellen von Objekten stets ähnlich).

Die anderen URLs beziehen sich dagegen jeweils auf ein bestimmtes Dokument bzw. eine bestimmte Modellinstanz. Sie enthalten die Identität des Elements in der URL (oben als `<id>` dargestellt). Wir verwenden Pfadparameter, um diese Informationen zu extrahieren und an den Routen-Handler zu übergeben. In einem späteren Artikel werden wir damit dynamisch bestimmen, welche Informationen aus der Datenbank abgerufen werden sollen. Da die Informationen in der URL enthalten sind, benötigen wir für jede Ressource eines bestimmten Typs nur eine Route (beispielsweise eine Route für die Anzeige aller einzelnen Bücher).

> [!NOTE]
> Mit Express können Sie Ihre URLs beliebig gestalten: Sie können Informationen wie oben gezeigt im Pfad der URL oder in URL-`GET`-Parametern codieren (z. B. `/book/?id=6`). Unabhängig vom gewählten Ansatz sollten die URLs übersichtlich, logisch und lesbar bleiben ([siehe die Empfehlungen des W3C](https://www.w3.org/Provider/Style/URI)).

Als Nächstes erstellen wir die Callback-Funktionen der Routen-Handler und den Routencode für alle oben aufgeführten URLs.

## Callback-Funktionen der Routen-Handler erstellen

Bevor wir unsere Routen definieren, erstellen wir zunächst alle Platzhalter- bzw. Grundgerüst-Callback-Funktionen, die von ihnen aufgerufen werden. Die Callbacks speichern wir in separaten „Controller“-Modulen für `Book`, `BookInstance`, `Genre` und `Author`. (Sie können eine beliebige Datei- und Modulstruktur verwenden, aber diese Aufteilung erscheint für das Projekt sinnvoll.)

Erstellen Sie zunächst im Projektstammverzeichnis einen Ordner für unsere Controller (**controllers/**) und darin separate Controller-Dateien bzw. -Module zur Verarbeitung der einzelnen Modelle:

```plain
express-locallibrary-tutorial
├── controllers
│   ├── authorController.js
│   ├── bookController.js
│   ├── bookinstanceController.js
│   └── genreController.js
...
```

Wenn Sie Bash oder eine ähnliche Shell verwenden, können Sie alle Dateien mit diesem Befehl erstellen:

```bash
mkdir controllers && touch controllers/{authorController,bookController,bookinstanceController,genreController}.js
```

### Author-Controller

Öffnen Sie die Datei **controllers/authorController.js** und fügen Sie den folgenden Code ein:

```js
import Author from "../models/author.js";

// Display list of all Authors.
export const authorList = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author list");
};

// Display detail page for a specific Author.
export const authorDetail = async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Author detail: ${req.params.id}`);
};

// Display Author create form on GET.
export const authorCreateGet = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author create GET");
};

// Handle Author create on POST.
export const authorCreatePost = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author create POST");
};

// Display Author delete form on GET.
export const authorDeleteGet = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author delete GET");
};

// Handle Author delete on POST.
export const authorDeletePost = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author delete POST");
};

// Display Author update form on GET.
export const authorUpdateGet = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author update GET");
};

// Handle Author update on POST.
export const authorUpdatePost = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author update POST");
};
```

Das Modul importiert zunächst das Modell `Author`, das wir später für den Zugriff auf unsere Daten und deren Aktualisierung verwenden.
Anschließend exportiert es Funktionen für jede URL, die wir verarbeiten möchten.
Beachten Sie, dass die Operationen zum Erstellen, Aktualisieren und Löschen Formulare verwenden und daher zusätzliche Methoden zur Verarbeitung von Formular-POST-Anfragen besitzen. Diese Methoden besprechen wir später im Artikel über Formulare.

Die Funktionen antworten mit einer Zeichenfolge, die angibt, dass die zugehörige Seite noch nicht erstellt wurde.
Wenn eine Controller-Funktion Pfadparameter erhalten soll, werden diese in der Nachricht ausgegeben (siehe oben `req.params.id`).

#### BookInstance-Controller

Öffnen Sie die Datei **controllers/bookinstanceController.js** und fügen Sie den folgenden Code ein (er folgt demselben Muster wie das `Author`-Controller-Modul):

```js
import BookInstance from "../models/bookinstance.js";

// Display list of all BookInstances.
export const bookInstanceList = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance list");
};

// Display detail page for a specific BookInstance.
export const bookInstanceDetail = async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: BookInstance detail: ${req.params.id}`);
};

// Display BookInstance create form on GET.
export const bookInstanceCreateGet = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance create GET");
};

// Handle BookInstance create on POST.
export const bookInstanceCreatePost = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance create POST");
};

// Display BookInstance delete form on GET.
export const bookInstanceDeleteGet = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance delete GET");
};

// Handle BookInstance delete on POST.
export const bookInstanceDeletePost = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance delete POST");
};

// Display BookInstance update form on GET.
export const bookInstanceUpdateGet = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance update GET");
};

// Handle bookinstance update on POST.
export const bookInstanceUpdatePost = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance update POST");
};
```

#### Genre-Controller

Öffnen Sie die Datei **controllers/genreController.js** und fügen Sie den folgenden Code ein (er folgt demselben Muster wie die Dateien für `Author` und `BookInstance`):

```js
import Genre from "../models/genre.js";

// Display list of all Genre.
export const genreList = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre list");
};

// Display detail page for a specific Genre.
export const genreDetail = async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Genre detail: ${req.params.id}`);
};

// Display Genre create form on GET.
export const genreCreateGet = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre create GET");
};

// Handle Genre create on POST.
export const genreCreatePost = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre create POST");
};

// Display Genre delete form on GET.
export const genreDeleteGet = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre delete GET");
};

// Handle Genre delete on POST.
export const genreDeletePost = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre delete POST");
};

// Display Genre update form on GET.
export const genreUpdateGet = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre update GET");
};

// Handle Genre update on POST.
export const genreUpdatePost = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre update POST");
};
```

#### Book-Controller

Öffnen Sie die Datei **controllers/bookController.js** und fügen Sie den folgenden Code ein.
Er folgt demselben Muster wie die anderen Controller-Module, enthält aber zusätzlich eine Funktion `index()` zur Anzeige der Begrüßungsseite der Website:

```js
import Book from "../models/book.js";

export const index = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Site Home Page");
};

// Display list of all books.
export const bookList = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book list");
};

// Display detail page for a specific book.
export const bookDetail = async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Book detail: ${req.params.id}`);
};

// Display book create form on GET.
export const bookCreateGet = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book create GET");
};

// Handle book create on POST.
export const bookCreatePost = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book create POST");
};

// Display book delete form on GET.
export const bookDeleteGet = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book delete GET");
};

// Handle book delete on POST.
export const bookDeletePost = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book delete POST");
};

// Display book update form on GET.
export const bookUpdateGet = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book update GET");
};

// Handle book update on POST.
export const bookUpdatePost = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book update POST");
};
```

## Das catalog-Routenmodul erstellen

Als Nächstes erstellen wir _Routen_ für alle [von der LocalLibrary-Website benötigten URLs](#für_locallibrary_benötigte_routen). Diese rufen die Controller-Funktionen auf, die wir in den vorherigen Abschnitten definiert haben.

Das Grundgerüst enthält bereits einen Ordner **./routes** mit Routen für _index_ und _users_.
Erstellen Sie in diesem Ordner wie gezeigt eine weitere Routendatei namens **catalog.js**.

```plain
express-locallibrary-tutorial
├── routes
│   ├── catalog.js
│   ├── index.js
│   └── users.js
...
```

Öffnen Sie **routes/catalog.js** und fügen Sie den folgenden Code ein:

```js
import { Router } from "express";

// Import controller modules.
import * as bookController from "../controllers/bookController.js";
import * as authorController from "../controllers/authorController.js";
import * as genreController from "../controllers/genreController.js";
import * as bookInstanceController from "../controllers/bookinstanceController.js";

const router = Router();

/// BOOK ROUTES ///

// GET catalog home page.
router.get("/", bookController.index);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get("/book/create", bookController.bookCreateGet);

// POST request for creating Book.
router.post("/book/create", bookController.bookCreatePost);

// GET request to delete Book.
router.get("/book/:id/delete", bookController.bookDeleteGet);

// POST request to delete Book.
router.post("/book/:id/delete", bookController.bookDeletePost);

// GET request to update Book.
router.get("/book/:id/update", bookController.bookUpdateGet);

// POST request to update Book.
router.post("/book/:id/update", bookController.bookUpdatePost);

// GET request for one Book.
router.get("/book/:id", bookController.bookDetail);

// GET request for list of all Book items.
router.get("/books", bookController.bookList);

/// AUTHOR ROUTES ///

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get("/author/create", authorController.authorCreateGet);

// POST request for creating Author.
router.post("/author/create", authorController.authorCreatePost);

// GET request to delete Author.
router.get("/author/:id/delete", authorController.authorDeleteGet);

// POST request to delete Author.
router.post("/author/:id/delete", authorController.authorDeletePost);

// GET request to update Author.
router.get("/author/:id/update", authorController.authorUpdateGet);

// POST request to update Author.
router.post("/author/:id/update", authorController.authorUpdatePost);

// GET request for one Author.
router.get("/author/:id", authorController.authorDetail);

// GET request for list of all Authors.
router.get("/authors", authorController.authorList);

/// GENRE ROUTES ///

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get("/genre/create", genreController.genreCreateGet);

// POST request for creating Genre.
router.post("/genre/create", genreController.genreCreatePost);

// GET request to delete Genre.
router.get("/genre/:id/delete", genreController.genreDeleteGet);

// POST request to delete Genre.
router.post("/genre/:id/delete", genreController.genreDeletePost);

// GET request to update Genre.
router.get("/genre/:id/update", genreController.genreUpdateGet);

// POST request to update Genre.
router.post("/genre/:id/update", genreController.genreUpdatePost);

// GET request for one Genre.
router.get("/genre/:id", genreController.genreDetail);

// GET request for list of all Genre.
router.get("/genres", genreController.genreList);

/// BOOKINSTANCE ROUTES ///

// GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
router.get(
  "/bookinstance/create",
  bookInstanceController.bookInstanceCreateGet,
);

// POST request for creating BookInstance.
router.post(
  "/bookinstance/create",
  bookInstanceController.bookInstanceCreatePost,
);

// GET request to delete BookInstance.
router.get(
  "/bookinstance/:id/delete",
  bookInstanceController.bookInstanceDeleteGet,
);

// POST request to delete BookInstance.
router.post(
  "/bookinstance/:id/delete",
  bookInstanceController.bookInstanceDeletePost,
);

// GET request to update BookInstance.
router.get(
  "/bookinstance/:id/update",
  bookInstanceController.bookInstanceUpdateGet,
);

// POST request to update BookInstance.
router.post(
  "/bookinstance/:id/update",
  bookInstanceController.bookInstanceUpdatePost,
);

// GET request for one BookInstance.
router.get("/bookinstance/:id", bookInstanceController.bookInstanceDetail);

// GET request for list of all BookInstance.
router.get("/bookinstances", bookInstanceController.bookInstanceList);

export default router;
```

Das Modul importiert die Funktion `Router` aus Express und erstellt damit einen Router. Alle Routen werden an diesem Router eingerichtet, der anschließend exportiert wird.

Die Routen werden mit den Methoden `.get()` oder `.post()` des Router-Objekts definiert.
Alle Pfade sind als Zeichenfolgen definiert (wir verwenden weder Zeichenfolgenmuster noch reguläre Ausdrücke).
Routen, die eine bestimmte Ressource betreffen (z. B. ein Buch), verwenden Pfadparameter, um die Objekt-ID aus der URL auszulesen.

Alle Handlerfunktionen werden aus den Controller-Modulen importiert, die wir im vorherigen Abschnitt erstellt haben.

### Das index-Routenmodul aktualisieren

Wir haben alle neuen Routen eingerichtet, aber es gibt noch eine Route zur ursprünglichen Seite. Leiten wir diese stattdessen zur neuen Indexseite weiter, die wir unter dem Pfad `/catalog` erstellt haben.

Öffnen Sie **routes/index.js** und ersetzen Sie die vorhandene Route durch die folgende Funktion.

```js
// GET home page.
router.get("/", (req, res) => {
  res.redirect("/catalog");
});
```

> [!NOTE]
> Hier verwenden wir zum ersten Mal die Response-Methode [`redirect()`](https://expressjs.com/en/5x/api/response/#resredirect). Sie leitet zur angegebenen Seite weiter und sendet standardmäßig den HTTP-Statuscode „302 Found“. Bei Bedarf können Sie den zurückgegebenen Statuscode ändern und entweder absolute oder relative Pfade angeben.

### app.js aktualisieren

Als letzten Schritt fügen wir die Routen zur Middleware-Kette hinzu.
Das tun wir in `app.js`.

Öffnen Sie **app.js** und importieren Sie die catalog-Route unterhalb der anderen Routen (fügen Sie die unten gezeigte dritte Zeile unter den beiden Zeilen ein, die bereits in der Datei vorhanden sein sollten):

```js
import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";
import catalogRouter from "./routes/catalog.js"; // Import routes for "catalog" area of site
```

Fügen Sie anschließend die catalog-Route unterhalb der anderen Routen zum Middleware-Stack hinzu (fügen Sie die unten gezeigte dritte Zeile unter den beiden Zeilen ein, die bereits in der Datei vorhanden sein sollten):

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/catalog", catalogRouter); // Add catalog routes to middleware chain.
```

> [!NOTE]
> Wir haben unser catalog-Modul unter dem Pfad `/catalog` eingebunden. Dieser wird allen im catalog-Modul definierten Pfaden vorangestellt. Die Liste der Bücher ist beispielsweise unter `/catalog/books/` erreichbar.

Das war’s. Nun sollten für alle URLs, die die LocalLibrary-Website später unterstützen wird, Routen und Grundgerüst-Funktionen vorhanden sein.

### Die Routen testen

Um die Routen zu testen, starten Sie zunächst die Website wie gewohnt:

- Mit der Standardmethode:

  ```bash
  # Windows
  SET DEBUG=express-locallibrary-tutorial:* & npm start

  # macOS or Linux
  DEBUG=express-locallibrary-tutorial:* npm start
  ```

- Für [automatische Serverneustarts](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website#running_the_skeleton_website) können Sie stattdessen Folgendes verwenden:

  ```bash
  npm run devstart
  ```

Rufen Sie anschließend einige LocalLibrary-URLs auf und prüfen Sie, ob keine Fehlerseite (HTTP 404) angezeigt wird. Hier sind einige URLs zum Testen:

- `http://localhost:3000/`
- `http://localhost:3000/catalog`
- `http://localhost:3000/catalog/books`
- `http://localhost:3000/catalog/bookinstances/`
- `http://localhost:3000/catalog/authors/`
- `http://localhost:3000/catalog/genres/`
- `http://localhost:3000/catalog/book/5846437593935e2f8c2aa226`
- `http://localhost:3000/catalog/book/create`

## Zusammenfassung

Wir haben nun alle Routen für unsere Website sowie Platzhalter-Controller-Funktionen erstellt, die wir in späteren Artikeln vollständig implementieren können. Dabei haben wir grundlegende Konzepte zu Express-Routen, zur Behandlung von Ausnahmen und zu Möglichkeiten der Strukturierung von Routen und Controllern kennengelernt.

Im nächsten Artikel erstellen wir mithilfe von Views (Templates) und Informationen aus unseren Modellen eine richtige Begrüßungsseite für die Website.

## Siehe auch

- [Grundlegendes Routing](https://expressjs.com/en/starter/basic-routing/) (Express-Dokumentation)
- [Routing-Leitfaden](https://expressjs.com/en/guide/routing/) (Express-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
