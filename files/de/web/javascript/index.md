---
title: JavaScript
slug: Web/JavaScript
l10n:
  sourceCommit: 6c69b591e29a087235743ac496efcd62f6993c6c
---

{{jsSidebar}}

**JavaScript** (**JS**) ist eine leichtgewichtige interpretierte (oder {{Glossary("Just_In_Time_Compilation", "just-in-time kompilierte")}}) Programmiersprache mit {{Glossary("First-class_Function", "erstklassigen Funktionen")}}. Obwohl sie am bekanntesten als Skriptsprache für Webseiten ist, wird sie auch in [vielen nicht-browserbasierten Umgebungen](https://en.wikipedia.org/wiki/JavaScript#Other_usage) verwendet, wie z.B. {{Glossary("Node.js", "Node.js")}}, [Apache CouchDB](https://couchdb.apache.org/) und [Adobe Acrobat](https://opensource.adobe.com/dc-acrobat-sdk-docs/acrobatsdk/). JavaScript ist eine {{Glossary("Prototype-based_programming", "prototypbasierte")}}, {{Glossary("Garbage_collection", "automatisch speicherbereinigende")}}, {{Glossary("Dynamic_typing", "dynamische")}} Sprache, die mehrere Paradigmen unterstützt, wie imperativ, funktional und objektorientiert.

Die dynamischen Fähigkeiten von JavaScript umfassen die Laufzeitkonstruktion von Objekten, variable Parameterlisten, Funktionsvariablen, dynamische Skripterstellung (über [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)), Objektinspektion (über [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) und [`Object`-Utilities](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods)) und Quellcode-Wiederherstellung (JavaScript-Funktionen speichern ihren Quelltext und können über [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/toString) abgerufen werden).

Dieser Abschnitt ist der JavaScript-Sprache selbst gewidmet und nicht den Teilen, die spezifisch für Webseiten oder andere Host-Umgebungen sind. Für Informationen über {{Glossary("API", "APIs")}}, die spezifisch für Webseiten sind, sehen Sie bitte [Web-APIs](/de/docs/Web/API) und {{Glossary("DOM", "DOM")}}.

Die Standards für JavaScript sind die [ECMAScript Language Specification](https://tc39.es/ecma262/) (ECMA-262) und die [ECMAScript Internationalization API specification](https://tc39.es/ecma402/) (ECMA-402). Sobald ein Browser eine Funktion implementiert, versuchen wir, diese zu dokumentieren. Das bedeutet, dass Fälle, in denen einige [Vorschläge für neue ECMAScript-Funktionen](https://github.com/tc39/proposals) bereits in Browsern implementiert wurden, Dokumentationen und Beispiele in MDN-Artikeln enthalten können, die einige dieser neuen Funktionen verwenden. Meistens geschieht dies zwischen den [Stufen](https://tc39.es/process-document/) 3 und 4 und normalerweise bevor die Spezifikation offiziell veröffentlicht wird.

Verwechseln Sie JavaScript nicht mit der [Java-Programmiersprache](<https://en.wikipedia.org/wiki/Java_(programming_language)>) — **JavaScript ist _nicht_ "interpretiertes Java"**. Sowohl "Java" als auch "JavaScript" sind Marken oder eingetragene Marken von Oracle in den USA und anderen Ländern. Die beiden Programmiersprachen haben jedoch sehr unterschiedliche Syntax, Semantik und Verwendung.

Die JavaScript-Dokumentation der Kernfunktionen der Sprache (hauptsächlich reines [ECMAScript](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview)) umfasst Folgendes:

- Der [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide)
- Das [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference)

Für weitere Informationen über JavaScript-Spezifikationen und verwandte Technologien siehe [JavaScript-Technologieübersicht](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview).

## Tutorials für Anfänger

Lernen Sie von Grund auf, wie man in JavaScript programmiert, mit unseren Tutorials für Anfänger.

- [Ihre erste Website: Hinzufügen von Interaktivität](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity)
  - : Dieser Artikel bietet eine kurze Einführung in das, was JavaScript ist und wie es verwendet wird, insbesondere für Personen, die völlig neu in der Webentwicklung sind.
- [Dynamisches Scripting mit JavaScript](/de/docs/Learn_web_development/Core/Scripting)
  - : Unser Abschnitt [Webentwicklung lernen](/de/docs/Learn_web_development) enthält ein JavaScript-Modul, das alle Grundlagen von JavaScript von Grund auf lehrt.
- [JavaScript-Frameworks und Bibliotheken](/de/docs/Learn_web_development/Core/Frameworks_libraries)
  - : JavaScript-Frameworks sind ein wesentlicher Bestandteil der modernen Frontend-Webentwicklung und bieten Entwicklern bewährte Werkzeuge zum Erstellen skalierbarer, interaktiver Webanwendungen. Viele moderne Unternehmen verwenden Frameworks als Standardbestandteil ihrer Tools, daher erfordern viele Frontend-Entwicklungsjobs jetzt Framework-Erfahrung. In dieser Artikelsammlung möchten wir Ihnen einen bequemen Ausgangspunkt bieten, um Ihnen den Einstieg in das Lernen von Frameworks zu erleichtern.

## JavaScript-Leitfäden

### Grundlagen der Sprache

- [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide)
  - : Ein weitaus detaillierterer Leitfaden zur JavaScript-Sprache, der sich an diejenigen richtet, die bereits Programmiererfahrungen entweder in JavaScript oder einer anderen Sprache haben.

### Mittelstufe

- [Erweiterte JavaScript-Objekte](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects)
  - : Das objektorientierte Wesen von JavaScript ist wichtig zu verstehen, wenn Sie Ihr Wissen über die Sprache vertiefen und effizienteren Code schreiben möchten. Deshalb haben wir dieses Modul erstellt, um Ihnen zu helfen.
- [Asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS)
  - : In diesem Modul werfen wir einen Blick auf {{Glossary("asynchronous", "asynchrones")}} JavaScript, warum es wichtig ist und wie es verwendet werden kann, um potenziell blockierende Operationen, wie das Abrufen von Ressourcen von einem Server, effektiv zu bewältigen.
- [Clientseitige Web-APIs](/de/docs/Learn_web_development/Extensions/Client-side_APIs)
  - : Erforscht, was APIs sind und wie man einige der häufigsten APIs verwendet, denen Sie bei Ihrer Entwicklungsarbeit häufig begegnen werden.
- [JavaScript-Sprachübersicht](/de/docs/Web/JavaScript/Guide/Language_overview)
  - : Eine Übersicht über die grundlegende Syntax und Semantik von JavaScript für diejenigen, die aus anderen Programmiersprachen kommen, um sich schnell einzuarbeiten.
- [JavaScript-Datenstrukturen](/de/docs/Web/JavaScript/Guide/Data_structures)
  - : Übersicht über verfügbare Datenstrukturen in JavaScript.
- [Gleichheitsvergleiche und Gleichheit](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness)
  - : JavaScript bietet drei verschiedene Wertvergleichsoperationen: strikte Gleichheit mit `===`, lose Gleichheit mit `==` und die Methode {{jsxref("Object.is()")}}.
- [Aufzählbarkeit und Eigentum von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
  - : Wie unterschiedliche Methoden, die nacheinander eine Gruppe von Objekteigenschaften besuchen, mit der Aufzählbarkeit und dem Eigentum von Eigenschaften umgehen.
- [Closures](/de/docs/Web/JavaScript/Guide/Closures)
  - : Eine Closure ist die Kombination einer Funktion mit der lexikalischen Umgebung, in der diese Funktion deklariert wurde.

### Fortgeschrittene

- [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
  - : Erklärung des weitgehend missverstandenen und unterschätzten Prototyp-basierten Vererbungsmodells.
- [Speicherverwaltung](/de/docs/Web/JavaScript/Guide/Memory_management)
  - : Speicherlebenszyklus und Speicherbereinigung in JavaScript.

## Referenz

Durchsuchen Sie die vollständige [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) Dokumentation.

- [Standardobjekte](/de/docs/Web/JavaScript/Reference/Global_Objects)
  - : Lernen Sie die standardmäßigen eingebauten Objekte kennen: {{jsxref("Array")}}, {{jsxref("Boolean")}}, {{jsxref("Error")}}, {{jsxref("Function")}}, {{jsxref("JSON")}}, {{jsxref("Math")}}, {{jsxref("Number")}}, {{jsxref("Object")}}, {{jsxref("RegExp")}}, {{jsxref("String")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}} und andere.
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Reference/Operators)
  - : Erfahren Sie mehr über das Verhalten der JavaScript-Operatoren {{jsxref("Operators/instanceof", "instanceof")}}, {{jsxref("Operators/typeof", "typeof")}}, {{jsxref("Operators/new", "new")}}, {{jsxref("Operators/this", "this")}}, die [Operatorpräzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) und mehr.
- [Anweisungen und Deklarationen](/de/docs/Web/JavaScript/Reference/Statements)
  - : Erfahren Sie, wie {{jsxref("Statements/do...while", "do-while")}}, {{jsxref("Statements/for...in", "for-in")}}, {{jsxref("Statements/for...of", "for-of")}}, {{jsxref("Statements/try...catch", "try-catch")}}, {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/var", "var")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/if...else", "if-else")}}, {{jsxref("Statements/switch", "switch")}} und weitere JavaScript-Anweisungen und -Schlüsselwörter funktionieren.
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
  - : Lernen Sie, wie Sie mit JavaScript-Funktionen arbeiten, um Ihre Anwendungen zu entwickeln.
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
  - : JavaScript-Klassen sind der geeignetste Weg, objektorientierte Programmierung zu betreiben.
