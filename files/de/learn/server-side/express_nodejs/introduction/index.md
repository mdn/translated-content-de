---
title: Einführung in Express/Node
slug: Learn/Server-side/Express_Nodejs/Introduction
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{LearnSidebar}}{{NextMenu("Learn/Server-side/Express_Nodejs/development_environment", "Learn/Server-side/Express_Nodejs")}}

Im ersten Artikel zu Express beantworten wir die Fragen "Was ist Node?" und "Was ist Express?" und geben Ihnen einen Überblick darüber, was das Express-Web-Framework besonders macht. Wir skizzieren die Hauptmerkmale und zeigen Ihnen einige der wichtigsten Bausteine einer Express-Anwendung (obwohl Sie zu diesem Zeitpunkt noch keine Entwicklungsumgebung haben werden, um diese zu testen).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein allgemeines Verständnis der <a href="/de/docs/Learn/Server-side/First_steps">serverseitigen Website-Programmierung</a> und insbesondere der Mechanismen von <a href="/de/docs/Learn/Server-side/First_steps/Client-Server_overview">Client-Server-Interaktionen auf Websites</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Vertrautheit mit Express gewinnen, verstehen, wie es in Node passt, welche Funktionalität es bietet und die Hauptbausteine einer Express-Anwendung kennen lernen.
      </td>
    </tr>
  </tbody>
</table>

## Einführung in Node

