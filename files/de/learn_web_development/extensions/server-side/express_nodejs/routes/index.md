---
title: "Express Tutorial Teil 4: Routen und Controller"
short-title: "4: Routen und Controller"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/routes
l10n:
  sourceCommit: e6d43da6c6d28a6ac92cdd47882809ffbdf987ce
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

In diesem Tutorial richten wir Routen (Code zum URL-Handling) mit „Dummy“-Handler-Funktionen für alle Ressourcenendpunkte ein, die wir letztendlich auf der [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) Website benötigen. Nach Abschluss haben wir eine modulare Struktur für unseren Routen-Handling-Code, die wir in den folgenden Artikeln mit echten Handler-Funktionen erweitern können. Wir werden auch ein wirklich gutes Verständnis dafür haben, wie man modulare Routen mit Express erstellt!

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
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie man einfache Routen erstellt.
        Alle unsere URL-Endpunkte einrichten.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Im [letzten Tutorialartikel](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose) haben wir _Mongoose_-Modelle definiert, um mit der Datenbank zu interagieren, und ein (eigenständiges) Skript verwendet, um einige anfängliche Bibliothekseinträge zu erstellen. Jetzt können wir den Code schreiben, um diese Informationen den Benutzern zu präsentieren. Zuerst müssen wir bestimmen, welche Informationen wir in unseren Seiten anzeigen möchten, und dann geeignete URLs definieren, um diese Ressourcen zurückzugeben. Dann müssen wir die Routen (URL-Handler) und Ansichten (Templates) erstellen, um diese Seiten anzuzeigen.

Das folgende Diagramm wird als Erinnerung an den Hauptdatenfluss und die Dinge bereitgestellt, die bei der Handhabung einer HTTP-Anfrage/Antwort umgesetzt werden müssen. Zusätzlich zu den Ansichten und Routen zeigt das Diagramm „Controller“ – Funktionen, die den Code zur Routenanfrage von dem Code, der Anfragen tatsächlich verarbeitet, trennen.

Da wir bereits die Modelle erstellt haben, müssen wir hauptsächlich folgende Dinge erstellen:

- "Routen", um die unterstützten Anfragen (und alle Informationen, die in Anfrage-URLs codiert sind) an die entsprechenden Controller-Funktionen weiterzuleiten.
- Controller-Funktionen, um die angeforderten Daten aus den Modellen zu erhalten, eine HTML-Seite anzuzeigen und diese dem Benutzer im Browser anzuzeigen.
- Ansichten (Templates), die von den Controllern verwendet werden, um die Daten anzuzeigen.

![Hauptdatenflussdiagramm eines MVC Express-Servers: „Routen“ empfangen die an den Express-Server gesendeten HTTP-Anfragen und leiten sie an die entsprechende „Controller“-Funktion weiter. Der Controller liest und schreibt Daten aus den Modellen. Modelle sind mit der Datenbank verbunden, um dem Server Zugriff auf die Daten zu bieten. Controller verwenden "Ansichten", auch Vorlagen genannt, um die Daten anzuzeigen. Der Controller sendet die HTML-HTTP-Antwort als HTTP-Antwort zurück an den Client.](mvc_express.png)

Letztendlich könnten wir Seiten haben, um Listen und Detailinformationen zu Büchern, Genres, Autoren und Buchinstanzen anzuzeigen, zusammen mit Seiten, um Einträge zu erstellen, zu aktualisieren und zu löschen. Das ist eine Menge zu dokumentieren in einem Artikel. Daher konzentriert sich der größte Teil dieses Artikels darauf, unsere Routen und Controller so einzurichten, dass sie „Dummy“-Inhalte zurückgeben. Wir werden die Controllermethoden in unseren nachfolgenden Artikeln erweitern, um mit Modelldaten zu arbeiten.

