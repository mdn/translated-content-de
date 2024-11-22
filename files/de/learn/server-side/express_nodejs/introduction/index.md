---
title: Einführung in Express/Node
slug: Learn/Server-side/Express_Nodejs/Introduction
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{LearnSidebar}}{{NextMenu("Learn/Server-side/Express_Nodejs/development_environment", "Learn/Server-side/Express_Nodejs")}}

In diesem ersten Artikel über Express beantworten wir die Fragen „Was ist Node?“ und „Was ist Express?“ und geben Ihnen einen Überblick darüber, was das Express-Webframework besonders macht. Wir skizzieren die Hauptmerkmale und zeigen Ihnen einige der wichtigsten Bausteine einer Express-Anwendung (obwohl Sie zu diesem Zeitpunkt noch keine Entwicklungsumgebung haben werden, um diese zu testen).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein allgemeines Verständnis der <a href="/de/docs/Learn/Server-side/First_steps">serverseitigen Website-Programmierung</a> und insbesondere der Mechanismen der <a href="/de/docs/Learn/Server-side/First_steps/Client-Server_overview">Client-Server-Interaktionen auf Websites</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit dem, was Express ist und wie es mit Node zusammenhängt, welche Funktionalitäten es bietet und welche die grundlegenden Bausteine einer Express-Anwendung sind.
      </td>
    </tr>
  </tbody>
</table>

## Einführung in Node

