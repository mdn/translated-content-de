---
title: Einführung in Express/Node
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction
l10n:
  sourceCommit: 14acf1aa7885157debdf1b6111f4bd10c064ec60
---

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

In diesem ersten Express-Artikel beantworten wir die Fragen "Was ist Node?" und "Was ist Express?", und geben Ihnen einen Überblick darüber, was das Express-Web-Framework so besonders macht. Wir skizzieren die Hauptmerkmale und zeigen einige der wichtigsten Bausteine einer Express-Anwendung (obwohl Sie zu diesem Zeitpunkt noch keine Entwicklungsumgebung haben, um dies zu testen).

> [!WARNING]
> Das Express-Tutorial ist für Express-Version 4 geschrieben, während die neueste Version Express 5 ist.
> Wir planen, die Dokumentation in der zweiten Hälfte des Jahres 2025 zu aktualisieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein allgemeines Verständnis der <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps">programmierung serverseitiger Webanwendungen</a> und insbesondere der Mechanismen der <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview">Client-Server-Interaktionen auf Websites</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit der Frage, was Express ist, wie es mit Node zusammenpasst, welche Funktionalität es bietet und welche die Hauptbausteine einer Express-Anwendung sind.
      </td>
    </tr>
  </tbody>
</table>

## Einführung in Node

