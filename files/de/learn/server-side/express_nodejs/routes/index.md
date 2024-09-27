---
title: "Express Tutorial Teil 4: Routen und Controller"
slug: Learn/Server-side/Express_Nodejs/routes
l10n:
  sourceCommit: 1467f47e1944c151b368e047fe4f9cf7f1f0e0e2
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/mongoose", "Learn/Server-side/Express_Nodejs/Displaying_data", "Learn/Server-side/Express_Nodejs")}}

In diesem Tutorial richten wir Routen (URL-Verarbeitungscode) mit "Dummy"-Handler-Funktionen für alle Ressourcen-Endpunkte ein, die wir schließlich auf der [LocalLibrary](/de/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) Website benötigen werden. Nach Abschluss werden wir eine modulare Struktur für unseren Routenverarbeitungscode haben, die wir in den folgenden Artikeln mit echten Handler-Funktionen erweitern können. Wir werden auch ein sehr gutes Verständnis dafür haben, wie man modulare Routen mit Express erstellt!

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn/Server-side/Express_Nodejs/Introduction">Einführung in Express/Node</a>.
        Schließen Sie die vorherigen Tutorial-Themen (einschließlich <a href="/de/docs/Learn/Server-side/Express_Nodejs/mongoose">Express Tutorial Teil 3: Verwenden einer Datenbank (mit Mongoose)</a>) ab.
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

## Überblick

Im [letzten Tutorial-Artikel](/de/docs/Learn/Server-side/Express_Nodejs/mongoose) haben wir _Mongoose_ Modelle definiert, um mit der Datenbank zu interagieren, und ein (eigenständiges) Skript verwendet, um einige anfängliche Bibliotheksdatensätze zu erstellen. Wir können nun den Code schreiben, um diese Informationen den Nutzern zu präsentieren. Das Erste, was wir tun müssen, ist zu bestimmen, welche Informationen wir in unseren Seiten anzeigen möchten, und dann geeignete URLs für die Rückgabe dieser Ressourcen zu definieren. Dann müssen wir die Routen (URL-Handler) und Ansichten (Templates) erstellen, um diese Seiten anzuzeigen.

Das untenstehende Diagramm dient als Erinnerung an den Hauptfluss von Daten und Dingen, die implementiert werden müssen, wenn eine HTTP-Anfrage/Antwort bearbeitet wird. Zusätzlich zu den Ansichten und Routen zeigt das Diagramm "Controller" – Funktionen, die den Code zur Weiterleitung der Anfragen vom Code trennen, der die Anfragen tatsächlich verarbeitet.

Da wir bereits die Modelle erstellt haben, sind die Hauptsachen, die wir erstellen müssen:

- "Routen", um die unterstützten Anfragen (und alle in Anfragen-URLs codierten Informationen) an die entsprechenden Controller-Funktionen weiterzuleiten.
- Controller-Funktionen, um die angeforderten Daten von den Modellen zu bekommen, eine HTML-Seite anzuzeigen, die die Daten darstellt, und diese an den Benutzer zurückzugeben, damit er sie im Browser sehen kann.
- Ansichten (Templates), die von den Controllern verwendet werden, um die Daten zu rendern.

![Hauptdatenflussdiagramm eines MVC-Express-Servers: 'Routen' empfangen die HTTP-Anfragen, die an den Express-Server gesendet werden und leiten sie an die entsprechende 'Controller'-Funktion weiter. Der Controller liest und schreibt Daten aus den Modellen. Modelle sind mit der Datenbank verbunden, um dem Server den Datenzugriff zu ermöglichen. Controller verwenden 'Ansichten', auch Vorlagen genannt, um die Daten darzustellen. Der Controller sendet die HTML-HTTP-Antwort als HTTP-Antwort an den Client zurück.](mvc_express.png)

Letztendlich könnten wir Seiten haben, die Listen und Detailinformationen zu Büchern, Genres, Autoren und Buchinstanzen zeigen, zusammen mit Seiten zum Erstellen, Aktualisieren und Löschen von Datensätzen. Das ist viel zu dokumentieren in einem Artikel. Daher wird sich der größte Teil dieses Artikels darauf konzentrieren, unsere Routen und Controller so einzurichten, dass "Dummy"-Inhalte zurückgegeben werden. Wir werden die Controller-Methoden in unseren nachfolgenden Artikeln erweitern, um mit Modelldaten zu arbeiten.

