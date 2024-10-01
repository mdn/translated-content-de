---
title: Einführung in Express/Node
slug: Learn/Server-side/Express_Nodejs/Introduction
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{LearnSidebar}}{{NextMenu("Learn/Server-side/Express_Nodejs/development_environment", "Learn/Server-side/Express_Nodejs")}}

In diesem ersten Express-Artikel beantworten wir die Fragen: „Was ist Node?“ und „Was ist Express?“ und geben Ihnen einen Überblick darüber, was das Express-Webframework besonders macht. Wir skizzieren die Hauptfunktionen und zeigen Ihnen einige der wichtigsten Bausteine einer Express-Anwendung (obwohl Sie zu diesem Zeitpunkt noch keine Entwicklungsumgebung haben werden, um sie zu testen).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein allgemeines Verständnis von <a href="/de/docs/Learn/Server-side/First_steps">serverseitiger Website-Programmierung</a> und insbesondere der Mechanismen von <a href="/de/docs/Learn/Server-side/First_steps/Client-Server_overview">Client-Server-Interaktionen in Websites</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Sich mit Express vertraut zu machen und zu verstehen, wie es zu Node passt, welche Funktionalität es bietet und was die Hauptbausteine einer Express-Anwendung sind.
      </td>
    </tr>
  </tbody>
</table>

## Einführung in Node

