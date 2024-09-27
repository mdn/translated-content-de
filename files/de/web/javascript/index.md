---
title: JavaScript
slug: Web/JavaScript
l10n:
  sourceCommit: 26e2f9883e0e73def04c0e86fec6da3ec42e66b3
---

{{jsSidebar}}

**JavaScript** (**JS**) ist eine leichtgewichtige interpretierte (oder [just-in-time](https://en.wikipedia.org/wiki/Just-in-time_compilation) kompilierte) Programmiersprache mit [erstklassigen Funktionen](/de/docs/Glossary/First-class_Function). Während es am bekanntesten als Skriptsprache für Webseiten ist, wird es auch in [vielen Nicht-Browser-Umgebungen](https://en.wikipedia.org/wiki/JavaScript#Other_usage) verwendet, wie beispielsweise in [Node.js](/de/docs/Glossary/Node.js), [Apache CouchDB](https://couchdb.apache.org/) und [Adobe Acrobat](https://opensource.adobe.com/dc-acrobat-sdk-docs/acrobatsdk/). JavaScript ist eine [prototypbasierte](/de/docs/Glossary/Prototype-based_programming), multi-paradigmatische, [einzelgethreadete](/de/docs/Glossary/Thread), [dynamische](/de/docs/Glossary/Dynamic_typing) Sprache, die objektorientierte, imperative und deklarative (z.B. funktionale Programmierung) Stile unterstützt.

Die dynamischen Fähigkeiten von JavaScript beinhalten die Konstruktion von Objekten zur Laufzeit, Listen von variablen Parametern, Funktionsvariablen, dynamische Skripterstellung (über [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)), Objektinspektion (über [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) und [`Object` Werkzeuge](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods)) und Quelltextwiederherstellung (JavaScript-Funktionen speichern ihren Quelltext und können über [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/toString) abgerufen werden).

Dieser Abschnitt ist der JavaScript-Sprache selbst gewidmet und nicht den Teilen, die für Webseiten oder andere Hostumgebungen spezifisch sind. Für Informationen über [APIs](/de/docs/Glossary/API), die für Webseiten spezifisch sind, siehe [Web APIs](/de/docs/Web/API) und [DOM](/de/docs/Glossary/DOM).

Die Standards für JavaScript sind die [ECMAScript Language Specification](https://tc39.es/ecma262/) (ECMA-262) und die [ECMAScript Internationalization API Specification](https://tc39.es/ecma402/) (ECMA-402). Sobald ein Browser ein Feature implementiert, versuchen wir, es zu dokumentieren. Dies bedeutet, dass in Fällen, in denen einige [Vorschläge für neue ECMAScript-Features](https://github.com/tc39/proposals) bereits in Browsern implementiert wurden, die Dokumentation und Beispiele in MDN-Artikeln einige dieser neuen Features verwenden können. Meistens geschieht dies zwischen den [Stufen](https://tc39.es/process-document/) 3 und 4 und normalerweise bevor die Spezifikation offiziell veröffentlicht wird.

Verwechseln Sie JavaScript nicht mit der [Java Programmiersprache](<https://en.wikipedia.org/wiki/Java_(programming_language)>) — **JavaScript ist _nicht_ "interpretiertes Java"**. Sowohl "Java" als auch "JavaScript" sind Marken oder eingetragene Marken von Oracle in den USA und anderen Ländern. Die beiden Programmiersprachen haben jedoch sehr unterschiedliche Syntaxen, Semantiken und Einsatzgebiete.

Die JavaScript-Dokumentation der Kernspracheigenschaften (im Wesentlichen [ECMAScript](/de/docs/Web/JavaScript/JavaScript_technologies_overview)) umfasst Folgendes:

- Den [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide)
- Die [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference)

Für weitere Informationen über JavaScript-Spezifikationen und verwandte Technologien, siehe [JavaScript-Technologieübersicht](/de/docs/Web/JavaScript/JavaScript_technologies_overview).

## Tutorials

Lernen Sie, wie man mit JavaScript programmiert, mit Leitfäden und Tutorials.

### Für vollständige Anfänger

Besuchen Sie unser [Lernbereich JavaScript-Thema](/de/docs/Learn/JavaScript), wenn Sie JavaScript lernen möchten, aber keine Vorkenntnisse in JavaScript oder Programmierung haben. Die dort verfügbaren vollständigen Module sind wie folgt:

- [Erste Schritte mit JavaScript](/de/docs/Learn/JavaScript/First_steps)
  - : Beantwortet einige grundlegende Fragen wie "Was ist JavaScript?", "Wie sieht es aus?" und "Was kann es tun?", zusammen mit der Diskussion über wichtige JavaScript-Funktionen wie Variablen, Strings, Zahlen und Arrays.
- [JavaScript-Bausteine](/de/docs/Learn/JavaScript/Building_blocks)
  - : Setzt unsere Abdeckung der grundlegenden Funktionen von JavaScript fort und richtet unser Augenmerk auf häufig vorkommende Arten von Codeblöcken wie Bedingungsanweisungen, Schleifen, Funktionen und Ereignisse.
- [Einführung in JavaScript-Objekte](/de/docs/Learn/JavaScript/Objects)
  - : Die objektorientierte Natur von JavaScript ist wichtig zu verstehen, wenn Sie weiter mit Ihrem Wissen über die Sprache gehen und effizienteren Code schreiben möchten; daher haben wir dieses Modul bereitgestellt, um Ihnen zu helfen.
- [Asynchrones JavaScript](/de/docs/Learn/JavaScript/Asynchronous)
  - : Bespricht asynchrones JavaScript, warum es wichtig ist und wie es verwendet werden kann, um potenziell blockierende Vorgänge wie das Abrufen von Ressourcen von einem Server effektiv zu handhaben.
- [Client-seitige Web-APIs](/de/docs/Learn/JavaScript/Client-side_web_APIs)
  - : Erforscht, was APIs sind und wie man einige der häufigsten APIs verwendet, die Ihnen oft in Ihrer Entwicklungsarbeit begegnen werden.

### JavaScript-Leitfaden

- [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide)
  - : Ein weit detaillierterer Leitfaden zur JavaScript-Sprache, der sich an diejenigen richtet, die bereits Programmiererfahrung in JavaScript oder einer anderen Sprache haben.

### Mittelstufe

- [Verständnis von client-seitigen JavaScript-Frameworks](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks)
  - : JavaScript-Frameworks sind ein wesentlicher Bestandteil der modernen Front-End-Webentwicklung und bieten Entwicklern bewährte Werkzeuge zum Erstellen von skalierbaren, interaktiven Webanwendungen. Dieses Modul gibt Ihnen ein grundlegendes Hintergrundwissen darüber, wie client-seitige Frameworks funktionieren und wie sie in Ihr Werkzeugset passen, bevor es zu einer Reihe von Tutorials über einige der aktuell beliebtesten übergeht.
- [JavaScript-Sprachüberblick](/de/docs/Web/JavaScript/Language_overview)
  - : Ein Überblick über die grundlegende Syntax und Semantik von JavaScript für diejenigen, die aus anderen Programmiersprachen kommen, um sich schnell vertraut zu machen.
- [JavaScript-Datenstrukturen](/de/docs/Web/JavaScript/Data_structures)
  - : Überblick über verfügbare Datenstrukturen in JavaScript.
- [Gleichheitsvergleiche und Gleichheit](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness)
  - : JavaScript bietet drei verschiedene Möglichkeiten zum Vergleichen von Werten: strikte Gleichheit mit `===`, lose Gleichheit mit `==` und die {{jsxref("Object.is()")}} Methode.
- [Aufzählbarkeit und Besitz von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
  - : Wie verschiedene Methoden, die eine Gruppe von Objekteigenschaften einzeln besuchen, mit der Aufzählbarkeit und dem Besitz von Eigenschaften umgehen.
- [Closures](/de/docs/Web/JavaScript/Closures)
  - : Ein Closure ist die Kombination einer Funktion und der lexikalischen Umgebung, in der diese Funktion deklariert wurde.

### Fortgeschritten

- [Vererbung und die Prototyp-Kette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
  - : Erklärung des weit missverstandenen und unterschätzten prototypbasierten Vererbungsmodells.
- [Speicherverwaltung](/de/docs/Web/JavaScript/Memory_management)
  - : Speicherlebenszyklus und Speicherbereinigung in JavaScript.
- [Die Ereignisschleife](/de/docs/Web/JavaScript/Event_loop)
  - : JavaScript hat ein Laufzeitmodell, das auf einer "Ereignisschleife" basiert.

## Referenz

Durchsuchen Sie die vollständige [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) Dokumentation.

- [Standardobjekte](/de/docs/Web/JavaScript/Reference/Global_Objects)
  - : Lernen Sie die Standard-Built-In Objekte kennen, wie {{jsxref("Array")}}, {{jsxref("Boolean")}}, {{jsxref("Date")}}, {{jsxref("Error")}}, {{jsxref("Function")}}, {{jsxref("JSON")}}, {{jsxref("Math")}}, {{jsxref("Number")}}, {{jsxref("Object")}}, {{jsxref("RegExp")}}, {{jsxref("String")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}} und andere.
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Reference/Operators)
  - : Erfahren Sie mehr über das Verhalten der JavaScript-Operatoren {{jsxref("Operators/instanceof", "instanceof")}}, {{jsxref("Operators/typeof", "typeof")}}, {{jsxref("Operators/new", "new")}}, {{jsxref("Operators/this", "this")}}, die [Operatorvorrangregeln](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) und mehr.
- [Anweisungen und Deklarationen](/de/docs/Web/JavaScript/Reference/Statements)
  - : Lernen Sie, wie {{jsxref("Statements/do...while", "do-while")}}, {{jsxref("Statements/for...in", "for-in")}}, {{jsxref("Statements/for...of", "for-of")}}, {{jsxref("Statements/try...catch", "try-catch")}}, {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/var", "var")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/if...else", "if-else")}}, {{jsxref("Statements/switch", "switch")}} und mehr JavaScript-Anweisungen und Schlüsselwörter funktionieren.
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
  - : Lernen Sie, wie Sie mit den Funktionen von JavaScript arbeiten, um Ihre Anwendungen zu entwickeln.
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
  - : JavaScript-Klassen sind der geeignetste Weg, um objektorientierte Programmierung zu betreiben.
