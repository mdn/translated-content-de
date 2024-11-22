---
title: Übersicht über JavaScript-Technologien
slug: Web/JavaScript/JavaScript_technologies_overview
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{jsSidebar("Introductory")}}

Während [HTML](/de/docs/Web/HTML) die Struktur und den Inhalt einer Webseite definiert und [CSS](/de/docs/Web/CSS) das Format und das Erscheinungsbild festlegt, fügt [JavaScript](/de/docs/Web/JavaScript) einer Webseite Interaktivität hinzu und ermöglicht die Erstellung von umfassenden Webanwendungen.

Der Begriff "JavaScript" im Kontext eines Webbrowsers umfasst jedoch mehrere sehr unterschiedliche Elemente. Eines davon ist die Kernsprache (ECMAScript), ein anderes ist die Sammlung der [Web APIs](/de/docs/Web/API), einschließlich des DOM (Document Object Model).

## JavaScript, die Kernsprache (ECMAScript)

Die Kernsprache von JavaScript wird vom ECMA TC39-Komitee als eine Sprache namens ECMAScript standardisiert. "ECMAScript" ist der Begriff für den Sprachstandard, aber "ECMAScript" und "JavaScript" können austauschbar verwendet werden.

Diese Kernsprache wird auch in Nicht-Browser-Umgebungen verwendet, beispielsweise in [Node.js](https://nodejs.org/).

### Was fällt unter den ECMAScript-Bereich?

ECMAScript definiert unter anderem:

- Sprachsyntax (Parsing-Regeln, Schlüsselwörter, Kontrollfluss, Objektliteralinitialisierung, ...)
- Fehlerbehandlungsmechanismen ({{jsxref("Statements/throw", "throw")}}, {{jsxref("Statements/try...catch", "try...catch")}}, Fähigkeit zur Erstellung benutzerdefinierter {{jsxref("Error")}}-Typen)
- Typen (boolean, number, string, function, object, ...)
- Ein prototypenbasiertes Vererbungsmechanismus
- Eingebaute Objekte und Funktionen, einschließlich {{jsxref("JSON")}}, {{jsxref("Math")}}, [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)-Methoden, {{jsxref("parseInt")}}, {{jsxref("decodeURI")}} usw.
- [Strikter Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)
- Ein [Modulsystem](/de/docs/Web/JavaScript/Guide/Modules)
- Grundlegendes Speichermodell

### Standardisierungsprozess

ECMAScript-Ausgaben werden jährlich von der ECMA-Generalversammlung als Standard genehmigt und veröffentlicht. Alle Entwicklungen sind öffentlich auf der [Ecma TC39 GitHub-Organisation](https://github.com/tc39) einsehbar, die Vorschläge, den offiziellen Spezifikationstext und Sitzungsprotokolle hostet.

Vor der 6. Ausgabe von ECMAScript (bekannt als ES6) wurden Spezifikationen einmal alle paar Jahre veröffentlicht und werden üblicherweise mit ihren Hauptversionsnummern bezeichnet — ES3, ES5 usw. Nach ES6 wird die Spezifikation nach dem Veröffentlichungsjahr benannt — ES2017, ES2018 usw. ES6 ist synonym mit ES2015. _ESNext_ ist ein dynamischer Name, der sich auf die jeweils nächste Version zur Zeit des Schreibens bezieht. ESNext-Features werden korrekterweise als Vorschläge bezeichnet, da die Spezifikation per Definition noch nicht abgeschlossen ist.

Der derzeit von der Kommission genehmigte Schnappschuss von ECMA-262 ist im PDF- und HTML-Format auf der [ECMA-262 Sprachspezifikationsseite](https://ecma-international.org/publications-and-standards/standards/ecma-262/) von Ecma International verfügbar. ECMA-262 und ECMA-402 werden kontinuierlich von den Spezifikationsredakteuren gepflegt und aktualisiert; die TC39-Website hostet die neueste, aktuelle [ECMA-262](https://tc39.es/ecma262/) und [ECMA-402](https://tc39.es/ecma402/) Versionen.

Neue Sprachfeatures, einschließlich der Einführung neuer Syntaxen und APIs sowie der Überarbeitung bestehender Verhaltensweisen, werden in Form von Vorschlägen diskutiert. Jeder Vorschlag durchläuft einen [4-stufigen Prozess](https://tc39.es/process-document/) und wird normalerweise von JavaScript-Engines in der Stufe 3 oder Stufe 4 implementiert und ist somit der Öffentlichkeit zugänglich.

Weitere Informationen zur Geschichte von ECMAScript finden Sie im [Wikipedia-Artikel zu ECMAScript](https://en.wikipedia.org/wiki/ECMAScript).

### Internationalization API

Die [ECMAScript Internationalization API Specification](https://402.ecma-international.org/1.0/) ist eine Ergänzung zur ECMAScript Language Specification, die ebenfalls von Ecma TC39 standardisiert wurde. Die Internationalization API bietet Kollation (Zeichenfolgenvergleich), Zahlenformatierung und Datums- und Zeitformatierung für JavaScript-Anwendungen, sodass die Anwendungen die Sprache auswählen und die Funktionalität an ihre Bedürfnisse anpassen können. Der ursprüngliche Standard wurde im Dezember 2012 genehmigt; der Status der Implementierungen in Browsern wird in der Dokumentation des {{jsxref("Intl")}}-Objekts nachverfolgt. Die Internationalisierungsspezifikation wird heutzutage ebenfalls jährlich ratifiziert und Browser verbessern ständig ihre Implementierung.

### Verwandte Ressourcen

Es gibt verschiedene Möglichkeiten, wie Sie an der aktuellen Arbeit zur ECMAScript-Sprachspezifikation und zur ECMAScript-Internationalisierungs-API-Spezifikation teilnehmen oder diese einfach verfolgen können:

- [ECMAScript Language Specification Repo](https://github.com/tc39/ecma262)
- [ECMAScript Internationalization API Specification Repo](https://github.com/tc39/ecma402)
- [ECMAScript Proposals Repo](https://github.com/tc39/proposals)
- [ECMAScript Conformance Test Suite Repo](https://github.com/tc39/test262)
- [TC39 Meeting Notes](https://github.com/tc39/notes)
- [Diskussion über die ECMAScript-Spezifikation; aktuelle Mailingliste](https://es.discourse.group/)
- [Diskussion über die ECMAScript-Spezifikation; historische Mailing-Listen-Archive (bis März 2021)](https://esdiscuss.org/)

## DOM-APIs

### WebIDL

Die [WebIDL-Spezifikation](https://webidl.spec.whatwg.org/) bildet die Schnittstelle zwischen den DOM-Technologien und ECMAScript.

### Der Kern des DOM

Das Document Object Model (DOM) ist eine plattformübergreifende, **sprachenunabhängige Konvention**, um Objekte in HTML-, XHTML- und XML-Dokumenten darzustellen und zu manipulieren. Objekte im **DOM-Baum** können durch Methoden auf den Objekten angesprochen und manipuliert werden. Die {{Glossary("W3C", "W3C")}} standardisiert das Core Document Object Model, das sprachenunabhängige Schnittstellen definiert, die HTML- und XML-Dokumente als Objekte abstrahieren, und außerdem Mechanismen zur Manipulation dieser Abstraktion definiert. Zu den Dingen, die vom DOM definiert werden, gehören:

- Die Dokumentstruktur, ein Baum-Modell und die DOM-Event-Architektur in [DOM Core](https://dom.spec.whatwg.org/): [`Node`](/de/docs/Web/API/Node), [`Element`](/de/docs/Web/API/Element), [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), [`Document`](/de/docs/Web/API/Document), [`DOMImplementation`](/de/docs/Web/API/DOMImplementation), [`Event`](/de/docs/Web/API/Event), [`EventTarget`](/de/docs/Web/API/EventTarget), ...
- Eine weniger strenge Definition der DOM-Event-Architektur sowie spezifische Ereignisse in [DOM Events](https://w3c.github.io/uievents/).
- Weitere Dinge wie [DOM Traversal](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html) und [DOM Range](https://dom.spec.whatwg.org/#ranges).

Aus der Sicht von ECMAScript werden in der DOM-Spezifikation definierte Objekte als "Host-Objekte" bezeichnet.

### HTML DOM

[HTML](https://html.spec.whatwg.org/multipage/), die Markup-Sprache des Webs, wird in Bezug auf das DOM spezifiziert. Über die abstrakten Konzepte, die in DOM Core definiert sind, wird in HTML auch die _Bedeutung_ von Elementen festgelegt. Das HTML DOM umfasst solche Dinge wie die `className`-Eigenschaft bei HTML-Elementen oder APIs wie [`Document.body`](/de/docs/Web/API/Document/body).

Die HTML-Spezifikation definiert auch Einschränkungen für Dokumente; beispielsweise erfordert sie, dass alle Kinder eines {{htmlelement("ul")}}-Elements, das eine unsortierte Liste darstellt, {{htmlelement("li")}}-Elemente sind, da diese Listenelemente darstellen. Generell verbietet sie auch die Verwendung von Elementen und Attributen, die nicht in einem Standard definiert sind.

Suchen Sie nach dem [`Document`](/de/docs/Web/API/Document)-Objekt, dem [`Window`](/de/docs/Web/API/Window)-Objekt und den anderen DOM-Elementen? Lesen Sie die [DOM-Dokumentation](/de/docs/Web/API/Document_Object_Model).

## Andere bemerkenswerte APIs

- Die Funktionen [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setInterval()`](/de/docs/Web/API/Window/setInterval) wurden erstmals auf der [`Window`](/de/docs/Web/API/Window)-Schnittstelle im HTML-Standard spezifiziert.
- [XMLHttpRequest](https://xhr.spec.whatwg.org/) ermöglicht es, asynchrone HTTP-Anfragen zu senden.
- Die [Fetch API](https://fetch.spec.whatwg.org/) bietet eine ergonomischere Abstraktion für Netzwerkabfragen.
- Das [CSS Object Model](https://drafts.csswg.org/cssom/) abstrahiert CSS-Regeln als Objekte.
- [WebWorkers](https://html.spec.whatwg.org/multipage/workers.html) ermöglicht parallele Berechnungen.
- [WebSockets](https://html.spec.whatwg.org/multipage/#network) ermöglichen eine bidirektionale Kommunikation auf niedriger Ebene.
- [Canvas 2D Context](https://html.spec.whatwg.org/multipage//#2dcontext) ist eine Zeichen-API für [`<canvas>`](/de/docs/Web/HTML/Element/canvas).
- Die [WebAssembly-Schnittstelle](https://webassembly.github.io/spec/js-api/) bietet Werkzeuge für die Kommunikation zwischen JavaScript-Code und [WebAssembly](/de/docs/WebAssembly)-Modulen.

Nicht-Browser-Umgebungen (wie Node.js) haben oft keine DOM-APIs, da sie nicht mit einem Dokument interagieren, implementieren jedoch in der Regel viele Web-APIs, wie [`fetch()`](/de/docs/Web/API/Window/fetch) und [`setTimeout()`](/de/docs/Web/API/Window/setTimeout).

## JavaScript-Implementierungen

Es gibt drei Hauptimplementierungen von JavaScript, die in Browserumgebungen und darüber hinaus verwendet werden:

- Mozillas [SpiderMonkey](https://spidermonkey.dev/), verwendet in Firefox. Dies war die erste _überhaupt_ JavaScript-Engine, erstellt von Brendan Eich bei Netscape.
- Googles [V8](https://v8.dev/), verwendet in Google Chrome, Opera, Edge, [Node.js](https://nodejs.org/), [Deno](https://deno.com/), [Electron](https://www.electronjs.org/) und mehr.
- Apples [JavaScriptCore](https://trac.webkit.org/wiki/JavaScriptCore) (auch bekannt als SquirrelFish/Nitro), verwendet in WebKit-Browsern wie Apple Safari und [Bun](https://bun.sh/).

Neben den oben genannten Implementierungen gibt es andere beliebte JavaScript-Engines wie:

- [Carakan](<https://en.wikipedia.org/wiki/Presto_(browser_engine)#ECMAScript_engines>), verwendet in älteren Versionen von Opera.
- Microsofts [Chakra](<https://en.wikipedia.org/wiki/Chakra_(JScript_engine)>)-Engine, verwendet im Internet Explorer (obwohl die implementierte Sprache formal als "JScript" bezeichnet wird, um Markenprobleme zu vermeiden). Frühere Versionen von Edge verwendeten eine neue JavaScript-Engine, die verwirrenderweise auch [Chakra](<https://en.wikipedia.org/wiki/Chakra_(JavaScript_engine)>) genannt wurde.
- [LibJS](https://serenityos.github.io/libjs-website/), verwendet in der Browserimplementierung von [SerenityOS](https://serenityos.org/).
- Mozillas [Rhino](<https://en.wikipedia.org/wiki/Rhino_(JavaScript_engine)>)-Engine, eine in Java geschriebene JavaScript-Implementierung, hauptsächlich erstellt von Norris Boyd (ebenfalls bei Netscape).

Es gibt einige Engines, die speziell für Nicht-Browser-Zwecke entwickelt wurden:

- [Engine262](https://engine262.js.org/), eine in JavaScript geschriebene JavaScript-Engine. Sie ist für JavaScript-Entwickler erstellt, um neue Sprachfeatures zu erkunden und Fehler in der Spezifikation zu finden.
- [Moddable XS](https://www.moddable.com/), verwendet in eingebetteten Systemen wie IoT.
- [QuickJS](https://bellard.org/quickjs/), eine kleine und einbettbare JavaScript-Engine.
- Metas [Hermes](https://github.com/facebook/hermes)-Engine, eine optimierte Engine für [React Native](https://reactnative.dev/docs/hermes).
- Oracles [GraalJS](https://www.graalvm.org/), eine leistungsstarke Implementierung, entwickelt auf der GraalVM von Oracle Labs.

JavaScript-Engines stellen eine öffentliche API bereit, die Anwendungsentwickler nutzen können, um JavaScript in ihre Software zu integrieren. Mit Abstand die häufigste Host-Umgebung für JavaScript sind Webbrowser. Webbrowser verwenden typischerweise die öffentliche API, um **Host-Objekte** zu erstellen, die dafür verantwortlich sind, das [DOM](https://dom.spec.whatwg.org/) in JavaScript widerzuspiegeln.

Eine weitere gängige Anwendung von JavaScript ist als (Web-)Server-seitige Skriptsprache. Ein JavaScript-Webserver stellt Host-Objekte bereit, die ein HTTP-Anfrage- und Antwortobjekt repräsentieren, das dann von einem JavaScript-Programm manipuliert werden kann, um Webseiten dynamisch zu generieren. [Node.js](https://nodejs.org/) ist ein beliebtes Beispiel dafür.

## Shells

Eine JavaScript-Shell ermöglicht es Ihnen, schnell JavaScript-Code-Schnipsel zu testen, ohne eine Webseite neu laden zu müssen. Sie sind äußerst nützlich für die Entwicklung und das Debugging von Code.

### Unabhängige JavaScript-Shells

Die folgenden JavaScript-Shells sind eigenständige Umgebungen, ähnlich wie Perl oder Python.

- [Node.js](https://nodejs.org/) - Node.js ist eine Plattform zum einfachen Erstellen schneller, skalierbarer Netzwerk-Anwendungen.
- [ShellJS](https://github.com/shelljs/shelljs) - Tragbare Unix-Shell-Befehle für Node.js.

### Browser-basierte JavaScript-Shells

Die folgenden JavaScript-Shells führen Code durch die JavaScript-Engine des Browsers aus.

- Firefox hat eine [eingebaute JavaScript-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html), die Multi-Line-Bearbeitung unterstützt.
- [Babel REPL](https://babeljs.io/repl) - Ein browserbasierter [REPL](https://en.wikipedia.org/wiki/REPL) zum Experimentieren mit zukünftigen JavaScript-Versionen.
- [TypeScript playground](https://www.typescriptlang.org/play/) — Eine browserbasierte Spielwiese zum Experimentieren mit neuen JavaScript-Features (über den tsc-Compiler) und TypeScript-Syntax.

## Werkzeuge & Ressourcen

Nützliche Werkzeuge zum Schreiben und Debuggen von JavaScript-Code.

- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html), [JavaScript Profiler](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html), [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) und mehr.
- [Learn JavaScript](https://learnjavascript.online/)
  - : Eine hervorragende Ressource für angehende Webentwickler — Lernen Sie JavaScript in einer interaktiven Umgebung, mit kurzen Lektionen und interaktiven Tests, geführt durch automatisierte Beurteilungen. Die ersten 40 Lektionen sind kostenlos, und der komplette Kurs ist gegen eine geringe einmalige Zahlung verfügbar.
- [TogetherJS](https://togetherjs.com/)
  - : Kollaboration leicht gemacht. Indem Sie TogetherJS zu Ihrer Website hinzufügen, können Ihre Benutzer sich gegenseitig in Echtzeit helfen!
- [Stack Overflow](https://stackoverflow.com/questions/tagged/javascript)
  - : Stack Overflow-Fragen, die mit "JavaScript" getaggt sind.
- [JSFiddle](https://jsfiddle.net/)
  - : Bearbeiten Sie JavaScript, CSS und HTML und erhalten Sie Live-Ergebnisse. Nutzen Sie externe Ressourcen und arbeiten Sie online mit Ihrem Team zusammen.
- [Plunker](https://plnkr.co/)
  - : Plunker ist eine Online-Community zum Erstellen, Zusammenarbeiten und Teilen Ihrer Webentwicklungs-Ideen. Bearbeiten Sie Ihre JavaScript-, CSS- und HTML-Dateien und erhalten Sie Live-Ergebnisse und Dateistrukturen.
- [JS Bin](https://jsbin.com/)
  - : JS Bin ist ein Open-Source-Webentwicklungstool zur kollaborativen Fehlerbehebung.
- [CodePen](https://codepen.io/)
  - : CodePen ist ein weiteres kollaboratives Webentwicklungstool, das als Live-Ergebnis-Spielwiese verwendet wird.
- [StackBlitz](https://stackblitz.com/)
  - : StackBlitz ist ein weiteres Online-Spielplatz-/Debugging-Tool, das vollständige Anwendungen mit React, Angular, usw. hosten und bereitstellen kann.
- [RunJS](https://runjs.app/)
  - : RunJS ist ein Desktop-Spielplatz/Notizblock-Tool, das Live-Ergebnisse und Zugriff auf sowohl Node- als auch Browser-APIs bietet.
