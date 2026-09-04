---
title: Einführung in Express/Node
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction
l10n:
  sourceCommit: f4c14731a1a157fc8d8f7357ac4d74d14a7d7fb5
---

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Im ersten Artikel zu Express beantworten wir die Fragen „Was ist Node?“ und „Was ist Express?“ und geben Ihnen einen Überblick darüber, was das Express-Web-Framework so besonders macht. Wir skizzieren die Hauptmerkmale und zeigen Ihnen einige der wichtigsten Bausteine einer Express-Anwendung (obwohl Sie zu diesem Zeitpunkt noch keine Entwicklungsumgebung haben, um diese zu testen).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein allgemeines Verständnis für <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps">serverseitige Website-Programmierung</a> und insbesondere die Mechanik der <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview">Client-Server-Interaktionen in Websites</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit dem zu gewinnen, was Express ist und wie es mit Node zusammenpasst, welche Funktionalität es bietet und die Hauptbausteine einer Express-Anwendung.
      </td>
    </tr>
  </tbody>
</table>

## Einführung in Node

[Node](https://nodejs.org/) (oder formeller _Node.js_) ist eine Open-Source-Plattform für plattformübergreifende Laufzeitumgebungen, die es Entwicklern ermöglicht, alle Arten von serverseitigen Tools und Anwendungen in {{Glossary("JavaScript", "JavaScript")}} zu erstellen. Die Laufzeit ist zur Verwendung außerhalb des Browser-Kontexts konzipiert (d.h. läuft direkt auf einem Computer oder Server-OS). Daher lässt die Umgebung browser-spezifische JavaScript-APIs weg und fügt Unterstützung für traditionellere OS-APIs wie HTTP- und Dateisystem-Bibliotheken hinzu.

Aus der Perspektive der Webserver-Entwicklung hat Node eine Reihe von Vorteilen:

- Hervorragende Leistung! Node wurde entwickelt, um den Durchsatz und die Skalierbarkeit in Webanwendungen zu optimieren und ist eine gute Lösung für viele gängige Webentwicklungsprobleme (z. B. Echtzeit-Webanwendungen).
- Der Code wird in „einfachen alten JavaScript“ geschrieben, was bedeutet, dass weniger Zeit mit dem "Wechsel des Kontextes" zwischen Sprachen verloren geht, wenn sowohl Client- als auch Server-seitiger Code geschrieben wird.
- JavaScript ist eine relativ neue Programmiersprache und profitiert von Verbesserungen im Sprachdesign im Vergleich zu anderen traditionellen Webserver-Sprachen (z. B. Python, PHP usw.). Viele andere neue und beliebte Sprachen werden in JavaScript kompiliert/umgewandelt, sodass Sie auch TypeScript, CoffeeScript, ClojureScript, Scala, LiveScript usw. verwenden können.
- Der Node Package Manager (npm) bietet Zugang zu Hunderttausenden wiederverwendbarer Pakete. Er bietet auch eine erstklassige Abhängigkeitsauflösung und kann auch zur Automatisierung der meisten Komponenten der Build-Toolchain verwendet werden.
- Node.js ist portabel. Es ist verfügbar auf Microsoft Windows, macOS, Linux, Solaris, FreeBSD, OpenBSD, WebOS und NonStop OS. Außerdem wird es von vielen Web-Hosting-Anbietern gut unterstützt, die oft spezifische Infrastrukturen und Dokumentationen zum Hosten von Node-Sites bereitstellen.
- Es hat ein sehr aktives Ökosystem von Drittanbietern und eine Entwickler-Community, mit vielen Menschen, die bereit sind zu helfen.

Sie können Node.js verwenden, um mit dem Node-HTTP-Paket einen einfachen Webserver zu erstellen.

### Hello Node.js

Das folgende Beispiel erstellt einen Webserver, der HTTP-Anfragen jeglicher Art an die URL `http://127.0.0.1:8000/` erwartet — wenn eine Anfrage eingeht, antwortet das Skript mit dem String: "Hello World". Wenn Sie Node bereits installiert haben, können Sie diesen Schritten folgen, um das Beispiel auszuprobieren:

1. Öffnen Sie das Terminal (unter Windows: die Befehlszeilen-Dienstprogramm öffnen)
2. Erstellen Sie den Ordner, in dem Sie das Programm speichern möchten, z. B. `test-node`, und wechseln Sie dann in diesen Ordner, indem Sie den folgenden Befehl in Ihr Terminal eingeben:

   ```bash
   cd test-node
   ```

3. Erstellen Sie mit Ihrem bevorzugten Texteditor eine Datei namens `hello.js` und fügen Sie den folgenden Code darin ein:

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

Schließlich navigieren Sie in Ihrem Webbrowser zu `http://localhost:8000`. Sie sollten den Text "**Hello World**" oben links auf einer ansonsten leeren Webseite sehen.

> [!NOTE]
> Wenn Sie mit etwas Node.js-Code spielen möchten, ohne eine lokale Einrichtung durchführen zu müssen, bietet Scrimba's [Aside: The HTTP module](https://scrimba.com/learn-nodejs-c00ho9qqh6/~07du?via=mdn) <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> eine interaktive Einführung in die Einrichtung eines grundlegenden Servers mit dem Node-HTTP-Paket.

## Web-Frameworks

Andere gängige Webentwicklungsaufgaben werden von Node selbst nicht direkt unterstützt. Wenn Sie eine spezifische Bearbeitung für verschiedene HTTP-Methoden hinzufügen möchten (z. B. `GET`, `POST`, `DELETE` usw.), Anfragen an verschiedenen URL-Pfaden („Routen“) getrennt bearbeiten, statische Dateien bereitstellen oder Vorlagen verwenden, um die Antwort dynamisch zu erstellen, wird Node allein wenig hilfreich sein. Sie müssen entweder den Code selbst schreiben oder Sie können das Rad nicht neu erfinden und ein Web-Framework verwenden!

## Einführung in Express

[Express](https://expressjs.com/) ist das beliebteste Node.js-Web-Framework und die zugrunde liegende Bibliothek für eine Reihe anderer beliebter Node.js-Frameworks. Es bietet Mechanismen zum:

- Schreiben von Handlern für Anfragen mit verschiedenen HTTP-Methoden an verschiedenen URL-Pfaden (Routen).
- Integration mit „View“-Rendering-Engines, um Antworten durch Einfügen von Daten in Vorlagen zu generieren.
- Festlegen von allgemeinen Webanwendungseinstellungen wie den zu verwendenden Port für die Verbindung und den Speicherort der Vorlagen, die für das Rendern der Antwort verwendet werden.
- Hinzufügen zusätzlicher Anfrageverarbeitungs-"Middleware" an jedem Punkt innerhalb der Anfragenverarbeitungskette.

Während _Express_ selbst ziemlich minimalistisch ist, haben Entwickler kompatible Middleware-Pakete erstellt, um nahezu jedes Problem im Bereich der Webentwicklung zu lösen. Es gibt Bibliotheken zur Arbeit mit Cookies, Sitzungen, Benutzeranmeldungen, URL-Parametern, `POST`-Daten, Sicherheits-Headern und _vielen_ mehr. Eine Liste der von Express gepflegten Middleware-Pakete finden Sie unter [Express Middleware](https://expressjs.com/en/resources/middleware/) (zusammen mit einer Liste einiger beliebter Drittanbieter-Pakete).

> [!NOTE]
> Diese Flexibilität ist ein zweischneidiges Schwert. Es gibt Middleware-Pakete zur Lösung nahezu jedes Problems oder Anforderung, aber es kann manchmal eine Herausforderung sein, die richtigen Pakete auszuwählen. Es gibt auch keinen „richtigen Weg“, um eine Anwendung zu strukturieren, und viele der Beispiele, die Sie möglicherweise im Internet finden, sind nicht optimal oder zeigen nur einen kleinen Teil dessen, was Sie tun müssen, um eine Webanwendung zu entwickeln.

## Woher stammen Node und Express?

Node wurde erstmals 2009, nur für Linux, veröffentlicht. Der npm-Paketmanager wurde 2010 veröffentlicht und die native Windows-Unterstützung wurde 2012 hinzugefügt. Wenn Sie mehr wissen möchten, tauchen Sie in [Wikipedia](https://en.wikipedia.org/wiki/Node.js#History) ein.

Express wurde ursprünglich im November 2010 veröffentlicht und befindet sich derzeit in der Hauptversion 5 der API. Sie können sich die [Changelog](https://expressjs.com/en/changelog/#5.x) für Informationen zu Änderungen in der aktuellen Version ansehen und auf [GitHub](https://github.com/expressjs/express/blob/master/History.md) ausführliche historische Release-Hinweise nachlesen.

## Wie beliebt sind Node und Express?

Die Beliebtheit eines Web-Frameworks ist wichtig, da sie ein Indikator dafür ist, ob es weiterhin gepflegt wird und welche Ressourcen in Bezug auf Dokumentation, Add-On-Bibliotheken und technischen Support voraussichtlich verfügbar sind.

Es gibt keine direkt verfügbaren und endgültigen Maße für die Beliebtheit von serverseitigen Frameworks (obwohl man die Beliebtheit durch Mechanismen wie die Zählung der Anzahl der GitHub-Projekte und Stack Overflow-Fragen für jede Plattform abschätzen kann). Eine bessere Frage ist, ob Node und Express „beliebt genug“ sind, um die Probleme von unpopulären Plattformen zu vermeiden. Entwickeln sie sich weiter? Können Sie Hilfe bekommen, wenn Sie sie benötigen? Gibt es die Möglichkeit, bezahlte Arbeit zu bekommen, wenn Sie Express lernen?

Basierend auf der Anzahl der hochkarätigen Unternehmen, die Express nutzen, der Anzahl der Personen, die zum Code beitragen, und der Anzahl der Personen, die sowohl kostenlose als auch kostenpflichtige Unterstützung bieten, ist _Express_ ein beliebtes Framework!

## Ist Express meinungsstark?

Web-Frameworks bezeichnen sich oft als „meinungsstark“ oder „unopinioniert“.

Meinungsstarke Frameworks sind solche, die Meinungen darüber haben, wie man eine bestimmte Aufgabe „richtig“ löst. Sie unterstützen oft die schnelle Entwicklung _in einem bestimmten Bereich_ (Lösungen für Probleme eines bestimmten Typs), weil der richtige Weg, etwas zu tun, normalerweise gut verstanden und dokumentiert ist. Sie können jedoch weniger flexibel beim Lösen von Problemen außerhalb ihres Hauptbereichs sein und bieten tendenziell weniger Auswahlmöglichkeiten, welche Komponenten und Ansätze verwendet werden können.

Unopinionated Frameworks hingegen haben weit weniger Einschränkungen bei der besten Methode, Komponenten zusammenzufügen, um ein Ziel zu erreichen, oder welche Komponenten verwendet werden sollten. Sie machen es Entwicklern einfacher, die am besten geeigneten Werkzeuge für die Erledigung einer bestimmten Aufgabe zu verwenden, wenn auch auf Kosten der Tatsache, dass man diese Komponenten selbst finden muss.

Express ist unopinioniert. Sie können fast jede kompatible Middleware in die Anfragenerfassungskette einfügen, fast in jeder gewünschten Reihenfolge. Sie können die App in einer oder mehreren Dateien und mit jeder Verzeichnisstruktur aufbauen. Manchmal haben Sie vielleicht das Gefühl, zu viele Möglichkeiten zu haben!

## Wie sieht Express-Code aus?

Bei einer traditionellen datengesteuerten Website wartet eine Webanwendung auf HTTP-Anfragen des Webbrowsers (oder anderer Clients). Wenn eine Anfrage eingeht, überprüft die Anwendung, welche Aktion basierend auf dem URL-Muster und möglicherweise mit der Anfrage verbundenen Informationen in `POST`- oder `GET`-Daten erforderlich ist. Abhängig von den Anforderungen kann die Anwendung dann Informationen aus einer Datenbank lesen oder schreiben oder andere Aufgaben ausführen, die zur Erfüllung der Anfrage erforderlich sind. Anschließend gibt die Anwendung eine Antwort an den Webbrowser zurück, indem oft dynamisch eine HTML-Seite für den Browser erstellt wird, indem die abgerufenen Daten in Platzhalter in einer HTML-Vorlage eingefügt werden.

Express stellt Methoden bereit, um zu spezifizieren, welche Funktion für ein bestimmtes HTTP-Verb (`GET`, `POST`, `PUT` usw.) und URL-Muster („Route“) aufgerufen wird, und Methoden, um zu spezifizieren, welche Vorlage („View“) verwendet wird, wo Vorlagendateien sich befinden, und welche Vorlage verwendet werden soll, um eine Antwort zu rendern. Sie können Express-Middleware verwenden, um Unterstützung für Cookies, Sitzungen und Benutzer zu hinzufügen, um `POST`/`GET`-Parameter zu erhalten usw. Sie können jeden von Node unterstützten Datenbank-Mechanismus verwenden (Express definiert kein spezifisches Datenbankverhalten).

Die folgenden Abschnitte erläutern einige der gängigen Dinge, die Sie bei der Arbeit mit _Express_ und _Node_ Code sehen werden.

### Helloworld Express

Betrachten wir zunächst das standardmäßige Express [Hello World](https://expressjs.com/en/starter/hello-world/) Beispiel (wir diskutieren jeden Teil davon unten und in den folgenden Abschnitten).

> [!NOTE]
> Wenn Sie Node und Express bereits installiert haben (oder wenn Sie sie installieren, wie im [nächsten Artikel](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) gezeigt), können Sie diesen Code in einer Textdatei namens **app.js** speichern und im Bash-Befehlszeilen-Tool durch Aufruf von:
>
> **`node ./app.js`** ausführen

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

Die ersten beiden Zeilen `require()` (importieren) das express-Modul und erstellen eine [Express-Anwendung](https://expressjs.com/en/5x/api/#app). Dieses Objekt, das traditionell als `app` benannt wird, verfügt über Methoden zum Routing von HTTP-Anfragen, zur Konfiguration von Middleware, zum Rendern von HTML-Ansichten, zum Registrieren einer Template-Engine und zum Ändern von [Anwendungseinstellungen](https://expressjs.com/en/5x/api/#app.settings.table), die das Verhalten der Anwendung steuern (z. B. den Umgebungsmodus, ob Routen-Definitionen case-sensitive sind, usw.)

Der Mittelteil des Codes (die drei Zeilen, die mit `app.get` beginnen) zeigt eine _Routendefinition_. Die Methode `app.get()` gibt eine Rückruffunktion an, die immer dann aufgerufen wird, wenn eine HTTP-`GET`-Anfrage mit einem Pfad (`'/'`) relativ zum Site-Stamm eingeht. Die Rückruffunktion nimmt ein Anfrage- und ein Antwortobjekt als Argumente und ruft [`send()`](https://expressjs.com/en/5x/api/#res.send) auf der Antwort auf, um die Zeichenfolge "Hello World!" zurückzugeben.

Der letzte Block startet den Server auf einem angegebenen Port ('3000') und gibt einen Log-Kommentar in die Konsole aus. Während der Server läuft, könnten Sie zu `localhost:3000` in Ihrem Browser gehen, um die zurückgegebene Beispielantwort zu sehen.

### Importieren und Erstellen von Modulen

Ein Modul ist eine JavaScript-Bibliothek/Datei, die Sie in anderen Code mithilfe der `require()`-Funktion von Node importieren können. _Express_ selbst ist ein Modul, ebenso wie die Middleware- und Datenbank-Bibliotheken, die wir in unseren _Express_-Anwendungen verwenden.

Der folgende Code zeigt, wie wir ein Modul namentlich importieren, wobei wir das _Express_-Framework als Beispiel verwenden. Zuerst rufen wir die `require()`-Funktion auf, geben den Namen des Moduls als Zeichenfolge an (`'express'`) und rufen das zurückgegebene Objekt auf, um eine [Express-Anwendung](https://expressjs.com/en/5x/api/#app) zu erstellen. Wir können dann auf die Eigenschaften und Funktionen des Anwendungsobjekts zugreifen.

```js
const express = require("express");

const app = express();
```

Sie können auch Ihre eigenen Module erstellen, die Sie auf dieselbe Weise importieren können.

> [!NOTE]
> Sie _werden_ Ihre eigenen Module erstellen wollen, da dies es Ihnen ermöglicht, Ihren Code in verwaltbare Teile zu organisieren — eine monolithische Ein-Datei-Anwendung ist schwer zu verstehen und zu warten. Die Verwendung von Modulen hilft Ihnen auch, Ihren Namensraum zu verwalten, da nur die Variablen, die Sie explizit exportieren, importiert werden, wenn Sie ein Modul verwenden.

Um Objekte außerhalb eines Moduls verfügbar zu machen, müssen Sie sie einfach als zusätzliche Eigenschaften auf dem `exports`-Objekt freigeben. Zum Beispiel ist das **square.js** Modul unten eine Datei, die `area()` und `perimeter()` Methoden exportiert:

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
> Sie können auch einen absoluten Pfad zum Modul angeben (oder einen Namen, wie wir es anfangs getan haben).

Wenn Sie ein vollständiges Objekt in einer Zuweisung exportieren möchten, anstatt es Eigenschaft für Eigenschaft aufzubauen, weisen Sie es `module.exports` wie unten gezeigt zu (Sie können dies auch tun, um die Wurzel des Exportsobjekts zu einem Konstruktor oder einer anderen Funktion zu machen):

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
> Sie können `exports` als [Abkürzung](https://nodejs.org/api/modules.html#modules_exports_shortcut) für `module.exports` innerhalb eines bestimmten Moduls betrachten. Tatsächlich ist `exports` einfach eine Variable, die zu dem Wert von `module.exports` initialisiert wird, bevor das Modul ausgewertet wird. Dieser Wert ist ein Verweis auf ein Objekt (in diesem Fall ein leeres Objekt). Das bedeutet, dass `exports` einen Verweis auf dasselbe Objekt hält, auf das `module.exports` verweist. Es bedeutet auch, dass, wenn Sie `exports` einen anderen Wert zuweisen, es nicht mehr an `module.exports` gebunden ist.

Für weitere Informationen über Module siehe [Module](https://nodejs.org/api/modules.html#modules_modules) (Node API-Dokumentation).

### Asynchrone APIs verwenden

JavaScript-Code verwendet häufig asynchrone anstelle von synchronen APIs für Operationen, die einige Zeit benötigen können. Eine synchrone API ist eine, bei der jede Operation abgeschlossen sein muss, bevor die nächste Operation starten kann. Zum Beispiel sind die folgenden Log-Funktionen synchron und werden den Text in der Reihenfolge (Erste, Zweite) in die Konsole ausgeben.

```js
console.log("First");
console.log("Second");
```

Im Gegensatz dazu ist eine asynchrone API eine, bei der die API eine Operation startet und sofort zurückkehrt (bevor die Operation abgeschlossen ist). Sobald die Operation abgeschlossen ist, wird die API einen Mechanismus verwenden, um zusätzliche Operationen durchzuführen. Zum Beispiel wird der folgende Code "Zweite, Erste" ausdrucken, da, obwohl die `setTimeout()`-Methode zuerst aufgerufen wird und sofort zurückkehrt, die Operation selbst einige Sekunden dauert, bis sie abgeschlossen ist.

```js
setTimeout(() => {
  console.log("First");
}, 3000);
console.log("Second");
```

Die Verwendung nicht-blockierender asynchroner APIs ist bei Node noch wichtiger als im Browser, da _Node_-Anwendungen oft als Single-Threaded-Ereignis-angetriebene Ausführungsumgebung geschrieben werden. „Single-Threaded“ bedeutet, dass alle Anfragen an den Server im selben Thread ausgeführt werden (anstatt in separate Prozesse aufgeteilt zu werden). Dieses Modell ist in Bezug auf Geschwindigkeit und Serverressourcen äußerst effizient. Es bedeutet jedoch auch, dass, wenn eine Ihrer Funktionen synchrone Methoden aufruft, die lange Zeit für die Fertigstellung benötigen, sie nicht nur die aktuelle Anfrage blockieren, sondern jede andere Anfrage, die von Ihrer Webanwendung verarbeitet wird.

Es gibt mehrere Möglichkeiten für eine asynchrone API, Ihre Anwendung darüber zu benachrichtigen, dass sie abgeschlossen ist. Historisch gesehen bestand der Ansatz darin, beim Aufrufen der asynchronen API eine Rückruffunktion zu registrieren, die dann aufgerufen wird, wenn die Operation abgeschlossen ist (dies ist der oben verwendete Ansatz).

> [!NOTE]
> Die Verwendung von Rückrufen kann ziemlich „chaotisch“ sein, wenn Sie eine Sequenz abhängiger asynchroner Operationen haben, die in einer bestimmten Reihenfolge ausgeführt werden müssen, da dies zu mehreren Ebenen von verschachtelten Rückrufen führt. Dieses Problem wird allgemein als „Callback-Hölle“ bezeichnet.

> [!NOTE]
> Eine übliche Konvention in Node und Express ist die Verwendung von Fehler-ersten Rückrufen. Bei dieser Konvention ist der erste Wert in Ihren _Rückruffunktionen_ ein Fehlerwert, während nachfolgende Argumente Erfolgsdaten enthalten. Es gibt eine gute Erklärung, warum dieser Ansatz nützlich ist, in diesem Blog: [The Node.js Way - Understanding Error-First Callbacks](https://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/) (fredkschott.com).

Moderne JavaScript-Codes verwenden häufiger [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) und [async/await](/de/docs/Web/JavaScript/Reference/Statements/async_function), um den asynchronen Programmfluss zu verwalten.
Sie sollten Promises verwenden, wo immer dies möglich ist. Wenn Sie mit Code arbeiten, der Rückrufe verwendet, können Sie die Node.js-Funktion [`utils.promisify`](https://nodejs.org/api/util.html#utilpromisifyoriginal) verwenden, um die Konvertierung von Rückruf → Promise auf ergonomische Weise zu handhaben.

### Erstellung von Routen-Handlern

In unserem _Hello World_ Express-Beispiel (siehe oben) haben wir eine (Rückruf-) Routen-Handler-Funktion für HTTP-`GET`-Anfragen an den Site-Stamm (`'/'`) definiert.

```js
app.get("/", (req, res) => {
  res.send("Hello World!");
});
```

Die Rückruffunktion nimmt ein Anfragen- und ein Antwortobjekt als Argumente. In diesem Fall ruft die Methode [`send()`](https://expressjs.com/en/5x/api/#res.send) auf der Antwort auf, um die Zeichenfolge "Hello World!" Es gibt eine [Reihe anderer Antwortmethoden](https://expressjs.com/en/guide/routing/#response-methods) zur Beendigung des Anfrage/Antwort-Zyklus. Zum Beispiel könnten Sie [`res.json()`](https://expressjs.com/en/5x/api/#res.json) anrufen, um eine JSON-Antwort zu senden oder [`res.sendFile()`](https://expressjs.com/en/5x/api/#res.sendFile), um eine Datei zu senden.

> [!NOTE]
> Sie können in den Rückruffunktionen beliebige Argumentnamen verwenden; wenn der Rückruf aufgerufen wird, wird das erste Argument immer die Anforderung und das zweite immer die Antwort sein. Es macht Sinn, sie so zu benennen, dass Sie das Objekt, mit dem Sie arbeiten, im Body des Rückrufs identifizieren können.

Das _Express-Anwendungs_-Objekt bietet auch Methoden zur Definition von Routen-Handlern für alle anderen HTTP-Methoden, die meistens auf genau die gleiche Weise verwendet werden:

`checkout()`, `copy()`, **`delete()`**, **`get()`**, `head()`, `lock()`, `merge()`, `mkactivity()`, `mkcol()`, `move()`, `m-search()`, `notify()`, `options()`, `patch()`, **`post()`**, `purge()`, **`put()`**, `report()`, `search()`, `subscribe()`, `trace()`, `unlock()`, `unsubscribe()`.

Es gibt eine spezielle Routing-Methode, `app.all()`, die als Antwort auf jede HTTP-Methode aufgerufen wird. Diese wird verwendet, um Middleware-Funktionen an einem bestimmten Pfad für alle Anfragemethoden zu laden. Das folgende Beispiel (aus der Express-Dokumentation) zeigt einen Handler, der für Anfragen an `/secret` unabhängig von der verwendeten HTTP-Methode ausgeführt wird (sofern sie vom [http-Modul](https://nodejs.org/docs/latest/api/http.html#httpmethods) unterstützt wird).

```js
app.all("/secret", (req, res, next) => {
  console.log("Accessing the secret section…");
  next(); // pass control to the next handler
});
```

Routen ermöglichen es Ihnen, bestimmte Zeichenmuster in einer URL zu erzeugen und einige Werte aus der URL zu extrahieren und als Parameter an den Routen-Handler zu übergeben (als Attribute des Anforderungsobjekts, das als Parameter übergeben wird).

Oftmals ist es nützlich, Routen-Handler für einen bestimmten Teil einer Site zusammenzufassen und sie mit einem gemeinsamen Routen-Präfix aufzurufen (zum Beispiel könnte eine Site mit einem Wiki alle Wiki-bezogenen Routen in einer Datei haben und sie mit einem Routen-Präfix von _/wiki/_ aufrufen lassen). In _Express_ wird dies erreicht, indem das [`express.Router`](https://expressjs.com/en/guide/routing/#express-router)-Objekt verwendet wird. Zum Beispiel können wir unsere Wiki-Route in einem Modul namens **wiki.js** erstellen und dann das `Router`-Objekt exportieren, wie unten gezeigt:

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
> Das Hinzufügen von Routen zu dem `Router`-Objekt ist genauso wie das Hinzufügen von Routen zu dem `app`-Objekt (wie zuvor gezeigt).

Um den Router in unserer Hauptanwendungsdatei zu verwenden, würden wir dann das Routenmodul (**wiki.js**) mit `require()` aufrufen und dann `use()` auf der _Express-Anwendung aufrufen, um den Router zum Verarbeitungspfad der Middleware hinzuzufügen. Die zwei Routen wären dann von `/wiki/` und `/wiki/about/` aus zugänglich.

```js
const wiki = require("./wiki.js");

// …
app.use("/wiki", wiki);
```

Wir zeigen Ihnen später im verknüpften Abschnitt [Routen und Controller](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes) viel mehr über die Arbeit mit Routen und insbesondere über die Verwendung des `Routers`.

### Verwendung von Middleware

Middleware wird in Express-Apps extensiv verwendet, für Aufgaben wie das Bereitstellen statischer Dateien, Fehlerbehandlung und das Komprimieren von HTTP-Antworten. Während Routenfunktionen den HTTP-Anfrage-Antwort-Zyklus beenden, indem sie eine Antwort an den HTTP-Client zurückgeben, führen Middleware-Funktionen _typischerweise_ eine Operation auf der Anfrage oder Antwort aus und rufen dann die nächste Funktion in der "Kette" auf, die entweder mehr Middleware oder ein Routen-Handler sein kann. Die Reihenfolge, in der Middleware aufgerufen wird, liegt beim App-Entwickler.

> [!NOTE]
> Die Middleware kann jede Operation ausführen, jeden Code ausführen, Änderungen an den Anforderungs- und Antwortobjekten vornehmen, und sie kann _auch den Anfrage-Antwort-Zyklus beenden_. Wenn sie den Zyklus nicht beendet, muss sie `next()` aufrufen, um die Steuerung an die nächste Middleware-Funktion zu übergeben (oder die Anfrage bleibt hängen).

Die meisten Apps werden _Drittanbieter_-Middleware verwenden, um gängige Web-Entwicklungsaufgaben wie die Arbeit mit Cookies, Sitzungen, Benutzer-Authentifizierung, Zugriff auf Anfrage-`POST`- und JSON-Daten, Logging usw. zu vereinfachen. Sie können eine [Liste der Middleware-Pakete, die von dem Express-Team gepflegt werden](https://expressjs.com/en/resources/middleware/) (die auch andere beliebte 3rd-Party-Pakete einschließt) finden. Andere Express-Pakete sind auf dem npm-Paketmanager verfügbar.

Um Drittanbieter-Middleware zu verwenden, müssen Sie diese zuerst mit npm in Ihre App installieren.
Zum Beispiel, um die [morgan](https://expressjs.com/en/resources/middleware/morgan/) HTTP-Anfrager-Logger-Middleware zu installieren, würden Sie dies tun:

```bash
npm install morgan
```

Sie könnten dann `use()` an dem _Express-Anwendungsobjekt_ aufrufen, um das Middleware in die Kette hinzuzufügen:

```js
const express = require("express");
const logger = require("morgan");

const app = express();
app.use(logger("dev"));
// …
```

> [!NOTE]
> Middleware- und Routing-Funktionen werden in der Reihenfolge aufgerufen, in der sie deklariert werden. Für einige Middleware ist die Reihenfolge wichtig (zum Beispiel wenn Sitzungs-Middleware von Cookie-Middleware abhängt, muss der Cookie-Handler zuerst hinzugefügt werden). Es ist fast immer der Fall, dass Middleware aufgerufen wird, bevor Routen eingestellt werden, da Ihre Routen-Handler sonst keinen Zugriff auf die von Ihrem Middleware hinzugefügte Funktionalität haben.

Sie können Ihre eigenen Middleware-Funktionen schreiben, und Sie werden wahrscheinlich tun müssen (wenn auch nur, um Fehlerbehandlungscode zu erstellen). Der _einzige_ Unterschied zwischen einer Middleware-Funktion und einem Routen-Handler ist, dass Middleware-Funktionen ein drittes Argument `next` haben, das Middleware-Funktionen erwarten, aufzurufen, wenn sie den Anfragezyklus nicht beenden (wenn die Middleware-Funktion aufgerufen wird, enthält sie die _nächste_ Funktion, die aufgerufen werden muss).

Sie können eine Middleware-Funktion zur Verarbeitungskette für _alle Antworten_ mit `app.use()` hinzufügen oder für ein spezifisches HTTP-Verb mit der zugehörigen Methode: `app.get()`, `app.post()`, usw. Routen werden in beiden Fällen auf die gleiche Weise angegeben, obwohl die Route optional ist, wenn `app.use()` aufgerufen wird.

Das Beispiel unten zeigt, wie Sie die Middleware-Funktion mit beiden Ansätzen und mit/ohne Route hinzufügen können.

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
> Oben haben wir die Middleware-Funktion separat deklariert und sie dann als Rückruf eingestellt. In unserer vorherigen Routen-Handler-Funktion haben wir die Rückruffunktion deklariert, als sie verwendet wurde. In JavaScript ist jeder Ansatz gültig.

Die Express-Dokumentation enthält viel mehr ausgezeichnete Dokumentation über das [Verwenden](https://expressjs.com/en/guide/using-middleware/) und [Schreiben](https://expressjs.com/en/guide/writing-middleware/) von Express-Middleware.

### Bereitstellung statischer Dateien

Sie können die [express.static](https://expressjs.com/en/5x/api/#express.static) Middleware verwenden, um statische Dateien bereitzustellen, einschließlich Ihrer Bilder, CSS und JavaScript (`static()` ist die einzige Middleware-Funktion, die tatsächlich **Teil** von _Express_ ist). Zum Beispiel würden Sie die folgende Zeile verwenden, um Bilder, CSS-Dateien und JavaScript-Dateien aus einem Verzeichnis namens '**public'** auf derselben Ebene wie der Knotenaufruf bereitstellen:

```js
app.use(express.static("public"));
```

Alle Dateien im öffentlichen Verzeichnis werden bereitgestellt, indem ihr Dateiname (_relativ_ zum Basis-„public“-Verzeichnis) an die Basis-URL angehängt wird. So zum Beispiel:

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

Sie können auch ein virtuelles Präfix für Ihre statischen URLs erstellen, anstatt die Dateien zur Basis-URL hinzuzufügen. Zum Beispiel geben wir hier einen [mount path](https://expressjs.com/en/5x/api/#app.use) an, sodass die Dateien mit dem Präfix "/media" geladen werden:

```js
app.use("/media", express.static("public"));
```

Nun können Sie die Dateien, die sich im `public`-Verzeichnis befinden, vom `/media`-Pfad-Präfix aus laden.

```plain
http://localhost:3000/media/images/dog.jpg
http://localhost:3000/media/video/cat.mp4
http://localhost:3000/media/cry.mp3
```

> [!NOTE]
> Siehe auch [Bereitstellung statischer Dateien in Express](https://expressjs.com/en/starter/static-files/).

### Fehlerbehandlung

Fehler werden von einer oder mehreren speziellen Middleware-Funktionen behandelt, die vier Argumente haben, anstelle der üblichen drei: `(err, req, res, next)`. Zum Beispiel:

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

Diese können jeden gewünschten Inhalt zurückgeben, müssen jedoch nach allen anderen `app.use()`- und Routenaufrufen aufgerufen werden, sodass sie die letzte Middleware im Anfragenerfassungsprozess sind!

Express verfügt über einen eingebauten Fehler-Handler, der alle verbleibenden Fehler, die in der App auftreten könnten, behandelt. Diese Standardfehlerbehandlungs-Middleware-Funktion wird am Ende des Middleware-Funktionsstapels hinzugefügt. Wenn Sie einen Fehler an `next()` übergeben und ihn nicht in einem Fehler-Handler behandeln, wird er vom eingebauten Fehler-Handler behandelt; der Fehler wird zusammen mit dem Stack-Trace an den Client geschrieben.

> [!NOTE]
> Der Stack-Trace ist in der Produktionsumgebung nicht enthalten. Um es im Produktionsmodus auszuführen, müssen Sie die Umgebungsvariable `NODE_ENV` auf `"production"` setzen.

> [!NOTE]
> HTTP404 und andere „Fehler“-Statuscodes werden nicht als Fehler behandelt. Wenn Sie diese behandeln möchten, können Sie eine Middleware-Funktion hinzufügen, um dies zu tun. Für weitere Informationen siehe die [FAQ](https://expressjs.com/en/starter/faq/#how-do-i-handle-404-responses).

Für weitere Informationen siehe [Fehlerbehandlung](https://expressjs.com/en/guide/error-handling/) (Express docs).

### Verwendung von Datenbanken

_Express_-Apps können jeden von _Node_ unterstützten Datenbank-Mechanismus verwenden (_Express_ selbst definiert kein spezifisches zusätzliches Verhalten/Anforderungen für Datenbankverwaltung). Es gibt viele Optionen, darunter PostgreSQL, MySQL, Redis, SQLite, MongoDB usw.

Um diese zu verwenden, müssen Sie zuerst den Datenbank-Treiber mit npm installieren. Zum Beispiel, um den Treiber für das beliebte NoSQL MongoDB zu installieren, würden Sie den Befehl verwenden:

```bash
npm install mongodb
```

Die Datenbank selbst kann lokal oder auf einem Cloud-Server installiert werden. In Ihrem Express-Code importieren Sie den Treiber, verbinden sich mit der Datenbank und führen dann Create-, Read-, Update- und Delete-Operationen (CRUD) aus.
Das Beispiel unten zeigt, wie Sie "mammal"-Datensätze mit MongoDB finden können:

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

Ein weiterer beliebter Ansatz ist es, über einen Object Relational Mapper („ORM“) indirekt auf Ihre Datenbank zuzugreifen. Bei diesem Ansatz definieren Sie Ihre Daten als „Objekte“ oder „Modelle“ und der ORM ordnet diese an das zugrunde liegende Datenbankformat zu. Dieser Ansatz hat den Vorteil, dass Entwickler weiterhin in Bezug auf JavaScript-Objekte denken können, anstatt an Datenbanksemantik, und dass es einen offensichtlichen Ort gibt, um die Validierung und Überprüfung eingehender Daten durchzuführen. Wir werden später in einem Artikel mehr über Datenbanken sprechen.

Für weitere Informationen siehe [Datenbank-Integration](https://expressjs.com/en/guide/database-integration/) (Express Dokumentation).

### Daten (Ansichten) rendern

Template-Engines (in _Express_ auch als „View Engines“ bezeichnet) ermöglichen es Ihnen, die _Struktur_ eines Ausgabedokuments in einer Vorlage anzugeben, indem Platzhalter für Daten verwendet werden, die beim Generieren einer Seite ausgefüllt werden. Vorlagen werden häufig verwendet, um HTML zu erstellen, können aber auch andere Arten von Dokumenten erstellen.

Express unterstützt eine Reihe von Template-Engines, insbesondere Pug (ehemals "Jade"), Mustache und EJS. Jede hat ihre eigenen Stärken für die Lösung bestimmter Anwendungsfälle (relative Vergleiche lassen sich leicht über Internetsuchen finden).
Der Express-Anwendungsgenerator verwendet Jade als Standard, unterstützt aber auch mehrere andere.

In Ihrem Anwendungseinstellungscode setzen Sie die zu verwendende Template-Engine und den Ort, an dem Express nach Vorlagen suchen soll, mit den Einstellungen 'views' und 'view engine', wie unten gezeigt (Sie müssen auch das Paket installieren, das Ihre Template-Bibliothek enthält!)

```js
const express = require("express");
const path = require("path");

const app = express();

// Set directory to contain the templates ('views')
app.set("views", path.join(__dirname, "views"));

// Set view engine to use, in this case 'some_template_engine_name'
app.set("view engine", "some_template_engine_name");
```

Das Erscheinungsbild der Vorlage hängt davon ab, welche Engine Sie verwenden. Angenommen, Sie haben eine Vorlagendatei namens "index.\<template_extension>", die Platzhalter für Datenvariablen namens 'title' und "message" enthält, würden Sie [`Response.render()`](https://expressjs.com/en/5x/api/#res.render) in einer Routen-Handler-Funktion aufrufen, um die HTML-Antwort zu erstellen und zu senden:

```js
app.get("/", (req, res) => {
  res.render("index", { title: "About dogs", message: "Dogs rock!" });
});
```

Für weitere Informationen siehe [Die Verwendung von Template-Engines mit Express](https://expressjs.com/en/guide/using-template-engines/) (Express Dokumentation).

### Dateistruktur

Express macht keine Annahmen in Bezug auf die Struktur oder welche Komponenten Sie verwenden. Routen, Ansichten, statische Dateien und andere anwendungsspezifische Logik können in einer beliebigen Anzahl von Dateien mit einer beliebigen Verzeichnisstruktur leben. Obwohl es durchaus möglich ist, die ganze _Express_-Anwendung in einer Datei zu haben, macht es typischerweise Sinn, die Anwendung in Dateien basierend auf der Funktion (z. B. Kontoverwaltung, Blogs, Diskussionsforen) und der architektonischen Problemdomäne (z. B. Modell, Ansicht oder Controller, wenn Sie Architektur im {{Glossary("MVC", "MVC-Stil")}} verwenden) aufzuteilen.

In einem späteren Thema verwenden wir den _Express Application Generator_, der ein modulares App-Skelett erstellt, das wir leicht erweitern können, um Webanwendungen zu erstellen.

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben den ersten Schritt auf Ihrer Express/Node-Reise abgeschlossen! Sie sollten nun die Hauptvorteile von Express und Node verstehen und ungefähr wissen, wie die Hauptteile einer Express-App aussehen könnten (Routen, Middleware, Fehlerbehandlung und Template-Code). Sie sollten auch verstehen, dass Express ein unopinioniertes Framework ist, wodurch die Art und Weise, wie Sie diese Teile zusammenfügen und welche Bibliotheken Sie verwenden, weitgehend Ihnen überlassen bleibt!

Natürlich ist Express bewusst ein sehr leichtgewichtiges Webanwendungs-Framework, daher kommt ein großer Teil seines Nutzens und Potentials von Drittanbieter-Bibliotheken und Funktionen. Wir werden diese näher in den folgenden Artikeln betrachten. In unserem nächsten Artikel werden wir uns mit dem Einrichten einer Node-Entwicklungsumgebung befassen, sodass Sie beginnen können, einige Express-Codes in Aktion zu sehen.

## Siehe auch

- [Node.js lernen](https://scrimba.com/learn-nodejs-c00ho9qqh6?via=mdn) von Scrimba <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine unterhaltsame, interaktive Einführung in Node.js.
- [Express.js lernen](https://scrimba.com/learn-expressjs-c062las154?via=mdn) von Scrimba <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> baut auf dem vorherigen Link auf und zeigt Ihnen, wie Sie das Express-Framework verwenden, um serverseitige Websites zu erstellen.
- [Module](https://nodejs.org/api/modules.html#modules_modules) (Node API Dokumentation)
- [Express](https://expressjs.com/) (Homepage)
- [Grundlegendes Routing](https://expressjs.com/en/starter/basic-routing/) (Express Dokumentation)
- [Routing-Leitfaden](https://expressjs.com/en/guide/routing/) (Express Dokumentation)
- [Die Verwendung von Template-Engines mit Express](https://expressjs.com/en/guide/using-template-engines/) (Express Dokumentation)
- [Die Verwendung von Middleware](https://expressjs.com/en/guide/using-middleware/) (Express Dokumentation)
- [Writing middleware for use in Express apps](https://expressjs.com/en/guide/writing-middleware/) (Express Dokumentation)
- [Datenbankintegration](https://expressjs.com/en/guide/database-integration/) (Express Dokumentation)
- [Bereitstellung statischer Dateien in Express](https://expressjs.com/en/starter/static-files/) (Express Dokumentation)
- [Fehlerbehandlung](https://expressjs.com/en/guide/error-handling/) (Express Dokumentation)

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
