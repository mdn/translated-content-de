---
title: JavaScript
slug: Web/JavaScript
l10n:
  sourceCommit: 26e2f9883e0e73def04c0e86fec6da3ec42e66b3
---

{{jsSidebar}}

**JavaScript** (**JS**) ist eine leichtgewichtige interpretierte (oder [just-in-time](https://en.wikipedia.org/wiki/Just-in-time_compilation) kompilierte) Programmiersprache mit {{Glossary("First-class_Function", "First-Class-Funktionen")}}. Während sie am bekanntesten als Skriptsprache für Webseiten ist, wird sie auch in [vielen nicht-browserbasierten Umgebungen](https://en.wikipedia.org/wiki/JavaScript#Other_usage) verwendet, wie z.B. {{Glossary("Node.js", "Node.js")}}, [Apache CouchDB](https://couchdb.apache.org/) und [Adobe Acrobat](https://opensource.adobe.com/dc-acrobat-sdk-docs/acrobatsdk/). JavaScript ist eine {{Glossary("Prototype-based_programming", "prototypenbasierte")}}, multi-paradigmatische, {{Glossary("Thread", "einzelsträngig")}}, {{Glossary("Dynamic_typing", "dynamische")}} Sprache, die objektorientierte, imperative und deklarative (z. B. funktionale Programmierung) Stile unterstützt.

Die dynamischen Fähigkeiten von JavaScript umfassen die Laufzeit-Objekterstellung, variable Parameterlisten, Funktionsvariablen, dynamische Skripterstellung (via [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)), Objekt-Introspektion (via [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) und [`Object`-Hilfsfunktionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods)) und die Wiederherstellung des Quellcodes (JavaScript-Funktionen speichern ihren Quelltext und können durch [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/toString) abgerufen werden).

Dieser Abschnitt ist der JavaScript-Sprache selbst gewidmet, und nicht den Teilen, die spezifisch für Webseiten oder andere Hostumgebungen sind. Für Informationen über {{Glossary("API", "APIs")}}, die spezifisch für Webseiten sind, siehe bitte [Web APIs](/de/docs/Web/API) und {{Glossary("DOM", "DOM")}}.

Die Standards für JavaScript sind die [ECMAScript Language Specification](https://tc39.es/ecma262/) (ECMA-262) und die [ECMAScript Internationalization API Specification](https://tc39.es/ecma402/) (ECMA-402). Sobald ein Browser ein Feature implementiert, versuchen wir, es zu dokumentieren. Das bedeutet, dass in Fällen, in denen einige [Vorschläge für neue ECMAScript-Features](https://github.com/tc39/proposals) bereits in Browsern implementiert wurden, Dokumentationen und Beispiele in MDN-Artikeln möglicherweise einige dieser neuen Features verwenden. Meistens geschieht dies zwischen den [Stufen](https://tc39.es/process-document/) 3 und 4 und in der Regel, bevor die Spezifikation offiziell veröffentlicht wird.

Verwechseln Sie JavaScript nicht mit der [Java-Programmiersprache](<https://en.wikipedia.org/wiki/Java_(programming_language)>) — **JavaScript ist _nicht_ "interpretiertes Java"**. Sowohl "Java" als auch "JavaScript" sind Marken oder eingetragene Marken von Oracle in den USA und anderen Ländern. Allerdings unterscheiden sich die beiden Programmiersprachen erheblich in Syntax, Semantik und Anwendung.

Die Dokumentation über die Kernmerkmale der JavaScript-Sprache (hauptsächlich [ECMAScript](/de/docs/Web/JavaScript/JavaScript_technologies_overview)) umfasst Folgendes:

- Den [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide)
- Das [JavaScript-Referenzhandbuch](/de/docs/Web/JavaScript/Reference)

Für weitere Informationen über JavaScript-Spezifikationen und verwandte Technologien, siehe [Überblick über JavaScript-Technologien](/de/docs/Web/JavaScript/JavaScript_technologies_overview).

## Tutorials

Erlernen Sie die Programmierung in JavaScript mit Leitfäden und Tutorials.

### Für absolute Anfänger

Besuchen Sie unser [Lernbereich JavaScript-Thema](/de/docs/Learn/JavaScript), wenn Sie JavaScript lernen möchten, aber keine Vorkenntnisse in JavaScript oder Programmierung haben. Die vollständigen verfügbaren Module sind:

- [JavaScript erste Schritte](/de/docs/Learn/JavaScript/First_steps)
  - : Beantwortet einige grundlegende Fragen wie "Was ist JavaScript?", "Wie sieht es aus?", und "Was kann es tun?", und bespricht wichtige JavaScript-Features wie Variablen, Strings, Zahlen und Arrays.
- [JavaScript-Bausteine](/de/docs/Learn/JavaScript/Building_blocks)
  - : Setzt unsere Behandlung der grundlegenden JavaScript-Funktionen fort und richtet unsere Aufmerksamkeit auf häufig vorkommende Arten von Codeblöcken wie bedingte Anweisungen, Schleifen, Funktionen und Ereignisse.
- [Einführung in JavaScript-Objekte](/de/docs/Learn/JavaScript/Objects)
  - : Die objektorientierte Natur von JavaScript ist wichtig zu verstehen, wenn Sie Ihr Wissen über die Sprache vertiefen und effizienteren Code schreiben möchten. Daher haben wir dieses Modul bereitgestellt, um Ihnen zu helfen.
- [Asynchrones JavaScript](/de/docs/Learn/JavaScript/Asynchronous)
  - : Erörtert asynchrones JavaScript, warum es wichtig ist und wie es effektiv eingesetzt werden kann, um potenzielle blockierende Operationen wie das Abrufen von Ressourcen von einem Server zu handhaben.
- [Client-seitige Web-APIs](/de/docs/Learn/JavaScript/Client-side_web_APIs)
  - : Erforscht, was APIs sind und wie man einige der häufigsten APIs verwendet, mit denen Sie häufig in Ihrer Entwicklungsarbeit konfrontiert werden.

### JavaScript-Leitfaden

- [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide)
  - : Ein viel detaillierterer Leitfaden zur JavaScript-Sprache, der sich an Personen mit vorheriger Programmiererfahrung entweder in JavaScript oder einer anderen Sprache richtet.

### Mittelstufe

- [Verständnis von clientseitigen JavaScript-Frameworks](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks)
  - : JavaScript-Frameworks sind ein wesentlicher Bestandteil der modernen Frontend-Webentwicklung und bieten Entwicklern bewährte Tools zum Erstellen skalierbarer, interaktiver Webanwendungen. Dieses Modul gibt Ihnen einige grundlegende Hintergrundinformationen darüber, wie clientseitige Frameworks funktionieren und wie sie in Ihr Werkzeugset passen, bevor es sich einer Reihe von Tutorials zu einigen der heute beliebtesten widmet.
- [JavaScript-Sprachenüberblick](/de/docs/Web/JavaScript/Language_overview)
  - : Ein Überblick über die grundlegende Syntax und Semantik von JavaScript für diejenigen, die aus anderen Programmiersprachen kommen und sich auf den neuesten Stand bringen möchten.
- [JavaScript-Datenstrukturen](/de/docs/Web/JavaScript/Data_structures)
  - : Überblick über die verfügbaren Datenstrukturen in JavaScript.
- [Vergleich von Gleichheit und Gleichheit](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness)
  - : JavaScript bietet drei verschiedene Wertvergleichsoperationen: strikte Gleichheit mit `===`, lose Gleichheit mit `==` und die {{jsxref("Object.is()")}} Methode.
- [Enumeration und Besitz von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
  - : Wie verschiedene Methoden, die eine Gruppe von Objekteigenschaften nacheinander besuchen, die Enumeration und den Besitz von Eigenschaften behandeln.
- [Closures](/de/docs/Web/JavaScript/Closures)
  - : Ein Closure ist die Kombination aus einer Funktion und dem lexikalischen Umfeld, in dem die Funktion deklariert wurde.

### Fortgeschritten

- [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
  - : Erklärung der weitgehend missverstandenen und unterschätzten prototypenbasierten Vererbung.
- [Speicherverwaltung](/de/docs/Web/JavaScript/Memory_management)
  - : Speicherlebenszyklus und Garbage Collection in JavaScript.
- [Die Ereignisschleife](/de/docs/Web/JavaScript/Event_loop)
  - : JavaScript hat ein Laufzeitmodell, das auf einer "Ereignisschleife" basiert.

## Referenz

Durchsuchen Sie die vollständige [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) Dokumentation.

- [Standardobjekte](/de/docs/Web/JavaScript/Reference/Global_Objects)
  - : Lernen Sie die eingebauten Standardobjekte {{jsxref("Array")}}, {{jsxref("Boolean")}}, {{jsxref("Date")}}, {{jsxref("Error")}}, {{jsxref("Function")}}, {{jsxref("JSON")}}, {{jsxref("Math")}}, {{jsxref("Number")}}, {{jsxref("Object")}}, {{jsxref("RegExp")}}, {{jsxref("String")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}} und andere kennen.
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Reference/Operators)
  - : Erfahren Sie mehr über das Verhalten der Operatoren {{jsxref("Operators/instanceof", "instanceof")}}, {{jsxref("Operators/typeof", "typeof")}}, {{jsxref("Operators/new", "new")}}, {{jsxref("Operators/this", "this")}}, die [Operatorpräzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) und mehr.
- [Anweisungen und Deklarationen](/de/docs/Web/JavaScript/Reference/Statements)
  - : Lernen Sie, wie {{jsxref("Statements/do...while", "do-while")}}, {{jsxref("Statements/for...in", "for-in")}}, {{jsxref("Statements/for...of", "for-of")}}, {{jsxref("Statements/try...catch", "try-catch")}}, {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/var", "var")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/if...else", "if-else")}}, {{jsxref("Statements/switch", "switch")}} und weitere JavaScript-Anweisungen und Schlüsselwörter funktionieren.
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
  - : Lernen Sie, wie Sie mit Funktionen in JavaScript arbeiten, um Ihre Anwendungen zu entwickeln.
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
  - : JavaScript-Klassen sind der passende Weg, um objektorientierte Programmierung durchzuführen.
