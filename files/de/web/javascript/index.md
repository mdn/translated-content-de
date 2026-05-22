---
title: JavaScript
slug: Web/JavaScript
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

**JavaScript** (**JS**) ist eine leichtgewichtige interpretierte (oder {{Glossary("Just_In_Time_Compilation", "just-in-time-kompilierte")}}) Programmiersprache mit {{Glossary("First-class_Function", "First-Class-Funktionen")}}. Obwohl sie am bekanntesten als Skriptsprache für Webseiten ist, wird sie auch von [vielen nicht-browserbasierten Umgebungen](https://en.wikipedia.org/wiki/JavaScript#Other_usage) genutzt, wie zum Beispiel {{Glossary("Node.js", "Node.js")}}, [Apache CouchDB](https://couchdb.apache.org/) und [Adobe Acrobat](https://opensource.adobe.com/dc-acrobat-sdk-docs/acrobatsdk/). JavaScript ist eine {{Glossary("Prototype-based_programming", "prototyp-basierte")}}, {{Glossary("Garbage_collection", "garbage-collected")}}, {{Glossary("Dynamic_typing", "dynamische")}} Sprache, die mehrere Paradigmen unterstützt, wie imperativ, funktional und objektorientiert.

Die dynamischen Fähigkeiten von JavaScript beinhalten das Erstellen von Objekten zur Laufzeit, Listen von variablen Parametern, Funktionsvariablen, die dynamische Skripterstellung (via [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)), Objekt-Introspektion (via [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) und [`Object`-Utilities](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods)) und Quellcode-Wiederherstellung (JavaScript-Funktionen speichern ihren Quelltext und können durch [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/toString) abgerufen werden).

Dieser Abschnitt ist der JavaScript-Sprache selbst gewidmet und nicht den Teilen, die spezifisch für Webseiten oder andere Host-Umgebungen sind. Für Informationen zu {{Glossary("API", "APIs")}}, die spezifisch für Webseiten sind, siehe [Web APIs](/de/docs/Web/API) und {{Glossary("DOM", "DOM")}}.

Die Standards für JavaScript sind die [ECMAScript Language Specification](https://tc39.es/ecma262/) (ECMA-262) und die [ECMAScript Internationalization API Specification](https://tc39.es/ecma402/) (ECMA-402). Sobald ein Browser eine Funktion implementiert, versuchen wir, sie zu dokumentieren. Dies bedeutet, dass in Fällen, in denen einige [Vorschläge für neue ECMAScript-Funktionen](https://github.com/tc39/proposals) bereits in Browsern implementiert wurden, Dokumentationen und Beispiele in MDN-Artikeln einige dieser neuen Funktionen nutzen können. Meistens geschieht dies zwischen den [Stufen](https://tc39.es/process-document/) 3 und 4 und in der Regel bevor die Spezifikation offiziell veröffentlicht wird.

Verwechseln Sie JavaScript nicht mit der [Java-Programmiersprache](<https://en.wikipedia.org/wiki/Java_(programming_language)>) — **JavaScript ist _nicht_ "Interpreted Java"**. Sowohl "Java" als auch "JavaScript" sind Marken oder eingetragene Marken von Oracle in den USA und anderen Ländern. Die beiden Programmiersprachen unterscheiden sich jedoch stark in Syntax, Semantik und Einsatz.

Die Dokumentation der Kernspracheigenschaften von JavaScript (hauptsächlich reines [ECMAScript](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview)) umfasst Folgendes:

- Der [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide)
- Das [JavaScript-Referenzhandbuch](/de/docs/Web/JavaScript/Reference)

Für weitere Informationen über JavaScript-Spezifikationen und verwandte Technologien, siehe [Übersicht zu JavaScript-Technologien](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview).

## Anfänger-Tutorials

Unsere [Kernmodule zum Erlernen der Webentwicklung](/de/docs/Learn_web_development/Core) enthalten moderne, aktuelle Tutorials, die die Grundlagen von JavaScript abdecken.

- [Ihre erste Website: Interaktivität hinzufügen](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity)
  - : Dieser Artikel bietet einen kurzen Überblick darüber, was JavaScript ist und wie es verwendet wird, und richtet sich an Personen, die völlig neu in der Webentwicklung sind.
- [Dynamisches Skripting mit JavaScript](/de/docs/Learn_web_development/Core/Scripting)
  - : Dieses Modul konzentriert sich auf die wesentlichen Elemente der Kernsprache JavaScript, plus einige wichtige umliegende Themen — das Erlernen dieser Themen wird Ihnen eine solide Grundlage bieten.
- [JavaScript-Frameworks und -Bibliotheken](/de/docs/Learn_web_development/Core/Frameworks_libraries)
  - : JavaScript-Frameworks sind ein wesentlicher Bestandteil der modernen Front-End-Webentwicklung und bieten Entwicklern erprobte Werkzeuge zum Erstellen skalierbarer, interaktiver Webanwendungen. Viele moderne Unternehmen nutzen Frameworks als Standardbestandteil ihrer Werkzeuge, und viele Front-End-Entwicklungsjobs erfordern jetzt Erfahrung mit Frameworks. Diese Artikelreihe bietet einen komfortablen Ausgangspunkt, um Ihnen den Einstieg in das Lernen von Frameworks zu erleichtern.

## JavaScript-Leitfäden

### Grundlegende Sprachleitfäden

- [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide)
  - : Ein viel detaillierterer Leitfaden zur JavaScript-Sprache, der an diejenigen gerichtet ist, die bereits Programmiererfahrung in JavaScript oder einer anderen Sprache haben.

### Mittelstufe

- [Erweiterte JavaScript-Objekte](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects)
  - : Die objektorientierte Natur von JavaScript ist wichtig zu verstehen, wenn Sie Ihr Wissen über die Sprache erweitern und effizienteren Code schreiben möchten. Deshalb haben wir dieses Modul bereitgestellt, um Ihnen zu helfen.
- [Asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS)
  - : In diesem Modul betrachten wir {{Glossary("asynchronous", "asynchrones")}} JavaScript, warum es wichtig ist und wie es verwendet werden kann, um mögliche blockierende Operationen wie das Abrufen von Ressourcen von einem Server effektiv zu behandeln.
- [Client-seitige Web-APIs](/de/docs/Learn_web_development/Extensions/Client-side_APIs)
  - : Erforscht, was APIs sind und wie einige der am häufigsten verwendeten APIs genutzt werden können, die Sie häufig in Ihrer Entwicklungsarbeit antreffen.
- [Übersicht über die JavaScript-Sprache](/de/docs/Web/JavaScript/Guide/Language_overview)
  - : Eine Übersicht über die grundlegende Syntax und Semantik von JavaScript für diejenigen, die aus anderen Programmiersprachen kommen, um sich einzugewöhnen.
- [JavaScript-Datenstrukturen](/de/docs/Web/JavaScript/Guide/Data_structures)
  - : Überblick über verfügbare Datenstrukturen in JavaScript.
- [Vergleichsoperationen und Gleichheit](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness)
  - : JavaScript bietet drei verschiedene Wertvergleichsoperationen: strikte Gleichheit mittels `===`, lose Gleichheit mittels `==` und die {{jsxref("Object.is()")}} Methode.
- [Aufzählbarkeit und Eigentum von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
  - : Wie verschiedene Methoden, die eine Gruppe von Objekteigenschaften einzeln besuchen, die Aufzählbarkeit und das Eigentum von Eigenschaften behandeln.
- [Closures](/de/docs/Web/JavaScript/Guide/Closures)
  - : Ein Closure ist die Kombination einer Funktion und der lexikalischen Umgebung, in der diese Funktion deklariert wurde.

### Fortgeschritten

- [Vererbung und die Prototypen-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
  - : Erklärung der weithin missverstandenen und unterschätzten prototypbasierten Vererbung.
- [Speicherverwaltung](/de/docs/Web/JavaScript/Guide/Memory_management)
  - : Speicher-Lebenszyklus und Garbage Collection in JavaScript.

## Referenz

Durchsuchen Sie die vollständige [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) Dokumentation.

- [Standardobjekte](/de/docs/Web/JavaScript/Reference/Global_Objects)
  - : Lernen Sie die standardmäßigen eingebauten Objekte kennen: {{jsxref("Array")}}, {{jsxref("Boolean")}}, {{jsxref("Error")}}, {{jsxref("Function")}}, {{jsxref("JSON")}}, {{jsxref("Math")}}, {{jsxref("Number")}}, {{jsxref("Object")}}, {{jsxref("RegExp")}}, {{jsxref("String")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}} und andere.
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Reference/Operators)
  - : Erfahren Sie mehr über das Verhalten von JavaScripts Operatoren {{jsxref("instanceof")}}, {{jsxref("Operators/typeof", "typeof")}}, {{jsxref("new")}}, {{jsxref("this")}}, die [Operatorpräzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) und mehr.
- [Anweisungen und Deklarationen](/de/docs/Web/JavaScript/Reference/Statements)
  - : Erfahren Sie, wie {{jsxref("Statements/do...while", "do-while")}}, {{jsxref("Statements/for...in", "for-in")}}, {{jsxref("Statements/for...of", "for-of")}}, {{jsxref("Statements/try...catch", "try-catch")}}, {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/var", "var")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/if...else", "if-else")}}, {{jsxref("Statements/switch", "switch")}} und mehr JavaScript-Anweisungen und Schlüsselwörter funktionieren.
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
  - : Lernen Sie, wie Sie mit den Funktionen von JavaScript arbeiten, um Ihre Anwendungen zu entwickeln.
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
  - : JavaScript-Klassen sind der geeignetste Weg, objektorientierte Programmierung zu betreiben.
