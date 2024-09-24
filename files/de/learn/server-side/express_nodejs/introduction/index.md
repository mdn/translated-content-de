---
title: Einführung in Express/Node
slug: Learn/Server-side/Express_Nodejs/Introduction
l10n:
  sourceCommit: 3dd00b3b77e2e79c7d92f0b6c4f4665d54500a0e
---

{{LearnSidebar}}{{NextMenu("Learn/Server-side/Express_Nodejs/development_environment", "Learn/Server-side/Express_Nodejs")}}

In diesem ersten Express-Artikel beantworten wir die Fragen "Was ist Node?" und "Was ist Express?" und geben Ihnen einen Überblick darüber, was das Express-Webframework besonders macht. Wir skizzieren die Hauptmerkmale und zeigen Ihnen einige der wichtigsten Bausteine einer Express-Anwendung (obwohl Sie zu diesem Zeitpunkt noch keine Entwicklungsumgebung zur Verfügung haben, um es zu testen).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein allgemeines Verständnis der <a href="/de/docs/Learn/Server-side/First_steps">programmiertechnischen Erstellung von serverseitigen Websites</a>, insbesondere der Mechanismen von <a href="/de/docs/Learn/Server-side/First_steps/Client-Server_overview">Client-Server-Interaktionen auf Websites</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit dem, was Express ist und wie es in Node passt, welche Funktionalität es bietet und die wichtigsten Bausteine einer Express-Anwendung zu erlangen.
      </td>
    </tr>
  </tbody>
</table>

## Einführung in Node

