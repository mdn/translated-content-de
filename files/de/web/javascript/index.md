---
title: JavaScript
slug: Web/JavaScript
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{jsSidebar}}

**JavaScript** (**JS**) ist eine leichtgewichtige interpretierte (oder {{Glossary("Just_In_Time_Compilation", "just-in-time kompilierte")}}) Programmiersprache mit {{Glossary("First-class_Function", "erstklassigen Funktionen")}}. Obwohl es am bekanntesten als Skriptsprache für Webseiten ist, wird es auch in [vielen nicht-browserbasierten Umgebungen](https://en.wikipedia.org/wiki/JavaScript#Other_usage) verwendet, wie z.B. {{Glossary("Node.js", "Node.js")}}, [Apache CouchDB](https://couchdb.apache.org/) und [Adobe Acrobat](https://opensource.adobe.com/dc-acrobat-sdk-docs/acrobatsdk/). JavaScript ist eine {{Glossary("Prototype-based_programming", "prototyp-basierte")}}, multi-paradigmatische, {{Glossary("Thread", "single-threaded")}}, {{Glossary("Dynamic_typing", "dynamische")}} Sprache, die objektorientierte, imperative und deklarative (z.B. funktionale Programmierung) Stile unterstützt.

Die dynamischen Fähigkeiten von JavaScript umfassen die Laufzeit-Objekterstellung, variable Parameterlisten, Funktionsvariablen, dynamische Skripterstellung (via [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)), Objekt-Introspektion (via [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) und [`Object` Dienste](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods)) und Quellcode-Retrieval (JavaScript-Funktionen speichern ihren Quelltext, der über [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/toString) abgerufen werden kann).

Dieser Abschnitt ist der JavaScript-Sprache selbst gewidmet und nicht den Teilen, die spezifisch für Webseiten oder andere Host-Umgebungen sind. Für Informationen über {{Glossary("API", "APIs")}}, die spezifisch für Webseiten sind, siehe bitte [Web APIs](/de/docs/Web/API) und {{Glossary("DOM", "DOM")}}.

Die Standards für JavaScript sind die [ECMAScript Language Specification](https://tc39.es/ecma262/) (ECMA-262) und die [ECMAScript Internationalization API specification](https://tc39.es/ecma402/) (ECMA-402). Sobald ein Browser eine Funktion implementiert, versuchen wir, sie zu dokumentieren. Das bedeutet, dass in Fällen, in denen einige [Vorschläge für neue ECMAScript-Funktionen](https://github.com/tc39/proposals) bereits in Browsern implementiert wurden, Dokumentationen und Beispiele in MDN-Artikeln einige dieser neuen Funktionen verwenden können. Meistens geschieht dies zwischen den [Stufen](https://tc39.es/process-document/) 3 und 4 und normalerweise bevor die Spezifikation offiziell veröffentlicht wird.

Verwechseln Sie JavaScript nicht mit der [Java-Programmiersprache](<https://en.wikipedia.org/wiki/Java_(programming_language)>) — **JavaScript ist _nicht_ "Interpreted Java"**. Sowohl "Java" als auch "JavaScript" sind Marken oder eingetragene Marken von Oracle in den USA und anderen Ländern. Die beiden Programmiersprachen haben jedoch sehr unterschiedliche Syntax, Semantik und Verwendung.

Die JavaScript-Dokumentation über Kernfunktionen der Sprache (größtenteils reines [ECMAScript](/de/docs/Web/JavaScript/JavaScript_technologies_overview)) umfasst Folgendes:

- Den [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide)
- Die [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference)

Für weitere Informationen über JavaScript-Spezifikationen und verwandte Technologien siehe [JavaScript-Technologieübersicht](/de/docs/Web/JavaScript/JavaScript_technologies_overview).

## Anfängeranleitungen

Lernen Sie mit unseren Anfängeranleitungen, wie Sie von Grund auf in JavaScript programmieren.

- [Ihre erste Website: Interaktivität hinzufügen](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity)
  - : Dieser Artikel bietet eine kurze Einführung in JavaScript und seine Verwendung, speziell für Personen, die völlig neu in der Webentwicklung sind.
- [Dynamisches Scripting mit JavaScript](/de/docs/Learn_web_development/Core/Scripting)
  - : Das JavaScript-Modul unseres [Leitfadens zur Webentwicklung](/de/docs/Learn_web_development) lehrt alle grundlegenden JavaScript-Konzepte von Grund auf.
- [JavaScript-Frameworks und -Bibliotheken](/de/docs/Learn_web_development/Core/Frameworks_libraries)
  - : JavaScript-Frameworks sind ein wesentlicher Bestandteil moderner Frontend-Webentwicklung. Sie bieten Entwicklern bewährte Werkzeuge zum Erstellen skalierbarer, interaktiver Webanwendungen. Viele moderne Unternehmen nutzen Frameworks als Standardteil ihrer Toolchain, so dass viele Frontend-Entwicklungsjobs mittlerweile Framework-Erfahrung erfordern. In dieser Artikelreihe möchten wir Ihnen einen bequemen Einstiegspunkt bieten, um mit dem Lernen von Frameworks zu beginnen.

## JavaScript-Leitfäden

### Grundlegende Sprachleitfäden

- [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide)
  - : Ein viel detaillierterer Leitfaden zur JavaScript-Sprache, der sich an diejenigen richtet, die bereits Erfahrungen im Programmieren entweder in JavaScript oder einer anderen Sprache haben.

### Mittelstufe

- [Erweiterte JavaScript-Objekte](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects)
  - : Die objektorientierte Natur von JavaScript ist wichtig zu verstehen, wenn Sie Ihr Wissen über die Sprache vertiefen und effizienteren Code schreiben möchten. Deshalb haben wir dieses Modul bereitgestellt, um Ihnen zu helfen.
- [Asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS)
  - : In diesem Modul betrachten wir {{Glossary("asynchronous", "asynchrones")}} JavaScript, warum es wichtig ist und wie es effektiv eingesetzt werden kann, um potenziell blockierende Operationen zu behandeln, wie z.B. das Abrufen von Ressourcen von einem Server.
- [Client-seitige Web-APIs](/de/docs/Learn_web_development/Extensions/Client-side_APIs)
  - : Erforscht, was APIs sind und wie einige der gebräuchlichsten APIs verwendet werden, denen Sie bei Ihrer Entwicklungsarbeit häufig begegnen werden.
- [JavaScript-Sprachübersicht](/de/docs/Web/JavaScript/Language_overview)
  - : Eine Übersicht über die grundlegende Syntax und Semantik von JavaScript, um für diejenigen, die aus anderen Programmiersprachen kommen, den Einstieg zu erleichtern.
- [JavaScript-Datenstrukturen](/de/docs/Web/JavaScript/Data_structures)
  - : Übersicht über verfügbare Datenstrukturen in JavaScript.
- [Vergleichsoperationen und Gleichheit](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness)
  - : JavaScript bietet drei verschiedene Wertvergleichsoperationen: strikte Gleichheit mit `===`, lose Gleichheit mit `==` und die {{jsxref("Object.is()")}} Methode.
- [Enumerierbarkeit und Eigentum von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
  - : Wie verschiedene Methoden, die eine Gruppe von Objekteigenschaften der Reihe nach besuchen, mit der Enumerierbarkeit und dem Eigentum von Eigenschaften umgehen.
- [Closures](/de/docs/Web/JavaScript/Closures)
  - : Ein Closure ist die Kombination aus einer Funktion und der lexikalischen Umgebung, in der diese Funktion deklariert wurde.

### Fortgeschritten

- [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
  - : Erklärung der weitverbreiteten und häufig unterschätzten Prototyp-basierten Vererbung.
- [Speicherverwaltung](/de/docs/Web/JavaScript/Memory_management)
  - : Lebenszyklus von Speicher und Müllabfuhr in JavaScript.
- [Der Ereignisschleifen-Mechanismus](/de/docs/Web/JavaScript/Event_loop)
  - : JavaScript hat ein Laufzeitmodell, das auf einer "Ereignisschleife" basiert.

## Referenz

Durchsuchen Sie die vollständige [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) Dokumentation.

- [Standardobjekte](/de/docs/Web/JavaScript/Reference/Global_Objects)
  - : Lernen Sie standardmäßige eingebaute Objekte kennen: {{jsxref("Array")}}, {{jsxref("Boolean")}}, {{jsxref("Error")}}, {{jsxref("Function")}}, {{jsxref("JSON")}}, {{jsxref("Math")}}, {{jsxref("Number")}}, {{jsxref("Object")}}, {{jsxref("RegExp")}}, {{jsxref("String")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}} und andere.
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Reference/Operators)
  - : Erfahren Sie mehr über das Verhalten der JavaScript-Operatoren {{jsxref("Operators/instanceof", "instanceof")}}, {{jsxref("Operators/typeof", "typeof")}}, {{jsxref("Operators/new", "new")}}, {{jsxref("Operators/this", "this")}}, die [Operatorpriorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) und mehr.
- [Anweisungen und Deklarationen](/de/docs/Web/JavaScript/Reference/Statements)
  - : Lernen Sie, wie {{jsxref("Statements/do...while", "do-while")}}, {{jsxref("Statements/for...in", "for-in")}}, {{jsxref("Statements/for...of", "for-of")}}, {{jsxref("Statements/try...catch", "try-catch")}}, {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/var", "var")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/if...else", "if-else")}}, {{jsxref("Statements/switch", "switch")}} und weitere JavaScript-Anweisungen und Schlüsselwörter funktionieren.
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
  - : Lernen Sie, wie Sie mit JavaScript-Funktionen arbeiten können, um Ihre Anwendungen zu entwickeln.
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
  - : JavaScript-Klassen sind der angemessenste Weg, um objektorientierte Programmierung zu betreiben.
