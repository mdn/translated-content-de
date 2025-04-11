---
title: "Express Tutorial Teil 4: Routen und Controller"
short-title: "4: Routen und Controller"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/routes
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

In diesem Tutorial setzen wir Routen (URL-Verarbeitungscode) mit "Dummy"-Handler-Funktionen für alle Ressourcen-Endpunkte auf, die wir letztendlich auf der [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) Website benötigen werden. Nach Abschluss haben wir eine modulare Struktur für unseren Routen-Verarbeitungscode, die wir in den folgenden Artikeln mit echten Handler-Funktionen erweitern können. Wir werden auch ein wirklich gutes Verständnis dafür entwickeln, wie man mit Express modulare Routen erstellt!

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction">Einführung in Express/Node</a>.
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

Im [letzten Tutorial-Artikel](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose) haben wir _Mongoose_-Modelle definiert, um mit der Datenbank zu interagieren, und ein eigenständiges Skript verwendet, um einige initiale Bibliothekseinträge zu erstellen. Nun können wir den Code schreiben, um diese Informationen den Benutzern zu präsentieren. Das Erste, was wir tun müssen, ist festzustellen, welche Informationen wir auf unseren Seiten anzeigen möchten, und dann geeignete URLs zum Zurückgeben dieser Ressourcen definieren. Dann müssen wir die Routen (URL-Handler) und Ansichten (Templates) erstellen, um diese Seiten anzuzeigen.

Das untenstehende Diagramm dient als Erinnerung an den Hauptfluss von Daten und Dingen, die implementiert werden müssen, wenn eine HTTP-Anfrage/-Antwort verarbeitet wird. Zusätzlich zu den Ansichten und Routen zeigt das Diagramm "Controller" — Funktionen, die den Code zur Routenanfrage von dem Code trennen, der Anfragen tatsächlich verarbeitet.

Da wir die Modelle bereits erstellt haben, werden die Hauptsachen, die wir erstellen müssen, sein:

- "Routen", um die unterstützten Anfragen (und alle Informationen, die in Anfrage-URLs kodiert sind) an die entsprechenden Controller-Funktionen weiterzuleiten.
- Controller-Funktionen, um die angeforderten Daten von den Modellen zu erhalten, eine HTML-Seite zu erstellen, die die Daten anzeigt, und sie dem Benutzer zur Ansicht im Browser zurückzugeben.
- Ansichten (Templates), die von den Controllern verwendet werden, um die Daten zu rendern.

![Hauptdatenflussdiagramm eines MVC-Express-Servers: 'Routen' empfangen die HTTP-Anfragen, die an den Express-Server gesendet werden, und leiten sie an die entsprechende 'Controller'-Funktion weiter. Der Controller liest und schreibt Daten aus den Modellen. Modelle sind mit der Datenbank verbunden, um dem Server Datenzugriff zu gewähren. Controller verwenden 'Ansichten', auch Templates genannt, um die Daten zu rendern. Der Controller sendet die HTML-HTTP-Antwort als HTTP-Antwort an den Client zurück.](mvc_express.png)

Letztendlich könnten wir Seiten haben, um Listen und Detailinformationen für Bücher, Genres, Autoren und Buchinstanzen anzuzeigen, zusammen mit Seiten zum Erstellen, Aktualisieren und Löschen von Einträgen. Das ist eine Menge, was in einem Artikel dokumentiert werden muss. Daher wird sich der größte Teil dieses Artikels darauf konzentrieren, unsere Routen und Controller einzurichten, um "Dummy"-Inhalte zurückzugeben. Wir werden die Controllermethoden in unseren nachfolgenden Artikeln erweitern, um mit Modelldaten zu arbeiten.

