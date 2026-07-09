---
title: Einführung in Express/Node
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

In diesem ersten Artikel über Express beantworten wir die Fragen "Was ist Node?" und "Was ist Express?" und geben Ihnen einen Überblick darüber, was das Express-Web-Framework besonders macht. Wir skizzieren die Hauptmerkmale und zeigen Ihnen einige der Hauptbausteine einer Express-Anwendung (obwohl Sie zu diesem Zeitpunkt noch keine Entwicklungsumgebung haben, in der Sie es testen können).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein allgemeines Verständnis von <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps">Server-seitiger Website-Programmierung</a> und insbesondere der Mechanik von <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview">Client-Server-Interaktionen auf Websites</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Sich mit Express vertraut machen, verstehen, wie es in Node integriert ist, welche Funktionalität es bietet und die wichtigsten Bausteine einer Express-Anwendung kennenlernen.
      </td>
    </tr>
  </tbody>
</table>

## Einführung in Node

[Node](https://nodejs.org/) (oder formeller _Node.js_) ist eine Open-Source und plattformübergreifende Laufzeitumgebung, die es Entwicklern ermöglicht, alle Arten von Server-seitigen Tools und Anwendungen in {{Glossary("JavaScript", "JavaScript")}} zu erstellen. Die Laufzeitumgebung ist für die Verwendung außerhalb eines Browser-Kontexts gedacht (d.h. läuft direkt auf einem Computer oder Server-Betriebssystem). Daher werden browser-spezifische JavaScript-APIs weggelassen und Unterstützung für traditionellere Betriebssystem-APIs wie HTTP und Dateisystembibliotheken hinzugefügt.

Aus der Perspektive der Webserver-Entwicklung hat Node eine Reihe von Vorteilen:

- Hervorragende Leistung! Node wurde entwickelt, um den Durchsatz und die Skalierbarkeit in Webanwendungen zu optimieren und bietet eine gute Lösung für viele gängige Webentwicklungsprobleme (z.B. Echtzeit-Webanwendungen).
- Der Code wird in "ganz normalem JavaScript" geschrieben, was bedeutet, dass weniger Zeit mit dem Umgang von "Kontextwechseln" zwischen Sprachen verbracht wird, wenn Sie sowohl Client-seitigen als auch Server-seitigen Code schreiben.
- JavaScript ist eine relativ neue Programmiersprache und profitiert von Verbesserungen im Sprachdesign im Vergleich zu anderen traditionellen Webserver-Sprachen (z.B. Python, PHP, etc.) Viele andere neue und populäre Sprachen compilieren/konvertieren in JavaScript, so dass Sie auch TypeScript, CoffeeScript, ClojureScript, Scala, LiveScript, etc. verwenden können.
- Der Node-Paketmanager (npm) bietet Zugriff auf Hunderttausende von wiederverwendbaren Paketen. Er verfügt über eine erstklassige Abhängigkeitsauflösung und kann auch zur Automatisierung der meisten Build-Toolchains verwendet werden.
- Node.js ist portabel. Es ist verfügbar auf Microsoft Windows, macOS, Linux, Solaris, FreeBSD, OpenBSD, WebOS und NonStop OS. Darüber hinaus wird es von vielen Webhosting-Anbietern gut unterstützt, die oft spezifische Infrastrukturen und Dokumentationen für das Hosting von Node-Websites bereitstellen.
- Es hat ein sehr aktives Drittanbieter-Ökosystem und eine Entwickler-Community, mit vielen Leuten, die bereit sind zu helfen.

Sie können Node.js verwenden, um einen einfachen Webserver mit dem Node HTTP-Paket zu erstellen.

### Hello Node.js

Das folgende Beispiel erstellt einen Webserver, der auf jede Art von HTTP-Anfrage auf der URL `http://127.0.0.1:8000/` hört — wenn eine Anfrage empfangen wird, antwortet das Skript mit dem String: "Hello World". Wenn Sie Node bereits installiert haben, können Sie die folgenden Schritte ausführen, um das Beispiel auszuprobieren:

1. Öffnen Sie das Terminal (auf Windows öffnen Sie das Befehlszeilen-Dienstprogramm)
2. Erstellen Sie den Ordner, in dem Sie das Programm speichern möchten, zum Beispiel `test-node` und betreten Sie ihn, indem Sie den folgenden Befehl in Ihr Terminal eingeben:

   ```bash
   cd test-node
   ```

3. Verwenden Sie Ihren bevorzugten Texteditor, um eine Datei namens `hello.js` zu erstellen und den folgenden Code dort einzufügen:

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
> Wenn Sie etwas Node.js-Code ausprobieren möchten, ohne irgendeine lokale Einrichtung vornehmen zu müssen, bietet Scrimba's [Aside: The HTTP module](https://scrimba.com/learn-nodejs-c00ho9qqh6/~07du?via=mdn) <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> einen interaktiven Durchgang zur Einrichtung eines einfachen Servers mit dem Node HTTP-Paket.

## Web-Frameworks

Andere gängige Webentwicklungstasks werden von Node selbst nicht direkt unterstützt. Wenn Sie eine spezifische Verarbeitung für verschiedene HTTP-Verben (z.B. `GET`, `POST`, `DELETE`, etc.) hinzufügen, Anfragen an verschiedenen URL-Pfaden ("Routen") separat bearbeiten, statische Dateien bereitstellen oder Vorlagen verwenden möchten, um die Antwort dynamisch zu erstellen, wird Node alleine nicht viel nützen. Sie müssen entweder den Code selbst schreiben oder können das Rad nicht neu erfinden und ein Web-Framework verwenden!

## Einführung in Express

[Express](https://expressjs.com/) ist das beliebteste Node.js-Web-Framework und die zugrunde liegende Bibliothek für eine Reihe anderer populärer Node.js-Frameworks. Es bietet Mechanismen um:

- Handler für Anfragen mit verschiedenen HTTP-Verben an verschiedenen URL-Pfaden (Routen) zu schreiben.
- Mit "View"-Rendering-Engines zu integrieren, um Antworten durch Einfügen von Daten in Vorlagen zu generieren.
- Allgemeine Webanwendungseinstellungen wie den zu verwendenden Anschluss für Verbindungen und den Ort der Vorlagen, die zum Rendern der Antwort verwendet werden, festzulegen.
- Zusätzliche Anfragenverarbeitungs-"Middleware" an jedem Punkt innerhalb der Anfragenbearbeitungspipeline hinzuzufügen.

Während _Express_ selbst ziemlich minimalistisch ist, haben Entwickler kompatible Middleware-Pakete erstellt, um fast jedes Problem der Webentwicklung zu adressieren. Es gibt Bibliotheken, um mit Cookies, Sitzungen, Benutzeranmeldungen, URL-Parametern, `POST`-Daten, Sicherheitsheadern und _vielen_ mehr zu arbeiten. Sie können eine Liste von Middleware-Paketen, die vom Express-Team gepflegt werden, bei [Express Middleware](https://expressjs.com/en/resources/middleware/) finden (zusammen mit einer Liste einiger populärer 3rd-Party-Pakete).

> [!NOTE]
> Diese Flexibilität ist ein zweischneidiges Schwert. Es gibt Middleware-Pakete, um fast jedes Problem oder jede Anforderung zu adressieren, aber es kann manchmal eine Herausforderung sein, die richtigen Pakete zu finden. Es gibt auch keinen "richtigen Weg", eine Anwendung zu strukturieren, und viele Beispiele, die Sie im Internet finden, sind nicht optimal oder zeigen nur einen kleinen Teil dessen, was Sie tun müssen, um eine Webanwendung zu entwickeln.

## Woher kommen Node und Express?

Node wurde erstmals 2009 veröffentlicht, zunächst nur für Linux. Der npm Paketmanager wurde 2010 veröffentlicht, und native Windows-Unterstützung wurde 2012 hinzugefügt. Tauchen Sie in [Wikipedia](https://en.wikipedia.org/wiki/Node.js#History) ein, wenn Sie mehr erfahren möchten.

Express wurde erstmals im November 2010 veröffentlicht und befindet sich derzeit in der Hauptversion 5 der API. Sie können die [Changelog](https://expressjs.com/en/changelog/#5.x) für Informationen zu Änderungen in der aktuellen Version und [GitHub](https://github.com/expressjs/express/blob/master/History.md) für detailliertere historische Release-Notizen einsehen.

## Wie populär sind Node und Express?

Die Beliebtheit eines Web-Frameworks ist wichtig, weil sie ein Indikator dafür ist, ob es weiterhin gewartet wird und welche Ressourcen in Bezug auf Dokumentation, Zusatzbibliotheken und technischen Support wahrscheinlich verfügbar sind.

Es gibt keine sofort verfügbare und definitive Maßnahme für die Beliebtheit von serverseitigen Frameworks (obwohl Sie die Beliebtheit durch Mechanismen wie das Zählen der Anzahl von GitHub-Projekten und Stack Overflow-Fragen für jede Plattform schätzen können). Eine bessere Frage ist, ob Node und Express "beliebt genug" sind, um die Probleme unpopulärer Plattformen zu vermeiden. Entwickeln sie sich weiter? Können Sie Hilfe erhalten, wenn Sie sie benötigen? Gibt es eine Chance, dass Sie bezahlte Arbeit erhalten, wenn Sie Express lernen?

Basierend auf der Anzahl der namhaften Unternehmen, die Express verwenden, der Anzahl der Leute, die zum Code beitragen, und der Anzahl der Leute, die sowohl kostenlose als auch kostenpflichtige Unterstützung bieten, ist _Express_ ein beliebtes Framework!

## Ist Express meinungsstark?

Web-Frameworks beziehen sich oft auf sich selbst als "meinungsstark" oder "unmeinungsstark".

Meinungsstarke Frameworks sind solche, die eine Meinung darüber haben, wie die "richtige Art" ist, eine bestimmte Aufgabe zu erledigen. Sie unterstützen oft die schnelle Entwicklung _in einem bestimmten Bereich_ (Lösen von Problemen eines bestimmten Typs), weil die richtige Art, etwas zu tun, normalerweise gut verstanden und gut dokumentiert ist. Allerdings können sie weniger flexibel beim Lösen von Problemen außerhalb ihres Hauptbereichs sein und bieten in der Regel weniger Auswahlmöglichkeiten für die zu verwendenden Komponenten und Ansätze.

Unmeinungsstarke Frameworks haben hingegen weit weniger Einschränkungen hinsichtlich der besten Art und Weise, Komponenten zu verbinden, um ein Ziel zu erreichen, oder welche Komponenten verwendet werden sollten. Sie machen es Entwicklern leichter, die am besten geeigneten Tools zu verwenden, um eine bestimmte Aufgabe zu erledigen, wenn auch auf Kosten, dass Sie diese Komponenten selbst finden müssen.

Express ist unmeinungsstark. Sie können fast jede kompatible Middleware, die Sie möchten, in die Anfragenbearbeitungskette einfügen, in fast jeder Reihenfolge, die Sie möchten. Sie können die App in einer Datei oder mehreren Dateien und mit jeder Verzeichnisstruktur strukturieren. Manchmal werden Sie vielleicht das Gefühl haben, dass Sie zu viele Auswahlmöglichkeiten haben!

## Wie sieht der Code von Express aus?

In einer traditionellen datengesteuerten Website wartet eine Webanwendung auf HTTP-Anfragen vom Webbrowser (oder einem anderen Client). Wenn eine Anfrage eingegangen ist, untersucht die Anwendung, welche Aktion basierend auf dem URL-Muster und möglicherweise assoziierten Informationen im `POST`- oder `GET`-Daten erforderlich ist. Abhängig von den Anforderungen kann dann Information aus einer Datenbank gelesen oder geschrieben werden oder andere erforderliche Aufgaben zur Erfüllung der Anfrage durchgeführt werden. Die Anwendung gibt dann eine Antwort an den Webbrowser zurück, wobei oft eine HTML-Seite dynamisch für den Browser erstellt wird, indem die abgerufenen Daten in Platzhalter in einer HTML-Vorlage eingefügt werden.

Express bietet Methoden, um zu spezifizieren, welche Funktion für ein bestimmtes HTTP-Verb (`GET`, `POST`, `PUT`, etc.) und URL-Muster ("Route") aufgerufen wird, und Methoden, um zu spezifizieren, welche Vorlage ("View")-Engine verwendet wird, wo sich Vorlagendateien befinden und welche Vorlage verwendet werden soll, um eine Antwort zu rendern. Sie können Express-Middleware verwenden, um Unterstützung für Cookies, Sitzungen und Benutzer, das Abrufen von `POST`/`GET`-Parametern, etc. hinzuzufügen. Sie können jeden von Node unterstützten Datenbankmechanismus verwenden (Express definiert kein datenbankspezifisches Verhalten).

Die folgenden Abschnitte erklären einige der gängigen Dinge, die Sie beim Arbeiten mit _Express_ und _Node_-Code sehen werden.

### Helloworld Express

Betrachten wir zunächst das Standard-Express-Beispiel [Hello World](https://expressjs.com/en/starter/hello-world/) (wir diskutieren jeden Teil davon unten und in den folgenden Abschnitten).

> [!NOTE]
> Wenn Sie Node und Express bereits installiert haben (oder wenn Sie sie installieren, wie im [nächsten Artikel](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) gezeigt), können Sie diesen Code in einer Textdatei namens **app.js** speichern und ihn im Bash-Befehlsfenster ausführen, indem Sie folgendes eingeben:
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

Die ersten beiden Zeilen `require()` (importieren) das Express-Modul und erstellen eine [Express-Anwendung](https://expressjs.com/en/5x/api/#app). Dieses Objekt, das traditionell `app` genannt wird, verfügt über Methoden zum Routing von HTTP-Anfragen, zur Konfiguration von Middleware, zum Rendern von HTML-Views, zur Registrierung einer Template-Engine und zur Modifikation von [Application Settings](https://expressjs.com/en/5x/api/#app.settings.table), die das Verhalten der Anwendung steuern (z.B., der Umgebungmodus, ob Routendefinitionen Groß- und Kleinschreibung beachten, etc.)

Der mittlere Teil des Codes (die drei Zeilen beginnend mit `app.get`) zeigt eine _Routendefinition_. Die Methode `app.get()` legt eine Callback-Funktion fest, die immer dann aufgerufen wird, wenn es eine HTTP-`GET`-Anfrage mit einem Pfad (`'/'`) relativ zum Site-Root gibt. Die Callback-Funktion nimmt ein Anfragen- und ein Antwortobjekt als Argumente und ruft [`send()`](https://expressjs.com/en/5x/api/#res.send) auf der Antwort auf, um den String "Hello World!" zurückzugeben.

Der letzte Block startet den Server an einem angegebenen Port ('3000') und gibt ein Protokollkommentar in der Konsole aus. Mit laufendem Server könnten Sie `localhost:3000` in Ihrem Browser aufrufen, um die Beispielantwort zu sehen.

### Importieren und Erstellen von Modulen

Ein Modul ist eine JavaScript-Bibliothek/Datei, die Sie mit der `require()`-Funktion von Node in anderen Code importieren können. _Express_ selbst ist ein Modul, ebenso wie die Middleware- und Datenbankbibliotheken, die wir in unseren _Express_-Anwendungen verwenden.

Der Code unten zeigt, wie wir ein Modul namentlich mit dem _Express_-Framework als Beispiel importieren. Zunächst rufen wir die `require()`-Funktion auf, geben den Namen des Moduls als String (`'express'`) an und rufen das zurückgegebene Objekt auf, um eine [Express-Anwendung](https://expressjs.com/en/5x/api/#app) zu erstellen. Wir können dann auf die Eigenschaften und Funktionen des Anwendungsobjekts zugreifen.

```js
const express = require("express");

const app = express();
```

Sie können auch Ihre eigenen Module erstellen, die auf die gleiche Weise importiert werden können.

> [!NOTE]
> Sie werden _eigene_ Module erstellen wollen, weil dies Ihnen ermöglicht, Ihren Code in handhabbare Teile aufzuteilen — eine monolithische Anwendung in einer einzigen Datei ist schwer zu verstehen und zu warten. Die Verwendung von Modulen hilft Ihnen auch, Ihre Namensräume zu verwalten, da nur die Variablen, die Sie explizit exportieren, importiert werden, wenn Sie ein Modul verwenden.

Um Objekte außerhalb eines Moduls verfügbar zu machen, müssen Sie sie einfach als zusätzliche Eigenschaften auf dem `exports`-Objekt ausgeben. Zum Beispiel exportiert das **square.js**-Modul unten `area()`- und `perimeter()`-Methoden:

```js
exports.area = function (width) {
  return width * width;
};
exports.perimeter = function (width) {
  return 4 * width;
};
```

Wir können dieses Modul mit `require()` importieren und dann die exportierte(n) Methode(n) aufrufen:

```js
const square = require("./square"); // Here we require() the name of the file without the (optional) .js file extension

console.log(`The area of a square with a width of 4 is ${square.area(4)}`);
```

> [!NOTE]
> Sie können auch einen absoluten Pfad zum Modul angeben (oder einen Namen, wie wir es ursprünglich gemacht haben).

Wenn Sie ein komplettes Objekt in einer Zuweisung statt durch einzelne Eigenschaften exportieren möchten, weisen Sie es `module.exports` zu, wie unten gezeigt (Sie können dies auch tun, um die Wurzel des Exports objekts zu einem Konstruktor oder einer anderen Funktion zu machen):

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
> Sie können `exports` als eine [Abkürzung](https://nodejs.org/api/modules.html#modules_exports_shortcut) zu `module.exports` innerhalb eines bestimmten Moduls betrachten. Tatsächlich ist `exports` nur eine Variable, die auf den Wert von `module.exports` gesetzt wird, bevor das Modul ausgewertet wird. Dieser Wert ist ein Verweis auf ein Objekt (in diesem Fall ein leeres Objekt). Das bedeutet, dass `exports` einen Verweis auf dasselbe Objekt hält, auf das `module.exports` verweist. Es bedeutet auch, dass durch die Zuweisung eines anderen Werts zu `exports` es nicht mehr an `module.exports` gebunden ist.

Für weit mehr Informationen über Module siehe [Modules](https://nodejs.org/api/modules.html#modules_modules) (Node API-Dokumentation).

### Verwendung von asynchronen APIs

JavaScript-Code verwendet häufig asynchrone anstelle von synchronen APIs für Operationen, die einige Zeit in Anspruch nehmen können. Eine synchrone API ist eine, bei der jede Operation abgeschlossen sein muss, bevor die nächste Operation gestartet werden kann. Zum Beispiel sind die folgenden Protokollfunktionen synchron und drucken den Text in der Reihenfolge (First, Second) in die Konsole aus.

```js
console.log("First");
console.log("Second");
```

Im Gegensatz dazu ist eine asynchrone API eine, bei der die API eine Operation startet und sofort zurückkehrt (bevor die Operation abgeschlossen ist). Sobald die Operation abgeschlossen ist, verwendet die API einen Mechanismus, um zusätzliche Operationen durchzuführen. Beispielsweise wird der untenstehende Code "Second, First" ausdrucken, da, obwohl die `setTimeout()`-Methode zuerst aufgerufen wird, und sofort zurückkehrt, die Operation mehrere Sekunden nicht abgeschlossen ist.

```js
setTimeout(() => {
  console.log("First");
}, 3000);
console.log("Second");
```

Die Verwendung nicht blockierender asynchroner APIs ist in Node noch wichtiger als im Browser, da _Node_-Anwendungen häufig als Single-Threaded, ereignisgesteuerte Ausführungsumgebung geschrieben werden. "Single threaded" bedeutet, dass alle Anfragen an den Server im gleichen Thread ausgeführt werden (statt in separate Prozesse gespawned zu werden). Dieses Modell ist äußerst effizient in Bezug auf Geschwindigkeit und Serverressourcen. Es bedeutet jedoch auch, dass, wenn eine Ihrer Funktionen synchrone Methoden aufruft, die lange Zeit in Anspruch nehmen, sie nicht nur die aktuelle Anfrage, sondern jede andere Anfrage blockieren, die von Ihrer Webanwendung bearbeitet wird.

Es gibt mehrere Möglichkeiten, wie eine asynchrone API Ihre Anwendung darüber benachrichtigt, dass sie abgeschlossen ist. Historisch gesehen wurde der Ansatz verwendet, eine Callback-Funktion beim Aufrufen der asynchronen API zu registrieren, die dann aufgerufen wird, wenn die Operation abgeschlossen ist (dies ist der oben verwendete Ansatz).

> [!NOTE]
> Die Verwendung von Callbacks kann recht "unordentlich" sein, wenn Sie eine Sequenz von voneinander abhängigen asynchronen Operationen haben, die in der richtigen Reihenfolge ausgeführt werden müssen, da dies zu mehreren Ebenen von verschachtelten Callbacks führt. Dieses Problem ist allgemein als "Callback-Hölle" bekannt.

> [!NOTE]
> Eine übliche Konvention für Node und Express ist die Verwendung von Fehler-First-Callbacks. In dieser Konvention ist der erste Wert in Ihren _Callback-Funktionen_ ein Fehlerwert, während nachfolgende Argumente Erfolgsdaten enthalten. Es gibt eine gute Erklärung, warum dieser Ansatz nützlich ist, in diesem Blog: [The Node.js Way - Understanding Error-First Callbacks](https://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/) (fredkschott.com).

Moderner JavaScript-Code verwendet häufiger [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) und [async/await](/de/docs/Web/JavaScript/Reference/Statements/async_function), um den asynchronen Programmablauf zu steuern. Sie sollten nach Möglichkeit Promises verwenden. Wenn Sie mit Code arbeiten, der Callbacks verwendet, können Sie die Node.js-Funktion [`utils.promisify`](https://nodejs.org/api/util.html#utilpromisifyoriginal) verwenden, um die Callback → Promise-Umwandlung ergonomisch zu handhaben.

### Erstellen von Routen-Handlern

In unserem _Hello World_-Express-Beispiel (siehe oben) haben wir eine (Callback-)Routen-Handler-Funktion für HTTP-`GET`-Anfragen an das Site-Root (`'/'`) definiert.

```js
app.get("/", (req, res) => {
  res.send("Hello World!");
});
```

Die Callback-Funktion nimmt ein Anfragen- und ein Antwortobjekt als Argument. In diesem Fall ruft die Methode [`send()`](https://expressjs.com/en/5x/api/#res.send) auf der Antwort auf, um den String "Hello World!" zurückzugeben. Es gibt eine [Anzahl anderer Antwortmethoden](https://expressjs.com/en/guide/routing/#response-methods), um den Anfragen-/Antwortzyklus zu beenden, zum Beispiel könnten Sie [`res.json()`](https://expressjs.com/en/5x/api/#res.json) aufrufen, um eine JSON-Antwort zu senden, oder [`res.sendFile()`](https://expressjs.com/en/5x/api/#res.sendFile), um eine Datei zu senden.

> [!NOTE]
> Sie können beliebige Argumentnamen in den Callback-Funktionen verwenden; wenn der Callback aufgerufen wird, ist das erste Argument immer die Anfrage und das zweite immer die Antwort. Es macht Sinn, sie so zu benennen, dass Sie das Objekt, mit dem Sie arbeiten, im Körper des Callbacks identifizieren können.

Das _Express-Application_-Objekt bietet auch Methoden zur Definition von Routenhandhabern für alle anderen HTTP-Verben, die meist auf die gleiche Weise verwendet werden:

`checkout()`, `copy()`, **`delete()`**, **`get()`**, `head()`, `lock()`, `merge()`, `mkactivity()`, `mkcol()`, `move()`, `m-search()`, `notify()`, `options()`, `patch()`, **`post()`**, `purge()`, **`put()`**, `report()`, `search()`, `subscribe()`, `trace()`, `unlock()`, `unsubscribe()`.

Es gibt eine spezielle Routing-Methode, `app.all()`, die in Antwort auf jede HTTP-Methode aufgerufen wird. Diese wird verwendet, um Middleware-Funktionen bei einem bestimmten Pfad für alle Anfragenmethoden zu laden. Das folgende Beispiel (aus der Express-Dokumentation) zeigt einen Handler, der für Anfragen an `/secret` ausgeführt wird, unabhängig davon, welches HTTP-Verb verwendet wird (vorausgesetzt es wird vom [http-Modul](https://nodejs.org/docs/latest/api/http.html#httpmethods) unterstützt).

```js
app.all("/secret", (req, res, next) => {
  console.log("Accessing the secret section…");
  next(); // pass control to the next handler
});
```

Routen ermöglichen es Ihnen, bestimmte Muster von Zeichen in einer URL zu erkennen und einige Werte aus der URL zu extrahieren und als Parameter an den Routen-Handler zu übergeben (als Attribute des Anfragenobjekts, das als Parameter übergeben wird).

Oft ist es nützlich, Routen-Handler für einen bestimmten Teil einer Seite zusammenzufassen und sie mit einem gemeinsamen Routen-Präfix zuzugreifen (z.B. könnte eine Site mit einem Wiki alle wiki-bezogenen Routen in einer Datei haben und mit einem Routen-Präfix von _/wiki/_ darauf zugreifen). In _Express_ erreicht man dies mit dem [`express.Router`](https://expressjs.com/en/guide/routing/#express-router)-Objekt. Zum Beispiel können wir unsere wiki-Routen in einem Modul namens **wiki.js** erstellen und dann das `Router`-Objekt exportieren, wie unten gezeigt:

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
> Das Hinzufügen von Routen zum `Router`-Objekt ist genauso wie das Hinzufügen von Routen zum `app`-Objekt (wie zuvor gezeigt).

Um den Router in unserer Haupt-App-Datei zu verwenden, würden wir das Routenmodul (**wiki.js**) mit `require()` einbinden und dann `use()` auf der _Express_-Anwendung aufrufen, um den Router zur Middleware-Bearbeitungskette hinzuzufügen. Die beiden Routen werden dann zugänglich von `/wiki/` und `/wiki/about/`.

```js
const wiki = require("./wiki.js");

// …
app.use("/wiki", wiki);
```

Später zeigen wir Ihnen viel mehr über das Arbeiten mit Routen, insbesondere über den _Router_, in dem auf die Verlinkung folgenden Abschnitt [Routen und Controller](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes).

### Verwendung von Middleware

Middleware wird ausgiebig in Express-Apps verwendet, für Aufgaben wie das Bereitstellen statischer Dateien, Fehlerbehandlung und Komprimierung von HTTP-Antworten. Während Routenfunktionen den HTTP-Anfragen-Antwort-Zyklus durch Rückgabe einer Antwort an den HTTP-Client beenden, führen Middleware-Funktionen _typischerweise_ eine Operation an der Anfrage oder Antwort aus und rufen dann die nächste Funktion in der "Stapel" auf, die weitere Middleware oder ein Routenhandler sein könnte. Die Reihenfolge, in der Middleware aufgerufen wird, liegt beim App-Entwickler.

> [!NOTE]
> Middleware kann jede Operation ausführen, jeden Code ausführen, Änderungen an den Anfragen- und Antwortobjekten vornehmen, und sie kann _auch den Anfragen-Antwort-Zyklus beenden_. Wenn sie den Zyklus nicht beendet, muss sie `next()` aufrufen, um die Kontrolle an die nächste Middleware-Funktion zu übergeben (oder die Anfrage bleibt hängen).

Die meisten Apps verwenden _Drittanbieter_-Middleware, um häufige Webentwicklungstasks wie das Arbeiten mit Cookies, Sitzungen, Benutzeranmeldung, Zugriff auf Anfragen `POST` und JSON-Daten, Logging usw. zu vereinfachen. Sie finden eine [Liste von Middleware-Paketen, die vom Express-Team gewartet werden](https://expressjs.com/en/resources/middleware/) (die auch andere beliebte Drittanbieter-Pakete enthält). Andere Express-Pakete sind im npm-Paketmanager verfügbar.

Um Drittanbieter-Middleware zu nutzen, müssen Sie sie zuerst mit npm in Ihre App installieren. Zum Beispiel, um das [morgan](https://expressjs.com/en/resources/middleware/morgan/) HTTP-Anfragen-Logger-Middleware zu installieren, würden Sie dies tun:

```bash
npm install morgan
```

Sie könnten dann `use()` auf dem _Express-Anwendungsobjekt_ aufrufen, um die Middleware zur Stapel hinzuzufügen:

```js
const express = require("express");
const logger = require("morgan");

const app = express();
app.use(logger("dev"));
// …
```

> [!NOTE]
> Middleware- und Routing-Funktionen werden in der Reihenfolge aufgerufen, in der sie deklariert werden. Bei einigen Middleware ist die Reihenfolge wichtig (wenn z.B. Sitzungsmiddleware von Cookiemiddleware abhängt, muss der Cookie-Handler zuerst hinzugefügt werden). Es ist fast immer der Fall, dass Middleware vor dem Setzen von Routen aufgerufen wird, oder Ihre Routen-Handler haben keinen Zugang zur Funktionalität, die durch Ihre Middleware hinzugefügt wird.

Sie können Ihre eigenen Middleware-Funktionen schreiben, und Sie werden wahrscheinlich dazu gezwungen sein (wenn auch nur, um Fehlerbehandlungscode zu erstellen). Der _einzige_ Unterschied zwischen einer Middleware-Funktion und einem Routenhandler-Callback besteht darin, dass Middleware-Funktionen ein drittes Argument `next` haben, das Middleware-Funktionen aufgerufen werden müssen, wenn sie nicht dasjenige, das den Anfragenzyklus vervollständigt (wenn die Middleware-Funktion aufgerufen wird, enthält dies die _nächste_ Funktion, die aufgerufen werden muss).

Sie können einer Middleware-Funktion zur Verarbeitungskette für _alle Antworten_ mit `app.use()` hinzufügen oder für ein spezifisches HTTP-Verb mit der dazugehörigen Methode: `app.get()`, `app.post()`, etc. Routen werden in beiden Fällen auf die gleiche Weise spezifiziert, obwohl die Route optional ist, wenn `app.use()` aufgerufen wird.

Das Beispiel unten zeigt, wie Sie die Middleware-Funktion mit beiden Ansätzen hinzufügen können, und mit/ohne einer Route.

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
> Oben deklarieren wir die Middleware-Funktion separat und setzen sie dann als Callback. In unserer vorherigen Routenhandler-Funktion haben wir die Callback-Funktion deklariert, als sie verwendet wurde. In JavaScript ist jeder Ansatz gültig.

Die Express-Dokumentation hat eine Menge ausgezeichneter Dokumentationen über [die Verwendung](https://expressjs.com/en/guide/using-middleware/) und [das Schreiben](https://expressjs.com/en/guide/writing-middleware/) von Express-Middleware.

### Bereitstellen statischer Dateien

Sie können die [express.static](https://expressjs.com/en/5x/api/#express.static) Middleware verwenden, um statische Dateien bereitzustellen, einschließlich Ihrer Bilder, CSS und JavaScript (`static()` ist die einzige Middleware-Funktion, die tatsächlich **Teil** von _Express_ ist). Zum Beispiel würden Sie die Zeile unten verwenden, um Bilder, CSS-Dateien und JavaScript-Dateien aus einem Verzeichnis namens '**public'** auf derselben Ebene, auf der Sie Node aufrufen:

```js
app.use(express.static("public"));
```

Alle Dateien im öffentlichen Verzeichnis werden bereitgestellt, indem ihr Dateiname (_relativ_ zum Basis-"Public"-Verzeichnis) zur Basis-URL hinzugefügt wird. Zum Beispiel:

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

Sie können auch ein virtuelles Präfix für Ihre statischen URLs erstellen, anstatt die Dateien zur Basis-URL hinzuzufügen. Zum Beispiel geben wir hier eine [Mount-Pfad](https://expressjs.com/en/5x/api/#app.use) an, sodass die Dateien mit dem Präfix "/media" geladen werden:

```js
app.use("/media", express.static("public"));
```

Jetzt können Sie die Dateien, die sich im `public`-Verzeichnis befinden, vom `/media`-Pfad-Präfix laden.

```plain
http://localhost:3000/media/images/dog.jpg
http://localhost:3000/media/video/cat.mp4
http://localhost:3000/media/cry.mp3
```

> [!NOTE]
> Siehe auch [Serving static files in Express](https://expressjs.com/en/starter/static-files/).

### Fehlerbehandlung

Fehler werden durch eine oder mehrere spezielle Middleware-Funktionen behandelt, die vier Argumente anstelle der üblichen drei haben: `(err, req, res, next)`. Zum Beispiel:

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

Diese können jeden gewünschten Inhalt zurückgeben, müssen jedoch nach allen anderen `app.use()` und Routenaufrufen aufgerufen werden, damit sie die letzte Middleware im Anfragenbearbeitungsprozess sind!

Express verfügt über einen eingebauten Fehler-Handler, der alle verbleibenden Fehler, die in der App auftreten können, behandelt. Diese Standard-Fehlerbehandlungs-Middleware-Funktion wird am Ende des Middleware-Funktion-Stacks hinzugefügt. Wenn Sie einen Fehler an `next()` weiterleiten und ihn in keinem Fehler-Handler behandeln, wird er vom eingebauten Fehler-Handler behandelt; der Fehler wird mit dem Stapelverfolgung an den Client geschrieben.

> [!NOTE]
> Die Stapelverfolgung ist nicht in der Produktionsumgebung enthalten. Um es im Produktionsmodus auszuführen, müssen Sie die Umgebungsvariable `NODE_ENV` auf `"production"` setzen.

> [!NOTE]
> HTTP404 und andere "Fehler"-Statuscodes werden nicht als Fehler behandelt. Wenn Sie diese behandeln möchten, können Sie eine Middleware-Funktion hinzufügen. Weitere Informationen finden Sie im [FAQ](https://expressjs.com/en/starter/faq/#how-do-i-handle-404-responses).

Für weitere Informationen siehe [Fehlerbehandlung](https://expressjs.com/en/guide/error-handling/) (Express-Dokumentation).

### Verwendung von Datenbanken

_Express_-Apps können jeden Datenbankmechanismus verwenden, der von _Node_ unterstützt wird (Express selbst definiert kein spezifisches zusätzliches Verhalten/Anforderungen für die Datenbankverwaltung). Es gibt viele Optionen, einschließlich PostgreSQL, MySQL, Redis, SQLite, MongoDB, etc.

Um diese zu verwenden, müssen Sie zunächst den Datenbanktreiber mit npm installieren. Zum Beispiel würden Sie den populären NoSQL-MongoDB-Treiber mit dem Befehl installieren:

```bash
npm install mongodb
```

Die Datenbank selbst kann lokal oder auf einem Cloud-Server installiert werden. In Ihrem Express-Code importieren Sie den Treiber, verbinden sich mit der Datenbank und führen dann Operationen wie Erstellen, Lesen, Aktualisieren und Löschen (CRUD) durch. Das Beispiel unten zeigt, wie Sie "mammal"-Records mit MongoDB finden können:

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

Ein weiterer beliebter Ansatz ist der Zugriff auf Ihre Datenbank indirekt über einen Object Relational Mapper ("ORM"). In diesem Ansatz definieren Sie Ihre Daten als "Objekte" oder "Modelle" und der ORM mappt diese auf das zugrunde liegende Datenbankformat. Dieser Ansatz hat den Vorteil, dass Sie als Entwickler weiterhin in Begriffen von JavaScript-Objekten denken können, anstatt in Datenbanksemantik, und dass es einen offensichtlichen Ort gibt, um Validierung und Prüfung von eingehenden Daten durchzuführen. Wir werden später in einem anderen Artikel mehr über Datenbanken sprechen.

Für weitere Informationen siehe [Datenbankintegration](https://expressjs.com/en/guide/database-integration/) (Express-Dokumentation).

### Daten rendern (Views)

Template Engines (auch als "View-Engines" in _Express_ bezeichnet) erlauben es Ihnen, die _Struktur_ eines Ausgabedokuments in einer Vorlage zu spezifizieren, mit Platzhaltern für Daten, die gefüllt werden, wenn eine Seite generiert wird. Vorlagen werden oft verwendet, um HTML zu erstellen, können aber auch andere Arten von Dokumenten erzeugen.

Express unterstützt eine Reihe von Vorlage-Engines, insbesondere Pug (früher „Jade“), Mustache und EJS. Jede hat ihre eigenen Stärken für die Adressierung bestimmter Anwendungsfälle (relative Vergleiche können leicht durch Internetsuche gefunden werden). Der Express-Anwendungsgenerator verwendet standardmäßig Jade, unterstützt jedoch auch mehrere andere.

In Ihrem Anwendungseinstellungscode legen Sie die zu verwendende Template-Engine und den Ort, an dem Express nach Vorlagen suchen soll, mit den Einstellungen 'views' und 'view engine' fest, wie unten gezeigt (Sie müssen die Bibliothek, die Ihre Templatelogik enthält, auch installieren!)

```js
const express = require("express");
const path = require("path");

const app = express();

// Set directory to contain the templates ('views')
app.set("views", path.join(__dirname, "views"));

// Set view engine to use, in this case 'some_template_engine_name'
app.set("view engine", "some_template_engine_name");
```

Das Erscheinungsbild der Vorlage hängt von der verwendeten Engine ab. Angenommen, Sie haben eine Vorlagendatei namens "index.\<template_extension>", die Platzhalter für Datenvariablen mit den Namen 'title' und "message" enthält, würden Sie [`Response.render()`](https://expressjs.com/en/5x/api/#res.render) in einer Routenhandler-Funktion aufrufen, um die HTML-Antwort zu erstellen und zu senden:

```js
app.get("/", (req, res) => {
  res.render("index", { title: "About dogs", message: "Dogs rock!" });
});
```

Für weitere Informationen siehe [Verwendung von Template Engines mit Express](https://expressjs.com/en/guide/using-template-engines/) (Express-Dokumentation).

### Dateistruktur

Express macht keine Annahmen in Bezug auf die Struktur oder welche Komponenten Sie verwenden. Routen, Views, statische Dateien und andere anwendungsspezifische Logik können in beliebig vielen Dateien mit beliebiger Verzeichnisstruktur untergebracht werden. Während es durchaus möglich ist, die gesamte _Express_-Anwendung in einer Datei zu haben, macht es in der Regel Sinn, Ihre Anwendung in Dateien basierend auf ihrer Funktion (z.B. Kontoverwaltung, Blogs, Diskussionsforen) und architektonischen Problemdomäne (z.B. Modell, Ansicht oder Controller, wenn Sie zufällig eine {{Glossary("MVC", "MVC-Architektur")}} verwenden) zu unterteilen.

In einem späteren Thema werden wir den _Express Application Generator_ verwenden, der ein modulares App-Gerüst erstellt, das wir einfach erweitern können, um Webanwendungen zu erstellen.

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben den ersten Schritt in Ihrer Express/Node-Reise abgeschlossen! Sie sollten jetzt die Hauptvorteile von Express und Node verstehen und grob wissen, wie die Hauptteile einer Express-App aussehen könnten (Routen, Middleware, Fehlerbehandlung und Template-Code). Sie sollten auch verstehen, dass mit Express als unmeinungsstarkem Framework, die Art und Weise, wie Sie diese Teile zusammenziehen und die Bibliotheken, die Sie verwenden, größtenteils Ihnen überlassen sind!

Natürlich ist Express absichtlich ein sehr leichtgewichtiges Webanwendungsframework, so dass viel von seinem Nutzen und Potenzial von Drittanbieter-Bibliotheken und -Funktionen kommt. Wir werden diese in den folgenden Artikeln genauer betrachten. In unserem nächsten Artikel werden wir uns mit der Einrichtung einer Node-Entwicklungsumgebung befassen, damit Sie anfangen können, etwas Express-Code in Aktion zu sehen.

## Siehe auch

- [Learn Node.js](https://scrimba.com/learn-nodejs-c00ho9qqh6?via=mdn) von Scrimba <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine unterhaltsame, interaktive Einführung in Node.js.
- [Learn Express.js](https://scrimba.com/learn-expressjs-c062las154?via=mdn) von Scrimba <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> baut auf dem vorherigen Link auf und zeigt, wie man mit dem Express-Framework beginnt, um serverseitige Websites zu erstellen.
- [Modules](https://nodejs.org/api/modules.html#modules_modules) (Node API-Dokumentation)
- [Express](https://expressjs.com/) (Startseite)
- [Basisrouting](https://expressjs.com/en/starter/basic-routing/) (Express-Dokumentation)
- [Routen-Leitfaden](https://expressjs.com/en/guide/routing/) (Express-Dokumentation)
- [Verwendung von Template Engines mit Express](https://expressjs.com/en/guide/using-template-engines/) (Express-Dokumentation)
- [Verwendung von Middleware](https://expressjs.com/en/guide/using-middleware/) (Express-Dokumentation)
- [Schreiben von Middleware zur Verwendung in Express-Apps](https://expressjs.com/en/guide/writing-middleware/) (Express-Dokumentation)
- [Datenbankintegration](https://expressjs.com/en/guide/database-integration/) (Express-Dokumentation)
- [Bereitstellen statischer Dateien in Express](https://expressjs.com/en/starter/static-files/) (Express-Dokumentation)
- [Fehlerbehandlung](https://expressjs.com/en/guide/error-handling/) (Express-Dokumentation)

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