[Node](https://nodejs.org/) (oder formell _Node.js_) ist eine quelloffene, plattformübergreifende Laufzeitumgebung, die es Entwicklern ermöglicht, alle Arten von serverseitigen Werkzeugen und Anwendungen in [JavaScript](/de/docs/Glossary/JavaScript) zu erstellen. Die Laufzeit ist für den Einsatz außerhalb eines Browser-Kontexts gedacht (d. h. direkt auf einem Computer oder Server-Betriebssystem). Daher verzichtet die Umgebung auf browser-spezifische JavaScript-APIs und fügt Unterstützung für traditionellere OS-APIs, einschließlich HTTP- und Dateisystembibliotheken, hinzu.

Aus der Perspektive der Webserver-Entwicklung bietet Node eine Reihe von Vorteilen:

- Hervorragende Leistung! Node wurde entwickelt, um den Durchsatz und die Skalierbarkeit von Webanwendungen zu optimieren, und ist eine gute Lösung für viele gängige Webentwicklungsprobleme (z. B. Echtzeit-Webanwendungen).
- Der Code wird in „gewöhnlichem JavaScript“ geschrieben, was bedeutet, dass weniger Zeit mit dem Wechsel zwischen Sprachen verbracht wird, wenn Sie sowohl Client- als auch serverseitigen Code schreiben.
- JavaScript ist eine relativ neue Programmiersprache und profitiert im Vergleich zu anderen traditionellen Webserver-Sprachen (z. B. Python, PHP usw.) von Verbesserungen im Sprachdesign. Viele andere neue und beliebte Sprachen werden in JavaScript kompiliert/umgewandelt, sodass Sie auch TypeScript, CoffeeScript, ClojureScript, Scala, LiveScript usw. verwenden können.
- Der Node-Paketmanager (npm) bietet Zugang zu Hunderttausenden von wiederverwendbaren Paketen. Er verfügt auch über eine erstklassige Abhängigkeitsauflösung und kann auch zum Automatisieren der meisten Teile der Build-Toolkette verwendet werden.
- Node.js ist portabel. Es ist verfügbar für Microsoft Windows, macOS, Linux, Solaris, FreeBSD, OpenBSD, WebOS und NonStop OS. Darüber hinaus wird es von vielen Webhosting-Anbietern gut unterstützt, die oft spezielle Infrastruktur und Dokumentation für das Hosting von Node-Sites bereitstellen.
- Es hat ein sehr aktives Ökosystem von Drittanbietern und eine Entwickler-Community, mit vielen Menschen, die bereit sind zu helfen.

Sie können Node.js verwenden, um einen einfachen Webserver mit dem Node HTTP-Paket zu erstellen.

### Hallo Node.js

Das folgende Beispiel erstellt einen Webserver, der auf jede Art von HTTP-Anfrage an die URL `http://127.0.0.1:8000/` wartet — wenn eine Anfrage eingeht, wird das Skript mit dem String "Hello World" antworten. Wenn Sie Node bereits installiert haben, können Sie diese Schritte ausführen, um das Beispiel auszuprobieren:

1. Öffnen Sie das Terminal (unter Windows öffnen Sie die Befehlszeilen-Dienstprogramme)
2. Erstellen Sie den Ordner, in dem Sie das Programm speichern möchten, beispielsweise `test-node`, und betreten Sie diesen, indem Sie den folgenden Befehl in Ihr Terminal eingeben:

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

Navigieren Sie abschließend zu `http://localhost:8000` in Ihrem Webbrowser; Sie sollten den Text "**Hello World**" oben links auf einer ansonsten leeren Webseite sehen.

## Web-Frameworks

Andere gängige Webentwicklung-Aufgaben werden von Node selbst nicht direkt unterstützt. Wenn Sie spezifische Handhabung für verschiedene HTTP-Verben hinzufügen möchten (z.B. `GET`, `POST`, `DELETE`, usw.), Anfragen an verschiedenen URL-Pfaden ("Routen") separat verarbeiten, statische Dateien bereitstellen oder Vorlagen verwenden möchten, um die Antwort dynamisch zu erstellen, wird Node alleine nicht viel helfen. Sie müssen entweder den Code selbst schreiben, oder Sie können sich die Mühe sparen und ein Web-Framework verwenden!

## Einführung in Express

[Express](https://expressjs.com/) ist das bekannteste Node.js-Web-Framework und die zugrunde liegende Bibliothek für eine Reihe anderer beliebter Node.js-Frameworks. Es bietet Mechanismen zum:

- Schreiben von Handlern für Anfragen mit verschiedenen HTTP-Verben an verschiedenen URL-Pfaden (Routen).
- Integration mit "View"-Rendering-Engines, um Antworten durch Einfügen von Daten in Vorlagen zu generieren.
- Festlegen gängiger Webanwendungseinstellungen wie den zu verwendenden Anschluss zum Verbinden und den Standort der Vorlagen, die zum Rendern der Antwort verwendet werden.
- Hinzufügen zusätzlicher Anfrageverarbeitung-"Middleware" an jedem Punkt innerhalb der Anfragebearbeitungskette.

Während _Express_ selbst relativ minimalistisch ist, haben Entwickler kompatible Middleware-Pakete erstellt, die nahezu jedes Webentwicklungsproblem lösen können. Es gibt Bibliotheken zur Arbeit mit Cookies, Sitzungen, Benutzeranmeldungen, URL-Parametern, `POST`-Daten, Sicherheitsheadern und _vielen_ mehr. Eine Liste der von der Express-Team gepflegten Middleware-Pakete finden Sie unter [Express Middleware](https://expressjs.com/en/resources/middleware.html) (zusammen mit einer Liste einiger beliebter Drittanbieter-Pakete).

> [!NOTE]
> Diese Flexibilität ist ein zweischneidiges Schwert. Es gibt Middleware-Pakete, die nahezu jedes Problem oder jede Anforderung lösen können, aber die richtige Auswahl der zu verwendenden Pakete kann manchmal eine Herausforderung sein. Es gibt auch keinen "richtigen Weg", um eine Anwendung zu strukturieren, und viele Beispiele, die Sie möglicherweise im Internet finden, sind nicht optimal oder zeigen nur einen kleinen Teil dessen, was Sie tun müssen, um eine Webanwendung zu entwickeln.

## Woher kommen Node und Express?

Node wurde ursprünglich 2009 veröffentlicht, zunächst nur für Linux. Der npm-Paketmanager wurde 2010 veröffentlicht und die native Windows-Unterstützung wurde 2012 hinzugefügt. Stöbern Sie bei Interesse in [Wikipedia](https://en.wikipedia.org/wiki/Node.js#History) für weitere Informationen.

Express wurde erstmals im November 2010 veröffentlicht und ist derzeit in der Hauptversion 4 der API. Sie können im [Changelog](https://expressjs.com/en/changelog/4x.html) Informationen zu Änderungen in der aktuellen Version und auf [GitHub](https://github.com/expressjs/express/blob/master/History.md) detailliertere historische Versionsverlauf-Notizen finden.

## Wie beliebt sind Node und Express?

Die Beliebtheit eines Web-Frameworks ist wichtig, da sie ein Indikator dafür ist, ob es weiterhin gepflegt wird und welche Ressourcen in Bezug auf Dokumentation, Zusatzbibliotheken und technischen Support wahrscheinlich verfügbar sind.

Es gibt keine leicht zugängliche und endgültige Messung der Beliebtheit von serverseitigen Frameworks (obwohl man die Beliebtheit durch Mechanismen wie das Zählen der Anzahl der GitHub-Projekte und StackOverflow-Fragen für jede Plattform schätzen könnte). Eine bessere Frage ist, ob Node und Express "beliebt genug" sind, um die Probleme unpopulärer Plattformen zu vermeiden. Entwickeln sie sich weiter? Können Sie Hilfe bekommen, wenn Sie sie brauchen? Gibt es die Möglichkeit für Sie, bezahlte Arbeit zu bekommen, wenn Sie Express lernen?

Basierend auf der Anzahl hochkarätiger Unternehmen, die Express verwenden, der Anzahl der Personen, die zum Code beitragen, und der Anzahl der Personen, die sowohl kostenlosen als auch kostenpflichtigen Support bieten, dann ja, _Express_ ist ein beliebtes Framework!

## Ist Express meinungsstark?

Web-Frameworks bezeichnen sich oft als "meinungsstark" oder "nicht meinungsstark".

Meinungsstarke Frameworks sind solche, die eine Meinung darüber haben, was der „richtige Weg“ ist, um eine bestimmte Aufgabe zu erledigen. Sie unterstützen oft die schnelle Entwicklung _in einem bestimmten Bereich_ (Problemlösung eines bestimmten Typs), weil der richtige Weg, etwas zu tun, in der Regel gut verständlich und gut dokumentiert ist. Sie können jedoch bei der Lösung von Problemen außerhalb ihres Hauptbereichs weniger flexibel sein und bieten häufig weniger Auswahlmöglichkeiten bei den zu verwendenden Komponenten und Ansätzen.

Nicht meinungsstarke Frameworks hingegen haben weit weniger Einschränkungen in Bezug auf die beste Art und Weise, wie Komponentenzusammengebunden werden, um ein Ziel zu erreichen, oder welche Komponenten verwendet werden sollen. Sie erleichtern es Entwicklern, die am besten geeigneten Werkzeuge zu verwenden, um eine bestimmte Aufgabe zu erledigen, allerdings auf Kosten dessen, dass Sie diese Komponenten selbst finden müssen.

Express ist nicht meinungsstark. Sie können nahezu jede kompatible Middleware nach Belieben in die Anfragenbearbeitungskette einfügen. Sie können die App in einer Datei oder mehreren Dateien und mit jeder Verzeichnisstruktur organisieren. Manchmal haben Sie vielleicht das Gefühl, dass Sie zu viele Auswahlmöglichkeiten haben!

## Wie sieht Express-Code aus?

In einer traditionellen datengesteuerten Website wartet eine Webanwendung auf HTTP-Anfragen vom Webbrowser (oder einem anderen Client). Wenn eine Anfrage eingeht, ermittelt die Anwendung, welche Aktion basierend auf dem URL-Muster und möglicherweise damit verbundenen Informationen, die in `POST`- oder `GET`-Daten enthalten sind, erforderlich ist. Abhängig davon, was benötigt wird, kann sie Informationen aus einer Datenbank lesen oder schreiben oder andere Aufgaben ausführen, die erforderlich sind, um die Anfrage zu erfüllen. Die Anwendung gibt dann eine Antwort an den Webbrowser zurück, oft indem sie dynamisch eine HTML-Seite für den Browser erstellt, indem sie die abgerufenen Daten in Platzhalter in einer HTML-Vorlage einfügt.

Express bietet Methoden, um anzugeben, welche Funktion für ein bestimmtes HTTP-Verb (`GET`, `POST`, `PUT`, etc.) und URL-Muster ("Route") aufgerufen wird, sowie Methoden, um anzugeben, welche Template-("View")-Engine verwendet wird, wo sich die Vorlagendateien befinden und welche Vorlage für eine Antwort verwendet werden soll. Sie können Express-Middleware verwenden, um Unterstützung für Cookies, Sitzungen und Benutzer hinzuzufügen, `POST`/`GET`-Parameter zu erhalten usw. Sie können jeden von Node unterstützten Datenbankmechanismus verwenden (Express definiert kein datenbankbezogenes Verhalten).

In den folgenden Abschnitten werden einige der allgemeinen Dinge erklärt, die Sie beim Arbeiten mit _Express_- und _Node_-Code sehen werden.

### Helloworld Express

Betrachten wir zunächst das standardmäßige Express-Beispiel [Hello World](https://expressjs.com/en/starter/hello-world.html) (wir besprechen jeden Teil davon weiter unten und in den folgenden Abschnitten).

> [!NOTE]
> Wenn Sie Node und Express bereits installiert haben (oder wenn Sie diese wie im [nächsten Artikel](/de/docs/Learn/Server-side/Express_Nodejs/development_environment) gezeigt installieren), können Sie diesen Code in einer Textdatei namens **app.js** speichern und ihn in einer Bash-Befehlszeile ausführen, indem Sie folgendes eingeben:
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

Die ersten beiden Zeilen `require()` (importieren) das Express-Modul und erstellen eine [Express-Anwendung](https://expressjs.com/en/4x/api.html#app). Dieses Objekt, das traditionell `app` genannt wird, hat Methoden zum Routen von HTTP-Anfragen, Konfigurieren von Middleware, Rendern von HTML-Ansichten, Registrieren einer Template-Engine und zum Ändern der [Anwendungseinstellungen](https://expressjs.com/en/4x/api.html#app.settings.table), die steuern, wie die Anwendung sich verhält (z.B. den Modus der Umgebung, ob Routen-Definitionen case-sensitive sind usw.)

Der mittlere Teil des Codes (die drei Zeilen, beginnend mit `app.get`) zeigt eine _Routendefinition_. Die `app.get()`-Methode gibt eine Callback-Funktion an, die immer dann aufgerufen wird, wenn eine HTTP-`GET`-Anfrage mit einem Pfad (`'/'`) relativ zum Site-Root vorliegt. Die Callback-Funktion nimmt ein Anfrage- und ein Antwortobjekt als Argumente und ruft [`send()`](https://expressjs.com/en/4x/api.html#res.send) auf der Antwort auf, um den String "Hello World!" zurückzugeben.

Der letzte Block startet den Server auf einem angegebenen Port ('3000') und gibt einen Kommentar in die Konsole aus. Bei laufendem Server könnten Sie `localhost:3000` in Ihrem Browser aufrufen, um die Beispielantwort zu sehen.

### Module importieren und erstellen

Ein Modul ist eine JavaScript-Bibliothek/-Datei, die Sie mit der `require()`-Funktion von Node in anderen Code importieren können. _Express_ selbst ist ein Modul, ebenso wie die Middleware- und Datenbankbibliotheken, die wir in unseren _Express_-Anwendungen verwenden.

Der untenstehende Code zeigt, wie wir ein Modul nach Name importieren, unter Verwendung des _Express_-Frameworks als Beispiel. Zuerst rufen wir die `require()`-Funktion auf, indem wir den Namen des Moduls als String (`'express'`) angeben und das zurückgegebene Objekt aufrufen, um eine [Express-Anwendung](https://expressjs.com/en/4x/api.html#app) zu erstellen. Wir können dann auf die Eigenschaften und Funktionen des Anwendungsobjekts zugreifen.

```js
const express = require("express");
const app = express();
```

Sie können auch Ihre eigenen Module erstellen, die auf die gleiche Weite importiert werden können.

> [!NOTE]
> Sie _möchten_ Ihre eigenen Module erstellen, da dies Ihnen ermöglicht, Ihren Code in überschaubare Teile zu gliedern – eine monolithische Anwendung in einer einzigen Datei ist schwer zu verstehen und zu pflegen. Die Verwendung von Modulen hilft Ihnen auch dabei, Ihren Namensraum zu verwalten, da nur die Variablen, die Sie ausdrücklich exportieren, importiert werden, wenn Sie ein Modul verwenden.

Um Objekte außerhalb eines Moduls verfügbar zu machen, müssen Sie sie nur als zusätzliche Eigenschaften am `exports`-Objekt freigeben. Zum Beispiel ist das Modul **square.js** unten eine Datei, die `area()`- und `perimeter()`-Methoden exportiert:

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

Wenn Sie ein vollständiges Objekt in einer Zuweisung exportieren möchten, anstatt es eine Eigenschaft nach der anderen zu erstellen, weisen Sie es `module.exports` zu, wie unten gezeigt (Sie können dies auch tun, um die Wurzel des `exports`-Objekts zu einem Konstruktor oder einer anderen Funktion zu machen):

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
> Sie können `exports` als ein [Abkürzung](https://nodejs.org/api/modules.html#modules_exports_shortcut) zu `module.exports` innerhalb eines gegebenen Moduls betrachten. Tatsächlich ist `exports` nur eine Variable, die auf den Wert von `module.exports` initiiert wird, bevor das Modul ausgewertet wird. Dieser Wert ist eine Referenz auf ein Objekt (leeres Objekt in diesem Fall). Das bedeutet, dass `exports` auf dasselbe Objekt verweist, auf das `module.exports` verweist. Das bedeutet auch, dass durch die Zuweisung eines anderen Werts zu `exports` es keine Bindung mehr an `module.exports` besitzt.

Für eine Menge mehr Informationen über Module siehe [Modules](https://nodejs.org/api/modules.html#modules_modules) (Node API docs).

### Verwenden von asynchronen APIs

JavaScript-Code verwendet häufig asynchrone statt synchroner APIs für Operationen, die einige Zeit in Anspruch nehmen können. Eine synchrone API ist eine, bei der jede Operation abgeschlossen sein muss, bevor die nächste Operation beginnen kann. Zum Beispiel sind die folgenden Log-Funktionen synchron und drucken den Text in der Reihenfolge auf die Konsole (Erster, Zweiter).

```js
console.log("First");
console.log("Second");
```

Im Gegensatz dazu ist eine asynchrone API eine, bei der die API eine Operation startet und sofort zurückkehrt (bevor die Operation abgeschlossen ist). Sobald die Operation beendet ist, verwendet die API einen Mechanismus, um zusätzliche Operationen durchzuführen. Der folgende Code beispielsweise druckt "Zweiter, Erster" aus, weil selbst wenn die Methode `setTimeout()` zuerst aufgerufen und sofort zurückgegeben wird, die Operation selbst mehrere Sekunden dauert bleibt.

```js
setTimeout(function () {
  console.log("First");
}, 3000);
console.log("Second");
```

Die Verwendung von nicht-blockierenden asynchronen APIs ist in Node noch wichtiger als im Browser, da _Node_ eine ereignisgesteuerte Einzeleinen-Ausführungsumgebung ist. "Einzelnes Thread" bedeutet, dass alle Anfragen an den Server im selben Thread ausgeführt werden (anstatt in separate Prozesse ausgelagert zu werden). Dieses Modell ist extrem effizient in Bezug auf die Geschwindigkeit und Server-Ressourcen, allerdings bedeutet dies, dass wenn eine Ihrer Funktionen synchrone Methoden aufruft, die lange Zeit benötigen, um beendet zu werden, dies nicht nur die derzeitige Anfrage blockiert, sondern auch jede andere Anfrage, die von Ihrer Webanwendung bearbeitet wird.

Es gibt mehrere Möglichkeiten, wie eine asynchrone API Ihre Anwendung benachrichtigen kann, dass sie abgeschlossen ist. Der häufigste Weg ist, eine Callback-Funktion zu registrieren, wenn Sie die asynchrone API aufrufen, die aufgerufen wird, wenn die Operation abgeschlossen ist. Das ist der Ansatz, der oben verwendet wird.

> [!NOTE]
> Die Verwendung von Rückrufen kann recht "chaotisch" sein, wenn Sie eine Folge von abhängigen asynchronen Operationen haben, die in einer bestimmten Reihenfolge ausgeführt werden müssen, da dies zu mehreren Ebenen von verschachtelten Rückrufen führt. Dieses Problem ist allgemein als "Callback-Hölle" bekannt. Dieses Problem kann durch gute Codierpraktiken reduziert werden (siehe <http://callbackhell.com/>), indem ein Modul wie [async](https://www.npmjs.com/package/async) verwendet wird, oder durch das Umgestalten des Codes auf native JavaScript-Funktionen wie [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) und [async/await](/de/docs/Web/JavaScript/Reference/Statements/async_function). Node bietet die Funktion [`utils.promisify`](https://nodejs.org/api/util.html#utilpromisifyoriginal), um die Callback- zu Promise-Konvertierung ergonomisch zu gestalten.

> [!NOTE]
> Eine gängige Konvention für Node und Express ist die Verwendung von Callback-Funktionen mit Fehlern an erster Stelle. Bei dieser Konvention ist der erste Wert in Ihren _Rückruffunktionen_ ein Fehlerwert, während die nachfolgenden Argumente Erfolgsdaten enthalten. Es gibt eine gute Erklärung, warum dieser Ansatz nützlich ist, in diesem Blog: [The Node.js Way - Understanding Error-First Callbacks](https://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/) (fredkschott.com).

### Erstellen von Routen-Handlern

In unserem _Hello World_-Express-Beispiel (siehe oben) haben wir eine (Callback-)Routenhandlerfunktion für HTTP-`GET`-Anfragen an das Site-Root (`'/'`) definiert.

```js
app.get("/", function (req, res) {
  res.send("Hello World!");
});
```

Die Callback-Funktion nimmt ein Anfrage- und ein Antwortobjekt als Argumente. In diesem Fall ruft die Methode [`send()`](https://expressjs.com/en/4x/api.html#res.send) auf der Antwort-Objekt auf, um den String "Hello World!" zurückzugeben. Es gibt eine [Reihe anderer Antwortmethoden](https://expressjs.com/en/guide/routing.html#response-methods), um den Anfragen-/Antwortzyklus zu beenden, beispielsweise können Sie [`res.json()`](https://expressjs.com/en/4x/api.html#res.json) aufrufen, um eine JSON-Antwort zu senden oder [`res.sendFile()`](https://expressjs.com/en/4x/api.html#res.sendFile), um eine Datei zu senden.

> [!NOTE]
> Sie können beliebige Argumentnamen in den Callback-Funktionen verwenden. Wenn der Callback aufgerufen wird, wird das erste Argument immer die Anfrage sein und das zweite die Antwort. Es macht Sinn, sie so zu benennen, dass Sie das Objekt identifizieren können, mit dem Sie im Körper des Callbacks gerade arbeiten.

Das Objekt der _Express-Anwendung_ bietet auch Methoden zum Definieren von Routen-Handlern für alle anderen HTTP-Verben, die in der gleichen Weise verwendet werden können:

`checkout()`, `copy()`, **`delete()`**, **`get()`**, `head()`, `lock()`, `merge()`, `mkactivity()`, `mkcol()`, `move()`, `m-search()`, `notify()`, `options()`, `patch()`, **`post()`**, `purge()`, **`put()`**, `report()`, `search()`, `subscribe()`, `trace()`, `unlock()`, `unsubscribe()`.

Es gibt eine spezielle Routing-Methode, `app.all()`, die als Reaktion auf jede HTTP-Methode aufgerufen wird. Diese wird verwendet, um Middleware-Funktionen an einem bestimmten Pfad für alle Anfragemethoden zu laden. Das folgende Beispiel (aus der Express-Dokumentation) zeigt einen Handler, der für Anfragen an `/secret` unabhängig vom verwendeten HTTP-Verb ausgeführt wird (vorausgesetzt, es wird vom [http-Modul](https://nodejs.org/docs/latest/api/http.html#httpmethods) unterstützt).

```js
app.all("/secret", function (req, res, next) {
  console.log("Accessing the secret section…");
  next(); // pass control to the next handler
});
```

Routen ermöglichen es Ihnen, bestimmte Zeichenmuster in einer URL zu erkennen und einige Werte aus der URL herauszuziehen und als Parameter an den Routen-Handler weiterzugeben (als Attribute des Anforderungsobjekts, das als Parameter übergeben wird).

Oft ist es nützlich, Routen-Handler für einen bestimmten Teil einer Website zusammenzufassen und sie unter einem gemeinsamen Routen-Präfix zugänglich zu machen (z.B. eine Site mit einem Wiki könnte alle wiki-bezogenen Routen in einer Datei haben und diese mit einem Routen-Präfix von _/wiki/_ zugänglich machen). In _Express_ wird dies mit dem [`express.Router`](https://expressjs.com/en/guide/routing.html#express-router)-Objekt erreicht. Zum Beispiel können wir unsere Wiki-Route in einem Modul namens **wiki.js** erstellen und dann das `Router`-Objekt exportieren, wie unten gezeigt:

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
> Das Hinzufügen von Routen zum `Router`-Objekt erfolgt genau so wie das Hinzufügen von Routen zum `app`-Objekt (wie zuvor gezeigt).

Um den Router in unserer Haupt-App-Datei zu verwenden, würden wir das Routen-Modul (**wiki.js**) `require()` und dann `use()` auf der _Express_ Anwendung aufrufen, um den Router zum Middleware-Verarbeitungsweg hinzuzufügen. Die beiden Routen sind dann unter `/wiki/` und `/wiki/about/` erreichbar.

```js
const wiki = require("./wiki.js");
// …
app.use("/wiki", wiki);
```

Wir werden Ihnen noch viel mehr darüber zeigen, wie Sie mit Routen arbeiten und insbesondere wie Sie den `Router` verwenden, später im verlinkten Abschnitt [Routen und Controller](/de/docs/Learn/Server-side/Express_Nodejs/routes).

### Verwenden von Middleware

Middleware wird extensiv in Express-Anwendungen verwendet, für Aufgaben wie das Bereitstellen von statischen Dateien, die Fehlerbehandlung oder das Komprimieren von HTTP-Antworten. Während Routenfunktionen den HTTP Anfragen-Antwort-Zyklus beenden, indem sie eine Antwort an den HTTP-Client zurückgeben, führen Middleware-Funktionen _typischerweise_ eine Operation an der Anfrage oder Antwort aus und rufen dann die nächste Funktion im "Stapel" auf, die entweder mehr Middleware sein könnte oder eine Routen-Handler. Die Reihenfolge, in der Middleware aufgerufen wird, liegt beim App-Entwickler.

> [!NOTE]
> Die Middleware kann jede Operation durchführen, jeden Code ausführen, Änderungen am Anfrage- und Antwortobjekt vornehmen, und kann _auch den Anfrage-Antwort-Zyklus beenden_. Wenn es den Zyklus nicht beendet, muss es `next()` aufrufen, um die Kontrolle an die nächste Middleware-Funktion zu übergeben (oder die Anfrage wird hängen gelassen).

Die meisten Apps werden _Drittanbieter_-Middleware verwenden, um gängige Webentwicklungsaufgaben zu vereinfachen, wie die Arbeit mit Cookies, Sitzungen, Benutzerauthentifizierung, Zugreifen auf Anfragedaten `POST` und JSON, Loggen, usw. Sie finden eine [Liste der von der Express-Team gepflegten Middleware-Pakete](https://expressjs.com/en/resources/middleware.html) (die auch andere beliebte Drittanbieter-Pakete umfasst). Andere Express-Pakete sind im npm-Paketmanager verfügbar.

Um Drittanbieter-Middleware zu verwenden, müssen Sie diese zunächst mit npm in Ihrer App installieren.
Beispielsweise, um die [morgan](https://expressjs.com/en/resources/middleware/morgan.html) HTTP-Anfrage-Logger-Middleware zu installieren, würden Sie dies tun:

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
> Middleware- und Routing-Funktionen werden in der Reihenfolge aufgerufen, in der sie deklariert sind. Für einige Middleware ist dieReihenfolge wichtig (beispielsweise wenn Session-Middleware von Cookie-Middleware abhängt, dann muss der Cookie-Handler zuerst hinzugefügt werden). Es ist fast immer der Fall, dass Middleware vor der Einrichtung der Routen aufgerufen wird, oder Ihre Routen-Handler werden keinen Zugriff auf die von Ihrer Middleware hinzugefügte Funktionalität haben.

Sie können Ihre eigenen Middleware-Funktionen schreiben, und Sie sind wahrscheinlich dazu gezwungen, dies zu tun (auch wenn nur, um Fehlerbehandlungscode zu erstellen). Der **einzige** Unterschied zwischen einer Middleware-Funktion und einem Routen-Handler-Callback besteht darin, dass Middleware-Funktionen ein drittes Argument `next`haben, das Middleware-Funktionen aufrufen sollen, wenn sie nicht der Teil sind, der den Anfragenzyklus vervollständigt (wenn die Middleware-Funktion aufgerufen wird, enthält dies die _nächste_ Funktion, die aufgerufen werden muss).

Sie können eine Middleware-Funktion für _alle Antworten_ mit `app.use()` zur Verarbeitungsreihe hinzufügen oder für ein spezifisches HTTP-Verb mit der zugehörigen Methode: `app.get()`, `app.post()`, usw. Routen sind in beiden Fällen auf die gleiche Weise angegeben, obwohl die Route optional ist, wenn `app.use()` aufgerufen wird.

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
app.use("/someroute", a_middleware_function);

// A middleware function added for a specific HTTP verb and route
app.get("/", a_middleware_function);

app.listen(3000);
```

> [!NOTE]
> Oben deklarieren wir die Middleware-Funktion separat und setzen sie dann als Callback. In unserer vorherigen Routen-Handler-Funktion deklarierten wir die Callback-Funktion, wenn sie verwendet wurde. In JavaScript ist beides gültig.

Die Express-Dokumentation enthält viel mehr ausgezeichnete Dokumentation über [Verwendung](https://expressjs.com/en/guide/using-middleware.html) und [Schreiben](https://expressjs.com/en/guide/writing-middleware.html) von Express-Middleware.

### Bereitstellen statischer Dateien

Sie können das [express.static](https://expressjs.com/en/4x/api.html#express.static) Middleware verwenden, um statische Dateien bereitzustellen, einschließlich Ihrer Bilder, CSS und JavaScript (`static()` ist die einzige Middleware-Funktion, die tatsächlich **Teil** von _Express_ ist). Beispielsweise würden Sie die folgende Zeile verwenden, um Bilder, CSS-Dateien und JavaScript-Dateien aus einem auf der gleichen Ebene liegenden Verzeichnis mit dem Namen '**public'** wie den Node-Aufruf bereitzustellen:

```js
app.use(express.static("public"));
```

Alle Dateien im öffentlichen Verzeichnis werden bereitgestellt, indem ihr Dateiname (_relativ_ zum Basis-„Public“-Verzeichnis) zur Basis-URL hinzugefügt wird. Zum Beispiel:

```plain
http://localhost:3000/images/dog.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/about.html
```

Sie können `static()` mehrmals aufrufen, um mehrere Verzeichnisse bereitzustellen. Wenn eine Datei von einer Middleware-Funktion nicht gefunden werden kann, wird sie an die nachfolgende Middleware weitergegeben (die Anrufreihenfolge für Middleware basiert auf der Deklarationsreihenfolge).

```js
app.use(express.static("public"));
app.use(express.static("media"));
```

Sie können auch ein virtuelles Präfix für Ihre statischen URLs erstellen, anstatt die Dateien in die Basis-URL aufzunehmen. Zum Beispiel haben wir hier einen [Mount-Pfad spezifiziert](https://expressjs.com/en/4x/api.html#app.use), sodass die Dateien mit dem Präfix "/media" geladen werden:

```js
app.use("/media", express.static("public"));
```

Jetzt können Sie die Dateien, die sich im `public`-Verzeichnis befinden, mit dem Pfadpräfix `/media` laden.

```plain
http://localhost:3000/media/images/dog.jpg
http://localhost:3000/media/video/cat.mp4
http://localhost:3000/media/cry.mp3
```

> [!NOTE]
> Siehe auch [Bereitstellen von statischen Dateien in Express](https://expressjs.com/en/starter/static-files.html).

### Fehlerbehandlung

Fehler werden von einer oder mehreren speziellen Middleware-Funktionen behandelt, die vier Argumente statt der üblichen drei haben: `(err, req, res, next)`. Zum Beispiel:

```js
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

Diese können beliebigen erforderlichen Inhalt zurückgeben, müssen aber nach allen anderen `app.use()`- und Routenaufrufen aufgerufen werden, damit sie die letzten Middleware im Anfragebearbeitungsprozess sind!

Express kommt mit einem eingebauten Fehler-Handler, der sich um alle verbleibenden Fehler kümmert, die in der App auftreten können. Diese Standard-Fehlerbehandlungsmiddleware wird am Ende des Middleware-Funktionsstapels hinzugefügt. Wenn Sie einen Fehler an `next()` übergeben und ihn nicht in einem Fehler-Handler behandeln, wird er von der eingebauten Fehlerbehandlung behandelt; der Fehler wird mit dem Stacktrace an den Client geschrieben.

> [!NOTE]
> Der Stacktrace ist in der Produktionsumgebung nicht enthalten. Um sie im Produktionsmodus auszuführen, müssen Sie die Umgebungsvariable `NODE_ENV` auf `"production"` setzen.

> [!NOTE]
> HTTP404 und andere "Fehler"-Statuscodes werden nicht als Fehler behandelt. Wenn Sie diese behandeln möchten, können Sie eine Middleware-Funktion hinzufügen, um dies zu tun. Für weitere Informationen siehe [FAQ](https://expressjs.com/en/starter/faq.html#how-do-i-handle-404-responses).

Weitere Informationen finden Sie unter [Error handling](https://expressjs.com/en/guide/error-handling.html) (Express docs).

### Verwendung von Datenbanken

_Express_-Anwendungen können jeden Datenbankmechanismus verwenden, der von _Node_ unterstützt wird (_Express_ selbst definiert kein spezielles zusätzliches Verhalten/Anforderungen für das Datenbankmanagement). Es gibt viele Optionen, einschließlich PostgreSQL, MySQL, Redis, SQLite, MongoDB usw.

Um diese zu verwenden, müssen Sie zuerst den Datenbanktreiber mit npm installieren. Zum Beispiel, um den Treiber für das beliebte NoSQL MongoDB zu installieren, würden Sie den Befehl verwenden:

```bash
npm install mongodb
```

Die Datenbank selbst kann lokal oder auf einem Cloud-Server installiert werden. In Ihrem Express-Code benötigen Sie den Treiber, verbinden sich mit der Datenbank und führen dann die Create-, Read-, Update- und Delete-Operationen (CRUD) durch. Das Beispiel unten (aus der Express-Dokumentation) zeigt, wie Sie "Säugetier"-Datensätze mit MongoDB finden können.

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

Ein weiterer beliebter Ansatz besteht darin, auf Ihre Datenbank indirekt über einen Object-Relational-Mapper ("ORM") zuzugreifen. In diesem Ansatz definieren Sie Ihre Daten als "Objekte" oder "Modelle" und der ORM übersetzt diese in das zugrunde liegende Datenbankformat. Dieser Ansatz hat den Vorteil, dass Sie als Entwickler weiterhin in Bezug auf JavaScript-Objekte anstelle von Datenbank-Semantik denken können und dass es einen offensichtlichen Ort gibt, um die Validierung und Prüfung eingehender Daten durchzuführen. Wir werden später in einem weiteren Artikel mehr über Datenbanken sprechen.

Weitere Informationen finden Sie unter [Database integration](https://expressjs.com/en/guide/database-integration.html) (Express docs).

### Daten rendern (Views)

Template-Engines (in _Express_ auch als "View-Engines" bezeichnet) ermöglichen es Ihnen, die _Struktur_ eines Ausgabedokuments in einer Vorlage anzugeben, indem Sie Platzhalter für Daten verwenden, die beim Generieren einer Seite ausgefüllt werden. Vorlagen werden oft verwendet, um HTML zu erstellen, können jedoch auch andere Dokumenttypen erstellen.

Express unterstützt eine Reihe von Template-Engines, insbesondere Pug (ehemals "Jade"), Mustache und EJS. Jede hat ihre eigenen Stärken für bestimmte Anwendungsfälle (vergleichende Zusammenfassungen lassen sich leicht über Internetsuche finden).
Der Express-Anwendungsgenerator verwendet Jade als Standard, unterstützt jedoch auch mehrere andere.

In Ihrem Anwendungseinstellungs-Code legen Sie die zu verwendende Template-Engine und den Ort, an dem Express nach Vorlagen suchen soll, mit den 'views'- und 'view engine'-Einstellungen fest, wie unten gezeigt (Sie müssen auch das Paket installieren, das Ihre Vorlagenbibliothek enthält!)

```js
const express = require("express");
const path = require("path");
const app = express();

// Set directory to contain the templates ('views')
app.set("views", path.join(__dirname, "views"));

// Set view engine to use, in this case 'some_template_engine_name'
app.set("view engine", "some_template_engine_name");
```

Das Aussehen der Vorlage hängt von der Engine ab, die Sie verwenden. Angenommen, Sie haben eine Vorlagendatei namens "index.\<template_extension>", die Platzhalter für die Datensvariablen 'title' und "message" enthält, Sie würden [`Response.render()`](https://expressjs.com/en/4x/api.html#res.render) in einer Routen-Handler-Funktion aufrufen, um die HTML-Antwort zu erstellen und zu senden:

```js
app.get("/", function (req, res) {
  res.render("index", { title: "About dogs", message: "Dogs rock!" });
});
```

Weitere Informationen finden Sie unter [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express docs).

### Dateistruktur

Express macht keine Annahmen in Bezug auf Struktur oder welche Komponenten verwendet werden. Routen, Views, statische Dateien und andere anwendungsspezifische Logik können in einer beliebigen Anzahl von Dateien mit beliebiger Verzeichnisstruktur gespeichert werden. Obwohl es durchaus möglich ist, die gesamte _Express_-Anwendung in einer Datei zu haben, macht es in der Regel Sinn, Ihre Anwendung basierend auf der Funktion zu teilen (z.B. Kontoverwaltung, Blogs, Diskussionsforen) und dem architektonischen Problembereich (z.B. Modell, View oder Controller, wenn Sie zufällig eine [MVC-Architektur](/de/docs/Glossary/MVC) verwenden).

In einem späteren Thema werden wir den _Express Application Generator_ verwenden, der ein modulares App-Grundgerüst erstellt, das wir einfach erweitern können, um Webanwendungen zu erstellen.

## Zusammenfassung

Glückwunsch, Sie haben den ersten Schritt auf Ihrer Express/Node-Reise abgeschlossen! Sie sollten jetzt die Hauptvorteile von Express und Node verstehen und ungefähr wissen, wie die Hauptteile einer Express-Anwendung aussehen könnten (Routen, Middleware, Fehlerbehandlung und Template-Code). Sie sollten auch verstehen, dass Express als nicht meinungsstarkes Framework der Weg, wie Sie diese Teile zusammenfügen und die Bibliotheken, die Sie verwenden, weitgehend Ihnen überlassen sind!

Natürlich ist Express absichtlich ein sehr leichtgewichtiges Webanwendungsframework, so dass ein Großteil seines Nutzens und Potenzials von Drittanbieterbibliotheken und -funktionen kommt. Wir werden diese in den folgenden Artikeln genauer betrachten. In unserem nächsten Artikel werden wir uns die Einrichtung einer Node-Entwicklungsumgebung ansehen, damit Sie einige Express-Codes in Aktion sehen können.

## Siehe auch

- [Venkat.R - Manage Multiple Node versions](https://medium.com/@ramsunvtech/manage-multiple-node-versions-e3245d5ede44)
- [Modules](https://nodejs.org/api/modules.html#modules_modules) (Node API docs)
- [Express](https://expressjs.com/) (Startseite)
- [Basic routing](https://expressjs.com/en/starter/basic-routing.html) (Express docs)
- [Routing guide](https://expressjs.com/en/guide/routing.html) (Express docs)
- [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express docs)
- [Using middleware](https://expressjs.com/en/guide/using-middleware.html) (Express docs)
- [Writing middleware for use in Express apps](https://expressjs.com/en/guide/writing-middleware.html) (Express docs)
- [Database integration](https://expressjs.com/en/guide/database-integration.html) (Express docs)
- [Serving static files in Express](https://expressjs.com/en/starter/static-files.html) (Express docs)
- [Error handling](https://expressjs.com/en/guide/error-handling.html) (Express docs)

{{NextMenu("Learn/Server-side/Express_Nodejs/development_environment", "Learn/Server-side/Express_Nodejs")}}