Der erste Abschnitt unten bietet eine kurze "Einführung" in die Verwendung des Express [Router](https://expressjs.com/en/4x/api.html#router) Middlewares. Wir werden dieses Wissen dann in den folgenden Abschnitten verwenden, wenn wir die LocalLibrary-Routen einrichten.

## Einleitung in Routen

Eine Route ist ein Abschnitt von Express-Code, der ein HTTP-Verb (`GET`, `POST`, `PUT`, `DELETE`, usw.), einen URL-Pfad/-Muster und eine Funktion, die aufgerufen wird, um dieses Muster zu verarbeiten, assoziiert.

Es gibt verschiedene Möglichkeiten, Routen zu erstellen. Für dieses Tutorial werden wir das [`express.Router`](https://expressjs.com/en/guide/routing.html#express-router) Middleware verwenden, da es uns ermöglicht, die Routenhandler für einen bestimmten Teil einer Seite zusammenzufassen und mit einem gemeinsamen Routen-Präfix darauf zuzugreifen. Wir werden alle unsere bibliotheksbezogenen Routen in einem "Katalog"-Modul behalten, und wenn wir Routen zur Verwaltung von Benutzerkonten oder anderen Funktionen hinzufügen, können wir sie separat gruppieren.

> [!NOTE]
> Wir haben Express-Anwendungsrouten kurz in unserer [Express Einführung > Erstellen von Routen-Handlern](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#creating_route_handlers) besprochen. Abgesehen davon, dass es eine bessere Unterstützung für Modularisierung bietet (wie im ersten Unterabschnitt unten besprochen), ist die Verwendung von _Router_ sehr ähnlich wie das direkte Definieren von Routen auf dem _Express-Anwendungsobjekt_.

Der Rest dieses Abschnitts bietet einen Überblick darüber, wie der `Router` verwendet werden kann, um die Routen zu definieren.

### Definieren und Verwenden separater Routenmodule

Der folgende Code bietet ein konkretes Beispiel dafür, wie wir ein Routenmodul erstellen und es dann in einer _Express_-Anwendung verwenden können.

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
> Oben definieren wir unsere Routen-Handler-Callbacks direkt in den Router-Funktionen. In der LocalLibrary werden wir diese Callbacks in einem separaten Controllermodul definieren.

Um das Router-Modul in unserer Haupt-App-Datei zu verwenden, müssen wir zuerst das Routenmodul (**wiki.js**) `require()`. Dann rufen wir `use()` auf der _Express_-Anwendung auf, um den Router dem Middleware-Verarbeitungspfad hinzuzufügen, und geben dabei einen URL-Pfad 'wiki' an.

```js
const wiki = require("./wiki.js");
// …
app.use("/wiki", wiki);
```

Die beiden Routen, die in unserem Wiki-Routenmodul definiert sind, sind dann über `/wiki/` und `/wiki/about/` erreichbar.

### Routenfunktionen

Unser obiges Modul definiert ein paar typische Routenfunktionen. Die "about"-Route (unten wiedergegeben) wird mithilfe der `Router.get()` Methode definiert, die nur auf HTTP-GET-Anfragen reagiert. Das erste Argument dieser Methode ist der URL-Pfad, während das zweite eine Callback-Funktion ist, die aufgerufen wird, wenn eine HTTP-GET-Anfrage mit dem Pfad empfangen wird.

```js
router.get("/about", function (req, res) {
  res.send("About this wiki");
});
```

Der Callback nimmt drei Argumente an (meistens wie gezeigt benannt: `req`, `res`, `next`), die das HTTP-Anfrageobjekt, die HTTP-Antwort und die _nächste_ Funktion in der Middleware-Kette enthalten.

> [!NOTE]
> Router-Funktionen sind [Express-Middleware](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#using_middleware), was bedeutet, dass sie entweder die Anfrage abschließen (darauf antworten) oder die `next`-Funktion in der Kette aufrufen müssen. Im obigen Fall schließen wir die Anfrage mit `send()` ab, sodass das `next`-Argument nicht verwendet wird (und wir entscheiden uns, es nicht anzugeben).
>
> Die Router-Funktion oben nimmt einen einzigen Callback an, aber Sie können so viele Callback-Argumente angeben, wie Sie möchten, oder ein Array von Callback-Funktionen. Jede Funktion ist Teil der Middleware-Kette und wird in der Reihenfolge aufgerufen, in der sie zur Kette hinzugefügt wurde (es sei denn, eine vorhergehende Funktion schließt die Anfrage ab).

Die Callback-Funktion hier ruft [`send()`](https://expressjs.com/en/4x/api.html#res.send) auf der Antwort auf, um den String "About this wiki" zurückzugeben, wenn wir eine GET-Anfrage mit dem Pfad (`/about`) erhalten. Es gibt eine [Anzahl weiterer Antwortmethoden](https://expressjs.com/en/guide/routing.html#response-methods), um den Anfrage/Antwort-Zyklus zu beenden. Beispielsweise könnten Sie [`res.json()`](https://expressjs.com/en/4x/api.html#res.json) aufrufen, um eine JSON-Antwort zu senden, oder [`res.sendFile()`](https://expressjs.com/en/4x/api.html#res.sendFile), um eine Datei zu senden. Die Antwortmethode, die wir häufig verwenden werden, während wir die Bibliothek aufbauen, ist [`render()`](https://expressjs.com/en/4x/api.html#res.render), die HTML-Dateien mit Templates und Daten erstellt und zurückgibt – wir werden viel mehr darüber in einem späteren Artikel sprechen!

### HTTP-Verben

Die oben genannten Beispielrouten verwenden die `Router.get()` Methode, um auf HTTP-GET-Anfragen mit einem bestimmten Pfad zu antworten.

Der `Router` bietet auch Routemethoden für alle anderen HTTP-Verben, die meist auf die gleiche Weise verwendet werden: `post()`, `put()`, `delete()`, `options()`, `trace()`, `copy()`, `lock()`, `mkcol()`, `move()`, `purge()`, `propfind()`, `proppatch()`, `unlock()`, `report()`, `mkactivity()`, `checkout()`, `merge()`, `m-search()`, `notify()`, `subscribe()`, `unsubscribe()`, `patch()`, `search()`, und `connect()`.

Zum Beispiel verhält sich der folgende Code genauso wie die vorherige `/about` Route, antwortet jedoch nur auf HTTP-POST-Anfragen.

```js
router.post("/about", (req, res) => {
  res.send("About this wiki");
});
```

### Routenpfade

Die Routenpfade definieren die Endpunkte, an denen Anfragen gestellt werden können. Die Beispiele, die wir bisher gesehen haben, waren nur Zeichenketten und wurden genau so verwendet, wie sie geschrieben sind: '/', '/about', '/book', '/any-random.path'.

Routenpfade können auch Zeichenkettenschemata sein. Zeichenkettenschemata verwenden eine Form von regulärem Ausdruckssyntax, um _Muster_ von Endpunkten zu definieren, die abgeglichen werden. Die Syntax ist unten aufgeführt (beachten Sie, dass der Bindestrich (`-`) und der Punkt (`.`) von zeichenkettenbasierten Pfaden buchstäblich interpretiert werden):

- `?` : Der Endpunkt muss 0 oder 1 des vorhergehenden Zeichens (oder der Gruppe) haben, z.B. wird ein Routenpfad von `'/ab?cd'` die Endpunkte `acd` oder `abcd` abgleichen.
- `+` : Der Endpunkt muss 1 oder mehr des vorhergehenden Zeichens (oder der Gruppe) haben, z.B. wird ein Routenpfad von `'/ab+cd'` die Endpunkte `abcd`, `abbcd`, `abbbcd` und so weiter abgleichen.
- `*` : Der Endpunkt kann eine beliebige Zeichenfolge enthalten, wo das `*` Zeichen platziert ist. Z.B. ein Routenpfad von `'/ab*cd'` wird die Endpunkte `abcd`, `abXcd`, `abSOMErandomTEXTcd` und so weiter abgleichen.
- `()` : Gruppierungsübereinstimmung einer Zeichengruppe, um eine andere Operation darauf durchzuführen, z.B. wird `'/ab(cd)?e'` eine `?`-Übereinstimmung auf die Gruppe `(cd)` ausführen — es wird `abe` und `abcde` abgleichen.

Die Routenpfade können auch JavaScript [reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) sein. Zum Beispiel wird der Routenpfad unten `catfish` und `dogfish` abgleichen, aber nicht `catflap`, `catfishhead` und so weiter. Beachten Sie, dass der Pfad für einen regulären Ausdruck die reguläre Ausdruckssyntax verwendet (es ist keine zitierte Zeichenkette wie in den vorherigen Fällen).

```js
app.get(/.*fish$/, function (req, res) {
  // …
});
```

> [!NOTE]
> Die meisten unserer Routen für die LocalLibrary werden Zeichenketten und keine regulären Ausdrücke verwenden. Wir werden auch Routenparameter verwenden, wie im nächsten Abschnitt besprochen.

### Routenparameter

Routenparameter sind _benannte URL-Segmente_, die verwendet werden, um Werte an bestimmten Positionen in der URL zu erfassen. Die benannten Segmente werden mit einem Doppelpunkt gefolgt vom Namen versehen (z.B. `/:your_parameter_name/`). Die erfassten Werte werden im `req.params` Objekt mit den Parameternamen als Schlüssel gespeichert (z.B. `req.params.your_parameter_name`).

Zum Beispiel, betrachten Sie eine URL, die Informationen über Benutzer und Bücher enthält: `http://localhost:3000/users/34/books/8989`. Wir können diese Informationen extrahieren, wie unten gezeigt, mit den `userId` und `bookId` Pfadparametern:

```js
app.get("/users/:userId/books/:bookId", (req, res) => {
  // Access userId via: req.params.userId
  // Access bookId via: req.params.bookId
  res.send(req.params);
});
```

Die Namen der Routenparameter müssen aus "Wortzeichen" bestehen (A-Z, a-z, 0-9 und \_).

> [!NOTE]
> Die URL _/book/create_ wird von einer Route wie `/book/:bookId` abgeglichen (da `:bookId` ein Platzhalter für _jedes_ Zeichen ist, daher passt `create`). Die erste Route, die eine eingehende URL abgleicht, wird verwendet, daher muss, wenn Sie `/book/create` URLs speziell verarbeiten möchten, deren Routen-Handler vor Ihrer `/book/:bookId` Route definiert sein.

Das ist alles, was Sie brauchen, um mit Routen zu beginnen - falls nötig, können Sie weitere Informationen in den Express-Dokumentationen finden: [Grundlegendes Routing](https://expressjs.com/en/starter/basic-routing.html) und [Routing-Leitfaden](https://expressjs.com/en/guide/routing.html). Die folgenden Abschnitte zeigen, wie wir unsere Routen und Controller für die LocalLibrary einrichten.

### Fehlerbehandlung in den Routenfunktionen

Die in den früheren gezeigten Routenfunktionen haben alle die Argumente `req` und `res`, die die Anfrage und die Antwort darstellen, jeweils.
Routenfunktionen werden auch mit einem dritten Argument `next` aufgerufen, das verwendet werden kann, um Fehler an die Express Middleware-Kette weiterzugeben.

Der folgende Code zeigt, wie dies funktioniert, am Beispiel einer Datenbankabfrage, die eine Callback-Funktion benötigt und entweder einen Fehler `err` oder einige Ergebnisse zurückgibt.
Wenn `err` zurückgegeben wird, wird `next` mit `err` als Wert in seinem ersten Parameter aufgerufen (letztendlich propagiert der Fehler zu unserem globalen Fehlerbehandlungscode).
Bei Erfolg werden die gewünschten Daten zurückgegeben und dann in der Antwort verwendet.

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

### Ausnahmen in Routenfunktionen behandeln

Der vorherige Abschnitt zeigt, wie Express erwartet, dass Routenfunktionen Fehler zurückgeben.
Das Framework ist für die Verwendung mit asynchronen Funktionen konzipiert, die eine Callback-Funktion (mit einem Fehler- und Ergebnisargument) benötigen, welche aufgerufen wird, wenn die Operation abgeschlossen ist.
Das ist ein Problem, weil wir später Mongoose-Datenbankabfragen durchführen werden, die [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)-basierte APIs verwenden und die möglicherweise Ausnahmen in unseren Routenfunktionen werfen (anstatt Fehler in einem Callback zurückzugeben).

Damit das Framework Ausnahmen ordnungsgemäß behandelt, müssen sie abgefangen und dann als Fehler wie im vorherigen Abschnitt gezeigt weitergeleitet werden.

> [!NOTE]
> Von Express 5, das sich derzeit in der Beta-Version befindet, wird erwartet, dass es JavaScript-Ausnahmen nativ behandelt.

Indem wir das einfache Beispiel aus dem vorherigen Abschnitt mit `About.find().exec()` als Datenbankabfrage, die ein Versprechen zurückgibt, neu überdenken, könnten wir die Routenfunktion innerhalb eines [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Blocks wie folgt schreiben:

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

Das ist eine Menge Boilerplate-Code, den man zu jeder Funktion hinzufügen muss.
Stattdessen werden wir für dieses Tutorial das [express-async-handler](https://www.npmjs.com/package/express-async-handler) Modul verwenden.
Dies definiert eine Wrapperfunktion, die den `try...catch` Block und den Code zum Weiterleiten des Fehlers verbirgt.
Das gleiche Beispiel ist nun sehr einfach, weil wir nur Code für den Fall schreiben müssen, in dem wir von Erfolg ausgehen:

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

Die URLs, die wir letztendlich für unsere Seiten benötigen werden, sind unten aufgelistet, wobei _object_ durch den Namen jedes unserer Modelle (book, bookinstance, genre, author) ersetzt wird, _objects_ ist der Plural von object, und _id_ ist das eindeutige Instanzfeld (`_id`), das jedem Mongoose Modellinstanz standardmäßig gegeben wird.

- `catalog/` — Die Haupt-/Startseite.
- `catalog/<objects>/` — Die Liste aller Bücher, Buchinstanzen, Genres oder Autoren (z.B., /`catalog/books/`, /`catalog/genres/`, etc.)
- `catalog/<object>/<id>` — Die Detailseite für ein bestimmtes Buch, eine bestimmte Buchinstanz, ein bestimmtes Genre oder einen bestimmten Autor mit dem gegebenen `_id` Feldwert (z.B., `/catalog/book/584493c1f4887f06c0e67d37)`).
- `catalog/<object>/create` — Das Formular zur Erstellung eines neuen Buches, einer neuen Buchinstanz, eines neuen Genres oder Autors (z.B., `/catalog/book/create)`).
- `catalog/<object>/<id>/update` — Das Formular zur Aktualisierung eines bestimmten Buches, einer bestimmten Buchinstanz, eines bestimmten Genres oder Autors mit dem gegebenen `_id` Feldwert (z.B., `/catalog/book/584493c1f4887f06c0e67d37/update)`).
- `catalog/<object>/<id>/delete` — Das Formular zum Löschen eines bestimmten Buches, einer bestimmten Buchinstanz, eines bestimmten Genres oder Autors mit dem gegebenen `_id` Feldwert (z.B., `/catalog/book/584493c1f4887f06c0e67d37/delete)`).

Die erste Startseite und die Listenseiten kodieren keine zusätzlichen Informationen. Während die zurückgegebenen Ergebnisse vom Modelltyp und dem Inhalt in der Datenbank abhängen, sind die Abfragen, die zum Abrufen der Informationen ausgeführt werden, immer gleich (ähnlich wird der Code für die Objekterstellung immer ähnlich sein).

Im Gegensatz dazu werden die anderen URLs verwendet, um auf ein bestimmtes Dokument/Modellinstanz zuzugreifen — diese kodieren die Identität des Elements in der URL (oben als `<id>` angezeigt). Wir werden Pfadparameter verwenden, um die kodierten Informationen zu extrahieren und an den Route-Handler weiterzuleiten (und in einem späteren Artikel werden wir dies verwenden, um dynamisch zu bestimmen, welche Informationen aus der Datenbank abgerufen werden sollen). Durch die Kodierung der Informationen in unserer URL benötigen wir nur eine Route für jede Ressource eines bestimmten Typs (z.B. eine Route, um die Anzeige jedes einzelnen Buches zu verarbeiten).

> [!NOTE]
> Express erlaubt Ihnen, Ihre URLs so zu konstruieren, wie Sie möchten — Sie können Informationen im Körper der URL wie oben gezeigt kodieren oder URL-`GET`-Parameter verwenden (z.B., `/book/?id=6`). Welche Methode Sie auch verwenden, die URLs sollten sauber, logisch und lesbar gehalten werden ([lesen Sie hier den W3C-Rat](https://www.w3.org/Provider/Style/URI)).

Als nächstes erstellen wir unsere Routen-Handler-Callback-Funktionen und den Routencode für alle oben genannten URLs.

## Erstellung der Routen-Handler Callback-Funktionen

Bevor wir unsere Routen definieren, werden wir zuerst alle Dummy-/Skelett-Callback-Funktionen erstellen, die sie aufrufen werden. Die Callbacks werden in separaten "Controller"-Modulen für `Book`, `BookInstance`, `Genre` und `Author` gespeichert (Sie können jede beliebige Datei-/Modulstruktur verwenden, aber dies scheint eine angemessene Granularität für dieses Projekt zu sein).

Beginnen Sie damit, einen Ordner für unsere Controller im Projektstammverzeichnis zu erstellen (**/controllers**) und dann separate Controller-Dateien/Module für die Bearbeitung jedes der Modelle zu erstellen:

```plain
/express-locallibrary-tutorial  //the project root
  /controllers
    authorController.js
    bookController.js
    bookinstanceController.js
    genreController.js
```

Die Controller verwenden das `express-async-handler` Modul, daher installieren wir es, bevor wir fortfahren, in die Bibliothek mit `npm`:

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

Das Modul benötigt zuerst das `Author` Modell, das wir später verwenden werden, um auf unsere Daten zuzugreifen und sie zu aktualisieren, und den `asyncHandler` Wrapper, den wir verwenden werden, um Ausnahmen in unseren Route-Handler-Funktionen zu fangen.
Es exportiert dann Funktionen für jede der URLs, die wir verarbeiten möchten.
Beachten Sie, dass die Erstellungs-, Aktualisierungs- und Löschoperationen Formulare verwenden und daher auch zusätzliche Methoden zur Bearbeitung von Formular-Post-Anfragen haben — wir werden diese Methoden im späteren Artikel über "Formulare" besprechen.

Die Funktionen verwenden alle die oben beschriebenen Wrapper-Funktionen unter [Ausnahmen in Routenfunktionen behandeln](#ausnahmen_in_routenfunktionen_behandeln) mit Argumenten für die Anfrage, die Antwort und den nächsten.
Die Funktionen antworten mit einem String, der anzeigt, dass die zugehörige Seite noch nicht erstellt wurde.
Wenn erwartet wird, dass eine Controller-Funktion Pfadparameter erhält, werden diese in der Nachrichtenzeichenkette ausgegeben (siehe `req.params.id` oben).

Beachten Sie, dass einige Routenfunktionen, sobald sie implementiert sind, keinen Code enthalten könnten, der Ausnahmen werfen kann.
Wir können diese wieder in "normale" Routen-Handler-Funktionen zurückverwandeln, wenn wir zu ihnen kommen.

#### BookInstance Controller

Öffnen Sie die Datei **/controllers/bookinstanceController.js** und kopieren Sie den folgenden Code ein (dies folgt einem identischen Muster wie das `Author` Controller-Modul):

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

Öffnen Sie die Datei **/controllers/genreController.js** und kopieren Sie den folgenden Text ein (dies folgt einem identischen Muster wie die `Author` und `BookInstance` Dateien):

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

Öffnen Sie die Datei **/controllers/bookController.js** und kopieren Sie den folgenden Code ein.
Dies folgt dem gleichen Muster wie die anderen Controller-Module, hat jedoch zusätzlich eine `index()` Funktion zur Anzeige der Willkommensseite der Site:

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

## Erstellung des Katalog-Routenmoduls

Als nächstes erstellen wir _Routen_ für alle URLs [benötigt von der LocalLibrary Website](#routen_benötigt_für_die_locallibrary), die die Controller-Funktionen aufrufen, die wir in den vorherigen Abschnitten definiert haben.

Das Skelett hat bereits einen **./routes**-Ordner, der Routen für den _Index_ und die _Benutzer_ enthält.
Erstellen Sie eine weitere Routen-Datei — **catalog.js** — in diesem Ordner, wie gezeigt.

```plain
/express-locallibrary-tutorial //the project root
  /routes
    index.js
    users.js
    catalog.js
```

Öffnen Sie **/routes/catalog.js** und kopieren Sie den folgenden Code ein:

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

Das Modul benötigt Express und verwendet es dann, um ein `Router`-Objekt zu erstellen. Die Routen werden alle am Router eingerichtet, der dann exportiert wird.

Die Routen werden entweder mit `.get()` oder `.post()` Methoden am Router-Objekt definiert. Alle Pfade werden mit Zeichenketten definiert (wir verwenden keine Zeichenkettenmuster oder reguläre Ausdrücke).
Routen, die auf einer bestimmten Ressource (z.B. ein Buch) arbeiten, verwenden Pfadparameter, um die Objekt-ID aus der URL zu erhalten.

Die Handler-Funktionen werden alle aus den Controllermodulen importiert, die wir im vorherigen Abschnitt erstellt haben.

### Aktualisieren des Index-Routenmoduls

Wir haben alle unsere neuen Routen eingerichtet, aber wir haben immer noch eine Route zur ursprünglichen Seite. Lassen Sie uns stattdessen auf die neue Indexseite umleiten, die wir unter dem Pfad '/catalog' erstellt haben.

Öffnen Sie **/routes/index.js** und ersetzen Sie die bestehende Route durch die folgende Funktion.

```js
// GET home page.
router.get("/", function (req, res) {
  res.redirect("/catalog");
});
```

> [!NOTE]
> Dies ist unsere erste Verwendung der [redirect()](https://expressjs.com/en/4x/api.html#res.redirect) Antwortmethode. Diese leitet auf die angegebene Seite um und sendet standardmäßig den HTTP-Statuscode "302 Found". Sie können den zurückgegebenen Statuscode bei Bedarf ändern und entweder absolute oder relative Pfade angeben.

### Aktualisieren von app.js

Der letzte Schritt besteht darin, die Routen zur Middleware-Kette hinzuzufügen.
Wir tun dies in `app.js`.

Öffnen Sie **app.js** und benötigen Sie die Katalogroute unter den anderen Routen (fügen Sie die dritte Zeile unten hinzu, unter die anderen zwei, die bereits in der Datei vorhanden sein sollten):

```js
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const catalogRouter = require("./routes/catalog"); //Import routes for "catalog" area of site
```

Fügen Sie als nächstes die Katalogroute dem Middleware-Stapel unter den anderen Routen hinzu (fügen Sie die dritte Zeile unten hinzu, unter den anderen zwei, die bereits in der Datei vorhanden sein sollten):

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/catalog", catalogRouter); // Add catalog routes to middleware chain.
```

> [!NOTE]
> Wir haben unser Katalogmodul unter einem Pfad `'/catalog'` hinzugefügt. Dies wird allen im Katalogmodul definierten Pfaden vorangestellt. So wird zum Beispiel, um eine Liste der Bücher zuzugreifen, die URL sein: `/catalog/books/`.

Das ist alles. Wir sollten jetzt Routen und Skelettfunktionen für alle URLs, die wir eventuell auf der LocalLibrary Webseite unterstützen werden, aktiviert haben.

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

Navigieren Sie dann zu einer Reihe von LocalLibrary-URLs und überprüfen Sie, ob Sie keine Fehlerseite (HTTP 404) erhalten. Eine kleine Auswahl an URLs ist unten zu Ihrer Bequemlichkeit aufgeführt:

- `http://localhost:3000/`
- `http://localhost:3000/catalog`
- `http://localhost:3000/catalog/books`
- `http://localhost:3000/catalog/bookinstances/`
- `http://localhost:3000/catalog/authors/`
- `http://localhost:3000/catalog/genres/`
- `http://localhost:3000/catalog/book/5846437593935e2f8c2aa226`
- `http://localhost:3000/catalog/book/create`

## Zusammenfassung

Wir haben nun alle Routen für unsere Website erstellt, zusammen mit Dummy-Controller-Funktionen, die wir in späteren Artikeln mit einer vollständigen Implementierung füllen können. Unterwegs haben wir eine Menge grundlegender Informationen über Express-Routen, Umgang mit Ausnahmen und einige Ansätze zur Strukturierung unserer Routen und Controller gelernt.

Im nächsten Artikel werden wir eine ordentliche Willkommensseite für die Site erstellen, mit Ansichten (Templates) und Informationen, die in unseren Modellen gespeichert sind.

## Siehe auch

- [Grundlegendes Routing](https://expressjs.com/en/starter/basic-routing.html) (Express-Dokumentation)
- [Routing-Leitfaden](https://expressjs.com/en/guide/routing.html) (Express-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