[Node](https://nodejs.org/) (oder formeller _Node.js_) ist eine Open-Source-Plattformübergreifende Laufzeitumgebung, die es Entwicklern ermöglicht, alle Arten von serverseitigen Werkzeugen und Anwendungen in {{Glossary("JavaScript", "JavaScript")}} zu erstellen. Die Laufzeit ist für die Verwendung außerhalb eines Browserkontexts (d. h. direkt auf einem Computer oder Server-Betriebssystem) vorgesehen. Aus diesem Grund lässt die Umgebung browserspezifische JavaScript-APIs aus und fügt Unterstützung für traditionellere Betriebssystem-APIs hinzu, darunter HTTP- und Dateisystem-Bibliotheken.

Aus der Sicht der Webserver-Entwicklung hat Node eine Reihe von Vorteilen:

- Hervorragende Leistung! Node wurde entwickelt, um den Durchsatz und die Skalierbarkeit von Webanwendungen zu optimieren und ist eine gute Lösung für viele gängige Webentwicklungsprobleme (z. B. Echtzeit-Webanwendungen).
- Der Code wird in „altmodischem JavaScript“ geschrieben, was bedeutet, dass weniger Zeit mit dem „Kontextwechsel“ zwischen Sprachen verbracht wird, wenn Sie sowohl Client- als auch Serverseitigen Code schreiben.
- JavaScript ist eine relativ neue Programmiersprache und profitiert daher von Verbesserungen im Sprachdesign im Vergleich zu anderen traditionellen Webserver-Sprachen (z. B. Python, PHP usw.) Viele andere neue und beliebte Sprachen werden in JavaScript kompiliert/umgewandelt, sodass Sie auch TypeScript, CoffeeScript, ClojureScript, Scala, LiveScript usw. verwenden können.
- Der node package manager (npm) bietet Zugriff auf Hunderttausende von wiederverwendbaren Paketen. Es hat auch erstklassige Abhängigkeitsauflösung und kann auch verwendet werden, um die meisten Teile der Build-Toolchain zu automatisieren.
- Node.js ist portabel. Es ist verfügbar auf Microsoft Windows, macOS, Linux, Solaris, FreeBSD, OpenBSD, WebOS und NonStop OS. Darüber hinaus wird es von vielen Webhosting-Anbietern gut unterstützt, die oft spezielle Infrastrukturen und Dokumentationen für das Hosting von Node-Sites bereitstellen.
- Es hat ein sehr aktives Ökosystem von Drittanbietern und eine Entwickler-Community, mit vielen Menschen, die bereit sind zu helfen.

Sie können Node.js verwenden, um einen einfachen Webserver mit dem Node-HTTP-Paket zu erstellen.

### Hallo Node.js

Das folgende Beispiel erstellt einen Webserver, der Anfragen jeder Art von HTTP-Anfragen an die URL `http://127.0.0.1:8000/` abhört—wenn eine Anfrage eingeht, antwortet das Skript mit dem String: "Hello World". Wenn Sie Node bereits installiert haben, können Sie die folgenden Schritte ausführen, um das Beispiel auszuprobieren:

1. Öffnen Sie das Terminal (unter Windows das Befehlszeilenprogramm öffnen)
2. Erstellen Sie den Ordner, in dem Sie das Programm speichern möchten, zum Beispiel `test-node`, und geben Sie diesen ein, indem Sie den folgenden Befehl in Ihr Terminal eingeben:

   ```bash
   cd test-node
   ```

3. Erstellen Sie mit Ihrem bevorzugten Texteditor eine Datei mit dem Namen `hello.js` und fügen Sie den folgenden Code ein:

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

Andere gängige Aufgaben bei der Webentwicklung werden von Node selbst nicht direkt unterstützt. Wenn Sie eine spezifische Behandlung für verschiedene HTTP-Verben hinzufügen möchten (z. B. `GET`, `POST`, `DELETE` usw.), Anfragen an verschiedenen URL-Pfaden („Routen“) separat behandeln, statische Dateien bereitstellen oder Vorlagen verwenden möchten, um die Antwort dynamisch zu erstellen, dann wird Node allein nicht viel nützen. Sie müssen entweder den Code selbst schreiben oder können das Rad nicht neu erfinden und ein Web-Framework nutzen!

## Einführung in Express

[Express](https://expressjs.com/) ist das beliebteste Node.js-Webframework und die zugrundeliegende Bibliothek für eine Reihe anderer beliebter Node.js-Frameworks. Es bietet Mechanismen, um:

- Handler für Anfragen mit verschiedenen HTTP-Verben an unterschiedlichen URL-Pfaden (Routen) zu schreiben.
- Sich mit „View“-Rendering-Engines zu integrieren, um Antworten zu generieren, indem Daten in Vorlagen eingefügt werden.
- Gemeinsame Einstellungen für Webanwendungen vorzunehmen, wie z. B. den Port für die Verbindung und den Speicherort der Vorlagen, die für das Rendering der Antwort verwendet werden.
- Zusätzliche Anfrageverarbeitung „Middleware“ jederzeit innerhalb der Anfragenverarbeitungspipeline hinzuzufügen.

Während _Express_ selbst recht minimalist ist, haben Entwickler kompatible Middleware-Pakete erstellt, um nahezu jedes Webentwicklungsproblem zu lösen. Es gibt Bibliotheken, um mit Cookies, Sitzungen, Benutzeranmeldungen, URL-Parametern, `POST`-Daten, Sicherheitsheadern und _vielen_ weiteren zu arbeiten. Eine Liste der Middleware-Pakete, die vom Express-Team gepflegt werden, finden Sie unter [Express Middleware](https://expressjs.com/en/resources/middleware.html) (zusammen mit einer Liste einiger beliebter Pakete von Drittanbietern).

> [!NOTE]
> Diese Flexibilität ist ein zweischneidiges Schwert. Es gibt Middleware-Pakete, um fast jedes Problem oder jede Anforderung anzugehen, aber die richtigen Pakete zu finden, die man verwenden sollte, kann manchmal eine Herausforderung sein. Außerdem gibt es keinen „richtigen Weg“, eine Anwendung zu strukturieren, und viele Beispiele, die Sie möglicherweise im Internet finden, sind nicht optimal oder zeigen nur einen kleinen Teil dessen, was Sie tun müssen, um eine Webanwendung zu entwickeln.

## Woher kommen Node und Express?

Node wurde erstmals 2009, zunächst nur für Linux, veröffentlicht. Der npm Paketmanager wurde 2010 veröffentlicht und 2012 wurde die native Windows-Unterstützung hinzugefügt. Wenn Sie mehr wissen möchten, gehen Sie auf [Wikipedia](https://en.wikipedia.org/wiki/Node.js#History).

Express wurde erstmals im November 2010 veröffentlicht und befindet sich derzeit in der Hauptversion 4 der API. Überprüfen Sie das [Changelog](https://expressjs.com/en/changelog/4x.html) für Informationen zu Änderungen in der aktuellen Version und [GitHub](https://github.com/expressjs/express/blob/master/History.md) für detailliertere historische Versionshinweise.

## Wie populär sind Node und Express?

Die Beliebtheit eines Webframeworks ist wichtig, weil sie ein Indikator dafür ist, ob es weiterhin gepflegt wird und welche Ressourcen in Bezug auf Dokumentation, Zusatzbibliotheken und technischen Support voraussichtlich verfügbar sein werden.

Es gibt kein readily-available und definitives Maß dafür, wie populär serverseitige Frameworks sind (obwohl man die Popularität mit Mechanismen wie der Zählung der Anzahl von GitHub-Projekten und Stack Overflow-Fragen für jede Plattform schätzen kann). Eine bessere Frage ist, ob Node und Express „populär genug“ sind, um die Probleme unpopulärer Plattformen zu vermeiden. Entwickeln sie sich weiter? Können Sie Hilfe bekommen, wenn Sie sie benötigen? Gibt es für Sie die Möglichkeit, bezahlte Arbeit zu bekommen, wenn Sie Express lernen?

Basierend auf der Anzahl hochkarätiger Unternehmen, die Express verwenden, der Anzahl der Personen, die zum Codebase beitragen, und der Anzahl der Personen, die sowohl kostenlosen als auch kostenpflichtigen Support bieten, ist _Express_ in der Tat ein populäres Framework!

## Ist Express ein Meinungs-Framework?

Web-Frameworks bezeichnen sich oft als „Opinionated“ oder „Unopinionated“.

Meinungsframeworks sind diejenigen, die Meinungen darüber haben, wie man eine bestimmte Aufgabe auf die „richtige Weise“ erledigen sollte. Sie unterstützen häufig die schnelle Entwicklung _in einem bestimmten Bereich_ (Lösen von Problemen eines bestimmten Typs), weil der richtige Weg, Dinge zu tun, in der Regel gut verstanden und gut dokumentiert ist. Sie können jedoch weniger flexibel bei der Lösung von Problemen außerhalb ihres Hauptbereichs sein und bieten tendenziell weniger Auswahlmöglichkeiten für die zu verwendenden Komponenten und Ansätze.

Unopinionated Frameworks hingegen haben weit weniger Einschränkungen in Bezug auf die beste Art, Komponenten zusammenzufügen, um ein Ziel zu erreichen, oder sogar welche Komponenten verwendet werden sollten. Sie erleichtern es Entwicklern, die am besten geeigneten Werkzeuge zu verwenden, um eine bestimmte Aufgabe zu erfüllen, wenn auch auf Kosten der Tatsache, dass Sie diese Komponenten selbst finden müssen.

Express ist unopinionated. Sie können fast jede kompatible Middleware, die Sie mögen, in die Anfragenverarbeitungskette einfügen, in fast jeder Reihenfolge, die Sie mögen. Sie können die App in einer Datei oder mehreren Dateien strukturieren und jede Verzeichnisstruktur verwenden. Manchmal haben Sie vielleicht das Gefühl, zu viele Auswahlmöglichkeiten zu haben!

## Wie sieht Express-Code aus?

In einer traditionellen datengesteuerten Website wartet eine Webanwendung auf HTTP-Anfragen des Webbrowsers (oder eines anderen Clients). Wenn eine Anfrage eingeht, arbeitet die Anwendung heraus, welche Aktion basierend auf dem URL-Muster und möglicherweise damit verbundenen Informationen im `POST`-Daten oder `GET`-Daten erforderlich ist. Je nachdem, was erforderlich ist, kann sie dann Informationen aus einer Datenbank lesen oder schreiben oder andere erforderliche Aufgaben ausführen, um die Anfrage zu erfüllen. Die Anwendung gibt dann eine Antwort an den Webbrowser zurück und erstellt oft dynamisch eine HTML-Seite, die der Browser anzeigt, indem die abgerufenen Daten in Platzhalter einer HTML-Vorlage eingefügt werden.

Express bietet Methoden, um zu spezifizieren, welche Funktion für ein bestimmtes HTTP-Verb (`GET`, `POST`, `PUT` usw.) und URL-Muster („Route“) aufgerufen wird, und Methoden, um zu definieren, welche Vorlage („View“) Engine verwendet wird, wo sich die Vorlagendateien befinden und welche Vorlage zum Rendern einer Antwort verwendet wird. Sie können Express-Middleware verwenden, um Unterstützung für Cookies, Sitzungen und Benutzer, `POST`/`GET`-Parameter usw. hinzuzufügen. Sie können jeden von Node unterstützten Datenbankmechanismus verwenden (Express definiert kein datenbankspezifisches Verhalten).

Die folgenden Abschnitte erklären einige der häufigen Dinge, die Sie bei der Arbeit mit _Express_ und _Node_ -Code sehen werden.

### Helloworld Express

Betrachten wir zunächst das Standard-Express-[Hello World](https://expressjs.com/en/starter/hello-world.html)-Beispiel (wir diskutieren jedes Teil hiervon unten und in den folgenden Abschnitten).

> [!NOTE]
> Wenn Sie Node und Express bereits installiert haben (oder wenn Sie sie so installieren, wie im [nächsten Artikel](/de/docs/Learn/Server-side/Express_Nodejs/development_environment) gezeigt), können Sie diesen Code in einer Textdatei namens **app.js** speichern und ihn in einem Bash-Befehlszeilenfenster ausführen, indem Sie aufrufen:
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

Die ersten beiden Zeilen `require()` (importieren) das Express-Modul und erstellen eine [Express-Anwendung](https://expressjs.com/en/4x/api.html#app). Dieses Objekt, das traditionell `app` genannt wird, hat Methoden zum Routing von HTTP-Anfragen, Konfigurieren von Middleware, Rendern von HTML-Views, Registrieren einer Template-Engine und Ändern von [Anwendungseinstellungen](https://expressjs.com/en/4x/api.html#app.settings.table), die steuern, wie die Anwendung funktioniert (z. B. der Modus der Umgebung, ob Routendefinitionen groß- und kleinschreibungssensitiv sind usw.)

Der mittlere Teil des Codes (die drei Zeilen mit `app.get`) zeigt eine _Routendefinition_. Die `app.get()`-Methode spezifiziert eine Callback-Funktion, die immer dann aufgerufen wird, wenn es eine HTTP-`GET`-Anfrage mit einem Pfad (`'/'`) relativ zum Seitenstamm gibt. Die Callback-Funktion nimmt ein Anfragen- und ein Antwortobjekt als Argumente, und ruft [`send()`](https://expressjs.com/en/4x/api.html#res.send) für die Antwort auf, um den String „Hello World!“ zu senden.

Der letzte Abschnitt startet den Server auf einem bestimmten Port (`'3000'`) und druckt einen Log-Kommentar in die Konsole. Wenn der Server läuft, könnten Sie `localhost:3000` in Ihrem Browser besuchen, um die Beispielantwort zu sehen.

### Importieren und Erstellen von Modulen

Ein Modul ist eine JavaScript-Bibliothek/Datei, die Sie mit der `require()`-Funktion von Node in anderen Code importieren können. _Express_ selbst ist ein Modul, ebenso wie die Middleware- und Datenbank-Bibliotheken, die wir in unseren _Express_-Anwendungen verwenden.

Der folgende Code zeigt, wie wir ein Modul nach Namen importieren, am Beispiel des _Express_ Frameworks. Zuerst rufen wir die `require()`-Funktion auf, geben den Namen des Moduls als String an (`'express'`) und rufen dann das zurückgegebene Objekt auf, um eine [Express-Anwendung](https://expressjs.com/en/4x/api.html#app) zu erstellen. Anschließend können wir auf die Eigenschaften und Funktionen des Anwendungsobjekts zugreifen.

```js
const express = require("express");
const app = express();
```

Sie können auch Ihre eigenen Module erstellen, die auf dieselbe Weise importiert werden können.

> [!NOTE]
> Sie _werden_ Ihre eigenen Module erstellen wollen, weil dies es Ihnen ermöglicht, Ihren Code in verwaltbare Teile zu organisieren — eine monolithische Anwendung in einer einzigen Datei ist schwer zu verstehen und zu warten. Die Verwendung von Modulen hilft auch bei der Verwaltung Ihres Namensraums, da nur die Variablen, die Sie explizit exportieren, importiert werden, wenn Sie ein Modul verwenden.

Um Objekte außerhalb eines Moduls zugänglich zu machen, müssen Sie diese einfach als zusätzliche Eigenschaften des `exports`-Objekts verfügbar machen. Zum Beispiel ist das **square.js**-Modul unten eine Datei, die `area()`- und `perimeter()`-Methoden exportiert:

```js
exports.area = function (width) {
  return width * width;
};
exports.perimeter = function (width) {
  return 4 * width;
};
```

Wir können dieses Modul mit `require()` importieren und dann die exportierte(n) Methode(n) aufrufen, wie unten gezeigt:

```js
const square = require("./square"); // Here we require() the name of the file without the (optional) .js file extension
console.log(`The area of a square with a width of 4 is ${square.area(4)}`);
```

> [!NOTE]
> Sie können auch einen absoluten Pfad zum Modul angeben (oder einen Namen, wie wir es anfangs getan haben).

Wenn Sie ein vollständiges Objekt in einer Zuweisung exportieren möchten, anstatt es Eigenschaft für Eigenschaft zu erstellen, weisen Sie es `module.exports` zu, wie unten gezeigt (Sie können dies auch tun, um die Wurzel des Exportsobjekts zu einem Konstruktor oder einer anderen Funktion zu machen):

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
> Sie können `exports` als [Abkürzung](https://nodejs.org/api/modules.html#modules_exports_shortcut) zu `module.exports` innerhalb eines gegebenen Moduls betrachten. Tatsächlich ist `exports` nur eine Variable, die vor der Bewertung des Moduls auf den Wert von `module.exports` gesetzt wird. Dieser Wert ist ein Verweis auf ein Objekt (leeres Objekt in diesem Fall). Dies bedeutet, dass `exports` einen Verweis auf dasselbe Objekt wie `module.exports` enthält. Es bedeutet auch, dass, wenn Sie einen anderen Wert `exports` zuweisen, es nicht mehr an `module.exports` gebunden ist.

Weitere Informationen zu Modulen finden Sie unter [Modules](https://nodejs.org/api/modules.html#modules_modules) (Node API-Dokumentation).

### Verwenden asynchroner APIs

JavaScript-Code verwendet häufig asynchrone anstelle von synchronen APIs für Vorgänge, die einige Zeit zur Fertigstellung benötigen könnten. Eine synchrone API ist eine, bei der jeder Vorgang abgeschlossen sein muss, bevor der nächste Vorgang gestartet werden kann. Zum Beispiel sind die folgenden Logfunktionen synchron und werden den Text in der Konsole in der Reihenfolge drucken (First, Second).

```js
console.log("First");
console.log("Second");
```

Im Gegensatz dazu ist eine asynchrone API eine, bei der die API einen Vorgang startet und sofort zurückkehrt (bevor der Vorgang abgeschlossen ist). Sobald der Vorgang abgeschlossen ist, verwendet die API einen Mechanismus, um weitere Vorgänge auszuführen. Zum Beispiel druckt der untenstehende Code "Second, First", weil, obwohl die `setTimeout()`-Methode zuerst aufgerufen wird und sofort zurückkehrt, der Vorgang nicht innerhalb von mehreren Sekunden abgeschlossen ist.

```js
setTimeout(function () {
  console.log("First");
}, 3000);
console.log("Second");
```

Die Verwendung nicht-blockierender asynchroner APIs ist bei Node noch wichtiger als im Browser, weil _Node_ ein einzelfädiges, ereignisgesteuertes Ausführungsumfeld ist. „Einzelfädig“ bedeutet, dass alle Anfragen an den Server im selben Thread ausgeführt werden (anstatt in separate Prozesse aufgeteilt zu werden). Dieses Modell ist in Bezug auf Geschwindigkeit und Serverressourcen äußerst effizient, bedeutet jedoch, dass, wenn eine Ihrer Funktionen synchrone Methoden aufruft, die lange Zeit benötigen, um abgeschlossen zu werden, sie nicht nur die aktuelle Anfrage blockieren, sondern jede andere Anfrage, die von Ihrer Webanwendung bearbeitet wird.

Es gibt eine Reihe von Möglichkeiten, wie eine asynchrone API Ihrer Anwendung mitteilen kann, dass sie abgeschlossen ist. Am häufigsten wird eine Callback-Funktion registriert, wenn Sie die asynchrone API aufrufen, die aufgerufen wird, wenn der Vorgang abgeschlossen ist. Dies ist der Ansatz, der oben verwendet wird.

> [!NOTE]
> Die Verwendung von Callbacks kann ziemlich „chaotisch“ sein, wenn Sie eine Sequenz von abhängigen asynchronen Operationen haben, die in einer bestimmten Reihenfolge ausgeführt werden müssen, da dies zu mehreren Ebenen von verschachtelten Callbacks führt. Dieses Problem ist allgemein als „Callback-Hölle“ bekannt. Dieses Problem kann durch gute Programmierpraktiken (siehe <http://callbackhell.com/>), die Verwendung eines Moduls wie [async](https://www.npmjs.com/package/async) oder die Umstrukturierung des Codes zu nativen JavaScript-Features wie [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) und [async/await](/de/docs/Web/JavaScript/Reference/Statements/async_function) minimiert werden. Node bietet die [`utils.promisify`](https://nodejs.org/api/util.html#utilpromisifyoriginal)-Funktion, um die Callback → Promise-Konvertierung ergonomisch durchzuführen.

> [!NOTE]
> Eine gängige Konvention für Node und Express ist die Verwendung von Error-first-Callbacks. In dieser Konvention ist der erste Wert in Ihren _Callback-Funktionen_ ein Fehlerwert, während nachfolgende Argumente Erfolgsdaten enthalten. Eine gute Erklärung, warum dieser Ansatz nützlich ist, finden Sie in diesem Blog: [The Node.js Way - Understanding Error-First Callbacks](https://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/) (fredkschott.com).

### Erstellen von Routen-Handlern

In unserem _Hello World_ Express-Beispiel (siehe oben) haben wir eine (Callback-)Routen-Handler-Funktion für HTTP-`GET`-Anfragen an den Seitenstamm (`'/'`) definiert.

```js
app.get("/", function (req, res) {
  res.send("Hello World!");
});
```

Die Callback-Funktion nimmt ein Anfragen- und ein Antwortobjekt als Argumente. In diesem Fall ruft die Methode [`send()`](https://expressjs.com/en/4x/api.html#res.send) für die Antwort auf, um den String „Hello World!“ zu senden. Es gibt eine [Anzahl anderer Antwortmethoden](https://expressjs.com/en/guide/routing.html#response-methods) zum Beenden des Anfrage-/Antwortzyklus. Zum Beispiel könnten Sie [`res.json()`](https://expressjs.com/en/4x/api.html#res.json) aufrufen, um eine JSON-Antwort zu senden oder [`res.sendFile()`](https://expressjs.com/en/4x/api.html#res.sendFile), um eine Datei zu senden.

> [!NOTE]
> Sie können jeden gewünschten Argumentnamen in den Callback-Funktionen verwenden; wenn der Callback aufgerufen wird, wird das erste Argument immer das Anfrageobjekt und das zweite immer das Antwortobjekt sein. Es macht Sinn, sie so zu benennen, dass Sie das Objekt identifizieren können, mit dem Sie im Körper des Callbacks arbeiten.

Das _Express-Anwendungsobjekt_ bietet auch Methoden, um Routen-Handler für alle anderen HTTP-Verben zu definieren, die meist auf die gleiche Weise verwendet werden:

`checkout()`, `copy()`, **`delete()`**, **`get()`**, `head()`, `lock()`, `merge()`, `mkactivity()`, `mkcol()`, `move()`, `m-search()`, `notify()`, `options()`, `patch()`, **`post()`**, `purge()`, **`put()`**, `report()`, `search()`, `subscribe()`, `trace()`, `unlock()`, `unsubscribe()`.

Es gibt eine spezielle Routing-Methode, `app.all()`, die in Antwort auf jede HTTP-Methode aufgerufen wird. Dies wird verwendet, um Middleware-Funktionen auf einem bestimmten Pfad für alle Anfragemethoden zu laden. Das folgende Beispiel (aus der Express-Dokumentation) zeigt einen Handler, der für Anfragen an `/secret` unabhängig vom verwendeten HTTP-Verb (sofern es vom [http-Modul](https://nodejs.org/docs/latest/api/http.html#httpmethods) unterstützt wird) ausgeführt wird.

```js
app.all("/secret", function (req, res, next) {
  console.log("Accessing the secret section…");
  next(); // pass control to the next handler
});
```

Routen ermöglichen Ihnen das Anpassen bestimmter Zeichenfolgenmuster in einer URL, und das Extrahieren einiger Werte aus der URL und diese als Parameter an den Routen-Handler weiterzugeben (als Attribute des Anfragenobjekts, das als Parameter übergeben wird).

Oft ist es nützlich, Routen-Handler für einen bestimmten Teil einer Site zusammenzufassen und sie über ein gemeinsames Routen-Präfix zuzugreifen (z. B. könnte eine Site mit einem Wiki alle wiki-bezogenen Routen in einer Datei haben und sie mit einem Routen-Präfix von _/wiki/_ zugreifen). In _Express_ wird dies erreicht, indem das [`express.Router`](https://expressjs.com/en/guide/routing.html#express-router)-Objekt verwendet wird. Zum Beispiel könnten wir unsere Wiki-Route in einem Modul mit dem Namen **wiki.js** erstellen und dann das `Router`-Objekt wie unten gezeigt exportieren:

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
> Das Hinzufügen von Routen zum `Router`-Objekt ist genauso wie das Hinzufügen von Routen zum `app`-Objekt (wie zuvor gezeigt).

Um den Router in unserer Hauptapp-Datei zu verwenden, würden wir das Routenmodul (**wiki.js**) `require()` und dann `use()` auf das _Express-Anwendungsobjekt_ aufrufen, um den Router dem Middleware-Verarbeitungspfad hinzuzufügen. Die beiden Routen werden dann über `/wiki/` und `/wiki/about/` zugänglich sein.

```js
const wiki = require("./wiki.js");
// …
app.use("/wiki", wiki);
```

Wir zeigen Ihnen später im verlinkten Abschnitt [Routes und Controllers](/de/docs/Learn/Server-side/Express_Nodejs/routes) noch viel mehr über das Arbeiten mit Routen und insbesondere über die Verwendung des `Router`.

### Verwendung von Middleware

Middleware wird in Express-Anwendungen umfangreich genutzt, für Aufgaben wie das Bereitstellen statischer Dateien, Fehlerbehandlung, Komprimierung von HTTP-Antworten. Während Routen-Funktionen den HTTP-Anfrage-Antwort-Zyklus mit der Rückgabe einer Antwort an den HTTP-Client beenden, führen Middleware-Funktionen _typischerweise_ eine Operation an der Anfrage oder Antwort aus und rufen dann die nächste Funktion im „Stack“ auf, die weitere Middleware oder ein Routen-Handler sein könnte. Die Reihenfolge, in der Middleware aufgerufen wird, liegt beim App-Entwickler.

> [!NOTE]
> Die Middleware kann jede Operation durchführen, jeden Code ausführen, Änderungen am Anfrage- und Antwortobjekt vornehmen, und sie kann _auch den Anfrage-Antwort-Zyklus beenden_. Wenn sie den Zyklus nicht beendet, muss sie `next()` aufrufen, um die Kontrolle an die nächste Middleware-Funktion zu übergeben (oder die Anfrage wird hängenbleiben).

Die meisten Apps werden _Drittanbieter_-Middleware nutzen, um gängige Webentwicklung-Aufgaben wie das Arbeiten mit Cookies, Sitzungen, Benutzer-Authentifizierung, Zugriff auf Anfrage-`POST`- und JSON-Daten, Protokollierung usw. zu vereinfachen. Sie können eine [Liste von Middleware-Paketen, die vom Express-Team gepflegt werden](https://expressjs.com/en/resources/middleware.html) (die auch andere beliebte Drittanbieter-Pakete enthält), finden. Andere Express-Pakete sind beim npm-Paketmanager verfügbar.

Um Drittanbieter-Middleware zu verwenden, müssen Sie diese zuerst mit npm in Ihre App installieren. Zum Beispiel, um die [morgan](https://expressjs.com/en/resources/middleware/morgan.html) HTTP-Anfrage-Logger-Middleware zu installieren, würden Sie dies tun:

```bash
npm install morgan
```

Anschließend könnten Sie `use()` auf das _Express-Anwendungsobjekt_ aufrufen, um die Middleware dem Stack hinzuzufügen:

```js
const express = require("express");
const logger = require("morgan");
const app = express();
app.use(logger("dev"));
// …
```

> [!NOTE]
> Middleware- und Routing-Funktionen werden in der Reihenfolge aufgerufen, in der sie deklariert werden. Für einige Middleware ist die Reihenfolge wichtig (zum Beispiel muss die Cookie-Handler-Middleware zuerst hinzugefügt werden, wenn Session-Middleware von ihr abhängt). In der Regel wird Middleware vor der Festlegung von Routen aufgerufen, oder Ihre Routen-Handler haben keinen Zugriff auf die von Ihrer Middleware hinzugefügten Funktionalitäten.

Sie können Ihre eigenen Middleware-Funktionen schreiben, und Sie werden wahrscheinlich müssen (wenn auch nur, um Fehlerbehandlungscode zu erstellen). Der **einzige** Unterschied zwischen einer Middleware-Funktion und einem Routen-Handler-Callback besteht darin, dass Middleware-Funktionen ein drittes Argument `next` haben, das aufgerufen werden soll, wenn sie nicht den Anfrage-Antwort-Zyklus abschließen (wenn die Middleware-Funktion aufgerufen wird, enthält dies die _nächste_ Funktion, die aufgerufen werden muss).

Sie können eine Middleware-Funktion mit `app.use()` der Verarbeitungskette für _alle Antworten_ hinzufügen oder für ein spezifisches HTTP-Verb die zugehörige Methode verwenden: `app.get()`, `app.post()`, usw. Die Routen werden in beiden Fällen auf die gleiche Weise spezifiziert, obwohl die Route optional ist, wenn `app.use()` aufgerufen wird.

Das untenstehende Beispiel zeigt, wie Sie die Middleware-Funktion mit beiden Ansätzen und mit/ohne Route hinzufügen können.

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
> Oben deklarieren wir die Middleware-Funktion separat und setzen sie dann als Callback. In unserer vorherigen Routen-Handler-Funktion deklarieren wir die Callback-Funktion , wann immer sie verwendet wird. Beide Ansätze sind in JavaScript gültig.

Die Express-Dokumentation enthält weit mehr ausgezeichnete Informationen über [die Verwendung](https://expressjs.com/en/guide/using-middleware.html) und [das Schreiben](https://expressjs.com/en/guide/writing-middleware.html) von Express-Middleware.

### Bereitstellen statischer Dateien

Mit der [express.static](https://expressjs.com/en/4x/api.html#express.static) Middleware können Sie statische Dateien bereitstellen, einschließlich Ihrer Bilder, CSS und JavaScript. (`static()` ist die einzige Middleware-Funktion, die tatsächlich **Teil** von _Express_ ist). Zum Beispiel würden Sie die untenstehende Linie verwenden, um Bilder, CSS-Dateien und JavaScript-Dateien aus einem Verzeichnis namens '**public'** auf derselben Ebene, auf der Sie Node aufrufen, zu bedienen:

```js
app.use(express.static("public"));
```

Alle Dateien im public-Verzeichnis werden durch Hinzufügen ihres Dateinamens (verhältnismäßig zum Basis-„Public“-Verzeichnis) zur Basis-URL bedient. So zum Beispiel:

```plain
http://localhost:3000/images/dog.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/about.html
```

Sie können `static()` mehrmals aufrufen, um mehrere Verzeichnisse zu bedienen. Wenn eine Datei von einer Middleware-Funktion nicht gefunden werden kann, wird sie an die nachfolgende Middleware weitergegeben (die Reihenfolge, in der Middleware aufgerufen wird, basiert auf Ihrer Deklarationsreihenfolge).

```js
app.use(express.static("public"));
app.use(express.static("media"));
```

Sie können auch ein virtuelles Präfix für Ihre statischen URLs erstellen, anstatt die Dateien zur Basis-URL hinzufügen zu müssen. Zum Beispiel geben wir hier einen [Mountpfad](https://expressjs.com/en/4x/api.html#app.use) an, sodass die Dateien mit dem Präfix "/media" geladen werden:

```js
app.use("/media", express.static("public"));
```

Nun können Sie die Dateien, die sich im `public`-Verzeichnis befinden, vom `/media`-Pfad-Präfix laden.

```plain
http://localhost:3000/media/images/dog.jpg
http://localhost:3000/media/video/cat.mp4
http://localhost:3000/media/cry.mp3
```

> [!NOTE]
> Siehe auch [Bereitstellen statischer Dateien in Express](https://expressjs.com/en/starter/static-files.html).

### Fehlerbehandlung

Fehler werden durch eine oder mehrere spezielle Middleware-Funktionen behandelt, die vier Argumente anstelle der üblichen drei haben: `(err, req, res, next)`. Zum Beispiel:

```js
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

Diese können jeden erforderlichen Inhalt zurückgeben, müssen jedoch nach allen anderen `app.use()` und Routen-Aufrufen angerufen werden, sodass sie die letzte Middleware im Anfrageverarbeitungsprozess sind!

Express kommt mit einem eingebauten Fehler-Handler, der sich um alle verbleibenden Fehler kümmert, die in der App auftreten könnten. Diese Standard-Fehlerbehandlungs-Middleware-Funktion wird am Ende des Middleware-Funktionsstapels hinzugefügt. Wenn Sie einen Fehler an `next()` übergeben und ihn nicht in einem Fehler-Handler behandeln, wird er vom eingebauten Fehler-Handler behandelt; der Fehler wird zusammen mit dem Stack-Trace an den Client geschrieben.

> [!NOTE]
> Der Stack-Trace wird in der Produktionsumgebung nicht einbezogen. Um es im Produktionsmodus auszuführen, müssen Sie die Umgebungsvariable `NODE_ENV` auf `"production"` setzen.

> [!NOTE]
> HTTP404 und andere "Fehler"-Statuscodes werden nicht als Fehler behandelt. Wenn Sie diese behandeln möchten, können Sie eine Middleware-Funktion hinzufügen, um dies zu tun. Weitere Informationen finden Sie in den [FAQ](https://expressjs.com/en/starter/faq.html#how-do-i-handle-404-responses).

Weitere Informationen finden Sie im Abschnitt [Fehlerbehandlung](https://expressjs.com/en/guide/error-handling.html) (Express-Dokumentation).

### Verwenden von Datenbanken

_Express_-Apps können jeden von _Node_ unterstützten Datenbankmechanismus verwenden (_Express_ selbst definiert kein spezifisches zusätzliches Verhalten/Anforderungen für die Datenbankverwaltung). Es gibt viele Optionen, darunter PostgreSQL, MySQL, Redis, SQLite, MongoDB usw.

Um diese zu verwenden, müssen Sie zuerst den Datenbanktreiber mit npm installieren. Zum Beispiel würden Sie den Treiber für die beliebte NoSQL-Datenbank MongoDB mit folgendem Befehl installieren:

```bash
npm install mongodb
```

Die Datenbank selbst kann lokal oder auf einem Cloud-Server installiert werden. In Ihrem Express-Code verwenden Sie den Treiber, verbinden sich mit der Datenbank und führen dann Erstellungs-, Lese-, Aktualisierungs- und Löschvorgänge (CRUD) aus. Das folgende Beispiel (aus der Express-Dokumentation) zeigt, wie Sie „mammal“-Datensätze mit MongoDB finden können.

Dies funktioniert mit älteren Versionen der MongoDB-Version ~ 2.2.33:

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

Für MongoDB-Version 3.0 und höher:

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

Ein weiterer beliebter Ansatz ist der indirekte Zugriff auf Ihre Datenbank über einen Objekt-Relational-Mapper („ORM“). In diesem Ansatz definieren Sie Ihre Daten als „Objekte“ oder „Modelle“ und der ORM mappt diese auf das zugrunde liegende Datenbankformat. Dieser Ansatz hat den Vorteil, dass sich Entwickler weiterhin in JavaScript-Objekten und nicht in Datenbanksemantiken denken und dass es einen offensichtlichen Ort gibt, um Validierung und Prüfung eingehender Daten durchzuführen. Wir werden später mehr über Datenbanken in einem späteren Artikel sprechen.

Weitere Informationen finden Sie unter [Datenbank-Integration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation).

### Rendering von Daten (Ansichten)

Template-Engines (auch als „View-Engines“ in _Express_ bezeichnet) ermöglichen es Ihnen, die _Struktur_ eines Ausgabedokuments in einer Vorlage anzugeben, indem Sie Platzhalter für Daten verwenden, die beim Generieren einer Seite gefüllt werden. Templates werden oft verwendet, um HTML zu erstellen, können jedoch auch andere Arten von Dokumenten erstellen.

Express unterstützt eine Reihe von Template-Engines, insbesondere Pug (ehemals „Jade“), Mustache und EJS. Jede hat eigene Stärken für die Bewältigung bestimmter Anwendungsfälle (relative Vergleiche könnten leicht über Internetsuche gefunden werden). Der Express-Anwendungsgenerator verwendet Jade als Standard, unterstützt jedoch auch mehrere andere.

In Ihrem Anwendungseinstellungscode legen Sie die zu verwendende Template-Engine und den Ort fest, an dem Express die Vorlagen finden soll, wie in den folgenden Einstellungen „views“ und „view engine“ gezeigt (Sie müssen auch das Paket installieren, das Ihre Template-Bibliothek enthält!)

```js
const express = require("express");
const path = require("path");
const app = express();

// Set directory to contain the templates ('views')
app.set("views", path.join(__dirname, "views"));

// Set view engine to use, in this case 'some_template_engine_name'
app.set("view engine", "some_template_engine_name");
```

Das Erscheinungsbild der Vorlage hängt davon ab, welche Engine Sie verwenden. Angenommen, Sie haben eine Vorlagendatei mit dem Namen "index.\<template_extension>", die Platzhalter für Datenvariablen mit den Namen 'title' und "message" enthält, würden Sie [`Response.render()`](https://expressjs.com/en/4x/api.html#res.render) in einer Routen-Handler-Funktion aufrufen, um die HTML-Antwort zu erstellen und zu senden:

```js
app.get("/", function (req, res) {
  res.render("index", { title: "About dogs", message: "Dogs rock!" });
});
```

Weitere Informationen finden Sie unter [Verwenden von Template-Engines mit Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation).

### Dateistruktur

Express macht in Bezug auf Struktur oder verwendete Komponenten keine Annahmen. Routen, Ansichten, statische Dateien und andere anwendungsspezifische Logik können in beliebig vielen Dateien mit beliebiger Verzeichnisstruktur leben. Während es durchaus möglich ist, die ganze _Express_-Anwendung in einer Datei zu haben, macht es in der Regel Sinn, Ihre Anwendung basierend auf Funktion (z. B. Kontoverwaltung, Blogs, Diskussionsforen) und Architekturproblem-Domäne (z. B. Modell, Ansicht oder Controller, wenn Sie eine {{Glossary("MVC", "MVC-Architektur")}} verwenden) in Dateien aufzuteilen.

In einem späteren Thema werden wir den _Express Application Generator_ verwenden, der ein modulares App-Grundgerüst erstellt, das wir leicht erweitern können, um Webanwendungen zu erstellen.

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben den ersten Schritt auf Ihrer Reise mit Express/Node abgeschlossen! Jetzt sollten Sie die Hauptvorteile von Express und Node verstehen und grob wissen, wie die Hauptteile einer Express-App aussehen könnten (Routen, Middleware, Fehlerbehandlung und Vorlagen-Code). Sie sollten auch verstehen, dass Sie mit Express ein unopinionated Framework haben, wie Sie diese Teile zusammenfügen und welche Bibliotheken Sie verwenden, sind weitgehend Ihnen überlassen!

Natürlich ist Express bewusst ein sehr leichtgewichtiges Webanwendungs-Framework, daher stammt ein großer Teil seines Nutzens und Potentials von Drittanbieter-Bibliotheken und -Funktionen. Wir werden uns diese in den folgenden Artikeln genauer ansehen. In unserem nächsten Artikel werden wir uns mit der Einrichtung einer Node-Entwicklungsumgebung befassen, damit Sie einige Express-Codes in Aktion sehen können.

## Siehe auch

- [Venkat.R - Verwalten mehrerer Node-Versionen](https://medium.com/@ramsunvtech/manage-multiple-node-versions-e3245d5ede44)
- [Module](https://nodejs.org/api/modules.html#modules_modules) (Node API-Dokumente)
- [Express](https://expressjs.com/) (Startseite)
- [Grundlegendes Routing](https://expressjs.com/en/starter/basic-routing.html) (Express-Dokumente)
- [Routingleitfaden](https://expressjs.com/en/guide/routing.html) (Express-Dokumente)
- [Verwendung von Template-Engines mit Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumente)
- [Verwendung von Middleware](https://expressjs.com/en/guide/using-middleware.html) (Express-Dokumente)
- [Schreiben von Middleware für die Verwendung in Express-Apps](https://expressjs.com/en/guide/writing-middleware.html) (Express-Dokumente)
- [Datenbankintegration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumente)
- [Servieren statischer Dateien in Express](https://expressjs.com/en/starter/static-files.html) (Express-Dokumente)
- [Fehlerbehandlung](https://expressjs.com/en/guide/error-handling.html) (Express-Dokumente)

{{NextMenu("Learn/Server-side/Express_Nodejs/development_environment", "Learn/Server-side/Express_Nodejs")}}
