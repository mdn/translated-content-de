---
title: "Express Tutorial Teil 4: Routen und Controller"
short-title: "4: Routen und Controller"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/routes
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

In diesem Tutorial richten wir Routen (URL-Verarbeitungscode) mit "Dummy"-Handlerfunktionen für alle Ressourcenendpunkte ein, die wir letztendlich für die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) Website benötigen. Nach Abschluss werden wir eine modulare Struktur für unseren Routenverarbeitungscode haben, die wir in den folgenden Artikeln mit realen Handlerfunktionen erweitern können. Wir werden auch ein sehr gutes Verständnis dafür haben, wie man modulare Routen mit Express erstellt!

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction">Express/Node Einführung</a>.
        Schließen Sie die vorherigen Tutorial-Themen ab (einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose">Express Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose)</a>).
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

Im [letzten Tutorial-Artikel](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose) haben wir _Mongoose_-Modelle definiert, um mit der Datenbank zu interagieren, und ein (eigenständiges) Skript genutzt, um einige anfängliche Bibliotheksdatensätze zu erstellen. Jetzt können wir den Code schreiben, um diese Informationen den Benutzern zu präsentieren. Das Erste, was wir tun müssen, ist zu bestimmen, welche Informationen wir auf unseren Seiten anzeigen möchten, und dann geeignete URLs für das Zurückgeben dieser Ressourcen zu definieren. Dann müssen wir die Routen (URL-Handler) und Ansichten (Templates) erstellen, um diese Seiten anzuzeigen.

Das untenstehende Diagramm dient als Erinnerung an den Hauptfluss von Daten und Dinge, die bei der Bearbeitung einer HTTP-Anfrage/-Antwort implementiert werden müssen. Zusätzlich zu den Ansichten und Routen zeigt das Diagramm "Controller" — Funktionen, die den Code, der Anfragen routet, von dem Code trennen, der Anfragen tatsächlich verarbeitet.

Da wir die Modelle bereits erstellt haben, sind die Hauptsachen, die wir erstellen müssen:

- "Routen", um die unterstützten Anfragen (und alle in Anfrage-URLs kodierten Informationen) an die entsprechenden Controller-Funktionen weiterzuleiten.
- Controller-Funktionen, um die angeforderten Daten von den Modellen zu erhalten, eine HTML-Seite zur Anzeige der Daten zu erstellen und sie an den Benutzer zurückzugeben, damit dieser sie im Browser ansehen kann.
- Ansichten (Templates), die von den Controllern zur Datenanzeige verwendet werden.

![Hauptdatenflussdiagramm eines MVC Express-Servers: 'Routen' empfangen die HTTP-Anfragen, die an den Express-Server gesendet werden, und leiten sie an die entsprechende 'Controller'-Funktion weiter. Der Controller liest und schreibt Daten aus den Modellen. Modelle sind mit der Datenbank verbunden, um dem Server den Datenzugriff zu ermöglichen. Controller verwenden 'Ansichten', auch Templates genannt, um die Daten zu rendern. Der Controller sendet die HTML-HTTP-Antwort als HTTP-Antwort zurück an den Client.](mvc_express.png)

Letztendlich könnten wir Seiten haben, die Listen und Detailinformationen für Bücher, Genres, Autoren und Buchinstanzen anzeigen, sowie Seiten zum Erstellen, Aktualisieren und Löschen von Datensätzen. Das ist viel zu dokumentieren in einem Artikel. Daher wird sich der größte Teil dieses Artikels darauf konzentrieren, unsere Routen und Controller einzurichten, um "Dummy"-Inhalte zurückzugeben. Wir werden die Controllermethoden in unseren nachfolgenden Artikeln erweitern, um mit Modelldaten zu arbeiten.

Der folgende Abschnitt bietet eine kurze "Einführung" in die Verwendung der Express [Router](https://expressjs.com/en/4x/api.html#router)-Middleware. Wir werden dieses Wissen dann in den folgenden Abschnitten anwenden, wenn wir die LocalLibrary-Routen einrichten.

## Routen-Einführung

Eine Route ist ein Abschnitt von Express-Code, der ein HTTP-Verb (`GET`, `POST`, `PUT`, `DELETE`, etc.), einen URL-Pfad/-Muster und eine Funktion, die aufgerufen wird, um dieses Muster zu behandeln, verknüpft.

Es gibt mehrere Möglichkeiten, Routen zu erstellen. Für dieses Tutorial verwenden wir die [`express.Router`](https://expressjs.com/en/guide/routing.html#express-router)-Middleware, da sie es uns ermöglicht, die Routen-Handler für einen bestimmten Teil einer Website zusammenzufassen und sie über ein gemeinsames Routen-Präfix zuzugreifen. Wir werden alle unsere bibliotheksbezogenen Routen in einem "Katalog"-Modul behalten und, wenn wir Routen für die Handhabung von Benutzerkonten oder anderen Funktionen hinzufügen, können wir sie getrennt gruppieren.

> [!NOTE]
> Wir haben Express-Anwendungsrouten kurz in unserer [Express Einführung > Erstellen von Routen-Handlern](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#creating_route_handlers) besprochen. Abgesehen davon, dass die Verwendung von _Router_ (wie im ersten Unterabschnitt unten diskutiert) eine bessere Unterstützung für die Modularisierung bietet, ist die Definition von Routen auf dem _Express-Anwendungsobjekt_ sehr ähnlich.

Der Rest dieses Abschnitts bietet einen Überblick darüber, wie der `Router` verwendet werden kann, um die Routen zu definieren.

### Definieren und Verwenden separater RoutenmModule

Der untenstehende Code bietet ein konkretes Beispiel, wie wir ein Routmodul erstellen und dann in einer _Express_ Anwendung verwenden können.

Zuerst erstellen wir Routen für ein Wiki in einem Modul namens **wiki.js**. Der Code importiert zunächst das Express-Anwendungsobjekt, verwendet es, um ein `Router`-Objekt zu erhalten und fügt dann ein paar Routen hinzu, indem die `get()`-Methode verwendet wird. Zuletzt exportiert das Modul das `Router`-Objekt.

```js
// wiki.js - Wiki route module.

const express = require("express");
const router = express.Router();

// Home page route.
router.get("/", function (req, res) {
  res.send("Wiki home page");
});

// About page route.
router.get("/about", function (req, res) {
  res.send("About this wiki");
});

module.exports = router;
```

> [!NOTE]
> Oben definieren wir unsere Routen-Handler-Callbacks direkt in den Router-Funktionen. In der LocalLibrary werden wir diese callbacks in einem separaten Controller-Modul definieren.

Um das Routmodul in unserer Haupt-App-Datei zu verwenden, müssen wir zuerst das Routmodul (**wiki.js**) mit `require()` einbinden. Dann rufen wir `use()` auf die _Express_ Anwendung auf, um den Router zum Middleware-Verarbeitungspfad hinzuzufügen, indem wir einen URL-Pfad von 'wiki' angeben.

```js
const wiki = require("./wiki.js");
// …
app.use("/wiki", wiki);
```

Die beiden Routen, die in unserem Wiki-Routenmodul definiert sind, sind dann von `/wiki/` und `/wiki/about/` aus zugänglich.

### Routen-Funktionen

Unser Modul oben definiert ein paar typische Routen-Funktionen. Die "about"-Route (unten reproduziert) ist mit der `Router.get()`-Methode definiert, die nur auf HTTP-GET-Anfragen reagiert. Das erste Argument dieser Methode ist der URL-Pfad, während das zweite ein Callback ist, das aufgerufen wird, wenn eine HTTP-GET-Anfrage mit dem Pfad empfangen wird.

```js
router.get("/about", function (req, res) {
  res.send("About this wiki");
});
```

Das Callback nimmt drei Argumente (üblicherweise wie gezeigt benannt: `req`, `res`, `next`), die das HTTP-Anfrage-Objekt, die HTTP-Antwort und die _nächste_ Funktion in der Middleware-Kette enthalten.

> [!NOTE]
> Router-Funktionen sind [Express-Middleware](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#using_middleware), was bedeutet, dass sie entweder die Anfrage abschließen (beantworten) oder die `next`-Funktion in der Kette aufrufen müssen. Im obigen Fall schließen wir die Anfrage mit `send()` ab, daher wird das Argument `next` nicht verwendet (und wir entscheiden, es nicht zu spezifizieren).
>
> Die oben genannte Routerfunktion nimmt einen einzigen Callback an, aber Sie können so viele Callback-Argumente angeben, wie Sie möchten, oder ein Array von Callback-Funktionen. Jede Funktion ist Teil der Middleware-Kette und wird in der Reihenfolge, in der sie der Kette hinzugefügt wurde, aufgerufen (es sei denn, eine vorherige Funktion schließt die Anfrage ab).

Die Callback-Funktion ruft [`send()`](https://expressjs.com/en/4x/api.html#res.send) auf die Antwort auf, um den String "About this wiki" zurückzugeben, wenn wir eine GET-Anfrage mit dem Pfad (`/about`) erhalten. Es gibt eine [Reihe anderer Antwortmethoden](https://expressjs.com/en/guide/routing.html#response-methods) zum Beenden des Anfrage-/Antwortzyklus. Beispielsweise könnten Sie [`res.json()`](https://expressjs.com/en/4x/api.html#res.json) aufrufen, um eine JSON-Antwort zu senden, oder [`res.sendFile()`](https://expressjs.com/en/4x/api.html#res.sendFile), um eine Datei zu senden. Die Antwortmethode, die wir am häufigsten verwenden werden, während wir die Bibliothek aufbauen, ist [`render()`](https://expressjs.com/en/4x/api.html#res.render), die HTML-Dateien unter Verwendung von Vorlagen und Daten erstellt und zurückgibt — darüber werden wir in einem späteren Artikel viel mehr sprechen!

### HTTP-Verben

Die obigen Beispielsrouten verwenden die `Router.get()`-Methode, um auf HTTP-GET-Anfragen mit einem bestimmten Pfad zu antworten.

Der `Router` bietet auch Routmethoden für alle anderen HTTP-Verben, die meist auf gleiche Weise verwendet werden: `post()`, `put()`, `delete()`, `options()`, `trace()`, `copy()`, `lock()`, `mkcol()`, `move()`, `purge()`, `propfind()`, `proppatch()`, `unlock()`, `report()`, `mkactivity()`, `checkout()`, `merge()`, `m-search()`, `notify()`, `subscribe()`, `unsubscribe()`, `patch()`, `search()`, und `connect()`.

Zum Beispiel, der untenstehende Code verhält sich genauso wie die vorherige `/about`-Route, aber antwortet nur auf HTTP-POST-Anfragen.

```js
router.post("/about", (req, res) => {
  res.send("About this wiki");
});
```

### Routen-Pfade

Die Routen-Pfade definieren die Endpunkte, bei denen Anfragen gesendet werden können. Die bisher gesehenen Beispiele sind nur Zeichenketten und werden genau wie geschrieben verwendet: '/', '/about', '/book', '/any-random.path'.

Routen-Pfade können auch Zeichenkettenmuster sein. Zeichenkettenmuster verwenden eine Form der regulären Ausdrucksyntax, um _Muster_ von Endpunkten zu definieren, die übereinstimmen werden. Die Syntax ist unten aufgeführt (beachten Sie, dass der Bindestrich (`-`) und der Punkt (`.`) von zeichenkettenbasierten Pfaden wörtlich interpretiert werden):

- `?` : Der Endpunkt muss 0 oder 1 des vorangegangenen Zeichens (oder der Gruppe) haben, z.B. ein Routen-Pfad von `'/ab?cd'` entspricht Endpunkten `acd` oder `abcd`.
- `+` : Der Endpunkt muss 1 oder mehr des vorangegangenen Zeichens (oder der Gruppe) haben, zum Beispiel ein Routen-Pfad von `'/ab+cd'` entspricht Endpunkten `abcd`, `abbcd`, `abbbcd` und so weiter.
- `*` : Der Endpunkt kann einen beliebigen String dort haben, wo das `*`-Zeichen platziert ist. Zum Beispiel ein Pfad von `'/ab*cd'` entspricht Endpunkten `abcd`, `abXcd`, `abSOMErandomTEXTcd` und so weiter.
- `()` : Gruppierung von Zeichen, um eine andere Operation darauf auszuführen, z.B. `'/ab(cd)?e'` wird eine `?`-Übereinstimmung auf der Gruppe `(cd)` ausführen — es wird `abe` und `abcde` übereinstimmen.

Die Routen-Pfade können auch JavaScript [reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) sein. Zum Beispiel wird der untenstehende Routen-Pfad `catfish` und `dogfish`, aber nicht `catflap`, `catfishhead`, und so weiter entsprechen. Beachten Sie, dass der Pfad für einen regulären Ausdruck reguläre Ausdruck-Syntax verwendet (es ist kein zitierter String wie in den vorherigen Fällen).

```js
app.get(/.*fish$/, function (req, res) {
  // …
});
```

> [!NOTE]
> Die meisten unserer Routen für die LocalLibrary werden Strings und keine regulären Ausdrücke verwenden. Wir werden auch Pfadparameter verwenden, wie im nächsten Abschnitt besprochen.

### Routen-Parameter

Routen-Parameter sind _benannte URL-Segmente_, die verwendet werden, um Werte an bestimmten Positionen in der URL zu erfassen. Die benannten Segmente werden mit einem Doppelpunkt und dann dem Namen vorangestellt (z.B. `/:your_parameter_name/`). Die erfassten Werte werden im `req.params`-Objekt unter Verwendung der Parameternamen als Schlüssel gespeichert (z.B. `req.params.your_parameter_name`).

Betrachten Sie z.B. eine URL, die Informationen über Benutzer und Bücher codiert: `http://localhost:3000/users/34/books/8989`. Wir können diese Informationen wie unten gezeigt extrahieren, mit den `userId` und `bookId` Pfadparametern:

```js
app.get("/users/:userId/books/:bookId", (req, res) => {
  // Access userId via: req.params.userId
  // Access bookId via: req.params.bookId
  res.send(req.params);
});
```

Die Namen der Routenparameter müssen aus "Wortzeichen" bestehen (A-Z, a-z, 0-9, und \_).

> [!NOTE]
> Die URL _/book/create_ wird von einer Route wie `/book/:bookId` Übereinstimmen (weil `:bookId` ein Platzhalter für _jeden_ String ist, daher passt `create`). Die erste Route, die mit einer eingehenden URL übereinstimmt, wird verwendet. Wenn Sie also `/book/create` URLs speziell bearbeiten möchten, muss ihr Routen-Handler vor Ihrer `/book/:bookId` Route definiert werden.

Das ist alles, was Sie brauchen, um mit Routen zu beginnen - bei Bedarf finden Sie weitere Informationen in den Express-Dokumenten: [Grundlegendes Routing](https://expressjs.com/en/starter/basic-routing.html) und [Routing-Leitfaden](https://expressjs.com/en/guide/routing.html). Die folgenden Abschnitte zeigen, wie wir unsere Routen und Controller für die LocalLibrary einrichten.

### Fehlerhandling in den Routenfunktionen

Die zuvor gezeigten Routenfunktionen haben alle Argumente `req` und `res`, die die Anfrage und Antwort repräsentieren.
Routenfunktionen werden auch mit einem dritten Argument `next` aufgerufen, das verwendet werden kann, um Fehler an die Express-Middleware-Kette weiterzugeben.

Der untenstehende Code zeigt, wie dies funktioniert, am Beispiel einer Datenbankabfrage, die eine Callback-Funktion übernimmt und entweder einen Fehler `err` oder einige Ergebnisse zurückgibt.
Wenn `err` zurückgegeben wird, wird `next` mit `err` als Wert in seinem ersten Parameter aufgerufen (der Fehler wird letztendlich an unseren globalen Fehlerbehandlungscode weitergegeben).
Bei Erfolg werden die gewünschten Daten zurückgegeben und dann in der Antwort verwendet.

```js
router.get("/about", (req, res, next) => {
  About.find({}).exec((err, queryResults) => {
    if (err) {
      return next(err);
    }
    // Successful, so render
    res.render("about_view", { title: "About", list: queryResults });
  });
});
```

### Exception-Handling in Routefunktionen

Der vorherige Abschnitt zeigt, wie Express erwartet, dass Routenfunktionen Fehler zurückgeben.
Das Framework ist so konzipiert, dass asynchrone Funktionen verwendet werden können, die eine Callback-Funktion (mit einem Fehler und Ergebnisargument) annehmen, die aufgerufen wird, wenn die Operation abgeschlossen ist.
Das ist ein Problem, denn später werden wir Mongoose-Datenbankabfragen ausführen, die [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)-basierte APIs verwenden und die in unseren Routenfunktionen Ausnahmen werfen könnten (anstatt Fehler in einem Callback zurückzugeben).

Damit das Framework Ausnahmen richtig handhaben kann, müssen sie abgefangen und dann als Fehler weitergeleitet werden, wie im vorherigen Abschnitt gezeigt.

> [!NOTE]
> Express 5, das derzeit in der Beta-Phase ist, soll JavaScript-Ausnahmen nativ handhaben können.

Um das einfache Beispiel aus dem vorherigen Abschnitt mit `About.find().exec()` als einer Datenbankabfrage, die ein Versprechen zurückgibt, neu zu gestalten, könnten wir die Routenfunktion innerhalb eines [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Blocks wie folgt schreiben:

```js
exports.get("/about", async function (req, res, next) {
  try {
    const successfulResult = await About.find({}).exec();
    res.render("about_view", { title: "About", list: successfulResult });
  } catch (error) {
    return next(error);
  }
});
```

Das ist ziemlich viel Boilerplate-Code, den man in jede Funktion einfügen muss.
Stattdessen verwenden wir für dieses Tutorial das Modul [express-async-handler](https://www.npmjs.com/package/express-async-handler).
Dieses definiert eine Wrapper-Funktion, die den `try...catch` Block und den Code zum Weiterleiten des Fehlers ausblendet.
Dasselbe Beispiel ist jetzt sehr einfach, weil wir nur den Code für den Fall schreiben müssen, dass wir Erfolg annehmen:

```js
// Import the module
const asyncHandler = require("express-async-handler");

exports.get(
  "/about",
  asyncHandler(async (req, res, next) => {
    const successfulResult = await About.find({}).exec();
    res.render("about_view", { title: "About", list: successfulResult });
  }),
);
```

## Für die LocalLibrary benötigte Routen

Die URLs, die wir letztendlich für unsere Seiten benötigen werden, sind unten aufgeführt, wobei _object_ durch den Namen jedes unserer Modelle (book, bookinstance, genre, author) ersetzt wird, _objects_ das Plural von object ist und _id_ das eindeutige Instanzfeld (`_id`), das jedem Mongoose-Modellinstanz standardmäßig zugewiesen wird.

- `catalog/` — Die Start-/Indexseite.
- `catalog/<objects>/` — Die Liste aller Bücher, Buchinstanzen, Genres oder Autoren (z.B. /`catalog/books/`, /`catalog/genres/`, etc.)
- `catalog/<object>/<id>` — Die Detailseite für ein bestimmtes Buch, Buchinstanz, Genre oder Autor mit dem angegebenen `_id`-Feldwert (z.B. `/catalog/book/584493c1f4887f06c0e67d37`).
- `catalog/<object>/create` — Das Formular, um ein neues Buch, Buchinstanz, Genre oder Autor zu erstellen (z.B. `/catalog/book/create`).
- `catalog/<object>/<id>/update` — Das Formular, um ein bestimmtes Buch, Buchinstanz, Genre oder Autor mit dem angegebenen `_id`-Feldwert zu aktualisieren (z.B. `/catalog/book/584493c1f4887f06c0e67d37/update`).
- `catalog/<object>/<id>/delete` — Das Formular, um ein bestimmtes Buch, Buchinstanz, Genre oder Autor mit dem angegebenen `_id`-Feldwert zu löschen (z.B. `/catalog/book/584493c1f4887f06c0e67d37/delete`).

Die erste Startseite und Listen-Seiten kodieren keine zusätzlichen Informationen. Während die zurückgegebenen Ergebnisse je nach Modelltyp und dem Inhalt in der Datenbank variieren, werden die Abfragen, die ausgeführt werden, um die Informationen abzurufen, immer die gleichen sein (ähnlich wie der Code, der für die Objekterstellung ausgeführt wird, immer ähnlich sein wird).

Im Gegensatz dazu werden die anderen URLs verwendet, um auf ein bestimmtes Dokument/Modellinstanz zu reagieren — diese kodieren die Identität des Elements in der URL (oben als `<id>` angezeigt). Wir werden Pfadparameter verwenden, um die kodierten Informationen zu extrahieren und an den Routenhandler zu übergeben (und in einem späteren Artikel werden wir dies verwenden, um dynamisch zu bestimmen, welche Informationen wir aus der Datenbank abrufen). Indem wir die Informationen in unserer URL kodieren, benötigen wir nur eine Route für jede Ressource eines bestimmten Typs (z.B. eine Route, um die Anzeige jedes einzelnen Buchs zu behandeln).

> [!NOTE]
> Express ermöglicht es Ihnen, Ihre URLs so zu konstruieren, wie Sie möchten — Sie können Informationen im Körper der URL wie oben gezeigt kodieren oder URL `GET`-Parameter verwenden (z.B. `/book/?id=6`). Unabhängig davon, welchen Ansatz Sie verwenden, sollten die URLs sauber, logisch und lesbar gehalten werden ([siehe W3C-Ratschläge hier](https://www.w3.org/Provider/Style/URI)).

Als nächstes erstellen wir unsere Routen-Handler-Callback-Funktionen und den Routencode für alle oben genannten URLs.

## Erstellen der Routen-Handler Callback-Funktionen

Bevor wir unsere Routen definieren, erstellen wir zunächst alle Dummy-/Skelett-Callback-Funktionen, die sie aufrufen werden. Die Callbacks werden in separaten "Controller"-Modulen für `Book`, `BookInstance`, `Genre`, und `Author` gespeichert (Sie können jede Datei/Modulstruktur verwenden, aber dies scheint eine geeignete Granularität für dieses Projekt zu sein).

Beginnen Sie mit der Erstellung eines Verzeichnisses für unsere Controller im Projektstammverzeichnis (**/controllers**) und erstellen Sie dann separate Controller-Dateien/Module zur Behandlung jedes der Modelle:

```plain
/express-locallibrary-tutorial  # the project root
  /controllers
    authorController.js
    bookController.js
    bookinstanceController.js
    genreController.js
```

Die Controller verwenden das `express-async-handler` Modul, also installieren Sie es, bevor Sie fortfahren, in der Bibliothek mit `npm`:

```bash
npm install express-async-handler
```

### Author Controller

Öffnen Sie die Datei **/controllers/authorController.js** und geben Sie den folgenden Code ein:

```js
const Author = require("../models/author");
const asyncHandler = require("express-async-handler");

// Display list of all Authors.
exports.author_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author list");
});

// Display detail page for a specific Author.
exports.author_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Author detail: ${req.params.id}`);
});

// Display Author create form on GET.
exports.author_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author create GET");
});

// Handle Author create on POST.
exports.author_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author create POST");
});

// Display Author delete form on GET.
exports.author_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author delete GET");
});

// Handle Author delete on POST.
exports.author_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author delete POST");
});

