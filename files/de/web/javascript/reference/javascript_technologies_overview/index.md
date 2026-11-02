---
title: Überblick über JavaScript-Technologien
slug: Web/JavaScript/Reference/JavaScript_technologies_overview
l10n:
  sourceCommit: 389605121ed8ea78cc1878f31bbca6759cc7417d
---

Während [HTML](/de/docs/Web/HTML) die Struktur und den Inhalt einer Webseite definiert und [CSS](/de/docs/Web/CSS) deren Formatierung und Erscheinungsbild festlegt, fügt [JavaScript](/de/docs/Web/JavaScript) einer Webseite Interaktivität hinzu und ermöglicht umfangreiche Webanwendungen.

Der Oberbegriff „JavaScript“ umfasst im Kontext eines Webbrowsers jedoch mehrere sehr unterschiedliche Bestandteile. Einer davon ist die Kernsprache (ECMAScript), ein anderer die Sammlung der [Web-APIs](/de/docs/Web/API), einschließlich des DOM (Document Object Model).

## JavaScript, die Kernsprache (ECMAScript)

Die Kernsprache von JavaScript wird vom ECMA-TC39-Komitee unter dem Namen ECMAScript standardisiert. „ECMAScript“ bezeichnet den Sprachstandard; die Begriffe „ECMAScript“ und „JavaScript“ können jedoch auch synonym verwendet werden.

