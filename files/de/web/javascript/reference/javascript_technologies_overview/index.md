---
title: Übersicht der JavaScript-Technologien
slug: Web/JavaScript/Reference/JavaScript_technologies_overview
l10n:
  sourceCommit: 6722199b4d63fad3c33db1146af380fc98b6c202
---

Während [HTML](/de/docs/Web/HTML) die Struktur und den Inhalt einer Webseite definiert und [CSS](/de/docs/Web/CSS) das Format und das Aussehen festlegt, fügt [JavaScript](/de/docs/Web/JavaScript) einer Webseite Interaktivität hinzu und ermöglicht die Erstellung von umfangreichen Webanwendungen.

Der Begriff "JavaScript" umfasst im Kontext eines Webbrowsers jedoch mehrere sehr unterschiedliche Elemente. Eines davon ist die Kernsprache (ECMAScript), ein anderes ist die Sammlung der [Web-APIs](/de/docs/Web/API), einschließlich des DOM (Document Object Model).

## JavaScript, die Kernsprache (ECMAScript)

Die Kernsprache von JavaScript wird vom ECMA TC39-Komitee als Sprache mit dem Namen ECMAScript standardisiert. "ECMAScript" ist der Begriff für den Sprachstandard, aber "ECMAScript" und "JavaScript" können austauschbar verwendet werden.