[Node](https://nodejs.org/) (oder formeller _Node.js_) ist eine quelloffene, plattformübergreifende Laufzeitumgebung, die Entwicklern ermöglicht, alle Arten von serverseitigen Tools und Anwendungen in [JavaScript](/de/docs/Glossary/JavaScript) zu erstellen.
Die Laufzeitumgebung ist für den Einsatz außerhalb eines Browserkontextes gedacht (d. h. sie läuft direkt auf einem Computer oder Server-Betriebssystem). Daher lässt die Umgebung browserspezifische JavaScript-APIs weg und fügt Unterstützung für traditionellere OS-APIs hinzu, einschließlich HTTP- und Dateisystembibliotheken.

Aus der Perspektive der Webserver-Entwicklung bietet Node eine Reihe von Vorteilen:

- Hervorragende Leistung! Node wurde entwickelt, um den Durchsatz und die Skalierbarkeit in Webanwendungen zu optimieren, und ist eine gute Lösung für viele gängige Webentwicklungsprobleme (z. B. Echtzeit-Webanwendungen).
- Der Code wird in "normalem alten JavaScript" geschrieben, was bedeutet, dass weniger Zeit mit der Handhabung von "Kontextwechseln" zwischen Sprachen verbracht wird, wenn Sie sowohl clientseitigen als auch serverseitigen Code schreiben.
- JavaScript ist eine relativ neue Programmiersprache und profitiert von Verbesserungen im Sprachdesign im Vergleich zu anderen traditionellen Webserver-Sprachen (z. B. Python, PHP, etc.) Viele andere neue und beliebte Sprachen werden in JavaScript kompiliert/konvertiert, sodass Sie auch TypeScript, CoffeeScript, ClojureScript, Scala, LiveScript, etc. verwenden können.
- Der Node-Paketmanager (npm) bietet Zugriff auf Hunderttausende von wiederverwendbaren Paketen. Er hat auch eine erstklassige Abhängigkeitsauflösung und kann auch verwendet werden, um die meisten Teile der Build-Toolchain zu automatisieren.
- Node.js ist portabel. Es ist verfügbar auf Microsoft Windows, macOS, Linux, Solaris, FreeBSD, OpenBSD, WebOS und NonStop OS. Darüber hinaus wird es von vielen Webhosting-Anbietern gut unterstützt, die oft spezifische Infrastruktur und Dokumentation für das Hosting von Node-Sites bereitstellen.
- Es gibt ein sehr aktives Ecosystem von Drittanbietern und eine Entwickler-Community mit vielen Leuten, die bereit sind zu helfen.

Mit Node.js können Sie einen einfachen Webserver mit dem Node HTTP-Paket erstellen.

### Hallo Node.js

Das folgende Beispiel erstellt einen Webserver, der für jede Art von HTTP-Anfrage unter der URL `http://127.0.0.1:8000/` lauscht — wenn eine Anfrage eingeht, wird das Skript mit dem String "Hello World" antworten. Falls Sie Node bereits installiert haben, können Sie die folgenden Schritte ausprobieren, um das Beispiel zu testen:

1. Öffnen Sie das Terminal (unter Windows öffnen Sie das Befehlszeilenprogramm)
2. Erstellen Sie den Ordner, in dem Sie das Programm speichern möchten, z. B. `test-node`, und treten Sie dann mit folgendem Befehl in Ihrem Terminal ein:

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

4. Speichern Sie die Datei im oben erstellten Ordner.
5. Kehren Sie zum Terminal zurück und geben Sie den folgenden Befehl ein:

   ```bash
   node hello.js
   ```

Navigieren Sie schließlich zu `http://localhost:8000` in Ihrem Webbrowser; Sie sollten den Text "**Hello World**" in der oberen linken Ecke einer ansonsten leeren Seite sehen.

## Web-Frameworks

Andere gängige Webentwicklungsaufgaben werden von Node selbst nicht direkt unterstützt. Wenn Sie spezifische Handhabung für verschiedene HTTP-Verben (z. B. `GET`, `POST`, `DELETE`, etc.) hinzufügen, Anfragen an verschiedenen URL-Pfaden ("Routen") separat behandeln, statische Dateien bedienen oder Vorlagen verwenden möchten, um die Antwort dynamisch zu erstellen, wird Node allein nicht hilfreich sein. Sie müssen entweder den Code selbst schreiben oder Sie können das Rad nicht neu erfinden und ein Webframework verwenden!

## Einführung in Express

[Express](https://expressjs.com/) ist das beliebteste Node.js-Webframework und die zugrunde liegende Bibliothek für eine Reihe anderer beliebter Node.js-Frameworks. Es bietet Mechanismen, um:

- Handler für Anfragen mit unterschiedlichen HTTP-Verben an unterschiedlichen URL-Pfaden (Routen) zu schreiben.
- Integration mit "View"-Rendering-Engines, um Antworten durch Einfügen von Daten in Vorlagen zu generieren.
- Gemeinsame Einstellungen von Webanwendungen festzulegen, wie etwa den Port für die Verbindung und den Speicherort der Vorlagen, die zum Rendern der Antwort verwendet werden.
- Zusätzliche Request-Processing-"Middleware" an jedem Punkt innerhalb der Anfragenverarbeitungspipeline hinzuzufügen.

Während _Express_ selbst recht minimalistisch ist, haben Entwickler kompatible Middleware-Pakete erstellt, um fast jedes Webentwicklungsproblem zu lösen. Es gibt Bibliotheken zur Arbeit mit Cookies, Sitzungen, Benutzeranmeldungen, URL-Parametern, `POST`-Daten, Sicherheitsheadern und vielem mehr. Eine Liste von Middleware-Paketen, die von den Express-Teams gepflegt werden, finden Sie unter [Express Middleware](https://expressjs.com/en/resources/middleware.html) (neben einer Liste einiger beliebter Drittanbieter-Pakete).

> [!NOTE]
> Diese Flexibilität ist ein zweischneidiges Schwert. Es gibt Middleware-Pakete, um nahezu jedes Problem oder Bedürfnis zu adressieren, aber herauszufinden, welche Pakete die richtigen sind, kann manchmal eine Herausforderung sein. Es gibt auch keinen "richtigen Weg", um eine Anwendung zu strukturieren, und viele Beispiele, die Sie im Internet finden, sind möglicherweise nicht optimal oder zeigen nur einen kleinen Teil dessen, was Sie tun müssen, um eine Webanwendung zu entwickeln.

## Woher stammen Node und Express?

Node wurde zunächst 2009 nur für Linux veröffentlicht. Der npm-Paketmanager wurde 2010 veröffentlicht und native Windows-Unterstützung wurde 2012 hinzugefügt. Wenn Sie mehr wissen möchten, schauen Sie sich [Wikipedia](https://en.wikipedia.org/wiki/Node.js#History) an.

Express wurde erstmals im November 2010 veröffentlicht und befindet sich derzeit in der Hauptversion 4 der API. Sie können im [Changelog](https://expressjs.com/en/changelog/4x.html) Informationen zu Änderungen in der aktuellen Version ansehen und auf [GitHub](https://github.com/expressjs/express/blob/master/History.md) detaillierte historische Veröffentlichungsanmerkungen finden.

## Wie populär sind Node und Express?

Die Popularität eines Webframeworks ist wichtig, da es ein Indikator dafür ist, ob es weiterhin gepflegt wird und welche Ressourcen in Bezug auf Dokumentation, Zusatzbibliotheken und technischen Support verfügbar sein werden.

Es gibt keine ohne weiteres verfügbare und endgültige Maßnahme zur Popularität serverseitiger Frameworks (obwohl Sie die Popularität durch Mechanismen wie das Zählen der Anzahl von GitHub-Projekten und StackOverflow-Fragen für jede Plattform schätzen können). Eine bessere Frage ist, ob Node und Express "populär genug" sind, um die Probleme unpopulärer Plattformen zu vermeiden. Entwickeln sie sich weiter? Können Sie Hilfe bekommen, wenn Sie sie brauchen? Gibt es eine Möglichkeit, bezahlte Arbeit zu erhalten, wenn Sie Express lernen?

Basierend auf der Anzahl hochkarätiger Unternehmen, die Express verwenden, der Anzahl der Personen, die zum Codebase beitragen, und der Anzahl der Personen, die sowohl kostenlose als auch bezahlte Unterstützung bieten, dann ja, _Express_ ist ein beliebtes Framework!

## Ist Express meinungsstark?

Webframeworks bezeichnen sich oft selbst als "meinungsstark" oder "nicht meinungsstark".

Meinungsstarke Frameworks sind solche mit Meinungen darüber, wie man eine bestimmte Aufgabe "richtig" angeht. Sie unterstützen oft eine schnelle Entwicklung _in einem bestimmten Bereich_ (Lösungen für Probleme eines bestimmten Typs), weil der richtige Weg, etwas zu tun, in der Regel gut verstanden und dokumentiert ist. Sie können jedoch weniger flexibel sein, um Probleme außerhalb ihres Hauptbereichs zu lösen, und neigen dazu, weniger Auswahlmöglichkeiten zu bieten, welche Komponenten und Ansätze sie verwenden können.

Nicht meinungsstarke Frameworks hingegen haben weitaus weniger Einschränkungen hinsichtlich der besten Möglichkeit, Komponenten zusammenzukleben, um ein Ziel zu erreichen, oder sogar, welche Komponenten verwendet werden sollten. Sie erleichtern es Entwicklern, die am besten geeigneten Tools zu verwenden, um eine bestimmte Aufgabe zu erledigen, wenn auch auf Kosten, dass Sie diese Komponenten selbst finden müssen.

Express ist nicht meinungsstark. Sie können fast jedes kompatible Middleware-Paket, das Sie möchten, in die Anfragenverarbeitungskette einfügen, in fast jeder Reihenfolge, die Sie wünschen. Sie können die App in einer oder mehreren Dateien und mit einer beliebigen Verzeichnisstruktur organisieren. Sie werden manchmal das Gefühl haben, zu viele Auswahlmöglichkeiten zu haben!

## Wie sieht Express-Code aus?

In einer traditionellen datengesteuerten Website wartet eine Webanwendung auf HTTP-Anfragen vom Webbrowser (oder einem anderen Client). Wenn eine Anfrage eingeht, ermittelt die Anwendung, welche Aktion basierend auf dem URL-Muster und möglicherweise zugehörigen Informationen in `POST`- oder `GET`-Daten erforderlich ist. Abhängig davon, was erforderlich ist, kann sie dann Informationen aus einer Datenbank lesen oder schreiben oder andere Aufgaben ausführen, die erforderlich sind, um die Anfrage zu erfüllen. Die Anwendung gibt dann eine Antwort an den Webbrowser zurück, indem sie häufig dynamisch eine HTML-Seite für den Browser erstellt, indem sie die abgerufenen Daten in Platzhalter in einer HTML-Vorlage einfügt.

Express bietet Methoden zum Festlegen, welche Funktion für ein bestimmtes HTTP-Verb (`GET`, `POST`, `PUT`, etc.) und ein URL-Muster ("Route") aufgerufen wird, sowie Methoden zum Festlegen der zu verwendenden Vorlage ("View"), wo sich die Vorlagendateien befinden und welche Vorlage verwendet werden soll, um eine Antwort zu rendern. Sie können Express-Middleware verwenden, um Unterstützung für Cookies, Sitzungen und Benutzer, Abruf von `POST`/`GET`-Parametern, usw. hinzuzufügen. Sie können jeden von Node unterstützten Datenbankmechanismus verwenden (Express definiert kein datenbankbezogenes Verhalten).

Die folgenden Abschnitte erklären einige der häufig anzutreffenden Dinge, wenn Sie mit _Express_- und _Node_-Code arbeiten.

### Hallo Welt mit Express

Zunächst betrachten wir das Standard-Express-[Hallo Welt](https://expressjs.com/en/starter/hello-world.html)-Beispiel (wir besprechen jeden Teil davon unten und in den folgenden Abschnitten).

> [!NOTE]
> Falls Sie Node und Express bereits installiert haben (oder sie installieren, wie im [nächsten Artikel](/de/docs/Learn/Server-side/Express_Nodejs/development_environment) gezeigt), können Sie diesen Code in einer Textdatei namens **app.js** speichern und in einer Bash-Befehlszeile ausführen, indem Sie:
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

Die ersten beiden Zeilen `require()` (importieren) das express-Modul und erstellen eine [Express-Anwendung](https://expressjs.com/en/4x/api.html#app). Dieses Objekt, das traditionell `app` genannt wird, hat Methoden für das Routing von HTTP-Anfragen, das Konfigurieren von Middleware, das Rendern von HTML-Views, das Registrieren einer Template-Engine und das Ändern von [Applikationseinstellungen](https://expressjs.com/en/4x/api.html#app.settings.table), die steuern, wie sich die Applikation verhält (z. B. der Umgebungsmode, ob Routendefinitionen case-sensitiv sind, usw.).

Der mittlere Teil des Codes (die drei Zeilen, die mit `app.get` beginnen) zeigt eine _Routendefinition_. Die `app.get()`-Methode gibt eine Callback-Funktion an, die immer dann aufgerufen wird, wenn es eine HTTP-`GET`-Anfrage an einem Pfad (`'/'`) relativ zur Site-Root gibt. Die Callback-Funktion nimmt ein Anfrage- und ein Antwortobjekt als Argumente und ruft [`send()`](https://expressjs.com/en/4x/api.html#res.send) auf der Antwort auf, um den String "Hello World!" zurückzugeben.

Der letzte Block startet den Server auf einem angegebenen Port ('3000') und gibt einen Protokollkommentar in der Konsole aus. Mit dem laufenden Server könnten Sie zu `localhost:3000` in Ihrem Browser gehen, um die zurückgegebene Beispielantwort zu sehen.

### Importieren und Erstellen von Modulen

Ein Modul ist eine JavaScript-Bibliothek oder -Datei, die Sie mit der `require()`-Funktion von Node in anderen Code importieren können. _Express_ selbst ist ein Modul, ebenso wie die Middleware- und Datenbankbibliotheken, die wir in unseren _Express_-Anwendungen verwenden.

Der folgende Code zeigt, wie wir ein Modul nach Namen importieren, wobei das _Express_ Framework als Beispiel dient. Zuerst verwenden wir die `require()`-Funktion, geben den Namen des Moduls als String an (`'express'`) und rufen das zurückgegebene Objekt auf, um eine [Express-Anwendung](https://expressjs.com/en/4x/api.html#app) zu erstellen. Dann können wir die Eigenschaften und Funktionen des Anwendungsobjekts aufrufen.

```js
const express = require("express");
const app = express();
```

Sie können auch Ihre eigenen Module erstellen, die auf die gleiche Weise importiert werden können.

> [!NOTE]
> Sie _werden_ eigene Module erstellen wollen, da dies ermöglicht, Ihren Code in überschaubare Teile zu organisieren — eine monolithische Single-File-Anwendung ist schwer zu verstehen und zu warten. Der Einsatz von Modulen hilft Ihnen auch beim Verwalten Ihres Namensraums, da nur die Variablen, die Sie explizit exportieren, beim Verwenden eines Moduls importiert werden.

Um Objekte außerhalb eines Moduls verfügbar zu machen, müssen Sie sie nur als zusätzliche Eigenschaften des `exports`-Objekts offenlegen. Zum Beispiel ist das Modul **square.js** unten eine Datei, die `area()`- und `perimeter()`-Methoden exportiert:

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
const square = require("./square"); // Hier geben wir den Namen der Datei ohne die (optionale) .js Dateiendung an
console.log(`The area of a square with a width of 4 is ${square.area(4)}`);
```

> [!NOTE]
> Sie können auch einen absoluten Pfad zum Modul angeben (oder einen Namen, wie wir es ursprünglich getan haben).

Wenn Sie ein vollständiges Objekt in einer Zuweisung exportieren möchten, anstatt es eine Eigenschaft nach der anderen zu erstellen, weisen Sie es wie unten gezeigt `module.exports` zu (Sie können dies auch tun, um die Wurzel des `exports`-Objekts zu einem Konstruktor oder einer anderen Funktion zu machen):

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
> Sie können `exports` als eine [Verknüpfung](https://nodejs.org/api/modules.html#modules_exports_shortcut) zu `module.exports` innerhalb eines gegebenen Moduls betrachten. In der Tat ist `exports` nur eine Variable, die mit dem Wert von `module.exports` initialisiert wird, bevor das Modul ausgewertet wird. Dieser Wert ist ein Verweis auf ein Objekt (leeres Objekt in diesem Fall). Dies bedeutet, dass `exports` einen Verweis auf dasselbe Objekt hält, auf das auch `module.exports` verweist. Es bedeutet auch, dass durch das Zuweisen eines anderen Wertes zu `exports` es nicht mehr an `module.exports` gebunden ist.

Für viel mehr Informationen über Module siehe [Module](https://nodejs.org/api/modules.html#modules_modules) (Node API-Dokumentation).

### Verwendung von asynchronen APIs

JavaScript-Code verwendet häufig asynchrone anstatt synchroner APIs für Operationen, die einige Zeit benötigen, um abgeschlossen zu werden. Eine synchrone API ist eine, bei der jede Operation abgeschlossen sein muss, bevor die nächste Operation beginnen kann. Zum Beispiel sind die folgenden Protokollfunktionen synchron und drucken den Text in der Reihenfolge (Erste, Zweite) auf die Konsole.

```js
console.log("First");
console.log("Second");
```

Im Gegensatz dazu ist eine asynchrone API eine, bei der die API eine Operation startet und sofort zurückkehrt (bevor die Operation abgeschlossen ist). Sobald die Operation abgeschlossen ist, verwendet die API einen Mechanismus, um weitere Operationen durchzuführen. Beispielweise wird der unten stehende Code "Second, First" ausgeben, da die `setTimeout()`-Methode zuerst aufgerufen wird und sofort zurückkehrt, die Operation jedoch einige Sekunden nicht abgeschlossen wird.

```js
setTimeout(function () {
  console.log("First");
}, 3000);
console.log("Second");
```

Die Verwendung von nicht-blockierenden asynchronen APIs ist auf Node noch wichtiger als im Browser, da _Node_ eine einzelfädige ereignisgesteuerte Ausführungsumgebung ist. "Einzelfädig" bedeutet, dass alle Anfragen an den Server auf demselben Faden ausgeführt werden (anstatt in separate Prozesse gespawnt zu werden). Dieses Modell ist in Bezug auf Geschwindigkeit und Serverressourcen extrem effizient, bedeutet jedoch, dass wenn eine Ihrer Funktionen synchronen Methoden aufruft, die lange benötigen, um abgeschlossen zu werden, sie nicht nur die aktuelle Anfrage blockieren, sondern jede andere Anfrage, die von Ihrer Webanwendung bearbeitet wird.

Es gibt mehrere Möglichkeiten, wie eine asynchrone API Ihrer Anwendung mitteilen kann, dass sie abgeschlossen ist. Der häufigste Weg besteht darin, eine Callback-Funktion zu registrieren, wenn Sie die asynchrone API aufrufen, die zurückgerufen wird, wenn die Operation abgeschlossen ist. Dies ist der Ansatz, den wir oben verwendet haben.

> [!NOTE]
> Die Verwendung von Callbacks kann ziemlich "unklar" sein, wenn Sie eine Folge abhängiger asynchroner Vorgänge haben, die in einer bestimmten Reihenfolge ausgeführt werden müssen, da dies zu mehreren Ebenen von verschachtelten Callbacks führt. Dieses Problem ist allgemein bekannt als "Callback-Hölle". Dieses Problem kann durch gute Codierungspraktiken reduziert werden (siehe <http://callbackhell.com/>), das Verwenden eines Moduls wie [async](https://www.npmjs.com/package/async) oder das Umstrukturieren des Codes zu nativen JavaScript-Funktionen wie [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) und [async/await](/de/docs/Web/JavaScript/Reference/Statements/async_function). Node bietet die [`utils.promisify`](https://nodejs.org/api/util.html#utilpromisifyoriginal) Funktion, um die Conversion von Callback zu Promise ergonomisch zu gestalten.

> [!NOTE]
> Eine häufige Konvention für Node und Express ist die Verwendung von Fehler-zuerst-Callbacks. In dieser Konvention ist der erste Wert in Ihren _Callback-Funktionen_ ein Fehlerwert, während nachfolgende Argumente Erfolgs-Daten enthalten. Es gibt eine gute Erklärung, warum dieser Ansatz nützlich ist, in diesem Blog: [The Node.js Way - Understanding Error-First Callbacks](https://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/) (fredkschott.com).

### Erstellen von Routen-Handlern

In unserem _Hallo Welt_-Express-Beispiel (siehe oben) haben wir eine (Callback-)Routenhandler-Funktion für HTTP-`GET`-Anfragen an die Site-Root (`'/'`) definiert.

```js
app.get("/", function (req, res) {
  res.send("Hello World!");
});
```

Die Callback-Funktion nimmt ein Anfrage- und ein Antwortobjekt als Argumente. In diesem Fall ruft die Methode [`send()`](https://expressjs.com/en/4x/api.html#res.send) auf der Antwort auf, um den String "Hello World!" zurückzugeben. Es gibt eine [Reihe anderer Antwortmethoden](https://expressjs.com/en/guide/routing.html#response-methods) zum Beenden des Anfrage-/Antwortzyklus, zum Beispiel könnten Sie [`res.json()`](https://expressjs.com/en/4x/api.html#res.json) aufrufen, um eine JSON-Antwort zu senden oder [`res.sendFile()`](https://expressjs.com/en/4x/api.html#res.sendFile), um eine Datei zu senden.

> [!NOTE]
> Sie können in den Callback-Funktionen beliebige Argumentnamen verwenden; wenn der Callback aufgerufen wird, wird das erste Argument immer die Anfrage und das zweite immer die Antwort sein. Es ist sinnvoll, sie so zu benennen, dass Sie das Objekt, mit dem Sie im Text arbeiten, identifizieren können.

Das _Express-Anwendungs_-Objekt bietet auch Methoden zum Definieren von Routenhandlern für alle anderen HTTP-Verben, die meistens genauso verwendet werden:

`checkout()`, `copy()`, **`delete()`**, **`get()`**, `head()`, `lock()`, `merge()`, `mkactivity()`, `mkcol()`, `move()`, `m-search()`, `notify()`, `options()`, `patch()`, **`post()`**, `purge()`, **`put()`**, `report()`, `search()`, `subscribe()`, `trace()`, `unlock()`, `unsubscribe()`.

Es gibt eine spezielle Routing-Methode, `app.all()`, die als Reaktion auf jede HTTP-Methode aufgerufen wird. Dies wird verwendet, um Middleware-Funktionen an einem bestimmten Pfad für alle Anfragemethoden zu laden. Das folgende Beispiel (aus der Express-Dokumentation) zeigt einen Handler, der für Anfragen an `/secret` unabhängig vom verwendeten HTTP-Verb ausgeführt wird (sofern es vom [http Modul](https://nodejs.org/docs/latest/api/http.html#httpmethods) unterstützt wird).

```js
app.all("/secret", function (req, res, next) {
  console.log("Accessing the secret section…");
  next(); // pass control to the next handler
});
```

Routen erlauben es Ihnen, bestimmte Zeichenmuster in einer URL abzugleichen und einige Werte aus der URL herauszuziehen und als Parameter an den Routenhandler zu übergeben (als Attribute des Anfrage-Objekts, das als Parameter übergeben wird).

Oft ist es nützlich, Routenhandler für einen bestimmten Teil einer Site zusammenzufassen und diese mit einem gemeinsamen Routen-Präfix zugänglich zu machen (z. B. könnte eine Site mit einem Wiki alle wiki-bezogenen Routen in einer Datei haben und diese mit einem Routen-Präfix von _/wiki/_ erreichbar machen). In _Express_ wird dies mithilfe des [`express.Router`](https://expressjs.com/en/guide/routing.html#express-router) Objekts erreicht. Zum Beispiel können wir unsere Wiki-Route in einem Modul namens **wiki.js** erstellen und dann das `Router`-Objekt exportieren, wie unten gezeigt:

```js
// wiki.js - Wiki Routenmodul

const express = require("express");
const router = express.Router();

// Home-Seitenroute
router.get("/", function (req, res) {
  res.send("Wiki home page");
});

// Info-Seitenroute
router.get("/about", function (req, res) {
  res.send("About this wiki");
});

module.exports = router;
```

> [!NOTE]
> Das Hinzufügen von Routen zum `Router`-Objekt ist genauso wie das Hinzufügen von Routen zum `app`-Objekt (wie zuvor gezeigt).

Um den Router in unserer Hauptanwendungsdatei zu verwenden, würden wir dann das Routenmodul (**wiki.js**) `require()` und dann `use()` auf der _Express_-Anwendung aufzurufen, um den Router dem Middleware-Handlingpfad hinzuzufügen. Die beiden Routen sind dann über `/wiki/` und `/wiki/about/` zugänglich.

```js
const wiki = require("./wiki.js");
// …
app.use("/wiki", wiki);
```

Wir werden Ihnen später in dem verlinkten Abschnitt [Routen und Controller](/de/docs/Learn/Server-side/Express_Nodejs/routes) mehr darüber zeigen, wie Sie mit Routen arbeiten, insbesondere wie Sie den `Router` verwenden.

### Verwendung von Middleware

Middleware wird in Express-Anwendungen extensiv genutzt, von der Bereitstellung statischer Dateien bis hin zu Fehlerbehandlung und Komprimierung von HTTP-Antworten. Während Routenfunktionen den HTTP-Anfragereaktionszyklus durch Rückgabe einer Antwort an den HTTP-Client beenden, führen Middleware-Funktionen _üblicherweise_ einige Operationen an der Anfrage oder Antwort aus und rufen dann die nächste Funktion im "Stapel" auf, was entweder eine weitere Middleware oder ein Routenhandler sein kann. Die Reihenfolge, in der Middleware aufgerufen wird, liegt in der Verantwortung des Anwendungsentwicklers.

> [!NOTE]
> Middleware kann jede Operation ausführen, jeden Code ausführen, Änderungen an der Anfrage und dem Antwortobjekt vornehmen, und sie kann _auch den Anfragereaktionszyklus beenden_. Wenn sie den Zyklus nicht beendet, muss sie `next()` aufrufen, um die Kontrolle an die nächste Middleware-Funktion zu übergeben (oder die Anfrage bleibt hängen).

Die meisten Anwendungen werden _Drittanbieter_-Middleware verwenden, um gemeinsame Webentwicklungsaufgaben wie Arbeiten mit Cookies, Sitzungen, Benutzerauthentifizierung, Zugreifen auf Anforderungs-`POST`-Daten und JSON-Daten, Protokollierung usw. zu vereinfachen. Sie finden eine [Liste von Middleware-Paketen, die von den Express-Teams gepflegt werden](https://expressjs.com/en/resources/middleware.html) (die auch andere beliebte Drittanbieter-Pakete enthält). Andere Express-Pakete sind im npm-Paketmanager verfügbar.

Um Drittanbieter-Middleware zu verwenden, müssen Sie sie zuerst mit npm in Ihrer Anwendung installieren.
Zum Beispiel würden Sie diese Zeile verwenden, um die [morgan](https://expressjs.com/en/resources/middleware/morgan.html) HTTP-Anforderungsprotokollierung-Middleware zu installieren:

```bash
npm install morgan
```

Sie könnten dann `use()` auf dem _Express-Anwendungsobjekt_ aufrufen, um die Middleware dem Stapel hinzuzufügen:

```js
const express = require("express");
const logger = require("morgan");
const app = express();
app.use(logger("dev"));
// …
```

> [!NOTE]
> Middleware- und Routing-Funktionen werden in der Reihenfolge aufgerufen, in der sie deklariert wurden. Bei einigen Middleware-Komponenten ist die Reihenfolge wichtig (zum Beispiel, wenn Sitzungs-Middleware von Cookie-Middleware abhängt, dann muss der Cookie-Handler zuerst hinzugefügt werden). In den allermeisten Fällen wird zuerst Middleware aufgerufen, bevor Routen festgelegt werden, oder Ihre Routenhandler haben keinen Zugriff auf die von Ihrer Middleware hinzugefügte Funktionalität.

Sie können Ihre eigenen Middleware-Funktionen schreiben, und Sie müssen dies wahrscheinlich tun (wenn auch nur, um Fehlerbehandlungscode zu erstellen). Der **einzige** Unterschied zwischen einer Middleware-Funktion und einer Routenhandler-Callback-Funktion besteht darin, dass Middleware-Funktionen ein drittes Argument `next` haben, von dem erwartet wird, dass sie es aufrufen, wenn sie nicht jene Funktion sind, die den Anfragezyklus abschließt (wenn die Middleware-Funktion aufgerufen wird, enthält dies die _nächste_ Funktion, die aufgerufen werden muss).

Sie können eine Middleware-Funktion zur Verarbeitungskette für _alle Antworten_ mit `app.use()` hinzufügen oder für ein spezifisches HTTP-Verb mit der zugehörigen Methode: `app.get()`, `app.post()`, etc. Routen werden für beide Fälle auf dieselbe Weise angegeben, obwohl die Route optional ist, wenn `app.use()` aufgerufen wird.

Das folgende Beispiel zeigt, wie Sie die Middleware-Funktion mit beiden Ansätzen hinzufügen können, mit/ohne eine Route.

```js
const express = require("express");
const app = express();

// Eine Beispiel-Middleware-Funktion
const a_middleware_function = function (req, res, next) {
  // Führen Sie einige Operationen durch
  next(); // Rufen Sie next() auf, damit Express die nächste Middleware-Funktion in der Kette aufruft.
};

// Funktion mit use() für alle Routen und Verben hinzugefügt
app.use(a_middleware_function);

// Funktion mit use() für eine spezifische Route hinzugefügt
app.use("/someroute", a_middleware_function);

// Eine Middleware-Funktion für ein spezifisches HTTP-Verb und eine Route hinzugefügt
app.get("/", a_middleware_function);

app.listen(3000);
```

> [!NOTE]
> Oben deklarieren wir die Middleware-Funktion separat und legen sie dann als Callback fest. In unserer vorherigen Routenhandler-Funktion haben wir die Callback-Funktion festgelegt, als sie verwendet wurde. In JavaScript ist jeder Ansatz gültig.

Die Express-Dokumentation bietet sehr viel mehr ausgezeichnete Dokumentation zur [Verwendung](https://expressjs.com/en/guide/using-middleware.html) und zum [Schreiben](https://expressjs.com/en/guide/writing-middleware.html) von Express-Middleware.

### Bereitstellung statischer Dateien

Sie können die [express.static](https://expressjs.com/en/4x/api.html#express.static) Middleware verwenden, um statische Dateien bereitzustellen, einschließlich Ihrer Bilder, CSS und JavaScript (`static()` ist die einzige Middleware-Funktion, die tatsächlich **Teil** von _Express_ ist). Zum Beispiel würden Sie die folgende Linie verwenden, um Bilder, CSS-Dateien und JavaScript-Dateien aus einem Verzeichnis namens '**public'** auf derselben Ebene wie der Aufruf von node bereitzustellen:

```js
app.use(express.static("public"));
```

Alle Dateien im Verzeichnis Public werden bereitgestellt, indem Ihr Dateiname (_relativ_ zum Basisverzeichnis "public") zur Basis-URL hinzugefügt wird. Zum Beispiel:

```plain
http://localhost:3000/images/dog.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/about.html
```

Sie können `static()` mehrmals aufrufen, um mehrere Verzeichnisse bereitzustellen. Wenn eine Datei nicht von einer Middleware-Funktion gefunden werden kann, wird sie an die nachfolgende Middleware übergeben (die Reihenfolge, in der Middleware-Funktionen aufgerufen werden, wird durch Ihre Deklarationsreihenfolge bestimmt).

```js
app.use(express.static("public"));
app.use(express.static("media"));
```

Sie können auch ein virtuelles Präfix für Ihre statischen URLs erstellen, anstatt die Dateien zur Basis-URL hinzuzufügen. Zum Beispiel geben wir hier einen [Mount-Pfad](https://expressjs.com/en/4x/api.html#app.use) an, sodass die Dateien mit dem Präfix "/media" geladen werden:

```js
app.use("/media", express.static("public"));
```

Nun können die Dateien, die sich im `public`-Verzeichnis befinden, mit dem `/media`-Pfadpräfix geladen werden.

```plain
http://localhost:3000/media/images/dog.jpg
http://localhost:3000/media/video/cat.mp4
http://localhost:3000/media/cry.mp3
```

> [!NOTE]
> Siehe auch [Bereitstellung statischer Dateien in Express](https://expressjs.com/en/starter/static-files.html).

### Fehlerbehandlung

Fehler werden von einer oder mehreren speziellen Middleware-Funktionen behandelt, die vier Argumente anstelle der üblichen drei verwenden: `(err, req, res, next)`. Beispielsweise:

```js
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

Diese können jeden erforderlichen Inhalt zurückgeben, müssen jedoch nach allen anderen `app.use()` und Routen-Aufrufen aufgerufen werden, sodass sie die letzte Middleware im Anfragenbearbeitungsprozess sind!

Express verfügt über einen integrierten Fehler-Handler, der sich um verbleibende Fehler kümmert, die möglicherweise in der Anwendung auftreten. Diese standardmäßige Fehlerbehandlung-Middleware-Funktion wird am Ende des Middleware-Funktionsstacks hinzugefügt. Wenn Sie `next()` einen Fehler übergeben und diesen nicht in einem Fehler-Handler behandeln, wird er vom integrierten Fehler-Handler behandelt; der Fehler wird dem Client mit dem Stack-Trace geschrieben.

> [!NOTE]
> Der Stack-Trace ist in der Produktionsumgebung nicht enthalten. Um es im Produktionsmodus auszuführen, müssen Sie die Umgebungsvariable `NODE_ENV` auf '`production'` setzen.

> [!NOTE]
> HTTP404 und andere "Fehler"-Statuscodes werden nicht als Fehler behandelt. Wenn Sie diese behandeln möchten, können Sie eine Middleware-Funktion hinzufügen, um dies zu tun. Für weitere Informationen siehe die [FAQ](https://expressjs.com/en/starter/faq.html#how-do-i-handle-404-responses).

Für weitere Informationen siehe [Fehlerbehandlung](https://expressjs.com/en/guide/error-handling.html) (Express-Dokumentation).

### Verwendung von Datenbanken

_Express_-Anwendungen können jeden von _Node_ unterstützten Datenbankmechanismus verwenden (_Express_ selbst definiert keine spezifischen zusätzlichen Verhaltensweisen/Anforderungen zum Datenbankmanagement). Es gibt viele Optionen, darunter PostgreSQL, MySQL, Redis, SQLite, MongoDB, etc.

Um diese zu verwenden, müssen Sie zuerst den Datenbanktreiber mit npm installieren. Um beispielsweise den Treiber für das populäre NoSQL MongoDB zu installieren, würden Sie den Befehl verwenden:

```bash
npm install mongodb
```

Die Datenbank selbst kann lokal oder auf einem Cloud-Server installiert sein. In Ihrem Express-Code benötigen Sie den Treiber, verbinden sich mit der Datenbank und führen dann Create-, Read-, Update- und Delete-Operationen (CRUD) durch. Das Beispiel unten (aus der Express-Dokumentation) zeigt, wie Sie "Mammal"-Datensätze mit MongoDB finden können.

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

Ein weiterer beliebter Ansatz besteht darin, auf Ihre Datenbank indirekt über einen Object Relational Mapper ("ORM") zuzugreifen. In diesem Ansatz definieren Sie Ihre Daten als "Objekte" oder "Modelle" und der ORM mappt diese in das zugrunde liegende Datenbankformat. Dieser Ansatz hat den Vorteil, dass Sie als Entwickler weiterhin in Bezug auf JavaScript-Objekte denken können, anstatt über Datenbanksemantik, und dass es einen offensichtlichen Ort gibt, um die Validierung und Überprüfung von eingehenden Daten durchzuführen. Wir werden später mehr über Datenbanken in einem späteren Artikel sprechen.

Für weitere Informationen siehe [Datenbankintegration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation).

### Rendering von Daten (Ansichten)

Template-Engines (auch als "View-Engines" in _Express_ bezeichnet) ermöglichen es Ihnen, die _Struktur_ eines Ausgabedokuments in einer Vorlage zu
