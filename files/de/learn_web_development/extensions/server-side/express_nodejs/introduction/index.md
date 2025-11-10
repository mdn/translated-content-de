---
title: Einführung in Express/Node
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction
l10n:
  sourceCommit: 2aa175159b0354f7c5ba36574ef99e37e95b19c8
---

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

In diesem ersten Express-Artikel beantworten wir die Fragen "Was ist Node?" und "Was ist Express?" und geben Ihnen einen Überblick darüber, was das Express-Web-Framework so besonders macht. Wir skizzieren die Hauptmerkmale und zeigen Ihnen einige der wichtigsten Bausteine einer Express-Anwendung (obwohl Sie zu diesem Zeitpunkt noch keine Entwicklungsumgebung haben, um sie zu testen).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein allgemeines Verständnis von <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps">serverseitiger Website-Programmierung</a> und insbesondere der Mechanismen von <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview">Client-Server-Interaktionen auf Websites</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit dem, was Express ist, wie es mit Node zusammenpasst, welche Funktionalität es bietet und welche die Hauptbausteine einer Express-Anwendung sind.
      </td>
    </tr>
  </tbody>
</table>

## Einführung in Node

[Node](https://nodejs.org/) (oder formeller _Node.js_) ist eine quelloffene, plattformübergreifende Laufzeitumgebung, die Entwicklern ermöglicht, alle Arten von serverseitigen Tools und Anwendungen in {{Glossary("JavaScript", "JavaScript")}} zu erstellen.
Die Laufzeitumgebung ist für die Verwendung außerhalb des Browser-Kontexts gedacht (d.h. sie läuft direkt auf einem Computer oder Server-Betriebssystem). Daher verzichtet die Umgebung auf browserspezifische JavaScript-APIs und fügt Unterstützung für traditionellere OS-APIs hinzu, einschließlich HTTP- und Dateisystem-Bibliotheken.

Aus der Perspektive der Webserver-Entwicklung bietet Node einige Vorteile:

- Hervorragende Leistung! Node wurde entwickelt, um den Durchsatz und die Skalierbarkeit in Webanwendungen zu optimieren und ist eine gute Lösung für viele gängige Webentwicklungsprobleme (z. B. Echtzeit-Webanwendungen).
- Der Code wird in "einfachem alten JavaScript" geschrieben, was bedeutet, dass weniger Zeit mit dem "Kontextwechsel" zwischen Sprachen verschwendet wird, wenn Sie sowohl clientseitigen als auch serverseitigen Code schreiben.
- JavaScript ist eine relativ neue Programmiersprache und profitiert von Verbesserungen im Sprachdesign im Vergleich zu anderen traditionellen Webserver-Sprachen (z. B. Python, PHP usw.). Viele andere neue und beliebte Sprachen kompilieren/konvertieren in JavaScript, sodass Sie auch TypeScript, CoffeeScript, ClojureScript, Scala, LiveScript usw. verwenden können.
- Der node package manager (npm) bietet Zugriff auf Hunderttausende von wiederverwendbaren Paketen. Es hat auch eine erstklassige Abhängigkeitsauflösung und kann auch verwendet werden, um den Großteil der Build-Toolchain zu automatisieren.
- Node.js ist portabel. Es ist auf Microsoft Windows, macOS, Linux, Solaris, FreeBSD, OpenBSD, WebOS und NonStop OS verfügbar. Darüber hinaus wird es von vielen Webhosting-Anbietern gut unterstützt, die häufig spezifische Infrastrukturen und Dokumentationen für das Hosting von Node-Sites bereitstellen.
- Es gibt ein sehr aktives Drittanbieter-Ökosystem und eine Entwickler-Community mit vielen Menschen, die bereit sind, zu helfen.

Sie können Node.js verwenden, um einen einfachen Webserver mit dem Node HTTP-Paket zu erstellen.

### Hallo Node.js

Das folgende Beispiel erstellt einen Webserver, der auf jede Art von HTTP-Anfrage an der URL `http://127.0.0.1:8000/` lauscht — wenn eine Anfrage empfangen wird, antwortet das Skript mit dem String: "Hello World". Wenn Sie Node bereits installiert haben, können Sie die folgenden Schritte ausführen, um das Beispiel auszuprobieren:

1. Öffnen Sie Terminal (unter Windows öffnen Sie das Befehlszeilen-Dienstprogramm)
2. Erstellen Sie den Ordner, in dem Sie das Programm speichern möchten, z. B. `test-node`, und betreten Sie ihn dann, indem Sie den folgenden Befehl in Ihr Terminal eingeben:

   ```bash
   cd test-node
   ```

3. Verwenden Sie Ihren bevorzugten Texteditor, erstellen Sie eine Datei namens `hello.js` und fügen Sie den folgenden Code ein:

   ```js
   // Load HTTP module
   const http = require("http");

   const hostname = "127.0.0.1";
   const port = 8000;

   // Create HTTP server
   const server = http.createServer((req, res) => {
     // Set the response HTTP header with HTTP status and Content type
     res.writeHead(200, { "Content-Type": "text/plain" });

     // Send the response body "Hello World"
     res.end("Hello World\n");
   });

   // Prints a log once the server starts listening
   server.listen(port, hostname, () => {
     console.log(`Server running at http://${hostname}:${port}/`);
   });
   ```

4. Speichern Sie die Datei in dem oben erstellten Ordner.
5. Kehren Sie zum Terminal zurück und geben Sie den folgenden Befehl ein:

   ```bash
   node hello.js
   ```

Navigieren Sie schließlich zu `http://localhost:8000` in Ihrem Webbrowser; Sie sollten den Text "**Hello World**" in der oberen linken Ecke einer ansonsten leeren Webseite sehen.

