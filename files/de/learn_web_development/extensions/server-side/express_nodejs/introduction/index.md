---
title: Einführung in Express/Node
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction
l10n:
  sourceCommit: 79fdc26fea835d65c9361541bb8ab1896f307475
---

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

In diesem ersten Artikel zu Express beantworten wir die Fragen "Was ist Node?" und "Was ist Express?" und geben Ihnen einen Überblick darüber, was das Express-Webframework besonders macht. Wir skizzieren die Hauptmerkmale und zeigen Ihnen einige der wichtigen Bausteine einer Express-Anwendung (obwohl Sie zu diesem Zeitpunkt noch keine Entwicklungsumgebung haben, in der Sie diese testen können).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Allgemeines Verständnis von <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps">serverseitiger Website-Programmierung</a> und insbesondere der Mechanik von <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview">Client-Server-Interaktionen in Websites</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Vertrautheit mit Express erlangen, verstehen, wie es zu Node passt, welche Funktionen es bietet und die Hauptbausteine einer Express-Anwendung.
      </td>
    </tr>
  </tbody>
</table>

## Einführung in Node

[Node](https://nodejs.org/) (oder formeller _Node.js_) ist eine Open-Source, plattformübergreifende Laufzeitumgebung, die es Entwicklern ermöglicht, alle Arten von serverseitigen Tools und Anwendungen in {{Glossary("JavaScript", "JavaScript")}} zu erstellen. Die Laufzeitumgebung ist für die Verwendung außerhalb eines Browser-Kontexts vorgesehen (d.h. direkt auf einem Computer oder Server-Betriebssystem ausgeführt). Daher werden browser-spezifische JavaScript-APIs ausgelassen und Unterstützung für traditionellere Betriebssystem-APIs einschließlich HTTP- und Dateisystem-Bibliotheken hinzugefügt.

Aus der Perspektive der Webserver-Entwicklung hat Node eine Reihe von Vorteilen:

- Hervorragende Leistung! Node wurde entwickelt, um den Durchsatz und die Skalierbarkeit von Webanwendungen zu optimieren, und ist eine gute Lösung für viele häufige Web-Entwicklungsprobleme (z.B. Echtzeit-Webanwendungen).
- Code wird in "ganz normalem JavaScript" geschrieben, was bedeutet, dass weniger Zeit für den Wechsel zwischen Sprachen aufgewendet wird, wenn Sie sowohl Client- als auch serverseitigen Code schreiben.
- JavaScript ist eine relativ neue Programmiersprache und profitiert im Vergleich zu anderen traditionellen Webserver-Sprachen (z.B. Python, PHP usw.) von Verbesserungen im Sprachdesign. Viele andere neue und beliebte Sprachen werden in JavaScript kompiliert/umgewandelt, sodass Sie auch TypeScript, CoffeeScript, ClojureScript, Scala, LiveScript usw. verwenden können.
- Der Node-Paketmanager (npm) bietet Zugriff auf Hunderttausende von wiederverwendbaren Paketen. Er hat auch eine erstklassige Abhängigkeitsauflösung und kann zum Automatisieren der meisten Build-Toolchains verwendet werden.
- Node.js ist portabel. Es ist verfügbar auf Microsoft Windows, macOS, Linux, Solaris, FreeBSD, OpenBSD, WebOS und NonStop OS. Darüber hinaus wird es von vielen Webhosting-Anbietern gut unterstützt, die oft spezielle Infrastrukturen und Dokumentationen für das Hosting von Node-Sites bieten.
- Es hat ein sehr aktives Drittanbieter-Ökosystem und eine Entwickler-Community, mit vielen Menschen, die bereit sind zu helfen.

Sie können Node.js verwenden, um einen einfachen Webserver mit dem Node HTTP-Paket zu erstellen.

### Hallo Node.js

Das folgende Beispiel erstellt einen Webserver, der auf jede Art von HTTP-Anfrage an die URL `http://127.0.0.1:8000/` hört - bei Empfang einer Anfrage antwortet das Skript mit dem String: "Hello World". Wenn Sie Node bereits installiert haben, können Sie die folgenden Schritte ausführen, um das Beispiel auszuprobieren:

1. Öffnen Sie das Terminal (unter Windows das Befehlszeilenprogramm öffnen)
2. Erstellen Sie den Ordner, in dem Sie das Programm speichern möchten, zum Beispiel `test-node` und betreten Sie ihn, indem Sie den folgenden Befehl in Ihr Terminal eingeben:

   ```bash
   cd test-node
   ```

3. Erstellen Sie mit Ihrem bevorzugten Texteditor eine Datei namens `hello.js` und fügen Sie den folgenden Code dort ein:

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

4. Speichern Sie die Datei im zuvor erstellten Ordner.
5. Gehen Sie zurück zum Terminal und geben Sie den folgenden Befehl ein:

   ```bash
   node hello.js
   ```

Navigieren Sie schließlich zu `http://localhost:8000` in Ihrem Webbrowser; Sie sollten den Text "**Hello World**" in der oberen linken Ecke einer ansonsten leeren Webseite sehen.

> [!NOTE]
> Wenn Sie ein wenig mit Node.js-Code spielen möchten, ohne jegliche lokale Einrichtung vornehmen zu müssen, bietet Scrimbas [Abschweifen: Das HTTP-Modul](https://scrimba.com/learn-nodejs-c00ho9qqh6/~07du?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> eine interaktive Einführung zur Einrichtung eines einfachen Servers mit dem Node HTTP-Paket.

## Webframeworks

Andere häufige Web-Entwicklungsaufgaben werden von Node selbst nicht direkt unterstützt. Wenn Sie eine spezielle Behandlung für verschiedene HTTP-Verben (z.B. `GET`, `POST`, `DELETE` usw.) hinzufügen möchten, Anfragen an verschiedene URL-Pfade ("Routen") separat behandeln, statische Dateien servieren oder Vorlagen verwenden möchten, um die Antwort dynamisch zu erstellen, wird Node allein wenig nützlich sein. Sie müssen entweder den Code selbst schreiben oder Sie können das Rad nicht neu erfinden und ein Webframework verwenden!

## Einführung in Express

[Express](https://expressjs.com/) ist das beliebteste Node.js-Webframework und die grundlegende Bibliothek für eine Reihe anderer beliebter Node.js-Frameworks. Es bietet Mechanismen zum:

- Schreiben von Handlern für Anfragen mit verschiedenen HTTP-Verben an unterschiedlichen URL-Pfaden (Routen).
- Integrieren mit „View“-Rendering-Engines, um Antworten durch Einfügen von Daten in Vorlagen zu generieren.
- Festlegen von üblichen Webanwendungseinstellungen, wie dem Anschluss für die Verbindung und dem Speicherort der Vorlagen, die zum Rendern der Antwort verwendet werden.
- Hinzufügen zusätzlicher Anforderungsverarbeitungs-"Middleware" an jedem Punkt innerhalb der Anforderungsverarbeitungskette.

Während _Express_ selbst ziemlich minimalistisch ist, haben Entwickler kompatible Middleware-Pakete erstellt, um fast jedes Webentwicklungsproblem zu lösen. Es gibt Bibliotheken, um mit Cookies, Sitzungen, Benutzeranmeldungen, URL-Parametern, `POST`-Daten, Sicherheits-Headern und vielem mehr zu arbeiten. Eine Liste von Middleware-Paketen, die vom Express-Team gepflegt werden, finden Sie unter [Express Middleware](https://expressjs.com/en/resources/middleware.html) (zusammen mit einer Liste einiger beliebter Drittanbieter-Pakete).

> [!NOTE]
> Diese Flexibilität ist ein zweischneidiges Schwert. Es gibt Middleware-Pakete, um fast jedes Problem oder jede Anforderung zu behandeln, aber die richtigen Pakete zur Verwendung herauszufinden, kann manchmal eine Herausforderung sein. Es gibt auch keinen "richtigen Weg", eine Anwendung zu strukturieren, und viele Beispiele, die Sie im Internet finden, sind nicht optimal oder zeigen nur einen kleinen Teil dessen, was Sie tun müssen, um eine Webanwendung zu entwickeln.

## Woher kommen Node und Express?

Node wurde anfänglich in 2009, nur für Linux, veröffentlicht. Der npm Paketmanager wurde in 2010 freigegeben und native Unterstützung für Windows wurde 2012 hinzugefügt. Wenn Sie mehr wissen möchten, schauen Sie in [Wikipedia](https://en.wikipedia.org/wiki/Node.js#History) nach.

Express wurde erstmals im November 2010 veröffentlicht und ist derzeit bei der Hauptversion 5 der API. Sie können sich das [Changelog](https://expressjs.com/en/changelog/#5.x) ansehen, um Informationen über Änderungen in der aktuellen Version zu erhalten, und [GitHub](https://github.com/expressjs/express/blob/master/History.md) für detailliertere historische Release-Hinweise.

## Wie populär sind Node und Express?

Die Beliebtheit eines Web-Frameworks ist wichtig, weil sie ein Indikator dafür ist, ob es weiterhin gewartet wird, und welche Ressourcen in Bezug auf Dokumentation, Add-On-Bibliotheken und technischen Support wahrscheinlich verfügbar sind.

Es gibt keine leicht verfügbaren und endgültigen Maßstäbe für die Beliebtheit von serverseitigen Frameworks (obwohl man die Beliebtheit mithilfe von Mechanismen wie dem Zählen der GitHub-Projekte und Stack Overflow-Fragen für jede Plattform abschätzen kann). Eine bessere Frage ist, ob Node und Express "beliebt genug" sind, um die Probleme unpopulärer Plattformen zu vermeiden. Entwickeln sie sich weiter? Können Sie Hilfe bekommen, wenn Sie sie benötigen? Gibt es eine Möglichkeit für Sie, bezahlte Arbeit zu erhalten, wenn Sie Express lernen?

Basierend auf der Anzahl hochkarätiger Unternehmen, die Express verwenden, der Anzahl von Leuten, die zum Codebase beitragen, und der Anzahl von Personen, die sowohl kostenlosen als auch kostenpflichtigen Support bieten, dann ja, _Express_ ist ein beliebtes Framework!

## Ist Express meinungsstark?

Web-Frameworks bezeichnen sich oft als "meinungsstark" oder "unbestimmt".

Meinungsstarke Frameworks sind solche mit festen Vorstellungen darüber, wie man eine bestimmte Aufgabe "richtig" handhabt. Sie unterstützen oft eine schnelle Entwicklung _in einem bestimmten Bereich_ (Lösungsprobleme eines bestimmten Typs), weil der richtige Weg, etwas zu tun, normalerweise gut verstanden und dokumentiert ist. Sie können jedoch weniger flexibel bei der Lösung von Problemen außerhalb ihres Hauptbereiches sein und bieten tendenziell weniger Auswahlmöglichkeiten, welche Komponenten und Ansätze sie verwenden können.

Unbestimmte Frameworks hingegen haben weit weniger Beschränkungen darüber, wie man Komponenten am besten zusammenfügt, um ein Ziel zu erreichen, oder sogar welche Komponenten verwendet werden sollten. Sie erleichtern es Entwicklern, die am besten geeigneten Tools zu verwenden, um eine bestimmte Aufgabe zu erfüllen, allerdings auf Kosten der Tatsache, dass Sie diese Komponenten selbst finden müssen.

Express ist unbestimmt. Sie können nahezu jede kompatible Middleware, die Sie mögen, in nahezu beliebiger Reihenfolge in die Anforderungsverarbeitungskette einfügen. Sie können die App in einer Datei oder mehreren Dateien und mit jeder beliebigen Verzeichnisstruktur organisieren. Manchmal fühlt es sich an, als hätten Sie zu viele Auswahlmöglichkeiten!

## Wie sieht Express-Code aus?

In einer herkömmlichen datengesteuerten Website wartet eine Webanwendung auf HTTP-Anfragen vom Webbrowser (oder einem anderen Client). Wenn eine Anfrage eingeht, ermittelt die Anwendung, welche Aktion erforderlich ist, basierend auf dem URL-Muster und möglicherweise zugehörigen Informationen, die in `POST`-Daten oder `GET`-Daten enthalten sind. Je nachdem, was erforderlich ist, kann sie dann Informationen aus einer Datenbank lesen oder schreiben oder andere Aufgaben ausführen, die erforderlich sind, um die Anfrage zu erfüllen. Die Anwendung gibt dann eine Antwort an den Webbrowser zurück, oft indem sie eine HTML-Seite dynamisch erstellt, die der Browser durch Einfügen der abgerufenen Daten in Platzhalter in einer HTML-Vorlage anzeigt.

Express stellt Methoden bereit, um festzulegen, welche Funktion für ein bestimmtes HTTP-Verb (`GET`, `POST`, `PUT`, usw.) und ein URL-Muster ("Route") aufgerufen wird, und Methoden, um festzulegen, welche Vorlage ("View")-Engine verwendet wird, wo sich Vorlagendateien befinden und welche Vorlage zum Rendern einer Antwort verwendet werden soll. Sie können Express-Middleware verwenden, um Unterstützung für Cookies, Sitzungen und Benutzer zu erweitern, `POST`/`GET`-Parameter zu erhalten usw. Sie können jeden Datenbankmechanismus verwenden, der von Node unterstützt wird (Express definiert kein datenbankspezifisches Verhalten).

Die folgenden Abschnitte erläutern einige der häufigen Dinge, die Sie beim Arbeiten mit _Express_- und _Node_-Code sehen werden.

### Hallo Welt Express

Lassen Sie uns zunächst das Standard-Express-[Hello World](https://expressjs.com/en/starter/hello-world.html)-Beispiel betrachten (wir erörtern jeden Teil davon unten und in den folgenden Abschnitten).

> [!NOTE]
> Wenn Sie Node und Express bereits installiert haben (oder wenn Sie sie wie im [nächsten Artikel](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) gezeigt installieren), können Sie diesen Code in einer Textdatei namens **app.js** speichern und in einer Bash-Befehlszeile ausführen, indem Sie folgendes eingeben:
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

Die ersten beiden Zeilen `require()` (importieren) das Express-Modul und erstellen eine [Express-Anwendung](https://expressjs.com/en/5x/api.html#app). Dieses Objekt, das traditionell `app` genannt wird, hat Methoden zum Routen von HTTP-Anfragen, Konfigurieren von Middleware, Rendern von HTML-Ansichten, Registrieren einer Template-Engine und Ändern von [Anwendungseinstellungen](https://expressjs.com/en/5x/api.html#app.settings.table), die das Verhalten der Anwendung steuern (z.B. den Umgebungsmodus, ob Routendefinitionen groß-/kleinschreibungssensitiv sind, usw.)

Der mittlere Teil des Codes (die drei Zeilen beginnend mit `app.get`) zeigt eine _Routendefinition_. Die `app.get()`-Methode spezifiziert eine Rückruffunktion, die aufgerufen wird, wenn eine HTTP-`GET`-Anfrage mit einem Pfad (`'/'`) relativ zum Stammverzeichnis der Site erfolgt. Die Rückruffunktion nimmt ein Anfrage- und ein Antwortobjekt als Argumente und ruft [`send()`](https://expressjs.com/en/5x/api.html#res.send) auf der Antwort auf, um den String "Hello World!" zurückzugeben.

Der letzte Block startet den Server auf einem bestimmten Port ('3000') und gibt einen Log-Kommentar in der Konsole aus. Mit dem laufenden Server könnten Sie in Ihrem Browser zu `localhost:3000` gehen, um die zurückgegebene Beispielantwort zu sehen.

### Importieren und Erstellen von Modulen

Ein Modul ist eine JavaScript-Bibliothek/-Datei, die Sie mithilfe der `require()`-Funktion von Node in eine andere Datei importieren können. _Express_ selbst ist ein Modul, ebenso wie die Middleware- und Datenbankbibliotheken, die wir in unseren _Express_-Anwendungen verwenden.

Der folgende Code zeigt, wie wir ein Modul mit seinem Namen importieren, unter Verwendung des _Express_ Frameworks als Beispiel. Zuerst rufen wir die `require()`-Funktion auf und geben den Namen des Moduls als String (`'express'`) an, und rufen das zurückgegebene Objekt auf, um eine [Express-Anwendung](https://expressjs.com/en/5x/api.html#app) zu erstellen. Dann können wir auf die Eigenschaften und Funktionen des Anwendungsobjekts zugreifen.

```js
const express = require("express");

const app = express();
```

Sie können auch Ihre eigenen Module erstellen, die auf die gleiche Weise importiert werden können.

> [!NOTE]
> Sie _möchten_ Ihre eigenen Module erstellen, weil dies es Ihnen ermöglicht, Ihren Code in überschaubare Teile zu organisieren - eine monolithische Einzelfilmanwendung ist schwer zu verstehen und zu warten. Die Verwendung von Modulen hilft Ihnen auch bei der Verwaltung ihres Namespace, da nur die Variablen, die Sie explizit exportieren, beim Modulimport verfügbar sind.

Um Objekte außerhalb eines Moduls verfügbar zu machen, müssen Sie sie nur als zusätzliche Eigenschaften des `exports`-Objekts ausstellen. Zum Beispiel ist das **square.js** Modul unten eine Datei, die `area()` und `perimeter()`-Methoden exportiert:

```js
exports.area = function (width) {
  return width * width;
};
exports.perimeter = function (width) {
  return 4 * width;
};
```

Wir können dieses Modul mit `require()` importieren und dann die exportierten Methode(n) wie gezeigt aufrufen:

```js
const square = require("./square"); // Here we require() the name of the file without the (optional) .js file extension

console.log(`The area of a square with a width of 4 is ${square.area(4)}`);
```

> [!NOTE]
> Sie können auch einen absoluten Pfad zum Modul angeben (oder einen Namen, wie wir es anfangs getan haben).

Wenn Sie ein komplettes Objekt in einer Zuweisung exportieren möchten, anstatt es Eigenschaft für Eigenschaft zu erstellen, können Sie es `module.exports` zuweisen, wie unten gezeigt (Sie können dies auch tun, um das Wurzelobjekt von `exports` zu einem Konstruktor oder einer anderen Funktion zu machen):

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
> Sie können `exports` als eine [Abkürzung](https://nodejs.org/api/modules.html#modules_exports_shortcut) für `module.exports` innerhalb eines bestimmten Moduls betrachten. Tatsächlich ist `exports` nur eine Variable, die vor der Bewertung des Moduls auf den Wert von `module.exports` initialisiert wird. Dieser Wert ist eine Referenz auf ein Objekt (leeres Objekt in diesem Fall). Das bedeutet, dass `exports` eine Referenz auf dasselbe Objekt hält, das auch von `module.exports` referenziert wird. Es bedeutet auch, dass `exports` keine Bindung mehr an `module.exports` hat, wenn ihm ein anderer Wert zugewiesen wird.

Weitere Informationen über Module finden Sie unter [Modules](https://nodejs.org/api/modules.html#modules_modules) (Node API-Dokumentation).

### Verwenden von asynchronen APIs

JavaScript-Code verwendet häufig asynchrone anstelle von synchronen APIs für Vorgänge, die einige Zeit in Anspruch nehmen können. Eine synchrone API ist eine, bei der jeder Vorgang abgeschlossen sein muss, bevor der nächste gestartet werden kann. Zum Beispiel sind die folgenden Log-Funktionen synchron und drucken den Text in geordneter Reihenfolge (Erste, Zweite) auf die Konsole.

```js
console.log("First");
console.log("Second");
```

Im Gegensatz dazu ist eine asynchrone API eine, bei der die API einen Vorgang startet und sofort zurückkehrt (bevor der Vorgang abgeschlossen ist). Sobald der Vorgang abgeschlossen ist, verwendet die API einen Mechanismus, um zusätzliche Vorgänge auszuführen. Zum Beispiel wird der untenstehende Code "Zweite, Erste" ausgeben, weil, obwohl die `setTimeout()`-Methode zuerst aufgerufen wird und sofort zurückkehrt, der Vorgang mehrere Sekunden nicht abgeschlossen wird.

```js
setTimeout(() => {
  console.log("First");
}, 3000);
console.log("Second");
```

Die Verwendung von nicht-blockierenden asynchronen APIs ist in Node noch wichtiger als im Browser, da _Node_-Anwendungen häufig als ein Single-Thread-Event-gesteuertes Ausführungsumfeld geschrieben werden. "Einzelthread" bedeutet, dass alle Anfragen an den Server im selben Thread ausgeführt werden (anstatt in separate Prozesse auszulagern). Dieses Modell ist extrem effizient in Bezug auf Geschwindigkeit und Serverressourcen. Es bedeutet jedoch, dass, wenn eine Ihrer Funktionen synchrone Methoden aufruft, die lange dauern, sie nicht nur die aktuelle Anforderung blockiert, sondern alle anderen Anfragen, die von der Webanwendung verarbeitet werden.

Es gibt mehrere Möglichkeiten, wie eine asynchrone API Ihre Anwendung benachrichtigen kann, dass sie abgeschlossen ist. Historisch gesehen war der Ansatz, einen Rückruf beim Aufrufen der asynchronen API zu registrieren, der dann aufgerufen wird, wenn der Vorgang abgeschlossen ist (dies ist der oben verwendete Ansatz).

> [!NOTE]
> Die Verwendung von Rückrufen kann ziemlich "chaotisch" werden, wenn Sie eine Sequenz von abhängigen asynchronen Operationen haben, die in einer bestimmten Reihenfolge ausgeführt werden müssen, da dies zu mehreren Ebenen verschachtelter Rückrufe führt. Dieses Problem wird gemeinhin als "Rückruf-Hölle" bezeichnet.

> [!NOTE]
> Eine häufige Konvention für Node und Express ist die Verwendung von Fehler-Erst-Rückrufen. Bei dieser Konvention ist der erste Wert in Ihren _Rückruffunktionen_ ein Fehlerwert, während die nachfolgenden Argumente Erfolgsdaten enthalten. Es gibt eine gute Erklärung, warum dieser Ansatz nützlich ist, in diesem Blog: [The Node.js Way - Understanding Error-First Callbacks](https://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/) (fredkschott.com).

Moderner JavaScript-Code verwendet häufiger [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) und [async/await](/de/docs/Web/JavaScript/Reference/Statements/async_function), um den asynchronen Programmfluss zu verwalten. Sie sollten, wo möglich, Versprechen verwenden. Wenn Sie mit Code arbeiten, der Rückrufe verwendet, können Sie die [`utils.promisify`](https://nodejs.org/api/util.html#utilpromisifyoriginal)-Funktion von Node.js verwenden, um die Ergonomie der Rückruf→Versprechen-Umwandlung zu handhaben.

### Erstellen von Routenerstellern

In unserem _Hello World_-Express-Beispiel (siehe oben) haben wir eine (Rückruf-)Routenhandler-Funktion für HTTP-`GET`-Anfragen an das Stammverzeichnis der Site (`'/'`) definiert.

```js
app.get("/", (req, res) => {
  res.send("Hello World!");
});
```

Die Rückruffunktion nimmt ein Anfrage- und ein Antwortobjekt als Argumente. In diesem Fall ruft die Methode [`send()`](https://expressjs.com/en/5x/api.html#res.send) auf der Antwort auf, um den String "Hello World!" zurückzugeben. Es gibt eine [Anzahl anderer Antwortmethoden](https://expressjs.com/en/guide/routing.html#response-methods), um den Anfrage-/Antwortzyklus zu beenden. Zum Beispiel könnten Sie [`res.json()`](https://expressjs.com/en/5x/api.html#res.json) aufrufen, um eine JSON-Antwort zu senden oder [`res.sendFile()`](https://expressjs.com/en/5x/api.html#res.sendFile), um eine Datei zu senden.

> [!NOTE]
> Sie können in den Rückruffunktionen beliebige Argumentnamen verwenden; beim Aufrufen der Rückruffunktion wird das erste Argument immer die Anfrage und das zweite immer die Antwort sein. Es ist sinnvoll, sie so zu benennen, dass Sie das Objekt, mit dem Sie arbeiten, im Körper des Rückrufs identifizieren können.

Das _Express-App_-Objekt bietet auch Methoden, um Routenersteller für alle anderen HTTP-Verben zu definieren, die meistens auf die gleiche Weise verwendet werden:

`checkout()`, `copy()`, **`delete()`**, **`get()`**, `head()`, `lock()`, `merge()`, `mkactivity()`, `mkcol()`, `move()`, `m-search()`, `notify()`, `options()`, `patch()`, **`post()`**, `purge()`, **`put()`**, `report()`, `search()`, `subscribe()`, `trace()`, `unlock()`, `unsubscribe()`.

Es gibt eine spezielle Routing-Methode, `app.all()`, die bei jedem HTTP-Verfahren aufgerufen wird. Diese wird verwendet, um Middleware-Funktionen an einem bestimmten Pfad für alle Anforderungsmethoden zu laden. Das folgende Beispiel (aus der Express-Dokumentation) zeigt einen Handler, der für Anfragen an `/secret` ausgeführt wird, unabhängig von dem verwendeten HTTP-Verfahren (vorausgesetzt, es wird vom [http-Modul](https://nodejs.org/docs/latest/api/http.html#httpmethods) unterstützt).

```js
app.all("/secret", (req, res, next) => {
  console.log("Accessing the secret section…");
  next(); // pass control to the next handler
});
```

Routen ermöglichen es, bestimmte Muster von Zeichen in einer URL zu erkennen und einige Werte aus der URL zu extrahieren und sie als Parameter an den Routenersteller weiterzugeben (als Attribute des Anforderungsobjekts, das als Parameter übergeben wird).

Oft ist es sinnvoll, Routenersteller für einen bestimmten Teil einer Site zusammenzufassen und sie mit einem gemeinsamen Routen-Präfix zugänglich zu machen (z.B. könnte eine Site mit einem Wiki alle wiki-bezogenen Routen in einer Datei haben und diese mit einem Routen-Präfix von _/wiki/_ zugänglich machen). In _Express_ wird dies mithilfe des [`express.Router`](https://expressjs.com/en/guide/routing.html#express-router)-Objekts erreicht. Zum Beispiel können wir in einem Modul namens **wiki.js** unsere Wiki-Route erstellen und dann das `Router`-Objekt exportieren, wie unten gezeigt:

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
> Das Hinzufügen von Routen zum `Router`-Objekt ist genau wie das Hinzufügen von Routen zum `app`-Objekt (wie zuvor gezeigt).

Um den Router in unserer Hauptanwendungsdatei zu verwenden, würden wir dann das Routenmodul (**wiki.js**) `require()` und `use()` auf der Express-Anwendung aufrufen, um den Router zum Middleware-Verarbeitungspfad hinzuzufügen. Die beiden Routen sind dann über `/wiki/` und `/wiki/about/` zugänglich.

```js
const wiki = require("./wiki.js");

// …
app.use("/wiki", wiki);
```

Wir werden Ihnen später im verlinkten Abschnitt [Routen und Controller](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes) noch viel mehr über die Arbeit mit Routen zeigen, insbesondere über die Verwendung des `Router`.

### Verwendung von Middleware

Middleware wird in Express-Apps ausgiebig verwendet, für Aufgaben vom Servieren statischer Dateien bis zur Fehlerbehandlung, zur Komprimierung von HTTP-Antworten. Während Routenfunktionen den HTTP-Anfrage-Antwort-Zyklus beenden, indem sie eine Antwort an den HTTP-Client zurückgeben, führen Middleware-Funktionen _typischerweise_ eine Operation an der Anfrage oder Antwort aus und rufen dann die nächste Funktion im "Stack" auf, die entweder mehr Middleware oder ein Routenersteller sein kann. Die Reihenfolge, in der Middleware aufgerufen wird, liegt beim Anwendungsentwickler.

> [!NOTE]
> Die Middleware kann jede beliebige Operation ausführen, jeden beliebigen Code ausführen, Änderungen am Anfrage- und Antwortobjekt vornehmen und sie kann _auch den Anfrage-Antwort-Zyklus beenden_. Wenn sie den Zyklus nicht beendet, muss sie `next()` aufrufen, um die Kontrolle an die nächste Middleware-Funktion zu übergeben (oder die Anfrage bleibt hängen).

Die meisten Apps verwenden _Drittanbieter_-Middleware, um häufige Webentwicklungsaufgaben wie das Arbeiten mit Cookies, Sitzungen, Benutzer-Authentifizierung, Zugriff auf Anfragen `POST`- und JSON-Daten, Protokollierung usw. zu vereinfachen. Sie finden eine [Liste der Middleware-Pakete, die vom Express-Team gewartet werden](https://expressjs.com/en/resources/middleware.html) (die auch andere beliebte Drittanbieter-Pakete enthält). Andere Express-Pakete sind im npm-Paketmanager verfügbar.

Um Drittanbieter-Middleware zu verwenden, müssen Sie diese zunächst mit npm in Ihre App installieren. Zum Beispiel, um die [morgan](https://expressjs.com/en/resources/middleware/morgan.html) HTTP-Anfrage-Logger-Middleware zu installieren, würden Sie dies tun:

```bash
npm install morgan
```

Dann könnten Sie `use()` auf dem _Express-Anwendungsobjekt_ aufrufen, um die Middleware dem Stack hinzuzufügen:

```js
const express = require("express");
const logger = require("morgan");

const app = express();
app.use(logger("dev"));
// …
```

> [!NOTE]
> Middleware und Routing-Funktionen werden in der Reihenfolge aufgerufen, in der sie deklariert wurden. Für einige Middleware ist die Reihenfolge wichtig (zum Beispiel, wenn die Sitzungs-Middleware von der Cookie-Middleware abhängt, muss der Cookie-Handler zuerst hinzugefügt werden). In den meisten Fällen wird die Middleware vor der Einstellung der Routen aufgerufen, oder Ihre Routenhandler haben keinen Zugriff auf die von Ihrer Middleware hinzugefügte Funktionalität.

Sie können Ihre eigenen Middleware-Funktionen schreiben und Sie werden wahrscheinlich gezwungen sein, dies zu tun (wenn auch nur, um Fehlerbehandlungscode zu erstellen). Der **einzige** Unterschied zwischen einer Middleware-Funktion und einem Routenerstellerrückruf ist, dass Middleware-Funktionen ein drittes Argument `next` haben, das die Middleware-Funktionen aufrufen sollen, wenn sie den Anfragezyklus nicht abschließen (wenn die Middleware-Funktion aufgerufen wird, enthält sie die _nächste_ aufzurufende Funktion).

Sie können eine Middleware-Funktion zur Verarbeitungskette für _alle Antworten_ mit `app.use()` hinzufügen oder eine spezifische HTTP-Verben verwenden, die mit der zugehörigen Methode `app.get()`, `app.post()` usw. aufgerufen werden. Routen sind in beiden Fällen auf die gleiche Weise angegeben, obwohl die Route optional ist, wenn `app.use()` aufgerufen wird.

Das Beispiel unten zeigt, wie Sie die Middleware-Funktion auf beiden Ansätzen hinzufügen können, mit/ohne Route.

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
> Oben erklären wir die Middleware-Funktion separat und fügen sie dann als Rückruf hinzu. In unserer vorherigen Routenhandler-Funktion haben wir die Rückruffunktion erklärt, als sie verwendet wurde. In JavaScript ist jeder Ansatz gültig.

Die Express-Dokumentation enthält viele weitere ausgezeichnete Dokumentationen über [die Verwendung](https://expressjs.com/en/guide/using-middleware.html) und [die Erstellung](https://expressjs.com/en/guide/writing-middleware.html) von Express-Middleware.

### Statische Dateien servieren

Sie können die [express.static](https://expressjs.com/en/5x/api.html#express.static)-Middleware verwenden, um statische Dateien bereitzustellen, einschließlich Ihrer Bilder, CSS und JavaScript (`static()` ist die einzige Middleware-Funktion, die tatsächlich **Teil** von _Express_ ist). Zum Beispiel, Sie würden die Zeile unten verwenden, um Bilder, CSS-Dateien und JavaScript-Dateien aus einem Verzeichnis namens '**public'** auf derselben Ebene wie der Node-Aufruf zu servieren:

```js
app.use(express.static("public"));
```

Beliebige Dateien im öffentlichen Verzeichnis werden bereitgestellt, indem ihr Dateiname (_relativ_ zum Basisverzeichnis "public") zur Basis-URL hinzugefügt wird. Zum Beispiel:

```plain
http://localhost:3000/images/dog.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/about.html
```

Sie können `static()` mehrmals aufrufen, um mehrere Verzeichnisse zu bedienen. Wenn eine Datei von einer Middleware-Funktion nicht gefunden werden kann, wird sie an die nachfolgende Middleware weitergeleitet (die Reihenfolge, in der Middleware aufgerufen wird, basiert auf Ihrer Deklarationsreihenfolge).

```js
app.use(express.static("public"));
app.use(express.static("media"));
```

Sie können auch ein virtuelles Präfix für Ihre statischen URLs erstellen, anstatt die Dateien der Basis-URL hinzuzufügen. Zum Beispiel, hier [spezifizieren wir einen Montierungs-Pfad](https://expressjs.com/en/5x/api.html#app.use), sodass die Dateien mit dem Präfix "/media" geladen werden:

```js
app.use("/media", express.static("public"));
```

Jetzt können Sie die im `public`-Verzeichnis enthaltenen Dateien aus dem `/media`-Pfadpräfix laden.

```plain
http://localhost:3000/media/images/dog.jpg
http://localhost:3000/media/video/cat.mp4
http://localhost:3000/media/cry.mp3
```

> [!NOTE]
> Siehe auch [Statische Dateien in Express servieren](https://expressjs.com/en/starter/static-files.html).

### Fehler behandeln

Fehler werden von einer oder mehreren speziellen Middleware-Funktionen behandelt, die vier Argumente anstelle der üblichen drei haben: `(err, req, res, next)`. Zum Beispiel:

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

Diese können nach Bedarf beliebigen Inhalt zurückgeben, müssen jedoch nach allen anderen `app.use()` und Routennutzungen aufgerufen werden, sodass sie die letzte Middleware im Anforderungsverarbeitungsprozess sind!

Express kommt mit einem integrierten Fehlerhandler, der sich um alle verbleibenden Fehler kümmert, die möglicherweise in der App auftreten. Diese standardmäßige Fehler-Verarbeitungs-Middleware-Funktion wird am Ende des Middleware-Funktionsstapels hinzugefügt. Wenn Sie einen Fehler an `next()` weitergeben und ihn nicht in einem Fehlerhandler behandelt, wird dies durch den integrierten Fehlerhandler bearbeitet; der Fehler wird an den Client mit dem Stack-Trace geschrieben.

> [!NOTE]
> Der Stack-Trace ist nicht in der Produktionsumgebung enthalten. Um sie im Produktionsmodus auszuführen, müssen Sie die Umgebungsvariable `NODE_ENV` auf `"production"` setzen.

> [!NOTE]
> HTTP404 und andere "Fehler"-Statuscodes werden nicht als Fehler behandelt. Wenn Sie diese behandeln möchten, können Sie eine Middleware-Funktion hinzufügen, um dies zu tun. Weitere Informationen finden Sie in den [FAQ](https://expressjs.com/en/starter/faq.html#how-do-i-handle-404-responses).

Weitere Informationen finden Sie unter [Fehlerbehandlung](https://expressjs.com/en/guide/error-handling.html) (Express-Dokumentation).

### Verwendung von Datenbanken

_Express_-Apps können jeden von _Node_ unterstützen Datenbankmechanismus verwenden (_Express_ selbst definiert kein spezifisches zusätzliches Verhalten/Anforderungen für die Datenbankverwaltung). Es gibt viele Optionen, darunter PostgreSQL, MySQL, Redis, SQLite, MongoDB usw.

Um diese zu verwenden, müssen Sie den Datenbanktreiber zuerst mit npm installieren. Zum Beispiel, um den Treiber für die beliebte NoSQL MongoDB zu installieren, würden Sie den folgenden Befehl verwenden:

```bash
npm install mongodb
```

Die Datenbank selbst kann lokal oder auf einem Cloud-Server installiert werden. In Ihrem Express-Code importieren Sie den Treiber, verbinden sich mit der Datenbank und führen dann Erstellungs-, Lese-, Update- und Löschvorgänge (CRUD) aus. Das untenstehende Beispiel (aus der Express-Dokumentation) zeigt, wie Sie "Säugetiere" Rekorde mithilfe von MongoDB (Version 3.0 und neuer) finden können:

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

Ein weiterer beliebter Ansatz besteht darin, über einen Objektrelationalen Mapper ("ORM") auf Ihre Datenbank indirekt zuzugreifen. In diesem Ansatz definieren Sie Ihre Daten als "Objekte" oder "Modelle" und das ORM ordnet diese bis zum zugrundeliegenden Datenbankformat zu. Dieser Ansatz hat den Vorteil, dass Sie als Entwickler weiterhin in JavaScript-Objekten denken können, anstatt in Datenbanksemantiken, und dass es einen offensichtlichen Ort gibt, um die Validierung und Überprüfung der eingehenden Daten durchzuführen. Wir werden später in einem weiteren Artikel mehr über Datenbanken sprechen.

Weitere Informationen finden Sie unter [Datenbank-Integration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation).

### Daten rendern (Ansichten)

Vorlagen-Engines (auch als "Ansichts-Engines" in _Express_ bezeichnet) ermöglichen es Ihnen, die _Struktur_ eines Ausgabedokuments in einer Vorlage anzugeben, mit Platzhaltern für Daten, die beim Generieren einer Seite ausgefüllt werden. Vorlagen werden oft verwendet, um HTML zu erstellen, können jedoch auch andere Arten von Dokumenten erstellen.

Express unterstützt eine Reihe von Vorlagen-Engines, insbesondere Pug (früher "Jade"), Mustache und EJS. Jede hat ihre eigenen Stärken, um bestimmte Anwendungsfälle zu adressieren (vergleichbare Vergleiche lassen sich leicht per Internetsuche finden). Der Express-Anwendungsgenerator verwendet Jade als Standard, unterstützt jedoch auch mehrere andere.

In Ihrem Anwendungseinstellungs-Code legen Sie die zu verwendende Vorlagen-Engine und den Speicherort, an dem Express nach Vorlagen suchen sollte, mithilfe der 'views' und 'view engine'-Einstellungen fest, wie unten gezeigt (Sie müssen auch das Paket installieren, das Ihre Vorlagenbibliothek enthält!)

```js
const express = require("express");
const path = require("path");

const app = express();

// Set directory to contain the templates ('views')
app.set("views", path.join(__dirname, "views"));

// Set view engine to use, in this case 'some_template_engine_name'
app.set("view engine", "some_template_engine_name");
```

Das Erscheinungsbild der Vorlage hängt von der verwendeten Engine ab. Angenommen, Sie haben eine Vorlagendatei namens "index.\<template_extension>", die Platzhalter für Datavariablen mit den Namen 'title' und "message" enthält, würden Sie [`Response.render()`](https://expressjs.com/en/5x/api.html#res.render) in einer Routenhandlerfunktion aufrufen, um die HTML-Antwort zu erstellen und zu senden:

```js
app.get("/", (req, res) => {
  res.render("index", { title: "About dogs", message: "Dogs rock!" });
});
```

Weitere Informationen finden Sie unter [Verwenden von Vorlagen-Engines mit Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation).

### Dateistruktur

Express macht keine Annahmen in Bezug auf die Struktur oder welche Komponenten Sie verwenden. Routen, Ansichten, statische Dateien und andere anwendungsspezifische Logik können in einer beliebigen Anzahl von Dateien mit jeder Verzeichnisstruktur untergebracht werden. Während es durchaus möglich ist, die gesamte _Express_-Anwendung in einer Datei zu haben, macht es typischerweise Sinn, Ihre Anwendung in Dateien basierend auf Funktion (z.B. Kontoverwaltung, Blogs, Diskussionsboards) und architektonischem Problembereich (z.B. Modell, Ansicht oder Controller, wenn Sie eine {{Glossary("MVC", "MVC-Architektur")}} verwenden) aufzuteilen.

In einem späteren Thema werden wir den _Express Application Generator_ verwenden, der ein modulares App-Skelett erstellt, das wir leicht für die Erstellung von Webanwendungen erweitern können.

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben den ersten Schritt in Ihrer Express/Node-Reise abgeschlossen! Sie sollten jetzt die Hauptvorteile von Express und Node und ungefähr das Erscheinungsbild der Hauptbestandteile einer Express-App verstehen (Routen, Middleware, Fehlerbehandlung und Vorlagencode). Sie sollten auch verstehen, dass Express als meinungsfreies Framework absichtlich sehr leichtgewichtig ist, sodass der Weg, diese Teile zusammenzuführen, und die Bibliotheken, die Sie verwenden, weitgehend Ihnen überlassen sind!

Natürlich ist Express absichtlich ein sehr leichtgewichtiges Webanwendungs-Framework, daher kommt ein großer Teil seines Nutzens und Potenzials aus Drittanbieterbibliotheken und -funktionen. Wir werden in den folgenden Artikeln genauer darauf eingehen. In unserem nächsten Artikel werden wir uns mit der Einrichtung einer Node-Entwicklungsumgebung befassen, sodass Sie einige Express-Codes in Aktion sehen können.

## Siehe auch

- [Lernen Sie Node.js](https://scrimba.com/learn-nodejs-c00ho9qqh6?via=mdn) von Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine unterhaltsame, interaktive Einführung in Node.js.
- [Lernen Sie Express.js](https://scrimba.com/learn-expressjs-c062las154?via=mdn) von Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> baut auf dem vorherigen Link auf und zeigt, wie man das Express-Framework nutzt, um serverseitige Websites zu erstellen.
- [Module](https://nodejs.org/api/modules.html#modules_modules) (Node API-Dokumentation)
- [Express](https://expressjs.com/) (Homepage)
- [Grundlegendes Routing](https://expressjs.com/en/starter/basic-routing.html) (Express-Dokumentation)
- [Leitfaden für Routing](https://expressjs.com/en/guide/routing.html) (Express-Dokumentation)
- [Verwenden von Vorlagen-Engines mit Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation)
- [Verwenden von Middleware](https://expressjs.com/en/guide/using-middleware.html) (Express-Dokumentation)
- [Erstellen von Middleware für die Verwendung in Express-Apps](https://expressjs.com/en/guide/writing-middleware.html) (Express-Dokumentation)
- [Datenbank-Integration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation)
- [Statische Dateien in Express servieren](https://expressjs.com/en/starter/static-files.html) (Express-Dokumentation)
- [Fehlerbehandlung](https://expressjs.com/en/guide/error-handling.html) (Express-Dokumentation)

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
