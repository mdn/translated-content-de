---
title: "Express Tutorial Teil 4: Routen und Controller"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/routes
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

In diesem Tutorial richten wir Routen (URL-Verarbeitungscode) mit "Dummy"-Handlerfunktionen für alle Ressourcenzugriffspunkte ein, die wir schließlich auf der [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website)-Website benötigen werden. Am Ende haben wir eine modulare Struktur für unseren Routen-Verarbeitungscode, die wir in den folgenden Artikeln mit tatsächlichen Handlerfunktionen erweitern können. Wir werden auch ein wirklich gutes Verständnis dafür haben, wie man modulare Routen mit Express erstellt!

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
        Einrichten aller unserer URL-Endpunkte.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Im [letzten Tutorialartikel](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose) haben wir _Mongoose_-Modelle definiert, um mit der Datenbank zu interagieren, und ein (eigenständiges) Skript verwendet, um einige anfängliche Bibliothekseinträge zu erstellen. Wir können nun den Code schreiben, um diese Informationen den Benutzern zu präsentieren. Das Erste, was wir tun müssen, ist zu bestimmen, welche Informationen wir auf unseren Seiten anzuzeigen möchten, und dann geeignete URLs zu definieren, um diese Ressourcen zurückzugeben. Dann müssen wir die Routen (URL-Handler) und Ansichten (Templates) erstellen, um diese Seiten anzuzeigen.

Das folgende Diagramm dient als Erinnerung an den Hauptdatenfluss und die Dinge, die implementiert werden müssen, wenn eine HTTP-Anfrage/-Antwort behandelt wird. Zusätzlich zu den Ansichten und Routen zeigt das Diagramm "Controller" — Funktionen, die den Code zur Anfrageroutenführung von dem Code trennen, der die Anfragen tatsächlich verarbeitet.

Da wir bereits die Modelle erstellt haben, müssen wir hauptsächlich Folgendes erstellen:

- "Routen", um die unterstützten Anfragen (und alle in den Anforderungs-URLs codierten Informationen) an die entsprechenden Controller-Funktionen weiterzuleiten.
- Controller-Funktionen, um die angeforderten Daten aus den Modellen zu erhalten, eine HTML-Seite zu erstellen, die die Daten anzeigt, und diese an den Benutzer zurückzugeben, um sie im Browser anzusehen.
- Ansichten (Templates), die von den Controllern zur Darstellung der Daten verwendet werden.

![Hauptdatenflussdiagramm eines MVC-Express-Servers: "Routen" erhalten die an den Express-Server gesendeten HTTP-Anfragen und leiten sie an die entsprechende "Controller"-Funktion weiter. Der Controller liest und schreibt Daten aus den Modellen. Modelle sind mit der Datenbank verbunden, um dem Server Datenzugriff zu bieten. Controller verwenden "Ansichten", auch als Templates bezeichnet, um die Daten darzustellen. Der Controller sendet die HTML-HTTP-Antwort als HTTP-Antwort zurück an den Client.](mvc_express.png)

Letztendlich könnten wir Seiten haben, um Listen und Detailinformationen zu Büchern, Genres, Autoren und Buchinstanzen anzuzeigen, sowie Seiten zum Erstellen, Aktualisieren und Löschen von Einträgen. Dies alles in einem Artikel zu dokumentieren ist eine Menge. Daher konzentriert sich der größte Teil dieses Artikels darauf, unsere Routen und Controller so einzurichten, dass "Dummy"-Inhalte zurückgegeben werden. Wir werden die Controllermethoden in unseren nachfolgenden Artikeln erweitern, um mit Modelldaten zu arbeiten.

