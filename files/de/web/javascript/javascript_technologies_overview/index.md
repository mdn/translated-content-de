---
title: JavaScript-Technologien Übersicht
slug: Web/JavaScript/JavaScript_technologies_overview
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{jsSidebar("Introductory")}}

Während [HTML](/de/docs/Web/HTML) die Struktur und den Inhalt einer Webseite definiert und [CSS](/de/docs/Web/CSS) das Format und das Erscheinungsbild festlegt, fügt [JavaScript](/de/docs/Web/JavaScript) einer Webseite Interaktivität hinzu und ermöglicht die Erstellung umfangreicher Webanwendungen.

Der Begriff "JavaScript" umfasst im Kontext eines Webbrowsers jedoch mehrere sehr unterschiedliche Elemente. Eines davon ist die Kernsprache (ECMAScript), ein anderes ist die Sammlung der [Web-APIs](/de/docs/Web/API), einschließlich des DOM (Document Object Model).

## JavaScript, die Kernsprache (ECMAScript)

Die Kernsprache von JavaScript wird vom ECMA TC39-Komitee als eine Sprache namens ECMAScript standardisiert. "ECMAScript" ist der Begriff für den Sprachstandard, aber "ECMAScript" und "JavaScript" können austauschbar verwendet werden.

Diese Kernsprache wird auch in Nicht-Browserumgebungen verwendet, zum Beispiel in [Node.js](https://nodejs.org/).

### Was fällt in den Bereich von ECMAScript?

ECMAScript definiert unter anderem:

- Syntax der Sprache (Parsing-Regeln, Schlüsselwörter, Kontrollfluss, Initialisierung von Objektliteralen, ...)
- Mechanismen zur Fehlerbehandlung ({{jsxref("Statements/throw", "throw")}}, {{jsxref("Statements/try...catch", "try...catch")}}, Möglichkeit zur Erstellung benutzerdefinierter {{jsxref("Error")}}-Typen)
- Typen (boolean, number, string, function, object, ...)
- Ein auf Prototypen basierendes Vererbungsmechanismus
- Eingebaute Objekte und Funktionen, einschließlich {{jsxref("JSON")}}, {{jsxref("Math")}}, [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)-Methoden, {{jsxref("parseInt")}}, {{jsxref("decodeURI")}}, usw.
- [Strikter Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)
- Ein [Modulsystem](/de/docs/Web/JavaScript/Guide/Modules)
- Grundlegendes Speicherlayout

### Standardisierungsprozess

ECMAScript-Ausgaben werden jährlich als Standard von der ECMA-Generalversammlung genehmigt und veröffentlicht. Alle Entwicklungen sind öffentlich auf der [Ecma TC39 GitHub-Organisation](https://github.com/tc39), die Vorschläge, den offiziellen Spezifikationstext und Sitzungsnotizen beherbergt.

Vor der 6. Ausgabe von ECMAScript (bekannt als ES6) wurden Spezifikationen alle paar Jahre veröffentlicht und werden normalerweise nach ihren Hauptversionsnummern bezeichnet — ES3, ES5 usw. Nach ES6 wird die Spezifikation nach dem Veröffentlichungsjahr benannt — ES2017, ES2018 usw. ES6 ist gleichbedeutend mit ES2015. _ESNext_ ist ein dynamischer Name, der sich auf die nächste Version zum Zeitpunkt des Schreibens bezieht. ESNext-Funktionen werden korrekterweise als Vorschläge bezeichnet, weil die Spezifikation definitionsgemäß noch nicht abgeschlossen ist.

Die aktuelle, vom Komitee genehmigte Momentaufnahme von ECMA-262 ist in PDF- und HTML-Format auf der [ECMA-262-Sprachspezifikationsseite](https://ecma-international.org/publications-and-standards/standards/ecma-262/) von Ecma International verfügbar. ECMA-262 und ECMA-402 werden kontinuierlich gepflegt und auf dem neuesten Stand gehalten; die TC39-Website hostet die neuesten, aktualisierten Versionen von [ECMA-262](https://tc39.es/ecma262/) und [ECMA-402](https://tc39.es/ecma402/).

Neue Sprachfunktionen, einschließlich der Einführung neuer Syntaxen und APIs sowie der Überarbeitung bestehender Verhaltensweisen, werden in Form von Vorschlägen diskutiert. Jeder Vorschlag durchläuft einen [4-Stufen-Prozess](https://tc39.es/process-document/) und wird in der Regel von JavaScript-Engines in Stufe 3 oder Stufe 4 implementiert und ist somit für die Öffentlichkeit zugänglich.

Weitere Informationen zur Geschichte von ECMAScript finden Sie im [Wikipedia-Eintrag zu ECMAScript](https://en.wikipedia.org/wiki/ECMAScript).

### Internationalization API

Die [ECMAScript Internationalization API Specification](https://402.ecma-international.org/1.0/) ist eine Erweiterung der ECMAScript Language Specification, ebenfalls standardisiert von Ecma TC39. Die Internationalisierungs-API bietet Kollation (Zeichenfolgenvergleich), Zahlenformatierung und Datums- und Zeitformatierung für JavaScript-Anwendungen, sodass die Anwendungen die Sprache auswählen und die Funktionalität an ihre Bedürfnisse anpassen können. Der ursprüngliche Standard wurde im Dezember 2012 genehmigt; der Implementierungsstatus in Browsern wird in der Dokumentation des {{jsxref("Intl")}}-Objekts nachverfolgt. Die Internationalisierungs-Spezifikation wird mittlerweile ebenfalls jährlich ratifiziert und Browser verbessern ständig ihre Implementierung.

### Verwandte Ressourcen

Es gibt verschiedene Möglichkeiten, an der aktuellen Arbeit an der ECMAScript-Sprachspezifikation und der ECMAScript Internationalization API Specification sowie verwandten Ressourcen teilzunehmen oder diese zu verfolgen:

- [ECMAScript Language Specification repo](https://github.com/tc39/ecma262)
- [ECMAScript Internationalization API Specification repo](https://github.com/tc39/ecma402)
- [ECMAScript proposals repo](https://github.com/tc39/proposals)
- [ECMAScript conformance test suite repo](https://github.com/tc39/test262)
- [TC39 meeting notes](https://github.com/tc39/notes)
- [ECMAScript spec discussion; aktueller Mailing-List](https://es.discourse.group/)
- [ECMAScript spec discussion; historische Mailing-List-Archive (bis März 2021)](https://esdiscuss.org/)

## DOM-APIs

### WebIDL

Die [WebIDL-Spezifikation](https://webidl.spec.whatwg.org/) liefert das Bindeglied zwischen den DOM-Technologien und ECMAScript.

### Das Kernstück des DOM

Das Document Object Model (DOM) ist eine plattformübergreifende, **sprachunabhängige Konvention** zur Darstellung und Interaktion mit Objekten in HTML-, XHTML- und XML-Dokumenten. Objekte im **DOM-Baum** können über Methoden auf den Objekten adressiert und manipuliert werden. Die [W3C](/de/docs/Glossary/W3C) standardisiert das Kerndokument-Objektmodell, das sprachunabhängige Schnittstellen definiert, die HTML- und XML-Dokumente als Objekte abstrahieren, und auch Mechanismen zur Manipulation dieser Abstraktion definiert. Zu den vom DOM definierten Dingen gehören:

- Die Dokumentenstruktur, ein Baum-Modell, und die DOM-Event-Architektur im [DOM-Core](https://dom.spec.whatwg.org/): [`Node`](/de/docs/Web/API/Node), [`Element`](/de/docs/Web/API/Element), [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), [`Document`](/de/docs/Web/API/Document), [`DOMImplementation`](/de/docs/Web/API/DOMImplementation), [`Event`](/de/docs/Web/API/Event), [`EventTarget`](/de/docs/Web/API/EventTarget), …
- Eine weniger rigorose Definition der DOM-Event-Architektur sowie spezifische Events in [DOM events](https://w3c.github.io/uievents/).
- Andere Dinge wie [DOM Traversal](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html) und [DOM Range](https://dom.spec.whatwg.org/#ranges).

Aus der Sicht von ECMAScript werden Objekte, die in der DOM-Spezifikation definiert sind, als "Host-Objekte" bezeichnet.

### HTML-DOM

[HTML](https://html.spec.whatwg.org/multipage/), die Markup-Sprache des Webs, wird in Bezug auf das DOM spezifiziert. Über den abstrakten Konzepten, die im DOM-Core definiert sind, legt HTML auch die _Bedeutung_ der Elemente fest. Das HTML-DOM umfasst solche Dinge wie die `className` Eigenschaft an HTML-Elementen oder APIs wie [`document.body`](/de/docs/Web/API/Document/body).

Die HTML-Spezifikation definiert auch Einschränkungen für Dokumente; zum Beispiel erfordert sie, dass alle Kinder eines [`<ul>`](/de/docs/Web/HTML/Element/ul)-Elements, das eine ungeordnete Liste darstellt, [`<li>`](/de/docs/Web/HTML/Element/li)-Elemente sind, da diese Listenelemente darstellen. Im Allgemeinen verbietet sie auch die Verwendung von Elementen und Attributen, die nicht in einem Standard definiert sind.

Suchen Sie nach dem [`Document`](/de/docs/Web/API/Document)-Objekt, dem [`Window`](/de/docs/Web/API/Window)-Objekt und den anderen DOM-Elementen? Lesen Sie die [DOM-Dokumentation](/de/docs/Web/API/Document_Object_Model).

## Andere bemerkenswerte APIs

- Die Funktionen [`setTimeout`](/de/docs/Web/API/setTimeout) und [`setInterval`](/de/docs/Web/API/setInterval) wurden zuerst auf der [`Window`](/de/docs/Web/API/Window)-Schnittstelle im HTML-Standard spezifiziert.
- [XMLHttpRequest](https://xhr.spec.whatwg.org/) ermöglicht es, asynchrone HTTP-Anfragen zu senden.
- Die [Fetch API](https://fetch.spec.whatwg.org/) bietet eine ergonomischere Abstraktion für Netzwerk-Anfragen.
- Das [CSS Object Model](https://drafts.csswg.org/cssom/) abstrahiert CSS-Regeln als Objekte.
- [WebWorkers](https://html.spec.whatwg.org/multipage/workers.html) erlauben parallele Berechnungen.
- [WebSockets](https://html.spec.whatwg.org/multipage/#network) ermöglichen bidirektionale Kommunikation auf niedriger Ebene.
- Das [Canvas 2D Context](https://html.spec.whatwg.org/multipage//#2dcontext) ist eine Zeichen-API für `<canvas>`-Elemente.
- Die [WebAssembly-Schnittstelle](https://webassembly.github.io/spec/js-api/) bietet Hilfsmittel für die Kommunikation zwischen JavaScript-Code und [WebAssembly](/de/docs/WebAssembly)-Modulen.

Nicht-Browser-Umgebungen (wie Node.js) haben oft keine DOM-APIs — da sie nicht mit einem Dokument interagieren — aber sie implementieren normalerweise viele Web-APIs, wie [`fetch()`](/de/docs/Web/API/Window/fetch) und [`setTimeout()`](/de/docs/Web/API/setTimeout).

## JavaScript-Implementierungen

Es gibt drei Haupt-JavaScript-Implementierungen, die in Browserumgebungen und darüber hinaus verwendet werden:

- Mozillas [SpiderMonkey](https://spidermonkey.dev/), verwendet in Firefox. Dies war die erste _je_ geschaffene JavaScript-Engine, erstellt von Brendan Eich bei Netscape.
- Googles [V8](https://v8.dev/), verwendet in Google Chrome, Opera, Edge, [Node.js](https://nodejs.org/), [Deno](https://deno.com/), [Electron](https://www.electronjs.org/) und mehr.
- Apples [JavaScriptCore](https://trac.webkit.org/wiki/JavaScriptCore) (auch bekannt als SquirrelFish/Nitro), verwendet in WebKit-Browsern wie Apple Safari und [Bun](https://bun.sh/).

Neben den oben genannten Implementierungen gibt es andere beliebte JavaScript-Engines wie:

- [Carakan](<https://en.wikipedia.org/wiki/Presto_(browser_engine)#ECMAScript_engines>), verwendet in früheren Versionen von Opera.
- Microsofts [Chakra](<https://en.wikipedia.org/wiki/Chakra_(JScript_engine)>) Engine, verwendet in Internet Explorer (obwohl die Sprache, die sie implementiert, formell als "JScript" bezeichnet wird, um Markenrechtsprobleme zu vermeiden). Frühere Versionen von Edge nutzten eine neue JavaScript-Engine, verwirrenderweise ebenfalls genannt [Chakra](<https://en.wikipedia.org/wiki/Chakra_(JavaScript_engine)>).
- [LibJS](https://serenityos.github.io/libjs-website/), verwendet in der Browser-Implementation von [SerenityOS](https://serenityos.org/).
- Mozillas [Rhino](<https://en.wikipedia.org/wiki/Rhino_(JavaScript_engine)>) Engine, eine in Java geschriebene JavaScript-Implementierung, hauptsächlich erstellt von Norris Boyd (ebenfalls bei Netscape).

Es gibt einige Engines, die speziell für Nicht-Browser-Zwecke entwickelt wurden:

- [Engine262](https://engine262.js.org/), eine in JavaScript geschriebene JavaScript-Engine. Sie wurde erstellt, um JavaScript-Entwicklern zu ermöglichen, neue Sprachfunktionen zu erkunden und Fehler in der Spezifikation zu finden.
- [Moddable XS](https://www.moddable.com/), verwendet in eingebetteten Systemen wie IoT.
- [QuickJS](https://bellard.org/quickjs/), eine kleine und eingebettete JavaScript-Engine.
- Metas [Hermes](https://github.com/facebook/hermes) Engine, eine Engine, die für [React Native](https://reactnative.dev/docs/hermes) optimiert ist.
- Oracles [GraalJS](https://www.graalvm.org/), eine leistungsstarke Implementierung, die auf dem GraalVM von Oracle Labs basiert.

JavaScript-Engines stellen eine öffentliche API bereit, die Anwendungsentwickler zur Integration von JavaScript in ihre Software nutzen können. Bei weitem ist die häufigste Hostumgebung für JavaScript Webbrowser. Webbrowser verwenden typischerweise die öffentliche API, um **Host-Objekte** zu erstellen, die dafür verantwortlich sind, das [DOM](https://dom.spec.whatwg.org/) in JavaScript widerzuspiegeln.

Eine andere häufige Anwendung für JavaScript ist als (Web-)Server-seitige Skriptsprache. Ein JavaScript-Webserver stellt Host-Objekte dar, die ein HTTP-Anfrage- und Antwortobjekt darstellen, das dann von einem JavaScript-Programm manipuliert werden kann, um Webseiten dynamisch zu generieren. [Node.js](https://nodejs.org/) ist ein beliebtes Beispiel dafür.

## Shells

Eine JavaScript-Shell ermöglicht es Ihnen, JavaScript-Code-Snippets schnell zu testen, ohne eine Webseite neu laden zu müssen. Sie sind extrem nützlich für die Entwicklung und Debugging von Code.

### Unabhängige JavaScript-Shells

Die folgenden JavaScript-Shells sind eigenständige Umgebungen, ähnlich wie Perl oder Python.

- [Node.js](https://nodejs.org/) - Node.js ist eine Plattform zum einfachen Erstellen schneller, skalierbarer Netzwerk-Anwendungen.
- [ShellJS](https://github.com/shelljs/shelljs) - Tragbare Unix-Shell-Befehle für Node.js.

### Browserbasierte JavaScript-Shells

Die folgenden JavaScript-Shells führen Code über die JavaScript-Engine des Browsers aus.

- Firefox hat eine [eingebaute JavaScript-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html), die die Bearbeitung von mehreren Zeilen unterstützt.
- [Babel REPL](https://babeljs.io/repl) - Ein browserbasiertes [REPL](https://en.wikipedia.org/wiki/REPL) zum Experimentieren mit zukünftigen JavaScript-Funktionalitäten.
- [TypeScript playground](https://www.typescriptlang.org/play/) — Ein browserbasiertes Spielplatz zum Experimentieren mit neuen JavaScript-Funktionen (über den tsc-Compiler) und TypeScript-Syntax.

## Werkzeuge und Ressourcen

Hilfreiche Werkzeuge zum Schreiben und Debuggen Ihres JavaScript-Codes.

- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html), [JavaScript-Profiler](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html), [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) und mehr.
- [Learn JavaScript](https://learnjavascript.online/)
  - : Eine ausgezeichnete Ressource für angehende Webentwickler — Lernen Sie JavaScript in einer interaktiven Umgebung mit kurzen Lektionen und interaktiven Tests, geführt durch automatisierte Bewertung. Die ersten 40 Lektionen sind kostenlos und der gesamte Kurs ist zu einem kleinen Einmalbetrag verfügbar.
- [TogetherJS](https://togetherjs.com/)
  - : Zusammenarbeit leicht gemacht. Durch das Hinzufügen von TogetherJS zu Ihrer Website können Ihre Benutzer sich gegenseitig in Echtzeit auf einer Website helfen!
- [Stack Overflow](https://stackoverflow.com/questions/tagged/javascript)
  - : Stack Overflow-Fragen, die mit "JavaScript" gekennzeichnet sind.
- [JSFiddle](https://jsfiddle.net/)
  - : Bearbeiten Sie JavaScript, CSS und HTML und erhalten Sie Live-Ergebnisse. Verwenden Sie externe Ressourcen und arbeiten Sie online mit Ihrem Team zusammen.
- [Plunker](https://plnkr.co/)
  - : Plunker ist eine Online-Community zum Erstellen, Zusammenarbeiten und Teilen Ihrer Ideen zur Webentwicklung. Bearbeiten Sie Ihre JavaScript-, CSS- und HTML-Dateien und erhalten Sie Live-Ergebnisse und Dateistrukturen.
- [JSBin](https://jsbin.com/)
  - : JS Bin ist ein Open-Source Kollaborations-Webentwicklungs-Debugging Tool.
- [Codepen](https://codepen.io/)
  - : Codepen ist ein weiteres Kollaborations-Webentwicklungstool, das als Live-Ergebnis-Spielplatz verwendet wird.
- [StackBlitz](https://stackblitz.com/)
  - : StackBlitz ist ein weiteres Online-Spielplatz/Debbuging-Tool, das komplette Anwendungen mit React, Angular usw. hosten und bereitstellen kann.
- [RunJS](https://runjs.app/)
  - : RunJS ist ein Desktop-Spielplatz/Scratchpad-Tool, das Live-Ergebnisse und Zugriff auf Node- und Browser-APIs bereitstellt.
