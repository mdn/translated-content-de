---
title: JavaScript-Technologien Übersicht
slug: Web/JavaScript/JavaScript_technologies_overview
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{jsSidebar("Introductory")}}

Während [HTML](/de/docs/Web/HTML) die Struktur und den Inhalt einer Webseite definiert und [CSS](/de/docs/Web/CSS) die Formatierung und das Erscheinungsbild festlegt, fügt [JavaScript](/de/docs/Web/JavaScript) einer Webseite Interaktivität hinzu und erstellt reichhaltige Webanwendungen.

Der Begriff "JavaScript" umfasst im Kontext eines Webbrowsers jedoch mehrere sehr unterschiedliche Elemente. Eines davon ist die Kernsprache (ECMAScript), ein anderes ist die Sammlung der [Web-APIs](/de/docs/Web/API), einschließlich des DOM (Document Object Model).

## JavaScript, die Kernsprache (ECMAScript)

Die Kernsprache von JavaScript wird durch das ECMA TC39-Komitee als eine Sprache namens ECMAScript standardisiert. "ECMAScript" ist der Begriff für den Sprachstandard, aber "ECMAScript" und "JavaScript" können austauschbar verwendet werden.

Diese Kernsprache wird auch in nicht-browserbasierten Umgebungen verwendet, beispielsweise in [Node.js](https://nodejs.org/).

### Was fällt unter den ECMAScript-Bereich?

Unter anderem definiert ECMAScript:

- Sprachsyntax (Parsing-Regeln, Schlüsselwörter, Kontrollfluss, Initialisierung von Objektliteralen, ...)
- Fehlerbehandlungsmechanismen ({{jsxref("Statements/throw", "throw")}}, {{jsxref("Statements/try...catch", "try...catch")}}, Möglichkeit zur Erstellung benutzerdefinierter {{jsxref("Error")}}-Typen)
- Typen (boolean, number, string, function, object, ...)
- Ein auf Prototypen basierendes Vererbungssystem
- Eingebaute Objekte und Funktionen, einschließlich {{jsxref("JSON")}}, {{jsxref("Math")}}, [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)-Methoden, {{jsxref("parseInt")}}, {{jsxref("decodeURI")}}, etc.
- [Strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)
- Ein [Modulsystem](/de/docs/Web/JavaScript/Guide/Modules)
- Grundlegendes Speichermodell

### Standardisierungsprozess

ECMAScript-Ausgaben werden von der ECMA-Generalversammlung jährlich genehmigt und als Standard veröffentlicht. Alle Entwicklungen sind öffentlich auf der [Ecma TC39 GitHub-Organisation](https://github.com/tc39), die Vorschläge, den offiziellen Spezifikationstext und Sitzungsnotizen beherbergt.

Vor der 6. Ausgabe von ECMAScript (bekannt als ES6) wurden Spezifikationen alle paar Jahre veröffentlicht und werden üblicherweise nach ihren Hauptversionsnummern benannt — ES3, ES5, etc. Nach ES6 wird die Spezifikation nach dem Veröffentlichungsjahr benannt — ES2017, ES2018, etc. ES6 ist gleichbedeutend mit ES2015. _ESNext_ ist ein dynamischer Name, der sich auf die jeweils nächste Version zum Zeitpunkt der Erstellung bezieht. ESNext-Features werden korrekterweise als Vorschläge bezeichnet, da die Spezifikation per Definition noch nicht abgeschlossen ist.

Der aktuelle, vom Komitee genehmigte Schnappschuss von ECMA-262 ist im PDF- und HTML-Format auf der [ECMA-262-Sprachspezifikationsseite](https://ecma-international.org/publications-and-standards/standards/ecma-262/) von Ecma International verfügbar. ECMA-262 und ECMA-402 werden kontinuierlich gepflegt und von den Spezifikations-Redakteuren auf dem neuesten Stand gehalten; die TC39-Website hostet die neuesten, aktuellen Versionen von [ECMA-262](https://tc39.es/ecma262/) und [ECMA-402](https://tc39.es/ecma402/).

Neue Sprachfunktionen, einschließlich der Einführung neuer Syntaxen und APIs sowie der Überarbeitung bestehender Verhaltensweisen, werden in Form von Vorschlägen diskutiert. Jeder Vorschlag durchläuft einen [4-stufigen Prozess](https://tc39.es/process-document/), und wird in der Regel von JavaScript-Engines in Stufe 3 oder Stufe 4 implementiert und ist somit für die Öffentlichkeit zugänglich.

Weitere Informationen zur Geschichte von ECMAScript finden Sie im [ECMAScript-Eintrag bei Wikipedia](https://en.wikipedia.org/wiki/ECMAScript).

### Internationalisierungs-API

Die [ECMAScript Internationalization API Specification](https://402.ecma-international.org/1.0/) ist eine Ergänzung zur ECMAScript-Sprachspezifikation, die ebenfalls von Ecma TC39 standardisiert wurde. Die Internationalisierungs-API bietet Collation (Zeichenfolgenvergleich), Zahlenformatierung und Datums- und Zeitformatierung für JavaScript-Anwendungen, sodass Anwendungen die Sprache wählen und die Funktionalität an ihre Bedürfnisse anpassen können. Der ursprüngliche Standard wurde im Dezember 2012 genehmigt; der Status der Implementierungen in Browsern wird in der Dokumentation des {{jsxref("Intl")}}-Objekts verfolgt. Die Internationalisierungsspezifikation wird heutzutage ebenfalls jährlich ratifiziert und Browser verbessern ständig ihre Implementierung.

### Verwandte Ressourcen

Es gibt verschiedene Möglichkeiten, wie Sie an der aktuellen Arbeit zur ECMAScript-Sprachspezifikation und zur ECMAScript-Internationalisierungs-API-Spezifikation teilnehmen oder diese einfach verfolgen und verwandte Ressourcen einsehen können:

- [ECMAScript Language Specification Repository](https://github.com/tc39/ecma262)
- [ECMAScript Internationalization API Specification Repository](https://github.com/tc39/ecma402)
- [ECMAScript Proposal Repository](https://github.com/tc39/proposals)
- [ECMAScript Konformitätstest-Suite Repository](https://github.com/tc39/test262)
- [TC39 Sitzungsnotizen](https://github.com/tc39/notes)
- [ECMAScript Spec Diskussion; aktuelle Mailingliste](https://es.discourse.group/)
- [ECMAScript Spec Diskussion; historische Mailing-Listen-Archive (bis März 2021)](https://esdiscuss.org/)

## DOM-APIs

### WebIDL

Die [WebIDL-Spezifikation](https://webidl.spec.whatwg.org/) fungiert als Bindeglied zwischen den DOM-Technologien und ECMAScript.

### Der Kern des DOM

Das Document Object Model (DOM) ist eine plattformübergreifende, **sprachenunabhängige Konvention**, um Objekte in HTML-, XHTML- und XML-Dokumenten darzustellen und mit ihnen zu interagieren. Objekte im **DOM-Baum** können durch Methoden auf den Objekten angesprochen und manipuliert werden. Das {{Glossary("W3C", "W3C")}} standardisiert das Core Document Object Model, das sprachanagnostische Schnittstellen definiert, die HTML- und XML-Dokumente als Objekte abstrahieren und außerdem Mechanismen zur Manipulation dieser Abstraktion definiert. Zu den vom DOM definierten Dingen gehören:

- Die Dokumentstruktur, ein Baum-Modell und die DOM-Ereignisarchitektur im [DOM-Kern](https://dom.spec.whatwg.org/): [`Node`](/de/docs/Web/API/Node), [`Element`](/de/docs/Web/API/Element), [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), [`Document`](/de/docs/Web/API/Document), [`DOMImplementation`](/de/docs/Web/API/DOMImplementation), [`Event`](/de/docs/Web/API/Event), [`EventTarget`](/de/docs/Web/API/EventTarget), …
- Eine weniger rigorose Definition der DOM-Ereignisarchitektur sowie spezifische Ereignisse in [DOM-Ereignissen](https://w3c.github.io/uievents/).
- Weitere Dinge wie [DOM Traversal](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html) und [DOM Range](https://dom.spec.whatwg.org/#ranges).

Aus der Sicht von ECMAScript werden die Objekte, die in der DOM-Spezifikation definiert sind, als "Host-Objekte" bezeichnet.

### HTML-DOM

[HTML](https://html.spec.whatwg.org/multipage/), die Markup-Sprache des Webs, wird in Bezug auf das DOM spezifiziert. Über die im DOM-Kern definierten abstrakten Konzepte hinaus definiert HTML auch die _Bedeutung_ von Elementen. Das HTML-DOM umfasst Dinge wie die `className`-Eigenschaft an HTML-Elementen oder APIs wie [`Document.body`](/de/docs/Web/API/Document/body).

Die HTML-Spezifikation definiert auch Einschränkungen für Dokumente; zum Beispiel erfordert sie, dass alle Kinder eines {{htmlelement("ul")}}-Elements, das eine ungeordnete Liste darstellt, {{htmlelement("li")}}-Elemente sind, da diese Listenelemente darstellen. Im Allgemeinen verbietet sie auch die Verwendung von Elementen und Attributen, die in keinem Standard definiert sind.

Suchen Sie nach dem [`Document`](/de/docs/Web/API/Document)-Objekt, dem [`Window`](/de/docs/Web/API/Window)-Objekt und den anderen DOM-Elementen? Lesen Sie die [DOM-Dokumentation](/de/docs/Web/API/Document_Object_Model).

## Weitere bemerkenswerte APIs

- Die Funktionen [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setInterval()`](/de/docs/Web/API/Window/setInterval) wurden zuerst auf der [`Window`](/de/docs/Web/API/Window)-Schnittstelle im HTML-Standard spezifiziert.
- [XMLHttpRequest](https://xhr.spec.whatwg.org/) ermöglicht das Senden asynchroner HTTP-Anfragen.
- Die [Fetch-API](https://fetch.spec.whatwg.org/) bietet eine ergonomischere Abstraktion für Netzwerk-Anfragen.
- Das [CSS-Objektmodell](https://drafts.csswg.org/cssom/) abstrahiert CSS-Regeln als Objekte.
- [Web-Worker](https://html.spec.whatwg.org/multipage/workers.html) ermöglichen parallele Berechnungen.
- [WebSockets](https://html.spec.whatwg.org/multipage/#network) ermöglichen eine bidirektionale Kommunikation auf niedriger Ebene.
- Der [Canvas 2D Context](https://html.spec.whatwg.org/multipage//#2dcontext) ist eine Zeichen-API für [`<canvas>`](/de/docs/Web/HTML/Element/canvas).
- Die [WebAssembly-Schnittstelle](https://webassembly.github.io/spec/js-api/) bietet Hilfsprogramme zur Kommunikation zwischen JavaScript-Code und [WebAssembly](/de/docs/WebAssembly)-Modulen.

Nicht-browserbasierte Umgebungen (wie Node.js) haben häufig keine DOM-APIs – da sie nicht mit einem Dokument interagieren – implementieren aber immer noch viele Web-APIs, wie z.B. [`fetch()`](/de/docs/Web/API/Window/fetch) und [`setTimeout()`](/de/docs/Web/API/Window/setTimeout).

## JavaScript-Implementierungen

Es gibt drei Haupt-JavaScript-Implementierungen, die in Browserumgebungen und darüber hinaus verwendet werden:

- Mozillas [SpiderMonkey](https://spidermonkey.dev/), verwendet in Firefox. Dies war die erste _jemals_ JavaScript-Engine, erstellt von Brendan Eich bei Netscape.
- Googles [V8](https://v8.dev/), verwendet in Google Chrome, Opera, Edge, [Node.js](https://nodejs.org/), [Deno](https://deno.com/), [Electron](https://www.electronjs.org/) und mehr.
- Apples [JavaScriptCore](https://trac.webkit.org/wiki/JavaScriptCore) (auch bekannt als SquirrelFish/Nitro), verwendet in WebKit-Browsern wie Apple Safari und [Bun](https://bun.sh/).

Neben den oben genannten Implementierungen gibt es weitere beliebte JavaScript-Engines wie:

- [Carakan](<https://en.wikipedia.org/wiki/Presto_(browser_engine)#ECMAScript_engines>), verwendet in früheren Versionen von Opera.
- Microsofts [Chakra](<https://en.wikipedia.org/wiki/Chakra_(JScript_engine)>) Engine, verwendet im Internet Explorer (obwohl die implementierte Sprache aus markenrechtlichen Gründen formal "JScript" genannt wird). Frühere Versionen von Edge verwendeten eine neue JavaScript-Engine, die verwirrenderweise ebenfalls [Chakra](<https://en.wikipedia.org/wiki/Chakra_(JavaScript_engine)>) genannt wird.
- [LibJS](https://serenityos.github.io/libjs-website/), verwendet in der Browser-Implementierung von [SerenityOS](https://serenityos.org/).
- Mozillas [Rhino](<https://en.wikipedia.org/wiki/Rhino_(JavaScript_engine)>) Engine, eine in Java geschriebene JavaScript-Implementierung, erstellt hauptsächlich von Norris Boyd (ebenfalls bei Netscape).

Es gibt einige Engines, die speziell für nicht-browserbasierte Zwecke maßgeschneidert sind:

- [Engine262](https://engine262.js.org/), eine in JavaScript geschriebene JavaScript-Engine. Sie wurde erstellt, um JavaScript-Entwicklern die Erkundung neuer Sprachfunktionen zu ermöglichen und Fehler in der Spezifikation zu finden.
- [Moddable XS](https://www.moddable.com/), verwendet in eingebetteten Systemen wie IoT.
- [QuickJS](https://bellard.org/quickjs/), eine kleine und einbettbare JavaScript-Engine.
- Metas [Hermes](https://github.com/facebook/hermes) Engine, eine für [React Native](https://reactnative.dev/docs/hermes) optimierte Engine.
- Oracles [GraalJS](https://www.graalvm.org/), eine leistungsstarke Implementierung, die auf der GraalVM von Oracle Labs basiert.

JavaScript-Engines bieten eine öffentliche API, die Anwendung Entwickler verwenden können, um JavaScript in ihre Software zu integrieren. Bei weitem das häufigste Host-Umgebung für JavaScript sind Webbrowser. Webbrowser verwenden normalerweise die öffentliche API, um **Host-Objekte** zu erstellen, die das [DOM](https://dom.spec.whatwg.org/) in JavaScript spiegeln.

Eine weitere übliche Anwendung für JavaScript ist als (Web-)Server-seitige Skriptsprache. Ein JavaScript-Webserver bietet Host-Objekte, die HTTP-Anfrage- und Antwortobjekte darstellen, die dann von einem JavaScript-Programm manipuliert werden können, um dynamisch Webseiten zu generieren. [Node.js](https://nodejs.org/) ist ein beliebtes Beispiel dafür.

## Shells

Ein JavaScript-Shell ermöglicht es Ihnen, schnell Code-Snippets in JavaScript zu testen, ohne eine Webseite neu laden zu müssen. Sie sind äußerst nützlich für die Entwicklung und das Debuggen von Code.

### Unabhängige JavaScript-Shells

Die folgenden JavaScript-Shells sind eigenständige Umgebungen, ähnlich wie Perl oder Python.

- [Node.js](https://nodejs.org/) - Node.js ist eine Plattform zum einfachen Aufbau schneller, skalierbarer Netzwerk-Anwendungen.
- [ShellJS](https://github.com/shelljs/shelljs) - Tragbare Unix-Shell-Befehle für Node.js.

### Browserbasierte JavaScript-Shells

Die folgenden JavaScript-Shells führen Code durch die JavaScript-Engine des Browsers aus.

- Firefox hat eine [eingebaute JavaScript-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html), die Mehrzeilenbearbeitung unterstützt.
- [Babel REPL](https://babeljs.io/repl) - Ein browserbasiertes [REPL](https://en.wikipedia.org/wiki/REPL) zum Experimentieren mit zukünftigen JavaScript-Features.
- [TypeScript Playground](https://www.typescriptlang.org/play/) — Ein browserbasiertes Playground zum Experimentieren sowohl mit neuen JavaScript-Features (über den tsc-Compiler) als auch mit TypeScript-Syntax.

## Werkzeuge & Ressourcen

Hilfreiche Werkzeuge zum Schreiben und Debuggen Ihres JavaScript-Codes.

- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html), [JavaScript-Profiler](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html), [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) und mehr.
- [Learn JavaScript](https://learnjavascript.online/)
  - : Eine ausgezeichnete Ressource für angehende Webentwickler — Lernen Sie JavaScript in einer interaktiven Umgebung, mit kurzen Lektionen und interaktiven Tests, geleitet durch eine automatisierte Bewertung. Die ersten 40 Lektionen sind kostenlos, und der komplette Kurs ist für eine kleine einmalige Zahlung erhältlich.
- [TogetherJS](https://togetherjs.com/)
  - : Zusammenarbeit leicht gemacht. Durch Hinzufügen von TogetherJS auf Ihrer Seite können sich Ihre Nutzer gegenseitig in Echtzeit auf einer Website helfen!
- [Stack Overflow](https://stackoverflow.com/questions/tagged/javascript)
  - : Stack Overflow Fragen mit dem Tag "JavaScript".
- [JSFiddle](https://jsfiddle.net/)
  - : Bearbeiten Sie JavaScript, CSS und HTML und erhalten Sie Live-Ergebnisse. Nutzen Sie externe Ressourcen und arbeiten Sie mit Ihrem Team online zusammen.
- [Plunker](https://plnkr.co/)
  - : Plunker ist eine Online-Community, um Ihre Ideen zur Webentwicklung zu erstellen, zusammenzuarbeiten und zu teilen. Bearbeiten Sie Ihre JavaScript-, CSS- und HTML-Dateien und erhalten Sie Live-Ergebnisse und Dateistruktur.
- [JSBin](https://jsbin.com/)
  - : JS Bin ist ein quelloffenes kollaboratives Werkzeug zum Debuggen von Webentwicklung.
- [Codepen](https://codepen.io/)
  - : Codepen ist ein weiteres kollaboratives Webentwicklungswerkzeug, das als Live-Resultate-Playground dient.
- [StackBlitz](https://stackblitz.com/)
  - : StackBlitz ist ein weiteres Online-Playground/Debugging-Tool, das Full-Stack-Anwendungen mit React, Angular usw. hosten und bereitstellen kann.
- [RunJS](https://runjs.app/)
  - : RunJS ist ein Desktop-Playground/Notizblock-Werkzeug, das Live-Ergebnisse und Zugriff auf sowohl Node- als auch Browser-APIs bietet.
