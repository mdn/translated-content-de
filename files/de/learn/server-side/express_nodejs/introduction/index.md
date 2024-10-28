---
title: Einführung in Express/Node
slug: Learn/Server-side/Express_Nodejs/Introduction
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{LearnSidebar}}{{NextMenu("Learn/Server-side/Express_Nodejs/development_environment", "Learn/Server-side/Express_Nodejs")}}

In diesem ersten Artikel zu Express beantworten wir die Fragen "Was ist Node?" und "Was ist Express?" und geben Ihnen einen Überblick darüber, was das Express-Web-Framework besonders macht. Wir werden die Hauptmerkmale umreißen und einige der Hauptbausteine einer Express-Anwendung zeigen (obwohl Sie zu diesem Zeitpunkt noch keine Entwicklungsumgebung haben, um es zu testen).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein allgemeines Verständnis der <a href="/de/docs/Learn/Server-side/First_steps">Server-seitigen Website-Programmierung</a> und insbesondere der Mechanik von <a href="/de/docs/Learn/Server-side/First_steps/Client-Server_overview">Client-Server-Interaktionen in Websites</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit dem, was Express ist und wie es in Node passt, welche Funktionalitäten es bietet und die Hauptbausteine einer Express-Anwendung zu gewinnen.
      </td>
    </tr>
  </tbody>
</table>

## Einführung in Node