// Display Author update form on GET.
exports.author_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author update GET");
});

// Handle Author update on POST.
exports.author_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author update POST");
});
```

Das Modul erfordert zunächst das `Author`-Modell, das wir später zum Zugreifen und Aktualisieren unserer Daten verwenden werden, und den `asyncHandler`-Wrapper, den wir verwenden, um alle in unseren Routen-Handler-Funktionen ausgenommenen Ausnahmen zu erfassen. Dann exportiert es Funktionen für jede der URLs, die wir behandeln möchten. Beachten Sie, dass die Erstell-, Aktualisierungs- und Löschungsoperationen Formulare verwenden und daher auch zusätzliche Methoden zum Bearbeiten von Formular-Post-Anfragen haben — wir werden diese Methoden im "Formular-Artikel" später besprechen.

Die Funktionen verwenden alle die Wrapper-Funktion, die oben in [Umgang mit Ausnahmen in Routen-Funktionen](#exception-handling_in_routefunktionen) beschrieben wird, mit Argumenten für die Anfrage, die Antwort und das nächste. Die Funktionen antworten mit einem String, der anzeigt, dass die zugehörige Seite noch nicht erstellt wurde. Wenn eine Controller-Funktion erwartet, dass sie Pfadparameter erhält, werden diese im Nachrichten-String ausgegeben (siehe `req.params.id` oben).

Beachten Sie, dass einige Routenfunktionen, sobald sie implementiert sind, keinen Code enthalten könnten, der Ausnahmen werfen kann. Wir können diese beim Erreichen zu "normalen" Routen-Handler-Funktionen ändern.

#### BookInstance Controller

Öffnen Sie die Datei **/controllers/bookinstanceController.js** und kopieren Sie den folgenden Code (dies folgt einem identischen Muster wie das `Author` Controller-Modul):

```js
const BookInstance = require("../models/bookinstance");
const asyncHandler = require("express-async-handler");

