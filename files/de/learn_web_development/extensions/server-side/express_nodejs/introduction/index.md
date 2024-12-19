---
title: Einführung in Express/Node
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

In diesem ersten Artikel zu Express beantworten wir die Fragen "Was ist Node?" und "Was ist Express?" und geben Ihnen einen Überblick darüber, was das Web-Framework Express besonders macht. Wir skizzieren die Hauptfunktionen und zeigen Ihnen einige der grundlegenden Bausteine einer Express-Anwendung (obwohl Sie zu diesem Zeitpunkt noch keine Entwicklungsumgebung haben, um es zu testen).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein allgemeines Verständnis der <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps">Server-seitigen Website-Programmierung</a>, insbesondere der Mechanismen von <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview">Client-Server-Interaktionen auf Websites</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit dem, was Express ist und wie es mit Node zusammenpasst, welche Funktionalitäten es bietet und den Hauptbausteinen einer Express-Anwendung zu erlangen.
      </td>
    </tr>
  </tbody>
</table>

## Einführung in Node

[Node](https://nodejs.org/) (oder formeller _Node.js_) ist eine Open-Source, plattformübergreifende Laufzeitumgebung, die es Entwicklern ermöglicht, alle Arten von serverseitigen Tools und Anwendungen in {{Glossary("JavaScript", "JavaScript")}} zu erstellen.
Die Laufzeitumgebung ist für den Einsatz außerhalb eines Browser-Kontexts gedacht (d.h. sie läuft direkt auf einem Computer- oder Server-Betriebssystem). Daher lässt die Umgebung browser-spezifische JavaScript-APIs weg und fügt Unterstützung für traditionellere OS APIs hinzu, darunter HTTP- und Dateisystem-Bibliotheken.

Aus der Perspektive der Webserver-Entwicklung bietet Node mehrere Vorteile:

- Hervorragende Leistung! Node wurde entwickelt, um die Durchsatzrate und Skalierbarkeit in Webanwendungen zu optimieren, und ist eine gute Lösung für viele häufige Webentwicklungsprobleme (z. B. Echtzeit-Webanwendungen).
- Der Code wird in „ganz normalem JavaScript“ geschrieben, was bedeutet, dass weniger Zeit mit dem Wechseln zwischen Sprachen verschwendet wird, wenn sowohl clientseitiger als auch serverseitiger Code geschrieben wird.
- JavaScript ist eine relativ neue Programmiersprache und profitiert von Verbesserungen im Sprachdesign im Vergleich zu anderen traditionellen Webserver-Sprachen (z. B. Python, PHP usw.). Viele andere neue und beliebte Sprachen werden in JavaScript kompiliert/umgewandelt, sodass Sie auch TypeScript, CoffeeScript, ClojureScript, Scala, LiveScript usw. verwenden können.
- Der Node Package Manager (npm) bietet Zugriff auf Hunderttausende von wiederverwendbaren Paketen. Er hat auch eine erstklassige Abhängigkeitsauflösung und kann verwendet werden, um die meisten Teile der Build-Toolchain zu automatisieren.
- Node.js ist portabel. Es ist verfügbar für Microsoft Windows, macOS, Linux, Solaris, FreeBSD, OpenBSD, WebOS und NonStop OS. Darüber hinaus wird es von vielen Webhosting-Anbietern gut unterstützt, die oft spezielle Infrastrukturen und Dokumentationen für das Hosting von Node-Sites bereitstellen.
- Es hat ein sehr aktives Ökosystem von Drittanbietern und eine Entwickler-Community mit vielen Menschen, die bereit sind zu helfen.

Sie können Node.js verwenden, um einen einfachen Webserver mit dem Node HTTP-Paket zu erstellen.

### Hallo Node.js

Das folgende Beispiel erstellt einen Webserver, der auf alle Arten von HTTP-Anfragen an die URL `http://127.0.0.1:8000/` hört — wenn eine Anfrage eingeht, antwortet das Skript mit dem String: "Hello World". Wenn Sie Node bereits installiert haben, können Sie die folgenden Schritte ausführen, um das Beispiel auszuprobieren:

1. Öffnen Sie Terminal (unter Windows öffnen Sie das Dienstprogramm für die Befehlszeile).
2. Erstellen Sie den Ordner, in dem Sie das Programm speichern möchten, z. B. `test-node`, und betreten Sie ihn, indem Sie den folgenden Befehl in Ihr Terminal eingeben:

   ```bash
   cd test-node
   ```

3. Erstellen Sie mit Ihrem bevorzugten Texteditor eine Datei namens `hello.js` und fügen Sie den folgenden Code ein:

   ```js
   // Load HTTP module
   const http = require("http");

   const hostname = "127.0.0.1";
   const port = 8000;

   // Create HTTP server
   const server = http.createServer(function (req, res) {
     // Set the response HTTP header with HTTP status and Content type
     res.writeHead(200, { "Content-Type": "text/plain" });

     // Send the response body "Hello World"
     res.end("Hello World\n");
   });

   // Prints a log once the server starts listening
   server.listen(port, hostname, function () {
     console.log(`Server running at http://${hostname}:${port}/`);
   });
   ```

4. Speichern Sie die Datei in dem zuvor erstellten Ordner.
5. Gehen Sie zurück zum Terminal und geben Sie den folgenden Befehl ein:

   ```bash
   node hello.js
   ```

Navigieren Sie schließlich in Ihrem Webbrowser zu `http://localhost:8000`; Sie sollten den Text "**Hello World**" in der oberen linken Ecke einer ansonsten leeren Webseite sehen.

## Web-Frameworks

