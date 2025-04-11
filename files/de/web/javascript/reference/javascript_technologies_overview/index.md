---
title: JavaScript-Technologien im Überblick
slug: Web/JavaScript/Reference/JavaScript_technologies_overview
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{jsSidebar("Introductory")}}

Während [HTML](/de/docs/Web/HTML) die Struktur und den Inhalt einer Webseite definiert und [CSS](/de/docs/Web/CSS) die Formatierung und das Erscheinungsbild festlegt, fügt [JavaScript](/de/docs/Web/JavaScript) Interaktivität hinzu und erstellt reichhaltige Webanwendungen.

Der Begriff "JavaScript" umfasst im Kontext von Webbrowsern jedoch verschiedene sehr unterschiedliche Elemente. Eines davon ist die Kernsprache (ECMAScript), ein weiteres ist die Sammlung der [Web-APIs](/de/docs/Web/API), einschließlich des DOM (Document Object Model).

## JavaScript, die Kernsprache (ECMAScript)

Die Kernsprache von JavaScript wird vom ECMA TC39-Komitee als Sprache namens ECMAScript standardisiert. "ECMAScript" ist der Begriff für den Sprachstandard, aber "ECMAScript" und "JavaScript" können austauschbar verwendet werden.

Diese Kernsprache wird auch in nicht-browserbasierten Umgebungen verwendet, zum Beispiel in [Node.js](https://nodejs.org/).

### Was fällt unter den ECMAScript-Bereich?

Unter anderem definiert ECMAScript:

- Sprachsyntax (Parsing-Regeln, Schlüsselwörter, Kontrollfluss, Objektliteral-Initialisierung, ...)
- Mechanismen zur Fehlerbehandlung ({{jsxref("Statements/throw", "throw")}}, {{jsxref("Statements/try...catch", "try...catch")}}, Möglichkeit zur Erstellung benutzerdefinierter {{jsxref("Error")}}-Typen)
- Typen (boolean, number, string, function, object, ...)
- Ein prototypenbasiertes Vererbungssystem
- Eingebaute Objekte und Funktionen, einschließlich {{jsxref("JSON")}}, {{jsxref("Math")}}, [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)-Methoden, {{jsxref("parseInt")}}, {{jsxref("decodeURI")}}, etc.
- [Strikte Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)
- Ein [Modulsystem](/de/docs/Web/JavaScript/Guide/Modules)
- Grundlegendes Speicher-Management-Modell

### Standardisierungsprozess

ECMAScript-Ausgaben werden jährlich von der ECMA General Assembly als Standard genehmigt und veröffentlicht. Die gesamte Entwicklung ist öffentlich auf der [Ecma TC39 GitHub-Organisation](https://github.com/tc39) einsehbar, welche Vorschläge, den offiziellen Spezifikationstext und Sitzungsnotizen hostet.

Vor der 6. Ausgabe von ECMAScript (bekannt als ES6) wurden Spezifikationen einmal alle paar Jahre veröffentlicht und sind gemeinhin unter ihren Hauptversionsnummern bekannt — ES3, ES5, etc. Nach ES6 wird die Spezifikation nach dem Veröffentlichungsjahr benannt — ES2017, ES2018, etc. ES6 ist synonym mit ES2015. _ESNext_ ist ein dynamischer Name, der sich auf die jeweils nächste Version bezieht. ESNext-Features werden korrekterweise als Vorschläge bezeichnet, da die Spezifikation per Definition noch nicht abgeschlossen ist.

Der aktuelle von dem Komitee genehmigte Schnappschuss von ECMA-262 ist im PDF- und HTML-Format auf der [ECMA-262-Seite der Ecma International](https://ecma-international.org/publications-and-standards/standards/ecma-262/) verfügbar. ECMA-262 und ECMA-402 werden kontinuierlich gepflegt und aktualisiert von den Spezifikationseditoren; die TC39-Webseite hostet die neuesten, aktualisierten Versionen von [ECMA-262](https://tc39.es/ecma262/) und [ECMA-402](https://tc39.es/ecma402/).

Neue Sprachfunktionen, einschliesslich der Einführung neuer Syntaxen und APIs sowie der Überarbeitung bestehender Verhaltensweisen, werden in Form von Vorschlägen diskutiert. Jeder Vorschlag durchläuft einen [4-Phasen-Prozess](https://tc39.es/process-document/) und wird in der Regel von JavaScript-Engines in Phase 3 oder Phase 4 implementiert und steht somit der Öffentlichkeit zur Verfügung.

Weitere Informationen zur Geschichte von ECMAScript finden Sie im [Wikipedia-Eintrag zu ECMAScript](https://en.wikipedia.org/wiki/ECMAScript).

### Internationalisierungs-API

Die [ECMAScript Internationalization API Specification](https://402.ecma-international.org/1.0/) ist eine Ergänzung der ECMAScript-Sprachspezifikation und ebenfalls von Ecma TC39 standardisiert. Die Internationalisierungs-API bietet Kollation (Zeichenfolgenvergleich), Zahlenformatierung und Datums- und Zeitformatierung für JavaScript-Anwendungen und ermöglicht es den Anwendungen, die Sprache zu wählen und die Funktionalität an ihre Bedürfnisse anzupassen. Der initiale Standard wurde im Dezember 2012 genehmigt; der Status der Implementierungen in Browsern wird in der Dokumentation des {{jsxref("Intl")}}-Objekts nachverfolgt. Heutzutage wird die Internationalisierungsspezifikation ebenfalls jährlich ratifiziert und die Browser verbessern ständig ihre Implementierung.

### Verwandte Ressourcen

Es gibt eine Vielzahl von Möglichkeiten, wie Sie an der aktuellen Arbeit an der ECMAScript-Sprachspezifikation und der ECMAScript Internationalization API Specification teilnehmen oder diese einfach verfolgen können:

- [ECMAScript Language Specification repo](https://github.com/tc39/ecma262)
- [ECMAScript Internationalization API Specification repo](https://github.com/tc39/ecma402)
- [ECMAScript proposals repo](https://github.com/tc39/proposals)
- [ECMAScript conformance test suite repo](https://github.com/tc39/test262)
- [TC39 meeting notes](https://github.com/tc39/notes)
- [ECMAScript spec discussion; aktuelle Mailingliste](https://es.discourse.group/)
- [ECMAScript spec discussion; historische Mailinglisten-Archive (bis März 2021)](https://esdiscuss.org/)

## DOM-APIs

### WebIDL

Die [WebIDL-Spezifikation](https://webidl.spec.whatwg.org/) bietet die Verbindung zwischen den DOM-Technologien und ECMAScript.

### Das Kernstück des DOM

Das Document Object Model (DOM) ist eine plattformübergreifende, **sprachenunabhängige Konvention** zur Darstellung und Interaktion mit Objekten in HTML-, XHTML- und XML-Dokumenten. Objekte im **DOM-Baum** können durch Methoden auf den Objekten adressiert und manipuliert werden. Der {{Glossary("W3C", "W3C")}} standardisiert das Core Document Object Model, welches sprachenunabhängige Schnittstellen definiert, die HTML- und XML-Dokumente als Objekte abstrahieren, und auch Mechanismen zur Manipulation dieser Abstraktion definiert. Unter den Dingen, die vom DOM definiert sind, finden wir:

- Die Dokumentstruktur, ein Baum-Modell und die DOM-Event-Architektur im [DOM-Core](https://dom.spec.whatwg.org/): [`Node`](/de/docs/Web/API/Node), [`Element`](/de/docs/Web/API/Element), [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), [`Document`](/de/docs/Web/API/Document), [`DOMImplementation`](/de/docs/Web/API/DOMImplementation), [`Event`](/de/docs/Web/API/Event), [`EventTarget`](/de/docs/Web/API/EventTarget), …
- Eine weniger strenge Definition der DOM-Event-Architektur sowie spezifische Events in [DOM-Events](https://w3c.github.io/uievents/).
- Weitere Themen wie [DOM-Traversierung](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html) und [DOM-Bereich](https://dom.spec.whatwg.org/#ranges).

Aus Sicht von ECMAScript werden in der DOM-Spezifikation definierte Objekte als "Host-Objekte" bezeichnet.

### HTML DOM

[HTML](https://html.spec.whatwg.org/multipage/), die Markup-Sprache des Webs, ist in Bezug auf das DOM spezifiziert. Über die abstrakten Konzepte definiert im DOM-Core hinaus definiert HTML auch die _Bedeutung_ von Elementen. Das HTML-DOM umfasst Dinge wie die `className`-Eigenschaft an HTML-Elementen oder APIs wie [`Document.body`](/de/docs/Web/API/Document/body).

Die HTML-Spezifikation definiert auch Einschränkungen für Dokumente; sie erfordert zum Beispiel, dass alle Kinder eines {{htmlelement("ul")}}-Elements, welches eine ungeordnete Liste darstellt, {{htmlelement("li")}}-Elemente sein müssen, da diese Listenelemente darstellen. Im Allgemeinen verbietet sie auch die Verwendung von Elementen und Attributen, die nicht in einem Standard definiert sind.

Suchen Sie das [`Document`](/de/docs/Web/API/Document)-Objekt, das [`Window`](/de/docs/Web/API/Window)-Objekt und die anderen DOM-Elemente? Lesen Sie die [DOM-Dokumentation](/de/docs/Web/API/Document_Object_Model).

## Andere bemerkenswerte APIs

- Die Funktionen [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setInterval()`](/de/docs/Web/API/Window/setInterval) wurden zuerst auf der [`Window`](/de/docs/Web/API/Window)-Schnittstelle im HTML-Standard spezifiziert.
- [XMLHttpRequest](https://xhr.spec.whatwg.org/) ermöglicht das Senden von asynchronen HTTP-Anfragen.
- Die [Fetch API](https://fetch.spec.whatwg.org/) bietet eine ergonomischere Abstraktion für Netzwerk-Anfragen.
- Das [CSS Object Model](https://drafts.csswg.org/cssom/) abstrahiert CSS-Regeln als Objekte.
- [WebWorkers](https://html.spec.whatwg.org/multipage/workers.html) ermöglichen parallele Berechnungen.
- [WebSockets](https://html.spec.whatwg.org/multipage/#network) ermöglichen eine Low-Level-bidirektionale Kommunikation.
- Das [Canvas 2D Context](https://html.spec.whatwg.org/multipage//#2dcontext) ist eine Zeichen-API für [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas).
- Die [WebAssembly-Schnittstelle](https://webassembly.github.io/spec/js-api/) bietet Werkzeuge für die Kommunikation zwischen JavaScript-Code und [WebAssembly](/de/docs/WebAssembly)-Modulen.

Nicht-Browser-Umgebungen (wie Node.js) haben oft keine DOM-APIs — da sie nicht mit einem Dokument interagieren —, aber sie implementieren in der Regel viele Web-APIs, wie [`fetch()`](/de/docs/Web/API/Window/fetch) und [`setTimeout()`](/de/docs/Web/API/Window/setTimeout).

## JavaScript-Implementierungen

JavaScript-Engines, die in aktuellen Webbrowsern verwendet werden, umfassen:

- Mozillas [SpiderMonkey](https://spidermonkey.dev/), verwendet in Firefox, Servo und Flow. Andere nicht-browserbezogene Verwendungen umfassen MongoDB, CouchDB und mehr. Dies war die erste _je_ entwickelte JavaScript-Engine, erstellt von Brendan Eich bei Netscape.
- Googles [V8](https://v8.dev/), verwendet in Chrome und auf Chromium basierenden Browsern wie Opera, Edge und Brave. Andere nicht-browserbezogene Verwendungen umfassen [Node.js](https://nodejs.org/), [Deno](https://deno.com/), [Electron](https://www.electronjs.org/) und mehr.
- Apples [JavaScriptCore](https://docs.webkit.org/Deep%20Dive/JSC/JavaScriptCore.html) (auch bekannt als SquirrelFish/Nitro), verwendet in Safari und anderen WebKit-basierten Browsern. Andere nicht-browserbezogene Verwendungen umfassen [Bun](https://bun.sh/).
- [LibJS](https://serenityos.github.io/libjs-website/), verwendet in [Ladybird](https://ladybird.org/).

Einige JavaScript-Engines, die in früheren Browsern verwendet wurden, umfassen:

- [Carakan](<https://en.wikipedia.org/wiki/Presto_(browser_engine)#ECMAScript_engines>), verwendet in Opera, bevor es ein auf Chromium basierter Browser wurde.
- Microsofts [Chakra](<https://en.wikipedia.org/wiki/Chakra_(JScript_engine)>), verwendet in Internet Explorer (obwohl die Sprache, die es implementiert, formal "JScript" genannt wird, um Markenprobleme zu vermeiden). Frühere Versionen von Edge verwendeten eine andere JavaScript-Engine, verwirrenderweise ebenfalls [Chakra](<https://en.wikipedia.org/wiki/Chakra_(JavaScript_engine)>), bevor es ein auf Chromium basierter Browser wurde.

Einige JavaScript-Engines, die speziell für nicht-browserbezogene Zwecke programmiert wurden, umfassen:

- [Engine262](https://engine262.js.org/), geschrieben in JavaScript und im Wesentlichen als Referenzimplementierung der Sprache gedacht.
- Metas [Hermes](https://github.com/facebook/hermes), optimiert für [React Native](https://reactnative.dev/docs/hermes).
- Mozillas [Rhino](<https://en.wikipedia.org/wiki/Rhino_(JavaScript_engine)>), geschrieben in Java.
- Oracles [GraalJS](https://www.graalvm.org/), geschrieben in Java und aufgebaut auf GraalVM.
- [Moddable XS](https://www.moddable.com/), gedacht für IoT/Embedded-Systeme.
- [QuickJS](https://bellard.org/quickjs/), gedacht, um klein und leichtgewichtig zu sein.

JavaScript-Engines bieten eine öffentliche API, die Anwendungsentwickler nutzen können, um JavaScript in ihre Software zu integrieren. Mit Abstand die häufigste Host-Umgebung für JavaScript sind Webbrowser. Webbrowser verwenden typischerweise die öffentliche API, um **Host-Objekte** zu erstellen, die dafür verantwortlich sind, das [DOM](https://dom.spec.whatwg.org/) in JavaScript zu spiegeln.

Eine weitere übliche Anwendung für JavaScript ist als (Web-)Server-seitige Skriptsprache. Ein JavaScript-Webserver stellt Host-Objekte dar, die HTTP-Anfrage- und Antwortobjekte darstellen, die dann von einem JavaScript-Programm manipuliert werden können, um Webseiten dynamisch zu generieren. [Node.js](https://nodejs.org/) ist ein beliebtes Beispiel hierfür.

## Shells

Eine JavaScript-Shell ermöglicht es Ihnen, schnell JavaScript-Codefragmente zu testen, ohne eine Webseite neu laden zu müssen. Sie sind äußerst nützlich für die Entwicklung und das Debugging von Code.

### Unabhängige JavaScript-Shells

Die folgenden JavaScript-Shells sind eigenständige Umgebungen, wie Perl oder Python.

- [Node.js](https://nodejs.org/) - Node.js ist eine Plattform zum einfachen Erstellen von schnellen, skalierbaren Netzwerk-Anwendungen.
- [ShellJS](https://github.com/shelljs/shelljs) - Portierbare Unix-Shell-Befehle für Node.js.

### Browser-basierte JavaScript-Shells

Die folgenden JavaScript-Shells führen Code über die JavaScript-Engine des Browsers aus.

- Firefox verfügt über eine [eingebaute JavaScript-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html), die das Editieren von mehreren Zeilen unterstützt.
- [Babel REPL](https://babeljs.io/repl) - Eine browserbasierte [REPL](https://en.wikipedia.org/wiki/REPL) zum Experimentieren mit zukünftigen JavaScript-Versionen.
- [TypeScript playground](https://www.typescriptlang.org/play/) — Eine browserbasierte Spielwiese zum Experimentieren sowohl mit neuen JavaScript-Funktionen (über den tsc-Compiler) als auch mit TypeScript-Syntax.

## Werkzeuge & Ressourcen

Hilfreiche Werkzeuge zum Schreiben und Debugging Ihres JavaScript-Codes.

- [Firefox Entwicklerwerkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html), [JavaScript Profiler](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html), [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) und mehr.
- [Learn JavaScript](https://learnjavascript.online/)
  - : Eine exzellente Ressource für angehende Webentwickler — Lernen Sie JavaScript in einer interaktiven Umgebung, mit kurzen Lektionen und interaktiven Tests, guided by automated assessment. Die ersten 40 Lektionen sind kostenlos, und der komplette Kurs ist für eine kleine einmalige Zahlung erhältlich.
- [TogetherJS](https://togetherjs.com/)
  - : Zusammenarbeit leicht gemacht. Durch das Hinzufügen von TogetherJS zu Ihrer Website können sich Ihre Nutzer gegenseitig in Echtzeit helfen.
- [Stack Overflow](https://stackoverflow.com/questions/tagged/javascript)
  - : Stack Overflow-Fragen, die mit "JavaScript" getaggt sind.
- [JSFiddle](https://jsfiddle.net/)
  - : Bearbeiten Sie JavaScript, CSS und HTML und erhalten Sie Live-Ergebnisse. Nutzen Sie externe Ressourcen und arbeiten Sie online mit Ihrem Team zusammen.
- [Plunker](https://plnkr.co/)
  - : Plunker ist eine Online-Community zum Erstellen, Zusammenarbeiten und Teilen Ihrer Webentwicklungs-Ideen. Bearbeiten Sie Ihre JavaScript-, CSS- und HTML-Dateien und erhalten Sie Live-Ergebnisse und Dateistrukturen.
- [JS Bin](https://jsbin.com/)
  - : JS Bin ist ein Open-Source-Webentwicklungs-Debugging-Tool zur Zusammenarbeit.
- [CodePen](https://codepen.io/)
  - : CodePen ist ein weiteres Werkzeug zur kollaborativen Webentwicklung, das als Live-Ergebnis-Spielwiese verwendet wird.
- [StackBlitz](https://stackblitz.com/)
  - : StackBlitz ist ein weiteres Online-Playground/Deburgging-Tool, das vollständige Anwendungen mit React, Angular, usw. hosten und bereitstellen kann.
- [RunJS](https://runjs.app/)
  - : RunJS ist ein Desktop-Playground/Scratchpad-Tool, das Live-Ergebnisse und Zugriff auf sowohl Node- als auch Browser-APIs bietet.
