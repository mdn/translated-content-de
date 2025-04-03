---
title: "Express-Tutorial Teil 4: Routen und Controller"
short-title: "4: Routen und Controller"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/routes
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

In diesem Tutorial werden wir Routen (URL-Verarbeitungscode) mit "Dummy"-Handlerfunktionen für alle Ressourcenendpunkte einrichten, die wir letztendlich auf der [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website)-Website benötigen werden. Nach dem Abschluss werden wir eine modulare Struktur für unseren Routencode haben, die wir in den folgenden Artikeln mit realen Handlerfunktionen erweitern können. Wir werden zudem ein sehr gutes Verständnis dafür haben, wie man mit Express modulare Routen erstellt!

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction">Einführung in Express/Node</a>.
        Schließen Sie die vorherigen Tutorial-Themen ab (einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose">Express-Tutorial Teil 3: Verwenden einer Datenbank (mit Mongoose)</a>).
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

Im [letzten Tutorial-Artikel](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose) haben wir _Mongoose_-Modelle definiert, um mit der Datenbank zu interagieren, und ein (eigenständiges) Skript verwendet, um einige erste Bibliothekseinträge zu erstellen. Wir können nun den Code schreiben, um diese Informationen den Benutzern zu präsentieren. Das Erste, was wir tun müssen, ist zu bestimmen, welche Informationen wir auf unseren Seiten anzeigen können möchten, und dann geeignete URLs für die Rückgabe dieser Ressourcen zu definieren. Dann müssen wir die Routen (URL-Handler) und Ansichten (Vorlagen) erstellen, um diese Seiten anzuzeigen.

Das untenstehende Diagramm wird als Erinnerung an den Hauptdatenfluss und die Dinge bereitgestellt, die bei der Bearbeitung einer HTTP-Anfrage/Antwort implementiert werden müssen. Zusätzlich zu den Ansichten und Routen zeigt das Diagramm "Controller" – Funktionen, die den Code zur Weiterleitung von Anfragen vom Code zur eigentlichen Verarbeitung der Anfragen trennen.

Da wir bereits die Modelle erstellt haben, müssen wir hauptsächlich folgende Dinge erstellen:

- "Routen", um die unterstützten Anfragen (und alle in den Anfragen-URLs kodierten Informationen) an die entsprechenden Controller-Funktionen weiterzuleiten.
- Controller-Funktionen, um die angeforderten Daten von den Modellen abzurufen, eine HTML-Seite zu erstellen, die die Daten anzeigt, und diese an den Benutzer zurückzugeben, damit er sie im Browser ansehen kann.
- Ansichten (Vorlagen), die von den Controllern verwendet werden, um die Daten darzustellen.

![Hauptdatenflussdiagramm eines MVC-Express-Servers: 'Routen' empfangen die HTTP-Anfragen an den Express-Server und leiten sie zur entsprechenden 'Controller'-Funktion weiter. Der Controller liest und schreibt Daten von den Modellen. Modelle sind mit der Datenbank verbunden, um dem Server den Datenzugriff bereitzustellen. Controller verwenden 'Ansichten', auch Vorlagen genannt, um die Daten zu rendern. Der Controller sendet die HTML-HTTP-Antwort als HTTP-Antwort wieder zurück an den Client.](mvc_express.png)

Letztendlich könnten wir Seiten haben, um Listen und Detailinformationen für Bücher, Genres, Autoren und Buchinstanzen anzuzeigen, zusammen mit Seiten zum Erstellen, Aktualisieren und Löschen von Datensätzen. Das ist viel, um es in einem Artikel zu dokumentieren. Daher wird sich der Großteil dieses Artikels darauf konzentrieren, unsere Routen und Controller einzurichten, um "Dummy"-Inhalte zurückzugeben. Wir werden die Controllermethoden in unseren nachfolgenden Artikeln erweitern, um mit Modelldaten zu arbeiten.

Der erste Abschnitt unten bietet eine kurze "Einführung" in die Verwendung der Express-[Router](https://expressjs.com/en/4x/api.html#router)-Middleware. Wir werden dann dieses Wissen in den folgenden Abschnitten nutzen, wenn wir die LocalLibrary-Routen einrichten.

## Router-Einführung

Eine Route ist ein Abschnitt von Express-Code, der ein HTTP-Verb (`GET`, `POST`, `PUT`, `DELETE` usw.), ein URL-Pfad/-Muster und eine Funktion verknüpft, die aufgerufen wird, um dieses Muster zu verarbeiten.

Es gibt verschiedene Möglichkeiten, Routen zu erstellen. Für dieses Tutorial werden wir die [`express.Router`](https://expressjs.com/en/guide/routing.html#express-router)-Middleware verwenden, da sie es uns ermöglicht, die Routenhandler für einen bestimmten Teil einer Website zusammenzufassen und auf sie mit einem gemeinsamen Routen-Präfix zuzugreifen. Wir werden alle unsere bibliotheksbezogenen Routen in einem "Katalog"-Modul behalten, und falls wir Routen für die Verwaltung von Benutzerkonten oder anderen Funktionen hinzufügen, können wir sie separat gruppiert halten.

> [!NOTE]
> Wir haben Anwendung der Express-Routen kurz in unserer [Express Introduction > Erstellung von Routen-Handlern](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#creating_route_handlers) besprochen. Abgesehen davon, dass die Modularisierung besser unterstützt wird (wie im ersten Unterabschnitt unten besprochen), ähnelt die Verwendung von _Router_ sehr der direkten Definition von Routen auf dem _Express-Anwendungsobjekt_.

Der Rest dieses Abschnitts gibt einen Überblick darüber, wie der `Router` verwendet werden kann, um die Routen zu definieren.

### Definition und Verwendung separater Routenmodule

Der untenstehende Code gibt ein konkretes Beispiel dafür, wie wir ein Routenmodul erstellen und es dann in einer _Express_-Anwendung verwenden können.

Zuerst erstellen wir Routen für ein Wiki in einem Modul namens **wiki.js**. Der Code importiert zuerst das Express-Anwendungsobjekt, verwendet dieses, um ein `Router`-Objekt zu erhalten, und fügt ihm dann ein paar Routen mit der Methode `get()` hinzu. Zum Schluss exportiert das Modul das `Router`-Objekt.

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

Um das Router-Modul in unserer Hauptanwendungsdatei zu verwenden, `require()` wir zuerst das Routenmodul (**wiki.js**). Anschließend rufen wir `use()` auf der _Express_-Anwendung auf, um den Router dem Middleware-Verarbeitungspfad hinzuzufügen, indem wir einen URL-Pfad von 'wiki' angeben.

```js
const wiki = require("./wiki.js");
// …
app.use("/wiki", wiki);
```

Die beiden Routen, die in unserem Wiki-Routenmodul definiert sind, sind dann über `/wiki/` und `/wiki/about/` zugänglich.

### Routenfunktionen

Unser obiges Modul definiert ein paar typische Routenfunktionen. Die "about"-Route (unten reproduziert) wird mit der Methode `Router.get()` definiert, die nur auf HTTP-GET-Anfragen reagiert. Das erste Argument dieser Methode ist der URL-Pfad, während das zweite eine Callback-Funktion ist, die aufgerufen wird, wenn eine HTTP-GET-Anfrage mit diesem Pfad empfangen wird.

```js
router.get("/about", function (req, res) {
  res.send("About this wiki");
});
```

Der Callback nimmt drei Argumente (normalerweise wie angezeigt benannt: `req`, `res`, `next`) an, die das HTTP-Anfrageobjekt, die HTTP-Antwort und die _nächste_ Funktion in der Middleware-Kette enthalten werden.

> [!NOTE]
> Router-Funktionen sind [Express-Middleware](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#using_middleware), was bedeutet, dass sie entweder die Anfrage abschließen (beantworten) oder die `next`-Funktion in der Kette aufrufen müssen. Im obigen Fall antworten wir die Anfrage mit `send()`, sodass das `next`-Argument nicht verwendet wird (und wir entscheiden uns, es nicht anzugeben).
>
> Die Router-Funktion oben nimmt einen einzelnen Callback an, aber Sie können so viele Callback-Argumente wie gewünscht angeben oder ein Array von Callback-Funktionen. Jede Funktion ist Teil der Middleware-Kette und wird in der Reihenfolge aufgerufen, in der sie zur Kette hinzugefügt wurde (es sei denn, eine vorhergehende Funktion schließt die Anfrage ab).

Die Callback-Funktion hier ruft [`send()`](https://expressjs.com/en/4x/api.html#res.send) für die Antwort auf, um den String "Über dieses Wiki" zurückzugeben, wenn wir eine GET-Anfrage mit dem Pfad (`/about`) erhalten. Es gibt [eine Reihe anderer Antwortmethoden](https://expressjs.com/en/guide/routing.html#response-methods), um den Anfrage-/Antwortzyklus zu beenden. Zum Beispiel könnten Sie [`res.json()`](https://expressjs.com/en/4x/api.html#res.json) aufrufen, um eine JSON-Antwort zu senden, oder [`res.sendFile()`](https://expressjs.com/en/4x/api.html#res.sendFile), um eine Datei zu senden. Die Antwortmethode, die wir am häufigsten verwenden werden, wenn wir die Bibliothek aufbauen, ist [`render()`](https://expressjs.com/en/4x/api.html#res.render), die HTML-Dateien mit Templates und Daten erstellt und zurückgibt – darüber werden wir in einem späteren Artikel ausführlich sprechen!

### HTTP-Methoden

Die obigen Beispielrouten verwenden die `Router.get()`-Methode, um auf HTTP-GET-Anfragen mit einem bestimmten Pfad zu antworten.

Der `Router` bietet auch Routenmethoden für alle anderen HTTP-Methoden, die im Wesentlichen auf die gleiche Weise verwendet werden: `post()`, `put()`, `delete()`, `options()`, `trace()`, `copy()`, `lock()`, `mkcol()`, `move()`, `purge()`, `propfind()`, `proppatch()`, `unlock()`, `report()`, `mkactivity()`, `checkout()`, `merge()`, `m-search()`, `notify()`, `subscribe()`, `unsubscribe()`, `patch()`, `search()`, und `connect()`.

Zum Beispiel verhält sich der unten stehende Code genau wie die vorherige `/about`-Route, reagiert jedoch nur auf HTTP-POST-Anfragen.

```js
router.post("/about", (req, res) => {
  res.send("About this wiki");
});
```

### Routenpfade

Die Routenpfade definieren die Endpunkte, an denen Anfragen gestellt werden können. Die Beispiele, die wir bisher gesehen haben, waren nur Strings und werden genau so verwendet, wie sie geschrieben sind: '/', '/about', '/book', '/any-random.path'.

Routenpfade können auch String-Muster sein. String-Muster verwenden eine Form von regulären Ausdruckssyntax, um _Muster_ von Endpunkten zu definieren, die übereinstimmen. Die Syntax wird unten aufgelistet (beachten Sie, dass der Bindestrich (`-`) und der Punkt (`.`) von string-basierten Pfaden im wahrsten Sinn des Wortes interpretiert werden):

- `?` : Der Endpunkt muss 0 oder 1 des vorangehenden Zeichens (oder der Gruppe) haben, z.B. wird ein Routenpfad von `'/ab?cd'` mit den Endpunkten `acd` oder `abcd` übereinstimmen.
- `+` : Der Endpunkt muss 1 oder mehr des vorangehenden Zeichens (oder der Gruppe) haben, z.B. wird ein Routenpfad von `'/ab+cd'` mit den Endpunkten `abcd`, `abbcd`, `abbbcd` usw. übereinstimmen.
- `*` : Der Endpunkt kann an der Stelle, an der das `*`-Zeichen platziert ist, einen beliebigen String haben. Z.B. wird ein Routenpfad von `'/ab*cd'` mit den Endpunkten `abcd`, `abXcd`, `abSOMErandomTEXTcd` usw. übereinstimmen.
- `()` : Gruppierungsmatch auf einem Satz von Zeichen, um eine andere Operation darauf auszuführen, z.B. `'/ab(cd)?e'` wird ein `?`-Match auf die Gruppe `(cd)` durchführen — es wird `abe` und `abcde` übereinstimmen.

Die Routenpfade können auch JavaScript-[reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) sein. Zum Beispiel wird der unten stehende Routenpfad mit `catfish` und `dogfish`, aber nicht mit `catflap`, `catfishhead` usw. übereinstimmen. Beachten Sie, dass der Pfad für einen regulären Ausdruck die Syntax regulärer Ausdrücke verwendet (er ist kein zitierter String wie in den vorherigen Fällen).

```js
app.get(/.*fish$/, function (req, res) {
  // …
});
```

> [!NOTE]
> Die meisten unserer Routen für die LocalLibrary werden Strings und keine regulären Ausdrücke verwenden. Wir werden außerdem Routeneparameter verwenden, wie im nächsten Abschnitt besprochen.

### Routenparameter

Routenparameter sind _benannte URL-Segmente_, die verwendet werden, um Werte an bestimmten Positionen in der URL zu erfassen. Die benannten Segmente werden mit einem Doppelpunkt und dann dem Namen versehen (z.B. `/:your_parameter_name/`). Die erfassten Werte werden im Objekt `req.params` unter Verwendung der Parameternamen als Schlüssel gespeichert (z.B. `req.params.your_parameter_name`).

Nehmen Sie also zum Beispiel eine URL, die Informationen über Benutzer und Bücher verschlüsselt enthält: `http://localhost:3000/users/34/books/8989`. Wir können diese Informationen wie unten gezeigt extrahieren, indem wir die Pfadparameter `userId` und `bookId` verwenden:

```js
app.get("/users/:userId/books/:bookId", (req, res) => {
  // Access userId via: req.params.userId
  // Access bookId via: req.params.bookId
  res.send(req.params);
});
```

Die Namen von Routenparametern müssen aus "Wortzeichen" bestehen (A-Z, a-z, 0-9 und \_).

> [!NOTE]
> Die URL _/book/create_ wird durch eine Route wie `/book/:bookId` übereinstimmen (weil `:bookId` ein Platzhalter für _jedes_ Zeichen ist, daher passt `create`). Die erste Route, die mit einer eingehenden URL übereinstimmt, wird verwendet, also wenn Sie `/book/create`-URLs spezifisch verarbeiten möchten, muss ihr Routen-Handler vor Ihrer `/book/:bookId`-Route definiert werden.

Das ist alles, was Sie benötigen, um mit Routen zu beginnen – falls erforderlich finden Sie weitere Informationen in den Express-Dokumentationen: [Grundlegendes Routing](https://expressjs.com/en/starter/basic-routing.html) und [Routing-Leitfaden](https://expressjs.com/en/guide/routing.html). Die folgenden Abschnitte zeigen, wie wir unsere Routen und Controller für die LocalLibrary einrichten.

### Fehlerbehandlung in den Routenfunktionen

Die zuvor gezeigten Routenfunktionen haben alle Argumente `req` und `res`, wobei es sich um die Anfrage und die Antwort handelt. Routenfunktionen werden außerdem mit einem dritten Argument namens `next` aufgerufen, mit dem Fehler an die Express-Middleware-Kette weitergeleitet werden können.

Der unten stehende Code zeigt, wie dies funktioniert, unter Verwendung des Beispiels einer Datenbankabfrage, die eine Callback-Funktion entgegennimmt und entweder einen Fehler `err` oder einige Ergebnisse zurückgibt. Wenn `err` zurückgegeben wird, wird `next` mit `err` als Wert in seinem ersten Parameter aufgerufen (letztlich wird der Fehler an unseren globalen Fehlerbehandlungscode weitergeleitet). Bei Erfolg werden die gewünschten Daten zurückgegeben und dann in der Antwort verwendet.

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

### Ausnahmebehandlung in Routenfunktionen

Der vorherige Abschnitt zeigt, wie Express erwartet, dass Routenfunktionen Fehler zurückgeben. Das Framework ist für die Verwendung mit asynchronen Funktionen konzipiert, die eine Callback-Funktion (mit einem Fehler- und Ergebnisargument) entgegennehmen, die aufgerufen wird, wenn der Vorgang abgeschlossen ist. Das ist ein Problem, weil wir später Mongoose-Datenbankabfragen durchführen werden, die APIs verwenden, die auf [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)-basieren, und die möglicherweise Ausnahmen in unseren Routenfunktionen werfen (anstatt Fehler in einem Callback zurückzugeben).

Damit das Framework Ausnahmen ordnungsgemäß behandelt, müssen diese abgefangen und dann als Fehler wie im vorherigen Abschnitt gezeigt weitergeleitet werden.

> [!NOTE]
> Es wird erwartet, dass Express 5, das sich derzeit in der Beta-Phase befindet, JavaScript-Ausnahmen nativ behandelt.

Um das einfache Beispiel aus dem vorherigen Abschnitt mit `About.find().exec()` als einer Datenbankabfrage, die ein Promise zurückgibt, neu zu überdenken, könnten wir die Routenfunktion wie folgt in einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block schreiben:

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

Das ist ziemlich viel Boilerplate-Code, um ihn jeder Funktion hinzuzufügen. Stattdessen werden wir für dieses Tutorial das Modul [express-async-handler](https://www.npmjs.com/package/express-async-handler) verwenden. Dies definiert eine Wrapper-Funktion, die den `try...catch`-Block und den Code zum Weiterleiten des Fehlers verbirgt. Das gleiche Beispiel ist jetzt sehr einfach, weil wir nur Code für den Fall schreiben müssen, bei dem wir Erfolg annehmen:

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

Die URLs, die wir letztendlich für unsere Seiten benötigen, sind unten aufgelistet, wobei _object_ durch den Namen jedes unserer Modelle (Buch, Buchinstanz, Genre, Autor), _objects_ das Plural von Objekt ist, und _id_ das eindeutige Instanzenfeld (`_id`) ist, das jedem Mongoose-Modellinstanz standardmäßig zugewiesen wird.

- `catalog/` — Die Start-/Indexseite.
- `catalog/<objects>/` — Die Liste aller Bücher, Buchinstanzen, Genres oder Autoren (z.B. /`catalog/books/`, /`catalog/genres/` usw.)
- `catalog/<object>/<id>` — Die Detailseite für ein bestimmtes Buch, eine Buchinstanz, ein Genre oder ein Autor mit dem angegebenen `_id`-Feldwert (z.B. `/catalog/book/584493c1f4887f06c0e67d37`).
- `catalog/<object>/create` — Das Formular zum Erstellen eines neuen Buchs, einer Buchinstanz, eines Genres oder eines Autors (z.B. `/catalog/book/create`).
- `catalog/<object>/<id>/update` — Das Formular zum Aktualisieren eines bestimmten Buchs, einer Buchinstanz, eines Genres oder eines Autors mit dem angegebenen `_id`-Feldwert (z.B. `/catalog/book/584493c1f4887f06c0e67d37/update`).
- `catalog/<object>/<id>/delete` — Das Formular zum Löschen eines bestimmten Buchs, einer Buchinstanz, eines Genres oder eines Autors mit dem angegebenen `_id`-Feldwert (z.B. `/catalog/book/584493c1f4887f06c0e67d37/delete`).

Die erste Startseite und Listenseiten codieren keine zusätzlichen Informationen. Während die zurückgegebenen Ergebnisse vom Modelltyp und dem Inhalt in der Datenbank abhängen, werden die ausgeführten Anfragen zum Abrufen der Informationen immer gleich sein (ähnlich wird der Code zum Erstellen von Objekten immer ähnlich sein).

Im Gegensatz dazu werden die anderen URLs verwendet, um auf ein bestimmtes Dokument/Modellinstanz zu wirken - diese codieren die Identität des Elements in der URL (oben als `<id>` gezeigt). Wir werden Routenparameter verwenden, um die kodierten Informationen zu extrahieren und an den Routen-Handler weiterzuleiten (und in einem späteren Artikel verwenden wir dies, um dynamisch zu bestimmen, welche Informationen aus der Datenbank abgerufen werden sollen). Indem wir die Informationen in unserer URL codieren, benötigen wir nur eine Route für jede Ressource eines bestimmten Typs (z.B. eine Route, um die Anzeige jedes einzelnen Bucheintrags zu verarbeiten).

> [!NOTE]
> Express ermöglicht Ihnen, Ihre URLs auf jede beliebige Weise zu konstruieren — Sie können Informationen im Hauptteil der URL wie oben gezeigt kodieren oder URL-`GET`-Parameter verwenden (z.B. `/book/?id=6`). Unabhängig davon, welche Methode Sie verwenden, sollten die URLs sauber, logisch und lesbar gehalten werden ([sehen Sie sich hier den W3C-Rat an](https://www.w3.org/Provider/Style/URI)).

Als nächstes erstellen wir unsere Routen-Handler-Callback-Funktionen und Routen-Code für alle oben genannten URLs.

## Erstellen der Routen-Handler-Callback-Funktionen

Bevor wir unsere Routen definieren, erstellen wir zunächst alle Dummy-/Gerüst-Callback-Funktionen, die sie aufrufen werden. Die Callbacks werden in separaten "Controller"-Modulen für `Book`, `BookInstance`, `Genre` und `Author` gespeichert (Sie können jede Dateistruktur verwenden, aber dies scheint eine angemessene Granularität für dieses Projekt zu sein).

Beginnen Sie damit, einen Ordner für unsere Controller im Projekt-Root-Verzeichnis zu erstellen (**/controllers**) und dann separate Controller-Dateien/-Module für die Bearbeitung jedes der Modelle zu erstellen:

```plain
/express-locallibrary-tutorial  //the project root
  /controllers
    authorController.js
    bookController.js
    bookinstanceController.js
    genreController.js
```

Die Controller werden das Modul `express-async-handler` verwenden, also installieren Sie es in der Bibliothek mithilfe von `npm`, bevor wir fortfahren:

```bash
npm install express-async-handler
```

### Autor-Controller

Öffnen Sie die Datei **/controllers/authorController.js** und geben Sie folgenden Code ein:

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

Das Modul erfordert zuerst das `Author`-Modell, das wir später verwenden werden, um auf unsere Daten zuzugreifen und diese zu aktualisieren, und den `asyncHandler`-Wrapper, den wir verwenden werden, um in unseren Routen-Handler-Funktionen ausgelöste Ausnahmen abzufangen.
Es exportiert dann Funktionen für jede der URLs, die wir verarbeiten möchten.
Beachten Sie, dass die Erstellungs-, Aktualisierungs- und Löschvorgänge Formulare verwenden und daher auch zusätzliche Methoden für die Verarbeitung von Formulardaten verwenden – diese Methoden werden wir später im Artikel über Formulare besprechen.

Die Funktionen verwenden alle die oben beschriebene Wrapper-Funktion in [Fehler in Routenfunktionen behandeln](#ausnahmebehandlung_in_routenfunktionen), mit Argumenten für die Anfrage, die Antwort und das nächste.
Die Funktionen antworten mit einem String, der angibt, dass die zugehörige Seite noch nicht erstellt wurde.
Wenn erwartet wird, dass eine Controller-Funktion Pfadparameter erhält, werden diese im Nachrichten-String ausgegeben (siehe `req.params.id` oben).

Beachten Sie, dass einige Routenfunktionen möglicherweise keinen Code enthalten, der Ausnahmen auslösen kann, sobald sie implementiert sind.
Wir können diese zurück zu "normalen" Routen-Handler-Funktionen ändern, wenn wir zu ihnen kommen.

#### BookInstance-Controller

Öffnen Sie die Datei **/controllers/bookinstanceController.js** und kopieren Sie den folgenden Code hinein (dies folgt einem identischen Muster wie das `Author`-Controller-Modul):

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

Öffnen Sie die Datei **/controllers/genreController.js** und kopieren Sie den folgenden Text hinein (dies folgt einem identischen Muster wie die Dateien `Author` und `BookInstance`):

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

#### Buch-Controller

Öffnen Sie die Datei **/controllers/bookController.js** und kopieren Sie den folgenden Code hinein.
Dies folgt dem gleichen Muster wie die anderen Controller-Module, hat jedoch zusätzlich eine `index()`-Funktion zum Anzeigen der Begrüßungsseite der Website:

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

Als Nächstes erstellen wir _Routen_ für alle URLs, [die von der LocalLibrary-Website benötigt werden](#benötigte_routen_für_die_locallibrary), die die in den vorherigen Abschnitten definierten Controller-Funktionen aufrufen.

Das Gerüst hat bereits einen **./routes**-Ordner, der Routen für den _index_ und _users_ enthält.
Erstellen Sie eine weitere Routendatei — **catalog.js** — in diesem Ordner, wie gezeigt.

```plain
/express-locallibrary-tutorial //the project root
  /routes
    index.js
    users.js
    catalog.js
```

Öffnen Sie **/routes/catalog.js** und kopieren Sie den unten stehenden Code hinein:

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

Das Modul erfordert Express und verwendet es dann, um ein `Router`-Objekt zu erstellen. Die Routen werden alle auf dem Router eingerichtet, der dann exportiert wird.

Die Routen werden entweder unter Verwendung der Methoden `.get()` oder `.post()` auf dem Router-Objekt definiert. Alle Pfade sind mit Strings definiert (wir verwenden keine String-Muster oder regulären Ausdrücke).
Routen, die auf eine spezifische Ressource (z.B. Buch) wirken, verwenden Pfadparameter, um die Objekt-ID aus der URL zu erhalten.

Die Handler-Funktionen sind alle aus den Controller-Modulen importiert, die wir im vorherigen Abschnitt erstellt haben.

### Aktualisieren des Index-Routenmoduls

Wir haben alle unsere neuen Routen eingerichtet, aber wir haben immer noch eine Route zur ursprünglichen Seite. Lassen Sie uns stattdessen auf die neue Indexseite umleiten, die wir unter dem Pfad '/catalog' erstellt haben.

Öffnen Sie **/routes/index.js** und ersetzen Sie die vorhandene Route mit der unten stehenden Funktion.

```js
// GET home page.
router.get("/", function (req, res) {
  res.redirect("/catalog");
});
```

> [!NOTE]
> Dies ist unsere erste Verwendung der [redirect()](https://expressjs.com/en/4x/api.html#res.redirect)-Antwortmethode. Diese leitet auf die angegebene Seite weiter, indem der HTTP-Statuscode "302 Found" standardmäßig gesendet wird. Sie können den zurückgegebenen Statuscode ändern, falls erforderlich, und entweder absolute oder relative Pfade angeben.

### Aktualisieren von app.js

Der letzte Schritt ist das Hinzufügen der Routen zur Middleware-Kette.
Wir tun dies in `app.js`.

Öffnen Sie **app.js** und fordern Sie die Katalogroute unter den anderen Routen an (fügen Sie die dritte unten angezeigte Zeile hinzu, unter den anderen zwei, die bereits in der Datei vorhanden sein sollten):

```js
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const catalogRouter = require("./routes/catalog"); //Import routes for "catalog" area of site
```

Fügen Sie als nächstes die Katalogroute zum Middleware-Stack unter den anderen Routen hinzu (fügen Sie die dritte unten angezeigte Zeile hinzu, unter den anderen zwei, die bereits in der Datei vorhanden sein sollten):

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/catalog", catalogRouter); // Add catalog routes to middleware chain.
```

> [!NOTE]
> Wir haben unser Katalogmodul an einem Pfad `'/catalog'` hinzugefügt. Dies wird allen in dem Katalogmodul definierten Pfaden vorangestellt. Um beispielsweise eine Liste von Büchern zuzugreifen, wird die URL: `/catalog/books/` sein.

Das war's. Wir sollten jetzt Routen und Gerüstfunktionen für alle URLs haben, die wir letztendlich auf der LocalLibrary-Website unterstützen werden.

### Testen der Routen

Um die Routen zu testen, starten Sie zuerst die Website mit Ihrem üblichen Ansatz

- Die Standard-Methode

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

Navigieren Sie dann zu einer Reihe von LocalLibrary-URLs und überprüfen Sie, dass Sie keine Fehlerseite (HTTP 404) erhalten. Eine kleine Auswahl von URLs ist unten der Bequemlichkeit halber aufgelistet:

- `http://localhost:3000/`
- `http://localhost:3000/catalog`
- `http://localhost:3000/catalog/books`
- `http://localhost:3000/catalog/bookinstances/`
- `http://localhost:3000/catalog/authors/`
- `http://localhost:3000/catalog/genres/`
- `http://localhost:3000/catalog/book/5846437593935e2f8c2aa226`
- `http://localhost:3000/catalog/book/create`

## Zusammenfassung

Wir haben nun alle Routen für unsere Seite erstellt, zusammen mit Dummy-Controller-Funktionen, die wir in späteren Artikeln mit einer vollständigen Implementierung füllen können. Wir haben viel grundlegende Informationen über Express-Routen, Fehlerbehandlung und einige Ansätze zur Strukturierung unserer Routen und Controller gelernt.

In unserem nächsten Artikel werden wir eine ordnungsgemäße Begrüßungsseite für die Website erstellen, unter Verwendung von Ansichten (Templates) und Informationen, die in unseren Modellen gespeichert sind.

## Siehe auch

- [Basic routing](https://expressjs.com/en/starters/basic-routing.html) (Express-Dokumente)
- [Routing guide](https://expressjs.com/en/guide/routing.html) (Express-Dokumente)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
