---
title: JavaScript
slug: Web/JavaScript
l10n:
  sourceCommit: 04158640487c17d515de8078c9307a2f906377d0
---

**JavaScript** (**JS**) ist eine leichtgewichtige, interpretierte (oder {{Glossary("Just_In_Time_Compilation", "Just-in-Time compilierte")}}) Programmiersprache mit {{Glossary("First-class_Function", "First-Class Funktionen")}}. Obwohl es am bekanntesten als Skriptsprache für Webseiten ist, wird es auch in [vielen Nicht-Browser-Umgebungen](https://de.wikipedia.org/wiki/JavaScript#Andere_Nutzung) genutzt, wie beispielsweise {{Glossary("Node.js", "Node.js")}}, [Apache CouchDB](https://couchdb.apache.org/) und [Adobe Acrobat](https://opensource.adobe.com/dc-acrobat-sdk-docs/acrobatsdk/). JavaScript ist eine {{Glossary("Prototype-based_programming", "prototypenbasierte")}}, {{Glossary("Garbage_collection", "automatisch speicherbereinigte")}}, {{Glossary("Dynamic_typing", "dynamische")}} Sprache, die mehrere Paradigmen wie imperatives, funktionales und objektorientiertes Programmieren unterstützt.

Zu den dynamischen Fähigkeiten von JavaScript gehören Laufzeit-Objektkonstruktion, variable Parameterlisten, Funktionsvariablen, dynamische Skripterstellung (via [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)), Objekt-Introspektion (via [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) und [`Object`-Utilities](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods)) und Quelltextwiederherstellung (JavaScript-Funktionen speichern ihren Quelltext und können durch [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/toString) abgerufen werden).

Dieser Abschnitt ist der JavaScript-Sprache selbst gewidmet, und nicht den Teilen, die spezifisch für Webseiten oder andere Host-Umgebungen sind. Für Informationen zu {{Glossary("API", "APIs")}}, die spezifisch für Webseiten sind, siehe [Web-APIs](/de/docs/Web/API) und {{Glossary("DOM", "DOM")}}.

Die Standards für JavaScript sind die [ECMAScript Language Specification](https://tc39.es/ecma262/) (ECMA-262) und die [ECMAScript Internationalization API-Spezifikation](https://tc39.es/ecma402/) (ECMA-402). Sobald ein Browser ein Feature implementiert, versuchen wir es zu dokumentieren. Das bedeutet, dass in Fällen, in denen einige [Vorschläge für neue ECMAScript-Features](https://github.com/tc39/proposals) bereits in Browsern implementiert sind, Dokumentation und Beispiele in MDN-Artikeln möglicherweise einige dieser neuen Features verwenden. Meistens passiert dies zwischen den [Stufen](https://tc39.es/process-document/) 3 und 4 und ist normalerweise bevor die Spezifikation offiziell veröffentlicht wird.

Verwechseln Sie JavaScript nicht mit der [Java-Programmiersprache](<https://de.wikipedia.org/wiki/Java_(Programmiersprache)>) — **JavaScript ist _nicht_ "interprätiertes Java"**. Sowohl "Java" als auch "JavaScript" sind Warenzeichen oder eingetragene Warenzeichen von Oracle in den USA und anderen Ländern. Jedoch haben die beiden Programmiersprachen sehr unterschiedliche Syntax, Semantik und Verwendung.

Die JavaScript-Dokumentation der Kernspracheneigenschaften (überwiegend reines [ECMAScript](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview)) umfasst Folgendes:

- Der [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide)
- Die [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference)

Für weitere Informationen zu JavaScript-Spezifikationen und verwandten Technologien siehe [JavaScript-Technologieübersicht](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview).

## Anleitungen für Anfänger

Unsere [Lernen Sie die Kernmodule der Webentwicklung](/de/docs/Learn_web_development/Core) enthalten moderne, aktuelle Tutorials, die JavaScript-Grundlagen abdecken.

- [Ihre erste Webseite: Interaktivität hinzufügen](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity)
  - : Dieser Artikel bietet einen kurzen Überblick darüber, was JavaScript ist und wie man es verwendet, und richtet sich an Personen, die völlig neu in der Webentwicklung sind.
- [Dynamisches Skripting mit JavaScript](/de/docs/Learn_web_development/Core/Scripting)
  - : Dieses Modul konzentriert sich auf die wesentlichen Teile der Kernsprache JavaScript, sowie einige wichtige begleitende Themen — das Erlernen dieser Themen gibt Ihnen eine solide Grundlage.
- [JavaScript-Frameworks und -Bibliotheken](/de/docs/Learn_web_development/Core/Frameworks_libraries)
  - : JavaScript-Frameworks sind ein wesentlicher Bestandteil der modernen Front-End-Webentwicklung und bieten Entwicklern bewährte Werkzeuge zum Erstellen skalierbarer, interaktiver Webanwendungen. Viele moderne Unternehmen verwenden Frameworks als Standardteil ihrer Werkzeugkette, sodass in vielen Front-End-Entwicklerpositionen Framework-Erfahrung verlangt wird. Diese Artikelreihe bietet einen komfortablen Ausgangspunkt, um Ihnen beim Erlernen von Frameworks zu helfen.

## JavaScript-Leitfäden

### Grundlegende Sprachleitfäden

- [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide)
  - : Ein viel ausführlicherer Leitfaden zur JavaScript-Sprache, der sich an diejenigen richtet, die bereits Programmiererfahrung in JavaScript oder einer anderen Sprache haben.

### Mittelstufe

- [Erweiterte JavaScript-Objekte](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects)
  - : Die objektorientierte Natur von JavaScript ist wichtig zu verstehen, wenn Sie Ihr Wissen über die Sprache ausweiten und effizienteren Code schreiben möchten, daher haben wir dieses Modul bereitgestellt, um Ihnen zu helfen.
- [Asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS)
  - : In diesem Modul betrachten wir {{Glossary("asynchronous", "asynchrones")}} JavaScript, warum es wichtig ist und wie es effektiv für potenziell blockierende Operationen verwendet werden kann, wie das Abrufen von Ressourcen von einem Server.
- [Client-seitige Web-APIs](/de/docs/Learn_web_development/Extensions/Client-side_APIs)
  - : Erfährt, was APIs sind, und wie man einige der gängigsten APIs verwendet, die Ihnen oft in Ihrer Entwicklungsarbeit begegnen.
- [JavaScript-Sprachübersicht](/de/docs/Web/JavaScript/Guide/Language_overview)
  - : Eine Übersicht über die grundlegende Syntax und Semantik von JavaScript für diejenigen, die aus anderen Programmiersprachen kommen, um sich einzuarbeiten.
- [JavaScript-Datenstrukturen](/de/docs/Web/JavaScript/Guide/Data_structures)
  - : Übersicht der verfügbaren Datenstrukturen in JavaScript.
- [Vergleichsoperationen und Gleichheit](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness)
  - : JavaScript bietet drei verschiedene Wertvergleichsoperationen: strikte Gleichheit mit `===`, lose Gleichheit mit `==` und die {{jsxref("Object.is()")}} Methode.
- [Enumerierbarkeit und Besitz von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
  - : Wie verschiedene Methoden, die eine Gruppe von Objekteigenschaften einzeln besuchen, die Enumerierbarkeit und den Besitz von Eigenschaften handhaben.
- [Closures](/de/docs/Web/JavaScript/Guide/Closures)
  - : Ein Closure ist die Kombination einer Funktion und der Lexikalischen Umgebung, innerhalb derer die Funktion deklariert wurde.

### Fortgeschritten

- [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
  - : Erklärung der häufig missverstandenen und unterschätzten Prototyp-basierten Vererbung.
- [Speicherverwaltung](/de/docs/Web/JavaScript/Guide/Memory_management)
  - : Speicher Lebenszyklus und Garbage Collection in JavaScript.

## Referenz

Durchsuchen Sie die vollständige [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) Dokumentation.

- [Standardobjekte](/de/docs/Web/JavaScript/Reference/Global_Objects)
  - : Lernen Sie die standardmäßig eingebauten Objekte kennen: {{jsxref("Array")}}, {{jsxref("Boolean")}}, {{jsxref("Error")}}, {{jsxref("Function")}}, {{jsxref("JSON")}}, {{jsxref("Math")}}, {{jsxref("Number")}}, {{jsxref("Object")}}, {{jsxref("RegExp")}}, {{jsxref("String")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}} und andere.
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Reference/Operators)
  - : Erfahren Sie mehr über das Verhalten von JavaScript-Operatoren {{jsxref("Operators/instanceof", "instanceof")}}, {{jsxref("Operators/typeof", "typeof")}}, {{jsxref("Operators/new", "new")}}, {{jsxref("Operators/this", "this")}}, die [Operator-Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) und mehr.
- [Anweisungen und Deklarationen](/de/docs/Web/JavaScript/Reference/Statements)
  - : Erfahren Sie, wie {{jsxref("Statements/do...while", "do-while")}}, {{jsxref("Statements/for...in", "for-in")}}, {{jsxref("Statements/for...of", "for-of")}}, {{jsxref("Statements/try...catch", "try-catch")}}, {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/var", "var")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/if...else", "if-else")}}, {{jsxref("Statements/switch", "switch")}} und mehr JavaScript-Anweisungen und Schlüsselwörter funktionieren.
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
  - : Lernen Sie, wie Sie mit den Funktionen von JavaScript arbeiten, um Ihre Anwendungen zu entwickeln.
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
  - : JavaScript-Klassen sind der geeignetste Weg, um objektorientierte Programmierung zu betreiben.
