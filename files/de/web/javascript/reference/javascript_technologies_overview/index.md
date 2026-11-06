---
title: Überblick über JavaScript-Technologien
slug: Web/JavaScript/Reference/JavaScript_technologies_overview
l10n:
  sourceCommit: 2a563c927890794b513523649ccfbbe48d336465
---

Während [HTML](/de/docs/Web/HTML) die Struktur und den Inhalt einer Webseite definiert und [CSS](/de/docs/Web/CSS) ihre Formatierung und ihr Erscheinungsbild festlegt, macht [JavaScript](/de/docs/Web/JavaScript) Webseiten interaktiv und ermöglicht umfangreiche Webanwendungen.

Der Oberbegriff „JavaScript“ umfasst im Kontext eines Webbrowsers jedoch mehrere sehr unterschiedliche Bestandteile. Einer davon ist die Kernsprache (ECMAScript), ein anderer die Sammlung der [Web-APIs](/de/docs/Web/API), einschließlich des DOM (Document Object Model).

## JavaScript, die Kernsprache (ECMAScript)

Die Kernsprache von JavaScript wird vom ECMA-TC39-Komitee unter dem Namen ECMAScript standardisiert. „ECMAScript“ bezeichnet den Sprachstandard, doch „ECMAScript“ und „JavaScript“ können auch synonym verwendet werden.

