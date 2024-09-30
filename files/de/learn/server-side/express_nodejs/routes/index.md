---
title: "Express Tutorial Teil 4: Routen und Controller"
slug: Learn/Server-side/Express_Nodejs/routes
l10n:
  sourceCommit: 1467f47e1944c151b368e047fe4f9cf7f1f0e0e2
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/mongoose", "Learn/Server-side/Express_Nodejs/Displaying_data", "Learn/Server-side/Express_Nodejs")}}

In diesem Tutorial richten wir Routen (URL-Verarbeitungscode) mit "Dummy"-Handler-Funktionen für alle Ressourcenziele ein, die wir schließlich auf der [LocalLibrary](/de/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) Website benötigen werden. Am Ende haben wir eine modulare Struktur für unseren Routenverarbeitungscode, die wir in den folgenden Artikeln mit echten Handler-Funktionen erweitern können. Wir werden auch ein sehr gutes Verständnis dafür haben, wie man modulare Routen mit Express erstellt!

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn/Server-side/Express_Nodejs/Introduction">Express/Node-Einführung</a>.
        Schließen Sie die vorherigen Tutorial-Themen ab (einschließlich <a href="/de/docs/Learn/Server-side/Express_Nodejs/mongoose">Express Tutorial Teil 3: Nutzung einer Datenbank (mit Mongoose)</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie man einfache Routen erstellt.
        Einrichten aller unserer URL-Ziele.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Im [letzten Tutorial-Artikel](/de/docs/Learn/Server-side/Express_Nodejs/mongoose) haben wir _Mongoose_-Modelle definiert, um mit der Datenbank zu interagieren, und ein (eigenständiges) Skript verwendet, um einige erste Bibliothekseinträge zu erstellen. Nun können wir den Code schreiben, um diese Informationen den Nutzern zu präsentieren. Das Erste, was wir tun müssen, ist zu bestimmen, welche Informationen wir auf unseren Seiten anzeigen wollen, und dann geeignete URLs für die Rückgabe dieser Ressourcen zu definieren. Dann müssen wir die Routen (URL-Handler) und Ansichten (Templates) erstellen, um diese Seiten anzuzeigen.

Das folgende Diagramm dient als Erinnerung an den Hauptdatenfluss und die Dinge, die bei der Verarbeitung eines HTTP-Anfrage-/Antwortzyklus implementiert werden müssen. Zusätzlich zu den Ansichten und Routen zeigt das Diagramm "Controller" — Funktionen, die den Code zur Routenanfrage von dem Code trennen, der die Anfragen tatsächlich verarbeitet.

Da wir die Modelle bereits erstellt haben, müssen wir hauptsächlich Folgendes erstellen:

- "Routen", um die unterstützten Anfragen (und alle in den Anfrage-URLs kodierten Informationen) an die entsprechenden Controller-Funktionen weiterzuleiten.
- Controller-Funktionen, um die angeforderten Daten von den Modellen abzurufen, eine HTML-Seite zu erstellen, die die Daten anzeigt, und diese an den Benutzer zurückzugeben, damit er sie im Browser ansehen kann.
- Ansichten (Templates), die von den Controllern zur Darstellung der Daten verwendet werden.

![Hauptdatenflussdiagramm eines MVC-Express-Servers: 'Routes' empfangen die an den Express-Server gesendeten HTTP-Anfragen und leiten sie an die entsprechende 'Controller'-Funktion weiter. Der Controller liest und schreibt Daten aus den Modellen. Modelle sind mit der Datenbank verbunden, um dem Server den Datenzugriff zu gewähren. Controller verwenden 'Views', auch Templates genannt, um die Daten darzustellen. Der Controller sendet die HTML-HTTP-Antwort als HTTP-Antwort zurück an den Client.](mvc_express.png)

Letztendlich könnten wir Seiten haben, die Listen und Detailinformationen für Bücher, Genres, Autoren und Buchinstanzen anzeigen, sowie Seiten zum Erstellen, Aktualisieren und Löschen von Einträgen. Das ist eine Menge, die in einem Artikel dokumentiert werden muss. Daher wird sich der größte Teil dieses Artikels darauf konzentrieren, unsere Routen und Controller so einzurichten, dass sie "Dummy"-Inhalte zurückgeben. Wir werden die Controller-Methoden in unseren nachfolgenden Artikeln erweitern, um mit Modelldaten zu arbeiten.

Der erste Abschnitt unten gibt eine kurze "Einführung" in die Verwendung des Express [Router](https://expressjs.com/en/4x/api.html#router) Middleware. Wir werden dieses Wissen dann in den folgenden Abschnitten verwenden, wenn wir die LocalLibrary-Routen einrichten.

## Einführung in Routen

Eine Route ist ein Abschnitt von Express-Code, der ein HTTP-Verb (`GET`, `POST`, `PUT`, `DELETE`, etc.), einen URL-Pfad/ein Muster und eine Funktion, die aufgerufen wird, um dieses Muster zu verarbeiten, verknüpft.

Es gibt mehrere Möglichkeiten, Routen zu erstellen. Für dieses Tutorial werden wir die [`express.Router`](https://expressjs.com/en/guide/routing.html#express-router) Middleware verwenden, da sie es uns ermöglicht, die Routen-Handler für einen bestimmten Teil einer Webseite zusammenzufassen und sie mit einem gemeinsamen Routen-Präfix zu verwenden. Wir werden alle unsere bibliotheksbezogenen Routen in einem "catalog"-Modul halten, und wenn wir Routen für die Verwaltung von Benutzerkonten oder anderen Funktionen hinzufügen, können wir sie getrennt gruppieren.

> [!NOTE]
> Wir haben Express-Anwendungsrouten kurz in unserer [Express-Einführung > Erstellung von Routen-Handlern](/de/docs/Learn/Server-side/Express_Nodejs/Introduction#creating_route_handlers) besprochen. Abgesehen von der besseren Unterstützung der Modularisierung (wie im ersten Unterabschnitt unten diskutiert) ist die Verwendung von _Router_ sehr ähnlich wie das direkte Definieren von Routen auf dem _Express-Anwendungsobjekt_.

Der Rest dieses Abschnitts bietet einen Überblick darüber, wie der `Router` verwendet werden kann, um Routen zu definieren.

### Definition und Nutzung separater Routen-Module

Der Code unten bietet ein konkretes Beispiel dafür, wie wir ein Routen-Modul erstellen können, um es dann in einer _Express_-Anwendung zu verwenden.

Zuerst erstellen wir Routen für ein Wiki in einem Modul namens **wiki.js**. Der Code importiert zuerst das Express-Anwendungsobjekt, verwendet es, um ein `Router`-Objekt zu erhalten, und fügt dann ein paar Routen mit der Methode `get()` hinzu. Zum Schluss exportiert das Modul das `Router`-Objekt.

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
> Oben definieren wir unsere Routen-Handler-Callbacks direkt in den Router-Funktionen. In der LocalLibrary werden wir diese Callbacks in einem separaten Controller-Modul definieren.

Um das Router-Modul in unserer Hauptanwendungsdatei zu verwenden, `require()` wir zuerst das Routen-Modul (**wiki.js**). Dann rufen wir `use()` auf dem _Express_-Anwendungsobjekt auf, um den Router zum Pfad der Middleware-Verarbeitung hinzuzufügen und einen URL-Pfad von 'wiki' anzugeben.

```js
const wiki = require("./wiki.js");
// …
app.use("/wiki", wiki);
```

Die beiden Routen, die in unserem Wiki-Routen-Modul definiert sind, sind dann von `/wiki/` und `/wiki/about/` aus zugänglich.

### Routenfunktionen

Unser obiges Modul definiert ein Paar typischer Routenfunktionen. Die "about"-Route (unten reproduziert) ist unter Verwendung der Methode `Router.get()` definiert, die nur auf HTTP-GET-Anfragen antwortet. Das erste Argument dieser Methode ist der URL-Pfad, während das zweite eine Callback-Funktion ist, die aufgerufen wird, wenn eine HTTP-GET-Anfrage mit dem Pfad empfangen wird.

```js
router.get("/about", function (req, res) {
  res.send("About this wiki");
});
```

Der Callback nimmt drei Argumente entgegen (in der Regel wie gezeigt benannt: `req`, `res`, `next`), die das HTTP-Request-Objekt, die HTTP-Antwort und die _nächste_ Funktion in der Middleware-Kette enthalten.

> [!NOTE]
> Router-Funktionen sind [Express-Middleware](/de/docs/Learn/Server-side/Express_Nodejs/Introduction#using_middleware), was bedeutet, dass sie die Anfrage entweder abschließen (beantworten) oder die `next`-Funktion in der Kette aufrufen müssen. Im obigen Fall schließen wir die Anfrage mit `send()` ab, sodass das `next`-Argument nicht verwendet wird (und wir entscheiden uns, es nicht zu spezifizieren).
>
> Die Router-Funktion oben nimmt einen einzelnen Callback an, aber Sie können so viele Callback-Argumente angeben, wie Sie möchten, oder ein Array von Callback-Funktionen. Jede Funktion ist Teil der Middleware-Kette und wird in der Reihenfolge aufgerufen, in der sie zur Kette hinzugefügt wird (es sei denn, eine vorherige Funktion schließt die Anfrage ab).

Die Callback-Funktion ruft hier [`send()`](https://expressjs.com/en/4x/api.html#res.send) für die Antwort auf, um die Zeichenfolge "About this wiki" zurückzugeben, wenn wir eine GET-Anfrage mit dem Pfad (`/about`) erhalten. Es gibt eine [Anzahl anderer Antwortmethoden](https://expressjs.com/en/guide/routing.html#response-methods), um den Anfrage-/Antwortzyklus zu beenden. Zum Beispiel können Sie [`res.json()`](https://expressjs.com/en/4x/api.html#res.json) aufrufen, um eine JSON-Antwort zu senden oder [`res.sendFile()`](https://expressjs.com/en/4x/api.html#res.sendFile), um eine Datei zu senden. Die Antwortmethode, die wir am häufigsten verwenden werden, wenn wir die Bibliothek aufbauen, ist [`render()`](https://expressjs.com/en/4x/api.html#res.render), die mithilfe von Templates und Daten HTML-Dateien erstellt und zurückgibt — darüber werden wir viel mehr in einem späteren Artikel sprechen!

### HTTP-Verben

Die obigen Beispielrouten verwenden die Methode `Router.get()`, um auf HTTP-GET-Anfragen mit einem bestimmten Pfad zu antworten.

Der `Router` bietet auch Routenmethoden für alle anderen HTTP-Verben, die überwiegend auf die gleiche Weise verwendet werden: `post()`, `put()`, `delete()`, `options()`, `trace()`, `copy()`, `lock()`, `mkcol()`, `move()`, `purge()`, `propfind()`, `proppatch()`, `unlock()`, `report()`, `mkactivity()`, `checkout()`, `merge()`, `m-search()`, `notify()`, `subscribe()`, `unsubscribe()`, `patch()`, `search()`, und `connect()`.

Zum Beispiel verhält sich der folgende Code genau wie die vorherige `/about`-Route, antwortet jedoch nur auf HTTP-POST-Anfragen.

```js
router.post("/about", (req, res) => {
  res.send("About this wiki");
});
```

### Routenpfade

Die Routenpfade definieren die Endpunkte, an denen Anfragen gemacht werden können. Die Beispiele, die wir bisher gesehen haben, waren nur Strings und werden genau so verwendet, wie sie geschrieben sind: '/', '/about', '/book', '/any-random.path'.

Routenpfade können auch String-Muster sein. String-Muster verwenden eine Art reguläre Ausdrucks-Syntax, um _Muster_ von Endpunkten zu definieren, die übereinstimmen. Die Syntax ist unten aufgeführt (beachten Sie, dass der Bindestrich (`-`) und der Punkt (`.`) von stringbasierten Pfaden wörtlich interpretiert werden):

- `?` : Der Endpunkt muss 0 oder 1 der vorhergehenden Zeichen (oder Gruppe) enthalten, z.B. ein Routenpfad von `'/ab?cd'` wird mit Endpunkten `acd` oder `abcd` übereinstimmen.
- `+` : Der Endpunkt muss 1 oder mehr der vorhergehenden Zeichen (oder Gruppe) enthalten, z.B. ein Routenpfad von `'/ab+cd'` wird mit Endpunkten `abcd`, `abbcd`, `abbbcd` und so weiter übereinstimmen.
- `*` : Der Endpunkt kann eine beliebige Zeichenfolge an der Stelle haben, an der das `*` steht. Zum Beispiel wird ein Routenpfad von `'/ab*cd'` mit den Endpunkten `abcd`, `abXcd`, `abSOMErandomTEXTcd` und so weiter übereinstimmen.
- `()` : Gruppierte Übereinstimmung für einen Satz von Zeichen, auf die eine andere Operation angewendet wird, z.B. `'/ab(cd)?e'` wird eine `?`-Übereinstimmung auf die Gruppe `(cd)` ausführen — es wird `abe` und `abcde` entsprechen.

Die Routenpfade können auch JavaScript [reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) sein. Zum Beispiel wird der folgende Routenpfad `catfish` und `dogfish` übereinstimmen, jedoch nicht `catflap`, `catfishhead` und so weiter. Beachten Sie, dass der Pfad für einen regulären Ausdruck reguläre Ausdrucks-Syntax verwendet (es ist kein quoted String wie in den vorherigen Fällen).

```js
app.get(/.*fish$/, function (req, res) {
  // …
});
```

> [!NOTE]
> Die meisten unserer Routen für die LocalLibrary werden Strings und keine regulären Ausdrücke verwenden. Wir werden auch Routenparameter verwenden, wie im nächsten Abschnitt erläutert.

### Routenparameter

Routenparameter sind _benannte URL-Segmente_, die verwendet werden, um Werte an bestimmten Positionen in der URL zu erfassen. Die benannten Segmente werden mit einem Doppelpunkt vorangestellt, gefolgt vom Namen (z.B. `/:your_parameter_name/`). Die erfassten Werte werden im `req.params`-Objekt unter Verwendung der Parameternamen als Schlüssel gespeichert (z.B. `req.params.your_parameter_name`).

Betrachten Sie also beispielsweise eine URL, die Informationen über Benutzer und Bücher enthält: `http://localhost:3000/users/34/books/8989`. Wir können diese Informationen wie unten gezeigt, mit den Path-Parametern `userId` und `bookId` extrahieren:

```js
app.get("/users/:userId/books/:bookId", (req, res) => {
  // Access userId via: req.params.userId
  // Access bookId via: req.params.bookId
  res.send(req.params);
});
```

Die Namen der Routenparameter müssen aus "Wortzeichen" bestehen (A-Z, a-z, 0-9 und \_).

> [!NOTE]
> Die URL _/book/create_ wird von einer Route wie `/book/:bookId` übereinstimmen (weil `:bookId` ein Platzhalter für _jedweden_ String ist, daher entspricht `create`). Die erste Route, die mit einer eingehenden URL übereinstimmt, wird verwendet, daher muss Ihr Routen-Handler für `/book/create` URLs vor Ihrer `/book/:bookId` Route definiert werden, wenn Sie diese spezifisch verarbeiten möchten.

Das ist alles, was Sie brauchen, um mit Routen zu beginnen - bei Bedarf können Sie weitere Informationen in den Express-Dokumentationen finden: [Basic routing](https://expressjs.com/en/starter/basic-routing.html) und [Routing guide](https://expressjs.com/en/guide/routing.html). Die folgenden Abschnitte zeigen, wie wir unsere Routen und Controller für die LocalLibrary einrichten werden.

### Fehlerbehandlung in Routenfunktionen

Die Routenfunktionen, die wir vorher gezeigt haben, haben die Argumente `req` und `res`, die die Anfrage bzw. die Antwort darstellen. Routenfunktionen werden auch mit einem dritten Argument `next` aufgerufen, das verwendet werden kann, um Fehler an die Express-Middleware-Kette weiterzugeben.

Der folgende Code zeigt, wie dies funktioniert, anhand des Beispiels einer Datenbankabfrage, die eine Callback-Funktion übernimmt und entweder einen Fehler `err` oder einige Ergebnisse zurückgibt. Wenn `err` zurückgegeben wird, wird `next` mit `err` als Wert in seinem ersten Parameter aufgerufen (letztendlich wird der Fehler an unseren globalen Fehlerbehandlungscode weitergeleitet). Im Erfolgsfall werden die gewünschten Daten zurückgegeben und dann in der Antwort verwendet.

```js
router.get("/about", (req, res, next) => {
  About.find({}).exec((err, queryResults) => {
    if (err) {
      return next(err);
    }
    //Successful, so render
    res.render("about_view", { title: "About", list: queryResults });
  });
});
```

### Umgang mit Ausnahmen in Routenfunktionen

Der vorherige Abschnitt zeigt, wie Express erwartet, dass Routenfunktionen Fehler zurückgeben. Das Framework ist für die Verwendung mit asynchronen Funktionen konzipiert, die eine Callback-Funktion (mit einem Fehler- und einem Ergebnisargument) übernehmen, die aufgerufen wird, wenn die Operation abgeschlossen ist. Das ist ein Problem, weil wir später Mongoose-Datenbankabfragen durchführen werden, die [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)-basierte APIs verwenden und möglicherweise Ausnahmen in unseren Routenfunktionen werfen (statt Fehler in einem Callback zurückzugeben).

Damit das Framework Ausnahmen ordnungsgemäß verarbeitet, müssen sie abgefangen und dann als Fehler weitergeleitet werden, wie im vorherigen Abschnitt gezeigt.

> [!NOTE]
> Express 5, das derzeit in der Beta-Version ist, soll JavaScript-Ausnahmen nativ behandeln.

Wenn wir das einfache Beispiel aus dem vorherigen Abschnitt neu interpretieren, wobei `About.find().exec()` als Datenbankabfrage, die ein Promise zurückgibt, betrachtet wird, könnten wir die Routenfunktion innerhalb eines [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Blocks wie folgt schreiben:

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

Das ist eine Menge Boilerplate-Code, den man zu jeder Funktion hinzufügen muss. Stattdessen werden wir für dieses Tutorial das [express-async-handler](https://www.npmjs.com/package/express-async-handler) Modul verwenden. Dieses definiert eine Wrapper-Funktion, die den `try...catch` Block und den Code zum Weiterleiten des Fehlers verbirgt. Das gleiche Beispiel ist nun sehr einfach, weil wir nur den Code für den Fall schreiben müssen, dass wir Erfolg annehmen:

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

Die URLs, die wir letztendlich für unsere Seiten benötigen werden, sind unten aufgeführt, wobei _object_ durch den Namen jedes unserer Modelle ersetzt wird (book, bookinstance, genre, author), _objects_ die Pluralform des Objekts ist und _id_ das eindeutige Instanzfeld (`_id`), das standardmäßig jedem Mongoose-Modell-Instanz gegeben wird, ist.

- `catalog/` — Die Startseite/Indexseite.
- `catalog/<objects>/` — Die Liste aller Bücher, Buchinstanzen, Genres oder Autoren (z.B. /`catalog/books/`, /`catalog/genres/`, usw.)
- `catalog/<object>/<id>` — Die Detailseite für ein bestimmtes Buch, eine Buchinstanz, ein Genre oder einen Autor mit dem angegebenen `_id` Feldwert (z.B. `/catalog/book/584493c1f4887f06c0e67d37)`.
- `catalog/<object>/create` — Das Formular zum Erstellen eines neuen Buchs, einer neuen Buchinstanz, eines neuen Genres oder eines neuen Autors (z.B. `/catalog/book/create)`.
- `catalog/<object>/<id>/update` — Das Formular zum Aktualisieren eines bestimmten Buchs, einer Buchinstanz, eines Genres oder eines Autors mit dem angegebenen `_id` Feldwert (z.B. `/catalog/book/584493c1f4887f06c0e67d37/update)`.
- `catalog/<object>/<id>/delete` — Das Formular zum Löschen eines bestimmten Buchs, einer Buchinstanz, eines Genres oder eines Autors mit dem angegebenen `_id` Feldwert (z.B. `/catalog/book/584493c1f4887f06c0e67d37/delete)`.

Die erste Startseite und die Listen-URLs kodieren keine zusätzlichen Informationen. Während die zurückgegebenen Ergebnisse vom Modelltyp und dem Inhalt in der Datenbank abhängen, sind die ausgeführten Abfragen, um die Informationen zu erhalten, immer gleich (ähnlich wird der Code zum Erstellen von Objekten immer ähnlich sein).

Im Gegensatz dazu werden die anderen URLs verwendet, um auf ein bestimmtes Dokument/Modell-Instanz zu reagieren — diese codieren die Identität des Elements in der URL (oben als `<id>` angezeigt). Wir verwenden Pfadparameter, um die kodierten Informationen zu extrahieren und an den Routen-Handler weiterzugeben (und in einem späteren Artikel werden wir dies verwenden, um dynamisch zu bestimmen, welche Informationen aus der Datenbank abgerufen werden sollen). Indem wir die Informationen in unserer URL kodieren, benötigen wir nur eine Route für jede Ressource eines bestimmten Typs (z.B. eine Route, um die Anzeige jedes einzelnen Buches zu bearbeiten).

> [!NOTE]
> Express ermöglicht es Ihnen, Ihre URLs auf beliebige Weise zu konstruieren — Sie können Informationen im Hauptteil der URL wie oben gezeigt oder über URL `GET` Parameter (z.B. `/book/?id=6`) codieren. Unabhängig von den verwendeten Ansätzen sollten die URLs sauber, logisch und lesbar gehalten werden ([sehen Sie sich hier den W3C-Ratschlag an](https://www.w3.org/Provider/Style/URI)).

Als Nächstes erstellen wir unsere Routen-Handler-Callback-Funktionen und den Routencode für alle oben genannten URLs.

## Erstellen der Routen-Handler-Callback-Funktionen

Bevor wir unsere Routen definieren, erstellen wir zunächst alle Dummy/Skelett-Callback-Funktionen, die sie aufrufen werden. Die Callbacks werden in separaten "Controller"-Modulen für `Book`, `BookInstance`, `Genre` und `Author` gespeichert (Sie können jede beliebige Datei/Modul-Struktur verwenden, aber dies scheint eine geeignete Granularität für dieses Projekt zu sein).

Erstellen Sie zunächst einen Ordner für unsere Controller im Projektstammverzeichnis (**/controllers**) und erstellen Sie dann separate Controller-Dateien/Module zur Verarbeitung jedes der Modelle:

```plain
/express-locallibrary-tutorial  //the project root
  /controllers
    authorController.js
    bookController.js
    bookinstanceController.js
    genreController.js
```

Die Controller werden das `express-async-handler` Modul verwenden, also installieren Sie es vor dem weiteren Vorgehen mit `npm` in die Bibliothek:

```bash
npm install express-async-handler
```

### Author-Controller

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

Das Modul verlangt zunächst das `Author` Modell, das wir später zur Zugriff und Aktualisierung unserer Daten verwenden werden, und das `asyncHandler` Wrapper, das wir verwenden werden, um alle in unseren Routen-Handler-Funktionen geworfenen Ausnahmen abzufangen. Es exportiert dann Funktionen für jede der URLs, die wir verarbeiten wollen. Beachten Sie, dass die Erstellungs-, Aktualisierungs- und Löschoperationen Formulare verwenden und daher auch zusätzliche Methoden zur Verarbeitung von Formular-Post-Anfragen haben — wir werden diese Methoden im "Formularartikel" später besprechen.

Die Funktionen verwenden alle die oben beschriebene Wrapper-Funktion in [Umgang mit Ausnahmen in Routenfunktionen](#umgang_mit_ausnahmen_in_routenfunktionen), mit Argumenten für die Anfrage, die Antwort und den nächsten Schritt. Die Funktionen antworten mit einer Zeichenfolge, die angibt, dass die zugehörige Seite noch nicht erstellt wurde. Wenn eine Controller-Funktion erwartungsgemäß Pfadparameter empfangen soll, werden diese im Nachrichtentext ausgegeben (siehe `req.params.id` oben).

Beachten Sie, dass einige Routenfunktionen, wenn sie implementiert sind, möglicherweise keinen Code enthalten, der Ausnahmen werfen kann. Wir können diese wieder auf "normale" Routen-Handler-Funktionen zurücksetzen, wenn wir zu ihnen kommen.

#### BookInstance-Controller

Öffnen Sie die Datei **/controllers/bookinstanceController.js** und kopieren Sie den folgenden Code hinein (dies folgt einem identischen Muster wie das `Author` Controller-Modul):

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

#### Genre-Controller

Öffnen Sie die Datei **/controllers/genreController.js** und kopieren Sie den folgenden Text hinein (dies folgt einem identischen Muster wie die `Author`- und `BookInstance`-Dateien):

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

#### Book-Controller

Öffnen Sie die Datei **/controllers/bookController.js** und kopieren Sie den folgenden Code hinein. Dies folgt dem gleichen Muster wie die anderen Controller-Module, hat jedoch zusätzlich eine `index()` Funktion zur Anzeige der Willkommensseite der Webseite:

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

Als Nächstes erstellen wir _Routen_ für alle URLs [die von der LocalLibrary Webseite benötigt werden](#für_die_locallibrary_benötigte_routen), die die Controller-Funktionen aufrufen, die wir in den vorherigen Abschnitten definiert haben.

Das Skeleton hat bereits einen **./routes** Ordner mit Routen für den _index_ und die _users_.
Erstellen Sie eine weitere Routen-Datei — **catalog.js** — in diesem Ordner, wie gezeigt.

```plain
/express-locallibrary-tutorial //the project root
  /routes
    index.js
    users.js
    catalog.js
```

Öffnen Sie **/routes/catalog.js** und kopieren Sie den folgenden Code hinein:

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

//POST request for creating Genre.
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

Die Routen werden entweder mit `.get()` oder `.post()` Methoden auf dem Router-Objekt definiert. Alle Pfade werden mit Strings definiert (wir verwenden keine String-Muster oder regulären Ausdrücke). Routen, die auf eine bestimmte Ressource (z.B. Buch) wirken, verwenden Pfadparameter, um die Objekt-ID aus der URL zu erhalten.

Die Handler-Funktionen werden alle aus den Controller-Modulen importiert, die wir im vorherigen Abschnitt erstellt haben.

### Aktualisieren des Index-Routenmoduls

Wir haben alle unsere neuen Routen eingerichtet, aber wir haben noch eine Route zur ursprünglichen Seite. Lassen Sie uns stattdessen auf die neue Indexseite weiterleiten, die wir im Pfad '/catalog' erstellt haben.

Öffnen Sie **/routes/index.js** und ersetzen Sie die bestehende Route durch die folgende Funktion.

```js
// GET home page.
router.get("/", function (req, res) {
  res.redirect("/catalog");
});
```

> [!NOTE]
> Dies ist unsere erste Verwendung der [redirect()](https://expressjs.com/en/4x/api.html#res.redirect) Antwortmethode. Diese leitet zur angegebenen Seite weiter und sendet standardmäßig den HTTP-Statuscode "302 Found". Sie können den zurückgegebenen Statuscode bei Bedarf ändern und entweder absolute oder relative Pfade angeben.

### Aktualisieren von app.js

Der letzte Schritt besteht darin, die Routen zur Middleware-Kette hinzuzufügen. Wir tun dies in `app.js`.

Öffnen Sie **app.js** und erfordern Sie die Katalogroute unterhalb der anderen Routen (fügen Sie die dritte unten gezeigte Zeile unter den anderen beiden Zeilen hinzu, die bereits in der Datei vorhanden sein sollten):

```js
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const catalogRouter = require("./routes/catalog"); //Import routes for "catalog" area of site
```

Als Nächstes fügen Sie die Katalogroute in den Middleware-Stack unter den anderen Routen ein (fügen Sie die dritte unten gezeigte Zeile unter den anderen beiden Zeilen hinzu, die bereits in der Datei vorhanden sein sollten):

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/catalog", catalogRouter); // Add catalog routes to middleware chain.
```

> [!NOTE]
> Wir haben unser Katalog-Modul in einem Pfad `'/catalog'` hinzugefügt. Dies wird allen im Katalog-Modul definierten Pfaden vorangestellt. Beispielsweise wird die URL, um eine Liste von Büchern zu erhalten, `/catalog/books/` sein.

Das war's. Wir sollten jetzt Routen und Skelettfunktionen für alle URLs eingerichtet haben, die wir schließlich auf der LocalLibrary-Website unterstützen werden.

### Testen der Routen

Um die Routen zu testen, starten Sie zunächst die Webseite mit Ihrem üblichen Ansatz:

- Die Standardmethode

  ```bash
  # Windows
  SET DEBUG=express-locallibrary-tutorial:* & npm start

  # macOS or Linux
  DEBUG=express-locallibrary-tutorial:* npm start
  ```

- Wenn Sie zuvor [nodemon](/de/docs/Learn/Server-side/Express_Nodejs/skeleton_website#enable_server_restart_on_file_changes) eingerichtet haben, können Sie stattdessen Folgendes verwenden:

  ```bash
  npm run serverstart
  ```

Navigieren Sie dann zu einer Reihe von LocalLibrary-URLs und vergewissern Sie sich, dass Sie keine Fehlerseite (HTTP 404) erhalten. Eine kleine Sammlung von URLs ist unten zu Ihrer Bequemlichkeit aufgeführt:

- `http://localhost:3000/`
- `http://localhost:3000/catalog`
- `http://localhost:3000/catalog/books`
- `http://localhost:3000/catalog/bookinstances/`
- `http://localhost:3000/catalog/authors/`
- `http://localhost:3000/catalog/genres/`
- `http://localhost:3000/catalog/book/5846437593935e2f8c2aa226`
- `http://localhost:3000/catalog/book/create`

## Zusammenfassung

Wir haben jetzt alle Routen für unsere Seite erstellt, zusammen mit Dummy-Controller-Funktionen, die wir in späteren Artikeln mit einer vollständigen Implementierung füllen können. Unterwegs haben wir viel grundlegende Informationen über Express-Routen, den Umgang mit Ausnahmen und einige Ansätze zur Strukturierung unserer Routen und Controller gelernt.

In unserem nächsten Artikel werden wir eine ordnungsgemäße Willkommensseite für die Webseite erstellen, indem wir Ansichten (Templates) und in unseren Modellen gespeicherte Informationen verwenden.

## Siehe auch

- [Basic routing](https://expressjs.com/en/starter/basic-routing.html) (Express-Dokumentation)
- [Routing guide](https://expressjs.com/en/guide/routing.html) (Express-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/mongoose", "Learn/Server-side/Express_Nodejs/Displaying_data", "Learn/Server-side/Express_Nodejs")}}