Diese Kernsprache wird auch außerhalb von Browsern verwendet, beispielsweise in [Node.js](https://nodejs.org/).

### Was gehört zum Geltungsbereich von ECMAScript?

ECMAScript definiert unter anderem:

- Die Sprachsyntax (Parsing-Regeln, Schlüsselwörter, Kontrollfluss, Initialisierung von Objektliteralen, …)
- Mechanismen zur Fehlerbehandlung ({{jsxref("Statements/throw", "throw")}}, {{jsxref("Statements/try...catch", "try...catch")}}, die Möglichkeit, benutzerdefinierte {{jsxref("Error")}}-Typen zu erstellen)
- Typen (Boolean, Number, String, Function, Object, …)
- Einen prototypbasierten Vererbungsmechanismus
- Integrierte Objekte und Funktionen, darunter {{jsxref("JSON")}}, {{jsxref("Math")}}, [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)-Methoden, {{jsxref("parseInt")}}, {{jsxref("decodeURI")}} usw.
- Den [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode)
- Ein [Modulsystem](/de/docs/Web/JavaScript/Guide/Modules)
- Ein grundlegendes Speichermodell

### Standardisierungsprozess

ECMAScript-Ausgaben werden jährlich von der ECMA-Generalversammlung als Standard verabschiedet und veröffentlicht. Die gesamte Entwicklung ist in der [GitHub-Organisation Ecma TC39](https://github.com/tc39) öffentlich einsehbar. Dort finden sich Vorschläge, der offizielle Spezifikationstext und Sitzungsprotokolle.

Vor der 6. Ausgabe von ECMAScript (bekannt als ES6) wurden Spezifikationen nur alle paar Jahre veröffentlicht und üblicherweise anhand ihrer Hauptversionsnummern bezeichnet – ES3, ES5 usw. Seit ES6 wird die Spezifikation nach ihrem Veröffentlichungsjahr benannt – ES2017, ES2018 usw. ES6 ist gleichbedeutend mit ES2015. _ESNext_ ist eine veränderliche Bezeichnung für die zum jeweiligen Zeitpunkt nächste Version. ESNext-Funktionen werden treffender als Vorschläge bezeichnet, da die Spezifikation für sie definitionsgemäß noch nicht fertiggestellt ist.

Der aktuelle, vom Komitee verabschiedete Stand von ECMA-262 ist auf der [Seite zur Sprachspezifikation ECMA-262](https://ecma-international.org/publications-and-standards/standards/ecma-262/) von Ecma International im PDF- und HTML-Format verfügbar. ECMA-262 und ECMA-402 werden von den Verantwortlichen für die Spezifikationen kontinuierlich gepflegt und aktualisiert. Auf der TC39-Website stehen die neuesten Fassungen von [ECMA-262](https://tc39.es/ecma262/) und [ECMA-402](https://tc39.es/ecma402/) bereit.

Neue Sprachfunktionen, darunter die Einführung neuer Syntax und APIs sowie Änderungen an bestehendem Verhalten, werden in Form von Vorschlägen diskutiert. Jeder Vorschlag durchläuft einen [mehrstufigen Prozess](https://tc39.es/process-document/) und wird üblicherweise in Stufe 3 oder 4 von JavaScript-Engines implementiert, sodass er öffentlich genutzt werden kann.

Weitere Informationen zur Geschichte von ECMAScript finden Sie im [Wikipedia-Artikel zu ECMAScript](https://en.wikipedia.org/wiki/ECMAScript).

### Internationalization API

Die [ECMAScript Internationalization API Specification](https://402.ecma-international.org/1.0/) ergänzt die ECMAScript-Sprachspezifikation und wird ebenfalls von Ecma TC39 standardisiert. Die Internationalization API stellt JavaScript-Anwendungen Funktionen für Sortierung (Zeichenfolgenvergleiche), Zahlenformatierung sowie Datums- und Uhrzeitformatierung bereit. Anwendungen können dabei die Sprache auswählen und die Funktionen an ihre Anforderungen anpassen. Der erste Standard wurde im Dezember 2012 verabschiedet; der Stand der Browserimplementierungen wird in der Dokumentation des {{jsxref("Intl")}}-Objekts erfasst. Auch die Internationalization-Spezifikation wird inzwischen jährlich ratifiziert, und Browser verbessern ihre Implementierungen fortlaufend.

### Verwandte Ressourcen

Es gibt verschiedene Möglichkeiten, an der Arbeit an der ECMAScript Language Specification, der ECMAScript Internationalization API Specification und verwandten Ressourcen mitzuwirken oder sie zu verfolgen:

- [Repository der ECMAScript Language Specification](https://github.com/tc39/ecma262)
- [Repository der ECMAScript Internationalization API Specification](https://github.com/tc39/ecma402)
- [Repository für ECMAScript-Vorschläge](https://github.com/tc39/proposals)
- [Repository der ECMAScript-Konformitätstestsuite](https://github.com/tc39/test262)
- [TC39-Sitzungsprotokolle](https://github.com/tc39/notes)
- [Diskussionen zur ECMAScript-Spezifikation; aktuelle Mailingliste](https://es.discourse.group/)
- [Diskussionen zur ECMAScript-Spezifikation; Archiv der früheren Mailingliste (bis März 2021)](https://esdiscuss.org/)

## DOM-APIs

### WebIDL

Die [WebIDL-Spezifikation](https://webidl.spec.whatwg.org/) stellt die Verbindung zwischen den DOM-Technologien und ECMAScript her.

### Der Kern des DOM

Das Document Object Model (DOM) ist eine plattformübergreifende, **sprachunabhängige Konvention** zur Darstellung von und Interaktion mit Objekten in HTML-, XHTML- und XML-Dokumenten. Objekte im **DOM-Baum** können über ihre Methoden angesprochen und verändert werden. Heute wird die Spezifikation des [DOM-Kerns](https://dom.spec.whatwg.org/) von {{Glossary("WHATWG", "WHATWG")}} gepflegt und hat die Version des {{Glossary("W3C", "W3C")}} abgelöst. Sie definiert sprachunabhängige Schnittstellen, die HTML- und XML-Dokumente als Objekte abstrahieren, sowie Mechanismen zur Bearbeitung dieser Abstraktion. Dazu gehören [`Node`](/de/docs/Web/API/Node), [`Element`](/de/docs/Web/API/Element), [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), [`Document`](/de/docs/Web/API/Document), [`DOMImplementation`](/de/docs/Web/API/DOMImplementation), [`Event`](/de/docs/Web/API/Event), [`EventTarget`](/de/docs/Web/API/EventTarget) und weitere.

Aus Sicht von ECMAScript werden die in der DOM-Spezifikation definierten Objekte als „Host-Objekte“ bezeichnet.

### HTML-DOM

[HTML](https://html.spec.whatwg.org/multipage/), die Auszeichnungssprache des Webs, wird mithilfe des DOM spezifiziert. Aufbauend auf den abstrakten Konzepten des DOM-Kerns definiert HTML auch die _Bedeutung_ der Elemente. Das HTML-DOM umfasst APIs wie [`Document.body`](/de/docs/Web/API/Document/body) und Schnittstellen für HTML-Elemente.

Die HTML-Spezifikation legt außerdem Einschränkungen für Dokumente fest. Beispielsweise müssen alle Kindelemente eines {{htmlelement("ul")}}-Elements, das eine ungeordnete Liste darstellt, {{htmlelement("li")}}-Elemente sein, da diese Listeneinträge darstellen. Generell untersagt sie auch die Verwendung von Elementen und Attributen, die in keinem Standard definiert sind.

Suchen Sie das [`Document`](/de/docs/Web/API/Document)-Objekt, das [`Window`](/de/docs/Web/API/Window)-Objekt oder andere DOM-Elemente? Lesen Sie die [DOM-Dokumentation](/de/docs/Web/API/Document_Object_Model).

## Weitere wichtige APIs

- Die Funktionen [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setInterval()`](/de/docs/Web/API/Window/setInterval) wurden erstmals für die [`Window`](/de/docs/Web/API/Window)-Schnittstelle im HTML-Standard spezifiziert.
- [XMLHttpRequest](https://xhr.spec.whatwg.org/) ermöglicht das Senden asynchroner HTTP-Anfragen.
- Die [Fetch API](https://fetch.spec.whatwg.org/) bietet eine benutzerfreundlichere Abstraktion für Netzwerkanfragen.
- Das [CSS Object Model](https://drafts.csswg.org/cssom/) bildet CSS-Regeln als Objekte ab.
- [WebWorkers](https://html.spec.whatwg.org/multipage/workers.html) ermöglichen parallele Berechnungen.
- [WebSockets](https://html.spec.whatwg.org/multipage/#network) ermöglichen bidirektionale Kommunikation auf niedriger Ebene.
- [Canvas 2D Context](https://html.spec.whatwg.org/multipage//#2dcontext) ist eine Zeichen-API für [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas).
- Die [WebAssembly-Schnittstelle](https://webassembly.github.io/spec/js-api/) stellt Hilfsmittel für die Kommunikation zwischen JavaScript-Code und [WebAssembly](/de/docs/WebAssembly)-Modulen bereit.

Umgebungen außerhalb des Browsers (wie Node.js) verfügen häufig nicht über DOM-APIs, da sie nicht mit einem Dokument interagieren. In der Regel implementieren sie aber viele Web-APIs, etwa [`fetch()`](/de/docs/Web/API/Window/fetch) und [`setTimeout()`](/de/docs/Web/API/Window/setTimeout).

## JavaScript-Implementierungen

Zu den JavaScript-Engines, die in aktuellen Webbrowsern verwendet werden, gehören:

- Mozillas [SpiderMonkey](https://spidermonkey.dev/), verwendet in Firefox, Servo und Flow. Außerhalb von Browsern wird sie unter anderem in MongoDB und CouchDB eingesetzt. Sie war die _allererste_ JavaScript-Engine und wurde von Brendan Eich bei Netscape entwickelt.
- Googles [V8](https://v8.dev/), verwendet in Chrome und Chromium-basierten Browsern wie Opera, Edge und Brave. Außerhalb von Browsern wird sie unter anderem in [Node.js](https://nodejs.org/), [Deno](https://deno.com/) und [Electron](https://www.electronjs.org/) eingesetzt.
- Apples [JavaScriptCore](https://docs.webkit.org/Deep%20Dive/JSC/JavaScriptCore.html) (auch als SquirrelFish/Nitro bekannt), verwendet in Safari und anderen WebKit-basierten Browsern. Außerhalb von Browsern wird sie unter anderem in [Bun](https://bun.com/) eingesetzt.
- [LibJS](https://serenityos.github.io/libjs-website/), verwendet in [Ladybird](https://ladybird.org/).

Zu den JavaScript-Engines, die in früheren Browsern verwendet wurden, gehören:

- [Carakan](<https://en.wikipedia.org/wiki/Presto_(browser_engine)#ECMAScript_engines>), verwendet in Opera, bevor es zu einem Chromium-basierten Browser wurde.
- Microsofts [Chakra](<https://en.wikipedia.org/wiki/Chakra_(JScript_engine)>), verwendet in Internet Explorer (die implementierte Sprache heißt aus markenrechtlichen Gründen offiziell allerdings „JScript“). Frühere Versionen von Edge verwendeten eine andere JavaScript-Engine, die verwirrenderweise ebenfalls [Chakra](<https://en.wikipedia.org/wiki/Chakra_(JavaScript_engine)>) hieß, bevor Edge zu einem Chromium-basierten Browser wurde.

Zu den JavaScript-Engines, die speziell für den Einsatz außerhalb von Browsern entwickelt wurden, gehören:

- [Engine262](https://engine262.js.org/), in JavaScript geschrieben und im Wesentlichen als Referenzimplementierung der Sprache gedacht.
- Metas [Hermes](https://github.com/facebook/hermes), optimiert für [React Native](https://reactnative.dev/docs/hermes).
- Mozillas [Rhino](<https://en.wikipedia.org/wiki/Rhino_(JavaScript_engine)>), in Java geschrieben.
- Oracles [GraalJS](https://www.graalvm.org/), in Java geschrieben und auf GraalVM aufgebaut.
- [Moddable XS](https://www.moddable.com/), für IoT- und eingebettete Systeme gedacht.
- [QuickJS](https://bellard.org/quickjs/), auf geringe Größe und niedrigen Ressourcenverbrauch ausgelegt.

JavaScript-Engines stellen eine öffentliche API bereit, über die Anwendungsentwickler JavaScript in ihre Software integrieren können. Die mit Abstand häufigste Host-Umgebung für JavaScript sind Webbrowser. Sie nutzen die öffentliche API typischerweise, um **Host-Objekte** zu erstellen, die das [DOM](https://dom.spec.whatwg.org/) in JavaScript abbilden.

Ein weiteres verbreitetes Einsatzgebiet von JavaScript ist die serverseitige Skripterstellung für (Web-)Server. Ein JavaScript-Webserver stellt Host-Objekte bereit, die HTTP-Anfragen und -Antworten repräsentieren. Ein JavaScript-Programm kann diese Objekte bearbeiten, um Webseiten dynamisch zu erzeugen. [Node.js](https://nodejs.org/) ist ein bekanntes Beispiel dafür.

## Shells

Mit einer JavaScript-Shell können Sie JavaScript-Codefragmente schnell testen, ohne eine Webseite neu laden zu müssen. Sie sind äußerst nützlich, um Code zu entwickeln und Fehler zu beheben.

### Eigenständige JavaScript-Shells

Die folgenden JavaScript-Shells sind eigenständige Umgebungen, ähnlich wie Perl oder Python.

- [Node.js](https://nodejs.org/) – Eine auf V8 basierende JavaScript-Laufzeitumgebung.
- [Bun](https://bun.com/) – Eine auf JavaScriptCore basierende JavaScript-Laufzeitumgebung.

### Browserbasierte JavaScript-Shells

Die folgenden JavaScript-Shells führen Code über die JavaScript-Engine des Browsers aus.

- Firefox verfügt über eine [integrierte JavaScript-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html), die mehrzeilige Eingaben unterstützt.
- [Babel REPL](https://babeljs.io/repl) – Eine browserbasierte [REPL](https://en.wikipedia.org/wiki/REPL), mit der Sie zukünftige JavaScript-Funktionen ausprobieren können.
- [TypeScript Playground](https://www.typescriptlang.org/play/) – Eine browserbasierte Umgebung zum Experimentieren sowohl mit neuen JavaScript-Funktionen (über den tsc-Compiler) als auch mit TypeScript-Syntax.

## Werkzeuge und Ressourcen

Hilfreiche Werkzeuge zum Schreiben und Debuggen Ihres JavaScript-Codes.

- [Firefox-Entwicklerwerkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html), [JavaScript-Profiler](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html), [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) und mehr.
- [Learn JavaScript](https://learnjavascript.online/)
  - : Eine hervorragende Ressource für angehende Webentwickler: Lernen Sie JavaScript in einer interaktiven Umgebung mit kurzen Lektionen und interaktiven Tests, begleitet von automatisierten Bewertungen. Die ersten 40 Lektionen sind kostenlos; der vollständige Kurs ist gegen eine geringe einmalige Zahlung erhältlich.
- [TogetherJS](https://togetherjs.com/)
  - : Einfache Zusammenarbeit. Wenn Sie TogetherJS in Ihre Website einbinden, können sich Ihre Nutzer dort in Echtzeit gegenseitig helfen!
- [Stack Overflow](https://stackoverflow.com/questions/tagged/javascript)
  - : Mit „JavaScript“ gekennzeichnete Fragen auf Stack Overflow.
- [JSFiddle](https://jsfiddle.net/)
  - : Bearbeiten Sie JavaScript, CSS und HTML und sehen Sie die Ergebnisse sofort. Nutzen Sie externe Ressourcen und arbeiten Sie online mit Ihrem Team zusammen.
- [Plunker](https://plnkr.co/)
  - : Plunker ist eine Online-Community, in der Sie Ideen für die Webentwicklung erstellen, gemeinsam bearbeiten und teilen können. Bearbeiten Sie Ihre JavaScript-, CSS- und HTML-Dateien und sehen Sie Ergebnisse und Dateistruktur sofort.
- [JS Bin](https://jsbin.com/)
  - : JS Bin ist ein kollaboratives Open-Source-Werkzeug zur Fehlerbehebung in der Webentwicklung.
- [CodePen](https://codepen.io/)
  - : CodePen ist ein weiteres kollaboratives Werkzeug für die Webentwicklung, mit dem Sie Ergebnisse sofort ausprobieren können.
- [StackBlitz](https://stackblitz.com/)
  - : StackBlitz ist eine weitere Online-Umgebung zum Experimentieren und Debuggen, mit der sich Full-Stack-Anwendungen mit React, Angular usw. hosten und bereitstellen lassen.
- [RunJS](https://runjs.app/)
  - : RunJS ist eine Desktop-Umgebung zum Experimentieren und Ausprobieren von Code. Sie zeigt Ergebnisse sofort an und bietet Zugriff auf Node- und Browser-APIs.
