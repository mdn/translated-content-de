---
title: Einführung in Express/Node
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

In diesem ersten Express-Artikel beantworten wir die Fragen "Was ist Node?" und "Was ist Express?", und geben Ihnen einen Überblick darüber, was das Express-Web-Framework besonders macht. Wir skizzieren die Hauptmerkmale und zeigen Ihnen einige der wichtigsten Bausteine einer Express-Anwendung (an diesem Punkt haben Sie jedoch noch keine Entwicklungsumgebung, in der Sie diese testen können).

> [!WARNING]
> Das Express-Tutorial ist für Express Version 4 geschrieben, während die neueste Version Express 5 ist.
> Wir planen, die Dokumentation in der zweiten Hälfte des Jahres 2025 zu aktualisieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein allgemeines Verständnis der <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps">Client-Server-Webseitenprogrammierung</a> und insbesondere der Mechanik von <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview">Client-Server-Interaktionen auf Webseiten</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit Express zu erlangen und zu verstehen, wie es sich in Node einfügt, welche Funktionalitäten es bietet und welche die Hauptbausteine einer Express-Anwendung sind.
      </td>
    </tr>
  </tbody>
</table>

## Einführung in Node

[Node](https://nodejs.org/) (oder formeller _Node.js_) ist eine Open-Source-Plattformumgebung, die es Entwicklern ermöglicht, alle Arten von serverseitigen Tools und Anwendungen in {{Glossary("JavaScript", "JavaScript")}} zu erstellen.
Die Laufzeitumgebung ist für die Verwendung außerhalb eines Browsers konzipiert (d.h. direkt auf einem Computer oder Server-Betriebssystem ausführend). Daher verzichtet die Umgebung auf browser-spezifische JavaScript-APIs und fügt Unterstützung für traditionellere OS-APIs wie HTTP und Dateisystem-Bibliotheken hinzu.

Aus der Perspektive der Webserver-Entwicklung hat Node eine Reihe von Vorteilen:

- Hervorragende Leistung! Node wurde entwickelt, um den Durchsatz und die Skalierbarkeit in Webanwendungen zu optimieren und ist eine gute Lösung für viele gängige Web-Entwicklungsprobleme (z. B. Echtzeit-Webanwendungen).
- Der Code wird in "normalem JavaScript" geschrieben, was bedeutet, dass weniger Zeit mit "Kontextwechsel" zwischen Sprachen verbracht wird, wenn Sie sowohl clientseitigen als auch serverseitigen Code schreiben.
- JavaScript ist eine relativ neue Programmiersprache und profitiert im Vergleich zu anderen traditionellen Webserver-Sprachen (z. B. Python, PHP usw.) von Verbesserungen im Sprachdesign. Viele andere neue und populäre Sprachen werden in JavaScript kompiliert/konvertiert, sodass Sie auch TypeScript, CoffeeScript, ClojureScript, Scala, LiveScript usw. verwenden können.
- Der Node Package Manager (npm) bietet Zugang zu Hunderttausenden wiederverwendbaren Paketen. Er verfügt auch über eine erstklassige Abhängigkeitsauflösung und kann auch zur Automatisierung der meisten Build-Toolchains verwendet werden.
- Node.js ist portabel. Es ist auf Microsoft Windows, macOS, Linux, Solaris, FreeBSD, OpenBSD, WebOS und NonStop OS verfügbar. Darüber hinaus wird es von vielen Webhosting-Anbietern gut unterstützt, die oft spezifische Infrastrukturen und Dokumentationen für das Hosting von Node-Sites bereitstellen.
- Es hat ein sehr aktives Ökosystem von Drittanbietern und eine Entwickler-Community mit vielen Personen, die bereit sind zu helfen.

Mit Node.js können Sie einen einfachen Webserver erstellen, der das Node HTTP-Paket verwendet.

### Hallo Node.js

Das folgende Beispiel erstellt einen Webserver, der auf alle Arten von HTTP-Anfragen an die URL `http://127.0.0.1:8000/` hört — wenn eine Anfrage eingeht, antwortet das Skript mit dem String: "Hello World". Wenn Sie Node bereits installiert haben, können Sie diese Schritte ausprobieren:

1. Öffnen Sie das Terminal (unter Windows, öffnen Sie das Befehlszeilenprogramm)
2. Erstellen Sie den Ordner, in dem Sie das Programm speichern möchten, zum Beispiel `test-node`, und geben Sie ihn durch Eingabe des folgenden Befehls in Ihr Terminal ein:

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

Navigieren Sie schließlich zu `http://localhost:8000` in Ihrem Webbrowser; Sie sollten den Text "**Hello World**" in der oberen linken Ecke einer ansonsten leeren Webseite sehen.

## Webframeworks

Andere gängige Webentwicklungstools werden von Node selbst nicht direkt unterstützt. Wenn Sie spezifische Handhabung für verschiedene HTTP-Methoden (z. B. `GET`, `POST`, `DELETE` usw.) hinzufügen, Anfragen an verschiedenen URL-Pfaden ("Routen") separat behandeln, statische Dateien servieren oder Vorlagen verwenden möchten, um die Antwort dynamisch zu erstellen, wird Ihnen Node allein nicht sehr nützlich sein. Entweder müssen Sie den Code selbst schreiben oder Sie können das Rad nicht neu erfinden und ein Webframework verwenden!

## Einführung in Express

[Express](https://expressjs.com/) ist das populärste Node.js-Webframework und ist die zugrunde liegende Bibliothek für eine Reihe anderer populärer Node.js-Frameworks. Es bietet Mechanismen, um:

- Handler für Anfragen mit verschiedenen HTTP-Methoden an verschiedenen URL-Pfaden (Routen) zu schreiben.
- Mit "View"-Rendering-Engines zu integrieren, um Antworten zu generieren, indem Daten in Vorlagen eingefügt werden.
- Übliche Webanwendungseinstellungen wie den zu verwendenden Anschluss und den Ort der Vorlagen, die zum Rendern der Antwort verwendet werden, festzulegen.
- Zu jedem beliebigen Zeitpunkt innerhalb der Anfragenbearbeitungspipeline zusätzliche Anfragenprozessoren ("Middleware") hinzuzufügen.

Während _Express_ selbst relativ minimalistisch ist, haben Entwickler kompatible Middleware-Pakete erstellt, die fast jedes Webentwicklungsproblem abdecken. Es gibt Bibliotheken zur Arbeit mit Cookies, Sitzungen, Benutzeranmeldungen, URL-Parametern, `POST`-Daten, Sicherheits-Headern und vielen mehr. Sie können eine Liste der vom Express-Team gepflegten Middleware-Pakete bei [Express Middleware](https://expressjs.com/en/resources/middleware.html) finden (zusammen mit einer Liste einiger beliebter Pakete von Drittanbietern).

> [!NOTE]
> Diese Flexibilität ist ein zweischneidiges Schwert. Es gibt Middleware-Pakete, die fast jedes Problem oder jede Anforderung abdecken, aber es kann manchmal schwierig sein, die richtigen Pakete zu finden. Es gibt auch keinen "richtigen Weg", eine Anwendung zu strukturieren, und viele Beispiele, die Sie im Internet finden, sind möglicherweise nicht optimal oder zeigen nur einen kleinen Teil dessen, was Sie tun müssen, um eine Webanwendung zu entwickeln.

## Woher kommen Node und Express?

Node wurde erstmals 2009, nur für Linux, veröffentlicht. Der npm-Package-Manager wurde 2010 veröffentlicht, und 2012 wurde nativer Windows-Support hinzugefügt. Tauchen Sie in [Wikipedia](https://en.wikipedia.org/wiki/Node.js#History) ein, wenn Sie mehr wissen möchten.

Express wurde im November 2010 erstmals veröffentlicht und befindet sich derzeit in der Hauptversion 5 der API. Sie können den [Changelog](https://expressjs.com/en/changelog/#5.x) für Informationen über Änderungen in der aktuellen Version und [GitHub](https://github.com/expressjs/express/blob/master/History.md) für detailliertere historische Versionshinweise einsehen.

## Wie populär sind Node und Express?

Die Beliebtheit eines Webframeworks ist wichtig, da sie ein Indikator dafür ist, ob es weiterhin gepflegt wird und welche Ressourcen in Bezug auf Dokumentation, Zusatzbibliotheken und technischen Support verfügbar sein werden.

Es gibt keine sofort verfügbaren und endgültigen Maßnahmen zur Beliebtheit serverseitiger Frameworks (obwohl Sie die Beliebtheit schätzen können, indem Sie beispielsweise die Anzahl der GitHub-Projekte und Stack Overflow-Fragen für jede Plattform zählen). Eine bessere Frage ist, ob Node und Express "beliebt genug" sind, um die Probleme unpopulärer Plattformen zu vermeiden. Entwickeln sie sich weiter? Können Sie Hilfe bekommen, wenn Sie sie benötigen? Gibt es eine Möglichkeit für Sie, bezahlte Arbeit zu bekommen, wenn Sie Express lernen?

Basierend auf der Anzahl der bekannten Unternehmen, die Express verwenden, der Anzahl der Personen, die zum Codebestand beitragen, und der Anzahl der Personen, die sowohl kostenlosen als auch kostenpflichtigen Support bereitstellen, ja, _Express_ ist ein beliebtes Framework!

## Ist Express meinungsgebildet?

Web-Frameworks bezeichnen sich oft als "meinungsgebildet" oder "nicht meinungsgebildet".

Meinungsgebildete Frameworks sind diejenigen mit Meinungen darüber, "wie" man eine bestimmte Aufgabe richtig angeht. Sie unterstützen in der Regel die schnelle Entwicklung _in einem bestimmten Bereich_ (Lösungen zu spezifischen Problemen), da die richtige Vorgehensweise in der Regel gut verstanden und dokumentiert ist. Sie können jedoch weniger flexibel sein, um Probleme außerhalb ihres Hauptbereichs zu lösen, und bieten tendenziell weniger Auswahlmöglichkeiten bei den Komponenten und Ansätzen, die sie verwenden können.

Nicht meinungsgebildete Frameworks hingegen haben weit weniger Einschränkungen hinsichtlich der besten Art, Komponenten zusammenzufügen, um ein Ziel zu erreichen, oder sogar welche Komponenten verwendet werden sollen. Sie erleichtern es Entwicklern, die geeignetsten Tools zu verwenden, um eine bestimmte Aufgabe zu erledigen, wenn auch mit dem Nachteil, dass Sie diese Komponenten selbst finden müssen.

Express ist nicht meinungsgebildet. Sie können fast jede kompatible Middleware, die Sie möchten, in der Anfragenbearbeitungskette in fast beliebiger Reihenfolge einfügen. Sie können die App in einer Datei oder in mehreren Dateien und mit jeder Verzeichnisstruktur strukturieren. Manchmal haben Sie das Gefühl, dass Sie zu viele Auswahlmöglichkeiten haben!

## Wie sieht Express-Code aus?

In einer traditionellen datengesteuerten Website wartet eine Webanwendung auf HTTP-Anfragen vom Webbrowser (oder einem anderen Client). Wenn eine Anfrage eingeht, arbeitet die Anwendung heraus, welche Aktion basierend auf dem URL-Muster und möglicherweise assoziierten Informationen in `POST`- oder `GET`-Daten erforderlich ist. Je nachdem, was erforderlich ist, kann sie dann Informationen aus einer Datenbank lesen oder schreiben oder andere Aufgaben ausführen, die erforderlich sind, um die Anfrage zu erfüllen. Die Anwendung gibt dann eine Antwort an den Webbrowser zurück und erstellt oft dynamisch eine HTML-Seite für den Browser, indem sie die abgerufenen Daten in Platzhalter in einer HTML-Vorlage einfügt.

Express bietet Methoden, um zu spezifizieren, welche Funktion für eine bestimmte HTTP-Methode (`GET`, `POST`, `PUT` usw.) und ein URL-Muster ("Route") aufgerufen wird, sowie Methoden, um zu spezifizieren, welche Template ("view")-Engine verwendet wird, wo sich die Template-Dateien befinden und welches Template zur Darstellung einer Antwort verwendet wird. Sie können Express-Middleware verwenden, um Unterstützung für Cookies, Sitzungen und Benutzer, das Abrufen von `POST`/`GET`-Parametern usw. hinzuzufügen. Sie können jeden Datenbankmechanismus verwenden, der von Node unterstützt wird (Express definiert kein datenbankspezifisches Verhalten).

Die folgenden Abschnitte erklären einige der häufigen Dinge, die Sie sehen werden, wenn Sie mit _Express_ und _Node_ Code arbeiten.

### Hallo Welt Express

Lassen Sie uns zunächst das Standard-Express [Hallo Welt](https://expressjs.com/en/starter/hello-world.html) Beispiel betrachten (wir besprechen jeden Teil davon im Folgenden, und in den folgenden Abschnitten).

> [!NOTE]
> Wenn Sie Node und Express bereits installiert haben (oder wenn Sie sie installieren, wie im [nächsten Artikel](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) gezeigt), können Sie diesen Code in einer Textdatei namens **app.js** speichern und ihn in einer Bash-Kommandoaufforderung mit dem Befehl:
>
> **`node ./app.js`** ausführen

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

Die ersten beiden Zeilen `require()` (importieren) das Express-Modul und erstellen eine [Express-Anwendung](https://expressjs.com/en/4x/api.html#app). Dieses Objekt, das traditionell `app` genannt wird, verfügt über Methoden zur Verwaltung von HTTP-Anfragen, zum Konfigurieren von Middleware, zum Rendern von HTML-Ansichten, zur Registrierung einer Template-Engine und zur Änderung von [Anwendungseinstellungen](https://expressjs.com/en/4x/api.html#app.settings.table), die bestimmen, wie sich die Anwendung verhält (z. B. den Umgebungsmodus, ob Routendefinitionen case-sensitive sind usw.).

Der mittlere Teil des Codes (die drei Zeilen, die mit `app.get` beginnen) zeigt eine _Route-Definition_. Die Methode `app.get()` spezifiziert eine Callback-Funktion, die immer dann aufgerufen wird, wenn eine HTTP `GET`-Anfrage mit einem Pfad (`'/'`) relativ zum Seitenstamm eingegangen ist. Die Callback-Funktion übernimmt eine Anfragen- und eine Antwortobjekt als Argumente und ruft [`send()`](https://expressjs.com/en/4x/api.html#res.send) in der Antwort auf, um den String "Hello World!" zurückzugeben.

Der letzte Block startet den Server an einem angegebenen Port ('3000') und druckt einen Log-Kommentar auf die Konsole. Mit dem laufenden Server könnten Sie `localhost:3000` in Ihrem Browser aufrufen, um die zurückgegebene Antwort zu sehen.

### Module importieren und erstellen

Ein Modul ist eine JavaScript-Bibliothek/Datei, die Sie mit der Node `require()` Funktion in anderen Code importieren können. _Express_ selbst ist ein Modul, ebenso wie die Middleware- und Datenbankbibliotheken, die wir in unseren _Express_ Anwendungen verwenden.

Der untenstehende Code zeigt, wie wir ein Modul nach Namen importieren, indem wir das _Express_ Framework als Beispiel verwenden. Zuerst rufen wir die `require()` Funktion auf und geben den Namen des Moduls als String (`'express'`) an und rufen das zurückgegebene Objekt auf, um eine [Express-Anwendung](https://expressjs.com/en/4x/api.html#app) zu erstellen. Anschließend können wir auf die Eigenschaften und Funktionen des Anwendungsobjekts zugreifen.

```js
const express = require("express");
const app = express();
```

Sie können auch Ihre eigenen Module erstellen, die auf die gleiche Weise importiert werden können.

> [!NOTE]
> Sie möchten _Ihre eigenen_ Module erstellen, weil dies Ihnen ermöglicht, Ihren Code in überschaubare Teile zu organisieren — eine monolithische Einzelfile-Anwendung ist schwer zu verstehen und zu pflegen. Die Verwendung von Modulen hilft Ihnen auch, Ihren Namensraum zu verwalten, da nur die Variablen, die Sie explizit exportieren, importiert werden, wenn Sie ein Modul verwenden.

Um Objekte außerhalb eines Moduls verfügbar zu machen, müssen Sie sie einfach als zusätzliche Eigenschaften des `exports` Objekts darstellen. Zum Beispiel exportiert das **square.js** Modul unten `area()` und `perimeter()` Methoden:

```js
exports.area = function (width) {
  return width * width;
};
exports.perimeter = function (width) {
  return 4 * width;
};
```

Wir können dieses Modul mit `require()` importieren und anschließend die exportierte(n) Methode(n) wie folgt aufrufen:

```js
const square = require("./square"); // Here we require() the name of the file without the (optional) .js file extension
console.log(`The area of a square with a width of 4 is ${square.area(4)}`);
```

> [!NOTE]
> Sie können auch einen absoluten Pfad zum Modul angeben (oder einen Namen, wie wir es initial getan haben).

Wenn Sie ein vollständiges Objekt in einer einzigen Zuordnung exportieren möchten, anstatt es Eigenschaft für Eigenschaft aufzubauen, weisen Sie es `module.exports` zu, wie unten gezeigt (Sie können dies auch tun, um die Wurzel des Exportsobjekts zu einem Konstruktor oder einer anderen Funktion zu machen):

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
> Sie können `exports` als ein [Shortcut](https://nodejs.org/api/modules.html#modules_exports_shortcut) zu `module.exports` innerhalb eines bestimmten Moduls betrachten. Tatsächlich ist `exports` nur eine Variable, die auf den Wert von `module.exports` initialisiert wird, bevor das Modul evaluiert wird. Dieser Wert ist ein Verweis auf ein Objekt (leeres Objekt in diesem Fall). Dies bedeutet, dass `exports` einen Verweis auf dasselbe Objekt hält, auf das `module.exports` verweist. Es bedeutet auch, dass durch Zuweisung eines anderen Werts zu `exports` es nicht mehr an `module.exports` gebunden ist.

Weitere Informationen über Module finden Sie unter [Modules](https://nodejs.org/api/modules.html#modules_modules) (Node API-Dokumentation).

### Verwenden von asynchronen APIs

JavaScript-Code verwendet häufig asynchrone statt synchroner APIs für Prozesse, die einige Zeit in Anspruch nehmen können. Eine synchrone API ist eine, bei der jeder Vorgang abgeschlossen sein muss, bevor der nächste Vorgang starten kann. Zum Beispiel sind die folgenden Log-Funktionen synchron und drucken den Text in der Reihenfolge (Erste, Zweite) auf die Konsole.

```js
console.log("First");
console.log("Second");
```

Im Gegensatz dazu ist eine asynchrone API eine, bei der die API einen Vorgang startet und sofort zurückkehrt (bevor der Vorgang abgeschlossen ist). Sobald der Vorgang abgeschlossen ist, verwendet die API einen Mechanismus, um zusätzliche Vorgänge auszuführen. Zum Beispiel gibt der folgende Code "Zweite, Erste" aus, da die `setTimeout()`-Methode zuerst aufgerufen wird und sofort zurückkehrt, der Vorgang jedoch mehrere Sekunden benötigt, um abgeschlossen zu werden.

```js
setTimeout(function () {
  console.log("First");
}, 3000);
console.log("Second");
```

Nicht-blockierende asynchrone APIs sind in Node sogar noch wichtiger als im Browser, da _Node_ eine Single-Threaded Event-gesteuerte Ausführungsumgebung ist. "Single-threaded" bedeutet, dass alle Anfragen an den Server im gleichen Thread ausgeführt werden (anstatt in separate Prozesse gesponnen zu werden). Dieses Modell ist extrem effizient in Bezug auf Geschwindigkeit und Serverressourcen, aber es bedeutet auch, dass wenn eine Ihrer Funktionen synchron bestätigende Methoden aufrufen, die lange Zeit in Anspruch nehmen, sie nicht nur die aktuelle Anfrage, sondern alle anderen Anfragen blockieren, die von Ihrer Webanwendung bearbeitet werden.

Asynchrone APIs können auf verschiedene Arten Ihrer Anwendung mitteilen, dass sie abgeschlossen sind. Der häufigste Weg ist, eine Callback-Funktion zu registrieren, wenn Sie die asynchrone API aufrufen, die zurückgerufen wird, wenn der Vorgang abgeschlossen ist. Dies ist der oben gezeigte Ansatz.

> [!NOTE]
> Die Verwendung von Callbacks kann ziemlich "unübersichtlich" sein, wenn Sie eine Abfolge abhängiger asynchroner Vorgänge haben, die in einer bestimmten Reihenfolge ausgeführt werden müssen, da dies zu mehreren Ebenen verschachtelter Callbacks führt. Dieses Problem ist allgemein als "Callback-Hölle" bekannt. Dieses Problem kann durch gute Codierpraktiken reduziert werden (siehe <http://callbackhell.com/>), indem Sie ein Modul wie [async](https://www.npmjs.com/package/async) verwenden oder den Code zu nativen JavaScript-Funktionen wie [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) und [async/await](/de/docs/Web/JavaScript/Reference/Statements/async_function) refaktorisieren. Node bietet die [`utils.promisify`](https://nodejs.org/api/util.html#utilpromisifyoriginal) Funktion, um die Callback → Promise Konvertierung ergonomisch zu gestalten.

> [!NOTE]
> Eine häufige Konvention in Node und Express ist die Verwendung von "Error-First"-Callbacks. In dieser Konvention ist der erste Wert in Ihren _Callback-Funktionen_ ein Fehlerwert, während die nachfolgenden Argumente Erfolgdaten enthalten. Eine gute Erklärung dafür, warum dieser Ansatz nützlich ist, finden Sie in diesem Blog: [The Node.js Way - Understanding Error-First Callbacks](https://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/) (fredkschott.com).

### Erstellen von Routen-Handlern

In unserem _Hello World_ Express-Beispiel (siehe oben) haben wir eine (Callback-)Routen-Handler-Funktion für HTTP `GET`-Anfragen an den Seitenstamm (`'/'`) definiert.

```js
app.get("/", function (req, res) {
  res.send("Hello World!");
});
```

Die Callback-Funktion übernimmt eine Anfragen- und eine Antwortobjekt als Argumente. In diesem Fall ruft die Methode [`send()`](https://expressjs.com/en/4x/api.html#res.send) für die Antwort auf, um den String "Hello World!" zurückzugeben. Es gibt [eine Reihe anderer Antwortmethoden](https://expressjs.com/en/guide/routing.html#response-methods), um den Anfragen-/Antwortzyklus zu beenden. Zum Beispiel könnten Sie [`res.json()`](https://expressjs.com/en/4x/api.html#res.json) aufrufen, um eine JSON-Antwort zu senden, oder [`res.sendFile()`](https://expressjs.com/en/4x/api.html#res.sendFile), um eine Datei zu senden.

> [!NOTE]
> Sie können in den Callback-Funktionen beliebige Argumentnamen verwenden; wenn der Callback aufgerufen wird, ist das erste Argument immer die Anfrage und das zweite immer die Antwort. Es ist sinnvoll, sie so zu benennen, dass Sie das Objekt, mit dem Sie im Callback-Körper arbeiten, identifizieren können.

Das _Express-Anwendungs_ Objekt bietet auch Methoden zur Definition von Routen-Handlern für alle anderen HTTP-Methoden, die im Wesentlichen genauso verwendet werden:

`checkout()`, `copy()`, **`delete()`**, **`get()`**, `head()`, `lock()`, `merge()`, `mkactivity()`, `mkcol()`, `move()`, `m-search()`, `notify()`, `options()`, `patch()`, **`post()`**, `purge()`, **`put()`**, `report()`, `search()`, `subscribe()`, `trace()`, `unlock()`, `unsubscribe()`.

Es gibt eine spezielle Routing-Methode, `app.all()`, die in Antwort auf jede HTTP-Methode aufgerufen wird. Diese wird verwendet, um Middleware-Funktionen an einem bestimmten Pfad für alle Anfragemethoden zu laden. Das folgende Beispiel (aus der Express-Dokumentation) zeigt einen Handler, der für Anfragen an `/secret` unabhängig von der verwendeten HTTP-Methode ausgeführt wird (vorausgesetzt, sie wird vom [http-Modul](https://nodejs.org/docs/latest/api/http.html#httpmethods) unterstützt).

```js
app.all("/secret", function (req, res, next) {
  console.log("Accessing the secret section…");
  next(); // pass control to the next handler
});
```

Routen ermöglichen es Ihnen, bestimmte Zeichnungsmuster in einer URL zu entsprechen und einige Werte aus der URL zu extrahieren und sie als Parameter an den Routen-Handler zu übergeben (als Attribute des Anfrageobjekts, das als Parameter übergeben wird).

Oft ist es nützlich, Routen-Handler für einen bestimmten Teil einer Seite zusammenzufassen und sie mit einem gemeinsamen Routen-Prefix zuzugreifen (z. B. könnte eine Seite mit einem Wiki alle mit einem Wiki verbundenen Routen in einer Datei haben und mit einem Routen-Prefix von _/wiki/_ darauf zugreifen). In _Express_ wird dies erreicht, indem Sie das [`express.Router`](https://expressjs.com/en/guide/routing.html#express-router) Objekt verwenden. Zum Beispiel können wir unser Wiki-Route in einem Modul namens **wiki.js** erstellen und dann das `Router` Objekt exportieren, wie unten dargestellt:

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
> Das Hinzufügen von Routen zum `Router` Objekt erfolgt genau wie das Hinzufügen von Routen zum `app` Objekt (wie zuvor gezeigt).

Um den Router in unserer Hauptdatei zu verwenden, würden wir dann das Routenmodul (**wiki.js**) mit `require()` laden und dann `use()` auf dem _Express_ Anwendungsobjekt aufrufen, um den Router zur Middleware-Verarbeitungskette hinzuzufügen. Die beiden Routen wären dann von `/wiki/` und `/wiki/about/` aus zugänglich.

```js
const wiki = require("./wiki.js");
// …
app.use("/wiki", wiki);
```

Wir zeigen Ihnen später noch viel mehr über das Arbeiten mit Routen, insbesondere über die Verwendung des `Routers`, im verlinkten Abschnitt [Routen und Controller](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes).

### Umgang mit Middleware

Middleware wird in Express-Apps umfassend eingesetzt, für Aufgaben von der Bereitstellung statischer Dateien über die Fehlerbehandlung bis hin zur Komprimierung von HTTP-Antworten. Während Routenfunktionen den HTTP-Anfragen-Antwortzyklus beenden, indem sie eine Antwort an den HTTP-Client zurückgeben, führen Middleware-Funktionen _typischerweise_ eine Operation an der Anfrage oder Antwort durch und rufen dann die nächste Funktion im "Stack" auf, die zusätzliche Middleware oder einen Routen-Handler sein kann. Die Reihenfolge, in der Middleware aufgerufen wird, liegt in der Verantwortung des App-Entwicklers.

> [!NOTE]
> Die Middleware kann jede Operation ausführen, jeden Code ausführen, Änderungen an dem Anfrage- und Antwortobjekt vornehmen und sie kann _auch den Anfrage-Antwortzyklus beenden_. Wenn sie den Zyklus nicht beenden, muss sie `next()` aufrufen, um die Kontrolle an die nächste Middleware-Funktion zu übergeben (oder die Anfrage bleibt hängen).

Die meisten Apps werden _Third-Party_ Middleware verwenden, um gängige Webentwicklungsaufgaben zu vereinfachen, wie das Arbeiten mit Cookies, Sitzungen, Benutzer authentifizieren, HTTP `POST` und JSON-Daten abzufragen, Logging usw. Sie können eine [Liste von Middleware-Paketen, die vom Express-Team gepflegt werden, finden](https://expressjs.com/en/resources/middleware.html) (diese enthält auch andere beliebte Pakete von Drittanbietern). Andere Express-Pakete sind auf dem npm-Package-Manager verfügbar.

Um Third-Party-Middleware zu verwenden, müssen Sie sie zuerst mit npm in Ihre App installieren.
Zum Beispiel, um die [morgan](https://expressjs.com/en/resources/middleware/morgan.html) HTTP-Anfragenlogger-Middleware zu installieren, würden Sie dies tun:

```bash
npm install morgan
```

Anschließend könnten Sie `use()` auf dem _Express Anwendungsobjekt_ aufrufen, um die Middleware zum Stack hinzuzufügen:

```js
const express = require("express");
const logger = require("morgan");
const app = express();
app.use(logger("dev"));
// …
```

> [!NOTE]
> Middleware- und Routing-Funktionen werden in der Reihenfolge aufgerufen, in der sie deklariert werden. Für einige Middleware ist die Reihenfolge wichtig (wenn z. B. Sitzungs-Middleware von Cookie-Middleware abhängt, muss der Cookie-Handler zuerst hinzugefügt werden). Es ist fast immer der Fall, dass Middleware vor der Festlegung von Routen hinzugefügt wird, oder Ihre Routen-Handler haben keinen Zugriff auf die von Ihrer Middleware hinzugefügte Funktionalität.

Sie können Ihre eigene Middleware-Funktion schreiben, und Sie werden wahrscheinlich dazu gezwungen sein (wenn auch nur, um Fehlerbehandlungscode zu erstellen). Der **einzige** Unterschied zwischen einer Middleware-Funktion und einem Routen-Handler-Callback besteht darin, dass Middleware-Funktionen ein drittes Argument `next` haben, das die Middleware-Funktionen aufrufen müssen, wenn sie nicht die sind, die den Anfragenzyklus abschließen (wenn die Middleware-Funktion aufgerufen wird, enthält diese das _next_ Funktion, die aufgerufen werden muss).

Sie können einer Middleware-Funktion zur Verarbeitungskette für _alle Antworten_ mit `app.use()` hinzufügen oder für eine spezifische HTTP-Methode mit der zugehörigen Methode: `app.get()`, `app.post()` usw. Routen werden in beiden Fällen auf die gleiche Weise angegeben, obwohl die Route beim Aufrufen von `app.use()` optional ist.

Das untenstehende Beispiel zeigt, wie Sie eine Middleware-Funktion mit beiden Ansätzen und mit/ohne Route hinzufügen können.

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
> Oben deklarieren wir die Middleware-Funktion separat und setzen sie dann als Callback. In unserer vorherigen Routen-Handler-Funktion haben wir die Callback-Funktion bei ihrer Verwendung deklariert. In JavaScript sind beide Ansätze gültig.

Die Express-Dokumentation enthält viel mehr ausgezeichnete Informationen über [die Verwendung](https://expressjs.com/en/guide/using-middleware.html) und das [Schreiben](https://expressjs.com/en/guide/writing-middleware.html) von Express-Middleware.

### Statische Dateien bereitstellen

Sie können die [express.static](https://expressjs.com/en/4x/api.html#express.static) Middleware verwenden, um statische Dateien bereitzustellen, einschließlich Ihrer Bilder, CSS- und JavaScript-Dateien (`static()` ist die einzige Middleware-Funktion, die tatsächlich **Teil** von _Express_ ist). Zum Beispiel würden Sie die untenstehende Zeile verwenden, um Bilder, CSS-Dateien und JavaScript-Dateien aus einem Verzeichnis namens '**public'** auf derselben Ebene bereitzustellen, in der Sie Node aufrufen:

```js
app.use(express.static("public"));
```

Alle Dateien im Public-Verzeichnis werden bereitgestellt, indem ihr Dateiname (_relativ_ zum Basis- "Public"-Verzeichnis) zur Basis-URL hinzugefügt wird. Also zum Beispiel:

```plain
http://localhost:3000/images/dog.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/about.html
```

Sie können `static()` mehrfach aufrufen, um mehrere Verzeichnisse bereitzustellen. Wenn eine Datei von einer Middleware-Funktion nicht gefunden werden kann, wird sie an die nachfolgende Middleware weitergeleitet (die Reihenfolge, in der Middleware aufgerufen wird, basiert auf Ihrer Deklarationsreihenfolge).

```js
app.use(express.static("public"));
app.use(express.static("media"));
```

Sie können auch ein virtuelles Präfix für Ihre statischen URLs erstellen, anstatt die Dateien zur Basis-URL hinzuzufügen. Zum Beispiel geben wir hier einen [Einhängepfad an](https://expressjs.com/en/4x/api.html#app.use), sodass die Dateien mit dem Präfix "/media" geladen werden:

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
> Siehe auch [Statische Dateien in Express bereitstellen](https://expressjs.com/en/starter/static-files.html).

### Umgang mit Fehlern

Fehler werden von einer oder mehreren speziellen Middleware-Funktionen behandelt, die vier Argumente anstelle der üblichen drei haben: `(err, req, res, next)`. Zum Beispiel:

```js
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

Diese können den erforderlichen Inhalt zurückgeben, müssen aber nach allen anderen `app.use()` und Routingaufrufen aufgerufen werden, damit sie die letzte Middleware im Anfragenhandhabungsprozess sind!

Express hat einen eingebauten Fehler-Handler, der alle verbleibenden Fehler behandelt, die in der App auftreten können. Diese Standard-Fehlerbehandlungs-Middleware-Funktion wird am Ende des Middleware-Funktionsstacks hinzugefügt. Wenn Sie einen Fehler an `next()` übergeben und ihn nicht in einem Fehler-Handler behandeln, wird er vom eingebauten Fehler-Handler behandelt; Der Fehler wird dem Client mit dem Stack-Trace geschildert.

> [!NOTE]
> Der Stack-Trace wird im Produktionsmodus nicht eingeschlossen. Um ihn im Produktionsmodus auszuführen, müssen Sie die Umgebungsvariable `NODE_ENV` auf `"production"` setzen.

> [!NOTE]
> HTTP404 und andere "Fehler"-Statuscodes werden nicht als Fehler behandelt. Wenn Sie diese behandeln möchten, können Sie eine Middleware-Funktion hinzufügen. Weitere Informationen finden Sie in den [FAQ](https://expressjs.com/en/starter/faq.html#how-do-i-handle-404-responses).

Für weitere Informationen siehe [Fehlerbehandlung](https://expressjs.com/en/guide/error-handling.html) (Express-Dokumentation).

### Verwendung von Datenbanken

_Express_ Apps können jeden von _Node_ unterstützten Datenbankmechanismus verwenden (_Express_ selbst definiert kein spezifisches zusätzliches Verhalten/Anforderungen für das Datenbankmanagement). Es gibt viele Optionen, einschließlich PostgreSQL, MySQL, Redis, SQLite, MongoDB usw.

Um diese zu verwenden, müssen Sie zuerst den Datenbanktreiber mit npm installieren. Zum Beispiel, um den Treiber für das beliebte NoSQL MongoDB zu installieren, würden Sie den Befehl verwenden:

```bash
npm install mongodb
```

Die Datenbank selbst kann lokal oder auf einem Cloud-Server installiert werden. In Ihrem Express-Code erfordern Sie den Treiber, verbinden Sie sich mit der Datenbank und führen Sie dann Erstell-, Lese-, Aktualisierungs- und Löschvorgänge (CRUD) durch. Das untenstehende Beispiel (aus der Express-Dokumentation) zeigt, wie Sie mit MongoDB "mammal"-Datensätze finden können.

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

Ein weiterer beliebter Ansatz ist der indirekte Zugriff auf Ihre Datenbank über einen Object Relational Mapper ("ORM"). In diesem Ansatz definieren Sie Ihre Daten als "Objekte" oder "Modelle" und der ORM mappt diese in das zugrunde liegende Datenbankformat. Dieser Ansatz hat den Vorteil, dass Sie als Entwickler weiterhin in Begriffen von JavaScript-Objekten denken können, anstatt in Datenbanksemantiken, und dass es einen offensichtlichen Ort gibt, um Validierung und Überprüfung eingehender Daten durchzuführen. Wir werden später in einem anderen Artikel mehr über Datenbanken sprechen.

Für weitere Informationen siehe [Datenbankintegration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation).

### Daten rendern (Views)

Template-Engines (auch als "View Engines" in _Express_ bezeichnet) ermöglichen es Ihnen, die _Struktur_ eines Ausgabedokuments in einer Vorlage anzugeben, indem Platzhalter für Daten verwendet werden, die beim Generieren einer Seite gefüllt werden. Vorlagen werden häufig zur Erstellung von HTML verwendet, können jedoch auch andere Dokumenttypen erstellen.

Express unterstützt eine Reihe von Template-Engines, insbesondere Pug (früher "Jade"), Mustache und EJS. Jede hat ihre eigenen Stärken für die Abdeckung bestimmter Einsatzszenarien (relative Vergleiche können leicht über eine Internetsuche gefunden werden).
Der Express-Anwendungsgenerator verwendet Jade standardmäßig, unterstützt jedoch auch mehrere andere.

Im Code Ihrer Anwendungseinstellungen legen Sie die zu verwendende Template-Engine fest und den Ort, an dem Express die Vorlagen suchen soll, mit den Einstellungen "views" und "view engine", wie unten gezeigt (Sie müssen auch das Paket installieren, das Ihre Template-Bibliothek enthält!)

```js
const express = require("express");
const path = require("path");
const app = express();

// Set directory to contain the templates ('views')
app.set("views", path.join(__dirname, "views"));

// Set view engine to use, in this case 'some_template_engine_name'
app.set("view engine", "some_template_engine_name");
```

Das Erscheinungsbild der Vorlage hängt von der verwendeten Engine ab. Angenommen, Sie haben eine Template-Datei namens "index.\<template_extension>", die Platzhalter für Datenvariablen namens "title" und "message" enthält, würden Sie [`Response.render()`](https://expressjs.com/en/4x/api.html#res.render) in einer Routen-Handler-Funktion aufrufen, um die HTML-Antwort zu erstellen und zu senden:

```js
app.get("/", function (req, res) {
  res.render("index", { title: "About dogs", message: "Dogs rock!" });
});
```

Für weitere Informationen siehe [Verwendung von Template-Engines mit Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation).

### Dateistruktur

Express macht keine Annahmen in Bezug auf Struktur oder welche Komponenten Sie verwenden. Routen, Views, statische Dateien und andere anwendungsspezifische Logik können in einer beliebigen Anzahl von Dateien mit jeder Verzeichnisstruktur vorhanden sein. Obwohl es durchaus möglich ist, die gesamte _Express_ Anwendung in einer Datei zu haben, ergibt es typischerweise Sinn, Ihre Anwendung nach Funktion (z. B. Account-Management, Blogs, Diskussionsforen) und architektonischem Problembereich (z. B. Modell, View oder Controller, wenn Sie eine {{Glossary("MVC", "MVC-Architektur")}} verwenden) aufzuteilen.

In einem späteren Thema werden wir den _Express Application Generator_ verwenden, der ein modulares App-Gerüst erstellt, das wir leicht erweitern können, um Webanwendungen zu erstellen.

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben den ersten Schritt auf Ihrer Express/Node-Reise abgeschlossen! Sie sollten jetzt die Hauptvorteile von Express und Node verstehen und grob wissen, wie die Hauptteile einer Express-App aussehen könnten (Routen, Middleware, Fehlerbehandlung und Template-Code). Sie sollten auch verstanden haben, dass mit Express als unopinioniertes Framework die Art und Weise, wie Sie diese Teile zusammenfügen und die von Ihnen verwendeten Bibliotheken weitgehend Ihnen überlassen sind!

Natürlich ist Express absichtlich ein sehr leichtgewichtiges Web-Anwendungs-Framework, daher kommt ein Großteil seines Nutzens und Potenzials von Drittanbieter-Bibliotheken und -Funktionen. Wir werden diese in den folgenden Artikeln genauer betrachten. Im nächsten Artikel werden wir uns mit dem Einrichten einer Node-Entwicklungsumgebung befassen, damit Sie einige Express-Codes in Aktion sehen können.

## Siehe auch

- [Modules](https://nodejs.org/api/modules.html#modules_modules) (Node API-Dokumentation)
- [Express](https://expressjs.com/) (Startseite)
- [Grundlegendes Routing](https://expressjs.com/en/starter/basic-routing.html) (Express-Dokumentation)
- [Routing-Leitfaden](https://expressjs.com/en/guide/routing.html) (Express-Dokumentation)
- [Verwendung von Template-Engines mit Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation)
- [Verwendung von Middleware](https://expressjs.com/en/guide/using-middleware.html) (Express-Dokumentation)
- [Schreiben von Middleware für die Verwendung in Express-Apps](https://expressjs.com/en/guide/writing-middleware.html) (Express-Dokumentation)
- [Datenbankintegration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation)
- [Statische Dateien in Express bereitstellen](https://expressjs.com/en/starter/static-files.html) (Express-Dokumentation)
- [Fehlerbehandlung](https://expressjs.com/en/guide/error-handling.html) (Express-Dokumentation)

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
