---
title: Einführung in Express/Node
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction
l10n:
  sourceCommit: 4238ce5fbb56cd9953a558b8243a5623b98a2f18
---

{{LearnSidebar}}{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

In diesem ersten Express-Artikel beantworten wir die Fragen „Was ist Node?“ und „Was ist Express?“ und geben Ihnen einen Überblick darüber, was das Express-Web-Framework besonders macht. Wir skizzieren die Hauptmerkmale und zeigen Ihnen einige der wichtigsten Bausteine einer Express-Anwendung (obwohl Sie zu diesem Zeitpunkt noch keine Entwicklungsumgebung zur Verfügung haben, um es zu testen).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein allgemeines Verständnis der <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps">programmierung von serverseitigen Websites</a> und insbesondere der Mechanismen von <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview">Client-Server-Interaktionen auf Websites</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit dem, was Express ist und wie es mit Node zusammenarbeitet, welche Funktionalität es bietet und welche Hauptbausteine eine Express-Anwendung hat.
      </td>
    </tr>
  </tbody>
</table>

## Einführung in Node

[Node](https://nodejs.org/) (oder formell _Node.js_) ist eine quelloffene, plattformübergreifende Laufzeitumgebung, die Entwicklern ermöglicht, serverseitige Werkzeuge und Anwendungen aller Art in {{Glossary("JavaScript", "JavaScript")}} zu erstellen. Die Laufzeitumgebung ist für die Verwendung außerhalb eines Browser-Kontexts (d.h. direkt auf einem Computer oder Server-Betriebssystem) konzipiert. Daher verzichtet die Umgebung auf browser-spezifische JavaScript-APIs und bietet Unterstützung für traditionelle Betriebssystem-APIs einschließlich HTTP- und Dateisystembibliotheken.

Aus der Perspektive der Webserver-Entwicklung bietet Node eine Reihe von Vorteilen:

- Hervorragende Leistung! Node wurde entwickelt, um den Durchsatz und die Skalierbarkeit in Webanwendungen zu optimieren und ist eine gute Lösung für viele häufige Webentwicklungsprobleme (z. B. Echtzeit-Webanwendungen).
- Code wird in "einfachem, althergebrachtem JavaScript" geschrieben, was bedeutet, dass weniger Zeit mit dem Sprachkontextwechsel zwischen Client-seitigem und Server-seitigem Code verbracht wird.
- JavaScript ist eine relativ neue Programmiersprache und profitiert von Verbesserungen im Sprachen-Design im Vergleich zu anderen traditionellen Webserver-Sprachen (z. B. Python, PHP usw.). Viele andere neue und beliebte Sprachen kompilieren/konvertieren nach JavaScript, sodass Sie auch TypeScript, CoffeeScript, ClojureScript, Scala, LiveScript usw. verwenden können.
- Der Node-Paketmanager (npm) bietet Zugang zu Hunderttausenden von wiederverwendbaren Paketen. Es hat auch eine erstklassige Abhängigkeitsauflösung und kann auch verwendet werden, um die meisten Teile der Build-Toolchain zu automatisieren.
- Node.js ist portabel. Es ist auf Microsoft Windows, macOS, Linux, Solaris, FreeBSD, OpenBSD, WebOS und NonStop OS verfügbar. Darüber hinaus wird es von vielen Webhosting-Anbietern gut unterstützt, die oft spezifische Infrastrukturen und Dokumentationen für das Hosting von Node-Sites bereitstellen.
- Es hat ein sehr aktives Ökosystem von Drittanbietern und eine Entwickler-Community, mit vielen Menschen, die bereit sind, zu helfen.

Sie können Node.js verwenden, um mit dem Node HTTP-Paket einen einfachen Webserver zu erstellen.

### Hello Node.js

Das folgende Beispiel erstellt einen Webserver, der auf jede Art von HTTP-Anfrage unter der URL `http://127.0.0.1:8000/` hört — wenn eine Anfrage empfangen wird, antwortet das Skript mit dem Zeichenfolgetext: "Hello World". Wenn Sie Node bereits installiert haben, können Sie die folgenden Schritte ausprobieren:

1. Öffnen Sie das Terminal (auf Windows öffnen Sie das Befehlszeilenprogramm)
2. Erstellen Sie den Ordner, in dem Sie das Programm speichern möchten, z. B. `test-node`, und betreten Sie ihn, indem Sie den folgenden Befehl in Ihr Terminal eingeben:

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

Navigieren Sie schließlich zu `http://localhost:8000` in Ihrem Webbrowser; Sie sollten den Text "**Hello World**" in der oberen linken Ecke einer ansonsten leeren Webseite sehen.

## Webframeworks

Andere gängige Webentwicklungsaufgaben werden nicht direkt von Node unterstützt. Wenn Sie eine spezifische Verarbeitung für verschiedene HTTP-Verbs (z. B. `GET`, `POST`, `DELETE` usw.) hinzufügen, Anfragen an verschiedenen URL-Pfaden ("Routen") getrennt behandeln, statische Dateien bereitstellen oder Templates verwenden möchten, um die Antwort dynamisch zu erstellen, wird Ihnen Node allein nicht viel nützen. Sie müssen entweder den Code selbst schreiben, oder Sie können das Rad nicht neu erfinden und ein Webframework verwenden!

## Einführung in Express

[Express](https://expressjs.com/) ist das beliebteste Node.js-Webframework und die zugrunde liegende Bibliothek für eine Reihe anderer beliebter Node.js-Frameworks. Es bietet Mechanismen zum:

- Schreiben von Handlern für Anfragen mit verschiedenen HTTP-Verbs an verschiedenen URL-Pfaden (Routen).
- Integrieren von "View"-Rendering-Engines, um Antworten zu generieren, indem Daten in Templates eingefügt werden.
- Festlegen häufiger Webanwendungseinstellungen wie den zu verwendenden Port für Verbindungen und den Speicherort der Templates, die für die Antwortgenerierung verwendet werden.
- Hinzufügen zusätzlicher Anfragenverarbeitungs-"Middleware" an jedem Punkt innerhalb der Anfragenbearbeitungspipeline.

Obwohl _Express_ selbst ziemlich minimalistisch ist, haben Entwickler kompatible Middleware-Pakete erstellt, um fast jedes Webentwicklungsproblem zu lösen. Es gibt Bibliotheken für den Umgang mit Cookies, Sitzungen, Benutzeranmeldungen, URL-Parametern, `POST`-Daten, Sicherheitsheadern und _vielen_ mehr. Sie finden eine Liste der von Express verwalteten Middleware-Pakete unter [Express Middleware](https://expressjs.com/en/resources/middleware.html) (zusammen mit einer Liste einiger beliebter 3rd-Party-Pakete).

> [!NOTE]
> Diese Flexibilität ist ein zweischneidiges Schwert. Es gibt Middleware-Pakete, um fast jedes Problem oder jede Anforderung zu lösen, aber die richtigen Pakete auszuwählen, kann manchmal eine Herausforderung sein. Es gibt auch keinen "richtigen Weg", eine Anwendung zu strukturieren, und viele Beispiele, die Sie im Internet finden könnten, sind nicht optimal oder zeigen nur einen kleinen Teil dessen, was Sie tun müssen, um eine Webanwendung zu entwickeln.

## Woher kommen Node und Express?

Node wurde 2009 erstmals ausschließlich für Linux veröffentlicht. Der npm-Paketmanager wurde 2010 veröffentlicht, und die native Windows-Unterstützung wurde 2012 hinzugefügt. Wenn Sie mehr erfahren möchten, tauchen Sie in [Wikipedia](https://en.wikipedia.org/wiki/Node.js#History) ein.

Express wurde im November 2010 erstmals veröffentlicht und befindet sich derzeit in der Hauptversion 4 der API. Sie können im [Changelog](https://expressjs.com/en/changelog/4x.html) nachsehen, um Informationen zu den Änderungen in der aktuellen Version zu erhalten, und auf [GitHub](https://github.com/expressjs/express/blob/master/History.md) finden Sie detailliertere historische Versionshinweise.

## Wie populär sind Node und Express?

Die Popularität eines Webframeworks ist wichtig, weil sie ein Indikator dafür ist, ob es weiter gepflegt wird und welche Ressourcen in Bezug auf Dokumentation, Zusatzbibliotheken und technischen Support verfügbar sind.

Es gibt keine leicht verfügbare und endgültige Messgröße für die Beliebtheit serverseitiger Frameworks (obwohl Sie die Beliebtheit mithilfe von Mechanismen wie der Anzahl von GitHub-Projekten und Stack Overflow-Fragen für jede Plattform schätzen können). Eine bessere Frage ist, ob Node und Express "beliebt genug" sind, um die Probleme unpopulärer Plattformen zu vermeiden. Entwickeln sie sich weiter? Können Sie Hilfe bekommen, wenn Sie sie brauchen? Gibt es eine Möglichkeit, bezahlte Arbeit zu bekommen, wenn Sie Express lernen?

Basierend auf der Anzahl hochkarätiger Unternehmen, die Express nutzen, der Anzahl der Personen, die zum Code beitragen, und der Anzahl der Menschen, die sowohl kostenlosen als auch kostenpflichtigen Support anbieten, ist _Express_ ein beliebtes Framework!

## Ist Express meinungsstark?

Webframeworks bezeichnen sich oft selbst als „meinungsstark“ oder „unvoreingenommen“.

Meinungsstarke Frameworks sind solche, die eine Meinung darüber haben, wie eine bestimmte Aufgabe "richtig" ausgeführt werden kann. Sie unterstützen oft die schnelle Entwicklung _in einem bestimmten Bereich_ (Lösung von Problemen eines bestimmten Typs), weil der richtige Weg, etwas zu tun, normalerweise gut verstanden und dokumentiert ist. Sie können jedoch weniger flexibel bei der Lösung von Problemen außerhalb ihres Hauptbereichs sein und oft weniger Auswahlmöglichkeiten für die zu verwendenden Komponenten und Ansätze anbieten.

Unvoreingenommene Frameworks hingegen haben weit weniger Einschränkungen für den besten Weg, Komponenten zusammenzufügen, um ein Ziel zu erreichen, oder sogar, welche Komponenten verwendet werden sollten. Sie erleichtern es Entwicklern, die am besten geeigneten Werkzeuge für eine bestimmte Aufgabe zu verwenden, allerdings zu dem Preis, dass Sie diese Komponenten selbst finden müssen.

Express ist unvoreingenommen. Sie können fast jede kompatible Middleware, die Sie möchten, in die Anfragenbearbeitungskette einfügen, in nahezu jeder beliebigen Reihenfolge. Sie können die App in einer Datei oder in mehreren Dateien und mit jeder Verzeichnisstruktur organisieren. Sie könnten manchmal das Gefühl haben, zu viele Auswahlmöglichkeiten zu haben!

## Wie sieht Express-Code aus?

In einer traditionellen datengetriebenen Website wartet eine Webanwendung auf HTTP-Anfragen vom Webbrowser (oder einem anderen Client). Wenn eine Anfrage eingeht, arbeitet die Anwendung heraus, welche Aktion basierend auf dem URL-Muster und möglicherweise assoziierten Informationen in `POST`- oder `GET`-Daten erforderlich ist. Abhängig davon, was erforderlich ist, kann sie dann Informationen aus einer Datenbank lesen oder schreiben oder andere Aufgaben ausführen, die erforderlich sind, um die Anfrage zu erfüllen. Die Anwendung wird dann eine Antwort an den Webbrowser zurückgeben, oft dynamisch eine HTML-Seite für den Browser zu erstellen, indem die abgerufenen Daten in Platzhalter in einem HTML-Template eingefügt werden.

Express bietet Methoden, um festzulegen, welche Funktion für ein bestimmtes HTTP-Verb (`GET`, `POST`, `PUT` usw.) und URL-Muster ("Route") aufgerufen wird, und Methoden, um festzulegen, welche Template-("View")-Engine verwendet wird, wo sich Template-Dateien befinden und welches Template zur Erstellung einer Antwort verwendet werden soll. Sie können Express-Middleware verwenden, um Unterstützung für Cookies, Sitzungen und Benutzer sowie das Abrufen von `POST`/`GET`-Parametern hinzuzufügen. Sie können jeden D Datenbank-Mechanismus verwenden, der von Node unterstützt wird (Express definiert kein datenbankspezifisches Verhalten).

Die folgenden Abschnitte erklären einige der häufigsten Dinge, die Sie bei der Arbeit mit _Express_ und _Node_-Code sehen werden.

### Helloworld Express

Zuerst betrachten wir das Standard-Express-[Hello World](https://expressjs.com/en/starter/hello-world.html)-Beispiel (wir diskutieren jeden Teil davon unten und in den folgenden Abschnitten).

> [!NOTE]
> Wenn Sie Node und Express bereits installiert haben (oder wenn Sie sie wie im [nächsten Artikel](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) gezeigt installieren), können Sie diesen Code in einer Textdatei namens **app.js** speichern und in einer Bash-Befehlszeilenumgebung mit folgendem Befehl ausführen:
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

Die ersten beiden Zeilen `require()` (importieren) das Express-Modul und erstellen eine [Express-Anwendung](https://expressjs.com/en/4x/api.html#app). Dieses Objekt, das traditionell als „app“ bezeichnet wird, verfügt über Methoden zum Routing von HTTP-Anfragen, Konfigurieren von Middleware, Rendern von HTML-Ansichten, Registrieren einer Template-Engine und Ändern von [Anwendungseinstellungen](https://expressjs.com/en/4x/api.html#app.settings.table), die steuern, wie die Anwendung funktioniert (z. B. der Modus der Umgebung, ob Routendefinitionen groß-/kleinschreibungsempfindlich sind usw.).

Der mittlere Teil des Codes (die drei Zeilen, die mit `app.get` beginnen) zeigt eine _Routendefinition_. Die Methode `app.get()` gibt eine Callback-Funktion an, die immer dann aufgerufen wird, wenn eine HTTP-`GET`-Anfrage bei einem Pfad (`'/'`) relativ zur Site-Wurzel empfangen wird. Die Callback-Funktion nimmt ein Anfragen- und ein Antwortobjekt als Argumente und ruft [`send()`](https://expressjs.com/en/4x/api.html#res.send) auf der Antwort auf, um die Zeichenfolge „Hello World!“ zurückzugeben.

Der letzte Block startet den Server auf einem angegebenen Port ('3000') und gibt einen Log-Kommentar in die Konsole aus. Wenn der Server läuft, könnten Sie zu `localhost:3000` in Ihrem Browser gehen, um die Beispielantwort zu sehen.

### Importieren und Erstellen von Modulen

Ein Modul ist eine JavaScript-Bibliothek/Datei, die Sie mit der `require()`-Funktion von Node in anderen Code importieren können. _Express_ selbst ist ein Modul, ebenso wie die Middleware- und Datenbankbibliotheken, die wir in unseren _Express_-Anwendungen verwenden.

Der folgende Code zeigt, wie wir ein Modul nach Name importieren, am Beispiel des _Express_-Frameworks. Zuerst rufen wir die `require()`-Funktion auf, geben den Namen des Moduls als String (`'express'`) an und rufen das zurückgegebene Objekt auf, um eine [Express-Anwendung](https://expressjs.com/en/4x/api.html#app) zu erstellen. Wir können dann auf die Eigenschaften und Funktionen des Anwendungsobjekts zugreifen.

```js
const express = require("express");
const app = express();
```

Sie können auch Ihre eigenen Module erstellen, die auf die gleiche Weise importiert werden können.

> [!NOTE]
> Sie _möchten_ Ihre eigenen Module erstellen, weil dies Ihnen hilft, Ihren Code in verwaltbare Teile zu organisieren — eine monolithische Ein-Datei-Anwendung ist schwer zu verstehen und zu pflegen. Die Verwendung von Modulen hilft Ihnen auch, Ihren Namensraum zu verwalten, weil nur die Variablen, die Sie ausdrücklich exportieren, importiert werden, wenn Sie ein Modul verwenden.

Um Objekte außerhalb eines Moduls verfügbar zu machen, müssen Sie sie einfach als zusätzliche Eigenschaften des `exports`-Objekts freigeben. Zum Beispiel ist das _square.js_-Modul unten eine Datei, die `area()`- und `perimeter()`-Methoden exportiert:

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
> Sie können auch einen absoluten Pfad zum Modul angeben (oder einen Namen, wie wir es zunächst gemacht haben).

Wenn Sie ein vollständiges Objekt in einer einzigen Zuweisung anstelle des Aufbaus auf einer Eigenschaft nach der anderen exportieren möchten, weisen Sie es `module.exports` zu, wie unten gezeigt (Sie können dies auch tun, um die Wurzel des `exports`-Objekts zu einem Konstruktor oder einer anderen Funktion zu machen):

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
> Sie können `exports` als [Abkürzung](https://nodejs.org/api/modules.html#modules_exports_shortcut) zu `module.exports` innerhalb eines gegebenen Moduls betrachten. Tatsächlich ist `exports` nur eine Variable, die auf den Wert von `module.exports` initialisiert wird, bevor das Modul ausgewertet wird. Dieser Wert ist eine Referenz auf ein Objekt (in diesem Fall ein leeres Objekt). Das bedeutet, dass `exports` eine Referenz auf dasselbe Objekt enthält, auf das `module.exports` verweist. Es bedeutet auch, dass durch die Zuweisung eines anderen Wertes zu `exports` es nicht mehr an `module.exports` gebunden ist.

Für viel mehr Informationen zu Modulen siehe [Module](https://nodejs.org/api/modules.html#modules_modules) (Node-API-Dokumentation).

### Verwendung von asynchronen APIs

JavaScript-Code verwendet häufig asynchrone anstelle der synchronen APIs für Operationen, die möglicherweise einige Zeit in Anspruch nehmen können. Eine synchrone API ist eine, bei der jede Operation abgeschlossen sein muss, bevor die nächste Operation starten kann. Zum Beispiel sind die folgenden Protokollfunktionen synchron und geben den Text in der richtigen Reihenfolge in die Konsole aus (Erstens, Zweitens).

```js
console.log("First");
console.log("Second");
```

Eine asynchrone API hingegen ist eine, bei der die API eine Operation startet und sofort zurückkehrt (bevor die Operation abgeschlossen ist). Sobald die Operation abgeschlossen ist, wird die API einen Mechanismus verwenden, um zusätzliche Operationen durchzuführen. Zum Beispiel wird der folgende Code "Zweitens, Erstens" ausgeben, weil auch wenn die `setTimeout()`-Methode zuerst aufgerufen wird und sofort zurückkehrt, die Operation erst einige Sekunden später abgeschlossen wird.

```js
setTimeout(function () {
  console.log("First");
}, 3000);
console.log("Second");
```

Die Verwendung von nicht blockierenden asynchronen APIs ist bei Node noch wichtiger als im Browser, da _Node_ eine einsträngige, ereignisgesteuerte Ausführungsumgebung ist. "Einsträngig" bedeutet, dass alle Anfragen an den Server im gleichen Thread ausgeführt werden (anstatt in separate Prozesse abgezweigt zu werden). Dieses Modell ist extrem effizient in Bezug auf Geschwindigkeit und Server-Ressourcen, aber es bedeutet, dass, wenn eine Ihrer Funktionen synchrone Methoden aufruft, die lange Zeit in Anspruch nimmt, sie nicht nur die aktuelle Anfrage blockieren wird, sondern jede andere Anfrage, die von Ihrer Webanwendung bearbeitet wird.

Es gibt eine Reihe von Möglichkeiten, wie eine asynchrone API Ihre Anwendung benachrichtigen kann, dass sie abgeschlossen ist. Der häufigste Weg ist, dass Sie eine Rückruffunktion registrieren, wenn Sie die asynchrone API aufrufen, die aufgerufen wird, wenn die Operation abgeschlossen ist. Dies ist der oben verwendete Ansatz.

> [!NOTE]
> Die Verwendung von Rückrufen kann recht „unübersichtlich“ sein, wenn Sie eine Reihe von abhängigen asynchronen Operationen haben, die in der Reihenfolge durchgeführt werden müssen, weil dies zu mehreren Ebenen von geschachtelten Rückrufen führt. Dieses Problem ist allgemein als „Callback-Hölle“ bekannt. Dieses Problem kann durch gute Programmierpraktiken (siehe <http://callbackhell.com/>), durch die Verwendung eines Moduls wie [async](https://www.npmjs.com/package/async) oder durch das Refactoring des Codes in native JavaScript-Funktionen wie [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) und [async/await](/de/docs/Web/JavaScript/Reference/Statements/async_function) reduziert werden. Node bietet die Funktion [`utils.promisify`](https://nodejs.org/api/util.html#utilpromisifyoriginal) an, um die Rückruf-> Promise-Umwandlung ergonomisch zu machen.

> [!NOTE]
> Eine übliche Konvention in Node und Express ist die Verwendung von fehlerzuerst Rückrufen. Nach dieser Konvention ist der erste Wert in Ihren _Rückruffunktionen_ ein Fehlerwert, während nachfolgende Argumente Erfolgsdaten enthalten. In diesem Blog gibt es eine gute Erklärung, warum dieser Ansatz nützlich ist: [The Node.js Way - Understanding Error-First Callbacks](https://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/) (fredkschott.com).

### Erstellen von Routenhandlern

In unserem _Hello World_-Express-Beispiel (siehe oben) haben wir eine (Callback-)Routenhandler-Funktion für HTTP-`GET`-Anfragen an die Site-Wurzel (`'/'`) definiert.

```js
app.get("/", function (req, res) {
  res.send("Hello World!");
});
```

Die Callback-Funktion nimmt ein Anfragen- und ein Antwortobjekt als Argumente. In diesem Fall wird die Methode [`send()`](https://expressjs.com/en/4x/api.html#res.send) auf der Antwort aufgerufen, um die Zeichenfolge „Hello World!“ zurückzugeben. Es gibt [eine Reihe anderer Antwortmethoden](https://expressjs.com/en/guide/routing.html#response-methods), um den Anfragen-/Antwortzyklus zu beenden; zum Beispiel könnten Sie [`res.json()`](https://expressjs.com/en/4x/api.html#res.json) aufrufen, um eine JSON-Antwort zu senden oder [`res.sendFile()`](https://expressjs.com/en/4x/api.html#res.sendFile) um eine Datei zu senden.

> [!NOTE]
> Sie können in den Callback-Funktionen beliebige Argumentnamen verwenden; wenn der Callback aufgerufen wird, wird das erste Argument immer die Anfrage und das zweite immer die Antwort sein. Es macht Sinn, sie so zu benennen, dass Sie das Objekt identifizieren können, an dem Sie im Callback arbeiten.

Das _Express-Anwendungsobjekt_ bietet auch Methoden zur Definition von Routenhandlern für alle anderen HTTP-Verb, die meist auf die gleiche Weise verwendet werden:

`checkout()`, `copy()`, **`delete()`**, **`get()`**, `head()`, `lock()`, `merge()`, `mkactivity()`, `mkcol()`, `move()`, `m-search()`, `notify()`, `options()`, `patch()`, **`post()`**, `purge()`, **`put()`**, `report()`, `search()`, `subscribe()`, `trace()`, `unlock()`, `unsubscribe()`.

Es gibt eine spezielle Routing-Methode, `app.all()`, die in Antwort auf jede HTTP-Methode aufgerufen wird. Dies wird verwendet, um Middleware-Funktionen an einem bestimmten Pfad für alle Anfragemethoden zu laden. Das folgende Beispiel (aus der Express-Dokumentation) zeigt einen Handler, der für Anfragen an `/secret` unabhängig vom verwendeten HTTP-Verb ausgeführt wird (vorausgesetzt, es wird vom [http-Modul](https://nodejs.org/docs/latest/api/http.html#httpmethods) unterstützt).

```js
app.all("/secret", function (req, res, next) {
  console.log("Accessing the secret section…");
  next(); // pass control to the next handler
});
```

Routen ermöglichen es Ihnen, bestimmte Zeichenfolgenmuster in einer URL übereinstimmen zu lassen und einige Werte aus der URL zu extrahieren und an den Routenhandler als Parameter zu übergeben (als Attribute des Anfragen-Objekts, das als Parameter übergeben wird).

Oft ist es nützlich, Routenhandler für einen bestimmten Teil einer Site zusammenzufassen und sie mit einem gemeinsamen Routen-Präfix abrufen zu können (z. B. könnte eine Site mit einer Wiki alle Wiki-bezogenen Routen in einer Datei haben und sie mit einem Routen-Präfix von _/wiki/_ abrufen). In _Express_ wird dies durch die Verwendung des [`express.Router`](https://expressjs.com/en/guide/routing.html#express-router)-Objekt erreicht. Zum Beispiel könnten wir unsere Wiki-Route in einem Modul namens **wiki.js** erstellen und dann das `Router`-Objekt exportieren, wie unten gezeigt:

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
> Routen zum `Router`-Objekt hinzuzufügen ist genau wie das Hinzufügen von Routen zum `app`-Objekt (wie zuvor gezeigt).

Um den Router in unserer Haupt-App-Datei zu verwenden, würden wir das Routen-Modul (**wiki.js**) mit `require()` importieren und dann `use()` auf dem \_Express-Anwendung_sobjekt aufrufen, um den Router zum Middleware-Verarbeitungspfad hinzuzufügen. Die beiden Routen wären dann unter `/wiki/` und `/wiki/about/` zugänglich.

```js
const wiki = require("./wiki.js");
// …
app.use("/wiki", wiki);
```

Wir erklären Ihnen später im verlinkten Abschnitt [Routen und Controller](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes) noch viel mehr über die Arbeit mit Routen und insbesondere über die Verwendung des `Router`.

### Verwendung von Middleware

Middleware wird in Express-Apps ausgiebig verwendet, für Aufgaben vom Bereitstellen statischer Dateien bis hin zur Fehlerbehandlung, zur Komprimierung von HTTP-Antworten. Während Routenfunktionen den HTTP-Anfragen-/Antwortzyklus mit der Rückgabe einer Antwort an den HTTP-Client beenden, führen Middleware-Funktionen _typischerweise_ eine Operation an der Anfrage oder Antwort durch und rufen dann die nächste Funktion im "Stapel" auf, die mehr Middleware oder einen Routenhandler sein kann. Die Reihenfolge, in der Middleware aufgerufen wird, liegt beim App-Entwickler.

> [!NOTE]
> Die Middleware kann jede Operation ausführen, jeden Code ausführen, Änderungen an den Anfrage- und Antwortobjekten vornehmen, und sie kann _auch den Anfragen-/Antwortzyklus beenden_. Wenn sie den Zyklus nicht beendet, muss sie `next()` aufrufen, um die Kontrolle an die nächste Middleware-Funktion zu übergeben (oder die Anfrage bleibt hängen).

Die meisten Apps werden _Drittanbieter_-Middleware verwenden, um häufige Webentwicklungsaufgaben wie das Arbeiten mit Cookies, Sitzungen, Benutzer-Authentifizierung, Zugriff auf Anfragen `POST` und JSON-Daten, Protokollierung usw. zu vereinfachen. Sie finden eine [Liste von Middleware-Paketen, die vom Express-Team verwaltet werden](https://expressjs.com/en/resources/middleware.html) (die auch andere beliebte Third-Party-Pakete enthält). Andere Express-Pakete sind im npm-Paketmanager verfügbar.

Um Drittanbieter-Middleware zu verwenden, müssen Sie sie zuerst mithilfe von npm in Ihrer App installieren.
Zum Beispiel, um die [morgan](https://expressjs.com/en/resources/middleware/morgan.html) HTTP-Anfragen-Protokollierungsmiddleware zu installieren, würden Sie dies tun:

```bash
npm install morgan
```

Sie könnten dann `use()` auf dem _Express-Anwendungsobjekt_ aufrufen, um die Middleware zum Stapel hinzuzufügen:

```js
const express = require("express");
const logger = require("morgan");
const app = express();
app.use(logger("dev"));
// …
```

> [!NOTE]
> Middleware- und Routing-Funktionen werden in der Reihenfolge aufgerufen, in der sie deklariert werden. Für einige Middleware ist die Reihenfolge wichtig (z. B. wenn die Sitzungsmiddleware von der Cookiemiddleware abhängig ist, muss der Cookie-Handler zuerst hinzugefügt werden). Es ist fast immer der Fall, dass Middleware vor dem Setzen von Routen aufgerufen wird, oder Ihre Routen-Handler haben keinen Zugriff auf die von Ihrer Middleware hinzugefügte Funktionalität.

Sie können Ihre eigene Middleware-Funktion schreiben, und dazu werden Sie wahrscheinlich aufgefordert werden (wenn auch nur, um Fehlerbehandlungscode zu erstellen). Der **einzige** Unterschied zwischen einer Middleware-Funktion und einem Routenhandler-Callback besteht darin, dass Middleware-Funktionen ein drittes Argument `next` haben, das Middleware-Funktionen erwarten, wenn sie nicht diejenigen sind, die den Anfragenzyklus abschließen (wenn die Middleware-Funktion aufgerufen wird, enthält dies die _nächste_ Funktion, die aufgerufen werden muss).

Sie können eine Middleware-Funktion mit `app.use()` für _alle Anfragen_ der Verarbeitungskette hinzufügen oder für ein spezifisches HTTP-Verb die zugehörige Methode verwenden: `app.get()`, `app.post()` usw. Die Routen werden in beiden Fällen auf die gleiche Weise angegeben, obwohl die Route optional ist, wenn `app.use()` aufgerufen wird.

Das folgende Beispiel zeigt, wie Sie die Middleware-Funktion mithilfe beider Ansätze hinzufügen können, und ob mit oder ohne Route.

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
> Oben haben wir die Middleware-Funktion separat deklariert und dann als Callback gesetzt. In unserer vorherigen Routenhandler-Funktion haben wir die Callback-Funktion beim Verwenden deklariert. Beide Ansätze sind in JavaScript gültig.

Die Express-Dokumentation bietet eine Menge hervorragender Dokumentation zu [Verwenden](https://expressjs.com/en/guide/using-middleware.html) und [Schreiben](https://expressjs.com/en/guide/writing-middleware.html) von Express-Middleware.

### Bereitstellen von statischen Dateien

Sie können die [express.static](https://expressjs.com/en/4x/api.html#express.static)-Middleware verwenden, um statische Dateien bereitzustellen, einschließlich Ihrer Bilder, CSS und JavaScript (`static()` ist die einzige Middleware-Funktion, die tatsächlich **Teil** von _Express_ ist). Zum Beispiel würden Sie die folgende Zeile verwenden, um Bilder, CSS-Dateien und JavaScript-Dateien aus einem Verzeichnis namens "**public**" auf derselben Ebene bereitzustellen wie dort, wo Sie Node aufrufen:

```js
app.use(express.static("public"));
```

Alle Dateien im öffentlichen Verzeichnis werden bereitgestellt, indem Sie ihren Dateinamen (_relativ_ zum Basis-"public"-Verzeichnis) an die Basis-URL hinzufügen. Zum Beispiel:

```plain
http://localhost:3000/images/dog.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/about.html
```

Sie können `static()` mehrfach aufrufen, um mehrere Verzeichnisse bereitzustellen. Wenn eine Datei von einer Middleware-Funktion nicht gefunden werden kann, wird sie an die nachfolgende Middleware weitergeleitet (die Reihenfolge, in der die Middleware aufgerufen wird, basiert auf Ihrer Deklarationsreihenfolge).

```js
app.use(express.static("public"));
app.use(express.static("media"));
```

Sie können auch ein virtuelles Präfix für Ihre statischen URLs erstellen, anstatt die Dateien zur Basis-URL hinzuzufügen. Zum Beispiel geben wir hier einen [Mount-Pfad](https://expressjs.com/en/4x/api.html#app.use) an, sodass die Dateien mit dem Präfix "/media" geladen werden:

```js
app.use("/media", express.static("public"));
```

Nun können Sie die Dateien im `public`-Verzeichnis vom `/media`-Pfadpräfix aus laden.

```plain
http://localhost:3000/media/images/dog.jpg
http://localhost:3000/media/video/cat.mp4
http://localhost:3000/media/cry.mp3
```

> [!NOTE]
> Siehe auch [Bereitstellen von statischen Dateien in Express](https://expressjs.com/en/starter/static-files.html).

### Fehlerbehandlung

Fehler werden von einer oder mehreren speziellen Middleware-Funktionen behandelt, die anstelle der üblichen drei vier Argumente haben: `(err, req, res, next)`. Zum Beispiel:

```js
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

Diese können jeden erforderlichen Inhalt zurückgeben, müssen jedoch nach allen anderen `app.use()`- und Routencalls aufgerufen werden, sodass sie die letzte Middleware im Anfrageverarbeitungsprozess sind!

Express kommt mit einem eingebauten Fehler-Handler, der sich um alle übrig gebliebenen Fehler kümmert, die in der App auftreten könnten. Diese standardmäßige Fehlerbehandlungs-Middleware-Funktion wird am Ende des Middleware-Funktionsstapels hinzugefügt. Wenn Sie einen Fehler an `next()` übergeben und ihn nicht in einem Fehler-Handler behandeln, wird er durch den eingebauten Fehler-Handler behandelt; der Fehler wird dem Client mit der Stack-Trace geschrieben.

> [!NOTE]
> Der Stack-Trace wird in der Produktionsumgebung nicht eingeschlossen. Um es im Produktionsmodus auszuführen, müssen Sie die Umgebungsvariable `NODE_ENV` auf `"production"` setzen.

> [!NOTE]
> HTTP404 und andere „Fehler“-Statuscodes werden nicht als Fehler behandelt. Wenn Sie diese behandeln möchten, können Sie eine Middleware-Funktion hinzufügen, um dies zu tun. Weitere Informationen finden Sie in den [FAQ](https://expressjs.com/en/starter/faq.html#how-do-i-handle-404-responses).

Für weitere Informationen siehe [Fehlerbehandlung](https://expressjs.com/en/guide/error-handling.html) (Express-Dokumentation).

### Verwendung von Datenbanken

_Express_-Apps können jeden Datenbankmechanismus verwenden, der von _Node_ unterstützt wird (_Express_ selbst definiert kein spezifisches zusätzliches Verhalten/Anforderungen für die Datenbankverwaltung). Es gibt viele Optionen, darunter PostgreSQL, MySQL, Redis, SQLite, MongoDB usw.

Um diese zu verwenden, müssen Sie zuerst den Datenbanktreiber mit npm installieren. Zum Beispiel, um den Treiber für die beliebte NoSQL-MongoDB zu installieren, würden Sie den folgenden Befehl verwenden:

```bash
npm install mongodb
```

Die Datenbank selbst kann lokal oder auf einem Cloud-Server installiert werden. In Ihrem Express-Code importieren Sie den Treiber, verbinden Sie sich mit der Datenbank und führen dann Create, Read, Update und Delete (CRUD) Operationen aus. Das untenstehende Beispiel (aus der Express-Dokumentation) zeigt, wie Sie „Säugetier“-Einträge mit MongoDB finden können.

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

Ein weiterer beliebter Ansatz ist der indirekte Zugang zur Datenbank über einen Object Relational Mapper („ORM“). Bei diesem Ansatz definieren Sie Ihre Daten als „Objekte“ oder „Modelle“ und der ORM mappt diese auf das zugrunde liegende Datenbankformat. Dieser Ansatz hat den Vorteil, dass Sie als Entwickler weiterhin in Form von JavaScript-Objekten denken können, anstatt in Datenbanksemantik, und dass es einen offensichtlichen Ort gibt, um Validierungen und Prüfungen eingehender Daten durchzuführen. Wir werden in einem späteren Artikel mehr über Datenbanken sprechen.

Weitere Informationen finden Sie unter [Datenbankintegration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation).

### Rendern von Daten (Ansichten)

Template-Engines (auch als „View-Engines“ in _Express_ bezeichnet) ermöglichen es Ihnen, die _Struktur_ eines Ausgabedokuments in einem Template anzugeben, indem Sie Platzhalter für Daten verwenden, die bei der Seitenerstellung ausgefüllt werden. Templates werden häufig zur Erstellung von HTML verwendet, können aber auch andere Dokumenttypen erzeugen.

Express unterstützt eine Reihe von Template-Engines, insbesondere Pug (früher „Jade“), Mustache und EJS. Jede hat ihre eigenen Stärken zur Bewältigung bestimmter Anwendungsfälle (relative Vergleiche lassen sich leicht über Internetsuche finden). Der Express-Anwendungsgenerator verwendet standardmäßig Jade, unterstützt jedoch auch mehrere andere.

In Ihrem Anwendungseinstellungs-Code legen Sie die zu verwendende Template-Engine und den Speicherort, wo Express nach Templates suchen soll, mit den Einstellungen 'views' und 'view engine' fest, wie unten gezeigt (Sie müssen auch das Paket installieren, das Ihre Template-Bibliothek enthält!)

```js
const express = require("express");
const path = require("path");
const app = express();

// Set directory to contain the templates ('views')
app.set("views", path.join(__dirname, "views"));

// Set view engine to use, in this case 'some_template_engine_name'
app.set("view engine", "some_template_engine_name");
```

Die Erscheinung des Templates hängt davon ab, welche Engine Sie verwenden. Angenommen, Sie haben eine Template-Datei mit dem Namen „index.\<template_extension>“, die Platzhalter für Datenvariablen mit dem Namen „title“ und „message“ enthält, würden Sie [`Response.render()`](https://expressjs.com/en/4x/api.html#res.render) in einer Routenhandlerfunktion aufrufen, um die HTML-Antwort zu erstellen und zu senden:

```js
app.get("/", function (req, res) {
  res.render("index", { title: "About dogs", message: "Dogs rock!" });
});
```

Weitere Informationen finden Sie unter [Verwendung von Template-Engines mit Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation).

### Dateistruktur

Express macht keine Annahmen in Bezug auf die Struktur oder darüber, welche Komponenten Sie verwenden. Routen, Ansichten, statische Dateien und andere anwendungsspezifische Logik können in einer beliebigen Anzahl von Dateien mit beliebiger Verzeichnisstruktur vorhanden sein. Während es durchaus möglich ist, die gesamte _Express_-Anwendung in einer Datei zu haben, macht es typischerweise Sinn, Ihre Anwendung in Dateien basierend auf Funktionen (z. B. Kontoverwaltung, Blogs, Diskussionsforen) und Architektur-Problemdomänen (z. B. Modell, Ansicht oder Controller, wenn Sie eine {{Glossary("MVC", "MVC-Architektur")}} verwenden) zu unterteilen.

In einem späteren Thema verwenden wir den _Express-Anwendungsgenerator_, der ein modulares App-Skelett erstellt, das wir leicht erweitern können, um Webanwendungen zu erstellen.

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben den ersten Schritt Ihrer Express/Node-Reise abgeschlossen! Sie sollten jetzt die Hauptvorteile von Express und Node verstehen und ungefähr wissen, wie die Hauptbestandteile einer Express-App aussehen könnten (Routen, Middleware, Fehlerbehandlung und Template-Code). Sie sollten auch verstehen, dass mit Express als unverzerrtem Framework der Weg, diese Teile zusammenzubauen, und die Bibliotheken, die Sie verwenden, weitgehend Ihnen überlassen bleibt!

Natürlich ist Express absichtlich ein sehr leichtgewichtiges Webanwendungsframework, sodass ein großer Teil seines Nutzens und Potentials aus Drittanbieter-Bibliotheken und Funktionen stammt. Wir werden diese in den folgenden Artikeln detaillierter untersuchen. In unserem nächsten Artikel werden wir uns damit befassen, wie Sie eine Node-Entwicklungsumgebung einrichten, damit Sie einige Express-Code in Aktion sehen können.

## Siehe auch

- [Module](https://nodejs.org/api/modules.html#modules_modules) (Node-API-Dokumentation)
- [Express](https://expressjs.com/) (Startseite)
- [Grundlagen des Routings](https://expressjs.com/en/starter/basic-routing.html) (Express-Dokumentation)
- [Leitfaden zum Routing](https://expressjs.com/en/guide/routing.html) (Express-Dokumentation)
- [Verwendung von Template-Engines mit Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation)
- [Verwendung von Middleware](https://expressjs.com/en/guide/using-middleware.html) (Express-Dokumentation)
- [Schreiben von Middleware für die Verwendung in Express-Apps](https://expressjs.com/en/guide/writing-middleware.html) (Express-Dokumentation)
- [Datenbankintegration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation)
- [Bereitstellen von statischen Dateien in Express](https://expressjs.com/en/starter/static-files.html) (Express-Dokumentation)
- [Fehlerbehandlung](https://expressjs.com/en/guide/error-handling.html) (Express-Dokumentation)

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
