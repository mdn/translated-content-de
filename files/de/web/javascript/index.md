---
title: JavaScript
slug: Web/JavaScript
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar}}

**JavaScript** (**JS**) ist eine leichtgewichtige interpretierte (oder {{Glossary("Just_In_Time_Compilation", "just-in-time kompilierte")}}) Programmiersprache mit {{Glossary("First-class_Function", "erstklassigen Funktionen")}}. Während sie am bekanntesten als Skriptsprache für Webseiten ist, wird sie auch in [vielen nicht-browserbasierten Umgebungen](https://en.wikipedia.org/wiki/JavaScript#Other_usage) verwendet, wie zum Beispiel {{Glossary("Node.js", "Node.js")}}, [Apache CouchDB](https://couchdb.apache.org/) und [Adobe Acrobat](https://opensource.adobe.com/dc-acrobat-sdk-docs/acrobatsdk/). JavaScript ist eine {{Glossary("Prototype-based_programming", "prototypbasierte")}}, multi-paradigmatische, {{Glossary("Thread", "einzel-threaded")}}, {{Glossary("Dynamic_typing", "dynamische")}} Sprache, die objektorientierte, imperative und deklarative (z.B. funktionale Programmierung) Stile unterstützt.

Die dynamischen Fähigkeiten von JavaScript umfassen die Laufzeitobjektkonstruktion, variable Parameterlisten, Funktionsvariablen, dynamische Skripterstellung (via [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)), Objektintrospektion (via [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) und [`Object`-Utilities](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods)) und Quellcode-Wiederherstellung (JavaScript-Funktionen speichern ihren Quelltext und können über [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/toString) abgerufen werden).

Dieser Abschnitt ist der JavaScript-Sprache selbst gewidmet und nicht den Teilen, die für Webseiten oder andere Hostumgebungen spezifisch sind. Für Informationen über {{Glossary("API", "APIs")}}, die speziell für Webseiten sind, siehe [Web APIs](/de/docs/Web/API) und {{Glossary("DOM", "DOM")}}.

Die Standards für JavaScript sind die [ECMAScript Language Specification](https://tc39.es/ecma262/) (ECMA-262) und die [ECMAScript Internationalization API specification](https://tc39.es/ecma402/) (ECMA-402). Sobald ein Browser eine Funktion implementiert, versuchen wir, sie zu dokumentieren. Das bedeutet, dass Fälle, in denen einige [Vorschläge für neue ECMAScript-Funktionen](https://github.com/tc39/proposals) bereits in Browsern implementiert wurden, Dokumentationen und Beispiele in MDN-Artikeln diese neuen Funktionen verwenden können. Meistens passiert dies zwischen den [Stufen](https://tc39.es/process-document/) 3 und 4 und normalerweise bevor die Spezifikation offiziell veröffentlicht wird.

Verwechseln Sie JavaScript nicht mit der [Java-Programmiersprache](<https://en.wikipedia.org/wiki/Java_(programming_language)>) — **JavaScript ist _nicht_ "interpretiertes Java"**. Sowohl "Java" als auch "JavaScript" sind Marken oder eingetragene Marken von Oracle in den USA und anderen Ländern. Die beiden Programmiersprachen unterscheiden sich jedoch stark in Syntax, Semantik und Verwendung.

Die JavaScript-Dokumentation der Kernspracheigenschaften (zum großen Teil reines [ECMAScript](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview)) umfasst Folgendes:

- Den [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide)
- Das [JavaScript-Referenzhandbuch](/de/docs/Web/JavaScript/Reference)

Für weitere Informationen über JavaScript-Spezifikationen und verwandte Technologien siehe [JavaScript-Technologieübersicht](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview).

## Anfängeranleitungen

Lernen Sie, wie man in JavaScript von Grund auf programmiert mit unseren Anfängeranleitungen.

- [Ihre erste Webseite: Interaktivität hinzufügen](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity)
  - : Dieser Artikel bietet eine kurze Einführung, was JavaScript ist und wie es genutzt wird, und richtet sich an Personen, die völlig neu in der Webentwicklung sind.
- [Dynamisches Scripting mit JavaScript](/de/docs/Learn_web_development/Core/Scripting)
  - : Unser [Leitfaden zur Webentwicklung](/de/docs/Learn_web_development) bietet ein JavaScript-Modul, das alle JavaScript-Grundlagen von Grund auf lehrt.
- [JavaScript-Frameworks und -Bibliotheken](/de/docs/Learn_web_development/Core/Frameworks_libraries)
  - : JavaScript-Frameworks sind ein wesentlicher Bestandteil der modernen Frontend-Webentwicklung und bieten Entwicklern bewährte Werkzeuge zum Erstellen skalierbarer, interaktiver Webanwendungen. Viele moderne Unternehmen nutzen Frameworks als Standardteil ihrer Werkzeuge, und viele Frontend-Entwicklungsjobs erfordern jetzt Framework-Erfahrung. In dieser Artikelsammlung möchten wir Ihnen einen bequemen Ausgangspunkt geben, um Ihnen beim Erlernen von Frameworks zu helfen.

## JavaScript-Leitfäden

### Grundlegende Sprachleitfäden

- [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide)
  - : Ein viel detaillierterer Leitfaden für die JavaScript-Sprache, der sich an Personen mit vorheriger Programmiererfahrung in JavaScript oder einer anderen Sprache richtet.

### Mittelstufe

- [Fortgeschrittene JavaScript-Objekte](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects)
  - : Die objektorientierte Natur von JavaScript ist wichtig zu verstehen, wenn Sie Ihr Wissen über die Sprache vertiefen und effizienteren Code schreiben möchten, daher haben wir dieses Modul bereitgestellt, um Ihnen zu helfen.
- [Asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS)
  - : In diesem Modul betrachten wir {{Glossary("asynchronous", "asynchrones")}} JavaScript, warum es wichtig ist und wie es effektiv zur Handhabung potenziell blockierender Operationen, wie dem Abrufen von Ressourcen von einem Server, verwendet werden kann.
- [Clientseitige Web-APIs](/de/docs/Learn_web_development/Extensions/Client-side_APIs)
  - : Erforscht, was APIs sind und wie einige der gängigsten APIs, denen Sie in Ihrer Entwicklungsarbeit häufig begegnen werden, verwendet werden.
- [JavaScript-Sprachüberblick](/de/docs/Web/JavaScript/Guide/Language_overview)
  - : Ein Überblick über die grundlegende Syntax und Semantik von JavaScript für diejenigen, die aus anderen Programmiersprachen kommen, um sich schnell ein zurechtzufinden.
- [JavaScript-Datenstrukturen](/de/docs/Web/JavaScript/Guide/Data_structures)
  - : Übersicht über verfügbare Datenstrukturen in JavaScript.
- [Gleichheitsvergleiche und Gleichheit](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness)
  - : JavaScript bietet drei verschiedene Vergleichsoperationen für Werte: strikte Gleichheit mit `===`, lose Gleichheit mit `==` und die {{jsxref("Object.is()")}} Methode.
- [Enumerabilität und Eigentum von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
  - : Wie verschiedene Methoden, die eine Gruppe von Objekteigenschaften einzeln besuchen, mit der Enumerabilität und dem Eigentum von Eigenschaften umgehen.
- [Closures](/de/docs/Web/JavaScript/Guide/Closures)
  - : Ein Closure ist die Kombination einer Funktion und der lexikalischen Umgebung, in der diese Funktion deklariert wurde.

### Fortgeschritten

- [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
  - : Erklärung der weitgehend missverstandenen und unterschätzten prototypbasierten Vererbung.
- [Speicherverwaltung](/de/docs/Web/JavaScript/Guide/Memory_management)
  - : Speicherlebenszyklus und Speicherbereinigung in JavaScript.

## Referenz

Durchsuchen Sie die vollständige [JavaScript-Referenzdokumentation](/de/docs/Web/JavaScript/Reference).

- [Standardobjekte](/de/docs/Web/JavaScript/Reference/Global_Objects)
  - : Lernen Sie die standardmäßigen eingebauten Objekte kennen: {{jsxref("Array")}}, {{jsxref("Boolean")}}, {{jsxref("Error")}}, {{jsxref("Function")}}, {{jsxref("JSON")}}, {{jsxref("Math")}}, {{jsxref("Number")}}, {{jsxref("Object")}}, {{jsxref("RegExp")}}, {{jsxref("String")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}} und andere.
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Reference/Operators)
  - : Erfahren Sie mehr über das Verhalten von JavaScript-Operatoren {{jsxref("Operators/instanceof", "instanceof")}}, {{jsxref("Operators/typeof", "typeof")}}, {{jsxref("Operators/new", "new")}}, {{jsxref("Operators/this", "this")}}, die [Operatorenreihenfolge](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) und mehr.
- [Anweisungen und Deklarationen](/de/docs/Web/JavaScript/Reference/Statements)
  - : Erfahren Sie, wie {{jsxref("Statements/do...while", "do-while")}}, {{jsxref("Statements/for...in", "for-in")}}, {{jsxref("Statements/for...of", "for-of")}}, {{jsxref("Statements/try...catch", "try-catch")}}, {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/var", "var")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/if...else", "if-else")}}, {{jsxref("Statements/switch", "switch")}} und mehr JavaScript-Anweisungen und Schlüsselwörter funktionieren.
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
  - : Erfahren Sie, wie Sie mit den Funktionen von JavaScript arbeiten, um Ihre Anwendungen zu entwickeln.
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
  - : JavaScript-Klassen sind der geeignetste Weg, um objektorientierte Programmierung zu betreiben.
