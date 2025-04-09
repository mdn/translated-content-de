---
title: Übersicht über JavaScript-Technologien
slug: Web/JavaScript/Reference/JavaScript_technologies_overview
l10n:
  sourceCommit: 0977361573b37f858222d0b89b950d56dbdab8bd
---

{{jsSidebar("Introductory")}}

Während [HTML](/de/docs/Web/HTML) die Struktur und den Inhalt einer Webseite definiert und [CSS](/de/docs/Web/CSS) das Format und das Erscheinungsbild festlegt, fügt [JavaScript](/de/docs/Web/JavaScript) einer Webseite Interaktivität hinzu und ermöglicht die Erstellung von umfangreichen Webanwendungen.

Der Begriff "JavaScript", wie er im Kontext eines Webbrowsers verstanden wird, umfasst jedoch mehrere sehr unterschiedliche Elemente. Eines davon ist die Kernsprache (ECMAScript), ein anderes ist die Sammlung der [Web-APIs](/de/docs/Web/API), einschließlich des DOM (Document Object Model).

## JavaScript, die Kernsprache (ECMAScript)

Die Kernsprache von JavaScript wird vom ECMA TC39-Komitee als eine Sprache namens ECMAScript standardisiert. "ECMAScript" ist der Begriff für den Sprachstandard, aber "ECMAScript" und "JavaScript" können synonym verwendet werden.

