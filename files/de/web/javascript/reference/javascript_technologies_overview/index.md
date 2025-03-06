---
title: Überblick über JavaScript-Technologien
slug: Web/JavaScript/Reference/JavaScript_technologies_overview
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("Introductory")}}

Während [HTML](/de/docs/Web/HTML) die Struktur und den Inhalt einer Webseite definiert und [CSS](/de/docs/Web/CSS) die Formatierung und das Erscheinungsbild festlegt, fügt [JavaScript](/de/docs/Web/JavaScript) Interaktivität zu einer Webseite hinzu und ermöglicht die Erstellung von umfangreichen Webanwendungen.

Allerdings enthält der Oberbegriff "JavaScript" im Kontext eines Webbrowsers mehrere sehr unterschiedliche Elemente. Eines davon ist die Kernsprache (ECMAScript), ein anderes ist die Sammlung von [Web-APIs](/de/docs/Web/API), einschließlich des DOM (Document Object Model).

## JavaScript, die Kernsprache (ECMAScript)

Die Kernsprache von JavaScript wird durch das ECMA TC39 Komitee als eine Sprache namens ECMAScript standardisiert. "ECMAScript" ist der Begriff für die Sprachstandardisierung, aber "ECMAScript" und "JavaScript" können austauschbar verwendet werden.

