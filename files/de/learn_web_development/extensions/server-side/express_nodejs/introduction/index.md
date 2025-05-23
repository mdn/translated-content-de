---
title: Einführung in Express/Node
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction
l10n:
  sourceCommit: 0915a5e602d475bd1a1a57d905f0bac1b7ed57b8
---

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

In diesem ersten Artikel über Express beantworten wir die Fragen "Was ist Node?" und "Was ist Express?" und geben Ihnen einen Überblick darüber, was das Web-Framework Express besonders macht. Wir skizzieren die Hauptmerkmale und zeigen Ihnen einige der grundlegenden Bausteine einer Express-Anwendung (obwohl Sie zu diesem Zeitpunkt noch keine Entwicklungsumgebung haben, um diese zu testen).

> [!WARNING]
> Das Express-Tutorial ist für die Version Express 4 geschrieben, während die neueste Version Express 5 ist.
> Wir planen, die Dokumentation in der zweiten Hälfte des Jahres 2025 zu aktualisieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein allgemeines Verständnis von <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps">serverseitiger Website-Programmierung</a> und insbesondere der Mechanismen zur <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview">Client-Server-Interaktion auf Websites</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit Express zu erlangen und zu verstehen, wie es sich in Node einfügt, welche Funktionalitäten es bietet und die Hauptbausteine einer Express-Anwendung.
      </td>
    </tr>
  </tbody>
</table>

## Einführung in Node