Der erste Abschnitt unten bietet eine kurze "Einführung" in die Verwendung der Express [Router](https://expressjs.com/en/4x/api.html#router) Middleware. Wir werden dieses Wissen in den folgenden Abschnitten nutzen, wenn wir die LocalLibrary-Routen einrichten.

## Routen-Einführung

Eine Route ist ein Abschnitt von Express-Code, der ein HTTP-Verb (`GET`, `POST`, `PUT`, `DELETE`, etc.), einen URL-Pfad/-Muster und eine Funktion, die aufgerufen wird, um dieses Muster zu bearbeiten, miteinander verbindet.

Es gibt mehrere Möglichkeiten, Routen zu erstellen. Für dieses Tutorial werden wir die [`express.Router`](https://expressjs.com/en/guide/routing.html#express-router) Middleware verwenden, da diese uns ermöglicht, die Routen-Handler für einen bestimmten Teil einer Website zusammenzufassen und sie über ein gemeinsames Routen-Präfix zugänglich zu machen. Wir werden alle unsere bibliotheksbezogenen Routen in einem "Katalog"-Modul halten und, wenn wir Routen für die Verwaltung von Benutzerkonten oder anderer Funktionen hinzufügen, können wir diese separat gruppiert halten.

> [!NOTE]
> Wir haben Anwendungsrouten von Express in unserer [Einführung in Express > Erstellen von Routen-Handlern](/de/docs/Learn/Server-side/Express_Nodejs/Introduction#creating_route_handlers) kurz besprochen. Abgesehen davon, dass es eine bessere Unterstützung für die Modularisierung bietet (wie im ersten Unterabschnitt unten besprochen), ist die Verwendung von _Router_ sehr ähnlich zu der direkten Definition von Routen auf dem _Express-Anwendungsobjekt_.

Der Rest dieses Abschnitts bietet einen Überblick darüber, wie der `Router` verwendet werden kann, um die Routen zu definieren.

### Definition und Verwendung separater Routen-Module

Der folgende Code bietet ein konkretes Beispiel dafür, wie wir ein Routen-Modul erstellen und in einer _Express_ Anwendung verwenden können.

Zuerst erstellen wir Routen für ein Wiki in einem Modul namens **wiki.js**. Der Code importiert zuerst das Express-Anwendungsobjekt, verwendet es, um ein `Router`-Objekt zu bekommen und fügt dann ein paar Routen hinzu, indem die `get()` Methode verwendet wird. Zuletzt exportiert das Modul das `Router`-Objekt.

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
> Oben definieren wir unsere Routen-Handler-Rückrufe direkt in den Router-Funktionen. In der LocalLibrary werden wir diese Rückrufe in einem separaten Controller-Modul definieren.

Um das Router-Modul in unserer Haupt-App zu verwenden, müssen wir zuerst das Routen-Modul (**wiki.js**) mittels `require()` importieren. Anschließend rufen wir die `use()` Methode auf dem _Express_-Anwendungsobjekt auf, um den Router in den Middleware-Verarbeitungspfad hinzuzufügen und einen URL-Pfad von 'wiki' anzugeben.

```js
const wiki = require("./wiki.js");
// …
app.use("/wiki", wiki);
```

Die beiden im Wiki-Routenmodul definierten Routen sind dann von `/wiki/` und `/wiki/about/` zugänglich.

### Routenfunktionen

Unser Modul oben definiert ein paar typische Routenfunktionen. Die "about"-Route (nachstehend reproduziert) ist mit der Methode `Router.get()` definiert, die nur auf HTTP GET-Anfragen antwortet. Das erste Argument dieser Methode ist der URL-Pfad, während das zweite eine Rückruffunktion ist, die aufgerufen wird, wenn eine HTTP GET-Anfrage mit dem Pfad empfangen wird.

```js
router.get("/about", function (req, res) {
  res.send("About this wiki");
});
```

Der Rückruf nimmt drei Argumente (gewöhnlich wie gezeigt benannt: `req`, `res`, `next`), die das HTTP Request-Objekt, die HTTP-Antwort und die _next_-Funktion in der Middleware-Kette enthalten.

> [!NOTE]
> Router-Funktionen sind [Express-Middleware](/de/docs/Learn/Server-side/Express_Nodejs/Introduction#using_middleware), was bedeutet, dass sie entweder die Anfrage abschließen (beantworten) oder die `next`-Funktion in der Kette aufrufen müssen. Im obigen Fall schließen wir die Anfrage mit `send()` ab, sodass das `next`-Argument nicht verwendet wird (und wir entscheiden uns, es nicht anzugeben).
>
> Die obige Router-Funktion nimmt einen einzigen Rückruf, aber Sie können so viele Rückrufe-Argumente angeben, wie Sie möchten, oder ein Array von Rückruffunktionen. Jede Funktion ist Teil der Middleware-Kette und wird in der Reihenfolge aufgerufen, in der sie zur Kette hinzugefügt wird (es sei denn, eine vorhergehende Funktion schließt die Anfrage ab).

Die Rückruffunktion hier ruft [`send()`](https://expressjs.com/en/4x/api.html#res.send) für die Antwort auf, um den String "About this wiki" zurückzugeben, wenn wir eine GET-Anfrage mit dem Pfad (`/about`) erhalten. Es gibt eine [Anzahl anderer Antwortmethoden](https://expressjs.com/en/guide/routing.html#response-methods), um den Anforderung-/Antwortzyklus zu beenden. Zum Beispiel könnten Sie [`res.json()`](https://expressjs.com/en/4x/api.html#res.json) aufrufen, um eine JSON-Antwort zu senden, oder [`res.sendFile()`](https://expressjs.com/en/4x/api.html#res.sendFile), um eine Datei zu senden. Die Antwortmethode, die wir am häufigsten verwenden werden, während wir die Bibliothek aufbauen, ist [`render()`](https://expressjs.com/en/4x/api.html#res.render), das HTML-Dateien mit Templates und Daten erstellt und zurückgibt — wir werden später in einem anderen Artikel viel mehr darüber sprechen!

### HTTP-Verben

Die Beispielrouten oben verwenden die Methode `Router.get()`, um auf HTTP GET-Anfragen mit einem bestimmten Pfad zu antworten.

Der `Router` bietet auch Routenmethoden für alle anderen HTTP-Verben, die größtenteils auf genau die gleiche Weise verwendet werden: `post()`, `put()`, `delete()`, `options()`, `trace()`, `copy()`, `lock()`, `mkcol()`, `move()`, `purge()`, `propfind()`, `proppatch()`, `unlock()`, `report()`, `mkactivity()`, `checkout()`, `merge()`, `m-search()`, `notify()`, `subscribe()`, `unsubscribe()`, `patch()`, `search()`, und `connect()`.

Zum Beispiel funktioniert der folgende Code genauso wie die vorherige `/about`-Route, antwortet jedoch nur auf HTTP POST-Anfragen.

```js
router.post("/about", (req, res) => {
  res.send("About this wiki");
});
```

### Routenpfade

Die Routenpfade definieren die Endpunkte, an denen Anfragen gestellt werden können. Die Beispiele, die wir bisher gesehen haben, waren nur Zeichenfolgen und werden genau so verwendet, wie sie geschrieben sind: '/', '/about', '/book', '/any-random.path'.

Routenpfade können auch Zeichenfolgenmuster sein. Zeichenfolgenmuster verwenden eine Form der regulären Ausdrucks-Syntax, um _Muster_ von Endpunkten zu definieren, die abgeglichen werden sollen. Die Syntax ist unten aufgeführt (beachten Sie, dass der Bindestrich (`-`) und der Punkt (`.`) durch zeichenbasierte Pfade wörtlich interpretiert werden):

- `?` : Der Endpunkt muss 0 oder 1 des vorherigen Zeichens (oder einer Gruppe) haben, z.B. ein Routenpfad von `'/ab?cd'` wird Endpunkte `acd` oder `abcd` abgleichen.
- `+` : Der Endpunkt muss 1 oder mehr des vorherigen Zeichens (oder einer Gruppe) aufweisen, z.B. ein Routenpfad von `'/ab+cd'` wird Endpunkte `abcd`, `abbcd`, `abbbcd`, und so weiter abgleichen.
- `*` : Der Endpunkt kann ein beliebiger String dort aufweisen, wo das `*` Zeichen platziert ist. Z.B. ein Routenpfad von `'/ab*cd'` wird Endpunkte `abcd`, `abXcd`, `abSOMErandomTEXTcd`, und so weiter abgleichen.
- `()` : Gruppierung auf einem Satz von Zeichen, um eine andere Operation auszuführen, z.B. bei `'/ab(cd)?e'` wird eine `?`-Abgleich auf die Gruppe `(cd)` ausgeführt — es wird `abe` und `abcde` abgleichen.

Die Routenpfade können auch JavaScript [reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) sein. Zum Beispiel wird der Routenpfad unten `catfish` und `dogfish` abgleichen, jedoch nicht `catflap`, `catfishhead`, und so weiter. Beachten Sie, dass der Pfad für einen regulären Ausdruck reguläre Ausdrucks-Syntax verwendet (es ist kein zitierter String wie in den vorherigen Fällen).

```js
app.get(/.*fish$/, function (req, res) {
  // …
});
```

> [!NOTE]
> Die meisten unserer Routen für die LocalLibrary werden Zeichenfolgen und keine regulären Ausdrücke verwenden. Wir werden auch Routenparameter verwenden, wie im nächsten Abschnitt besprochen.

### Routenparameter

Routenparameter sind _benannte URL-Segmente_, die verwendet werden, um Werte an bestimmten Positionen in der URL zu erfassen. Die benannten Segmente werden mit einem Doppelpunkt vorangestellt und dann der Name (z.B.: `/:your_parameter_name/`). Die erfassten Werte werden im `req.params`-Objekt unter Verwendung der Parameternamen als Schlüssel gespeichert (z.B., `req.params.your_parameter_name`).

Betrachten Sie zum Beispiel eine URL, die Informationen über Benutzer und Bücher enthält: `http://localhost:3000/users/34/books/8989`. Wir können diese Informationen wie unten gezeigt extrahieren, mit den Routenparametern `userId` und `bookId`:

```js
app.get("/users/:userId/books/:bookId", (req, res) => {
  // Access userId via: req.params.userId
  // Access bookId via: req.params.bookId
  res.send(req.params);
});
```

Die Namen der Routenparameter müssen aus "Wortzeichen" bestehen (A-Z, a-z, 0-9 und \_).

> [!NOTE]
> Die URL _/book/create_ wird durch eine Route wie `/book/:bookId` übereinstimmen (weil `:bookId` ein Platzhalter für _beliebige_ Zeichenketten ist, deshalb passt `create`). Die erste Route, die mit einer eingehenden URL übereinstimmt, wird verwendet, wenn Sie also URLs `/book/create` spezifisch verarbeiten möchten, muss ihr Routen-Handler vor Ihrer `/book/:bookId` Route definiert sein.

Das ist alles, was Sie brauchen, um mit Routen loszulegen – bei Bedarf können Sie weitere Informationen in den Express-Dokumenten finden: [Grundlegendes Routing](https://expressjs.com/en/starter/basic-routing.html) und [Routing-Leitfaden](https://expressjs.com/en/guide/routing.html). Die folgenden Abschnitte zeigen, wie wir unsere Routen und Controller für die LocalLibrary einrichten werden.

### Fehler in den Routenfunktionen behandeln

Die früher gezeigten Routenfunktionen haben alle die Argumente `req` und `res`, die die Anfrage und die Antwort darstellen.
Routenfunktionen werden auch mit einem dritten Argument aufgerufen, `next`, das verwendet werden kann, um Fehler an die Express-Middleware-Kette weiterzuleiten.

Der folgende Code zeigt, wie das funktioniert, wobei ein Beispiel einer Datenbankabfrage verwendet wird, die eine Rückruffunktion nimmt und entweder einen Fehler `err` oder einige Ergebnisse zurückgibt.
Wird `err` zurückgegeben, wird `next` mit `err` als Wert in seinem ersten Parameter aufgerufen (letztendlich wird der Fehler an unseren globalen Fehlerbehandlungscode weitergeleitet).
Erfolgt die Verarbeitung, werden die gewünschten Daten zurückgegeben und dann in der Antwort verwendet.

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
Das Framework ist für die Verwendung mit asynchronen Funktionen ausgelegt, die eine Rückruffunktion nehmen (mit einem Fehler- und Ergebnisargument), die aufgerufen wird, wenn der Vorgang abgeschlossen ist.
Das ist ein Problem, weil wir später Mongoose-Datenbankabfragen machen werden, die APIs basierend auf [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) verwenden, und die möglicherweise Ausnahmen in unseren Routenfunktionen werfen (anstatt Fehler in einem Rückruf zurückzugeben).

Damit das Framework Ausnahmen korrekt behandelt, müssen sie abgefangen und dann als Fehler weitergeleitet werden, wie im vorherigen Abschnitt gezeigt.

> [!NOTE]
> Express 5, das sich derzeit in der Beta-Phase befindet, soll JavaScript-Ausnahmen nativ handeln.

Wenn wir das einfache Beispiel aus dem vorherigen Abschnitt mit `About.find().exec()` als eine Datenbankabfrage, die eine Promise zurückgibt, neu darstellen, könnten wir die Routenfunktion in einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Block wie folgt schreiben:

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

Das ist eine Menge Boilerplate-Code, um ihn jeder Funktion hinzuzufügen.
Stattdessen werden wir für dieses Tutorial das [express-async-handler](https://www.npmjs.com/package/express-async-handler) Modul verwenden.
Dies definiert eine Wrapper-Funktion, die den `try...catch` Block und den Code zum Weiterleiten des Fehlers ausblendet.
Das gleiche Beispiel ist jetzt sehr einfach, weil wir nur Code für den Fall schreiben müssen, in dem wir Erfolg annehmen:

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

Die URLs, die wir schließlich für unsere Seiten benötigen werden, sind unten aufgeführt, wobei _object_ durch den Namen jedes unserer Modelle (Buch, Buchinstanz, Genre, Autor), _objects_ das Plural von Object ist, und _id_ das eindeutige Instanzfeld (`_id`) ist, das jedem Mongoose-Modellstandardmäßig gegeben wird.

- `catalog/` — Die Start-/Indexseite.
- `catalog/<objects>/` — Die Liste aller Bücher, Buchinstanzen, Genres oder Autoren (z.B. /`catalog/books/`, /`catalog/genres/`, etc.)
- `catalog/<object>/<id>` — Die Detailseite für ein bestimmtes Buch, Buchinstanz, Genre oder Autor mit dem gegebenen `_id`-Feldwert (z.B. `/catalog/book/584493c1f4887f06c0e67d37`).
- `catalog/<object>/create` — Das Formular zum Erstellen eines neuen Buchs, einer neuen Buchinstanz, eines neuen Genres oder Autors (z.B. `/catalog/book/create`).
- `catalog/<object>/<id>/update` — Das Formular zum Aktualisieren eines spezifischen Buchs, Buchinstanz, Genres oder Autors mit dem gegebenen `_id`-Feldwert (z.B. `/catalog/book/584493c1f4887f06c0e67d37/update`).
- `catalog/<object>/<id>/delete` — Das Formular zum Löschen eines spezifischen Buchs, Buchinstanz, Genres oder Autors mit dem gegebenen `_id`-Feldwert (z.B. `/catalog/book/584493c1f4887f06c0e67d37/delete`).

Die erste Startseite und Listenseiten kodieren keine zusätzlichen Informationen. Während die zurückgegebenen Ergebnisse von der Modellart und dem Inhalt in der Datenbank abhängen, laufen die Abfragen, um die Informationen zu erhalten, immer gleich (ähnlich wird der Code zum Erstellen von Objekten immer ähnlich sein).

Im Gegensatz dazu werden die anderen URLs verwendet, um auf ein spezifisches Dokument/Modell-Instanz zu wirken – diese kodieren die Identität des Elements in der URL (wie oben als `<id>` gezeigt). Wir werden Pfadparameter verwenden, um die codierten Informationen zu extrahieren und sie an den Routen-Handler weiterzuleiten (und in einem späterenArtikel verwenden wir dies, um dynamisch zu bestimmen, welche Informationen aus der Datenbank abgerufen werden sollen). Indem wir die Informationen in unseren URL kodieren, benötigen wir nur eine Route für jede Ressource eines bestimmten Typs (z.B. eine Route, um die Anzeige jedes einzelnen Buchartikels zu handhaben).

> [!NOTE]
> Express ermöglicht Ihnen, Ihre URLs beliebig zu konstruieren — Sie können Informationen im Körper der URL kodieren, wie oben gezeigt, oder URL-`GET`-Parameter verwenden (z.B. `/book/?id=6`). Welche Methode Sie auch verwenden, die URLs sollten sauber, logisch und lesbar gehalten werden ([lesen Sie hier den W3C-Ratschlag](https://www.w3.org/Provider/Style/URI)).

Als nächstes erstellen wir unsere Routen-Handler-Rückruffunktionen und den Routen-Code für alle oben genannten URLs.

## Erstellen Sie die Routen-Handler-Rückruffunktionen

Bevor wir unsere Routen definieren, erstellen wir zunächst alle Dummy/Skelett-Rückruffunktionen, die sie aufrufen werden. Die Rückrufe werden in separaten "Controller"-Modulen für `Book`, `BookInstance`, `Genre` und `Author` gespeichert (Sie können jede Datei-/Modulstruktur verwenden, aber dies scheint eine angemessene Granularität für dieses Projekt zu sein).

Beginnen Sie damit, einen Ordner für unsere Controller im Projektstamm (**/controllers**) zu erstellen und dann separate Controller-Dateien/-Module für die Behandlung jedes Modells zu erstellen:

```plain
/express-locallibrary-tutorial  //the project root
  /controllers
    authorController.js
    bookController.js
    bookinstanceController.js
    genreController.js
```

Die Controller werden das `express-async-handler` Modul verwenden, deshalb installieren Sie es vor dem Fortfahren mit `npm` in die Bibliothek:

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

Das Modul erfordert zuerst das `Author` Modell, das wir später zum Zugriff und Aktualisieren unserer Daten verwenden werden, sowie den `asyncHandler` Wrapper, den wir verwenden werden, um alle in unseren Routen-Handler-Funktionen geworfenen Ausnahmen abzufangen. Es exportiert dann Funktionen für jede der URLs, die wir bearbeiten möchten. Beachten Sie, dass die Erstellungs-, Aktualisierungs- und Lösch-Operationen Formulare verwenden und daher auch zusätzliche Methoden zur Bearbeitung von Formular-POST-Anfragen haben — wir werden diese Methoden im Artikel über Formulare später besprechen.

Die Funktionen verwenden alle die oben beschriebene Wrapper-Funktion in [Ausnahmen in Routenfunktionen behandeln](#ausnahmen_in_routenfunktionen_behandeln), mit Argumenten für die Anfrage, die Antwort und nächstes. Die Funktionen antworten mit einem String, der angibt, dass die zugehörige Seite noch nicht erstellt wurde. Wenn eine Controller-Funktion erwartet wird, Pfadparameter zu erhalten, werden diese im Nachrichten-Strings ausgegeben (siehe `req.params.id` oben).

Beachten Sie, dass einige Routenfunktionen, wenn sie implementiert sind, keinen Code enthalten, der Ausnahmen werfen kann. Wir können diese zurück zu "normalen" Routen-Handler-Funktionen ändern, wenn wir sie erreichen.

#### BookInstance-Controller

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

#### Genre-Controller

Öffnen Sie die Datei **/controllers/genreController.js** und kopieren Sie den folgenden Text (dies folgt einem identischen Muster wie die Dateien `Author` und `BookInstance`):

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

Öffnen Sie die Datei **/controllers/bookController.js** und kopieren Sie den folgenden Code. Dies folgt demselben Muster wie die anderen Controller-Module, hat jedoch zusätzlich eine `index()`-Funktion zum Anzeigen der Begrüßungsseite der Website:

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

## Erstellen Sie das Katalog-Routen-Modul

Als nächstes erstellen wir _Routen_ für alle URLs, [die von der LocalLibrary-Website benötigt werden](#für_die_locallibrary_benötigte_routen), die die Controller-Funktionen aufrufen, die wir in den vorherigen Abschnitten definiert haben.

Das Skelett verfügt bereits über einen **./routes** Ordner, der Routen für den _index_ und _users_ enthält.
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

Das Modul benötigt Express und verwendet es dann, um ein `Router`-Objekt zu erstellen. Die Routen werden alle am Router eingerichtet, der dann exportiert wird.

Die Routen werden entweder mit `.get()` oder `.post()` Methoden auf dem Router-Objekt definiert. Alle Pfade sind mit Zeichenfolgen definiert (wir verwenden keine Zeichenfolgenmuster oder regulären Ausdrücke).
Routen, die auf eine bestimmte Ressource (z.B. Buch) wirken, verwenden Pfadparameter, um die Objekt-ID aus der URL zu bekommen.

Die Handlerfunktionen werden alle aus den Controller-Modulen importiert, die wir im vorherigen Abschnitt erstellt haben.

### Aktualisieren des Index-Routen-Moduls

Wir haben alle unsere neuen Routen eingerichtet, aber wir haben immer noch eine Route zur ursprünglichen Seite. Lassen Sie uns stattdessen diese auf die neue Indexseite umleiten, die wir unter dem Pfad '/catalog' erstellt haben.

Öffnen Sie **/routes/index.js** und ersetzen Sie die vorhandene Route durch die folgende Funktion.

```js
// GET home page.
router.get("/", function (req, res) {
  res.redirect("/catalog");
});
```

> [!NOTE]
> Dies ist unser erster Einsatz der [redirect()](https://expressjs.com/en/4x/api.html#res.redirect) Antwortmethode. Dies leitet auf die angegebene Seite um, indem standardmäßig der HTTP-Statuscode "302 Found" gesendet wird. Sie können bei Bedarf den zurückgegebenen Statuscode ändern und entweder absolute oder relative Pfade angeben.

### Aktualisieren von app.js

Der letzte Schritt besteht darin, die Routen zur Middleware-Kette hinzuzufügen.
Wir tun dies in `app.js`.

Öffnen Sie **app.js** und erfordern Sie die Katalogroute unter den anderen Routen (fügen Sie die dritte Zeile hinzu, die unten gezeigt wird, unterhalb der anderen beiden, die bereits in der Datei vorhanden sein sollten):

```js
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const catalogRouter = require("./routes/catalog"); //Import routes for "catalog" area of site
```

Fügen Sie dann die Katalogroute dem Middleware-Stack unterhalb der anderen Routen hinzu (fügen Sie die dritte Zeile hinzu, die unten gezeigt wird, unterhalb der anderen beiden, die bereits in der Datei vorhanden sein sollten):

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/catalog", catalogRouter); // Add catalog routes to middleware chain.
```

> [!NOTE]
> Wir haben unser Katalogmodul bei einem Pfad `'/catalog'` hinzugefügt. Dies wird allen in dem Katalogmodul definierten Pfaden vorangestellt. Um also auf eine Liste von Büchern zuzugreifen, wird die URL beispielsweise: `/catalog/books/`.

Das war's. Wir sollten jetzt Routen und Skelettfunktionen für alle URLs aktiviert haben, die wir letztlich auf der LocalLibrary-Website unterstützen werden.

### Testen der Routen

Um die Routen zu testen, starten Sie zuerst die Website mit Ihrem üblichen Ansatz

- Die Standardmethode

  ```bash
  # Windows
  SET DEBUG=express-locallibrary-tutorial:* & npm start

  # macOS or Linux
  DEBUG=express-locallibrary-tutorial:* npm start
  ```

- Wenn Sie zuvor [nodemon](/de/docs/Learn/Server-side/Express_Nodejs/skeleton_website#enable_server_restart_on_file_changes) eingerichtet haben, können Sie stattdessen verwenden:

  ```bash
  npm run serverstart
  ```

Navigieren Sie dann zu einer Reihe von LocalLibrary-URLs und vergewissern Sie sich, dass Sie keine Fehlerseite (HTTP 404) erhalten. Eine kleine Auswahl von URLs ist nachfolgend zu Ihrer Bequemlichkeit aufgelistet:

- `http://localhost:3000/`
- `http://localhost:3000/catalog`
- `http://localhost:3000/catalog/books`
- `http://localhost:3000/catalog/bookinstances/`
- `http://localhost:3000/catalog/authors/`
- `http://localhost:3000/catalog/genres/`
- `http://localhost:3000/catalog/book/5846437593935e2f8c2aa226`
- `http://localhost:3000/catalog/book/create`

## Zusammenfassung

Wir haben nun alle Routen für unsere Seite erstellt, zusammen mit Dummy-Controller-Funktionen, die wir in späteren Artikeln mit einer vollständigen Implementierung füllen können. Auf dem Weg haben wir viel grundlegendes Wissen über Express-Routen, Ausnahmebehandlung und einige Ansätze zur Strukturierung unserer Routen und Controller gelernt.

In unserem nächsten Artikel erstellen wir eine richtige Begrüßungsseite für die Website, indem wir Ansichten (Templates) und Informationen verwenden, die in unseren Modellen gespeichert sind.

## Siehe auch

- [Grundlegendes Routing](https://expressjs.com/en/starter/basic-routing.html) (Express-Dokumentation)
- [Routing-Leitfaden](https://expressjs.com/en/guide/routing.html) (Express-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/mongoose", "Learn/Server-side/Express_Nodejs/Displaying_data", "Learn/Server-side/Express_Nodejs")}}