> [!NOTE]
> Wenn Sie etwas Node.js-Code ausprobieren möchten, ohne eine lokale Einrichtung vornehmen zu müssen, bietet Scrimbas [Aside: The HTTP module](https://scrimba.com/learn-nodejs-c00ho9qqh6/~07du?via=mdn) <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> eine interaktive Einführung in die Einrichtung eines einfachen Servers mit dem Node HTTP-Package.

## Web-Frameworks

Andere gängige Webentwicklungsaufgaben werden nicht direkt von Node selbst unterstützt. Wenn Sie eine spezifische Behandlung für verschiedene HTTP-Methoden (z. B. `GET`, `POST`, `DELETE` usw.) hinzufügen möchten, Anfragen an verschiedenen URL-Pfaden ("Routen") separat behandeln, statische Dateien bereitstellen oder Vorlagen verwenden, um die Antwort dynamisch zu erstellen, wird Ihnen Node alleine nicht viel nützen. Sie müssen entweder den Code selbst schreiben oder können das Rad nicht neu erfinden und ein Web-Framework verwenden!

## Einführung in Express

[Express](https://expressjs.com/) ist das beliebteste Node.js-Web-Framework und die zugrunde liegende Bibliothek für eine Reihe anderer beliebter Node.js-Frameworks. Es bietet Mechanismen, um:

- Handler für Anfragen mit verschiedenen HTTP-Methoden an verschiedenen URL-Pfaden (Routen) zu schreiben.
- Mit "View" Rendering-Engines zu integrieren, um Antworten durch Einfügen von Daten in Vorlagen zu generieren.
- Gemeinsame Webanwendungseinstellungen wie den zu verwendenden Port für die Verbindung und den Speicherort der Vorlagen festzulegen, die für die Rendering der Antwort verwendet werden.
- Zusätzliche Anfrageverarbeitung "Middleware" an jedem Punkt innerhalb der Anfrageverarbeitungspipeline hinzuzufügen.

Während _Express_ selbst ziemlich minimalistisch ist, haben Entwickler kompatible Middleware-Pakete erstellt, um fast jedes Webentwicklungsproblem zu adressieren. Es gibt Bibliotheken zur Arbeit mit Cookies, Sitzungen, Benutzeranmeldungen, URL-Parametern, `POST`-Daten, Sicherheitsheadern und _vielen_ mehr. Eine Liste der von den Express-Teams gepflegten Middleware-Pakete finden Sie unter [Express Middleware](https://expressjs.com/en/resources/middleware.html) (zusammen mit einer Liste einiger beliebter Drittanbieter-Pakete).

> [!NOTE]
> Diese Flexibilität ist ein zweischneidiges Schwert. Es gibt Middleware-Pakete, die fast jedes Problem oder jede Anforderung ansprechen, aber herauszufinden, welche Pakete zu verwenden sind, kann manchmal schwierig sein. Es gibt auch keinen "richtigen Weg", eine Anwendung zu strukturieren, und viele Beispiele, die Sie im Internet finden, sind möglicherweise nicht optimal oder zeigen nur einen kleinen Teil dessen, was Sie tun müssen, um eine Webanwendung zu entwickeln.

## Woher kommen Node und Express?

Node wurde ursprünglich 2009, nur für Linux, veröffentlicht. Der npm-Paketmanager wurde 2010 veröffentlicht und native Windows-Unterstützung wurde 2012 hinzugefügt. Tauchen Sie in [Wikipedia](https://en.wikipedia.org/wiki/Node.js#History) ein, wenn Sie mehr wissen möchten.

Express wurde im November 2010 erstmals veröffentlicht und befindet sich derzeit in der Hauptversion 5 der API. Sie können sich das [Changelog](https://expressjs.com/en/changelog/#5.x) ansehen, um Informationen über Änderungen in der aktuellen Version zu erhalten, und [GitHub](https://github.com/expressjs/express/blob/master/History.md) für detailliertere historische Versionshinweise.

## Wie populär sind Node und Express?

Die Beliebtheit eines Web-Frameworks ist wichtig, da sie ein Indikator dafür ist, ob es weiterhin gewartet wird, und welche Ressourcen in Bezug auf Dokumentation, Zusatzbibliotheken und technischen Support verfügbar sind.

Es gibt kein leicht verfügbares und definitives Maß für die Beliebtheit von serverseitigen Frameworks (obwohl Sie die Beliebtheit schätzen können, indem Sie die Anzahl der GitHub-Projekte und Stack Overflow-Fragen für jede Plattform zählen). Eine bessere Frage ist, ob Node und Express "beliebt genug" sind, um die Probleme unpopulärer Plattformen zu vermeiden. Entwickeln sie sich weiter? Können Sie Hilfe bekommen, wenn Sie sie brauchen? Gibt es eine Möglichkeit, bezahlt zu werden, wenn Sie Express lernen?

Basierend auf der Anzahl prominenter Unternehmen, die Express verwenden, der Anzahl der Personen, die zum Code beitragen, und der Anzahl der Personen, die sowohl kostenlose als auch kostenpflichtige Unterstützung bieten, ist _Express_ ein beliebtes Framework!

## Ist Express meinungsstark?

Web-Frameworks bezeichnen sich häufig als "meinungsstark" oder "unmeinungsstark".

Meinungsstarke Frameworks sind solche, die Meinungen über den "richtigen Weg" zur Lösung einer bestimmten Aufgabe haben. Sie unterstützen oft die schnelle Entwicklung _in einem bestimmten Bereich_ (Lösung von Problemen eines bestimmten Typs), da der richtige Weg, etwas zu tun, normalerweise gut verstanden und dokumentiert ist. Allerdings können sie weniger flexibel bei der Lösung von Problemen außerhalb ihres Hauptbereichs sein und neigen dazu, weniger Auswahlmöglichkeiten für die zu verwendenden Komponenten und Ansätze zu bieten.

Unmeinungsstarke Frameworks hingegen haben weit weniger Einschränkungen hinsichtlich des besten Weges, Komponenten zusammenzufügen, um ein Ziel zu erreichen, oder sogar der zu verwendenden Komponenten. Sie erleichtern es Entwicklern, die am besten geeigneten Tools zur Erledigung einer bestimmten Aufgabe zu verwenden, allerdings auf Kosten der notwendigen Suche nach diesen Komponenten.

Express ist unmeinungsstark. Sie können fast jede kompatible Middleware, die Sie möchten, in der Anfragenbearbeitungskette in fast beliebiger Reihenfolge einfügen. Sie können die App in einer Datei oder mehreren Dateien strukturieren und jede Verzeichnisstruktur verwenden. Sie werden vielleicht manchmal das Gefühl haben, dass Sie zu viele Auswahlmöglichkeiten haben!

## Wie sieht Express-Code aus?

In einer traditionellen datengesteuerten Website wartet eine Webanwendung auf HTTP-Anfragen vom Webbrowser (oder anderen Clients). Wenn eine Anfrage empfangen wird, arbeitet die Anwendung heraus, welche Aktion erforderlich ist, basierend auf dem URL-Muster und möglicherweise zugehörigen Informationen, die in `POST`-Daten oder `GET`-Daten enthalten sind. Abhängig von den Anforderungen kann sie dann Informationen aus einer Datenbank lesen oder schreiben oder andere Aufgaben ausführen, die erforderlich sind, um die Anfrage zu erfüllen. Die Anwendung wird dann eine Antwort an den Webbrowser zurückgeben, oft indem eine HTML-Seite dynamisch erstellt wird, die dann die abgerufenen Daten in Platzhalter einer HTML-Vorlage einfügt.

Express bietet Methoden, um festzulegen, welche Funktion für ein bestimmtes HTTP-Verb (`GET`, `POST`, `PUT` usw.) und URL-Muster ("Route") aufgerufen wird, sowie Methoden, um festzulegen, welche Vorlage ("view") Engine verwendet wird, wo sich die Vorlagendateien befinden und welche Vorlage verwendet wird, um eine Antwort zu rendern. Sie können Express-Middleware verwenden, um Unterstützung für Cookies, Sessions und Benutzer, das Abrufen von `POST`/`GET`-Parametern usw. hinzuzufügen. Sie können jeden von Node unterstützten Datenbank-Mechanismus verwenden (Express definiert kein datenbankspezifisches Verhalten).

Die folgenden Abschnitte erklären einige der Dinge, die Sie häufig sehen werden, wenn Sie mit _Express_ und _Node_ Code arbeiten.

### Helloworld Express

Zuerst betrachten wir das Standard-Express [Hello World](https://expressjs.com/en/starter/hello-world.html) Beispiel (wir diskutieren jede Komponente unten und in den folgenden Abschnitten).

> [!NOTE]
> Wenn Sie Node und Express bereits installiert haben (oder sie wie im [nächsten Artikel](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) zeigen), können Sie diesen Code in einer Textdatei namens **app.js** speichern und ihn in einer Bash-Befehlszeile mit folgendem Befehl ausführen:
>
> **`node ./app.js`**

```js
const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
```

Die ersten beiden Zeilen `require()` (importieren) das Express-Modul und erstellen eine [Express-Anwendung](https://expressjs.com/en/5x/api.html#app). Dieses Objekt wird traditionell `app` genannt und verfügt über Methoden für das Routing von HTTP-Anfragen, die Konfiguration von Middleware, das Rendern von HTML-Ansichten, das Registrieren einer Template-Engine und das Anpassen von [Anwendungseinstellungen](https://expressjs.com/en/5x/api.html#app.settings.table), die steuern, wie sich die Anwendung verhält (z. B. der Umgebungsmodus, ob Routendefinitionen case-sensitive sind, usw.)

Der mittlere Teil des Codes (die drei Zeilen, die mit `app.get` beginnen) zeigt eine _Routendefinition_. Die `app.get()` Methode gibt eine Rückruffunktion an, die immer dann aufgerufen wird, wenn eine HTTP `GET` Anfrage mit einem Pfad (`'/'`) relativ zum Site-Root kommt. Die Rückruffunktion nimmt ein Request- und ein Response-Objekt als Argumente an und ruft [`send()`](https://expressjs.com/en/5x/api.html#res.send) auf der Antwort auf, um den String "Hello World!" zurückzugeben.

Der abschließende Block startet den Server auf einem angegebenen Port ('3000') und druckt einen Protokollkommentar auf die Konsole. Wird der Server ausgeführt, können Sie zu `localhost:3000` in Ihrem Browser gehen, um die zurückgegebene Beispielantwort zu sehen.

### Importieren und Erstellen von Modulen

Ein Modul ist eine JavaScript-Bibliothek/-Datei, die Sie mit der `require()`-Funktion von Node in anderen Code importieren können. _Express_ selbst ist ein Modul, ebenso wie die Middleware- und Datenbank-Bibliotheken, die wir in unseren _Express_-Anwendungen verwenden.

Der folgende Code zeigt, wie wir ein Modul per Namen importieren, indem wir das _Express_-Framework als Beispiel verwenden. Zuerst rufen wir die `require()`-Funktion auf und geben den Namen des Moduls als String (`'express'`) an, und rufen das zurückgegebene Objekt auf, um eine [Express-Anwendung](https://expressjs.com/en/5x/api.html#app) zu erstellen. Wir können dann auf die Eigenschaften und Funktionen des Anwendungsobjekts zugreifen.

```js
const express = require("express");

const app = express();
```

Sie können auch Ihre eigenen Module erstellen, die auf die gleiche Weise importiert werden können.

> [!NOTE]
> Sie _möchten_ eigene Module erstellen, da dies Ihnen erlaubt, Ihren Code in verwaltbare Teile zu organisieren – eine monolithische Single-File-Anwendung ist schwer verständlich und schwer zu pflegen. Die Verwendung von Modulen hilft Ihnen auch, Ihren Namensraum zu verwalten, da nur die Variablen, die Sie explizit exportieren, importiert werden, wenn Sie ein Modul verwenden.

Um Objekte außerhalb eines Moduls verfügbar zu machen, müssen Sie sie einfach als zusätzliche Eigenschaften in das `exports`-Objekt einfügen. Zum Beispiel ist das **square.js**-Modul unten eine Datei, die `area()` und `perimeter()` Methoden exportiert:

```js
exports.area = function (width) {
  return width * width;
};
exports.perimeter = function (width) {
  return 4 * width;
};
```

Wir können dieses Modul mit `require()` importieren und dann die exportierte(n) Methode(n) wie folgt aufrufen:

```js
const square = require("./square"); // Here we require() the name of the file without the (optional) .js file extension

console.log(`The area of a square with a width of 4 is ${square.area(4)}`);
```

> [!NOTE]
> Sie können auch einen absoluten Pfad zum Modul angeben (oder einen Namen, wie wir es ursprünglich getan haben).

Wenn Sie ein komplettes Objekt in einer Zuweisung exportieren möchten, anstatt es Schritt für Schritt zu erstellen, können Sie es `module.exports` zuweisen, wie unten gezeigt (Sie können dies auch tun, um die Wurzel des Exports-Objekts zu einem Konstruktor oder einer anderen Funktion zu machen):

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
> Sie können `exports` als [Abkürzung](https://nodejs.org/api/modules.html#modules_exports_shortcut) für `module.exports` innerhalb eines gegebenen Moduls betrachten. Tatsächlich ist `exports` einfach eine Variable, die auf den Wert von `module.exports` eingestellt wird, bevor das Modul ausgewertet wird. Dieser Wert ist eine Referenz auf ein Objekt (in diesem Fall ein leeres Objekt). Das bedeutet, dass `exports` eine Referenz auf das gleiche Objekt hält, das von `module.exports` referenziert wird. Es bedeutet auch, dass durch das Zuweisen eines anderen Werts zu `exports` es nicht mehr an `module.exports` gebunden ist.

Für viel mehr Informationen über Module siehe [Module](https://nodejs.org/api/modules.html#modules_modules) (Node API Dokumentation).

### Asynchrone APIs verwenden

JavaScript-Code verwendet häufig asynchrone anstelle von synchronen APIs für Vorgänge, die einige Zeit in Anspruch nehmen können. Eine synchrone API ist eine, bei der jeder Vorgang abgeschlossen sein muss, bevor der nächste Vorgang beginnen kann. Zum Beispiel sind die folgenden Protokollfunktionen synchron und drucken den Text in der Konsole in der richtigen Reihenfolge (Erster, Zweiter).

```js
console.log("First");
console.log("Second");
```

Im Gegensatz dazu ist eine asynchrone API eine, bei der die API einen Vorgang startet und sofort zurückkehrt (bevor der Vorgang abgeschlossen ist). Sobald der Vorgang beendet ist, wird die API einen Mechanismus verwenden, um zusätzliche Vorgänge auszuführen. Zum Beispiel druckt der untenstehende Code "Zweiter, Erster", weil, obwohl die `setTimeout()`-Methode zuerst aufgerufen und sofort zurückkehrt, der Vorgang erst nach mehreren Sekunden abgeschlossen ist.

```js
setTimeout(() => {
  console.log("First");
}, 3000);
console.log("Second");
```

Die Verwendung von nicht-blockierenden asynchronen APIs ist sogar noch wichtiger in Node als im Browser, weil _Node_-Anwendungen oft als ein single-threaded ereignisgesteuertes Ausführungsumfeld geschrieben werden. "Single-threaded" bedeutet, dass alle Anfragen an den Server im gleichen Thread ausgeführt werden (anstatt in separate Prozesse aufgeteilt zu werden). Dieses Modell ist in Bezug auf Geschwindigkeit und Serverressourcen äußerst effizient. Es bedeutet jedoch auch, dass, wenn irgendeine Ihrer Funktionen synchron ausgeführten Methoden aufruft, die lange Zeit in Anspruch nehmen, sie nicht nur die aktuelle Anfrage blockieren, sondern jede andere Anfrage, die von Ihrer Webanwendung bearbeitet wird.

Es gibt mehrere Möglichkeiten, wie eine asynchrone API Ihrer Anwendung mitteilen kann, dass sie abgeschlossen ist. Historisch gesehen bestand der Ansatz darin, eine Rückruffunktion zu registrieren, die beim Aufrufen der asynchronen API aufgerufen wird und die dann bei Abschluss des Vorgangs aufgerufen wird (dieses Vorgehen wird oben verwendet).

> [!NOTE]
> Die Verwendung von Rückruffunktionen kann ziemlich "chaotisch" sein, wenn Sie eine Sequenz abhängiger asynchroner Vorgänge haben, die in einer bestimmten Reihenfolge ausgeführt werden müssen, da dies zu mehreren Ebenen verschachtelter Rückrufe führt. Dieses Problem wird oft als "Callback-Hölle" bezeichnet.

> [!NOTE]
> Eine häufige Konvention für Node und Express ist die Verwendung von error-first-Rückrufen. In dieser Konvention ist der erste Wert in Ihren _Rückruffunktionen_ ein Fehlerwert, während nachfolgende Argumente Erfolgsdaten enthalten. Es gibt eine gute Erklärung, warum dieser Ansatz nützlich ist, in diesem Blog: [The Node.js Way - Understanding Error-First Callbacks](https://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/) (fredkschott.com).

Moderner JavaScript-Code verwendet häufiger [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) und [async/await](/de/docs/Web/JavaScript/Reference/Statements/async_function), um asynchronen Programmablauf zu verwalten.
Sie sollten nach Möglichkeit Versprechen verwenden. Wenn Sie mit Code arbeiten, der Rückrufmechanismen verwendet, können Sie die Node.js [`utils.promisify`](https://nodejs.org/api/util.html#utilpromisifyoriginal) Funktion verwenden, um die Callback → Promise Konvertierung ergonomisch zu handhaben.

### Erstellen von Route-Handlern

In unserem _Hello World_ Express-Beispiel (siehe oben) haben wir eine (callback) Routendefinition für HTTP `GET`-Anfragen an das Site-Root (`'/'`) definiert.

```js
app.get("/", (req, res) => {
  res.send("Hello World!");
});
```

Die Rückruf-Funktion nimmt ein Request- und ein Response-Objekt als Argumente. In diesem Fall ruft die Methode [`send()`](https://expressjs.com/en/5x/api.html#res.send) auf der Antwort auf, um den String "Hello World!" zu zurückzugeben. Es gibt eine [Anzahl anderer Antwortmethoden](https://expressjs.com/en/guide/routing.html#response-methods) zum Beenden des Anfrage-/Antwortzyklus, zum Beispiel könnten Sie [`res.json()`](https://expressjs.com/en/5x/api.html#res.json) aufrufen, um eine JSON-Antwort zu senden, oder [`res.sendFile()`](https://expressjs.com/en/5x/api.html#res.sendFile), um eine Datei zu senden.

> [!NOTE]
> Sie können in den Rückruffunktionen beliebige Argumentnamen verwenden; wenn der Rückruf ausgelöst wird, wird das erste Argument immer die Anfrage und das zweite immer die Antwort sein. Es macht Sinn, sie so zu benennen, dass Sie das Objekt, mit dem Sie arbeiten, im Rückruf identifizieren können.

Das _Express-Anwendung_-Objekt bietet auch Methoden, um Routendefinitionen für alle anderen HTTP-Methoden festzulegen, die meist auf die gleiche Weise verwendet werden:

`checkout()`, `copy()`, **`delete()`**, **`get()`**, `head()`, `lock()`, `merge()`, `mkactivity()`, `mkcol()`, `move()`, `m-search()`, `notify()`, `options()`, `patch()`, **`post()`**, `purge()`, **`put()`**, `report()`, `search()`, `subscribe()`, `trace()`, `unlock()`, `unsubscribe()`.

Es gibt eine spezielle Routing-Methode, `app.all()`, die als Antwort auf jede HTTP-Methode aufgerufen wird. Dies wird verwendet, um Middleware-Funktionen an einem bestimmten Pfad für alle Anfragemethoden zu laden. Das folgende Beispiel (aus der Express-Dokumentation) zeigt einen Handler, der bei Anfragen an `/secret` unabhängig von der verwendeten HTTP-Methode ausgeführt wird (vorausgesetzt, sie wird von dem [http module](https://nodejs.org/docs/latest/api/http.html#httpmethods) unterstützt).

```js
app.all("/secret", (req, res, next) => {
  console.log("Accessing the secret section…");
  next(); // pass control to the next handler
});
```

Routen ermöglichen es Ihnen, bestimmte Zeichenmuster in einer URL zu erkennen und einige Werte aus der URL zu extrahieren und als Parameter an den Route-Handler weiterzugeben (als Attribute des Anforderungsobjekts, das als Parameter übergeben wird).

Oft ist es nützlich, Routendefinitionen für einen bestimmten Teil einer Site zusammenzufassen und über ein gemeinsames Routenpräfix darauf zuzugreifen (z.B. könnte eine Site mit einem Wiki alle wiki-bezogenen Routen in einer Datei haben und sie mit einem Route-Präfix von _/wiki/_ zugänglich machen). In _Express_ wird dies durch die Verwendung des [`express.Router`](https://expressjs.com/en/guide/routing.html#express-router) Objekts erreicht. Zum Beispiel könnten wir unsere Wiki-Route in einem Modul namens **wiki.js** erstellen und dann das `Router`-Objekt wie unten gezeigt exportieren:

```js
// wiki.js - Wiki route module

const express = require("express");

const router = express.Router();

// Home page route
router.get("/", (req, res) => {
  res.send("Wiki home page");
});

// About page route
router.get("/about", (req, res) => {
  res.send("About this wiki");
});

module.exports = router;
```

> [!NOTE]
> Das Hinzufügen von Routen zum `Router`-Objekt erfolgt genauso wie das Hinzufügen von Routen zum `app`-Objekt (wie zuvor gezeigt).

Um den Router in unserer Haupt-App-Datei zu verwenden, würden wir dann das Routenmodul (**wiki.js**) mit `require()` importieren und dann `use()` auf der _Express-Anwendung_ aufrufen, um den Router zur Middleware-Verarbeitungskette hinzuzufügen. Die beiden Routen wären dann unter `/wiki/` und `/wiki/about/` zugänglich.

```js
const wiki = require("./wiki.js");

// …
app.use("/wiki", wiki);
```

Wir werden Ihnen später im verlinkten Abschnitt [Routen und Controller](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes) viel mehr über das Arbeiten mit Routen und insbesondere über die Verwendung des `Router`-Objekts zeigen.

### Verwendung von Middleware

Middleware wird in Express-Apps ausgiebig verwendet, für Aufgaben wie das Bereitstellen von statischen Dateien bis hin zur Fehlerbehandlung oder zur Komprimierung von HTTP-Antworten. Während Routenfunktionen den HTTP-Anfrage-Antwort-Zyklus beenden, indem sie eine Antwort an den HTTP-Client zurückgeben, führen Middleware-Funktionen _typischerweise_ eine bestimmte Operation auf der Anfrage oder Antwort durch und rufen dann die nächste Funktion im "Stapel" auf, die entweder eine weitere Middleware oder ein Routen-Handler sein kann. Die Reihenfolge, in der Middleware aufgerufen wird, liegt beim App-Entwickler.

> [!NOTE]
> Die Middleware kann jede Operation ausführen, beliebigen Code ausführen, Änderungen am Anforderungs- und Antwortobjekt vornehmen, und sie kann _auch den Anfrage-Antwort-Zyklus beenden_. Wenn sie den Zyklus nicht beendet, muss sie `next()` anrufen, um die Kontrolle an die nächste Middleware-Funktion zu übergeben (oder die Anfrage wird hängen bleiben).

Die meisten Apps verwenden _Drittanbieter_-Middleware, um gängige Webentwicklungsaufgaben wie das Arbeiten mit Cookies, Sitzungen, Benutzeranmeldungen, Zugriff auf Anforderungs-`POST` und JSON-Daten, Protokollierung usw. zu vereinfachen. Sie finden eine [Liste von Middleware-Paketen, die vom Express-Team gewartet werden](https://expressjs.com/en/resources/middleware.html) (die auch andere beliebte Drittanbieter-Pakete enthält). Weitere Express-Pakete sind im npm-Paketmanager verfügbar.

Um Drittanbieter-Middleware zu verwenden, müssen Sie sie zuerst mit npm in Ihre App installieren.
Um beispielsweise die [morgan](https://expressjs.com/en/resources/middleware/morgan.html)-HTTP-Anforderungs-Protokoller-Middleware zu installieren, würden Sie dies tun:

```bash
npm install morgan
```

Sie könnten dann `use()` auf dem _Express-Anwendungsobjekt_ aufrufen, um die Middleware dem Stapel hinzuzufügen:

```js
const express = require("express");
const logger = require("morgan");

const app = express();
app.use(logger("dev"));
// …
```

> [!NOTE]
> Middleware- und Routing-Funktionen werden in der Reihenfolge aufgerufen, in der sie deklariert werden. Bei einigen Middleware spielt die Reihenfolge eine Rolle (zum Beispiel, wenn Session-Middleware von Cookie-Middleware abhängt, dann muss der Cookie-Handler zuerst hinzugefügt werden). Es ist fast immer der Fall, dass Middleware vor dem Setzen von Routen aufgerufen wird, oder Ihre Routenfunktionen werden keinen Zugang zu der von Ihrer Middleware hinzugefügten Funktionalität haben.

Sie können Ihre eigenen Middleware-Funktionen schreiben, und Sie werden wahrscheinlich dazu gezwungen sein (wenn auch nur zum Erstellen von Fehlerbehandlungscode). Der **einzige** Unterschied zwischen einer Middleware-Funktion und einem Routen-Handler-Rückruf besteht darin, dass Middleware-Funktionen ein drittes Argument `next` haben, das Middleware-Funktionen aufrufen sollen, wenn sie nicht diejenigen sind, die den Anfragenzyklus abschließen (wenn die Middleware-Funktion aufgerufen wird, enthält dies die _nächste_ aufzurufende Funktion).

Sie können eine Middleware-Funktion mit `app.use()` zur Verarbeitungs-Kette für _alle Antworten_ hinzufügen oder für ein bestimmtes HTTP-Verb unter Verwendung der zugehörigen Methode: `app.get()`, `app.post()` usw. Routen werden in beiden Fällen auf die gleiche Weise spezifiziert, obwohl die Route optional ist, wenn `app.use()` aufgerufen wird.

Das folgende Beispiel zeigt, wie Sie die Middleware-Funktion auf beide Arten und mit/ohne Route hinzufügen können.

```js
const express = require("express");

const app = express();

// An example middleware function
function middlewareFunction(req, res, next) {
  // Perform some operations
  next(); // Call next() so Express will call the next middleware function in the chain.
}

// Function added with use() for all routes and verbs
app.use(middlewareFunction);

// Function added with use() for a specific route
app.use("/some-route", middlewareFunction);

// A middleware function added for a specific HTTP verb and route
app.get("/", middlewareFunction);

app.listen(3000);
```

> [!NOTE]
> Oben deklarieren wir die Middleware-Funktion separat und setzen sie dann als Rückruf. In unserer vorherigen Routen-Handler-Funktion haben wir die Rückruffunktion deklariert, als sie verwendet wurde. In JavaScript ist beide Ansätze gültig.

Die Express-Dokumentation hat noch viel mehr exzellente Dokumentation über [die Nutzung](https://expressjs.com/en/guide/using-middleware.html) und [das Schreiben](https://expressjs.com/en/guide/writing-middleware.html) von Express-Middleware.

### Bereitstellen von statischen Dateien

Sie können die [express.static](https://expressjs.com/en/5x/api.html#express.static)-Middleware verwenden, um statische Dateien bereitzustellen, einschließlich Ihrer Bilder, CSS und JavaScript (`static()` ist die einzige Middleware-Funktion, die tatsächlich **Teil** von _Express_ ist). Zum Beispiel würden Sie die folgende Zeile verwenden, um Bilder, CSS-Dateien und JavaScript-Dateien aus einem Verzeichnis namens '**public'** auf der gleichen Ebene, auf der Sie Node aufrufen, bereitzustellen:

```js
app.use(express.static("public"));
```

Alle Dateien im öffentlichen Verzeichnis werden durch Hinzufügen ihres Dateinamens (_relativ_ zum Basis-Verzeichnis "public") zur Basis-URL bereitgestellt. So zum Beispiel:

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

Sie können auch ein virtuelles Präfix für Ihre statischen URLs erstellen, anstatt die Dateien zur Basis-URL hinzuzufügen. Zum Beispiel geben wir hier einen [Mount-Pfad](https://expressjs.com/en/5x/api.html#app.use) an, sodass die Dateien mit dem Präfix "/media" geladen werden:

```js
app.use("/media", express.static("public"));
```

Nun können Sie die Dateien, die sich im `public`-Verzeichnis befinden, über das Präfix `/media` laden.

```plain
http://localhost:3000/media/images/dog.jpg
http://localhost:3000/media/video/cat.mp4
http://localhost:3000/media/cry.mp3
```

> [!NOTE]
> Siehe auch [Bereitstellen von statischen Dateien in Express](https://expressjs.com/en/starter/static-files.html).

### Fehlerbehandlung

Fehler werden von einer oder mehreren speziellen Middleware-Funktionen behandelt, die vier Argumente anstelle der üblichen drei haben: `(err, req, res, next)`. Zum Beispiel:

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

Diese können beliebigen erforderlichen Inhalt zurückgeben, müssen aber nach allen anderen `app.use()`- und Routenaufrufen aufgerufen werden, damit sie die letzte Middleware im Anfragenbearbeitungsprozess sind!

Express verfügt über einen integrierte Fehlerbehandlungsfunktion, die sich um alle verbleibenden Fehler kümmert, die in der Anwendung auftreten können. Diese Standard-Fehlerbehandlungs-Middleware-Funktion wird am Ende des Middleware-Funktionsstapels hinzugefügt. Wenn Sie einen Fehler an `next()` weitergeben und diesen nicht in einem Fehler-Handler behandeln, wird er von der integrierten Fehlerbehandlungsfunktion behandelt; der Fehler wird mit dem Stack-Trace an den Client geschrieben.

> [!NOTE]
> Der Stack-Trace ist nicht in der Produktionsumgebung enthalten. Um es im Produktionsmodus auszuführen, müssen Sie die Umgebungsvariable `NODE_ENV` auf `"production"` setzen.

> [!NOTE]
> HTTP-Fehlerstatuscodes wie 404 werden nicht als Fehler behandelt. Wenn Sie diese behandeln möchten, können Sie eine Middleware-Funktion hinzufügen, um dies zu tun. Weitere Informationen finden Sie in den [FAQ](https://expressjs.com/en/starter/faq.html#how-do-i-handle-404-responses).

Für weitere Informationen siehe [Fehlerbehandlung](https://expressjs.com/en/guide/error-handling.html) (Express-Dokumentation).

### Verwendung von Datenbanken

_Express_-Apps können jeden Datenbank-Mechanismus verwenden, der von _Node_ unterstützt wird (_Express_ selbst definiert kein spezifisches zusätzliches Verhalten/Anforderungen für das Datenbank-Management). Es gibt viele Optionen, darunter PostgreSQL, MySQL, Redis, SQLite, MongoDB usw.

Um diese zu verwenden, müssen Sie zuerst den Datenbank-Treiber mit npm installieren. Zum Beispiel würden Sie, um den Treiber für die beliebte NoSQL MongoDB zu installieren, den folgenden Befehl verwenden:

```bash
npm install mongodb
```

Die Datenbank selbst kann lokal oder auf einem Cloud-Server installiert werden. In Ihrem Express-Code importieren Sie den Treiber, verbinden sich mit der Datenbank und führen dann Erstellungs-, Lese-, Aktualisierungs- und Löschoperationen (CRUD) durch.
Das folgende Beispiel zeigt, wie Sie "Säugetier"-Datensätze mit MongoDB finden können:

```js
const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("animals");
    const mammals = await db.collection("mammals").find().toArray();
    console.log(mammals);
  } finally {
    await client.close();
  }
}

run().catch(console.error);
```

Ein anderer beliebter Ansatz ist es, auf Ihre Datenbank indirekt über einen Object-Relational-Mapper ("ORM") zuzugreifen. Bei diesem Ansatz definieren Sie Ihre Daten als "Objekte" oder "Modelle" und der ORM ordnet diese dem zugrundeliegenden Datenbankformat zu. Dieser Ansatz hat den Vorteil, dass Sie als Entwickler weiterhin in JavaScript-Objekten denken können, anstatt in Datenbank-Semantik, und dass es einen offensichtlichen Ort gibt, um Validierung und Prüfung eingehender Daten durchzuführen. Wir werden später in einem Artikel mehr über Datenbanken sprechen.

Für weitere Informationen siehe [Datenbankintegration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation).

### Daten rendern (Ansichten)

Template-Engines (auch als "View-Engines" in _Express_ bezeichnet) erlauben es Ihnen, die _Struktur_ eines Ausgabedokuments in einer Vorlage anzugeben, mit Platzhaltern für Daten, die beim Generieren einer Seite ausgefüllt werden. Vorlagen werden oft verwendet, um HTML zu erstellen, können aber auch andere Arten von Dokumenten erzeugen.

Express unterstützt eine Reihe von Template-Engines, insbesondere Pug (früher "Jade"), Mustache und EJS. Jede hat ihre eigenen Stärken zur Adressierung bestimmter Anwendungsfälle (relative Vergleiche können leicht über eine Internetsuche gefunden werden).
Der Express-Anwendungsgenerator verwendet Jade als Standard, unterstützt aber auch mehrere andere.

In Ihrem Anwendungseinstellungs-Code setzen Sie die zu verwendende Template-Engine und den Speicherort, an dem Express nach Vorlagen suchen soll, mit den 'views'- und 'view engine'-Einstellungen, wie unten gezeigt (Sie müssen auch das Paket installieren, das Ihre Template-Bibliothek enthält!)

```js
const express = require("express");
const path = require("path");

const app = express();

// Set directory to contain the templates ('views')
app.set("views", path.join(__dirname, "views"));

// Set view engine to use, in this case 'some_template_engine_name'
app.set("view engine", "some_template_engine_name");
```

Das Aussehen der Vorlage hängt davon ab, welche Engine Sie verwenden. Angenommen, Sie haben eine Vorlagendatei namens "index.\<template_extension>", die Platzhalter für Datenvariablen mit den Namen 'title' und "message" enthält, würden Sie [`Response.render()`](https://expressjs.com/en/5x/api.html#res.render) in einer Route-Handler-Funktion aufrufen, um die HTML-Antwort zu erstellen und zu senden:

```js
app.get("/", (req, res) => {
  res.render("index", { title: "About dogs", message: "Dogs rock!" });
});
```

Für weitere Informationen siehe [Verwendung von Template-Engines mit Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation).

### Dateistruktur

Express macht keine Annahmen in Bezug auf Struktur oder welche Komponenten Sie verwenden. Routen, Ansichten, statische Dateien und andere anwendungsspezifische Logik können in einer beliebigen Anzahl von Dateien mit jeder Verzeichnisstruktur leben. Während es durchaus möglich ist, die gesamte _Express_-Anwendung in einer Datei zu haben, macht es normalerweise Sinn, Ihre Anwendung in Dateien basierend auf Funktion (z.B. Kontoverwaltung, Blogs, Diskussionsforen) und architektonischer Problemdomäne (z.B. Model, View oder Controller, wenn Sie zufällig eine {{Glossary("MVC", "MVC-Architektur")}} verwenden) aufzuteilen.

In einem späteren Thema werden wir den _Express Application Generator_ verwenden, der ein modulares App-Skelett erstellt, das wir leicht erweitern können, um Webanwendungen zu erstellen.

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben den ersten Schritt in Ihrer Express/Node-Reise abgeschlossen! Sie sollten nun die Hauptvorteile von Express und Node verstehen und in etwa wissen, wie die wichtigsten Teile einer Express-App aussehen könnten (Routen, Middleware, Fehlerbehandlung und Template-Code). Sie sollten auch verstehen, dass Express ein unmeinungsstarkes Framework ist, sodass es weitgehend Ihnen überlassen bleibt, wie Sie diese Teile zusammenfügen und welche Bibliotheken Sie verwenden!

Natürlich ist Express absichtlich ein sehr leichtgewichtiges Webanwendungs-Framework, sodass ein Großteil seiner Vorteile und Potenziale von Drittanbieter-Bibliotheken und -Funktionen stammen. Wir werden diese in den folgenden Artikeln genauer betrachten. In unserem nächsten Artikel werden wir uns mit der Einrichtung einer Node-Entwicklungsumgebung befassen, damit Sie einige Express-Codes in Aktion sehen können.

## Siehe auch

- [Learn Node.js](https://scrimba.com/learn-nodejs-c00ho9qqh6?via=mdn) von Scrimba <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine unterhaltsame, interaktive Einführung in Node.js.
- [Learn Express.js](https://scrimba.com/learn-expressjs-c062las154?via=mdn) von Scrimba <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> baut auf dem vorherigen Link auf und zeigt, wie man das Express-Framework verwendet, um serverseitige Websites zu erstellen.
- [Module](https://nodejs.org/api/modules.html#modules_modules) (Node API-Dokumentation)
- [Express](https://expressjs.com/) (Startseite)
- [Grundlegendes Routing](https://expressjs.com/en/starter/basic-routing.html) (Express-Dokumentation)
- [Routing-Leitfaden](https://expressjs.com/en/guide/routing.html) (Express-Dokumentation)
- [Verwendung von Template-Engines mit Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation)
- [Verwendung von Middleware](https://expressjs.com/en/guide/using-middleware.html) (Express-Dokumentation)
- [Middleware für die Verwendung in Express-Apps schreiben](https://expressjs.com/en/guide/writing-middleware.html) (Express-Dokumentation)
- [Datenbankintegration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation)
- [Bereitstellen von statischen Dateien in Express](https://expressjs.com/en/starter/static-files.html) (Express-Dokumentation)
- [Fehlerbehandlung](https://expressjs.com/en/guide/error-handling.html) (Express-Dokumentation)

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
