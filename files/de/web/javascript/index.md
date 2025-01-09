---
title: JavaScript
slug: Web/JavaScript
l10n:
  sourceCommit: 60135afae7e48e55957c417f5701a7f6e06b7bac
---

{{jsSidebar}}

**JavaScript** (**JS**) ist eine leichtgewichtige interpretierte (oder {{Glossary("Just_In_Time_Compilation", "just-in-time-kompilierte")}}) Programmiersprache mit {{Glossary("First-class_Function", "First-Class-Funktionen")}}. Während es am bekanntesten als die Skriptsprache für Webseiten ist, wird es auch in [vielen Nicht-Browser-Umgebungen](https://de.wikipedia.org/wiki/JavaScript#Andere_Verwendung) eingesetzt, wie z.B. {{Glossary("Node.js", "Node.js")}}, [Apache CouchDB](https://couchdb.apache.org/) und [Adobe Acrobat](https://opensource.adobe.com/dc-acrobat-sdk-docs/acrobatsdk/). JavaScript ist eine {{Glossary("Prototype-based_programming", "prototypbasierte")}}, multi-paradigmatische, {{Glossary("Thread", "einzel-threaded")}}, {{Glossary("Dynamic_typing", "dynamische")}} Sprache, die objektorientierte, imperative und deklarative (z.B. funktionales Programmieren) Stile unterstützt.

Die dynamischen Fähigkeiten von JavaScript umfassen die Laufzeit-Konstruktion von Objekten, variable Parameterlisten, Funktionsvariablen, dynamische Skripterstellung (mit [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)), Objekt-Inspektion (mit [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) und [`Object`-Utilities](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods)) und Quellcode-Wiederherstellung (JavaScript-Funktionen speichern ihren Quelltext und können durch [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/toString) abgerufen werden).

Dieser Abschnitt widmet sich der JavaScript-Sprache selbst und nicht den Teilen, die spezifisch für Webseiten oder andere Hostumgebungen sind. Für Informationen über {{Glossary("API", "APIs")}}, die spezifisch für Webseiten sind, siehe [Web-APIs](/de/docs/Web/API) und {{Glossary("DOM", "DOM")}}.

Die Standards für JavaScript sind die [ECMAScript-Sprachspezifikation](https://tc39.es/ecma262/) (ECMA-262) und die [ECMAScript-Internationalisierungs-API-Spezifikation](https://tc39.es/ecma402/) (ECMA-402). Sobald ein Browser ein Feature implementiert, versuchen wir, es zu dokumentieren. Dies bedeutet, dass in Fällen, in denen einige [Vorschläge für neue ECMAScript-Funktionen](https://github.com/tc39/proposals) bereits in Browsern implementiert wurden, Dokumentation und Beispiele in MDN-Artikeln einige dieser neuen Funktionen verwenden können. Meistens geschieht dies zwischen den [Phasen](https://tc39.es/process-document/) 3 und 4 und liegt normalerweise vor der offiziellen Veröffentlichung der Spezifikation.

Verwechseln Sie JavaScript nicht mit der [Java-Programmiersprache](<https://de.wikipedia.org/wiki/Java_(Programmiersprache)>) — **JavaScript ist _nicht_ „interpretiertes Java“**. Sowohl „Java“ als auch „JavaScript“ sind Marken oder eingetragene Marken von Oracle in den USA und anderen Ländern. Die beiden Programmiersprachen haben jedoch sehr unterschiedliche Syntax, Semantik und Verwendung.

Die JavaScript-Dokumentation zu Kernsprachenmerkmalen (hauptsächlich reines [ECMAScript](/de/docs/Web/JavaScript/JavaScript_technologies_overview)) umfasst Folgendes:

- Der [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide)
- Das [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference)

Für weitere Informationen über JavaScript-Spezifikationen und verwandte Technologien siehe [JavaScript-Technologieübersicht](/de/docs/Web/JavaScript/JavaScript_technologies_overview).

## Einsteiger-Tutorials

Lernen Sie mit unseren Einsteiger-Tutorials, wie man JavaScript von Grund auf programmiert.

- [Ihre erste Webseite: Hinzufügen von Interaktivität](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity)
  - : Dieser Artikel bietet eine kurze Einführung, was JavaScript ist und wie man es benutzt, und richtet sich an Personen, die völlig neu in der Webentwicklung sind.
- [Dynamisches Scripting mit JavaScript](/de/docs/Learn_web_development/Core/Scripting)
  - : Unser Abschnitt [Webentwicklung lernen](/de/docs/Learn_web_development) lehrt in seinem JavaScript-Modul alle Grundlagen von JavaScript von Grund auf.
- [JavaScript-Frameworks und -Bibliotheken](/de/docs/Learn_web_development/Core/Frameworks_libraries)
  - : JavaScript-Frameworks sind ein wesentlicher Bestandteil der modernen Frontend-Webentwicklung und bieten Entwicklern erprobte Werkzeuge zum Erstellen skalierbarer, interaktiver Webanwendungen. Viele moderne Unternehmen verwenden Frameworks als Standard in ihren Werkzeugen, daher erfordern viele Frontend-Entwicklerjobs jetzt Framework-Erfahrung. In dieser Artikelreihe möchten wir Ihnen einen komfortablen Einstiegspunkt bieten, um Ihnen beim Erlernen von Frameworks zu helfen.

## JavaScript-Leitfäden

### Grundlegende Sprachleitfäden

- [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide)
  - : Ein weitaus detaillierterer Leitfaden zur JavaScript-Sprache, der sich an diejenigen richtet, die bereits Programmiererfahrungen, entweder in JavaScript oder einer anderen Sprache, haben.

### Fortgeschrittene

- [Fortgeschrittene JavaScript-Objekte](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects)
  - : Das objektorientierte Wesen von JavaScript zu verstehen ist wichtig, wenn Sie Ihr Wissen über die Sprache vertiefen und effizienteren Code schreiben möchten; deshalb haben wir dieses Modul bereitgestellt, um Ihnen zu helfen.
- [Asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS)
  - : In diesem Modul betrachten wir {{Glossary("asynchronous", "asynchrones")}} JavaScript, warum es wichtig ist und wie es effektiv zur Handhabung potenziell blockierender Operationen, wie dem Abrufen von Ressourcen von einem Server, verwendet werden kann.
- [Client-seitige Web-APIs](/de/docs/Learn_web_development/Extensions/Client-side_APIs)
  - : Erforscht was APIs sind und wie man einige der am häufigsten verwendeten APIs in der Entwicklungspraxis verwendet.
- [JavaScript-Sprachübersicht](/de/docs/Web/JavaScript/Language_overview)
  - : Eine Übersicht über die grundlegende Syntax und Semantik von JavaScript für diejenigen, die aus anderen Programmiersprachen kommen, um auf den neuesten Stand zu kommen.
- [JavaScript-Datenstrukturen](/de/docs/Web/JavaScript/Data_structures)
  - : Übersicht über die verfügbaren Datenstrukturen in JavaScript.
- [Vergleich von Gleichheit und Gleichartigkeit](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness)
  - : JavaScript bietet drei verschiedene Wertvergleichsoperationen: strikte Gleichheit mit `===`, lose Gleichheit mit `==` und die {{jsxref("Object.is()")}}-Methode.
- [Aufzählbarkeit und Besitz von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
  - : Wie verschiedene Methoden, die eine Gruppe von Objekteigenschaften besuchen, die Aufzählbarkeit und den Besitz von Eigenschaften behandeln.
- [Closures](/de/docs/Web/JavaScript/Closures)
  - : Ein Closure ist die Kombination aus einer Funktion und der lexikalischen Umgebung, innerhalb derer diese Funktion deklariert wurde.

### Fortgeschrittene

- [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
  - : Erklärung der weitgehend missverstandenen und unterschätzten prototypbasierten Vererbung.
- [Speicherverwaltung](/de/docs/Web/JavaScript/Memory_management)
  - : Lebenszyklusmanagement und Garbage Collection in JavaScript.
- [Die Ereignisschleife](/de/docs/Web/JavaScript/Event_loop)
  - : JavaScript hat ein Laufzeitmodell, das auf einer „Ereignisschleife“ basiert.

## Referenz

Durchsuchen Sie die komplette [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference)-Dokumentation.

- [Standardobjekte](/de/docs/Web/JavaScript/Reference/Global_Objects)
  - : Lernen Sie standardmäßige eingebaute Objekte kennen: {{jsxref("Array")}}, {{jsxref("Boolean")}}, {{jsxref("Date")}}, {{jsxref("Error")}}, {{jsxref("Function")}}, {{jsxref("JSON")}}, {{jsxref("Math")}}, {{jsxref("Number")}}, {{jsxref("Object")}}, {{jsxref("RegExp")}}, {{jsxref("String")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}} und andere.
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Reference/Operators)
  - : Erfahren Sie mehr über das Verhalten von JavaScripts Operatoren {{jsxref("Operators/instanceof", "instanceof")}}, {{jsxref("Operators/typeof", "typeof")}}, {{jsxref("Operators/new", "new")}}, {{jsxref("Operators/this", "this")}}, die [Operatorpräzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) und mehr.
- [Anweisungen und Deklarationen](/de/docs/Web/JavaScript/Reference/Statements)
  - : Lernen Sie, wie {{jsxref("Statements/do...while", "do-while")}}, {{jsxref("Statements/for...in", "for-in")}}, {{jsxref("Statements/for...of", "for-of")}}, {{jsxref("Statements/try...catch", "try-catch")}}, {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/var", "var")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/if...else", "if-else")}}, {{jsxref("Statements/switch", "switch")}} und andere JavaScript-Anweisungen und Schlüsselwörter funktionieren.
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
  - : Lernen Sie, wie Sie mit den Funktionen von JavaScript arbeiten, um Ihre Anwendungen zu entwickeln.
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
  - : JavaScript-Klassen sind der geeignetste Weg, um objektorientierte Programmierung zu betreiben.