[Node](https://nodejs.org/) (oder formeller _Node.js_) ist eine Open-Source, plattformübergreifende Laufzeitumgebung, die es Entwicklern ermöglicht, alle Arten von serverseitigen Tools und Anwendungen in {{Glossary("JavaScript", "JavaScript")}} zu erstellen. Die Laufzeitumgebung ist für die Verwendung außerhalb eines Browser-Kontextes gedacht (d.h. sie läuft direkt auf einem Computer oder Server-Betriebssystem). Daher lässt die Umgebung browserspezifische JavaScript-APIs weg und fügt Unterstützung für traditionellere OS-APIs wie HTTP- und Dateisystembibliotheken hinzu.

Aus der Perspektive der Webserver-Entwicklung bietet Node eine Reihe von Vorteilen:

- Hervorragende Leistung! Node wurde entwickelt, um den Durchsatz und die Skalierbarkeit in Webanwendungen zu optimieren und ist eine gute Lösung für viele gängige Webentwicklungsprobleme (z.B. Echtzeit-Webanwendungen).
- Der Code wird in "ganz normalem JavaScript" geschrieben, was bedeutet, dass weniger Zeit mit dem Wechsel zwischen verschiedenen Sprachkontexten verbracht wird, wenn Sie sowohl client- als auch serverseitigen Code schreiben.
- JavaScript ist eine relativ neue Programmiersprache und profitiert im Vergleich zu anderen traditionellen Webserver-Sprachen (z.B. Python, PHP, usw.) von Verbesserungen im Sprachdesign. Viele andere neue und beliebte Sprachen werden in JavaScript kompiliert/konvertiert, sodass Sie auch TypeScript, CoffeeScript, ClojureScript, Scala, LiveScript usw. verwenden können.
- Der Node-Paketmanager (npm) bietet Zugriff auf Hunderttausende von wiederverwendbaren Paketen. Er verfügt auch über eine erstklassige Abhängigkeitsauflösung und kann ebenfalls verwendet werden, um die meisten Teile der Build-Toolchain zu automatisieren.
- Node.js ist portabel. Es ist verfügbar auf Microsoft Windows, macOS, Linux, Solaris, FreeBSD, OpenBSD, WebOS und NonStop OS. Zudem wird es von vielen Webhosting-Anbietern gut unterstützt, die häufig spezifische Infrastruktur und Dokumentation für das Hosting von Node-Sites bereitstellen.
- Es gibt ein sehr aktives Ökosystem und eine Entwickler-Community von Drittanbietern, mit vielen Menschen, die bereit sind zu helfen.

Sie können Node.js verwenden, um mit dem Node HTTP-Paket einen einfachen Webserver zu erstellen.

### Hallo Node.js

Das folgende Beispiel erstellt einen Webserver, der auf jegliche Art von HTTP-Anfragen an die URL `http://127.0.0.1:8000/` hört — bei Empfang einer Anfrage antwortet das Skript mit dem String: "Hello World". Wenn Sie Node bereits installiert haben, können Sie diese Schritte befolgen, um das Beispiel auszuprobieren:

1. Öffnen Sie das Terminal (auf Windows das Befehlszeilenprogramm).
2. Erstellen Sie den Ordner, in dem Sie das Programm speichern möchten, z.B. `test-node`, und wechseln Sie dann mithilfe des folgenden Befehls im Terminal in diesen Ordner:

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

4. Speichern Sie die Datei in dem zuvor erstellten Ordner.
5. Gehen Sie zurück zum Terminal und geben Sie den folgenden Befehl ein:

   ```bash
   node hello.js
   ```

Navigieren Sie schließlich in Ihrem Webbrowser zu `http://localhost:8000`; Sie sollten den Text "**Hello World**" in der oberen linken Ecke einer ansonsten leeren Webseite sehen.

> [!NOTE]
> Wenn Sie mit etwas Node.js-Code spielen möchten, ohne eine lokale Einrichtung zu benötigen, bietet Scrimba's [Aside: The HTTP module](https://scrimba.com/learn-nodejs-c00ho9qqh6/~07du?via=mdn) <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> eine interaktive Anleitung zum Einrichten eines grundlegenden Servers mit dem Node HTTP-Paket.

## Web-Frameworks

Andere gängige Webentwicklungsaufgaben werden von Node selbst nicht direkt unterstützt. Wenn Sie eine spezifische Bearbeitung für verschiedene HTTP-Verben hinzufügen möchten (z.B. `GET`, `POST`, `DELETE`, usw.), Anfragen an verschiedenen URL-Pfaden ("Routen") separat bearbeiten, statische Dateien bereitstellen oder Vorlagen verwenden, um die Antwort dynamisch zu erstellen, wird Node alleine wenig nützlich sein. Sie müssen entweder den Code selbst schreiben, oder Sie können das Rad nicht neu erfinden und ein Web-Framework verwenden!

## Einführung in Express

[Express](https://expressjs.com/) ist das beliebteste Node.js-Web-Framework und die zugrunde liegende Bibliothek für eine Reihe anderer beliebter Node.js-Frameworks. Es bietet Mechanismen, um:

- Handler für Anfragen mit verschiedenen HTTP-Verben an verschiedenen URL-Pfaden (Routen) zu schreiben.
- Integrierung mit "Ansichts"-Render-Engines, um Antworten zu generieren, indem Daten in Vorlagen eingefügt werden.
- Allgemeine Webanwendungseinstellungen wie den zu verwendenden Port und den Speicherort der für das Rendern der Antwort verwendeten Vorlagen festzulegen.
- Zusätzliche Anfragen-verarbeitende "Middleware" an jedem Punkt innerhalb der Verarbeitungskette zu ergänzen.

Während _Express_ an sich recht minimalistisch ist, haben Entwickler kompatible Middleware-Pakete erstellt, um fast jedes Webentwicklungsproblem anzugehen. Es gibt Bibliotheken für die Arbeit mit Cookies, Sitzungen, Benutzeranmeldungen, URL-Parametern, `POST`-Daten, Sicherheitsheadern und _vielen_ weiteren Punkten. Eine Liste von Middleware-Paketen, die vom Express-Team gewartet werden, finden Sie unter [Express Middleware](https://expressjs.com/en/resources/middleware.html) (sowie eine Liste einiger beliebter Drittanbieter-Pakete).

> [!NOTE]
> Diese Flexibilität ist ein zweischneidiges Schwert. Es gibt Middleware-Pakete, um fast jedes Problem oder jede Anforderung abzudecken, aber die richtigen Pakete zu finden, kann manchmal eine Herausforderung sein. Es gibt auch keinen "richtigen Weg", eine Anwendung zu strukturieren, und viele Beispiele, die Sie im Internet finden könnten, sind nicht optimal oder zeigen nur einen kleinen Teil dessen, was Sie tun müssen, um eine Webanwendung zu entwickeln.

## Woher kommen Node und Express?

Node wurde ursprünglich 2009 veröffentlicht, zuerst nur für Linux. Der npm-Paketmanager wurde 2010 veröffentlicht, und native Windows-Unterstützung wurde 2012 hinzugefügt. Tauchen Sie in [Wikipedia](https://en.wikipedia.org/wiki/Node.js#History) ein, wenn Sie mehr erfahren möchten.

Express wurde im November 2010 erstmals veröffentlicht und befindet sich derzeit in der Hauptversion 5 der API. Sie können den [Changelog](https://expressjs.com/en/changelog/#5.x) für Informationen zu Änderungen in der aktuellen Veröffentlichung einsehen und auf [GitHub](https://github.com/expressjs/express/blob/master/History.md) detaillierte historische Release-Notes finden.

## Wie beliebt sind Node und Express?

Die Beliebtheit eines Web-Frameworks ist wichtig, da sie ein Indikator dafür ist, ob es gepflegt wird und welche Ressourcen in Bezug auf Dokumentation, Zusatzbibliotheken und technischen Support verfügbar sein werden.

Es gibt keine leicht verfügbare und endgültige Maßnahme für die Beliebtheit von serverseitigen Frameworks (obwohl Sie die Beliebtheit anhand von Mechanismen wie der Zählung von GitHub-Projekten und Stack Overflow-Fragen für jede Plattform schätzen können). Eine bessere Frage ist, ob Node und Express "beliebt genug" sind, um die Probleme unpopulärer Plattformen zu vermeiden. Entwickeln sie sich weiter? Können Sie Hilfe bekommen, wenn Sie sie brauchen? Gibt es die Möglichkeit, bezahlte Arbeit zu erhalten, wenn Sie Express lernen?

Basierend auf der Anzahl prominenter Unternehmen, die Express verwenden, der Anzahl der Leute, die zum Code-Basis beitragen, und der Anzahl der Leute, die sowohl kostenlosen als auch kostenpflichtigen Support anbieten, ist _Express_ ein beliebtes Framework!

## Ist Express meinungsstark?

Web-Frameworks bezeichnen sich oft selbst als "Meinungsstark" oder "Unmeinungsstark".

Meinungsstarke Frameworks sind solche mit Meinungen darüber, welcher "richtige Weg" für die Bearbeitung einer bestimmten Aufgabe ist. Sie unterstützen oft die schnelle Entwicklung _in einem bestimmten Bereich_ (Lösung von Problemen einer bestimmten Art), da der richtige Weg, etwas zu tun, in der Regel gut verstanden und dokumentiert ist. Allerdings können sie weniger flexibel bei der Lösung von Problemen außerhalb ihres Hauptbereichs sein und bieten in der Regel weniger Auswahlmöglichkeiten, welche Komponenten und Ansätze sie verwenden können.

Unmeinungsstarke Frameworks im Gegensatz dazu haben weit weniger Einschränkungen bezüglich des besten Wegs, Komponenten zusammenzusetzen, um ein Ziel zu erreichen, oder welche Komponenten verwendet werden sollten. Sie erleichtern es Entwicklern, die am besten geeigneten Werkzeuge für eine bestimmte Aufgabe zu verwenden, wenn auch auf Kosten, dass Sie diese Komponenten selbst finden müssen.

Express ist unmeinungsstark. Sie können fast jede kompatible Middleware, die Ihnen gefällt, in die Anfragenverarbeitungskette einfügen, fast in beliebiger Reihenfolge. Sie können die App in einer Datei oder mehreren Dateien strukturieren und jede Verzeichnisstruktur verwenden. Manchmal haben Sie vielleicht sogar das Gefühl, dass Sie zu viele Wahlmöglichkeiten haben!

## Wie sieht Express-Code aus?

In einer traditionellen datengesteuerten Website wartet eine Webanwendung auf HTTP-Anfragen vom Webbrowser (oder einem anderen Client). Wenn eine Anfrage eingeht, ermittelt die Anwendung, welche Aktion basierend auf dem URL-Muster und möglicherweise damit verbundenen Informationen, die in `POST`-Daten oder `GET`-Daten enthalten sind, erforderlich ist. Abhängig davon, was erforderlich ist, kann sie dann Informationen aus einer Datenbank lesen oder schreiben oder andere Aufgaben ausführen, die zur Erfüllung der Anfrage erforderlich sind. Die Anwendung wird dann eine Antwort an den Webbrowser zurückgeben, oft dynamisch eine HTML-Seite für den Browser erstellen, indem die abgerufenen Daten in Platzhalter in einer HTML-Vorlage eingefügt werden.

Express bietet Methoden, um zu spezifizieren, welche Funktion für ein bestimmtes HTTP-Verb (`GET`, `POST`, `PUT`, usw.) und ein URL-Muster ("Route") aufgerufen wird, sowie Methoden, um zu spezifizieren, welche Vorlagen-Engine ("View") verwendet wird, wo sich Vorlagendateien befinden und welche Vorlage für die Darstellung einer Antwort verwendet werden soll. Sie können Express-Middleware verwenden, um Unterstützung für Cookies, Sitzungen und Benutzer, das Abrufen von `POST`/`GET`-Parametern usw. hinzuzufügen. Sie können jede Datenbankmechanismus verwenden, die von Node unterstützt wird (Express definiert kein datenbankbezogenes Verhalten).

Die folgenden Abschnitte erklären einige der gebräuchlichen Dinge, die Sie beim Arbeiten mit _Express_ und _Node_ Code sehen werden.

### Helloworld Express

Zunächst betrachten wir das Standard-Express-[Hello World](https://expressjs.com/en/starter/hello-world.html)-Beispiel (wir diskutieren jeden Teil davon unten und in den folgenden Abschnitten).

> [!NOTE]
> Wenn Sie Node und Express bereits installiert haben (oder wenn Sie sie wie im [nächsten Artikel](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) gezeigt installieren), können Sie diesen Code in einer Textdatei namens **app.js** speichern und ihn in einer Bash-Befehlszeile ausführen, indem Sie **`node ./app.js`** eingeben.

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

Die ersten zwei Zeilen verwenden `require()`, um das Express-Modul zu importieren und eine [Express-Anwendung](https://expressjs.com/en/4x/api.html#app) zu erstellen. Dieses Objekt, das traditionell `app` genannt wird, verfügt über Methoden zum Routing von HTTP-Anfragen, Konfigurieren von Middleware, Rendering von HTML-Ansichten, Registrieren einer Vorlagen-Engine und zum Ändern von [Anwendungseinstellungen](https://expressjs.com/en/4x/api.html#app.settings.table), die das Verhalten der Anwendung steuern (z.B. der Umgebung, ob Routendefinitionen groß-/kleinschreibungssensitiv sind usw.)

Der Mittelteil des Codes (die drei Zeilen, die mit `app.get` beginnen) zeigt eine _Routendefinition_. Die Methode `app.get()` gibt eine Callback-Funktion an, die immer dann aufgerufen wird, wenn eine HTTP-`GET`-Anfrage mit einem Pfad (`'/'`) relativ zum Stamm der Site empfangen wird. Die Callback-Funktion nimmt ein Anfragen- und ein Antwortobjekt als Argumente entgegen und ruft [`send()`](https://expressjs.com/en/4x/api.html#res.send) auf die Antwort auf, um den String "Hello World!" zurückzugeben.

Der letzte Block startet den Server auf einem angegebenen Port ('3000') und gibt einen Protokollkommentar an die Konsole aus. Mit dem laufenden Server könnten Sie zu `localhost:3000` in Ihrem Browser gehen, um die zurückgegebene Beispielantwort zu sehen.

### Importieren und Erstellen von Modulen

Ein Modul ist eine JavaScript-Bibliothek/-Datei, die Sie mit der `require()`-Funktion von Node in anderen Code importieren können. _Express_ selbst ist ein Modul, ebenso wie die Middleware- und Datenbank-Bibliotheken, die wir in unseren _Express_-Anwendungen verwenden.

Der folgende Code zeigt, wie wir ein Modul nach Namen importieren, unter Verwendung des Express-Frameworks als Beispiel. Zuerst rufen wir die `require()`-Funktion auf, geben den Namen des Moduls als String (`'express'`) an und rufen das zurückgegebene Objekt auf, um eine [Express-Anwendung](https://expressjs.com/en/4x/api.html#app) zu erstellen. Anschließend können wir auf die Eigenschaften und Funktionen des Anwendungsobjekts zugreifen.

```js
const express = require("express");

const app = express();
```

Sie können auch Ihre eigenen Module erstellen, die auf die gleiche Weise importiert werden können.

> [!NOTE]
> Sie werden _eigene_ Module erstellen wollen, weil dies Ihnen ermöglicht, Ihren Code in handhabbare Teile zu organisieren — eine monolithische Ein-Datei-Anwendung ist schwer zu verstehen und zu warten. Die Verwendung von Modulen hilft Ihnen auch, Ihren Namensraum zu verwalten, da nur die Variablen, die Sie explizit exportieren, importiert werden, wenn Sie ein Modul verwenden.

Um Objekte außerhalb eines Moduls verfügbar zu machen, müssen Sie diese lediglich als zusätzliche Eigenschaften des `exports`-Objekts verfügbar machen. Zum Beispiel ist das Modul **square.js** unten eine Datei, die `area()`- und `perimeter()`-Methoden exportiert:

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
> Sie können auch einen absoluten Pfad zum Modul angeben (oder einen Namen, wie wir es zunächst getan haben).

Wenn Sie ein vollständiges Objekt in einer Zuweisung exportieren möchten, anstatt es Eigenschaft für Eigenschaft zu erstellen, können Sie es `module.exports` wie unten gezeigt zuweisen (Sie können dies auch tun, um die Wurzel des Exportobjekts zu einem Konstruktor oder einer anderen Funktion zu machen):

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
> Sie können `exports` als [Abkürzung](https://nodejs.org/api/modules.html#modules_exports_shortcut) für `module.exports` innerhalb eines gegebenen Moduls betrachten. Tatsächlich ist `exports` einfach eine Variable, die vor der Auswertung des Moduls auf den Wert von `module.exports` initialisiert wird. Dieser Wert ist eine Referenz zu einem Objekt (leeres Objekt in diesem Fall). Das bedeutet, dass `exports` eine Referenz zu demselben Objekt hält, auf das `module.exports` verweist. Es bedeutet auch, dass durch die Zuweisung eines anderen Wertes zu `exports` es nicht mehr an `module.exports` gebunden ist.

Weitere Informationen zu Modulen finden Sie unter [Modules](https://nodejs.org/api/modules.html#modules_modules) (Node API-Dokumentation).

### Verwendung von asynchronen APIs

JavaScript-Code verwendet häufig asynchrone statt synchrone APIs für Vorgänge, die einige Zeit in Anspruch nehmen können. Eine synchrone API ist eine, bei der jeder Vorgang abgeschlossen sein muss, bevor der nächste Vorgang gestartet werden kann. Beispielsweise sind die folgenden Protokollfunktionen synchron und drucken den Text in der Reihenfolge auf die Konsole (Erste, Zweite).

```js
console.log("First");
console.log("Second");
```

Im Gegensatz dazu ist eine asynchrone API eine, bei der die API einen Vorgang startet und sofort zurückkehrt (bevor der Vorgang abgeschlossen ist). Sobald der Vorgang beendet ist, wird die API mit einem Mechanismus weitere Vorgänge ausführen. Im folgenden Codebeispiel wird "Zweite, Erste" ausgegeben, weil die `setTimeout()`-Methode zuerst aufgerufen wird und sofort zurückkehrt, der Vorgang aber erst nach einigen Sekunden abgeschlossen ist.

```js
setTimeout(() => {
  console.log("First");
}, 3000);
console.log("Second");
```

Die Verwendung von nicht blockierenden asynchronen APIs ist bei Node noch wichtiger als im Browser, da _Node_ eine Single-Threaded, ereignisgesteuerte Ausführungsumgebung ist. "Single-Threaded" bedeutet, dass alle Anfragen an den Server im selben Thread verarbeitet werden (anstelle der Aufteilung in separate Prozesse). Dieses Modell ist äußerst effizient in Bezug auf Geschwindigkeit und Serverressourcen, bedeutet jedoch, dass, wenn eine Ihrer Funktionen synchronen Methodenaufruf hat, die lange zur Ausführung benötigen, sie nicht nur die aktuelle Anfrage, sondern auch alle anderen Anfragen blockiert, die von Ihrer Webanwendung behandelt werden.

Es gibt eine Reihe von Möglichkeiten, wie eine asynchrone API Ihrer Anwendung mitteilen kann, dass sie abgeschlossen ist. Die häufigste Methode ist, dass Sie beim Aufrufen der asynchronen API eine Callback-Funktion registrieren, die nach Abschluss des Vorgangs aufgerufen wird. Dies ist der Ansatz, der oben verwendet wurde.

> [!NOTE]
> Das Verwenden von Callbacks kann recht "chaotisch" sein, wenn eine Abfolge abhängiger asynchroner Vorgänge ausgeführt werden muss, da dies zu mehreren verschachtelten Callback-Ebenen führt. Dieses Problem ist allgemein als "Callback-Hölle" bekannt. Dieses Problem kann durch gute Codierungspraktiken (siehe <http://callbackhell.com/>), der Verwendung eines Moduls wie [async](https://www.npmjs.com/package/async) oder durch Umstrukturierung des Codes zu nativen JavaScript-Features wie [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) und [async/await](/de/docs/Web/JavaScript/Reference/Statements/async_function) verringert werden. Node bietet die [`utils.promisify`](https://nodejs.org/api/util.html#utilpromisifyoriginal)-Funktion, um die Callback → Promise-Konvertierung ergonomisch durchzuführen.

> [!NOTE]
> Eine weit verbreitete Konvention für Node und Express ist die Verwendung von Fehler-zuerst-Callbacks. In dieser Konvention ist der erste Wert in Ihren _Callback-Funktionen_ ein Fehlerwert, während nachfolgende Argumente Erfolgsdaten enthalten. Es gibt eine gute Erklärung, warum dieser Ansatz nützlich ist, in diesem Blog: [The Node.js Way - Understanding Error-First Callbacks](https://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/) (fredkschott.com).

### Erstellung von Routen-Handlern

In unserem _Hello World_ Express-Beispiel (siehe oben) haben wir eine (Callback-)Routen-Handler-Funktion für HTTP-`GET`-Anfragen an das Seiten-Root (`'/'`) definiert.

```js
app.get("/", (req, res) => {
  res.send("Hello World!");
});
```

Die Callback-Funktion nimmt ein Anfrage- und ein Antwortobjekt als Argumente entgegen. In diesem Fall ruft die Methode [`send()`](https://expressjs.com/en/4x/api.html#res.send) auf die Antwort auf, um den String "Hello World!" zurückzugeben. Es gibt eine [Reihe anderer Antwortmethoden](https://expressjs.com/en/guide/routing.html#response-methods), um den Anfrage-/Antwortzyklus abzuschließen, z.B. könnten Sie [`res.json()`](https://expressjs.com/en/4x/api.html#res.json) aufrufen, um eine JSON-Antwort zu senden oder [`res.sendFile()`](https://expressjs.com/en/4x/api.html#res.sendFile), um eine Datei zu senden.

> [!NOTE]
> Sie können in den Callback-Funktionen beliebige Argumentnamen verwenden; wenn der Callback aufgerufen wird, ist das erste Argument immer die Anfrage und das zweite immer die Antwort. Es macht Sinn, sie so zu benennen, dass Sie im Körper des Callbacks identifizieren können, mit welchem Objekt Sie arbeiten.

Das _Express-Anwendungsobjekt_ bietet auch Methoden, um Routen-Handler für alle anderen HTTP-Verbs zu definieren, die meistens genau auf die gleiche Weise verwendet werden:

`checkout()`, `copy()`, **`delete()`**, **`get()`**, `head()`, `lock()`, `merge()`, `mkactivity()`, `mkcol()`, `move()`, `m-search()`, `notify()`, `options()`, `patch()`, **`post()`**, `purge()`, **`put()`**, `report()`, `search()`, `subscribe()`, `trace()`, `unlock()`, `unsubscribe()`.

Es gibt eine spezielle Routing-Methode, `app.all()`, die aufgerufen wird, um auf jede HTTP-Methode zu reagieren. Diese wird verwendet, um Middleware-Funktionen an einem bestimmten Pfad für alle Anfragemethoden zu laden. Das folgende Beispiel (aus der Express-Dokumentation) zeigt einen Handler, der für Anfragen an `/secret` unabhängig vom verwendeten HTTP-Verb ausgeführt wird (vorausgesetzt, es wird vom [http module](https://nodejs.org/docs/latest/api/http.html#httpmethods) unterstützt).

```js
app.all("/secret", (req, res, next) => {
  console.log("Accessing the secret section…");
  next(); // pass control to the next handler
});
```

Routen ermöglichen es Ihnen, bestimmte Muster von Zeichen in einer URL zu erkennen und einige Werte aus der URL zu extrahieren und sie als Parameter an den Routen-Handler weiterzugeben (als Attribute des als Parameter übergebenen Request-Objekts).

Oft ist es nützlich, Routen-Handler für einen bestimmten Teil einer Website zusammenzufassen und auf sie über einen gemeinsamen Routen-Präfix zuzugreifen (z.B. könnte eine Website mit einem Wiki alle wiki-bezogenen Routen in einer Datei haben und auf sie mit einem Routen-Präfix von _/wiki/_ zugreifen). In _Express_ wird dies durch die Verwendung des [`express.Router`](https://expressjs.com/en/guide/routing.html#express-router)-Objekts erreicht. Zum Beispiel können wir unsere Wiki-Route in einem Modul namens **wiki.js** erstellen und dann das `Router`-Objekt exportieren, wie unten gezeigt:

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

Um den Router in unserer Haupt-App-Datei zu verwenden, würden wir das Routemodul (**wiki.js**) mit `require()` einbinden und dann `use()` auf der _Express-Anwendung_ aufrufen, um den Router zum Middleware-Verarbeitungspfad hinzuzufügen. Die beiden Routen wären dann zugänglich unter `/wiki/` und `/wiki/about/`.

```js
const wiki = require("./wiki.js");

// …
app.use("/wiki", wiki);
```

Wir zeigen Ihnen später in dem verlinkten Abschnitt [Routen und Controller](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes) viel mehr über das Arbeiten mit Routen und insbesondere über die Verwendung des `Router`.

### Verwendung von Middleware

Middleware wird in Express-Anwendungen umfangreich verwendet, für Aufgaben vom Bereitstellen statischer Dateien über die Fehlerbehandlung bis hin zur Komprimierung von HTTP-Antworten. Während Routenfunktionen den HTTP-Anfrage-Antwort-Zyklus durch Rückgabe einer Antwort an den HTTP-Client beenden, führen Middleware-Funktionen _typischerweise_ eine Operation zur Anfrage oder Antwort durch und rufen dann die nächste Funktion im "Stack" auf, die möglicherweise eine andere Middleware oder ein Routen-Handler ist. Die Reihenfolge, in der Middleware aufgerufen wird, liegt in der Verantwortung des Anwendungsentwicklers.

> [!NOTE]
> Die Middleware kann jede Operation ausführen, jeden Code ausführen, Änderungen am Anfrage- und Antwortobjekt vornehmen, und sie kann _auch den Anfrage-Antwort-Zyklus beenden_. Wenn sie den Zyklus nicht beendet, muss sie `next()` aufrufen, um die Kontrolle an die nächste Middleware-Funktion zu übergeben (oder die Anfrage bleibt hängen).

Die meisten Apps werden _Drittanbieter_-Middleware verwenden, um gemeinsame Webentwicklungstasks zu vereinfachen, wie die Arbeit mit Cookies, Sitzungen, Benutzerauthentifizierung, Zugriff auf Anfrage-`POST`- und JSON-Daten, Protokollierung usw. Sie finden eine [Liste von Middleware-Paketen, die vom Express-Team gewartet werden](https://expressjs.com/en/resources/middleware.html) (die auch andere beliebte Drittanbieter-Pakete umfasst). Andere Express-Pakete sind im npm-Paketmanager verfügbar.

Um Drittanbieter-Middleware zu verwenden, müssen Sie sie zuerst mit npm in Ihre App installieren. Zum Beispiel würden Sie das [morgan](https://expressjs.com/en/resources/middleware/morgan.html) HTTP-Request-Logger-Middleware installieren, indem Sie dies tun:

```bash
npm install morgan
```

Sie können dann `use()` auf dem _Express-Anwendungsobjekt_ aufrufen, um die Middleware in den Stack hinzuzufügen:

```js
const express = require("express");
const logger = require("morgan");

const app = express();
app.use(logger("dev"));
// …
```

> [!NOTE]
> Middleware- und Routing-Funktionen werden in der Reihenfolge aufgerufen, in der sie deklariert sind. Bei manchen Middleware ist die Reihenfolge wichtig (zum Beispiel, wenn Sitzungsmiddleware von Cookie-Middleware abhängt, muss der Cookie-Handler zuerst hinzugefügt werden). Es ist fast immer der Fall, dass Middleware vor dem Setzen der Routen aufgerufen wird, oder Ihre Routen-Handler haben keinen Zugriff auf die von Ihrer Middleware hinzugefügte Funktionalität.

Sie können Ihre eigenen Middleware-Funktionen schreiben, und es ist wahrscheinlich, dass Sie das tun müssen (wenn auch nur, um Fehlerbehandlungscode zu erstellen). Der _einzige_ Unterschied zwischen einer Middleware-Funktion und einer Routen-Handler-Callback-Funktion ist, dass Middleware-Funktionen ein drittes Argument `next` haben, das von Middleware-Funktionen aufgerufen werden soll, wenn sie nicht diejenigen sind, die den Anfragenzyklus beenden (wenn die Middleware-Funktion aufgerufen wird, enthält dies die _nächste_ Funktion, die aufgerufen werden muss).

Sie können eine Middleware-Funktion mit `app.use()` zur Verarbeitungskette für _alle Antworten_ hinzufügen oder für ein spezifisches HTTP-Verb die zugehörige Methode verwenden: `app.get()`, `app.post()`, usw. Routen werden in beiden Fällen auf die gleiche Weise angegeben, obwohl die Route beim Aufruf von `app.use()` optional ist.

Das folgende Beispiel zeigt, wie Sie die Middleware-Funktion mit beiden Ansätzen und mit/ohne Route hinzufügen können.

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
> Oben deklarieren wir die Middleware-Funktion separat und setzen sie dann als Callback. In unserer vorherigen Routen-Handler-Funktion haben wir die Callback-Funktion bei ihrer Verwendung deklariert. In JavaScript ist jeder Ansatz gültig.

Die Express-Dokumentation bietet viele ausgezeichnete Dokumentationen über die [Verwendung](https://expressjs.com/en/guide/using-middleware.html) und das [Schreiben](https://expressjs.com/en/guide/writing-middleware.html) von Express-Middleware.

### Bereitstellen statischer Dateien

Sie können die [express.static](https://expressjs.com/en/4x/api.html#express.static) Middleware verwenden, um statische Dateien bereitzustellen, einschließlich Ihrer Bilder, CSS und JavaScript (`static()` ist die einzige Middleware-Funktion, die tatsächlich **Teil** von _Express_ ist). Beispielsweise würden Sie die folgende Zeile verwenden, um Bilder, CSS-Dateien und JavaScript-Dateien aus einem Verzeichnis namens '**public'** auf der gleichen Ebene wie dort, wo Sie Node aufrufen, bereitzustellen:

```js
app.use(express.static("public"));
```

Alle Dateien im öffentlichen Verzeichnis werden bereitgestellt, indem ihrem Dateinamen (_relativ_ zum Basis-"public"-Verzeichnis) zur Basis-URL hinzugefügt wird. Zum Beispiel:

```plain
http://localhost:3000/images/dog.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/about.html
```

Sie können `static()` mehrmals aufrufen, um mehrere Verzeichnisse bereitzustellen. Wenn eine Datei durch eine Middleware-Funktion nicht gefunden werden kann, wird sie an die nachfolgende Middleware weitergeleitet (die Reihenfolge, in der Middleware aufgerufen wird, basiert auf Ihrer Deklarationsreihenfolge).

```js
app.use(express.static("public"));
app.use(express.static("media"));
```

Sie können auch ein virtuelles Präfix für Ihre statischen URLs erstellen, anstatt die Dateien zur Basis-URL hinzuzufügen. Beispielsweise geben wir hier einen [Montagepfad](https://expressjs.com/en/4x/api.html#app.use) an, sodass die Dateien mit dem Präfix "/media" geladen werden:

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
> Siehe auch [Bereitstellen statischer Dateien in Express](https://expressjs.com/en/starter/static-files.html).

### Fehlerbehandlung

Fehler werden durch eine oder mehrere spezielle Middleware-Funktionen behandelt, die vier Argumente statt der üblichen drei haben: `(err, req, res, next)`. Beispielsweise:

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

Diese können jeden gewünschten Inhalt zurückgeben, müssen jedoch nach allen anderen `app.use()`- und Routenaufrufen aufgerufen werden, damit sie die letzten Middleware im Anfragenverarbeitungsprozess sind!

Express wird mit einem integrierten Fehler-Handler geliefert, der sich um alle verbleibenden Fehler kümmert, die in der App auftreten könnten. Diese Standard-Fehlerbehandlungsmiddleware-Funktion wird am Ende des Middleware-Funktionsstapels hinzugefügt. Wenn Sie einen Fehler an `next()` übergeben und ihn nicht in einem Fehler-Handler behandeln, wird er vom integrierten Fehler-Handler behandelt; der Fehler wird dem Client mit dem Stack-Trace geschrieben.

> [!NOTE]
> Der Stack-Trace ist im Produktionsumfeld nicht enthalten. Um es im Produktionsmodus auszuführen, müssen Sie die Umgebungsvariable `NODE_ENV` auf `"production"` setzen.

> [!NOTE]
> HTTP404 und andere "Fehler"-Statuscodes werden nicht als Fehler behandelt. Wenn Sie diese behandeln möchten, können Sie eine Middleware-Funktion hinzufügen, um dies zu tun. Weitere Informationen finden Sie in den [FAQ](https://expressjs.com/en/starter/faq.html#how-do-i-handle-404-responses).

Weitere Informationen finden Sie unter der [Fehlerhandhabung](https://expressjs.com/en/guide/error-handling.html) (Express Dokumentation).

### Verwendung von Datenbanken

_Express_ Anwendungen können jeden Datenbankmechanismus verwenden, der von _Node_ unterstützt wird (_Express_ selbst definiert kein spezifisches zusätzliches Verhalten/Anforderungen für die Datenbankverwaltung). Es gibt viele Optionen, einschließlich PostgreSQL, MySQL, Redis, SQLite, MongoDB usw.

Um diese zu verwenden, müssen Sie zuerst den Datenbanktreiber mit npm installieren. Um beispielsweise den Treiber für das beliebte NoSQL MongoDB zu installieren, würden Sie den folgenden Befehl verwenden:

```bash
npm install mongodb
```

Die Datenbank selbst kann lokal oder auf einem Cloud-Server installiert werden. In Ihrem Express-Code binden Sie den Treiber ein, stellen die Verbindung zur Datenbank her und führen dann create, read, update und delete (CRUD) Operationen durch. Das folgende Beispiel (aus der Express-Dokumentation) zeigt, wie Sie "Mammal"-Datensätze mit MongoDB finden können.

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

Ein anderer beliebter Ansatz ist der indirekte Zugriff auf Ihre Datenbank über einen Object-Relational-Mapper ("ORM"). In diesem Ansatz definieren Sie Ihre Daten als "Objekte" oder "Modelle" und der ORM überträgt diese auf das zugrunde liegende Datenbankformat. Dieser Ansatz hat den Vorteil, dass Sie als Entwickler weiterhin in JavaScript-Objekten denken können, anstatt in Datenbanksemantik, und dass es einen offensichtlichen Ort gibt, um Validierungs- und Überprüfungen eingehender Daten durchzuführen. Wir werden später in einem anderen Artikel mehr über Datenbanken sprechen.

Weitere Informationen finden Sie unter [Datenbankintegration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation).

### Rendering von Daten (ansichten)

Template-Engines (auch "View Engines" in _Express_ genannt) erlauben es Ihnen, die _Struktur_ eines Ausgabedokuments in einer Vorlage zu spezifizieren, wobei Platzhalter für Daten verwendet werden, die beim Generieren einer Seite ausgefüllt werden. Vorlagen werden häufig zur Erstellung von HTML verwendet, können aber auch andere Dokumentarten erstellen.

Express unterstützt eine Reihe von Template-Engines, insbesondere Pug (früher "Jade"), Mustache und EJS. Jede hat ihre eigenen Stärken, um bestimmte Anwendungsfälle anzusprechen (anschließende Vergleiche lassen sich leicht über eine Internetsuche finden). Der Express-Anwendungsgenerator verwendet Jade als Standard, unterstützt aber auch mehrere andere.

In Ihrem Anwendungseinstellungscode setzen Sie die zu verwendende Template-Engine und den Pfad, wo Express nach Vorlagen suchen soll, mithilfe der Einstellungen 'views' und 'view engine', wie unten gezeigt (Sie müssen auch das Paket installieren, das Ihre Vorlagenbibliothek enthält!)

```js
const express = require("express");
const path = require("path");

const app = express();

// Set directory to contain the templates ('views')
app.set("views", path.join(__dirname, "views"));

// Set view engine to use, in this case 'some_template_engine_name'
app.set("view engine", "some_template_engine_name");
```

Das Erscheinungsbild der Vorlage hängt davon ab, welche Engine Sie verwenden. Angenommen, Sie haben eine Vorlagendatei mit dem Namen "index.\<template_extension>", die Platzhalter für Datenvariablen namens 'title' und "message" enthält, würden Sie [`Response.render()`](https://expressjs.com/en/4x/api.html#res.render) in einer Routen-Handler-Funktion aufrufen, um die HTML-Antwort zu erstellen und zu senden:

```js
app.get("/", (req, res) => {
  res.render("index", { title: "About dogs", message: "Dogs rock!" });
});
```

Weitere Informationen finden Sie unter [Verwendung von Template-Engines mit Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation).

### Dateistruktur

Express trifft keine Annahmen hinsichtlich der Struktur oder welche Komponenten Sie verwenden. Routen, Ansichten, statische Dateien und andere anwendungsspezifische Logik können sich in einer beliebigen Anzahl von Dateien mit jeder Verzeichnisstruktur befinden. Obwohl es durchaus möglich ist, die gesamte _Express_ Anwendung in einer einzigen Datei zu haben, ist es in der Regel sinnvoll, Ihre Anwendung in Dateien basierend auf Funktion (z.B. Benutzerverwaltung, Blogs, Diskussionsforen) und architektonischem Problembereich (z.B. Modell, Ansicht oder Controller, wenn Sie eine {{Glossary("MVC", "MVC-Architektur")}} verwenden) aufzuteilen.

In einem späteren Thema verwenden wir den _Express Application Generator_, der ein modulares App-Skelett erstellt, das wir leicht erweitern können, um Webanwendungen zu erstellen.

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben den ersten Schritt auf Ihrer Express/Node-Reise abgeschlossen! Sie sollten jetzt die Hauptvorteile von Express und Node verstehen und grob wissen, wie die Hauptteile einer Express-App aussehen könnten (Routen, Middleware, Fehlerbehandlung und Vorlagencode). Sie sollten auch verstehen, dass Express als nicht-meinungsstarkes Framework absichtlich sehr leichtgewichtig ist, und daher vieles von seinen Vorteilen und Potenzialen von Drittanbieter-Bibliotheken und -Funktionen kommt. In den folgenden Artikeln werden wir diese detaillierter betrachten. In unserem nächsten Artikel werden wir uns ansehen, wie Sie eine Node-Entwicklungsumgebung einrichten können, sodass Sie einige Express-Codes in Aktion sehen können.

## Siehe auch

- [Learn Node.js](https://scrimba.com/learn-nodejs-c00ho9qqh6?via=mdn) von Scrimba <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine unterhaltsame, interaktive Einführung in Node.js.
- [Learn Express.js](https://scrimba.com/learn-expressjs-c062las154?via=mdn) von Scrimba <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> baut auf dem vorherigen Link auf und zeigt, wie das Express-Framework zur Erstellung serverseitiger Websites verwendet werden kann.
- [Modules](https://nodejs.org/api/modules.html#modules_modules) (Node API-Dokumentation)
- [Express](https://expressjs.com/) (Startseite)
- [Basic routing](https://expressjs.com/en/starter/basic-routing.html) (Express-Dokumentation)
- [Routing-Leitfaden](https://expressjs.com/en/guide/routing.html) (Express-Dokumentation)
- [Verwendung von Template-Engines mit Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation)
- [Verwendung von Middleware](https://expressjs.com/en/guide/using-middleware.html) (Express-Dokumentation)
- [Schreiben von Middleware zur Verwendung in Express-Anwendungen](https://expressjs.com/en/guide/writing-middleware.html) (Express-Dokumentation)
- [Datenbankintegration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation)
- [Bereitstellen statischer Dateien in Express](https://expressjs.com/en/starter/static-files.html) (Express-Dokumentation)
- [Fehlerbehandlung](https://expressjs.com/en/guide/error-handling.html) (Express-Dokumentation)

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
