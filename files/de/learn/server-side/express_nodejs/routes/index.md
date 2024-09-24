---
title: "Express Lernprogramm Teil 4: Routen und Controller"
slug: Learn/Server-side/Express_Nodejs/routes
l10n:
  sourceCommit: 1467f47e1944c151b368e047fe4f9cf7f1f0e0e2
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/mongoose", "Learn/Server-side/Express_Nodejs/Displaying_data", "Learn/Server-side/Express_Nodejs")}}

In diesem Tutorial richten wir Routen (URL-Verarbeitungscode) mit "Dummy"-Handler-Funktionen für alle Ressourcenziele ein, die wir schließlich auf der [LocalLibrary](/de/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) Website benötigen werden. Nach Abschluss haben wir eine modulare Struktur für unseren Routenverarbeitungscode, die wir in den folgenden Artikeln mit echten Handler-Funktionen erweitern können. Wir werden auch ein wirklich gutes Verständnis dafür haben, wie man modulare Routen mit Express erstellt!

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn/Server-side/Express_Nodejs/Introduction">Einführung in Express/Node</a>.
        Schließen Sie die vorherigen Tutorial-Themen ab (einschließlich <a href="/de/docs/Learn/Server-side/Express_Nodejs/mongoose">Express-Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose)</a>).
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

## Übersicht

Im [letzten Tutorial-Artikel](/de/docs/Learn/Server-side/Express_Nodejs/mongoose) haben wir _Mongoose_-Modelle definiert, um mit der Datenbank zu interagieren, und ein (eigenständiges) Skript verwendet, um einige erste Bibliothekseinträge zu erstellen. Jetzt können wir den Code schreiben, um diese Informationen den Nutzern zu präsentieren. Das Erste, was wir tun müssen, ist zu bestimmen, welche Informationen wir in unseren Seiten anzeigen möchten, und dann geeignete URLs für das Zurückgeben dieser Ressourcen zu definieren. Dann müssen wir die Routen (URL-Handler) und Ansichten (Templates) erstellen, um diese Seiten anzuzeigen.

Das unten gezeigte Diagramm soll als Erinnerung an den Hauptfluss von Daten und zu implementierenden Dingen dienen, die bei der Verarbeitung einer HTTP-Anfrage/Antwort erforderlich sind. Zusätzlich zu den Ansichten und Routen zeigt das Diagramm "Controller" — Funktionen, die den Code zur Routenanfrage von dem Code, der Anfragen tatsächlich verarbeitet, trennen.

Da wir bereits die Modelle erstellt haben, müssen wir hauptsächlich Folgendes erstellen:

- "Routen", um die unterstützten Anfragen (und alle in den Anforderungs-URLs kodierten Informationen) an die entsprechenden Controller-Funktionen weiterzuleiten.
- Controller-Funktionen, um die angeforderten Daten aus den Modellen abzurufen, eine HTML-Seite zur Anzeige der Daten zu erstellen und sie dem Nutzer zur Anzeige im Browser zurückzugeben.
- Ansichten (Templates), die von den Controllern verwendet werden, um die Daten zu rendern.

![Hauptdatenflussdiagramm eines MVC-Express-Servers: "Routen" empfangen die an den Express-Server gesendeten HTTP-Anfragen und leiten sie an die entsprechende "Controller"-Funktion weiter. Der Controller liest und schreibt Daten aus den Modellen. Modelle sind mit der Datenbank verbunden, um dem Server Datenzugriff zu ermöglichen. Controller verwenden "Ansichten", auch Templates genannt, um die Daten zu rendern. Der Controller sendet die HTML-HTTP-Antwort als HTTP-Antwort an den Client zurück.](mvc_express.png)

Letztendlich könnten wir Seiten haben, die Listen und Detailinformationen zu Büchern, Genres, Autoren und Buchinstanzen anzeigen, zusammen mit Seiten zum Erstellen, Aktualisieren und Löschen von Einträgen. Das ist eine Menge, die in einem Artikel dokumentiert werden muss. Daher konzentriert sich der Großteil dieses Artikels auf das Einrichten unserer Routen und Controller, um "Dummy"-Inhalte zurückzugeben. Wir werden die Controllermethoden in unseren nachfolgenden Artikeln so erweitern, dass sie mit Modelldaten arbeiten.