Diese Kernsprache wird auch außerhalb von Browsern verwendet, beispielsweise in [Node.js](https://nodejs.org/).

### Was gehört zum Umfang von ECMAScript?

ECMAScript definiert unter anderem:

- Die Sprachsyntax (Parsing-Regeln, Schlüsselwörter, Kontrollfluss, Initialisierung von Objektliteralen, ...)
- Mechanismen zur Fehlerbehandlung ({{jsxref("Statements/throw", "throw")}}, {{jsxref("Statements/try...catch", "try...catch")}}, die Möglichkeit, benutzerdefinierte {{jsxref("Error")}}-Typen zu erstellen)
- Typen (Boolean, Number, String, Function, Object, ...)
- Einen prototypbasierten Vererbungsmechanismus
- Integrierte Objekte und Funktionen, darunter {{jsxref("JSON")}}, {{jsxref("Math")}}, [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)-Methoden, {{jsxref("parseInt")}}, {{jsxref("decodeURI")}} usw.
- Den [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode)
- Ein [Modulsystem](/de/docs/Web/JavaScript/Guide/Modules)
- Ein grundlegendes Speichermodell

### Standardisierungsprozess

ECMAScript-Ausgaben werden jährlich von der ECMA-Generalversammlung als Standard verabschiedet und veröffentlicht. Die gesamte Entwicklung ist in der [GitHub-Organisation von Ecma TC39](https://github.com/tc39) öffentlich zugänglich. Dort finden sich Vorschläge, der offizielle Spezifikationstext und Sitzungsprotokolle.

Vor der 6. Ausgabe von ECMAScript (bekannt als ES6) wurden Spezifikationen nur alle paar Jahre veröffentlicht und üblicherweise mit ihren Hauptversionsnummern bezeichnet – ES3, ES5 usw. Seit ES6 wird die Spezifikation nach ihrem Veröffentlichungsjahr benannt – ES2017, ES2018 usw. ES6 ist gleichbedeutend mit ES2015. _ESNext_ ist eine dynamische Bezeichnung für die zum Zeitpunkt der Abfassung jeweils nächste Version. ESNext-Funktionen werden genauer als Vorschläge bezeichnet, da die Spezifikation für sie definitionsgemäß noch nicht abgeschlossen ist.

Die aktuelle, vom Komitee verabschiedete Fassung von ECMA-262 ist auf der [Seite zur Sprachspezifikation ECMA-262](https://ecma-international.org/publications-and-standards/standards/ecma-262/) von Ecma International im PDF- und HTML-Format verfügbar. ECMA-262 und ECMA-402 werden von den Herausgebern der Spezifikationen kontinuierlich gepflegt und aktualisiert. Auf der TC39-Website stehen die neuesten Fassungen von [ECMA-262](https://tc39.es/ecma262/) und [ECMA-402](https://tc39.es/ecma402/) bereit.

Neue Sprachfunktionen, darunter neue Syntax und APIs sowie Änderungen an bestehendem Verhalten, werden in Form von Vorschlägen diskutiert. Jeder Vorschlag durchläuft einen [mehrstufigen Prozess](https://tc39.es/process-document/) und wird üblicherweise in Stufe 3 oder 4 von JavaScript-Engines implementiert und damit öffentlich nutzbar.

Weitere Informationen zur Geschichte von ECMAScript finden Sie im [Wikipedia-Artikel zu ECMAScript](https://en.wikipedia.org/wiki/ECMAScript).

### Internationalization API

Die [ECMAScript Internationalization API Specification](https://402.ecma-international.org/1.0/) ergänzt die ECMAScript-Sprachspezifikation und wird ebenfalls von Ecma TC39 standardisiert. Die Internationalization API stellt JavaScript-Anwendungen Funktionen für die Kollation (den Vergleich von Zeichenfolgen) sowie für die Formatierung von Zahlen, Datumsangaben und Uhrzeiten bereit. Anwendungen können dabei die Sprache wählen und die Funktionen an ihre Anforderungen anpassen. Der erste Standard wurde im Dezember 2012 verabschiedet; der Implementierungsstand in Browsern wird in der Dokumentation des {{jsxref("Intl")}}-Objekts erfasst. Die Internationalisierungsspezifikation wird inzwischen ebenfalls jährlich verabschiedet, und Browser verbessern ihre Implementierungen fortlaufend.

### Weiterführende Ressourcen

Es gibt verschiedene Möglichkeiten, an der Arbeit an der ECMAScript-Sprachspezifikation und der ECMAScript Internationalization API Specification mitzuwirken oder sie und die zugehörigen Ressourcen zu verfolgen:

- [Repository der ECMAScript-Sprachspezifikation](https://github.com/tc39/ecma262)
- [Repository der ECMAScript Internationalization API Specification](https://github.com/tc39/ecma402)
- [Repository für ECMAScript-Vorschläge](https://github.com/tc39/proposals)
- [Repository der ECMAScript-Konformitätstestsuite](https://github.com/tc39/test262)
- [TC39-Sitzungsprotokolle](https://github.com/tc39/notes)
- [Diskussion über die ECMAScript-Spezifikation; aktuelle Mailingliste](https://es.discourse.group/)
- [Diskussion über die ECMAScript-Spezifikation; historische Mailinglistenarchive (bis März 2021)](https://esdiscuss.org/)

## DOM-APIs

### WebIDL

Die [WebIDL-Spezifikation](https://webidl.spec.whatwg.org/) stellt die Verbindung zwischen den DOM-Technologien und ECMAScript her.

### Der Kern des DOM

Das Document Object Model (DOM) ist eine plattformübergreifende, **sprachunabhängige Konvention** zur Darstellung von und Interaktion mit Objekten in HTML-, XHTML- und XML-Dokumenten. Objekte im **DOM-Baum** können mithilfe ihrer Methoden angesprochen und verändert werden. Die Spezifikation des [DOM-Kerns](https://dom.spec.whatwg.org/) wird heute von {{Glossary("WHATWG", "WHATWG")}} gepflegt und hat die Version des {{Glossary("W3C", "W3C")}} abgelöst. Sie definiert sprachunabhängige Schnittstellen, die HTML- und XML-Dokumente als Objekte abstrahieren, sowie Mechanismen zur Bearbeitung dieser Abstraktion. Dazu gehören [`Node`](/de/docs/Web/API/Node), [`Element`](/de/docs/Web/API/Element), [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), [`Document`](/de/docs/Web/API/Document), [`DOMImplementation`](/de/docs/Web/API/DOMImplementation), [`Event`](/de/docs/Web/API/Event), [`EventTarget`](/de/docs/Web/API/EventTarget) und weitere.

Aus Sicht von ECMAScript werden die in der DOM-Spezifikation definierten Objekte als „Host-Objekte“ bezeichnet.

### HTML-DOM

[HTML](https://html.spec.whatwg.org/multipage/), die Auszeichnungssprache des Webs, wird mithilfe des DOM spezifiziert. Aufbauend auf den abstrakten Konzepten des DOM-Kerns definiert HTML auch die _Bedeutung_ von Elementen. Das HTML-DOM umfasst APIs wie [`Document.body`](/de/docs/Web/API/Document/body) und Schnittstellen für HTML-Elemente.

Die HTML-Spezifikation definiert außerdem Einschränkungen für Dokumente. Beispielsweise verlangt sie, dass alle Kindelemente eines {{htmlelement("ul")}}-Elements, das eine ungeordnete Liste darstellt, {{htmlelement("li")}}-Elemente sind, da diese Listeneinträge darstellen. Im Allgemeinen untersagt sie auch die Verwendung von Elementen und Attributen, die in keinem Standard definiert sind.

Suchen Sie das [`Document`](/de/docs/Web/API/Document)-Objekt, das [`Window`](/de/docs/Web/API/Window)-Objekt oder andere DOM-Elemente? Lesen Sie die [DOM-Dokumentation](/de/docs/Web/API/Document_Object_Model).

## Weitere wichtige APIs

- Die Funktionen [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setInterval()`](/de/docs/Web/API/Window/setInterval) wurden erstmals im HTML-Standard für die [`Window`](/de/docs/Web/API/Window)-Schnittstelle spezifiziert.
- [XMLHttpRequest](https://xhr.spec.whatwg.org/) ermöglicht das Senden asynchroner HTTP-Anfragen.
- Die [Fetch API](https://fetch.spec.whatwg.org/) bietet eine einfacher zu verwendende Abstraktion für Netzwerkanfragen.
- Das [CSS Object Model](https://drafts.csswg.org/cssom/) abstrahiert CSS-Regeln als Objekte.
- [WebWorkers](https://html.spec.whatwg.org/multipage/workers.html) ermöglichen parallele Berechnungen.
- [WebSockets](https://html.spec.whatwg.org/multipage/#network) ermöglichen bidirektionale Kommunikation auf niedriger Ebene.
- [Canvas 2D Context](https://html.spec.whatwg.org/multipage//#2dcontext) ist eine Zeichen-API für [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas).
- Die [WebAssembly-Schnittstelle](https://webassembly.github.io/spec/js-api/) stellt Hilfsmittel für die Kommunikation zwischen JavaScript-Code und [WebAssembly](/de/docs/WebAssembly)-Modulen bereit.

Umgebungen außerhalb von Browsern (wie Node.js) verfügen häufig nicht über DOM-APIs, da sie nicht mit einem Dokument interagieren. In der Regel implementieren sie aber dennoch viele Web-APIs, etwa [`fetch()`](/de/docs/Web/API/Window/fetch) und [`setTimeout()`](/de/docs/Web/API/Window/setTimeout).

## JavaScript-Implementierungen

Zu den JavaScript-Engines aktueller Webbrowser gehören:

- Mozillas [SpiderMonkey](https://spidermonkey.dev/), verwendet in Firefox, Servo und Flow. Außerhalb von Browsern wird sie unter anderem in MongoDB und CouchDB eingesetzt. Sie war die _allererste_ JavaScript-Engine und wurde von Brendan Eich bei Netscape entwickelt.
- Googles [V8](https://v8.dev/), verwendet in Chrome und Chromium-basierten Browsern wie Opera, Edge und Brave. Außerhalb von Browsern wird sie unter anderem in [Node.js](https://nodejs.org/), [Deno](https://deno.com/) und [Electron](https://www.electronjs.org/) eingesetzt.
- Apples [JavaScriptCore](https://docs.webkit.org/Deep%20Dive/JSC/JavaScriptCore.html) (auch bekannt als SquirrelFish/Nitro), verwendet in Safari und anderen WebKit-basierten Browsern. Außerhalb von Browsern wird sie unter anderem in [Bun](https://bun.com/) eingesetzt.
- [LibJS](https://serenityos.github.io/libjs-website/), verwendet in [Ladybird](https://ladybird.org/).

Zu den JavaScript-Engines, die in früheren Browsern verwendet wurden, gehören:

- [Carakan](<https://en.wikipedia.org/wiki/Presto_(browser_engine)#ECMAScript_engines>), verwendet in Opera, bevor der Browser auf Chromium umgestellt wurde.
- Microsofts [Chakra](<https://en.wikipedia.org/wiki/Chakra_(JScript_engine)>), verwendet in Internet Explorer (obwohl die implementierte Sprache offiziell „JScript“ heißt, um markenrechtliche Probleme zu vermeiden). Frühere Versionen von Edge verwendeten eine andere JavaScript-Engine, die verwirrenderweise ebenfalls [Chakra](<https://en.wikipedia.org/wiki/Chakra_(JavaScript_engine)>) hieß, bevor der Browser auf Chromium umgestellt wurde.

Zu den JavaScript-Engines, die speziell für den Einsatz außerhalb von Browsern entwickelt wurden, gehören:

- [Engine262](https://engine262.js.org/), in JavaScript geschrieben und im Wesentlichen als Referenzimplementierung der Sprache gedacht.
- [Hermes](https://github.com/meta/hermes) von Meta, optimiert für [React Native](https://reactnative.dev/docs/hermes).
- [Rhino](<https://en.wikipedia.org/wiki/Rhino_(JavaScript_engine)>) von Mozilla, in Java geschrieben.
- [GraalJS](https://www.graalvm.org/) von Oracle, in Java geschrieben und auf GraalVM aufgebaut.
- [Moddable XS](https://www.moddable.com/), für IoT- und eingebettete Systeme gedacht.
- [QuickJS](https://bellard.org/quickjs/), auf geringe Größe und Ressourcennutzung ausgelegt.

JavaScript-Engines stellen eine öffentliche API bereit, mit der Anwendungsentwickler JavaScript in ihre Software integrieren können. Die mit Abstand häufigste Host-Umgebung für JavaScript sind Webbrowser. Webbrowser nutzen die öffentliche API üblicherweise, um **Host-Objekte** zu erstellen, die das [DOM](https://dom.spec.whatwg.org/) in JavaScript abbilden.

Ein weiterer verbreiteter Einsatzbereich für JavaScript ist die serverseitige Skriptprogrammierung für das Web. Ein JavaScript-Webserver stellt Host-Objekte bereit, die eine HTTP-Anfrage und HTTP-Antwortobjekte repräsentieren. Diese können anschließend von einem JavaScript-Programm bearbeitet werden, um Webseiten dynamisch zu erzeugen. [Node.js](https://nodejs.org/) ist ein bekanntes Beispiel dafür.

## Shells

Mit einer JavaScript-Shell können Sie JavaScript-Code schnell testen, ohne eine Webseite neu laden zu müssen. Shells sind bei der Entwicklung und beim Debuggen von Code äußerst nützlich.

### Eigenständige JavaScript-Shells

Die folgenden JavaScript-Shells sind eigenständige Umgebungen, ähnlich wie Perl oder Python.

- [Node.js](https://nodejs.org/) – Eine auf V8 basierende JavaScript-Laufzeitumgebung.
- [Bun](https://bun.com/) – Eine auf JavaScriptCore basierende JavaScript-Laufzeitumgebung.

### Browserbasierte JavaScript-Shells

Die folgenden JavaScript-Shells führen Code über die JavaScript-Engine des Browsers aus.

- Firefox verfügt über eine [integrierte JavaScript-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html), die die mehrzeilige Bearbeitung unterstützt.
- [Babel REPL](https://babeljs.io/repl) – Eine browserbasierte [REPL](https://en.wikipedia.org/wiki/REPL) zum Experimentieren mit künftigen JavaScript-Funktionen.
- [TypeScript Playground](https://www.typescriptlang.org/play/) – Eine browserbasierte Umgebung zum Experimentieren mit neuen JavaScript-Funktionen (über den tsc-Compiler) und der TypeScript-Syntax.

## Werkzeuge und Ressourcen

Nützliche Werkzeuge zum Schreiben und Debuggen Ihres JavaScript-Codes.

- [Firefox-Entwicklerwerkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html), [JavaScript-Profiler](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html), [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) und weitere.
- [Learn JavaScript](https://learnjavascript.online/)
  - : Eine ausgezeichnete Ressource für angehende Webentwickler: Lernen Sie JavaScript in einer interaktiven Umgebung mit kurzen Lektionen und interaktiven Tests, begleitet von automatisierter Bewertung. Die ersten 40 Lektionen sind kostenlos; der gesamte Kurs ist gegen eine geringe einmalige Zahlung erhältlich.
- [TogetherJS](https://togetherjs.com/)
  - : Zusammenarbeit leicht gemacht. Wenn Sie TogetherJS in Ihre Website einbinden, können sich Ihre Nutzer dort in Echtzeit gegenseitig helfen!
- [Stack Overflow](https://stackoverflow.com/questions/tagged/javascript)
  - : Fragen auf Stack Overflow mit dem Tag „JavaScript“.
- [JSFiddle](https://jsfiddle.net/)
  - : Bearbeiten Sie JavaScript, CSS und HTML und sehen Sie die Ergebnisse sofort. Nutzen Sie externe Ressourcen und arbeiten Sie online mit Ihrem Team zusammen.
- [Plunker](https://plnkr.co/)
  - : Plunker ist eine Online-Community, in der Sie Ihre Ideen für die Webentwicklung erstellen, gemeinsam bearbeiten und teilen können. Bearbeiten Sie Ihre JavaScript-, CSS- und HTML-Dateien und sehen Sie die Ergebnisse und die Dateistruktur sofort.
- [JS Bin](https://jsbin.com/)
  - : JS Bin ist ein kollaboratives Open-Source-Werkzeug zum Debuggen bei der Webentwicklung.
- [CodePen](https://codepen.io/)
  - : CodePen ist ein weiteres Werkzeug für die gemeinsame Webentwicklung, mit dem Sie Ergebnisse sofort ansehen können.
- [StackBlitz](https://stackblitz.com/)
  - : StackBlitz ist eine weitere Online-Umgebung zum Experimentieren und Debuggen, in der sich Full-Stack-Anwendungen mit React, Angular usw. hosten und bereitstellen lassen.
- [RunJS](https://runjs.app/)
  - : RunJS ist eine Desktop-Umgebung zum Experimentieren und Ausprobieren von Code, die Ergebnisse sofort anzeigt und Zugriff auf Node- und Browser-APIs bietet.
