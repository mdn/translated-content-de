---
title: JavaScript
slug: Web/JavaScript
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{jsSidebar}}

**JavaScript** (**JS**) ist eine leichtgewichtige interpretierte (oder {{Glossary("Just_In_Time_Compilation", "just-in-time kompilierte")}}) Programmiersprache mit {{Glossary("First-class_Function", "erstklassigen Funktionen")}}. Während es am bekanntesten als Skriptsprache für Webseiten ist, wird es auch in [vielen nicht-browserbasierten Umgebungen](https://en.wikipedia.org/wiki/JavaScript#Other_usage) verwendet, wie z.B. {{Glossary("Node.js", "Node.js")}}, [Apache CouchDB](https://couchdb.apache.org/) und [Adobe Acrobat](https://opensource.adobe.com/dc-acrobat-sdk-docs/acrobatsdk/). JavaScript ist eine {{Glossary("Prototype-based_programming", "prototyp-basierte")}}, multi-paradigmatische, {{Glossary("Thread", "einzel-threadbasierte")}}, {{Glossary("Dynamic_typing", "dynamische")}} Sprache, die objektorientierte, imperative und deklarative (z.B. funktionale Programmierung) Stile unterstützt.

Die dynamischen Fähigkeiten von JavaScript umfassen die Konstruktion von Objekten zur Laufzeit, variable Parameterlisten, Funktionsvariablen, dynamische Skripterstellung (über [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)), Objekt-Introspektion (über [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) und [`Object`-Utilities](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods)) und Quellcode-Wiederherstellung (JavaScript-Funktionen speichern ihren Quelltext und können über [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/toString) abgerufen werden).

Dieser Abschnitt ist der JavaScript-Sprache selbst gewidmet und nicht den Teilen, die speziell für Webseiten oder andere Host-Umgebungen sind. Für Informationen über {{Glossary("API", "APIs")}}, die speziell für Webseiten sind, siehe [Web-APIs](/de/docs/Web/API) und {{Glossary("DOM", "DOM")}}.

Die Standards für JavaScript sind die [ECMAScript Language Specification](https://tc39.es/ecma262/) (ECMA-262) und die [ECMAScript Internationalization API Spezifikation](https://tc39.es/ecma402/) (ECMA-402). Sobald ein Browser eine Funktion implementiert, versuchen wir, diese zu dokumentieren. Dies bedeutet, dass in Fällen, in denen einige [Vorschläge für neue ECMAScript-Funktionen](https://github.com/tc39/proposals) bereits in Browsern implementiert sind, die Dokumentation und Beispiele in MDN-Artikeln einige dieser neuen Funktionen verwenden können. Meistens geschieht dies zwischen den [Stufen](https://tc39.es/process-document/) 3 und 4 und normalerweise bevor die Spezifikation offiziell veröffentlicht ist.

Verwechseln Sie JavaScript nicht mit der [Programmiersprache Java](<https://en.wikipedia.org/wiki/Java_(programming_language)>) — **JavaScript ist _nicht_ "interpretiertes Java"**. Sowohl "Java" als auch "JavaScript" sind Marken oder eingetragene Marken von Oracle in den USA und anderen Ländern. Allerdings haben die beiden Programmiersprachen sehr unterschiedliche Syntax, Semantik und Verwendung.

Die Dokumentation der JavaScript-Kernsprache (im Wesentlichen reines [ECMAScript](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview)) umfasst Folgendes:

- Der [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide)
- Das [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference)

Für weitere Informationen über JavaScript-Spezifikationen und verwandte Technologien siehe [Übersicht der JavaScript-Technologien](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview).

## Tutorials für Anfänger

Lernen Sie, wie man von Grund auf in JavaScript programmiert mit unseren Tutorials für Anfänger.

- [Ihre erste Website: Interaktivität hinzufügen](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity)
  - : Dieser Artikel bietet eine kurze Einführung darüber, was JavaScript ist und wie es verwendet wird, ausgerichtet auf Personen, die komplett neu in der Webentwicklung sind.
- [Dynamisches Skripting mit JavaScript](/de/docs/Learn_web_development/Core/Scripting)
  - : Das JavaScript-Modul in unserem [Lernen Sie Webentwicklung](/de/docs/Learn_web_development)-Bereich lehrt alle JavaScript-Grundlagen von Grund auf.
- [JavaScript-Frameworks und -Bibliotheken](/de/docs/Learn_web_development/Core/Frameworks_libraries)
  - : JavaScript-Frameworks sind ein wesentlicher Bestandteil der modernen Frontend-Webentwicklung und bieten Entwicklern erprobte Werkzeuge, um skalierbare, interaktive Webanwendungen zu erstellen. Viele moderne Unternehmen verwenden Frameworks als Standardbestandteil ihrer Toolsets, daher erfordern viele Frontend-Entwicklungsjobs jetzt Erfahrung mit Frameworks. In diesem Artikelset wollen wir Ihnen einen komfortablen Einstieg bieten, um Ihnen den Anfang mit Frameworks zu erleichtern.

## JavaScript-Leitfäden

### Grundlegende Sprachleitfäden

- [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide)
  - : Ein weitaus detaillierterer Leitfaden zur JavaScript-Sprache, ausgerichtet auf diejenigen mit vorheriger Programmiererfahrung entweder in JavaScript oder einer anderen Sprache.

### Fortgeschritten

- [Erweiterte JavaScript-Objekte](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects)
  - : Die objektorientierte Natur von JavaScript ist wichtig zu verstehen, wenn Sie Ihre Kenntnisse der Sprache weiter vertiefen und effizienteren Code schreiben möchten, daher haben wir dieses Modul zu Ihrer Hilfe bereitgestellt.
- [Asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS)
  - : In diesem Modul schauen wir uns {{Glossary("asynchronous", "asynchrones")}} JavaScript an, warum es wichtig ist und wie es effektiv eingesetzt werden kann, um potenziell blockierende Operationen, wie das Abrufen von Ressourcen von einem Server, zu behandeln.
- [Client-seitige Web-APIs](/de/docs/Learn_web_development/Extensions/Client-side_APIs)
  - : Erforscht, was APIs sind und wie man einige der häufigsten APIs verwendet, die Ihnen oft in Ihrer Entwicklungsarbeit begegnen werden.
- [JavaScript-Sprachübersicht](/de/docs/Web/JavaScript/Guide/Language_overview)
  - : Eine Übersicht über die grundlegende Syntax und Semantik von JavaScript für diejenigen, die aus anderen Programmiersprachen kommen, um sich schnell einzuarbeiten.
- [JavaScript-Datenstrukturen](/de/docs/Web/JavaScript/Guide/Data_structures)
  - : Übersicht über verfügbare Datenstrukturen in JavaScript.
- [Vergleich von Gleichheit und Identität](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness)
  - : JavaScript bietet drei verschiedene Wertvergleichsoperationen: strikte Gleichheit mit `===`, lose Gleichheit mit `==` und die {{jsxref("Object.is()")}}-Methode.
- [Aufzählbarkeit und Besitz von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
  - : Wie verschiedene Methoden, die eine Gruppe von Objekteigenschaften einzeln besuchen, mit der Aufzählbarkeit und dem Besitz von Eigenschaften umgehen.
- [Closures](/de/docs/Web/JavaScript/Guide/Closures)
  - : Ein Closure ist die Kombination aus einer Funktion und der lexikalischen Umgebung, in der diese Funktion deklariert wurde.

### Fortgeschrittene Themen

- [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
  - : Erklärung der weitgehend missverstandenen und unterschätzten prototypbasierten Vererbung.
- [Speichermanagement](/de/docs/Web/JavaScript/Guide/Memory_management)
  - : Speicherlebenszyklus und Speicherbereinigung in JavaScript.

## Referenz

Durchsuchen Sie die vollständige [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference)-Dokumentation.

- [Standardobjekte](/de/docs/Web/JavaScript/Reference/Global_Objects)
  - : Lernen Sie eingebaute Standardobjekte kennen: {{jsxref("Array")}}, {{jsxref("Boolean")}}, {{jsxref("Error")}}, {{jsxref("Function")}}, {{jsxref("JSON")}}, {{jsxref("Math")}}, {{jsxref("Number")}}, {{jsxref("Object")}}, {{jsxref("RegExp")}}, {{jsxref("String")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}} und andere.
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Reference/Operators)
  - : Erfahren Sie mehr über das Verhalten von JavaScript-Operatoren {{jsxref("Operators/instanceof", "instanceof")}}, {{jsxref("Operators/typeof", "typeof")}}, {{jsxref("Operators/new", "new")}}, {{jsxref("Operators/this", "this")}}, die [Operatorrangfolge](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) und mehr.
- [Anweisungen und Deklarationen](/de/docs/Web/JavaScript/Reference/Statements)
  - : Lernen Sie, wie {{jsxref("Statements/do...while", "do-while")}}, {{jsxref("Statements/for...in", "for-in")}}, {{jsxref("Statements/for...of", "for-of")}}, {{jsxref("Statements/try...catch", "try-catch")}}, {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/var", "var")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/if...else", "if-else")}}, {{jsxref("Statements/switch", "switch")}} und weitere JavaScript-Anweisungen und Schlüsselwörter funktionieren.
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
  - : Lernen Sie, mit den Funktionen von JavaScript zu arbeiten, um Ihre Anwendungen zu entwickeln.
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
  - : JavaScript-Klassen sind der geeignetste Weg, objektorientierte Programmierung zu betreiben.