Andere übliche Aufgaben der Webentwicklung werden von Node selbst nicht direkt unterstützt. Wenn Sie eine spezifische Behandlung für verschiedene HTTP-Verben hinzufügen möchten (z.B. `GET`, `POST`, `DELETE` usw.), Anfragen an verschiedenen URL-Pfaden („Routen“) separat bearbeiten, statische Dateien bereitstellen oder Vorlagen verwenden möchten, um die Antwort dynamisch zu erstellen, ist Node alleine nicht sehr hilfreich. Sie müssten entweder den Code selbst schreiben oder Sie können vermeiden, das Rad neu zu erfinden, indem Sie ein Web-Framework verwenden!

## Einführung in Express

[Express](https://expressjs.com/) ist das beliebteste Node.js Web-Framework und die zugrunde liegende Bibliothek für eine Reihe anderer beliebter Node.js Frameworks. Es bietet Mechanismen um:

- Handler für Anfragen mit unterschiedlichen HTTP-Verben an verschiedenen URL-Pfaden (Routen) zu schreiben.
- Mit „View“-Rendering-Engines zu integrieren, um Antworten durch das Einfügen von Daten in Vorlagen zu generieren.
- Allgemeine Einstellungen von Webanwendungen festzulegen, wie den Port für die Verbindung und den Speicherort von Vorlagen, die für das Rendering der Antwort verwendet werden.
- Zusätzliche Anfragedatenbearbeitung „Middleware“ an jedem Punkt innerhalb der Anfrageverarbeitungspipeline hinzuzufügen.

Während _Express_ selbst ziemlich minimalistisch ist, haben Entwickler kompatible Middleware-Pakete erstellt, um nahezu jedes Problem der Webentwicklung zu lösen. Es gibt Bibliotheken für die Arbeit mit Cookies, Sitzungen, Benutzeranmeldungen, URL-Parametern, `POST`-Daten, Sicherheitsheadern und _vieles_ mehr. Sie finden eine Liste der von Express gepflegten Middleware-Pakete unter [Express Middleware](https://expressjs.com/en/resources/middleware.html) (neben einer Liste einiger beliebter Drittanbieter-Pakete).

> [!NOTE]
> Diese Flexibilität ist ein zweischneidiges Schwert. Es gibt Middleware-Pakete, die fast jedes Problem oder Anforderung lösen, aber herauszufinden, welche Pakete zu verwenden sind, kann manchmal eine Herausforderung sein. Es gibt auch keinen "richtigen Weg", um eine Anwendung zu strukturieren, und viele Beispiele, die Sie im Internet finden könnten, sind nicht optimal oder zeigen nur einen kleinen Teil dessen, was Sie tun müssen, um eine Webanwendung zu entwickeln.

## Woher kommen Node und Express?

Node wurde erstmals 2009 nur für Linux veröffentlicht. Der npm-Paketmanager wurde 2010 veröffentlicht, und native Windows-Unterstützung wurde 2012 hinzugefügt. Tauchen Sie in [Wikipedia](https://en.wikipedia.org/wiki/Node.js#History) ein, wenn Sie mehr erfahren möchten.

Express wurde erstmals im November 2010 veröffentlicht und ist derzeit in der Hauptversion 4 der API. Sie können sich das [Changelog](https://expressjs.com/en/changelog/4x.html) ansehen, um Informationen über Änderungen in der aktuellen Version zu erhalten, und [GitHub](https://github.com/expressjs/express/blob/master/History.md) für detailliertere historische Release-Notizen.

## Wie beliebt sind Node und Express?

Die Beliebtheit eines Web-Frameworks ist wichtig, da sie ein Indikator dafür ist, ob es weiterhin gewartet wird, und welche Ressourcen voraussichtlich in Bezug auf Dokumentation, Zusatzbibliotheken und technischen Support verfügbar sind.

Es gibt keine leicht zugängliche und endgültige Maßnahme für die Beliebtheit von serverseitigen Frameworks (obwohl Sie die Beliebtheit anhand von Mechanismen wie dem Zählen der Anzahl von GitHub-Projekten und Stack Overflow-Fragen für jede Plattform schätzen können). Eine bessere Frage ist, ob Node und Express "beliebt genug" sind, um die Probleme unpopulärer Plattformen zu vermeiden. Entwickeln sie sich weiter? Können Sie Hilfe bekommen, wenn Sie sie brauchen? Gibt es eine Gelegenheit für Sie, bezahlte Arbeit zu bekommen, wenn Sie Express lernen?

Basierend auf der Anzahl prominenter Unternehmen, die Express verwenden, der Anzahl der Personen, die zum Codebase beitragen, und der Anzahl der Personen, die sowohl kostenlose als auch kostenpflichtige Unterstützung bieten, ist _Express_ ein beliebtes Framework!

## Ist Express meinungsstark?

Web-Frameworks bezeichnen sich oft als "meinungsstark" oder "nicht meinungsstark".

Meinungsstarke Frameworks sind solche, die Meinungen darüber haben, wie eine bestimmte Aufgabe "richtig" behandelt werden sollte. Sie unterstützen oft eine schnelle Entwicklung _in einem bestimmten Bereich_ (Lösung von Problemen eines bestimmten Typs), da der richtige Weg, etwas zu tun, in der Regel gut verstanden und dokumentiert ist. Sie können jedoch weniger flexibel bei der Lösung von Problemen außerhalb ihres Hauptbereichs sein und bieten tendenziell weniger Auswahlmöglichkeiten für die Komponenten und Ansätze, die sie verwenden können.

Nicht meinungsstarke Frameworks hingegen haben weitaus weniger Einschränkungen darüber, wie man Komponenten zur Erreichung eines Ziels zusammenfügt oder welche Komponenten verwendet werden sollen. Sie erleichtern es Entwicklern, die passendsten Werkzeuge zu verwenden, um eine bestimmte Aufgabe zu erledigen, wenn auch auf Kosten dessen, dass Sie diese Komponenten selbst finden müssen.

Express ist nicht meinungsstark. Sie können fast jede kompatible Middleware, die Ihnen gefällt, in die Anfrageverarbeitungskette einfügen, in fast jeder Reihenfolge, die Ihnen zusagt. Sie können die App in einer Datei oder mehreren Dateien strukturieren und jede Verzeichnisstruktur verwenden. Sie werden manchmal das Gefühl haben, dass Sie zu viele Auswahlmöglichkeiten haben!

## Wie sieht der Express-Code aus?

In einer traditionellen datengesteuerten Website wartet eine Webanwendung auf HTTP-Anfragen vom Webbrowser (oder einem anderen Client). Wenn eine Anfrage eingeht, arbeitet die Anwendung heraus, welche Aktion basierend auf dem URL-Muster und möglicherweise den zugehörigen Daten im `POST`- oder `GET`-Datensatz erforderlich ist. Je nach Bedarf liest oder schreibt sie dann Informationen aus einer Datenbank oder führt andere Aufgaben aus, die zur Erfüllung der Anfrage erforderlich sind. Die Anwendung gibt dann eine Antwort an den Webbrowser zurück, oft durch das dynamische Erstellen einer HTML-Seite für den Browser, indem die abgerufenen Daten in Platzhalter in einer HTML-Vorlage eingefügt werden.

Express bietet Methoden, um anzugeben, welche Funktion für ein bestimmtes HTTP-Verb (`GET`, `POST`, `PUT` usw.) und URL-Muster ("Route") aufgerufen wird, sowie Methoden, um anzugeben, welche Vorlage ("View") Engine verwendet wird, wo Vorlagendateien sich befinden und welche Vorlage beim Rendering einer Antwort verwendet wird. Sie können die Express-Middleware verwenden, um Unterstützung für Cookies, Sitzungen und Benutzer, das Abrufen von `POST`/`GET`-Parametern usw. hinzuzufügen. Sie können jeden Datenbankmechanismus verwenden, der von Node unterstützt wird (Express definiert kein datenbankbezogenes Verhalten).

Die folgenden Abschnitte erklären einige der gängigen Dinge, die Sie bei der Arbeit mit _Express_ und _Node_ Code sehen werden.

### Hallo Welt Express

Betrachten wir zunächst das Standard-Express [Hallo Welt](https://expressjs.com/en/starter/hello-world.html) Beispiel (wir diskutieren jeden Teil davon unten und in den folgenden Abschnitten).

> [!NOTE]
> Wenn Sie Node und Express bereits installiert haben (oder wenn Sie sie wie im [nächsten Artikel](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) gezeigt installieren möchten), können Sie diesen Code in einer Textdatei namens **app.js** speichern und ihn in einem bash-Eingabeaufforderung ausführen, indem Sie:
>
> **`node ./app.js`**

```js
const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
```

Die ersten beiden Zeilen `require()` (importieren) das Express-Modul und erstellen eine [Express-Anwendung](https://expressjs.com/en/4x/api.html#app). Dieses Objekt, das traditionell `app` genannt wird, hat Methoden für das Routing von HTTP-Anfragen, die Konfiguration von Middleware, das Rendering von HTML-Ansichten, die Registrierung einer Template-Engine und die Modifikation von [Anwendungseinstellungen](https://expressjs.com/en/4x/api.html#app.settings.table), die steuern, wie die Anwendung sich verhält (z.B. der Betriebsmodus der Umgebung, ob Routen-Definitionen Groß-/Kleinschreibung beachten, etc.)

Der mittlere Teil des Codes (die drei Zeilen beginnend mit `app.get`) zeigt eine _Routendefinition_. Die Methode `app.get()` spezifiziert eine Callback-Funktion, die aufgerufen wird, wann immer es eine HTTP `GET` Anfrage mit einem Pfad (`'/'`) relativ zum Server-Root gibt. Die Callback-Funktion nimmt ein Anfrage- und ein Antwortobjekt als Argumente und ruft [`send()`](https://expressjs.com/en/4x/api.html#res.send) auf der Antwort auf, um den String "Hello World!" zurückzugeben.

Der letzte Block startet den Server mit einem angegebenen Port ('3000') und druckt einen Log-Kommentar auf die Konsole. Mit dem laufenden Server könnten Sie zu `localhost:3000` in Ihrem Browser gehen, um die Beispielantwort zu sehen.

### Importieren und Erstellen von Modulen

Ein Modul ist eine JavaScript-Bibliothek/-Datei, die Sie mittels der `require()`-Funktion von Node in anderen Code importieren können. _Express_ selbst ist ein Modul, ebenso wie die Middleware- und Datenbankbibliotheken, die wir in unseren _Express_-Anwendungen verwenden.

Der folgende Code zeigt, wie wir ein Modul nach Namen importieren, wobei das _Express_-Framework als Beispiel dient. Zuerst rufen wir die `require()`-Funktion auf, geben den Namen des Moduls als String (`'express'`) an und rufen das zurückgegebene Objekt auf, um eine [Express-Anwendung](https://expressjs.com/en/4x/api.html#app) zu erstellen. Wir können dann auf die Eigenschaften und Funktionen des Anwendungsobjekts zugreifen.

```js
const express = require("express");
const app = express();
```

Sie können auch Ihre eigenen Module erstellen, die auf dieselbe Weise importiert werden können.

> [!NOTE]
> Sie werden _eigene_ Module erstellen wollen, da es Ihnen ermöglicht, Ihren Code in handhabbare Teile zu organisieren — eine monolithische Datei-Anwendung ist schwer zu verstehen und zu pflegen. Die Verwendung von Modulen hilft Ihnen auch bei der Verwaltung Ihres Namespaces, da nur die Variablen, die Sie explizit exportieren, importiert werden, wenn Sie ein Modul verwenden.

Um Objekte außerhalb eines Moduls verfügbar zu machen, müssen Sie sie lediglich als zusätzliche Eigenschaften des Objekts `exports` exposieren. Zum Beispiel ist das Modul **square.js** unten eine Datei, die `area()`- und `perimeter()`-Methoden exportiert:

```js
exports.area = function (width) {
  return width * width;
};
exports.perimeter = function (width) {
  return 4 * width;
};
```

Wir können dieses Modul mit `require()` importieren und dann die exportierten Methoden aufrufen, wie gezeigt:

```js
const square = require("./square"); // Here we require() the name of the file without the (optional) .js file extension
console.log(`The area of a square with a width of 4 is ${square.area(4)}`);
```

> [!NOTE]
> Sie können auch einen absoluten Pfad zum Modul angeben (oder einen Namen, wie wir es anfänglich getan haben).

Wenn Sie ein komplettes Objekt in einer Zuweisung exportieren möchten, anstatt es eigenschaftsweise zu erstellen, weisen Sie es `module.exports` zu, wie unten gezeigt (Sie können dies auch tun, um das Wurzel-Objekt der Exporte zu einem Konstruktor oder einer anderen Funktion zu machen):

```js
module.exports = {
  area(width) {
    return width * width;
  },

  perimeter(width) {
    return 4 * width;
  },
};
```

> [!NOTE]
> Sie können `exports` als eine [Abkürzung](https://nodejs.org/api/modules.html#modules_exports_shortcut) zu `module.exports` innerhalb eines bestimmten Moduls betrachten. Tatsächlich ist `exports` nur eine Variable, die auf den Wert von `module.exports` gesetzt wird, bevor das Modul ausgewertet wird. Dieser Wert ist eine Referenz auf ein Objekt (in diesem Fall ein leeres Objekt). Das bedeutet, dass `exports` eine Referenz auf dasselbe Objekt wie `module.exports` enthält. Es bedeutet auch, dass, indem Sie einen anderen Wert auf `exports` zuweisen, es nicht mehr an `module.exports` gebunden ist.

Weitere Informationen zu Modulen finden Sie unter [Module](https://nodejs.org/api/modules.html#modules_modules) (Node API-Dokumentation).

### Verwendung von asynchronen APIs

JavaScript-Code verwendet häufig asynchrone anstelle von synchronen APIs für Operationen, die einige Zeit in Anspruch nehmen können. Eine synchrone API ist eine, bei der jede Operation abgeschlossen sein muss, bevor die nächste Operation beginnen kann. Zum Beispiel sind die folgenden Protokoll-Funktionen synchron und drucken den Text in der Reihenfolge „First, Second“ auf die Konsole.

```js
console.log("First");
console.log("Second");
```

Im Gegensatz dazu ist eine asynchrone API eine, bei der die API eine Operation startet und sofort zurückkehrt (bevor die Operation abgeschlossen ist). Sobald die Operation abgeschlossen ist, wird die API einen Mechanismus verwenden, um zusätzliche Operationen durchzuführen. Zum Beispiel wird der folgende Code „Second, First“ ausgeben, weil die Methode `setTimeout()` zwar zuerst aufgerufen wird und sofort zurückkehrt, die Operation aber erst nach einigen Sekunden abgeschlossen ist.

```js
setTimeout(function () {
  console.log("First");
}, 3000);
console.log("Second");
```

Die Verwendung nicht blockierender asynchroner APIs ist in Node noch wichtiger als im Browser, da _Node_ eine einzelsträngige ereignisgesteuerte Ausführungsumgebung ist. "Einzelsträngig" bedeutet, dass alle Anfragen an den Server im selben Thread ausgeführt werden (anstatt in separate Prozesse aufgeteilt zu werden). Dieses Modell ist in Bezug auf Geschwindigkeit und Serverressourcen extrem effizient, bedeutet jedoch, dass, wenn eine Ihrer Funktionen synchronisierte Methoden aufruft, die lange dauern, sie nicht nur die aktuelle Anfrage blockieren, sondern alle anderen Anfragen, die Ihre Webanwendung bearbeitet.

Es gibt eine Reihe von Möglichkeiten, wie eine asynchrone API Ihre Anwendung benachrichtigen kann, dass sie abgeschlossen ist. Der gebräuchlichste Weg ist es, eine Callback-Funktion zu registrieren, wenn Sie die asynchrone API aufrufen, die zurückgerufen wird, wenn die Operation abgeschlossen ist. Dies ist der oben verwendete Ansatz.

> [!NOTE]
> Die Verwendung von Callbacks kann ziemlich „chaotisch“ sein, wenn Sie eine Reihe von voneinander abhängigen asynchronen Operationen haben, die der Reihenfolge nach durchgeführt werden müssen, da dies zu mehreren Ebenen von geschachtelten Callbacks führt. Dieses Problem ist allgemein bekannt als "Callback-Hölle". Dieses Problem kann durch gute Codierungspraktiken verringert werden (siehe <http://callbackhell.com/>), die Verwendung eines Moduls wie [async](https://www.npmjs.com/package/async) oder der Refaktorierung des Codes zu nativen JavaScript-Features wie [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) und [async/await](/de/docs/Web/JavaScript/Reference/Statements/async_function). Node bietet die Funktion [`utils.promisify`](https://nodejs.org/api/util.html#utilpromisifyoriginal) an, um die Callback → Promise-Konvertierung ergonomisch umzusetzen.

> [!NOTE]
> Eine übliche Konvention für Node und Express ist die Verwendung von Fehler-ersten Callbacks. Bei dieser Konvention ist der erste Wert in Ihren _Callback-Funktionen_ ein Fehlerwert, während nachfolgende Argumente Erfolgsdaten enthalten. Es gibt eine gute Erklärung dafür, warum dieser Ansatz nützlich ist, in diesem Blog: [The Node.js Way - Understanding Error-First Callbacks](https://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/) (fredkschott.com).

### Erstellen von Route-Handlers

In unserem _Hello World_ Express-Beispiel (siehe oben) haben wir eine (Callback-)Route-Handler-Funktion definiert für HTTP `GET`-Anfragen an die Website-Startseite (`'/'`).

```js
app.get("/", function (req, res) {
  res.send("Hello World!");
});
```

Die Callback-Funktion nimmt ein Anfrage- und ein Antwortobjekt als Argumente. In diesem Fall ruft die Methode [`send()`](https://expressjs.com/en/4x/api.html#res.send) auf der Antwort auf, um den String "Hello World!" zurückzugeben. Es gibt eine [Reihe anderer Antwortmethoden](https://expressjs.com/en/guide/routing.html#response-methods), um den Anfrage-/Antwortzyklus zu beenden, beispielsweise könnten Sie [`res.json()`](https://expressjs.com/en/4x/api.html#res.json) aufrufen, um eine JSON-Antwort zu senden oder [`res.sendFile()`](https://expressjs.com/en/4x/api.html#res.sendFile), um eine Datei zu senden.

> [!NOTE]
> Sie können in den Callback-Funktionen beliebige Argumentnamen verwenden; wenn der Callback aufgerufen wird, wird das erste Argument immer die Anfrage und das zweite immer die Antwort sein. Es ergibt Sinn, sie so zu benennen, dass Sie das Objekt, mit dem Sie arbeiten, im Körper des Callbacks erkennen können.

Das _Express-Anwendungsobjekt_ bietet auch Methoden, um Routen-Handler für alle anderen HTTP-Verben zu definieren, die größtenteils auf genau die gleiche Weise verwendet werden:

`checkout()`, `copy()`, **`delete()`**, **`get()`**, `head()`, `lock()`, `merge()`, `mkactivity()`, `mkcol()`, `move()`, `m-search()`, `notify()`, `options()`, `patch()`, **`post()`**, `purge()`, **`put()`**, `report()`, `search()`, `subscribe()`, `trace()`, `unlock()`, `unsubscribe()`.

Es gibt eine spezielle Routing-Methode, `app.all()`, die in Antwort auf jede HTTP-Methode aufgerufen wird. Dies wird verwendet, um Middleware-Funktionen zu einem bestimmten Pfad für alle Anfrage-Methoden zu laden. Das folgende Beispiel (aus der Express-Dokumentation) zeigt einen Handler, der für Anfragen an `/secret` ausgeführt wird, unabhängig vom verwendeten HTTP-Verb (vorausgesetzt, es wird vom [http Modul](https://nodejs.org/docs/latest/api/http.html#httpmethods) unterstützt).

```js
app.all("/secret", function (req, res, next) {
  console.log("Accessing the secret section…");
  next(); // pass control to the next handler
});
```

Routen erlauben es Ihnen, bestimmte Zeichenmuster in einer URL zu erkennen und einige Werte aus der URL zu extrahieren und sie als Parameter an den Routen-Handler zu übergeben (als Attribute des Anforderungsobjekts, das als Parameter übergeben wird).

Oft ist es nützlich, Routen-Handler für einen bestimmten Teil einer Site zusammenzufassen und sie über ein gemeinsames Routenpräfix zuzugreifen (z. B. könnte eine Site mit einem Wiki alle wiki-bezogenen Routen in einer Datei haben und sie mit einem Routenpräfix von _/wiki/_ zugänglich machen). In _Express_ wird dies durch die Verwendung des [`express.Router`](https://expressjs.com/en/guide/routing.html#express-router) Objekts erreicht. Zum Beispiel können wir unsere Wiki-Route in einem Modul namens **wiki.js** erstellen und dann das `Router`-Objekt exportieren, wie unten gezeigt:

```js
// wiki.js - Wiki route module

const express = require("express");
const router = express.Router();

// Home page route
router.get("/", function (req, res) {
  res.send("Wiki home page");
});

// About page route
router.get("/about", function (req, res) {
  res.send("About this wiki");
});

module.exports = router;
```

> [!NOTE]
> Das Hinzufügen von Routen zum `Router`-Objekt ist genau so, wie das Hinzufügen von Routen zum `app`-Objekt (wie zuvor gezeigt).

Um den Router in unserer Hauptanwendungsdatei zu verwenden, würden wir dann das Routenmodul (**wiki.js**) `require()` und dann `use()` auf der _Express_-Anwendung aufrufen, um den Router zum Middleware-Verarbeitungspfad hinzuzufügen. Die beiden Routen werden dann von `/wiki/` und `/wiki/about/` zugänglich.

```js
const wiki = require("./wiki.js");
// …
app.use("/wiki", wiki);
```

Wir werden Ihnen später in dem verlinkten Abschnitt [Routen und Controller](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes) noch viel mehr über die Arbeit mit Routen zeigen, insbesondere über die Verwendung des `Router`.

### Verwendung von Middleware

Middleware wird in Express-Anwendungen ausgiebig eingesetzt, von der Bereitstellung statischer Dateien über Fehlerbehandlung bis hin zur Komprimierung von HTTP-Antworten. Während Routenfunktionen den HTTP-Anfrage-Antwort-Zyklus mit einer Antwort an den HTTP-Client beenden, führen Middleware-Funktionen _normalerweise_ eine Operation an der Anfrage oder Antwort aus und rufen dann die nächste Funktion im „Stack“ auf, die Middleware oder einen Routen-Handler sein kann. Die Reihenfolge, in der Middleware aufgerufen wird, liegt beim App-Entwickler.

> [!NOTE]
> Die Middleware kann jede Operation ausführen, jeden Code ausführen, Änderungen an der Anfrage- und Antwortobjekt vornehmen und sie kann auch den Anfrage-Antwort-Zyklus beenden. Wenn sie den Zyklus nicht beendet, muss sie `next()` aufrufen, um die Kontrolle an die nächste Middleware-Funktion zu übergeben (oder die Anfrage wird hängen bleiben).

Die meisten Apps verwenden _Drittanbieter_-Middleware, um häufige Aufgaben der Webentwicklung wie die Arbeit mit Cookies, Sitzungen, die Benutzeranmeldung, den Zugriff auf Anfrage-`POST`- und JSON-Daten, die Protokollierung usw. zu vereinfachen. Sie können eine [Liste der von Express gepflegten Middleware-Pakete](https://expressjs.com/en/resources/middleware.html) finden (die auch andere beliebte Drittanbieter-Pakete enthält). Andere Express-Pakete sind im npm-Paketmanager verfügbar.

Um Drittanbieter-Middleware zu verwenden, müssen Sie diese zuerst mit npm in Ihre App installieren.
Um beispielsweise die [morgan](https://expressjs.com/en/resources/middleware/morgan.html) HTTP-Anforderungslogger-Middleware zu installieren, würden Sie diese ausführen:

```bash
npm install morgan
```

Sie könnten dann `use()` auf dem _Express-Anwendungsobjekt_ aufrufen, um die Middleware zum Stack hinzuzufügen:

```js
const express = require("express");
const logger = require("morgan");
const app = express();
app.use(logger("dev"));
// …
```

> [!NOTE]
> Middleware und Routing-Funktionen werden in der Reihenfolge aufgerufen, in der sie deklariert werden. Für einige Middleware ist die Reihenfolge wichtig (zum Beispiel, wenn die Sitzungsmiddleware von der Cookie-Middleware abhängt, muss der Cookie-Handler zuerst hinzugefügt werden). Es ist fast immer der Fall, dass Middleware vor dem Festlegen von Routen aufgerufen wird, da Ihre Routen-Handler sonst nicht auf die von Ihrer Middleware hinzugefügte Funktionalität zugreifen können.

Sie können Ihre eigene Middleware-Funktionen schreiben und müssen dies wahrscheinlich tun (auch wenn es nur um das Erstellen von Fehlerbehandlungscode geht). Der **einzige** Unterschied zwischen einer Middleware-Funktion und einer Routen-Handler-Callback ist, dass Middleware-Funktionen ein drittes Argument `next` haben, das Middleware-Funktionen aufgerufen werden sollen, wenn sie nicht diejenigen sind, die den Anforderungszyklus abschließen (wenn die Middleware-Funktion aufgerufen wird, enthält dies die _nächste_ Funktion, die aufgerufen werden muss).

Sie können eine Middleware-Funktion zur Verarbeitungskette für _alle Antworten_ mit `app.use()` oder für ein spezifisches HTTP-Verb mit der zugehörigen Methode hinzufügen: `app.get()`, `app.post()` usw. Routen werden in beiden Fällen auf die gleiche Weise angegeben, obwohl die Route optional ist, wenn `app.use()` aufgerufen wird.

Das folgende Beispiel zeigt, wie Sie die Middleware-Funktion mit beiden Ansätzen hinzufügen können, und mit/ohne einer Route.

```js
const express = require("express");
const app = express();

// An example middleware function
const a_middleware_function = function (req, res, next) {
  // Perform some operations
  next(); // Call next() so Express will call the next middleware function in the chain.
};

// Function added with use() for all routes and verbs
app.use(a_middleware_function);

// Function added with use() for a specific route
app.use("/some-route", a_middleware_function);

// A middleware function added for a specific HTTP verb and route
app.get("/", a_middleware_function);

app.listen(3000);
```

> [!NOTE]
> Oben erklären wir die Middleware-Funktion separat und setzen sie dann als Callback. In unserer vorherigen Routen-Handler-Funktion erklärten wir die Callback-Funktion, als sie verwendet wurde. In JavaScript ist einer dieser Ansätze zulässig.

Die Express-Dokumentation enthält viele hervorragende Dokumentationen über die [Verwendung](https://expressjs.com/en/guide/using-middleware.html) und das [Schreiben](https://expressjs.com/en/guide/writing-middleware.html) von Express-Middleware.

### Bereitstellung statischer Dateien

Sie können die [express.static](https://expressjs.com/en/4x/api.html#express.static) Middleware verwenden, um statische Dateien bereitzustellen, einschließlich Ihrer Bilder, CSS und JavaScript (`static()` ist die einzige Middleware-Funktion, die tatsächlich **Teil** von _Express_ ist). Beispielsweise würden Sie die folgende Zeile verwenden, um Bilder, CSS-Dateien und JavaScript-Dateien aus einem Verzeichnis namens '**public**' auf derselben Ebene wie der Knoten aufzurufen bereitstellen:

```js
app.use(express.static("public"));
```

Alle Dateien im öffentlichen Verzeichnis werden durch Hinzufügen ihres Dateinamens (_relativ_ zum Basis-„öffentlichen“ Verzeichnis) zur Basis-URL bereitgestellt. Also zum Beispiel:

```plain
http://localhost:3000/images/dog.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/about.html
```

Sie können `static()` mehrmals schließen, um mehrere Verzeichnisse zu bedienen. Wenn eine Datei von einer Middleware-Funktion nicht gefunden werden kann, wird sie an die nächste Middleware weitergeleitet (die Reihenfolge, in der Middleware aufgerufen wird, richtet sich nach Ihrer Deklarationsreihenfolge).

```js
app.use(express.static("public"));
app.use(express.static("media"));
```

Sie können auch ein virtuelles Präfix für Ihre statischen URLs erstellen, anstatt die Dateien zur Basis-URL hinzuzufügen. In diesem Beispiel legen wir [einen Einhängepfad fest](https://expressjs.com/en/4x/api.html#app.use), sodass die Dateien mit dem Präfix "/media" geladen werden:

```js
app.use("/media", express.static("public"));
```

Jetzt können Sie die Dateien, die sich im `public`-Verzeichnis befinden, mit dem Pfadpräfix `/media` laden.

```plain
http://localhost:3000/media/images/dog.jpg
http://localhost:3000/media/video/cat.mp4
http://localhost:3000/media/cry.mp3
```

> [!NOTE]
> Siehe auch [Bereitstellen statischer Dateien in Express](https://expressjs.com/en/starter/static-files.html).

### Fehler behandeln

Fehler werden von einer oder mehreren speziellen Middleware-Funktionen behandelt, die vier Argumente haben, anstelle der üblichen drei: `(err, req, res, next)`. Zum Beispiel:

```js
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

Diese können jeden erforderlichen Inhalt zurückgeben, müssen aber nach allen anderen `app.use()`- und Routenaufrufen aufgerufen werden, damit sie die letzte Middleware im Anforderungshandlungsprozess sind!

Express verfügt über einen integrierten Fehler-Handler, der sich um alle verbleibenden Fehler kümmert, die in der App auftreten können. Diese Standard-Fehler-Handling-Middleware-Funktion wird am Ende der Middleware-Funktions-Stack hinzugefügt. Wenn Sie einen Fehler an `next()` übergeben und ihn nicht in einem Fehler-Handler behandeln, wird er vom integrierten Fehler-Handler behandelt; der Fehler wird mit dem Stack-Trace an den Client geschrieben.

> [!NOTE]
> Der Stack-Trace ist in der Produktionsumgebung nicht enthalten. Um dies im Produktionsmodus auszuführen, müssen Sie die Umgebungsvariable `NODE_ENV` auf `"production"` setzen.

> [!NOTE]
> HTTP404 und andere „Fehler“-Statuscodes werden nicht als Fehler behandelt. Wenn Sie diese Hand haben möchten, können Sie eine Middleware-Funktion hinzufügen, um dies zu tun. Weitere Informationen finden Sie in den [FAQ](https://expressjs.com/en/starter/faq.html#how-do-i-handle-404-responses).

Weitere Informationen finden Sie unter [Fehlerhandhabung](https://expressjs.com/en/guide/error-handling.html) (Express-Dokumentation).

### Verwendung von Datenbanken

_Express_ Apps können jeden von _Node_ unterstützten Datenbankmechanismus verwenden (_Express_ selbst definiert kein spezifisches zusätzliches Verhalten/Anforderungen für Datenbankmanagement). Es gibt viele Optionen, einschließlich PostgreSQL, MySQL, Redis, SQLite, MongoDB usw.

Um diese zu verwenden, müssen Sie zuerst den Datenbanktreiber mit npm installieren. Zum Beispiel, um den Treiber für das beliebte NoSQL-MongoDB zu installieren, würden Sie den Befehl verwenden:

```bash
npm install mongodb
```

Die Datenbank selbst kann lokal oder auf einem Cloud-Server installiert werden. In Ihrem Express-Code benötigen Sie den Treiber, um auf die Datenbank zuzugreifen, und dann führen Sie Erstellen-, Lese-, Aktualisierungs- und Löschoperationen (CRUD) durch. Das folgende Beispiel (aus der Express-Dokumentation) zeigt, wie Sie "Säugetier"-Datensätze mit MongoDB finden können.

Dies funktioniert mit älteren Versionen von MongoDB Version ~ 2.2.33:

```js
const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/animals", (err, db) => {
  if (err) throw err;

  db.collection("mammals")
    .find()
    .toArray((err, result) => {
      if (err) throw err;

      console.log(result);
    });
});
```

Für MongoDB Version 3.0 und höher:

```js
const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/animals", (err, client) => {
  if (err) throw err;

  const db = client.db("animals");
  db.collection("mammals")
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      console.log(result);
      client.close();
    });
});
```

Ein weiterer beliebter Ansatz besteht darin, auf Ihre Datenbank indirekt über einen Objekt-Relationalen Mapper („ORM“) zuzugreifen. In diesem Ansatz definieren Sie Ihre Daten als „Objekte“ oder „Modelle“ und der ORM übersetzt diese in das zugrunde liegende Datenbankformat. Dieser Ansatz hat den Vorteil, dass Sie als Entwickler weiterhin in JavaScript-Objekten denken können, anstatt in Datenbankse-mantik, und dass es einen offensichtlichen Ort gibt, um die Validierung und Überprüfung eingehender Daten durchzuführen. Wir werden später in einem anderen Artikel mehr über Datenbanken sprechen.

Weitere Informationen finden Sie unter [Datenbankintegration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation).

### Rendering von Daten (Ansichten)

Vorlagensysteme (auch als „Ansichts-Engines“ in _Express_ bezeichnet) ermöglichen es Ihnen, die _Struktur_ eines Ausgabedokuments in einer Vorlage anzugeben, indem Sie Platzhalter für Daten verwenden, die eingefügt werden, wenn eine Seite generiert wird. Vorlagen werden oft verwendet, um HTML zu generieren, können aber auch andere Dokumenttypen erzeugen.

Express unterstützt eine Reihe von Vorlagensystemen, insbesondere Pug (ehemals "Jade"), Mustache und EJS. Jedes hat seine eigenen Stärken, um bestimmte Anwendungsfälle zu adressieren (relative Vergleiche können leicht über eine Internetsuche gefunden werden).
Der Express-Anwendungsgenerator verwendet Jade als Standard, unterstützt jedoch auch mehrere andere.

In Ihrem Anwendungscode legen Sie die zu verwendende Vorlagen-Engine und den Ort fest, an dem Express nach Vorlagen suchen soll, indem Sie die 'views'- und 'view engine'-Einstellungen setzen, wie unten gezeigt (Sie müssen auch das Paket installieren, das Ihre Vorlagenbibliothek enthält!)

```js
const express = require("express");
const path = require("path");
const app = express();

// Set directory to contain the templates ('views')
app.set("views", path.join(__dirname, "views"));

// Set view engine to use, in this case 'some_template_engine_name'
app.set("view engine", "some_template_engine_name");
```

Das Aussehen der Vorlage hängt davon ab, welche Engine Sie verwenden. Angenommen, Sie haben eine Vorlagendatei mit dem Namen "index.\<template_extension>", die Platzhalter für Datenvariablen namens 'title' und "message" enthält, würden Sie [`Response.render()`](https://expressjs.com/en/4x/api.html#res.render) in einer Routen-Handler-Funktion aufrufen, um die HTML-Antwort zu erstellen und zu senden:

```js
app.get("/", function (req, res) {
  res.render("index", { title: "About dogs", message: "Dogs rock!" });
});
```

Weitere Informationen finden Sie unter [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation).

### Dateistruktur

Express macht keine Annahmen in Bezug auf die Struktur oder welche Komponenten Sie verwenden. Routen, Ansichten, statische Dateien und andere anwendungsspezifische Logik können in einer beliebigen Anzahl von Dateien mit jeder Verzeichnisstruktur untergebracht werden. Obwohl es durchaus möglich ist, die gesamte _Express_ Anwendung in einer Datei zu haben, ergibt es normalerweise Sinn, Ihre Anwendung basierend auf der Funktion (z. B. Kontoverwaltung, Blogs, Diskussionsforen) und dem architektonischen Problembereich (z. B. Modell, Ansicht oder Controller, wenn Sie eine verwenden {{Glossary("MVC", "MVC-Architektur")}}) auf Dateien aufzuteilen.

In einem späteren Thema werden wir den _Express Application Generator_ verwenden, der ein modulares App-Skelett erstellt, das wir leicht erweitern können, um Webanwendungen zu erstellen.

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben den ersten Schritt in Ihrer Express/Node-Reise abgeschlossen! Sie sollten nun die Hauptvorteile von Express und Node verstehen und ungefähr wissen, wie die Hauptteile einer Express-App aussehen könnten (Routen, Middleware, Fehlerbehandlung und Vorlagencode). Sie sollten auch verstehen, dass, da Express ein nicht meinungsstarkes Framework ist, die Art und Weise, wie Sie diese Teile zusammenfügen und die Bibliotheken, die Sie verwenden, weitgehend Ihnen überlassen sind!

Natürlich ist Express absichtlich ein sehr leichtgewichtiges Webanwendungs-Framework, sodass ein Großteil seines Nutzens und Potenzials aus Drittanbieter-Bibliotheken und -Funktionen stammt. Wir werden diese in den folgenden Artikeln genauer betrachten. In unserem nächsten Artikel werden wir uns mit dem Einrichten einer Node-Entwicklungsumgebung beschäftigen, damit Sie einige Express-Codes in Aktion sehen können.

## Siehe auch

- [Venkat.R - Verwalten mehrerer Node-Versionen](https://medium.com/@ramsunvtech/manage-multiple-node-versions-e3245d5ede44)
- [Module](https://nodejs.org/api/modules.html#modules_modules) (Node API-Dokumente)
- [Express](https://expressjs.com/) (Startseite)
- [Grundlegendes Routing](https://expressjs.com/en/starter/basic-routing.html) (Express-Dokumentation)
- [Routing-Leitfaden](https://expressjs.com/en/guide/routing.html) (Express-Dokumentation)
- [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation)
- [Using middleware](https://expressjs.com/en/guide/using-middleware.html) (Express-Dokumentation)
- [Writing middleware for use in Express apps](https://expressjs.com/en/guide/writing-middleware.html) (Express-Dokumentation)
- [Datenbankintegration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation)
- [Bereitstellen statischer Dateien in Express](https://expressjs.com/en/starter/static-files.html) (Express-Dokumentation)
- [Fehlerhandhabung](https://expressjs.com/en/guide/error-handling.html) (Express-Dokumentation)

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
