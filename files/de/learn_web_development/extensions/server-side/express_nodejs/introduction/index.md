---
title: Einführung in Express/Node
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction
l10n:
  sourceCommit: d8a5165fd3c3b35ea9d07a914459e8d468f62276
---

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

In diesem ersten Artikel über Express beantworten wir die Fragen "Was ist Node?" und "Was ist Express?" und geben Ihnen einen Überblick darüber, was das Express-Webframework besonders macht. Wir skizzieren die Hauptmerkmale und zeigen Ihnen einige der wichtigsten Bausteine einer Express-Anwendung (obwohl Sie zu diesem Zeitpunkt noch keine Entwicklungsumgebung haben werden, um dies zu testen).

> [!WARNING]
> Das Express-Tutorial ist für Express Version 4 geschrieben, während die neueste Version Express 5 ist.
> Wir planen, die Dokumentation in der zweiten Hälfte des Jahres 2025 zu aktualisieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein allgemeines Verständnis von <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps">serverseitiger Website-Programmierung</a> und insbesondere der Mechanismen von <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview">Client-Server-Interaktionen auf Websites</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Vertrautheit damit erlangen, was Express ist und wie es sich in Node einfügt, welche Funktionalitäten es bietet und welche die wichtigsten Bausteine einer Express-Anwendung sind.
      </td>
    </tr>
  </tbody>
</table>

## Einführung in Node