Diese Kernsprache wird auch in nicht-browserbasierten Umgebungen wie beispielsweise in [Node.js](https://nodejs.org/) verwendet.

### Was fällt unter den ECMAScript-Bereich?

Unter anderem definiert ECMAScript:

- Sprachsyntax (Parsing-Regeln, Schlüsselwörter, Kontrollfluss, Objektinitialisierungsliterale, ...)
- Mechanismen zur Fehlerbehandlung ({{jsxref("Statements/throw", "throw")}}, {{jsxref("Statements/try...catch", "try...catch")}}, die Fähigkeit, benutzerdefinierte {{jsxref("Error")}}-Typen zu erstellen)
- Typen (boolean, number, string, function, object, ...)
- Ein prototypbasiertes Vererbungsmechanismus
- Eingebaute Objekte und Funktionen, einschließlich {{jsxref("JSON")}}, {{jsxref("Math")}}, [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)-Methoden, {{jsxref("parseInt")}}, {{jsxref("decodeURI")}} usw.
- [Strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode)
- Ein [Modulsystem](/de/docs/Web/JavaScript/Guide/Modules)
- Grundlegendes Speichermodell

### Standardisierungsprozess

ECMAScript-Ausgaben werden jedes Jahr von der ECMA Generalversammlung als Standard genehmigt und veröffentlicht. Die gesamte Entwicklung ist öffentlich auf der [Ecma TC39 GitHub-Organisation](https://github.com/tc39) zugänglich, die Vorschläge, den offiziellen Spezifikationstext und Sitzungsnotizen hostet.

Vor der 6. Ausgabe von ECMAScript (bekannt als ES6) wurden Spezifikationen nur alle paar Jahre veröffentlicht und werden üblicherweise nach ihren Hauptversionsnummern bezeichnet — ES3, ES5, usw. Nach ES6 wird die Spezifikation nach dem Veröffentlichungsjahr benannt — ES2017, ES2018, usw. ES6 ist synonym mit ES2015. _ESNext_ ist ein dynamischer Begriff, der sich auf die jeweils nächste Version bezieht. ESNext-Features werden korrekterweise als Vorschläge bezeichnet, da die Spezifikation definitionsgemäß noch nicht abgeschlossen ist.

Der aktuelle, vom Komitee genehmigte Snapshot von ECMA-262 ist im PDF- und HTML-Format auf der [ECMA-262-Sprachspezifikationsseite](https://ecma-international.org/publications-and-standards/standards/ecma-262/) von Ecma International verfügbar. ECMA-262 und ECMA-402 werden kontinuierlich gepflegt und aktualisiert von den Spezifikationseditoren; auf der TC39-Website sind die neuesten, aktuellen Versionen von [ECMA-262](https://tc39.es/ecma262/) und [ECMA-402](https://tc39.es/ecma402/) zu finden.

Neue Sprachmerkmale, einschließlich der Einführung neuer Syntaxen und APIs sowie der Überarbeitung bestehender Verhaltensweisen, werden in Form von Vorschlägen diskutiert. Jeder Vorschlag durchläuft einen [4-stufigen Prozess](https://tc39.es/process-document/) und wird in der Regel von JavaScript-Engines in Stufe 3 oder Stufe 4 implementiert und steht somit der Öffentlichkeit zur Verfügung.

Weitere Informationen zur Geschichte von ECMAScript finden Sie im [Wikipedia-Eintrag zu ECMAScript](https://en.wikipedia.org/wiki/ECMAScript).

### Internationalisierungs-API

Die [ECMAScript Internationalization API Specification](https://402.ecma-international.org/1.0/) ist eine Ergänzung zur ECMAScript-Sprachspezifikation, die ebenfalls von Ecma TC39 standardisiert wurde. Die Internationalisierungs-API bietet Sortierung (Zeichenfolgenvergleich), Zahlenformatierung und Datum-Zeit-Formatierung für JavaScript-Anwendungen, sodass die Anwendungen die Sprache wählen und die Funktionalität an ihre Bedürfnisse anpassen können. Der ursprüngliche Standard wurde im Dezember 2012 genehmigt; der Status der Implementierungen in Browsern wird in der Dokumentation des {{jsxref("Intl")}}-Objekts verfolgt. Die Internationalisierungsspezifikation wird heutzutage ebenfalls jährlich ratifiziert und die Browser verbessern ständig ihre Implementierung.

### Verwandte Ressourcen

Es gibt verschiedene Möglichkeiten, wie Sie sich an der aktuellen Arbeit an der ECMAScript-Sprachspezifikation und der ECMAScript-Internationalisierungs-API-Spezifikation beteiligen oder diese verfolgen können:

- [ECMAScript Language Specification repo](https://github.com/tc39/ecma262)
- [ECMAScript Internationalization API Specification repo](https://github.com/tc39/ecma402)
- [ECMAScript proposals repo](https://github.com/tc39/proposals)
- [ECMAScript conformance test suite repo](https://github.com/tc39/test262)
- [TC39 meeting notes](https://github.com/tc39/notes)
- [ECMAScript spec discussion; aktuelle Mailing-Liste](https://es.discourse.group/)
- [ECMAScript spec discussion; historische Mailing-List-Archive (bis März 2021)](https://esdiscuss.org/)

## DOM-APIs

### WebIDL

Die [WebIDL-Spezifikation](https://webidl.spec.whatwg.org/) bietet die Verbindung zwischen den DOM-Technologien und ECMAScript.

### Der Kern des DOM

Das Document Object Model (DOM) ist ein plattformübergreifendes, **sprachenunabhängiges Konvention** zur Darstellung und Interaktion mit Objekten in HTML-, XHTML- und XML-Dokumenten. Objekte im **DOM-Baum** können adressiert und mithilfe von Methoden an den Objekten manipuliert werden. Das {{Glossary("W3C", "W3C")}} standardisiert das Core Document Object Model, das sprachenagnostische Schnittstellen definiert, die HTML- und XML-Dokumente als Objekte abstrahieren, und Mechanismen definiert, um diese Abstraktion zu manipulieren. Unter den vom DOM definierten Dingen finden wir:

- Die Dokumentenstruktur, ein Baum-Modell und die DOM-Ereignisarchitektur im [DOM-Kern](https://dom.spec.whatwg.org/): [`Node`](/de/docs/Web/API/Node), [`Element`](/de/docs/Web/API/Element), [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), [`Document`](/de/docs/Web/API/Document), [`DOMImplementation`](/de/docs/Web/API/DOMImplementation), [`Event`](/de/docs/Web/API/Event), [`EventTarget`](/de/docs/Web/API/EventTarget), …
- Eine weniger strenge Definition der DOM-Ereignisarchitektur sowie spezifische Ereignisse in [DOM-Ereignissen](https://w3c.github.io/uievents/).
- Andere Dinge wie [DOM-Traversierung](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html) und [DOM-Range](https://dom.spec.whatwg.org/#ranges).

Aus der ECMAScript-Sichtweise werden in der DOM-Spezifikation definierte Objekte als "Host-Objekte" bezeichnet.

### HTML DOM

[HTML](https://html.spec.whatwg.org/multipage/), die Auszeichnungssprache des Webs, ist in Bezug auf das DOM spezifiziert. Auf einer Ebene über den abstrakten Konzepten, die im DOM-Kern definiert sind, definiert HTML auch die _Bedeutung_ der Elemente. Das HTML DOM umfasst solche Dinge wie die `className`-Eigenschaft auf HTML-Elementen oder APIs wie [`Document.body`](/de/docs/Web/API/Document/body).

Die HTML-Spezifikation definiert auch Einschränkungen für Dokumente; beispielsweise erfordert sie, dass alle Kinder eines {{htmlelement("ul")}}-Elements, das eine ungeordnete Liste darstellt, {{htmlelement("li")}}-Elemente sind, da diese Listeneinträge repräsentieren. Im Allgemeinen verbietet sie auch die Verwendung von Elementen und Attributen, die nicht in einem Standard definiert sind.

Suchen Sie nach dem [`Document`](/de/docs/Web/API/Document)-Objekt, dem [`Window`](/de/docs/Web/API/Window)-Objekt und den anderen DOM-Elementen? Lesen Sie die [DOM-Dokumentation](/de/docs/Web/API/Document_Object_Model).

## Weitere bemerkenswerte APIs

- Die Funktionen [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setInterval()`](/de/docs/Web/API/Window/setInterval) wurden zuerst auf der [`Window`](/de/docs/Web/API/Window)-Schnittstelle des HTML-Standards spezifiziert.
- [XMLHttpRequest](https://xhr.spec.whatwg.org/) ermöglicht das Senden asynchroner HTTP-Anfragen.
- Die [Fetch API](https://fetch.spec.whatwg.org/) bietet eine ergonomischere Abstraktion für Netzwerkanfragen.
- Das [CSS-Objektmodell](https://drafts.csswg.org/cssom/) abstrahiert CSS-Regeln als Objekte.
- [WebWorkers](https://html.spec.whatwg.org/multipage/workers.html) ermöglichen parallele Berechnungen.
- [WebSockets](https://html.spec.whatwg.org/multipage/#network) ermöglichen bidirektionale Low-Level-Kommunikation.
- [Canvas 2D Kontext](https://html.spec.whatwg.org/multipage//#2dcontext) ist eine Zeichen-API für [`<canvas>`](/de/docs/Web/HTML/Element/canvas).
- Das [WebAssembly-Interface](https://webassembly.github.io/spec/js-api/) bietet Hilfsmittel für die Kommunikation zwischen JavaScript-Code und [WebAssembly](/de/docs/WebAssembly)-Modulen.

Nicht-browserbasierte Umgebungen (wie Node.js) haben oft keine DOM-APIs, da sie nicht mit einem Dokument interagieren. Sie implementieren jedoch normalerweise viele Web-APIs, wie [`fetch()`](/de/docs/Web/API/Window/fetch) und [`setTimeout()`](/de/docs/Web/API/Window/setTimeout).

## JavaScript-Implementierungen

JavaScript-Engines, die in aktuellen Webbrowsern verwendet werden, umfassen:

- Mozillas [SpiderMonkey](https://spidermonkey.dev/), verwendet in Firefox, Servo und Flow. Andere nicht-browserbasierte Verwendungen umfassen MongoDB, CouchDB und mehr. Dies war die erste _überhaupt_ JavaScript-Engine, erstellt von Brendan Eich bei Netscape.
- Googles [V8](https://v8.dev/), verwendet in Chrome und auf Chromium basierenden Browsern wie Opera, Edge und Brave. Andere nicht-browserbasierte Verwendungen umfassen [Node.js](https://nodejs.org/), [Deno](https://deno.com/), [Electron](https://www.electronjs.org/) und mehr.
- Apples [JavaScriptCore](https://docs.webkit.org/Deep%20Dive/JSC/JavaScriptCore.html) (auch bekannt als SquirrelFish/Nitro), verwendet in Safari und anderen WebKit-basierten Browsern. Andere nicht-browserbasierte Verwendungen umfassen [Bun](https://bun.sh/).
- [LibJS](https://serenityos.github.io/libjs-website/), verwendet in [Ladybird](https://ladybird.org/).

Einige JavaScript-Engines, die in früheren Browsern verwendet wurden, umfassen:

- [Carakan](<https://en.wikipedia.org/wiki/Presto_(browser_engine)#ECMAScript_engines>), verwendet in Opera, bevor es ein Chromium-basierter Browser wurde.
- Microsofts [Chakra](<https://en.wikipedia.org/wiki/Chakra_(JScript_engine)>), verwendet in Internet Explorer (obwohl die Sprache, die implementiert wird, formell "JScript" genannt wird, um Markenprobleme zu vermeiden). Frühere Versionen von Edge verwendeten eine andere JavaScript-Engine, verwirrenderweise ebenfalls [Chakra](<https://en.wikipedia.org/wiki/Chakra_(JavaScript_engine)>), bevor es ein Chromium-basierter Browser wurde.

Einige JavaScript-Engines, die speziell für nicht-browserbasierte Zwecke entwickelt wurden, umfassen:

- [Engine262](https://engine262.js.org/), in JavaScript geschrieben und im Wesentlichen als Referenzimplementation der Sprache gedacht.
- Metas [Hermes](https://github.com/facebook/hermes), optimiert für [React Native](https://reactnative.dev/docs/hermes).
- Mozillas [Rhino](<https://en.wikipedia.org/wiki/Rhino_(JavaScript_engine)>), in Java geschrieben.
- Oracles [GraalJS](https://www.graalvm.org/), in Java geschrieben und auf GraalVM aufgebaut.
- [Moddable XS](https://www.moddable.com/), für IoT/Embedded-Systeme gedacht.
- [QuickJS](https://bellard.org/quickjs/), gedacht als klein und leichtgewichtig.

JavaScript-Engines bieten eine öffentliche API, die Anwendungsentwickler verwenden können, um JavaScript in ihre Software zu integrieren. Bei weitem sind die häufigsten Host-Umgebungen für JavaScript Webbrowser. Webbrowser verwenden in der Regel die öffentliche API, um **Host-Objekte** zu erstellen, die dafür verantwortlich sind, das [DOM](https://dom.spec.whatwg.org/) in JavaScript abzubilden.

Eine weitere häufige Anwendung für JavaScript ist als (Web-) Server-seitige Skriptsprache. Ein JavaScript-Webserver stellt Host-Objekte dar, die ein HTTP-Anfrage- und Antwortobjekt repräsentieren, die dann von einem JavaScript-Programm manipuliert werden können, um Webseiten dynamisch zu generieren. [Node.js](https://nodejs.org/) ist ein bekanntes Beispiel hierfür.

## Shells

Eine JavaScript-Shell ermöglicht es Ihnen, schnell JavaScript-Code-Snippets zu testen, ohne eine Webseite neu laden zu müssen. Sie sind äußerst nützlich für die Entwicklung und Fehlersuche von Code.

### Standalone JavaScript Shells

Die folgenden JavaScript-Shells sind eigenständige Umgebungen, ähnlich wie Perl oder Python.

- [Node.js](https://nodejs.org/) - Node.js ist eine Plattform zum einfachen Aufbau schneller, skalierbarer Netzwerkanwendungen.
- [ShellJS](https://github.com/shelljs/shelljs) - Tragbare Unix-Shell-Befehle für Node.js.

### Browser-basierte JavaScript Shells

Die folgenden JavaScript-Shells führen Code durch die JavaScript-Engine des Browsers aus.

- Firefox hat eine [eingebaute JavaScript-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html), die Mehrzeilenbearbeitung unterstützt.
- [Babel REPL](https://babeljs.io/repl) - Eine browserbasierte [REPL](https://en.wikipedia.org/wiki/REPL) zum Experimentieren mit zukünftigen JavaScript-Features.
- [TypeScript Playground](https://www.typescriptlang.org/play/) — Ein browserbasierter Spielplatz zum Experimentieren sowohl mit neuen JavaScript-Funktionen (über den tsc-Compiler) als auch mit TypeScript-Syntax.

## Tools & Ressourcen

Nützliche Tools zum Schreiben und Debuggen Ihres JavaScript-Codes.

- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html), [JavaScript Profiler](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html), [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) und mehr.
- [Learn JavaScript](https://learnjavascript.online/)
  - : Eine ausgezeichnete Ressource für angehende Webentwickler – Lernen Sie JavaScript in einer interaktiven Umgebung mit kurzen Lektionen und interaktiven Tests, geführt durch automatisierte Bewertungen. Die ersten 40 Lektionen sind kostenlos, und der komplette Kurs ist für eine kleine einmalige Zahlung erhältlich.
- [TogetherJS](https://togetherjs.com/)
  - : Zusammenarbeit leicht gemacht. Durch das Hinzufügen von TogetherJS zu Ihrer Seite können Ihre Benutzer sich gegenseitig in Echtzeit auf einer Website helfen!
- [Stack Overflow](https://stackoverflow.com/questions/tagged/javascript)
  - : Stack Overflow Fragen, die als "JavaScript" markiert sind.
- [JSFiddle](https://jsfiddle.net/)
  - : Bearbeiten Sie JavaScript, CSS und HTML und erhalten Sie Live-Ergebnisse. Verwenden Sie externe Ressourcen und arbeiten Sie online mit Ihrem Team zusammen.
- [Plunker](https://plnkr.co/)
  - : Plunker ist eine Online-Community zum Erstellen, Zusammenarbeiten und Teilen Ihrer Webentwicklungs-Ideen. Bearbeiten Sie Ihre JavaScript-, CSS- und HTML-Dateien und erhalten Sie Live-Ergebnisse und eine Dateistruktur.
- [JS Bin](https://jsbin.com/)
  - : JS Bin ist ein Open-Source-Kollaborations-Webentwicklungs-Debugging-Tool.
- [CodePen](https://codepen.io/)
  - : CodePen ist ein weiteres kollaboratives Webentwicklungs-Tool, das als Live-Resultate-Spielwiese verwendet wird.
- [StackBlitz](https://stackblitz.com/)
  - : StackBlitz ist ein weiteres Online-Spielplatz-/Debugging-Tool, das vollständige Anwendungen mit React, Angular usw. hosten und bereitstellen kann.
- [RunJS](https://runjs.app/)
  - : RunJS ist ein Desktop-Spielplatz/Notizblock-Tool, das Live-Ergebnisse und Zugriff auf sowohl Node- als auch Browser-APIs bietet.
