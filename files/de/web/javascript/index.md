---
title: JavaScript
slug: Web/JavaScript
l10n:
  sourceCommit: 26e2f9883e0e73def04c0e86fec6da3ec42e66b3
---

{{jsSidebar}}

**JavaScript** (**JS**) ist eine leichtgewichtige, interpretierte (oder [just-in-time](https://en.wikipedia.org/wiki/Just-in-time_compilation) kompilierte) Programmiersprache mit {{Glossary("First-class Function", "First-Class-Funktionen")}}. Während es am bekanntesten als die Skriptsprache für Webseiten ist, wird es auch in [vielen nicht-browserbasierten Umgebungen](https://en.wikipedia.org/wiki/JavaScript#Other_usage) verwendet, wie z. B. {{Glossary("Node.js")}}, [Apache CouchDB](https://couchdb.apache.org/) und [Adobe Acrobat](https://opensource.adobe.com/dc-acrobat-sdk-docs/acrobatsdk/). JavaScript ist eine [prototypbasierte](/de/docs/Glossary/Prototype-based_programming), multi-paradigmatische, [einzelsträngige](/de/docs/Glossary/Thread), [dynamische](/de/docs/Glossary/Dynamic_typing) Sprache, die objektorientierte, imperative und deklarative (z. B. funktionale Programmierung) Stile unterstützt.

Die dynamischen Fähigkeiten von JavaScript umfassen Laufzeitobjektkonstruktion, variable Parameterlisten, Funktionsvariablen, dynamische Skripterstellung (via [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)), Objektintrospektion (via [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) und [`Object`-Utilities](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods)) und Quellcode-Wiederherstellung (JavaScript-Funktionen speichern ihren Quelltext und können über [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/toString) abgerufen werden).

Dieser Abschnitt ist der JavaScript-Sprache selbst gewidmet und nicht den Teilen, die speziell für Webseiten oder andere Host-Umgebungen sind. Für Informationen über {{Glossary("API", "APIs")}}, die spezifisch für Webseiten sind, siehe bitte [Web-APIs](/de/docs/Web/API) und {{Glossary("DOM")}}.

Die Standards für JavaScript sind die [ECMAScript Language Specification](https://tc39.es/ecma262/) (ECMA-262) und die [ECMAScript Internationalization API-Spezifikation](https://tc39.es/ecma402/) (ECMA-402). Sobald ein Browser ein Feature implementiert, versuchen wir, es zu dokumentieren. Dies bedeutet, dass in Fällen, in denen einige [Vorschläge für neue ECMAScript-Features](https://github.com/tc39/proposals) bereits in Browsern implementiert wurden, Dokumentationen und Beispiele in MDN-Artikeln einige dieser neuen Features verwenden können. Meistens passiert dies zwischen den [Stufen](https://tc39.es/process-document/) 3 und 4 und normalerweise bevor die Spezifikation offiziell veröffentlicht wird.

Verwechseln Sie JavaScript nicht mit der [Java-Programmiersprache](<https://en.wikipedia.org/wiki/Java_(programming_language)>) — **JavaScript ist _nicht_ "interpretiertes Java"**. Sowohl "Java" als auch "JavaScript" sind Marken oder eingetragene Marken von Oracle in den USA und anderen Ländern. Allerdings haben die beiden Programmiersprachen sehr unterschiedliche Syntaxen, Semantik und Verwendungszwecke.

Die Dokumentation zu den Kernfunktionen der JavaScript-Sprache (hauptsächlich reines [ECMAScript](/de/docs/Web/JavaScript/JavaScript_technologies_overview)) umfasst Folgendes:

- Der [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide)
- Das [JavaScript-Referenzhandbuch](/de/docs/Web/JavaScript/Reference)

Für weitere Informationen über JavaScript-Spezifikationen und verwandte Technologien siehe [JavaScript-Technologieübersicht](/de/docs/Web/JavaScript/JavaScript_technologies_overview).

## Tutorials

Lernen Sie, wie man in JavaScript programmiert, mit Leitfäden und Tutorials.

### Für völlige Anfänger

Besuchen Sie unser [JavaScript-Lernbereich-Thema](/de/docs/Learn/JavaScript), wenn Sie JavaScript erlernen möchten, aber keine Vorkenntnisse in JavaScript oder Programmierung haben. Die verfügbaren kompletten Module sind wie folgt:

- [JavaScript erste Schritte](/de/docs/Learn/JavaScript/First_steps)
  - : Beantwortet einige grundlegende Fragen wie "Was ist JavaScript?", "Wie sieht es aus?" und "Was kann es tun?", zusammen mit der Diskussion wichtiger JavaScript-Features wie Variablen, Strings, Zahlen und Arrays.
- [JavaScript-Bausteine](/de/docs/Learn/JavaScript/Building_blocks)
  - : Setzt unsere Behandlung wichtiger grundlegender JavaScript-Features fort und richtet den Fokus auf häufig anzutreffende Arten von Codeblöcken wie Bedingungsanweisungen, Schleifen, Funktionen und Ereignisse.
- [Einführung in JavaScript-Objekte](/de/docs/Learn/JavaScript/Objects)
  - : Die objektorientierte Natur von JavaScript ist wichtig zu verstehen, wenn Sie Ihr Wissen über die Sprache erweitern und effizienteren Code schreiben möchten. Daher haben wir dieses Modul bereitgestellt, um Ihnen dabei zu helfen.
- [Asynchrones JavaScript](/de/docs/Learn/JavaScript/Asynchronous)
  - : Diskutiert asynchrones JavaScript, warum es wichtig ist und wie es effektiv zur Handhabung potenzieller blockierender Operationen wie dem Abrufen von Ressourcen von einem Server verwendet werden kann.
- [Clientseitige Web-APIs](/de/docs/Learn/JavaScript/Client-side_web_APIs)
  - : Erforscht, was APIs sind und wie man einige der am häufigsten vorkommenden APIs bei Ihrer Entwicklungsarbeit nutzt.

### JavaScript-Leitfaden

- [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide)
  - : Ein viel detaillierterer Leitfaden zur JavaScript-Sprache, der sich an diejenigen richtet, die bereits Programmiererfahrung in JavaScript oder einer anderen Sprache haben.

### Mittelstufe

- [Verstehen von clientseitigen JavaScript-Frameworks](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks)
  - : JavaScript-Frameworks sind ein wesentlicher Bestandteil der modernen Frontend-Webentwicklung, da sie Entwicklern bewährte Werkzeuge für den Aufbau skalierbarer, interaktiver Webanwendungen bieten. Dieses Modul gibt Ihnen einige grundlegende Hintergrundinformationen darüber, wie clientseitige Frameworks funktionieren und wie sie sich in Ihr Werkzeugset einfügen, bevor es zu einer Reihe von Tutorials übergeht, die einige der heute beliebtesten behandeln.
- [JavaScript-Sprachübersicht](/de/docs/Web/JavaScript/Language_overview)
  - : Eine Übersicht über die grundlegende Syntax und Semantik von JavaScript für diejenigen, die aus anderen Programmiersprachen kommen, um sich schnell einzuarbeiten.
- [JavaScript-Datenstrukturen](/de/docs/Web/JavaScript/Data_structures)
  - : Überblick über die verfügbaren Datenstrukturen in JavaScript.
- [Gleichheitsvergleiche und Gleichheit](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness)
  - : JavaScript bietet drei verschiedene Wertvergleichsoperationen: strikte Gleichheit mit `===`, lockere Gleichheit mit `==` und die {{jsxref("Object.is()")}}-Methode.
- [Enumerierbarkeit und Eigentum von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
  - : Wie verschiedene Methoden, die eine Gruppe von Objekteigenschaften nacheinander besuchen, die Enumerierbarkeit und das Eigentum von Eigenschaften handhaben.
- [Closures](/de/docs/Web/JavaScript/Closures)
  - : Eine Closure ist die Kombination aus einer Funktion und der lexikalischen Umgebung, in der diese Funktion deklariert wurde.

### Fortgeschritten

- [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
  - : Erklärung der weithin missverstandenen und unterschätzten prototypbasierten Vererbung.
- [Speicherverwaltung](/de/docs/Web/JavaScript/Memory_management)
  - : Speicherlebenszyklus und Garbage Collection in JavaScript.
- [Der Ereignisschleife](/de/docs/Web/JavaScript/Event_loop)
  - : JavaScript hat ein Laufzeitmodell basierend auf einer "Ereignisschleife".

## Referenz

Durchsuchen Sie die komplette [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference)-Dokumentation.

- [Standardobjekte](/de/docs/Web/JavaScript/Reference/Global_Objects)
  - : Lernen Sie die standardmäßigen eingebauten Objekte {{jsxref("Array")}}, {{jsxref("Boolean")}}, {{jsxref("Date")}}, {{jsxref("Error")}}, {{jsxref("Function")}}, {{jsxref("JSON")}}, {{jsxref("Math")}}, {{jsxref("Number")}}, {{jsxref("Object")}}, {{jsxref("RegExp")}}, {{jsxref("String")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}} und andere kennen.
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Reference/Operators)
  - : Erfahren Sie mehr über das Verhalten der JavaScript-Operatoren {{jsxref("Operators/instanceof", "instanceof")}}, {{jsxref("Operators/typeof", "typeof")}}, {{jsxref("Operators/new", "new")}}, {{jsxref("Operators/this", "this")}}, die [Operatorvorrangfolge](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) und mehr.
- [Anweisungen und Deklarationen](/de/docs/Web/JavaScript/Reference/Statements)
  - : Lernen Sie, wie {{jsxref("Statements/do...while", "do-while")}}, {{jsxref("Statements/for...in", "for-in")}}, {{jsxref("Statements/for...of", "for-of")}}, {{jsxref("Statements/try...catch", "try-catch")}}, {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/var", "var")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/if...else", "if-else")}}, {{jsxref("Statements/switch", "switch")}} und andere JavaScript-Anweisungen und Schlüsselwörter funktionieren.
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
  - : Lernen Sie, wie Sie mit JavaScript-Funktionen arbeiten, um Ihre Anwendungen zu entwickeln.
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
  - : JavaScript-Klassen sind der angemessenste Weg, objektorientierte Programmierung zu betreiben.
