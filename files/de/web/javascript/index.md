---
title: JavaScript
slug: Web/JavaScript
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**JavaScript** (**JS**) ist eine leichtgewichtige interpretierte (oder {{Glossary("Just_In_Time_Compilation", "just-in-time kompilierte")}}) Programmiersprache mit {{Glossary("First-class_Function", "erstklassigen Funktionen")}}. Während es als Skriptsprache für Webseiten am bekanntesten ist, wird es auch in [vielen nicht-browserbasierten Umgebungen](https://en.wikipedia.org/wiki/JavaScript#Other_usage) verwendet, wie zum Beispiel {{Glossary("Node.js", "Node.js")}}, [Apache CouchDB](https://couchdb.apache.org/) und [Adobe Acrobat](https://opensource.adobe.com/dc-acrobat-sdk-docs/acrobatsdk/). JavaScript ist eine {{Glossary("Prototype-based_programming", "prototyp-basierte")}}, {{Glossary("Garbage_collection", "speicherbereinigte")}}, {{Glossary("Dynamic_typing", "dynamische")}} Sprache, die mehrere Paradigmen unterstützt, wie imperativ, funktional und objektorientiert.

Die dynamischen Fähigkeiten von JavaScript umfassen die Erstellung von Objekten zur Laufzeit, variable Parameterlisten, Funktionsvariablen, dynamische Skripterstellung (via [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)), Objekt-Instruktion (via [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) und [`Object`-Utilities](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods)) und Quellcode-Wiederherstellung (JavaScript-Funktionen speichern ihren Quelltext und können über [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/toString) abgerufen werden).

Dieser Abschnitt ist der JavaScript-Sprache selbst gewidmet und nicht den Teilen, die speziell für Webseiten oder andere Host-Umgebungen sind. Für Informationen über {{Glossary("API", "APIs")}}, die spezifisch für Webseiten sind, besuchen Sie bitte [Web APIs](/de/docs/Web/API) und {{Glossary("DOM", "DOM")}}.

Die Standards für JavaScript sind die [ECMAScript Language Specification](https://tc39.es/ecma262/) (ECMA-262) und die [ECMAScript Internationalization API Specification](https://tc39.es/ecma402/) (ECMA-402). Sobald ein Browser eine Funktion implementiert, versuchen wir, sie zu dokumentieren. Das bedeutet, dass in Fällen, in denen einige [Vorschläge für neue ECMAScript-Features](https://github.com/tc39/proposals) bereits in Browsern implementiert wurden, in den MDN-Artikeln Dokumentation und Beispiele einige dieser neuen Features verwenden können. Meistens geschieht dies zwischen den [Stufen](https://tc39.es/process-document/) 3 und 4 und normalerweise bevor die Spezifikation offiziell veröffentlicht ist.

Verwechseln Sie JavaScript nicht mit der [Java-Programmiersprache](<https://en.wikipedia.org/wiki/Java_(programming_language)>): **JavaScript ist _nicht_ "interpretiertes Java"**. Sowohl "Java" als auch "JavaScript" sind Marken oder eingetragene Marken von Oracle in den USA und anderen Ländern. Die beiden Programmiersprachen haben jedoch sehr unterschiedliche Syntax, Semantik und Anwendung.

Die Dokumentation der Kernsprachfunktionen von JavaScript (größtenteils reines [ECMAScript](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview)) umfasst Folgendes:

- Der [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide)
- Das [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference)

Weitere Informationen zu JavaScript-Spezifikationen und verwandten Technologien finden Sie im [Überblick über JavaScript-Technologien](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview).

## Tutorials für Anfänger

Lernen Sie mit unseren Tutorials für Anfänger das Programmieren in JavaScript von Grund auf.

- [Ihre erste Website: Interaktivität hinzufügen](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity)
  - : Dieser Artikel bietet einen kurzen Überblick darüber, was JavaScript ist und wie man es verwendet, er richtet sich an Menschen, die völlig neu in der Webentwicklung sind.
- [Dynamisches Skripting mit JavaScript](/de/docs/Learn_web_development/Core/Scripting)
  - : Unser JavaScript-Modul im Abschnitt [Webentwicklung lernen](/de/docs/Learn_web_development) lehrt alle Grundlagen von JavaScript von Grund auf.
- [JavaScript-Frameworks und -Bibliotheken](/de/docs/Learn_web_development/Core/Frameworks_libraries)
  - : JavaScript-Frameworks sind ein wesentlicher Bestandteil der modernen Front-End-Webentwicklung und bieten Entwicklern bewährte Werkzeuge zum Erstellen skalierbarer, interaktiver Webanwendungen. Viele moderne Unternehmen verwenden Frameworks als Standardbestandteil ihrer Tools, sodass viele Front-End-Entwicklungsjobs jetzt Framework-Erfahrung erfordern. In dieser Artikelsammlung möchten wir Ihnen einen komfortablen Ausgangspunkt geben, um Ihnen den Einstieg in das Lernen von Frameworks zu erleichtern.

## JavaScript-Leitfäden

### Grundlegende Sprachleitfäden

- [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide)
  - : Ein wesentlich detaillierterer Leitfaden zur JavaScript-Sprache, der sich an diejenigen richtet, die bereits Programmiererfahrung in JavaScript oder einer anderen Sprache haben.

### Fortgeschrittene

- [Erweiterte JavaScript-Objekte](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects)
  - : Die objektorientierte Natur von JavaScript ist wichtig zu verstehen, wenn Sie Ihr Wissen über die Sprache erweitern und effizienteren Code schreiben möchten, daher haben wir dieses Modul bereitgestellt, um Ihnen zu helfen.
- [Asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS)
  - : In diesem Modul betrachten wir {{Glossary("asynchronous", "asynchrones")}} JavaScript, warum es wichtig ist und wie es verwendet werden kann, um mögliche blockierende Operationen effektiv zu handhaben, wie zum Beispiel das Abrufen von Ressourcen von einem Server.
- [Client-seitige Web-APIs](/de/docs/Learn_web_development/Extensions/Client-side_APIs)
  - : Erforscht, was APIs sind und wie man einige der häufigsten APIs verwendet, denen Sie in Ihrer Entwicklungsarbeit oft begegnen werden.
- [JavaScript-Sprachübersicht](/de/docs/Web/JavaScript/Guide/Language_overview)
  - : Eine Übersicht über die grundlegende Syntax und Semantik von JavaScript für diejenigen, die von anderen Programmiersprachen kommen, um auf den neuesten Stand zu kommen.
- [JavaScript-Datenstrukturen](/de/docs/Web/JavaScript/Guide/Data_structures)
  - : Überblick über verfügbare Datenstrukturen in JavaScript.
- [Vergleichsoperationen zur Gleichheit und Gleichheit](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness)
  - : JavaScript bietet drei verschiedene Wertvergleichsoperationen: strikte Gleichheit mit `===`, lose Gleichheit mit `==` und die {{jsxref("Object.is()")}}-Methode.
- [Enumerierbarkeit und Eigentum von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
  - : Wie unterschiedliche Methoden, die eine Gruppe von Objekteigenschaften einzeln besuchen, die Enumerierbarkeit und das Eigentum von Eigenschaften handhaben.
- [Closures](/de/docs/Web/JavaScript/Guide/Closures)
  - : Ein Closure ist die Kombination einer Funktion und der lexikalischen Umgebung, in der diese Funktion deklariert wurde.

### Fortgeschritten

- [Vererbung und die Prototyp-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
  - : Erklärung des weithin missverstandenen und unterschätzten prototyp-basierten Vererbungsmodells.
- [Speicherverwaltung](/de/docs/Web/JavaScript/Guide/Memory_management)
  - : Lebenszyklus von Speicher und Speicherbereinigung in JavaScript.

## Referenz

Durchsuchen Sie die vollständige [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference)-Dokumentation.

- [Standardobjekte](/de/docs/Web/JavaScript/Reference/Global_Objects)
  - : Lernen Sie die standardmäßig integrierten Objekte kennen: {{jsxref("Array")}}, {{jsxref("Boolean")}}, {{jsxref("Error")}}, {{jsxref("Function")}}, {{jsxref("JSON")}}, {{jsxref("Math")}}, {{jsxref("Number")}}, {{jsxref("Object")}}, {{jsxref("RegExp")}}, {{jsxref("String")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}} und andere.
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Reference/Operators)
  - : Erfahren Sie mehr über das Verhalten der Operatoren in JavaScript {{jsxref("Operators/instanceof", "instanceof")}}, {{jsxref("Operators/typeof", "typeof")}}, {{jsxref("Operators/new", "new")}}, {{jsxref("Operators/this", "this")}}, die [Operatorpräzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) und mehr.
- [Anweisungen und Deklarationen](/de/docs/Web/JavaScript/Reference/Statements)
  - : Erfahren Sie, wie {{jsxref("Statements/do...while", "do-while")}}, {{jsxref("Statements/for...in", "for-in")}}, {{jsxref("Statements/for...of", "for-of")}}, {{jsxref("Statements/try...catch", "try-catch")}}, {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/var", "var")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/if...else", "if-else")}}, {{jsxref("Statements/switch", "switch")}} und weitere JavaScript-Anweisungen und -Schlüsselwörter arbeiten.
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
  - : Lernen Sie, wie man mit JavaScript-Funktionen arbeitet, um Ihre Anwendungen zu entwickeln.
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
  - : JavaScript-Klassen sind der geeignetste Weg, um objektorientiertes Programmieren durchzuführen.
