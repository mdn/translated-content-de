---
title: Überblick über JavaScript-Technologien
slug: Web/JavaScript/Reference/JavaScript_technologies_overview
l10n:
  sourceCommit: 1474534461893381d54c502e655f334b5568e597
---

Während [HTML](/de/docs/Web/HTML) die Struktur und den Inhalt einer Webseite definiert und [CSS](/de/docs/Web/CSS) das Format und das Erscheinungsbild festlegt, verleiht [JavaScript](/de/docs/Web/JavaScript) einer Webseite Interaktivität und ermöglicht die Erstellung umfangreicher Webanwendungen.

Der Sammelbegriff "JavaScript" im Kontext eines Webbrowsers umfasst jedoch mehrere sehr unterschiedliche Elemente. Eines davon ist die Kernsprache (ECMAScript), ein anderes ist die Sammlung der [Web-APIs](/de/docs/Web/API), einschließlich des DOM (Document Object Model).

## JavaScript, die Kernsprache (ECMAScript)

Die Kernsprache von JavaScript wird vom ECMA TC39-Komitee als eine Sprache namens ECMAScript standardisiert. "ECMAScript" ist der Begriff für die Sprachstandardisierung, aber "ECMAScript" und "JavaScript" können synonym verwendet werden.

Diese Kernsprache wird auch in nicht-browserbasierten Umgebungen verwendet, zum Beispiel in [Node.js](https://nodejs.org/).

### Was fällt unter den ECMAScript-Bereich?

Unter anderem definiert ECMAScript:

- Sprachsyntax (Parsing-Regeln, Schlüsselwörter, Kontrollfluss, Initialisierung von Objektliteralen, ...)
- Fehlerbehandlungsmethoden ({{jsxref("Statements/throw", "throw")}}, {{jsxref("Statements/try...catch", "try...catch")}}, Möglichkeit zur Erstellung benutzerdefinierter {{jsxref("Error")}}-Typen)
- Typen (boolean, number, string, function, object, ...)
- Ein prototypbasiertes Vererbungsmechanismus
- Eingebaute Objekte und Funktionen, einschließlich {{jsxref("JSON")}}, {{jsxref("Math")}}, [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)-Methoden, {{jsxref("parseInt")}}, {{jsxref("decodeURI")}}, usw.
- [Strikter Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)
- Ein [Modulsystem](/de/docs/Web/JavaScript/Guide/Modules)
- Grundlegendes Speichermodell

### Standardisierungsprozess

ECMAScript-Ausgaben werden jährlich vom ECMA-Generalversammlung als Standard genehmigt und veröffentlicht. Die gesamte Entwicklung erfolgt öffentlich auf der [Ecma TC39 GitHub-Organisation](https://github.com/tc39), die Vorschläge, den offiziellen Spezifikationstext und Sitzungsnotizen hostet.

Vor der 6. Ausgabe von ECMAScript (bekannt als ES6) wurden Spezifikationen alle paar Jahre veröffentlicht und werden häufig anhand ihrer Hauptversionsnummern bezeichnet — ES3, ES5 usw. Nach ES6 wird die Spezifikation nach dem Veröffentlichungsjahr benannt — ES2017, ES2018 usw. ES6 ist synonym mit ES2015. _ESNext_ ist ein dynamischer Name, der sich auf die jeweils nächste Version zum Zeitpunkt des Schreibens bezieht. ESNext-Funktionen werden korrekterweise als Vorschläge bezeichnet, da die Spezifikation per Definition noch nicht abschließend ist.

Der aktuelle, vom Komitee genehmigte Snapshot von ECMA-262 ist im PDF- und HTML-Format auf der [ECMA-262 Sprachspezifikationsseite](https://ecma-international.org/publications-and-standards/standards/ecma-262/) von Ecma International verfügbar. ECMA-262 und ECMA-402 werden kontinuierlich von den Spezifikationseditoren gepflegt und auf dem neuesten Stand gehalten; die TC39-Website hostet die neuesten, aktuellen Versionen [ECMA-262](https://tc39.es/ecma262/) und [ECMA-402](https://tc39.es/ecma402/).

Neue Sprachfunktionen, einschließlich Einführung neuer Syntaxe und APIs sowie Überarbeitung bestehender Verhaltensweisen, werden in Form von Vorschlägen diskutiert. Jeder Vorschlag durchläuft einen [4-Stufen-Prozess](https://tc39.es/process-document/) und wird typischerweise von JavaScript-Engines in Stufe 3 oder Stufe 4 implementiert und ist somit für die öffentliche Nutzung verfügbar.

Weitere Informationen zur Geschichte von ECMAScript finden Sie im [Wikipedia ECMAScript-Eintrag](https://en.wikipedia.org/wiki/ECMAScript).

### Internationalisierungs-API

Die [ECMAScript Internationalization API Specification](https://402.ecma-international.org/1.0/) ist eine Ergänzung zur ECMAScript Language Specification und wird ebenfalls von Ecma TC39 standardisiert. Die Internationalisierungs-API bietet Collation (Zeichenfolgenvergleich), Zahlenformatierung und Datums- und Zeitformatierung für JavaScript-Anwendungen, sodass die Anwendungen die Sprache wählen und die Funktionalität an ihre Bedürfnisse anpassen können. Der ursprüngliche Standard wurde im Dezember 2012 genehmigt; der Status der Implementierungen in Browsern wird in der Dokumentation des {{jsxref("Intl")}}-Objekts nachverfolgt. Die Internationalisierungs-Spezifikation wird heutzutage ebenfalls jährlich ratifiziert und Browser verbessern ständig ihre Implementierung.

### Verwandte Ressourcen

Es gibt verschiedene Möglichkeiten, sich an der aktuellen Arbeit an der ECMAScript-Language-Specification und der ECMAScript-Internationalisierungs-API-Specification sowie an verwandten Ressourcen zu beteiligen oder diese einfach nur zu verfolgen:

- [ECMAScript Language Specification Repo](https://github.com/tc39/ecma262)
- [ECMAScript Internationalization API Specification Repo](https://github.com/tc39/ecma402)
- [ECMAScript Proposals Repo](https://github.com/tc39/proposals)
- [ECMAScript Conformance Test Suite Repo](https://github.com/tc39/test262)
- [TC39-Sitzungsnotizen](https://github.com/tc39/notes)
- [ECMAScript Spezifikationsdiskussion; aktuelle Mailingliste](https://es.discourse.group/)
- [ECMAScript Spezifikationsdiskussion; historische Mailinglisten-Archive (bis März 2021)](https://esdiscuss.org/)

## DOM-APIs

### WebIDL

Die [WebIDL-Spezifikation](https://webidl.spec.whatwg.org/) stellt die Verbindung zwischen den DOM-Technologien und ECMAScript her.

### Der Kern des DOM

Das Document Object Model (DOM) ist eine plattformübergreifende, **sprachunabhängige Konvention** zur Darstellung und Interaktion mit Objekten in HTML-, XHTML- und XML-Dokumenten. Objekte im **DOM-Baum** können durch Methoden auf den Objekten angesprochen und manipuliert werden. Heutzutage wird die [DOM Core](https://dom.spec.whatwg.org/)-Spezifikation von {{Glossary("WHATWG", "WHATWG")}} gepflegt (ersetzt die {{Glossary("W3C", "W3C")}}-Version). Sie definiert sprachunabhängige Schnittstellen, die HTML- und XML-Dokumente als Objekte abstrahieren, und definiert auch Mechanismen, um diese Abstraktion zu manipulieren. Dazu gehören: [`Node`](/de/docs/Web/API/Node), [`Element`](/de/docs/Web/API/Element), [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), [`Document`](/de/docs/Web/API/Document), [`DOMImplementation`](/de/docs/Web/API/DOMImplementation), [`Event`](/de/docs/Web/API/Event), [`EventTarget`](/de/docs/Web/API/EventTarget), und mehr.

Aus ECMAScript-Sicht werden die in der DOM-Spezifikation definierten Objekte als "Hostobjekte" bezeichnet.

### HTML DOM

[HTML](https://html.spec.whatwg.org/multipage/), die Markup-Sprache des Webs, wird im Sinne des DOM spezifiziert. Oberhalb der im DOM Core definierten abstrakten Konzepte definiert HTML auch die _Bedeutung_ der Elemente. Das HTML-DOM umfasst Dinge wie die `className`-Eigenschaft an HTML-Elementen oder APIs wie [`Document.body`](/de/docs/Web/API/Document/body).

Die HTML-Spezifikation definiert auch Einschränkungen für Dokumente; zum Beispiel fordert sie, dass alle Kinder eines {{htmlelement("ul")}}-Elements, das eine ungeordnete Liste darstellt, {{htmlelement("li")}}-Elemente sein müssen, da diese Listeneinträge repräsentieren. Im Allgemeinen verbietet sie auch die Verwendung von Elementen und Attributen, die nicht in einem Standard definiert sind.

Suchen Sie nach dem [`Document`](/de/docs/Web/API/Document)-Objekt, [`Window`](/de/docs/Web/API/Window)-Objekt und den anderen DOM-Elementen? Lesen Sie die [DOM-Dokumentation](/de/docs/Web/API/Document_Object_Model).

## Andere bemerkenswerte APIs

- Die Funktionen [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setInterval()`](/de/docs/Web/API/Window/setInterval) wurden erstmals in der [`Window`](/de/docs/Web/API/Window)-Schnittstelle im HTML-Standard spezifiziert.
- [XMLHttpRequest](https://xhr.spec.whatwg.org/) ermöglicht das Senden von asynchronen HTTP-Anfragen.
- Die [Fetch API](https://fetch.spec.whatwg.org/) bietet eine ergonomischere Abstraktion für Netzwerk-Anfragen.
- Das [CSS Object Model](https://drafts.csswg.org/cssom/) abstrahiert CSS-Regeln als Objekte.
- [WebWorkers](https://html.spec.whatwg.org/multipage/workers.html) ermöglichen parallele Berechnungen.
- [WebSockets](https://html.spec.whatwg.org/multipage/#network) erlauben bidirektionale Low-Level-Kommunikation.
- [Canvas 2D Context](https://html.spec.whatwg.org/multipage//#2dcontext) ist eine Zeichen-API für [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas).
- Die [WebAssembly-Schnittstelle](https://webassembly.github.io/spec/js-api/) bietet Werkzeuge zur Kommunikation zwischen JavaScript-Code und [WebAssembly](/de/docs/WebAssembly)-Modulen.

Nicht-Browser-Umgebungen (wie Node.js) haben oft keine DOM-APIs — da sie nicht mit einem Dokument interagieren —, aber sie implementieren in der Regel viele Web-APIs, wie [`fetch()`](/de/docs/Web/API/Window/fetch) und [`setTimeout()`](/de/docs/Web/API/Window/setTimeout).

## JavaScript-Implementierungen

In aktuellen Webbrowsern verwendete JavaScript-Engines umfassen:

- Mozillas [SpiderMonkey](https://spidermonkey.dev/), verwendet in Firefox, Servo und Flow. Andere nicht-browserbasierte Verwendungen umfassen MongoDB, CouchDB und mehr. Dies war die _erste_ JavaScript-Engine, erstellt von Brendan Eich bei Netscape.
- Googles [V8](https://v8.dev/), verwendet in Chrome und Chromium-basierten Browsern wie Opera, Edge und Brave. Andere nicht-browserbasierte Verwendungen umfassen [Node.js](https://nodejs.org/), [Deno](https://deno.com/), [Electron](https://www.electronjs.org/) und mehr.
- Apples [JavaScriptCore](https://docs.webkit.org/Deep%20Dive/JSC/JavaScriptCore.html) (auch bekannt als SquirrelFish/Nitro), verwendet in Safari und anderen WebKit-basierten Browsern. Andere nicht-browserbasierte Verwendungen umfassen [Bun](https://bun.com/).
- [LibJS](https://serenityos.github.io/libjs-website/), verwendet in [Ladybird](https://ladybird.org/).

Einige JavaScript-Engines, die in früheren Browsern verwendet wurden, umfassen:

- [Carakan](<https://en.wikipedia.org/wiki/Presto_(browser_engine)#ECMAScript_engines>), verwendet in Opera, bevor es ein Chromium-basierter Browser wurde.
- Microsofts [Chakra](<https://en.wikipedia.org/wiki/Chakra_(JScript_engine)>), verwendet in Internet Explorer (obwohl die Sprache, die es implementiert, formal "JScript" genannt wird, um Markenprobleme zu vermeiden). Frühere Versionen von Edge verwendeten eine andere JavaScript-Engine, verwirrenderweise ebenfalls [Chakra](<https://en.wikipedia.org/wiki/Chakra_(JavaScript_engine)> genannt), bevor es ein Chromium-basierter Browser wurde.

Einige JavaScript-Engines, die speziell für nicht-browserbasierte Zwecke angepasst wurden, umfassen:

- [Engine262](https://engine262.js.org/), geschrieben in JavaScript und im Wesentlichen als Referenzimplementierung der Sprache gedacht.
- Metas [Hermes](https://github.com/facebook/hermes), optimiert für [React Native](https://reactnative.dev/docs/hermes).
- Mozillas [Rhino](<https://en.wikipedia.org/wiki/Rhino_(JavaScript_engine)>), geschrieben in Java.
- Oracles [GraalJS](https://www.graalvm.org/), geschrieben in Java und basiert auf GraalVM.
- [Moddable XS](https://www.moddable.com/), gedacht für IoT/Embedded Systems.
- [QuickJS](https://bellard.org/quickjs/), gedacht als klein und leichtgewichtig.

JavaScript-Engines bieten eine öffentliche API, die Anwendungsentwickler nutzen können, um JavaScript in ihre Software zu integrieren. Bei weitem die häufigste Hostumgebung für JavaScript sind Webbrowser. Webbrowser verwenden typischerweise die öffentliche API, um **Hostobjekte** zu erstellen, die dafür verantwortlich sind, das [DOM](https://dom.spec.whatwg.org/) in JavaScript zu reflektieren.

Eine weitere häufige Anwendung für JavaScript ist als (Web-)Server-seitige Skriptsprache. Ein JavaScript-Webserver stellt Hostobjekte bereit, die eine HTTP-Anfrage und Antwortobjekte darstellen, die dann von einem JavaScript-Programm manipuliert werden können, um dynamisch Webseiten zu erstellen. [Node.js](https://nodejs.org/) ist ein populäres Beispiel dafür.

## Shells

Eine JavaScript-Shell ermöglicht es Ihnen, schnell JavaScript-Codeschnipsel zu testen, ohne eine Webseite neu laden zu müssen. Sie sind äußerst nützlich zum Entwickeln und Debuggen von Code.

### Standalone JavaScript-Shells

Die folgenden JavaScript-Shells sind eigenständige Umgebungen wie Perl oder Python.

- [Node.js](https://nodejs.org/) - Node.js ist eine Plattform zum einfachen Erstellen schneller, skalierbarer Netzwerk-Anwendungen.
- [ShellJS](https://github.com/shelljs/shelljs) - Portierbare Unix-Shell-Befehle für Node.js.

### Browserbasierte JavaScript-Shells

Die folgenden JavaScript-Shells führen Code über die JavaScript-Engine des Browsers aus.

- Firefox verfügt über eine [eingebaute JavaScript-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html), die Multiline-Bearbeitung unterstützt.
- [Babel REPL](https://babeljs.io/repl) - Eine browserbasierte [REPL](https://en.wikipedia.org/wiki/REPL) zum Experimentieren mit zukünftigen JavaScript-Versionen.
- [TypeScript playground](https://www.typescriptlang.org/play/) — Ein browserbasiertes Spielzimmer zum Experimentieren mit neuen JavaScript-Funktionen (über den tsc-Compiler) und TypeScript-Syntax.

## Werkzeuge & Ressourcen

Hilfreiche Werkzeuge zum Schreiben und Debuggen Ihres JavaScript-Codes.

- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html), [JavaScript Profiler](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html), [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) und mehr.
- [Learn JavaScript](https://learnjavascript.online/)
  - : Eine ausgezeichnete Ressource für angehende Webentwickler — Lernen Sie JavaScript in einer interaktiven Umgebung, mit kurzen Lektionen und interaktiven Tests, geleitet durch eine automatisierte Bewertung. Die ersten 40 Lektionen sind kostenlos, und der vollständige Kurs ist für eine kleine Einmalzahlung verfügbar.
- [TogetherJS](https://togetherjs.com/)
  - : Zusammenarbeit leicht gemacht. Indem Sie TogetherJS zu Ihrer Website hinzufügen, können Ihre Benutzer sich in Echtzeit auf einer Website helfen!
- [Stack Overflow](https://stackoverflow.com/questions/tagged/javascript)
  - : Stack Overflow Fragen, die mit "JavaScript" getaggt sind.
- [JSFiddle](https://jsfiddle.net/)
  - : Bearbeiten Sie JavaScript, CSS und HTML und erhalten Sie Live-Ergebnisse. Verwenden Sie externe Ressourcen und arbeiten Sie mit Ihrem Team online zusammen.
- [Plunker](https://plnkr.co/)
  - : Plunker ist eine Online-Community zur Erstellung, Zusammenarbeit und zum Teilen Ihrer Webentwicklungs-Ideen. Bearbeiten Sie Ihre JavaScript-, CSS- und HTML-Dateien und erhalten Sie Live-Ergebnisse und Dateistruktur.
- [JS Bin](https://jsbin.com/)
  - : JS Bin ist ein Open-Source-Kollaboratives-Webentwicklungs-Debugging-Tool.
- [CodePen](https://codepen.io/)
  - : CodePen ist ein weiteres kollaboratives Webentwicklungstool, das als Live-Ergebnis-Spielplatz verwendet wird.
- [StackBlitz](https://stackblitz.com/)
  - : StackBlitz ist ein weiteres Online-Spielplatz-/Debugging-Werkzeug, das vollständige Anwendungen mit React, Angular usw. hosten und bereitstellen kann.
- [RunJS](https://runjs.app/)
  - : RunJS ist ein Desktop-Spielplatz-/Notizblock-Werkzeug, das Live-Ergebnisse und Zugriff sowohl auf Node als auch auf Browser-APIs bietet.