Der erste Abschnitt unten bietet eine kurze "Einführung", wie man die Express [Router](https://expressjs.com/en/4x/api.html#router) Middleware verwendet. Wir werden dieses Wissen in den folgenden Abschnitten verwenden, wenn wir die LocalLibrary-Routen einrichten.

## Einführung in Routen

Eine Route ist ein Abschnitt von Express-Code, der ein HTTP-Verb (`GET`, `POST`, `PUT`, `DELETE` usw.), einen URL-Pfad/ein Muster und eine Funktion verknüpft, die aufgerufen wird, um dieses Muster zu bearbeiten.

Es gibt mehrere Möglichkeiten, Routen zu erstellen. Für dieses Tutorial werden wir die [`express.Router`](https://expressjs.com/en/guide/routing.html#express-router) Middleware verwenden, da sie es uns ermöglicht, die Route-Handler für einen bestimmten Teil einer Seite zusammenzufassen und mit einem gemeinsamen Routen-Präfix darauf zuzugreifen. Wir werden alle unsere bibliotheksbezogenen Routen in einem "Katalog"-Modul halten, und wenn wir Routen für die Verwaltung von Benutzerkonten oder andere Funktionen hinzufügen, können wir sie separat gruppiert halten.

> [!NOTE]
> Wir haben Express-Anwendungsrouten kurz in unserer [Express Einführung > Erstellen von Routen-Handlern](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#creating_route_handlers) besprochen. Abgesehen von einer besseren Unterstützung der Modularisierung (wie im ersten Unterabschnitt unten besprochen), ist die Verwendung von _Router_ sehr ähnlich wie die direkte Definition von Routen auf dem _Express-Anwendungsobjekt_.

Der Rest dieses Abschnitts bietet einen Überblick darüber, wie der `Router` zur Definition der Routen verwendet werden kann.

### Definieren und Verwenden separater Routemodule

Der folgende Code bietet ein konkretes Beispiel dafür, wie wir ein Routemodul erstellen und es dann in einer _Express_-Anwendung verwenden können.

Zuerst erstellen wir Routen für ein Wiki in einem Modul namens **wiki.js**. Der Code importiert zuerst das Express-Anwendungsobjekt, verwendet es, um ein `Router`-Objekt zu erhalten und fügt ihm dann ein paar Routen mit der Methode `get()` hinzu. Schließlich exportiert das Modul das `Router`-Objekt.

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

Um das Router-Modul in unserer Hauptanwendungsdatei zu verwenden, benötigen wir zuerst das Routemodul (**wiki.js**). Dann rufen wir `use()` auf der _Express_-Anwendung auf, um den Router dem Middleware-Verarbeitungspfad hinzuzufügen und einen URL-Pfad von 'wiki' anzugeben.

```js
const wiki = require("./wiki.js");
// …
app.use("/wiki", wiki);
```

Die beiden in unserem Wiki-Routemodul definierten Routen sind dann von `/wiki/` und `/wiki/about/` aus zugänglich.

### Routenfunktionen

Unser Modul oben definiert ein paar typische Routenfunktionen. Die "about"-Route (unten reproduziert) wird mit der Methode `Router.get()` definiert, die nur auf HTTP-GET-Anfragen reagiert. Das erste Argument dieser Methode ist der URL-Pfad, während das zweite eine Callback-Funktion ist, die aufgerufen wird, falls eine HTTP-GET-Anfrage mit dem Pfad eingeht.

```js
router.get("/about", function (req, res) {
  res.send("About this wiki");
});
```

Das Callback nimmt drei Argumente an (normalerweise wie gezeigt benannt: `req`, `res`, `next`), die das HTTP-Anfrageobjekt, die HTTP-Antwort und die _nächste_ Funktion in der Middleware-Kette enthalten werden.

> [!NOTE]
> Router-Funktionen sind [Express-Middleware](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#using_middleware), was bedeutet, dass sie entweder die Anfrage beantworten oder die `next`-Funktion in der Kette aufrufen müssen. Im obigen Fall beantworten wir die Anfrage mit `send()`, daher wird das `next`-Argument nicht verwendet (und wir wählen, es nicht anzugeben).
>
> Die obere Router-Funktion nimmt ein einzelnes Callback an, aber Sie können beliebig viele Callback-Argumente angeben oder ein Array von Callback-Funktionen. Jede Funktion ist Teil der Middleware-Kette und wird in der Reihenfolge aufgerufen, in der sie der Kette hinzugefügt wurde (sofern eine vorhergehende Funktion die Anfrage nicht abschließt).

Die Callback-Funktion hier ruft [`send()`](https://expressjs.com/en/4x/api.html#res.send) auf der Antwort auf, um die Zeichenkette "About this wiki" zurückzugeben, wenn wir eine GET-Anfrage mit dem Pfad (`/about`) erhalten. Es gibt eine [Anzahl anderer Antwortmethoden](https://expressjs.com/en/guide/routing.html#response-methods), um den Anfrage-/Antwort-Zyklus zu beenden. Beispielsweise könnten Sie [`res.json()`](https://expressjs.com/en/4x/api.html#res.json) aufrufen, um eine JSON-Antwort zu senden oder [`res.sendFile()`](https://expressjs.com/en/4x/api.html#res.sendFile), um eine Datei zu senden. Die Antwortmethode, die wir am häufigsten verwenden werden, wenn wir die Bibliothek aufbauen, ist [`render()`](https://expressjs.com/en/4x/api.html#res.render), die HTML-Dateien mithilfe von Templates und Daten erstellt und zurückgibt — darüber werden wir später ausführlich sprechen!

### HTTP-Methoden

Die Beispiele der Routen oben verwenden die Methode `Router.get()`, um auf HTTP-GET-Anfragen mit einem bestimmten Pfad zu antworten.

Der `Router` bietet auch Routemethoden für alle anderen HTTP-Methoden, die größtenteils auf die gleiche Weise verwendet werden: `post()`, `put()`, `delete()`, `options()`, `trace()`, `copy()`, `lock()`, `mkcol()`, `move()`, `purge()`, `propfind()`, `proppatch()`, `unlock()`, `report()`, `mkactivity()`, `checkout()`, `merge()`, `m-search()`, `notify()`, `subscribe()`, `unsubscribe()`, `patch()`, `search()`, und `connect()`.

Zum Beispiel verhält sich der Code unten genauso wie die vorherige `/about`-Route, reagiert aber nur auf HTTP-POST-Anfragen.

```js
router.post("/about", (req, res) => {
  res.send("About this wiki");
});
```

### Routenirte

Die Routenirte definieren die Endpunkte, an denen Anfragen gestellt werden können. Die bisher gesehenen Beispiele waren nur Zeichenketten und werden genau so verwendet, wie sie geschrieben sind: '/', '/about', '/book', '/any-random.path'.

Routenirte können auch Zeichenkettenmuster sein. Zeichenkettenmuster verwenden eine Art reguläre Ausdruck-Syntax, um _Muster_ von Endpunkten zu definieren, die übereinstimmen werden. Die Syntax ist unten aufgeführt (beachten Sie, dass der Bindestrich (`-`) und der Punkt (`.`) durch Zeichenfolgen-basierte Pfade wörtlich interpretiert werden):

- `?` : Der Endpunkt muss 0 oder 1 des vorangehenden Zeichens (oder einer Gruppe) haben, z. B. wird ein Routenirte von `'/ab?cd'` die Endpunkte `acd` oder `abcd` übereinstimmen.
- `+` : Der Endpunkt muss 1 oder mehr des vorhergehenden Zeichens (oder einer Gruppe) haben, z. B. wird ein Routenirte von `'/ab+cd'` die Endpunkte `abcd`, `abbcd`, `abbbcd` usw. übereinstimmen.
- `*` : Der Endpunkt kann eine beliebige Zeichenfolge an der Stelle des `*`-Zeichens haben. Z. B. wird ein Routenirte von `'/ab*cd'` die Endpunkte `abcd`, `abXcd`, `abSOMErandomTEXTcd` usw. übereinstimmen.
- `()` : Gruppierung zur Übereinstimmung eines Satzes von Zeichen für eine andere Operation, z. B. `'/ab(cd)?e'` wird eine `?`-Übereinstimmung auf die Gruppe `(cd)` durchführen — es wird `abe` und `abcde` übereinstimmen.

Die Routenirte können auch JavaScript [reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) sein. Zum Beispiel wird der untenstehende Routenirte `catfish` und `dogfish`, aber nicht `catflap`, `catfishhead` usw. übereinstimmen. Beachten Sie, dass der Pfad für einen regulären Ausdruck die reguläre Ausdruck-Syntax verwendet (es ist keine umschlossene Zeichenkette wie in den vorherigen Fällen).

```js
app.get(/.*fish$/, function (req, res) {
  // …
});
```

> [!NOTE]
> Die meisten unserer Routen für die LocalLibrary werden Zeichenketten und keine regulären Ausdrücke verwenden. Wir werden auch Routenparameter verwenden, wie im nächsten Abschnitt besprochen.

### Routenparameter

Routenparameter sind _benannte URL-Segmente_, die verwendet werden, um Werte an spezifischen Positionen in der URL zu erfassen. Die benannten Segmente werden mit einem Doppelpunkt und dann dem Namen vorangestellt (z. B. `/:your_parameter_name/`). Die erfassten Werte werden im `req.params`-Objekt mit den Parameternamen als Schlüssel (z. B. `req.params.your_parameter_name`) gespeichert.

Betrachten Sie zum Beispiel eine URL, die Informationen über Benutzer und Bücher enthält: `http://localhost:3000/users/34/books/8989`. Wir können diese Informationen wie unten gezeigt extrahieren, mit den `userId` und `bookId` Pfadparametern:

```js
app.get("/users/:userId/books/:bookId", (req, res) => {
  // Access userId via: req.params.userId
  // Access bookId via: req.params.bookId
  res.send(req.params);
});
```

Die Namen von Routenparametern müssen aus "Wortzeichen" (A-Z, a-z, 0-9, und \_) bestehen.

> [!NOTE]
> Die URL _/book/create_ wird von einer Route wie `/book/:bookId` übereinstimmen (weil `:bookId` ein Platzhalter für _jede_ Zeichenkette ist, daher entspricht `create`). Die erste Route, die mit einer eingehenden URL übereinstimmt, wird verwendet, daher muss der Route-Handler für `/book/create` URLs vor Ihrer `/book/:bookId` Route definiert werden.

Das ist alles, was Sie benötigen, um mit Routen zu beginnen – falls nötig, finden Sie weitere Informationen in den Express-Dokumentationen: [Grundlegendes Routing](https://expressjs.com/en/starter/basic-routing.html) und [Routing-Leitfaden](https://expressjs.com/en/guide/routing.html). Die folgenden Abschnitte zeigen, wie wir unsere Routen und Controller für die LocalLibrary einrichten.

### Fehlerbehandlung in den Routenfunktionen

Die oben gezeigten Routenfunktionen haben alle die Argumente `req` und `res`, die die Anfrage und die Antwort repräsentieren.
Routenfunktionen werden auch mit einem dritten Argument `next` aufgerufen, das verwendet werden kann, um Fehler an die Express-Middleware-Kette weiterzugeben.

Der Code unten zeigt, wie dies funktioniert, am Beispiel einer Datenbankabfrage, die eine Callback-Funktion annimmt und entweder einen Fehler `err` oder einige Ergebnisse zurückgibt.
Wenn `err` zurückgegeben wird, wird `next` mit `err` als Wert in seinem ersten Parameter aufgerufen (letztendlich propagiert sich der Fehler zu unserem globalen Fehlerbehandlungscode).
Im Erfolgsfall werden die gewünschten Daten zurückgegeben und dann in der Antwort verwendet.

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
Das Framework ist für die Verwendung mit asynchronen Funktionen vorgesehen, die eine Callback-Funktion (mit einem Error- und einem Ergebnis-Argument) annehmen, die aufgerufen wird, wenn der Vorgang abgeschlossen ist.
Das ist ein Problem, da wir später Mongoose-Datenbankabfragen durchführen werden, die APIs verwenden, die auf [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) basieren und die möglicherweise Ausnahmen in unseren Routenfunktionen auslösen (anstatt Fehler in einem Callback zurückzugeben).

Damit das Framework Ausnahmen ordnungsgemäß behandelt, müssen diese abgefangen und dann wie im vorherigen Abschnitt als Fehler weitergeleitet werden.

> [!NOTE]
> Express 5, das derzeit in der Beta-Version ist, erwartet, dass es JavaScript-Ausnahmen nativ behandelt.

Wenn wir das einfache Beispiel aus dem vorherigen Abschnitt mit `About.find().exec()` als Datenbankabfrage, die ein Versprechen zurückgibt, neu imaginieren, könnten wir die Routenfunktion in einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Block so schreiben:

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

Das ist ziemlich viel Boilerplate-Code, den man zu jeder Funktion hinzufügen muss.
Stattdessen werden wir in diesem Tutorial das [express-async-handler](https://www.npmjs.com/package/express-async-handler) Modul verwenden.
Dieses definiert eine Wrapper-Funktion, die den `try...catch`-Block und den Code zum Weiterleiten des Fehlers ausblendet.
Das gleiche Beispiel ist jetzt sehr einfach, weil wir nur den Code für den Fall schreiben müssen, dass wir Erfolg annehmen:

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

## Benötigte Routen für die LocalLibrary

Die URLs, die wir letztendlich für unsere Seiten benötigen werden, sind unten aufgeführt, wobei _objekt_ durch den Namen jedes unserer Modelle ersetzt wird (Buch, Buchinstanz, Genre, Autor), _objekte_ der Plural von objekten ist, und _id_ das einzigartige Instanzfeld (`_id`) ist, das jedem Mongoose-Modell-Exemplar standardmäßig zugewiesen wird.

- `catalog/` — Die Start-/Indexseite.
- `catalog/<objekte>/` — Die Liste aller Bücher, Buchinstanzen, Genres oder Autoren (z. B. /`catalog/books/`, /`catalog/genres/`, usw.)
- `catalog/<objekt>/<id>` — Die Detailseite für ein bestimmtes Buch, eine bestimmte Buchinstanz, ein bestimmtes Genre oder einen bestimmten Autor mit dem angegebenen Wert des `_id`-Feldes (z.B. `/catalog/book/584493c1f4887f06c0e67d37)`).
- `catalog/<objekt>/create` — Das Formular zur Erstellung eines neuen Buches, einer neuen Buchinstanz, eines neuen Genres oder eines neuen Autors (z.B. `/catalog/book/create)`).
- `catalog/<objekt>/<id>/update` — Das Formular zur Aktualisierung eines spezifischen Buches, einer spezifischen Buchinstanz, eines spezifischen Genres oder eines spezifischen Autors mit dem angegebenen Wert des `_id`-Feldes (z.B. `/catalog/book/584493c1f4887f06c0e67d37/update)`).
- `catalog/<objekt>/<id>/delete` — Das Formular zum Löschen eines spezifischen Buches, einer spezifischen Buchinstanz, eines spezifischen Genres oder eines spezifischen Autors mit dem angegebenen Wert des `_id`-Feldes (z.B. `/catalog/book/584493c1f4887f06c0e67d37/delete)`).

Die erste Startseite und die Listenseiten codieren keine zusätzlichen Informationen. Während die zurückgegebenen Ergebnisse vom Modelltyp und dem Inhalt der Datenbank abhängen, werden die Abfragen, um die Informationen zu erhalten, immer dieselben sein (ähnlich wird der Code für die Objekterstellung immer ähnlich sein).

Im Gegensatz dazu werden die anderen URLs verwendet, um auf ein spezifisches Dokument/Modellexemplar zu wirken—diese kodieren die Identität des Elements in der URL (oben als `<id>` gezeigt). Wir verwenden Pfadparameter, um die codierten Informationen zu extrahieren und sie an den Routen-Handler weiterzuleiten (und in einem späteren Artikel werden wir dies verwenden, um dynamisch zu bestimmen, welche Informationen aus der Datenbank abgerufen werden sollen). Indem wir die Informationen in unserer URL kodieren, benötigen wir nur eine Route für jede Ressource eines bestimmten Typs (z.B. eine Route, um die Anzeige jedes einzelnen Buch-Items zu behandeln).

> [!NOTE]
> Express ermöglicht Ihnen, Ihre URLs auf jede gewünschte Art und Weise zu konstruieren—Sie können Informationen im Hauptteil der URL, wie oben gezeigt, kodieren oder URL-`GET`-Parameter verwenden (z.B. `/book/?id=6`). Welche Methode Sie auch verwenden, die URLs sollten sauber, logisch und lesbar gehalten werden ([sehen Sie sich den W3C-Rat hier an](https://www.w3.org/Provider/Style/URI)).

Als nächstes erstellen wir unsere Routen-Handler-Callback-Funktionen und Routencode für alle oben genannten URLs.

## Erstellen Sie die Route-Handler-Callback-Funktionen

Bevor wir unsere Routen definieren, werden wir zuerst alle Dummy-/Skelett-Callback-Funktionen erstellen, die sie aufrufen werden. Die Callbacks werden in separaten "Controller"-Modulen für `Book`, `BookInstance`, `Genre` und `Author` gespeichert (Sie können jede Datei/Modul-Struktur verwenden, aber dies scheint eine geeignete Granularität für dieses Projekt zu sein).

Beginnen Sie damit, einen Ordner für unsere Controller im Projektstammverzeichnis (**/controllers**) zu erstellen und dann separate Controller-Dateien/Module zur Handhabung jedes der Modelle zu erstellen:

```plain
/express-locallibrary-tutorial  //the project root
  /controllers
    authorController.js
    bookController.js
    bookinstanceController.js
    genreController.js
```

Die Controller werden das `express-async-handler`-Modul verwenden. Bevor wir fortfahren, installieren wir es in der Bibliothek mit `npm`:

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

Das Modul benötigt zuerst das `Author`-Modell, das wir später verwenden werden, um auf unsere Daten zuzugreifen und diese zu aktualisieren, und die `asyncHandler`-Wrapper, die wir verwenden werden, um alle in unseren Routen-Handler-Funktionen ausgelösten Ausnahmen abzufangen. Es exportiert dann Funktionen für jede der URLs, die wir verarbeiten möchten. Beachten Sie, dass die Erstellungs-, Aktualisierungs- und Löschoperationen Formulare verwenden und daher auch zusätzliche Methoden zur Behandlung von Formular-Postanfragen haben – wir werden diese Methoden im späteren "Formular-Artikel" besprechen.

Die Funktionen verwenden alle die oben im Abschnitt [Ausnahmen in Routenfunktionen behandeln](#ausnahmen_in_routenfunktionen_behandeln) beschriebene Wrapper-Funktion, mit Argumenten für die Anfrage, die Antwort und next. Die Funktionen antworten mit einem String, der angibt, dass die zugehörige Seite noch nicht erstellt wurde. Wenn eine Controller-Funktion erwartet wird, Pfadparameter zu erhalten, werden diese in der Zeichenfolgennachricht ausgegeben (siehe `req.params.id` oben).

Beachten Sie, dass einige Routenfunktionen möglicherweise keinen Code enthalten, der Ausnahmen auslösen kann, sobald sie implementiert sind.
Wir können diese dann wieder in "normale" Routen-Handler-Funktionen ändern, wenn wir dazu kommen.

#### BookInstance-Controller

Öffnen Sie die Datei **/controllers/bookinstanceController.js** und kopieren Sie den folgenden Code hinein (dies folgt einem identischen Muster zum `Author`-Controller-Modul):

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

Öffnen Sie die Datei **/controllers/genreController.js** und kopieren Sie den folgenden Text hinein (dies folgt einem identischen Muster zu den `Author` und `BookInstance`-Dateien):

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

Öffnen Sie die Datei **/controllers/bookController.js** und kopieren Sie den folgenden Code hinein.
Dies folgt dem gleichen Muster wie die anderen Controller-Module, hat aber zusätzlich eine `index()` Funktion zur Anzeige der Willkommensseite der Seite:

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

## Erstellen Sie das Katalog-Routemodul

Als nächstes erstellen wir _Routen_ für alle URLs, die [von der LocalLibrary-Website benötigt werden](#benötigte_routen_für_die_locallibrary), die die in den vorherigen Abschnitten definierten Controller-Funktionen aufrufen.

Das Grundgerüst hat bereits einen **./routes** Ordner, der Routen für den _Index_ und _Benutzer_ enthält.
Erstellen Sie eine weitere Routen-Datei — **catalog.js** — in diesem Ordner, wie gezeigt.

```plain
/express-locallibrary-tutorial //the project root
  /routes
    index.js
    users.js
    catalog.js
```

Öffnen Sie **/routes/catalog.js** und kopieren Sie den untenstehenden Code hinein:

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

Die Routen werden entweder mithilfe von `.get()` oder `.post()` Methoden am Router-Objekt definiert. Alle Pfade werden mit Zeichenketten definiert (wir verwenden keine Zeichenmuster oder regulären Ausdrücke).
Routen, die auf einige spezifische Ressourcen (z.B. Buch) wirken, verwenden Pfadparameter, um die Objekt-ID von der URL zu erhalten.

Die Handler-Funktionen werden alle aus den in den vorherigen Abschnitten erstellten Controller-Modulen importiert.

### Aktualisieren Sie das Index-Routemodul

Wir haben alle unsere neuen Routen eingerichtet, aber wir haben immer noch eine Route zur ursprünglichen Seite. Stattdessen lassen Sie uns auf die neue Indexseite weiterleiten, die wir am Pfad '/catalog' erstellt haben.

Öffnen Sie **/routes/index.js** und ersetzen Sie die vorhandene Route durch die unten stehende Funktion.

```js
// GET home page.
router.get("/", function (req, res) {
  res.redirect("/catalog");
});
```

> [!NOTE]
> Dies ist unsere erste Verwendung der [redirect()](https://expressjs.com/en/4x/api.html#res.redirect) Antwortmethode. Dies leitet auf die angegebene Seite um, indem standardmäßig der HTTP-Statuscode "302 Found" gesendet wird. Sie können den zurückgegebenen Statuscode ändern, wenn nötig, und entweder absolute oder relative Pfade angeben.

### Aktualisieren Sie app.js

Der letzte Schritt besteht darin, die Routen zur Middleware-Kette hinzuzufügen.
Wir tun dies in `app.js`.

Öffnen Sie **app.js** und benötigen Sie die Katalogroute unter den anderen Routen (fügen Sie die dritte Zeile wie unten gezeigt hinzu, unter den beiden anderen, die bereits in der Datei vorhanden sein sollten):

```js
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const catalogRouter = require("./routes/catalog"); //Import routes for "catalog" area of site
```

Fügen Sie anschließend die Katalogroute zum Middleware-Stapel unter den anderen Routen hinzu (fügen Sie die dritte Zeile wie unten gezeigt hinzu, unter den beiden anderen, die bereits in der Datei vorhanden sein sollten):

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/catalog", catalogRouter); // Add catalog routes to middleware chain.
```

> [!NOTE]
> Wir haben unser Katalogmodul an einem Pfad `'/catalog'` hinzugefügt. Dies wird allen in dem Katalogmodul definierten Pfaden vorangestellt. Um beispielsweise auf eine Liste von Büchern zuzugreifen, lautet die URL: `/catalog/books/`.

Das war's. Wir sollten jetzt Routen und Skelettfunktionen für alle URLs haben, die wir schließlich auf der LocalLibrary-Website unterstützen werden.

### Die Routen testen

Um die Routen zu testen, starten Sie zuerst die Website mit Ihrem üblichen Ansatz.

- Die Standardmethode

  ```bash
  # Windows
  SET DEBUG=express-locallibrary-tutorial:* & npm start

  # macOS or Linux
  DEBUG=express-locallibrary-tutorial:* npm start
  ```

- Wenn Sie früher [nodemon](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website#enable_server_restart_on_file_changes) eingerichtet haben, können Sie stattdessen Folgendes verwenden:

  ```bash
  npm run serverstart
  ```

Navigieren Sie dann zu einer Reihe von LocalLibrary-URLs und vergewissern Sie sich, dass Sie keine Fehlerseite (HTTP 404) erhalten. Eine kleine Auswahl von URLs ist unten zu Ihrer Bequemlichkeit aufgeführt:

- `http://localhost:3000/`
- `http://localhost:3000/catalog`
- `http://localhost:3000/catalog/books`
- `http://localhost:3000/catalog/bookinstances/`
- `http://localhost:3000/catalog/authors/`
- `http://localhost:3000/catalog/genres/`
- `http://localhost:3000/catalog/book/5846437593935e2f8c2aa226`
- `http://localhost:3000/catalog/book/create`

## Zusammenfassung

Wir haben nun alle Routen für unsere Seite erstellt, zusammen mit Dummy-Controller-Funktionen, die wir in späteren Artikeln mit einer vollständigen Implementierung füllen können. Auf dem Weg dorthin haben wir viel grundlegende Informationen über Express-Routen, die Behandlung von Ausnahmen und einige Ansätze zur Strukturierung unserer Routen und Controller gelernt.

In unserem nächsten Artikel werden wir eine richtige Willkommensseite für die Seite erstellen, indem wir Ansichten (Templates) und in unseren Modellen gespeicherte Informationen verwenden.

## Siehe auch

- [Grundlegendes Routing](https://expressjs.com/en/starter/basic-routing.html) (Express-Dokumentation)
- [Routing-Leitfaden](https://expressjs.com/en/guide/routing.html) (Express-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