[Node](https://nodejs.org/) (oder formeller _Node.js_) ist eine Open-Source-, plattformübergreifende Laufzeitumgebung, die Entwicklern ermöglicht, alle Arten von Server-seitigen Tools und Anwendungen in {{Glossary("JavaScript", "JavaScript")}} zu erstellen. Die Laufzeit ist für die Verwendung außerhalb eines Browser-Kontexts gedacht (d. h. direkt auf einem Computer- oder Server-Betriebssystem laufend). Daher verzichtet die Umgebung auf browser-spezifische JavaScript-APIs und fügt Unterstützung für traditionellere Betriebssystem-APIs, einschließlich HTTP- und Dateisystembibliotheken, hinzu.

Aus der Perspektive der Web-Server-Entwicklung bietet Node eine Reihe von Vorteilen:

- Hervorragende Leistung! Node wurde entwickelt, um den Durchsatz und die Skalierbarkeit in Webanwendungen zu optimieren und bietet eine gute Lösung für viele gängige Webentwicklungsprobleme (z. B. Echtzeit-Webanwendungen).
- Der Code wird in "plain old JavaScript" geschrieben, was bedeutet, dass weniger Zeit mit dem Umgang mit "Kontextwechseln" zwischen Sprachen verschwendet wird, wenn Sie sowohl Client-seitigen als auch Server-seitigen Code schreiben.
- JavaScript ist eine relativ neue Programmiersprache und profitiert von Verbesserungen im Sprachdesign im Vergleich zu anderen traditionellen Web-Server-Sprachen (z. B. Python, PHP usw.). Viele andere neue und beliebte Sprachen kompilieren/konvertieren sich in JavaScript, sodass Sie auch TypeScript, CoffeeScript, ClojureScript, Scala, LiveScript usw. verwenden können.
- Der Node Package Manager (npm) bietet Zugriff auf Hunderttausende von wiederverwendbaren Paketen. Es verfügt auch über eine erstklassige Abhängigkeitsauflösung und kann auch zur Automatisierung der meisten Build-Toolchain verwendet werden.
- Node.js ist portabel. Es ist auf Microsoft Windows, macOS, Linux, Solaris, FreeBSD, OpenBSD, WebOS und NonStop OS verfügbar. Darüber hinaus wird es von vielen Webhosting-Anbietern gut unterstützt, die oft spezifische Infrastrukturen und Dokumentationen für das Hosting von Node-Websites bereitstellen.
- Es hat ein sehr aktives Drittanbieter-Ökosystem und Entwickler-Community mit vielen Leuten, die bereit sind zu helfen.

Sie können Node.js verwenden, um einen einfachen Webserver mit dem Node HTTP-Paket zu erstellen.

### Hallo Node.js

Das folgende Beispiel erstellt einen Webserver, der auf jede Art von HTTP-Anfrage an die URL `http://127.0.0.1:8000/` hört — wenn eine Anfrage empfangen wird, antwortet das Skript mit dem String: "Hello World". Wenn Sie Node bereits installiert haben, können Sie die folgenden Schritte ausführen, um das Beispiel auszuprobieren:

1. Öffnen Sie das Terminal (unter Windows öffnen Sie das Befehlszeilenprogramm)
2. Erstellen Sie den Ordner, in dem Sie das Programm speichern möchten, zum Beispiel `test-node`, und betreten Sie ihn, indem Sie den folgenden Befehl in Ihr Terminal eingeben:

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

4. Speichern Sie die Datei in dem oben erstellten Ordner.
5. Gehen Sie zurück zum Terminal und geben Sie den folgenden Befehl ein:

   ```bash
   node hello.js
   ```

Navigieren Sie schließlich zu `http://localhost:8000` in Ihrem Webbrowser; Sie sollten den Text "**Hello World**" in der oberen linken Ecke einer ansonsten leeren Webseite sehen.

## Web-Frameworks

Andere gängige Webentwicklungstätigkeiten werden nicht direkt von Node unterstützt. Wenn Sie eine spezielle Behandlung für verschiedene HTTP-Verben (z. B. `GET`, `POST`, `DELETE` usw.) hinzufügen möchten, Anfragen an verschiedenen URL-Pfaden ("Routen") separat behandeln, statische Dateien servieren oder Vorlagen verwenden möchten, um die Antwort dynamisch zu erstellen, wird Node allein nicht viel nützen. Sie müssten entweder den Code selbst schreiben, oder Sie können das Rad nicht neu erfinden und ein Web-Framework verwenden!

## Einführung in Express

[Express](https://expressjs.com/) ist das beliebteste Node.js-Web-Framework und die zugrunde liegende Bibliothek für eine Reihe anderer beliebter Node.js-Frameworks. Es bietet Mechanismen zum:

- Schreiben von Handlern für Anfragen mit verschiedenen HTTP-Verben an verschiedenen URL-Pfaden (Routen).
- Integration mit "View"-Render-Engines, um Antworten durch das Einfügen von Daten in Vorlagen zu generieren.
- Festlegen allgemeiner Webanwendungseinstellungen wie der zu verwendenden Portnummer und dem Speicherort der Vorlagen, die zum Erstellen der Antwort verwendet werden.
- Hinzufügen zusätzlicher Anfragenverarbeitungs-"Middleware" an jeder Stelle innerhalb der Anfragenbearbeitungspipeline.

Während _Express_ selbst ziemlich minimalistisch ist, haben Entwickler kompatible Middleware-Pakete erstellt, um fast jedes Webentwicklungsproblem zu adressieren. Es gibt Bibliotheken, um mit Cookies, Sitzungen, Benutzer-Anmeldungen, URL-Parametern, `POST`-Daten, Sicherheits-Headern und _vielen_ mehr zu arbeiten. Eine Liste der von dem Express-Team gepflegten Middleware-Pakete finden Sie bei [Express Middleware](https://expressjs.com/en/resources/middleware.html) (zusammen mit einer Liste einiger beliebter Drittanbieterpakete).

> [!NOTE]
> Diese Flexibilität ist ein zweischneidiges Schwert. Es gibt Middleware-Pakete, um fast jedes Problem oder Anforderung zu adressieren, aber die richtigen Pakete zu finden, kann manchmal eine Herausforderung sein. Es gibt auch keine "richtige Art", eine Anwendung zu strukturieren, und viele Beispiele, die Sie möglicherweise im Internet finden, sind nicht optimal oder zeigen nur einen kleinen Teil dessen, was Sie tun müssen, um eine Webanwendung zu entwickeln.

## Woher kommen Node und Express?

Node wurde erstmals 2009 nur für Linux veröffentlicht. Der npm Package Manager wurde 2010 veröffentlicht und die native Windows-Unterstützung wurde 2012 hinzugefügt. Wenn Sie mehr wissen möchten, tauchen Sie in [Wikipedia](https://en.wikipedia.org/wiki/Node.js#History) ein.

Express wurde erstmals im November 2010 veröffentlicht und befindet sich derzeit in der Hauptversion 4 der API. Sie können den [Changelog](https://expressjs.com/en/changelog/4x.html) überprüfen, um Informationen über Änderungen in der aktuellen Veröffentlichung zu erhalten, und [GitHub](https://github.com/expressjs/express/blob/master/History.md) für detailliertere historische Veröffentlichungsnotizen.

## Wie beliebt sind Node und Express?

Die Beliebtheit eines Web-Frameworks ist wichtig, da sie ein Indikator dafür ist, ob es weiterhin gewartet wird und welche Ressourcen in Bezug auf Dokumentation, Zusatzbibliotheken und technischen Support verfügbar sein werden.

Es gibt keine sofort verfügbare und endgültige Messung zur Beliebtheit von Server-seitigen Frameworks (obwohl man die Beliebtheit durch Mechanismen wie das Zählen der Anzahl von GitHub-Projekten und StackOverflow-Fragen für jede Plattform schätzen kann). Eine bessere Frage ist, ob Node und Express "beliebt genug" sind, um die Probleme unbeliebter Plattformen zu vermeiden. Entwickeln sie sich weiter? Können Sie Hilfe bekommen, wenn Sie sie benötigen? Gibt es eine Gelegenheit, bezahlte Arbeit zu bekommen, wenn Sie Express lernen?

Basierend auf der Anzahl hochkarätiger Unternehmen, die Express verwenden, der Anzahl der Personen, die zum Code beitragen, und der Anzahl der Personen, die sowohl kostenlose als auch kostenpflichtige Unterstützung leisten, dann ja, _Express_ ist ein beliebtes Framework!

## Ist Express meinungsstark?

Web-Frameworks bezeichnen sich oft als "meinungsstark" oder "unmeinungsstark".

Meinungsstarke Frameworks sind solche mit Meinungen darüber, wie eine bestimmte Aufgabe "richtig" zu handhaben ist. Sie unterstützen oft die schnelle Entwicklung _in einem bestimmten Bereich_ (Lösung von Problemen eines bestimmten Typs), da der richtige Weg, etwas zu tun, in der Regel gut verstanden und gut dokumentiert ist. Sie können jedoch weniger flexibel bei der Lösung von Problemen außerhalb ihres Hauptgebiets sein und bieten tendenziell weniger Auswahlmöglichkeiten in Bezug auf die verwendeten Komponenten und Ansätze.

Nicht meinungsstarke Frameworks hingegen haben weit weniger Einschränkungen bei den besten Methoden, um Komponenten zusammenzuführen, um ein Ziel zu erreichen, oder sogar, welche Komponenten verwendet werden sollen. Sie erleichtern es Entwicklern, die am besten geeigneten Tools zu verwenden, um eine bestimmte Aufgabe zu erledigen, wenn auch mit dem Nachteil, dass Sie diese Komponenten selbst finden müssen.

Express ist nicht meinungsstark. Sie können fast jede kompatible Middleware, die Sie mögen, in die Anfragenverarbeitungskette einfügen, in nahezu beliebiger Reihenfolge. Sie können die App in einer Datei oder in mehreren Dateien und mit jeder Verzeichnisstruktur strukturieren. Sie haben manchmal das Gefühl, dass Sie zu viele Auswahlmöglichkeiten haben!

## Wie sieht Express-Code aus?

In einer traditionellen datengesteuerten Website wartet eine Webanwendung auf HTTP-Anfragen von einem Webbrowser (oder einem anderen Client). Wenn eine Anfrage empfangen wird, arbeitet die Anwendung heraus, welche Aktion basierend auf dem URL-Muster und möglicherweise assoziierter Informationen, die in `POST`-Daten oder `GET`-Daten enthalten sind, erforderlich ist. Abhängig davon, was erforderlich ist, kann es dann Informationen aus einer Datenbank lesen oder schreiben oder andere Aufgaben ausführen, die zur Erfüllung der Anfrage erforderlich sind. Die Anwendung gibt dann eine Antwort an den Webbrowser zurück und erstellt oft dynamisch eine HTML-Seite, die der Browser anzeigt, indem die abgerufenen Daten in Platzhalter in einer HTML-Vorlage eingefügt werden.

Express bietet Methoden, um festzulegen, welche Funktion für ein bestimmtes HTTP-Verb (`GET`, `POST`, `PUT` usw.) und URL-Muster ("Route") aufgerufen wird, und Methoden, um festzulegen, welche Vorlage ("view") verwendet wird, wo Vorlagendateien sich befinden und welche Vorlage zum Erstellen einer Antwort verwendet werden soll. Sie können Express-Middleware verwenden, um Unterstützung für Cookies, Sitzungen und Benutzer hinzuzufügen, `POST`/`GET`-Parameter usw. abrufen. Sie können jeden von Node unterstützten Datenbankmechanismus verwenden (Express definiert kein spezifisches verhaltensbezogenes Verhalten in Bezug auf Datenbanken).

Die folgenden Abschnitte erklären einige der häufigen Dinge, die Sie bei der Arbeit mit _Express_ und _Node_ Code sehen werden.

### Helloworld Express

Zuerst betrachten wir das Standard-Express [Hello World](https://expressjs.com/en/starter/hello-world.html) Beispiel (wir besprechen jeden Teil davon unten und in den folgenden Abschnitten).

> [!NOTE]
> Wenn Sie Node und Express bereits installiert haben (oder wenn Sie sie wie im [nächsten Artikel](/de/docs/Learn/Server-side/Express_Nodejs/development_environment) gezeigt installieren), können Sie diesen Code in einer Textdatei namens **app.js** speichern und ihn in einem Bash-Befehlsfenster aufrufen:
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

Die ersten beiden Zeilen `require()` (importieren) das Express-Modul und erstellen eine [Express-Anwendung](https://expressjs.com/en/4x/api.html#app). Dieses Objekt, das traditionell `app` genannt wird, verfügt über Methoden zum Routing von HTTP-Anfragen, Konfigurieren von Middleware, Rendern von HTML-Ansichten, Registrieren einer Vorlage und Ändern von [Anwendungseinstellungen](https://expressjs.com/en/4x/api.html#app.settings.table), die steuern, wie die Anwendung sich verhält (z. B. der Umgebungmodus, ob Routendefinitionen groß- und kleinsensitiv sind usw.).

Der mittlere Teil des Codes (die drei Zeilen, die mit `app.get` beginnen) zeigt eine _Routendefinition_. Die `app.get()` Methode spezifiziert eine Callback-Funktion, die immer dann aufgerufen wird, wenn eine HTTP `GET`-Anfrage mit einem Pfad (`'/'`) relativ zum Site-Root erfolgt. Die Callback-Funktion nimmt ein Anfragen- und ein Antwortobjekt als Argumente entgegen und ruft [`send()`](https://expressjs.com/en/4x/api.html#res.send) auf der Antwort auf, um den String "Hello World!" zurückzugeben.

Der letzte Block startet den Server auf einem bestimmten Port ('3000') und gibt einen Log-Kommentar in der Konsole aus. Mit laufendem Server könnten Sie zu `localhost:3000` in Ihrem Browser gehen, um die Beispielantwort zu sehen.

### Importieren und Erstellen von Modulen

Ein Modul ist eine JavaScript-Bibliothek/-Datei, die Sie unter Verwendung der `require()`-Funktion von Node in anderen Code importieren können. _Express_ selbst ist ein Modul, ebenso wie die Middleware- und Datenbankbibliotheken, die wir in unseren _Express_-Anwendungen verwenden.

Der folgende Code zeigt, wie wir ein Modul nach Namen importieren, wobei das _Express_-Framework als Beispiel dient. Zuerst rufen wir die `require()`-Funktion auf und spezifizieren den Namen des Moduls als String (`'express'`) und rufen das zurückgegebene Objekt auf, um eine [Express-Anwendung](https://expressjs.com/en/4x/api.html#app) zu erstellen. Wir können dann auf die Eigenschaften und Funktionen des Anwendungsobjekts zugreifen.

```js
const express = require("express");
const app = express();
```

Sie können auch Ihre eigenen Module erstellen, die auf die gleiche Weise importiert werden können.

> [!NOTE]
> Sie _möchten_ Ihre eigenen Module erstellen, da dies Ihnen ermöglicht, Ihren Code in überschaubare Teile zu organisieren — eine monolithische Einzeldatei-Anwendung ist schwer zu verstehen und zu warten. Die Verwendung von Modulen hilft Ihnen auch, Ihren Namensraum zu verwalten, da nur die Variablen, die Sie explizit exportieren, importiert werden, wenn Sie ein Modul verwenden.

Um Objekte außerhalb eines Moduls verfügbar zu machen, müssen Sie sie nur als zusätzliche Eigenschaften auf dem `exports`-Objekt bereitstellen. Zum Beispiel ist das **square.js**-Modul unten eine Datei, die `area()`- und `perimeter()`-Methoden exportiert:

```js
exports.area = function (width) {
  return width * width;
};
exports.perimeter = function (width) {
  return 4 * width;
};
```

Wir können dieses Modul mit `require()` importieren und dann die exportierten Methode(n) wie folgt aufrufen:

```js
const square = require("./square"); // Here we require() the name of the file without the (optional) .js file extension
console.log(`The area of a square with a width of 4 is ${square.area(4)}`);
```

> [!NOTE]
> Sie können auch einen absoluten Pfad zum Modul angeben (oder einen Namen, wie wir es anfangs getan haben).

Wenn Sie ein komplettes Objekt in einer Zuweisung exportieren möchten, anstatt es Eigenschaft für Eigenschaft aufzubauen, weisen Sie es `module.exports` zu, wie unten dargestellt (Sie können dies auch tun, um die Wurzel des Exportobjekts zu einem Konstruktor oder einer anderen Funktion zu machen):

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
> Sie können `exports` als eine [Abkürzung](https://nodejs.org/api/modules.html#modules_exports_shortcut) für `module.exports` innerhalb eines bestimmten Moduls betrachten. Tatsächlich ist `exports` nur eine Variable, die zum Wert von `module.exports` initialisiert wird, bevor das Modul ausgewertet wird. Dieser Wert ist eine Referenz auf ein Objekt (in diesem Fall ein leeres Objekt). Das bedeutet, dass `exports` eine Referenz auf dasselbe Objekt enthält, auf das `module.exports` verweist. Es bedeutet auch, dass, wenn Sie einen anderen Wert an `exports` zuweisen, es nicht mehr mit `module.exports` verknüpft ist.

Für viel mehr Informationen über Module siehe [Module](https://nodejs.org/api/modules.html#modules_modules) (Node API-Dokumentation).

### Verwendung asynchroner APIs

JavaScript-Code verwendet häufig asynchrone statt synchroner APIs für Operationen, die einige Zeit in Anspruch nehmen können. Eine synchrone API ist eine, bei der jede Operation abgeschlossen sein muss, bevor die nächste Operation gestartet werden kann. Zum Beispiel sind die folgenden Log-Funktionen synchron und werden den Text nacheinander in die Konsole drucken (Erster, Zweiter).

```js
console.log("First");
console.log("Second");
```

Im Gegensatz dazu ist eine asynchrone API eine, bei der die API eine Operation startet und sofort zurückkehrt (bevor die Operation abgeschlossen ist). Sobald die Operation beendet ist, wird die API einen Mechanismus verwenden, um zusätzliche Operationen auszuführen. Zum Beispiel wird der Code unten "Zweiter, Erster" drucken, weil obwohl die `setTimeout()`-Methode zuerst aufgerufen wird und sofort zurückkehrt, die Operation für einige Sekunden nicht abgeschlossen ist.

```js
setTimeout(function () {
  console.log("First");
}, 3000);
console.log("Second");
```

Die Verwendung nicht-blockierender asynchroner APIs ist bei Node noch wichtiger als im Browser, da _Node_ eine single-threaded ereignisgesteuerte Ausführungsumgebung ist. "Single-threaded" bedeutet, dass alle Anfragen an den Server im selben Thread ausgeführt werden (anstatt in separate Prozesse gesendet zu werden). Dieses Modell ist in Bezug auf Geschwindigkeit und Serverressourcen äußerst effizient, aber es bedeutet, dass wenn eine Ihrer Funktionen synchrone Methoden aufruft, die lange Zeit in Anspruch nehmen, sie nicht nur die aktuelle Anfrage blockieren, sondern jede andere Anfrage, die von Ihrer Webanwendung behandelt wird.

Es gibt eine Reihe von Möglichkeiten, wie eine asynchrone API Ihrer Anwendung mitteilen kann, dass sie abgeschlossen ist. Der häufigste Weg ist, eine Callback-Funktion zu registrieren, wenn Sie die asynchrone API aufrufen, die aufgerufen wird, wenn die Operation abgeschlossen ist. Dies ist der Ansatz, der oben verwendet wird.

> [!NOTE]
> Die Verwendung von Callbacks kann ziemlich "chaotisch" sein, wenn Sie eine Abfolge abhängiger asynchroner Operationen haben, die in bestimmter Reihenfolge ausgeführt werden müssen, weil dies zu mehreren Ebenen von verschachtelten Callbacks führt. Dieses Problem ist allgemein bekannt als "Callback-Hölle". Dieses Problem kann durch gute Programmierpraktiken verringert werden (siehe <http://callbackhell.com/>), durch Verwendung eines Moduls wie [async](https://www.npmjs.com/package/async) oder durch Refactoring des Codes auf native JavaScript-Funktionen wie [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) und [async/await](/de/docs/Web/JavaScript/Reference/Statements/async_function). Node bietet die Funktion [`utils.promisify`](https://nodejs.org/api/util.html#utilpromisifyoriginal), um die Callback- zu Promise-Konvertierung ergonomisch vorzunehmen.

> [!NOTE]
> Eine gängige Konvention für Node und Express ist die Verwendung von error-first Callbacks. In dieser Konvention ist der erste Wert in Ihren _Callback-Funktionen_ ein Fehlerwert, während nachfolgende Argumente Erfolgsdaten enthalten. Eine gute Erklärung, warum dieser Ansatz nützlich ist, finden Sie in diesem Blog: [The Node.js Way - Understanding Error-First Callbacks](https://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/) (fredkschott.com).

### Erstellen von Routinenhandlern

In unserem _Hello World_ Express-Beispiel (siehe oben) haben wir eine (Callback-)Routinenhandlerfunktion für HTTP `GET`-Anfragen an das Site-Root (`'/'`) definiert.

```js
app.get("/", function (req, res) {
  res.send("Hello World!");
});
```

Die Callback-Funktion nimmt ein Anfragen- und ein Antwortobjekt als Argumente entgegen. In diesem Fall ruft die Methode [`send()`](https://expressjs.com/en/4x/api.html#res.send) auf der Antwort auf, um den String "Hello World!" zurückzugeben. Es gibt eine [Anzahl anderer Antwortmethoden](https://expressjs.com/en/guide/routing.html#response-methods), um den Anfragen-/Antwortzyklus zu beenden. Sie könnten beispielsweise [`res.json()`](https://expressjs.com/en/4x/api.html#res.json) aufrufen, um eine JSON-Antwort zu senden, oder [`res.sendFile()`](https://expressjs.com/en/4x/api.html#res.sendFile), um eine Datei zu senden.

> [!NOTE]
> Sie können beliebige Argumentnamen in den Callback-Funktionen verwenden; wenn der Callback aufgerufen wird, ist das erste Argument immer die Anfrage und das zweite immer die Antwort. Es ist sinnvoll, sie so zu benennen, dass Sie das Objekt, mit dem Sie im Callback arbeiten, identifizieren können.

Das _Express-Anwendungsobjekt_ bietet auch Methoden, um Routinenhandler für alle anderen HTTP-Verben zu definieren, die meistens auf genau die gleiche Weise verwendet werden:

`checkout()`, `copy()`, **`delete()`**, **`get()`**, `head()`, `lock()`, `merge()`, `mkactivity()`, `mkcol()`, `move()`, `m-search()`, `notify()`, `options()`, `patch()`, **`post()`**, `purge()`, **`put()`**, `report()`, `search()`, `subscribe()`, `trace()`, `unlock()`, `unsubscribe()`.

Es gibt eine spezielle Routinemethode, `app.all()`, die als Antwort auf jede HTTP-Methode aufgerufen wird. Dies wird verwendet, um Middleware-Funktionen an einem bestimmten Pfad für alle Anfragemethoden zu laden. Das folgende Beispiel (aus der Express-Dokumentation) zeigt einen Handler, der für Anfragen an `/secret` unabhängig von dem verwendeten HTTP-Verb ausgeführt wird (falls es vom [http-Modul](https://nodejs.org/docs/latest/api/http.html#httpmethods) unterstützt wird).

```js
app.all("/secret", function (req, res, next) {
  console.log("Accessing the secret section…");
  next(); // pass control to the next handler
});
```

Routen ermöglichen es Ihnen, bestimmte Muster von Zeichen in einer URL zu erkennen und einige Werte aus der URL zu extrahieren und als Parameter an den Routinenhandler zu übergeben (als Attribute des Anfragenobjekts, das als Parameter übergeben wird).

Oft ist es nützlich, Routenhandler für einen bestimmten Teil einer Site zusammenzufassen und auf sie mit einem gemeinsamen Präfix zuzugreifen (z. B. könnte eine Site mit einem Wiki alle wiki-bezogenen Routen in einer Datei haben und sie mit einem Routenpräfix von _/wiki/_ aufgerufen werden). In _Express_ wird dies durch Verwendung des [`express.Router`](https://expressjs.com/en/guide/routing.html#express-router) Objekts erreicht. Zum Beispiel können wir unsere Wiki-Route in einem Modul namens **wiki.js** erstellen und dann das `Router`-Objekt exportieren, wie unten gezeigt:

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

Um den Router in unserer Haupt-App-Datei zu verwenden, müssten wir das Routemodul (**wiki.js**) `require()`, dann `use()` auf der _Express_-Anwendung aufrufen, um den Router in die Middleware-Verarbeitungskette aufzunehmen. Die beiden Routen wären dann von `/wiki/` und `/wiki/about/` aus erreichbar.

```js
const wiki = require("./wiki.js");
// …
app.use("/wiki", wiki);
```

Wir zeigen Ihnen später im verlinkten Abschnitt [Routen und Controller](/de/docs/Learn/Server-side/Express_Nodejs/routes) mehr über die Arbeit mit Routen und insbesondere über die Verwendung des `Router`.

### Verwendung von Middleware

Middleware wird in Express-Apps extensiv genutzt, für Aufgaben vom Bereitstellen statischer Dateien bis hin zur Fehlerbehandlung und Komprimierung von HTTP-Antworten. Während Routinenfunktionen den HTTP-Anfrage-Antwort-Zyklus durch Rückgabe einer Antwort an den HTTP-Client beenden, führen Middleware-Funktionen _typischerweise_ einige Operationen an der Anfrage oder Antwort aus und rufen dann die nächste Funktion im "Stack" auf, die mehr Middleware oder ein Routinenhandler sein könnte. Die Reihenfolge, in der Middleware aufgerufen wird, liegt im Ermessen des App-Entwicklers.

> [!NOTE]
> Middleware kann jede beliebige Operation ausführen, jeden beliebigen Code ausführen, Änderungen am Anfrage- und Antwortobjekt vornehmen, und es kann _auch den Anfrage-Antwort-Zyklus beenden_. Wenn es den Zyklus nicht beendet, muss es `next()` aufrufen, um die Kontrolle an die nächste Middleware-Funktion zu übergeben (oder die Anfrage bleibt hängen).

Die meisten Apps verwenden _Drittanbieter_-Middleware, um gängige Webentwicklungstätigkeiten wie das Arbeiten mit Cookies, Sitzungen, Benutzer-Authentifizierungen, Zugriff auf Anfragen-`POST` und JSON-Daten, Logging usw. zu vereinfachen. Eine Liste der von dem Express-Team gepflegten Middleware-Pakete finden Sie bei [Express Middleware](https://expressjs.com/en/resources/middleware.html) (die auch andere beliebte Drittanbieter-Pakete enthält). Weitere Express-Pakete sind im npm Package Manager verfügbar.

Um Drittanbieter-Middleware zu verwenden, müssen Sie sie zuerst mit npm in Ihrer App installieren. Um beispielsweise das [morgan](https://expressjs.com/en/resources/middleware/morgan.html) HTTP-Anfrage-Logger-Middleware zu installieren, würden Sie dies tun:

```bash
npm install morgan
```

Sie könnten dann `use()` auf das _Express-Anwendungsobjekt_ aufrufen, um die Middleware dem Stack hinzuzufügen:

```js
const express = require("express");
const logger = require("morgan");
const app = express();
app.use(logger("dev"));
// …
```

> [!NOTE]
> Middleware und Routing-Funktionen werden in der Reihenfolge aufgerufen, in der sie deklariert werden. Für einige Middleware ist die Reihenfolge wichtig (zum Beispiel, wenn Sitzungsmiddleware von Cookie-Middleware abhängt, dann muss der Cookie-Handler zuerst hinzugefügt werden). Es ist fast immer der Fall, dass Middleware vor dem Setzen von Routen aufgerufen wird, oder Ihre Routinenhandler haben keinen Zugriff auf Funktionalität, die von Ihrer Middleware hinzugefügt wurde.

Sie können Ihre eigenen Middleware-Funktionen schreiben und Sie werden wahrscheinlich müssen (wenigstens um Fehlerbehandlungscode zu erstellen). Der **einzige** Unterschied zwischen einer Middleware-Funktion und einer Routinenhandler-Callback-Funktion besteht darin, dass Middleware-Funktionen ein drittes Argument `next` haben, das Middleware-Funktionen aufrufen sollen, wenn sie nicht diejenige sind, die den Anfragenzyklus abschließt (wenn die Middleware-Funktion aufgerufen wird, enthält dies die _nächste_ Funktion, die aufgerufen werden muss).

Sie können eine Middleware-Funktion zur Verarbeitungskette für _alle Antworten_ mit `app.use()` hinzufügen oder für ein bestimmtes HTTP-Verb verwenden Sie die zugehörige Methode: `app.get()`, `app.post()` usw. Routen werden in beiden Fällen auf die gleiche Weise spezifiziert, obwohl die Route beim Aufrufen von `app.use()` optional ist.

Das folgende Beispiel zeigt, wie Sie die Middleware-Funktion mit beiden Ansätzen und mit/ohne Route hinzufügen können.

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
> Oben deklarieren wir die Middleware-Funktion separat und legen sie dann als Callback fest. In unserer vorherigen Routinenhandler-Funktion haben wir die Callback-Funktion deklariert, als sie verwendet wurde. In JavaScript ist beides gültig.

Die Express-Dokumentation hat viele weitere ausgezeichnete Dokumentationen über [die Verwendung](https://expressjs.com/en/guide/using-middleware.html) und [das Schreiben](https://expressjs.com/en/guide/writing-middleware.html) von Express-Middleware.

### Bereitstellen statischer Dateien

Sie können die [express.static](https://expressjs.com/en/4x/api.html#express.static)-Middleware verwenden, um statische Dateien bereitzustellen, einschließlich Ihrer Bilder, CSS und JavaScript (`static()` ist die einzige Middleware-Funktion, die tatsächlich **Teil** von _Express_ ist). Zum Beispiel würden Sie die folgende Zeile verwenden, um Bilder, CSS-Dateien und JavaScript-Dateien aus einem Verzeichnis namens '**public'** auf derselben Ebene wie dort, wo Sie Node aufrufen, bereitzustellen:

```js
app.use(express.static("public"));
```

Alle Dateien im öffentlichen Verzeichnis werden bereitgestellt, indem ihr Dateiname (_relativ_ zum Basisverzeichnis "public") an die Basis-URL hinzugefügt wird. So ist beispielsweise:

```plain
http://localhost:3000/images/dog.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/about.html
```

Sie können `static()` mehrmals aufrufen, um mehrere Verzeichnisse bereitzustellen. Wenn eine Datei von einer Middleware-Funktion nicht gefunden werden kann, wird sie an die nachfolgende Middleware weitergegeben (die Reihenfolge, in der Middleware aufgerufen wird, basiert auf Ihrer Deklarationsreihenfolge).

```js
app.use(express.static("public"));
app.use(express.static("media"));
```

Sie können auch ein virtuelles Präfix für Ihre statischen URLs erstellen, anstatt die Dateien zur Basis-URL hinzuzufügen. Zum Beispiel spezifizieren wir hier einen [mount path](https://expressjs.com/en/4x/api.html#app.use), sodass die Dateien mit dem Präfix "/media" geladen werden:

```js
app.use("/media", express.static("public"));
```

Nun können Sie die Dateien, die sich im `public` Verzeichnis befinden, vom `/media` Pfadpräfix laden.

```plain
http://localhost:3000/media/images/dog.jpg
http://localhost:3000/media/video/cat.mp4
http://localhost:3000/media/cry.mp3
```

> [!NOTE]
> Siehe auch [Bereitstellung statischer Dateien in Express](https://expressjs.com/en/starter/static-files.html).

### Fehlermanagement

Fehler werden von einer oder mehreren speziellen Middleware-Funktionen behandelt, die vier Argumente haben, statt der üblichen drei: `(err, req, res, next)`. Zum Beispiel:

```js
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

Diese Funktionen können beliebige gewünschte Inhalte zurückgeben, müssen jedoch nach allen anderen `app.use()` und Routenaufrufen aufgerufen werden, sodass sie die letzte Middleware im Anfrageverarbeitungsprozess sind!

Express kommt mit einem eingebauten Fehler-Handler, der alle verbleibenden Fehler behandelt, die in der App auftreten könnten. Diese Standard-Fehlerbehandlungs-Middleware-Funktion wird am Ende des Middleware-Funktionsstapels hinzugefügt. Wenn Sie einen Fehler an `next()` übergeben und ihn nicht in einem Fehler-Handler behandeln, wird er von dem eingebauten Fehler-Handler behandelt; der Fehler wird zusammen mit dem Stack-Trace an den Client geschrieben.

> [!NOTE]
> Der Stack-Trace ist in der Produktionsumgebung nicht enthalten. Um es im Produktionsmodus auszuführen, müssen Sie die Umgebungsvariable `NODE_ENV` auf `"production"` setzen.

> [!NOTE]
> HTTP404 und andere "error" Statuscodes werden nicht als Fehler behandelt. Wenn Sie diese verwalten möchten, können Sie eine Middleware-Funktion hinzufügen, um dies zu tun. Weitere Informationen finden Sie in den [FAQ](https://expressjs.com/en/starter/faq.html#how-do-i-handle-404-responses).

Weitere Informationen finden Sie unter [Fehlerbehandlung](https://expressjs.com/en/guide/error-handling.html) (Express-Dokumentation).

### Verwendung von Datenbanken

_Express_-Apps können jeden Datenbankmechanismus verwenden, der von _Node_ unterstützt wird (_Express_ selbst definiert kein spezifisches zusätzliches Verhalten/Anforderungen für das Datenbankmanagement). Es gibt viele Optionen, einschließlich PostgreSQL, MySQL, Redis, SQLite, MongoDB usw.

Um diese zu verwenden, müssen Sie zuerst den Datenbank-Treiber mit npm installieren. Um beispielsweise den Treiber für das beliebte NoSQL MongoDB zu installieren, würden Sie den Befehl verwenden:

```bash
npm install mongodb
```

Die Datenbank selbst kann lokal oder auf einem Cloud-Server installiert werden. In Ihrem Express-Code können Sie den Treiber `require()`, eine Verbindung zur Datenbank herstellen und dann Erstellen-, Lese-, Aktualisierungs- und Löschoperationen (CRUD) durchführen. Das Beispiel unten (aus der Express-Dokumentation) zeigt, wie Sie "Säugetier"-Datensätze mit MongoDB finden könnten.

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

Ein weiterer beliebter Ansatz besteht darin, auf Ihre Datenbank indirekt über einen Objekt-Relationalen Mapper ("ORM") zuzugreifen. In diesem Ansatz definieren Sie Ihre Daten als "Objekte" oder "Modelle" und der ORM mappt diese auf das zugrunde liegende Datenbankformat. Dieser Ansatz hat den Vorteil, dass Sie als Entwickler weiterhin in Begriffen von JavaScript-Objekten denken können, anstatt in Datenbanksemantik, und dass es einen offensichtlichen Ort gibt, an dem Validierung und Überprüfung eingehender Daten vorgenommen werden können. Wir werden später in einem Artikel mehr über Datenbanken sprechen.

Weitere Informationen finden Sie unter [Datenbankintegration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation).

### Rendern von Daten (Ansichten)

Template-Engines (auch als "View-Engines" in _Express_ bezeichnet) ermöglichen es Ihnen, die _Struktur_ eines Ausgabedokuments in einer Vorlage zu spezifizieren, wobei Platzhalter für Daten verwendet werden, die beim Generieren einer Seite gefüllt werden. Templates werden oft verwendet, um HTML zu erstellen, können aber auch andere Dokumenttypen erstellen.

Express bietet Unterstützung für eine Reihe von Template-Engines, insbesondere Pug (früher "Jade"), Mustache und EJS. Jede hat ihre eigenen Stärken zur Adressierung bestimmter Anwendungsfälle (relative Vergleiche lassen sich leicht über Internetrecherchen finden).
Der Express Anwendungsgenerator verwendet Jade als Standard, unterstützt aber auch mehrere andere.

In Ihrem Anwendungs-Einstellungen können Sie die zu verwendende Template-Engine und den Ort, an dem Express nach Templates suchen soll, mit den Einstellungen 'views' und 'view engine' festlegen, wie unten gezeigt (Sie müssen auch das Paket installieren, das Ihre Template-Bibliothek enthält!)

```js
const express = require("express");
const path = require("path");
const app = express();

// Set directory to contain the templates ('views')
app.set("views", path.join(__dirname, "views"));

// Set view engine to use, in this case 'some_template_engine_name'
app.set("view engine", "some_template_engine_name");
```

Das Erscheinungsbild des Templates hängt davon ab, welche Engine Sie verwenden. Angenommen, Sie haben eine Template-Datei namens "index.\<template_extension>", die Platzhalter für Datenvariablen namens 'title' und "message" enthält, würden Sie [`Response.render()`](https://expressjs.com/en/4x/api.html#res.render) in einer Routinenhandler-Funktion aufrufen, um die HTML-Antwort zu erstellen und zu senden:

```js
app.get("/", function (req, res) {
  res.render("index", { title: "About dogs", message: "Dogs rock!" });
});
```

Weitere Informationen finden Sie unter [Verwendung von Template-Engines mit Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation).

### Dateistruktur

Express macht keine Annahmen in Bezug auf Struktur oder welche Komponenten Sie verwenden. Routen, Ansichten, statische Dateien und andere anwendungsspezifische Logik können in einer beliebigen Anzahl von Dateien mit einer beliebigen Verzeichnisstruktur leben. Obwohl es durchaus möglich ist, die gesamte _Express_-Anwendung in einer Datei zu haben, macht es typischerweise Sinn, Ihre Anwendung in Dateien basierend auf Funktion (z. B. Kontoverwaltung, Blogs, Diskussionsforen) und architektonischem Problembereich (z. B. Modell, Ansicht oder Controller, wenn Sie zufällig eine {{Glossary("MVC", "MVC-Architektur")}} verwenden) aufzuteilen.

In einem späteren Thema verwenden wir den _Express Application Generator_, der ein modulares App-Skelett erstellt, das wir leicht erweitern können, um Webanwendungen zu erstellen.

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben den ersten Schritt auf Ihrer Express/Node-Reise abgeschlossen! Sie sollten jetzt die Hauptvorteile von Express und Node verstehen und ungefähr wissen, wie die Hauptteile einer Express-App aussehen könnten (Routen, Middleware, Fehlerbehandlung und Template-Code). Sie sollten auch verstehen, dass Express als ein nicht-meinungsstarkes Framework Ihnen weitgehend freistellt, wie Sie diese Teile zusammenbringen und welche Bibliotheken Sie verwenden!

Natürlich ist Express absichtlich ein sehr leichtgewichtiges Webanwendungsframework, daher kommt ein großer Teil seines Vorteils und Potenzials von Drittanbieterbibliotheken und -funktionen. Wir werden uns diese in den folgenden Artikeln genauer ansehen. In unserem nächsten Artikel werden wir uns mit dem Einrichten einer Node-Entwicklungsumgebung befassen, sodass Sie beginnen können, einige Express-Codes in Aktion zu sehen.

## Siehe auch

- [Venkat.R - Manage Multiple Node versions](https://medium.com/@ramsunvtech/manage-multiple-node-versions-e3245d5ede44)
- [Module](https://nodejs.org/api/modules.html#modules_modules) (Node API-Dokumentation)
- [Express](https://expressjs.com/) (Homepage)
- [Grundlegendes Routing](https://expressjs.com/en/starter/basic-routing.html) (Express-Dokumentation)
- [Routing-Leitfaden](https://expressjs.com/en/guide/routing.html) (Express-Dokumentation)
- [Verwendung von Template-Engines mit Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation)
- [Verwendung von Middleware](https://expressjs.com/en/guide/using-middleware.html) (Express-Dokumentation)
- [Schreiben von Middleware für Express-Apps](https://expressjs.com/en/guide/writing-middleware.html) (Express-Dokumentation)
- [Datenbankintegration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation)
- [Bereitstellung statischer Dateien in Express](https://expressjs.com/en/starter/static-files.html) (Express-Dokumentation)
- [Fehlerbehandlung](https://expressjs.com/en/guide/error-handling.html) (Express-Dokumentation)

{{NextMenu("Learn/Server-side/Express_Nodejs/development_environment", "Learn/Server-side/Express_Nodejs")}}