[Node](https://nodejs.org/) (oder formeller _Node.js_) ist eine quelloffene, plattformübergreifende Laufzeitumgebung, die es Entwicklern ermöglicht, alle Arten von serverseitigen Tools und Anwendungen in {{Glossary("JavaScript", "JavaScript")}} zu erstellen. Die Laufzeitumgebung ist für den Gebrauch außerhalb eines Browsers gedacht (d. h. direkt auf einem Computer- oder Server-Betriebssystem). Daher lässt die Umgebung browserspezifische JavaScript-APIs weg und fügt Unterstützung für traditionellere OS-APIs hinzu, einschließlich HTTP- und Dateisystembibliotheken.

Aus der Perspektive der Webserver-Entwicklung bietet Node eine Reihe von Vorteilen:

- Hervorragende Leistung! Node wurde entwickelt, um den Durchsatz und die Skalierbarkeit von Webanwendungen zu optimieren und ist eine gute Lösung für viele gängige Webentwicklungsprobleme (z. B. Echtzeit-Webanwendungen).
- Der Code wird in "ganz gewöhnlichem JavaScript" geschrieben, was bedeutet, dass weniger Zeit mit „Kontextwechsel“ zwischen Sprachen verbracht wird, wenn Sie sowohl Client- als auch serverseitigen Code schreiben.
- JavaScript ist eine relativ neue Programmiersprache und profitiert von Verbesserungen im Sprachdesign im Vergleich zu anderen traditionellen Webserver-Sprachen (z. B. Python, PHP usw.). Viele andere neue und beliebte Sprachen kompilieren/konvertieren in JavaScript, sodass Sie auch TypeScript, CoffeeScript, ClojureScript, Scala, LiveScript usw. verwenden können.
- Der Node-Paketmanager (npm) bietet Zugang zu Hunderttausenden wiederverwendbaren Paketen. Er hat auch eine erstklassige Abhängigkeitsauflösung und kann auch genutzt werden, um den Großteil der Build-Toolchain zu automatisieren.
- Node.js ist portabel. Es ist auf Microsoft Windows, macOS, Linux, Solaris, FreeBSD, OpenBSD, WebOS und NonStop OS verfügbar. Darüber hinaus wird es von vielen Webhosting-Anbietern gut unterstützt, die häufig spezifische Infrastruktur und Dokumentation für das Hosting von Node-Sites bereitstellen.
- Es gibt ein sehr aktives Drittanbieter-Ökosystem und eine Entwicklergemeinschaft mit vielen Menschen, die bereit sind zu helfen.

Sie können Node.js verwenden, um einen einfachen Webserver mit dem Node HTTP-Paket zu erstellen.

### Hello Node.js

Das folgende Beispiel erstellt einen Webserver, der auf alle Arten von HTTP-Anfragen auf der URL `http://127.0.0.1:8000/` wartet – wenn eine Anfrage eingeht, antwortet das Skript mit dem String: "Hello World". Wenn Sie node bereits installiert haben, können Sie die folgenden Schritte ausführen, um das Beispiel auszuprobieren:

1. Öffnen Sie Terminal (unter Windows die Befehlszeilenfunktion öffnen)
2. Erstellen Sie den Ordner, in dem Sie das Programm speichern möchten, zum Beispiel `test-node`, und wechseln Sie dann mit folgendem Befehl in das Verzeichnis:

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

4. Speichern Sie die Datei in dem oben erstellten Ordner.
5. Gehen Sie zurück zum Terminal und geben Sie den folgenden Befehl ein:

   ```bash
   node hello.js
   ```

Navigieren Sie abschließend im Webbrowser zu `http://localhost:8000`; Sie sollten den Text "**Hello World**" in der oberen linken Ecke einer ansonsten leeren Webseite sehen.

## Web-Frameworks

Andere gängige Webentwicklungsaufgaben werden von Node selbst nicht direkt unterstützt. Wenn Sie eine spezifische Behandlung für verschiedene HTTP-Verben hinzufügen möchten (z. B. `GET`, `POST`, `DELETE` usw.), Anfragen an verschiedenen URL-Pfaden („Routen“) separat behandeln, statische Dateien bereitstellen oder Vorlagen verwenden möchten, um die Antwort dynamisch zu erstellen, wird Node allein nicht sehr nützlich sein. Sie müssen entweder den Code selbst schreiben oder Sie können das Rad nicht neu erfinden und ein Webframework verwenden!

## Einführung in Express

[Express](https://expressjs.com/) ist das beliebteste Node.js-Webframework und die zugrunde liegende Bibliothek für eine Reihe anderer beliebter Node.js-Frameworks. Es bietet Mechanismen zum:

- Schreiben von Handlers für Anfragen mit verschiedenen HTTP-Verben an verschiedenen URL-Pfaden (Routen).
- Integration mit „View“-Rendering-Engines, um Antworten durch Einfügen von Daten in Vorlagen zu generieren.
- Festlegen allgemeiner Webanwendungseinstellungen wie des Ports, der für die Verbindung verwendet werden soll, und der Position von Vorlagen, die zum Rendern der Antwort verwendet werden.
- Hinzufügen zusätzlicher Anfrageverarbeitungs-"Middleware" an jedem Punkt innerhalb der Anfragenbearbeitungspipeline.

Während _Express_ selbst recht minimalistisch ist, haben Entwickler kompatible Middleware-Pakete erstellt, um fast jedes Webentwicklungsproblem zu lösen. Es gibt Bibliotheken zum Arbeiten mit Cookies, Sitzungen, Benutzeranmeldungen, URL-Parametern, `POST`-Daten, Sicherheitsheadern und _vielen_ mehr. Eine Liste von Middleware-Paketen, die von den Express-Teams gepflegt werden, finden Sie unter [Express Middleware](https://expressjs.com/en/resources/middleware.html) (zusammen mit einer Liste einiger beliebter Pakete von Drittanbietern).

> [!NOTE]
> Diese Flexibilität ist ein zweischneidiges Schwert. Es gibt Middleware-Pakete, um fast jedes Problem oder jede Anforderung zu lösen, aber die richtigen Pakete zu finden, kann manchmal eine Herausforderung sein. Es gibt auch keine „richtige Methode“, eine Anwendung zu strukturieren, und viele Beispiele, die Sie möglicherweise im Internet finden, sind nicht optimal oder zeigen nur einen kleinen Teil dessen, was Sie tun müssen, um eine Webanwendung zu entwickeln.

## Woher kommen Node und Express?

Node wurde erstmals 2009, zunächst nur für Linux, veröffentlicht. Der npm-Paketmanager wurde 2010 veröffentlicht und die Unterstützung für native Windows-Systeme wurde 2012 hinzugefügt. Tauchen Sie in [Wikipedia](https://en.wikipedia.org/wiki/Node.js#History) ein, wenn Sie mehr erfahren möchten.

Express wurde erstmals im November 2010 veröffentlicht und befindet sich derzeit in der Hauptversion 4 der API. Sie können den [Changelog](https://expressjs.com/en/changelog/4x.html) für Informationen zu Änderungen in der aktuellen Version und [GitHub](https://github.com/expressjs/express/blob/master/History.md) für detailliertere historische Versionshinweise einsehen.

## Wie beliebt sind Node und Express?

Die Beliebtheit eines Webframeworks ist wichtig, da sie ein Indikator dafür ist, ob es weiterhin gewartet wird und welche Ressourcen in Bezug auf Dokumentation, Zusatzbibliotheken und technischen Support wahrscheinlich verfügbar sind.

Es gibt keine readily-available und endgültige Maßnahme zur Beliebtheit serverseitiger Frameworks (obwohl man die Beliebtheit beispielsweise anhand der Anzahl der GitHub-Projekte und StackOverflow-Fragen für jede Plattform abschätzen kann). Eine bessere Frage ist, ob Node und Express „beliebt genug“ sind, um die Probleme unbeliebter Plattformen zu vermeiden. Entwickeln sie sich weiter? Können Sie Hilfe bekommen, wenn Sie sie brauchen? Gibt es für Sie die Möglichkeit, bezahlte Arbeit zu bekommen, wenn Sie Express lernen?

Basierend auf der Anzahl der hochkarätigen Unternehmen, die Express nutzen, der Anzahl der Personen, die zum Code beitragen, sowie der Personen, die sowohl kostenlose als auch kostenpflichtige Unterstützung bieten, dann ist _Express_ tatsächlich ein beliebtes Framework!

## Ist Express meinungsfreudig?

Webframeworks bezeichnen sich oft selbst als „meinungsfreudig“ oder „unbestimmt“.

Meinungsfreudige Frameworks sind solche, die Meinungen darüber haben, wie eine bestimmte Aufgabe am besten zu bewältigen ist. Sie unterstützen oft eine schnelle Entwicklung _in einem bestimmten Bereich_ (Lösungen für Probleme eines bestimmten Typs), weil die richtige Methode zur Durchführung einer beliebigen Aufgabe in der Regel gut verstanden und dokumentiert ist. Sie können jedoch weniger flexibel bei der Lösung von Problemen außerhalb ihres Hauptbereichs sein und bieten tendenziell weniger Auswahlmöglichkeiten für die Komponenten und Ansätze, die sie verwenden können.

Unbestimmte Frameworks hingegen haben weitaus weniger Einschränkungen für den besten Weg, Komponenten miteinander zu verbinden, um ein Ziel zu erreichen, und sogar welche Komponenten verwendet werden sollten. Sie ermöglichen es Entwicklern, die am besten geeigneten Tools zu verwenden, um eine bestimmte Aufgabe zu erledigen, wenn auch auf Kosten dessen, dass Sie diese Komponenten selbst finden müssen.

Express ist unbestimmt. Sie können fast jede kompatible Middleware in beliebiger Reihenfolge in die Anfragenbearbeitungskette einfügen. Sie können die App in einer Datei oder mehreren Dateien und mit jeder beliebigen Verzeichnisstruktur strukturieren. Manchmal haben Sie vielleicht das Gefühl, dass Sie zu viele Möglichkeiten haben!

## Wie sieht Express-Code aus?

In einer traditionellen datengesteuerten Website wartet eine Webanwendung auf HTTP-Anfragen vom Webbrowser (oder einem anderen Client). Wenn eine Anfrage eingeht, ermittelt die Anwendung, welche Aktion basierend auf dem URL-Muster und möglicherweise zugehörigen Informationen in `POST`- oder `GET`-Daten erforderlich ist. Je nachdem, was erforderlich ist, kann sie dann Informationen aus einer Datenbank lesen oder schreiben oder andere Aufgaben ausführen, die zur Erfüllung der Anfrage erforderlich sind. Die Anwendung gibt dann eine Antwort an den Webbrowser zurück und erstellt häufig dynamisch eine HTML-Seite, die der Browser anzeigt, indem die abgerufenen Daten in Platzhalter in einer HTML-Vorlage eingefügt werden.

Express stellt Methoden bereit, um anzugeben, welche Funktion für ein bestimmtes HTTP-Verb (`GET`, `POST`, `PUT` usw.) und URL-Muster ("Route") aufgerufen wird, und Methoden, um anzugeben, welche Vorlage ("View") Engine verwendet wird, wo Vorlagendateien abgelegt sind und welche Vorlage zum Rendern einer Antwort verwendet werden soll. Sie können Express-Middleware verwenden, um Unterstützung für Cookies, Sitzungen und Benutzer hinzuzufügen, `POST`/`GET`-Parameter abzurufen usw. Sie können jedes von Node unterstützte Datenbankmechanismus verwenden (Express definiert kein datenbankbezogenes Verhalten).

Die folgenden Abschnitte erklären einige der häufigen Dinge, die Sie sehen werden, wenn Sie mit _Express_ und _Node_-Code arbeiten.

### Helloworld Express

Betrachten wir zunächst das Standard-Express-[Hello World](https://expressjs.com/en/starter/hello-world.html)-Beispiel (wir diskutieren jeden Teil dieses unten und in den folgenden Abschnitten).

> [!NOTE]
> Wenn Sie Node und Express bereits installiert haben (oder wenn Sie sie wie im [nächsten Artikel](/de/docs/Learn/Server-side/Express_Nodejs/development_environment) gezeigt installieren), können Sie diesen Code in einer Textdatei namens **app.js** speichern und in einer Bash-Eingabeaufforderung mit dem Befehl:
>
> **`node ./app.js`** ausführen.

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

Die ersten beiden Zeilen `require()` (importieren) das Express-Modul und erstellen eine [Express-Anwendung](https://expressjs.com/en/4x/api.html#app). Dieses Objekt, das traditionell `app` genannt wird, verfügt über Methoden zum Routing von HTTP-Anfragen, Konfiguration von Middleware, Rendern von HTML-Views, Registrieren einer Template-Engine und Ändern von [Anwendungseinstellungen](https://expressjs.com/en/4x/api.html#app.settings.table), die das Verhalten der Anwendung steuern (z. B. den Umgebungsmodus, ob Routendefinitionen Groß- und Kleinschreibung beachten usw.)

Der mittlere Teil des Codes (die drei Zeilen, die mit `app.get` beginnen) zeigt eine _Routendefinition_. Die `app.get()`-Methode gibt eine Callback-Funktion an, die immer dann aufgerufen wird, wenn eine HTTP-`GET`-Anfrage mit einem Pfad (`'/'`) relativ zur Site-Wurzel vorliegt. Die Callback-Funktion nimmt ein Anfragen- und ein Antwortobjekt als Argumente und ruft [`send()`](https://expressjs.com/en/4x/api.html#res.send) auf der Antwort auf, um den String "Hello World!" zurückzugeben.

Der letzte Block startet den Server auf einem bestimmten Port ('3000') und gibt einen Log-Kommentar in der Konsole aus. Bei laufendem Server können Sie in Ihrem Browser zu `localhost:3000` gehen, um die Beispielsantwort zu sehen.

### Importieren und Erstellen von Modulen

Ein Modul ist eine JavaScript-Bibliothek/-Datei, die Sie mithilfe der `require()`-Funktion von Node in anderen Code importieren können. _Express_ selbst ist ein Modul, ebenso wie die Middleware- und Datenbankbibliotheken, die wir in unseren _Express_-Anwendungen verwenden.

Der Code unten zeigt, wie wir ein Modul nach Name importieren, dabei wird _Express_ als Beispiel verwendet. Zuerst rufen wir die `require()`-Funktion auf, geben den Namen des Moduls als String an (`'express'`) und rufen das zurückgegebene Objekt auf, um eine [Express-App](https://expressjs.com/en/4x/api.html#app) zu erstellen. Wir können dann auf die Eigenschaften und Funktionen des Anwendungsobjekts zugreifen.

```js
const express = require("express");
const app = express();
```

Sie können auch Ihre eigenen Module erstellen, die auf die gleiche Weise importiert werden können.

> [!NOTE]
> Sie _möchten_ Ihre eigenen Module erstellen, da dies Ihnen ermöglicht, Ihren Code in verwaltbare Teile zu organisieren — eine monolithische Ein-Datei-Anwendung ist schwer zu verstehen und zu pflegen. Mit Modulen können Sie auch Ihren Namensraum verwalten, da nur die von Ihnen ausdrücklich exportierten Variablen beim Verwenden eines Moduls importiert werden.

Um Objekte außerhalb eines Moduls verfügbar zu machen, müssen Sie diese lediglich als zusätzliche Eigenschaften am `exports`-Objekt freilegen. Zum Beispiel ist das **square.js**-Modul unten eine Datei, die `area()`- und `perimeter()`-Methoden exportiert:

```js
exports.area = function (width) {
  return width * width;
};
exports.perimeter = function (width) {
  return 4 * width;
};
```

Wir können dieses Modul mit `require()` importieren und dann die exportierte(n) Methode(n) wie gezeigt aufrufen:

```js
const square = require("./square"); // Here we require() the name of the file without the (optional) .js file extension
console.log(`The area of a square with a width of 4 is ${square.area(4)}`);
```

> [!NOTE]
> Sie können auch einen absoluten Pfad zum Modul angeben (oder einen Namen, wie wir es anfangs getan haben).

Wenn Sie ein vollständiges Objekt in einer Zuweisung exportieren möchten, anstatt es Stück für Stück aufzubauen, weisen Sie es `module.exports` wie unten gezeigt zu (Sie können dies auch tun, um die Wurzel des Exports-Objekts als Konstruktor oder andere Funktion zu gestalten):

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
> Sie können `exports` als eine [Abkürzung](https://nodejs.org/api/modules.html#modules_exports_shortcut) für `module.exports` innerhalb eines bestimmten Moduls betrachten. Tatsächlich ist `exports` nur eine Variable, die auf den Wert von `module.exports` gesetzt wird, bevor das Modul ausgewertet wird. Dieser Wert ist eine Referenz auf ein Objekt (in diesem Fall ein leeres Objekt). Das bedeutet, dass `exports` eine Referenz auf das gleiche Objekt hält, auf das `module.exports` verweist. Es bedeutet auch, dass durch das Zuweisen eines anderen Werts zu `exports` es nicht mehr an `module.exports` gebunden ist.

Für viel mehr Informationen über Module siehe [Module](https://nodejs.org/api/modules.html#modules_modules) (Node API-Dokumentation).

### Asynchrone APIs verwenden

JavaScript-Code verwendet häufig asynchrone anstelle synchroner APIs für Vorgänge, die einige Zeit in Anspruch nehmen können. Eine synchrone API ist eine, bei der jeder Vorgang abgeschlossen sein muss, bevor der nächste Vorgang starten kann. Zum Beispiel sind die folgenden Log-Funktionen synchron und drucken den Text in der Konsole in der Reihenfolge (Erste, Zweite).

```js
console.log("First");
console.log("Second");
```

Im Gegensatz dazu ist eine asynchrone API eine, bei der die API einen Vorgang startet und sofort zurückkehrt (bevor der Vorgang abgeschlossen ist). Sobald der Vorgang abgeschlossen ist, verwendet die API einen Mechanismus, um zusätzliche Vorgänge auszuführen. Zum Beispiel druckt der unten stehende Code „Zweite, Erste“ aus, weil die `setTimeout()`-Methode zuerst aufgerufen wird und sofort zurückkehrt, aber der Vorgang erst nach mehreren Sekunden abgeschlossen ist.

```js
setTimeout(function () {
  console.log("First");
}, 3000);
console.log("Second");
```

Die Verwendung nicht blockierender asynchroner APIs ist bei Node sogar noch wichtiger als im Browser, da _Node_ eine ereignisgesteuerte Single-Thread-Ausführungsumgebung ist. „Single-Thread“ bedeutet, dass alle Anfragen an den Server im selben Thread ausgeführt werden (anstatt in separaten Prozessen erzeugt zu werden). Dieses Modell ist äußerst effizient in Bezug auf Geschwindigkeit und Serverressourcen, bedeutet jedoch, dass, wenn eine Ihrer Funktionen blockierende, synchron Methoden aufrufen, die lange dauern, sie nicht nur die aktuelle Anfrage, sondern alle anderen Anfragen blockieren, die von Ihrer Webanwendung bearbeitet werden.

Es gibt eine Reihe von Möglichkeiten für eine asynchrone API, Ihre Anwendung darüber zu benachrichtigen, dass sie abgeschlossen wurde. Der häufigste Weg besteht darin, beim Aufruf der asynchronen API eine Callback-Funktion zu registrieren, die bei Abschluss des Vorgangs zurückgerufen wird. Dies ist die oben verwendete Methode.

> [!NOTE]
> Die Verwendung von Rückrufen kann recht „unordentlich“ sein, wenn Sie eine Sequenz abhängiger asynchroner Vorgänge haben, die in Reihenfolge durchgeführt werden müssen, da dies zu mehreren Ebenen verschachtelter Rückrufe führt. Dieses Problem ist allgemein als „Callback-Hölle“ bekannt. Dieses Problem kann durch gute Kodierungspraktiken reduziert werden (siehe <http://callbackhell.com/>), durch die Verwendung eines Moduls wie [async](https://www.npmjs.com/package/async) oder durch refactoring des Codes zu nativen JavaScript-Funktionen wie [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) und [async/await](/de/docs/Web/JavaScript/Reference/Statements/async_function). Node bietet die [`utils.promisify`](https://nodejs.org/api/util.html#utilpromisifyoriginal)-Funktion, um die Callback→Promise-Umwandlung ergonomisch durchzuführen.

> [!NOTE]
> Eine häufige Konvention für Node und Express ist die Verwendung von fehler-ersten Rückrufen. In dieser Konvention ist der erste Wert in Ihren _Callback-Funktionen_ ein Fehlerwert, während nachfolgende Argumente Erfolgsdaten enthalten. Es gibt eine gute Erklärung, warum dieser Ansatz nützlich ist, in diesem Blog: [The Node.js Way - Understanding Error-First Callbacks](https://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/) (fredkschott.com).

### Erstellen von Routenerstellern

In unserem _Hello World_-Express-Beispiel (siehe oben) haben wir eine (Callback-)Route-Handler-Funktion für HTTP-`GET`-Anfragen an die Site-Wurzel (`'/'`) definiert.

```js
app.get("/", function (req, res) {
  res.send("Hello World!");
});
```

Die Callback-Funktion nimmt ein Anfragen- und ein Antwortobjekt als Argumente. In diesem Fall ruft die Methode [`send()`](https://expressjs.com/en/4x/api.html#res.send) auf der Antwort auf, um die Zeichenfolge "Hello World!" zurückzusenden. Es gibt eine [Reihe anderer Antwortmethoden](https://expressjs.com/en/guide/routing.html#response-methods) zum Beenden des Anfrage-/Antwortzyklus, zum Beispiel könnten Sie [`res.json()`](https://expressjs.com/en/4x/api.html#res.json) aufrufen, um eine JSON-Antwort zu senden oder [`res.sendFile()`](https://expressjs.com/en/4x/api.html#res.sendFile), um eine Datei zu senden.

> [!NOTE]
> Sie können in den Callback-Funktionen beliebige Argumentnamen verwenden; wenn der Callback aufgerufen wird, wird das erste Argument immer die Anfrage und das zweite immer die Antwort sein. Es ist sinnvoll, sie so zu benennen, dass Sie das Objekt, mit dem Sie arbeiten, im Körper des Callback identifizieren können.

Das _Express-Anwendungsobjekt_ stellt auch Methoden zum Definieren von Routenhandhabern für alle anderen HTTP-Verben bereit, die größtenteils auf die gleiche Weise verwendet werden:

`checkout()`, `copy()`, **`delete()`**, **`get()`**, `head()`, `lock()`, `merge()`, `mkactivity()`, `mkcol()`, `move()`, `m-search()`, `notify()`, `options()`, `patch()`, **`post()`**, `purge()`, **`put()`**, `report()`, `search()`, `subscribe()`, `trace()`, `unlock()`, `unsubscribe()`.

Es gibt eine spezielle Routing-Methode, `app.all()`, die als Antwort auf jede HTTP-Methode aufgerufen wird. Diese wird verwendet, um Middleware-Funktionen an einem bestimmten Pfad für alle Anfrage-Methoden zu laden. Das folgende Beispiel (aus der Express-Dokumentation) zeigt einen Handler, der für Anfragen an `/secret` unabhängig von dem verwendeten HTTP-Verb ausgeführt wird (vorausgesetzt, es wird vom [http-Modul](https://nodejs.org/docs/latest/api/http.html#httpmethods) unterstützt).

```js
app.all("/secret", function (req, res, next) {
  console.log("Accessing the secret section…");
  next(); // pass control to the next handler
});
```

Routen ermöglichen es Ihnen, bestimmte Zeichenmuster in einer URL abzugleichen und einige Werte aus der URL zu extrahieren und sie als Parameter an den Routenhandler zu übergeben (als Attribute des Anfragenobjekts, das als Parameter übergeben wird).

Oft ist es nützlich, Routenhandler für einen bestimmten Teil einer Site zusammenzufassen und auf sie mit einem gemeinsamen Routen-Prefix zuzugreifen (z. B. könnte eine Site mit einem Wiki alle wiki-bezogenen Routen in einer Datei haben und auf sie mit einem Routen-Prefix von _/wiki/_ zugreifen). In _Express_ wird dies durch Verwendung des [`express.Router`](https://expressjs.com/en/guide/routing.html#express-router)-Objekts erreicht. Zum Beispiel können wir unsere Wiki-Route in einem Modul namens **wiki.js** erstellen und dann das `Router`-Objekt wie unten gezeigt exportieren:

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

Um den Router in unserer Hauptanwendungsdatei zu verwenden, `require()` wir dann das Routemodul (**wiki.js**) und rufen dann `use()` auf der _Express-Anwendung_ auf, um den Router zum Middleware-Handling-Pfad hinzuzufügen. Die beiden Routen sind dann über `/wiki/` und `/wiki/about/` erreichbar.

```js
const wiki = require("./wiki.js");
// …
app.use("/wiki", wiki);
```

Wir zeigen Ihnen später im verlinkten Abschnitt [Routen und Controller](/de/docs/Learn/Server-side/Express_Nodejs/routes) noch viel mehr über die Arbeit mit Routen und insbesondere über die Verwendung des `Router`.

### Middleware verwenden

In Express-Apps wird Middleware häufig für Aufgaben von der Bereitstellung statischer Dateien bis zur Fehlerbehandlung und zur Komprimierung von HTTP-Antworten verwendet. Während Routenfunktionen den HTTP-Anfragen-Antwortzyklus beenden, indem sie einige Antworten an den HTTP-Client zurückgeben, führen Middleware-Funktionen _typischerweise_ einige Operationen auf der Anfrage oder Antwort aus und rufen dann die nächste Funktion im „Stack“ auf, die entweder mehr Middleware oder ein Routenhandler sein könnte. Die Reihenfolge, in der Middleware aufgerufen wird, liegt im Ermessen des App-Entwicklers.

> [!NOTE]
> Die Middleware kann jede Operation ausführen, jeden Code ausführen, Änderungen am Anfragen- und Antwortobjekt vornehmen und _auch den Anfragen-Antwortzyklus beenden_. Wenn es den Zyklus nicht endet, muss es `next()` aufrufen, um die Kontrolle an die nächste Middleware-Funktion zu übergeben (oder die Anfrage bleibt hängen).

Die meisten Apps verwenden _Drittanbieter_-Middleware, um allgemeine Webentwicklungsaufgaben wie das Arbeiten mit Cookies, Sitzungen, Benutzerabmeldungen, Zugriff auf Anfragen-`POST`- und JSON-Daten, Protokollierung usw. zu vereinfachen. Sie können eine [Liste von Middleware-Paketen, die von den Express-Teams gepflegt werden, finden](https://expressjs.com/en/resources/middleware.html) (die auch andere beliebte Pakete von Drittanbietern umfasst). Andere Express-Pakete sind auf dem npm-Paketmanager verfügbar.

Um Drittanbieter-Middleware zu verwenden, müssen Sie sie zunächst mit npm in Ihre App installieren. Zum Beispiel, um die [morgan](https://expressjs.com/en/resources/middleware/morgan.html) HTTP-Anfragen-Logger-Middleware zu installieren, würden Sie dies tun:

```bash
npm install morgan
```

Dann könnten Sie `use()` auf dem _Express-Anwendungsobjekt_ aufrufen, um die Middleware zum Stack hinzuzufügen:

```js
const express = require("express");
const logger = require("morgan");
const app = express();
app.use(logger("dev"));
// …
```

> [!NOTE]
> Middleware- und Routing-Funktionen werden in der Reihenfolge aufgerufen, in der sie deklariert sind. Bei einigen Mittelwerten ist die Reihenfolge wichtig (zum Beispiel, wenn Sitzungsmiddleware von Cookie-Middleware abhängt, muss der Cookie-Handler zuerst hinzugefügt werden). Fast immer wird Middleware vor der Einrichtung von Routen aufgerufen, oder Ihre Routenhandler haben keinen Zugriff auf die von Ihrer Middleware hinzugefügte Funktionalität.

Sie können Ihre eigenen Middleware-Funktionen schreiben, und Sie müssen dies wahrscheinlich tun (wenn nur um Fehlerbehandlungscode zu erstellen). Der **einzige** Unterschied zwischen einer Middleware-Funktion und einem Routen-Handler-Callback ist, dass Middleware-Funktionen ein drittes Argument `next` haben, welches Middleware-Funktionen aufrufen sollen, wenn sie nicht diejenigen sind, die den Anfragenzyklus abschließen (wenn die Middleware-Funktion aufgerufen wird, enthält dies die _nächste_ Funktion, die aufgerufen werden muss).

Sie können eine Middleware-Funktion zur Bearbeitungskette für _alle Antworten_ mit `app.use()` hinzufügen oder für ein bestimmtes HTTP-Verb mit der zugehörigen Methode: `app.get()`, `app.post()` usw. Die Routen werden in beiden Fällen auf die gleiche Weise angegeben, obwohl die Route bei Aufruf von `app.use()` optional ist.

Das folgende Beispiel zeigt, wie Sie die Middleware-Funktion mit beiden Ansätzen und mit/ohne Route hinzufügen können:

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
app.use("/someroute", a_middleware_function);

// A middleware function added for a specific HTTP verb and route
app.get("/", a_middleware_function);

app.listen(3000);
```

> [!NOTE]
> Oben definieren wir die Middleware-Funktion separat und setzen sie dann als Callback. In unserer vorherigen Routenhandlerfunktion haben wir die Callback-Funktion beim Gebrauch deklariert. In JavaScript sind beide Ansätze gültig.

Die Express-Dokumentation enthält eine Menge weiterer ausgezeichneter Dokumentation zur [Verwendung](https://expressjs.com/en/guide/using-middleware.html) und zum [Schreiben](https://expressjs.com/en/guide/writing-middleware.html) von Express-Middleware.

### Statische Dateien bereitstellen

Sie können die [express.static](https://expressjs.com/en/4x/api.html#express.static)-Middleware verwenden, um statische Dateien bereitzustellen, einschließlich Ihrer Bilder, CSS und JavaScript (`static()` ist die einzige Middleware-Funktion, die tatsächlich **Teil** von _Express_ ist). Zum Beispiel würden Sie die folgende Zeile verwenden, um Bilder, CSS-Dateien und JavaScript-Dateien aus einem Verzeichnis namens '**public'** auf derselben Ebene wie der Knotenaufruf bereitzustellen:

```js
app.use(express.static("public"));
```

Alle Dateien im öffentlichen Verzeichnis werden bereitgestellt, indem der Dateiname (_relativ_ zum Basisverzeichnis „public“) zur Basis-URL hinzugefügt wird. Also zum Beispiel:

```plain
http://localhost:3000/images/dog.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/about.html
```

Sie können `static()` mehrmals aufrufen, um mehrere Verzeichnisse bereitzustellen. Wenn eine Datei von einer Middleware-Funktion nicht gefunden werden kann, wird sie an die nachfolgende Middleware weitergeleitet (die Reihenfolge, in der Middleware aufgerufen wird, beruht auf Ihrer Deklarationsreihenfolge).

```js
app.use(express.static("public"));
app.use(express.static("media"));
```

Sie können auch ein virtuelles Präfix für Ihre statischen URLs erstellen, anstatt die Dateien zur Basis-URL hinzuzufügen. Zum Beispiel geben wir hier einen [Einhängepfad an](https://expressjs.com/en/4x/api.html#app.use), damit die Dateien mit dem Präfix „/media“ geladen werden:

```js
app.use("/media", express.static("public"));
```

Jetzt können Sie die Dateien, die sich im `public`-Verzeichnis befinden, vom `/media`-Pfadprefix laden.

```plain
http://localhost:3000/media/images/dog.jpg
http://localhost:3000/media/video/cat.mp4
http://localhost:3000/media/cry.mp3
```

> [!NOTE]
> Siehe auch [Bereitstellen von statischen Dateien in Express](https://expressjs.com/en/starter/static-files.html).

### Fehlerbehandlung

Fehler werden von einer oder mehreren speziellen Middleware-Funktionen behandelt, die vier Argumente haben, anstelle der üblichen drei: `(err, req, res, next)`. Zum Beispiel:

```js
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

Diese können beliebige erforderliche Inhalte zurückgeben, müssen aber nach allen anderen `app.use()` und Routenaufrufen aufgerufen werden, damit sie die letzte Middleware im Anfragenhandlungsprozess sind!

Express wird mit einem integrierten Fehlerhandler geliefert, der alle verbleibenden Fehler behandelt, die in der App auftreten könnten. Diese Standardfehlerbehandlungs-Middleware-Funktion wird am Ende des Middleware-Funktionsstapels hinzugefügt. Wenn Sie einen Fehler an `next()` übergeben und diesen nicht in einem Fehlerhandler behandeln, wird er vom integrierten Fehlerhandler behandelt; der Fehler wird mit dem Stack-Trace an den Client geschrieben.

> [!NOTE]
> Der Stack-Trace ist nicht in der Produktionsumgebung enthalten. Um ihn im Produktionsmodus auszuführen, müssen Sie die Umgebungsvariable `NODE_ENV` auf „production“ setzen.

> [!NOTE]
> HTTP404 und andere „Fehler“-Statuscodes werden nicht als Fehler behandelt. Wenn Sie diese behandeln möchten, können Sie eine Middleware-Funktion dazu hinzufügen. Weitere Informationen finden Sie in den [FAQ](https://expressjs.com/en/starter/faq.html#how-do-i-handle-404-responses).

Weitere Informationen finden Sie unter [Fehlerbehandlung](https://expressjs.com/en/guide/error-handling.html) (Express-Dokumentation).

### Verwendung von Datenbanken

_Express_-Apps können jeden von _Node_ unterstützten Datenbankmechanismus verwenden (_Express_ definiert selbst kein spezifisches zusätzliches Verhalten/Anforderungen für das Datenbankmanagement). Es gibt viele Optionen, einschließlich PostgreSQL, MySQL, Redis, SQLite, MongoDB usw.

Um diese zu verwenden, müssen Sie zunächst den Datenbanktreiber mit npm installieren. Zum Beispiel würden Sie den beliebten NoSQL MongoDB-Treiber mit dem Befehl:

```bash
npm install mongodb
```

Die Datenbank selbst kann lokal oder auf einem Cloud-Server installiert werden. In Ihrem Express-Code fordern Sie den Treiber an, stellen eine Verbindung zur Datenbank her und führen dann Erstellungs-, Lese-, Änderungs- und Löschoperationen (CRUD) durch. Das unten stehende Beispiel (aus der Express-Dokumentation) zeigt, wie Sie „Säugetiere“ -Datensätze mit MongoDB finden können.

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

Ein weiterer beliebter Ansatz besteht darin, auf Ihre Datenbank indirekt über einen sogenannten Object Relational Mapper ("ORM") zuzugreifen. In diesem Ansatz definieren Sie Ihre Daten als "Objekte" oder "Modelle" und der ORM derzeit diese durch das zugrunde liegende Datenbankformat. Dieser Ansatz hat den Vorteil, dass Sie als Entwickler weiterhin in Bezug auf JavaScript-Objekte denken können, anstatt sich mit den Prinzipien der Datenbank zu befassen, und dass es einen offensichtlichen Platz gibt, um eingehende Daten zu validieren und zu überprüfen. Wir werden mehr über Datenbanken in einem späteren Artikel sprechen.

Weitere Informationen finden Sie unter [Database integration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation).

### Datenrendering (Ansichten)

Template-Engines (in _Express_ auch als „View-Engines“ bezeichnet) ermöglichen es Ihnen, die _Struktur_ eines Ausgabedokuments in einer Vorlage zu spezifizieren, wobei Platzhalter für Daten vorgesehen sind, die bei der Generierung einer Seite ausgefüllt werden. Vorlagen werden häufig zur Erstellung von HTML verwendet, können aber auch andere Arten von Dokumenten erstellen.

Express bietet Unterstützung für eine Reihe von Template-Engines, insbesondere Pug (ehemals „Jade“), Mustache und EJS. Jede hat ihre eigenen Stärken für spezifische Einsatzfälle (relative Vergleiche können leicht über Internetsuche gefunden werden). Der Express-Generierungsgenerator verwendet Jade als Standard, unterstützt aber auch mehrere andere.

In Ihrem Anwendungseinstellungscode setzen Sie die zu verwendende Template-Engine und die Stelle, an der Express nach Vorlagen suchen soll, mit den „views“- und „view engine“-Einstellungen, wie unten gezeigt (Sie müssen auch das Paket installieren, das Ihre Template-Bibliothek enthält!)

```js
const express = require("express");
const path = require("path");
const app = express();

// Set directory to contain the templates ('views')
app.set("views", path.join(__dirname, "views"));

// Set view engine to use, in this case 'some_template_engine_name'
app.set("view engine", "some_template_engine_name");
```

Das Erscheinungsbild der Vorlage hängt davon ab, welche Engine Sie verwenden. Angenommen, Sie haben eine Vorlagendatei namens „index.\<template_extension>“, die Platzhalter für Datenvariablen namens 'title' und 'message' enthält, würden Sie [`Response.render()`](https://expressjs.com/en/4x/api.html#res.render) in einer Route-Handler-Funktion aufrufen, um die HTML-Antwort zu erstellen und zu senden:

```js
app.get("/", function (req, res) {
  res.render("index", { title: "About dogs", message: "Dogs rock!" });
});
```

Weitere Informationen finden Sie unter [Verwendung von Template-Engines mit Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation).

### Dateistruktur

Express macht keine Annahmen hinsichtlich der Struktur oder der verwendeten Komponenten. Routen, Ansichten, statische Dateien und andere anwendungsspezifische Logik können in einer beliebigen Anzahl von Dateien mit beliebiger Verzeichnisstruktur vorhanden sein. Während es absolut möglich ist, die gesamte _Express_-Anwendung in einer einzigen Datei zu haben, macht es typischerweise Sinn, Ihre Anwendung auf Dateien basierend auf Funktion (z. B. Kontoverwaltung, Blogs, Diskussionsforen) und architektonischem Problembereich (z. B. Modell, Ansicht oder Controller, wenn Sie eine {{Glossary("MVC", "MVC-Architektur")}} verwenden) aufzuteilen.

In einem späteren Thema werden wir den _Express-Anwendungsgenerator_ verwenden, der ein modulares App-Gerüst erstellt, das wir leicht erweitern können, um Webanwendungen zu erstellen.

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben den ersten Schritt auf Ihrer Express/Node-Reise abgeschlossen! Sie sollten jetzt die Hauptvorteile von Express und Node verstehen und ungefähr wissen, wie die wichtigsten Teile einer Express-App aussehen könnten (Routen, Middleware, Fehlerbehandlung und Template-Code). Sie sollten auch verstehen, dass da Express ein unmeinungsfreies Framework ist, die Art und Weise, wie Sie diese Teile zusammenfügen und welche Bibliotheken Sie verwenden, weitgehend Ihnen überlassen sind!

Natürlich ist Express bewusst ein sehr leichtgewichtiges Webanwendungs-Framework, daher kommen viele seiner Vorteile und Möglichkeiten aus Bibliotheken und Funktionen von Drittanbietern. Wir werden diese in den folgenden Artikeln genauer betrachten. In unserem nächsten Artikel werden wir uns mit der Einrichtung einer Node-Entwicklungsumgebung befassen, damit Sie einige Express-Codes in Aktion sehen können.

## Siehe auch

- [Venkat.R - Verwalten Sie mehrere Node-Versionen](https://medium.com/@ramsunvtech/manage-multiple-node-versions-e3245d5ede44)
- [Module](https://nodejs.org/api/modules.html#modules_modules) (Node API-Dokumentation)
- [Express](https://expressjs.com/) (Startseite)
- [Grundlegendes Routing](https://expressjs.com/en/starter/basic-routing.html) (Express-Dokumentation)
- [Routing Guide](https://expressjs.com/en/guide/routing.html) (Express-Dokumentation)
- [Verwendung von Template-Engines mit Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation)
- [Verwendung von Middleware](https://expressjs.com/en/guide/using-middleware.html) (Express-Dokumentation)
- [Schreiben von Middleware zur Verwendung in Express-Apps](https://expressjs.com/en/guide/writing-middleware.html) (Express-Dokumentation)
- [Database integration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation)
- [Bereitstellen von statischen Dateien in Express](https://expressjs.com/en/starter/static-files.html) (Express-Dokumentation)
- [Fehlerbehandlung](https://expressjs.com/en/guide/error-handling.html) (Express-Dokumentation)

{{NextMenu("Learn/Server-side/Express_Nodejs/development_environment", "Learn/Server-side/Express_Nodejs")}}
