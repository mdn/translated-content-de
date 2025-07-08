---
title: Überblick über JavaScript-Technologien
slug: Web/JavaScript/Reference/JavaScript_technologies_overview
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Während [HTML](/de/docs/Web/HTML) die Struktur und den Inhalt einer Webseite definiert und [CSS](/de/docs/Web/CSS) das Format und das Erscheinungsbild festlegt, fügt [JavaScript](/de/docs/Web/JavaScript) einer Webseite Interaktivität hinzu und erstellt umfangreiche Webanwendungen.

Der Oberbegriff "JavaScript", wie er im Kontext eines Webbrowsers verstanden wird, umfasst jedoch mehrere sehr unterschiedliche Elemente. Eines davon ist die Kernsprache (ECMAScript), ein anderes ist die Sammlung der [Web-APIs](/de/docs/Web/API), einschließlich des DOM (Document Object Model).

## JavaScript, die Kernsprache (ECMAScript)

Die Kernsprache von JavaScript ist durch das ECMA TC39-Komitee als eine Sprache namens ECMAScript standardisiert. "ECMAScript" ist der Begriff für den Sprachstandard, aber "ECMAScript" und "JavaScript" können synonym verwendet werden.

Diese Kernsprache wird auch in nicht-browserbasierten Umgebungen verwendet, zum Beispiel in [Node.js](https://nodejs.org/).

### Was fällt unter den Geltungsbereich von ECMAScript?

Unter anderem definiert ECMAScript:

- Sprachsyntax (Parsing-Regeln, Schlüsselwörter, Kontrollfluss, Initialisierung von Objektliteralen, ...)
- Fehlerbehandlungsmechanismen ({{jsxref("Statements/throw", "throw")}}, {{jsxref("Statements/try...catch", "try...catch")}}, Möglichkeit zur Erstellung benutzerdefinierter {{jsxref("Error")}}-Typen)
- Typen (boolean, number, string, function, object, ...)
- Ein prototypbasiertes Vererbungsmechanismus
- Eingebaute Objekte und Funktionen, einschließlich {{jsxref("JSON")}}, {{jsxref("Math")}}, [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)-Methoden, {{jsxref("parseInt")}}, {{jsxref("decodeURI")}}, usw.
- [Strikter Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)
- Ein [Modulsystem](/de/docs/Web/JavaScript/Guide/Modules)
- Grundlegendes Speichermodell

### Standardisierungsprozess

ECMAScript-Ausgaben werden jährlich von der ECMA-Generalversammlung genehmigt und als Standard veröffentlicht. Die gesamte Entwicklung ist öffentlich auf der [Ecma TC39 GitHub-Organisation](https://github.com/tc39), die Vorschläge, den offiziellen Spezifikationstext und Sitzungsnotizen hostet.

Vor der 6. Ausgabe von ECMAScript (bekannt als ES6) wurden Spezifikationen alle paar Jahre veröffentlicht und werden allgemein nach ihren Hauptversionsnummern bezeichnet – ES3, ES5 usw. Nach ES6 wird die Spezifikation nach dem Veröffentlichungsjahr benannt – ES2017, ES2018 usw. ES6 ist gleichbedeutend mit ES2015. _ESNext_ ist ein dynamischer Name, der sich auf die jeweils nächste Version bezieht. ESNext-Funktionen werden korrekterweise als Vorschläge bezeichnet, da die Spezifikation per Definition noch nicht finalisiert ist.

Der aktuelle, vom Komitee genehmigte Schnappschuss von ECMA-262 ist in PDF- und HTML-Format auf der [ECMA-262-Sprachspezifikationsseite](https://ecma-international.org/publications-and-standards/standards/ecma-262/) von Ecma International verfügbar. ECMA-262 und ECMA-402 werden kontinuierlich von den Spezifikationsherausgebern gepflegt und aktualisiert; die TC39-Website hostet die neuesten, aktuellen [ECMA-262](https://tc39.es/ecma262/) und [ECMA-402](https://tc39.es/ecma402/)-Versionen.

Neue Sprachfunktionen, einschließlich der Einführung neuer Syntaxen und APIs sowie der Überarbeitung bestehender Verhaltensweisen, werden in Form von Vorschlägen diskutiert. Jeder Vorschlag durchläuft einen [4-stufigen Prozess](https://tc39.es/process-document/) und wird normalerweise von JavaScript-Engines in Stufe 3 oder Stufe 4 implementiert und ist somit für die Öffentlichkeit zugänglich.

Weitere Informationen zur ECMAScript-Geschichte finden Sie im [Wikipedia-Artikel zu ECMAScript](https://en.wikipedia.org/wiki/ECMAScript).

### Internationalisierungs-API

Die [ECMAScript Internationalization API Specification](https://402.ecma-international.org/1.0/) ist eine Ergänzung zur ECMAScript Language Specification, ebenfalls von Ecma TC39 standardisiert. Die Internationalisierungs-API bietet Sortierfunktionen (Zeichenfolgenvergleich), Zahlenformatierung und Datums- und Zeitformatierung für JavaScript-Anwendungen, sodass die Anwendungen die Sprache auswählen und die Funktionalität an ihre Bedürfnisse anpassen können. Der anfängliche Standard wurde im Dezember 2012 genehmigt; der Status der Implementierungen in Browsern wird in der Dokumentation des {{jsxref("Intl")}}-Objekts verfolgt. Die Internationalisierungsspezifikation wird heutzutage ebenfalls jährlich ratifiziert und die Browser verbessern ständig ihre Implementierung.

### Verwandte Ressourcen

Es gibt verschiedene Möglichkeiten, wie Sie an der Arbeit an der ECMAScript-Sprachspezifikation und der ECMAScript Internationalization API Specification teilnehmen oder sie einfach verfolgen können:

- [ECMAScript Language Specification repo](https://github.com/tc39/ecma262)
- [ECMAScript Internationalization API Specification repo](https://github.com/tc39/ecma402)
- [ECMAScript proposals repo](https://github.com/tc39/proposals)
- [ECMAScript conformance test suite repo](https://github.com/tc39/test262)
- [TC39 meeting notes](https://github.com/tc39/notes)
- [ECMAScript spec discussion; current mailing list](https://es.discourse.group/)
- [ECMAScript spec discussion; historical mailing-list archives (until March 2021)](https://esdiscuss.org/)

## DOM-APIs

### WebIDL

Die [WebIDL-Spezifikation](https://webidl.spec.whatwg.org/) stellt die Verbindung zwischen den DOM-Technologien und ECMAScript her.

### Der Kern des DOM

Das Document Object Model (DOM) ist eine plattformübergreifende, **sprachunabhängige Konvention**, um Objekte in HTML-, XHTML- und XML-Dokumenten zu repräsentieren und mit ihnen zu interagieren. Objekte im **DOM-Baum** können über Methoden an den Objekten adressiert und manipuliert werden. Heutzutage wird die [DOM-Kern](https://dom.spec.whatwg.org/)-Spezifikation von {{Glossary("WHATWG", "WHATWG")}} gepflegt (die die Version des {{Glossary("W3C", "W3C")}} überschreibt). Sie definiert sprachunabhängige Schnittstellen, die HTML- und XML-Dokumente als Objekte abstrahieren und auch Mechanismen zur Manipulation dieser Abstraktion definieren. Dies umfasst: [`Node`](/de/docs/Web/API/Node), [`Element`](/de/docs/Web/API/Element), [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), [`Document`](/de/docs/Web/API/Document), [`DOMImplementation`](/de/docs/Web/API/DOMImplementation), [`Event`](/de/docs/Web/API/Event), [`EventTarget`](/de/docs/Web/API/EventTarget) und mehr.

Aus ECMAScript-Sicht werden die in der DOM-Spezifikation definierten Objekte als "Host-Objekte" bezeichnet.

### HTML DOM

[HTML](https://html.spec.whatwg.org/multipage/), die Markup-Sprache des Web, ist in Bezug auf das DOM spezifiziert. Über die abstrakten Konzepte, die im DOM-Kern definiert sind, hinaus, definiert HTML auch die _Bedeutung_ von Elementen. Das HTML DOM umfasst Dinge wie die `className`-Eigenschaft bei HTML-Elementen oder APIs wie [`Document.body`](/de/docs/Web/API/Document/body).

Die HTML-Spezifikation definiert auch Einschränkungen für Dokumente; sie verlangt beispielsweise, dass alle Kinder eines {{htmlelement("ul")}}-Elements, das eine ungeordnete Liste darstellt, {{htmlelement("li")}}-Elemente sind, da diese Listeneinträge darstellen. Im Allgemeinen verbietet sie auch die Verwendung von Elementen und Attributen, die nicht in einem Standard definiert sind.

Suchen Sie nach dem [`Document`](/de/docs/Web/API/Document)-Objekt, dem [`Window`](/de/docs/Web/API/Window)-Objekt und den anderen DOM-Elementen? Lesen Sie die [DOM-Dokumentation](/de/docs/Web/API/Document_Object_Model).

## Andere bemerkenswerte APIs

- Die Funktionen [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setInterval()`](/de/docs/Web/API/Window/setInterval) wurden zuerst in der [`Window`](/de/docs/Web/API/Window)-Schnittstelle im HTML-Standard spezifiziert.
- [XMLHttpRequest](https://xhr.spec.whatwg.org/) ermöglicht das Senden asynchroner HTTP-Anfragen.
- Die [Fetch API](https://fetch.spec.whatwg.org/) bietet eine ergonomischere Abstraktion für Netzwerkanfragen.
- Das [CSS Object Model](https://drafts.csswg.org/cssom/) abstrahiert CSS-Regeln als Objekte.
- [WebWorkers](https://html.spec.whatwg.org/multipage/workers.html) ermöglichen parallele Berechnungen.
- [WebSockets](https://html.spec.whatwg.org/multipage/#network) erlauben Low-Level-bidirektionale Kommunikation.
- [Canvas 2D Context](https://html.spec.whatwg.org/multipage//#2dcontext) ist eine Zeichen-API für [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas).
- Die [WebAssembly-Schnittstelle](https://webassembly.github.io/spec/js-api/) bietet Hilfsprogramme für die Kommunikation zwischen JavaScript-Code und [WebAssembly](/de/docs/WebAssembly)-Modulen.

Nicht-browserbasierte Umgebungen (wie Node.js) haben oft keine DOM-APIs — da sie nicht mit einem Dokument interagieren —, aber sie implementieren normalerweise viele Web-APIs, wie [`fetch()`](/de/docs/Web/API/Window/fetch) und [`setTimeout()`](/de/docs/Web/API/Window/setTimeout).

## JavaScript-Implementierungen

JavaScript-Engines, die in aktuellen Webbrowsern verwendet werden, sind unter anderem:

- Mozillas [SpiderMonkey](https://spidermonkey.dev/), verwendet in Firefox, Servo und Flow. Andere nicht-browserbasierte Anwendungen umfassen MongoDB, CouchDB und mehr. Dies war die erste _jeweils_ JavaScript-Engine, erstellt von Brendan Eich bei Netscape.
- Googles [V8](https://v8.dev/), verwendet in Chrome und Chromium-basierten Browsern wie Opera, Edge und Brave. Andere nicht-browserbasierte Anwendungen umfassen [Node.js](https://nodejs.org/), [Deno](https://deno.com/), [Electron](https://www.electronjs.org/) und mehr.
- Apples [JavaScriptCore](https://docs.webkit.org/Deep%20Dive/JSC/JavaScriptCore.html) (auch bekannt als SquirrelFish/Nitro), verwendet in Safari und anderen WebKit-basierten Browsern. Andere nicht-browserbasierte Anwendungen umfassen [Bun](https://bun.sh/).
- [LibJS](https://serenityos.github.io/libjs-website/), verwendet in [Ladybird](https://ladybird.org/).

Einige JavaScript-Engines, die in früheren Browsern verwendet wurden, umfassen:

- [Carakan](<https://en.wikipedia.org/wiki/Presto_(browser_engine)#ECMAScript_engines>), verwendet in Opera, bevor es ein Chromium-basierter Browser wurde.
- Microsofts [Chakra](<https://en.wikipedia.org/wiki/Chakra_(JScript_engine)>), verwendet in Internet Explorer (obwohl die Sprache, die es implementiert, formal "JScript" genannt wird, um Markenrechtsprobleme zu vermeiden). Frühere Versionen von Edge verwendeten eine andere JavaScript-Engine, verwirrenderweise auch [Chakra](<https://en.wikipedia.org/wiki/Chakra_(JavaScript_engine)>), bevor es ein Chromium-basierter Browser wurde.

Einige JavaScript-Engines, die speziell für nicht-browserbasierte Zwecke angepasst sind, umfassen:

- [Engine262](https://engine262.js.org/), in JavaScript geschrieben und im Wesentlichen als Referenzimplementierung der Sprache gedacht.
- Metas [Hermes](https://github.com/facebook/hermes), optimiert für [React Native](https://reactnative.dev/docs/hermes).
- Mozillas [Rhino](<https://en.wikipedia.org/wiki/Rhino_(JavaScript_engine)>), in Java geschrieben.
- Oracles [GraalJS](https://www.graalvm.org/), in Java geschrieben und auf GraalVM aufgebaut.
- [Moddable XS](https://www.moddable.com/), für IoT/embedded Systeme vorgesehen.
- [QuickJS](https://bellard.org/quickjs/), vorgesehen, um klein und leichtgewichtig zu sein.

JavaScript-Engines bieten eine öffentliche API, die Anwendungsentwickler verwenden können, um JavaScript in ihre Software zu integrieren. Die bei weitem häufigste Host-Umgebung für JavaScript sind Webbrowser. Webbrowser verwenden typischerweise die öffentliche API, um **Host-Objekte** zu erstellen, die für die Spiegelung des [DOM](https://dom.spec.whatwg.org/) in JavaScript verantwortlich sind.

Eine weitere häufige Anwendung für JavaScript ist als (Web-)Server-seitige Skriptsprache. Ein JavaScript-Webserver stellt Host-Objekte dar, die HTTP-Anfrage- und Antwortobjekte darstellen, die dann von einem JavaScript-Programm manipuliert werden können, um dynamisch Webseiten zu generieren. [Node.js](https://nodejs.org/) ist ein beliebtes Beispiel dafür.

## Shells

Eine JavaScript-Shell ermöglicht es Ihnen, schnell JavaScript-Code-Snippets zu testen, ohne eine Webseite neu laden zu müssen. Sie sind äußerst nützlich zum Entwickeln und Debuggen von Code.

### Unabhängige JavaScript-Shells

Die folgenden JavaScript-Shells sind eigenständige Umgebungen, wie Perl oder Python.

- [Node.js](https://nodejs.org/) - Node.js ist eine Plattform zum einfachen Erstellen schneller, skalierbarer Netzwerk-Anwendungen.
- [ShellJS](https://github.com/shelljs/shelljs) - Portable Unix-Shell-Befehle für Node.js.

### Browserbasierte JavaScript-Shells

Die folgenden JavaScript-Shells führen Code durch die JavaScript-Engine des Browsers aus.

- Firefox verfügt über eine [eingebaute JavaScript-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html), die Mehrzeilenbearbeitung unterstützt.
- [Babel REPL](https://babeljs.io/repl) - Ein browserbasierter [REPL](https://en.wikipedia.org/wiki/REPL), um mit zukünftigen JavaScript zu experimentieren.
- [TypeScript playground](https://www.typescriptlang.org/play/) — Ein browserbasiertes Spielzimmer für Experimente mit neuen JavaScript-Funktionen (über den tsc-Compiler) und TypeScript-Syntax.

## Werkzeuge & Ressourcen

Hilfreiche Werkzeuge zum Schreiben und Debuggen Ihres JavaScript-Codes.

- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html), [JavaScript-Profiler](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html), [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) und mehr.
- [Learn JavaScript](https://learnjavascript.online/)
  - : Eine ausgezeichnete Ressource für aufstrebende Webentwickler — Lernen Sie JavaScript in einer interaktiven Umgebung mit kurzen Lektionen und interaktiven Tests, geführt durch automatisierte Bewertung. Die ersten 40 Lektionen sind kostenlos, und der komplette Kurs ist gegen eine kleine Einmalzahlung erhältlich.
- [TogetherJS](https://togetherjs.com/)
  - : Zusammenarbeit leicht gemacht. Indem Sie TogetherJS zu Ihrer Website hinzufügen, können Ihre Nutzer sich gegenseitig in Echtzeit auf einer Website helfen!
- [Stack Overflow](https://stackoverflow.com/questions/tagged/javascript)
  - : Stack Overflow-Fragen, die mit "JavaScript" getaggt sind.
- [JSFiddle](https://jsfiddle.net/)
  - : Bearbeiten Sie JavaScript, CSS und HTML und erhalten Sie Live-Ergebnisse. Verwenden Sie externe Ressourcen und arbeiten Sie online mit Ihrem Team zusammen.
- [Plunker](https://plnkr.co/)
  - : Plunker ist eine Online-Community zum Erstellen, Zusammenarbeiten und Teilen Ihrer Webentwicklungs-Ideen. Bearbeiten Sie Ihre JavaScript-, CSS- und HTML-Dateien und erhalten Sie Live-Ergebnisse und Dateistrukturen.
- [JS Bin](https://jsbin.com/)
  - : JS Bin ist ein Open-Source-Collaborative-Web-Entwicklung-Fehlersuchwerkzeug.
- [CodePen](https://codepen.io/)
  - : CodePen ist ein weiteres Kollaborationstool für Webentwicklung, das als Live-Resultat-Spielwiese genutzt wird.
- [StackBlitz](https://stackblitz.com/)
  - : StackBlitz ist ein weiteres Online-Spielplatz-/Fehlersuchwerkzeug, das vollständige Anwendungen mit React, Angular usw. hosten und bereitstellen kann.
- [RunJS](https://runjs.app/)
  - : RunJS ist ein Desktop-Spielplatz/Notizblock-Tool, das Live-Ergebnisse und Zugriff auf sowohl Node- als auch Browser-APIs bietet.
