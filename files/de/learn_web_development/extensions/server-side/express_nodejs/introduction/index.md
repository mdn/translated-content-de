---
title: Einführung in Express/Node
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction
l10n:
  sourceCommit: e6d43da6c6d28a6ac92cdd47882809ffbdf987ce
---

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

In diesem ersten Express-Artikel beantworten wir die Fragen "Was ist Node?" und "Was ist Express?", und geben Ihnen einen Überblick darüber, was das Express-Webframework besonders macht. Wir skizzieren die Hauptmerkmale und zeigen Ihnen einige der Hauptbausteine für eine Express-Anwendung (obwohl Sie zu diesem Zeitpunkt noch keine Entwicklungsumgebung haben, um es zu testen).

> [!WARNING]
> Das Express-Tutorial ist für die Version 4 von Express geschrieben, während die neueste Version Express 5 ist.
> Wir planen, die Dokumentation in der zweiten Hälfte des Jahres 2025 zu aktualisieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein allgemeines Verständnis der <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps">Programmierung von serverseitigen Websites</a> und insbesondere der Mechanismen von <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview">Client-Server-Interaktionen in Websites</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit dem, was Express ist und wie es sich in Node einfügt, welche Funktionalität es bietet und die Hauptbausteine einer Express-Anwendung zu gewinnen.
      </td>
    </tr>
  </tbody>
</table>

## Einführung in Node

