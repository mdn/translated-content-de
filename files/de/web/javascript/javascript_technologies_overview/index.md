---
title: Überblick über JavaScript-Technologien
slug: Web/JavaScript/JavaScript_technologies_overview
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{jsSidebar("Introductory")}}

Während [HTML](/de/docs/Web/HTML) die Struktur und den Inhalt einer Webseite definiert und [CSS](/de/docs/Web/CSS) das Format und die Darstellung festlegt, fügt [JavaScript](/de/docs/Web/JavaScript) einer Webseite Interaktivität hinzu und erstellt reichhaltige Webanwendungen.

Der Begriff "JavaScript" umfasst im Kontext eines Webbrowsers jedoch mehrere sehr unterschiedliche Elemente. Eines davon ist die Kernsprache (ECMAScript), ein anderes ist die Sammlung der [Web APIs](/de/docs/Web/API), einschließlich des DOM (Document Object Model).

## JavaScript, die Kernsprache (ECMAScript)

Die Kernsprache von JavaScript wird vom ECMA TC39-Komitee als eine Sprache namens ECMAScript standardisiert. "ECMAScript" ist der Begriff für den Sprachstandard, aber "ECMAScript" und "JavaScript" können austauschbar verwendet werden.

Diese Kernsprache wird auch in Nicht-Browser-Umgebungen verwendet, zum Beispiel in [Node.js](https://nodejs.org/).

### Was fällt unter den ECMAScript-Bereich?

ECMAScript definiert unter anderem:

- Sprachsyntax (Parserregeln, Schlüsselwörter, Kontrollfluss, Objektliteral-Initialisierung, ...)
- Mechanismen zur Fehlerbehandlung ({{jsxref("Statements/throw", "throw")}}, {{jsxref("Statements/try...catch", "try...catch")}}, Möglichkeit, benutzerdefinierte {{jsxref("Error")}}-Typen zu erstellen)
- Typen (boolean, number, string, function, object, ...)
- Ein prototypbasiertes Vererbungsmechanismus
- Eingebaute Objekte und Funktionen, einschließlich {{jsxref("JSON")}}, {{jsxref("Math")}}, [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)-Methoden, {{jsxref("parseInt")}}, {{jsxref("decodeURI")}}, usw.
- [Strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode)
- Ein [Modulsystem](/de/docs/Web/JavaScript/Guide/Modules)
- Grundlagen des Speichermodells

### Standardisierungsprozess

ECMAScript-Ausgaben werden jährlich von der ECMA-Generalversammlung als Standard genehmigt und veröffentlicht. Die gesamte Entwicklung ist öffentlich auf der [Ecma TC39 GitHub-Organisation](https://github.com/tc39) einsehbar, die Vorschläge, den offiziellen Spezifikationstext und Sitzungsnotizen beherbergt.

Vor der 6. Ausgabe von ECMAScript (bekannt als ES6) wurden Spezifikationen alle paar Jahre veröffentlicht und üblicherweise nach ihren Hauptversionsnummern bezeichnet — ES3, ES5 etc. Nach ES6 wird die Spezifikation nach dem Veröffentlichungsjahr benannt — ES2017, ES2018 usw. ES6 ist gleichbedeutend mit ES2015. _ESNext_ ist ein dynamischer Name, der sich auf die jeweils nächste Version bezieht. ESNext-Features werden korrekterweise als Vorschläge bezeichnet, da die Spezifikation per Definition noch nicht abgeschlossen ist.

Der aktuelle, vom Komitee genehmigte Stand von ECMA-262 ist im PDF- und HTML-Format auf der [ECMA-262 Sprachspezifikationsseite von Ecma International](https://ecma-international.org/publications-and-standards/standards/ecma-262/) verfügbar. ECMA-262 und ECMA-402 werden kontinuierlich gepflegt und von den Spezifikationseditoren aktuell gehalten; die TC39-Webseite hostet die neuesten, aktuellen [ECMA-262](https://tc39.es/ecma262/) und [ECMA-402](https://tc39.es/ecma402/) Versionen.

Neue Sprachfeatures, einschließlich der Einführung neuer Syntaxen und APIs sowie der Überarbeitung bestehender Verhaltensweisen, werden in Form von Vorschlägen erörtert. Jeder Vorschlag durchläuft einen [4-Phasen-Prozess](https://tc39.es/process-document/) und wird typischerweise von JavaScript-Engines in Phase 3 oder Phase 4 implementiert und damit der Öffentlichkeit zur Verfügung gestellt.

Weitere Informationen zur Geschichte von ECMAScript finden Sie im [Wikipedia-Artikel zu ECMAScript](https://en.wikipedia.org/wiki/ECMAScript).

### Internationalisierungs-API

Die [ECMAScript Internationalization API Specification](https://402.ecma-international.org/1.0/) ist eine Ergänzung zur ECMAScript-Sprachspezifikation, die ebenfalls von Ecma TC39 standardisiert wird. Die Internationalisierungs-API bietet Collation (Zeichenfolgenvergleich), Zahlenformatierung und Datums- und Zeitformatierung für JavaScript-Anwendungen, sodass die Anwendungen die Sprache wählen und die Funktionalität an ihre Bedürfnisse anpassen können. Der ursprüngliche Standard wurde im Dezember 2012 genehmigt; der Status der Implementierungen in Browsern wird in der Dokumentation des {{jsxref("Intl")}}-Objekts verfolgt. Die Internationalisierungs-Spezifikation wird heutzutage ebenfalls jährlich ratifiziert, und Browser verbessern ständig ihre Implementierung.

### Verwandte Ressourcen

Es gibt verschiedene Möglichkeiten, wie Sie an der aktuellen Arbeit an der ECMAScript-Sprachspezifikation und der ECMAScript Internationalization API Specification teilnehmen oder sie verfolgen können:

- [ECMAScript Language Specification Repo](https://github.com/tc39/ecma262)
- [ECMAScript Internationalization API Specification Repo](https://github.com/tc39/ecma402)
- [ECMAScript Proposals Repo](https://github.com/tc39/proposals)
- [ECMAScript Konformitätstestsuite Repo](https://github.com/tc39/test262)
- [TC39 Sitzungsnotizen](https://github.com/tc39/notes)
- [ECMAScript-Spezifikationsdiskussion; aktuelle Mailingliste](https://es.discourse.group/)
- [ECMAScript-Spezifikationsdiskussion; historische Mailinglisten-Archive (bis März 2021)](https://esdiscuss.org/)

## DOM-APIs

### WebIDL

Die [WebIDL-Spezifikation](https://webidl.spec.whatwg.org/) bietet die Verbindung zwischen den DOM-Technologien und ECMAScript.

### Der Kern des DOM

Das Document Object Model (DOM) ist eine plattformübergreifende, **sprachunabhängige Konvention** zur Darstellung und Interaktion mit Objekten in HTML-, XHTML- und XML-Dokumenten. Objekte im **DOM-Baum** können angesprochen und mit Hilfe von Methoden auf den Objekten manipuliert werden. Der [W3C](/de/docs/Glossary/W3C) standardisiert das Core Document Object Model, das sprachunabhängige Schnittstellen definiert, die HTML- und XML-Dokumente als Objekte abstrahieren und auch Mechanismen zur Manipulation dieser Abstraktion definieren. Zu den vom DOM definierten Dingen gehören:

- Die Dokumentenstruktur, ein Baum-Modell und die DOM-Event-Architektur im [DOM-Kern](https://dom.spec.whatwg.org/): [`Node`](/de/docs/Web/API/Node), [`Element`](/de/docs/Web/API/Element), [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), [`Document`](/de/docs/Web/API/Document), [`DOMImplementation`](/de/docs/Web/API/DOMImplementation), [`Event`](/de/docs/Web/API/Event), [`EventTarget`](/de/docs/Web/API/EventTarget), …
- Eine weniger strenge Definition der DOM-Event-Architektur sowie spezifische Events in [DOM-Events](https://w3c.github.io/uievents/).
- Weitere Dinge wie [DOM Traversal](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html) und [DOM Range](https://dom.spec.whatwg.org/#ranges).

Aus Sicht von ECMAScript werden die in der DOM-Spezifikation definierten Objekte als "Host-Objekte" bezeichnet.

### HTML-DOM

[HTML](https://html.spec.whatwg.org/multipage/), die Auszeichnungssprache des Webs, wird in Bezug auf das DOM spezifiziert. Aufbauend auf den abstrakten Konzepten, die im DOM-Kern definiert sind, definiert HTML auch die _Bedeutung_ von Elementen. Das HTML-DOM umfasst Dinge wie die `className`-Eigenschaft für HTML-Elemente oder APIs wie [`document.body`](/de/docs/Web/API/Document/body).

Die HTML-Spezifikation definiert auch Einschränkungen für Dokumente; zum Beispiel erfordert sie, dass alle Kinder eines [`<ul>`](/de/docs/Web/HTML/Element/ul)-Elements, das eine ungeordnete Liste darstellt, [`<li>`](/de/docs/Web/HTML/Element/li)-Elemente sind, da diese Listenelemente darstellen. Im Allgemeinen verbietet sie auch die Verwendung von Elementen und Attributen, die nicht in einem Standard definiert sind.

Suchen Sie nach dem [`Document`](/de/docs/Web/API/Document)-Objekt, dem [`Window`](/de/docs/Web/API/Window)-Objekt und den anderen DOM-Elementen? Lesen Sie die [DOM-Dokumentation](/de/docs/Web/API/Document_Object_Model).

## Andere bemerkenswerte APIs

- Die Funktionen [`setTimeout`](/de/docs/Web/API/setTimeout) und [`setInterval`](/de/docs/Web/API/setInterval) wurden zuerst auf der [`Window`](/de/docs/Web/API/Window)-Schnittstelle im HTML-Standard spezifiziert.
- [XMLHttpRequest](https://xhr.spec.whatwg.org/) ermöglicht das Senden asynchroner HTTP-Anfragen.
- Die [Fetch API](https://fetch.spec.whatwg.org/) bietet eine ergonomischere Abstraktion für Netzwerk-Anfragen.
- Das [CSS-Objektmodell](https://drafts.csswg.org/cssom/) abstrahiert CSS-Regeln als Objekte.
- [WebWorkers](https://html.spec.whatwg.org/multipage/workers.html) ermöglichen parallele Berechnungen.
- [WebSockets](https://html.spec.whatwg.org/multipage/#network) ermöglichen bidirektionale Kommunikation auf niedriger Ebene.
- Der [Canvas 2D Context](https://html.spec.whatwg.org/multipage/#2dcontext) ist eine Zeichen-API für [`<canvas>`](/de/docs/Web/HTML/Element/canvas).
- Die [WebAssembly-Schnittstelle](https://webassembly.github.io/spec/js-api/) bietet Werkzeuge für die Kommunikation zwischen JavaScript-Code und [WebAssembly](/de/docs/WebAssembly)-Modulen.

Nicht-Browser-Umgebungen (wie Node.js) haben oft keine DOM-APIs — weil sie nicht mit einem Dokument interagieren — aber sie implementieren dennoch meist viele Web-APIs, wie [`fetch()`](/de/docs/Web/API/Window/fetch) und [`setTimeout()`](/de/docs/Web/API/setTimeout).

## JavaScript-Implementierungen

Es gibt drei Haupt-JavaScript-Implementierungen, die sowohl in Browserumgebungen als auch außerhalb verwendet werden:

- Mozillas [SpiderMonkey](https://spidermonkey.dev/), verwendet in Firefox. Dies war das erste JavaScript-Engine überhaupt, erstellt von Brendan Eich bei Netscape.
- Googles [V8](https://v8.dev/), verwendet in Google Chrome, Opera, Edge, [Node.js](https://nodejs.org/), [Deno](https://deno.com/), [Electron](https://www.electronjs.org/) und mehr.
- Apples [JavaScriptCore](https://trac.webkit.org/wiki/JavaScriptCore) (auch bekannt als SquirrelFish/Nitro), verwendet in WebKit-Browsern wie Apple Safari und [Bun](https://bun.sh/).

Neben den oben genannten Implementierungen gibt es weitere beliebte JavaScript-Engines wie:

- [Carakan](<https://en.wikipedia.org/wiki/Presto_(browser_engine)#ECMAScript_engines>), verwendet in früheren Versionen von Opera.
- Microsofts [Chakra](<https://en.wikipedia.org/wiki/Chakra_(JScript_engine)>)-Engine, verwendet im Internet Explorer (obwohl die Sprache, die sie implementiert, formell als "JScript" bezeichnet wird, um Markenzeichenprobleme zu vermeiden). Frühere Versionen von Edge verwendeten eine neue JavaScript-Engine, verwirrenderweise auch [Chakra](<https://en.wikipedia.org/wiki/Chakra_(JavaScript_engine)>) genannt.
- [LibJS](https://serenityos.github.io/libjs-website/), verwendet in der Browser-Implementierung von [SerenityOS](https://serenityos.org/).
- Mozillas [Rhino](<https://en.wikipedia.org/wiki/Rhino_(JavaScript_engine)>)-Engine, eine JavaScript-Implementierung in Java, hauptsächlich von Norris Boyd (ebenfalls bei Netscape) erstellt.

Es gibt einige Engines, die speziell für Nicht-Browser-Zwecke maßgeschneidert sind:

- [Engine262](https://engine262.js.org/), eine JavaScript-Engine, geschrieben in JavaScript. Sie wurde für JavaScript-Entwickler erstellt, um neue Sprachfeatures zu erkunden und Fehler in der Spezifikation zu finden.
- [Moddable XS](https://www.moddable.com/), verwendet in eingebetteten Systemen wie IoT.
- [QuickJS](https://bellard.org/quickjs/), eine kleine und einbettbare JavaScript-Engine.
- Metas [Hermes](https://github.com/facebook/hermes)-Engine, eine Engine optimiert für [React Native](https://reactnative.dev/docs/hermes).
- Oracles [GraalJS](https://www.graalvm.org/), eine hochperformante Implementierung, gebaut auf der GraalVM von Oracle Labs.

JavaScript-Engines bieten eine öffentliche API an, die Anwendungsentwickler verwenden können, um JavaScript in ihre Software zu integrieren. Bei weitem die häufigste Host-Umgebung für JavaScript sind Webbrowser. Webbrowser verwenden typischerweise die öffentliche API, um **Host-Objekte** zu erstellen, die dafür verantwortlich sind, das [DOM](https://dom.spec.whatwg.org/) in JavaScript zu reflektieren.

Eine weitere häufige Anwendung für JavaScript ist als (Web-)Server-seitige Skriptsprache. Ein JavaScript-Webserver stellt Host-Objekte dar, die ein HTTP-Anfrage- und Antwortobjekte darstellen, die dann von einem JavaScript-Programm manipuliert werden können, um dynamisch Webseiten zu generieren. [Node.js](https://nodejs.org/) ist ein populäres Beispiel dafür.

## Shells

Ein JavaScript-Shell ermöglicht es Ihnen, schnell JavaScript-Code-Schnipsel zu testen, ohne eine Webseite neu laden zu müssen. Sie sind äußerst nützlich für die Entwicklung und das Debuggen von Code.

### Eigenständige JavaScript-Shells

Die folgenden JavaScript-Shells sind eigenständige Umgebungen, ähnlich wie Perl oder Python.

- [Node.js](https://nodejs.org/) - Node.js ist eine Plattform zur einfachen Erstellung schneller, skalierbarer Netzwerkanwendungen.
- [ShellJS](https://github.com/shelljs/shelljs) - Tragbare Unix-Shell-Befehle für Node.js.

### Browserbasierte JavaScript-Shells

Die folgenden JavaScript-Shells führen Code über die JavaScript-Engine des Browsers aus.

- Firefox verfügt über eine [eingebaute JavaScript-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html), die die Bearbeitung über mehrere Zeilen unterstützt.
- [Babel REPL](https://babeljs.io/repl) - Ein browserbasiertes [REPL](https://en.wikipedia.org/wiki/REPL), um mit zukünftigen JavaScript-Features zu experimentieren.
- [TypeScript Playground](https://www.typescriptlang.org/play/) — Ein browserbasierter Spielplatz, um sowohl mit neuen JavaScript-Features als auch mit TypeScript-Syntax zu experimentieren (über den tsc-Compiler).

## Werkzeuge & Ressourcen

Hilfreiche Werkzeuge zum Schreiben und Debuggen Ihres JavaScript-Codes.

- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html), [JavaScript Profiler](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html), [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) und mehr.
- [JavaScript lernen](https://learnjavascript.online/)
  - : Eine hervorragende Ressource für angehende Webentwickler — Lernen Sie JavaScript in einer interaktiven Umgebung mit kurzen Lektionen und interaktiven Tests, begleitet durch automatisierte Bewertung. Die ersten 40 Lektionen sind kostenlos, und der vollständige Kurs ist für eine kleine einmalige Zahlung erhältlich.
- [TogetherJS](https://togetherjs.com/)
  - : Zusammenarbeit leicht gemacht. Indem Sie TogetherJS zu Ihrer Seite hinzufügen, können Ihre Nutzer sich in Echtzeit auf einer Website helfen!
- [Stack Overflow](https://stackoverflow.com/questions/tagged/javascript)
  - : Stack Overflow-Fragen, die mit "JavaScript" getaggt sind.
- [JSFiddle](https://jsfiddle.net/)
  - : Bearbeiten Sie JavaScript, CSS und HTML und erhalten Sie Live-Ergebnisse. Verwenden Sie externe Ressourcen und arbeiten Sie online mit Ihrem Team zusammen.
- [Plunker](https://plnkr.co/)
  - : Plunker ist eine Online-Community zum Erstellen, Zusammenarbeiten und Teilen Ihrer Webentwicklungs-Ideen. Bearbeiten Sie Ihre JavaScript-, CSS- und HTML-Dateien und erhalten Sie Live-Ergebnisse und Dateistruktur.
- [JSBin](https://jsbin.com/)
  - : JS Bin ist ein Open-Source-Tool zum kollaborativen Debuggen von Webentwicklungen.
- [Codepen](https://codepen.io/)
  - : Codepen ist ein weiteres kollaboratives Webentwicklungstool, das als Spielplatz für Live-Ergebnisse verwendet wird.
- [StackBlitz](https://stackblitz.com/)
  - : StackBlitz ist ein weiteres Online-Entwicklungstool/Debugging-Tool, das vollständige Anwendungen mit React, Angular usw. hosten und bereitstellen kann.
- [RunJS](https://runjs.app/)
  - : RunJS ist ein Desktop-Spielplatz/Schnellschreibblock-Tool, das Live-Ergebnisse bereitstellt und Zugriff auf sowohl Node- als auch Browser-APIs bietet.
