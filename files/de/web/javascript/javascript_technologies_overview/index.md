---
title: Übersicht über JavaScript-Technologien
slug: Web/JavaScript/JavaScript_technologies_overview
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{jsSidebar("Introductory")}}

Während [HTML](/de/docs/Web/HTML) die Struktur und den Inhalt einer Webseite definiert und [CSS](/de/docs/Web/CSS) das Format und das Erscheinungsbild festlegt, fügt [JavaScript](/de/docs/Web/JavaScript) einer Webseite Interaktivität hinzu und erstellt reichhaltige Webanwendungen.

Der Begriff "JavaScript", wie er im Kontext eines Webbrowsers verstanden wird, umfasst jedoch mehrere sehr unterschiedliche Elemente. Eines davon ist die Kernsprache (ECMAScript), ein anderes ist die Sammlung der [Web-APIs](/de/docs/Web/API), einschließlich des DOM (Document Object Model).

## JavaScript, die Kernsprache (ECMAScript)

Die Kernsprache von JavaScript wird vom ECMA TC39-Komitee als eine Sprache namens ECMAScript standardisiert. "ECMAScript" ist der Begriff für den Sprachstandard, aber "ECMAScript" und "JavaScript" können synonym verwendet werden.

Diese Kernsprache wird auch in nicht-Browser-Umgebungen verwendet, zum Beispiel in [Node.js](https://nodejs.org/).

### Was fällt unter den Rahmen von ECMAScript?

Unter anderem definiert ECMAScript:

- Sprachsyntax (Parsing-Regeln, Schlüsselwörter, Kontrollfluss, Initialisierung von Objektliteralen, ...)
- Fehlermanagement-Mechanismen ({{jsxref("Statements/throw", "throw")}}, {{jsxref("Statements/try...catch", "try...catch")}}, Möglichkeit zur Erstellung benutzerdefinierter {{jsxref("Error")}}-Typen)
- Typen (boolean, number, string, function, object, ...)
- Ein Prototyp-basiertes Vererbungssystem
- Eingebaute Objekte und Funktionen, einschließlich {{jsxref("JSON")}}, {{jsxref("Math")}}, [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)-Methoden, {{jsxref("parseInt")}}, {{jsxref("decodeURI")}}, etc.
- [Strikter Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)
- Ein [Modulsystem](/de/docs/Web/JavaScript/Guide/Modules)
- Grundlegendes Speichermodell

### Standardisierungsprozess

ECMAScript-Ausgaben werden jährlich von der ECMA Generalversammlung genehmigt und als Standard veröffentlicht. Alle Entwicklungen sind öffentlich auf der [Ecma TC39 GitHub-Organisation](https://github.com/tc39) verfügbar, die Vorschläge, den offiziellen Spezifikationstext und Sitzungsnotizen enthält.

Vor der 6. Ausgabe von ECMAScript (bekannt als ES6) wurden Spezifikationen alle paar Jahre veröffentlicht und üblicherweise nach ihren Hauptversionen nummeriert — ES3, ES5, etc. Nach ES6 wird die Spezifikation nach dem Veröffentlichungsjahr benannt — ES2017, ES2018, etc. ES6 ist synonym mit ES2015. _ESNext_ ist ein dynamischer Name, der sich auf die jeweils nächste Version zur Zeit des Schreibens bezieht. ESNext-Funktionen werden korrekterweise als Vorschläge bezeichnet, da die Spezifikation per Definition noch nicht abgeschlossen ist.

Die aktuelle von der Kommission genehmigte Momentaufnahme von ECMA-262 ist im PDF- und HTML-Format auf der [ECMA-262-Sprachspezifikationsseite von Ecma International](https://ecma-international.org/publications-and-standards/standards/ecma-262/) verfügbar. ECMA-262 und ECMA-402 werden kontinuierlich gepflegt und von den Spezifikationsredakteuren aktualisiert; die TC39-Website hostet die neuesten, aktuellsten [ECMA-262](https://tc39.es/ecma262/) und [ECMA-402](https://tc39.es/ecma402/) Versionen.

Neue Sprachmerkmale, einschließlich der Einführung neuer Syntaxen und APIs sowie der Überarbeitung bestehender Verhaltensweisen, werden in Form von Vorschlägen diskutiert. Jeder Vorschlag durchläuft einen [4-Phasen-Prozess](https://tc39.es/process-document/), und wird typischerweise von JavaScript-Engines in Phase 3 oder Phase 4 implementiert und steht somit der Öffentlichkeit zur Verfügung.

Weitere Informationen zur ECMAScript-Geschichte finden Sie im [Wikipedia-Eintrag zu ECMAScript](https://en.wikipedia.org/wiki/ECMAScript).

### Internationalisierung API

Die [ECMAScript Internationalization API Specification](https://402.ecma-international.org/1.0/) ist eine Ergänzung zur ECMAScript-Sprachspezifikation, die ebenfalls von Ecma TC39 standardisiert wurde. Die Internationalisierung API bietet Sortierung (Zeichenfolgenvergleich), Zahlenformatierung und Datums- und Zeitformatierung für JavaScript-Anwendungen und lässt die Anwendungen die Sprache wählen und die Funktionalität an ihre Bedürfnisse anpassen. Der ursprüngliche Standard wurde im Dezember 2012 genehmigt; der Status der Implementierungen in Browsern wird in der Dokumentation über das {{jsxref("Intl")}}-Objekt verfolgt. Die Internationalisierungs-Spezifikation wird heutzutage ebenfalls jährlich ratifiziert und Browser verbessern laufend ihre Implementierung.

### Verwandte Ressourcen

Es gibt verschiedene Möglichkeiten, wie Sie an der aktuellen Arbeit an der ECMAScript-Sprachspezifikation und der ECMAScript-Internationalisierungs-API-Spezifikation teilnehmen oder diese verfolgen können:

- [ECMAScript Language Specification repo](https://github.com/tc39/ecma262)
- [ECMAScript Internationalization API Specification repo](https://github.com/tc39/ecma402)
- [ECMAScript proposals repo](https://github.com/tc39/proposals)
- [ECMAScript conformance test suite repo](https://github.com/tc39/test262)
- [TC39 meeting notes](https://github.com/tc39/notes)
- [ECMAScript spec discussion; current mailing list](https://es.discourse.group/)
- [ECMAScript spec discussion; historical mailing-list archives (bis März 2021)](https://esdiscuss.org/)

## DOM-APIs

### WebIDL

Die [WebIDL-Spezifikation](https://webidl.spec.whatwg.org/) stellt die Verbindung zwischen den DOM-Technologien und ECMAScript her.

### Der Kern des DOM

Das Document Object Model (DOM) ist eine plattformübergreifende, **sprachunabhängige Konvention** zur Darstellung und Interaktion mit Objekten in HTML-, XHTML- und XML-Dokumenten. Objekte im **DOM-Baum** können durch Methoden an den Objekten adressiert und manipuliert werden. Der [W3C](/de/docs/Glossary/W3C) standardisiert das Kern-Document Object Model, das sprachunabhängige Schnittstellen definiert, die HTML- und XML-Dokumente als Objekte abstrahieren, und auch Mechanismen zur Manipulation dieser Abstraktion definiert. Zu den vom DOM definierten Dingen gehören:

- Die Dokumentstruktur, ein Baummodell und die DOM-Event-Architektur im [DOM-Kern](https://dom.spec.whatwg.org/): [`Node`](/de/docs/Web/API/Node), [`Element`](/de/docs/Web/API/Element), [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), [`Document`](/de/docs/Web/API/Document), [`DOMImplementation`](/de/docs/Web/API/DOMImplementation), [`Event`](/de/docs/Web/API/Event), [`EventTarget`](/de/docs/Web/API/EventTarget), …
- Eine weniger strenge Definition der DOM-Event-Architektur sowie spezifische Ereignisse in [DOM-Ereignisse](https://w3c.github.io/uievents/).
- Andere Dinge wie [DOM-Traversierung](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html) und [DOM-Range](https://dom.spec.whatwg.org/#ranges).

Aus Sicht von ECMAScript werden in der DOM-Spezifikation definierte Objekte als "Host-Objekte" bezeichnet.

### HTML-DOM

[HTML](https://html.spec.whatwg.org/multipage/), die Markup-Sprache des Webs, wird in Bezug auf das DOM spezifiziert. Über den abstrakten Konzepten des DOM-Kerns definiert HTML auch die _Bedeutung_ der Elemente. Das HTML-DOM umfasst Dinge wie die `className`-Eigenschaft bei HTML-Elementen oder APIs wie [`document.body`](/de/docs/Web/API/Document/body).

Die HTML-Spezifikation definiert auch Einschränkungen für Dokumente; beispielsweise erfordert sie, dass alle Kinder eines [`<ul>`](/de/docs/Web/HTML/Element/ul)-Elements, das eine ungeordnete Liste darstellt, [`<li>`](/de/docs/Web/HTML/Element/li)-Elemente sind, da diese Listenelemente darstellen. Im Allgemeinen verbietet sie auch die Verwendung von Elementen und Attributen, die nicht in einem Standard definiert sind.

Suchen Sie das [`Document`](/de/docs/Web/API/Document)-Objekt, das [`Window`](/de/docs/Web/API/Window)-Objekt und die anderen DOM-Elemente? Lesen Sie die [DOM-Dokumentation](/de/docs/Web/API/Document_Object_Model).

## Andere bemerkenswerte APIs

- Die Funktionen [`setTimeout`](/de/docs/Web/API/setTimeout) und [`setInterval`](/de/docs/Web/API/setInterval) wurden zuerst in der [`Window`](/de/docs/Web/API/Window)-Schnittstelle im HTML-Standard spezifiziert.
- [XMLHttpRequest](https://xhr.spec.whatwg.org/) ermöglicht das Versenden von asynchronen HTTP-Anfragen.
- Die [Fetch API](https://fetch.spec.whatwg.org/) bietet eine ergonomischere Abstraktion für Netzwerk-Anfragen.
- Das [CSS Object Model](https://drafts.csswg.org/cssom/) abstrahiert CSS-Regeln als Objekte.
- [WebWorkers](https://html.spec.whatwg.org/multipage/workers.html) ermöglichen parallele Berechnungen.
- [WebSockets](https://html.spec.whatwg.org/multipage/#network) ermöglichen eine bidirektionale Kommunikation auf niedriger Ebene.
- Der [Canvas 2D Context](https://html.spec.whatwg.org/multipage//#2dcontext) ist eine Zeichen-API für [`<canvas>`](/de/docs/Web/HTML/Element/canvas).
- Die [WebAssembly-Schnittstelle](https://webassembly.github.io/spec/js-api/) bietet Werkzeuge für die Kommunikation zwischen JavaScript-Code und [WebAssembly](/de/docs/WebAssembly)-Modulen.

Nicht-Browser-Umgebungen (wie Node.js) haben oft keine DOM-APIs — da sie nicht mit einem Dokument interagieren —, aber sie implementieren in der Regel viele Web-APIs, wie zum Beispiel [`fetch()`](/de/docs/Web/API/Window/fetch) und [`setTimeout()`](/de/docs/Web/API/setTimeout).

## JavaScript-Implementierungen

Es gibt drei Haupt-JavaScript-Implementierungen, die in Browser-Umgebungen und darüber hinaus verwendet werden:

- Mozillas [SpiderMonkey](https://spidermonkey.dev/), verwendet in Firefox. Dies war die erste _jemals_ JavaScript-Engine, erstellt von Brendan Eich bei Netscape.
- Googles [V8](https://v8.dev/), verwendet in Google Chrome, Opera, Edge, [Node.js](https://nodejs.org/), [Deno](https://deno.com/), [Electron](https://www.electronjs.org/) und mehr.
- Apples [JavaScriptCore](https://trac.webkit.org/wiki/JavaScriptCore) (auch bekannt als SquirrelFish/Nitro), verwendet in WebKit-Browsern wie Apple Safari und [Bun](https://bun.sh/).

Neben den oben genannten Implementierungen gibt es weitere beliebte JavaScript-Engines wie:

- [Carakan](<https://en.wikipedia.org/wiki/Presto_(browser_engine)#ECMAScript_engines>), verwendet in älteren Versionen von Opera.
- Microsofts [Chakra](<https://en.wikipedia.org/wiki/Chakra_(JScript_engine)>) Engine, verwendet in Internet Explorer (obwohl die Sprache, die sie implementiert, formell "JScript" genannt wird, um Markenprobleme zu vermeiden). Frühere Versionen von Edge verwendeten eine neue JavaScript-Engine, die verwirrenderweise auch [Chakra](<https://en.wikipedia.org/wiki/Chakra_(JavaScript_engine)>) genannt wurde.
- [LibJS](https://serenityos.github.io/libjs-website/), verwendet in der Browser-Implementierung von [SerenityOS](https://serenityos.org/).
- Mozillas [Rhino](<https://en.wikipedia.org/wiki/Rhino_(JavaScript_engine)>) Engine, eine in Java geschriebene JavaScript-Implementierung, hauptsächlich erstellt von Norris Boyd (ebenfalls bei Netscape).

Es gibt einige Engines, die speziell für Nicht-Browser-Zwecke zugeschnitten sind:

- [Engine262](https://engine262.js.org/), eine in JavaScript geschriebene JavaScript-Engine. Sie wurde erstellt, um JavaScript-Entwicklern die Erforschung neuer Sprachmerkmale und das Finden von Spezifikationsfehlern zu ermöglichen.
- [Moddable XS](https://www.moddable.com/), verwendet in eingebetteten Systemen wie IoT.
- [QuickJS](https://bellard.org/quickjs/), eine kleine und einbettbare JavaScript-Engine.
- Metas [Hermes](https://github.com/facebook/hermes) Engine, eine Engine, die für [React Native](https://reactnative.dev/docs/hermes) optimiert ist.
- Oracles [GraalJS](https://www.graalvm.org/), eine hochleistungsfähige Implementierung, die auf der GraalVM von Oracle Labs basiert.

JavaScript-Engines bieten eine öffentliche API, die Anwendungsentwickler verwenden können, um JavaScript in ihre Software zu integrieren. Bei weitem die häufigste Host-Umgebung für JavaScript sind Webbrowser. Webbrowser verwenden typischerweise die öffentliche API, um **Host-Objekte** zu erstellen, die dafür verantwortlich sind, das [DOM](https://dom.spec.whatwg.org/) in JavaScript zu widerspiegeln.

Eine weitere häufige Anwendung für JavaScript ist eine (Web-)Server-seitige Skriptsprache. Ein JavaScript-Webserver stellt Host-Objekte bereit, die ein HTTP-Anfrage- und Antwortobjekt darstellen, das dann von einem JavaScript-Programm manipuliert werden kann, um Webseiten dynamisch zu generieren. [Node.js](https://nodejs.org/) ist ein bekanntes Beispiel hierfür.

## Shells

Eine JavaScript-Shell ermöglicht es Ihnen, Code-Snippets in JavaScript schnell zu testen, ohne eine Webseite neu laden zu müssen. Sie sind extrem nützlich für die Entwicklung und das Debuggen von Code.

### Standalone JavaScript-Shells

Die folgenden JavaScript-Shells sind eigenständige Umgebungen, ähnlich wie Perl oder Python.

- [Node.js](https://nodejs.org/) - Node.js ist eine Plattform zur einfachen Erstellung schneller und skalierbarer Netzwerk-Anwendungen.
- [ShellJS](https://github.com/shelljs/shelljs) - Tragbare Unix-Shell-Befehle für Node.js.

### Browserbasierte JavaScript-Shells

Die folgenden JavaScript-Shells führen Code über die JavaScript-Engine des Browsers aus.

- Firefox verfügt über eine [eingebaute JavaScript-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html), die Multi-Line-Bearbeitung unterstützt.
- [Babel REPL](https://babeljs.io/repl) - Ein browserbasierter [REPL](https://en.wikipedia.org/wiki/REPL), um mit zukünftigen JavaScript-Funktionen zu experimentieren.
- [TypeScript-Spielplatz](https://www.typescriptlang.org/play/) — Ein browserbasierter Spielplatz, um sowohl neue JavaScript-Funktionen (über den tsc Compiler) als auch TypeScript-Syntax auszuprobieren.

## Tools & Ressourcen

Hilfreiche Werkzeuge zum Schreiben und Debuggen Ihres JavaScript-Codes.

- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html), [JavaScript-Profiler](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html), [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html), und mehr.
- [Lernen Sie JavaScript](https://learnjavascript.online/)
  - : Eine ausgezeichnete Ressource für angehende Webentwickler – Lernen Sie JavaScript in einer interaktiven Umgebung mit kurzen Lektionen und interaktiven Tests, geführt durch automatisierte Bewertung. Die ersten 40 Lektionen sind kostenlos, und den vollständigen Kurs gibt es gegen eine geringe Einmalzahlung.
- [TogetherJS](https://togetherjs.com/)
  - : Zusammenarbeit leicht gemacht. Indem Sie TogetherJS zu Ihrer Seite hinzufügen, können sich Ihre Benutzer in Echtzeit auf einer Webseite gegenseitig helfen!
- [Stack Overflow](https://stackoverflow.com/questions/tagged/javascript)
  - : Stack Overflow-Fragen mit dem Tag "JavaScript".
- [JSFiddle](https://jsfiddle.net/)
  - : Bearbeiten Sie JavaScript, CSS und HTML und erhalten Sie Live-Ergebnisse. Verwenden Sie externe Ressourcen und arbeiten Sie online mit Ihrem Team zusammen.
- [Plunker](https://plnkr.co/)
  - : Plunker ist eine Online-Community zum Erstellen, Zusammenarbeiten und Teilen Ihrer Webentwicklungsideen. Bearbeiten Sie Ihre JavaScript-, CSS- und HTML-Dateien und erhalten Sie Live-Ergebnisse und Dateistruktur.
- [JSBin](https://jsbin.com/)
  - : JS Bin ist ein Open-Source-Kollaborations-Tool für die Webentwicklung.
- [Codepen](https://codepen.io/)
  - : Codepen ist ein weiteres kollaboratives Webentwicklungstool, das als Live-Ergebnis-Spielplatz verwendet wird.
- [StackBlitz](https://stackblitz.com/)
  - : StackBlitz ist ein weiteres Online-Playground/Debbuging-Tool, das komplette Full-Stack-Anwendungen mit React, Angular etc. hosten und bereitstellen kann.
- [RunJS](https://runjs.app/)
  - : RunJS ist ein Desktop-Playground/Scratchpad-Tool, das Live-Ergebnisse und Zugriff auf sowohl Node- als auch Browser-APIs bietet.