[Node](https://nodejs.org/) (oder formeller _Node.js_) ist eine Open-Source, plattformübergreifende Laufzeitumgebung, die Entwicklern ermöglicht, alle Arten von serverseitigen Tools und Anwendungen in {{Glossary("JavaScript", "JavaScript")}} zu erstellen. Die Laufzeit ist für den Einsatz außerhalb eines Browser-Kontextes gedacht (d.h. sie läuft direkt auf einem Computer oder Server-Betriebssystem). Daher verzichtet die Umgebung auf browser-spezifische JavaScript-APIs und fügt Unterstützung für traditionellere OS-APIs hinzu, einschließlich HTTP- und Dateisystembibliotheken.

Aus der Perspektive der Webserver-Entwicklung bietet Node eine Reihe von Vorteilen:

- Hervorragende Leistung! Node wurde entwickelt, um Durchsatz und Skalierbarkeit in Webanwendungen zu optimieren und ist eine gute Lösung für viele häufige Webentwicklungsprobleme (z.B. Echtzeit-Webanwendungen).
- Der Code wird in "gewöhnlichem" JavaScript geschrieben, was bedeutet, dass weniger Zeit mit dem "Kontextwechsel" zwischen Sprachen verbracht wird, wenn Sie sowohl clientseitigen als auch serverseitigen Code schreiben.
- JavaScript ist eine relativ neue Programmiersprache und profitiert von Verbesserungen im Sprachdesign im Vergleich zu anderen traditionellen Webserver-Sprachen (z.B. Python, PHP, etc.). Viele andere neue und populäre Programmiersprachen kompilieren/konvertieren in JavaScript, sodass Sie auch TypeScript, CoffeeScript, ClojureScript, Scala, LiveScript, etc. verwenden können.
- Der Node-Package-Manager (npm) bietet Zugriff auf Hunderttausende von wiederverwendbaren Paketen. Es hat auch eine erstklassige Abhängigkeitsauflösung und kann auch verwendet werden, um die meisten Teile der Build-Toolchain zu automatisieren.
- Node.js ist portabel. Es ist verfügbar auf Microsoft Windows, macOS, Linux, Solaris, FreeBSD, OpenBSD, WebOS und NonStop OS. Darüber hinaus wird es von vielen Webhosting-Anbietern gut unterstützt, die oft spezifische Infrastruktur und Dokumentation für das Hosting von Node-Seiten bieten.
- Es hat ein sehr aktives Drittanbieter-Ökosystem und eine Entwicklercommunity, mit vielen Menschen, die bereit sind zu helfen.

Sie können Node.js verwenden, um einen einfachen Webserver mit dem Node HTTP-Paket zu erstellen.

### Hallo Node.js

Das folgende Beispiel erstellt einen Webserver, der für jede Art von HTTP-Anfrage auf der URL `http://127.0.0.1:8000/` lauscht — wenn eine Anfrage empfangen wird, wird das Skript mit der Zeichenfolge "Hello World" antworten. Wenn Sie Node bereits installiert haben, können Sie die folgenden Schritte ausführen, um das Beispiel auszuprobieren:

1. Öffnen Sie das Terminal (unter Windows öffnen Sie das Befehlszeilenprogramm).
2. Erstellen Sie den Ordner, in dem Sie das Programm speichern möchten, z.B. `test-node` und wechseln Sie dann dorthin, indem Sie den folgenden Befehl in Ihr Terminal eingeben:

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

Navigieren Sie schließlich in Ihrem Webbrowser zu `http://localhost:8000`; Sie sollten den Text "**Hello World**" in der oberen linken Ecke einer ansonsten leeren Webseite sehen.

> [!NOTE]
> Wenn Sie etwas mit Node.js-Code spielen möchten, ohne eine lokale Einrichtung vornehmen zu müssen, bietet Scrimba's [Aside: The HTTP module](https://scrimba.com/learn-nodejs-c00ho9qqh6/~07du?via=mdn) <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> eine interaktive Anleitung zur Einrichtung eines einfachen Servers mit dem Node HTTP-Paket.

## Web-Frameworks

Andere gängige Webentwicklungsaufgaben werden von Node selbst nicht direkt unterstützt. Wenn Sie eine spezifische Behandlung für verschiedene HTTP-Methoden hinzufügen möchten (z.B. `GET`, `POST`, `DELETE`, etc.), Anfragen an verschiedene URL-Pfade ("Routen") separat behandeln, statische Dateien bereitstellen oder Vorlagen verwenden, um die Antwort dynamisch zu erstellen, wird Ihnen Node allein wenig nützen. Sie müssen entweder den Code selbst schreiben oder können das Rad nicht neu erfinden und ein Web-Framework verwenden!

## Einführung in Express

[Express](https://expressjs.com/) ist das beliebteste Node.js-Web-Framework und die zugrunde liegende Bibliothek für eine Reihe anderer beliebter Node.js-Frameworks. Es bietet Mechanismen zum:

- Schreiben von Handlern für Anfragen mit verschiedenen HTTP-Methoden an verschiedenen URL-Pfaden (Routen).
- Einbindung von "View"-Rendering-Engines, um Antworten zu generieren, indem Daten in Vorlagen eingefügt werden.
- Festlegen allgemeiner Webanwendungseinstellungen wie der zu verwendenden Portnummer für die Verbindung und dem Speicherort der Vorlagen, die zur Rendern der Antwort verwendet werden.
- Hinzufügen zusätzlicher Anfragen verarbeitender "Middleware" zu jedem Punkt innerhalb der Anfragen verarbeitenden Pipeline.

Während _Express_ selbst recht minimalistisch ist, haben Entwickler kompatible Middleware-Pakete erstellt, um fast jedes Webentwicklungsproblem zu adressieren. Es gibt Bibliotheken zum Arbeiten mit Cookies, Sessions, Benutzeranmeldungen, URL-Parametern, `POST`-Daten, Sicherheits-Headern und _vielen_ mehr. Eine Liste der von dem Express-Team gepflegten Middleware-Pakete finden Sie unter [Express Middleware](https://expressjs.com/en/resources/middleware.html) (zusammen mit einer Liste einiger beliebter Drittanbieter-Pakete).

> [!NOTE]
> Diese Flexibilität ist ein zweischneidiges Schwert. Es gibt Middleware-Pakete, um nahezu jedes Problem oder Bedürfnis zu adressieren, aber herauszufinden, welche Pakete zu verwenden sind, kann manchmal eine Herausforderung sein. Es gibt auch keinen “richtigen Weg”, eine Anwendung zu strukturieren, und viele Beispiele, die Sie im Internet finden, sind nicht optimal oder zeigen nur einen kleinen Teil von dem, was Sie tun müssen, um eine Webanwendung zu entwickeln.

## Woher stammen Node und Express?

Node wurde erstmals 2009 für Linux veröffentlicht. Der npm Package Manager wurde 2010 veröffentlicht und native Windows-Unterstützung wurde 2012 hinzugefügt. Tauchen Sie in die [Wikipedia](https://en.wikipedia.org/wiki/Node.js#History) ein, wenn Sie mehr wissen möchten.

Express wurde im November 2010 erstmals veröffentlicht und befindet sich derzeit in der Hauptversion 5 der API. Sie können das [Changelog](https://expressjs.com/en/changelog/#5.x) einsehen, um Informationen über Änderungen in der aktuellen Version zu erhalten, und sich auf [GitHub](https://github.com/expressjs/express/blob/master/History.md) für detailliertere historische Release-Hinweise umsehen.

## Wie populär sind Node und Express?

Die Beliebtheit eines Web-Frameworks ist wichtig, da es ein Indikator dafür ist, ob es weiter gepflegt wird und welche Ressourcen wahrscheinlich in Bezug auf Dokumentation, Zusatzbibliotheken und technischen Support verfügbar sind.

Es gibt keine leicht verfügbare und definitive Messung der Beliebtheit von serverseitigen Frameworks (obwohl Sie die Beliebtheit einschätzen können, indem Sie die Anzahl der GitHub-Projekte und Stack Overflow-Fragen für jede Plattform zählen). Eine bessere Frage ist, ob Node und Express “beliebt genug” sind, um die Probleme unbeliebter Plattformen zu vermeiden. Entwickeln sie sich weiter? Können Sie Hilfe bekommen, wenn Sie sie brauchen? Gibt es eine Möglichkeit für Sie, bezahlte Arbeit zu bekommen, wenn Sie Express lernen?

Basierend auf der Anzahl prominenter Unternehmen, die Express verwenden, der Anzahl der Personen, die zum Codebase beitragen, und der Anzahl der Personen, die sowohl kostenlose als auch bezahlte Unterstützung bieten, ist _Express_ definitiv ein beliebtes Framework!

## Ist Express meinungsstark?

Web-Frameworks bezeichnen sich oft als "meinungsstark" oder "nicht-meinungsstark".

Meinungsstarke Frameworks sind solche mit einer Meinung darüber, wie jede besondere Aufgabe zu erledigen ist. Sie unterstützen oft eine schnelle Entwicklung _in einem bestimmten Bereich_ (Lösungsprobleme einer bestimmten Art), weil der richtige Weg, um etwas zu tun, in der Regel gut verstanden und dokumentiert ist. Allerdings sind sie möglicherweise weniger flexibel bei der Lösung von Problemen außerhalb ihres Hauptbereichs, und bieten tendenziell weniger Auswahlmöglichkeiten, welche Komponenten und Ansätze sie verwenden können.

Nicht-meinungsstarke Frameworks hingegen haben weitaus weniger Einschränkungen bei der besten Art und Weise, Komponenten zusammenzufügen, um ein Ziel zu erreichen, oder sogar welche Komponenten verwendet werden sollten. Sie erleichtern es Entwicklern, die am besten geeigneten Tools zu verwenden, um eine bestimmte Aufgabe zu erfüllen, allerdings auf Kosten, dass Sie diese Komponenten selbst finden müssen.

Express ist nicht-meinungsstark. Sie können nahezu beliebige kompatible Middleware in die Anfrage verarbeitende Kette in nahezu beliebiger Reihenfolge einfügen. Sie können die App in einer Datei oder mehreren Dateien strukturieren und jede Verzeichnishierarchie verwenden. Manchmal haben Sie vielleicht das Gefühl, dass Sie zu viele Auswahlmöglichkeiten haben!

## Wie sieht Express-Code aus?

In einer traditionellen datengetriebenen Website wartet eine Webanwendung auf HTTP-Anfragen vom Webbrowser (oder einem anderen Client). Wenn eine Anfrage empfangen wird, findet die Anwendung heraus, welche Aktion basierend auf dem URL-Muster und möglicherweise zugehörigen Informationen im `POST`- oder `GET`-Daten erforderlich ist. Abhängig von den Anforderungen kann sie dann Informationen aus einer Datenbank lesen oder schreiben oder andere Aufgaben ausführen, die zur Erfüllung der Anfrage erforderlich sind. Die Anwendung gibt dann eine Antwort an den Webbrowser zurück, indem sie häufig eine HTML-Seite dynamisch erstellt, die der Browser anzeigt, indem die abgerufenen Daten in Platzhalter in einer HTML-Vorlage eingefügt werden.

Express bietet Methoden zur Spezifikation, welche Funktion für ein bestimmtes HTTP-Verb (`GET`, `POST`, `PUT`, etc.) und URL-Muster ("Route") aufgerufen wird, sowie Methoden zur Spezifikation, welche Vorlage ("view")-Engine verwendet wird, wo sich die Vorlagendateien befinden, und welche Vorlage verwendet werden soll, um eine Antwort zu rendern. Sie können Express-Middleware verwenden, um Unterstützung für Cookies, Sitzungen und Benutzer zu aktivieren, `POST`/`GET`-Parameter zu erhalten, etc. Sie können jeden von Node unterstützten Datenbankmechanismus verwenden (Express definiert kein Datenbank-bezogenes Verhalten).

In den folgenden Abschnitten erklären wir einige der häufigen Dinge, die Ihnen beim Arbeiten mit _Express_ und _Node_ Code begegnen werden.

### Hallo Welt Express

Zuerst betrachten wir das Standard-Express [Hallo Welt](https://expressjs.com/en/starter/hello-world.html) Beispiel (wir besprechen jeden Teil unten und in den folgenden Abschnitten).

> [!NOTE]
> Wenn Sie Node und Express bereits installiert haben (oder wenn Sie sie wie im [nächsten Artikel](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) gezeigt installieren), können Sie diesen Code in einer Textdatei namens **app.js** speichern und ihn in einer Bash-Eingabeaufforderung ausführen, indem Sie:
>
> **`node ./app.js`** aufrufen.

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

Die ersten beiden Zeilen `require()` (importieren) das Express-Modul und erstellen eine [Express-Anwendung](https://expressjs.com/en/4x/api.html#app). Dieses Objekt, das traditionell `app` genannt wird, besitzt Methoden zum Routing von HTTP-Anfragen, Konfigurieren von Middleware, Rendern von HTML-Views, Registrieren einer Template-Engine und Ändern von [Anwendungseinstellungen](https://expressjs.com/en/4x/api.html#app.settings.table), die steuern, wie sich die Anwendung verhält (z.B. der Modus für die Umgebung, ob Routendefinitionen case-sensitive sind, etc.)

Der mittlere Teil des Codes (die drei Zeilen, die mit `app.get` beginnen) zeigt eine _Routendefinition_. Die `app.get()`-Methode spezifiziert eine Callback-Funktion, die jedes Mal aufgerufen wird, wenn es eine HTTP `GET`-Anfrage mit einem Pfad (`'/'`) relativ zum Site-Root gibt. Die Callback-Funktion nimmt ein Anfragen- und ein Antwort-Objekt als Argumente und ruft [`send()`](https://expressjs.com/en/4x/api.html#res.send) auf die Antwort auf, um die Zeichenfolge "Hello World" zurückzugeben.

Der letzte Block startet den Server auf einem angegebenen Port ('3000') und gibt einen Log-Kommentar an die Konsole aus. Mit dem laufenden Server könnten Sie `localhost:3000` in Ihrem Browser aufrufen und die Beispielantwort sehen.

### Importieren und Erstellen von Modulen

Ein Modul ist eine JavaScript-Bibliothek/Datei, die Sie mit der `require()`-Funktion von Node in anderen Code importieren können. _Express_ selbst ist ein Modul, ebenso wie die Middleware- und Datenbank-Bibliotheken, die wir in unseren _Express_-Anwendungen verwenden.

Der folgende Code zeigt, wie wir ein Modul per Name importieren und verwendet dabei das _Express_-Framework als Beispiel. Zuerst rufen wir die `require()`-Funktion auf, indem wir den Namen des Moduls als Zeichenkette (`'express'`) angeben und das zurückgegebene Objekt aufrufen, um eine [Express-Anwendung](https://expressjs.com/en/4x/api.html#app) zu erstellen. Wir können dann auf die Eigenschaften und Funktionen des Anwendungsobjekts zugreifen.

```js
const express = require("express");
const app = express();
```

Sie können auch Ihre eigenen Module erstellen, die auf die gleiche Weise importiert werden können.

> [!NOTE]
> Sie _möchten_ eigene Module erstellen, da dies Ihnen ermöglicht, Ihren Code in verwaltbare Teile zu unterteilen — eine monolithische Anwendung in einer einzigen Datei ist schwer zu verstehen und zu warten. Die Verwendung von Modulen hilft Ihnen auch, Ihren Namensraum zu verwalten, da nur die Variablen, die Sie explizit exportieren, beim Verwenden eines Moduls importiert werden.

Um Objekte außerhalb eines Moduls verfügbar zu machen, müssen Sie sie einfach als zusätzliche Eigenschaften des `exports`-Objekts freigeben. Zum Beispiel exportiert das untenstehende Modul **square.js** die Methoden `area()` und `perimeter()`:

```js
exports.area = function (width) {
  return width * width;
};
exports.perimeter = function (width) {
  return 4 * width;
};
```

Wir können dieses Modul mit `require()` importieren und dann die exportierte(n) Methode(n) wie angezeigt aufrufen:

```js
const square = require("./square"); // Here we require() the name of the file without the (optional) .js file extension
console.log(`The area of a square with a width of 4 is ${square.area(4)}`);
```

> [!NOTE]
> Sie können auch einen absoluten Pfad zum Modul angeben (oder einen Namen, wie wir es anfangs getan haben).

Wenn Sie ein vollständiges Objekt in einer Zuweisung exportieren möchten, anstatt es Eigenschaft für Eigenschaft aufzubauen, weisen Sie es `module.exports` zu, wie unten gezeigt (Sie können dies auch tun, um die Wurzel des Exportobjekts zu einem Konstruktor oder einer anderen Funktion zu machen):

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
> Sie können `exports` als [Abkürzung](https://nodejs.org/api/modules.html#modules_exports_shortcut) für `module.exports` innerhalb eines bestimmten Moduls betrachten. Tatsächlich ist `exports` lediglich eine Variable, die beim Auswerten des Moduls auf den Wert von `module.exports` gesetzt wird. Dieser Wert ist ein Verweis auf ein Objekt (in diesem Fall ein leeres Objekt). Das bedeutet, dass `exports` einen Verweis auf dasselbe Objekt enthält, auf das `module.exports` verweist. Es bedeutet auch, dass `exports` nicht mehr an `module.exports` gebunden ist, wenn ihm ein anderer Wert zugewiesen wird.

Für viele weitere Informationen über Module siehe [Module](https://nodejs.org/api/modules.html#modules_modules) (Node API Dokumente).

### Verwendung von asynchronen APIs

JavaScript-Code verwendet häufig asynchron anstelle von synchronen APIs für Operationen, die einige Zeit in Anspruch nehmen können. Eine synchrone API ist eine, bei der jede Operation abgeschlossen sein muss, bevor die nächste Operation beginnen kann. Zum Beispiel sind die folgenden Log-Funktionen synchron und geben den Text in der Konsole in Reihenfolge aus (First, Second).

```js
console.log("First");
console.log("Second");
```

Im Gegensatz dazu ist eine asynchrone API eine, bei der die API eine Operation startet und sofort zurückgibt (bevor die Operation abgeschlossen ist). Sobald die Operation beendet ist, wird die API einen Mechanismus verwenden, um weitere Operationen auszuführen. Zum Beispiel wird der Code unten "Second, First" ausgeben, weil obwohl die Methode `setTimeout()` zuerst aufgerufen wird und sofort zurückgibt, die Operation erst nach einigen Sekunden abgeschlossen wird.

```js
setTimeout(function () {
  console.log("First");
}, 3000);
console.log("Second");
```

Die Verwendung von nicht-blockierenden asynchronen APIs ist auf Node noch wichtiger als im Browser, da _Node_ eine einsträngige, ereignisgesteuerte Ausführungsumgebung ist. "Einsträngig" bedeutet, dass alle Anfragen an den Server im selben Thread ausgeführt werden (anstatt in separate Prozesse aufgeteilt zu werden). Dieses Modell ist extrem effizient in Bezug auf Geschwindigkeit und Server-Ressourcen, aber es bedeutet, dass, wenn eine Ihrer Funktionen synchrone Methoden aufruft, die lange Zeit zum Abschließen benötigen, sie nicht nur die aktuelle Anfrage, sondern jede andere Anfrage blockieren, die von Ihrer Webanwendung bearbeitet wird.

Es gibt mehrere Möglichkeiten, wie eine asynchrone API Ihre Anwendung darüber informieren kann, dass sie abgeschlossen ist. Die häufigste Methode ist, eine Callback-Funktion zu registrieren, wenn Sie die asynchrone API aufrufen, die zurückgerufen wird, wenn die Operation abgeschlossen ist. Dies ist der Ansatz, der oben verwendet wurde.

> [!NOTE]
> Die Verwendung von Callbacks kann ziemlich "unordentlich" sein, wenn Sie eine Sequenz von voneinander abhängigen asynchronen Operationen haben, die in einer bestimmten Reihenfolge durchgeführt werden müssen, da dies zu mehreren Ebenen von verschachtelten Callbacks führt. Dieses Problem ist allgemein als "Callback-Hölle" bekannt. Dieses Problem kann durch gute Programmierpraktiken (siehe <http://callbackhell.com/>), durch die Verwendung eines Moduls wie [async](https://www.npmjs.com/package/async) oder durch Refaktorierung des Codes zu nativen JavaScript-Funktionen wie [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) und [async/await](/de/docs/Web/JavaScript/Reference/Statements/async_function) reduziert werden. Node bietet die Funktion [`utils.promisify`](https://nodejs.org/api/util.html#utilpromisifyoriginal) an, um die Callback → Promise-Konvertierung ergonomisch durchzuführen.

> [!NOTE]
> Eine gängige Konvention für Node und Express ist die Verwendung von error-first Callbacks. In dieser Konvention ist der erste Wert in Ihren _Callback-Funktionen_ ein Fehlerwert, während nachfolgende Argumente Erfolgsdaten enthalten. Eine gute Erklärung dafür, warum dieser Ansatz nützlich ist, finden Sie in diesem Blog: [The Node.js Way - Understanding Error-First Callbacks](https://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/) (fredkschott.com).

### Erstellen von Routen-Handlern

In unserem _Hello World_ Express-Beispiel (siehe oben) definierten wir eine (Callback-) Routen-Handler-Funktion für HTTP `GET`-Anfragen am Site-Root (`'/'`).

```js
app.get("/", function (req, res) {
  res.send("Hello World!");
});
```

Die Callback-Funktion nimmt ein Anfragen- und ein Antwortobjekt als Argumente an. In diesem Fall ruft die Methode [`send()`](https://expressjs.com/en/4x/api.html#res.send) auf der Antwort auf, um die Zeichenfolge "Hello World!" zurückzugeben. Es gibt eine [Anzahl anderer Antwortmethoden](https://expressjs.com/en/guide/routing.html#response-methods), um den Anfrage-/Antwort-Zyklus zu beenden, zum Beispiel könnten Sie [`res.json()`](https://expressjs.com/en/4x/api.html#res.json) aufrufen, um eine JSON-Antwort zu senden oder [`res.sendFile()`](https://expressjs.com/en/4x/api.html#res.sendFile) um eine Datei zu senden.

> [!NOTE]
> Sie können in den Callback-Funktionen beliebige Argumentnamen verwenden; wenn der Callback aufgerufen wird, ist das erste Argument immer die Anfrage und das zweite immer die Antwort. Es ist sinnvoll, sie so zu benennen, dass Sie das Objekt, mit dem Sie arbeiten, im Körper des Callbacks identifizieren können.

Das _Express-Anwendungs_-Objekt bietet auch Methoden zur Definition von Routen-Handlern für alle anderen HTTP-Methoden, die meistens auf genau die gleiche Weise verwendet werden:

`checkout()`, `copy()`, **`delete()`**, **`get()`**, `head()`, `lock()`, `merge()`, `mkactivity()`, `mkcol()`, `move()`, `m-search()`, `notify()`, `options()`, `patch()`, **`post()`**, `purge()`, **`put()`**, `report()`, `search()`, `subscribe()`, `trace()`, `unlock()`, `unsubscribe()`.

Es gibt eine spezielle Routenmethode, `app.all()`, die in Antwort auf jede HTTP-Methode aufgerufen wird. Diese wird zum Laden von Middleware-Funktionen an einem bestimmten Pfad für alle Anfragemethoden verwendet. Das folgende Beispiel (aus der Express-Dokumentation) zeigt einen Handler, der für Anfragen an `/secret` unabhängig von der verwendeten HTTP-Methode ausgeführt wird (vorausgesetzt, sie wird vom [http module](https://nodejs.org/docs/latest/api/http.html#httpmethods) unterstützt).

```js
app.all("/secret", function (req, res, next) {
  console.log("Accessing the secret section…");
  next(); // pass control to the next handler
});
```

Routen ermöglichen es Ihnen, bestimmte Muster von Zeichen in einer URL zu erkennen und Werte aus der URL zu extrahieren und diese als Parameter an den Routen-Handler zu übergeben (als Attribute des Anfragenobjekts, das als Parameter übergeben wird).

Oft ist es nützlich, Routen-Handler für einen bestimmten Teil einer Site zu gruppieren und sie über ein gemeinsames Routenpräfix zuzugreifen (z.B. könnte eine Site mit einem Wiki alle wiki-bezogenen Routen in einer Datei haben und sie mit einem Routenpräfix von _/wiki/_ zugänglich machen). In _Express_ wird dies mit dem [`express.Router`](https://expressjs.com/en/guide/routing.html#express-router) Objekt erreicht. Zum Beispiel können wir unsere Wiki-Route in einem Modul namens **wiki.js** erstellen und dann das `Router`-Objekt exportieren, wie unten gezeigt:

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
> Das Hinzufügen von Routen zum `Router`-Objekt funktioniert genauso wie das Hinzufügen von Routen zum `app`-Objekt (wie zuvor gezeigt).

Um den Router in unserer Haupt-App-Datei zu verwenden, würden wir dann das Routenmodul (**wiki.js**) `require()`, dann `use()` auf die _Express_-Anwendung aufrufen, um den Router zur Middleware Verarbeitungskette hinzuzufügen. Die beiden Routen wären dann von `/wiki/` und `/wiki/about/` aus zugänglich.

```js
const wiki = require("./wiki.js");
// …
app.use("/wiki", wiki);
```

Wir werden Ihnen viel mehr darüber zeigen, wie Sie mit Routen arbeiten und insbesondere den `Router` verwenden, später im verlinkten Abschnitt [Routen und Controller](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes).

### Verwendung von Middleware

Middleware wird umfangreich in Express-Apps verwendet, für Aufgaben vom Bereitstellen statischer Dateien über Fehlerbehandlung bis hin zur Komprimierung von HTTP-Antworten. Während Routinenfunktionen den HTTP-Anfrage-Antwort-Zyklus beenden, indem sie eine Antwort an den HTTP-Client zurücksenden, führen Middleware-Funktionen _typischerweise_ eine Operation auf der Anfrage oder Antwort aus und rufen dann die nächste Funktion in der "Kette" auf, die mehr Middleware oder ein Routen-Handler sein könnte. Die Reihenfolge, in der Middleware aufgerufen wird, liegt im Ermessen des App-Entwicklers.

> [!NOTE]
> Die Middleware kann jede beliebige Operation ausführen, jeden beliebigen Code ausführen, Änderungen am Anfrage- und Antwortobjekt vornehmen und sie kann _auch den Anfrage-Antwort-Zyklus beenden_. Wenn sie den Zyklus nicht beendet, muss sie `next()` aufrufen, um die Steuerung an die nächste Middleware-Funktion zu übergeben (oder die Anfrage bleibt hängen).

Die meisten Apps verwenden _Drittanbieter_-Middleware, um gängige Webentwicklungstasks wie Arbeiten mit Cookies, Sitzungen, Benutzer-Authentifizierung, Zugriff auf Anfrage-`POST` und JSON-Daten, Logging, etc. zu vereinfachen. Sie können eine [Liste von Middleware-Paketen, die vom Express-Team gepflegt werden](https://expressjs.com/en/resources/middleware.html) finden (die auch andere beliebte 3rd-Party-Pakete enthält). Andere Express-Pakete sind auf dem npm-Package-Manager verfügbar.

Um Drittanbieter-Middleware zu verwenden, müssen Sie sie zuerst mit npm in Ihrer App installieren.
Zum Beispiel, um den [morgan](https://expressjs.com/en/resources/middleware/morgan.html) HTTP-Anfragen-Logger-Middleware zu installieren, würden Sie dies tun:

```bash
npm install morgan
```

Sie könnten dann `use()` auf das _Express-Anwendungsobjekt_ aufrufen, um die Middleware zur Kette hinzuzufügen:

```js
const express = require("express");
const logger = require("morgan");
const app = express();
app.use(logger("dev"));
// …
```

> [!NOTE]
> Middleware und Routing-Funktionen werden in der Reihenfolge aufgerufen, in der sie deklariert werden. Für einige Middleware ist die Reihenfolge wichtig (z.B. wenn Session-Middleware von Cookie-Middleware abhängig ist, muss der Cookie-Handler zuerst hinzugefügt werden). Es ist fast immer der Fall, dass Middleware vor der Festlegung von Routen aufgerufen wird, oder Ihre Routen-Handler haben keinen Zugriff auf Funktionen, die durch Ihre Middleware hinzugefügt wurden.

Sie können Ihre eigenen Middleware-Funktionen schreiben, und dies müssen Sie wahrscheinlich tun (wenn auch nur, um Fehlerbehandlungscode zu erstellen). Der **einzige** Unterschied zwischen einer Middleware-Funktion und einem Routen-Handler-Callback besteht darin, dass Middleware-Funktionen ein drittes Argument `next` haben, das die Middleware-Funktion aufrufen soll, wenn sie nicht diejenige ist, die den Anfragezyklus abschließt (wenn die Middleware-Funktion aufgerufen wird, enthält diese das _nächste_, das aufgerufen werden muss).

Sie können eine Middleware-Funktion zur Verarbeitungskette für _alle Antworten_ mit `app.use()` hinzufügen, oder für ein spezifisches HTTP-Verb mit der zugehörigen Methode: `app.get()`, `app.post()`, etc. Routen werden in beiden Fällen auf die gleiche Weise spezifiziert, obwohl die Route optional ist, wenn `app.use()` aufgerufen wird.

Das Beispiel unten zeigt, wie die Middleware-Funktion mit beiden Ansätzen hinzugefügt werden kann, und mit/ohne Route.

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
> Oben deklarieren wir die Middleware-Funktion separat und setzen sie dann als Callback. In unserer vorherigen Routen-Handler-Funktion haben wir die Callback-Funktion deklariert, als sie verwendet wurde. In JavaScript sind beide Ansätze gültig.

Die Express-Dokumentation hat viele weitere ausgezeichnete Informationen über [Verwendung](https://expressjs.com/en/guide/using-middleware.html) und [Erstellung](https://expressjs.com/en/guide/writing-middleware.html) von Express-Middleware.

### Bereitstellen von statischen Dateien

Sie können die [express.static](https://expressjs.com/en/4x/api.html#express.static) Middleware verwenden, um statische Dateien, einschließlich Ihrer Bilder, CSS und JavaScript bereitzustellen (`static()` ist die einzige Middleware-Funktion, die tatsächlich **Teil** von _Express_ ist). Zum Beispiel, würden Sie die folgende Zeile verwenden, um Bilder, CSS-Dateien und JavaScript-Dateien aus einem Verzeichnis namens '**public'** auf der gleichen Ebene wie dort, wo Sie Node aufrufen, bereitzustellen:

```js
app.use(express.static("public"));
```

Alle Dateien im public-Verzeichnis werden bereitgestellt, indem ihr Dateiname (_relativ_ zur Basis "public" Verzeichnis) zur Basis-URL hinzugefügt wird. Beispielsweise:

```plain
http://localhost:3000/images/dog.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/about.html
```

Sie können `static()` mehrmals aufrufen, um mehrere Verzeichnisse bereitzustellen. Wenn eine Datei nicht von einer Middleware-Funktion gefunden werden kann, wird sie an die nachfolgende Middleware weitergegeben (die Reihenfolge, in der Middleware aufgerufen wird, basiert auf Ihrer Deklarationsreihenfolge).

```js
app.use(express.static("public"));
app.use(express.static("media"));
```

Sie können auch ein virtuelles Präfix für Ihre statischen URLs erstellen, anstatt die Dateien zur Basis-URL hinzuzufügen. Zum Beispiel, geben wir hier einen [Mount Path](https://expressjs.com/en/4x/api.html#app.use) an, damit die Dateien mit dem Präfix "/media" geladen werden:

```js
app.use("/media", express.static("public"));
```

Nun können Sie die Dateien, die sich im `public`-Verzeichnis befinden, vom `/media`-Pfadpräfix laden.

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
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

Diese können jeden benötigten Inhalt zurückgeben, müssen aber nach allen anderen `app.use()` und Routen-Aufrufen aufgerufen werden, sodass sie die letzte Middleware im Anfragenverarbeitungsprozess sind!

Express verfügt über einen integrierten Fehler-Handler, der sich um alle verbleibenden Fehler kümmert, die in der App auftreten könnten. Diese standardmäßige fehlerbehandlungs-Middleware-Funktion wird am Ende des Middleware-Funktionsstapels hinzugefügt. Wenn Sie einen Fehler an `next()` übergeben und ihn nicht in einem Fehler-Handler behandeln, wird er vom integrierten Fehler-Handler behandelt; der Fehler wird mit dem Stack-Trace an den Client geschrieben.

> [!NOTE]
> Der Stack-Trace ist in der Produktionsumgebung nicht enthalten. Um ihn im Produktionsmodus auszuführen, müssen Sie die Umgebungsvariable `NODE_ENV` auf `"production"` setzen.

> [!NOTE]
> HTTP404 und andere "Fehler"-Statuscodes werden nicht als Fehler behandelt. Wenn Sie diese behandeln möchten, können Sie eine Middleware-Funktion hinzufügen. Für weitere Informationen siehe die [FAQ](https://expressjs.com/en/starter/faq.html#how-do-i-handle-404-responses).

Für weitere Informationen siehe [Error handling](https://expressjs.com/en/guide/error-handling.html) (Express-Dokumentation).

### Verwendung von Datenbanken

_Express_-Apps können jeden von _Node_ unterstützten Datenbankmechanismus verwenden (_Express_ selbst definiert kein spezifisches zusätzliches Verhalten/Anforderungen für das Datenbankmanagement). Es gibt viele Optionen, einschließlich PostgreSQL, MySQL, Redis, SQLite, MongoDB, etc.

Um diese verwenden zu können, müssen Sie zuerst den Datenbanktreiber mit npm installieren. Zum Beispiel, um den Treiber für das beliebte NoSQL MongoDB zu installieren, würden Sie den Befehl verwenden:

```bash
npm install mongodb
```

Die Datenbank selbst kann lokal oder auf einem Cloud-Server installiert werden. In Ihrem Express-Code require´n Sie den Treiber, verbinden sich mit der Datenbank und führen dann Create, Read, Update und Delete (CRUD)-Operationen durch. Das untenstehende Beispiel (aus der Express-Dokumentation) zeigt, wie Sie "Säugetier"-Datensätze mit MongoDB finden können.

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

Ein weiterer beliebter Ansatz ist der indirekte Zugriff auf Ihre Datenbank über einen Object Relational Mapper ("ORM"). In diesem Ansatz definieren Sie Ihre Daten als "Objekte" oder "Modelle" und der ORM überführt diese in das darunterliegende Datenbankformat. Dieser Ansatz hat den Vorteil, dass Sie als Entwickler weiterhin in JavaScript-Objekten denken können, anstatt in Datenbank-Semantik, und dass es einen offensichtlichen Ort gibt, um Validierung und Überprüfung eingehender Daten durchzuführen. Wir werden in einem späteren Artikel mehr über Datenbanken sprechen.

Für weitere Informationen siehe [Database integration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation).

### Daten rendern (Ansichten)

Template Engines (auch als "View Engines" in _Express_ bezeichnet) ermöglichen es, die _Struktur_ eines Ausgabedokuments in einer Vorlage zu spezifizieren, indem Platzhalter für die zu füllenden Daten verwendet werden, wenn eine Seite generiert wird. Templates werden häufig verwendet, um HTML zu erstellen, können aber auch andere Dokumenttypen erstellen.

Express unterstützt eine Reihe von Template-Engines, insbesondere Pug (ehemals "Jade"), Mustache und EJS. Jede hat ihre eigenen Stärken für die Lösung bestimmter Anwendungsfälle (relative Vergleiche lassen sich leicht über Internetsuchen finden).
Der Express-Anwendungsgenerator verwendet Jade als Standard, unterstützt jedoch auch mehrere andere.

In Ihrem Anwendungseinstellungscode setzen Sie die zu verwendende Template-Engine und den Ort, an dem Express nach Templates suchen soll, indem Sie die 'views'- und 'view engine'-Einstellungen verwenden, wie unten gezeigt (Sie müssen auch das Paket installieren, das Ihre Template-Bibliothek enthält!)

```js
const express = require("express");
const path = require("path");
const app = express();

// Set directory to contain the templates ('views')
app.set("views", path.join(__dirname, "views"));

// Set view engine to use, in this case 'some_template_engine_name'
app.set("view engine", "some_template_engine_name");
```

Das Erscheinungsbild der Vorlage hängt davon ab, welche Engine Sie verwenden. Angenommen, Sie haben eine Vorlagendatei namens "index.\<template_extension>" die Platzhalter für Datenvariablen namens 'title' und "message" enthält, würden Sie [`Response.render()`](https://expressjs.com/en/4x/api.html#res.render) in einer Routen-Handler-Funktion aufrufen, um die HTML-Antwort zu erstellen und zu senden:

```js
app.get("/", function (req, res) {
  res.render("index", { title: "About dogs", message: "Dogs rock!" });
});
```

Für weitere Informationen siehe [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation).

### Dateistruktur

Express macht keine Annahmen in Bezug auf Struktur oder welche Komponenten Sie verwenden. Routen, Views, statische Dateien und andere anwendungsspezifische Logik können in einer beliebigen Anzahl von Dateien mit beliebiger Verzeichnisstruktur leben. Während es vollkommen möglich ist, die gesamte _Express_-Anwendung in einer Datei zu haben, macht es in der Regel Sinn, Ihre Anwendung in Dateien basierend auf Funktion (z.B. Kontoverwaltung, Blogs, Diskussionsforen) und architektonischem Problembereich (z.B. Modell, Ansicht oder Controller, wenn Sie eine {{Glossary("MVC", "MVC-Architektur")}} verwenden) zu unterteilen.

In einem späteren Thema verwenden wir den _Express Application Generator_, der ein modulares App-Skelett erstellt, das wir leicht für die Erstellung von Webanwendungen erweitern können.

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben den ersten Schritt auf Ihrer Express/Node-Reise abgeschlossen! Sie sollten nun die Hauptvorteile von Express und Node verstehen und in etwa wissen, wie die Hauptteile einer Express-App aussehen könnten (Routen, Middleware, Fehlerbehandlung und Template-Code). Sie sollten auch verstehen, dass mit Express als unopinionated Framework, die Art und Weise, wie Sie diese Teile zusammenführen und die Bibliotheken, die Sie verwenden, größtenteils Ihnen überlassen sind!

Natürlich ist Express bewusst ein sehr leichtgewichtiges Webanwendungs-Framework, daher kommt ein Großteil seines Nutzens und Potenzials von Bibliotheken und Funktionen von Drittanbietern. Wir werden diese ausführlicher in den folgenden Artikeln betrachten. In unserem nächsten Artikel werden wir uns mit der Einrichtung einer Node-Entwicklungsumgebung beschäftigen, damit Sie einige Express-Codes in Aktion sehen können.

## Siehe auch

- [Learn Node.js](https://scrimba.com/learn-nodejs-c00ho9qqh6?via=mdn) von Scrimba <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> liefert eine unterhaltsame, interaktive Einführung in Node.js.
- [Learn Express.js](https://scrimba.com/learn-expressjs-c062las154?via=mdn) von Scrimba <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> baut auf dem vorherigen Link auf und zeigt, wie das Express-Framework zur Erstellung serverseitiger Websites genutzt werden kann.
- [Module](https://nodejs.org/api/modules.html#modules_modules) (Node API Dokumente)
- [Express](https://expressjs.com/) (Startseite)
- [Basic routing](https://expressjs.com/en/starter/basic-routing.html) (Express-Dokumentation)
- [Routing-Leitfaden](https://expressjs.com/en/guide/routing.html) (Express-Dokumentation)
- [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation)
- [Using middleware](https://expressjs.com/en/guide/using-middleware.html) (Express-Dokumentation)
- [Writing middleware for use in Express apps](https://expressjs.com/en/guide/writing-middleware.html) (Express-Dokumentation)
- [Database integration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation)
- [Bereitstellen von statischen Dateien in Express](https://expressjs.com/en/starter/static-files.html) (Express-Dokumentation)
- [Fehlerbehandlung](https://expressjs.com/en/guide/error-handling.html) (Express-Dokumentation)

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
