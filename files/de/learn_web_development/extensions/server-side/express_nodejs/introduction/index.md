---
title: Einführung in Express/Node
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction
l10n:
  sourceCommit: 8443cb34d9944d8eb8e2c5add598bec26ed6d21f
---

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

In diesem ersten Express-Artikel beantworten wir die Fragen "Was ist Node?" und "Was ist Express?", und geben Ihnen einen Überblick darüber, was das Express-Web-Framework besonders macht. Wir skizzieren die Hauptmerkmale und zeigen Ihnen einige der wichtigsten Bausteine einer Express-Anwendung (obwohl Ihnen zu diesem Zeitpunkt noch keine Entwicklungsumgebung zur Verfügung steht, um es zu testen).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein allgemeines Verständnis von <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps">serverseitiger Website-Programmierung</a> und insbesondere der Mechanismen der <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview">Client-Server-Interaktionen in Websites</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit dem, was Express ist und wie es mit Node zusammenpasst, welche Funktionalitäten es bietet, und den Hauptbausteinen einer Express-Anwendung.
      </td>
    </tr>
  </tbody>
</table>

## Einführung in Node

[Node](https://nodejs.org/) (oder formeller _Node.js_) ist eine quelloffene, plattformübergreifende Laufzeitumgebung, die es Entwicklern ermöglicht, alle Arten von serverseitigen Werkzeugen und Anwendungen in {{Glossary("JavaScript", "JavaScript")}} zu erstellen.
Die Laufzeitumgebung ist für den Gebrauch außerhalb eines Browsers konzipiert (d.h. läuft direkt auf einem Computer- oder Server-Betriebssystem). Daher verzichtet die Umgebung auf browser-spezifische JavaScript-APIs und fügt Unterstützung für traditionellere OS-APIs hinzu, einschließlich HTTP- und Dateisystembibliotheken.

Aus der Perspektive der Webserver-Entwicklung bietet Node eine Reihe von Vorteilen:

- Hervorragende Leistung! Node wurde entwickelt, um den Durchsatz und die Skalierbarkeit in Webanwendungen zu optimieren, und ist eine gute Lösung für viele gängige Web-Entwicklungsprobleme (z.B. Echtzeit-Webanwendungen).
- Der Code wird in „plain old JavaScript" geschrieben, was bedeutet, dass weniger Zeit mit dem Wechsel zwischen Sprachen verbracht wird, wenn Sie sowohl clientseitigen als auch serverseitigen Code schreiben.
- JavaScript ist eine relativ neue Programmiersprache und profitiert von Verbesserungen im Sprachdesign im Vergleich zu anderen traditionellen Webserver-Sprachen (z.B. Python, PHP, usw.). Viele andere neue und beliebte Sprachen kompilieren/konvertieren in JavaScript, sodass Sie auch TypeScript, CoffeeScript, ClojureScript, Scala, LiveScript usw. verwenden können.
- Der Node-Paketmanager (npm) bietet Zugriff auf Hunderttausende von wiederverwendbaren Paketen. Er hat auch eine erstklassige Abhängigkeitsauflösung und kann auch verwendet werden, um den Großteil der Build-Toolchain zu automatisieren.
- Node.js ist portabel. Es ist verfügbar auf Microsoft Windows, macOS, Linux, Solaris, FreeBSD, OpenBSD, WebOS und NonStop OS. Darüber hinaus wird es von vielen Webhosting-Anbietern gut unterstützt, die oft spezifische Infrastruktur und Dokumentation für das Hosting von Node-Sites bereitstellen.
- Es hat ein sehr aktives Ökosystem von Drittanbietern und eine Community von Entwicklern, mit vielen Menschen, die bereit sind zu helfen.

Sie können Node.js verwenden, um einen einfachen Webserver mithilfe des Node HTTP-Pakets zu erstellen.

### Hello Node.js

Das folgende Beispiel erstellt einen Webserver, der auf jede Art von HTTP-Anfrage unter der URL `http://127.0.0.1:8000/` hört — Wenn eine Anfrage empfangen wird, antwortet das Skript mit dem String: "Hello World". Wenn Sie Node bereits installiert haben, können Sie diese Schritte folgen, um das Beispiel auszuprobieren:

1. Öffnen Sie das Terminal (unter Windows das Befehlszeilenprogramm).
2. Erstellen Sie den Ordner, in dem Sie das Programm speichern möchten, z.B. `test-node`, und betreten Sie diesen, indem Sie den folgenden Befehl in Ihr Terminal eingeben:

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
5. Gehen Sie zurück zum Terminal und geben Sie den folgenden Befehl ein:

   ```bash
   node hello.js
   ```

Navigieren Sie schließlich in Ihrem Webbrowser zu `http://localhost:8000`; Sie sollten den Text "**Hello World**" in der oberen linken Ecke einer ansonsten leeren Webseite sehen.

> [!NOTE]
> Wenn Sie etwas Node.js-Code ausprobieren möchten, ohne eine lokale Einrichtung vornehmen zu müssen, bietet Scrimbas [Aside: The HTTP module](https://scrimba.com/learn-nodejs-c00ho9qqh6/~07du?via=mdn) <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> eine interaktive Anleitung zur Einrichtung eines einfachen Servers mit dem Node HTTP-Paket.

## Web-Frameworks

Andere gängige Aufgaben der Webentwicklung werden von Node selbst nicht direkt unterstützt. Wenn Sie spezifische Verarbeitung für verschiedene HTTP-Verben hinzufügen möchten (z.B. `GET`, `POST`, `DELETE` usw.), Anfragen an verschiedenen URL-Pfaden ("Routen") separat handhaben, statische Dateien bereitstellen oder Vorlagen verwenden möchten, um die Antwort dynamisch zu erstellen, wird Ihnen Node alleine nicht viel nützen. Sie müssen entweder den Code selbst schreiben oder Sie können das Rad nicht neu erfinden und ein Web-Framework verwenden!

## Einführung in Express

[Express](https://expressjs.com/) ist das beliebteste Node.js-Web-Framework und die zugrunde liegende Bibliothek für eine Reihe anderer beliebter Node.js-Frameworks. Es bietet Mechanismen, um:

- Handler für Anfragen mit verschiedenen HTTP-Verben an verschiedenen URL-Pfaden (Routen) zu schreiben.
- Integration mit "View"-Rendering-Engines, um Antworten durch Einfügen von Daten in Vorlagen zu generieren.
- Allgemeine Webanwendungseinstellungen wie den zu verwendenden Port und den Speicherort von Vorlagen, die für das Rendern der Antwort verwendet werden, festzulegen.
- Zusätzliche "Middleware" für die Anfragenverarbeitung an jedem Punkt innerhalb der Request-Processing-Pipeline hinzuzufügen.

Während _Express_ selbst recht minimalistisch ist, haben Entwickler kompatible Middleware-Pakete erstellt, um fast jedes Webentwicklungsproblem zu adressieren. Es gibt Bibliotheken zum Arbeiten mit Cookies, Sitzungen, Benutzeranmeldungen, URL-Parametern, `POST`-Daten, Sicherheits-Headern und _vielen_ mehr. Eine Liste der von Express verwalteten Middleware-Pakete finden Sie unter [Express Middleware](https://expressjs.com/en/resources/middleware.html) (zusammen mit einer Liste einiger beliebter Drittanbieter-Pakete).

> [!NOTE]
> Diese Flexibilität ist ein zweischneidiges Schwert. Es gibt Middleware-Pakete, um fast jedes Problem oder jede Anforderung zu adressieren, aber die richtigen Pakete zu finden, kann manchmal eine Herausforderung sein. Es gibt auch keinen "richtigen Weg", eine Anwendung zu strukturieren, und viele Beispiele, die Sie im Internet finden, sind nicht optimal oder zeigen nur einen kleinen Teil dessen, was Sie tun müssen, um eine Webanwendung zu entwickeln.

## Woher kommen Node und Express?

Node wurde erstmals 2009 für Linux veröffentlicht. Der npm-Paketmanager wurde 2010 veröffentlicht und native Windows-Unterstützung wurde 2012 hinzugefügt. Wenn Sie mehr wissen möchten, vertiefen Sie sich in [Wikipedia](https://en.wikipedia.org/wiki/Node.js#History).

Express wurde erstmals im November 2010 veröffentlicht und befindet sich derzeit in der Hauptversion 5 der API. Informationen über Änderungen in der aktuellen Version finden Sie im [Changelog](https://expressjs.com/en/changelog/#5.x), und detailliertere historische Anmerkungen finden Sie auf [GitHub](https://github.com/expressjs/express/blob/master/History.md).

## Wie populär sind Node und Express?

Die Popularität eines Web-Frameworks ist wichtig, da sie ein Indikator dafür ist, ob es weiterhin gepflegt wird und welche Ressourcen in Bezug auf Dokumentation, Zusatzbibliotheken und technischen Support voraussichtlich verfügbar sein werden.

Es gibt kein unmittelbar verfügbares und endgültiges Maß für die Popularität von serverseitigen Frameworks (obwohl man die Popularität anhand von Mechanismen wie der Zählung der Anzahl der GitHub-Projekte und Stack Overflow-Fragen für jede Plattform schätzen kann). Eine bessere Frage ist, ob Node und Express "populär genug" sind, um die Probleme unpopulärer Plattformen zu vermeiden. Entwickeln sie sich kontinuierlich weiter? Können Sie Hilfe bekommen, wenn Sie sie brauchen? Gibt es eine Gelegenheit, bezahlte Arbeit zu bekommen, wenn Sie Express lernen?

Basierend auf der Anzahl hochkarätiger Unternehmen, die Express verwenden, der Anzahl der Leute, die zum Code beitragen, und der Anzahl der Leute, die sowohl kostenlosen als auch kostenpflichtigen Support bieten, dann ja, _Express_ ist ein populäres Framework!

## Ist Express meinungsstark?

Web-Frameworks bezeichnen sich häufig als "meinungsstark" oder "unparteiisch".

Meinungsstarke Frameworks sind diejenigen, die Meinungen darüber haben, wie eine bestimmte Aufgabe "richtig" zu lösen ist. Sie unterstützen oft die schnelle Entwicklung _in einem bestimmten Bereich_ (Lösen von Problemen eines bestimmten Typs) weil der richtige Weg für alles in der Regel gut verstanden und dokumentiert ist. Allerdings können sie weniger flexibel sein, um Probleme außerhalb ihres Hauptbereichs zu lösen, und neigen dazu, weniger Auswahlmöglichkeiten für Komponenten und Ansätze zu bieten, die sie verwenden können.

Unparteiische Frameworks haben dagegen weit weniger Einschränkungen für die besten Möglichkeiten, Komponenten zusammenzufügen, um ein Ziel zu erreichen, oder welche Komponenten verwendet werden sollten. Diese machen es Entwicklern einfacher, die am besten geeigneten Werkzeuge zur Erfüllung einer bestimmten Aufgabe zu verwenden, wenn auch auf Kosten von mehr Aufwand bei der Suche nach diesen Komponenten.

Express ist unparteiisch. Sie können fast jede kompatible Middleware, die Sie möchten, in die Anfragen-Verarbeitungskette einsetzen, in fast jeder Reihenfolge, die Sie möchten. Sie können die App in einer Datei oder in mehreren Dateien strukturieren und jede Verzeichnisstruktur verwenden. Manchmal fühlen Sie vielleicht, dass es zu viele Auswahlmöglichkeiten gibt!

## Wie sieht der Express-Code aus?

In einer traditionellen datengesteuerten Website wartet eine Webanwendung auf HTTP-Anfragen vom Webbrowser (oder einem anderen Client). Wenn eine Anfrage eingegangen ist, ermittelt die Anwendung, welche Aktion erforderlich ist, basierend auf dem URL-Muster und möglicherweise assoziierten Informationen, die in `POST`-Daten oder `GET`-Daten enthalten sind. Je nach Erfordernis kann sie dann Informationen aus einer Datenbank lesen oder schreiben oder andere für die Anfrage notwendige Aufgaben ausführen. Die Anwendung gibt dann eine Antwort an den Webbrowser zurück, oft indem sie eine HTML-Seite dynamisch erstellt, indem die abgerufenen Daten in Platzhalter in einer HTML-Vorlage eingefügt werden.

Express bietet Methoden zum Angeben, welche Funktion für ein bestimmtes HTTP-Verb (`GET`, `POST`, `PUT` usw.) und URL-Muster ("Route") aufgerufen wird und Methoden zum Angeben welcher Vorlagen- ("View")-Engine, und wo Vorlagendateien sich befinden, um eine Antwort zu rendern. Sie können Express-Middleware verwenden, um Unterstützung für Cookies, Sitzungen und Benutzer zu ergänzen, `POST`/`GET`-Parameter zu erhalten usw. Sie können jeden von Node unterstützten Datenbankmechanismus verwenden (Express definiert kein datenbankspezifisches Verhalten).

Die folgenden Abschnitte erklären einige der gängigen Aspekte, die Sie sehen werden, wenn Sie mit _Express_ und _Node_ Code arbeiten.

### Helloworld Express

Lassen Sie uns zunächst das Standard-Express [Hello World](https://expressjs.com/en/starter/hello-world.html)-Beispiel betrachten (wir diskutieren jeden Teil davon unten und in den folgenden Abschnitten).

> [!NOTE]
> Wenn Sie Node und Express bereits installiert haben (oder wenn Sie sie installieren, wie im [nächsten Artikel](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) gezeigt), können Sie diesen Code in einer Textdatei namens **app.js** speichern und ihn in einer Bash-Eingabeaufforderung ausführen, indem Sie Folgendes aufrufen:
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

Die ersten beiden Zeilen `require()` (importieren) das Express-Modul und erstellen eine [Express-Anwendung](https://expressjs.com/en/5x/api.html#app). Dieses Objekt, das traditionell `app` genannt wird, hat Methoden zum Routing von HTTP-Anfragen, zum Konfigurieren von Middleware, zum Rendern von HTML-Ansichten, zum Registrieren einer Vorlagen-Engine und zum Ändern von [Anwendungseinstellungen](https://expressjs.com/en/5x/api.html#app.settings.table), die steuern, wie sich die Anwendung verhält (z.B. der Umgebungsmodus, ob Routendefinitionen groß-/kleinschreibungssensitiv sind usw.).

Der mittlere Teil des Codes (die drei Zeilen beginnend mit `app.get`) zeigt eine _Routendefinition_. Die Methode `app.get()` spezifiziert eine Callback-Funktion, die immer dann aufgerufen wird, wenn eine HTTP-`GET`-Anfrage mit einem relativen Pfad (`'/'`) zum Website-Stamm gestellt wird. Die Callback-Funktion nimmt ein Anfrage- und ein Antwortobjekt als Argumente und ruft [`send()`](https://expressjs.com/en/5x/api.html#res.send) auf der Antwort auf, um den String "Hello World!" zurückzugeben.

Der letzte Block startet den Server auf einem angegebenen Port ('3000') und schreibt einen Protokollkommentar auf die Konsole. Mit dem laufenden Server können Sie im Browser zu `localhost:3000` gehen, um die Beispielantwort zurückzugeben.

### Module importieren und erstellen

Ein Modul ist eine JavaScript-Bibliothek/-Datei, die Sie in anderen Code importieren können, indem Sie die `require()`-Funktion von Node verwenden. _Express_ selbst ist ein Modul, ebenso wie die Middleware- und Datenbankbibliotheken, die wir in unseren _Express_-Anwendungen verwenden.

Der unten stehende Code zeigt, wie wir ein Modul nach Namen importieren, das _Express_-Framework als Beispiel verwendend. Zuerst rufen wir die `require()`-Funktion auf, geben den Namen des Moduls als Zeichenkette an (`'express'`), und rufen das zurückgegebene Objekt auf, um eine [Express-Anwendung](https://expressjs.com/en/5x/api.html#app) zu erstellen. Wir können dann auf die Eigenschaften und Funktionen des Anwendungsobjekts zugreifen.

```js
const express = require("express");

const app = express();
```

Sie können auch eigene Module erstellen, die auf die gleiche Weise importiert werden können.

> [!NOTE]
> Sie _werden_ eigene Module erstellen wollen, da dies ermöglicht Ihren Code in verwaltbare Teile zu organisieren — eine monolithische Single-File-Anwendung ist schwer zu verstehen und zu pflegen. Die Verwendung von Modulen hilft Ihnen auch bei der Verwaltung Ihres Namensraums, da nur die Variablen, die Sie explizit exportieren, importiert werden, wenn Sie ein Modul verwenden.

Um Objekte außerhalb eines Moduls verfügbar zu machen, müssen Sie sie einfach als zusätzliche Eigenschaften des `exports`-Objekts freigeben. Zum Beispiel ist das **square.js**-Modul unten eine Datei, die `area()`- und `perimeter()`-Methoden exportiert:

```js
exports.area = function (width) {
  return width * width;
};
exports.perimeter = function (width) {
  return 4 * width;
};
```

Wir können dieses Modul mithilfe von `require()` importieren und dann die exportierte(n) Methode(n) wie gezeigt aufrufen:

```js
const square = require("./square"); // Here we require() the name of the file without the (optional) .js file extension

console.log(`The area of a square with a width of 4 is ${square.area(4)}`);
```

> [!NOTE]
> Sie können auch einen absoluten Pfad zum Modul angeben (oder einen Namen, wie wir es ursprünglich getan haben).

Wenn Sie ein vollständiges Objekt in einer Zuweisung exportieren möchten, anstatt es Eigenschaft für Eigenschaft aufzubauen, weisen Sie es `module.exports` wie unten gezeigt zu (Sie können dies auch tun, um die Wurzel des Exports-Objekts zu einem Konstruktor oder einer anderen Funktion zu machen):

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
> Sie können `exports` als [Abkürzung](https://nodejs.org/api/modules.html#modules_exports_shortcut) für `module.exports` innerhalb eines Moduls betrachten. Tatsächlich ist `exports` nur eine Variable, die beim Evaluieren des Moduls auf den Wert von `module.exports` initialisiert wird. Dieser Wert ist eine Referenz auf ein Objekt (in diesem Fall ein leeres Objekt). Dies bedeutet, dass `exports` eine Referenz auf das gleiche Objekt hält, auf das `module.exports` verweist. Es bedeutet auch, dass `exports` nicht mehr mit `module.exports` verbunden ist, wenn einem anderen Wert zugewiesen wird.

Für weit mehr Informationen zu Modulen siehe [Module](https://nodejs.org/api/modules.html#modules_modules) (Node API-Dokumentation).

### Asynchrone APIs verwenden

JavaScript-Code verwendet häufig asynchrone anstelle von synchronen APIs für Operationen, die einige Zeit in Anspruch nehmen können. Eine synchrone API ist eine, bei der jede Operation abgeschlossen sein muss, bevor die nächste Operation starten kann. Zum Beispiel sind die folgenden Log-Funktionen synchron und geben den Text in der Reihenfolge auf die Konsole aus (First, Second).

```js
console.log("First");
console.log("Second");
```

Im Gegensatz dazu ist eine asynchrone API eine, bei der die API eine Operation startet und sofort zurückkehrt (bevor die Operation abgeschlossen ist). Sobald die Operation beendet ist, verwendet die API einen Mechanismus, um zusätzliche Operationen durchzuführen. Zum Beispiel wird der unten stehende Code "Second, First" ausgeben, da die `setTimeout()`-Methode zuerst aufgerufen wird und sofort zurückkehrt, die Operation jedoch mehrere Sekunden braucht, um abzuschließen.

```js
setTimeout(() => {
  console.log("First");
}, 3000);
console.log("Second");
```

Die Verwendung nicht blockierender asynchroner APIs ist bei Node noch wichtiger als im Browser, da _Node_-Anwendungen oft als ein einzelfädiges ereignisgesteuertes Ausführungsumfeld geschrieben werden. "Einzelfädig" bedeutet, dass alle Anfragen an den Server im gleichen Thread ausgeführt werden (anstatt in separate Prozesse ausgegliedert zu werden). Dieses Modell ist hinsichtlich Geschwindigkeit und Server-Ressourcen extrem effizient. Es bedeutet jedoch, dass, wenn eine Ihrer Funktionen synchronen Methoden aufrufen, die lange benötigen, um abzuschließen, sie nicht nur die aktuelle Anfrage blockiert, sondern jede andere Anfrage, die von Ihrer Webanwendung bearbeitet wird.

Es gibt mehrere Möglichkeiten, wie eine asynchrone API Ihrer Anwendung mitteilen kann, dass sie abgeschlossen ist. Historisch gesehen war der Ansatz zur Registrierung einer Callback-Funktion beim Aufrufen der asynchronen API, die dann beim Abschluss der Operation aufgerufen wird (dies ist der oben verwendete Ansatz).

> [!NOTE]
> Die Verwendung von Callbacks kann ziemlich „chaotisch“ sein, wenn Sie eine Reihe von abhängigen asynchronen Operationen haben, die in der Reihenfolge ausgeführt werden müssen, da dies zu mehreren Ebenen von verschachtelten Callbacks führt. Dies wird gemeinhin als „Callback-Hölle“ bezeichnet.

> [!NOTE]
> Eine gängige Konvention bei Node und Express ist die Verwendung von Error-First-Callbacks. Bei dieser Konvention ist der erste Wert in Ihren _Callback-Funktionen_ ein Fehlerwert, während nachfolgende Argumente Erfolgsdaten enthalten. Eine gute Erklärung, warum dieser Ansatz nützlich ist, finden Sie in diesem Blog: [The Node.js Way - Understanding Error-First Callbacks](https://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/) (fredkschott.com).

Moderne JavaScript-Code verwendet häufiger [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) und [async/await](/de/docs/Web/JavaScript/Reference/Statements/async_function) zur Steuerung des asynchronen Programmflusses.
Sie sollten nach Möglichkeit Promises verwenden. Wenn Sie mit Code arbeiten, der Callbacks verwendet, können Sie die Node.js-`utils.promisify`-Funktion verwenden, um die Callback-→-Promise-Konvertierung ergonomisch zu handhaben.

### Erstellen von Routen-Handlern

In unserem _Hello World_ Express-Beispiel (siehe oben) haben wir eine (Callback-) Routen-Handler-Funktion für HTTP-`GET`-Anfragen an den Website-Stamm (`'/'`) definiert.

```js
app.get("/", (req, res) => {
  res.send("Hello World!");
});
```

Die Callback-Funktion nimmt eine Anfrage- und eine Antwortobjekt als Argumente entgegen. In diesem Fall ruft die Methode [`send()`](https://expressjs.com/en/5x/api.html#res.send) auf der Antwort auf, um den String "Hello World!" Es gibt eine [Anzahl anderer Antwortmethoden](https://expressjs.com/en/guide/routing.html#response-methods), um den Anforderungs-/Antwortzyklus zu beenden. Beispielsweise könnten Sie [`res.json()`](https://expressjs.com/en/5x/api.html#res.json) verwenden, um eine JSON-Antwort zu senden, oder [`res.sendFile()`](https://expressjs.com/en/5x/api.html#res.sendFile), um eine Datei zu senden.

> [!NOTE]
> Sie können beliebige Argumentnamen in den Callback-Funktionen verwenden; Beim Aufruf des Callbacks ist das erste Argument immer die Anfrage und das zweite immer die Antwort. Es macht Sinn, sie so zu benennen, dass Sie im Body des Callbacks das Objekt identifizieren können, mit dem Sie arbeiten.

Das _Express-Anwendungs_-Objekt bietet auch Methoden zum Definieren von Routen-Handlern für alle anderen HTTP-Verben, die meist genau auf die gleiche Weise verwendet werden:

`checkout()`, `copy()`, **`delete()`**, **`get()`**, `head()`, `lock()`, `merge()`, `mkactivity()`, `mkcol()`, `move()`, `m-search()`, `notify()`, `options()`, `patch()`, **`post()`**, `purge()`, **`put()`**, `report()`, `search()`, `subscribe()`, `trace()`, `unlock()`, `unsubscribe()`.

Es gibt eine spezielle Routing-Methode, `app.all()`, die als Antwort auf eine beliebige HTTP-Methode aufgerufen wird. Dies wird verwendet, um Middleware-Funktionen an einem bestimmten Pfad für alle Anforderungsmethoden zu laden. Das folgende Beispiel (aus der Express-Dokumentation) zeigt einen Handler, der unabhängig von dem verwendeten HTTP-Verb für Anforderungen an `/secret` ausgeführt wird (sofern es vom [http-Modul](https://nodejs.org/docs/latest/api/http.html#httpmethods) unterstützt wird).

```js
app.all("/secret", (req, res, next) => {
  console.log("Accessing the secret section…");
  next(); // pass control to the next handler
});
```

Routen ermöglichen es Ihnen, bestimmte Muster von Zeichen in einer URL abzugleichen, einige Werte aus der URL zu extrahieren und sie als Parameter an den Routen-Handler zu übergeben (als Attribute des Anfrageobjekts, das als Parameter übergeben wird).

Es ist oft nützlich, Routen-Handler für einen bestimmten Teil einer Site zusammenzufassen und auf sie mit einem gemeinsamen Routenvorpräfix zuzugreifen (z.B. könnte eine Site mit einem Wiki alle Wiki-bezogenen Routen in einer Datei haben und auf sie mit einem Routenvorpräfix von _/wiki/_ zugreifen). In _Express_ wird dies erreicht, indem man das [`express.Router`](https://expressjs.com/en/guide/routing.html#express-router)-Objekt verwendet. Zum Beispiel können wir unsere Wiki-Route in einem Modul namens **wiki.js** erstellen und dann das `Router`-Objekt exportieren, wie unten gezeigt:

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
> Das Hinzufügen von Routen zum `Router`-Objekt ist genau so wie das Hinzufügen von Routen zum `app`-Objekt (wie in einem früheren Schritt gezeigt).

Um den Router in unserer Haupt-App-Datei zu verwenden, würden wir dann das Routen-Modul (**wiki.js**) `require()` und dann `use()` auf der Express-Anwendung aufrufen, um den Router zum Middleware-Verarbeitungspfad hinzuzufügen. Die beiden Routen sind dann unter `/wiki/` und `/wiki/about/` zugänglich.

```js
const wiki = require("./wiki.js");

// …
app.use("/wiki", wiki);
```

Wir werden Ihnen später im verknüpften Abschnitt [Routen und Controller](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes) mehr darüber zeigen, wie Sie mit Routen arbeiten und insbesondere wie der `Router` verwerden.

### Verwendung von Middleware

Middleware wird in Express-Apps häufig verwendet, für Aufgaben von der Bereitstellung statischer Dateien bis zur Fehlerbehandlung und zur Komprimierung von HTTP-Antworten. Während Routent-Funktionen den HTTP-Anforderungen-Antwortzyklus beenden, indem sie eine Antwort an den HTTP-Client zurückgeben, führen Middleware-Funktionen _typischerweise_ eine Operation an der Anfrage oder Antwort aus und rufen dann die nächste Funktion im "Stack" auf, die weitere Middleware oder ein Routen-Handler sein kann. Die Reihenfolge, in der Middleware aufgerufen wird, liegt im Ermessen des App-Entwicklers.

> [!NOTE]
> Die Middleware kann jede Operation durchführen, jeden Code ausführen, Änderungen am Anforderungs- und Antwortobjekt vornehmen, und sie kann den Anforderungs-Antwortzyklus _auch beenden_. Wenn es den Zyklus nicht beendet, muss es `next()` aufrufen, um die Kontrolle an die nächste Middleware-Funktion zu übergeben (oder die Anforderung wird hängen bleiben).

Die meisten Apps verwenden _Drittanbieter_-Middleware, um gängige Webentwicklungsaufgaben zu vereinfachen, wie Arbeiten mit Cookies, Sitzungen, Benutzer-Authentifizierung, Zugriff auf Anfragen-`POST`- und JSON-Daten, Protokollierung usw. Sie finden eine [Liste von Middleware-Paketen, die vom Express-Team gepflegt werden](https://expressjs.com/en/resources/middleware.html) (die auch andere beliebte Drittanbieter-Pakete umfassen). Andere Express-Pakete sind im npm-Paketmanager erhältlich.

Um Drittanbieter-Middleware zu verwenden, müssen Sie sie zunächst mit npm in Ihrer App installieren.
Um zum Beispiel die [morgan](https://expressjs.com/en/resources/middleware/morgan.html) HTTP-Anfrage-Protokollierungs-Middleware zu installieren, würden Sie dies tun:

```bash
npm install morgan
```

Sie könnten dann `use()` auf der _Express-Anwendungsobjekt_-Objekt aufrufen, um die Middleware zum Stack hinzuzufügen:

```js
const express = require("express");
const logger = require("morgan");

const app = express();
app.use(logger("dev"));
// …
```

> [!NOTE]
> Middleware- und Router-Funktionen werden in der Reihenfolge aufgerufen, in der sie deklariert werden. Bei einiger Middleware ist die Reihenfolge wichtig (zum Beispiel, wenn Session-Middleware von Cookie-Middleware abhängt, muss der Cookie-Handler zuerst hinzugefügt werden). In den meisten Fällen wird Middleware vor dem Festlegen von Routen aufgerufen, oder Ihre Routen-Handler haben keinen Zugriff auf die Funktionalität, die von Ihrer Middleware hinzugefügt wird.

Sie können Ihre eigenen Middleware-Funktionen schreiben und werden wahrscheinlich dazu gezwungen sein (wenn auch nur, um Fehlerbehandlungscode zu erstellen). Der _einzige_ Unterschied zwischen einer Middleware-Funktion und einem Routen-Handler-Callback besteht darin, dass Middleware-Funktionen ein drittes Argument `next` haben, das aufgerufen werden muss, wenn sie nicht die sind, die den Anforderungszyklus abschließen (wenn die Middleware-Funktion aufgerufen wird, enthält dieses das _nächste_ zu verwendende Funktion).

Eine Middleware-Funktion kann für _alle Antworten_ mit `app.use()` zur Bearbeitungskette hinzugefügt werden oder für ein bestimmtes HTTP-Verb mit der zugehörigen Methode verwendet werden: `app.get()`, `app.post()` usw. Die Routen werden in beiden Fällen auf die gleiche Weise angegeben, obwohl die Route optional ist, wenn Sie `app.use()` aufrufen.

Das Beispiel unten zeigt, wie Sie die Middleware-Funktion mit beiden Ansätzen hinzufügen können, und/oder mit/ohne Route.

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
> Oben deklarieren wir die Middleware-Funktion separat und setzen sie dann als den Rückruf. In unserer vorherigen Routen-Handler-Funktion haben wir die Rückruffunktion bei ihrer Verwendung deklariert. Beide Ansätze sind in JavaScript gültig.

Die Express-Dokumentation bietet viel mehr ausgezeichnete Dokumentation über [die Verwendung](https://expressjs.com/en/guide/using-middleware.html) und [das Schreiben von](https://expressjs.com/en/guide/writing-middleware.html) Express-Middleware.

### Statische Dateien bereitstellen

Sie können die [express.static](https://expressjs.com/en/5x/api.html#express.static)-Middleware verwenden, um statische Dateien bereitstellen, einschließlich Ihrer Bilder, CSS und JavaScript (`static()` ist die einzige Middleware-Funktion, die tatsächlich **Teil** von _Express_ ist). Zum Beispiel würden Sie die folgende Zeile verwenden, um Bilder, CSS-Dateien und JavaScript-Dateien aus einem Verzeichnis namens '**public'** auf der gleichen Ebene, auf der Sie Node aufrufen, bereitzustellen:

```js
app.use(express.static("public"));
```

Alle Dateien im Public-Verzeichnis werden bereitgestellt, indem auch ihr Dateiname (_relativ_ zum Basis-Verzeichnis "public") zur Basis-URL hinzugefügt wird. Also zum Beispiel:

```plain
http://localhost:3000/images/dog.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/about.html
```

Sie können `static()` mehrfach aufrufen, um mehrere Verzeichnisse bereitzustellen. Wenn eine Datei von einer Middleware-Funktion nicht gefunden werden kann, wird sie an die nachfolgende Middleware weitergegeben (die Reihenfolge, in der Middleware aufgerufen wird, basiert auf Ihrer Deklarationsreihenfolge).

```js
app.use(express.static("public"));
app.use(express.static("media"));
```

Sie können auch ein virtuelles Präfix für Ihre statischen URLs erstellen, anstatt die Dateien zur Basis-URL hinzuzufügen. Beispielweise geben wir hier einen [Montagepfad](https://expressjs.com/en/5x/api.html#app.use) an, sodass die Dateien mit dem Präfix "/media" geladen werden:

```js
app.use("/media", express.static("public"));
```

Nun können Sie die Dateien, die sich im `public`-Verzeichnis befinden, mit dem `/media`-Pfad-Präfix laden.

```plain
http://localhost:3000/media/images/dog.jpg
http://localhost:3000/media/video/cat.mp4
http://localhost:3000/media/cry.mp3
```

> [!NOTE]
> Siehe auch [Statische Dateien in Express bereitstellen](https://expressjs.com/en/starter/static-files.html).

### Fehlerbehandlung

Fehler werden von einer oder mehreren speziellen Middleware-Funktionen behandelt, die vier Argumente haben, anstatt der üblichen drei: `(err, req, res, next)`. Beispiel:

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

Diese Funktionen können jeden gewünschten Inhalt zurückgeben, müssen jedoch nach allen anderen `app.use()`- und Routen-Aufrufen aufgerufen werden, damit sie die letzte Middleware im Anforderungsverarbeitungsprozess sind!

Express hat einen eingebauten Fehler-Handler, der sich um alle verbleibenden Fehler kümmert, die in der App auftreten könnten. Diese standardmäßige Fehlerbehandlungsmiddleware ist am Ende des Middleware-Funktionsstapels hinzugefügt. Wenn Sie einen Fehler an `next()` weitergeben und ihn in einem Fehler-Handler nicht behandeln, wird er vom eingebauten Fehler-Handler behandelt; der Fehler wird mit der Stack-Trace an den Client geschrieben.

> [!NOTE]
> Der Stack-Trace ist nicht in der Produktionsumgebung enthalten. Um ihn im Produktionsmodus auszuführen, müssen Sie die Umgebungsvariable `NODE_ENV` auf `"production"` setzen.

> [!NOTE]
> HTTP404 und andere "Fehler"-Statuscodes werden nicht als Fehler behandelt. Wenn Sie diese behandeln möchten, können Sie eine Middleware-Funktion hinzufügen, um dies zu tun. Weitere Informationen finden Sie in den [FAQ](https://expressjs.com/en/starter/faq.html#how-do-i-handle-404-responses).

Für mehr Informationen siehe [Fehlerbehandlung](https://expressjs.com/en/guide/error-handling.html) (Express-Dokumentation).

### Verwendung von Datenbanken

_Express_-Apps können jeden Datenbankmechanismus verwenden, den _Node_ unterstützt (_Express_ selbst definiert kein spezielles zusätzliches Verhalten/Anforderungen für das Datenbankmanagement). Es gibt viele Optionen, einschließlich PostgreSQL, MySQL, Redis, SQLite, MongoDB usw.

Um diese zu verwenden, müssen Sie zuerst den Datenbankschreiber mit npm in Ihrer App installieren. Zum Beispiel, um den Treiber für die beliebte NoSQL MongoDB zu installieren, würden Sie den Befehl verwenden:

```bash
npm install mongodb
```

Die Datenbank selbst kann lokal oder auf einem Cloud-Server installiert sein. In Ihrem Express-Code importieren Sie den Treiber, verbinden sich mit der Datenbank, und führen dann Create-, Read-, Update- und Delete-Operationen (CRUD) durch. Das unten stehende Beispiel (aus der Express-Dokumentation) zeigt, wie Sie mit MongoDB (ab Version 3.0) "Säugetier"-Einträge finden können:

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

Ein weiterer beliebter Ansatz ist der indirekte Zugriff auf Ihre Datenbank über einen Object-Relational-Mapper ("ORM"). Bei diesem Ansatz definieren Sie Ihre Daten als "Objekte" oder "Modelle" und der ORM bildet diese auf das zugrunde liegende Datenbankformat ab. Diese Vorgehensweise hat den Vorteil, dass Sie als Entwickler weiterhin in Bezug auf JavaScript-Objekte denken können, anstatt über Datenbank-Semantik, und dass es einen offensichtlichen Ort gibt, um die Validierung und Überprüfung eingehender Daten durchzuführen. Wir werden mehr über Datenbanken in einem späteren Artikel sprechen.

Für mehr Informationen siehe [Datenbank-Integration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation).

### Daten rendern (Ansichten)

Template-Engines (auch als "View-Engines" in _Express_ bezeichnet) ermöglichen es Ihnen, die _Struktur_ eines Ausgabedokuments in einer Vorlage zu spezifizieren, indem Sie Platzhalter für Daten verwenden, die bei der Erstellung einer Seite eingefügt werden. Vorlagen werden häufig verwendet, um HTML zu erstellen, können aber auch andere Dokumenttypen erzeugen.

Express unterstützt eine Reihe von Template-Engines, insbesondere Pug (früher "Jade"), Mustache und EJS. Jede hat ihre eigenen Stärken zur Bewältigung bestimmter Anwendungsfälle (relative Vergleiche können leicht über eine Internet-Suche gefunden werden).
Der Express-Anwendungsgenerator verwendet Jade standardmäßig, unterstützt aber auch mehrere andere.

In Ihren Anwendungs-Einstellungen legen Sie die zu verwendende Vorlage-Engine fest und den Speicherort, an dem Express nach Vorlagen suchen soll, mithilfe der 'views'- und 'view engine'-Einstellungen, wie unten gezeigt (Sie müssen auch das Paket installieren, das Ihre Vorlagenbibliothek enthält!)

```js
const express = require("express");
const path = require("path");

const app = express();

// Set directory to contain the templates ('views')
app.set("views", path.join(__dirname, "views"));

// Set view engine to use, in this case 'some_template_engine_name'
app.set("view engine", "some_template_engine_name");
```

Das Erscheinungsbild der Vorlage hängt davon ab, welche Engine Sie verwenden. Angenommen, Sie haben eine Vorlagendatei mit dem Namen "index.\<template_extension>", die Platzhalter für Datenvariablen mit den Namen 'title' und "message" enthält, würden Sie [`Response.render()`](https://expressjs.com/en/5x/api.html#res.render) in einer Routen-Handler-Funktion aufrufen, um die HTML-Antwort zu erstellen und zu senden:

```js
app.get("/", (req, res) => {
  res.render("index", { title: "About dogs", message: "Dogs rock!" });
});
```

Für mehr Informationen siehe [Verwenden von Template-Engines mit Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation).

### Dateistruktur

Express macht keine Annahmen in Bezug auf die Struktur oder welche Komponenten Sie verwenden. Routen, Ansichten, statische Dateien und andere anwendungsspezifische Logik können in beliebig vielen Dateien mit beliebiger Verzeichnisstruktur untergebracht sein. Es ist zwar durchaus möglich, die gesamte _Express_-Anwendung in einer Datei zu haben, in der Regel macht es jedoch Sinn, Ihre Anwendung in Dateien basierend auf Funktion (z.B. Kontoverwaltung, Blogs, Diskussionsforen) und architektonischem Problembereich (z.B. Modell, Ansicht oder Controller, wenn Sie zufälligerweise eine {{Glossary("MVC", "MVC-Architektur")}} verwenden) zu unterteilen.

In einem späteren Thema werden wir den _Express Application Generator_ verwenden, der ein modulares App-Skelett erstellt, das wir leicht erweitern können, um Webanwendungen zu erstellen.

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben den ersten Schritt in Ihr Express/Node-Abenteuer abgeschlossen! Sie sollten nun die Hauptvorteile von Express und Node verstehen und grob wissen, wie die Hauptteile einer Express-App aussehen könnten (Routen, Middleware, Fehlerbehandlung und Vorlagen-Code). Sie sollten auch verstehen, dass mit Express als einem unparteiierten Framework der Weg, wie Sie diese Teile zusammenfügen und die von Ihnen verwendeten Bibliotheken weitgehend Ihnen überlassen ist!

Natürlich ist Express absichtlich ein sehr leichtgewichtiges Webanwendungsframework, und so viel seines Nutzens und Potenzials stammt aus Drittanbieter-Bibliotheken und -Features. Auf diese werden wir in den folgenden Artikeln näher eingehen. In unserem nächsten Artikel betrachten wir die Einrichtung einer Node-Entwicklungsumgebung, damit Sie einige Express-Codes in Aktion sehen können.

## Siehe auch

- [Learn Node.js](https://scrimba.com/learn-nodejs-c00ho9qqh6?via=mdn) von Scrimba <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine unterhaltsame, interaktive Einführung in Node.js.
- [Learn Express.js](https://scrimba.com/learn-expressjs-c062las154?via=mdn) von Scrimba <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> baut auf dem vorherigen Link auf und zeigt, wie man das Express-Framework verwendet, um serverseitige Websites zu erstellen.
- [Module](https://nodejs.org/api/modules.html#modules_modules) (Node API-Dokumente)
- [Express](https://expressjs.com/) (Homepage)
- [Grundlegendes Routing](https://expressjs.com/en/starter/basic-routing.html) (Express-Dokumente)
- [Routing-Leitfaden](https://expressjs.com/en/guide/routing.html) (Express-Dokumente)
- [Verwenden von Template-Engines mit Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumente)
- [Verwendung von Middleware](https://expressjs.com/en/guide/using-middleware.html) (Express-Dokumente)
- [Schreiben von Middleware für Express-Apps](https://expressjs.com/en/guide/writing-middleware.html) (Express-Dokumente)
- [Datenbank-Integration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumente)
- [Statische Dateien in Express bereitstellen](https://expressjs.com/en/starter/static-files.html) (Express-Dokumente)
- [Fehlerbehandlung](https://expressjs.com/en/guide/error-handling.html) (Express-Dokumente)

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
