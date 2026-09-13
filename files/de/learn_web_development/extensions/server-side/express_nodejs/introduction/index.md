---
title: Einführung in Express/Node
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction
l10n:
  sourceCommit: d93983dfe60b65633f67fffe04676c241ff92960
---

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

In diesem ersten Express-Artikel beantworten wir die Fragen „Was ist Node?“ und „Was ist Express?“ und geben Ihnen einen Überblick darüber, was das Express-Webframework besonders macht. Wir stellen die wichtigsten Funktionen vor und zeigen einige der zentralen Bausteine einer Express-Anwendung (auch wenn Sie zu diesem Zeitpunkt noch keine Entwicklungsumgebung haben, in der Sie sie testen können).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein allgemeines Verständnis der <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps">serverseitigen Website-Programmierung</a>, insbesondere der Funktionsweise von <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview">Client-Server-Interaktionen in Websites</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Sich damit vertraut machen, was Express ist und wie es mit Node zusammenhängt, welche Funktionen es bereitstellt und welche zentralen Bausteine eine Express-Anwendung hat.
      </td>
    </tr>
  </tbody>
</table>

## Einführung in Node

[Node](https://nodejs.org/) (oder formeller _Node.js_) ist eine Open-Source-, plattformübergreifende Laufzeitumgebung, mit der Entwickler alle Arten serverseitiger Tools und Anwendungen in {{Glossary("JavaScript", "JavaScript")}} erstellen können.
Die Laufzeitumgebung ist für die Verwendung außerhalb eines Browserkontexts vorgesehen (d.h. direkt auf einem Computer oder Serverbetriebssystem). Daher lässt die Umgebung browserspezifische JavaScript-APIs weg und fügt Unterstützung für traditionellere Betriebssystem-APIs hinzu, einschließlich HTTP- und Dateisystembibliotheken.

Aus Sicht der Webserverentwicklung bietet Node eine Reihe von Vorteilen:

- Hervorragende Leistung! Node wurde entwickelt, um Durchsatz und Skalierbarkeit in Webanwendungen zu optimieren, und ist eine gute Lösung für viele häufige Probleme der Webentwicklung (z. B. Echtzeit-Webanwendungen).
- Code wird in „ganz normalem JavaScript“ geschrieben. Das bedeutet, dass weniger Zeit für den „Kontextwechsel“ zwischen Sprachen aufgewendet wird, wenn Sie sowohl clientseitigen als auch serverseitigen Code schreiben.
- JavaScript ist eine relativ neue Programmiersprache und profitiert im Vergleich zu anderen traditionellen Webserver-Sprachen (z. B. Python, PHP usw.) von Verbesserungen im Sprachdesign. Viele andere neue und beliebte Sprachen werden zu JavaScript kompiliert bzw. konvertiert, sodass Sie auch TypeScript, CoffeeScript, ClojureScript, Scala, LiveScript usw. verwenden können.
- Der Node-Paketmanager (npm) bietet Zugriff auf Hunderttausende wiederverwendbare Pakete. Er verfügt außerdem über erstklassige Abhängigkeitsauflösung und kann auch zur Automatisierung des Großteils der Build-Toolchain verwendet werden.
- Node.js ist portabel. Es ist für Microsoft Windows, macOS, Linux, Solaris, FreeBSD, OpenBSD, WebOS und NonStop OS verfügbar. Darüber hinaus wird es von vielen Webhosting-Anbietern gut unterstützt, die häufig spezielle Infrastruktur und Dokumentation für das Hosting von Node-Websites bereitstellen.
- Es verfügt über ein sehr aktives Ökosystem von Drittanbietern und eine aktive Entwickler-Community mit vielen hilfsbereiten Menschen.

Sie können Node.js verwenden, um mit dem Node-HTTP-Paket einen einfachen Webserver zu erstellen.

### Hello Node.js

Das folgende Beispiel erstellt einen Webserver, der auf jede Art von HTTP-Anfrage an der URL `http://127.0.0.1:8000/` wartet — wenn eine Anfrage eingeht, antwortet das Skript mit der Zeichenkette „Hello World“. Wenn Sie Node bereits installiert haben, können Sie die folgenden Schritte ausführen, um das Beispiel auszuprobieren:

1. Öffnen Sie das Terminal (unter Windows öffnen Sie das Befehlszeilenprogramm).
2. Erstellen Sie den Ordner, in dem Sie das Programm speichern möchten, beispielsweise `test-node`, und wechseln Sie anschließend dorthin, indem Sie den folgenden Befehl in Ihr Terminal eingeben:

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
5. Wechseln Sie zurück zum Terminal und geben Sie den folgenden Befehl ein:

   ```bash
   node hello.js
   ```

Navigieren Sie abschließend in Ihrem Webbrowser zu `http://localhost:8000`; oben links auf einer ansonsten leeren Webseite sollte der Text „**Hello World**“ angezeigt werden.

> [!NOTE]
> Wenn Sie mit Node.js-Code experimentieren möchten, ohne eine lokale Einrichtung vornehmen zu müssen, bietet Scrimbas [Zusatz: Das HTTP-Modul](https://scrimba.com/learn-nodejs-c00ho9qqh6/~07du?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> eine interaktive Anleitung zum Einrichten eines einfachen Servers mit dem Node-HTTP-Paket.

## Webframeworks

Andere häufige Aufgaben der Webentwicklung werden nicht direkt von Node selbst unterstützt. Wenn Sie eine spezifische Verarbeitung für verschiedene HTTP-Verben (z. B. `GET`, `POST`, `DELETE` usw.) hinzufügen, Anfragen an unterschiedlichen URL-Pfaden („Routen“) separat verarbeiten, statische Dateien bereitstellen oder Templates verwenden möchten, um die Antwort dynamisch zu erstellen, ist Node allein nicht besonders hilfreich. Sie müssen entweder den Code selbst schreiben oder vermeiden, das Rad neu zu erfinden, und ein Webframework verwenden!

## Einführung in Express

[Express](https://expressjs.com/) ist das beliebteste Node.js-Webframework und die zugrunde liegende Bibliothek für eine Reihe weiterer beliebter Node.js-Frameworks. Es bietet Mechanismen, um:

- Handler für Anfragen mit unterschiedlichen HTTP-Verben an verschiedenen URL-Pfaden (Routen) zu schreiben.
- Sich mit Rendering-Engines für „Views“ zu integrieren, um Antworten durch das Einfügen von Daten in Templates zu erzeugen.
- Allgemeine Einstellungen für Webanwendungen festzulegen, etwa den für Verbindungen zu verwendenden Port und den Speicherort der Templates, die zum Rendern der Antwort verwendet werden.
- Zusätzliche Middleware zur Anfrageverarbeitung an beliebiger Stelle innerhalb der Pipeline zur Anfrageverarbeitung hinzuzufügen.

Obwohl _Express_ selbst recht minimalistisch ist, haben Entwickler kompatible Middleware-Pakete erstellt, die nahezu jedes Problem der Webentwicklung abdecken. Es gibt Bibliotheken für die Arbeit mit Cookies, Sitzungen, Benutzeranmeldungen, URL-Parametern, `POST`-Daten, Sicherheits-Headern und _vielem_ mehr. Eine vom Express-Team gepflegte Liste von Middleware-Paketen finden Sie unter [Express Middleware](https://expressjs.com/en/resources/middleware/) (zusammen mit einer Liste einiger beliebter Drittanbieterpakete).

> [!NOTE]
> Diese Flexibilität ist ein zweischneidiges Schwert. Es gibt Middleware-Pakete für fast jedes Problem oder jede Anforderung, aber die richtigen Pakete auszuwählen, kann manchmal eine Herausforderung sein. Es gibt auch keinen „richtigen Weg“, eine Anwendung zu strukturieren, und viele Beispiele im Internet sind nicht optimal oder zeigen nur einen kleinen Teil dessen, was Sie für die Entwicklung einer Webanwendung tun müssen.

## Woher stammen Node und Express?

Node wurde 2009 zunächst nur für Linux veröffentlicht. Der npm-Paketmanager wurde 2010 veröffentlicht, und 2012 wurde native Unterstützung für Windows hinzugefügt. Lesen Sie den Artikel auf [Wikipedia](https://en.wikipedia.org/wiki/Node.js#History), wenn Sie mehr erfahren möchten.

Express wurde erstmals im November 2010 veröffentlicht und befindet sich derzeit bei Hauptversion 5 der API. Im [Changelog](https://expressjs.com/en/changelog/#5.x) finden Sie Informationen zu Änderungen in der aktuellen Version und auf [GitHub](https://github.com/expressjs/express/blob/master/History.md) detailliertere historische Versionshinweise.

## Wie beliebt sind Node und Express?

Die Beliebtheit eines Webframeworks ist wichtig, weil sie darauf hindeutet, ob es weiterhin gepflegt wird und welche Ressourcen wahrscheinlich in Form von Dokumentation, Zusatzbibliotheken und technischem Support verfügbar sein werden.

Es gibt kein leicht verfügbares und eindeutiges Maß für die Beliebtheit serverseitiger Frameworks (obwohl Sie die Beliebtheit anhand von Mechanismen wie dem Zählen der Anzahl von GitHub-Projekten und Stack-Overflow-Fragen für jede Plattform schätzen können). Eine bessere Frage ist, ob Node und Express „beliebt genug“ sind, um die Probleme unbeliebter Plattformen zu vermeiden. Entwickeln sie sich weiter? Können Sie Hilfe bekommen, wenn Sie sie benötigen? Gibt es für Sie Möglichkeiten für bezahlte Arbeit, wenn Sie Express lernen?

Basierend auf der Anzahl bekannter Unternehmen, die Express verwenden, der Anzahl der Personen, die zum Codebestand beitragen, und der Anzahl der Personen, die sowohl kostenlosen als auch kostenpflichtigen Support anbieten, lautet die Antwort: Ja, _Express_ ist ein beliebtes Framework!

## Ist Express meinungsstark?

Webframeworks bezeichnen sich häufig selbst als „meinungsstark“ oder „meinungsfrei“.

Meinungsstarke Frameworks haben Vorstellungen darüber, wie eine bestimmte Aufgabe „richtig“ zu erledigen ist. Sie unterstützen häufig eine schnelle Entwicklung _in einem bestimmten Bereich_ (beim Lösen von Problemen eines bestimmten Typs), weil der richtige Weg für die jeweilige Aufgabe in der Regel gut verstanden und dokumentiert ist. Allerdings können sie bei der Lösung von Problemen außerhalb ihres Hauptbereichs weniger flexibel sein und bieten tendenziell weniger Auswahlmöglichkeiten bei den verwendbaren Komponenten und Ansätzen.

Meinungsfreie Frameworks haben hingegen viel weniger Einschränkungen hinsichtlich der besten Art, Komponenten zur Erreichung eines Ziels zusammenzufügen, oder sogar hinsichtlich der zu verwendenden Komponenten. Sie erleichtern es Entwicklern, die geeignetsten Tools zur Erledigung einer bestimmten Aufgabe zu verwenden, allerdings müssen Sie diese Komponenten selbst finden.

Express ist meinungsfrei. Sie können nahezu jede kompatible Middleware in nahezu jeder gewünschten Reihenfolge in die Kette zur Anfrageverarbeitung einfügen. Sie können die Anwendung in einer oder mehreren Dateien und mit jeder beliebigen Verzeichnisstruktur organisieren. Manchmal haben Sie vielleicht das Gefühl, zu viele Auswahlmöglichkeiten zu haben!

## Wie sieht Express-Code aus?

In einer traditionellen datengesteuerten Website wartet eine Webanwendung auf HTTP-Anfragen vom Webbrowser (oder einem anderen Client). Wenn eine Anfrage eingeht, bestimmt die Anwendung anhand des URL-Musters und möglicherweise zugehöriger Informationen in `POST`- oder `GET`-Daten, welche Aktion erforderlich ist. Je nach Anforderung liest oder schreibt sie dann möglicherweise Informationen aus bzw. in eine Datenbank oder führt andere Aufgaben aus, die zur Erfüllung der Anfrage nötig sind. Anschließend gibt die Anwendung eine Antwort an den Webbrowser zurück und erstellt häufig dynamisch eine HTML-Seite für die Anzeige im Browser, indem sie die abgerufenen Daten in Platzhalter eines HTML-Templates einfügt.

Express stellt Methoden bereit, mit denen Sie festlegen können, welche Funktion für ein bestimmtes HTTP-Verb (`GET`, `POST`, `PUT` usw.) und ein URL-Muster („Route“) aufgerufen wird, sowie Methoden zur Angabe der verwendeten Template-Engine („View“), des Speicherorts der Template-Dateien und des Templates, das zum Rendern einer Antwort verwendet wird. Sie können Express-Middleware verwenden, um Unterstützung für Cookies, Sitzungen und Benutzer sowie das Abrufen von `POST`/`GET`-Parametern usw. hinzuzufügen. Sie können jeden von Node unterstützten Datenbankmechanismus verwenden (Express definiert kein datenbankbezogenes Verhalten).

Die folgenden Abschnitte erklären einige der üblichen Dinge, die Ihnen bei der Arbeit mit _Express_- und _Node_-Code begegnen werden.

### Helloworld Express

Betrachten wir zunächst das Standardbeispiel [Hello World](https://expressjs.com/en/starter/hello-world/) von Express (wir erläutern jeden Teil davon weiter unten und in den folgenden Abschnitten).

> [!NOTE]
> Wenn Sie Node und Express bereits installiert haben (oder sie wie im [nächsten Artikel](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) gezeigt installieren), können Sie diesen Code in einer Textdatei namens **app.js** speichern und ihn an einer Bash-Eingabeaufforderung wie folgt ausführen:
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

Die ersten beiden Zeilen `require()` (importieren) das Express-Modul und erstellen eine [Express-Anwendung](https://expressjs.com/en/5x/api/#app). Dieses Objekt, das traditionell `app` genannt wird, verfügt über Methoden zum Routing von HTTP-Anfragen, zum Konfigurieren von Middleware, zum Rendern von HTML-Views, zum Registrieren einer Template-Engine und zum Ändern von [Anwendungseinstellungen](https://expressjs.com/en/5x/api/#app.settings.table), die steuern, wie sich die Anwendung verhält (z. B. der Umgebungsmodus, ob Routendefinitionen die Groß- und Kleinschreibung berücksichtigen usw.).

Der mittlere Teil des Codes (die drei Zeilen, die mit `app.get` beginnen) zeigt eine _Routendefinition_. Die Methode `app.get()` legt eine Callback-Funktion fest, die aufgerufen wird, wenn eine HTTP-`GET`-Anfrage mit einem Pfad (`'/'`) relativ zum Stammverzeichnis der Website eingeht. Die Callback-Funktion übernimmt ein Anfrage- und ein Antwortobjekt als Argumente und ruft [`send()`](https://expressjs.com/en/5x/api/#res.send) für die Antwort auf, um die Zeichenkette „Hello World!“ zurückzugeben.

Der letzte Block startet den Server auf einem angegebenen Port (`'3000'`) und gibt einen Protokollkommentar auf der Konsole aus. Bei laufendem Server können Sie in Ihrem Browser `localhost:3000` aufrufen, um die zurückgegebene Beispielantwort anzuzeigen.

### Module importieren und erstellen

Ein Modul ist eine JavaScript-Bibliothek/-Datei, die Sie mit der `require()`-Funktion von Node in anderen Code importieren können. _Express_ selbst ist ein Modul, ebenso wie die Middleware- und Datenbankbibliotheken, die wir in unseren _Express_-Anwendungen verwenden.

Der folgende Code zeigt anhand des _Express_-Frameworks als Beispiel, wie ein Modul anhand seines Namens importiert wird. Zuerst rufen wir die Funktion `require()` auf, geben den Namen des Moduls als Zeichenkette (`'express'`) an und rufen das zurückgegebene Objekt auf, um eine [Express-Anwendung](https://expressjs.com/en/5x/api/#app) zu erstellen. Anschließend können wir auf die Eigenschaften und Funktionen des Anwendungsobjekts zugreifen.

```js
const express = require("express");

const app = express();
```

Sie können auch eigene Module erstellen, die auf die gleiche Weise importiert werden können.

> [!NOTE]
> Sie werden eigene Module erstellen _wollen_, weil Sie damit Ihren Code in überschaubare Teile organisieren können — eine monolithische Anwendung in einer einzelnen Datei ist schwer zu verstehen und zu warten. Die Verwendung von Modulen hilft Ihnen auch bei der Verwaltung Ihres Namensraums, da nur die Variablen importiert werden, die Sie explizit exportieren.

Um Objekte außerhalb eines Moduls verfügbar zu machen, müssen Sie sie lediglich als zusätzliche Eigenschaften des Objekts `exports` verfügbar machen. Das folgende Modul **square.js** ist beispielsweise eine Datei, die die Methoden `area()` und `perimeter()` exportiert:

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
> Sie können auch einen absoluten Pfad zum Modul (oder einen Namen, wie wir es anfangs getan haben) angeben.

Wenn Sie ein vollständiges Objekt in einer Zuweisung exportieren möchten, anstatt es Eigenschaft für Eigenschaft aufzubauen, weisen Sie es wie unten gezeigt `module.exports` zu (Sie können dies auch tun, um den Stamm des Exportobjekts zu einem Konstruktor oder einer anderen Funktion zu machen):

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
> Sie können `exports` als [Abkürzung](https://nodejs.org/api/modules.html#modules_exports_shortcut) für `module.exports` innerhalb eines bestimmten Moduls betrachten. Tatsächlich ist `exports` nur eine Variable, die vor der Auswertung des Moduls mit dem Wert von `module.exports` initialisiert wird. Dieser Wert ist eine Referenz auf ein Objekt (in diesem Fall ein leeres Objekt). Das bedeutet, dass `exports` eine Referenz auf dasselbe Objekt enthält, auf das auch `module.exports` verweist. Es bedeutet auch, dass `exports` nicht mehr an `module.exports` gebunden ist, wenn Sie `exports` einen anderen Wert zuweisen.

Weitere Informationen über Module finden Sie unter [Modules](https://nodejs.org/api/modules.html#modules_modules) (Node-API-Dokumentation).

### Asynchrone APIs verwenden

JavaScript-Code verwendet häufig asynchrone statt synchroner APIs für Vorgänge, deren Ausführung einige Zeit dauern kann. Eine synchrone API ist eine API, bei der jeder Vorgang abgeschlossen sein muss, bevor der nächste Vorgang beginnen kann. Die folgenden Protokollfunktionen sind beispielsweise synchron und geben den Text der Reihe nach auf der Konsole aus (First, Second).

```js
console.log("First");
console.log("Second");
```

Im Gegensatz dazu ist eine asynchrone API eine API, bei der die API einen Vorgang startet und sofort zurückkehrt (bevor der Vorgang abgeschlossen ist). Sobald der Vorgang beendet ist, verwendet die API einen Mechanismus, um weitere Vorgänge auszuführen. Der folgende Code gibt beispielsweise „Second, First“ aus, weil die Methode `setTimeout()` zwar zuerst aufgerufen wird und sofort zurückkehrt, der Vorgang jedoch erst nach mehreren Sekunden abgeschlossen wird.

```js
setTimeout(() => {
  console.log("First");
}, 3000);
console.log("Second");
```

Die Verwendung nicht blockierender asynchroner APIs ist in Node noch wichtiger als im Browser, weil _Node_-Anwendungen häufig als einthreadige, ereignisgesteuerte Ausführungsumgebung geschrieben werden. „Einthreadig“ bedeutet, dass alle Anfragen an den Server auf demselben Thread ausgeführt werden (statt in separaten Prozessen gestartet zu werden). Dieses Modell ist hinsichtlich Geschwindigkeit und Serverressourcen äußerst effizient. Es bedeutet jedoch auch, dass synchrone Methoden mit langer Ausführungszeit nicht nur die aktuelle Anfrage blockieren, sondern jede andere Anfrage, die von Ihrer Webanwendung verarbeitet wird.

Es gibt mehrere Möglichkeiten, mit denen eine asynchrone API Ihre Anwendung über ihren Abschluss informieren kann. Historisch gesehen bestand der verwendete Ansatz darin, beim Aufrufen der asynchronen API eine Callback-Funktion zu registrieren, die dann nach Abschluss des Vorgangs aufgerufen wird (dies ist der oben verwendete Ansatz).

> [!NOTE]
> Die Verwendung von Callbacks kann recht „unübersichtlich“ werden, wenn Sie eine Abfolge abhängiger asynchroner Vorgänge haben, die der Reihe nach ausgeführt werden müssen, weil dies zu mehreren Ebenen verschachtelter Callbacks führt. Dieses Problem ist allgemein als „Callback Hell“ bekannt.

> [!NOTE]
> Eine übliche Konvention für Node und Express ist die Verwendung von Error-First-Callbacks. Bei dieser Konvention ist der erste Wert in Ihren _Callback-Funktionen_ ein Fehlerwert, während nachfolgende Argumente Erfolgsdaten enthalten. Eine gute Erklärung, warum dieser Ansatz nützlich ist, finden Sie in diesem Blogbeitrag: [The Node.js Way - Understanding Error-First Callbacks](https://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/) (fredkschott.com).

Moderner JavaScript-Code verwendet häufiger [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) und [async/await](/de/docs/Web/JavaScript/Reference/Statements/async_function), um den asynchronen Programmablauf zu verwalten.
Sie sollten Promises verwenden, wo immer dies möglich ist. Wenn Sie mit Code arbeiten, der Callbacks verwendet, können Sie die Node.js-Funktion [`utils.promisify`](https://nodejs.org/api/util.html#utilpromisifyoriginal) verwenden, um die Callback-→-Promise-Konvertierung komfortabel zu handhaben.

### Route-Handler erstellen

In unserem _Hello World_-Express-Beispiel (siehe oben) haben wir eine (Callback-)Route-Handler-Funktion für HTTP-`GET`-Anfragen an das Stammverzeichnis der Website (`'/'`) definiert.

```js
app.get("/", (req, res) => {
  res.send("Hello World!");
});
```

Die Callback-Funktion übernimmt ein Anfrage- und ein Antwortobjekt als Argumente. In diesem Fall ruft die Methode [`send()`](https://expressjs.com/en/5x/api/#res.send) für die Antwort auf, um die Zeichenkette „Hello World!“ zurückzugeben. Es gibt eine [Reihe weiterer Antwortmethoden](https://expressjs.com/en/guide/routing/#response-methods), um den Anfrage-Antwort-Zyklus zu beenden. Sie könnten beispielsweise [`res.json()`](https://expressjs.com/en/5x/api/#res.json) aufrufen, um eine JSON-Antwort zu senden, oder [`res.sendFile()`](https://expressjs.com/en/5x/api/#res.sendFile), um eine Datei zu senden.

> [!NOTE]
> Sie können beliebige Argumentnamen in den Callback-Funktionen verwenden; wenn der Callback aufgerufen wird, ist das erste Argument immer die Anfrage und das zweite immer die Antwort. Es ist sinnvoll, sie so zu benennen, dass Sie das Objekt, mit dem Sie im Rumpf des Callbacks arbeiten, identifizieren können.

Das Objekt der _Express-Anwendung_ stellt auch Methoden bereit, um Route-Handler für alle anderen HTTP-Verben zu definieren, die größtenteils genau gleich verwendet werden:

`checkout()`, `copy()`, **`delete()`**, **`get()`**, `head()`, `lock()`, `merge()`, `mkactivity()`, `mkcol()`, `move()`, `m-search()`, `notify()`, `options()`, `patch()`, **`post()`**, `purge()`, **`put()`**, `report()`, `search()`, `subscribe()`, `trace()`, `unlock()`, `unsubscribe()`.

Es gibt eine spezielle Routing-Methode, `app.all()`, die als Reaktion auf jede HTTP-Methode aufgerufen wird. Sie wird verwendet, um Middleware-Funktionen an einem bestimmten Pfad für alle Anfragemethoden zu laden. Das folgende Beispiel (aus der Express-Dokumentation) zeigt einen Handler, der für Anfragen an `/secret` unabhängig vom verwendeten HTTP-Verb ausgeführt wird (sofern es vom [http-Modul](https://nodejs.org/docs/latest/api/http.html#httpmethods) unterstützt wird).

```js
app.all("/secret", (req, res, next) => {
  console.log("Accessing the secret section…");
  next(); // pass control to the next handler
});
```

Routen ermöglichen es Ihnen, bestimmte Zeichenmuster in einer URL abzugleichen, einige Werte aus der URL zu extrahieren und sie als Parameter an den Route-Handler zu übergeben (als Eigenschaften des als Parameter übergebenen Anfrageobjekts).

Häufig ist es nützlich, Route-Handler für einen bestimmten Bereich einer Website zusammenzufassen und über ein gemeinsames Routenpräfix darauf zuzugreifen (z. B. könnte eine Website mit einem Wiki alle Wiki-bezogenen Routen in einer Datei haben und über das Routenpräfix _/wiki/_ darauf zugreifen). In _Express_ wird dies mithilfe des Objekts [`express.Router`](https://expressjs.com/en/guide/routing/#express-router) erreicht. Wir können beispielsweise unsere Wiki-Route in einem Modul namens **wiki.js** erstellen und dann das Objekt `Router` wie unten gezeigt exportieren:

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
> Das Hinzufügen von Routen zum Objekt `Router` erfolgt genauso wie das Hinzufügen von Routen zum Objekt `app` (wie zuvor gezeigt).

Um den Router in unserer Hauptdatei der Anwendung zu verwenden, würden wir anschließend das Routenmodul (**wiki.js**) mit `require()` laden und dann `use()` für die _Express_-Anwendung aufrufen, um den Router zum Middleware-Verarbeitungspfad hinzuzufügen. Die beiden Routen wären dann über `/wiki/` und `/wiki/about/` erreichbar.

```js
const wiki = require("./wiki.js");

// …
app.use("/wiki", wiki);
```

Später im verlinkten Abschnitt [Routen und Controller](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes) zeigen wir Ihnen viel mehr über die Arbeit mit Routen und insbesondere über die Verwendung von `Router`.

### Middleware verwenden

Middleware wird in Express-Anwendungen umfassend verwendet, für Aufgaben von der Bereitstellung statischer Dateien über die Fehlerbehandlung bis zur Komprimierung von HTTP-Antworten. Während Routenfunktionen den HTTP-Anfrage-Antwort-Zyklus beenden, indem sie eine Antwort an den HTTP-Client zurückgeben, führen Middleware-Funktionen _typischerweise_ eine Operation an der Anfrage oder Antwort durch und rufen dann die nächste Funktion im „Stack“ auf. Diese kann weitere Middleware oder ein Route-Handler sein. Die Reihenfolge, in der Middleware aufgerufen wird, bestimmt der Anwendungsentwickler.

> [!NOTE]
> Die Middleware kann beliebige Operationen ausführen, beliebigen Code ausführen, Änderungen am Anfrage- und Antwortobjekt vornehmen und sie kann den Anfrage-Antwort-Zyklus _auch beenden_. Wenn sie den Zyklus nicht beendet, muss sie `next()` aufrufen, um die Kontrolle an die nächste Middleware-Funktion zu übergeben (andernfalls bleibt die Anfrage hängen).

Die meisten Anwendungen verwenden Middleware von _Drittanbietern_, um häufige Aufgaben der Webentwicklung zu vereinfachen, etwa die Arbeit mit Cookies, Sitzungen, Benutzerauthentifizierung, den Zugriff auf `POST`- und JSON-Daten von Anfragen, Protokollierung usw. Sie finden eine [vom Express-Team gepflegte Liste von Middleware-Paketen](https://expressjs.com/en/resources/middleware/) (die auch andere beliebte Drittanbieterpakete enthält). Weitere Express-Pakete sind über den npm-Paketmanager verfügbar.

Um Middleware von Drittanbietern zu verwenden, müssen Sie sie zunächst mit npm in Ihrer Anwendung installieren.
Um beispielsweise die Middleware zur HTTP-Anfrageprotokollierung [morgan](https://expressjs.com/en/resources/middleware/morgan/) zu installieren, würden Sie Folgendes ausführen:

```bash
npm install morgan
```

Anschließend könnten Sie `use()` für das _Express-Anwendungsobjekt_ aufrufen, um die Middleware zum Stack hinzuzufügen:

```js
const express = require("express");
const logger = require("morgan");

const app = express();
app.use(logger("dev"));
// …
```

> [!NOTE]
> Middleware- und Routing-Funktionen werden in der Reihenfolge aufgerufen, in der sie deklariert werden. Bei einiger Middleware ist die Reihenfolge wichtig (wenn beispielsweise Sitzungs-Middleware von Cookie-Middleware abhängt, muss der Cookie-Handler zuerst hinzugefügt werden). Fast immer wird Middleware vor dem Festlegen von Routen aufgerufen, da Ihre Route-Handler sonst keinen Zugriff auf Funktionen haben, die durch Ihre Middleware hinzugefügt wurden.

Sie können eigene Middleware-Funktionen schreiben, und Sie werden dies wahrscheinlich auch tun müssen (wenn auch nur, um Code zur Fehlerbehandlung zu erstellen). Der **einzige** Unterschied zwischen einer Middleware-Funktion und einem Route-Handler-Callback besteht darin, dass Middleware-Funktionen ein drittes Argument `next` haben. Middleware-Funktionen sollen dieses aufrufen, wenn sie nicht die Funktion sind, die den Anfragezyklus abschließt (wenn die Middleware-Funktion aufgerufen wird, enthält dieses die _nächste_ Funktion, die aufgerufen werden muss).

Sie können eine Middleware-Funktion mit `app.use()` zur Verarbeitungskette für _alle Antworten_ oder mithilfe der zugehörigen Methode für ein bestimmtes HTTP-Verb hinzufügen: `app.get()`, `app.post()` usw. Routen werden in beiden Fällen auf dieselbe Weise angegeben, wobei die Route beim Aufruf von `app.use()` optional ist.

Das folgende Beispiel zeigt, wie Sie die Middleware-Funktion mit beiden Ansätzen und mit bzw. ohne Route hinzufügen können.

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
> Oben deklarieren wir die Middleware-Funktion separat und legen sie dann als Callback fest. In unserer vorherigen Route-Handler-Funktion haben wir die Callback-Funktion bei ihrer Verwendung deklariert. In JavaScript sind beide Ansätze gültig.

Die Express-Dokumentation enthält viel weitere ausgezeichnete Dokumentation zur [Verwendung](https://expressjs.com/en/guide/using-middleware/) und zum [Schreiben](https://expressjs.com/en/guide/writing-middleware/) von Express-Middleware.

### Statische Dateien bereitstellen

Sie können die Middleware [express.static](https://expressjs.com/en/5x/api/#express.static) verwenden, um statische Dateien bereitzustellen, einschließlich Ihrer Bilder, CSS-Dateien und JavaScript-Dateien (`static()` ist die einzige Middleware-Funktion, die tatsächlich **Teil** von _Express_ ist). Beispielsweise würden Sie die folgende Zeile verwenden, um Bilder, CSS-Dateien und JavaScript-Dateien aus einem Verzeichnis namens '**public'** bereitzustellen, das sich auf derselben Ebene befindet wie der Aufruf von Node:

```js
app.use(express.static("public"));
```

Alle Dateien im Verzeichnis public werden bereitgestellt, indem ihr Dateiname (_relativ_ zum Basisverzeichnis „public“) zur Basis-URL hinzugefügt wird. Zum Beispiel:

```plain
http://localhost:3000/images/dog.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/about.html
```

Sie können `static()` mehrfach aufrufen, um mehrere Verzeichnisse bereitzustellen. Wenn eine Datei von einer Middleware-Funktion nicht gefunden werden kann, wird sie an die nachfolgende Middleware weitergegeben (die Reihenfolge der Middleware-Aufrufe basiert auf Ihrer Deklarationsreihenfolge).

```js
app.use(express.static("public"));
app.use(express.static("media"));
```

Sie können auch ein virtuelles Präfix für Ihre statischen URLs erstellen, statt die Dateien zur Basis-URL hinzuzufügen. Hier [geben wir beispielsweise einen Mount-Pfad an](https://expressjs.com/en/5x/api/#app.use), sodass die Dateien mit dem Präfix „/media“ geladen werden:

```js
app.use("/media", express.static("public"));
```

Jetzt können Sie die Dateien im Verzeichnis `public` über das Pfadpräfix `/media` laden.

```plain
http://localhost:3000/media/images/dog.jpg
http://localhost:3000/media/video/cat.mp4
http://localhost:3000/media/cry.mp3
```

> [!NOTE]
> Siehe auch [Serving static files in Express](https://expressjs.com/en/starter/static-files/).

### Fehler behandeln

Fehler werden von einer oder mehreren speziellen Middleware-Funktionen behandelt, die statt der üblichen drei vier Argumente haben: `(err, req, res, next)`. Zum Beispiel:

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

Diese können beliebige erforderliche Inhalte zurückgeben, müssen jedoch nach allen anderen Aufrufen von `app.use()` und Routen aufgerufen werden, damit sie die letzte Middleware im Prozess der Anfrageverarbeitung sind!

Express enthält einen integrierten Fehler-Handler, der sich um alle verbleibenden Fehler kümmert, die in der Anwendung auftreten können. Diese Standard-Middleware-Funktion zur Fehlerbehandlung wird am Ende des Stacks von Middleware-Funktionen hinzugefügt. Wenn Sie einen Fehler an `next()` übergeben und ihn nicht in einem Fehler-Handler behandeln, wird er vom integrierten Fehler-Handler verarbeitet; der Fehler wird mit dem Stack-Trace an den Client geschrieben.

> [!NOTE]
> Der Stack-Trace wird in der Produktionsumgebung nicht einbezogen. Um die Anwendung im Produktionsmodus auszuführen, müssen Sie die Umgebungsvariable `NODE_ENV` auf `"production"` setzen.

> [!NOTE]
> HTTP404 und andere „Fehler“-Statuscodes werden nicht als Fehler behandelt. Wenn Sie diese behandeln möchten, können Sie dazu eine Middleware-Funktion hinzufügen. Weitere Informationen finden Sie in den [FAQ](https://expressjs.com/en/starter/faq/#how-do-i-handle-404-responses).

Weitere Informationen finden Sie unter [Error handling](https://expressjs.com/en/guide/error-handling/) (Express-Dokumentation).

### Datenbanken verwenden

_Express_-Anwendungen können jeden von _Node_ unterstützten Datenbankmechanismus verwenden (_Express_ selbst definiert kein spezifisches zusätzliches Verhalten bzw. keine Anforderungen für die Datenbankverwaltung). Es gibt viele Optionen, einschließlich PostgreSQL, MySQL, Redis, SQLite, MongoDB usw.

Um diese zu verwenden, müssen Sie zunächst den Datenbanktreiber mit npm installieren. Um beispielsweise den Treiber für das beliebte NoSQL-System MongoDB zu installieren, würden Sie folgenden Befehl verwenden:

```bash
npm install mongodb
```

Die Datenbank selbst kann lokal oder auf einem Cloud-Server installiert werden. In Ihrem Express-Code importieren Sie den Treiber, stellen eine Verbindung zur Datenbank her und führen dann Create-, Read-, Update- und Delete-Operationen (CRUD) durch.
Das folgende Beispiel zeigt, wie Sie mit MongoDB Datensätze zu „mammal“ finden können:

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

Ein weiterer beliebter Ansatz besteht darin, indirekt über einen Object Relational Mapper („ORM“) auf Ihre Datenbank zuzugreifen. Bei diesem Ansatz definieren Sie Ihre Daten als „Objekte“ oder „Modelle“, und das ORM ordnet diese dem zugrunde liegenden Datenbankformat zu. Dieser Ansatz hat den Vorteil, dass Sie als Entwickler weiterhin in JavaScript-Objekten statt in Datenbanksemantik denken können und dass es einen offensichtlichen Ort gibt, um eingehende Daten zu validieren und zu prüfen. Wir werden in einem späteren Artikel ausführlicher über Datenbanken sprechen.

Weitere Informationen finden Sie unter [Database integration](https://expressjs.com/en/guide/database-integration/) (Express-Dokumentation).

### Daten rendern (Views)

Template-Engines (in _Express_ auch als „View-Engines“ bezeichnet) ermöglichen Ihnen, die _Struktur_ eines Ausgabedokuments in einem Template anzugeben und Platzhalter für Daten zu verwenden, die beim Erzeugen einer Seite ausgefüllt werden. Templates werden häufig zum Erstellen von HTML verwendet, können aber auch andere Dokumenttypen erzeugen.

Express unterstützt mehrere Template-Engines, insbesondere Pug (früher „Jade“), Mustache und EJS. Jede hat ihre eigenen Stärken für bestimmte Anwendungsfälle (relative Vergleiche lassen sich leicht über eine Internetsuche finden).
Der Express-Anwendungsgenerator verwendet Jade als Standard, unterstützt aber auch mehrere andere.

In Ihrem Code für die Anwendungseinstellungen legen Sie mit den Einstellungen „views“ und „view engine“ die zu verwendende Template-Engine und den Speicherort fest, an dem Express nach Templates suchen soll, wie unten gezeigt (Sie müssen außerdem das Paket installieren, das Ihre Template-Bibliothek enthält).

```js
const express = require("express");
const path = require("path");

const app = express();

// Set directory to contain the templates ('views')
app.set("views", path.join(__dirname, "views"));

// Set view engine to use, in this case 'some_template_engine_name'
app.set("view engine", "some_template_engine_name");
```

Das Erscheinungsbild des Templates hängt von der verwendeten Engine ab. Angenommen, Sie haben eine Template-Datei namens „index.\<template_extension>“, die Platzhalter für Datenvariablen namens „title“ und „message“ enthält: Dann würden Sie in einer Route-Handler-Funktion [`Response.render()`](https://expressjs.com/en/5x/api/#res.render) aufrufen, um die HTML-Antwort zu erstellen und zu senden:

```js
app.get("/", (req, res) => {
  res.render("index", { title: "About dogs", message: "Dogs rock!" });
});
```

Weitere Informationen finden Sie unter [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines/) (Express-Dokumentation).

### Dateistruktur

Express trifft keine Annahmen über die Struktur oder die von Ihnen verwendeten Komponenten. Routen, Views, statische Dateien und andere anwendungsspezifische Logik können sich in einer beliebigen Anzahl von Dateien mit jeder Verzeichnisstruktur befinden. Obwohl es durchaus möglich ist, die gesamte _Express_-Anwendung in einer Datei zu haben, ist es normalerweise sinnvoll, Ihre Anwendung nach Funktion (z. B. Kontoverwaltung, Blogs, Diskussionsforen) und architektonischem Problembereich (z. B. Modell, View oder Controller, falls Sie eine {{Glossary("MVC", "MVC-Architektur")}} verwenden) in Dateien aufzuteilen.

In einem späteren Thema verwenden wir den _Express Application Generator_, der ein modulares Anwendungsgrundgerüst erstellt, das wir für die Erstellung von Webanwendungen einfach erweitern können.

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben den ersten Schritt auf Ihrer Express/Node-Reise abgeschlossen! Sie sollten nun die wichtigsten Vorteile von Express und Node verstehen sowie ungefähr wissen, wie die Hauptbestandteile einer Express-Anwendung aussehen können (Routen, Middleware, Fehlerbehandlung und Template-Code). Sie sollten außerdem verstehen, dass es bei Express als meinungsfreiem Framework weitgehend Ihnen überlassen ist, wie Sie diese Teile zusammenfügen und welche Bibliotheken Sie verwenden!

Natürlich ist Express absichtlich ein sehr schlankes Webanwendungsframework, daher stammen viele seiner Vorteile und Möglichkeiten aus Drittanbieterbibliotheken und -funktionen. Diese werden wir in den folgenden Artikeln detaillierter betrachten. Im nächsten Artikel sehen wir uns die Einrichtung einer Node-Entwicklungsumgebung an, damit Sie ersten Express-Code in Aktion sehen können.

## Siehe auch

- [Learn Node.js](https://scrimba.com/learn-nodejs-c00ho9qqh6?via=mdn) von Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine unterhaltsame, interaktive Einführung in Node.js.
- [Learn Express.js](https://scrimba.com/learn-expressjs-c062las154?via=mdn) von Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> baut auf dem vorherigen Link auf und zeigt, wie Sie das Express-Framework zum Erstellen serverseitiger Websites verwenden können.
- [Modules](https://nodejs.org/api/modules.html#modules_modules) (Node-API-Dokumentation)
- [Express](https://expressjs.com/) (Startseite)
- [Basic routing](https://expressjs.com/en/starter/basic-routing/) (Express-Dokumentation)
- [Routing guide](https://expressjs.com/en/guide/routing/) (Express-Dokumentation)
- [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines/) (Express-Dokumentation)
- [Using middleware](https://expressjs.com/en/guide/using-middleware/) (Express-Dokumentation)
- [Writing middleware for use in Express apps](https://expressjs.com/en/guide/writing-middleware/) (Express-Dokumentation)
- [Database integration](https://expressjs.com/en/guide/database-integration/) (Express-Dokumentation)
- [Serving static files in Express](https://expressjs.com/en/starter/static-files/) (Express-Dokumentation)
- [Error handling](https://expressjs.com/en/guide/error-handling/) (Express-Dokumentation)

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