[Node](https://nodejs.org/) (oder formeller _Node.js_) ist eine Open-Source, plattformübergreifende Laufzeitumgebung, die es Entwicklern ermöglicht, alle Arten von serverseitigen Tools und Anwendungen mit {{Glossary("JavaScript", "JavaScript")}} zu erstellen.
Die Laufzeit ist für den Einsatz außerhalb eines Browser-Kontextes gedacht (d.h. direkt auf einem Computer oder Server-Betriebssystem laufend). Daher lässt die Umgebung browser-spezifische JavaScript-APIs weg und fügt Unterstützung für traditionellere OS-APIs wie HTTP- und Dateisystembibliotheken hinzu.

Aus der Perspektive der Webserver-Entwicklung hat Node eine Reihe von Vorteilen:

- Hervorragende Leistung! Node wurde entwickelt, um Durchsatz und Skalierbarkeit in Webanwendungen zu optimieren und ist eine gute Lösung für viele häufige Probleme der Webentwicklung (z.B. Echtzeit-Webanwendungen).
- Der Code wird in "plain old JavaScript" geschrieben, was bedeutet, dass weniger Zeit damit verbracht wird, zwischen Sprachen zu wechseln, wenn Sie sowohl Client- als auch Server-Seitencode schreiben.
- JavaScript ist eine relativ neue Programmiersprache und profitiert von Verbesserungen im Sprachdesign im Vergleich zu anderen traditionellen Web-Server-Sprachen (z.B. Python, PHP etc.). Viele andere neue und beliebte Sprachen werden in JavaScript kompiliert/umgewandelt, sodass Sie auch TypeScript, CoffeeScript, ClojureScript, Scala, LiveScript etc. verwenden können.
- Der Node Package Manager (npm) bietet Zugang zu Hunderttausenden von wiederverwendbaren Paketen. Er hat auch eine erstklassige Abhängigkeitsauflösung und kann verwendet werden, um die meisten Build-Toolchains zu automatisieren.
- Node.js ist portabel. Es ist auf Microsoft Windows, macOS, Linux, Solaris, FreeBSD, OpenBSD, WebOS und NonStop OS verfügbar. Außerdem wird es von vielen Webhostinganbietern gut unterstützt, die oft spezifische Infrastruktur und Dokumentationen für das Hosting von Node-Sites bereitstellen.
- Es hat ein sehr aktives Drittanbieter-Ökosystem und Entwickler-Community, mit vielen Menschen, die bereit sind zu helfen.

Sie können Node.js verwenden, um einen einfachen Webserver mit dem Node HTTP-Paket zu erstellen.

### Hallo Node.js

Das folgende Beispiel erstellt einen Webserver, der auf jede Art von HTTP-Anfrage unter der URL `http://127.0.0.1:8000/` hört — wenn eine Anfrage empfangen wird, antwortet das Skript mit dem String: "Hello World". Wenn Sie Node bereits installiert haben, können Sie die folgenden Schritte ausführen, um das Beispiel auszuprobieren:

1. Öffnen Sie das Terminal (unter Windows das Befehlszeilenprogramm öffnen).
2. Erstellen Sie den Ordner, in dem Sie das Programm speichern möchten, zum Beispiel `test-node` und betreten Sie ihn, indem Sie den folgenden Befehl in Ihr Terminal eingeben:

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

Schließlich navigieren Sie in Ihrem Webbrowser zu `http://localhost:8000`; Sie sollten den Text "**Hello World**" in der oberen linken Ecke einer ansonsten leeren Webseite sehen.

> [!NOTE]
> Wenn Sie mit ein wenig Node.js-Code spielen möchten, ohne eine lokale Einrichtung vornehmen zu müssen, bietet Ihnen Scrimba's [Aside: The HTTP module](https://scrimba.com/learn-nodejs-c00ho9qqh6/~07du?via=mdn) <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> eine interaktive Schritt-für-Schritt-Anleitung zur Einrichtung eines Basisservers mit dem Node HTTP-Paket.

## Web-Frameworks

Andere häufige Webentwicklungsaufgaben werden nicht direkt von Node selbst unterstützt. Wenn Sie spezifische Verarbeitung für verschiedene HTTP-Verben (z.B. `GET`, `POST`, `DELETE` etc.) hinzufügen möchten, Anfragen auf verschiedenen URL-Pfaden ("Routen") separat behandeln, statische Dateien bereitstellen oder Vorlagen verwenden möchten, um die Antwort dynamisch zu erstellen, wird Node allein nicht viel nützen. Sie müssen entweder den Code selbst schreiben, oder Sie können sich die Mühe sparen und ein Web-Framework verwenden!

## Einführung in Express

[Express](https://expressjs.com/) ist das beliebteste Node.js-Webframework und bildet die Grundlage für eine Reihe anderer beliebter Node.js-Frameworks. Es bietet Mechanismen, um:

- Handler für Anfragen mit verschiedenen HTTP-Verben und auf verschiedenen URL-Pfaden (Routen) zu schreiben.
- Mit "View"-Rendering-Engines zu integrieren, um Antworten zu erzeugen, indem Daten in Vorlagen eingefügt werden.
- Gemeinsame Webanwendungseinstellungen festzulegen, wie den zu verwendenden Anschluss und den Ort der Vorlagen, die für das Rendering der Antwort verwendet werden.
- Zusätzliche Anfragenverarbeitung-"Middleware" an jedem Punkt innerhalb der Anfrageverarbeitungspipeline hinzuzufügen.

Während _Express_ selbst ziemlich minimalistisch ist, haben Entwickler kompatible Middleware-Pakete erstellt, um fast jedes Webentwicklungsproblem zu lösen. Es gibt Bibliotheken zur Arbeit mit Cookies, Sitzungen, Benutzeranmeldungen, URL-Parametern, `POST`-Daten, Sicherheitsheadern und _vielen_ weiteren. Sie finden eine Liste der von dem Express-Team gepflegten Middleware-Pakete bei [Express Middleware](https://expressjs.com/en/resources/middleware.html) (zusammen mit einer Liste einiger beliebter 3.-Parteien-Pakete).

> [!NOTE]
> Diese Flexibilität ist ein zweischneidiges Schwert. Es gibt Middleware-Pakete, um fast jedes Problem oder jede Anforderung zu lösen, aber herauszufinden, welche Pakete zu verwenden sind, kann manchmal eine Herausforderung sein. Es gibt auch keinen "richtigen Weg", eine Anwendung zu strukturieren, und viele Beispiele, die Sie im Internet finden könnten, sind nicht optimal oder zeigen nur einen kleinen Teil dessen, was Sie tun müssen, um eine Webanwendung zu entwickeln.

## Woher stammen Node und Express?

Node wurde zunächst 2009 für Linux veröffentlicht. Der npm-Paket-Manager wurde 2010 veröffentlicht und die native Windows-Unterstützung wurde 2012 hinzugefügt. Tauchen Sie tiefer ein in [Wikipedia](https://en.wikipedia.org/wiki/Node.js#History), wenn Sie mehr darüber erfahren möchten.

Express wurde erstmals im November 2010 veröffentlicht und ist derzeit bei der Hauptversion 5 der API. Sie können den [Changelog](https://expressjs.com/en/changelog/#5.x) für Informationen zu Änderungen in der aktuellen Version einsehen und [GitHub](https://github.com/expressjs/express/blob/master/History.md) für detailliertere historische Versionshinweise.

## Wie beliebt sind Node und Express?

Die Beliebtheit eines Webframeworks ist wichtig, weil es ein Indikator dafür ist, ob es weiterhin gepflegt wird und welche Ressourcen in Bezug auf Dokumentation, Zusatzbibliotheken und technischen Support voraussichtlich verfügbar sind.

Es gibt keine leicht verfügbaren und endgültigen Maße für die Beliebtheit serverseitiger Frameworks (obwohl Sie die Beliebtheit mithilfe von Mechanismen wie dem Zählen der Anzahl von GitHub-Projekten und Stack Overflow-Fragen für jede Plattform abschätzen können). Eine bessere Frage ist, ob Node und Express "beliebt genug" sind, um die Probleme unbeliebter Plattformen zu vermeiden. Entwickeln sie sich weiter? Können Sie Hilfe bekommen, wenn Sie sie brauchen? Gibt es eine Möglichkeit, bezahlte Arbeit zu bekommen, wenn Sie Express lernen?

Basierend auf der Anzahl hochkarätiger Unternehmen, die Express verwenden, der Anzahl der Personen, die zum Code beitragen, und der Anzahl der Personen, die sowohl kostenlose als auch bezahlte Unterstützung bieten, ist _Express_ ein beliebtes Framework!

## Ist Express meinungsstark?

Web-Frameworks bezeichnen sich oft als "meinungsstark" oder "unopinioniert".

Meinungsstarke Frameworks sind solche, die Meinungen darüber haben, wie eine bestimmte Aufgabe "richtig" zu lösen ist. Sie unterstützen oft die schnelle Entwicklung _in einem bestimmten Bereich_ (Lösen von Problemen eines bestimmten Typs), weil der richtige Weg, etwas zu tun, normalerweise gut verstanden und gut dokumentiert ist. Sie können jedoch weniger flexibel sein, um Probleme außerhalb ihres Hauptbereichs zu lösen, und bieten tendenziell weniger Auswahlmöglichkeiten, welche Komponenten und Ansätze sie verwenden können.

Unopinionierte Frameworks hingegen haben weit weniger Einschränkungen, wie die Komponenten zusammengefügt werden sollten, um ein Ziel zu erreichen, oder welche Komponenten verwendet werden sollten. Sie erleichtern es Entwicklern, die am besten geeigneten Tools zu verwenden, um eine bestimmte Aufgabe zu erledigen, wenn auch auf Kosten, dass Sie diese Komponenten selbst finden müssen.

Express ist unopinioniert. Sie können fast jede kompatible Middleware, die Sie mögen, in die Anfragenverarbeitungskette einfügen, in nahezu jeder Reihenfolge, die Sie mögen. Sie können die App in einer Datei oder mehreren Dateien und unter Verwendung einer beliebigen Verzeichnisstruktur strukturieren. Manchmal können Sie das Gefühl haben, dass Sie zu viele Wahlmöglichkeiten haben!

## Wie sieht der Express-Code aus?

In einer herkömmlichen datengetriebenen Website wartet eine Webanwendung auf HTTP-Anfragen vom Webbrowser (oder einem anderen Client). Wenn eine Anfrage empfangen wird, arbeitet die Anwendung heraus, welche Aktion basierend auf dem URL-Muster und möglicherweise assoziierten Informationen enthalten in `POST`-Daten oder `GET`-Daten erforderlich ist. Je nach Bedarf kann es dann Informationen aus einer Datenbank lesen oder schreiben oder andere Aufgaben ausführen, die erforderlich sind, um die Anfrage zu erfüllen. Die Anwendung gibt dann eine Antwort an den Webbrowser zurück, indem oft eine HTML-Seite dynamisch für den Browser erstellt wird, indem die abgerufenen Daten in Platzhalter in einer HTML-Vorlage eingefügt werden.

Express bietet Methoden, um anzugeben, welche Funktion für ein bestimmtes HTTP-Verb (`GET`, `POST`, `PUT` usw.) und ein URL-Muster ("Route") aufgerufen wird, und Methoden, um anzugeben, welche Vorlage ("View") Engine verwendet wird, wo sich Vorlagendateien befinden, und welche Vorlage zum Rendern einer Antwort verwendet werden soll. Sie können Express Middleware verwenden, um Unterstützung für Cookies, Sitzungen und Benutzer hinzuzufügen, `POST`/`GET`-Parameter zu erhalten usw. Sie können jeden Datenbankmechanismus verwenden, der von Node unterstützt wird (Express definiert kein datenbankspezifisches Verhalten).

Die folgenden Abschnitte erklären einige der häufigen Dinge, die Sie sehen werden, wenn Sie mit _Express_ und _Node_ Code arbeiten.

### Hallo Welt Express

Betrachten wir zuerst das standardmäßige Express [Hello World](https://expressjs.com/en/starter/hello-world.html) Beispiel (wir diskutieren jeden Teil davon unten und in den folgenden Abschnitten).

> [!NOTE]
> Wenn Sie Node und Express bereits installiert haben (oder wenn Sie sie wie im [nächsten Artikel](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) gezeigt installieren), können Sie diesen Code in einer Textdatei namens **app.js** speichern und ihn in einem Bash-Befehlsfenster ausführen, indem Sie aufrufen:
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

Die ersten beiden Zeilen `require()` (importieren) das Express-Modul und erstellen eine [Express-Anwendung](https://expressjs.com/en/4x/api.html#app). Dieses Objekt, das traditionell `app` genannt wird, verfügt über Methoden zum Routen von HTTP-Anfragen, Konfigurieren von Middleware, Rendern von HTML-Ansichten, Registrieren einer Vorlagen-Engine und Ändern von [Anwendungseinstellungen](https://expressjs.com/en/4x/api.html#app.settings.table), die steuern, wie die Anwendung sich verhält (z.B. den Umgebungsmodus, ob Routendefinitionen groß-/kleinbuchstabenempfindlich sind usw.)

Der mittlere Teil des Codes (die drei Zeilen beginnend mit `app.get`) zeigt eine _Routendefinition_. Die Methode `app.get()` spezifiziert eine Callback-Funktion, die immer dann aufgerufen wird, wenn eine HTTP-`GET`-Anfrage mit einem Pfad (`'/'`) relativ zum Stammpfad der Site erfolgt. Die Callback-Funktion nimmt eine Anfrage und ein Antwortobjekt als Argumente und ruft [`send()`](https://expressjs.com/en/4x/api.html#res.send) auf der Antwort auf, um den String "Hello World!" zurückzugeben.

Das letzte Block startet den Server an einem angegebenen Port ('3000') und druckt einen Log-Kommentar auf die Konsole. Wenn der Server läuft, können Sie im Browser zu `localhost:3000` gehen, um die zurückgegebene Beispielantwort zu sehen.

### Importieren und Erstellen von Modulen

Ein Modul ist eine JavaScript-Bibliothek/Datei, die Sie in anderen Code mit der `require()`-Funktion von Node importieren können. _Express_ selbst ist ein Modul, ebenso wie die Middleware- und Datenbankbibliotheken, die wir in unseren _Express_-Anwendungen verwenden.

Der folgende Code zeigt, wie wir ein Modul beim Namen importieren, wobei wir das _Express_-Framework als Beispiel verwenden. Zuerst rufen wir die `require()`-Funktion auf, spezifizieren den Namen des Moduls als String (`'express'`) und rufen das zurückgegebene Objekt auf, um eine [Express-Anwendung](https://expressjs.com/en/4x/api.html#app) zu erstellen. Wir können dann auf die Eigenschaften und Funktionen des Anwendungsobjekts zugreifen.

```js
const express = require("express");

const app = express();
```

Sie können auch Ihre eigenen Module erstellen, die auf die gleiche Weise importiert werden können.

> [!NOTE]
> Sie werden _eigene_ Module erstellen wollen, weil dies Ihnen ermöglicht, Ihren Code in verwaltbare Teile zu organisieren — eine monolithische Einzeldateianwendung ist schwer zu verstehen und zu pflegen. Die Verwendung von Modulen hilft Ihnen auch, Ihren Namensraum zu verwalten, da nur die Variablen, die Sie explizit exportieren, importiert werden, wenn Sie ein Modul verwenden.

Um Objekte außerhalb eines Moduls verfügbar zu machen, müssen Sie sie einfach als zusätzliche Eigenschaften auf dem `exports`-Objekt ausgeben. Beispielsweise ist das **square.js** Modul unten eine Datei, die `area()`- und `perimeter()`-Methoden exportiert:

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
> Sie können auch einen absoluten Pfad zum Modul spezifizieren (oder einen Namen, wie wir es anfänglich getan haben).

Wenn Sie ein vollständiges Objekt in einer Zuordnung exportieren möchten, anstatt es eigenschaftsweise zu erstellen, weisen Sie es wie unten gezeigt `module.exports` zu (Sie können dies auch tun, um die Oberseite des Exportsobjekts zu einem Konstruktor oder einer anderen Funktion zu machen):

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
> Sie können `exports` als [Abkürzung](https://nodejs.org/api/modules.html#modules_exports_shortcut) zu `module.exports` innerhalb eines gegebenen Moduls betrachten. Tatsächlich ist `exports` nur eine Variable, die auf den Wert von `module.exports` gesetzt wird, bevor das Modul ausgewertet wird. Dieser Wert ist eine Referenz auf ein Objekt (in diesem Fall ein leeres Objekt). Dies bedeutet, dass `exports` eine Referenz auf dasselbe Objekt hält, auf das auch `module.exports` verweist. Es bedeutet auch, dass, indem Sie einen anderen Wert auf `exports` zuweisen, es nicht mehr an `module.exports` gebunden ist.

Für viel mehr Informationen über Module siehe [Modules](https://nodejs.org/api/modules.html#modules_modules) (Node API docs).

### Verwenden von asynchronen APIs

JavaScript-Code verwendet häufig asynchrone anstelle von synchronen APIs für Operationen, die einige Zeit benötigen könnten, um abgeschlossen zu werden. Eine synchrone API ist eine, bei der jede Operation abgeschlossen sein muss, bevor die nächste Operation starten kann. Beispielsweise sind die folgenden Logfunktionen synchron und drucken den Text in Ordnung (First, Second) in die Konsole.

```js
console.log("First");
console.log("Second");
```

Im Gegensatz dazu ist eine asynchrone API eine, bei der die API eine Operation startet und sofort zurückkehrt (bevor die Operation abgeschlossen ist). Sobald die Operation abgeschlossen ist, wird die API irgendeinen Mechanismus verwenden, um zusätzliche Operationen durchzuführen. Zum Beispiel wird der folgende Code "Second, First" ausdrucken, weil obwohl die `setTimeout()` Methode zuerst aufgerufen wird und sofort zurückkehrt, die Operation mehrere Sekunden braucht, um fertigzustellen.

```js
setTimeout(function () {
  console.log("First");
}, 3000);
console.log("Second");
```

Das Verwenden von nicht-blockierenden asynchronen APIs ist sogar noch wichtiger auf Node als im Browser, weil _Node_ eine Einzelthread-Ereignisgesteuerte Ausführungsumgebung ist. "Einzelthread" bedeutet, dass alle Anfragen an den Server auf demselben Thread ausgeführt werden (anstatt in separate Prozesse zu unterteilen). Dieses Modell ist in Bezug auf Geschwindigkeit und Serverressourcen extrem effizient, aber es bedeutet auch, dass wenn irgendeine Ihrer Funktionen synchron aufrufe, die lange braucht, um abzuschließen, sie nicht nur die aktuelle Anfrage blockieren wird, sondern jede andere Anfrage, die von Ihrer Webanwendung bearbeitet wird.

Es gibt eine Anzahl von Möglichkeiten, wie eine asynchrone API Ihre Anwendung benachrichtigen kann, dass sie abgeschlossen ist. Der häufigste Weg ist, eine Callback-Funktion zu registrieren, wenn Sie die asynchrone API aufrufen, die aufgerufen wird, wenn die Operation abgeschlossen ist. Dies ist der Ansatz, der oben verwendet wurde.

> [!NOTE]
> Die Verwendung von Callbacks kann ziemlich "chaotisch" werden, wenn Sie eine Folge abhängiger asynchroner Operationen haben, die in der richtigen Reihenfolge ausgeführt werden müssen, da dies zu mehreren Verschachtelungsebenen von Callbacks führt. Dieses Problem wird allgemein als "Callback-Hölle" bekannt. Dieses Problem kann durch gute Programmierpraktiken vermindert werden (siehe <http://callbackhell.com/>), durch das Verwenden eines Moduls wie [async](https://www.npmjs.com/package/async) oder durch das Umgestalten des Codes auf native JavaScript-Funktionen wie [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) und [async/await](/de/docs/Web/JavaScript/Reference/Statements/async_function). Node bietet die [`utils.promisify`](https://nodejs.org/api/util.html#utilpromisifyoriginal) Funktion, um die Callback → Promise-Konvertierung ergonomisch zu machen.

> [!NOTE]
> Eine häufige Konvention für Node und Express ist die Verwendung von Fehler-erstem Callback. Bei dieser Konvention ist der erste Wert in Ihren _Callback-Funktionen_ ein Fehlerwert, während die nachfolgenden Argumente Erfolgsdaten enthalten. Es gibt eine gute Erklärung, warum dieser Ansatz nützlich ist in diesem Blog: [The Node.js Way - Understanding Error-First Callbacks](https://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/) (fredkschott.com).

### Erstellen von Routen-Handlern

In unserem _Hallo Welt_ Express-Beispiel (siehe oben) haben wir eine (Callback-)Routen-Handler-Funktion für HTTP-`GET`-Anfragen an das Stammdokument der Site (`'/'`) definiert.

```js
app.get("/", function (req, res) {
  res.send("Hello World!");
});
```

Die Callback-Funktion nimmt eine Anfrage- und eine Antwortobjekt als Argumente. In diesem Fall ruft die Methode [`send()`](https://expressjs.com/en/4x/api.html#res.send) auf der Antwort auf, um den String "Hello World!" zurückzugeben. Es gibt eine [Reihe anderer Antwortmethoden](https://expressjs.com/en/guide/routing.html#response-methods), um den Request/Response-Zyklus zu beenden, zum Beispiel könnten Sie [`res.json()`](https://expressjs.com/en/4x/api.html#res.json) aufrufen, um eine JSON-Antwort zu senden, oder [`res.sendFile()`](https://expressjs.com/en/4x/api.html#res.sendFile), um eine Datei zu senden.

> [!NOTE]
> Sie können in den Callback-Funktionen beliebige Argumentnamen verwenden; wenn der Callback aufgerufen wird, ist das erste Argument immer die Anfrage und das zweite immer die Antwort. Es macht Sinn, sie so zu benennen, dass Sie das Objekt, mit dem Sie arbeiten, im Body des Callbacks identifizieren können.

Das _Express-Anwendungs_-Objekt bietet auch Methoden zum Definieren von Routen-Handlern für alle anderen HTTP-Verben, die meist auf die gleiche Weise verwendet werden:

`checkout()`, `copy()`, **`delete()`**, **`get()`**, `head()`, `lock()`, `merge()`, `mkactivity()`, `mkcol()`, `move()`, `m-search()`, `notify()`, `options()`, `patch()`, **`post()`**, `purge()`, **`put()`**, `report()`, `search()`, `subscribe()`, `trace()`, `unlock()`, `unsubscribe()`.

Es gibt eine spezielle Routing-Methode, `app.all()`, die in Antwort auf jede HTTP-Methode aufgerufen wird. Diese wird verwendet, um Middleware-Funktionen an einem bestimmten Pfad für alle Anfragenmethoden zu laden. Das folgende Beispiel (aus der Express-Dokumentation) zeigt einen Handler, der für Anfragen an `/secret` unabhängig vom verwendeten HTTP-Verb ausgeführt wird (vorausgesetzt, es wird von dem [http Modul](https://nodejs.org/docs/latest/api/http.html#httpmethods) unterstützt).

```js
app.all("/secret", function (req, res, next) {
  console.log("Accessing the secret section…");
  next(); // pass control to the next handler
});
```

Routen ermöglichen Ihnen, bestimmte Zeichenmuster in einer URL zu verbinden und einige Werte aus der URL zu extrahieren und sie als Parameter an den Routen-Handler weiterzugeben (als Attribute des Anfragenobjekts, das als Parameter übergeben wird).

Es ist oft nützlich, Routen-Handler für einen bestimmten Teil einer Site zusammenzufassen und sie mit einem allgemeinen Routenpräfix zu erreichen (z.B. eine Site mit einem Wiki könnte alle wiki-bezogenen Routen in einer Datei haben und sie mit einem Routenpräfix von _/wiki/_ erreichen). In _Express_ wird dies durch die Verwendung des [`express.Router`](https://expressjs.com/en/guide/routing.html#express-router) Objekts erreicht. Zum Beispiel könnten wir unsere Wiki-Route in einem Modul namens **wiki.js** erstellen und dann das `Router`-Objekt exportieren, wie unten gezeigt:

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
> Das Hinzufügen von Routen zu dem `Router`-Objekt ist wie das Hinzufügen von Routen zu dem `app`-Objekt (wie zuvor gezeigt).

Um den Router in unserer Haupt-App-Datei zu verwenden, würden wir dann das Routenmodul (**wiki.js**) mit `require()` beziehen und dann `use()` auf der _Express_ Anwendung aufrufen, um den Router zur Middleware-Verarbeitungskette hinzuzufügen. Die zwei Routen werden dann von `/wiki/` und `/wiki/about/` aus zugänglich sein.

```js
const wiki = require("./wiki.js");

// …
app.use("/wiki", wiki);
```

Wir werden Ihnen später in dem verlinkten Abschnitt [Routen und Controller](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes) mehr über das Arbeiten mit Routen und insbesondere die Verwendung des `Router` zeigen.

### Verwendung von Middleware

Middleware wird in Express-Apps extensiv verwendet, für Aufgaben von der Bereitstellung statischer Dateien bis zur Fehlerbehandlung, Komprimierung von HTTP-Antworten. Während Routenfunktionen den HTTP-Anfrage-Antwort-Zyklus beenden, indem sie irgendeine Antwort an den HTTP-Client zurückgeben, führen Middleware-Funktionen _typischerweise_ irgendeine Operation an der Anfrage oder Antwort durch und rufen dann die nächste Funktion im "Stack" auf, die weitere Middleware oder ein Routen-Handler sein könnte. Die Reihenfolge, in der Middleware aufgerufen wird, liegt beim App-Entwickler.

> [!NOTE]
> Die Middleware kann jede Operation ausführen, jeden Code ausführen, Änderungen an dem Anfrage- und Antwortobjekt vornehmen, und sie kann _auch den Anfrage-Antwort-Zyklus beenden_. Wenn es den Zyklus nicht beendet, muss es `next()` aufrufen, um die Kontrolle an die nächste Middleware-Funktion weiterzugeben (oder die Anfrage wird hängen bleiben).

Die meisten Apps werden _Third-Party_-Middleware verwenden, um häufige Webentwicklungstasks zu vereinfachen, wie die Arbeit mit Cookies, Sitzungen, Benutzer-Authentifizierung, Zugang zu Anfrage-`POST` und JSON-Daten, Logging usw. Sie können eine [Liste von Middleware-Paketen, die vom Express-Team gepflegt werden](https://expressjs.com/en/resources/middleware.html) finden (welche auch andere populäre 3rd-Party-Pakete einschließt). Andere Express-Pakete sind im npm-Paket-Manager erhältlich.

Um Drittanbieter-Middleware zu verwenden, müssen Sie sie zuerst mit npm in Ihrer App installieren.
Zum Beispiel, um das [morgan](https://expressjs.com/en/resources/middleware/morgan.html) HTTP-Anfragelogger-Middleware zu installieren, würden Sie dies tun:

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
> Middleware und Routing-Funktionen werden in der Reihenfolge aufgerufen, in der sie deklariert werden. Für einige Middleware ist die Reihenfolge wichtig (z.B. wenn Session-Middleware von Cookie-Middleware abhängt, dann muss der Cookie-Handler zuerst hinzugefügt werden). Es ist fast immer der Fall, dass Middleware vor dem Setzen von Routen aufgerufen wird, oder Ihre Routen-Handler haben keinen Zugang zu durch Ihre Middleware hinzugefügter Funktionalität.

Sie können Ihre eigenen Middleware-Funktionen schreiben, und Sie werden wahrscheinlich gezwungen sein, dies zu tun (wenn auch nur, um Fehlerbehandlungscode zu erstellen). Der **einzige** Unterschied zwischen einer Middleware-Funktion und einem Routen-Handler-Callback besteht darin, dass Middleware-Funktionen ein drittes Argument `next` haben, das Middleware-Funktionen aufrufen sollen, wenn sie nicht diejenige sind, die den Anfragenzyklus abschließt (wenn die Middleware-Funktion aufgerufen wird, enthält dies die _nächste_ Funktion, die aufgerufen werden muss).

Sie können eine Middleware-Funktion zur Verarbeitungskette für _alle Antworten_ mit `app.use()` hinzufügen, oder für ein spezifisches HTTP-Verb mit der zugehörigen Methode: `app.get()`, `app.post()` etc. Routen werden in beiden Fällen auf die gleiche Weise angegeben, obwohl die Route optional ist, wenn `app.use()` aufgerufen wird.

Das Beispiel unten zeigt, wie Sie die Middleware-Funktion mit beiden Ansätzen hinzufügen können und mit/ohne Route.

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
> Oben haben wir die Middleware-Funktion separat deklariert und sie dann als Callback gesetzt. In unserer vorherigen Routen-Handler-Funktion haben wir die Callback-Funktion deklariert, als sie verwendet wurde. In JavaScript ist beide Ansätze gültig.

Die Express-Dokumentation hat noch viel mehr ausgezeichnete Informationen über [use](https://expressjs.com/en/guide/using-middleware.html) und [writing](https://expressjs.com/en/guide/writing-middleware.html) Express Middleware.

### Bereitstellung statischer Dateien

Sie können die [express.static](https://expressjs.com/en/4x/api.html#express.static) Middleware verwenden, um statische Dateien bereitzustellen, einschließlich Ihrer Bilder, CSS und JavaScript (`static()` ist die einzige Middleware-Funktion, die tatsächlich **Teil** von _Express_ ist). Zum Beispiel würden Sie die folgende Zeile verwenden, um Bilder, CSS-Dateien und JavaScript-Dateien aus einem Verzeichnis namens '**public'** auf der gleichen Ebene, auf der Sie Node aufrufen, zu liefern:

```js
app.use(express.static("public"));
```

Alle Dateien im öffentlichen Verzeichnis werden bereitgestellt, indem ihr Dateiname (_relativ_ zum Basis-„public“-Verzeichnis) zur Basis-URL hinzugefügt wird. Also zum Beispiel:

```plain
http://localhost:3000/images/dog.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/about.html
```

Sie können `static()` mehrmals aufrufen, um mehrere Verzeichnisse bereitzustellen. Wenn eine Datei von einer Middleware-Funktion nicht gefunden werden kann, wird sie an die nachfolgende Middleware weitergeleitet (die Reihenfolge, in der Middleware aufgerufen wird, basiert auf Ihrer Deklarationsreihenfolge).

```js
app.use(express.static("public"));
app.use(express.static("media"));
```

Sie können auch ein virtuelles Präfix für Ihre statischen URLs erstellen, anstatt die Dateien zur Basis-URL hinzuzufügen. Zum Beispiel spezifizieren wir hier einen [suchpfad](https://expressjs.com/en/4x/api.html#app.use) so dass die Dateien mit dem Präfix "/media" geladen werden:

```js
app.use("/media", express.static("public"));
```

Jetzt können Sie die Dateien, die sich im `public`-Verzeichnis befinden, über das `/media`-Pfadpräfix laden.

```plain
http://localhost:3000/media/images/dog.jpg
http://localhost:3000/media/video/cat.mp4
http://localhost:3000/media/cry.mp3
```

> [!NOTE]
> Siehe auch [Serving static files in Express](https://expressjs.com/en/starter/static-files.html).

### Behandlung von Fehlern

Fehler werden durch eine oder mehrere spezielle Middleware-Funktionen behandelt, die vier Argumente haben, anstelle der üblichen drei: `(err, req, res, next)`. Zum Beispiel:

```js
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

Diese können jeden benötigten Inhalt zurückgeben, müssen aber nach allen anderen `app.use()` und Routenaufrufen aufgerufen werden, sodass sie die letzte Middleware im Anfragenverarbeitungsprozess sind!

Express kommt mit einem eingebauten Fehlerhandler, der sich um verbleibende Fehler kümmert, die möglicherweise in der App auftreten. Diese standardmäßige fehlerbehandelnde Middleware-Funktion wird am Ende des Middleware-Funktionsstapels hinzugefügt. Wenn Sie einen Fehler an `next()` übergeben und ihn nicht in einem Fehlerhandler behandeln, wird er vom eingebauten Fehlerhandler behandelt; der Fehler wird mit dem Stack-Trace an den Client geschrieben.

> [!NOTE]
> Der Stack-Trace wird in der Produktionsumgebung nicht einbezogen. Um es im Produktionsmodus auszuführen, müssen Sie die Umgebungsvariable `NODE_ENV` auf `"production"` setzen.

> [!NOTE]
> HTTP404 und andere "Fehler"-Statuscodes werden nicht als Fehler behandelt. Wenn Sie diese behandeln möchten, können Sie eine Middleware-Funktion hinzufügen, um dies zu tun. Weitere Informationen finden Sie in den [FAQ](https://expressjs.com/en/starter/faq.html#how-do-i-handle-404-responses).

Für weitere Informationen siehe [Fehlerbehandlung](https://expressjs.com/en/guide/error-handling.html) (Express-Dokumentation).

### Verwendung von Datenbanken

_Express_-Apps können jeden von _Node_ unterstützten Datenbankmechanismus verwenden (_Express_ selbst definiert kein spezielles zusätzliches Verhalten/Anforderungen für das Datenbankmanagement). Es gibt viele Möglichkeiten, darunter PostgreSQL, MySQL, Redis, SQLite, MongoDB, etc.

Um diese zu verwenden, müssen Sie zuerst den Datenbanktreiber mit npm installieren. Zum Beispiel, um den Treiber für das beliebte NoSQL MongoDB zu installieren, würden Sie den Befehl verwenden:

```bash
npm install mongodb
```

Die Datenbank selbst kann lokal oder auf einem Cloud-Server installiert werden. In Ihrem Express-Code beziehen Sie den Treiber, verbinden sich mit der Datenbank und führen dann Erstellungs-, Lese-, Update- und Löschoperationen (CRUD) durch. Das unten stehende Beispiel (aus den Express-Dokumenten) zeigt, wie Sie "Säugetier"-Datensätze mithilfe von MongoDB finden können.

Das funktioniert mit älteren Versionen von MongoDB Version ~ 2.2.33:

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

Ein weiterer beliebter Ansatz besteht darin, auf Ihre Datenbank indirekt über einen Object Relational Mapper ("ORM") zuzugreifen. In diesem Ansatz definieren Sie Ihre Daten als "Objekte" oder "Modelle" und das ORM ordnet diese durch das zugrunde liegende Datenbankformat zu. Dieser Ansatz hat den Vorteil, dass Sie als Entwickler weiterhin in JavaScript-Objekten und nicht in Datenbanksemantik denken können und dass es einen offensichtlichen Ort gibt, um Validation und Überprüfung eingehender Daten durchzuführen. Wir werden später mehr über Datenbanken sprechen.

Für weitere Informationen siehe [Datenbank-Integration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation).

### Daten rendern (Ansichten)

Vorlagen-Engines (auch als "View Engines" in _Express_ bezeichnet) ermöglichen es Ihnen, die _Struktur_ eines Ausgabedokuments in einer Vorlage anzugeben, mit Platzhaltern für Daten, die eingefügt werden, wenn eine Seite generiert wird. Vorlagen werden oft verwendet, um HTML zu erstellen, können aber auch andere Dokumenttypen erstellen.

Express unterstützt eine Reihe von Vorlagensystemen, insbesondere Pug (früher "Jade"), Mustache und EJS. Jede hat ihre eigenen Stärken für die Behandlung bestimmter Anwendungsfälle (relative Vergleiche können leicht über die Internet-Suche gefunden werden).
Der Express Application Generator verwendet Jade als Standard, unterstützt aber auch mehrere andere.

In Ihrem Anwendungseinstellungs-Code setzen Sie die zu verwendende Vorlagen-Engine und den Ort, an dem Express Vorlagen suchen sollte, mithilfe der 'views' und 'view engine' Einstellungen, wie unten gezeigt (Sie müssen auch das Paket installieren, das Ihre Vorlagenbibliothek enthält!)

```js
const express = require("express");
const path = require("path");

const app = express();

// Set directory to contain the templates ('views')
app.set("views", path.join(__dirname, "views"));

// Set view engine to use, in this case 'some_template_engine_name'
app.set("view engine", "some_template_engine_name");
```

Das Erscheinungsbild der Vorlage hängt davon ab, welche Engine Sie verwenden. Angenommen, Sie haben eine Vorlagendatei namens "index.\<template_extension>", die Platzhalter für Datenvariablen mit den Namen 'title' und "message" enthält, würden Sie [`Response.render()`](https://expressjs.com/en/4x/api.html#res.render) in einer Routen-Handler-Funktion aufrufen, um die HTML-Antwort zu erstellen und zu senden:

```js
app.get("/", function (req, res) {
  res.render("index", { title: "About dogs", message: "Dogs rock!" });
});
```

Für weitere Informationen siehe [Verwendung von Vorlagen-Engines mit Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation).

### Dateistruktur

Express macht keine Annahmen in Bezug auf Struktur oder welche Komponenten Sie verwenden. Routen, Ansichten, statische Dateien und andere anwendungsspezifische Logik kann in beliebig vielen Dateien mit beliebiger Verzeichnisstruktur leben. Während es durchaus möglich ist, die ganze _Express_-Anwendung in einer Datei zu haben, macht es typischerweise Sinn, Ihre Anwendung in Dateien nach Funktion (z.B. Kontoverwaltung, Blogs, Diskussionsforen) und architektonischem Problembereich zu unterteilen (z.B. Modell, Ansicht oder Controller, wenn Sie zufällig eine {{Glossary("MVC", "MVC-Architektur")}} verwenden).

In einem späteren Thema werden wir den _Express Application Generator_ verwenden, der ein modulares App-Skelett erstellt, das wir leicht erweitern können, um Webanwendungen zu entwickeln.

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben den ersten Schritt Ihrer Express/Node-Reise abgeschlossen! Sie sollten jetzt die Hauptvorteile von Express und Node verstehen und ungefähr wissen, wie die Hauptteile einer Express-App aussehen könnten (Routen, Middleware, Fehlerbehandlung und Vorlagencode). Sie sollten auch verstehen, dass mit Express als unopinioniertem Framework weitgehend Ihnen überlassen ist, wie Sie diese Teile zusammenfügen und welche Bibliotheken Sie verwenden!

Natürlich ist Express absichtlich ein sehr leichtgewichtiges Web-Anwendungsframework, so dass viele seiner Vorteile und Potenziale aus Drittanbieterbibliotheken und Funktionen stammen. Wir werden diese in den folgenden Artikeln genauer untersuchen. In unserem nächsten Artikel schauen wir uns die Einrichtung einer Node-Entwicklungsumgebung an, damit Sie etwas Express-Code in Aktion sehen können.

## Siehe auch

- [Learn Node.js](https://scrimba.com/learn-nodejs-c00ho9qqh6?via=mdn) von Scrimba <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine unterhaltsame, interaktive Einführung in Node.js.
- [Learn Express.js](https://scrimba.com/learn-expressjs-c062las154?via=mdn) von Scrimba <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> baut auf dem vorherigen Link auf und zeigt, wie man das Express-Framework verwendet, um serverseitige Websites zu erstellen.
- [Modules](https://nodejs.org/api/modules.html#modules_modules) (Node API Dokumentation)
- [Express](https://expressjs.com/) (Homepage)
- [Basis-Routing](https://expressjs.com/en/starter/basic-routing.html) (Express-Dokumentation)
- [Routing-Leitfaden](https://expressjs.com/en/guide/routing.html) (Express-Dokumentation)
- [Verwendung von Vorlagen-Engines mit Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation)
- [Verwendung von Middleware](https://expressjs.com/en/guide/using-middleware.html) (Express-Dokumentation)
- [Middleware für die Verwendung in Express-Apps schreiben](https://expressjs.com/en/guide/writing-middleware.html) (Express-Dokumentation)
- [Datenbankintegration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation)
- [Bereitstellung statischer Dateien in Express](https://expressjs.com/en/starter/static-files.html) (Express-Dokumentation)
- [Fehlerbehandlung](https://expressjs.com/en/guide/error-handling.html) (Express-Dokumentation)

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
