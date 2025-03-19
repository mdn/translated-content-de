---
title: "Express Tutorial Teil 4: Routen und Controller"
short-title: "4: Routen und Controller"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/routes
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

In diesem Tutorial werden wir Routen einrichten (URL-Verarbeitungscode) mit "Dummy"-Handler-Funktionen für alle Ressourcenzugriffspunkte, die wir letztendlich auf der [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website)-Website benötigen werden. Nach Abschluss haben wir eine modulare Struktur für unseren Route-Handling-Code, die wir in den folgenden Artikeln mit echten Handler-Funktionen erweitern können. Außerdem werden wir ein wirklich gutes Verständnis dafür haben, wie man modulare Routen mit Express erstellt!

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction">Einführung in Express/Node</a>.
        Schließen Sie die vorherigen Tutorial-Themen ab (einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose">Express-Tutorial Teil 3: Eine Datenbank verwenden (mit Mongoose)</a>).
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

Im [letzten Tutorial-Artikel](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose) haben wir _Mongoose_-Modelle definiert, um mit der Datenbank zu interagieren, und ein (Standalone-) Skript verwendet, um einige anfängliche Bibliothekseinträge zu erstellen. Jetzt können wir den Code schreiben, um diese Informationen den Benutzern bereitzustellen. Das Erste, was wir tun müssen, ist zu bestimmen, welche Informationen wir auf unseren Seiten anzeigen möchten, und dann geeignete URLs zu definieren, um diese Ressourcen zurückzugeben. Dann müssen wir die Routen (URL-Handler) und Ansichten (Templates) erstellen, um diese Seiten anzuzeigen.

Das untenstehende Diagramm wird als Erinnerung an den Hauptdatenfluss und die Dinge bereitgestellt, die bei der Handhabung einer HTTP-Anfrage/Antwort implementiert werden müssen. Neben den Ansichten und Routen zeigt das Diagramm "Controller" — Funktionen, die den Code zum Routen von Anfragen vom Code trennen, der Anfragen tatsächlich verarbeitet.

Da wir die Modelle bereits erstellt haben, sind die Hauptaufgaben, die wir erstellen müssen:

- "Routen", um die unterstützten Anfragen (und alle in den Anfragen-URLs codierten Informationen) an die entsprechenden Controller-Funktionen weiterzuleiten.
- Controller-Funktionen, um die angeforderten Daten von den Modellen abzurufen, eine HTML-Seite zu erstellen, die die Daten anzeigt, und sie an den Benutzer zurückzugeben, um sie im Browser anzuzeigen.
- Ansichten (Templates), die von den Controllern zum Rendern der Daten verwendet werden.

![Diagramm des Hauptdatenflusses eines MVC-Express-Servers: 'Routen' empfangen die HTTP-Anfragen, die an den Express-Server gesendet werden, und leiten sie an die entsprechende 'Controller'-Funktion weiter. Der Controller liest und schreibt Daten aus den Modellen. Modelle sind mit der Datenbank verbunden, um dem Server Datenzugriff zu gewähren. Controller nutzen 'Ansichten', auch Templates genannt, um die Daten darzustellen. Der Controller sendet die HTML-HTTP-Antwort zurück an den Client als HTTP-Antwort.](mvc_express.png)

Letztendlich könnten wir Seiten haben, die Listen und Detailinformationen für Bücher, Genres, Autoren und Buchinstanzen anzeigen, zusammen mit Seiten zum Erstellen, Aktualisieren und Löschen von Datensätzen. Das ist eine Menge, um es in einem Artikel zu dokumentieren. Daher wird sich der größte Teil dieses Artikels darauf konzentrieren, unsere Routen und Controller so einzurichten, dass sie "Dummy"-Inhalte zurückgeben. Wir werden die Controllermethoden in unseren nachfolgenden Artikeln erweitern, um mit Modelldaten zu arbeiten.

Der erste Abschnitt unten bietet eine kurze "Einführung" in die Verwendung der Express [Router](https://expressjs.com/en/4x/api.html#router)-Middleware. Wir werden dieses Wissen dann in den folgenden Abschnitten verwenden, wenn wir die LocalLibrary-Routen einrichten.

## Einführung in Routen

Eine Route ist ein Abschnitt von Express-Code, der ein HTTP-Verb (`GET`, `POST`, `PUT`, `DELETE`, etc.), einen URL-Pfad/-Muster und eine Funktion kombiniert, die aufgerufen wird, um dieses Muster zu verarbeiten.

Es gibt verschiedene Möglichkeiten, Routen zu erstellen. Für dieses Tutorial werden wir die [`express.Router`](https://expressjs.com/en/guide/routing.html#express-router)-Middleware verwenden, da sie uns ermöglicht, die Routenhandler für einen bestimmten Teil einer Site zusammenzufassen und mit einem gemeinsamen Routen-Präfix darauf zuzugreifen. Wir werden alle unsere bibliotheksbezogenen Routen in einem "Katalog"-Modul behalten, und wenn wir Routen für das Handling von Benutzerkonten oder anderen Funktionen hinzufügen, können wir sie separat gruppieren.

> [!NOTE]
> Wir haben Express-Anwendungsrouten kurz in unserer [Express Einführung > Erstellen von Routenhandlern](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#creating_route_handlers) diskutiert. Abgesehen davon, dass es eine bessere Unterstützung für die Modularisierung bietet (wie im ersten Unterabschnitt unten diskutiert), ist die Verwendung von _Router_ sehr ähnlich wie das Definieren von Routen direkt auf dem _Express-Anwendungsobjekt_.

Der Rest dieses Abschnitts gibt einen Überblick darüber, wie der `Router` verwendet werden kann, um die Routen zu definieren.

### Definieren und Verwenden separater Routemodule

Der Code unten bietet ein konkretes Beispiel dafür, wie wir ein Routemodul erstellen und dann in einer _Express_-Anwendung verwenden können.

Zuerst erstellen wir Routen für ein Wiki in einem Modul namens **wiki.js**. Der Code importiert zuerst das Express-Anwendungsobjekt, verwendet es, um ein `Router`-Objekt zu erhalten und fügt dann ein paar Routen hinzu, indem die Methode `get()` verwendet wird. Am Ende exportiert das Modul das `Router`-Objekt.

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

Um das Routernodul in unserer Hauptanwendungsdatei zu verwenden, `require()` wir zuerst das Routemodul (**wiki.js**). Wir rufen dann `use()` auf der _Express_-Anwendung auf, um den Router dem Middleware-Verarbeitungsweg hinzuzufügen, wobei ein URL-Pfad von 'wiki' spezifiziert wird.

```js
const wiki = require("./wiki.js");
// …
app.use("/wiki", wiki);
```

Die zwei Routen, die in unserem Wiki-Routenmodul definiert sind, sind dann zugänglich unter `/wiki/` und `/wiki/about/`.

### Routenfunktionen

Unser obiges Modul definiert ein paar typische Routenfunktionen. Die "about"-Route (unten wiedergegeben) wird mit der Methode `Router.get()` definiert, die nur auf HTTP-GET-Anfragen antwortet. Das erste Argument für diese Methode ist der URL-Pfad, während das zweite eine Callback-Funktion ist, die aufgerufen wird, wenn eine HTTP-GET-Anfrage mit dem Pfad empfangen wird.

```js
router.get("/about", function (req, res) {
  res.send("About this wiki");
});
```

Der Callback nimmt drei Argumente entgegen (normalerweise wie gezeigt benannt: `req`, `res`, `next`), die das HTTP-Anfrageobjekt, die HTTP-Antwort und die _nächste_ Funktion in der Middleware-Kette enthalten.

> [!NOTE]
> Router-Funktionen sind [Express-Middleware](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#using_middleware), was bedeutet, dass sie entweder die Anfrage abschließen (darauf antworten) oder die `next`-Funktion in der Kette aufrufen müssen. Im obigen Fall schließen wir die Anfrage mit `send()` ab, sodass das `next`-Argument nicht verwendet wird (und wir uns entscheiden, es nicht zu spezifizieren).
>
> Die obige Router-Funktion nimmt einen einzelnen Callback an, aber Sie können so viele Callback-Argumente angeben, wie Sie möchten, oder ein Array von Callback-Funktionen. Jede Funktion ist Teil der Middleware-Kette und wird in der Reihenfolge aufgerufen, in der sie zur Kette hinzugefügt wurde (es sei denn, eine vorhergehende Funktion schließt die Anfrage ab).

Die Callback-Funktion hier ruft [`send()`](https://expressjs.com/en/4x/api.html#res.send) für die Antwort auf, um den String "About this wiki" zurückzugeben, wenn wir eine GET-Anfrage mit dem Pfad (`/about`) erhalten. Es gibt eine [Anzahl anderer Antwortmethoden](https://expressjs.com/en/guide/routing.html#response-methods) zum Beenden des Anfragen-/Antwortzyklus. Zum Beispiel könnten Sie [`res.json()`](https://expressjs.com/en/4x/api.html#res.json) aufrufen, um eine JSON-Antwort zu senden, oder [`res.sendFile()`](https://expressjs.com/en/4x/api.html#res.sendFile), um eine Datei zu senden. Die Antwortmethode, die wir am häufigsten verwenden werden, wenn wir die Bibliothek aufbauen, ist [`render()`](https://expressjs.com/en/4x/api.html#res.render), die HTML-Dateien mit Templates und Daten erstellt und zurückgibt—wir werden in einem späteren Artikel viel mehr darüber sprechen!

### HTTP-Verben

Die obigen Beispielrouten verwenden die Methode `Router.get()`, um auf HTTP-GET-Anfragen mit einem bestimmten Pfad zu antworten.

Der `Router` bietet auch Routemethoden für alle anderen HTTP-Verben, die meist auf genau die gleiche Weise verwendet werden: `post()`, `put()`, `delete()`, `options()`, `trace()`, `copy()`, `lock()`, `mkcol()`, `move()`, `purge()`, `propfind()`, `proppatch()`, `unlock()`, `report()`, `mkactivity()`, `checkout()`, `merge()`, `m-search()`, `notify()`, `subscribe()`, `unsubscribe()`, `patch()`, `search()`, und `connect()`.

Zum Beispiel, der unten stehende Code verhält sich genauso wie die vorherige `/about` Route, antwortet jedoch nur auf HTTP-POST-Anfragen.

```js
router.post("/about", (req, res) => {
  res.send("About this wiki");
});
```

### Routenpfade

Die Routenpfade definieren die Endpunkte, an denen Anfragen vorgenommen werden können. Die Beispiele, die wir bisher gesehen haben, sind einfach Strings und werden genau so verwendet, wie sie geschrieben sind: '/', '/about', '/book', '/any-random.path'.

Routenpfade können auch Stringmuster sein. Stringmuster verwenden eine Form der regulären Ausdrücke, um _Muster_ von Endpunkten zu definieren, die übereinstimmen. Die Syntax ist unten aufgeführt (beachten Sie, dass der Bindestrich (`-`) und der Punkt (`.`) buchstäblich von stringbasierten Pfaden interpretiert werden):

- `?` : Der Endpunkt muss 0 oder 1 der vorangehenden Zeichen (oder Gruppe) haben, z.B. ein Routenpfad von `'/ab?cd'` wird die Endpunkte `acd` oder `abcd` abgleichen.
- `+` : Der Endpunkt muss 1 oder mehr der vorangehenden Zeichen (oder Gruppe) haben, z.B. ein Routenpfad von `'/ab+cd'` wird die Endpunkte `abcd`, `abbcd`, `abbbcd`, und so weiter abgleichen.
- `*` : Der Endpunkt kann eine beliebige Zeichenfolge an der Stelle haben, wo das `*` Zeichen steht. Z.B. ein Routenpfad von `'/ab*cd'` wird die Endpunkte `abcd`, `abXcd`, `abSOMErandomTEXTcd`, und so weiter abgleichen.
- `()` : Gruppierung einer Menge von Zeichen, um eine andere Operation durchzuführen, z.B. `'/ab(cd)?e'` wird einen `?`-Match auf die Gruppe `(cd)` durchführen — es wird `abe` und `abcde` abgleichen.

Die Routenpfade können auch JavaScript [reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) sein. Zum Beispiel wird der unten stehende Routenpfad `catfish` und `dogfish` abgleichen, aber nicht `catflap`, `catfishhead`, und so weiter. Beachten Sie, dass der Pfad für einen regulären Ausdruck die Syntax des regulären Ausdrucks verwendet (es handelt sich nicht um einen in Anführungszeichen stehenden String wie in den vorherigen Fällen).

```js
app.get(/.*fish$/, function (req, res) {
  // …
});
```

> [!NOTE]
> Die meisten unserer Routen für die LocalLibrary werden Strings und keine regulären Ausdrücke verwenden. Wir werden auch Routenparameter wie im nächsten Abschnitt besprochen verwenden.

### Routenparameter

Routenparameter sind _benannte URL-Segmente_, die verwendet werden, um Werte an bestimmten Positionen in der URL zu erfassen. Die benannten Segmente werden mit einem Doppelpunkt und dann dem Namen vorangestellt (zum Beispiel `/:your_parameter_name/`). Die erfassten Werte werden im `req.params` Objekt mit den Parameternamen als Schlüssel gespeichert (zum Beispiel `req.params.your_parameter_name`).

Nehmen Sie zum Beispiel eine URL, die Informationen über Benutzer und Bücher enthält: `http://localhost:3000/users/34/books/8989`. Wir können diese Informationen wie unten gezeigt extrahieren, wobei die `userId` und `bookId` Pfadparameter sind:

```js
app.get("/users/:userId/books/:bookId", (req, res) => {
  // Access userId via: req.params.userId
  // Access bookId via: req.params.bookId
  res.send(req.params);
});
```

Die Namen der Routenparameter müssen aus "Wortzeichen" (A-Z, a-z, 0-9, und \_) bestehen.

> [!NOTE]
> Die URL _/book/create_ wird von einer Route wie `/book/:bookId` abgeglichen werden (weil `:bookId` ein Platzhalter für _jedes_ Zeichen ist und daher `create` übereinstimmt). Die erste Route, die mit einer eingehenden URL übereinstimmt, wird verwendet, also wenn Sie `/book/create` URLs spezifisch verarbeiten möchten, muss deren Routenhandler vor Ihrer `/book/:bookId` Route definiert werden.

Das ist alles, was Sie brauchen, um mit Routen zu beginnen - bei Bedarf finden Sie mehr Informationen in den Express-Dokumentationen: [Basisrouting](https://expressjs.com/en/starter/basic-routing.html) und [Routing-Leitfaden](https://expressjs.com/en/guide/routing.html). Die folgenden Abschnitte zeigen, wie wir unsere Routen und Controller für die LocalLibrary einrichten.

### Fehlerhandling in den Routenfunktionen

Die Routenfunktionen, die früher gezeigt wurden, haben alle die Argumente `req` und `res`, die die Anfrage und Antwort darstellen.
Routenfunktionen werden auch mit einem dritten Argument `next` aufgerufen, das verwendet werden kann, um Fehler an die Express-Middleware-Kette zu übergeben.

Der unten stehende Code zeigt, wie das funktioniert, am Beispiel einer Datenbankanfrage, die eine Callback-Funktion enthält und entweder einen Fehler `err` oder einige Ergebnisse zurückgibt.
Wenn `err` zurückgegeben wird, wird `next` mit `err` als Wert in seinem ersten Parameter aufgerufen (letztendlich wird der Fehler an unseren globalen Fehlerbehandlungscode weitergeleitet).
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

### Ausnahmebehandlung in Routenfunktionen

Der vorherige Abschnitt zeigt, wie Express erwartet, dass Routenfunktionen Fehler zurückgeben.
Das Framework ist für die Verwendung mit asynchronen Funktionen ausgelegt, die eine Callback-Funktion (mit einem Fehler- und einem Ergebnisargument) nehmen und aufgerufen werden, wenn der Vorgang abgeschlossen ist.
Das ist ein Problem, da wir später Mongoose-Datenbankanfragen stellen werden, die [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)-basierte APIs verwenden und in unseren Routenfunktionen Ausnahmen auslösen können (anstatt Fehler in einem Callback zurückzugeben).

Damit das Framework Ausnahmen ordnungsgemäß behandelt, müssen sie erfasst werden und dann wie im vorherigen Abschnitt als Fehler weitergeleitet werden.

> [!NOTE]
> Express 5, das derzeit in der Beta-Version ist, wird voraussichtlich JavaScript-Ausnahmen nativ behandeln.

Wenn wir uns das einfache Beispiel aus dem vorherigen Abschnitt mit `About.find().exec()` als Datenbankabfrage, die ein Promise zurückgibt, vorstellen, könnten wir die Routenfunktion in einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Block wie folgt schreiben:

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

Das ist ziemlich viel Boilerplate-Code, der jeder Funktion hinzugefügt werden muss.
Stattdessen werden wir für dieses Tutorial das [express-async-handler](https://www.npmjs.com/package/express-async-handler) Modul verwenden.
Dies definiert eine Wrapper-Funktion, die den `try...catch` Block und den Code zum Weiterleiten des Fehlers verbirgt.
Das gleiche Beispiel ist jetzt sehr einfach, weil wir nur Code für den Erfolgsfall schreiben müssen:

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

Die URLs, die wir letztendlich für unsere Seiten benötigen werden, sind unten aufgelistet, wobei _object_ durch den Namen jedes unserer Modelle (book, bookinstance, genre, author), _objects_ der Plural von object ist und _id_ das eindeutige Instanzfeld (`_id`) ist, das jeder Mongoose-Modellinstanz standardmäßig gegeben wird.

- `catalog/` — Die Start-/Indexseite.
- `catalog/<objects>/` — Die Liste aller Bücher, Buchinstanzen, Genres oder Autoren (z.B. /`catalog/books/`, /`catalog/genres/`, etc.)
- `catalog/<object>/<id>` — Die Detailseite für ein bestimmtes Buch, Buchinstanz, Genre oder Autor mit dem angegebenen `_id` Feldwert (z.B. `/catalog/book/584493c1f4887f06c0e67d37)`).
- `catalog/<object>/create` — Das Formular zum Erstellen eines neuen Buches, Buchinstanz, Genres oder Autors (z.B. `/catalog/book/create)`).
- `catalog/<object>/<id>/update` — Das Formular zum Aktualisieren eines bestimmten Buches, Buchinstanz, Genres oder Autors mit dem angegebenen `_id` Feldwert (z.B. `/catalog/book/584493c1f4887f06c0e67d37/update)`).
- `catalog/<object>/<id>/delete` — Das Formular zum Löschen eines bestimmten Buches, Buchinstanz, Genres oder Autors mit dem angegebenen `_id` Feldwert (z.B. `/catalog/book/584493c1f4887f06c0e67d37/delete)`).

Die erste Startseite und die Listenseiten codieren keine zusätzlichen Informationen. Während die zurückgegebenen Ergebnisse von der Modellart und dem Inhalt in der Datenbank abhängen, werden die Abfragen, die ausgeführt werden, um die Informationen zu erhalten, immer die gleichen sein (ähnlich wird der Code für das Erstellen von Objekten immer ähnlich sein).

Im Gegensatz dazu werden die anderen URLs verwendet, um ein spezifisches Dokument/Modellinstanz zu bearbeiten — diese kodieren die Identität des Elements in der URL (oben als `<id>` gezeigt). Wir werden Pfadparameter verwenden, um die kodierte Information zu extrahieren und an den Routenhandler zu übergeben (und in einem späteren Artikel werden wir dies verwenden, um dynamisch zu bestimmen, welche Informationen aus der Datenbank abgerufen werden sollen). Indem wir die Informationen in unserer URL kodieren, benötigen wir nur eine Route für jede Ressource eines bestimmten Typs (z.B. eine Route, um die Anzeige jedes einzelnen Buches zu bearbeiten).

> [!NOTE]
> Express erlaubt Ihnen, Ihre URLs beliebig zu konstruieren — Sie können Informationen im URL-Körper wie oben gezeigt kodieren oder URL `GET`-Parameter verwenden (z.B. `/book/?id=6`). Welche Methode Sie auch verwenden, die URLs sollten sauber, logisch und lesbar gehalten werden ([lesen Sie hier den W3C-Rat](https://www.w3.org/Provider/Style/URI)).

Als Nächstes erstellen wir unsere Routen-Handler-Callback-Funktionen und Routen-Code für alle oben genannten URLs.

## Erstellen der Routenhandler-Callback-Funktionen

Bevor wir unsere Routen definieren, erstellen wir zunächst alle Dummy-/Skeleton-Callback-Funktionen, die sie aufrufen werden. Die Callbacks werden in separaten "Controller"-Modulen für `Book`, `BookInstance`, `Genre` und `Author` gespeichert (Sie können jede Datei-/Modulstruktur verwenden, aber dies scheint eine geeignete Granularität für dieses Projekt zu sein).

Beginnen Sie damit, einen Ordner für unsere Controller im Projektstammverzeichnis (**/controllers**) zu erstellen und dann separate Controller-Dateien/-module für die Bearbeitung jedes der Modelle zu erstellen:

```plain
/express-locallibrary-tutorial  //the project root
  /controllers
    authorController.js
    bookController.js
    bookinstanceController.js
    genreController.js
```

Die Controller werden das `express-async-handler`-Modul verwenden, daher installieren Sie es, bevor wir fortfahren, in der Bibliothek mit `npm`:

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

Das Modul erfordert zuerst das `Author`-Modell, das wir später verwenden werden, um auf unsere Daten zuzugreifen und sie zu aktualisieren, und den `asyncHandler`-Wrapper, den wir verwenden werden, um alle Ausnahmen in unseren Routenhandler-Funktionen zu erfassen.
Dann exportiert es Funktionen für jede der URLs, die wir bearbeiten möchten.
Beachten Sie, dass die Erstellungs-, Aktualisierungs- und Löschoperationen Formulare verwenden und daher auch zusätzliche Methoden zur Bearbeitung von Formular-Post-Anfragen haben — wir werden diese Methoden im "Formularartikel" später besprechen.

Die Funktionen verwenden alle die oben im Abschnitt [Ausnahmebehandlung in Routenfunktionen](#ausnahmebehandlung_in_routenfunktionen) beschriebene Wrapper-Funktion mit Argumenten für die Anfrage, die Antwort und das nächste.
Die Funktionen antworten mit einem String, der angibt, dass die zugehörige Seite noch nicht erstellt wurde.
Wenn eine Controller-Funktion erwartungsgemäß Pfadparameter erhält, werden diese in der Nachrichtenzeichenfolge ausgegeben (siehe `req.params.id` oben).

Beachten Sie, dass einige Routenfunktionen möglicherweise keinen Code enthalten, der Ausnahmen auslösen kann, wenn sie implementiert sind.
Wir können diese zurück in "normale" Routenhandler-Funktionen ändern, wenn wir zu ihnen kommen.

#### BookInstance-Controller

Öffnen Sie die Datei **/controllers/bookinstanceController.js** und kopieren Sie den folgenden Code (dies folgt einem identischen Muster wie das `Author`-Controllermodul):

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

Öffnen Sie die Datei **/controllers/bookController.js** und kopieren Sie den folgenden Code hinein.
Dies folgt dem gleichen Muster wie die anderen Controllermodule, hat jedoch zusätzlich eine `index()`-Funktion zum Anzeigen der Willkommensseite der Site:

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

## Erstellen des Katalogroutenmoduls

Als Nächstes erstellen wir _Routen_ für alle URLs [die von der LocalLibrary-Website benötigt werden](#routen,_die_für_die_locallibrary_benötigt_werden), die die Controller-Funktionen aufrufen, die wir in den vorhergehenden Abschnitten definiert haben.

Das Gerüst enthält bereits einen **./routes** Ordner mit Routen für den _Index_ und die _Benutzer_.
Erstellen Sie eine weitere Routendatei — **catalog.js** — in diesem Ordner, wie gezeigt.

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

Das Modul erfordert Express und verwendet es dann, um ein `Router`-Objekt zu erstellen. Die Routen werden alle auf dem Router eingerichtet, der dann exportiert wird.

Die Routen werden entweder mit `.get()` oder `.post()`-Methoden auf dem Router-Objekt definiert. Alle Pfade sind mit Strings definiert (wir verwenden keine Stringmuster oder regulären Ausdrücke).
Routen, die auf eine spezifische Ressource (z.B. Buch) wirken, verwenden Pfadparameter, um die Objekt-ID aus der URL zu erhalten.

Die Handler-Funktionen werden alle aus den Controllermodulen importiert, die wir im vorherigen Abschnitt erstellt haben.

### Aktualisieren des Index-Routenmoduls

Wir haben alle unsere neuen Routen eingerichtet, aber wir haben noch eine Route zur ursprünglichen Seite. Lassen Sie uns stattdessen zu der neuen Indexseite umleiten, die wir am Pfad '/catalog' erstellt haben.

Öffnen Sie **/routes/index.js** und ersetzen Sie die vorhandene Route durch die folgende Funktion.

```js
// GET home page.
router.get("/", function (req, res) {
  res.redirect("/catalog");
});
```

> [!NOTE]
> Dies ist unsere erste Verwendung der [redirect()](https://expressjs.com/en/4x/api.html#res.redirect)-Antwortmethode. Diese leitet auf die angegebene Seite um, indem sie standardmäßig den HTTP-Statuscode "302 Found" sendet. Sie können den zurückgegebenen Statuscode bei Bedarf ändern und entweder absolute oder relative Pfade angeben.

### Aktualisieren von app.js

Der letzte Schritt besteht darin, die Routen zur Middleware-Kette hinzuzufügen.
Wir tun dies in `app.js`.

Öffnen Sie **app.js** und importieren Sie die Katalogroute unterhalb der anderen Routen (fügen Sie die dritte Zeile ein, die unten gezeigt ist, unter den beiden anderen, die bereits in der Datei vorhanden sein sollten):

```js
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const catalogRouter = require("./routes/catalog"); //Import routes for "catalog" area of site
```

Fügen Sie als nächstes die Katalogroute zum Middleware-Stack unterhalb der anderen Routen hinzu (fügen Sie die dritte Zeile ein, die unten gezeigt ist, unter den beiden anderen, die bereits in der Datei vorhanden sein sollten):

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/catalog", catalogRouter); // Add catalog routes to middleware chain.
```

> [!NOTE]
> Wir haben unser Katalogmodul an einem Pfad `'/catalog'` hinzugefügt. Dies wird allen im Katalogmodul definierten Pfaden vorangestellt. Um also zum Beispiel auf eine Liste von Büchern zuzugreifen, wird die URL: `/catalog/books/` sein.

Das war's. Wir sollten jetzt Routen und Skeleton-Funktionen für alle URLs haben, die wir letztendlich auf der LocalLibrary-Website unterstützen werden.

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

Navigieren Sie dann zu einer Reihe von LocalLibrary-URLs und vergewissern Sie sich, dass Sie keine Fehlerseite erhalten (HTTP 404). Eine kleine Auswahl von URLs ist unten zu Ihrem Komfort aufgelistet:

- `http://localhost:3000/`
- `http://localhost:3000/catalog`
- `http://localhost:3000/catalog/books`
- `http://localhost:3000/catalog/bookinstances/`
- `http://localhost:3000/catalog/authors/`
- `http://localhost:3000/catalog/genres/`
- `http://localhost:3000/catalog/book/5846437593935e2f8c2aa226`
- `http://localhost:3000/catalog/book/create`

## Zusammenfassung

Wir haben nun alle Routen für unsere Site erstellt, zusammen mit Dummy-Controller-Funktionen, die wir in späteren Artikeln mit einer vollständigen Implementierung ausfüllen können. Auf dem Weg haben wir viele grundlegende Informationen über Express-Routen, Ausnahmebehandlung und einige Ansätze für die Strukturierung unserer Routen und Controller gelernt.

In unserem nächsten Artikel werden wir eine ordentliche Willkommensseite für die Site erstellen, die Ansichten (Templates) und in unseren Modellen gespeicherte Informationen verwendet.

## Siehe auch

- [Grundlegendes Routing](https://expressjs.com/en/starter/basic-routing.html) (Express-Dokumentation)
- [Routing-Leitfaden](https://expressjs.com/en/guide/routing.html) (Express-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
