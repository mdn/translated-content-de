---
title: "Express Tutorial Teil 4: Routen und Controller"
short-title: "4: Routen und Controller"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/routes
l10n:
  sourceCommit: 14acf1aa7885157debdf1b6111f4bd10c064ec60
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

In diesem Tutorial richten wir Routen (URL-Verarbeitungscode) mit "Dummy"-Handlerfunktionen für alle Ressourcenziele ein, die wir auf der [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website)-Website schließlich benötigen werden. Am Ende werden wir eine modulare Struktur für unseren Routen-Verarbeitungscode haben, die wir in den folgenden Artikeln mit echten Handlerfunktionen erweitern können. Wir werden auch ein sehr gutes Verständnis dafür haben, wie man Express zur Erstellung modularer Routen verwendet!

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction">Express/Node-Einführung</a>.
        Beenden Sie die vorherigen Tutorial-Themen (einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose">Express Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose)</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie man einfache Routen erstellt.
        Einrichten aller URL-Endpunkte.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Im [letzten Tutorial-Artikel](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose) haben wir _Mongoose_-Modelle definiert, um mit der Datenbank zu interagieren, und ein (eigenständiges) Skript verwendet, um einige erste Bibliotheksdatensätze zu erstellen. Jetzt können wir den Code schreiben, um diese Informationen den Benutzern bereitzustellen. Zuerst müssen wir bestimmen, welche Informationen wir auf unseren Seiten anzeigen möchten, und dann geeignete URLs definieren, um diese Ressourcen zurückzugeben. Dann müssen wir die Routen (URL-Handler) und Ansichten (Templates) erstellen, um diese Seiten anzuzeigen.

Das unten stehende Diagramm dient als Erinnerung an den Hauptdatenfluss und die Dinge, die implementiert werden müssen, wenn eine HTTP-Anfrage/Antwort verarbeitet wird. Zusätzlich zu den Ansichten und Routen zeigt das Diagramm "Controller" — Funktionen, die den Code zur Verarbeitung von Anfragen von dem Code trennen, der die Anfragen tatsächlich verarbeitet.

Da wir die Modelle bereits erstellt haben, müssen wir hauptsächlich Folgendes erstellen:

- "Routen", um die unterstützten Anfragen (und alle Informationen, die in Anforderungs-URLs kodiert sind) an die entsprechenden Controller-Funktionen weiterzuleiten.
- Controller-Funktionen, um die angeforderten Daten von den Modellen zu erhalten, eine HTML-Seite zur Anzeige der Daten zu erstellen und sie zur Ansicht im Browser an den Benutzer zurückzugeben.
- Ansichten (Templates), die von den Controllern zum Rendern der Daten verwendet werden.

![Hauptdatenflussdiagramm eines MVC-Express-Servers: "Routen" empfangen die HTTP-Anfragen, die an den Express-Server gesendet werden, und leiten sie an die entsprechende "Controller"-Funktion weiter. Der Controller liest und schreibt Daten aus den Modellen. Modelle sind mit der Datenbank verbunden, um dem Server Datenzugriff zu bieten. Controller verwenden "Ansichten", auch Templates genannt, zum Rendern der Daten. Der Controller sendet die HTML-HTTP-Antwort als HTTP-Antwort an den Client zurück.](mvc_express.png)

Letztendlich könnten wir Seiten haben, die Listen und Detailinformationen für Bücher, Genres, Autoren und Buchinstanzen anzeigen, zusammen mit Seiten zum Erstellen, Aktualisieren und Löschen von Datensätzen. Das ist viel zu dokumentieren in einem Artikel. Daher konzentriert sich der größte Teil dieses Artikels darauf, unsere Routen und Controller einzurichten, um "Dummy"-Inhalte zurückzugeben. Wir werden die Controller-Methoden in unseren nachfolgenden Artikeln erweitern, um mit Modelldaten zu arbeiten.

Der erste Abschnitt unten bietet eine kurze "Einführung" in die Verwendung der Express [Router](https://expressjs.com/en/4x/api.html#router) Middleware. Wir werden dieses Wissen dann in den folgenden Abschnitten anwenden, wenn wir die LocalLibrary-Routen einrichten.

## Routen Einführung

Eine Route ist ein Abschnitt von Express-Code, der ein HTTP-Verb (`GET`, `POST`, `PUT`, `DELETE`, etc.), einen URL-Pfad/Muster und eine Funktion, die aufgerufen wird, um dieses Muster zu bearbeiten, assoziiert.

Es gibt mehrere Möglichkeiten, Routen zu erstellen. Für dieses Tutorial werden wir die [`express.Router`](https://expressjs.com/en/guide/routing.html#express-router) Middleware verwenden, da sie es uns ermöglicht, die Routen-Handler für einen bestimmten Teil einer Website zusammenzufassen und sie mit einem gemeinsamen Routen-Präfix zuzugreifen. Wir werden alle unsere bibliotheksbezogenen Routen in einem "Katalog"-Modul behalten, und falls wir Routen zur Verarbeitung von Benutzerkonten oder anderen Funktionen hinzufügen, können wir sie separat gruppieren.

> [!NOTE]
> Wir haben Express-Anwendungsrouten kurz in unserer [Express Introduction > Routen-Handler erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#creating_route_handlers) diskutiert. Abgesehen von der besseren Unterstützung für Modularisierung (wie im ersten Unterabschnitt unten diskutiert), ist die Verwendung von _Router_ sehr ähnlich wie das direkte Definieren von Routen auf dem _Express-Anwendungsobjekt_.

Der Rest dieses Abschnitts bietet einen Überblick darüber, wie der `Router` zum Definieren der Routen verwendet werden kann.

### Definieren und Verwenden separater Routenmodule

Der folgende Code bietet ein konkretes Beispiel dafür, wie wir ein Routenmodul erstellen und dann in einer _Express_-Anwendung verwenden können.

Zuerst erstellen wir Routen für ein Wiki in einem Modul namens **wiki.js**. Der Code importiert zuerst das Express-Anwendungsobjekt, verwendet es, um ein `Router`-Objekt zu erhalten und fügt dann ein paar Routen hinzu, indem die `get()`-Methode verwendet wird. Zuletzt exportiert das Modul das `Router`-Objekt.

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
> Oben definieren wir unsere Routen-Handler-Collbacks direkt in den Router-Funktionen. In der LocalLibrary werden wir diese Collbacks in einem separaten Controller-Modul definieren.

Um das Routermodul in unserer Hauptanwendungsdatei zu verwenden, `require()` wir zuerst das Routemodul (**wiki.js**). Dann rufen wir `use()` auf der _Express_-Anwendung auf, um das Router der Middleware-Verarbeitungspfad hinzuzufügen, indem wir einen URL-Pfad von 'wiki' angeben.

```js
const wiki = require("./wiki.js");

// …
app.use("/wiki", wiki);
```

Die beiden Routen, die in unserem Wiki-Routenmodul definiert sind, sind dann von `/wiki/` und `/wiki/about/` aus zugänglich.

### Routenfunktionen

Unser Modul oben definiert ein paar typische Routenfunktionen. Die "about"-Route (unten reproduziert) wird mit der Methode `Router.get()` definiert, die nur auf HTTP-GET-Anfragen antwortet. Der erste Parameter dieser Methode ist der URL-Pfad, während der zweite eine Callback-Funktion ist, die aufgerufen wird, wenn eine GET-Anfrage mit dem Pfad eingeht.

```js
router.get("/about", (req, res) => {
  res.send("About this wiki");
});
```

Das Collback nimmt drei Argumente (normalerweise wie gezeigt benannt: `req`, `res`, `next`), die das HTTP-Anfrageobjekt, die HTTP-Antwort und die _nächste_ Funktion in der Middleware-Kette enthalten.

> [!NOTE]
> Router-Funktionen sind [Express-Middleware](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#using_middleware), was bedeutet, dass sie entweder die Anfrage abschließen (beantworten) oder die `next`-Funktion in der Kette aufrufen müssen. Im obigen Fall schließen wir die Anfrage mit `send()` ab, daher wird das `next`-Argument nicht verwendet (und wir entscheiden uns, es nicht zu spezifizieren).
>
> Die Router-Funktion oben nimmt nur ein Collback, aber Sie können so viele Collback-Argumente angeben, wie Sie möchten, oder ein Array von Collback-Funktionen. Jede Funktion ist Teil der Middleware-Kette und wird in der Reihenfolge aufgerufen, in der sie zur Kette hinzugefügt wird (es sei denn, eine vorhergehende Funktion schließt die Anfrage ab).

Die Callback-Funktion ruft [`send()`](https://expressjs.com/en/4x/api.html#res.send) auf der Antwort auf, um die Zeichenkette "Über dieses Wiki" zurückzugeben, wenn wir eine GET-Anfrage mit dem Pfad (`/about`) erhalten. Es gibt eine [Anzahl anderer Antwortmethoden](https://expressjs.com/en/guide/routing.html#response-methods) zum Beenden des Anfrage-/Antwortzyklus. Beispielsweise könnten Sie [`res.json()`](https://expressjs.com/en/4x/api.html#res.json) aufrufen, um eine JSON-Antwort zu senden, oder [`res.sendFile()`](https://expressjs.com/en/4x/api.html#res.sendFile), um eine Datei zu senden. Die Antwortmethode, die wir meistens verwenden werden, während wir die Bibliothek aufbauen, ist [`render()`](https://expressjs.com/en/4x/api.html#res.render), die HTML-Dateien mit Vorlagen und Daten erstellt und zurückgibt — darüber werden wir in einem späteren Artikel viel mehr sprechen!

### HTTP-Methoden

Die Beispielrouten oben verwenden die Methode `Router.get()`, um auf HTTP-GET-Anfragen mit einem bestimmten Pfad zu antworten.

Der `Router` bietet auch Routenmethoden für alle anderen HTTP-Methoden, die meist in genau derselben Weise verwendet werden: `post()`, `put()`, `delete()`, `options()`, `trace()`, `copy()`, `lock()`, `mkcol()`, `move()`, `purge()`, `propfind()`, `proppatch()`, `unlock()`, `report()`, `mkactivity()`, `checkout()`, `merge()`, `m-search()`, `notify()`, `subscribe()`, `unsubscribe()`, `patch()`, `search()`, und `connect()`.

Zum Beispiel verhält sich der folgende Code genauso wie die vorherige `/about`-Route, antwortet jedoch nur auf HTTP-POST-Anfragen.

```js
router.post("/about", (req, res) => {
  res.send("About this wiki");
});
```

### Routenpfade

Die Routenpfade definieren die Endpunkte, an denen Anfragen gestellt werden können. Die Beispiele, die wir bisher gesehen haben, waren lediglich Zeichenfolgen und werden genau so verwendet, wie sie geschrieben sind: '/', '/about', '/book', '/any-random.path'.

Routenpfade können auch Zeichenfolgenmuster sein. Zeichenfolgenmuster verwenden eine Form der regulären Ausdruckssyntax, um _Muster_ von Endpunkten zu definieren, die übereinstimmen werden. Die Syntax ist wie folgt (beachten Sie, dass der Bindestrich (`-`) und der Punkt (`.`) in zeichenfolgenbasierten Pfaden wörtlich interpretiert werden):

- `?` : Der Endpunkt muss 0 oder 1 der vorhergehenden Zeichen (oder Gruppe) haben, z.B., ein Routenpfad von `'/ab?cd'` wird für Endpunkte `acd` oder `abcd` übereinstimmen.
- `+` : Der Endpunkt muss 1 oder mehr der vorhergehenden Zeichen (oder Gruppe) haben, z.B., ein Routenpfad von `'/ab+cd'` wird für Endpunkte `abcd`, `abbcd`, `abbbcd` usw. übereinstimmen.
- `*` : Der Endpunkt kann eine beliebige Zeichenkette an der Stelle haben, an der das `*`-Zeichen platziert ist. Z.B. ein Routenpfad von `'/ab*cd'` wird für Endpunkte `abcd`, `abXcd`, `abSOMErandomTEXTcd` usw. übereinstimmen.
- `()` : Gruppierte Übereinstimmung auf einen Satz von Zeichen, um eine andere Operation durchzuführen, z.B., `'/ab(cd)?e'` wird eine `?`-Übereinstimmung auf der Gruppe `(cd)` durchführen — es wird `abe` und `abcde` entsprechen.

Die Routenpfade können auch JavaScript [reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) sein. Zum Beispiel wird der Routenpfad unten für `catfish` und `dogfish`, aber nicht für `catflap`, `catfishhead` usw. übereinstimmen. Beachten Sie, dass der Pfad für einen regulären Ausdruck reguläre Ausdruckssyntax verwendet (es ist keine zitierte Zeichenfolge wie in den vorherigen Fällen).

```js
app.get(/.*fish$/, (req, res) => {
  // …
});
```

> [!NOTE]
> Die meisten unserer Routen für die LocalLibrary werden Zeichenfolgen und keine regulären Ausdrücke verwenden. Wir werden auch Routenparameter verwenden, wie im nächsten Abschnitt erörtert.

### Routenparameter

Routenparameter sind _benannte URL-Segmente_, die verwendet werden, um Werte an spezifischen Positionen in der URL zu erfassen. Die benannten Segmente werden mit einem Doppelpunkt und dann dem Namen (zum Beispiel `/:your_parameter_name/`) vorangestellt. Die erfassten Werte werden im `req.params` Objekt mit den Parameternamen als Schlüssel gespeichert (zum Beispiel `req.params.your_parameter_name`).

Betrachten Sie zum Beispiel eine URL, die so kodiert ist, dass Informationen über Benutzer und Bücher enthält: `http://localhost:3000/users/34/books/8989`. Wir können diese Informationen wie unten gezeigt extrahieren, mit den Routenparametern `userId` und `bookId`:

```js
app.get("/users/:userId/books/:bookId", (req, res) => {
  // Access userId via: req.params.userId
  // Access bookId via: req.params.bookId
  res.send(req.params);
});
```

Die Namen von Routenparametern müssen aus "Wortzeichen" bestehen (A-Z, a-z, 0-9 und \_).

> [!NOTE]
> Die URL _/book/create_ wird von einer Route wie `/book/:bookId` übereinstimmen (weil `:bookId` ein Platzhalter für _jeden_ Zeichen string ist, daher passt `create`). Die erste Route, die mit einer eingehenden URL übereinstimmt, wird verwendet, also wenn Sie `/book/create`-URLs spezifisch verarbeiten möchten, muss deren Routen-Handler vor Ihrer `/book/:bookId`-Route definiert werden.

Das ist alles, was Sie benötigen, um mit Routen zu starten - bei Bedarf können mehr Informationen in den Express-Dokumenten gefunden werden: [Basic routing](https://expressjs.com/en/starter/basic-routing.html) und [Routing guide](https://expressjs.com/en/guide/routing.html). Die folgenden Abschnitte zeigen, wie wir unsere Routen und Controller für die LocalLibrary einrichten werden.

### Fehlerbehandlung in den Routenfunktionen

Die oben gezeigten Routenfunktionen haben alle Argumente `req` und `res`, die die Anfrage bzw. die Antwort darstellen. Routenfunktionen werden auch mit einem dritten Argument `next` aufgerufen, das verwendet werden kann, um Fehler an die Express-Middleware-Kette weiterzuleiten.

Der folgende Code zeigt, wie dies funktioniert, basierend auf einem Beispiel einer Datenbankabfrage, die eine Collback-Funktion annimmt und entweder einen Fehler `err` oder einige Ergebnisse zurückgibt. Wenn `err` zurückgegeben wird, wird `next` mit `err` als Wert in seinem ersten Parameter aufgerufen (letztendlich propagiert sich der Fehler zu unserem globalen Fehlerverarbeitungscode). Bei Erfolg werden die gewünschten Daten zurückgegeben und dann in der Antwort verwendet.

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

### Ausnahmebehandlung in Routenfunktionen

Der vorherige Abschnitt zeigt, wie Express erwartet, dass Routenfunktionen Fehler zurückgeben. Der Rahmen ist für die Verwendung mit asynchronen Funktionen konzipiert, die eine Collback-Funktion annehmen (mit einem Fehler- und Ergebnisargument), die aufgerufen wird, wenn die Operation abgeschlossen ist. Das ist ein Problem, da wir später Mongoose-Datenbankabfragen machen werden, die [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)-basierte APIs verwenden und möglicherweise Ausnahmen in unseren Routenfunktionen werfen (anstatt Fehler in einem Collback zurückzugeben).

Damit das Framework Ausnahmen ordnungsgemäß verarbeitet, müssen sie abgefangen und dann als Fehler weitergeleitet werden, wie im vorherigen Abschnitt gezeigt.

> [!NOTE]
> Express 5, das sich derzeit in der Beta-Phase befindet, wird voraussichtlich JavaScript-Ausnahmen nativ verarbeiten.

Um das einfache Beispiel aus dem vorherigen Abschnitt mit `About.find().exec()` als Datenbankabfrage, die ein Versprechen zurückgibt, neu zu überdenken, könnten wir die Routenfunktion innerhalb eines [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Blocks wie folgt schreiben:

```js
exports.get("/about", async (req, res, next) => {
  try {
    const successfulResult = await About.find({}).exec();
    res.render("about_view", { title: "About", list: successfulResult });
  } catch (error) {
    return next(error);
  }
});
```

Das ist eine Menge Boilerplate-Code, den man jeder Funktion hinzufügen muss. Stattdessen werden wir für dieses Tutorial das [express-async-handler](https://www.npmjs.com/package/express-async-handler) Modul verwenden. Dieses definiert eine Wrapper-Funktion, die den `try...catch`-Block und den Code zum Weiterleiten des Fehlers verbirgt. Das gleiche Beispiel ist jetzt sehr einfach, da wir nur Code für den Fall schreiben müssen, in dem wir Erfolg annehmen:

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

## Routen, die für die LocalLibrary benötigt werden

Die URLs, die wir letztlich für unsere Seiten benötigen, sind unten aufgeführt, wobei _object_ durch den Namen jedes unserer Modelle (Buch, Buchinstanz, Genre, Autor), _objects_ durch den Plural von Object und _id_ durch das eindeutige Instanzfeld (`_id`), das standardmäßig jedem Mongoose-Modellinstanz zugewiesen wird, ersetzt wird.

- `catalog/` — Die Start-/Indexseite.
- `catalog/<objects>/` — Die Liste aller Bücher, Buchinstanzen, Genres oder Autoren (z.B. /`catalog/books/`, /`catalog/genres/` etc.)
- `catalog/<object>/<id>` — Die Detaillierte Seite für ein bestimmtes Buch, Buchinstanz, Genre oder Autor mit dem angegebenen `_id` Feldwert (z.B. `/catalog/book/584493c1f4887f06c0e67d37)`).
- `catalog/<object>/create` — Das Formular zum Erstellen eines neuen Buches, Buchinstanz, Genres oder Autors (z.B. `/catalog/book/create)`).
- `catalog/<object>/<id>/update` — Das Formular zum Aktualisieren eines bestimmten Buches, Buchinstanz, Genres oder Autors mit dem angegebenen `_id` Feldwert (z.B. `/catalog/book/584493c1f4887f06c0e67d37/update)`).
- `catalog/<object>/<id>/delete` — Das Formular zum Löschen eines bestimmten Buches, Buchinstanz, Genres oder Autors mit dem angegebenen `_id` Feldwert (z.B. `/catalog/book/584493c1f4887f06c0e67d37/delete)`).

Die erste Startseite und die Listenseiten kodieren keine zusätzlichen Informationen. Während die zurückgegebenen Ergebnisse vom Modelltyp und dem Inhalt in der Datenbank abhängen, sind die durchgeführten Abfragen, um die Informationen abzurufen, immer dieselben (ähnlich ist der Code für das Erstellen von Objekten immer ähnlich).

Im Gegensatz dazu werden die anderen URLs verwendet, um auf ein spezifisches Dokument/Modellinstanz zu wirken — diese kodieren die Identität des Elements in der URL (wie oben als `<id>` angezeigt). Wir verwenden Routenparameter, um die kodierten Informationen zu extrahieren und an den Routen-Handler zu übergeben (und in einem späteren Artikel verwenden wir dies, um dynamisch zu bestimmen, welche Informationen aus der Datenbank abgerufen werden). Durch das Kodieren der Informationen in unserer URL benötigen wir nur eine Route für jede Ressource eines bestimmten Typs (z.B. eine Route, um die Anzeige jedes einzelnen Buchelements zu behandeln).

> [!NOTE]
> Express ermöglicht es Ihnen, Ihre URLs beliebig zu konstruieren — Sie können Informationen im Hauptteil der URL wie oben gezeigt kodieren oder URL-`GET`-Parameter verwenden (z.B. `/book/?id=6`). Unabhängig davon, welchen Ansatz Sie verwenden, sollten die URLs sauber, logisch und lesbar gehalten werden ([sehen Sie sich den W3C-Rat hier an](https://www.w3.org/Provider/Style/URI)).

Als nächstes erstellen wir unsere Routen-Handler-Collbacks und den Routen-Code für alle obigen URLs.

## Erstellen der Routen-Handler-Callback-Funktionen

Bevor wir unsere Routen definieren, erstellen wir zunächst alle Dummy/Skelett-Callback-Funktionen, die sie aufrufen werden. Die Callbacks werden in separaten "Controller"-Modulen für `Book`, `BookInstance`, `Genre` und `Author` gespeichert (Sie können jede beliebige Datei-/Modulstruktur verwenden, aber dies scheint eine angemessene Granularität für dieses Projekt zu sein).

Beginnen Sie damit, einen Ordner für unsere Controller im Projektstammverzeichnis zu erstellen (**/controllers**) und erstellen Sie dann für jedes der Modelle separate Controller-Dateien/Module:

```plain
/express-locallibrary-tutorial  # the project root
  /controllers
    authorController.js
    bookController.js
    bookinstanceController.js
    genreController.js
```

Die Controller werden das `express-async-handler` Modul verwenden, daher installieren Sie es zuerst mit `npm` in die Bibliothek:

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

Das Modul erfordert zuerst das `Author`-Modell, das wir später verwenden, um unsere Daten zuzugreifen und zu aktualisieren, und das `asyncHandler`-Wrapper, das wir verwenden, um alle Ausnahmen abzufangen, die in unseren Routen-Handler-Funktionen geworfen werden. Es exportiert dann Funktionen für jede der URLs, die wir bearbeiten möchten. Beachten Sie, dass die Erstellungs-, Aktualisierungs- und Löschvorgänge Formulare verwenden und daher zusätzliche Methoden zum Verarbeiten von Formular-Postanfragen haben — wir werden diese Methoden im "Formular-Artikel" später besprechen.

Die Funktionen verwenden alle die oben in [Ausnahmebehandlung in Routenfunktionen](#ausnahmebehandlung_in_routenfunktionen) beschriebene Wrapper-Funktion mit Argumenten für die Anfrage, die Antwort und nächtes. Die Funktionen antworten mit einer Zeichenkette, die darauf hinweist, dass die dazugehörige Seite noch nicht erstellt wurde. Wenn erwartet wird, dass eine Controller-Funktion Pfadparameter empfängt, werden diese in der Nachrichtenzeichenkette ausgegeben (siehe `req.params.id` oben).

Beachten Sie, dass einige Routenfunktionen, wenn sie implementiert werden, möglicherweise keinen Code enthalten, der Ausnahmen werfen kann. Wir können diese wieder in "normale" Routen-Handler-Funktionen ändern, wenn wir sie erreichen.

#### BookInstance Controller

Öffnen Sie die Datei **/controllers/bookinstanceController.js** und kopieren Sie den folgenden Code (dies folgt einem identischen Muster wie das `Author` Controller Modul):

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

#### Book Controller

Öffnen Sie die Datei **/controllers/bookController.js** und kopieren Sie den folgenden Code. Dies folgt dem gleichen Muster wie die anderen Controllermodule, hat jedoch zusätzlich eine `index()`-Funktion zur Anzeige der Willkommensseite der Website:

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

Als nächstes erstellen wir _Routen_ für alle URLs, [die von der LocalLibrary-Website benötigt werden](#routen,_die_für_die_locallibrary_benötigt_werden), die die Controller-Funktionen aufrufen, die wir in den vorherigen Abschnitten definiert haben.

Das Skelett verfügt bereits über einen **./routes** Ordner, der Routen für den _index_ und die _users_ enthält. Erstellen Sie eine weitere Routendatei — **catalog.js** — in diesem Ordner, wie gezeigt.

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

Die Routen werden entweder mithilfe von `.get()`- oder `.post()`-Methoden auf dem Router-Objekt definiert. Alle Pfade sind unter Verwendung von Zeichenfolgen definiert (wir verwenden keine Zeichenfolgenmuster oder regulären Ausdrücke). Routen, die auf einige spezifische Ressourcen (z.B. Buch) wirken, verwenden Pfadparameter, um die Objekt-ID aus der URL zu erhalten.

Die Handler-Funktionen werden alle aus den Controller-Modulen importiert, die wir im vorherigen Abschnitt erstellt haben.

### Aktualisieren des Index-Routenmoduls

Wir haben alle unsere neuen Routen eingerichtet, aber wir haben immer noch eine Route zur ursprünglichen Seite. Lassen Sie uns stattdessen zu der neuen Indexseite umleiten, die wir unter dem Pfad '/catalog' erstellt haben.

Öffnen Sie **/routes/index.js** und ersetzen Sie die bestehende Route mit der folgenden Funktion.

```js
// GET home page.
router.get("/", (req, res) => {
  res.redirect("/catalog");
});
```

> [!NOTE]
> Dies ist unsere erste Verwendung der [redirect()](https://expressjs.com/en/4x/api.html#res.redirect)-Antwortmethode. Diese leitet zur angegebenen Seite um, wobei standardmäßig der HTTP-Statuscode "302 Found" gesendet wird. Sie können den zurückgegebenen Statuscode bei Bedarf ändern und entweder absolute oder relative Pfade angeben.

### Aktualisieren von app.js

Der letzte Schritt besteht darin, die Routen der Middleware-Kette hinzuzufügen. Das machen wir in `app.js`.

Öffnen Sie **app.js** und fordern Sie die Katalogroute unter den anderen Routen an (fügen Sie die dritte unten gezeigte Zeile unter den anderen zwei ein, die sich bereits in der Datei befinden sollten):

```js
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const catalogRouter = require("./routes/catalog"); // Import routes for "catalog" area of site
```

Fügen Sie als nächstes die Katalogroute in den Middleware-Stack unter den anderen Routen hinzu (fügen Sie die dritte unten gezeigte Zeile unter den anderen zwei ein, die sich bereits in der Datei befinden sollten):

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/catalog", catalogRouter); // Add catalog routes to middleware chain.
```

> [!NOTE]
> Wir haben unser Katalogmodul an einem Pfad `'/catalog'` hinzugefügt. Dies wird allen im Katalogmodul definierten Pfaden vorangestellt. Um zum Beispiel auf eine Liste von Büchern zuzugreifen, wird die URL folgendermaßen lauten: `/catalog/books/`.

Das ist es. Wir sollten jetzt Routen und Skelettfunktionen für alle URLs aktiviert haben, die wir auf der Website der LocalLibrary schließlich unterstützen werden.

### Testen der Routen

Um die Routen zu testen, starten Sie zuerst die Website mit Ihrem üblichen Ansatz

- Die Standardmethode

  ```bash
  # Windows
  SET DEBUG=express-locallibrary-tutorial:* & npm start

  # macOS or Linux
  DEBUG=express-locallibrary-tutorial:* npm start
  ```

- Wenn Sie zuvor [nodemon](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website#enable_server_restart_on_file_changes) eingerichtet haben, können Sie stattdessen Folgendes verwenden:

  ```bash
  npm run serverstart
  ```

Navigieren Sie dann zu einer Reihe von LocalLibrary-URLs und überprüfen Sie, dass Sie keine Fehlerseite (HTTP 404) erhalten. Eine kleine Auswahl an URLs ist unten zu Ihrer Bequemlichkeit aufgelistet:

- `http://localhost:3000/`
- `http://localhost:3000/catalog`
- `http://localhost:3000/catalog/books`
- `http://localhost:3000/catalog/bookinstances/`
- `http://localhost:3000/catalog/authors/`
- `http://localhost:3000/catalog/genres/`
- `http://localhost:3000/catalog/book/5846437593935e2f8c2aa226`
- `http://localhost:3000/catalog/book/create`

## Zusammenfassung

Wir haben jetzt alle Routen für unsere Website erstellt, zusammen mit Dummy-Controller-Funktionen, die wir in späteren Artikeln mit einer vollständigen Implementierung ausstatten können. Auf dem Weg haben wir viel grundlegende Informationen über Express-Routen, Ausnahmebehandlung und einige Ansätze zur Strukturierung unserer Routen und Controller gelernt.

In unserem nächsten Artikel erstellen wir eine ordnungsgemäße Willkommensseite für die Website, indem wir Ansichten (Templates) und Informationen verwenden, die in unseren Modellen gespeichert sind.

## Siehe auch

- [Basic routing](https://expressjs.com/en/starter/basic-routing.html) (Express-Dokumentation)
- [Routing guide](https://expressjs.com/en/guide/routing.html) (Express-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
