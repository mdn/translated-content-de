---
title: Einführung in Express/Node
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

In diesem ersten Express-Artikel beantworten wir die Fragen „Was ist Node?“ und „Was ist Express?“ und geben Ihnen einen Überblick darüber, was das Express-Web-Framework besonders macht. Wir skizzieren die Hauptmerkmale und zeigen Ihnen einige der grundlegenden Bausteine einer Express-Anwendung (obgleich Sie zu diesem Zeitpunkt noch keine Entwicklungsumgebung haben, um diese zu testen).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein allgemeines Verständnis von <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps">Serverseitiger Webseitenerstellung</a>&nbsp; und insbesondere die Mechanismen der <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview">Client-Server-Interaktionen auf Webseiten</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das Kennenlernen von Express, seine Einordnung in Node, die bereitgestellten Funktionalitäten und die grundlegenden Bausteine einer Express-Anwendung.
      </td>
    </tr>
  </tbody>
</table>

## Einführung in Node

[Node](https://nodejs.org/) (oder formeller _Node.js_) ist eine Open-Source, plattformübergreifende Laufzeitumgebung, die Entwicklern ermöglicht, serverseitige Tools und Anwendungen in {{Glossary("JavaScript", "JavaScript")}} zu erstellen.
Die Laufzeit ist für den Einsatz außerhalb eines Browserkontexts gedacht (d.h. direkt auf einem Computer oder Serverbetriebssystem laufend). Daher verzichtet die Umgebung auf browserspezifische JavaScript-APIs und fügt Unterstützung für traditionellere OS-APIs wie HTTP- und Dateisystembibliotheken hinzu.

Aus der Perspektive der Webserver-Entwicklung bietet Node mehrere Vorteile:

- Hervorragende Leistung! Node wurde entwickelt, um den Durchsatz und die Skalierbarkeit in Webanwendungen zu optimieren und ist eine gute Lösung für viele gängige Webentwicklungsprobleme (z.B. Echtzeit-Webanwendungen).
- Der Code wird in "einfachem altem JavaScript" geschrieben, was bedeutet, dass weniger Zeit mit dem Umgang von "Kontextwechsel" zwischen Sprachen verschwendet wird, wenn Sie sowohl client- als auch serverseitigen Code schreiben.
- JavaScript ist eine relativ neue Programmiersprache und profitiert von Verbesserungen im Sprachdesign im Vergleich zu anderen traditionellen Webserver-Sprachen (z.B. Python, PHP, etc.). Viele andere neue und beliebte Sprachen kompilieren/konvertieren in JavaScript, sodass Sie auch TypeScript, CoffeeScript, ClojureScript, Scala, LiveScript, etc. verwenden können.
- Der Node-Paketmanager (npm) bietet Zugang zu Hunderttausenden von wiederverwendbaren Paketen. Er hat auch die beste Abhängigkeitsauflösung und kann zur Automatisierung der meisten Build-Toolchains verwendet werden.
- Node.js ist portabel. Es ist auf Microsoft Windows, macOS, Linux, Solaris, FreeBSD, OpenBSD, WebOS und NonStop OS verfügbar. Darüber hinaus wird es von vielen Webhosting-Anbietern gut unterstützt, die oft spezifische Infrastrukturen und Dokumentationen für das Hosting von Node-Seiten bereitstellen.
- Es gibt ein sehr aktives Ökosystem Dritter und Entwicklergemeinschaften, mit vielen Menschen, die bereit sind zu helfen.

Sie können Node.js verwenden, um mit dem Node-HTTP-Paket einen einfachen Webserver zu erstellen.

### Hallo, Node.js

Das folgende Beispiel erstellt einen Webserver, der auf alle Arten von HTTP-Anfragen unter der URL `http://127.0.0.1:8000/` hört – wenn eine Anfrage eingeht, antwortet das Skript mit dem String „Hello World“. Wenn Sie Node bereits installiert haben, können Sie diese Schritte befolgen, um das Beispiel auszuprobieren:

1. Öffnen Sie das Terminal (unter Windows öffnen Sie das Befehlszeilenprogramm)
2. Erstellen Sie den Ordner, in dem Sie das Programm speichern möchten, z.B. `test-node`, und betreten Sie ihn mit dem folgenden Befehl in Ihrem Terminal:

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

4. Speichern Sie die Datei im oben erstellten Ordner.
5. Gehen Sie zurück zum Terminal und geben Sie den folgenden Befehl ein:

   ```bash
   node hello.js
   ```

Navigieren Sie schließlich in Ihrem Webbrowser zu `http://localhost:8000`; Sie sollten den Text "**Hello World**" in der oberen linken Ecke einer ansonsten leeren Webseite sehen.

## Web-Frameworks

Andere häufige Webentwicklungsaufgaben werden von Node selbst nicht direkt unterstützt. Wenn Sie eine spezifische Verarbeitung für verschiedene HTTP-Verben hinzufügen möchten (z.B. `GET`, `POST`, `DELETE`, etc.), Anfragen an verschiedenen URL-Pfaden ("Routen") separat bearbeiten, statische Dateien servieren oder Vorlagen verwenden möchten, um die Antwort dynamisch zu erzeugen, wird Node allein wenig nützen sein. Sie müssen entweder den Code selbst schreiben, oder Sie können das Rad nicht neu erfinden und ein Web-Framework verwenden!

## Einführung in Express

[Express](https://expressjs.com/) ist das beliebteste Node.js-Webframework und bildet die Grundlage für eine Reihe anderer populärer Node.js-Frameworks. Es bietet Mechanismen um:

- Handler für Anfragen mit verschiedenen HTTP-Verben an unterschiedlichen URL-Pfaden (Routen) zu schreiben.
- integrieren mit "View"-Rendering-Engines, um Antworten durch Einfügen von Daten in Vorlagen zu generieren.
- Allgemeine Webanwendungseinstellungen wie den zu verwendenden Port für die Verbindung und den Speicherort der Vorlagen, die zum Rendern der Antwort verwendet werden, festzulegen.
- Zusätzliche Anforderungsverarbeitungs-"Middleware" an jedem Punkt innerhalb der Anforderungsverarbeitungspipeline hinzuzufügen.

Während _Express_ selbst recht minimalistisch ist, haben Entwickler kompatible Middleware-Pakete erstellt, um fast jedes Webentwicklungsproblem zu lösen. Es gibt Bibliotheken für die Arbeit mit Cookies, Sitzungen, Benutzeranmeldungen, URL-Parametern, `POST`-Daten, Sicherheitsheadern und _vielen_ mehr. Eine Liste der von den Express-Teams gepflegten Middleware-Pakete finden Sie unter [Express Middleware](https://expressjs.com/en/resources/middleware.html) (zusammen mit einer Liste einiger beliebter Drittanbieter-Pakete).

> [!NOTE]
> Diese Flexibilität ist ein zweischneidiges Schwert. Es gibt Middleware-Pakete, um fast jedes Problem oder jede Anforderung zu adressieren, aber herauszufinden, welche Pakete verwendet werden sollen, kann manchmal eine Herausforderung sein. Es gibt auch keinen "richtigen Weg", um eine Anwendung zu strukturieren, und viele Beispiele, die Sie im Internet finden können, sind nicht optimal oder zeigen nur einen kleinen Teil dessen, was Sie tun müssen, um eine Webanwendung zu entwickeln.

## Woher kommen Node und Express?

Node wurde 2009 erstmals nur für Linux veröffentlicht. Der npm-Paketmanager wurde 2010 veröffentlicht und 2012 wurde die native Windows-Unterstützung hinzugefügt. Tauchen Sie in [Wikipedia](https://en.wikipedia.org/wiki/Node.js#History) ein, wenn Sie mehr erfahren möchten.

Express wurde im November 2010 erstmals veröffentlicht und befindet sich derzeit in der Hauptversion 4 der API. Sie können sich im [Änderungsprotokoll](https://expressjs.com/en/changelog/4x.html) über die Änderungen in der aktuellen Version informieren und auf [GitHub](https://github.com/expressjs/express/blob/master/History.md) detailliertere historische Versionshinweise ansehen.

## Wie beliebt sind Node und Express?

Die Popularität eines Web-Frameworks ist wichtig, weil sie ein Indikator dafür ist, ob es weiterhin gepflegt wird und welche Ressourcen voraussichtlich verfügbar sind in Bezug auf Dokumentation, Zusatzbibliotheken und technischen Support.

Es gibt kein leicht verfügbar und endgültiges Maß für die Beliebtheit von serverseitigen Frameworks (obwohl Sie die Beliebtheit mittels Mechanismen wie das Zählen der Anzahl von GitHub-Projekten und Stack Overflow-Fragen für jede Plattform schätzen können). Eine bessere Frage ist, ob Node und Express "beliebt genug" sind, um die Probleme unpopulärer Plattformen zu vermeiden. Entwickeln sie sich weiter? Können Sie Hilfe bekommen, wenn Sie sie brauchen? Gibt es eine Möglichkeit für Sie, bezahlte Arbeit zu finden, wenn Sie Express lernen?

Basierend auf der Anzahl von prominenten Unternehmen, die Express verwenden, der Anzahl der Personen, die zum Code-Base beitragen, und der Anzahl der Personen, die sowohl kostenlosen als auch kostenpflichtigen Support bieten, lautet die Antwort ja, _Express_ ist ein beliebtes Framework!

## Ist Express meinungsstark?

Web-Frameworks bezeichnen sich oft als "meinungsstark" oder "unmeinungsstark".

Meinungsstarke Frameworks sind solche mit Ansichten darüber, wie bestimmte Aufgaben "richtig" gehandhabt werden. Sie unterstützen oft eine schnelle Entwicklung _in einem bestimmten Bereich_ (Lösung von Problemen einer bestimmten Art), weil der richtige Weg, etwas zu tun, in der Regel gut verstanden und gut dokumentiert ist. Sie können jedoch weniger flexibel bei der Lösung von Problemen außerhalb ihres primären Bereichs sein und neigen dazu, weniger Auswahlmöglichkeiten bezüglich der Komponenten und Ansätze, die sie verwenden können, anzubieten.

Unmeinungsstarke Frameworks haben hingegen weit weniger Einschränkungen darüber, wie die besten Komponenten zusammengefügt werden sollen, um ein Ziel zu erreichen, oder gar welche Komponenten genutzt werden sollten. Sie erleichtern Entwicklern die Verwendung der am besten geeigneten Werkzeuge für die Durchführung einer bestimmten Aufgabe, allerdings auf Kosten, dass Sie diese Komponenten selbst finden müssen.

Express ist unmeinungsstark. Sie können fast jede kompatible Middleware, die Sie mögen, in die Anforderungsverarbeitungskette einfügen, in fast jeder gewünschten Reihenfolge. Sie können die App in einer Datei oder mehreren Dateien und in beliebiger Verzeichnisstruktur aufbauen. Sie werden manchmal das Gefühl haben, zu viele Auswahlmöglichkeiten zu haben!

## Wie sieht Express-Code aus?

In einer traditionell datengesteuerten Website wartet eine Webanwendung auf HTTP-Anfragen vom Webbrowser (oder einem anderen Client). Wenn eine Anfrage eingeht, ermittelt die Anwendung, welche Aktion aufgrund des URL-Musters und möglicherweise der damit verbundenen Informationen in `POST`-Daten oder `GET`-Daten erforderlich ist. Abhängig von dem, was erforderlich ist, kann es dann Informationen aus einer Datenbank lesen oder schreiben oder andere Aufgaben ausführen, die erforderlich sind, um die Anforderung zu erfüllen. Die Anwendung gibt dann eine Antwort an den Webbrowser zurück, die häufig eine HTML-Seite dynamisch erstellt, die vom Browser durch das Einfügen der abgerufenen Daten in Platzhalter in einer HTML-Vorlage angezeigt wird.

Express stellt Methoden bereit, um anzugeben, welche Funktion für ein bestimmtes HTTP-Verb (`GET`, `POST`, `PUT`, etc.) und URL-Muster ("Route") aufgerufen wird, und Methoden, um anzugeben, welche Vorlage ("View")-Engine verwendet wird, wo Vorlagendateien gespeichert sind, und welche Vorlage zum Rendern einer Antwort verwendet werden soll. Sie können Express-Middleware verwenden, um Unterstützung für Cookies, Sitzungen und Benutzer hinzuzufügen, `POST`/`GET`-Parameter zu erhalten, etc. Sie können jeden von Node unterstützten Datenbankmechanismus verwenden (Express definiert kein datenbankbezogenes Verhalten).

Die folgenden Abschnitte erklären einige der gängigen Dinge, die Sie bei der Arbeit mit _Express_ und _Node_ Code sehen werden.

### Helloworld Express

Zuerst betrachten wir das Standard-Express- [Hello World](https://expressjs.com/en/starter/hello-world.html) Beispiel (wir besprechen jeden Teil dieses Beispiels unten und in den folgenden Abschnitten).

> [!NOTE]
> Wenn Sie Node und Express bereits installiert haben (oder wenn Sie sie wie im [nächsten Artikel](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) gezeigt installieren), können Sie diesen Code in einer Textdatei namens **app.js** speichern und ihn in einer bash-Kommandozeile ausführen, indem Sie:
>
> **`node ./app.js`** aufrufen.

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

Die ersten beiden Zeilen `require()` (importieren) das Express-Modul und erstellen eine [Express-Anwendung](https://expressjs.com/en/4x/api.html#app). Dieses Objekt, das traditionell `app` genannt wird, verfügt über Methoden zum Routing von HTTP-Anfragen, zur Konfiguration von Middleware, zur Wiedergabe von HTML-Ansichten, zur Registrierung einer Template-Engine und zur Änderung von [Application Settings](https://expressjs.com/en/4x/api.html#app.settings.table), die steuern, wie die Anwendung sich verhält (z.B. der Betriebsmodus, ob Routendefinitionen groß-/kleinschreibungssensitiv sind, etc.)

Der mittlere Teil des Codes (die drei Zeilen, die mit `app.get` beginnen) zeigt eine _Router-Definition_. Die `app.get()`-Methode gibt eine Rückruffunktion an, die immer aufgerufen wird, wenn eine HTTP-`GET`-Anfrage mit einem Pfad (`'/'`) relativ zur Standortwurzel erfolgt. Die Rückruffunktion nimmt ein Request- und ein Response-Objekt als Argumente an und ruft [`send()`](https://expressjs.com/en/4x/api.html#res.send) in der Antwort auf, um den String „Hello World!“ zurückzugeben.

Der letzte Block startet den Server auf einem angegebenen Port ('3000') und druckt einen Protokoll-Kommentar in die Konsole. Mit laufendem Server könnten Sie im Browser auf `localhost:3000` gehen, um die Beispielantwort zu sehen.

### Importieren und Erstellen von Modulen

Ein Modul ist eine JavaScript-Bibliothek/Datei, die Sie mit der `require()`-Funktion von Node in anderen Code importieren können. _Express_ selbst ist ein Modul, ebenso wie die Middleware- und Datenbankbibliotheken, die wir in unseren _Express_-Anwendungen verwenden.

Der untenstehende Code zeigt, wie wir ein Modul nach Namen importieren, wobei das _Express_-Framework als Beispiel dient. Zuerst rufen wir die `require()`-Funktion auf, spezifizieren den Namen des Moduls als String (`'express'`) und rufen das zurückgegebene Objekt auf, um eine [Express-Anwendung](https://expressjs.com/en/4x/api.html#app) zu erstellen. Dann können wir auf die Eigenschaften und Funktionen des Anwendungsobjekts zugreifen.

```js
const express = require("express");
const app = express();
```

Sie können auch Ihre eigenen Module erstellen, die auf dieselbe Weise importiert werden können.

> [!NOTE]
> Sie werden _eigene_ Module erstellen wollen, weil dadurch Ihr Code in überschaubare Teile organisiert wird — eine monolithische Einzelfileanwendung ist schwer zu verstehen und zu warten. Die Verwendung von Modulen hilft Ihnen auch bei der Verwaltung Ihres Namensraums, weil nur die Variablen, die Sie explizit exportieren, beim Verwenden eines Moduls importiert werden.

Um Objekte außerhalb eines Moduls verfügbar zu machen, müssen Sie diese lediglich als zusätzliche Eigenschaften auf dem `exports`-Objekt bereitstellen. Zum Beispiel ist das Modul **square.js** unten eine Datei, die `area()`- und `perimeter()`-Methoden exportiert:

```js
exports.area = function (width) {
  return width * width;
};
exports.perimeter = function (width) {
  return 4 * width;
};
```

Wir können dieses Modul mit `require()` importieren und dann die exportierten Methode(n) wie gezeigt aufrufen:

```js
const square = require("./square"); // Here we require() the name of the file without the (optional) .js file extension
console.log(`The area of a square with a width of 4 is ${square.area(4)}`);
```

> [!NOTE]
> Sie können auch einen absoluten Pfad zum Modul angeben (oder einen Namen, wie wir es ursprünglich getan haben).

Wenn Sie ein vollständiges Objekt in einer Zuweisung exportieren möchten, anstatt es eine Eigenschaft nach der anderen aufzubauen, weisen Sie es wie unten gezeigt `module.exports` zu (Sie können dies auch tun, um das Wurzelmodul des Exports ein Konstruktor oder eine andere Funktion zu machen):

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
> Sie können `exports` als [Abkürzung](https://nodejs.org/api/modules.html#modules_exports_shortcut) auf `module.exports` innerhalb eines bestimmten Moduls betrachten. Tatsächlich ist `exports` nur eine Variable, die auf den Wert von `module.exports` gesetzt wird, bevor das Modul ausgewertet wird. Dieser Wert ist eine Referenz zu einem Objekt (leeres Objekt in diesem Fall). Das bedeutet, dass `exports` eine Referenz auf dasselbe Objekt hält, auf das `module.exports` referenziert. Das bedeutet auch, dass durch Zuweisen eines anderen Wertes zu `exports` es nicht mehr an `module.exports` gebunden ist.

Für weitaus mehr Informationen über Module siehe [Module](https://nodejs.org/api/modules.html#modules_modules) (Node-API-Dokumentation).

### Verwendung asynchroner APIs

JavaScript-Code verwendet häufig asynchrone anstelle von synchronen APIs für Vorgänge, die einige Zeit beanspruchen könnten. Eine synchrone API ist eine, bei der jede Operation abgeschlossen werden muss, bevor die nächste Operation starten kann. Zum Beispiel sind die folgenden Protokollfunktionen synchron und werden den Text in der Reihenfolge (Erst, Zweit) an die Konsole ausgeben.

```js
console.log("First");
console.log("Second");
```

Im Gegensatz dazu ist eine asynchrone API eine, bei der die API eine Operation startet und sofort zurückkehrt (bevor die Operation abgeschlossen ist). Sobald die Operation beendet ist, verwendet die API einen Mechanismus, um zusätzliche Operationen auszuführen. Zum Beispiel wird der folgende Code "Zweit, Erst" ausgeben, weil auch wenn die `setTimeout()`-Methode zuerst aufgerufen wird und sofort zurückkehrt, die Operation erst einige Sekunden später abgeschlossen ist.

```js
setTimeout(function () {
  console.log("First");
}, 3000);
console.log("Second");
```

Die Verwendung nicht blockierender asynchroner APIs ist bei Node sogar wichtiger als im Browser, weil _Node_ eine ereignisgesteuerte Single-Thread-Ausführungsumgebung ist. "Single-threaded" bedeutet, dass alle Anfragen an den Server auf demselben Thread ausgeführt werden (anstatt in separate Prozesse ausgegliedert zu werden). Dieses Modell ist hinsichtlich Geschwindigkeit und Serverressourcen extrem effizient, bedeutet jedoch, dass, wenn eine Ihrer Funktionen eine synchrone Methode aufruft, die lange zur Fertigstellung braucht, nicht nur die aktuelle Anfrage blockiert wird, sondern alle anderen Anfragen, die von Ihrer Webanwendung bearbeitet werden.

Es gibt mehrere Möglichkeiten für eine asynchrone API, Ihre Anwendung zu benachrichtigen, dass sie abgeschlossen ist. Die häufigste Methode ist, eine Rückruffunktion zu registrieren, wenn Sie die asynchrone API aufrufen, die dann aufgerufen wird, wenn die Operation abgeschlossen ist. Dies ist der oben verwendete Ansatz.

> [!NOTE]
> Die Verwendung von Rückrufen kann ziemlich "unordentlich" sein, wenn Sie eine Abfolge von abhängigen asynchronen Operationen haben, die in einer bestimmten Reihenfolge ausgeführt werden müssen, da dies zu mehreren Ebenen verschachtelter Rückrufe führt. Dieses Problem ist allgemein als "callback hell" bekannt. Dieses Problem kann durch gute Codierpraktiken (siehe <http://callbackhell.com/>), die Verwendung eines Moduls wie [async](https://www.npmjs.com/package/async), oder das Refactoring des Codes zu nativen JavaScript-Funktionen wie [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) und [async/await](/de/docs/Web/JavaScript/Reference/Statements/async_function) reduziert werden. Node bietet die [`utils.promisify`](https://nodejs.org/api/util.html#utilpromisifyoriginal)-Funktion für die Callbacks → Promise Konvertierung ergonomisch.

> [!NOTE]
> Eine häufige Konvention für Node und Express ist die Verwendung von Error-First-Callbacks. In dieser Konvention ist der erste Wert in Ihren _Callback-Funktionen_ ein Fehlerwert, während nachfolgende Argumente Erfolgsdaten enthalten. Eine gute Erklärung, warum dieser Ansatz nützlich ist, finden Sie in diesem Blog: [The Node.js Way - Understanding Error-First Callbacks](https://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/) (fredkschott.com).

### Erstellen von Routen-Handlern

Im _Hello World_-Express-Beispiel (siehe oben) haben wir eine (Rückruffunktion) Route-Handler-Funktion für HTTP-`GET`-Anfragen an die Standortwurzel (`'/'`) definiert.

```js
app.get("/", function (req, res) {
  res.send("Hello World!");
});
```

Die Rückruffunktion nimmt ein Anfrage- und ein Antwortobjekt als Argumente. In diesem Fall ruft die Methode [`send()`](https://expressjs.com/en/4x/api.html#res.send) auf der Antwort auf, um den String „Hello World!“ zu senden. Es gibt eine [Anzahl anderer Antwortmethoden](https://expressjs.com/en/guide/routing.html#response-methods), um den Anforderungs-Antwort-Zyklus zu beenden, zum Beispiel könnten Sie [`res.json()`](https://expressjs.com/en/4x/api.html#res.json) aufrufen, um eine JSON-Antwort zu senden, oder [`res.sendFile()`](https://expressjs.com/en/4x/api.html#res.sendFile), um eine Datei zu senden.

> [!NOTE]
> Sie können in den Rückruffunktionen beliebige Argumentnamen verwenden; beim Aufruf der Rückruffunktion wird immer das erste Argument die Anfrage und das zweite die Antwort sein. Es macht Sinn, sie so zu benennen, dass Sie das Objekt, mit dem Sie arbeiten, im Körper der Rückruffunktion identifizieren können.

Das _Express-Anwendungsobjekt_ bietet auch Methoden zur Definition von Routen-Handlern für alle anderen HTTP-Verben, die meistens auf die gleiche Weise verwendet werden:

`checkout()`, `copy()`, **`delete()`**, **`get()`**, `head()`, `lock()`, `merge()`, `mkactivity()`, `mkcol()`, `move()`, `m-search()`, `notify()`, `options()`, `patch()`, **`post()`**, `purge()`, **`put()`**, `report()`, `search()`, `subscribe()`, `trace()`, `unlock()`, `unsubscribe()`.

Es gibt eine spezielle Routing-Methode, `app.all()`, die als Antwort auf jede HTTP-Methode aufgerufen wird. Diese wird verwendet, um Middleware-Funktionen an einem bestimmten Pfad für alle Anfragemethoden zu laden. Das folgende Beispiel (aus der Express-Dokumentation) zeigt einen Handler, der für Anfragen an `/secret` ungeachtet des verwendeten HTTP-Verbs (vorausgesetzt, es wird vom [http-Modul](https://nodejs.org/docs/latest/api/http.html#httpmethods) unterstützt) ausgeführt wird.

```js
app.all("/secret", function (req, res, next) {
  console.log("Accessing the secret section…");
  next(); // pass control to the next handler
});
```

Routen ermöglichen es Ihnen, bestimmte Muster von Zeichen in einer URL zu einem Anforderungshandler weiterzuleiten und ihnen als Parameter (als Attribute des Anforderungsobjekts, das als Parameter übergeben wird) zu übergeben.

Oftmals ist es nützlich, Routen-Handler für einen bestimmten Teil einer Website zu gruppieren und sie mit einem gemeinsamen Routen-Präfix zuzugreifen (z.B. könnte eine Seite mit einem Wiki alle wiki-bezogenen Routen in einer Datei haben, auf die mit einem Routen-Präfix von _/wiki/_ zugegriffen wird). In _Express_ wird dies durch die Verwendung des [`express.Router`](https://expressjs.com/en/guide/routing.html#express-router)-Objekts erreicht. Zum Beispiel können wir unsere Wiki-Route in einem Modul namens **wiki.js** erstellen und dann das `Router`-Objekt exportieren, wie unten gezeigt:

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
> Das Hinzufügen von Routen zum `Router`-Objekt ist genau wie das Hinzufügen von Routen zum `app`-Objekt (wie zuvor gezeigt).

Um den Router in unserer Haupt-App-Datei zu verwenden, würden wir das Routenmodul (**wiki.js**) mit `require()` importieren und dann `use()` auf dem Express-Anwendungsobjekt aufrufen, um den Router zum Middleware-Verarbeitungspfad hinzuzufügen. Die beiden Routen wären dann unter `/wiki/` und `/wiki/about/` zugänglich.

```js
const wiki = require("./wiki.js");
// …
app.use("/wiki", wiki);
```

Später zeigen wir Ihnen viel mehr über die Arbeit mit Routen, insbesondere über die Verwendung des `Router`, im verlinkten Abschnitt [Routen und Controller](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes).

### Verwendung von Middleware

Middleware wird in Express-Apps häufig verwendet, von der Bereitstellung statischer Dateien über Fehlerbehandlung bis hin zur Komprimierung von HTTP-Antworten. Während Routenfunktionen den HTTP-Anforderungs-/Antwort-Zyklus durch die Rückgabe einer Antwort an den HTTP-Client beenden, führen Middleware-Funktionen _typischerweise_ eine Operation auf der Anfrage oder Antwort aus und rufen dann die nächste Funktion im "Stack" auf, die mehr Middleware oder ein Routen-Handler sein könnte. Die Reihenfolge, in der Middleware aufgerufen wird, liegt beim App-Entwickler.

> [!NOTE]
> Die Middleware kann beliebige Operationen ausführen, jeden Code ausführen, Änderungen am Anfragen- und Antwortobjekt vornehmen und sie kann _auch den Anforderungs-Antwort-Zyklus beenden_. Wenn sie den Zyklus nicht beendet, muss sie `next()` aufrufen, um die Kontrolle an die nächste Middleware-Funktion zu übergeben (oder die Anforderung bleibt hängen).

Die meisten Apps verwenden _Drittanbieter_-Middleware, um gängige Webentwicklungsaufgaben wie das Arbeiten mit Cookies, Sitzungen, Benutzeranmeldung, Zugriff auf Anforderung `POST` und JSON-Daten, Protokollierung, etc., zu vereinfachen. Sie können eine [Liste von Middleware-Paketen, die von den Express-Teams gepflegt werden](https://expressjs.com/en/resources/middleware.html), finden (die auch andere beliebte Drittanbieter-Pakete umfasst). Andere Express-Pakete sind im npm-Paketmanager verfügbar.

Um Drittanbieter-Middleware zu verwenden, müssen Sie diese zuerst mit npm in Ihre App installieren.
Zum Beispiel, um die [morgan](https://expressjs.com/en/resources/middleware/morgan.html) HTTP-Anfrage-Protokollierer-Middleware zu installieren, würden Sie dies tun:

```bash
npm install morgan
```

Sie könnten dann `use()` auf dem Express-Anwendungsobjekt aufrufen, um die Middleware zum Stack hinzuzufügen:

```js
const express = require("express");
const logger = require("morgan");
const app = express();
app.use(logger("dev"));
// …
```

> [!NOTE]
> Middleware und Routenfunktionen werden in der Reihenfolge aufgerufen, in der sie deklariert wurden. Für einige Middleware ist die Reihenfolge wichtig (zum Beispiel, wenn Session-Middleware von Cookie-Middleware abhängt, muss der Cookie-Handler zuerst hinzugefügt werden). Es ist fast immer der Fall, dass Middleware vor dem Festlegen von Routen aufgerufen wird, oder Ihre Routen-Handler nicht auf Funktionalität zugreifen können, die von Ihrer Middleware hinzugefügt wurde.

Sie können Ihre eigenen Middleware-Funktionen schreiben, und Sie werden es wahrscheinlich tun müssen (wenn nur, um Fehlerbehandlungscode zu erstellen). Der **einzige** Unterschied zwischen einer Middleware-Funktion und einem Routen-Handler-Rückruf besteht darin, dass Middleware-Funktionen ein drittes Argument `next` haben, das Middleware-Funktionen aufgerufen werden, wenn sie nicht diejenige sind, die den Anforderungszyklus abschließt (wenn die Middleware-Funktion aufgerufen wird, enthält sie die _nächste_ Funktion, die aufgerufen werden muss).

Sie können eine Middleware-Funktion zur Verarbeitungskette für _alle Antworten_ mit `app.use()` oder für ein spezifisches HTTP-Verb mit der zugehörigen Methode hinzufügen: `app.get()`, `app.post()`, etc. Routen werden für beide Fälle auf die gleiche Weise angegeben, obwohl die Route optional ist, wenn `app.use()` aufgerufen wird.

Das folgende Beispiel zeigt, wie Sie die Middleware-Funktion mit beiden Ansätzen hinzufügen und mit/ohne Route.

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
> Oben deklarierten wir die Middleware-Funktion separat und setzten sie dann als Rückruf fest. In unserer vorherigen Routen-Handler-Funktion deklarierten wir die Rückruffunktion, wenn sie verwendet wurde. In JavaScript ist beide Ansätze gültig.

Die Express-Dokumentation hat weitaus mehr exzellente Dokumentation über [Verwendung](https://expressjs.com/en/guide/using-middleware.html) und [Schreiben](https://expressjs.com/en/guide/writing-middleware.html) von Express Middleware.

### Bereitstellung statischer Dateien

Sie können die [express.static](https://expressjs.com/en/4x/api.html#express.static)-Middleware verwenden, um statische Dateien, einschließlich Ihrer Bilder, CSS und JavaScript, bereitzustellen (`static()` ist die einzige Middleware-Funktion, die Teil von _Express_ ist). Zum Beispiel würden Sie die folgende Zeile verwenden, um Bilder, CSS-Dateien und JavaScript-Dateien aus einem Verzeichnis namens **public**, auf der gleichen Ebene wie Sie node aufrufen, bereitzustellen:

```js
app.use(express.static("public"));
```

Alle Dateien im öffentlichen Verzeichnis werden bedient, indem der Dateiname (relativ zum Basis-"Public"-Verzeichnis) zu der Basis-URL hinzugefügt wird. So zum Beispiel:

```plain
http://localhost:3000/images/dog.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/about.html
```

Sie können `static()` mehrmals aufrufen, um mehrere Verzeichnisse bereitzustellen. Wenn eine Datei von einer Middleware-Funktion nicht gefunden werden kann, wird sie an die nachfolgende Middleware übergeben (die Reihenfolge, in der Middleware aufgerufen wird, basiert auf Ihrer Deklarationsreihenfolge).

```js
app.use(express.static("public"));
app.use(express.static("media"));
```

Sie können auch ein virtuelles Präfix für Ihre statischen URLs erstellen, anstatt die Dateien zur Basis-URL hinzuzufügen. Zum Beispiel geben Sie hier [einen Mount-Pfad an](https://expressjs.com/en/4x/api.html#app.use), sodass die Dateien mit dem Präfix "/media" geladen werden:

```js
app.use("/media", express.static("public"));
```

Jetzt können Sie die Dateien, die sich im `public`-Verzeichnis befinden, vom `/media`-Pfadpräfix aus laden.

```plain
http://localhost:3000/media/images/dog.jpg
http://localhost:3000/media/video/cat.mp4
http://localhost:3000/media/cry.mp3
```

> [!NOTE]
> Siehe auch [Bereitstellung statischer Dateien in Express](https://expressjs.com/en/starter/static-files.html).

### Fehlerbehandlung

Fehler werden von einer oder mehreren speziellen Middleware-Funktionen behandelt, die vier Argumente statt der üblichen drei haben: `(err, req, res, next)`. Zum Beispiel:

```js
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

Diese können jeden gewünschten Inhalt zurückgeben, müssen aber nach allen anderen `app.use()` und Routencalls aufgerufen werden, damit sie die letzte Middleware im Anforderungsbearbeitungsprozess sind!

Express verfügt über einen integrierten Fehlerbehandler, der sich um alle verbleibenden Fehler in der App kümmert. Diese Standard-Fehlerbehandlungsmiddleware wird am Ende des Middleware-Funktionsstapels hinzugefügt. Wenn Sie einen Fehler an `next()` übergeben und ihn nicht in einem Fehlerbehandler behandeln, wird er vom integrierten Fehlerbehandler behandelt; der Fehler wird mit dem Stapelverfolgung an den Client geschrieben.

> [!NOTE]
> Die Stapelverfolgung ist nicht in der Produktionsumgebung enthalten. Um es im Produktionsmodus auszuführen, müssen Sie die Umgebungsvariable `NODE_ENV` auf `"produktion"` setzen.

> [!NOTE]
> HTTP404 und andere "Fehler"-Statuscodes werden nicht als Fehler behandelt. Wenn Sie diese behandeln möchten, können Sie eine Middleware-Funktion hinzufügen, um dies zu tun. Weitere Informationen finden Sie in den [FAQ](https://expressjs.com/en/starter/faq.html#how-do-i-handle-404-responses).

Weitere Informationen finden Sie unter [Fehlerbehandlung](https://expressjs.com/en/guide/error-handling.html) (Express-Dokumentation).

### Verwendung von Datenbanken

_Express_-Apps können jeden von _Node_ unterstützten Datenbankmechanismus verwenden (_Express_ selbst definiert kein spezifisches zusätzliches Verhalten/Anforderungen für die Datenbankverwaltung). Es gibt viele Optionen, darunter PostgreSQL, MySQL, Redis, SQLite, MongoDB usw.

Um diese verwenden zu können, müssen Sie zuerst den Datenbanktreiber mit npm installieren. Zum Beispiel, um den Treiber für das beliebte NoSQL-MongoDB zu installieren, würden Sie den Befehl verwenden:

```bash
npm install mongodb
```

Die Datenbank selbst kann lokal oder auf einem Cloud-Server installiert werden. In Ihrem Express-Code verlangen Sie den Treiber, verbinden sich mit der Datenbank und führen dann Create-, Read-, Update- und Delete- (CRUD) Operationen aus. Das Beispiel unten (aus der Express-Dokumentation) zeigt, wie Sie "Mammal"-Datensätze mit MongoDB finden können.

Das funktioniert mit älteren Versionen von MongoDB Version ~ 2.2.33:

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

Ein weiterer beliebter Ansatz besteht darin, auf Ihre Datenbank indirekt über einen Object Relational Mapper ("ORM") zuzugreifen. Bei diesem Ansatz definieren Sie Ihre Daten als "Objekte" oder "Modelle" und der ORM mappt diese auf das zugrunde liegende Datenbankformat. Dieser Ansatz hat den Vorteil, dass Sie als Entwickler weiterhin in Begriffen von JavaScript-Objekten denken können anstelle von Datenbanksemantik und dass es einen offensichtlichen Ort gibt, um Validierung und Prüfung von eingehenden Daten durchzuführen. Wir werden später in einem weiteren Artikel mehr über Datenbanken sprechen.

Weitere Informationen finden Sie unter [Datenbankintegration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation).

### Daten rendern (Ansichten)

Template-Engines (auch als „View-Engines“ in _Express_ bezeichnet) erlauben es Ihnen, die _Struktur_ eines Ausgabedokuments in einem Template zu definieren, wobei Platzhalter für Daten verwendet werden, die beim Erstellen einer Seite gefüllt werden. Templates werden oft verwendet, um HTML zu erstellen, können aber auch andere Arten von Dokumenten erzeugen.

Express unterstützt eine Reihe von Template-Engines, insbesondere Pug (früher "Jade"), Mustache und EJS. Jede hat ihre eigenen Stärken für bestimmte Anwendungsfälle (relevante Vergleiche sind leicht über Internetsuche zu finden).
Der Express-Anwendungsgenerator verwendet Jade als Standard, unterstützt jedoch auch mehrere andere.

In Ihrem Anwendungseinstellungscode legen Sie die zu verwendende Template-Engine und den Ort fest, an dem Express die Templates suchen soll, indem Sie die 'views'- und 'view engine'-Einstellungen verwenden, wie unten gezeigt (Sie müssen auch das Paket installieren, das Ihre Template-Bibliothek enthält!):

```js
const express = require("express");
const path = require("path");
const app = express();

// Set directory to contain the templates ('views')
app.set("views", path.join(__dirname, "views"));

// Set view engine to use, in this case 'some_template_engine_name'
app.set("view engine", "some_template_engine_name");
```

Das Erscheinungsbild des Templates hängt von der verwendeten Engine ab. Angenommen, Sie haben eine Template-Datei namens "index.\<template_extension>", die Platzhalter für Datenvariablen namens "title" und "message" enthält, würden Sie [`Response.render()`](https://expressjs.com/en/4x/api.html#res.render) in einer Routen-Handler-Funktion aufrufen, um die HTML-Antwort zu erstellen und zu senden:

```js
app.get("/", function (req, res) {
  res.render("index", { title: "About dogs", message: "Dogs rock!" });
});
```

Weitere Informationen finden Sie unter [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation).

### Dateistruktur

Express macht keine Annahmen hinsichtlich der Struktur oder welche Komponenten Sie verwenden. Routen, Ansichten, statische Dateien und andere anwendungsspezifische Logik können in einer beliebigen Anzahl von Dateien mit beliebiger Verzeichnisstruktur leben. Während es durchaus möglich ist, die gesamte _Express_-Anwendung in einer Datei zu haben, macht es typischerweise Sinn, Ihre Anwendung in Dateien basierend auf der Funktionalität (z.B. Kontoverwaltung, Blogs, Diskussionsforen) und dem architektonischen Problemfeld (z.B. Modell, Ansicht oder Controller, wenn Sie zufällig eine {{Glossary("MVC", "MVC-Architektur")}} verwenden) zu teilen.

In einem späteren Thema verwenden wir den _Express Application Generator_, der ein modulares App-Skelett erstellt, das wir leicht erweitern können, um Webanwendungen zu erstellen.

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben den ersten Schritt in Ihrer Express/Node-Reise abgeschlossen! Sie sollten jetzt die Hauptvorteile von Express und Node verstehen und ungefähr wissen, wie die Hauptteile einer Express-App aussehen könnten (Routen, Middleware, Fehlerbehandlung und Template-Code). Sie sollten auch verstehen, dass Express ein unmeinungsstarkes Framework ist und dass der Weg, wie Sie diese Teile zusammenfügen und die Bibliotheken, die Sie verwenden, weitgehend Ihnen überlassen bleiben!

Natürlich ist Express bewusst ein sehr leichtgewichtiges Webanwendungsframework, sodass ein Großteil seines Nutzens und Potentials von Drittanbieterbibliotheken und -funktionen stammt. Wir werden uns diese in den folgenden Artikeln genauer ansehen. Im nächsten Artikel werden wir uns mit der Einrichtung einer Node-Entwicklungsumgebung befassen, damit Sie einige Express-Codes in Aktion sehen können.

## Siehe auch

- [Module](https://nodejs.org/api/modules.html#modules_modules) (Node API-Dokumentation)
- [Express](https://expressjs.com/) (Startseite)
- [Basisrouting](https://expressjs.com/en/starter/basic-routing.html) (Express-Dokumentation)
- [Routing Guide](https://expressjs.com/en/guide/routing.html) (Express-Dokumentation)
- [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express docs)
- [Using middleware](https://expressjs.com/en/guide/using-middleware.html) (Express docs)
- [Writing middleware for use in Express apps](https://expressjs.com/en/guide/writing-middleware.html) (Express docs)
- [Datenbankintegration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation)
- [Bereitstellung statischer Dateien in Express](https://expressjs.com/en/starter/static-files.html) (Express-Dokumentation)
- [Fehlerbehandlung](https://expressjs.com/en/guide/error-handling.html) (Express-Dokumentation)

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
