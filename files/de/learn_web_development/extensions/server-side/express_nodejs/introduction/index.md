---
title: Einführung in Express/Node
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction
l10n:
  sourceCommit: 8e3138000f0d4673cfa595830a5362b12e3c8180
---

{{LearnSidebar}}{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

In diesem ersten Artikel über Express beantworten wir die Fragen "Was ist Node?" und "Was ist Express?" und geben Ihnen einen Überblick darüber, was das Express-Webframework besonders macht. Wir skizzieren die Hauptfunktionen und zeigen Ihnen einige der wichtigsten Bausteine einer Express-Anwendung (obwohl Sie zu diesem Zeitpunkt noch keine Entwicklungsumgebung haben, um diese zu testen).

> [!WARNING]
> Das Express-Tutorial ist für Express Version 4 geschrieben, während die neueste Version Express 5 ist.
> Wir planen, die Dokumentation in der zweiten Jahreshälfte 2025 zu aktualisieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Allgemeines Verständnis von <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps">serverseitiger Website-Programmierung</a> und insbesondere der Mechanismen von <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview">Client-Server-Interaktionen in Websites</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit dem, was Express ist, und wie es mit Node zusammenpasst, welche Funktionalität es bietet und die Hauptbausteine einer Express-Anwendung zu gewinnen.
      </td>
    </tr>
  </tbody>
</table>

## Einführung in Node

[Node](https://nodejs.org/) (oder formaler _Node.js_) ist eine Open-Source-Plattform für die Ausführung von JavaScript-Code, die plattformübergreifend funktioniert und Entwicklern das Erstellen aller Arten von serverseitigen Tools und Anwendungen in {{Glossary("JavaScript", "JavaScript")}} ermöglicht.
Die Laufzeitumgebung ist für den Einsatz außerhalb eines Browser-Kontexts bestimmt (d.h. die Ausführung direkt auf einem Computer- oder Server-Betriebssystem). Daher lässt die Umgebung browser-spezifische JavaScript-APIs weg und fügt Unterstützungen für traditionellere Betriebssystem-APIs hinzu, einschließlich HTTP- und Dateisystembibliotheken.

Aus Sicht der Webserver-Entwicklung hat Node eine Reihe von Vorteilen:

- Hervorragende Leistung! Node wurde entwickelt, um den Durchsatz und die Skalierbarkeit in Webanwendungen zu optimieren, und ist eine gute Lösung für viele typische Webentwicklungsprobleme (z. B. Echtzeit-Webanwendungen).
- Code wird in "einfacher alter JavaScript" geschrieben, was bedeutet, dass weniger Zeit mit einem "Kontextwechsel" zwischen Sprachen verbracht wird, wenn Sie sowohl clientseitigen als auch serverseitigen Code schreiben.
- JavaScript ist eine relativ neue Programmiersprache und profitiert von Verbesserungen im Sprachdesign im Vergleich zu anderen traditionellen Webserver-Sprachen (z. B. Python, PHP, usw.). Viele andere neue und beliebte Sprachen kompilieren/konvertieren zu JavaScript, sodass Sie auch TypeScript, CoffeeScript, ClojureScript, Scala, LiveScript usw. verwenden können.
- Der node package manager (npm) bietet Zugriff auf Hunderttausende von wiederverwendbaren Paketen. Er verfügt auch über eine hervorragende Abhängigkeitsauflösung und kann auch verwendet werden, um den größten Teil der Build-Toolchain zu automatisieren.
- Node.js ist portabel. Es ist verfügbar auf Microsoft Windows, macOS, Linux, Solaris, FreeBSD, OpenBSD, WebOS und NonStop OS. Es wird außerdem von vielen Webhosting-Anbietern gut unterstützt, die häufig spezifische Infrastruktur und Dokumentation für das Hosting von Node-Sites bereitstellen.
- Es hat ein sehr aktives Drittanbieter-Ökosystem und eine Entwicklergemeinschaft, mit vielen Menschen, die bereit sind zu helfen.

Sie können Node.js verwenden, um einen einfachen Webserver mit dem Node HTTP-Paket zu erstellen.

### Hallo Node.js

Das folgende Beispiel erstellt einen Webserver, der auf jede Art von HTTP-Anfrage unter der URL `http://127.0.0.1:8000/` wartet — wenn eine Anfrage eingeht, antwortet das Skript mit dem String: "Hallo Welt". Wenn Sie node bereits installiert haben, können Sie diese Schritte befolgen, um das Beispiel auszuprobieren:

1. Öffnen Sie das Terminal (unter Windows öffnen Sie das Befehlszeilenprogramm)
2. Erstellen Sie den Ordner, in dem Sie das Programm speichern möchten, zum Beispiel `test-node`, und wechseln Sie dann in diesen, indem Sie den folgenden Befehl in Ihr Terminal eingeben:

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

Navigieren Sie schließlich in Ihrem Webbrowser zu `http://localhost:8000`; Sie sollten den Text "**Hallo Welt**" in der oberen linken Ecke einer ansonsten leeren Webseite sehen.

## Web-Frameworks

Andere übliche Webentwicklungsaufgaben werden von Node selbst nicht direkt unterstützt. Wenn Sie eine spezifische Verarbeitung für verschiedene HTTP-Verben (z. B. `GET`, `POST`, `DELETE`, usw.) hinzufügen, Anfragen an verschiedenen URL-Pfaden ("Routen") separat bearbeiten, statische Dateien servieren oder Vorlagen verwenden möchten, um die Antwort dynamisch zu erstellen, wird Node alleine nicht sehr nützlich sein. Sie müssen entweder den Code selbst schreiben oder Sie können das Rad nicht neu erfinden und ein Webframework verwenden!

## Einführung in Express

[Express](https://expressjs.com/) ist das beliebteste Node.js-Webframework und die zugrunde liegende Bibliothek für eine Reihe anderer beliebter Node.js-Frameworks. Es bietet Mechanismen, um:

- Handler für Anfragen mit verschiedenen HTTP-Verben an verschiedenen URL-Pfaden (Routen) zu schreiben.
- Sich mit "View"-Rendering-Engines zu integrieren, um Antworten durch das Einfügen von Daten in Vorlagen zu erzeugen.
- Gemeinsame Webanwendungseinstellungen festzulegen, wie z. B. den Anschluss, der für die Verbindung verwendet wird, und den Speicherort der Vorlagen, die für die Ausgabe verwendet werden.
- Zusätzliche Anfragenverarbeitungs-"Middleware" zu jedem Punkt in der Anfragabwicklungskette hinzuzufügen.

Obwohl _Express_ selbst ziemlich minimalistisch ist, haben Entwickler kompatible Middleware-Pakete erstellt, um fast jedes Webentwicklungsproblem zu adressieren. Es gibt Bibliotheken, um mit Cookies, Sitzungen, Benutzeranmeldungen, URL-Parametern, `POST`-Daten, Sicherheitsheadern und _vielen_ mehr zu arbeiten. Eine Liste von Middleware-Paketen, die vom Express-Team gepflegt werden, finden Sie unter [Express Middleware](https://expressjs.com/en/resources/middleware.html) (zusammen mit einer Liste einiger beliebter Drittanbieter-Pakete).

> [!NOTE]
> Diese Flexibilität ist ein zweischneidiges Schwert. Es gibt Middleware-Pakete, um fast jedes Problem oder jede Anforderung zu adressieren, aber das Herausfinden der richtigen Pakete kann manchmal eine Herausforderung sein. Es gibt auch keinen "richtigen Weg", eine Anwendung zu strukturieren, und viele Beispiele, die man im Internet finden könnte, sind nicht optimal oder zeigen nur einen kleinen Teil dessen, was man tun muss, um eine Webanwendung zu entwickeln.

## Woher kommen Node und Express?

Node wurde erstmals 2009 veröffentlicht, zunächst nur für Linux. Der npm-Paketmanager wurde 2010 veröffentlicht, und der native Windows-Support wurde 2012 hinzugefügt. Wenn Sie mehr wissen möchten, können Sie in [Wikipedia](https://en.wikipedia.org/wiki/Node.js#History) nachlesen.

Express wurde erstmals im November 2010 veröffentlicht und befindet sich derzeit in der Hauptversion 5 der API. Sie können sich das [Changelog](https://expressjs.com/en/changelog/#5.x) ansehen, um Informationen über Änderungen in der aktuellen Version zu erhalten, und [GitHub](https://github.com/expressjs/express/blob/master/History.md) für detailliertere historische Versionshinweise.

## Wie beliebt sind Node und Express?

Die Beliebtheit eines Webframeworks ist wichtig, da sie ein Indikator dafür ist, ob es weiterhin gepflegt wird und welche Ressourcen in Form von Dokumentation, Zusatzbibliotheken und technischem Support verfügbar sein werden.

Es gibt keine sofort verfügbare und endgültige Messung der Beliebtheit von serverseitigen Frameworks (obwohl man die Beliebtheit mithilfe von Mechanismen wie der Zählung der Anzahl von GitHub-Projekten und Stack Overflow-Fragen für jede Plattform schätzen kann). Eine bessere Frage ist, ob Node und Express "beliebt genug" sind, um die Probleme unbeliebter Plattformen zu vermeiden. Entwickeln sie sich weiter? Können Sie Hilfe bekommen, wenn Sie sie brauchen? Gibt es eine Möglichkeit, bezahlte Arbeit zu bekommen, wenn Sie Express lernen?

Basierend auf der Anzahl prominenter Unternehmen, die Express verwenden, der Anzahl der Personen, die zum Code beitragen, und der Anzahl der Personen, die sowohl kostenlosen als auch kostenpflichtigen Support bieten, ist _Express_ ein beliebtes Framework!

## Ist Express meinungsstark?

Webframeworks bezeichnen sich oft selbst als "meinungsstark" oder "unmeinungsstark".

Meinungsstarke Frameworks sind solche, die Meinungen darüber haben, wie eine bestimmte Aufgabe "richtig" zu handhaben ist. Sie unterstützen oft die schnelle Entwicklung _in einem bestimmten Bereich_ (Lösen von Problemen eines bestimmten Typs), weil der richtige Weg, etwas zu tun, in der Regel gut verstanden und gut dokumentiert ist. Sie können jedoch weniger flexibel bei der Lösung von Problemen außerhalb ihres Hauptbereichs sein und bieten tendenziell weniger Auswahlmöglichkeiten, welche Komponenten und Ansätze sie verwenden können.

Unmeinungsstarke Frameworks hingegen haben weit weniger Einschränkungen hinsichtlich des besten Weges, Komponenten zusammenzukleben, um ein Ziel zu erreichen, oder welche Komponenten verwendet werden sollten. Sie erleichtern es den Entwicklern, die am besten geeigneten Tools auszuwählen, um eine bestimmte Aufgabe zu erledigen, wenn auch auf Kosten dessen, dass Sie diese Komponenten selbst finden müssen.

Express ist unmeinungsstark. Sie können fast jede kompatible Middleware, die Sie möchten, in die Anfragabwicklungskette einfügen, in fast jeder Reihenfolge, die Sie möchten. Sie können die App in einer Datei oder mehreren Dateien strukturieren, und mit jeder Verzeichnisstruktur, die Sie wünschen. Es kann sein, dass Sie manchmal fühlen, dass Sie zu viele Wahlmöglichkeiten haben!

## Wie sieht Express-Code aus?

In einer traditionellen datengetriebenen Website wartet eine Webanwendung auf HTTP-Anfragen des Webbrowsers (oder eines anderen Clients). Wenn eine Anfrage empfangen wird, arbeitet die Anwendung heraus, welche Aktion basierend auf dem URL-Muster und möglicherweise assoziierten Informationen, die im `POST`- oder `GET`-Daten enthalten sind, benötigt wird. Abhängig von den Anforderungen kann es dann Informationen aus einer Datenbank lesen oder schreiben oder andere Aufgaben ausführen, die erforderlich sind, um die Anfrage zu erfüllen. Die Anwendung gibt dann eine Antwort an den Webbrowser zurück, häufig durch das dynamische Erzeugen einer HTML-Seite für den Browser unter Einfügen der abgerufenen Daten in Platzhalter in einer HTML-Vorlage.

Express stellt Methoden bereit, um zu spezifizieren, welche Funktion für ein bestimmtes HTTP-Verb (`GET`, `POST`, `PUT`, etc.) und ein URL-Muster ("Route") aufgerufen wird, sowie Methoden, um zu spezifizieren, welche Vorlage ("View")-Engine verwendet wird, wo sich die Vorlagendateien befinden und welche Vorlage für die Ausgabe verwendet werden soll. Sie können Express-Middleware verwenden, um Unterstützung für Cookies, Sitzungen und Benutzer, das Abrufen von `POST`/`GET`-Parametern usw. hinzuzufügen. Sie können jeden von Node unterstützten Datenbankmechanismus verwenden (Express definiert kein datenbankspezifisches Verhalten).

Die folgenden Abschnitte erklären einige der häufigsten Dinge, die Sie sehen werden, wenn Sie mit _Express_ und _Node_ Code arbeiten.

### Hallo Welt Express

Betrachten wir als erstes das Standard-Express [Hallo Welt](https://expressjs.com/en/starter/hello-world.html) Beispiel (wir diskutieren jeden Teil davon unten und in den folgenden Abschnitten).

> [!NOTE]
> Wenn Sie Node und Express bereits installiert haben (oder wenn Sie sie wie im [nächsten Artikel](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) gezeigt installieren), können Sie diesen Code in einer Textdatei namens **app.js** speichern und im Bash-Befehlszeilenfenster ausführen, indem Sie aufrufen:
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

Die ersten beiden Zeilen `require()` (importieren) das Express-Modul und erstellen eine [Express-Anwendung](https://expressjs.com/en/4x/api.html#app). Dieses Objekt, das traditionell `app` genannt wird, hat Methoden zum Routen von HTTP-Anfragen, Konfigurieren von Middleware, Rendern von HTML-Ansichten, Registrieren einer Vorlagen-Engine und Ändern von [Anwendungseinstellungen](https://expressjs.com/en/4x/api.html#app.settings.table), die steuern, wie die Anwendung funktioniert (z. B. den Umgebungsmodus, ob Routendefinitionen groß-/kleinschreibungsempfindlich sind usw.)

Der mittlere Teil des Codes (die drei Zeilen beginnend mit `app.get`) zeigt eine _Routendefinition_. Die Methode `app.get()` gibt eine Callback-Funktion an, die aufgerufen wird, wann immer eine HTTP-`GET`-Anfrage mit einem Pfad (`'/'`) relativ zum Site-Stamm empfangen wird. Die Callback-Funktion nimmt eine Anforderung und ein Antwortobjekt als Argumente und ruft [`send()`](https://expressjs.com/en/4x/api.html#res.send) auf die Antwort auf, um den String "Hallo Welt!" zurückzugeben.

Der letzte Block startet den Server auf einem angegebenen Port ('3000') und gibt einen Protokollkommentar in die Konsole aus. Bei laufendem Server könnten Sie `localhost:3000` in Ihrem Browser aufrufen, um die Beispielantwort zu sehen.

### Importieren und Erstellen von Modulen

Ein Modul ist eine JavaScript-Bibliothek/-Datei, die Sie mit der `require()`-Funktion von Node in anderen Code importieren können. _Express_ selbst ist ein Modul, ebenso wie die Middleware- und Datenbankbibliotheken, die wir in unseren _Express_-Anwendungen verwenden.

Der folgende Code zeigt, wie wir ein Modul nach Name importieren, wobei das _Express_-Framework als Beispiel dient. Zuerst rufen wir die `require()`-Funktion auf, wobei wir den Namen des Moduls als String (`'express'`) angeben und das zurückgegebene Objekt aufrufen, um eine [Express-Anwendung](https://expressjs.com/en/4x/api.html#app) zu erstellen. Wir können dann auf die Eigenschaften und Funktionen des Anwendungsobjekts zugreifen.

```js
const express = require("express");
const app = express();
```

Sie können auch Ihre eigenen Module erstellen, die auf die gleiche Weise importiert werden können.

> [!NOTE]
> Sie _müssen_ eigene Module erstellen, da dies Ihnen ermöglicht, Ihren Code in handhabbare Teile zu organisieren — eine monolithische Anwendung in einer einzigen Datei ist schwer zu verstehen und zu warten. Die Verwendung von Modulen hilft Ihnen auch, Ihren Namensraum zu verwalten, da nur die Variablen, die Sie explizit exportieren, beim Verwenden eines Moduls importiert werden.

Um Objekte außerhalb eines Moduls verfügbar zu machen, müssen Sie sie nur als zusätzliche Eigenschaften des `exports`-Objekts freigeben. Zum Beispiel ist das Modul **square.js** unten eine Datei, die `area()`- und `perimeter()`-Methoden exportiert:

```js
exports.area = function (width) {
  return width * width;
};
exports.perimeter = function (width) {
  return 4 * width;
};
```

Wir können dieses Modul mit `require()` importieren und dann die exportierte(n) Methode(n) wie folgt aufrufen:

```js
const square = require("./square"); // Here we require() the name of the file without the (optional) .js file extension
console.log(`The area of a square with a width of 4 is ${square.area(4)}`);
```

> [!NOTE]
> Sie können auch einen absoluten Pfad zum Modul angeben (oder einen Namen, wie wir es ursprünglich getan haben).

Wenn Sie ein komplettes Objekt in einer Zuweisung exportieren möchten, anstatt es Stück für Stück aufzubauen, weisen Sie es `module.exports` zu, wie unten gezeigt (Sie können dies auch tun, um die Wurzel des Exports-Objekts zu einem Konstruktor oder einer anderen Funktion zu machen):

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
> Sie können `exports` als [Abkürzung](https://nodejs.org/api/modules.html#modules_exports_shortcut) für `module.exports` innerhalb eines gegebenen Moduls betrachten. Tatsächlich ist `exports` nur eine Variable, die auf den Wert von `module.exports` initialisiert wird, bevor das Modul ausgewertet wird. Dieser Wert ist ein Verweis auf ein Objekt (in diesem Fall ein leeres Objekt). Das bedeutet, dass `exports` einen Verweis auf dasselbe Objekt hält, auf das `module.exports` verweist. Das bedeutet ebenfalls, dass durch Zuweisen eines anderen Wertes zu `exports` es nicht mehr an `module.exports` gebunden ist.

Für viel mehr Informationen über Module siehe [Module](https://nodejs.org/api/modules.html#modules_modules) (Node API Dokumentation).

### Verwendung von asynchronen APIs

JavaScript-Code verwendet häufig asynchrone anstelle von synchronen APIs für Operationen, die einige Zeit in Anspruch nehmen können. Eine synchrone API ist eine, bei der jede Operation abgeschlossen sein muss, bevor die nächste Operation beginnen kann. Zum Beispiel sind die folgenden Protokollfunktionen synchron und drucken den Text in der Reihenfolge (Erster, Zweiter) in die Konsole aus.

```js
console.log("First");
console.log("Second");
```

Im Gegensatz dazu ist eine asynchrone API eine, bei der die API eine Operation starten und sofort zurückkehren (bevor die Operation abgeschlossen ist) wird. Sobald die Operation abgeschlossen ist, verwendet die API einen Mechanismus, um zusätzliche Operationen auszuführen. Zum Beispiel druckt der unten stehende Code "Zweiter, Erster", da die Methode `setTimeout()` zwar zuerst aufgerufen wird und sofort zurückkehrt, die Operation jedoch mehrere Sekunden dauert, um abgeschlossen zu werden.

```js
setTimeout(function () {
  console.log("First");
}, 3000);
console.log("Second");
```

Die Verwendung nicht-blockierender asynchroner APIs ist auf Node sogar noch wichtiger als im Browser, da _Node_ eine einzelfädige, ereignisgesteuerte Ausführungsumgebung ist. "Einzelfädig" bedeutet, dass alle Anfragen an den Server im selben Thread ausgeführt werden (anstatt in separate Prozesse ausgelagert zu werden). Dieses Modell ist äußerst effizient in Bezug auf Geschwindigkeit und Serverressourcen, bedeutet jedoch, dass, wenn eine Ihrer Funktionen synchrone Methoden aufruft, die lange Zeit zum Abschluss benötigen, sie nicht nur die aktuelle Anfrage, sondern jede andere Anfrage blockieren, die von Ihrer Webanwendung bearbeitet wird.

Es gibt mehrere Möglichkeiten für eine asynchrone API, Ihre Anwendung darüber zu benachrichtigen, dass sie abgeschlossen ist. Die gebräuchlichste Methode ist das Registrieren einer Callback-Funktion, wenn Sie die asynchrone API aufrufen, die zurückgerufen wird, wenn die Operation abgeschlossen ist. Dies ist der oben verwendete Ansatz.

> [!NOTE]
> Das Verwenden von Callbacks kann ziemlich "schmutzig" werden, wenn Sie eine Folge von voneinander abhängigen asynchronen Operationen haben, die in der richtigen Reihenfolge ausgeführt werden müssen, da dies zu mehreren Ebenen von verschachtelten Callbacks führt. Dieses Problem ist allgemein als "Callback-Hölle" bekannt. Dieses Problem kann durch gute Codierungspraktiken verringert werden (siehe <http://callbackhell.com/>), Verwendung eines Moduls wie [async](https://www.npmjs.com/package/async) oder Umstrukturierung des Codes zu nativen JavaScript-Features wie [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) und [async/await](/de/docs/Web/JavaScript/Reference/Statements/async_function). Node bietet die [`utils.promisify`](https://nodejs.org/api/util.html#utilpromisifyoriginal)-Funktion an, um die Callback- → Promise-Konvertierung ergonomisch zu handhaben.

> [!NOTE]
> Eine übliche Konvention für Node und Express ist die Verwendung von Fehler-ersten Callbacks. In dieser Konvention ist der erste Wert in Ihren _Callback-Funktionen_ ein Fehlerwert, während nachfolgende Argumente Erfolgsdaten enthalten. Eine gute Erklärung, warum dieser Ansatz nützlich ist, finden Sie in diesem Blog: [The Node.js Way - Understanding Error-First Callbacks](https://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/) (fredkschott.com).

### Erstellen von Routen-Handlern

In unserem _Hallo Welt_ Express-Beispiel (siehe oben) haben wir eine (Callback-) Routen-Handler-Funktion für HTTP `GET`-Anfragen an den Site-Stamm (`'/'`) definiert.

```js
app.get("/", function (req, res) {
  res.send("Hello World!");
});
```

Die Callback-Funktion nimmt eine Anforderung und ein Antwortobjekt als Argumente. In diesem Fall ruft die Methode [`send()`](https://expressjs.com/en/4x/api.html#res.send) auf die Antwort auf, um den String "Hello World!" zurückzugeben. Es gibt eine [Reihe anderer Antwortmethoden](https://expressjs.com/en/guide/routing.html#response-methods), um den Anfrage-/Antwortzyklus zu beenden, beispielsweise könnten Sie [`res.json()`](https://expressjs.com/en/4x/api.html#res.json) aufrufen, um eine JSON-Antwort zu senden, oder [`res.sendFile()`](https://expressjs.com/en/4x/api.html#res.sendFile), um eine Datei zu senden.

> [!NOTE]
> Sie können in den Callback-Funktionen beliebige Argumentnamen verwenden; wenn der Callback aufgerufen wird, ist das erste Argument immer die Anforderung und das zweite immer die Antwort. Es macht Sinn, sie so zu benennen, dass Sie das Objekt, mit dem Sie arbeiten, im Body des Callbacks identifizieren können.

Das _Express-Anwendungsobjekt_ bietet auch Methoden, um Routen-Handler für alle anderen HTTP-Verben zu definieren, die größtenteils auf genau die gleiche Weise verwendet werden:

`checkout()`, `copy()`, **`delete()`**, **`get()`**, `head()`, `lock()`, `merge()`, `mkactivity()`, `mkcol()`, `move()`, `m-search()`, `notify()`, `options()`, `patch()`, **`post()`**, `purge()`, **`put()`**, `report()`, `search()`, `subscribe()`, `trace()`, `unlock()`, `unsubscribe()`.

Es gibt eine spezielle Routing-Methode, `app.all()`, die in Reaktion auf jede HTTP-Methode aufgerufen wird. Diese wird verwendet, um Middleware-Funktionen an einem bestimmten Pfad für alle Anfragemethoden zu laden. Das folgende Beispiel (aus der Express-Dokumentation) zeigt einen Handler, der für Anfragen an `/secret` unabhängig vom verwendeten HTTP-Verb ausgeführt wird (sofern es vom [http-Modul](https://nodejs.org/docs/latest/api/http.html#httpmethods) unterstützt wird).

```js
app.all("/secret", function (req, res, next) {
  console.log("Accessing the secret section…");
  next(); // pass control to the next handler
});
```

Routen ermöglichen es Ihnen, bestimmte Zeichenmuster in einer URL zu erfassen und einige Werte aus der URL zu extrahieren und sie als Parameter an den Routen-Handler weiterzugeben (als Attribute des Anforderungsobjekts, das als Parameter übergeben wird).

Oft ist es nützlich, Routen-Handler für einen bestimmten Teil einer Site zusammenzufassen und sie mit einem gemeinsamen Routen-Präfix zugänglich zu machen (z. B. könnte eine Site mit einem Wiki alle wiki-bezogenen Routen in einer Datei haben und sie mit dem Routen-Präfix _/wiki/_ zugänglich machen). In _Express_ erfolgt dies mit dem [`express.Router`](https://expressjs.com/en/guide/routing.html#express-router)-Objekt. Zum Beispiel können wir unsere Wiki-Route in einem Modul namens **wiki.js** erstellen und dann das `Router`-Objekt wie folgt exportieren:

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
> Das Hinzufügen von Routen zum `Router`-Objekt ist genauso wie das Hinzufügen von Routen zum `app`-Objekt (wie zuvor gezeigt).

Um den Router in unserer Haupt-App-Datei zu verwenden, würden wir dann das Routemodul (**wiki.js**) mit `require()` importieren und `use()` auf die \_Express-Anwendung anwenden, um den Router zu der Middleware-Verarbeitungskette hinzuzufügen. Die beiden Routen wären dann unter `/wiki/` und `/wiki/about/` erreichbar.

```js
const wiki = require("./wiki.js");
// …
app.use("/wiki", wiki);
```

Wir zeigen Ihnen später in dem verlinkten Abschnitt [Routen und Controller](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes) viel mehr über die Arbeit mit Routen und insbesondere über die Verwendung des `Router`.

### Verwendung von Middleware

Middleware wird in Express-Apps intensiv verwendet, für Aufgaben vom Bereitstellen statischer Dateien über Fehlerbehandlung bis hin zum Komprimieren von HTTP-Antworten. Während Routenfunktionen den HTTP-Anfrage-Antwort-Zyklus beenden, indem sie eine Antwort an den HTTP-Client zurückgeben, führen Middleware-Funktionen _typischerweise_ eine Operation an der Anfrage oder Antwort aus und rufen dann die nächste Funktion in der "Kette" auf, die mehr Middleware oder einen Routen-Handler sein kann. Die Reihenfolge, in der Middleware aufgerufen wird, liegt im Ermessen des App-Entwicklers.

> [!NOTE]
> Die Middleware kann jede Operation durchführen, jeden Code ausführen, Änderungen am Anfrage- und Antwortobjekt vornehmen und kann auch den Anfrage-Antwort-Zyklus beenden. Wenn es den Zyklus nicht beendet, muss es `next()` aufrufen, um die Steuerung an die nächste Middleware-Funktion zu übergeben (oder die Anfrage bleibt hängen).

Die meisten Apps verwenden _Drittanbieter_-Middleware, um häufige Webentwicklungstasks wie die Arbeit mit Cookies, Sitzungen, Benutzeranmeldung, Zugriff auf `POST`- und JSON-Daten, Protokollierung usw. zu vereinfachen. Sie können eine [Liste von Middleware-Paketenz](https://expressjs.com/en/resources/middleware.html) einsehen, die vom Express-Team gepflegt werden (die auch andere beliebte Drittanbieter-Pakete enthält). Weitere Express-Pakete sind im npm-Paketmanager verfügbar.

Um Drittanbieter-Middleware zu verwenden, müssen Sie diese zuerst mit npm in Ihre App installieren.
Zum Beispiel müssten Sie, um die [morgan](https://expressjs.com/en/resources/middleware/morgan.html) HTTP-Anfrage-Protokollierungs-Middleware zu installieren, dies tun:

```bash
npm install morgan
```

Dann könnten Sie `use()` auf das _Express-Anwendungsobjekt_ aufrufen, um die Middleware zur Kette hinzuzufügen:

```js
const express = require("express");
const logger = require("morgan");
const app = express();
app.use(logger("dev"));
// …
```

> [!NOTE]
> Middleware- und Routing-Funktionen werden in der Reihenfolge aufgerufen, in der sie deklariert sind. Bei einigen Middleware ist die Reihenfolge wichtig (zum Beispiel, wenn Session-Middleware von Cookie-Middleware abhängt, muss der Cookie-Handler zuerst hinzugefügt werden). Fast immer wird für Middleware aufgerufen, bevor Routen eingerichtet werden, oder Ihre Routen-Handler haben keinen Zugriff auf die von Ihrer Middleware hinzugefügte Funktionalität.

Sie können Ihre eigenen Middleware-Funktionen schreiben, und Sie werden wahrscheinlich dazu gezwungen sein (wenn auch nur, um Fehlerbehandlungscode zu erstellen). Der **einzige** Unterschied zwischen einer Middleware-Funktion und einem Routen-Handler-Callback besteht darin, dass Middleware-Funktionen ein drittes Argument `next` haben, das Middleware-Funktionen erwartet wird aufzurufen, wenn sie nicht diejenigen sind, die den Anfrage-Zyklus abschließen (wenn die Middleware-Funktion aufgerufen wird, enthält dies die _nächste_ Funktion, die aufgerufen werden muss).

Sie können eine Middleware-Funktion zur Verarbeitungskette für _alle Antworten_ mit `app.use()` hinzufügen oder für ein spezifisches HTTP-Verb verwenden, indem Sie die zugehörige Methode verwenden: `app.get()`, `app.post()` usw. Routen werden in beiden Fällen auf dieselbe Weise angegeben, obwohl die Route optional ist, wenn `app.use()` aufgerufen wird.

Das folgende Beispiel zeigt, wie Sie die Middleware-Funktion mit beiden Ansätzen und mit/ohne Route hinzufügen können.

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
> Oben definieren wir die Middleware-Funktion separat und setzen sie dann als Callback. In unserer vorherigen Routen-Handler-Funktion haben wir die Callback-Funktion deklariert, als sie verwendet wurde. In JavaScript ist jede Herangehensweise gültig.

Die Express-Dokumentation hat eine Menge weiterer ausgezeichneter Dokumentationen über [Verwendung](https://expressjs.com/en/guide/using-middleware.html) und [Erstellung](https://expressjs.com/en/guide/writing-middleware.html) von Express-Middleware.

### Bereitstellen statischer Dateien

Sie können die [express.static](https://expressjs.com/en/4x/api.html#express.static)-Middleware verwenden, um statische Ressourcen zu bedienen, einschließlich Ihrer Bilder, CSS und JavaScript-Dateien (`static()` ist die einzige Middleware-Funktion, die tatsächlich **Teil** von _Express_ ist). Zum Beispiel würden Sie die folgende Zeile verwenden, um Bilder, CSS-Dateien und JavaScript-Dateien aus einem Verzeichnis namens '**public'** zu bedienen, das sich auf der gleichen Ebene befindet, auf der Sie Node aufrufen:

```js
app.use(express.static("public"));
```

Alle Dateien im öffentlichen Verzeichnis werden bereitgestellt, indem deren Dateiname (_relativ_ zum Basis- "public"-Verzeichnis) zur Basis-URL hinzugefügt wird. Also zum Beispiel:

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

Sie können auch ein virtuelles Präfix für Ihre statischen URLs erstellen, anstatt die Dateien zur Basis-URL hinzuzufügen. Zum Beispiel legen wir hier einen [Mount-Pfad](https://expressjs.com/en/4x/api.html#app.use) fest, so dass die Dateien mit dem Präfix "/media" geladen werden:

```js
app.use("/media", express.static("public"));
```

Jetzt können Sie die Dateien, die sich im `public`-Verzeichnis befinden, unter dem Präfix `/media` laden.

```plain
http://localhost:3000/media/images/dog.jpg
http://localhost:3000/media/video/cat.mp4
http://localhost:3000/media/cry.mp3
```

> [!NOTE]
> Siehe auch [Bereitstellen statischer Dateien in Express](https://expressjs.com/en/starter/static-files.html).

### Fehlerbehandlung

Fehler werden durch eine oder mehrere spezielle Middleware-Funktionen behandelt, die vier Argumente haben, anstelle der üblichen drei: `(err, req, res, next)`. Zum Beispiel:

```js
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

Diese können erforderliche Inhalte zurückgeben, müssen jedoch nach allen anderen `app.use()`- und Routenaufrufen aufgerufen werden, damit sie die letzten Middleware-Funktionen im Anfrageprozess sind!

Express verfügt über einen eingebauten Fehler-Handler, der sich um alle verbleibenden Fehler kümmert, die in der App auftreten könnten. Diese standardmäßige Fehlerbehandlungs-Middleware-Funktion wird am Ende des Middleware-Funktionsstapels hinzugefügt. Wenn Sie einen Fehler an `next()` übergeben und ihn nicht in einem Fehler-Handler behandeln, wird er vom eingebauten Fehler-Handler behandelt; der Fehler wird mit dem Stack-Trace an den Client geschrieben.

> [!NOTE]
> Der Stack-Trace ist in der Produktivumgebungen nicht enthalten. Um ihn im Produktionsmodus auszuführen, müssen Sie die Umgebungsvariable `NODE_ENV` auf `"production"` setzen.

> [!NOTE]
> HTTP404 und andere "Fehler"-Statuscodes werden nicht als Fehler behandelt. Wenn Sie diese behandeln möchten, können Sie eine Middleware-Funktion hinzufügen, um dies zu tun. Für weitere Informationen siehe die [FAQ](https://expressjs.com/en/starter/faq.html#how-do-i-handle-404-responses).

Für weitere Informationen siehe [Fehlerbehandlung](https://expressjs.com/en/guide/error-handling.html) (Express Dokumentation).

### Verwendung von Datenbanken

_Express_ Apps können jeden Datenbankmechanismus verwenden, der von _Node_ unterstützt wird (_Express_ selbst definiert kein bestimmtes zusätzliches Verhalten/an Anforderung für die Datenbankverwaltung). Es gibt viele Möglichkeiten, einschließlich PostgreSQL, MySQL, Redis, SQLite, MongoDB usw.

Um diese zu verwenden, müssen Sie zuerst den Datenbanktreiber mit npm installieren. Zum Beispiel, um den Treiber für das beliebte NoSQL MongoDB zu installieren, würden Sie den Befehl verwenden:

```bash
npm install mongodb
```

Die Datenbank selbst kann lokal oder auf einem Cloud-Server installiert werden. In Ihrem Express-Code benötigen Sie den Treiber, stellen Sie eine Verbindung zur Datenbank her und führen Sie dann Erstellen-, Lesen-, Aktualisieren- und Löschen-Operationen (CRUD) durch. Das Beispiel unten (aus der Express-Dokumentation) zeigt, wie Sie "Säugetier"-Datensätze mit MongoDB suchen können.

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

Ein weiterer beliebter Ansatz ist der indirekte Zugriff auf Ihre Datenbank über einen Objekt-Relationalen Mapper ("ORM"). Bei diesem Ansatz definieren Sie Ihre Daten als "Objekte" oder "Modelle", und der ORM mappt diese auf das zugrunde liegende Datenbankformat. Dieser Ansatz hat den Vorteil, dass Sie als Entwickler weiterhin in JavaScript-Objekten denken können, anstatt an Datenbanksemantik, und dass es einen offensichtlichen Ort gibt, um die gültigkeit und Prüfung eingehender Daten vorzunehmen. Wir werden später in einem anderen Artikel mehr über Datenbanken sprechen.

Für weitere Informationen siehe [Datenbankintegration](https://expressjs.com/en/guide/database-integration.html) (Express Dokumentation).

### Rendern von Daten (Ansichten)

Template Engines (auch als "View Engines" in _Express_ bezeichnet) ermöglichen es Ihnen, die _Struktur_ eines Ausgabedokuments in einer Vorlage anzugeben, wobei Platzhalter für Daten verwendet werden, die beim Generieren einer Seite ausgefüllt werden. Vorlagen werden oft verwendet, um HTML zu erstellen, können aber auch andere Dokumenttypen erstellen.

Express unterstützt eine Reihe von Template-Engines, insbesondere Pug (früher "Jade"), Mustache und EJS. Jede hat ihre eigenen Stärken zur Adressierung bestimmter Anwendungsfälle (relative Vergleiche können leicht über eine Internetrecherche gefunden werden).
Der Express-Anwendungsgenerator verwendet Jade als Standard, unterstützt jedoch auch mehrere andere.

In Ihrem Anwendungseinstellungen setzen Sie die zu verwendende Template-Engine und den Speicherort, an dem Express nach Vorlagen suchen soll, unter den Einstellungen 'views' und 'view engine', so wie unten gezeigt (Sie müssen das Paket mit Ihrer Template-Bibliothek auch installieren!)

```js
const express = require("express");
const path = require("path");
const app = express();

// Set directory to contain the templates ('views')
app.set("views", path.join(__dirname, "views"));

// Set view engine to use, in this case 'some_template_engine_name'
app.set("view engine", "some_template_engine_name");
```

Das Aussehen der Vorlage hängt davon ab, welche Engine Sie verwenden. Angenommen, Sie haben eine Vorlagendatei namens "index.\<template_extension>", die Platzhalter für Datenvariablen namens 'title' und "message" enthält, würden Sie [`Response.render()`](https://expressjs.com/en/4x/api.html#res.render) in einer Routenhandler-Funktion aufrufen, um die HTML-Antwort zu erstellen und zu senden:

```js
app.get("/", function (req, res) {
  res.render("index", { title: "About dogs", message: "Dogs rock!" });
});
```

Für weitere Informationen siehe [Verwendung von Vorlage-Engines mit Express](https://expressjs.com/en/guide/using-template-engines.html) (Express Dokumentation).

### Dateistruktur

Express macht keine Annahmen in Bezug auf die Struktur oder welche Komponenten Sie verwenden. Routen, Ansichten, statische Dateien und andere anwendungsspezifische Logiken können in einer beliebigen Anzahl von Dateien mit jeder beliebigen Verzeichnisstruktur leben. Während es durchaus möglich ist, die gesamte _Express_-Anwendung in einer Datei zu haben, macht es normalerweise Sinn, Ihre Anwendung in Dateien basierend auf Funktion (z. B. Kontoverwaltung, Blogs, Diskussionsforen) und architektonischem Problembereich (z. B. Modell, Ansicht oder Controller, wenn Sie eine {{Glossary("MVC", "MVC-Architektur")}} verwenden) aufzuteilen.

In einem späteren Thema werden wir den _Express Application Generator_ verwenden, der ein modulares App-Skelett erstellt, das wir leicht erweitern können, um Webanwendungen zu erstellen.

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben den ersten Schritt Ihrer Express/Node-Reise abgeschlossen! Sie sollten nun die Hauptvorteile von Express und Node verstehen und grob wissen, wie die Hauptbestandteile einer Express-App aussehen könnten (Routen, Middleware, Fehlerbehandlung und Vorlagen-Code). Sie sollten auch verstehen, dass mit Express als unmeinungsstarkem Framework der Weg, wie Sie diese Teile zusammenfügen und die Bibliotheken, die Sie verwenden, weitgehend Ihnen überlassen sind!

Natürlich ist Express bewusst ein sehr leichtgewichtiges Webanwendungsframework, sodass ein Großteil seines Nutzens und Potenzials von Drittanbieter-Bibliotheken und Funktionen stammt. Wir werden diese ausführlicher in den folgenden Artikeln betrachten. In unserem nächsten Artikel werden wir uns das Einrichten einer Node-Entwicklungsumgebung anschauen, sodass Sie beginnen können, einige Express-Codes in Aktion zu sehen.

## Siehe auch

- [Module](https://nodejs.org/api/modules.html#modules_modules) (Node API Dokumentation)
- [Express](https://expressjs.com/) (Homepage)
- [Grundlegendes Routing](https://expressjs.com/en/starter/basic-routing.html) (Express Dokumentation)
- [Routing-Leitfaden](https://expressjs.com/en/guide/routing.html) (Express Dokumentation)
- [Verwendung von Vorlagen-Engines mit Express](https://expressjs.com/en/guide/using-template-engines.html) (Express Dokumentation)
- [Verwendung von Middleware](https://expressjs.com/en/guide/using-middleware.html) (Express Dokumentation)
- [Middleware für die Verwendung in Express-Apps schreiben](https://expressjs.com/en/guide/writing-middleware.html) (Express Dokumentation)
- [Datenbank-Integration](https://expressjs.com/en/guide/database-integration.html) (Express Dokumentation)
- [Bereitstellung statischer Dateien in Express](https://expressjs.com/en/starter/static-files.html) (Express Dokumentation)
- [Fehlerbehandlung](https://expressjs.com/en/guide/error-handling.html) (Express Dokumentation)

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