Der erste Abschnitt unten bietet eine kurze "Einführung" in die Verwendung der Express [Router](https://expressjs.com/en/4x/api.html#router) Middleware. Dieses Wissen werden wir dann in den folgenden Abschnitten nutzen, wenn wir die LocalLibrary-Routen einrichten.

## Einführung in Routen

Eine Route ist ein Abschnitt von Express-Code, der ein HTTP-Verb (`GET`, `POST`, `PUT`, `DELETE`, usw.), einen URL-Pfad/Muster und eine Funktion, die zur Behandlung dieses Musters aufgerufen wird, verbindet.

Es gibt mehrere Möglichkeiten, Routen zu erstellen. Für dieses Tutorial werden wir die [`express.Router`](https://expressjs.com/en/guide/routing.html#express-router) Middleware verwenden, da sie es uns ermöglicht, die Routen-Handler für einen bestimmten Teil einer Seite zusammenzufassen und sie über ein gemeinsames Routenpräfix zuzugreifen. Wir werden alle unsere bibliotheksbezogenen Routen in einem "Katalog"-Modul behalten, und wenn wir Routen für die Verwaltung von Benutzerkonten oder anderen Funktionen hinzufügen, können wir sie separat gruppieren.

> [!NOTE]
> Wir haben Express-Anwendungsrouten kurz in unserer [Express-Einführung > Erstellen von Routen-Handlern](/de/docs/Learn/Server-side/Express_Nodejs/Introduction#creating_route_handlers) besprochen. Abgesehen von der Bereitstellung besserer Unterstützung für Modularisierung (wie im ersten Unterabschnitt unten besprochen), ähnelt die Verwendung von _Router_ sehr der direkten Definition von Routen auf dem _Express-Anwendungsobjekt_.

Der Rest dieses Abschnitts bietet einen Überblick darüber, wie der `Router` zur Definition der Routen verwendet werden kann.

### Definieren und Verwenden separater Routemodule

Der unten stehende Code bietet ein konkretes Beispiel dafür, wie wir ein Routemodul erstellen und dann in einer _Express_-Anwendung verwenden können.

Zuerst erstellen wir Routen für ein Wiki in einem Modul namens **wiki.js**. Der Code importiert zunächst das Express-Anwendungsobjekt, verwendet es zur Erzeugung eines `Router`-Objekts und fügt dann mittels der Methode `get()` ein paar Routen hinzu. Zuletzt exportiert das Modul das `Router`-Objekt.

```js
// wiki.js - Wiki-Routenmodul.

const express = require("express");
const router = express.Router();

// Startseitentroute.
router.get("/", function (req, res) {
  res.send("Wiki-Startseite");
});

// Über-Seite-Route.
router.get("/about", function (req, res) {
  res.send("Über dieses Wiki");
});

module.exports = router;
```

> [!NOTE]
> Oben definieren wir unsere Routen-Handler-Callbacks direkt in den Router-Funktionen. In der LocalLibrary werden wir diese Callbacks in einem separaten Controllermodul definieren.

Um das Routermodul in unserer Hauptanwendungsdatei zu verwenden, `require()` wir zuerst das Routenmodul (**wiki.js**). Wir rufen dann `use()` auf der _Express_-Anwendung auf, um den Router dem Middleware-Verarbeitungspfad hinzuzufügen und geben dabei einen URL-Pfad von 'wiki' an.

```js
const wiki = require("./wiki.js");
// …
app.use("/wiki", wiki);
```

Die beiden in unserem Wiki-Routenmodul definierten Routen sind dann von `/wiki/` und `/wiki/about/` aus zugänglich.

### Routenfunktionen

Unser obenstehendes Modul definiert ein paar typische Routenfunktionen. Die "Über"-Route (nachstehend wiedergegeben) wird unter Verwendung der `Router.get()`-Methode definiert, die nur auf HTTP-GET-Anfragen antwortet. Das erste Argument dieser Methode ist der URL-Pfad, während das zweite eine Callback-Funktion ist, die aufgerufen wird, wenn eine HTTP-GET-Anfrage mit dem Pfad eingeht.

```js
router.get("/about", function (req, res) {
  res.send("Über dieses Wiki");
});
```

Das Callback nimmt drei Argumente entgegen (üblicherweise wie gezeigt genannt: `req`, `res`, `next`), die die HTTP-Anforderungsobjekte, HTTP-Antwort und die _nächste_ Funktion in der Middleware-Kette enthalten.

> [!NOTE]
> Router-Funktionen sind [Express-Middleware](/de/docs/Learn/Server-side/Express_Nodejs/Introduction#using_middleware), was bedeutet, dass sie entweder die Anfrage abschließen (antworten) oder die `next`-Funktion in der Kette aufrufen müssen. Im obigen Fall schließen wir die Anfrage mit `send()` ab, sodass das `next`-Argument nicht verwendet wird (und wir es nicht angeben).
>
> Die Router-Funktion oben nimmt ein einzelnes Callback entgegen, aber Sie können so viele Callback-Argumente angeben, wie Sie möchten, oder ein Array von Callback-Funktionen definieren. Jede Funktion ist Teil der Middleware-Kette und wird in der Reihenfolge aufgerufen, in der sie zur Kette hinzugefügt wird (es sei denn, eine vorausgehende Funktion schließt die Anfrage ab).

Die Callback-Funktion hier ruft [`send()`](https://expressjs.com/en/4x/api.html#res.send) zur Antwort auf, um den String "Über dieses Wiki" zurückzugeben, wenn wir eine GET-Anfrage mit dem Pfad (`/about`) erhalten. Es gibt eine [Reihe anderer Antwortmethoden](https://expressjs.com/en/guide/routing.html#response-methods) zum Enden des Anfragemethoden-/Antwortzyklus. Beispielsweise könnte man [`res.json()`](https://expressjs.com/en/4x/api.html#res.json) verwenden, um eine JSON-Antwort zu senden, oder [`res.sendFile()`](https://expressjs.com/en/4x/api.html#res.sendFile), um eine Datei zu senden. Die Antwortmethode, die wir am häufigsten verwenden, während wir die Bibliothek aufbauen, ist [`render()`](https://expressjs.com/en/4x/api.html#res.render), die HTML-Dateien mit Vorlagen und Daten erstellt und zurückgibt — darüber werden wir in einem späteren Artikel noch ausführlicher sprechen!

### HTTP-Verben

Die oben gezeigten Beispiels-Routen verwenden die `Router.get()`-Methode, um auf HTTP-GET-Anfragen mit einem bestimmten Pfad zu antworten.

Der `Router` bietet auch Routemethoden für alle anderen HTTP-Verben, die im Wesentlichen auf die gleiche Weise verwendet werden: `post()`, `put()`, `delete()`, `options()`, `trace()`, `copy()`, `lock()`, `mkcol()`, `move()`, `purge()`, `propfind()`, `proppatch()`, `unlock()`, `report()`, `mkactivity()`, `checkout()`, `merge()`, `m-search()`, `notify()`, `subscribe()`, `unsubscribe()`, `patch()`, `search()`, und `connect()`.

Zum Beispiel verhält sich der untenstehende Code genauso wie die vorherige `/about`-Route, antwortet jedoch nur auf HTTP-POST-Anfragen.

```js
router.post("/about", (req, res) => {
  res.send("Über dieses Wiki");
});
```

### Routenpfade

Die Routenpfade definieren die Endpunkte, bei denen Anfragen gestellt werden können. Die Beispiele, die wir bisher gesehen haben, waren nur Zeichenfolgen und werden genau so verwendet, wie sie geschrieben sind: '/', '/about', '/book', '/any-random.path'.

Routenpfade können auch Zeichenfolgenmuster sein. Zeichenfolgenmuster verwenden eine Form der regulären Ausdrucksyntax, um _Muster_ von Endpunkten zu definieren, die übereinstimmen. Die Syntax wird unten aufgeführt (beachten Sie, dass das Minuszeichen (`-`) und der Punkt (`.`) bei zeichenfolgenbasierten Pfaden wörtlich interpretiert werden):

- `?` : Der Endpunkt muss 0 oder 1 der vorhergehenden Zeichen (oder Gruppe) haben, z.B. ein Routenpfad von `'/ab?cd'` stimmt mit den Endpunkten `acd` oder `abcd` überein.
- `+` : Der Endpunkt muss 1 oder mehr der vorhergehenden Zeichen (oder Gruppe) haben, z.B. ein Routenpfad von `'/ab+cd'` stimmt mit den Endpunkten `abcd`, `abbcd`, `abbbcd` und so weiter überein.
- `*` : Der Endpunkt kann eine beliebige Zeichenfolge an der Stelle haben, an der das `*`-Zeichen platziert ist. Zum Beispiel ein Routenpfad von `'/ab*cd'` wird mit den Endpunkten `abcd`, `abXcd`, `abSOMErandomTEXTcd` und so weiter übereinstimmen.
- `()` : Gruppieren von Übereinstimmungen auf einem Satz von Zeichen, um eine andere Operation auszuführen, z.B. `'/ab(cd)?e'` wird eine `?`-Übereinstimmung auf die Gruppe `(cd)` ausführen — es wird `abe` und `abcde` übereinstimmen.

Die Routenpfade können auch JavaScript [reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) sein. Zum Beispiel wird der folgende Routenpfad mit `catfish` und `dogfish` übereinstimmen, jedoch nicht mit `catflap`, `catfishhead` und so weiter. Beachten Sie, dass der Pfad für einen regulären Ausdruck reguläre Ausdrucksyntax verwendet (er ist nicht ein zitierter String wie in den vorherigen Fällen).

```js
app.get(/.*fish$/, function (req, res) {
  // …
});
```

> [!NOTE]
> Die meisten unserer Routen für die LocalLibrary werden Zeichenfolgen und keine regulären Ausdrücke verwenden. Wir werden auch Routenparameter verwenden, wie im nächsten Abschnitt diskutiert.

### Routenparameter

Routenparameter sind _benannte URL-Segmente_, die verwendet werden, um Werte an bestimmten Positionen in der URL zu erfassen. Die benannten Segmente sind mit einem Doppelpunkt und dann dem Namen vorangestellt (z.B. `/:your_parameter_name/`). Die erfassten Werte werden im `req.params`-Objekt unter Verwendung der Parameternamen als Schlüssel gespeichert (z.B. `req.params.your_parameter_name`).

Also zum Beispiel, betrachten wir eine URL, die kodiert ist, um Informationen über Nutzer und Bücher zu enthalten: `http://localhost:3000/users/34/books/8989`. Wir können diese Informationen wie unten gezeigt extrahieren, mit den `userId`- und `bookId`-Pfadparametern:

```js
app.get("/users/:userId/books/:bookId", (req, res) => {
  // Zugriff auf userId über: req.params.userId
  // Zugriff auf bookId über: req.params.bookId
  res.send(req.params);
});
```

Die Namen von Routenparametern müssen aus "Wortzeichen" bestehen (A-Z, a-z, 0-9 und \_).

> [!NOTE]
> Die URL _/book/create_ wird von einer Route wie `/book/:bookId` übereinstimmt (weil `:bookId` ein Platzhalter für _beliebige_ Zeichenfolge ist, daher stimmt `create` überein). Die erste Route, die mit einer eingehenden URL übereinstimmt, wird verwendet, daher müssen Routenhandler, die /book/create/-URLs spezifisch verarbeiten sollen, vor Ihrer /book/:bookId-Route definiert werden.

Das ist alles, was Sie zum Starten mit Routen benötigen - falls nötig, finden Sie weitere Informationen in den Express-Dokumenten: [Grundlegendes Routing](https://expressjs.com/en/starter/basic-routing.html) und [Routing-Anleitung](https://expressjs.com/en/guide/routing.html). Die folgenden Abschnitte zeigen, wie wir unsere Routen und Controller für die LocalLibrary einrichten werden.

### Umgang mit Fehlern in den Routenfunktionen

Die zuvor gezeigten Routenfunktionen haben alle Argumente `req` und `res`, die die Anfrage und Antwort repräsentieren. Routenfunktionen werden auch mit einem dritten Argument `next` aufgerufen, das verwendet werden kann, um Fehler in der Express-Middleware-Reihe weiterzugeben.

Der untenstehende Code zeigt, wie dies funktioniert, unter Verwendung des Beispiels einer Datenbankabfrage, die eine Callback-Funktion annimmt und entweder einen Fehler `err` oder einige Ergebnisse zurückgibt. Wenn `err` zurückgegeben wird, wird `next` mit `err` als Wert in seinem ersten Parameter aufgerufen (letztlich propagiert der Fehler zu unserem globalen Fehlerverarbeitungscode). Im Erfolgsfall werden die gewünschten Daten zurückgegeben und dann in der Antwort verwendet.

```js
router.get("/about", (req, res, next) => {
  About.find({}).exec((err, queryResults) => {
    if (err) {
      return next(err);
    }
    //Erfolgreich, also rendern
    res.render("about_view", { title: "Über", list: queryResults });
  });
});
```

### Umgang mit Ausnahmen in Routenfunktionen

Der vorherige Abschnitt zeigt, wie Express erwartet, dass Routenfunktionen Fehler zurückgeben. Der Rahmen ist für die Verwendung mit asynchronen Funktionen konzipiert, die eine Callback-Funktion annehmen (mit einem Fehler und Ergebnisargument), die aufgerufen wird, wenn der Vorgang abgeschlossen ist. Das ist ein Problem, da wir später Mongoose-Datenbankabfragen durchführen werden, die auf einer [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)-basierten API verwenden, und die möglicherweise Ausnahmen in unseren Routenfunktionen auslösen (anstatt Fehler in einem Callback zurückzugeben).

Damit der Rahmen korrekt mit Ausnahmen umgehen kann, müssen sie abgefangen und wie im vorherigen Abschnitt als Fehler weitergeleitet werden.

> [!NOTE]
> Express 5, das derzeit im Betastadium ist, wird voraussichtlich JavaScript-Ausnahmen nativ behandeln.

Re-imaginieren Sie das einfache Beispiel aus dem vorherigen Abschnitt mit `About.find().exec()` als einer Datenbankabfrage, die ein Promise zurückgibt. Wir könnten die Routenfunktion in einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block wie folgt schreiben:

```js
exports.get("/about", async function (req, res, next) {
  try {
    const successfulResult = await About.find({}).exec();
    res.render("about_view", { title: "Über", list: successfulResult });
  } catch (error) {
    return next(error);
  }
});
```

Das ist eine Menge Boilerplate-Code, der zu jeder Funktion hinzugefügt werden muss. Stattdessen werden wir für dieses Tutorial das Modul [express-async-handler](https://www.npmjs.com/package/express-async-handler) verwenden. Dieses definiert eine Wrapper-Funktion, die den `try...catch`-Block und den Code zum Weiterleiten des Fehlers versteckt. Das gleiche Beispiel ist jetzt sehr einfach, da wir nur Code für den Erfolgsfall schreiben müssen:

```js
// Modul importieren
const asyncHandler = require("express-async-handler");

exports.get(
  "/about",
  asyncHandler(async (req, res, next) => {
    const successfulResult = await About.find({}).exec();
    res.render("about_view", { title: "Über", list: successfulResult });
  }),
);
```

## Routen, die für die LocalLibrary benötigt werden

Die URLs, die wir letztendlich für unsere Seiten benötigen werden, sind unten aufgeführt, wobei _object_ durch den Namen jedes unserer Modelle (book, bookinstance, genre, author), _objects_ im Plural von object und _id_ als das eindeutige Instanzfeld (`_id`), das standardmäßig jedem Mongoose-Modellinstanz zugewiesen wird, ersetzt wird.

- `catalog/` — Die Start-/Indexseite.
- `catalog/<objects>/` — Die Liste aller Bücher, Buchinstanzen, Genres oder Autoren (z.B. /`catalog/books/`, /`catalog/genres/`, etc.)
- `catalog/<object>/<id>` — Die Detailseite für ein bestimmtes Buch, eine Buchinstanz, ein Genre oder einen Autor mit dem entsprechenden `_id`-Feldwert (z.B. `/catalog/book/584493c1f4887f06c0e67d37)`.
- `catalog/<object>/create` — Das Formular zur Erstellung eines neuen Buchs, einer Buchinstanz, eines Genres oder eines Autors (z.B. `/catalog/book/create)`.
- `catalog/<object>/<id>/update` — Das Formular zur Aktualisierung eines bestimmten Buchs, einer Buchinstanz, eines Genres oder eines Autors mit dem angegebenen `_id`-Feldwert (z.B. `/catalog/book/584493c1f4887f06c0e67d37/update)`.
- `catalog/<object>/<id>/delete` — Das Formular zum Löschen eines bestimmten Buchs, einer Buchinstanz, eines Genres oder eines Autors mit dem angegebenen `_id`-Feldwert (z.B. `/catalog/book/584493c1f4887f06c0e67d37/delete)`.

Die erste Startseite und die Listen-Seiten kodieren keine zusätzlichen Informationen. Während die zurückgegebenen Ergebnisse vom Modelltyp und den Inhalten in der Datenbank abhängen, werden die Abfragen, die zum Abrufen der Informationen ausgeführt werden, immer dieselben sein (ähnlich wird der Code zur Objekterstellung immer ähnlich sein).

Im Gegensatz dazu werden die anderen URLs verwendet, um auf ein spezifisches Dokument/Modell-Instanz zu wirken - diese kodieren die Identität des Elements in der URL (oben als `<id>` gezeigt). Wir werden Routenparameter verwenden, um die kodierten Informationen zu extrahieren und an den Routenhandler weiterzugeben (und in einem späteren Artikel werden wir dies verwenden, um dynamisch zu bestimmen, welche Informationen aus der Datenbank abgerufen werden sollen). Indem wir die Informationen in unsere URL kodieren, benötigen wir nur eine Route für jede Ressource eines bestimmten Typs (z.B. eine Route, um die Anzeige jedes einzelnen Buchelements zu verarbeiten).

> [!NOTE]
> Express erlaubt es Ihnen, Ihre URLs beliebig zu konstruieren - Sie können Informationen im Hauptteil der URL wie oben gezeigt kodieren oder URL-`GET`-Parameter verwenden (z.B. `/book/?id=6`). Unabhängig davon, welchen Ansatz Sie verwenden, sollten die URLs sauber, logisch und lesbar gehalten werden ([sehen Sie sich die W3C-Empfehlungen hier an](https://www.w3.org/Provider/Style/URI)).

Als Nächstes erstellen wir unsere Routenhandler-Callback-Funktionen und den Routen-Code für alle oben genannten URLs.

## Erstellen der Routen-Handler-Callback-Funktionen

Bevor wir unsere Routen definieren, werden wir zuerst alle Dummy-/Grundgerüst-Callback-Funktionen erstellen, die sie aufrufen werden. Die Rückrufe werden in separaten "Controller"-Modulen für `Book`, `BookInstance`, `Genre` und `Author` gespeichert (Sie können jede beliebige Datei-/Modulstruktur verwenden, aber dies scheint eine geeignete Granularität für dieses Projekt zu sein).

Beginnen Sie mit dem Erstellen eines Ordners für unsere Controller im Projektstammverzeichnis (**/controllers**) und erstellen Sie dann separate Controller-Dateien/Module zur Handhabung der einzelnen Modelle:

```plain
/express-locallibrary-tutorial //das Projektstammverzeichnis
  /controllers
    authorController.js
    bookController.js
    bookinstanceController.js
    genreController.js
```

Die Controller werden das Modul `express-async-handler` verwenden, also installieren Sie es vor dem Fortfahren in die Bibliothek mit `npm`:

```bash
npm install express-async-handler
```

### Autor-Controller

Öffnen Sie die Datei **/controllers/authorController.js** und geben Sie den folgenden Code ein:

```js
const Author = require("../models/author");
const asyncHandler = require("express-async-handler");

// Liste aller Autoren anzeigen.
exports.author_list = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Autorenliste");
});

// Detailseite für einen bestimmten Autor anzeigen.
exports.author_detail = asyncHandler(async (req, res, next) => {
  res.send(`NICHT IMPLEMENTIERT: Autorendetail: ${req.params.id}`);
});

// Autorerstellungsformular bei GET anzeigen.
exports.author_create_get = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Autor erstellen GET");
});

// Autorerstellung bei POST bearbeiten.
exports.author_create_post = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Autor erstellen POST");
});

// Autorenlöschformular bei GET anzeigen.
exports.author_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Autor löschen GET");
});

// Autor löschen bei POST bearbeiten.
exports.author_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Autor löschen POST");
});

// Autorenaktualisierungsformular bei GET anzeigen.
exports.author_update_get = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Autor aktualisieren GET");
});

// Autor aktualisieren bei POST bearbeiten.
exports.author_update_post = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Autor aktualisieren POST");
});
```

Das Modul benötigt zunächst das `Author`-Modell, das wir später zur Zugriff und Aktualisierung unserer Daten verwenden werden, und den `asyncHandler`-Wrapper, den wir verwenden werden, um alle in unseren Routenhandlerfunktionen ausgelösten Ausnahmen abzufangen. Es exportiert dann Funktionen für jede der URLs, die wir verarbeiten möchten. Beachten Sie, dass die Erstellungs-, Aktualisierungs- und Löschvorgänge Formulare verwenden und daher auch über zusätzliche Methoden zur Bearbeitung von Formular-Post-Anfragen verfügen — über diese Methoden werden wir im "Formularartikel" später noch sprechen.

Die Funktionen verwenden alle die oben beschriebene Wrapper-Funktion im Abschnitt [Umgang mit Ausnahmen in Routenfunktionen](#umgang_mit_ausnahmen_in_routenfunktionen), mit Argumenten für die Anfrage, die Antwort und das nächste. Die Funktionen antworten mit einem String, der angibt, dass die zugehörige Seite noch nicht erstellt wurde. Wenn eine Controller-Funktion erwartet wird, dass Pfadparameter empfangen werden, werden diese in der Nachricht angegeben (siehe `req.params.id` oben).

Beachten Sie, dass, sobald einige Routenfunktionen implementiert sind, möglicherweise kein Code mehr enthalten ist, der Ausnahmen auslösen kann. Wir können die zurück in "normale" Routenhandlerfunktionen ändern, wenn wir zu ihnen kommen.

#### Buchinstanz-Controller

Öffnen Sie die Datei **/controllers/bookinstanceController.js** und kopieren Sie den folgenden Code. Dies folgt einem identischen Muster wie das `Author`-Controllermodul:

```js
const BookInstance = require("../models/bookinstance");
const asyncHandler = require("express-async-handler");

// Liste aller Buchinstanzen anzeigen.
exports.bookinstance_list = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Liste der Buchinstanzen");
});

// Detailseite für eine bestimmte Buchinstanz anzeigen.
exports.bookinstance_detail = asyncHandler(async (req, res, next) => {
  res.send(`NICHT IMPLEMENTIERT: Buchinstanzdetail: ${req.params.id}`);
});

// Buchinstanzerstellungsformular bei GET anzeigen.
exports.bookinstance_create_get = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Buchinstanz erstellen GET");
});

// Buchinstanzerstellung bei POST bearbeiten.
exports.bookinstance_create_post = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Buchinstanz erstellen POST");
});

// Buchinstanzlöschformular bei GET anzeigen.
exports.bookinstance_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Buchinstanz löschen GET");
});

// Buchinstanz löschen bei POST bearbeiten.
exports.bookinstance_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Buchinstanz löschen POST");
});

// Buchinstanzaktualisierungsformular bei GET anzeigen.
exports.bookinstance_update_get = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Buchinstanz aktualisieren GET");
});

// Buchinstanz aktualisieren bei POST bearbeiten.
exports.bookinstance_update_post = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Buchinstanz aktualisieren POST");
});
```

#### Genre-Controller

Öffnen Sie die Datei **/controllers/genreController.js** und kopieren Sie den folgenden Text (dies folgt einem identischen Muster wie die `Author`- und `BookInstance`-Dateien):

```js
const Genre = require("../models/genre");
const asyncHandler = require("express-async-handler");

// Liste aller Genres anzeigen.
exports.genre_list = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Genre-Liste");
});

// Detailseite für ein bestimmtes Genre anzeigen.
exports.genre_detail = asyncHandler(async (req, res, next) => {
  res.send(`NICHT IMPLEMENTIERT: Genredetail: ${req.params.id}`);
});

// Genererstellungsformular bei GET anzeigen.
exports.genre_create_get = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Genre erstellen GET");
});

// Genreerstellung bei POST bearbeiten.
exports.genre_create_post = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Genre erstellen POST");
});

// Genrelöschformular bei GET anzeigen.
exports.genre_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Genre löschen GET");
});

// Genrelöschen bei POST bearbeiten.
exports.genre_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Genre löschen POST");
});

// Genre-Aktualisierungsformular bei GET anzeigen.
exports.genre_update_get = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Genre aktualisieren GET");
});

// Genre aktualisieren bei POST bearbeiten.
exports.genre_update_post = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Genre aktualisieren POST");
});
```

#### Buch-Controller

Öffnen Sie die Datei **/controllers/bookController.js** und kopieren Sie den folgenden Code. Dies folgt dem gleichen Muster wie die anderen Controllermodule, aber zusätzlich enthält es eine `index()`-Funktion zur Anzeige der Willkommensseite der Seite:

```js
const Book = require("../models/book");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Startseite der Website");
});

// Liste aller Bücher anzeigen.
exports.book_list = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Buchliste");
});

// Detailseite für ein bestimmtes Buch anzeigen.
exports.book_detail = asyncHandler(async (req, res, next) => {
  res.send(`NICHT IMPLEMENTIERT: Buchdetail: ${req.params.id}`);
});

// Bucherstellungsformular bei GET anzeigen.
exports.book_create_get = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Buch erstellen GET");
});

// Bucherstellung bei POST bearbeiten.
exports.book_create_post = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Buch erstellen POST");
});

// Buchlöschformular bei GET anzeigen.
exports.book_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Buch löschen GET");
});

// Buch löschen bei POST bearbeiten.
exports.book_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Buch löschen POST");
});

// Buchaktualisierungsformular bei GET anzeigen.
exports.book_update_get = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Buch aktualisieren GET");
});

// Buch aktualisieren bei POST bearbeiten.
exports.book_update_post = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Buch aktualisieren POST");
});
```

## Erstellen des Katalog-Routenmoduls

Als Nächstes erstellen wir _Routen_ für alle URLs, [die von der LocalLibrary-Website benötigt werden](#routen,_die_für_die_locallibrary_benötigt_werden), die die Controller-Funktionen aufrufen, die wir in den vorherigen Abschnitten definiert haben.

Das Grundgerüst hat bereits einen **./routes**-Ordner, der Routen für den _index_ und _users_ enthält. Erstellen Sie eine weitere Routen-Datei — **catalog.js** — in diesem Ordner, wie unten gezeigt.

```plain
/express-locallibrary-tutorial //das Projektstammverzeichnis
  /routes
    index.js
    users.js
    catalog.js
```

Öffnen Sie **/routes/catalog.js** und kopieren Sie den folgenden Code.

```js
const express = require("express");
const router = express.Router();

// Erforderliche Controllermodule.
const book_controller = require("../controllers/bookController");
const author_controller = require("../controllers/authorController");
const genre_controller = require("../controllers/genreController");
const book_instance_controller = require("../controllers/bookinstanceController");

/// BUCH-ROUTEN ///

// GET Katalog-Startseite.
router.get("/", book_controller.index);

// GET-Anfrage zur Erstellung eines Buchs. HINWEIS: Dies muss vor Routen erfolgen, die Buch anzeigen (verwendet id).
router.get("/book/create", book_controller.book_create_get);

// POST-Anfrage zur Erstellung eines Buchs.
router.post("/book/create", book_controller.book_create_post);

// GET-Anfrage zum Löschen eines Buchs.
router.get("/book/:id/delete", book_controller.book_delete_get);

// POST-Anfrage zum Löschen eines Buchs.
router.post("/book/:id/delete", book_controller.book_delete_post);

// GET-Anfrage zur Aktualisierung eines Buchs.
router.get("/book/:id/update", book_controller.book_update_get);

// POST-Anfrage zur Aktualisierung eines Buchs.
router.post("/book/:id/update", book_controller.book_update_post);

// GET-Anfrage für ein Buch.
router.get("/book/:id", book_controller.book_detail);

// GET-Anfrage für Liste aller Bücherelemente.
router.get("/books", book_controller.book_list);

/// AUTOR-ROUTEN ///

// GET-Anfrage zur Erstellung eines Autors. HINWEIS: Dies muss vor Route für id erfolgen (d.h. Autor anzeigen).
router.get("/author/create", author_controller.author_create_get);

// POST-Anfrage zur Erstellung eines Autors.
router.post("/author/create", author_controller.author_create_post);

// GET-Anfrage zum Löschen eines Autors.
router.get("/author/:id/delete", author_controller.author_delete_get);

// POST-Anfrage zum Löschen eines Autors.
router.post("/author/:id/delete", author_controller.author_delete_post);

// GET-Anfrage zur Aktualisierung eines Autors.
router.get("/author/:id/update", author_controller.author_update_get);

// POST-Anfrage zur Aktualisierung eines Autors.
router.post("/author/:id/update", author_controller.author_update_post);

// GET-Anfrage für einen Autor.
router.get("/author/:id", author_controller.author_detail);

// GET-Anfrage für Liste aller Autoren.
router.get("/authors", author_controller.author_list);

/// GENRE-ROUTEN ///

// GET-Anfrage zur Erstellung eines Genres. HINWEIS: Dies muss vor Route erfolgen, die Genre anzeigt (verwendet id).
router.get("/genre/create", genre_controller.genre_create_get);

//POST-Anfrage zur Erstellung eines Genres.
router.post("/genre/create", genre_controller.genre_create_post);

// GET-Anfrage zum Löschen eines Genres.
router.get("/genre/:id/delete", genre_controller.genre_delete_get);

// POST-Anfrage zum Löschen eines Genres.
router.post("/genre/:id/delete", genre_controller.genre_delete_post);

// GET-Anfrage zur Aktualisierung eines Genres.
router.get("/genre/:id/update", genre_controller.genre_update_get);

// POST-Anfrage zur Aktualisierung eines Genres.
router.post("/genre/:id/update", genre_controller.genre_update_post);

// GET-Anfrage für ein Genre.
router.get("/genre/:id", genre_controller.genre_detail);

// GET-Anfrage für Liste aller Genres.
router.get("/genres", genre_controller.genre_list);

/// BUCHINSTANZ-ROUTEN ///

// GET-Anfrage zur Erstellung einer Buchinstanz. HINWEIS: Dies muss vor Route erfolgen, die Buchinstanz anzeigt (verwendet id).
router.get(
  "/bookinstance/create",
  book_instance_controller.bookinstance_create_get,
);

// POST-Anfrage zur Erstellung einer Buchinstanz.
router.post(
  "/bookinstance/create",
  book_instance_controller.bookinstance_create_post,
);

// GET-Anfrage zum Löschen einer Buchinstanz.
router.get(
  "/bookinstance/:id/delete",
  book_instance_controller.bookinstance_delete_get,
);

// POST-Anfrage zum Löschen einer Buchinstanz.
router.post(
  "/bookinstance/:id/delete",
  book_instance_controller.bookinstance_delete_post,
);

// GET-Anfrage zur Aktualisierung einer Buchinstanz.
router.get(
  "/bookinstance/:id/update",
  book_instance_controller.bookinstance_update_get,
);

// POST-Anfrage zur Aktualisierung einer Buchinstanz.
router.post(
  "/bookinstance/:id/update",
  book_instance_controller.bookinstance_update_post,
);

// GET-Anfrage für eine Buchinstanz.
router.get("/bookinstance/:id", book_instance_controller.bookinstance_detail);

// GET-Anfrage für Liste aller Buchinstanzen.
router.get("/bookinstances", book_instance_controller.bookinstance_list);

module.exports = router;
```

Das Modul benötigt Express und verwendet es dann, um ein `Router`-Objekt zu erstellen. Die Routen werden alle auf dem Router eingerichtet, der dann exportiert wird.

Die Routen werden entweder mit den `.get()`- oder `.post()`-Methoden auf dem Router-Objekt definiert. Alle Pfade sind mit Zeichenfolgen definiert (wir verwenden keine Zeichenfolgenmuster oder reguläre Ausdrücke). Routen, die auf einer bestimmten Ressource (z.B. Buch) wirken, verwenden Pfadparameter, um die Objekt-ID aus der URL zu bekommen.

Die Handler-Funktionen werden alle aus den Controllermodulen importiert, die wir im vorherigen Abschnitt erstellt haben.

### Aktualisieren des Index-Routenmoduls

Wir haben alle unsere neuen Routen eingerichtet, aber wir haben immer noch eine Route zur ursprünglichen Seite. Lassen Sie uns stattdessen zu der neuen Indexseite umleiten, die wir am Pfad '/catalog' erstellt haben.

Öffnen Sie **/routes/index.js** und ersetzen Sie die vorhandene Route durch die untenstehende Funktion.

```js
// STARTSEITE GET-Anfrage.
router.get("/", function (req, res) {
  res.redirect("/catalog");
});
```

> [!NOTE]
> Dies ist unsere erste Verwendung der [redirect()](https://expressjs.com/en/4x/api.html#res.redirect) Antwortmethode. Dies leitet auf die angegebene Seite um, indem standardmäßig der HTTP-Statuscode "302 Gefunden" gesendet wird. Sie können den zurückgegebenen Statuscode ändern, wenn nötig, und entweder absolute oder relative Pfade angeben.

### Aktualisieren Sie app.js

Der letzte Schritt ist das Hinzufügen der Routen zur Middleware-Kette. Wir tun dies in `app.js`.

Öffnen Sie **app.js** und benötigen Sie die Katalogroute unterhalb der anderen Routen (fügen Sie die dritte Zeile hinzu, die unten gezeigt wird, direkt unter den anderen zwei, die bereits in der Datei vorhanden sein sollten):

```js
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const catalogRouter = require("./routes/catalog"); //Routen für den Bereich "Katalog" der Seite importieren
```

Als nächstes fügen Sie die Katalogroute zur Middleware-Kette unterhalb den anderen Routen hinzu (fügen Sie die dritte Zeile hinzu, wie unten gezeigt, direkt unter den anderen zwei, die bereits in der Datei vorhanden sein sollten):

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/catalog", catalogRouter); // Katalogrouten zur Middleware-Kette hinzufügen.
```

> [!NOTE]
> Wir haben unser Katalogmodul auf einem Pfad `'/catalog'` hinzugefügt. Dieses wird allen im Katalogmodul definierten Pfaden vorangestellt. Um also beispielsweise auf eine Liste der Bücher zuzugreifen, lautet die URL: `/catalog/books/`.

Das war's. Wir sollten jetzt Routen und Grundgerüstfunktionen für alle URLs, die wir letztlich auf der LocalLibrary-Website unterstützen werden, aktiviert haben.

### Testen der Routen

Um die Routen zu testen, starten Sie die Website zuerst mit Ihrem üblichen Ansatz

- Die Standardmethode

  ```bash
  # Windows
  SET DEBUG=express-locallibrary-tutorial:* & npm start

  # macOS oder Linux
  DEBUG=express-locallibrary-tutorial:* npm start
  ```

- Wenn Sie zuvor [nodemon](/de/docs/Learn/Server-side/Express_Nodejs/skeleton_website#enable_server_restart_on_file_changes) eingerichtet haben, können Sie stattdessen Folgendes verwenden:

  ```bash
  npm run serverstart
  ```

Navigieren Sie dann zu einer Anzahl von LocalLibrary-URLs und vergewissern Sie sich, dass Sie keine Fehlerseite (HTTP 404) erhalten. Eine kleine Anzahl von URLs ist unten aufgeführt, um Ihnen Bequemlichkeit zu bieten:

- `http://localhost:3000/`
- `http://localhost:3000/catalog`
- `http://localhost:3000/catalog/books`
- `http://localhost:3000/catalog/bookinstances/`
- `http://localhost:3000/catalog/authors/`
- `http://localhost:3000/catalog/genres/`
- `http://localhost:3000/catalog/book/5846437593935e2f8c2aa226`
- `http://localhost:3000/catalog/book/create`

## Zusammenfassung

Wir haben nun alle Routen für unsere Seite erstellt, zusammen mit Dummy-Controllerfunktionen, die wir in späteren Artikeln mit einer vollständigen Implementierung ausfüllen können. Unterwegs haben wir eine Menge grundlegender Informationen über Express-Routen, den Umgang mit Ausnahmen und einige Ansätze zur Strukturierung unserer Routen und Controller gelernt.

In unserem nächsten Artikel werden wir eine ordentliche Willkommensseite für die Seite erstellen, indem wir Ansichten (Templates) und in unseren Modellen gespeicherte Informationen verwenden.

## Siehe auch

- [Grundlegendes Routing](https://expressjs.com/en/starter/basic-routing.html) (Express-Dokumente)
- [Routing-Anleitung](https://expressjs.com/en/guide/routing.html) (Express-Dokumente)

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/mongoose", "Learn/Server-side/Express_Nodejs/Displaying_data", "Learn/Server-side/Express_Nodejs")}}
