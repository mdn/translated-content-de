---
title: Einführung in Express/Node
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction
l10n:
  sourceCommit: d775e1249487f1a7ab9a8a031c70ca71bc892d63
---

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

In diesem ersten Artikel über Express beantworten wir die Fragen „Was ist Node?“ und „Was ist Express?“. Außerdem geben wir Ihnen einen Überblick darüber, was das Express-Webframework auszeichnet. Wir skizzieren seine wichtigsten Funktionen und zeigen Ihnen einige der grundlegenden Bausteine einer Express-Anwendung. Eine Entwicklungsumgebung, in der Sie diese ausprobieren können, haben Sie zu diesem Zeitpunkt allerdings noch nicht.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein allgemeines Verständnis der <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps">serverseitigen Webprogrammierung</a> und insbesondere der Funktionsweise von <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview">Client-Server-Interaktionen auf Websites</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, was Express ist, wie es mit Node zusammenhängt, welche Funktionen es bietet und aus welchen grundlegenden Bausteinen eine Express-Anwendung besteht.
      </td>
    </tr>
  </tbody>
</table>

## Einführung in Node

[Node](https://nodejs.org/) (genauer _Node.js_) ist eine quelloffene, plattformübergreifende Laufzeitumgebung, mit der Entwickler alle Arten von serverseitigen Werkzeugen und Anwendungen in {{Glossary("JavaScript", "JavaScript")}} erstellen können.
Die Laufzeitumgebung ist für den Einsatz außerhalb eines Browsers vorgesehen, läuft also direkt auf einem Computer oder Serverbetriebssystem. Daher enthält sie keine browserspezifischen JavaScript-APIs, unterstützt aber herkömmliche Betriebssystem-APIs, darunter HTTP- und Dateisystembibliotheken.

Aus Sicht der Webserverentwicklung bietet Node eine Reihe von Vorteilen:

- Hohe Leistung! Node wurde entwickelt, um den Durchsatz und die Skalierbarkeit von Webanwendungen zu optimieren. Es eignet sich für viele häufige Herausforderungen der Webentwicklung, etwa Echtzeit-Webanwendungen.
- Der Code wird in „ganz normalem JavaScript“ geschrieben. Wenn Sie sowohl clientseitigen als auch serverseitigen Code schreiben, müssen Sie daher seltener zwischen Sprachen umdenken.
- JavaScript entwickelt sich schnell weiter und profitiert im Vergleich zu anderen traditionellen Webserversprachen wie Java oder PHP von den neuesten Verbesserungen im Sprachdesign.
- Der Node-Paketmanager (npm) bietet Zugriff auf Hunderttausende wiederverwendbarer Pakete. Er verfügt außerdem über eine erstklassige Abhängigkeitsauflösung und kann zur Automatisierung eines Großteils der Build-Toolchain verwendet werden.
- Node.js ist portabel. Es ist für alle gängigen Betriebssysteme und bei den meisten Webhosting-Anbietern verfügbar. Nachdem Sie Ihren Server geschrieben haben, können Sie davon ausgehen, dass er überall ohne zusätzliche Anpassungen läuft.
- Node verfügt über ein sehr aktives Ökosystem aus Drittanbietern und eine Entwicklergemeinschaft, in der viele Menschen gerne helfen.

Mit Node.js können Sie mithilfe des Node-HTTP-Pakets einen einfachen Webserver erstellen.

### Hallo Node.js

Das folgende Beispiel erstellt einen Webserver, der auf jede Art von HTTP-Anfrage an die URL `http://127.0.0.1:8000/` wartet. Wenn eine Anfrage eingeht, antwortet das Skript mit der Zeichenfolge „Hello World“. Wenn Sie Node bereits installiert haben, können Sie das Beispiel mit diesen Schritten ausprobieren:

1. Öffnen Sie ein Terminal (unter Windows die Eingabeaufforderung).
2. Erstellen Sie den Ordner, in dem Sie das Programm speichern möchten, beispielsweise `test-node`, und wechseln Sie anschließend mit dem folgenden Befehl im Terminal in diesen Ordner:

   ```bash
   cd test-node
   ```

3. Erstellen Sie mit einem Texteditor Ihrer Wahl eine Datei namens `hello.mjs` und fügen Sie den folgenden Code ein:

   ```js
   // Load HTTP module
   import http from "node:http";

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

4. Speichern Sie die Datei in dem zuvor erstellten Ordner.
5. Wechseln Sie zurück zum Terminal und geben Sie den folgenden Befehl ein:

   ```bash
   node hello.mjs
   ```

Rufen Sie schließlich `http://localhost:8000` in Ihrem Webbrowser auf. Oben links auf einer ansonsten leeren Webseite sollte der Text „**Hello World**“ erscheinen.

> [!NOTE]
> Wenn Sie Node.js-Code ausprobieren möchten, ohne lokal etwas einrichten zu müssen, bietet Scrimbas [Exkurs: Das HTTP-Modul](https://scrimba.com/learn-nodejs-c00ho9qqh6/~07du?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> eine interaktive Schritt-für-Schritt-Anleitung zum Einrichten eines einfachen Servers mit dem Node-HTTP-Paket.

## Webframeworks

Die HTTP-Bibliothek von Node stellt nur die _Grundbausteine_ bereit. Wenn Sie übliche Webfunktionen wie verschiedene HTTP-Methoden (beispielsweise `GET`, `POST` und `DELETE`), unterschiedliche URL-Pfade („Routen“), statische Dateien oder Templates zur dynamischen Erstellung von Antworten implementieren möchten, reicht Node allein nicht aus. Sie müssen den entsprechenden Code entweder selbst schreiben oder auf ein Webframework zurückgreifen, statt das Rad neu zu erfinden!

## Einführung in Express

[Express](https://expressjs.com/) ist das beliebteste Node.js-Webframework und bildet die Grundlage für eine Reihe weiterer beliebter Node.js-Frameworks. Es bietet Mechanismen, mit denen Sie:

- Handler für Anfragen mit unterschiedlichen HTTP-Methoden an verschiedenen URL-Pfaden (Routen) schreiben;
- „View“-Rendering-Engines einbinden, um Antworten durch Einfügen von Daten in Templates zu erzeugen;
- allgemeine Einstellungen für Webanwendungen festlegen, etwa den Port für Verbindungen und den Speicherort der Templates, die zum Rendern von Antworten verwendet werden;
- an beliebigen Stellen der Anfrageverarbeitung zusätzliche „Middleware“ einfügen.

_Express_ selbst ist recht minimalistisch. Entwickler haben jedoch kompatible Middleware-Pakete für nahezu jede Herausforderung der Webentwicklung erstellt. Es gibt Bibliotheken für Cookies, Sitzungen, Benutzeranmeldungen, URL-Parameter, `POST`-Daten, Sicherheitsheader und _vieles_ mehr. Eine Liste der vom Express-Team gepflegten Middleware-Pakete finden Sie unter [Express-Middleware](https://expressjs.com/en/resources/middleware/). Dort sind auch einige beliebte Pakete von Drittanbietern aufgeführt.

> [!NOTE]
> Diese Flexibilität ist ein zweischneidiges Schwert. Zwar gibt es Middleware-Pakete für nahezu jedes Problem und jede Anforderung, doch die Auswahl der richtigen Pakete kann schwierig sein. Außerdem gibt es nicht „den einen richtigen Weg“, eine Anwendung zu strukturieren. Viele Beispiele im Internet sind nicht optimal oder zeigen nur einen kleinen Teil dessen, was Sie für die Entwicklung einer Webanwendung benötigen.

## Woher kommen Node und Express?

Node wurde 2009 erstmals veröffentlicht, zunächst nur für Linux. Der Paketmanager npm erschien 2010, und 2012 kam native Unterstützung für Windows hinzu. Wenn Sie mehr erfahren möchten, lesen Sie den [Wikipedia-Artikel](https://en.wikipedia.org/wiki/Node.js#History).

Express wurde erstmals im November 2010 veröffentlicht. Die API liegt derzeit in der Hauptversion 5 vor. Informationen zu Änderungen in der aktuellen Version finden Sie im [Changelog](https://github.com/expressjs/express/releases); ausführlichere historische Versionshinweise stehen auf [GitHub](https://github.com/expressjs/express/blob/master/History.md).

## Wie beliebt sind Node und Express?

Die Beliebtheit eines Webframeworks ist wichtig: Sie gibt einen Hinweis darauf, ob es weiterhin gepflegt wird und welche Ressourcen voraussichtlich in Form von Dokumentation, Zusatzbibliotheken und technischer Unterstützung verfügbar sein werden.

Für die Beliebtheit serverseitiger Frameworks gibt es kein leicht verfügbares, eindeutiges Maß. Sie können sie jedoch beispielsweise anhand der Anzahl der GitHub-Projekte und Stack-Overflow-Fragen zu einer Plattform abschätzen. Die bessere Frage ist, ob Node und Express „beliebt genug“ sind, um die Probleme wenig verbreiteter Plattformen zu vermeiden. Werden sie weiterentwickelt? Können Sie bei Bedarf Hilfe bekommen? Können Sie mit Express-Kenntnissen eine bezahlte Tätigkeit finden?

Angesichts der vielen namhaften Unternehmen, die Express einsetzen, der Anzahl der Mitwirkenden an der Codebasis und der Menschen, die kostenlose wie kostenpflichtige Unterstützung anbieten, lautet die Antwort: Ja, _Express_ ist ein beliebtes Framework!

> [!NOTE]
> Das Node-Ökosystem gehört zu den Ökosystemen, die sich unter allen Programmiersprachen am schnellsten weiterentwickeln. Express ist älter als die meisten seiner Konkurrenten und verliert bei Leistung, Ergonomie, Integration mit Frontend-Frameworks und Ähnlichem etwas von seinem Wettbewerbsvorsprung. Es ist jedoch schon so lange im Einsatz, dass Sie ihm weiterhin häufig begegnen werden. Zudem lassen sich die meisten Konzepte aus diesem Tutorial problemlos auf neue Frameworks übertragen.

## Gibt Express eine bestimmte Vorgehensweise vor?

Webframeworks bezeichnen sich häufig als „opinionated“ oder „unopinionated“ – je nachdem, ob sie bestimmte Vorgehensweisen vorgeben.

„Opinionated“ Frameworks haben klare Vorstellungen davon, wie eine bestimmte Aufgabe „richtig“ zu lösen ist. Sie ermöglichen oft eine schnelle Entwicklung _in einem bestimmten Anwendungsbereich_, weil die empfohlenen Vorgehensweisen in der Regel gut verstanden und dokumentiert sind. Bei Problemen außerhalb ihres Hauptanwendungsbereichs können sie jedoch weniger flexibel sein und bieten meist eine kleinere Auswahl an Komponenten und Lösungsansätzen.

„Unopinionated“ Frameworks machen dagegen weit weniger Vorgaben dazu, welche Komponenten Sie verwenden oder wie Sie diese für ein bestimmtes Ziel miteinander verbinden. Entwickler können dadurch leichter die für eine Aufgabe am besten geeigneten Werkzeuge einsetzen. Allerdings müssen sie die passenden Komponenten selbst finden.

Express ist „unopinionated“. Sie können nahezu jede kompatible Middleware in fast beliebiger Reihenfolge in die Anfrageverarbeitung einfügen. Sie können die Anwendung in einer oder mehreren Dateien und mit einer beliebigen Verzeichnisstruktur organisieren. Manchmal haben Sie dabei vielleicht das Gefühl, zu viele Möglichkeiten zu haben!

## Wie sieht Express-Code aus?

Bei einer herkömmlichen datengestützten Website wartet eine Webanwendung auf HTTP-Anfragen eines Webbrowsers oder eines anderen Clients. Geht eine Anfrage ein, ermittelt die Anwendung anhand des URL-Musters und möglicherweise anhand zusätzlicher Informationen in `POST`- oder `GET`-Daten, welche Aktion erforderlich ist. Je nach Aufgabe liest oder schreibt sie anschließend Daten in einer Datenbank oder führt andere Schritte aus, um die Anfrage zu bearbeiten. Danach sendet sie eine Antwort an den Webbrowser. Häufig erstellt sie dafür dynamisch eine HTML-Seite, indem sie abgerufene Daten in die Platzhalter eines HTML-Templates einfügt.

Express bietet Methoden, mit denen Sie festlegen können, welche Funktion für eine bestimmte HTTP-Methode (`GET`, `POST`, `PUT` usw.) und ein bestimmtes URL-Muster („Route“) aufgerufen wird. Weitere Methoden bestimmen, welche Template-Engine („View-Engine“) verwendet wird, wo sich die Template-Dateien befinden und welches Template zum Rendern einer Antwort dient. Mit Express-Middleware können Sie Unterstützung für Cookies, Sitzungen und Benutzer sowie für das Auslesen von `POST`-/`GET`-Parametern und weitere Funktionen hinzufügen. Sie können jeden von Node unterstützten Datenbankmechanismus verwenden; Express selbst legt kein datenbankbezogenes Verhalten fest.

Die folgenden Abschnitte erklären einige Dinge, denen Sie bei der Arbeit mit _Express_- und _Node_-Code häufig begegnen.

### „Hello World“ mit Express

Betrachten wir zunächst das übliche [Hello-World-Beispiel](https://expressjs.com/en/starter/hello-world/) für Express. Die einzelnen Bestandteile besprechen wir im Folgenden und in den nächsten Abschnitten.

> [!NOTE]
> Wenn Sie Node und Express bereits installiert haben (oder sie wie im [nächsten Artikel](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) beschrieben installieren), fügen Sie `"type": "module"` zu Ihrer **package.json** hinzu. Speichern Sie diesen Code in einer Textdatei namens **app.js** und führen Sie ihn in einer Bash-Kommandozeile mit folgendem Aufruf aus:
>
> ```bash
> node ./app.js
> ```

```js
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
```

Die ersten beiden Anweisungen importieren das express-Modul und erstellen eine [Express-Anwendung](https://expressjs.com/en/5x/api/application/). Dieses Objekt heißt üblicherweise `app`. Es verfügt über Methoden zum Routing von HTTP-Anfragen, zum Konfigurieren von Middleware, zum Rendern von HTML-Views, zum Registrieren einer Template-Engine und zum Ändern von [Anwendungseinstellungen](https://expressjs.com/en/5x/api/application/#application-settings), die das Verhalten der Anwendung steuern – etwa den Umgebungsmodus oder die Groß- und Kleinschreibung bei Routendefinitionen.

Der mittlere Teil des Codes – die drei Zeilen ab `app.get` – zeigt eine _Routendefinition_. Die Methode `app.get()` legt eine Callback-Funktion fest, die bei jeder HTTP-`GET`-Anfrage für den Pfad (`'/'`) relativ zum Stammverzeichnis der Website aufgerufen wird. Die Callback-Funktion erhält ein Anfrage- und ein Antwortobjekt als Argumente und ruft [`send()`](https://expressjs.com/en/5x/api/response/#ressend) für das Antwortobjekt auf, um die Zeichenfolge „Hello World!“ zurückzugeben.

Der letzte Block startet den Server auf dem angegebenen Port (`'3000'`) und gibt eine Protokollmeldung in der Konsole aus. Während der Server läuft, können Sie `localhost:3000` im Browser aufrufen, um die Beispielantwort zu sehen.

> [!NOTE]
> [Die Express-Dokumentation](https://expressjs.com/en/starter/hello-world/) enthält Anleitungen sowohl für ECMAScript-Module (mit `import`- und `export`-Deklarationen) als auch für CommonJS-Module (mit `require()` und `module.exports`). ECMAScript-Module sind der offizielle JavaScript-Standard und werden in diesem Tutorial verwendet. Wählen Sie beim Lesen der offiziellen Dokumentation für die Codebeispiele den Tab „ESM“.

### Module importieren und erstellen

Ein Modul ist eine JavaScript-Bibliothek oder -Datei, die Sie mit einer [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklaration in anderen Code importieren können. _Express_ selbst ist ein Modul, ebenso wie die Middleware- und Datenbankbibliotheken, die wir in unseren _Express_-Anwendungen verwenden.

Dieses Tutorial verwendet [ECMAScript-Module (ESM)](/de/docs/Web/JavaScript/Guide/Modules). Setzen Sie `"type": "module"` in der **package.json** Ihres Projekts, damit Node dessen **.js**-Dateien als ES-Module behandelt. Weitere Informationen zur Funktionsweise von ESM in Node finden Sie in der [Node-ESM-Referenz](https://nodejs.org/api/esm.html).

Der folgende Code zeigt am Beispiel des _Express_-Frameworks, wie wir ein Modul anhand seines Namens importieren. Wir importieren den Default-Export des Moduls unter dem Namen `express` und rufen ihn anschließend auf, um eine [Express-Anwendung](https://expressjs.com/en/5x/api/application/) zu erstellen. Danach können wir auf die Eigenschaften und Funktionen des Anwendungsobjekts zugreifen.

```js
import express from "express";

const app = express();
```

Sie können auch eigene Module erstellen und auf dieselbe Weise importieren.

> [!NOTE]
> Es ist _sinnvoll_, eigene Module zu erstellen: So können Sie Ihren Code in überschaubare Teile gliedern. Eine monolithische Anwendung in einer einzigen Datei ist schwer zu verstehen und zu warten. Module helfen Ihnen außerdem dabei, Ihren Namensraum zu verwalten, da bei ihrer Verwendung nur die Variablen importiert werden, die Sie ausdrücklich exportieren.

Um Objekte außerhalb eines Moduls verfügbar zu machen, verwenden Sie eine [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Deklaration. Das folgende Modul **square.js** exportiert beispielsweise die Funktionen `area()` und `perimeter()`:

```js
export function area(width) {
  return width * width;
}

export function perimeter(width) {
  return 4 * width;
}
```

Diese benannten Exporte können wir wie folgt importieren und aufrufen:

```js
import { area } from "./square.js";

console.log(`The area of a square with a width of 4 is ${area(4)}`);
```

Relative Importe müssen die Dateiendung enthalten. Um über ein einziges Objekt auf alle benannten Exporte zuzugreifen, verwenden Sie einen Namespace-Import:

```js
import * as square from "./square.js";

console.log(
  `The perimeter of a square with a width of 4 is ${square.perimeter(4)}`,
);
```

Sie können auch einen einzelnen Wert als _Default-Export_ des Moduls exportieren:

```js
export default function area(width) {
  return width * width;
}
```

Einen Default-Export importieren Sie ohne geschweifte Klammern und wählen dabei einen lokalen Namen:

```js
import squareArea from "./square.js";

console.log(squareArea(4));
```

Weitere Informationen finden Sie unter [Module: ECMAScript-Module](https://nodejs.org/api/esm.html) (Node-API-Dokumentation).

### Asynchrone APIs verwenden

JavaScript-Code verwendet für Vorgänge, die einige Zeit dauern können, häufig asynchrone statt synchrone APIs. Bei einer synchronen API muss jeder Vorgang abgeschlossen sein, bevor der nächste beginnen kann. Die folgenden Protokollierungsfunktionen sind beispielsweise synchron und geben die Texte der Reihe nach in der Konsole aus (zuerst „First“, dann „Second“).

```js
console.log("First");
console.log("Second");
```

Eine asynchrone API startet dagegen einen Vorgang und kehrt sofort zurück, noch bevor dieser abgeschlossen ist. Sobald der Vorgang beendet ist, veranlasst die API über einen entsprechenden Mechanismus weitere Aktionen. Der folgende Code gibt beispielsweise „Second, First“ aus: Obwohl die Methode `setTimeout()` zuerst aufgerufen wird und sofort zurückkehrt, ist der Vorgang erst einige Sekunden später abgeschlossen.

```js
setTimeout(() => {
  console.log("First");
}, 3000);
console.log("Second");
```

Die Verwendung nicht blockierender asynchroner APIs ist bei Node noch wichtiger als im Browser, weil _Node_-Anwendungen häufig als ereignisgesteuerte Ausführungsumgebung mit nur einem Thread geschrieben werden. „Ein Thread“ bedeutet, dass alle Anfragen an den Server auf demselben Thread verarbeitet werden, statt für jede Anfrage einen separaten Prozess zu starten. Dieses Modell ist hinsichtlich Geschwindigkeit und Serverressourcen äußerst effizient. Wenn jedoch eine Ihrer Funktionen eine synchrone Methode aufruft, deren Ausführung lange dauert, blockiert sie nicht nur die aktuelle Anfrage, sondern auch alle anderen Anfragen, die Ihre Webanwendung gerade bearbeitet.

Eine asynchrone API kann Ihrer Anwendung auf verschiedene Weise mitteilen, dass ein Vorgang abgeschlossen ist. Früher wurde beim Aufruf der asynchronen API üblicherweise eine Callback-Funktion registriert, die nach Abschluss des Vorgangs aufgerufen wird. Dieser Ansatz wurde auch im obigen Beispiel verwendet.

> [!NOTE]
> Callbacks können recht unübersichtlich werden, wenn mehrere voneinander abhängige asynchrone Vorgänge nacheinander ausgeführt werden müssen: Dabei entstehen mehrere Ebenen verschachtelter Callbacks. Dieses Problem ist allgemein als „Callback-Hölle“ bekannt.

> [!NOTE]
> Eine verbreitete Konvention bei Node und Express sind Error-First-Callbacks. Dabei ist der erste Wert, den Ihre _Callback-Funktionen_ erhalten, ein Fehlerwert; die nachfolgenden Argumente enthalten bei Erfolg die Ergebnisdaten. Eine gute Erklärung, warum dieser Ansatz nützlich ist, bietet der Blogbeitrag [The Node.js Way - Understanding Error-First Callbacks](https://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/) (fredkschott.com).

Moderner JavaScript-Code verwendet für die Steuerung asynchroner Abläufe häufiger [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) und [async/await](/de/docs/Web/JavaScript/Reference/Statements/async_function).
Verwenden Sie nach Möglichkeit Promises. Wenn Sie mit Code arbeiten, der Callbacks verwendet, können Sie die Node.js-Funktion [`utils.promisify`](https://nodejs.org/api/util.html#utilpromisifyoriginal) nutzen, um Callbacks bequem in Promises umzuwandeln.

### Routen-Handler erstellen

In unserem _Hello-World_-Beispiel mit Express (siehe oben) haben wir eine Callback-Funktion als Routen-Handler für HTTP-`GET`-Anfragen an das Stammverzeichnis der Website (`'/'`) definiert.

```js
app.get("/", (req, res) => {
  res.send("Hello World!");
});
```

Die Callback-Funktion erhält ein Anfrage- und ein Antwortobjekt als Argumente. Hier ruft sie [`send()`](https://expressjs.com/en/5x/api/response/#ressend) für das Antwortobjekt auf, um die Zeichenfolge „Hello World!“ zurückzugeben. Es gibt [eine Reihe weiterer Antwortmethoden](https://expressjs.com/en/guide/routing/#response-methods), mit denen Sie den Anfrage-Antwort-Zyklus beenden können. Beispielsweise können Sie mit [`res.json()`](https://expressjs.com/en/5x/api/response/#resjson) eine JSON-Antwort oder mit [`res.sendFile()`](https://expressjs.com/en/5x/api/response/#ressendfile) eine Datei senden.

> [!NOTE]
> Sie können die Argumente der Callback-Funktionen beliebig benennen. Beim Aufruf des Callbacks ist das erste Argument jedoch immer die Anfrage und das zweite immer die Antwort. Sinnvolle Namen helfen Ihnen, im Callback-Code zu erkennen, mit welchem Objekt Sie arbeiten.

Das _Express-Anwendungsobjekt_ stellt außerdem Methoden bereit, mit denen Sie Routen-Handler für alle anderen HTTP-Methoden definieren können. Sie werden größtenteils genauso verwendet:

`checkout()`, `copy()`, **`delete()`**, **`get()`**, `head()`, `lock()`, `merge()`, `mkactivity()`, `mkcol()`, `move()`, `m-search()`, `notify()`, `options()`, `patch()`, **`post()`**, `purge()`, **`put()`**, `report()`, `search()`, `subscribe()`, `trace()`, `unlock()`, `unsubscribe()`.

Die besondere Routing-Methode `app.all()` wird unabhängig von der HTTP-Methode aufgerufen. Mit ihr können Sie Middleware-Funktionen für einen bestimmten Pfad und alle Anfragemethoden laden. Das folgende Beispiel aus der Express-Dokumentation zeigt einen Handler, der bei Anfragen an `/secret` unabhängig von der verwendeten HTTP-Methode ausgeführt wird, sofern diese vom [http-Modul](https://nodejs.org/docs/latest/api/http.html#httpmethods) unterstützt wird.

```js
app.all("/secret", (req, res, next) => {
  console.log("Accessing the secret section…");
  next(); // pass control to the next handler
});
```

Mit Routen können Sie bestimmte Zeichenmuster in einer URL abgleichen, Werte aus der URL auslesen und sie als Parameter an den Routen-Handler übergeben – als Eigenschaften des Anfrageobjekts.

Oft ist es sinnvoll, die Routen-Handler für einen bestimmten Teil einer Website zusammenzufassen und über ein gemeinsames Routenpräfix zugänglich zu machen. Bei einer Website mit einem Wiki könnten beispielsweise alle Wiki-Routen in einer Datei liegen und über das Präfix _/wiki/_ erreichbar sein. In _Express_ verwenden Sie dafür das Objekt [`express.Router`](https://expressjs.com/en/guide/routing/#expressrouter). Beispielsweise können wir unsere Wiki-Routen in einem Modul namens **wiki.js** erstellen und anschließend das `Router`-Objekt exportieren:

```js
// wiki.js - Wiki route module

import { Router } from "express";

const router = Router();

// Home page route
router.get("/", (req, res) => {
  res.send("Wiki home page");
});

// About page route
router.get("/about", (req, res) => {
  res.send("About this wiki");
});

export default router;
```

> [!NOTE]
> Routen werden dem `Router`-Objekt genauso hinzugefügt wie dem `app`-Objekt (siehe oben).

Um den Router in der Hauptdatei unserer Anwendung zu verwenden, importieren wir das Routenmodul (**wiki.js**) mit `import`. Anschließend rufen wir `use()` für die _Express_-Anwendung auf, um den Router in den Middleware-Verarbeitungspfad einzufügen. Die beiden Routen sind dann unter `/wiki/` und `/wiki/about/` erreichbar.

```js
import wiki from "./wiki.js";

// …
app.use("/wiki", wiki);
```

Mehr über die Arbeit mit Routen und insbesondere über die Verwendung von `Router` erfahren Sie später im verlinkten Abschnitt [Routen und Controller](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes).

### Middleware verwenden

Middleware wird in Express-Anwendungen für viele Aufgaben eingesetzt: von der Bereitstellung statischer Dateien über die Fehlerbehandlung bis zur Komprimierung von HTTP-Antworten. Routenfunktionen beenden den HTTP-Anfrage-Antwort-Zyklus, indem sie eine Antwort an den HTTP-Client zurückgeben. Middleware-Funktionen führen dagegen _typischerweise_ eine Aktion an der Anfrage oder Antwort aus und rufen dann die nächste Funktion im „Stack“ auf. Dabei kann es sich um weitere Middleware oder einen Routen-Handler handeln. In welcher Reihenfolge Middleware aufgerufen wird, bestimmen die Entwickler der Anwendung.

> [!NOTE]
> Middleware kann beliebige Aktionen und Code ausführen, das Anfrage- und Antwortobjekt verändern und _auch den Anfrage-Antwort-Zyklus beenden_. Wenn sie den Zyklus nicht beendet, muss sie `next()` aufrufen, um die Steuerung an die nächste Middleware-Funktion weiterzugeben. Andernfalls bleibt die Anfrage unbeantwortet.

Die meisten Anwendungen verwenden Middleware von _Drittanbietern_, um häufige Aufgaben der Webentwicklung zu vereinfachen, etwa die Arbeit mit Cookies und Sitzungen, die Benutzerauthentifizierung, den Zugriff auf `POST`- und JSON-Daten einer Anfrage oder die Protokollierung. Eine [Liste der vom Express-Team gepflegten Middleware-Pakete](https://expressjs.com/en/resources/middleware/) enthält auch weitere beliebte Pakete von Drittanbietern. Andere Express-Pakete sind über den Paketmanager npm erhältlich.

Bevor Sie Middleware von Drittanbietern verwenden können, müssen Sie sie mit npm in Ihrer Anwendung installieren.
Um beispielsweise die Middleware [morgan](https://expressjs.com/en/resources/middleware/morgan/) zur Protokollierung von HTTP-Anfragen zu installieren, gehen Sie so vor:

```bash
npm install morgan
```

Danach können Sie `use()` für das _Express-Anwendungsobjekt_ aufrufen, um die Middleware dem Stack hinzuzufügen:

```js
import express from "express";
import logger from "morgan";

const app = express();
app.use(logger("dev"));
// …
```

> [!NOTE]
> Middleware- und Routing-Funktionen werden in der Reihenfolge aufgerufen, in der sie deklariert wurden. Bei manchen Middleware-Funktionen ist diese Reihenfolge wichtig. Wenn beispielsweise Sitzungs-Middleware von Cookie-Middleware abhängt, muss der Cookie-Handler zuerst hinzugefügt werden. Middleware wird fast immer vor den Routen eingebunden. Andernfalls können Ihre Routen-Handler nicht auf die Funktionen zugreifen, die die Middleware bereitstellt.

Sie können eigene Middleware-Funktionen schreiben – und müssen das wahrscheinlich auch tun, zumindest für die Fehlerbehandlung. Der **einzige** Unterschied zwischen einer Middleware-Funktion und einem Routen-Handler-Callback ist das dritte Argument `next`. Middleware-Funktionen müssen es aufrufen, wenn sie den Anfragezyklus nicht selbst abschließen. Beim Aufruf der Middleware-Funktion enthält dieses Argument die _nächste_ aufzurufende Funktion.

Mit `app.use()` können Sie eine Middleware-Funktion für _alle Antworten_ in die Verarbeitungskette einfügen. Für eine bestimmte HTTP-Methode verwenden Sie die zugehörige Methode, etwa `app.get()` oder `app.post()`. Routen werden in beiden Fällen auf dieselbe Weise angegeben; beim Aufruf von `app.use()` ist die Route jedoch optional.

Das folgende Beispiel zeigt beide Möglichkeiten, jeweils mit und ohne Angabe einer Route.

```js
import express from "express";

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
> Oben deklarieren wir die Middleware-Funktion separat und setzen sie anschließend als Callback ein. Bei unserem vorherigen Routen-Handler haben wir die Callback-Funktion direkt an der Stelle deklariert, an der sie verwendet wird. In JavaScript sind beide Ansätze gültig.

Die Express-Dokumentation enthält weitere ausführliche Informationen zum [Verwenden](https://expressjs.com/en/guide/using-middleware/) und [Schreiben](https://expressjs.com/en/guide/writing-middleware/) von Express-Middleware.

### Statische Dateien bereitstellen

Mit der Middleware [express.static](https://expressjs.com/en/5x/api/express/#expressstatic) können Sie statische Dateien wie Bilder, CSS und JavaScript bereitstellen. `static()` ist die einzige Middleware-Funktion, die tatsächlich **Teil** von _Express_ ist. Mit der folgenden Zeile stellen Sie beispielsweise Bilder sowie CSS- und JavaScript-Dateien aus einem Verzeichnis namens **public** bereit, das auf derselben Ebene liegt wie das Verzeichnis, aus dem Sie Node aufrufen:

```js
app.use(express.static("public"));
```

Dateien im Verzeichnis **public** werden bereitgestellt, indem ihr Dateiname – _relativ_ zum Basisverzeichnis „public“ – an die Basis-URL angehängt wird. Zum Beispiel:

```plain
http://localhost:3000/images/dog.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/about.html
```

Sie können `static()` mehrfach aufrufen, um mehrere Verzeichnisse bereitzustellen. Findet eine Middleware-Funktion eine Datei nicht, wird die Anfrage an die nächste Middleware weitergegeben. Die Aufrufreihenfolge der Middleware entspricht der Reihenfolge Ihrer Deklarationen.

```js
app.use(express.static("public"));
app.use(express.static("media"));
```

Statt die Dateien direkt unter der Basis-URL bereitzustellen, können Sie für Ihre statischen URLs auch ein virtuelles Präfix erstellen. Im folgenden Beispiel [geben wir einen Mount-Pfad an](https://expressjs.com/en/5x/api/application/#appuse), sodass die Dateien mit dem Präfix „/media“ geladen werden:

```js
app.use("/media", express.static("public"));
```

Nun können Sie die Dateien aus dem Verzeichnis `public` über das Pfadpräfix `/media` laden.

```plain
http://localhost:3000/media/images/dog.jpg
http://localhost:3000/media/video/cat.mp4
http://localhost:3000/media/cry.mp3
```

> [!NOTE]
> Siehe auch [Statische Dateien in Express bereitstellen](https://expressjs.com/en/starter/static-files/).

### Fehler behandeln

Fehler werden von einer oder mehreren speziellen Middleware-Funktionen behandelt, die statt der üblichen drei Argumente vier erhalten: `(err, req, res, next)`. Zum Beispiel:

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

Diese Funktionen können jeden benötigten Inhalt zurückgeben. Sie müssen jedoch nach allen anderen `app.use()`- und Routenaufrufen eingebunden werden, damit sie die letzte Middleware bei der Anfrageverarbeitung sind!

Express verfügt über einen integrierten Fehler-Handler, der sich um alle verbleibenden Fehler in der Anwendung kümmert. Diese standardmäßige Middleware zur Fehlerbehandlung wird am Ende des Middleware-Stacks eingefügt. Wenn Sie einen Fehler an `next()` übergeben und ihn nicht in einem eigenen Fehler-Handler behandeln, übernimmt der integrierte Fehler-Handler. Der Fehler wird dann zusammen mit dem Stack-Trace an den Client ausgegeben.

> [!NOTE]
> In der Produktionsumgebung wird der Stack-Trace nicht ausgegeben. Um die Anwendung im Produktionsmodus auszuführen, setzen Sie die Umgebungsvariable `NODE_ENV` auf `"production"`.

> [!NOTE]
> HTTP 404 und andere „Fehler“-Statuscodes werden nicht als Fehler behandelt. Wenn Sie diese behandeln möchten, können Sie dafür eine Middleware-Funktion hinzufügen. Weitere Informationen finden Sie in den [FAQ](https://expressjs.com/en/starter/faq/#how-do-i-handle-404-responses).

Weitere Informationen finden Sie unter [Fehlerbehandlung](https://expressjs.com/en/guide/error-handling/) (Express-Dokumentation).

### Datenbanken verwenden

_Express_-Anwendungen können jeden von _Node_ unterstützten Datenbankmechanismus verwenden. _Express_ selbst legt keine zusätzlichen Verhaltensweisen oder Anforderungen für die Datenbankverwaltung fest. Zur Auswahl stehen unter anderem PostgreSQL, MySQL, Redis, SQLite und MongoDB.

Um eine Datenbank zu verwenden, müssen Sie zunächst den entsprechenden Treiber mit npm installieren. Den Treiber für die beliebte NoSQL-Datenbank MongoDB installieren Sie beispielsweise mit folgendem Befehl:

```bash
npm install mongodb
```

Die Datenbank selbst kann lokal oder auf einem Cloud-Server installiert sein. In Ihrem Express-Code importieren Sie den Treiber, stellen eine Verbindung zur Datenbank her und führen anschließend Operationen zum Erstellen, Lesen, Aktualisieren und Löschen von Daten aus (CRUD).
Das folgende Beispiel zeigt, wie Sie mit MongoDB Datensätze zu „Säugetieren“ finden:

```js
import { MongoClient } from "mongodb";

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

Ein weiterer beliebter Ansatz besteht darin, indirekt über einen Object Relational Mapper („ORM“) auf die Datenbank zuzugreifen. Dabei definieren Sie Ihre Daten als „Objekte“ oder „Modelle“, und der ORM bildet diese auf das zugrunde liegende Datenbankformat ab. Der Vorteil: Als Entwickler können Sie weiterhin in JavaScript-Objekten statt in Datenbankstrukturen denken. Zudem gibt es einen klaren Ort, an dem eingehende Daten validiert und geprüft werden können. In einem späteren Artikel sprechen wir ausführlicher über Datenbanken.

Weitere Informationen finden Sie unter [Datenbankintegration](https://expressjs.com/en/guide/database-integration/) (Express-Dokumentation).

### Daten rendern (Views)

Mit Template-Engines (in _Express_ auch „View-Engines“ genannt) legen Sie die _Struktur_ eines Ausgabedokuments in einem Template fest. Platzhalter stehen für Daten, die beim Erstellen einer Seite eingefügt werden. Templates werden häufig zur Erstellung von HTML verwendet, können aber auch andere Dokumenttypen erzeugen.

Express unterstützt eine Reihe von Template-Engines, insbesondere Pug (früher „Jade“), Mustache und EJS. Jede hat eigene Stärken für bestimmte Anwendungsfälle. Vergleiche finden Sie leicht über eine Internetsuche.

Im Code für Ihre Anwendungseinstellungen legen Sie über die Einstellungen 'views' und 'view engine' fest, welche Template-Engine verwendet wird und wo Express nach Templates suchen soll. Das folgende Beispiel zeigt, wie das geht. Sie müssen außerdem das Paket mit Ihrer Template-Bibliothek installieren!

```js
import express from "express";
import path from "node:path";

const app = express();

// Set directory to contain the templates ('views')
app.set("views", path.join(import.meta.dirname, "views"));

// Set view engine to use, in this case 'some_template_engine_name'
app.set("view engine", "some_template_engine_name");
```

Wie das Template aussieht, hängt von der verwendeten Engine ab. Angenommen, Sie haben eine Template-Datei namens „index.\<template_extension>“, die Platzhalter für die Datenvariablen 'title' und „message“ enthält. Dann rufen Sie [`Response.render()`](https://expressjs.com/en/5x/api/response/#resrender) in einem Routen-Handler auf, um die HTML-Antwort zu erstellen und zu senden:

```js
app.get("/", (req, res) => {
  res.render("index", { title: "About dogs", message: "Dogs rock!" });
});
```

Weitere Informationen finden Sie unter [Template-Engines mit Express verwenden](https://expressjs.com/en/guide/using-template-engines/) (Express-Dokumentation).

### Dateistruktur

Express macht keine Vorgaben zur Struktur Ihrer Anwendung oder zu den verwendeten Komponenten. Routen, Views, statische Dateien und andere anwendungsspezifische Logik können sich in beliebig vielen Dateien mit beliebiger Verzeichnisstruktur befinden. Sie können zwar die gesamte _Express_-Anwendung in einer einzigen Datei unterbringen. Üblicherweise ist es jedoch sinnvoll, sie nach Funktionen (beispielsweise Kontoverwaltung, Blogs oder Diskussionsforen) und nach Architekturkomponenten aufzuteilen – etwa nach Model, View und Controller, wenn Sie eine {{Glossary("MVC", "MVC-Architektur")}} verwenden.

In einem späteren Kapitel erstellen wir ein modulares Grundgerüst für eine Anwendung, das wir für die Entwicklung von Webanwendungen erweitern können.

## Zusammenfassung

Herzlichen Glückwunsch! Sie haben den ersten Schritt auf Ihrem Weg mit Express und Node geschafft. Jetzt sollten Sie die wichtigsten Vorteile von Express und Node kennen und eine ungefähre Vorstellung davon haben, wie die zentralen Bestandteile einer Express-Anwendung aussehen: Routen, Middleware, Fehlerbehandlung und Template-Code. Da Express kein Framework mit festen Vorgaben ist, entscheiden Sie weitgehend selbst, wie Sie diese Teile verbinden und welche Bibliotheken Sie verwenden!

Express ist bewusst ein sehr schlankes Webanwendungs-Framework. Ein Großteil seines Nutzens und Potenzials ergibt sich daher aus Bibliotheken und Funktionen von Drittanbietern. In den folgenden Artikeln sehen wir uns diese genauer an. Im nächsten Artikel richten wir eine Node-Entwicklungsumgebung ein, damit Sie Express-Code in Aktion erleben können.

## Siehe auch

- [Node.js lernen](https://scrimba.com/learn-nodejs-c00ho9qqh6?via=mdn) von Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine unterhaltsame, interaktive Einführung in Node.js.
- [Express.js lernen](https://scrimba.com/learn-expressjs-c062las154?via=mdn) von Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> baut auf dem vorherigen Link auf und zeigt, wie Sie mit dem Express-Framework serverseitige Websites erstellen.
- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules)
- [Module auf verschiedenen Plattformen](/de/docs/Web/JavaScript/Guide/Modules/Modules_across_platforms)
- [ECMAScript-Module](https://nodejs.org/api/esm.html) (Node-API-Dokumentation)
- [Express](https://expressjs.com/) (Startseite)
- [Grundlegendes Routing](https://expressjs.com/en/starter/basic-routing/) (Express-Dokumentation)
- [Routing-Leitfaden](https://expressjs.com/en/guide/routing/) (Express-Dokumentation)
- [Template-Engines mit Express verwenden](https://expressjs.com/en/guide/using-template-engines/) (Express-Dokumentation)
- [Middleware verwenden](https://expressjs.com/en/guide/using-middleware/) (Express-Dokumentation)
- [Middleware für Express-Anwendungen schreiben](https://expressjs.com/en/guide/writing-middleware/) (Express-Dokumentation)
- [Datenbankintegration](https://expressjs.com/en/guide/database-integration/) (Express-Dokumentation)
- [Statische Dateien in Express bereitstellen](https://expressjs.com/en/starter/static-files/) (Express-Dokumentation)
- [Fehlerbehandlung](https://expressjs.com/en/guide/error-handling/) (Express-Dokumentation)

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