// Display list of all BookInstances.
exports.bookinstance_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance list");
});

// Display detail page for a specific BookInstance.
exports.bookinstance_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: BookInstance detail: ${req.params.id}`);
});

// Display BookInstance create form on GET.
exports.bookinstance_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance create GET");
});

// Handle BookInstance create on POST.
exports.bookinstance_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance create POST");
});

// Display BookInstance delete form on GET.
exports.bookinstance_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance delete GET");
});

// Handle BookInstance delete on POST.
exports.bookinstance_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance delete POST");
});

// Display BookInstance update form on GET.
exports.bookinstance_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance update GET");
});

// Handle bookinstance update on POST.
exports.bookinstance_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance update POST");
});
```

#### Genre Controller

Öffnen Sie die Datei **/controllers/genreController.js** und kopieren Sie den folgenden Text (dies folgt einem identischen Muster wie die `Author` und `BookInstance` Dateien):

```js
const Genre = require("../models/genre");
const asyncHandler = require("express-async-handler");

// Display list of all Genre.
exports.genre_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre list");
});

// Display detail page for a specific Genre.
exports.genre_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Genre detail: ${req.params.id}`);
});

// Display Genre create form on GET.
exports.genre_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre create GET");
});

// Handle Genre create on POST.
exports.genre_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre create POST");
});