Diese Kernsprache wird auch in nicht-browserbasierten Umgebungen verwendet, zum Beispiel in [Node.js](https://nodejs.org/).

### Was fällt unter den Geltungsbereich von ECMAScript?

Unter anderem definiert ECMAScript:

- Sprachsyntax (Parserregeln, Schlüsselwörter, Kontrollfluss, Initialisierung von Objektliteralen, ...)
- Mechanismen zur Fehlerbehandlung ({{jsxref("Statements/throw", "throw")}}, {{jsxref("Statements/try...catch", "try...catch")}}, Möglichkeit zur Erstellung benutzerdefinierter {{jsxref("Error")}}-Typen)
- Typen (boolean, number, string, function, object, ...)
- Ein auf Prototypen basierendes Vererbungssystem
- Eingebaute Objekte und Funktionen, einschließlich {{jsxref("JSON")}}, {{jsxref("Math")}}, [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)-Methoden, {{jsxref("parseInt")}}, {{jsxref("decodeURI")}} usw.
- [Strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode)
- Ein [Modulsystem](/de/docs/Web/JavaScript/Guide/Modules)
- Grundlegendes Speicherverwaltungsmodell

### Standardisierungsprozess

ECMAScript-Editionen werden jährlich von der Generalversammlung der ECMA genehmigt und als Standard veröffentlicht. Die gesamte Entwicklung ist öffentlich auf der [Ecma TC39 GitHub-Organisation](https://github.com/tc39), die Vorschläge, den offiziellen Spezifikationstext und Sitzungsprotokolle hostet.

Vor der 6. Edition von ECMAScript (bekannt als ES6) wurden Spezifikationen alle paar Jahre veröffentlicht und häufig durch ihre Hauptversionsnummern bezeichnet — ES3, ES5 usw. Nach ES6 wird die Spezifikation nach dem Veröffentlichungsjahr benannt — ES2017, ES2018 usw. ES6 ist gleichbedeutend mit ES2015. _ESNext_ ist ein dynamischer Name, der sich auf die jeweils nächste Version bezieht. ESNext-Features werden korrekterweise als Vorschläge bezeichnet, da die Spezifikation per Definition noch nicht finalisiert ist.

Der aktuell vom Komitee genehmigte Schnappschuss der ECMA-262 ist im PDF- und HTML-Format auf der [ECMA-262-Sprachspezifikationsseite von Ecma International](https://ecma-international.org/publications-and-standards/standards/ecma-262/) verfügbar. ECMA-262 und ECMA-402 werden kontinuierlich gepflegt und von den Spezifikationseditoren aktuell gehalten; die TC39-Website hostet die neuesten, aktuellen [ECMA-262](https://tc39.es/ecma262/) und [ECMA-402](https://tc39.es/ecma402/) Versionen.

Neue Sprachfunktionen, einschließlich der Einführung neuer Syntaxen und APIs sowie der Überarbeitung bestehender Verhaltensweisen, werden in Form von Vorschlägen diskutiert. Jeder Vorschlag durchläuft einen [4-stufigen Prozess](https://tc39.es/process-document/) und wird in der Regel von JavaScript-Engines in Stufe 3 oder Stufe 4 implementiert und steht somit für die öffentliche Nutzung zur Verfügung.

Weitere Informationen zur Geschichte von ECMAScript finden Sie im [Wikipedia-Eintrag zu ECMAScript](https://en.wikipedia.org/wiki/ECMAScript).

### Internationalization API

Die [ECMAScript Internationalization API Specification](https://402.ecma-international.org/1.0/) ist eine Ergänzung zur ECMAScript Language Specification, die ebenfalls von Ecma TC39 standardisiert wird. Die Internationalization API bietet Sortierung (Zeichenfolgenvergleich), Zahlenformatierung und Datums- und Zeitformatierung für JavaScript-Anwendungen, sodass die Anwendungen die Sprache wählen und die Funktionalität an ihre Bedürfnisse anpassen können. Der ursprüngliche Standard wurde im Dezember 2012 genehmigt; der Status der Implementierungen in Browsern wird in der Dokumentation des {{jsxref("Intl")}}-Objekts verfolgt. Die Internationalization-Spezifikation wird heutzutage ebenfalls jährlich ratifiziert und Browser verbessern ständig ihre Implementierung.

### Verwandte Ressourcen

Es gibt verschiedene Möglichkeiten, wie Sie sich an der aktuellen Arbeit an der ECMAScript Language Specification und der ECMAScript Internationalization API Specification beteiligen oder diese verfolgen können:

- [ECMAScript Language Specification repo](https://github.com/tc39/ecma262)
- [ECMAScript Internationalization API Specification repo](https://github.com/tc39/ecma402)
- [ECMAScript proposals repo](https://github.com/tc39/proposals)
- [ECMAScript conformance test suite repo](https://github.com/tc39/test262)
- [TC39 meeting notes](https://github.com/tc39/notes)
- [ECMAScript spec discussion; current mailing list](https://es.discourse.group/)
- [ECMAScript spec discussion; historical mailing-list archives (until March 2021)](https://esdiscuss.org/)

## DOM-APIs

### WebIDL

Die [WebIDL-Spezifikation](https://webidl.spec.whatwg.org/) stellt die Verbindung zwischen den DOM-Technologien und ECMAScript dar.

### Der Kern des DOMs

Das Document Object Model (DOM) ist eine plattformübergreifende, **sprachenunabhängige Konvention** zur Darstellung und Interaktion mit Objekten in HTML-, XHTML- und XML-Dokumenten. Objekte im **DOM-Baum** können durch Methoden an den Objekten angesprochen und manipuliert werden. Das {{Glossary("W3C", "W3C")}} standardisiert den Core Document Object Model, der sprachenunabhängige Schnittstellen definiert, die HTML- und XML-Dokumente als Objekte abstrahieren, sowie Mechanismen zur Manipulation dieser Abstraktion definiert. Zu den vom DOM definierten Dingen gehören:

- Die Dokumentstruktur, ein Baumodell, und die Architektur des DOM-Ereignisses im [DOM-Kern](https://dom.spec.whatwg.org/): [`Node`](/de/docs/Web/API/Node), [`Element`](/de/docs/Web/API/Element), [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), [`Document`](/de/docs/Web/API/Document), [`DOMImplementation`](/de/docs/Web/API/DOMImplementation), [`Event`](/de/docs/Web/API/Event), [`EventTarget`](/de/docs/Web/API/EventTarget), …
- Eine weniger strenge Definition der DOM-Ereignisarchitektur sowie spezifische Ereignisse in [DOM-Ereignissen](https://w3c.github.io/uievents/).
- Andere Dinge wie [DOM Traversal](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html) und [DOM Range](https://dom.spec.whatwg.org/#ranges).

Aus Sicht von ECMAScript werden Objekte, die in der DOM-Spezifikation definiert sind, als "Host-Objekte" bezeichnet.

### HTML DOM

[HTML](https://html.spec.whatwg.org/multipage/), die Markup-Sprache des Webs, wird in Bezug auf das DOM spezifiziert. Über die im DOM-Kern definierten abstrakten Konzepte hinaus definiert HTML auch die _Bedeutung_ von Elementen. Das HTML DOM umfasst Dinge wie die `className`-Eigenschaft von HTML-Elementen oder APIs wie [`Document.body`](/de/docs/Web/API/Document/body).

Die HTML-Spezifikation definiert auch Einschränkungen für Dokumente; beispielsweise erfordert sie, dass alle Kinder eines {{htmlelement("ul")}}-Elements, das eine ungeordnete Liste darstellt, {{htmlelement("li")}}-Elemente sind, da diese Listenelemente darstellen. Im Allgemeinen verbietet sie auch die Verwendung von Elementen und Attributen, die nicht in einem Standard definiert sind.

Suchen Sie nach dem [`Document`](/de/docs/Web/API/Document)-Objekt, dem [`Window`](/de/docs/Web/API/Window)-Objekt und den anderen DOM-Elementen? Lesen Sie die [DOM-Dokumentation](/de/docs/Web/API/Document_Object_Model).

## Andere bemerkenswerte APIs

- Die Funktionen [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setInterval()`](/de/docs/Web/API/Window/setInterval) wurden erstmals auf der [`Window`](/de/docs/Web/API/Window)-Schnittstelle im HTML-Standard spezifiziert.
- [XMLHttpRequest](https://xhr.spec.whatwg.org/) ermöglicht das Senden asynchroner HTTP-Anfragen.
- Die [Fetch API](https://fetch.spec.whatwg.org/) bietet eine ergonomischere Abstraktion für Netzwerkrequests.
- Das [CSS Object Model](https://drafts.csswg.org/cssom/) abstrahiert CSS-Regeln als Objekte.
- [WebWorkers](https://html.spec.whatwg.org/multipage/workers.html) erlauben parallele Berechnungen.
- [WebSockets](https://html.spec.whatwg.org/multipage/#network) ermöglichen eine bidirektionale Kommunikation auf niedriger Ebene.
- [Canvas 2D Context](https://html.spec.whatwg.org/multipage//#2dcontext) ist eine Zeichen-API für [`<canvas>`](/de/docs/Web/HTML/Element/canvas).
- Die [WebAssembly-Schnittstelle](https://webassembly.github.io/spec/js-api/) bietet Utilities für die Kommunikation zwischen JavaScript-Code und [WebAssembly](/de/docs/WebAssembly)-Modulen.

Nicht-browserbasierte Umgebungen (wie Node.js) haben oft keine DOM-APIs, da sie nicht mit einem Dokument interagieren, aber dennoch viele Web-APIs implementieren, wie beispielsweise [`fetch()`](/de/docs/Web/API/Window/fetch) und [`setTimeout()`](/de/docs/Web/API/Window/setTimeout).

## JavaScript-Implementierungen

Es gibt drei Hauptimplementierungen von JavaScript, die sowohl in Browserumgebungen als auch darüber hinaus verwendet werden:

- Mozillas [SpiderMonkey](https://spidermonkey.dev/), das in Firefox verwendet wird. Dies war die erste _je_ entwickelte JavaScript-Engine, erstellt von Brendan Eich bei Netscape.
- Googles [V8](https://v8.dev/), das in Google Chrome, Opera, Edge, [Node.js](https://nodejs.org/), [Deno](https://deno.com/), [Electron](https://www.electronjs.org/) und mehr verwendet wird.
- Apples [JavaScriptCore](https://trac.webkit.org/wiki/JavaScriptCore) (auch bekannt als SquirrelFish/Nitro), das in WebKit-Browsern wie Apple Safari und [Bun](https://bun.sh/) verwendet wird.

Neben den oben genannten Implementierungen gibt es auch andere beliebte JavaScript-Engines, wie:

- [Carakan](<https://en.wikipedia.org/wiki/Presto_(browser_engine)#ECMAScript_engines>), verwendet in früheren Versionen von Opera.
- Microsofts [Chakra](<https://en.wikipedia.org/wiki/Chakra_(JScript_engine)>)-Engine, verwendet in Internet Explorer (obwohl die Sprache, die sie implementiert, formal "JScript" genannt wird, um Markenprobleme zu vermeiden). Frühere Versionen von Edge verwendeten eine neue JavaScript-Engine, die verwirrenderweise ebenfalls [Chakra](<https://en.wikipedia.org/wiki/Chakra_(JavaScript_engine)>) genannt wurde.
- [LibJS](https://serenityos.github.io/libjs-website/), verwendet in der Browser-Implementierung von [SerenityOS](https://serenityos.org/).
- Mozillas [Rhino](<https://en.wikipedia.org/wiki/Rhino_(JavaScript_engine)>)-Engine, eine in Java geschriebene JavaScript-Implementierung, die hauptsächlich von Norris Boyd (ebenfalls bei Netscape) erstellt wurde.

Es gibt einige Engines, die speziell für nicht-browserbasierte Zwecke ausgelegt sind:

- [Engine262](https://engine262.js.org/), eine JavaScript-Engine, die in JavaScript geschrieben ist. Sie wird für JavaScript-Entwickler erstellt, um neue Sprachfunktionen zu erkunden und Fehler in der Spezifikation zu finden.
- [Moddable XS](https://www.moddable.com/), verwendet in eingebetteten Systemen wie IoT.
- [QuickJS](https://bellard.org/quickjs/), eine kleine und einbettbare JavaScript-Engine.
- Metas [Hermes](https://github.com/facebook/hermes)-Engine, eine auf [React Native](https://reactnative.dev/docs/hermes) optimierte Engine.
- Oracles [GraalJS](https://www.graalvm.org/), eine leistungsstarke Implementierung auf der GraalVM von Oracle Labs.

JavaScript-Engines stellen eine öffentliche API zur Verfügung, die Anwendungsentwickler nutzen können, um JavaScript in ihre Software zu integrieren. Bei weitem die häufigste Host-Umgebung für JavaScript sind Webbrowser. Webbrowser verwenden in der Regel die öffentliche API, um **Host-Objekte** zu erstellen, die dafür verantwortlich sind, das [DOM](https://dom.spec.whatwg.org/) in JavaScript zu reflektieren.

Eine weitere häufige Anwendung für JavaScript ist als (Web-) serverseitige Skriptsprache. Ein JavaScript-Webserver stellt Host-Objekte dar, die ein HTTP-Request- und Response-Objekte repräsentieren, die dann von einem JavaScript-Programm manipuliert werden können, um Webseiten dynamisch zu generieren. [Node.js](https://nodejs.org/) ist ein beliebtes Beispiel hierfür.

## Shells

Ein JavaScript-Shell ermöglicht es Ihnen, Schnipsel von JavaScript-Code schnell zu testen, ohne eine Webseite neu laden zu müssen. Sie sind äußerst nützlich für die Entwicklung und Fehlersuche von Code.

### Eigenständige JavaScript-Shells

Die folgenden JavaScript-Shells sind eigenständige Umgebungen, ähnlich wie Perl oder Python.

- [Node.js](https://nodejs.org/) - Node.js ist eine Plattform zum einfachen Aufbau von schnellen, skalierbaren Netzwerk-Anwendungen.
- [ShellJS](https://github.com/shelljs/shelljs) - Tragbare Unix-Shell-Befehle für Node.js.

### Browserbasierte JavaScript-Shells

Die folgenden JavaScript-Shells führen Code über die JavaScript-Engine des Browsers aus.

- Firefox verfügt über eine [eingebaute JavaScript-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html), die Mehrzeilenbearbeitung unterstützt.
- [Babel REPL](https://babeljs.io/repl) - Ein browserbasiertes [REPL](https://en.wikipedia.org/wiki/REPL) zum Experimentieren mit zukünftigen JavaScript.
- [TypeScript Playground](https://www.typescriptlang.org/play/) — Ein browserbasierter Spielplatz zum Experimentieren mit neuen JavaScript-Funktionen (über den tsc-Compiler) und TypeScript-Syntax.

## Werkzeuge & Ressourcen

Hilfreiche Werkzeuge zum Schreiben und Debuggen Ihres JavaScript-Codes.

- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html), [JavaScript-Profiler](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html), [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) und mehr.
- [Learn JavaScript](https://learnjavascript.online/)
  - : Eine ausgezeichnete Ressource für angehende Webentwickler — Lernen Sie JavaScript in einer interaktiven Umgebung mit kurzen Lektionen und interaktiven Tests, begleitet von automatisierten Bewertungen. Die ersten 40 Lektionen sind kostenlos, und der komplette Kurs ist gegen eine geringe Einmalgebühr verfügbar.
- [TogetherJS](https://togetherjs.com/)
  - : Kollaboration leicht gemacht. Indem Sie TogetherJS zu Ihrer Seite hinzufügen, können sich Ihre Benutzer in Echtzeit auf einer Website gegenseitig helfen!
- [Stack Overflow](https://stackoverflow.com/questions/tagged/javascript)
  - : Stack Overflow-Fragen, die mit "JavaScript" markiert sind.
- [JSFiddle](https://jsfiddle.net/)
  - : Bearbeiten Sie JavaScript, CSS und HTML und erhalten Sie Live-Ergebnisse. Verwenden Sie externe Ressourcen und arbeiten Sie online mit Ihrem Team zusammen.
- [Plunker](https://plnkr.co/)
  - : Plunker ist eine Online-Community zum Erstellen, Kollaborieren und Teilen Ihrer Webentwicklungs-Ideen. Bearbeiten Sie Ihre JavaScript-, CSS- und HTML-Dateien und erhalten Sie Live-Ergebnisse und Dateistruktur.
- [JS Bin](https://jsbin.com/)
  - : JS Bin ist ein Open-Source-Kollaborations-Webentwicklungs-Debugging-Tool.
- [CodePen](https://codepen.io/)
  - : CodePen ist ein weiteres kollaboratives Webentwicklungs-Tool, das als Live-Ergebnis-Spielwiese verwendet wird.
- [StackBlitz](https://stackblitz.com/)
  - : StackBlitz ist ein weiteres Online-Spielplatz-/Debugging-Tool, das vollständige Anwendungen mit React, Angular usw. hosten und bereitstellen kann.
- [RunJS](https://runjs.app/)
  - : RunJS ist ein Desktop-Spielplatz/Kratzblock-Tool, das Live-Ergebnisse und Zugriff auf sowohl Node als auch Browser-APIs bietet.