[Node](https://nodejs.org/) (oder formaler _Node.js_) ist eine Open-Source, plattformübergreifende Laufzeitumgebung, die es Entwicklern ermöglicht, alle Arten von serverseitigen Tools und Anwendungen in {{Glossary("JavaScript", "JavaScript")}} zu erstellen. Die Laufzeitumgebung ist für den Einsatz außerhalb eines Browserkontexts gedacht (d.h. direkt auf einem Computer oder Server-Betriebssystem). Daher lässt die Umgebung browser-spezifische JavaScript-APIs weg und fügt Unterstützung für traditionellere Betriebssystem-APIs hinzu, einschließlich HTTP- und Dateisystembibliotheken.

Aus der Perspektive der Webserver-Entwicklung bietet Node eine Reihe von Vorteilen:

- Hervorragende Leistung! Node wurde entwickelt, um den Durchsatz und die Skalierbarkeit in Webanwendungen zu optimieren und bietet eine gute Lösung für viele gängige Webentwicklungsprobleme (z. B. Echtzeit-Webanwendungen).
- Der Code wird in „plain old JavaScript“ geschrieben, was bedeutet, dass weniger Zeit mit dem „Kontextwechsel“ zwischen Sprachen verbracht wird, wenn Sie sowohl clientseitigen als auch serverseitigen Code schreiben.
- JavaScript ist eine relativ neue Programmiersprache und profitiert im Vergleich zu anderen traditionellen Webserver-Sprachen (z. B. Python, PHP) von Verbesserungen im Sprachdesign. Viele andere neue und beliebte Sprachen kompilieren/konvertieren in JavaScript, sodass Sie auch TypeScript, CoffeeScript, ClojureScript, Scala, LiveScript usw. verwenden können.
- Der Node Package Manager (npm) bietet Zugriff auf Hunderttausende von wiederverwendbaren Paketen. Er verfügt über eine erstklassige Abhängigkeitsauflösung und kann auch zum Automatisieren der meisten Build-Toolchains verwendet werden.
- Node.js ist portabel. Es ist verfügbar auf Microsoft Windows, macOS, Linux, Solaris, FreeBSD, OpenBSD, WebOS und NonStop OS. Darüber hinaus wird es von vielen Webhosting-Anbietern gut unterstützt, die oft spezifische Infrastrukturen und Dokumentationen für das Hosting von Node-Sites bereitstellen.
- Es gibt ein sehr aktives Drittanbieter-Ökosystem und eine Entwicklergemeinschaft mit vielen Menschen, die bereit sind zu helfen.

Sie können Node.js verwenden, um mit dem Node HTTP-Paket einen einfachen Webserver zu erstellen.

### Hallo Node.js

Das folgende Beispiel erstellt einen Webserver, der auf jede Art von HTTP-Anforderung an die URL `http://127.0.0.1:8000/` lauscht – wenn eine Anforderung eingegangen ist, antwortet das Skript mit der Zeichenkette: "Hello World". Wenn Sie Node bereits installiert haben, können Sie mit diesen Schritten das Beispiel ausprobieren:

1. Öffnen Sie das Terminal (auf Windows öffnen Sie das Befehlszeilen-Dienstprogramm)
2. Erstellen Sie den Ordner, in dem Sie das Programm speichern möchten, zum Beispiel `test-node`, und wechseln Sie dann in diesen, indem Sie den folgenden Befehl in Ihr Terminal eingeben:

   ```bash
   cd test-node
   ```

3. Verwenden Sie Ihren bevorzugten Texteditor, um eine Datei mit dem Namen `hello.js` zu erstellen, und fügen Sie den folgenden Code ein:

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

Navigieren Sie schließlich in Ihrem Webbrowser zu `http://localhost:8000`; Sie sollten den Text „**Hello World**“ in der oberen linken Ecke einer ansonsten leeren Webseite sehen.

> [!NOTE]
> Wenn Sie ein wenig mit Node.js Code spielen möchten, ohne eine lokale Installation durchführen zu müssen, bietet Scrimba's [Aside: The HTTP module](https://scrimba.com/learn-nodejs-c00ho9qqh6/~07du?via=mdn) <sup>[_MDN Bildungspartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> eine interaktive Einführung in das Einrichten eines einfachen Servers mit dem Node HTTP-Paket.

## Web-Frameworks

Andere gängige Webentwicklungsaufgaben werden nicht direkt von Node selbst unterstützt. Wenn Sie eine spezifische Verarbeitung für verschiedene HTTP-Protokolle (z. B. `GET`, `POST`, `DELETE` usw.) hinzufügen, Anfragen an verschiedenen URL-Pfaden („Routen“) separat verarbeiten, statische Dateien bereitstellen oder Vorlagen verwenden möchten um die Antwort dynamisch zu erstellen, wird Node alleine nicht viel nützen. Sie müssen entweder den Code selbst schreiben oder Sie können das Rad nicht neu erfinden und ein Web-Framework verwenden!

## Einführung in Express

[Express](https://expressjs.com/) ist das beliebteste Node.js-Webframework und die zugrunde liegende Bibliothek für eine Reihe anderer beliebter Node.js-Frameworks. Es bietet Mechanismen, um:

- Handler für Anforderungen mit verschiedenen HTTP-Protokollen an verschiedenen URL-Pfaden (Routen) zu schreiben.
- Integration mit „View“-Render-Engines, um Antworten durch Einfügen von Daten in Vorlagen zu generieren.
- Allgemeine Webanwendungseinstellungen wie den zu verwendenden Port für die Verbindung und den Speicherort der Vorlagen, die zur Darstellung der Antwort verwendet werden, festzulegen.
- Zusätzliche Anforderungsverarbeitungs-„Middleware“ zu jedem Zeitpunkt innerhalb der Anforderungsverarbeitungspipeline hinzuzufügen.

Während _Express_ selbst ziemlich minimalistisch ist, haben Entwickler kompatible Middleware-Pakete erstellt, um nahezu jedes Webentwicklungsproblem zu lösen. Es gibt Bibliotheken zur Arbeit mit Cookies, Sitzungen, Benutzeranmeldungen, URL-Parametern, `POST`-Daten, Sicherheits-Headern und vielen mehr. Eine Liste von Middleware-Paketen, die von den Express-Teams gepflegt werden, finden Sie unter [Express Middleware](https://expressjs.com/en/resources/middleware.html) (zusammen mit einer Liste einiger beliebter Drittanbieter-Pakete).

> [!NOTE]
> Diese Flexibilität ist ein zweischneidiges Schwert. Es gibt Middleware-Pakete für fast jedes Problem oder jede Anforderung, aber herauszufinden, welche Pakete man verwenden soll, kann manchmal eine Herausforderung sein. Es gibt auch keinen „richtigen Weg“ zur Strukturierung einer Anwendung, und viele Beispiele, die Sie im Internet finden könnten, sind nicht optimal oder zeigen nur einen kleinen Teil dessen, was Sie tun müssen, um eine Webanwendung zu entwickeln.

## Woher kommen Node und Express?

Node wurde erstmals 2009 für Linux veröffentlicht. Der npm Paket-Manager wurde 2010 eingeführt und die native Windows-Unterstützung wurde 2012 hinzugefügt. Vertiefen Sie sich in [Wikipedia](https://en.wikipedia.org/wiki/Node.js#History), wenn Sie mehr erfahren möchten.

Express wurde erstmals im November 2010 veröffentlicht und befindet sich derzeit auf der Hauptversion 5 der API. Sie können das [Changelog](https://expressjs.com/en/changelog/#5.x) einsehen, um Informationen zu Änderungen in der aktuellen Version zu erhalten, und [GitHub](https://github.com/expressjs/express/blob/master/History.md) für detailliertere historische Release-Notes.

## Wie beliebt sind Node und Express?

Die Beliebtheit eines Webframeworks ist wichtig, weil es ein Indikator dafür ist, ob es weiterhin gepflegt wird und welche Ressourcen in Bezug auf Dokumentation, Zusatzbibliotheken und technischen Support wahrscheinlich verfügbar sein werden.

Es gibt keine leicht zugängliche und endgültige Messung der Beliebtheit von serverseitigen Frameworks (obwohl Sie die Beliebtheit schätzen können, indem Sie Mechanismen wie das Zählen der Anzahl von GitHub-Projekten und Stack Overflow-Fragen für jede Plattform verwenden). Eine bessere Frage ist, ob Node und Express „beliebt genug“ sind, um die Probleme von unbeliebten Plattformen zu vermeiden. Entwickeln sie sich weiter? Können Sie Hilfe bekommen, wenn Sie sie brauchen? Gibt es eine Möglichkeit für Sie, bezahlte Arbeit zu bekommen, wenn Sie Express lernen?

Basierend auf der Anzahl hochkarätiger Unternehmen, die Express nutzen, der Anzahl der Personen, die zum Code beitragen, und der Anzahl der Personen, die sowohl kostenlose als auch kostenpflichtige Unterstützung anbieten, dann ja, _Express_ ist ein beliebtes Framework!

## Ist Express meinungsstark?

Webframeworks bezeichnen sich oft als "meinungsstark" oder "nicht meinungsstark".

Meinungsstarke Frameworks sind solche, die eine Meinung darüber haben, wie eine bestimmte Aufgabe "richtig" zu erledigen ist. Sie unterstützen oft die schnelle Entwicklung _in einem bestimmten Bereich_ (Lösung von Problemen einer bestimmten Art), weil der richtige Weg, etwas zu tun, normalerweise gut verstanden und dokumentiert ist. Sie sind jedoch möglicherweise weniger flexibel bei der Lösung von Problemen außerhalb ihres Hauptbereichs und bieten tendenziell weniger Auswahlmöglichkeiten für die zu verwendenden Komponenten und Ansätze.

Nicht meinungsstarke Frameworks haben im Gegensatz dazu weit weniger Einschränkungen, wie die Komponenten zusammengefügt werden sollen, um ein Ziel zu erreichen, oder welche Komponenten verwendet werden sollen. Sie machen es Entwicklern einfacher, die am besten geeigneten Werkzeuge für eine bestimmte Aufgabe zu verwenden, allerdings auf Kosten, dass Sie diese Komponenten selbst finden müssen.

Express ist nicht meinungsstark. Sie können fast jede kompatible Middleware, die Sie möchten, in die Anforderungsverarbeitungskette einfügen, in fast jeder Reihenfolge, die Sie bevorzugen. Sie können die App in einer Datei oder in mehreren Dateien und mit jeder Verzeichnisstruktur strukturieren. Manchmal haben Sie vielleicht das Gefühl, zu viele Auswahlmöglichkeiten zu haben!

## Wie sieht Express-Code aus?

In einer traditionellen, datengetriebenen Website wartet eine Webanwendung auf HTTP-Anfragen vom Webbrowser (oder einem anderen Client). Wenn eine Anfrage eingeht, arbeitet die Anwendung anhand des URL-Musters und möglicherweise assoziierter Informationen, die in `POST`- oder `GET`-Daten enthalten sind, heraus, welche Aktion erforderlich ist. Je nach Anforderung kann es dann Informationen aus einer Datenbank lesen oder schreiben oder andere Aufgaben ausführen, die erforderlich sind, um die Anfrage zu erfüllen. Die Anwendung gibt dann eine Antwort an den Webbrowser zurück, indem sie oft eine HTML-Seite für den Browser dynamisch erstellt, indem die abgerufenen Daten in Platzhalter in einer HTML-Vorlage eingefügt werden.

Express bietet Methoden zum Festlegen, welche Funktion für ein bestimmtes HTTP-Protokoll (`GET`, `POST`, `PUT` usw.) und ein URL-Muster ("Route") aufgerufen wird, sowie Methoden zum Festlegen, welche Template-Engine ("View") verwendet wird, wo sich die Vorlagendateien befinden und welche Vorlage verwendet wird, um eine Antwort zu rendern. Sie können Express-Middleware verwenden, um Unterstützung für Cookies, Sitzungen und Benutzer, Abrufen von `POST`/`GET`-Parametern usw. hinzuzufügen. Sie können jede Datenbankmechanismus verwenden, die von Node unterstützt wird (Express definiert kein datenbankspezifisches Verhalten).

Die folgenden Abschnitte erläutern einige der häufigen Dinge, die Sie beim Arbeiten mit _Express_ und _Node_ Code sehen werden.

### Helloworld Express

Betrachten wir zunächst das Standard-Express [Hello World](https://expressjs.com/en/starter/hello-world.html) Beispiel (wir diskutieren jeden Teil davon unten und in den folgenden Abschnitten).

> [!NOTE]
> Wenn Sie Node und Express bereits installiert haben (oder wenn Sie sie installieren, wie im [nächsten Artikel](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) gezeigt), können Sie diesen Code in eine Textdatei namens **app.js** speichern und in einem Bash-Kommandoprompt, indem Sie aufrufen:
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

Die ersten beiden Zeilen `require()` (importieren) das Express-Modul und erstellen eine [Express-Anwendung](https://expressjs.com/en/4x/api.html#app). Dieses Objekt, das traditionell als `app` bezeichnet wird, verfügt über Methoden zum Routing von HTTP-Anfragen, Konfigurieren von Middleware, Rendern von HTML-Ansichten, Registrieren einer Template-Engine und Ändern von [Anwendungseinstellungen](https://expressjs.com/en/4x/api.html#app.settings.table), die steuern, wie sich die Anwendung verhält (z. B. der Umgebungsmodus, ob Routendefinitionen groß/klein geschrieben sind usw.)

Der mittlere Teil des Codes (die drei Zeilen, die mit `app.get` beginnen) zeigt eine _Route Definition_. Die Methode `app.get()` gibt eine Callback-Funktion an, die aufgerufen wird, wenn es eine HTTP `GET`-Anforderung mit einem Pfad (`'/'`) relativ zur Site-Wurzel gibt. Die Callback-Funktion nimmt ein Anfrage- und ein Antwortobjekt als Argumente entgegen und ruft [`send()`](https://expressjs.com/en/4x/api.html#res.send) auf der Antwort auf, um den String "Hello World!" zurückzugeben.

Der letzte Block startet den Server auf einem angegebenen Port ('3000') und gibt einen Log-Kommentar auf der Konsole aus. Mit dem laufenden Server könnten Sie in Ihrem Browser zu `localhost:3000` gehen, um die Beispielantwort zu sehen.

### Module importieren und erstellen

Ein Modul ist eine JavaScript-Bibliothek/Datei, die Sie mit der `require()`-Funktion von Node in anderen Code importieren können. _Express_ selbst ist ein Modul, genauso wie die Middleware- und Datenbankbibliotheken, die wir in unseren _Express_-Anwendungen verwenden.

Der untenstehende Code zeigt, wie wir ein Modul nach Name importieren, indem wir das _Express_-Framework als Beispiel verwenden. Zuerst rufen wir die `require()`-Funktion auf, spezifizieren den Namen des Moduls als String (`'express'`) und rufen das zurückgegebene Objekt auf, um eine [Express-Anwendung](https://expressjs.com/en/4x/api.html#app) zu erstellen. Wir können dann auf die Eigenschaften und Funktionen des Anwendungsobjekts zugreifen.

```js
const express = require("express");

const app = express();
```

Sie können auch Ihre eigenen Module erstellen, die auf die gleiche Weise importiert werden können.

> [!NOTE]
> Sie _möchten_ Ihre eigenen Module erstellen, weil dies Ihnen ermöglicht, Ihren Code in überschaubare Teile zu organisieren – eine monolithische Einzelfile-Anwendung ist schwer zu verstehen und zu pflegen. Die Verwendung von Modulen hilft Ihnen auch, Ihren Namensraum zu verwalten, weil nur die Variablen, die Sie ausdrücklich exportieren, beim Verwenden eines Moduls importiert werden.

Um Objekte außerhalb eines Moduls verfügbar zu machen, müssen Sie sie nur als zusätzliche Eigenschaften auf dem `exports`-Objekt freigeben. Zum Beispiel ist das **square.js** Modul unten eine Datei, die `area()`- und `perimeter()`-Methoden exportiert:

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
> Sie können auch einen absoluten Pfad zum Modul (oder einen Namen, wie wir es anfangs gemacht haben) spezifizieren.

Wenn Sie ein komplettes Objekt in einer Zuweisung exportieren möchten, anstatt es Eigenschaft für Eigenschaft aufzubauen, weisen Sie es `module.exports` zu, wie unten gezeigt (Sie können dies auch tun, um die Wurzel des Exports-Objekts zu einem Konstruktor oder einer anderen Funktion zu machen):

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
> Sie können `exports` als [Abkürzung](https://nodejs.org/api/modules.html#modules_exports_shortcut) für `module.exports` innerhalb eines bestimmten Moduls ansehen. Tatsächlich ist `exports` nur eine Variable, die zu Beginn des Moduls auf den Wert von `module.exports` gesetzt wird. Dieser Wert ist eine Referenz zu einem Objekt (in diesem Fall ein leeres Objekt). Das bedeutet, dass `exports` eine Referenz auf dasselbe Objekt hält, auf das auch `module.exports` verweist. Es bedeutet auch, dass bei der Zuweisung eines anderen Werts zu `exports` dieser nicht mehr an `module.exports` gebunden ist.

Für viel mehr Informationen über Module siehe [Modules](https://nodejs.org/api/modules.html#modules_modules) (Node API docs).

### Verwenden von asynchronen APIs

JavaScript-Code verwendet häufig asynchrone anstelle von synchronen APIs für Operationen, die einige Zeit in Anspruch nehmen können, um abgeschlossen zu werden. Eine synchrone API ist eine, bei der jede Operation abgeschlossen sein muss, bevor die nächste Operation starten kann. Beispielsweise sind die folgenden Log-Funktionen synchron und drucken den Text in der Reihenfolge auf die Konsole (Erste, Zweite).

```js
console.log("First");
console.log("Second");
```

Im Gegensatz dazu ist eine asynchrone API eine, bei der die API eine Operation startet und sofort zurückgibt (bevor die Operation abgeschlossen ist). Sobald die Operation abgeschlossen ist, verwendet die API einen Mechanismus, um zusätzliche Operationen auszuführen. Zum Beispiel wird der folgende Code „Zweite, Erste“ ausdrucken, weil auch wenn die `setTimeout()`-Methode zuerst aufgerufen wird und sofort zurückgibt, die Operation erst einige Sekunden später abgeschlossen wird.

```js
setTimeout(() => {
  console.log("First");
}, 3000);
console.log("Second");
```

Die Verwendung von nicht blockierenden asynchronen APIs ist auf Node sogar noch wichtiger als im Browser, da _Node_ eine ereignisgesteuerte Single-Threaded-Ausführungsumgebung ist. „Single-Threaded“ bedeutet, dass alle Anfragen an den Server auf demselben Thread ausgeführt werden (anstatt in separate Prozesse gesponnen zu werden). Dieses Modell ist extrem effizient in Bezug auf Geschwindigkeit und Serverressourcen, bedeutet aber auch, dass, wenn eine Ihrer Funktionen synchrone Methoden aufruft, die lange Zeit benötigen, um abgeschlossen zu werden, sie nicht nur die aktuelle Anfrage blockieren, sondern alle anderen Anfragen, die von Ihrer Webanwendung bearbeitet werden.

Es gibt eine Reihe von Möglichkeiten, wie eine asynchrone API Ihre Anwendung benachrichtigen kann, dass sie abgeschlossen wurde. Der häufigste Weg ist es, eine Callback-Funktion zu registrieren, wenn Sie die asynchrone API aufrufen, die zurückgerufen wird, wenn die Operation abgeschlossen ist. Dies ist der oben verwendete Ansatz.

> [!NOTE]
> Die Verwendung von Callbacks kann ziemlich „unordentlich“ sein, wenn Sie eine Abfolge abhängiger asynchroner Operationen haben, die in einer bestimmten Reihenfolge ausgeführt werden müssen, da dies zu mehreren Ebenen von verschachtelten Callbacks führt. Dieses Problem wird gemeinhin als „Callback-Hölle“ bezeichnet. Dieses Problem kann durch die Verwendung moderner JavaScript-Funktionen wie [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) und [async/await](/de/docs/Web/JavaScript/Reference/Statements/async_function) reduziert werden. Node bietet die Funktion [`utils.promisify`](https://nodejs.org/api/util.html#utilpromisifyoriginal) an, um die Callback → Promise-Konvertierung ergonomisch durchzuführen.

> [!NOTE]
> Ein weit verbreitetes Konventionsmuster in Node und Express ist die Verwendung von fehler-orientierten Callbacks. In dieser Konvention ist der erste Wert in Ihren _Callback-Funktionen_ ein Fehlerwert, während nachfolgende Argumente Erfolgsdaten enthalten. Eine gute Erklärung, warum dieser Ansatz nützlich ist, wird in diesem Blog gegeben: [The Node.js Way - Understanding Error-First Callbacks](https://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/) (fredkschott.com).

### Erstellen von Routen-Handlern

In unserem _Hello World_ Express-Beispiel (siehe oben) haben wir einen (Callback-) Route-Handler für HTTP `GET`-Anfragen an die Site-Wurzel (`'/'`) definiert.

```js
app.get("/", (req, res) => {
  res.send("Hello World!");
});
```

Die Callback-Funktion nimmt ein Request- und ein Response-Objekt als Argumente entgegen. In diesem Fall ruft die Methode [`send()`](https://expressjs.com/en/4x/api.html#res.send) auf der Antwort auf, um die Zeichenkette „Hello World!“ zurückzugeben. Es gibt [eine Reihe von anderen Antwortmethoden](https://expressjs.com/en/guide/routing.html#response-methods), um den Anfrage-/Antworzyklus abzuschließen. Beispielsweise könnten Sie [`res.json()`](https://expressjs.com/en/4x/api.html#res.json) aufrufen, um eine JSON-Antwort zu senden, oder [`res.sendFile()`](https://expressjs.com/en/4x/api.html#res.sendFile), um eine Datei zu senden.

> [!NOTE]
> Sie können in den Callback-Funktionen beliebige Argumentnamen verwenden; Wenn der Callback aufgerufen wird, ist das erste Argument immer die Anfrage und das zweite immer die Antwort. Es macht Sinn, sie so zu benennen, dass Sie das Objekt, mit dem Sie innerhalb des Callback arbeiten, identifizieren können.

Das _Express-Anwendungs_-Objekt bietet auch Methoden zum Definieren von Route-Handlern für alle anderen HTTP-Protokolle, die meist auf die gleiche Weise verwendet werden:

`checkout()`, `copy()`, **`delete()`**, **`get()`**, `head()`, `lock()`, `merge()`, `mkactivity()`, `mkcol()`, `move()`, `m-search()`, `notify()`, `options()`, `patch()`, **`post()`**, `purge()`, **`put()`**, `report()`, `search()`, `subscribe()`, `trace()`, `unlock()`, `unsubscribe()`.

Es gibt eine spezielle Routing-Methode, `app.all()`, die in Antwort auf jede HTTP-Methode aufgerufen wird. Dies wird verwendet, um Middleware-Funktionen an einem bestimmten Pfad für alle Anforderungsmethoden zu laden. Das folgende Beispiel (aus der Express-Dokumentation) zeigt einen Handler, der für Anfragen an `/secret` unabhängig von dem verwendeten HTTP-Protokoll ausgeführt wird (vorausgesetzt, es wird vom [http Modul](https://nodejs.org/docs/latest/api/http.html#httpmethods) unterstützt).

```js
app.all("/secret", (req, res, next) => {
  console.log("Accessing the secret section…");
  next(); // pass control to the next handler
});
```

Routen ermöglichen es Ihnen, bestimmte Mustern von Zeichen in einer URL zu erkennen und einige Werte aus der URL zu extrahieren und als Parameter an den Route-Handler weiterzugeben (als Attribute des Anforderungsobjekts, das als Parameter übergeben wird).

Es ist oft nützlich, Route-Handler für einen bestimmten Teil einer Site zusammenzufassen und darauf mit einem gemeinsamen Routen-Präfix zuzugreifen (z. B. könnte eine Site mit einem Wiki alle wiki-bezogenen Routen in einer Datei haben und mit einem Routen-Präfix von _/wiki/_ darauf zugreifen). In _Express_ wird dies durch die Verwendung des [`express.Router`](https://expressjs.com/en/guide/routing.html#express-router) Objekts erreicht. Zum Beispiel können wir unsere Wiki-Route in einem Modul namens **wiki.js** erstellen und dann das `Router`-Objekt exportieren, wie unten gezeigt:

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
> Das Hinzufügen von Routen zu einem `Router`-Objekt ist genau wie das Hinzufügen von Routen zu einem `app`-Objekt (wie vorher gezeigt).

Um den Router in unserer Haupt-App-Datei zu verwenden, würden wir das Routenmodul (**wiki.js**) mit `require()` importieren und dann `use()` auf der _Express-Anwendung_ aufrufen, um den Router in den Middleware-Verarbeitungspfad aufzunehmen. Die beiden Routen sind dann zugänglich von `/wiki/` und `/wiki/about/`.

```js
const wiki = require("./wiki.js");

// …
app.use("/wiki", wiki);
```

Wir zeigen Ihnen viel mehr über das Arbeiten mit Routen, insbesondere über die Verwendung des `Router`, später im verknüpften Abschnitt [Routen und Controller](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes).

### Verwenden von Middleware

Middleware wird in Express-Apps ausgiebig verwendet, um Aufgaben von der Bereitstellung statischer Dateien über die Fehlerbehandlung bis hin zur Komprimierung von HTTP-Antworten zu erledigen. Während Routenfunktionen den HTTP-Anfrage-/Antwortzyklus durch die Rückgabe einer Antwort an den HTTP-Client beenden, führen Middleware-Funktionen _typischerweise_ eine Operation an der Anforderung oder Antwort durch und rufen dann die nächste Funktion im „Stack“ auf, die entweder eine weitere Middleware oder ein Route-Handler sein kann. Die Reihenfolge, in der Middleware aufgerufen wird, liegt im Ermessen des App-Entwicklers.

> [!NOTE]
> Die Middleware kann jede beliebige Operation ausführen, jeglichen Code ausführen, Änderungen am Anforderungs- und Antwortobjekt vornehmen und _auch den Anfrage-/Antwortzyklus_ beenden. Wenn der Zyklus nicht beendet wird, muss er `next()` aufrufen, um die Kontrolle an die nächste Middleware-Funktion zu übergeben (oder die Anforderung bleibt hängen).

Die meisten Apps verwenden _Drittanbieter_-Middleware, um gängige Webentwicklungsaufgaben wie das Arbeiten mit Cookies, Sitzungen, Benutzerauthentifizierung, Zugriff auf Anfrage-`POST`- und JSON-Daten, Logging usw. zu vereinfachen. Eine [Liste von Middleware-Paketen, die vom Express-Team gepflegt werden](https://expressjs.com/en/resources/middleware.html) (welche auch andere beliebte Drittanbieter-Pakete beinhaltet) finden Sie ebenfalls dort. Andere Express-Pakete sind im npm Paket-Manager verfügbar.

Um Middleware von Drittanbietern zu verwenden, müssen Sie diese zuerst mit npm in Ihre App installieren.
Zum Beispiel, um den [morgan](https://expressjs.com/en/resources/middleware/morgan.html) HTTP-Anforderungs-Logger Middleware zu installieren, würden Sie dies tun:

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
> Middleware- und Routing-Funktionen werden in der Reihenfolge aufgerufen, in der sie deklariert sind. Für einige Middleware ist die Reihenfolge wichtig (zum Beispiel wenn Sitzungsmiddleware von Cookiemiddleware abhängt, muss der Cookie-Handler zuerst hinzugefügt werden). Es ist fast immer der Fall, dass Middleware vor der Festlegung von Routen aufgerufen wird, oder Ihre Routen-Handler haben keinen Zugriff auf die von der Middleware hinzugefügte Funktionalität.

Sie können Ihre eigenen Middleware-Funktionen schreiben und Sie werden es wahrscheinlich tun müssen (wenn auch nur um Fehlerbehandlungscode zu erstellen). Der **einzige** Unterschied zwischen einer Middleware-Funktion und einem Route-Handler-Callback ist, dass Middleware-Funktionen ein drittes Argument `next` haben, das von Middleware-Funktionen aufgerufen werden soll, wenn sie nicht diejenigen sind, die den Anfragezyklus abschließen (wenn die Middleware-Funktion aufgerufen wird, enthält dieses das _nächste_ aufzurufende Funktion).

Sie können eine Middleware-Funktion zur Verarbeitungskette für _alle Antworten_ mit `app.use()` hinzufügen oder für ein bestimmtes HTTP-Protokoll mit der zugehörigen Methode: `app.get()`, `app.post()`, usw. Routen werden in beiden Fällen auf die gleiche Weise spezifiziert, obwohl die Route optional ist, wenn `app.use()` aufgerufen wird.

Das folgende Beispiel zeigt, wie Sie die Middleware-Funktion mit beide Ansätze hinzufügen können, sowohl mit als auch ohne Route.

```js
const express = require("express");

const app = express();

// An example middleware function
function aMiddlewareFunction(req, res, next) {
  // Perform some operations
  next(); // Call next() so Express will call the next middleware function in the chain.
}

// Function added with use() for all routes and verbs
app.use(aMiddlewareFunction);

// Function added with use() for a specific route
app.use("/some-route", aMiddlewareFunction);

// A middleware function added for a specific HTTP verb and route
app.get("/", aMiddlewareFunction);

app.listen(3000);
```

> [!NOTE]
> Oben haben wir die Middleware-Funktion separat deklariert und dann als Callback gesetzt. In unserer vorherigen Route-Handler-Funktion haben wir die Callback-Funktion deklariert, als sie verwendet wurde. In JavaScript ist beides gültig.

Die Express-Dokumentation verfügt über weitere exzellente Dokumentation zum [Verwendung](https://expressjs.com/en/guide/using-middleware.html) und [Schreiben von](https://expressjs.com/en/guide/writing-middleware.html) Express-Middleware.

### Bereitstellung statischer Dateien

Sie können die [express.static](https://expressjs.com/en/4x/api.html#express.static) Middleware verwenden, um statische Dateien bereitzustellen, einschließlich Ihrer Bilder, CSS und JavaScript (`static()` ist die einzige Middleware-Funktion, die tatsächlich **Teil** von _Express_ ist). Zum Beispiel würden Sie die Zeile unten verwenden, um Bilder, CSS-Dateien und JavaScript-Dateien aus einem Verzeichnis namens '**public'** auf derselben Ebene wie dort, wo Sie node aufrufen, zu servieren:

```js
app.use(express.static("public"));
```

Jegliche Dateien im öffentlichen Verzeichnis werden bereitgestellt, indem ihr Dateiname (_relativ_ zum Basis-„public“-Verzeichnis) an die Basis-URL angehängt wird. So zum Beispiel:

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

Sie können auch einen virtuellen Präfix für Ihre statischen URLs erstellen, anstatt die Dateien zur Basis-URL hinzuzufügen. Zum Beispiel können wir hier einen [Mount-Pfad angeben](https://expressjs.com/en/4x/api.html#app.use), damit die Dateien mit dem Präfix "/media" geladen werden:

```js
app.use("/media", express.static("public"));
```

Jetzt können Sie die Dateien, die sich im `public`-Verzeichnis befinden, unter dem Präfix-Pfad `/media` laden.

```plain
http://localhost:3000/media/images/dog.jpg
http://localhost:3000/media/video/cat.mp4
http://localhost:3000/media/cry.mp3
```

> [!NOTE]
> Siehe auch [Bereitstellung statischer Dateien in Express](https://expressjs.com/en/starter/static-files.html).

### Fehlerbehandlung

Fehler werden von einer oder mehreren speziellen Middleware-Funktionen behandelt, die vier Argumente haben, anstelle der üblichen drei: `(err, req, res, next)`. Zum Beispiel:

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

Diese können jeglichen gewünschten Inhalt zurückgeben, müssen jedoch nach allen anderen `app.use()` und Route-Aufrufen aufgerufen werden, sodass sie die letzte Middleware im Anfrageverarbeitungsprozess sind!

Express kommt mit einem eingebauten Fehler-Handler, der sich um alle verbleibenden Fehler kümmert, die in der App auftreten könnten. Diese standardmäßige Fehlerbehandlungs-Middleware-Funktion wird am Ende des Middleware-Funktionsstapels hinzugefügt. Wenn Sie einen Fehler an `next()` übergeben und ihn in einem Fehlerbehandler nicht behandeln, wird er vom eingebauten Fehler-Handler behandelt; der Fehler wird mit dem Stack-Trace an den Client geschrieben.

> [!NOTE]
> Der Stack-Trace wird in der Produktionsumgebung nicht einbezogen. Um es im Produktionsmodus auszuführen, müssen Sie die Umgebungsvariable `NODE_ENV` auf `"production"` setzen.

> [!NOTE]
> HTTP404 und andere „Fehler“ Statuscodes werden nicht als Fehler behandelt. Wenn Sie diese behandeln möchten, können Sie eine Middleware-Funktion hinzufügen, um dies zu tun. Für weitere Informationen siehe die [FAQ](https://expressjs.com/en/starter/faq.html#how-do-i-handle-404-responses).

Für weitere Informationen siehe [Fehlerbehandlung](https://expressjs.com/en/guide/error-handling.html) (Express-Dokumentation).

### Verwendung von Datenbanken

_Express_-Apps können jeden Datenbankmechanismus verwenden, der von _Node_ unterstützt wird (_Express_ selbst definiert kein spezifisches zusätzliches Verhalten/Anforderungen für das Datenbankmanagement). Es gibt viele Optionen, darunter PostgreSQL, MySQL, Redis, SQLite, MongoDB usw.

Um diese zu verwenden, müssen Sie zuerst den Datenbank-Treiber mit npm installieren. Beispielsweise, um den Treiber für die beliebte NoSQL-Datenbank MongoDB zu installieren, würden Sie den Befehl verwenden:

```bash
npm install mongodb
```

Die Datenbank selbst kann lokal oder auf einem Cloud-Server installiert werden. In Ihrem Express-Code importieren Sie den Treiber, verbinden sich mit der Datenbank und führen dann Erstellen-, Lesen-, Aktualisieren- und Löschen-(CRUD)-Operationen aus. Das untenstehende Beispiel (aus der Express-Dokumentation) zeigt, wie Sie „mammal“-Datensätze mit MongoDB finden können.

Dies funktioniert mit älteren Versionen von MongoDB Version ~ 2.2.33:

```js
const { MongoClient } = require("mongodb");

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
const { MongoClient } = require("mongodb");

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

Ein weiterer beliebter Ansatz ist der indirekte Zugriff auf Ihre Datenbank über einen so genannten Object Relational Mapper ("ORM"). In diesem Ansatz definieren Sie Ihre Daten als „Objekte“ oder „Models“ und der ORM überträgt diese in das zugrundeliegende Datenbankformat. Dieser Ansatz hat den Vorteil, dass Sie als Entwickler weiterhin in Form von JavaScript-Objekten denken können, statt in D Datenbanksemantik, und dass es einen offensichtlichen Ort gibt, um Validierung und Prüfung eingehender Daten durchzuführen. Wir werden später in einem weiteren Artikel mehr über Datenbanken sprechen.

Für weitere Informationen siehe [Datenbankintegration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation).

### Datendarstellung (Ansichten)

Template-Engines (in _Express_ auch als „View Engines“ bezeichnet) ermöglichen Ihnen, eine _Struktur_ eines Ausgabedokuments in einer Vorlage zu spezifizieren, indem Platzhalter für Daten verwendet werden, die beim Generieren einer Seite ausgefüllt werden. Templates werden oft verwendet, um HTML zu erstellen, können aber auch andere Arten von Dokumenten erzeugen.

Express hat für eine Anzahl von Template-Engines Unterstützung, insbesondere Pug (ehemals "Jade"), Mustache und EJS. Jede hat ihre eigenen Stärken zur Bewältigung bestimmter Anwendungsfälle (Vergleichende Informationen finden sich leicht über Internetsuche).
Der Express-Anwendungsgenerator verwendet Jade als Standard, unterstützt jedoch auch mehrere andere.

In Ihrem Anwendungs-Einstellungs-Code setzen Sie die zu verwendende Template-Engine und den Speicherort, an dem Express nach Templates suchen soll, mit den 'views'- und 'view engine'-Einstellungen, wie unten gezeigt (Sie müssen ebenfalls das Paket installieren, das Ihre Template-Bibliothek enthält!)

```js
const express = require("express");
const path = require("path");

const app = express();

// Set directory to contain the templates ('views')
app.set("views", path.join(__dirname, "views"));

// Set view engine to use, in this case 'some_template_engine_name'
app.set("view engine", "some_template_engine_name");
```

Das Erscheinungsbild des Templates hängt davon ab, welche Engine Sie verwenden. Angenommen, Sie haben eine Vorlagendatei namens „index.\<template_extension>“, die Platzhalter für Datenvariablen mit den Namen 'title' und „message“ enthält, würden Sie [`Response.render()`](https://expressjs.com/en/4x/api.html#res.render) in einer Route-Handler-Funktion aufrufen, um die HTML-Antwort zu erstellen und zu senden:

```js
app.get("/", (req, res) => {
  res.render("index", { title: "About dogs", message: "Dogs rock!" });
});
```

Für weitere Informationen siehe [Verwendung von Template-Engines mit Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation).

### Dateistruktur

Express trifft keine Annahmen hinsichtlich der Struktur oder der verwendeten Komponenten. Routen, Ansichten, statische Dateien und andere anwendungsspezifische Logik können in einer beliebigen Anzahl von Dateien mit jeder Verzeichnisstruktur leben. Obwohl es durchaus möglich ist, die gesamte _Express_-Anwendung in einer Datei zu haben, macht es typischerweise Sinn, Ihre Anwendung in Dateien basierend auf Funktion (z. B. Kontoverwaltung, Blogs, Diskussionsforen) und architektonischem Problemdomänen (z. B. Modell, Ansicht oder Controller, wenn Sie eine {{Glossary("MVC", "MVC-Architektur")}} verwenden) zu unterteilen.

In einem späteren Thema werden wir den _Express Application Generator_ verwenden, der ein modulares App-Skelett erstellt, das wir leicht erweitern können, um Webanwendungen zu erstellen.

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben den ersten Schritt auf Ihrer Express/Node-Reise abgeschlossen! Sie sollten nun die Hauptvorteile von Express und Node verstehen und grob wissen, wie die Hauptteile einer Express-App aussehen könnten (Routen, Middleware, Fehlerbehandlung und Template-Code). Sie sollten auch verstehen, dass Express ein nicht meinungsstarkes Framework ist, sodass die Art und Weise, wie Sie diese Teile zusammenfügen und welche Bibliotheken Sie verwenden, weitgehend Ihnen überlassen bleibt!

Natürlich ist Express bewusst ein sehr leichtes Webanwendungsframework, sodass ein Großteil seines Nutzens und Potentials aus Drittanbieter-Bibliotheken und Funktionen resultiert. Auf diese werden wir in den folgenden Artikeln genauer eingehen. In unserem nächsten Artikel werden wir uns mit dem Einrichten einer Node-Entwicklungsumgebung befassen, damit Sie einige Express-Codes in Aktion sehen können.

## Siehe auch

- [Learn Node.js](https://scrimba.com/learn-nodejs-c00ho9qqh6?via=mdn) von Scrimba <sup>[_MDN Bildungspartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine unterhaltsame, interaktive Einführung in Node.js.
- [Learn Express.js](https://scrimba.com/learn-expressjs-c062las154?via=mdn) von Scrimba <sup>[_MDN Bildungspartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> baut auf dem vorherigen Link auf und zeigt, wie das Express-Framework verwendet werden kann, um serverseitige Websites zu erstellen.
- [Module](https://nodejs.org/api/modules.html#modules_modules) (Node API-Dokumentation)
- [Express](https://expressjs.com/) (Homepage)
- [Grundlegendes Routing](https://expressjs.com/en/starter/basic-routing.html) (Express-Dokumentation)
- [Routing-Leitfaden](https://expressjs.com/en/guide/routing.html) (Express-Dokumentation)
- [Verwendung von Template-Engines mit Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation)
- [Verwendung von Middleware](https://expressjs.com/en/guide/using-middleware.html) (Express-Dokumentation)
- [Schreiben von Middleware zur Verwendung in Express-Apps](https://expressjs.com/en/guide/writing-middleware.html) (Express-Dokumentation)
- [Datenbankintegration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation)
- [Bereitstellung statischer Dateien in Express](https://expressjs.com/en/starter/static-files.html) (Express-Dokumentation)
- [Fehlerbehandlung](https://expressjs.com/en/guide/error-handling.html) (Express-Dokumentation)

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
