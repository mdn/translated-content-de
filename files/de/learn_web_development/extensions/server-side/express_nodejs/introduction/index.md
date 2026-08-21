---
title: Einführung in Express/Node
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction
l10n:
  sourceCommit: f99d00a1c3697e26a679925954e26564e7e79b98
---

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Im ersten Express-Artikel beantworten wir die Fragen "Was ist Node?" und "Was ist Express?" und geben Ihnen einen Überblick darüber, was das Express-Web-Framework besonders macht. Wir skizzieren die Hauptmerkmale und zeigen Ihnen einige der wichtigsten Bausteine einer Express-Anwendung (obwohl Sie zu diesem Zeitpunkt noch keine Entwicklungsumgebung haben, um es zu testen).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein allgemeines Verständnis von <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps">serverseitigem Website-Programmieren</a> und insbesondere die Mechanismen von <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview">Client-Server-Interaktionen in Websites</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Sich mit Express vertraut zu machen und zu verstehen, wie es mit Node zusammenpasst, welche Funktionalität es bietet und welche Hauptbausteine eine Express-Anwendung hat.
      </td>
    </tr>
  </tbody>
</table>

## Einführung in Node

[Node](https://nodejs.org/) (oder formeller _Node.js_) ist eine Open-Source, plattformübergreifende Laufzeitumgebung, die es Entwicklern ermöglicht, alle Arten von serverseitigen Werkzeugen und Anwendungen in {{Glossary("JavaScript", "JavaScript")}} zu erstellen.
Die Laufzeitumgebung ist für die Verwendung außerhalb eines Browsers konzipiert (d.h. direkt auf einem Computer oder Server-Betriebssystem auszuführen). Daher lässt die Umgebung browser-spezifische JavaScript-APIs weg und fügt Unterstützung für traditionellere OS-APIs hinzu, einschließlich HTTP- und Dateisystem-Bibliotheken.

Aus der Perspektive der Webserver-Entwicklung bietet Node eine Reihe von Vorteilen:

- Hervorragende Leistung! Node wurde entwickelt, um Durchsatz und Skalierbarkeit in Webanwendungen zu optimieren, und ist eine gute Lösung für viele gängige Webentwicklung-Probleme (z.B. Echtzeit-Webanwendungen).
- Der Code wird in "ganz normalem JavaScript" geschrieben, was bedeutet, dass weniger Zeit mit dem Umgang mit "Kontextwechsel" zwischen Sprachen verbracht wird, wenn Sie sowohl clientseitigen als auch serverseitigen Code schreiben.
- JavaScript ist eine relativ neue Programmiersprache und profitiert von Verbesserungen im Sprachdesign im Vergleich zu anderen traditionellen Webserver-Sprachen (z.B. Python, PHP, etc.). Viele andere neue und beliebte Sprachen werden zu JavaScript kompiliert/konvertiert, so dass Sie auch TypeScript, CoffeeScript, ClojureScript, Scala, LiveScript usw. nutzen können.
- Der Node-Paketmanager (npm) bietet Zugang zu Hunderttausenden von wiederverwendbaren Paketen. Er hat auch eine erstklassige Abhängigkeitsauflösung und kann auch für die Automatisierung der meisten Build-Toolchains verwendet werden.
- Node.js ist portabel. Es ist auf Microsoft Windows, macOS, Linux, Solaris, FreeBSD, OpenBSD, WebOS und NonStop OS verfügbar. Außerdem wird es von vielen Webhosting-Anbietern gut unterstützt, die oft spezielle Infrastruktur und Dokumentation für das Hosting von Node-Seiten bereitstellen.
- Es gibt ein sehr aktives Ökosystem von Drittanbietern und eine Entwickler-Community, mit vielen Menschen, die bereit sind, zu helfen.

Mit Node.js können Sie einen einfachen Webserver mithilfe des Node HTTP-Pakets erstellen.

### Hallo Node.js

Das folgende Beispiel erstellt einen Webserver, der auf eine beliebige Art von HTTP-Anfrage an der URL `http://127.0.0.1:8000/` hört - wenn eine Anfrage empfangen wird, antwortet das Skript mit dem String: "Hello World". Falls Sie Node bereits installiert haben, können Sie diese Schritte ausführen, um das Beispiel auszuprobieren:

1. Öffnen Sie das Terminal (unter Windows öffnen Sie die Befehlszeilen-Dienstprogramm)
2. Erstellen Sie den Ordner, in dem Sie das Programm speichern möchten, zum Beispiel `test-node` und betreten Sie ihn, indem Sie den folgenden Befehl in Ihr Terminal eingeben:

   ```bash
   cd test-node
   ```

3. Erstellen Sie mit Ihrem bevorzugten Texteditor eine Datei namens `hello.js` und fügen Sie den folgenden Code darin ein:

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

4. Speichern Sie die Datei im oben erstellten Ordner.
5. Gehen Sie zurück zum Terminal und geben Sie den folgenden Befehl ein:

   ```bash
   node hello.js
   ```

Navigieren Sie schließlich zu `http://localhost:8000` in Ihrem Webbrowser; Sie sollten den Text "**Hello World**" in der oberen linken Ecke einer ansonsten leeren Webseite sehen.

> [!NOTE]
> Wenn Sie ohne lokale Einrichtung mit etwas Node.js-Code experimentieren möchten, bietet Ihnen Scrimba's [Aside: Das HTTP-Modul](https://scrimba.com/learn-nodejs-c00ho9qqh6/~07du?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> einen interaktiven Rundgang zur Einrichtung eines einfachen Servers mit dem Node HTTP-Paket.

## Web-Frameworks

Andere gängige Webentwicklungsaufgaben werden von Node selbst nicht direkt unterstützt. Wenn Sie eine spezifische Behandlung für verschiedene HTTP-Verben hinzufügen möchten (z.B. `GET`, `POST`, `DELETE` usw.), Anforderungen an verschiedenen URL-Pfaden ("Routen") separat bearbeiten, statische Dateien bedienen oder Vorlagen verwenden möchten, um die Antwort dynamisch zu erstellen, wird Node allein wenig hilfreich sein. Sie müssen entweder den Code selbst schreiben oder können das Rad nicht neu erfinden und ein Web-Framework verwenden!

## Einführung in Express

[Express](https://expressjs.com/) ist das beliebteste Node.js-Webframework und die zugrunde liegende Bibliothek für eine Reihe anderer beliebter Node.js-Frameworks. Es bietet Mechanismen zum:

- Schreiben von Handlers für Anforderungen mit verschiedenen HTTP-Verben an verschiedenen URL-Pfaden (Routen).
- Integrieren mit "View"-Render-Engines, um Antworten zu generieren, indem Daten in Vorlagen eingefügt werden.
- Festlegen gängiger Einstellungen für Webanwendungen, wie den Port, der für die Verbindung genutzt wird, und den Ort der Vorlagen, die für die Anzeige der Antwort verwendet werden.
- Hinzufügen zusätzlicher Anforderungsverarbeitungs-"Middleware" an jeder Stelle innerhalb der Anforderungsbearbeitungspipeline.

Obwohl _Express_ selbst eher minimalistisch ist, haben Entwickler kompatible Middleware-Pakete erstellt, um nahezu jedes Webentwicklungsproblem zu lösen. Es gibt Bibliotheken zum Arbeiten mit Cookies, Sitzungen, Benutzeranmeldungen, URL-Parametern, `POST`-Daten, Sicherheits-Headern und _vielen_ mehr. Sie finden eine Liste von Middleware-Paketen, die vom Express-Team gepflegt werden, unter [Express Middleware](https://expressjs.com/en/resources/middleware/) (zusammen mit einer Liste einiger beliebter 3rd-Party-Pakete).

> [!NOTE]
> Diese Flexibilität ist ein zweischneidiges Schwert. Es gibt Middleware-Pakete, um fast jedes Problem oder jede Anforderung zu lösen, aber es kann manchmal eine Herausforderung sein, die richtigen Pakete auszuwählen. Außerdem gibt es keinen "richtigen Weg", eine Anwendung zu strukturieren, und viele Beispiele, die Sie im Internet finden könnten, sind nicht optimal oder zeigen nur einen kleinen Teil dessen, was Sie tun müssen, um eine Webanwendung zu entwickeln.

## Woher stammen Node und Express?

Node wurde ursprünglich 2009 zunächst nur für Linux veröffentlicht. Der npm-Paketmanager wurde 2010 veröffentlicht und die native Windows-Unterstützung wurde 2012 hinzugefügt. Wenn Sie mehr erfahren möchten, besuchen Sie [Wikipedia](https://en.wikipedia.org/wiki/Node.js#History).

Express wurde ursprünglich im November 2010 veröffentlicht und befindet sich derzeit in der Hauptversion 5 der API. Sie können das [Changelog](https://expressjs.com/en/changelog/#5.x) für Informationen über Änderungen in der aktuellen Version und [GitHub](https://github.com/expressjs/express/blob/master/History.md) für detailliertere historische Veröffentlichungsnotizen einsehen.

## Wie beliebt sind Node und Express?

Die Beliebtheit eines Web-Frameworks ist wichtig, da sie ein Indikator dafür ist, ob es weiterhin gepflegt wird und welche Ressourcen in Bezug auf Dokumentation, Zusatzbibliotheken und technischen Support wahrscheinlich verfügbar sind.

Es gibt kein unmittelbar verfügbares und definiertes Maß für die Beliebtheit von serverseitigen Frameworks (obwohl Sie die Beliebtheit durch Mechanismen wie das Zählen der Anzahl von GitHub-Projekten und Stack Overflow-Fragen für jede Plattform abschätzen können). Eine bessere Frage ist, ob Node und Express "beliebt genug" sind, um die Probleme unbeliebter Plattformen zu vermeiden. Entwickeln sie sich weiterhin? Können Sie Hilfe bekommen, wenn Sie sie brauchen? Gibt es die Möglichkeit für Sie, bezahlte Arbeit zu bekommen, wenn Sie Express lernen?

Basierend auf der Anzahl hochkarätiger Unternehmen, die Express verwenden, der Anzahl der Menschen, die zum Code beitragen, und der Anzahl der Menschen, die sowohl kostenlose als auch bezahlte Unterstützung anbieten, lautet die Antwort ja, _Express_ ist ein beliebtes Framework!

## Ist Express meinungsstark?

Web-Frameworks bezeichnen sich oft selbst als "meinungsstark" oder "nicht meinungsstark".

Meinungsstarke Frameworks sind solche mit klaren Vorstellungen darüber, wie jede Aufgabe "richtig" zu handhaben ist. Sie unterstützen häufig die schnelle Entwicklung _in einem bestimmten Bereich_ (Probleme eines bestimmten Typs zu lösen), da der richtige Weg, etwas zu tun, normalerweise gut verstanden und gut dokumentiert ist. Sie können jedoch weniger flexibel sein, um Probleme außerhalb ihres Hauptbereichs zu lösen, und tendieren dazu, weniger Auswahlmöglichkeiten in Bezug auf die Komponenten und Ansätze zu bieten, die sie nutzen können.

Nicht meinungsstarke Frameworks im Gegensatz dazu haben weit weniger Einschränkungen, wie Komponenten zusammengeführt werden sollen, um ein Ziel zu erreichen, oder sogar welche Komponenten verwendet werden sollen. Sie machen es Entwicklern einfacher, die geeignetsten Werkzeuge für eine bestimmte Aufgabe zu verwenden, wenn auch auf Kosten, dass Sie diese Komponenten selber finden müssen.

Express ist nicht meinungsstark. Sie können fast jedes kompatible Middleware einfügen, das Ihnen gefällt, in die Anforderungshandhabungskette und in fast jeder Reihenfolge, die Ihnen gefällt. Sie können die App in einer Datei oder mehreren Dateien und mit einer beliebigen Verzeichnisstruktur strukturieren. Manchmal haben Sie vielleicht das Gefühl, dass Sie zu viele Auswahlmöglichkeiten haben!

## Wie sieht Express-Code aus?

In einer traditionellen datengesteuerten Website wartet eine Webanwendung auf HTTP-Anfragen des Webbrowsers (oder eines anderen Clients). Wenn eine Anfrage eingegangen ist, überprüft die Anwendung, welche Aktion basierend auf dem URL-Muster und möglicherweise damit verbundenen Informationen durchgeführt werden muss, die in `POST`-Daten oder `GET`-Daten enthalten sind. Abhängig davon, was erforderlich ist, kann sie dann Informationen aus einer Datenbank lesen oder schreiben oder andere Aufgaben ausführen, die zur Erfüllung der Anfrage erforderlich sind. Die Anwendung sendet dann eine Antwort an den Webbrowser zurück, die häufig eine HTML-Seite dynamisch erstellt, die der Browser anzeigen kann, indem die abgerufenen Daten in Platzhalter in einer HTML-Vorlage eingefügt werden.

Express bietet Methoden, um zu spezifizieren, welche Funktion für ein bestimmtes HTTP-Verb (`GET`, `POST`, `PUT` usw.) und URL-Muster ("Route") aufgerufen wird, sowie Methoden, um anzugeben, welche Vorlage ("Ansicht") verwendet werden soll, wo sich die Vorlagendateien befinden und welche Vorlage zur Anzeige einer Antwort verwendet werden soll. Sie können Express-Middleware verwenden, um Unterstützung für Cookies, Sitzungen und Benutzer hinzuzufügen sowie `POST`/`GET`-Parameter zu erhalten usw. Sie können jeden Datenbankmechanismus verwenden, der von Node unterstützt wird (Express definiert kein datenbankspezifisches Verhalten).

Die folgenden Abschnitte erklären einige der Dinge, die Sie beim Arbeiten mit _Express_- und _Node_-Code häufig sehen werden.

### Helloworld Express

Betrachten wir zunächst das Standard-Express [Hello World](https://expressjs.com/en/starter/hello-world/) Beispiel (wir werden jedes Teil davon im Folgenden besprechen).

> [!NOTE]
> Wenn Sie Node und Express bereits installiert haben (oder wenn Sie sie wie im [nächsten Artikel](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) gezeigt installieren), können Sie diesen Code in eine Textdatei namens **app.js** speichern und ihn in einem Bash-Kommandozeilen-Prompt durch Aufruf von:
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

Die ersten beiden Zeilen `require()` (importieren) das Express-Modul und erstellen eine [Express-Anwendung](https://expressjs.com/en/5x/api/#app). Dieses Objekt, das traditionell `app` genannt wird, verfügt über Methoden zum Routing von HTTP-Anfragen, Konfigurieren von Middleware, Rendern von HTML-Ansichten, Registrieren einer Template-Engine und Ändern von [Anwendungseinstellungen](https://expressjs.com/en/5x/api/#app.settings.table), die das Verhalten der Anwendung steuern (z.B. den Umgebungsmodus, ob Routen-Definitionen Groß-/Kleinschreibung beachten usw.)

Der mittlere Teil des Codes (die drei Zeilen, die mit `app.get` beginnen) zeigt eine _Routendefinition_. Die Methode `app.get()` gibt eine Rückruffunktion an, die immer dann aufgerufen wird, wenn eine HTTP `GET`-Anfrage mit einem Pfad (`'/'`) relativ zum Website-Stamm erfolgt. Die Rückruffunktion nimmt ein Anforderungs- und ein Antwortobjekt als Argumente entgegen und ruft [`send()`](https://expressjs.com/en/5x/api/#res.send) auf der Antwort auf, um den String "Hello World!" zu senden.

Der letzte Block startet den Server auf einem angegebenen Port ('3000') und gibt einen Protokollkommentar in die Konsole aus. Wenn der Server läuft, können Sie `localhost:3000` in Ihrem Browser aufrufen, um die zurückgegebene Beispielantwort zu sehen.

### Importieren und Erstellen von Modulen

Ein Modul ist eine JavaScript-Bibliothek/-Datei, die Sie mit der `require()`-Funktion von Node in anderen Code importieren können. _Express_ selbst ist ein Modul, ebenso wie die Middleware- und Datenbankbibliotheken, die wir in unseren _Express_-Anwendungen verwenden.

Der folgende Code zeigt, wie wir ein Modul per Name importieren, indem wir das _Express_-Framework als Beispiel verwenden. Zuerst rufen wir die `require()`-Funktion auf, dabei geben wir den Namen des Moduls als String (`'express'`) an, und rufen das zurückgegebene Objekt auf, um eine [Express-Anwendung](https://expressjs.com/en/5x/api/#app) zu erstellen. Wir können dann auf die Eigenschaften und Funktionen des Anwendungsobjekts zugreifen.

```js
const express = require("express");

const app = express();
```

Sie können auch eigene Module erstellen, die auf dieselbe Weise importiert werden können.

> [!NOTE]
> Sie _möchten_ eigene Module erstellen, da dies Ihnen ermöglicht, Ihren Code in verwaltbare Teile zu organisieren — eine monolithische Ein-Datei-Anwendung ist schwer zu verstehen und zu warten. Die Verwendung von Modulen hilft Ihnen auch, Ihren Namensraum zu verwalten, da nur die Variablen, die Sie explizit exportieren, importiert werden, wenn Sie ein Modul verwenden.

Um Objekte außerhalb eines Moduls verfügbar zu machen, müssen Sie diese einfach als zusätzliche Eigenschaften in das `exports`-Objekt einfügen. Zum Beispiel ist das Modul **square.js** unten eine Datei, die `area()`- und `perimeter()`-Methoden exportiert:

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
> Sie können auch einen absoluten Pfad zum Modul angeben (oder einen Namen, wie wir es ursprünglich taten).

Wenn Sie ein vollständiges Objekt in einer Zuweisung exportieren möchten, anstatt es Schritt für Schritt aufzubauen, weisen Sie es `module.exports` zu, wie unten gezeigt (Sie können dies auch tun, um das Stammobjekt der Exporte zu einem Konstruktor oder einer anderen Funktion zu machen):

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
> Sie können `exports` als [Abkürzung](https://nodejs.org/api/modules.html#modules_exports_shortcut) für `module.exports` innerhalb eines bestimmten Moduls betrachten. Tatsächlich ist `exports` nur eine Variable, die auf den Wert von `module.exports` initialisiert wird, bevor das Modul ausgewertet wird. Dieser Wert ist eine Referenz zu einem Objekt (leeres Objekt in diesem Fall). Das bedeutet, dass `exports` eine Referenz auf dasselbe Objekt hält, auf das `module.exports` verweist. Es bedeutet auch, dass durch Zuweisung eines anderen Werts zu `exports` es nicht mehr an `module.exports` gebunden ist.

Für viel mehr Informationen über Module siehe [Module](https://nodejs.org/api/modules.html#modules_modules) (Node API-Dokumentation).

### Verwendung asynchroner APIs

JavaScript-Code verwendet häufig asynchrone statt synchroner APIs für Vorgänge, die einige Zeit in Anspruch nehmen können. Eine synchrone API ist eine, bei der jeder Vorgang abgeschlossen sein muss, bevor der nächste Vorgang starten kann. Zum Beispiel sind die folgenden Protokollfunktionen synchron und geben den Text in der richtigen Reihenfolge auf der Konsole aus (First, Second).

```js
console.log("First");
console.log("Second");
```

Im Gegensatz dazu ist eine asynchrone API eine, bei der die API einen Vorgang startet und sofort zurückkehrt (bevor der Vorgang abgeschlossen ist). Sobald der Vorgang abgeschlossen ist, verwendet die API einen Mechanismus, um zusätzliche Vorgänge auszuführen. Beispielsweise wird der folgende Code "Second, First" ausgeben, da auch wenn die Methode `setTimeout()` zuerst aufgerufen wird und sofort zurückkehrt, der Vorgang mehrere Sekunden dauert, bis er abgeschlossen ist.

```js
setTimeout(() => {
  console.log("First");
}, 3000);
console.log("Second");
```

Die Verwendung nicht blockierender asynchroner APIs ist in Node noch wichtiger als im Browser, da _Node_-Anwendungen oft als Single-Threaded, ereignisgesteuerte Ausführungsumgebung geschrieben werden. "Single Threaded" bedeutet, dass alle Anfragen an den Server im selben Thread ausgeführt werden (anstatt in separaten Prozessen gespawnt zu werden). Dieses Modell ist in Bezug auf Geschwindigkeit und Serverressourcen extrem effizient. Es bedeutet jedoch, dass wenn eine Ihrer Funktionen synchronen Methoden aufruft, die lange dauern, sie nicht nur die aktuelle Anfrage blockieren, sondern auch jede andere Anfrage, die von Ihrer Webanwendung behandelt wird.

Es gibt mehrere Möglichkeiten für eine asynchrone API, Ihre Anwendung darüber zu informieren, dass sie abgeschlossen ist. Historisch gesehen wurde der Ansatz verwendet, beim Aufruf der asynchronen API eine Rückruffunktion zu registrieren, die aufgerufen wird, wenn der Vorgang abgeschlossen ist (dies ist der oben verwendete Ansatz).

> [!NOTE]
> Die Verwendung von Rückrufen kann sehr "unordentlich" sein, wenn Sie eine Folge von abhängigen asynchronen Vorgängen haben, die in Reihenfolge ausgeführt werden müssen, da dies zu mehreren Ebenen von verschachtelten Rückrufen führt. Dieses Problem ist allgemein als "callback hell" bekannt.

> [!NOTE]
> Eine häufige Konvention für Node und Express ist die Verwendung von Fehler-ersten Rückrufen. In dieser Konvention ist der erste Wert in Ihren _callback-Funktionen_ ein Fehlerwert, während nachfolgende Argumente Erfolgsdaten enthalten. Es gibt eine gute Erklärung, warum dieser Ansatz nützlich ist, in diesem Blog: [The Node.js Way - Understanding Error-First Callbacks](https://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/) (fredkschott.com).

Moderner JavaScript-Code verwendet häufiger [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) und [async/await](/de/docs/Web/JavaScript/Reference/Statements/async_function), um den asynchronen Programmfluss zu verwalten.
Sie sollten möglichst Promises verwenden. Wenn Sie mit Code arbeiten, der Rückrufe verwendet, können Sie die Node.js [`utils.promisify`](https://nodejs.org/api/util.html#utilpromisifyoriginal) Funktion verwenden, um die Rückruf- → Promise-Konvertierung ergonomisch zu handhaben.

### Erstellen von Routen-Handlern

In unserem _Hello World_ Express-Beispiel (siehe oben) haben wir eine (Rückruf-)Routen-Handler-Funktion für HTTP `GET`-Anfragen an den Website-Stamm (`'/'`) definiert.

```js
app.get("/", (req, res) => {
  res.send("Hello World!");
});
```

Die Rückruffunktion nimmt ein Anforderungs- und ein Antwortobjekt als Argumente an. In diesem Fall ruft die Methode [`send()`](https://expressjs.com/en/5x/api/#res.send) auf der Antwort auf, um den String "Hello World!" zu senden. Es gibt eine [Reihe anderer Antwortmethoden](https://expressjs.com/en/guide/routing/#response-methods) für das Beenden des Anforderungs-/Antwortzyklus, z. B. könnten Sie [`res.json()`](https://expressjs.com/en/5x/api/#res.json) aufrufen, um eine JSON-Antwort zu senden, oder [`res.sendFile()`](https://expressjs.com/en/5x/api/#res.sendFile), um eine Datei zu senden.

> [!NOTE]
> Sie können in den Rückruffunktionen beliebige Argumentnamen verwenden; wenn der Rückruf aufgerufen wird, ist das erste Argument immer die Anforderung und das zweite immer die Antwort. Es ist sinnvoll, sie so zu benennen, dass Sie wissen, mit welchem Objekt Sie im Rückruf arbeiten.

Das _Express-Anwendungs_-Objekt stellt auch Methoden zur Definition von Routen-Handlern für alle anderen HTTP-Verben bereit, die meist auf die gleiche Weise verwendet werden:

`checkout()`, `copy()`, **`delete()`**, **`get()`**, `head()`, `lock()`, `merge()`, `mkactivity()`, `mkcol()`, `move()`, `m-search()`, `notify()`, `options()`, `patch()`, **`post()`**, `purge()`, **`put()`**, `report()`, `search()`, `subscribe()`, `trace()`, `unlock()`, `unsubscribe()`.

Es gibt eine spezielle Routing-Methode, `app.all()`, die in Antwort auf eine beliebige HTTP-Methode aufgerufen wird. Diese Methode wird zum Laden von Middleware-Funktionen an einem bestimmten Pfad für alle Anforderung-Methode verwendet. Das folgende Beispiel (aus der Express-Dokumentation) zeigt einen Handler, der für Anfragen an `/secret` unabhängig vom verwendeten HTTP-Verb ausgeführt wird (vorausgesetzt, es wird vom [http-Modul](https://nodejs.org/docs/latest/api/http.html#httpmethods) unterstützt).

```js
app.all("/secret", (req, res, next) => {
  console.log("Accessing the secret section…");
  next(); // pass control to the next handler
});
```

Routen ermöglichen es Ihnen, bestimmte Zeichenmuster in einer URL abzugleichen, einige Werte aus der URL zu extrahieren und sie als Parameter an den Routen-Handler zu übergeben (als Attribute des Anforderungsobjekts, das als Parameter übergeben wird).

Oft ist es nützlich, Routen-Handler für einen bestimmten Teil einer Website zusammenzufassen und sie mit einem gemeinsamen Routenpräfix aufzurufen (z.B. könnte eine Website mit einem Wiki alle Wiki-bezogenen Routen in einer Datei haben und sie mit einem Routenpräfix von _/wiki/_ zugänglich machen). In _Express_ wird dies erreicht, indem das [`express.Router`](https://expressjs.com/en/guide/routing/#express-router) Objekt verwendet wird. Beispielsweise können wir unsere Wiki-Route in einem Modul namens **wiki.js** erstellen und dann das `Router`-Objekt, wie unten gezeigt, exportieren:

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
> Das Hinzufügen von Routen zum `Router`-Objekt erfolgt genau wie das Hinzufügen von Routen zum `app`-Objekt (wie zuvor gezeigt).

Um den Router in unserer Haupt-Anwendungsdatei zu verwenden, würden wir dann das Routemodul (**wiki.js**) mit `require()` einfügen und dann `use()` auf der _Express-Anwendung_ aufrufen, um den Router dem Middleware-Verarbeitungspfad hinzuzufügen. Die beiden Routen wären dann unter `/wiki/` und `/wiki/about/` zu erreichen.

```js
const wiki = require("./wiki.js");

// …
app.use("/wiki", wiki);
```

Wir werden Ihnen später in dem verlinkten Abschnitt [Routen und Controller](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes) viel mehr über das Arbeiten mit Routen, und insbesondere über die Verwendung des `Router`, zeigen.

### Verwendung von Middleware

Middleware wird in Express-Apps ausgiebig für Aufgaben von der Bereitstellung statischer Dateien bis zur Fehlerbehandlung und zum Komprimieren von HTTP-Antworten verwendet. Während Routenfunktionen den HTTP-Anfrage-Antwort-Zyklus durch Rückgabe einer Antwort an den HTTP-Client beenden, führen Middleware-Funktionen _typischerweise_ eine Operation an der Anforderung oder Antwort durch und rufen dann die nächste Funktion im "Stack" auf, was entweder mehr Middleware oder einen Routen-Handler sein kann. Die Reihenfolge, in der Middleware aufgerufen wird, liegt beim App-Entwickler.

> [!NOTE]
> Die Middleware kann jede Operation ausführen, beliebigen Code ausführen, Änderungen am Anforderungs- und Antwortobjekt vornehmen und sie kann auch den Anfrage-Antwort-Zyklus beenden. Wenn sie den Zyklus nicht beendet, muss sie `next()` aufrufen, um die Kontrolle an die nächste Middleware-Funktion zu übergeben (oder die Anforderung bleibt hängen).

Die meisten Apps werden _Drittanbieter_-Middleware verwenden, um gängige Webentwicklungsaufgaben zu vereinfachen, wie z.B. mit Cookies, Sitzungen, Benutzeranmeldung, Zugriff auf `POST`- und JSON-Daten, Protokollierung usw. Sie finden eine [Liste von Middleware-Paketen, die vom Express-Team verwaltet werden](https://expressjs.com/en/resources/middleware/) (die auch andere beliebte 3rd-Party-Pakete beinhaltet). Andere Express-Pakete sind im npm-Paketmanager erhältlich.

Um Drittanbieter-Middleware zu verwenden, müssen Sie sie zunächst mit npm in Ihre App installieren.
Um beispielsweise die [morgan](https://expressjs.com/en/resources/middleware/morgan/) HTTP-Anfrage-Protokollierungsmiddleware zu installieren, würden Sie dies tun:

```bash
npm install morgan
```

Sie könnten dann `use()` auf dem _Express-Anwendungs-Objekt_ aufrufen, um die Middleware zum Stack hinzuzufügen:

```js
const express = require("express");
const logger = require("morgan");

const app = express();
app.use(logger("dev"));
// …
```

> [!NOTE]
> Middleware und Routenfunktionen werden in der Reihenfolge aufgerufen, in der sie deklariert werden. Für einige Middleware ist die Reihenfolge wichtig (zum Beispiel, wenn die Sitzungsmiddleware von der Cookie-Middleware abhängt, muss der Cookie-Handler zuerst hinzugefügt werden). Es ist fast immer der Fall, dass Middleware vor der Einstellung von Routen aufgerufen wird oder Ihre Routen-Handler keinen Zugriff auf die von Ihrer Middleware hinzugefügte Funktionalität haben werden.

Sie können Ihre eigenen Middleware-Funktionen schreiben, und Sie werden es wahrscheinlich auch tun müssen (wenn auch nur, um Fehlerbehandlungscode zu erstellen). Der **einzige** Unterschied zwischen einer Middleware-Funktion und einem Routen-Handler-Rückruf ist, dass Middleware-Funktionen ein drittes Argument `next` haben, das Middleware-Funktionen aufrufen müssen, wenn sie nicht diejenige sind, die den Anforderungszyklus abschließt (wenn die Middleware-Funktion aufgerufen wird, enthält dies die _nächste_ Funktion, die aufgerufen werden muss).

Sie können eine Middleware-Funktion zur Verarbeitungs-Kette für _alle Antworten_ mit `app.use()` oder für ein spezifisches HTTP-Verb unter Verwendung der zugehörigen Methode hinzufügen: `app.get()`, `app.post()`, usw. Routen sind in beiden Fällen auf die gleiche Weise spezifiziert, obwohl die Route optional ist, wenn `app.use()` aufgerufen wird.

Das Beispiel unten zeigt, wie Sie die Middleware-Funktion mit beiden Ansätzen und mit/ohne Route hinzufügen können.

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
> Oben deklarieren wir die Middleware-Funktion separat und dann setzen wir sie als Rückruf. In unserer vorherigen Routen-Handler-Funktion haben wir die Rückruffunktion verwendet, als sie deklariert wurde. In JavaScript ist jeder Ansatz gültig.

Die Express-Dokumentation hat eine Menge hervorragender Informationen über [Verwendung](https://expressjs.com/en/guide/using-middleware/) und [Schreiben](https://expressjs.com/en/guide/writing-middleware/) von Express-Middleware.

### Bereitstellung statischer Dateien

Sie können die [express.static](https://expressjs.com/en/5x/api/#express.static) Middleware verwenden, um statische Dateien bereitzustellen, einschließlich Ihrer Bilder, CSS und JavaScript (`static()` ist die einzige Middleware-Funktion, die tatsächlich **Teil** von _Express_ ist). Beispielsweise würden Sie die folgende Zeile verwenden, um Bilder, CSS-Dateien und JavaScript-Dateien aus einem Verzeichnis namens '**public**' auf derselben Ebene bereitzustellen, auf der Sie Node aufrufen:

```js
app.use(express.static("public"));
```

Alle Dateien im öffentlichen Verzeichnis werden bedient, indem ihr Dateiname (_relativ_ zum Basispfad "public") zur Basis-URL hinzugefügt wird. So zum Beispiel:

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

Sie können auch ein virtuelles Präfix für Ihre statischen URLs erstellen, anstatt die Dateien zur Basis-URL hinzuzufügen. Zum Beispiel geben wir hier einen [Montagepfad](https://expressjs.com/en/5x/api/#app.use) an, sodass die Dateien mit dem Präfix "/media" geladen werden:

```js
app.use("/media", express.static("public"));
```

Nun können Sie die Dateien, die sich im `public`-Verzeichnis befinden, vom Präfix `/media` laden.

```plain
http://localhost:3000/media/images/dog.jpg
http://localhost:3000/media/video/cat.mp4
http://localhost:3000/media/cry.mp3
```

> [!NOTE]
> Siehe auch [Bereitstellung statischer Dateien in Express](https://expressjs.com/en/starter/static-files/).

### Fehlerbehandlung

Fehler werden durch eine oder mehrere spezielle Middleware-Funktionen behandelt, die vier Argumente haben, anstelle der üblichen drei: `(err, req, res, next)`. Zum Beispiel:

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

Diese können den erforderlichen Inhalt zurückgeben, müssen jedoch nach allen anderen `app.use()` und Route-Aufrufen aufgerufen werden, damit sie die letzte Middleware im Anfragebearbeitungsprozess sind!

Express kommt mit einem integrierten Fehler-Handler, der sich um alle verbleibenden Fehler kümmert, die in der App auftreten könnten. Diese standardmäßige Fehlerhandhabungsmiddleware-Funktion wird am Ende des Middleware-Stack hinzugefügt. Wenn Sie einen Fehler an `next()` übergeben und ihn nicht in einem Fehler-Handler behandeln, wird er vom integrierten Fehler-Handler behandelt; der Fehler wird mit dem Stack-Trace an den Client geschrieben.

> [!NOTE]
> Der Stack-Trace ist in der Produktionsumgebung nicht enthalten. Um ihn im Produktionsmodus auszuführen, müssen Sie die Umgebungsvariable `NODE_ENV` auf `"production"` setzen.

> [!NOTE]
> HTTP404 und andere "Fehler"-Statuscodes werden nicht als Fehler behandelt. Wenn Sie diese behandeln möchten, können Sie eine Middleware-Funktion hinzufügen. Weitere Informationen finden Sie in der [FAQ](https://expressjs.com/en/starter/faq/#how-do-i-handle-404-responses).

Für weitere Informationen siehe [Fehlerbehandlung](https://expressjs.com/en/guide/error-handling/) (Express-Dokumentation).

### Verwendung von Datenbanken

_Express_-Apps können jeden von _Node_ unterstützten Datenbankmechanismus verwenden (_Express_ selbst definiert keine spezifischen zusätzlichen Verhalten/Anforderungen für das Datenbankmanagement). Es gibt viele Optionen, einschließlich PostgreSQL, MySQL, Redis, SQLite, MongoDB usw.

Um diese zu verwenden, müssen Sie zuerst den Datenbank-Treiber mit npm installieren. Um beispielsweise den Treiber für das beliebte NoSQL MongoDB zu installieren, würden Sie den folgenden Befehl verwenden:

```bash
npm install mongodb
```

Die Datenbank selbst kann lokal oder auf einem Cloud-Server installiert sein. In Ihrem Express-Code importieren Sie den Treiber, verbinden sich mit der Datenbank und führen dann Erstellen, Lesen, Aktualisieren und Löschen (CRUD)-Operationen durch.
Das Beispiel unten zeigt, wie Sie "Mammal"-Datensätze mit MongoDB finden können:

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

Ein weiterer beliebter Ansatz ist der indirekte Zugriff auf Ihre Datenbank über einen Objekt-Relational-Mapper ("ORM"). Bei diesem Ansatz definieren Sie Ihre Daten als "Objekte" oder "Modelle" und der ORM ordnet diese dem zugrunde liegenden Datenbankformat zu. Dieser Ansatz hat den Vorteil, dass Sie als Entwickler weiterhin in Form von JavaScript-Objekten denken können, anstatt in Bezug auf die Semantik von Datenbanken, und dass es einen offensichtlichen Ort gibt, an dem die Validierung und Überprüfung von eingehenden Daten stattfindet. Wir werden später mehr über Datenbanken sprechen.

Weitere Informationen siehe [Datenbank-Integration](https://expressjs.com/en/guide/database-integration/) (Express-Dokumentation).

### Daten rendern (Ansichten)

Templating-Engines (auch als "View Engines" in _Express_ bezeichnet) ermöglichen Ihnen, die _Struktur_ eines Ausgabedokuments in einer Vorlage zu spezifizieren, wobei Platzhalter für Daten verwendet werden, die beim Generieren einer Seite gefüllt werden. Vorlagen werden häufig zum Erstellen von HTML verwendet, können aber auch andere Arten von Dokumenten erstellen.

Express unterstützt eine Reihe von Template-Engines, insbesondere Pug (ehemals "Jade"), Mustache und EJS. Jede hat ihre eigenen Stärken für die Lösung bestimmter Anwendungsfälle (relative Vergleiche können leicht über die Internetsuche gefunden werden).
Der Express Application Generator verwendet Jade als Standard, unterstützt jedoch auch mehrere andere.

In Ihrem Anwendungseinstellungscode legen Sie fest, welche Template-Engine verwendet werden soll und wo Express nach Vorlagen suchen soll, indem Sie die Einstellungen 'views' und 'view engine' verwenden, wie unten gezeigt (Sie müssen auch das Paket mit Ihrer Template-Bibliothek installieren!)

```js
const express = require("express");
const path = require("path");

const app = express();

// Set directory to contain the templates ('views')
app.set("views", path.join(__dirname, "views"));

// Set view engine to use, in this case 'some_template_engine_name'
app.set("view engine", "some_template_engine_name");
```

Das Aussehen der Vorlage hängt davon ab, welche Engine Sie verwenden. Angenommen, Sie haben eine Vorlagendatei namens "index.\<template_extension>" mit Platzhaltern für Datensvariablen namens 'title' und "message", würden Sie [`Response.render()`](https://expressjs.com/en/5x/api/#res.render) in einer Routen-Handler-Funktion aufrufen, um eine HTML-Antwort zu erstellen und zu senden:

```js
app.get("/", (req, res) => {
  res.render("index", { title: "About dogs", message: "Dogs rock!" });
});
```

Weitere Informationen siehe [Verwendung von Template-Engines mit Express](https://expressjs.com/en/guide/using-template-engines/) (Express-Dokumentation).

### Dateistruktur

Express macht keine Annahmen bezüglich Struktur oder der verwendeten Komponenten. Routen, Ansichten, statische Dateien und andere anwendungsspezifische Logik können in beliebig vielen Dateien und mit beliebiger Verzeichnisstruktur vorhanden sein. Während es durchaus möglich ist, die gesamte _Express_-Anwendung in einer Datei zu haben, macht es meistens Sinn, Ihre Anwendung in Dateien nach Funktion (z.B. Kontoverwaltung, Blogs, Diskussionsforen) und nach architektonischem Problembereich (z.B. Modell, Ansicht oder Controller, wenn Sie eine {{Glossary("MVC", "MVC-Architektur")}} verwenden) aufzuteilen.

In einem späteren Thema werden wir den _Express Application Generator_ nutzen, der ein modulares App-Skelett erstellt, das wir einfach erweitern können, um Webanwendungen zu erstellen.

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben den ersten Schritt in Ihrer Express/Node-Reise abgeschlossen! Sie sollten nun die Hauptvorteile von Express und Node verstehen und ungefähr wissen, wie die Hauptbestandteile einer Express-App aussehen könnten (Routen, Middleware, Fehlerbehandlung und Vorlagencode). Sie sollten auch verstehen, dass Express ein nicht meinungsstarkes Framework ist, sodass die Art und Weise, wie Sie diese Teile zusammenfügen, und die Bibliotheken, die Sie verwenden, weitgehend Ihnen überlassen sind!

Natürlich ist Express absichtlich ein sehr leichtgewichtiges Web-Anwendungs-Framework, sodass ein Großteil seines Nutzens und Potenzials von Drittanbieter-Bibliotheken und -Funktionen herrührt. Wir werden in den folgenden Artikeln genauer darauf eingehen. In unserem nächsten Artikel werden wir uns mit der Einrichtung einer Node-Entwicklungsumgebung befassen, damit Sie einige Express-Codes in Aktion sehen können.

## Siehe auch

- [Learn Node.js](https://scrimba.com/learn-nodejs-c00ho9qqh6?via=mdn) von Scrimba <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine unterhaltsame, interaktive Einführung in Node.js.
- [Learn Express.js](https://scrimba.com/learn-expressjs-c062las154?via=mdn) von Scrimba <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> baut auf dem vorherigen Link auf und zeigt, wie man mit dem Express-Framework beginnt, serverseitige Websites zu erstellen.
- [Module](https://nodejs.org/api/modules.html#modules_modules) (Node API-Dokumentation)
- [Express](https://expressjs.com/) (Startseite)
- [Grundlegende Routing](https://expressjs.com/en/starter/basic-routing/) (Express-Dokumentation)
- [Routing Leitfaden](https://expressjs.com/en/guide/routing/) (Express-Dokumentation)
- [Verwendung von Template-Engines mit Express](https://expressjs.com/en/guide/using-template-engines/) (Express-Dokumentation)
- [Verwendung von Middleware](https://expressjs.com/en/guide/using-middleware/) (Express-Dokumentation)
- [Schreiben von Middleware für die Verwendung in Express-Anwendungen](https://expressjs.com/en/guide/writing-middleware/) (Express-Dokumentation)
- [Datenbank-Integration](https://expressjs.com/en/guide/database-integration/) (Express-Dokumentation)
- [Bereitstellung statischer Dateien in Express](https://expressjs.com/en/starter/static-files/) (Express-Dokumentation)
- [Fehlerbehandlung](https://expressjs.com/en/guide/error-handling/) (Express-Dokumentation)

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