Der erste Abschnitt unten bietet ein kurzes "Primer", wie Sie die Express [Router](https://expressjs.com/en/4x/api.html#router) Middleware verwenden können. Diese Kenntnisse nutzen wir dann in den folgenden Abschnitten, wenn wir die LocalLibrary-Routen einrichten.

## Routen Primer

Eine Route ist ein Abschnitt von Express-Code, der ein HTTP-Verb (`GET`, `POST`, `PUT`, `DELETE` usw.), einen URL-Pfad/ein Muster und eine Funktion, die zur Bearbeitung dieses Musters aufgerufen wird, verknüpft.

Es gibt mehrere Möglichkeiten, Routen zu erstellen. Für dieses Tutorial werden wir die [`express.Router`](https://expressjs.com/en/guide/routing.html#express-router) Middleware verwenden, da sie es uns ermöglicht, die Routen-Handler für einen bestimmten Teil einer Website zusammenzufassen und mit einem gemeinsamen Routen-Präfix darauf zuzugreifen. Alle unsere bibliotheksbezogenen Routen speichern wir in einem „Katalog“-Modul und, wenn wir Routen zum Handling von Benutzerkonten oder anderen Funktionen hinzufügen, können wir diese separat gruppiert halten.

> [!NOTE]
> Wir haben Express-Anwendungsrouten kurz in unserer [Express Introduction > Creating route handlers](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#creating_route_handlers) besprochen. Abgesehen von der Bereitstellung einer besseren Unterstützung für die Modularisierung (wie im ersten Unterabschnitt unten besprochen), ist die Verwendung von _Router_ sehr ähnlich wie das direkte Definieren von Routen auf dem _Express application object_.

Der Rest dieses Abschnitts bietet einen Überblick darüber, wie der `Router` verwendet werden kann, um die Routen zu definieren.

### Definieren und Verwenden separater RoutenmModule

Der folgende Code bietet ein konkretes Beispiel dafür, wie wir ein RoutemModul erstellen und dann in einer _Express_ Anwendung verwenden können.

Zuerst erstellen wir Routen für ein Wiki in einem Modul namens **wiki.js**. Der Code importiert zuerst das Express-Anwendungsobjekt, verwendet es, um ein `Router`-Objekt zu erhalten, und fügt dann ein paar Routen hinzu, indem er die Methode `get()` verwendet. Schließlich exportiert das Modul das `Router`-Objekt.

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
> Wir definieren oben unsere Routen-Handler-Callbacks direkt in den Router-Funktionen. In der LocalLibrary werden wir diese Callbacks in einem separaten Controller-Modul definieren.

Um das Router-Modul in unserer Haupt-App-Datei zu verwenden, müssen wir das RoutemModul (**wiki.js**) zuerst mit `require()` einbinden. Dann rufen wir `use()` auf der _Express_ Anwendung auf, um den Router dem Middleware-Handling-Pfad hinzuzufügen und eine URL-Pfad von 'wiki' anzugeben.

```js
const wiki = require("./wiki.js");

// …
app.use("/wiki", wiki);
```

Die zwei Routen, die in unserem Wiki-Routenmodul definiert sind, sind dann von `/wiki/` und `/wiki/about/` aus zugänglich.

### Routenfunktionen

Unser obiges Modul definiert ein paar typische Routenfunktionen. Die "über"-Route (unten reproduziert) wird mit der `Router.get()` Methode definiert, die nur auf HTTP GET-Anfragen antwortet. Das erste Argument dieser Methode ist der URL-Pfad, während das zweite eine Callback-Funktion ist, die aufgerufen wird, wenn eine HTTP GET-Anfrage mit dem Pfad empfangen wird.

```js
router.get("/about", function (req, res) {
  res.send("About this wiki");
});
```

Das Callback akzeptiert drei Argumente (normalerweise wie gezeigt benannt: `req`, `res`, `next`), die das HTTP Request-Objekt, die HTTP-Antwort und die _next_ Funktion in der Middleware-Kette enthalten.

> [!NOTE]
> Router-Funktionen sind [Express middleware](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#using_middleware), was bedeutet, dass sie entweder die Anfrage abschließen (beantworten) oder die `next`-Funktion in der Kette aufrufen müssen. Im obigen Fall schließen wir die Anfrage mit `send()` ab, sodass das `next`-Argument nicht verwendet wird (und wir uns dafür entscheiden, es nicht zu spezifizieren).
>
> Die obige Router-Funktion akzeptiert ein einziges Callback, aber Sie können so viele Callback-Argumente angeben, wie Sie möchten, oder ein Array von Callback-Funktionen. Jede Funktion ist Teil der Middleware-Kette und wird in der Reihenfolge aufgerufen, in der sie der Kette hinzugefügt wurde (es sei denn, eine vorherige Funktion schließt die Anfrage ab).

Die Callback-Funktion hier ruft [`send()`](https://expressjs.com/en/4x/api.html#res.send) auf der Antwort auf, um den String "About this wiki" zurückzugeben, wenn wir eine GET-Anfrage mit dem Pfad (`/about`) erhalten. Es gibt eine [Reihe anderer Antwortmethoden](https://expressjs.com/en/guide/routing.html#response-methods) zum Beenden des Anfragen-/Antwortzyklus. Zum Beispiel könnten Sie [`res.json()`](https://expressjs.com/en/4x/api.html#res.json) aufrufen, um eine JSON-Antwort zu senden, oder [`res.sendFile()`](https://expressjs.com/en/4x/api.html#res.sendFile), um eine Datei zu senden. Die Antwortmethode, die wir am häufigsten verwenden werden, wenn wir die Bibliothek aufbauen, ist [`render()`](https://expressjs.com/en/4x/api.html#res.render), die HTML-Dateien mit Templates und Daten erstellt und zurückgibt. Darüber werden wir im späteren Artikel viel mehr sprechen!

### HTTP-Verben

Die obigen Beispielrouten verwenden die `Router.get()` Methode, um auf HTTP GET-Anfragen mit einem bestimmten Pfad zu antworten.

Der `Router` bietet auch Routenmethoden für alle anderen HTTP-Verben, die meist auf die gleiche Weise verwendet werden: `post()`, `put()`, `delete()`, `options()`, `trace()`, `copy()`, `lock()`, `mkcol()`, `move()`, `purge()`, `propfind()`, `proppatch()`, `unlock()`, `report()`, `mkactivity()`, `checkout()`, `merge()`, `m-search()`, `notify()`, `subscribe()`, `unsubscribe()`, `patch()`, `search()`, und `connect()`.

Zum Beispiel verhält sich der untenstehende Code genauso wie die vorherige `/about` Route, antwortet jedoch nur auf HTTP POST-Anfragen.

```js
router.post("/about", (req, res) => {
  res.send("About this wiki");
});
```

### Routenpfade

Die Routenpfade definieren die Endpunkte, an denen Anfragen gestellt werden können. Die Beispiele, die wir bisher gesehen haben, waren einfach Strings und werden genau so verwendet, wie sie geschrieben sind: '/', '/about', '/book', '/any-random.path'.

Routenpfade können auch Stringmuster sein. Stringmuster verwenden eine Form der regulären Ausdrückesyntax, um _Muster_ von Endpunkten zu definieren, die übereinstimmen. Die Syntax ist unten aufgeführt (beachten Sie, dass der Bindestrich (`-`) und der Punkt (`.`) von stringbasierten Pfaden wörtlich interpretiert werden):

- `?` : Der Endpunkt muss 0 oder 1 des vorhergehenden Zeichens (oder Gruppe) haben, z.B. ein Routenpfad von `'/ab?cd'` wird die Endpunkte `acd` oder `abcd` entsprechen.
- `+` : Der Endpunkt muss 1 oder mehr des vorhergehenden Zeichens (oder Gruppe) haben, z.B. ein Routenpfad von `'/ab+cd'` wird die Endpunkte `abcd`, `abbcd`, `abbbcd` und so weiter entsprechen.
- `*` : Der Endpunkt kann einen beliebigen String an der Stelle haben, an der das `*` Zeichen platziert ist. Z.B. ein Routenpfad von `'/ab*cd'` wird die Endpunkte `abcd`, `abXcd`, `abSOMErandomTEXTcd` und so weiter entsprechen.
- `()` : Gruppieren, um eine Übereinstimmung bei einem Set von Zeichen auszuführen, z.B. `'/ab(cd)?e'` führt eine `?`-Übereinstimmung bei der Gruppe `(cd)` aus – es wird mit `abe` und `abcde` übereinstimmen.

Die Routenpfade können auch JavaScript [reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) sein. Zum Beispiel wird der folgende Routenpfad `catfish` und `dogfish`, aber nicht `catflap`, `catfishhead` usw. entsprechen. Beachten Sie, dass der Pfad für einen regulären Ausdruck reguläre Ausdrucksyntax verwendet (es ist nicht ein zitierter String wie in den vorherigen Fällen).

```js
app.get(/.*fish$/, function (req, res) {
  // …
});
```

> [!NOTE]
> Die meisten unserer Routen für die LocalLibrary werden Strings und keine regulären Ausdrücke verwenden. Wir werden auch Routenparameter wie im nächsten Abschnitt besprochen verwenden.

### Routenparameter

Routenparameter sind _benannte URL-Segmente_, die verwendet werden, um Werte an bestimmten Positionen in der URL zu erfassen. Die benannten Segmente erhalten einen vorangestellten Doppelpunkt und dann den Namen (z.B. `/:your_parameter_name/`). Die erfassten Werte werden im `req.params` Objekt unter Verwendung der Parameternamen als Schlüssel gespeichert (z.B. `req.params.your_parameter_name`).

Zum Beispiel nehmen wir an, eine URL ist kodiert, um Informationen über Benutzer und Bücher zu enthalten: `http://localhost:3000/users/34/books/8989`. Wir können diese Informationen wie unten gezeigt extrahieren, mit den `userId` und `bookId` Pfadparametern:

```js
app.get("/users/:userId/books/:bookId", (req, res) => {
  // Access userId via: req.params.userId
  // Access bookId via: req.params.bookId
  res.send(req.params);
});
```

Die Namen der Routenparameter müssen aus „Wortzeichen“ bestehen (A-Z, a-z, 0-9 und \_).

> [!NOTE]
> Die URL _/book/create_ wird mit einer Route wie `/book/:bookId` übereinstimmen (weil `:bookId` ein Platzhalter für _jeden_ String ist, daher stimmt `create` überein). Die erste Route, die mit einer eingehenden URL übereinstimmt, wird verwendet. Wenn Sie `/book/create` URLs speziell bearbeiten möchten, muss ihr Routen-Handler vor Ihrer `/book/:bookId` Route definiert werden.

Das ist alles, was Sie brauchen, um mit den Routen zu beginnen – bei Bedarf können Sie weitere Informationen in den Express-Dokumentationen finden: [Basic routing](https://expressjs.com/en/starter/basic-routing.html) und [Routing guide](https://expressjs.com/en/guide/routing.html). Die folgenden Abschnitte zeigen, wie wir unsere Routen und Controller für die LocalLibrary einrichten werden.

### Fehlerhandling in den Routenfunktionen

Die zuvor gezeigten Routenfunktionen haben alle Argumente `req` und `res`, die die Anfrage und Antwort darstellen.
Routenfunktionen werden auch mit einem dritten Argument `next` aufgerufen, das verwendet werden kann, um Fehler an die Express-Middleware-Kette weiterzuleiten.

Der folgende Code zeigt, wie das funktioniert, am Beispiel einer Datenbankabfrage, die einen Callback-Funktion nimmt und entweder einen Fehler `err` oder einige Ergebnisse zurückgibt.
Wird `err` zurückgegeben, wird `next` mit `err` als Wert in seinem ersten Parameter aufgerufen (der Fehler wird schließlich an unseren globalen Fehlercode weitergegeben).
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

### Ausnahmehandling in Routenfunktionen

Der vorherige Abschnitt zeigt, wie Express erwartet, dass Routenfunktionen Fehler zurückgeben.
Das Framework ist für die Verwendung mit asynchronen Funktionen gestaltet, die eine Callback-Funktion nehmen (mit einem Fehler- und Ergebnisargument), die aufgerufen wird, wenn der Vorgang abgeschlossen ist.
Das stellt ein Problem dar, weil wir später Mongoose-Datenbankabfragen machen werden, die [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)-basierte APIs verwenden und die in unseren Routenfunktionen Ausnahmen auslösen könnten (anstatt Fehler in einem Callback zurückzugeben).

Daher müssen Ausnahmen erfasst und dann als Fehler weitergeleitet werden, wie im vorherigen Abschnitt gezeigt.

> [!NOTE]
> Express 5, das sich derzeit in der Betaphase befindet, wird voraussichtlich in der Lage sein, JavaScript-Ausnahmen nativ zu verarbeiten.

An neu vorgestelltes einfaches Beispiel aus dem vorherigen Abschnitt mit `About.find().exec()` als Datenbankabfrage, die ein Versprechen zurückgibt, könnten wir die Routenfunktion in einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Block folgendermaßen schreiben:

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

Das ist eine ganze Menge Boilerplate-Code, der zu jeder Funktion hinzugefügt werden muss.
Stattdessen verwenden wir für dieses Tutorial das [express-async-handler](https://www.npmjs.com/package/express-async-handler) Modul.
Dieses definiert eine Wrapper-Funktion, die den `try...catch` Block und den Code zum Weiterleiten des Fehlers verbirgt.
Das gleiche Beispiel ist nun sehr einfach, da wir nur den Code für den Fall schreiben müssen, in dem wir Erfolg annehmen:

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

## Routen benötigt für die LocalLibrary

Die URLs, die wir letztendlich für unsere Seiten benötigen, sind unten aufgeführt, wobei _object_ durch den Namen jedes unserer Modelle (book, bookinstance, genre, author), _objects_ die Mehrzahl von object ist und _id_ das eindeutige Instanzfeld (`_id`) ist, das jedem Mongoose Modell-Instanz standardmäßig zugewiesen wird.

- `catalog/` — Die Start-/Indexseite.
- `catalog/<objects>/` — Die Liste aller Bücher, Buchinstanzen, Genres oder Autoren (z.B. `/catalog/books/`, `/catalog/genres/`, usw.)
- `catalog/<object>/<id>` — Die Detailseite für ein bestimmtes Buch, eine Buchinstanz, ein Genre oder einen Autor mit dem angegebenen `_id` Feldwert (z.B. `/catalog/book/584493c1f4887f06c0e67d37)`).
- `catalog/<object>/create` — Das Formular, um ein neues Buch, eine neue Buchinstanz, ein neues Genre oder einen neuen Autor zu erstellen (z.B. `/catalog/book/create)`).
- `catalog/<object>/<id>/update` — Das Formular, um ein bestimmtes Buch, eine Buchinstanz, ein Genre oder einen Autor mit dem angegebenen `_id` Feldwert zu aktualisieren (z.B. `/catalog/book/584493c1f4887f06c0e67d37/update)`).
- `catalog/<object>/<id>/delete` — Das Formular, um ein bestimmtes Buch, eine Buchinstanz, ein Genre oder einen Autor mit dem angegebenen `_id` Feldwert zu löschen (z.B. `/catalog/book/584493c1f4887f06c0e67d37/delete)`).

Die erste Startseite und die Listen-Seiten kodieren keine zusätzlichen Informationen. Während die zurückgegebenen Ergebnisse vom Modelltyp und dem Inhalt in der Datenbank abhängen, werden die Abfragen, die zum Abrufen der Informationen ausgeführt werden, immer gleich sein (ähnlich wird der Code, der für das Erstellen eines Objekts ausgeführt wird, immer ähnlich sein).

Im Gegensatz dazu werden die anderen URLs verwendet, um auf ein bestimmtes Dokument/Modellinstanz zuzugreifen – diese kodieren die Identität des Elements in der URL (wie oben als `<id>` gezeigt). Wir werden Pfadparameter verwenden, um die kodierten Informationen zu extrahieren und an den Routen-Handler zu übergeben (und in einem späteren Artikel werden wir dies verwenden, um dynamisch zu bestimmen, welche Informationen wir aus der Datenbank abrufen). Indem wir die Informationen in unserer URL kodieren, benötigen wir nur eine Route für jede Ressource eines bestimmten Typs (z.B. eine Route, um die Anzeige jedes einzelnen Buchelements zu bearbeiten).

> [!NOTE]
> Express erlaubt es Ihnen, Ihre URLs auf jede gewünschte Weise zu konstruieren – Sie können Informationen im Körper der URL wie oben gezeigt kodieren oder URL `GET`-Parameter verwenden (z.B. `/book/?id=6`). Welche Methode Sie auch immer verwenden, die URLs sollten sauber, logisch und lesbar gehalten werden ([sehen Sie sich die W3C-Empfehlung hier an](https://www.w3.org/Provider/Style/URI)).

Als nächstes erstellen wir unsere Routen-Handler-Callback-Funktionen und Routencode für alle oben genannten URLs.

## Erstellen der Routen-Handler-Callback-Funktionen

Bevor wir unsere Routen definieren, erstellen wir zuerst alle Dummy-/Skelett-Callback-Funktionen, die sie aufrufen werden. Die Callbacks werden in separaten „Controller“-Modulen für `Book`, `BookInstance`, `Genre` und `Author` gespeichert (Sie können jede Datei-/Modulstruktur verwenden, aber dies scheint eine geeignete Granularität für dieses Projekt zu sein).

Beginnen Sie damit, einen Ordner für unsere Controller im Projektstammverzeichnis (**/controllers**) zu erstellen, und legen Sie dann separate Controller-Dateien/Module zur Behandlung der einzelnen Modelle an:

```plain
/express-locallibrary-tutorial  # the project root
  /controllers
    authorController.js
    bookController.js
    bookinstanceController.js
    genreController.js
```

Die Controller verwenden das `express-async-handler` Modul, also installieren Sie es, bevor Sie fortfahren, mit `npm` in die Bibliothek:

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

Das Modul erfordert zuerst das `Author` Modell, das wir später verwenden werden, um auf unsere Daten zuzugreifen und sie zu aktualisieren, und den `asyncHandler` Wrapper, den wir verwenden werden, um alle in unseren Routen-Handler-Funktionen geworfenen Ausnahmen abzufangen. Danach exportiert es Funktionen für jede der URLs, die wir behandeln wollen. Beachten Sie, dass die Erstellungs-, Aktualisierungs- und Löschvorgänge Formulare verwenden und daher auch zusätzliche Methoden haben, um Formular-POST-Anfragen zu behandeln – wir werden diese Methoden im „Formularartikel“ später besprechen.

Die Funktionen verwenden alle die oben beschriebene Wrapper-Funktion in [Ausnahmen in Routenfunktionen behandeln](#ausnahmehandling_in_routenfunktionen), mit Argumenten für die Anfrage, die Antwort und das next. Die Funktionen antworten mit einem String, der angibt, dass die zugehörige Seite noch nicht erstellt wurde. Wenn eine Controller-Funktion erwartet, Pfadparameter zu empfangen, werden diese in der Nachrichtenzeichenfolge ausgegeben (siehe `req.params.id` oben).

Beachten Sie, dass einige Routenfunktionen im endgültigen Status keinen Code enthalten könnten, der Ausnahmen auslösen kann. Wir können diese wieder in „normale“ Routen-Handler-Funktionen ändern, wenn wir zu diesen gelangen.

#### BookInstance Controller

Öffnen Sie die Datei **/controllers/bookinstanceController.js** und kopieren Sie den folgenden Code ein (dies folgt einem identischen Muster wie das `Author` Controller Modul):

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

Öffnen Sie die Datei **/controllers/genreController.js** und kopieren Sie die folgenden Texte ein (dies folgt einem identischen Muster wie die `Author` und `BookInstance` Dateien):

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

Öffnen Sie die Datei **/controllers/bookController.js** und kopieren Sie den folgenden Code ein. Dies folgt dem gleichen Muster wie die anderen Controller-Module, hat aber zusätzlich eine `index()` Funktion zur Anzeige der Startseite der Website:

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

Als nächstes erstellen wir _Routen_ für alle URLs [benötigt von der LocalLibrary-Website](#routen_benötigt_für_die_locallibrary), die die in den vorherigen Abschnitten definierten Controller-Funktionen aufrufen werden.

Das Skelett hat bereits einen **./routes** Ordner, der Routen für den _index_ und _users_ enthält. Erstellen Sie eine weitere Routendatei – **catalog.js** – in diesem Ordner, wie gezeigt.

```plain
/express-locallibrary-tutorial # the project root
  /routes
    index.js
    users.js
    catalog.js
```

Öffnen Sie **/routes/catalog.js** und kopieren Sie den folgenden Code:

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

Das Modul erfordert Express und verwendet es dann, um ein `Router` Objekt zu erstellen. Die Routen sind alle auf dem Router eingerichtet, der dann exportiert wird.

Die Routen werden entweder mit `.get()` oder `.post()` Methoden auf dem Router-Objekt definiert. Alle Pfade sind mit Strings definiert (wir verwenden keine Stringmuster oder regulären Ausdrücke). Routen, die auf einige spezifische Ressourcen (z.B. Buch) wirken, verwenden Pfadparameter, um die Objekt-ID aus der URL zu erhalten.

Die Handler-Funktionen sind alle aus den Controller-Modulen importiert, die wir im vorherigen Abschnitt erstellt haben.

### Update des Index-Routenmoduls

Wir haben alle unsere neuen Routen eingerichtet, aber wir haben noch eine Route zur ursprünglichen Seite. Stattdessen leiten wir diese zur neuen Startseite um, die wir unter dem Pfad '/catalog' erstellt haben.

Öffnen Sie **/routes/index.js** und ersetzen Sie die vorhandene Route mit der folgenden Funktion.

```js
// GET home page.
router.get("/", function (req, res) {
  res.redirect("/catalog");
});
```

> [!NOTE]
> Dies ist unsere erste Verwendung der [redirect()](https://expressjs.com/en/4x/api.html#res.redirect) Antwortmethode. Dies leitet zur angegebenen Seite um und sendet standardmäßig den HTTP-Statuscode „302 Found“. Sie können den zurückgegebenen Statuscode bei Bedarf ändern und entweder absolute oder relative Pfade angeben.

### Update der app.js

Der letzte Schritt besteht darin, die Routen zur Middleware-Kette hinzuzufügen. Wir tun dies in `app.js`.

Öffnen Sie **app.js** und erfordern Sie die Katalogroute unterhalb der anderen Routen (fügen Sie die dritte Zeile hinzu, die unten unterhalb der anderen zwei steht, die bereits in der Datei vorhanden sein sollten):

```js
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const catalogRouter = require("./routes/catalog"); // Import routes for "catalog" area of site
```

Fügen Sie als nächstes die Katalogroute zur Middleware-Stapel unterhalb der anderen Routen hinzu (fügen Sie die dritte Zeile hinzu, die unten unterhalb der anderen zwei steht, die bereits in der Datei vorhanden sein sollten):

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/catalog", catalogRouter); // Add catalog routes to middleware chain.
```

> [!NOTE]
> Wir haben unser Katalogmodul an einem Pfad `'catalog'` hinzugefügt. Dies wird allen im Katalogmodul definierten Pfaden vorangestellt. Um beispielsweise auf eine Liste von Büchern zuzugreifen, wird die URL: `/catalog/books/` sein.

Das war's. Wir sollten jetzt Routen und Skelettfunktionen für alle URLs haben, die wir auf der LocalLibrary-Website letztendlich unterstützen werden.

### Testen der Routen

Um die Routen zu testen, starten Sie zuerst die Website mit dem üblichen Ansatz

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

Navigieren Sie dann zu einer Reihe von LocalLibrary-URLs und vergewissern Sie sich, dass Sie keine Fehlermeldung (HTTP 404) erhalten. Eine kleine Auswahl von URLs wird unten zur Verfügung gestellt:

- `http://localhost:3000/`
- `http://localhost:3000/catalog`
- `http://localhost:3000/catalog/books`
- `http://localhost:3000/catalog/bookinstances/`
- `http://localhost:3000/catalog/authors/`
- `http://localhost:3000/catalog/genres/`
- `http://localhost:3000/catalog/book/5846437593935e2f8c2aa226`
- `http://localhost:3000/catalog/book/create`

## Zusammenfassung

Wir haben nun alle Routen für unsere Site erstellt, zusammen mit Dummy-Controller-Funktionen, die wir in späteren Artikeln mit einer vollständigen Implementierung ausfüllen können. Unterwegs haben wir viele grundlegende Informationen über Express-Routen, Fehlerbehandlung und einige Ansätze zur Strukturierung unserer Routen und Controller gelernt.

In unserem nächsten Artikel erstellen wir eine geeignete Startseite für die Site, indem wir Ansichten (Templates) und Informationen verwenden, die in unseren Modellen gespeichert sind.

## Siehe auch

- [Basic routing](https://expressjs.com/en/starter/basic-routing.html) (Express-Dokumentation)
- [Routing guide](https://expressjs.com/en/guide/routing.html) (Express-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