// Display Genre delete form on GET.
exports.genre_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre delete GET");
});

// Handle Genre delete on POST.
exports.genre_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre delete POST");
});

// Display Genre update form on GET.
exports.genre_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre update GET");
});

// Handle Genre update on POST.
exports.genre_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre update POST");
});
```

#### Book Controller

Öffnen Sie die Datei **/controllers/bookController.js** und kopieren Sie den folgenden Code. Dies folgt dem gleichen Muster wie die anderen Controller-Module, hat jedoch zusätzlich eine `index()`-Funktion zur Anzeige der Seitenbegrüßungsseite:

```js
const Book = require("../models/book");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Site Home Page");
});

// Display list of all books.
exports.book_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book list");
});

// Display detail page for a specific book.
exports.book_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Book detail: ${req.params.id}`);
});

// Display book create form on GET.
exports.book_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book create GET");
});

// Handle book create on POST.
exports.book_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book create POST");
});

// Display book delete form on GET.
exports.book_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book delete GET");
});

// Handle book delete on POST.
exports.book_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book delete POST");
});

// Display book update form on GET.
exports.book_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book update GET");
});

// Handle book update on POST.
exports.book_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book update POST");
});
```

## Erstellen des Katalog-Routenmoduls

Als nächstes erstellen wir _Routen_ für alle URLs [die auf der Website der LocalLibrary benötigt werden](#für_die_locallibrary_benötigte_routen), die die Controller-Funktionen aufrufen, die wir in den vorherigen Abschnitten definiert haben.

Das Skelett hat bereits einen **./routes**-Ordner, der Routen für den _Index_ und _Nutzer_ enthält. Erstellen Sie eine weitere Routendatei — **catalog.js** — in diesem Ordner, wie gezeigt.

```plain
/express-locallibrary-tutorial # the project root
  /routes
    index.js
    users.js
    catalog.js
```

Öffnen Sie **/routes/catalog.js** und kopieren Sie den untenstehenden Code:

```js
const express = require("express");
const router = express.Router();

// Require controller modules.
const book_controller = require("../controllers/bookController");
const author_controller = require("../controllers/authorController");
const genre_controller = require("../controllers/genreController");
const book_instance_controller = require("../controllers/bookinstanceController");

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

Die Routen sind entweder mit `.get()` oder `.post()`-Methoden auf dem Router-Objekt definiert. Alle Pfade sind mit Strings definiert (wir verwenden keine Zeichenkettenmuster oder regulären Ausdrücke). Routen, die auf eine spezifische Ressource (z.B. Buch) wirken, verwenden Pfadparameter, um die Objekt-ID von der URL zu erhalten.

Die Handler-Funktionen werden alle von den Controller-Modulen importiert, die wir im vorherigen Abschnitt erstellt haben.

### Update des Index-Routenmoduls

Wir haben alle unsere neuen Routen eingerichtet, aber wir haben immer noch eine Route zur ursprünglichen Seite. Lass uns stattdessen zu der neuen Indexseite weiterleiten, die wir am Pfad '/catalog' erstellt haben.

Öffnen Sie **/routes/index.js** und ersetzen Sie die bestehende Route mit der folgenden Funktion.

```js
// GET home page.
router.get("/", function (req, res) {
  res.redirect("/catalog");
});
```

> [!NOTE]
> Dies ist unsere erste Verwendung der [redirect()](https://expressjs.com/en/4x/api.html#res.redirect) Antwortmethode. Dies leitet auf die angegebene Seite weiter, indem standardmäßig der HTTP-Statuscode "302 Found" gesendet wird. Sie können den zurückgegebenen Statuscode bei Bedarf ändern und entweder absolute oder relative Pfade angeben.

### Update von app.js

Der letzte Schritt besteht darin, die Routen in die Middleware-Kette hinzuzufügen. Dies tun wir in `app.js`.

Öffnen Sie **app.js** und binden Sie die Katalogroute unterhalb der anderen Routen ein (fügen Sie die dritte Zeile unten hinzu, darunter die beiden anderen, die bereits in der Datei enthalten sein sollten):

```js
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const catalogRouter = require("./routes/catalog"); // Import routes for "catalog" area of site
```

Fügen Sie dann die Katalogroute der Middleware-Stapelung unter den anderen Routen hinzu (fügen Sie die dritte Zeile unten hinzu, darunter die beiden anderen, die bereits in der Datei enthalten sein sollten):

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/catalog", catalogRouter); // Add catalog routes to middleware chain.
```

> [!NOTE]
> Wir haben unser Katalogmodul auf einem Pfad `'/catalog'` hinzugefügt. Dieser wird allen im Katalogmodul definierten Pfaden vorangestellt. Zum Beispiel wird die URL, um eine Liste von Büchern zu erhalten, `/catalog/books/` sein.

Das ist es. Wir sollten jetzt Routen und Skelettfunktionen für alle URLs aktiviert haben, die wir letztendlich auf der LocalLibrary-Website unterstützen werden.

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

Navigieren Sie dann zu einer Reihe von LocalLibrary-URLs und vergewissern Sie sich, dass Sie keine Fehlerseite (HTTP 404) erhalten. Eine kleine Anzahl von URLs ist unten aufgeführt, um Ihnen Bequemlichkeit zu bieten:

- `http://localhost:3000/`
- `http://localhost:3000/catalog`
- `http://localhost:3000/catalog/books`
- `http://localhost:3000/catalog/bookinstances/`
- `http://localhost:3000/catalog/authors/`
- `http://localhost:3000/catalog/genres/`
- `http://localhost:3000/catalog/book/5846437593935e2f8c2aa226`
- `http://localhost:3000/catalog/book/create`

## Zusammenfassung

Wir haben nun alle Routen für unsere Seite erstellt, zusammen mit Dummy-Controller-Funktionen, die wir in späteren Artikeln mit einer vollständigen Implementierung ausfüllen können. Unterwegs haben wir eine Menge grundlegender Informationen über Express-Routen, den Umgang mit Ausnahmen und einige Ansätze zur Strukturierung unserer Routen und Controller gelernt.

In unserem nächsten Artikel erstellen wir eine ordnungsgemäße Begrüßungsseite für die Website, mit Vorlagen (templates) und Informationen, die in unseren Modellen gespeichert sind.

## Siehe auch

- [Grundlegendes Routing](https://expressjs.com/en/starter/basic-routing.html) (Express-Dokumentation)
- [Routing-Leitfaden](https://expressjs.com/en/guide/routing.html) (Express-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
