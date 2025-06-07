---
title: JavaScript-Technologieübersicht
slug: Web/JavaScript/Reference/JavaScript_technologies_overview
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

{{jsSidebar("Introductory")}}

Während [HTML](/de/docs/Web/HTML) die Struktur und den Inhalt einer Webseite definiert und [CSS](/de/docs/Web/CSS) das Format und das Aussehen festlegt, fügt [JavaScript](/de/docs/Web/JavaScript) Interaktivität zu einer Webseite hinzu und erstellt reichhaltige Webanwendungen.

Der Begriff "JavaScript" umfasst jedoch im Kontext eines Webbrowsers mehrere sehr unterschiedliche Elemente. Eines davon ist die Kernsprache (ECMAScript), ein anderes die Sammlung der [Web-APIs](/de/docs/Web/API), einschließlich des DOM (Document Object Model).

## JavaScript, die Kernsprache (ECMAScript)

Die Kernsprache von JavaScript wird vom ECMA TC39 Komitee als eine Sprache namens ECMAScript standardisiert. "ECMAScript" ist der Begriff für den Sprachstandard, jedoch können "ECMAScript" und "JavaScript" austauschbar verwendet werden.

Diese Kernsprache wird auch in Nicht-Browser-Umgebungen verwendet, zum Beispiel in [Node.js](https://nodejs.org/).

### Was fällt unter den Bereich von ECMAScript?

Unter anderem definiert ECMAScript:

- Sprachsyntax (Parsingregeln, Schlüsselwörter, Kontrollfluss, Initialisierung von Objektliteralen, ...)
- Fehlerbehandlungsmechanismen ({{jsxref("Statements/throw", "throw")}}, {{jsxref("Statements/try...catch", "try...catch")}}, Möglichkeit, benutzerdefinierte {{jsxref("Error")}}-Typen zu erstellen)
- Typen (boolean, number, string, function, object, ...)
- Ein prototypenbasiertes Vererbungssystem
- Eingebaute Objekte und Funktionen, einschließlich {{jsxref("JSON")}}, {{jsxref("Math")}}, [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)-Methoden, {{jsxref("parseInt")}}, {{jsxref("decodeURI")}} usw.
- [Strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode)
- Ein [Modulsystem](/de/docs/Web/JavaScript/Guide/Modules)
- Grundlegendes Speichermodell

### Standardisierungsprozess

ECMAScript-Editionen werden jährlich von der ECMA General Assembly genehmigt und als Standard veröffentlicht. Die gesamte Entwicklung ist öffentlich auf der [Ecma TC39 GitHub-Organisation](https://github.com/tc39), die Vorschläge, den offiziellen Spezifikationstext und Besprechungsnotizen hostet.

Vor der 6. Edition von ECMAScript (bekannt als ES6) wurden Spezifikationen alle paar Jahre veröffentlicht und werden üblicherweise mit ihren Hauptversionsnummern bezeichnet — ES3, ES5 usw. Nach ES6 wird die Spezifikation nach dem Veröffentlichungsjahr benannt — ES2017, ES2018 usw. ES6 ist synonym mit ES2015. _ESNext_ ist ein dynamischer Name, der sich auf die jeweils nächste Version zur Zeit des Schreibens bezieht. ESNext-Features werden richtiger als Vorschläge bezeichnet, da die Spezifikation per Definition noch nicht abgeschlossen ist.

Das aktuelle, vom Komitee genehmigte ECMA-262-Snapshot ist in PDF- und HTML-Format auf der [ECMA-262 Sprachspezifikationsseite](https://ecma-international.org/publications-and-standards/standards/ecma-262/) von Ecma International verfügbar. ECMA-262 und ECMA-402 werden kontinuierlich von den Spezifikationseditoren gepflegt und auf dem neuesten Stand gehalten; die TC39-Website hostet die neuesten, aktuellen [ECMA-262](https://tc39.es/ecma262/)- und [ECMA-402](https://tc39.es/ecma402/)-Versionen.

Neue Sprachfunktionen, einschließlich der Einführung neuer Syntaxen und APIs sowie der Überarbeitung bestehender Verhaltensweisen, werden in Form von Vorschlägen diskutiert. Jeder Vorschlag durchläuft einen [4-stufigen Prozess](https://tc39.es/process-document/) und wird typischerweise von JavaScript-Engines in Phase 3 oder Phase 4 implementiert und steht somit der Öffentlichkeit zur Verfügung.

Weitere Informationen zur Geschichte von ECMAScript finden Sie im [Wikipedia-Artikel zu ECMAScript](https://en.wikipedia.org/wiki/ECMAScript).

### Internationalisierungs-API

Die [ECMAScript Internationalization API Specification](https://402.ecma-international.org/1.0/) ist eine Ergänzung zur ECMAScript-Sprachspezifikation, die ebenfalls von Ecma TC39 standardisiert ist. Die Internationalisierungs-API bietet Kollation (Zeichenfolgenvergleich), Zahlenformatierung und Datums- und Zeitformatierung für JavaScript-Anwendungen und ermöglicht es den Anwendungen, die Sprache zu wählen und die Funktionalität an ihre Bedürfnisse anzupassen. Der ursprüngliche Standard wurde im Dezember 2012 genehmigt; der Status der Implementierungen in Browsern wird in der Dokumentation des {{jsxref("Intl")}}-Objekts nachverfolgt. Die Internationalisierungsspezifikation wird heutzutage auch jährlich ratifiziert und Browser verbessern ständig ihre Implementierung.

### Verwandte Ressourcen

Es gibt verschiedene Möglichkeiten, wie Sie sich an der Arbeit zur ECMAScript-Sprachspezifikation und der ECMAScript-Internationalisierungs-API-Spezifikation beteiligen oder sie verfolgen können:

- [ECMAScript Language Specification repo](https://github.com/tc39/ecma262)
- [ECMAScript Internationalization API Specification repo](https://github.com/tc39/ecma402)
- [ECMAScript proposals repo](https://github.com/tc39/proposals)
- [ECMAScript conformance test suite repo](https://github.com/tc39/test262)
- [TC39 meeting notes](https://github.com/tc39/notes)
- [ECMAScript spec discussion; current mailing list](https://es.discourse.group/)
- [ECMAScript spec discussion; historical mailing-list archives (until March 2021)](https://esdiscuss.org/)

## DOM-APIs

### WebIDL

Die [WebIDL-Spezifikation](https://webidl.spec.whatwg.org/) bietet das Bindeglied zwischen den DOM-Technologien und ECMAScript.

### Der Kern des DOM

Das Document Object Model (DOM) ist eine plattformübergreifende, **sprachenunabhängige Konvention** zur Darstellung und Interaktion mit Objekten in HTML-, XHTML- und XML-Dokumenten. Objekte im **DOM-Baum** können durch Methoden auf den Objekten adressiert und manipuliert werden. Heutzutage wird die [DOM-Kern](https://dom.spec.whatwg.org/)-Spezifikation von {{Glossary("WHATWG", "WHATWG")}} gepflegt (die die Version des {{Glossary("W3C", "W3C")}} abgelöst hat). Sie definiert sprachunabhängige Schnittstellen, die HTML- und XML-Dokumente als Objekte abstrahieren, und auch Mechanismen definieren, um diese Abstraktion zu manipulieren. Dies umfasst: [`Node`](/de/docs/Web/API/Node), [`Element`](/de/docs/Web/API/Element), [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), [`Document`](/de/docs/Web/API/Document), [`DOMImplementation`](/de/docs/Web/API/DOMImplementation), [`Event`](/de/docs/Web/API/Event), [`EventTarget`](/de/docs/Web/API/EventTarget), und mehr.

Aus Sicht von ECMAScript werden Objekte, die in der DOM-Spezifikation definiert sind, als "Host-Objekte" bezeichnet.

### HTML DOM

[HTML](https://html.spec.whatwg.org/multipage/), die Markup-Sprache des Webs, wird in Bezug auf das DOM spezifiziert. Über die im DOM Kern definierten abstrakten Konzepte hinaus definiert HTML auch die _Bedeutung_ von Elementen. Das HTML-DOM umfasst solche Dinge wie die `className`-Eigenschaft von HTML-Elementen oder APIs wie [`Document.body`](/de/docs/Web/API/Document/body).

Die HTML-Spezifikation definiert auch Einschränkungen für Dokumente; beispielsweise erfordert sie, dass alle Kinder eines {{htmlelement("ul")}}-Elements, das eine ungeordnete Liste darstellt, {{htmlelement("li")}}-Elemente sind, da diese Listeneinträge darstellen. Generell verbietet sie auch die Verwendung von Elementen und Attributen, die nicht in einem Standard definiert sind.

Suchen Sie nach dem [`Document`](/de/docs/Web/API/Document)-Objekt, [`Window`](/de/docs/Web/API/Window)-Objekt und den anderen DOM-Elementen? Lesen Sie die [DOM-Dokumentation](/de/docs/Web/API/Document_Object_Model).

## Weitere bemerkenswerte APIs

- Die Funktionen [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setInterval()`](/de/docs/Web/API/Window/setInterval) wurden zuerst in der [`Window`](/de/docs/Web/API/Window)-Schnittstelle im HTML-Standard spezifiziert.
- [XMLHttpRequest](https://xhr.spec.whatwg.org/) ermöglicht das Senden asynchroner HTTP-Anfragen.
- Die [Fetch-API](https://fetch.spec.whatwg.org/) bietet eine ergonomischere Abstraktion für Netzwerk-Anfragen.
- Das [CSS Object Model](https://drafts.csswg.org/cssom/) abstrahiert CSS-Regeln als Objekte.
- [WebWorkers](https://html.spec.whatwg.org/multipage/workers.html) erlauben parallele Berechnungen.
- [WebSockets](https://html.spec.whatwg.org/multipage/#network) ermöglichen eine bidirektionale niedrigstufige Kommunikation.
- [Canvas 2D Context](https://html.spec.whatwg.org/multipage//#2dcontext) ist eine Zeichen-API für [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas).
- Die [WebAssembly-Schnittstelle](https://webassembly.github.io/spec/js-api/) bietet Werkzeuge für die Kommunikation zwischen JavaScript-Code und [WebAssembly](/de/docs/WebAssembly)-Modulen.

Nicht-Browser-Umgebungen (wie Node.js) haben oft keine DOM-APIs — weil sie nicht mit einem Dokument interagieren — sie implementieren jedoch in der Regel viele Web-APIs, wie z.B. [`fetch()`](/de/docs/Web/API/Window/fetch) und [`setTimeout()`](/de/docs/Web/API/Window/setTimeout).

## JavaScript-Implementierungen

JavaScript-Engines, die in aktuellen Webbrowsern verwendet werden, umfassen:

- Mozillas [SpiderMonkey](https://spidermonkey.dev/), verwendet in Firefox, Servo und Flow. Andere Nicht-Browser-Verwendungen umfassen MongoDB, CouchDB und mehr. Dies war die erste _überhaupt_ JavaScript-Engine, erstellt von Brendan Eich bei Netscape.
- Googles [V8](https://v8.dev/), verwendet in Chrome und Chromium-basierten Browsern wie Opera, Edge und Brave. Andere Nicht-Browser-Verwendungen umfassen [Node.js](https://nodejs.org/), [Deno](https://deno.com/), [Electron](https://www.electronjs.org/) und mehr.
- Apples [JavaScriptCore](https://docs.webkit.org/Deep%20Dive/JSC/JavaScriptCore.html) (auch bekannt als SquirrelFish/Nitro), verwendet in Safari und anderen WebKit-basierten Browsern. Andere Nicht-Browser-Verwendungen umfassen [Bun](https://bun.sh/).
- [LibJS](https://serenityos.github.io/libjs-website/), verwendet in [Ladybird](https://ladybird.org/).

Einige JavaScript-Engines, die in früheren Browsern verwendet wurden, umfassen:

- [Carakan](<https://en.wikipedia.org/wiki/Presto_(browser_engine)#ECMAScript_engines>), verwendet in Opera, bevor es zu einem Chromium-basierten Browser wurde.
- Microsofts [Chakra](<https://en.wikipedia.org/wiki/Chakra_(JScript_engine)>), verwendet in Internet Explorer (obwohl die Sprache, die es implementiert, formal "JScript" genannt wird, um Markenprobleme zu vermeiden). Frühere Versionen von Edge verwendeten eine andere JavaScript-Engine, verwirrenderweise ebenfalls [Chakra](<https://en.wikipedia.org/wiki/Chakra_(JavaScript_engine)>), bevor es zu einem Chromium-basierten Browser wurde.

Einige speziell für nicht-browserbezogene Zwecke zugeschnittene JavaScript-Engines umfassen:

- [Engine262](https://engine262.js.org/), in JavaScript geschrieben und im Wesentlichen als Referenzimplementierung der Sprache gedacht.
- Metas [Hermes](https://github.com/facebook/hermes), optimiert für [React Native](https://reactnative.dev/docs/hermes).
- Mozillas [Rhino](<https://en.wikipedia.org/wiki/Rhino_(JavaScript_engine)>), in Java geschrieben.
- Oracles [GraalJS](https://www.graalvm.org/), in Java geschrieben und auf GraalVM aufgebaut.
- [Moddable XS](https://www.moddable.com/), gedacht für IoT/Embedded Systems.
- [QuickJS](https://bellard.org/quickjs/), gedacht, um klein und leichtgewichtig zu sein.

JavaScript-Engines stellen eine öffentliche API bereit, die Anwendungsentwickler zur Integration von JavaScript in ihre Software verwenden können. Bei weitem die häufigste Host-Umgebung für JavaScript sind Webbrowser. Webbrowser verwenden typischerweise die öffentliche API, um **Host-Objekte** zu erstellen, die dafür verantwortlich sind, das [DOM](https://dom.spec.whatwg.org/) in JavaScript widerzuspiegeln.

Eine weitere häufige Anwendung für JavaScript ist als (Web-)Server-seitige Skriptsprache. Ein JavaScript-Webserver stellt Host-Objekte dar, die HTTP-Anfrage- und -Antwortobjekte repräsentieren, die dann von einem JavaScript-Programm manipuliert werden können, um dynamisch Webseiten zu generieren. [Node.js](https://nodejs.org/) ist ein beliebtes Beispiel dafür.

## Shells

Ein JavaScript-Shell ermöglicht es Ihnen, schnell JavaScript-Code-Snippets zu testen, ohne eine Webseite neu zu laden. Sie sind äußerst nützlich für die Entwicklung und das Debugging von Code.

### Unabhängige JavaScript-Shells

Die folgenden JavaScript-Shells sind eigenständige Umgebungen, ähnlich wie Perl oder Python.

- [Node.js](https://nodejs.org/) - Node.js ist eine Plattform zum einfachen Erstellen schneller, skalierbarer Netzwerkanwendungen.
- [ShellJS](https://github.com/shelljs/shelljs) - Tragbare Unix-Shell-Befehle für Node.js.

### Browserbasierte JavaScript-Shells

Die folgenden JavaScript-Shells führen Code über die JavaScript-Engine des Browsers aus.

- Firefox verfügt über eine [integrierte JavaScript-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html), die die Bearbeitung mehrerer Zeilen unterstützt.
- [Babel REPL](https://babeljs.io/repl) - Eine browserbasierte [REPL](https://en.wikipedia.org/wiki/REPL) für die Erprobung zukünftiger JavaScript-Funktionen.
- [TypeScript playground](https://www.typescriptlang.org/play/) — Ein browserbasiertes Playground für die Erprobung sowohl neuer JavaScript-Funktionen (über den tsc-Compiler) als auch der TypeScript-Syntax.

## Werkzeuge & Ressourcen

Nützliche Werkzeuge zum Schreiben und Debuggen Ihres JavaScript-Codes.

- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html), [JavaScript Profiler](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html), [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) und mehr.
- [Learn JavaScript](https://learnjavascript.online/)
  - : Eine ausgezeichnete Ressource für angehende Webentwickler — Lernen Sie JavaScript in einer interaktiven Umgebung mit kurzen Lektionen und interaktiven Tests, geleitet durch automatisierte Bewertungen. Die ersten 40 Lektionen sind kostenlos, und der gesamte Kurs ist für eine geringe Einmalzahlung verfügbar.
- [TogetherJS](https://togetherjs.com/)
  - : Zusammenarbeit leicht gemacht. Durch Hinzufügen von TogetherJS zu Ihrer Website können sich Ihre Benutzer in Echtzeit gegenseitig auf einer Website unterstützen!
- [Stack Overflow](https://stackoverflow.com/questions/tagged/javascript)
  - : Stack Overflow Fragen mit "JavaScript"-Tag.
- [JSFiddle](https://jsfiddle.net/)
  - : Bearbeiten Sie JavaScript, CSS und HTML und erhalten Sie Live-Ergebnisse. Verwenden Sie externe Ressourcen und arbeiten Sie online mit Ihrem Team zusammen.
- [Plunker](https://plnkr.co/)
  - : Plunker ist eine Online-Community zum Erstellen, Zusammenarbeiten und Teilen Ihrer Webentwicklungs-Ideen. Bearbeiten Sie Ihre JavaScript-, CSS- und HTML-Dateien und erhalten Sie Live-Ergebnisse und Dateistruktur.
- [JS Bin](https://jsbin.com/)
  - : JS Bin ist ein Open-Source-Tool zur kollaborativen Webentwicklung und Debugging.
- [CodePen](https://codepen.io/)
  - : CodePen ist ein weiteres kollaboratives Webentwicklungs-Tool, das als Live-Effekt-Spielplatz verwendet wird.
- [StackBlitz](https://stackblitz.com/)
  - : StackBlitz ist ein weiteres Online-Playground/Debugging-Tool, das vollständige Anwendungen mit React, Angular usw. hosten und bereitstellen kann.
- [RunJS](https://runjs.app/)
  - : RunJS ist ein Desktop-Spielplatz/Werkzeugsatz, der Live-Ergebnisse und Zugriff auf sowohl Node- als auch Browser-APIs bietet.