Diese Kernsprache wird auch in nicht-browserbasierten Umgebungen verwendet, zum Beispiel in [Node.js](https://nodejs.org/).

### Was fällt unter den ECMAScript-Bereich?

Unter anderem definiert ECMAScript:

- Sprachsyntax (Parsing-Regeln, Schlüsselwörter, Kontrollfluss, Objekterzeugung, ...)
- Fehlerbehandlungsmechanismen ({{jsxref("Statements/throw", "throw")}}, {{jsxref("Statements/try...catch", "try...catch")}}, die Fähigkeit zur Erstellung benutzerdefinierter {{jsxref("Error")}}-Typen)
- Typen (boolean, number, string, function, object, ...)
- Ein prototypenbasiertes Vererbungssystem
- Eingebaute Objekte und Funktionen, einschließlich {{jsxref("JSON")}}, {{jsxref("Math")}}, [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)-Methoden, {{jsxref("parseInt")}}, {{jsxref("decodeURI")}}, usw.
- [Strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode)
- Ein [Modulsystem](/de/docs/Web/JavaScript/Guide/Modules)
- Grundlegendes Speicher-Modell

### Standardisierungsprozess

ECMAScript-Ausgaben werden jährlich von der Allgemeinen Versammlung der ECMA genehmigt und als Standard veröffentlicht. Die gesamte Entwicklung erfolgt öffentlich auf der [Ecma TC39 GitHub-Organisation](https://github.com/tc39), die Vorschläge, den offiziellen Spezifikationstext und Besprechungsnotizen hostet.

Vor der 6. Ausgabe von ECMAScript (bekannt als ES6) wurden Spezifikationen nur alle paar Jahre veröffentlicht und werden allgemein mit ihren Hauptversionsnummern bezeichnet — ES3, ES5, usw. Nach ES6 wird die Spezifikation nach dem Veröffentlichungsjahr benannt — ES2017, ES2018, usw. ES6 ist gleichbedeutend mit ES2015. _ESNext_ ist ein dynamischer Name, der sich auf die nächste Version bezieht, die zum Zeitpunkt des Schreibens aktuell ist. ESNext-Funktionen werden korrekterweise als Vorschläge bezeichnet, da die Spezifikation per Definition noch nicht abgeschlossen ist.

Der aktuelle vom Komitee genehmigte Schnappschuss von ECMA-262 steht in PDF- und HTML-Format auf der [ECMA-262 Sprachspezifikationsseite](https://ecma-international.org/publications-and-standards/standards/ecma-262/) von Ecma International zur Verfügung. ECMA-262 und ECMA-402 werden kontinuierlich von den Spezifikationsredakteuren gepflegt und aktualisiert; die TC39-Website hostet die neuesten, aktuellen [ECMA-262](https://tc39.es/ecma262/) und [ECMA-402](https://tc39.es/ecma402/) Versionen.

Neue Sprachfunktionen, einschließlich der Einführung neuer Syntaxen und APIs sowie der Überarbeitung bestehender Verhaltensweisen, werden in Form von Vorschlägen diskutiert. Jeder Vorschlag durchläuft einen [4-stufigen Prozess](https://tc39.es/process-document/) und wird typischerweise von JavaScript-Engines in Stufe 3 oder Stufe 4 implementiert und steht somit der Öffentlichkeit zur Verfügung.

Weitere Informationen zur Geschichte von ECMAScript finden Sie im [Wikipedia-Eintrag zu ECMAScript](https://en.wikipedia.org/wiki/ECMAScript).

### Internationalisierungs-API

Die [ECMAScript Internationalization API Specification](https://402.ecma-international.org/1.0/) ist eine Ergänzung zur ECMAScript-Sprachspezifikation, die ebenfalls von Ecma TC39 standardisiert wurde. Die Internationalisierungs-API bietet Kollation (Zeichenfolgenvergleich), Zahlenformatierung und Datums-/Zeitformatierung für JavaScript-Anwendungen, sodass die Anwendungen die Sprache wählen und die Funktionalität auf ihre Bedürfnisse zuschneiden können. Der ursprüngliche Standard wurde im Dezember 2012 genehmigt; der Status der Implementierungen in Browsern wird in der Dokumentation des {{jsxref("Intl")}}-Objekts verfolgt. Die Internationalisierungs-Spezifikation wird heutzutage auch jährlich ratifiziert und Browser verbessern ihre Implementierung ständig.

### Verwandte Ressourcen

Es gibt verschiedene Möglichkeiten, wie Sie an der Arbeit an der ECMAScript-Sprachspezifikation, der ECMAScript Internationalisierung API-Spezifikation und verwandten Ressourcen teilnehmen oder sie einfach verfolgen können:

- [ECMAScript Language Specification repo](https://github.com/tc39/ecma262)
- [ECMAScript Internationalization API Specification repo](https://github.com/tc39/ecma402)
- [ECMAScript proposals repo](https://github.com/tc39/proposals)
- [ECMAScript conformance test suite repo](https://github.com/tc39/test262)
- [TC39 meeting notes](https://github.com/tc39/notes)
- [ECMAScript spec discussion; current mailing list](https://es.discourse.group/)
- [ECMAScript spec discussion; historical mailing-list archives (until March 2021)](https://esdiscuss.org/)

## DOM-APIs

### WebIDL

Die [WebIDL-Spezifikation](https://webidl.spec.whatwg.org/) bildet die Brücke zwischen den DOM-Technologien und ECMAScript.

### Der Kern des DOM

Das Document Object Model (DOM) ist eine plattformübergreifende, **sprachenunabhängige Konvention** zur Darstellung und zum Umgang mit Objekten in HTML-, XHTML- und XML-Dokumenten. Objekte im **DOM-Baum** können durch Methoden an den Objekten angesprochen und manipuliert werden. Heutzutage wird die [DOM-Core](https://dom.spec.whatwg.org/)-Spezifikation von {{Glossary("WHATWG", "WHATWG")}} verwaltet (und ersetzt die {{Glossary("W3C", "W3C")}}-Version). Sie definiert sprachunabhängige Schnittstellen, die HTML- und XML-Dokumente als Objekte abstrahieren und zudem Mechanismen definieren, um diese Abstraktion zu manipulieren. Dazu gehören: [`Node`](/de/docs/Web/API/Node), [`Element`](/de/docs/Web/API/Element), [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), [`Document`](/de/docs/Web/API/Document), [`DOMImplementation`](/de/docs/Web/API/DOMImplementation), [`Event`](/de/docs/Web/API/Event), [`EventTarget`](/de/docs/Web/API/EventTarget), und mehr.

Aus der Sicht von ECMAScript werden Objekte, die in der DOM-Spezifikation definiert sind, als "Host-Objekte" bezeichnet.

### HTML DOM

[HTML](https://html.spec.whatwg.org/multipage/), die Markup-Sprache des Webs, wird im Hinblick auf das DOM spezifiziert. Über den abstrakten Konzepten, die im DOM-Core definiert sind, definiert HTML auch die _Bedeutung_ von Elementen. Das HTML DOM umfasst solche Dinge wie die `className`-Eigenschaft auf HTML-Elementen oder APIs wie [`Document.body`](/de/docs/Web/API/Document/body).

Die HTML-Spezifikation legt auch Einschränkungen für Dokumente fest; beispielsweise verlangt sie, dass alle Kinder eines {{htmlelement("ul")}}-Elements, das eine ungeordnete Liste darstellt, {{htmlelement("li")}}-Elemente sind, da diese Listenelemente darstellen. Im Allgemeinen verbietet sie auch die Verwendung von nicht in einem Standard definierten Elementen und Attributen.

Suchen Sie nach dem [`Document`](/de/docs/Web/API/Document)-Objekt, dem [`Window`](/de/docs/Web/API/Window)-Objekt und den anderen DOM-Elementen? Lesen Sie die [DOM-Dokumentation](/de/docs/Web/API/Document_Object_Model).

## Weitere bemerkenswerte APIs

- Die Funktionen [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setInterval()`](/de/docs/Web/API/Window/setInterval) wurden zuerst auf der [`Window`](/de/docs/Web/API/Window)-Schnittstelle im HTML-Standard spezifiziert.
- [XMLHttpRequest](https://xhr.spec.whatwg.org/) ermöglicht das Senden asynchroner HTTP-Anfragen.
- Die [Fetch API](https://fetch.spec.whatwg.org/) bietet eine ergonomischere Abstraktion für Netzwerk-Anfragen.
- Das [CSS Object Model](https://drafts.csswg.org/cssom/) abstrahiert CSS-Regeln als Objekte.
- [WebWorkers](https://html.spec.whatwg.org/multipage/workers.html) ermöglichen parallele Berechnungen.
- [WebSockets](https://html.spec.whatwg.org/multipage/#network) ermöglichen eine bidirektionale Kommunikation auf niedriger Ebene.
- [Canvas 2D Context](https://html.spec.whatwg.org/multipage//#2dcontext) ist eine Zeichen-API für [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas).
- Die [WebAssembly-Schnittstelle](https://webassembly.github.io/spec/js-api/) bietet Werkzeuge zur Kommunikation zwischen JavaScript-Code und [WebAssembly](/de/docs/WebAssembly)-Modulen.

Nicht-Browser-Umgebungen (wie Node.js) verfügen oft nicht über DOM-APIs — da sie nicht mit einem Dokument interagieren — aber sie implementieren normalerweise viele Web-APIs, wie z.B. [`fetch()`](/de/docs/Web/API/Window/fetch) und [`setTimeout()`](/de/docs/Web/API/Window/setTimeout).

## JavaScript-Implementierungen

Zu JavaScript-Engines, die in aktuellen Webbrowsern verwendet werden, gehören:

- Mozillas [SpiderMonkey](https://spidermonkey.dev/), verwendet in Firefox, Servo und Flow. Andere nicht-browserbasierte Anwendungen umfassen MongoDB, CouchDB und mehr. Dies war die erste _überhaupt_ entwickelte JavaScript-Engine, erstellt von Brendan Eich bei Netscape.
- Googles [V8](https://v8.dev/), verwendet in Chrome und Chromium-basierten Browsern wie Opera, Edge und Brave. Andere nicht-browserbasierte Anwendungen umfassen [Node.js](https://nodejs.org/), [Deno](https://deno.com/), [Electron](https://www.electronjs.org/) und mehr.
- Apples [JavaScriptCore](https://docs.webkit.org/Deep%20Dive/JSC/JavaScriptCore.html) (auch bekannt als SquirrelFish/Nitro), verwendet in Safari und anderen WebKit-basierten Browsern. Andere nicht-browserbasierte Anwendungen umfassen [Bun](https://bun.com/).
- [LibJS](https://serenityos.github.io/libjs-website/), verwendet in [Ladybird](https://ladybird.org/).

Einige der in früheren Browsern verwendeten JavaScript-Engines sind:

- [Carakan](<https://en.wikipedia.org/wiki/Presto_(browser_engine)#ECMAScript_engines>), verwendet in Opera, bevor es ein Chromium-basierter Browser wurde.
- Microsofts [Chakra](<https://en.wikipedia.org/wiki/Chakra_(JScript_engine)>), verwendet in Internet Explorer (obwohl die Sprache, die es implementiert, formell "JScript" genannt wird, um Markenprobleme zu vermeiden). Frühere Versionen von Edge verwendeten eine andere JavaScript-Engine, verwirrenderweise ebenfalls [Chakra](<https://en.wikipedia.org/wiki/Chakra_(JavaScript_engine)>), bevor es ein Chromium-basierter Browser wurde.

Einige JavaScript-Engines, die speziell für nicht-browserbasierte Zwecke entwickelt wurden, sind:

- [Engine262](https://engine262.js.org/), in JavaScript geschrieben und im Wesentlichen als Referenzimplementierung der Sprache gedacht.
- Metas [Hermes](https://github.com/facebook/hermes), optimiert für [React Native](https://reactnative.dev/docs/hermes).
- Mozillas [Rhino](<https://en.wikipedia.org/wiki/Rhino_(JavaScript_engine)>), in Java geschrieben.
- Oracles [GraalJS](https://www.graalvm.org/), in Java geschrieben und basiert auf GraalVM.
- [Moddable XS](https://www.moddable.com/), vorgesehen für IoT/eingebettete Systeme.
- [QuickJS](https://bellard.org/quickjs/), soll klein und leichtgewichtig sein.

JavaScript-Engines stellen eine öffentliche API bereit, die Anwendungsentwickler verwenden können, um JavaScript in ihre Software zu integrieren. Bei weitem die häufigste Host-Umgebung für JavaScript sind Webbrowser. Webbrowser nutzen typischerweise die öffentliche API, um **Host-Objekte** zu erstellen, die dafür verantwortlich sind, das [DOM](https://dom.spec.whatwg.org/) in JavaScript zu reflektieren.

Eine weitere häufige Anwendung für JavaScript ist als (Web-)Server-Skript-Sprache. Ein JavaScript-Webserver stellt Host-Objekte dar, die HTTP-Anfrage- und Antwortobjekte repräsentieren, die dann von einem JavaScript-Programm manipuliert werden können, um Webseiten dynamisch zu generieren. [Node.js](https://nodejs.org/) ist ein beliebtes Beispiel dafür.

## Shells

Eine JavaScript-Shell ermöglicht es Ihnen, JavaScript-Code-Snippets schnell zu testen, ohne eine Webseite neu laden zu müssen. Sie sind äußerst nützlich für die Entwicklung und das Debuggen von Code.

### Eigenständige JavaScript-Shells

Die folgenden JavaScript-Shells sind eigenständige Umgebungen, ähnlich wie Perl oder Python.

- [Node.js](https://nodejs.org/) - Node.js ist eine Plattform, um einfach schnelle und skalierbare Netzwerkanwendungen zu bauen.
- [ShellJS](https://github.com/shelljs/shelljs) - Tragbare Unix-Shell-Befehle für Node.js.

### Browserbasierte JavaScript-Shells

Die folgenden JavaScript-Shells führen Code durch die JavaScript-Engine des Browsers aus.

- Firefox verfügt über eine [eingebaute JavaScript-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html), die die Bearbeitung über mehrere Zeilen unterstützt.
- [Babel REPL](https://babeljs.io/repl) - Ein browserbasiertes [REPL](https://en.wikipedia.org/wiki/REPL), um mit zukünftigen JavaScript zu experimentieren.
- [TypeScript-Spielplatz](https://www.typescriptlang.org/play/) — Ein browserbasierter Spielplatz, um sowohl mit neuen JavaScript-Funktionen (über den tsc-Compiler) als auch mit TypeScript-Syntax zu experimentieren.

## Werkzeuge & Ressourcen

Hilfreiche Werkzeuge zur Erstellung und Fehlerbehebung Ihres JavaScript-Codes.

- [Firefox-Entwicklerwerkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html), [JavaScript-Profiler](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html), [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) und mehr.
- [Lernen Sie JavaScript](https://learnjavascript.online/)
  - : Eine hervorragende Ressource für angehende Webentwickler — Lernen Sie JavaScript in einer interaktiven Umgebung mit kurzen Lektionen und interaktiven Tests, geführt durch automatisierte Bewertung. Die ersten 40 Lektionen sind kostenlos, und der komplette Kurs ist gegen eine geringe einmalige Zahlung verfügbar.
- [TogetherJS](https://togetherjs.com/)
  - : Zusammenarbeit leicht gemacht. Indem Sie TogetherJS zu Ihrer Seite hinzufügen, können Ihre Nutzer einander auf einer Website in Echtzeit helfen!
- [Stack Overflow](https://stackoverflow.com/questions/tagged/javascript)
  - : Stack Overflow-Fragen, die mit "JavaScript" getaggt sind.
- [JSFiddle](https://jsfiddle.net/)
  - : Bearbeiten Sie JavaScript, CSS und HTML und erhalten Sie Live-Ergebnisse. Nutzen Sie externe Ressourcen und arbeiten Sie online mit Ihrem Team zusammen.
- [Plunker](https://plnkr.co/)
  - : Plunker ist eine Online-Community zum Erstellen, Zusammenarbeiten und Teilen Ihrer Webentwicklungs-Ideen. Bearbeiten Sie Ihre JavaScript-, CSS- und HTML-Dateien und erhalten Sie Live-Ergebnisse und eine Dateistruktur.
- [JS Bin](https://jsbin.com/)
  - : JS Bin ist ein Open-Source-Webentwicklungs-Debugging-Tool zur Zusammenarbeit.
- [CodePen](https://codepen.io/)
  - : CodePen ist ein weiteres kollaboratives Webentwicklungs-Tool, das als Live-Resultat-Spielplatz verwendet wird.
- [StackBlitz](https://stackblitz.com/)
  - : StackBlitz ist ein weiteres Online-Spielplatz-/Debugging-Tool, das Full-Stack-Anwendungen mit React, Angular usw. hosten und bereitstellen kann.
- [RunJS](https://runjs.app/)
  - : RunJS ist ein Desktop-Spielplatz-/Notizblock-Tool, das Live-Ergebnisse und Zugriff auf sowohl Node- als auch Browser-APIs bietet.
