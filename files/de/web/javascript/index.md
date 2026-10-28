---
title: JavaScript
slug: Web/JavaScript
l10n:
  sourceCommit: 9d64ff6c5d0eee1800b0d3b4f9076de65f34f5ce
---

**JavaScript** (**JS**) ist eine leichtgewichtige, interpretierte (oder {{Glossary("Just_In_Time_Compilation", "Just-in-Time-kompilierte")}}) Programmiersprache mit {{Glossary("First-class_Function", "Funktionen erster Klasse")}}. Obwohl sie vor allem als Skriptsprache für Webseiten bekannt ist, wird sie auch in [vielen Umgebungen außerhalb von Browsern](https://en.wikipedia.org/wiki/JavaScript#Other_usage) verwendet, etwa in {{Glossary("Node.js", "Node.js")}}, [Apache CouchDB](https://couchdb.apache.org/) und [Adobe Acrobat](https://opensource.adobe.com/dc-acrobat-sdk-docs/acrobatsdk/). JavaScript ist eine {{Glossary("Prototype-based_programming", "prototypbasierte")}}, {{Glossary("Garbage_collection", "garbage-collected")}}, {{Glossary("Dynamic_typing", "dynamische")}} Sprache, die verschiedene Programmierparadigmen unterstützt, darunter imperative, funktionale und objektorientierte Programmierung.

Zu den dynamischen Fähigkeiten von JavaScript gehören die Erstellung von Objekten zur Laufzeit, variable Parameterlisten, Funktionsvariablen, die dynamische Erstellung von Skripten (über [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)), die Introspektion von Objekten (über [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) und [`Object`-Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods)) sowie die Wiederherstellung von Quellcode (JavaScript-Funktionen speichern ihren Quelltext, der über [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/toString) abgerufen werden kann).

Dieser Abschnitt behandelt die JavaScript-Sprache selbst und nicht die Teile, die speziell für Webseiten oder andere Hostumgebungen gelten. Informationen zu {{Glossary("API", "APIs")}}, die speziell für Webseiten gelten, finden Sie unter [Web-APIs](/de/docs/Web/API) und {{Glossary("DOM", "DOM")}}.

Die Standards für JavaScript sind die [ECMAScript-Sprachspezifikation](https://tc39.es/ecma262/) (ECMA-262) und die [Spezifikation der ECMAScript Internationalization API](https://tc39.es/ecma402/) (ECMA-402). Sobald ein Browser ein Feature implementiert, versuchen wir, es zu dokumentieren. Daher können die Dokumentation und Beispiele in MDN-Artikeln bereits neue Features verwenden, wenn einige [Vorschläge für neue ECMAScript-Features](https://github.com/tc39/proposals) schon in Browsern implementiert wurden. Meist geschieht dies zwischen den [Phasen](https://tc39.es/process-document/) 3 und 4 und damit gewöhnlich vor der offiziellen Veröffentlichung der Spezifikation.

Verwechseln Sie JavaScript nicht mit der [Programmiersprache Java](<https://en.wikipedia.org/wiki/Java_(programming_language)>) — **JavaScript ist _kein_ „interpretiertes Java“**. Sowohl „Java“ als auch „JavaScript“ sind Marken oder eingetragene Marken von Oracle in den USA und anderen Ländern. Die beiden Programmiersprachen unterscheiden sich jedoch stark in Syntax, Semantik und Verwendung.

Die JavaScript-Dokumentation zu den Kernfunktionen der Sprache (größtenteils reines [ECMAScript](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview)) umfasst:

- den [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide)
- die [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference)

Weitere Informationen zu JavaScript-Spezifikationen und verwandten Technologien finden Sie in der [Übersicht über JavaScript-Technologien](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview).

## Tutorials für Einsteiger

Unsere [Kernmodule zum Erlernen der Webentwicklung](/de/docs/Learn_web_development/Core) enthalten moderne, aktuelle Tutorials zu den Grundlagen von JavaScript.

- [Ihre erste Website: Interaktivität hinzufügen](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity)
  - : Dieser Artikel bietet eine kurze Einführung darin, was JavaScript ist und wie es verwendet wird. Er richtet sich an Personen, die noch keine Erfahrung mit Webentwicklung haben.
- [Dynamische Skripte mit JavaScript](/de/docs/Learn_web_development/Core/Scripting)
  - : Dieses Modul behandelt die wesentlichen Grundlagen der JavaScript-Sprache sowie einige wichtige angrenzende Themen. Damit schaffen Sie eine solide Grundlage für die weitere Arbeit.
- [JavaScript-Frameworks und -Bibliotheken](/de/docs/Learn_web_development/Core/Frameworks_libraries)
  - : JavaScript-Frameworks sind ein wesentlicher Bestandteil der modernen Frontend-Webentwicklung. Sie bieten Entwicklern bewährte Werkzeuge zum Erstellen skalierbarer, interaktiver Webanwendungen. Viele moderne Unternehmen setzen Frameworks standardmäßig ein. Daher wird für viele Stellen in der Frontend-Entwicklung inzwischen Erfahrung mit Frameworks vorausgesetzt. Diese Artikel bieten Ihnen einen guten Einstieg in das Erlernen von Frameworks.

## JavaScript-Leitfäden

### Leitfäden zu den Grundlagen der Sprache

- [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide)
  - : Ein wesentlich ausführlicherer Leitfaden zur JavaScript-Sprache für Personen, die bereits Programmiererfahrung mit JavaScript oder einer anderen Sprache haben.

### Fortgeschrittene Themen

- [Fortgeschrittene JavaScript-Objekte](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects)
  - : Wenn Sie Ihre Kenntnisse der Sprache vertiefen und effizienteren Code schreiben möchten, ist es wichtig, die objektorientierte Natur von JavaScript zu verstehen. Dieses Modul soll Ihnen dabei helfen.
- [Asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS)
  - : In diesem Modul betrachten wir {{Glossary("asynchronous", "asynchrones")}} JavaScript, erklären, warum es wichtig ist und wie Sie damit potenziell blockierende Vorgänge, etwa das Abrufen von Ressourcen von einem Server, effektiv handhaben können.
- [Clientseitige Web-APIs](/de/docs/Learn_web_development/Extensions/Client-side_APIs)
  - : Dieses Modul erläutert, was APIs sind und wie Sie einige der gängigsten APIs verwenden, denen Sie bei Ihrer Entwicklungsarbeit häufig begegnen werden.
- [Überblick über die JavaScript-Sprache](/de/docs/Web/JavaScript/Guide/Language_overview)
  - : Ein Überblick über die grundlegende Syntax und Semantik von JavaScript, der Personen mit Erfahrung in anderen Programmiersprachen den Einstieg erleichtert.
- [JavaScript-Datenstrukturen](/de/docs/Web/JavaScript/Guide/Data_structures)
  - : Überblick über die verfügbaren Datenstrukturen in JavaScript.
- [Gleichheitsvergleiche und Identität](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness)
  - : JavaScript bietet drei verschiedene Operationen zum Vergleichen von Werten: strikte Gleichheit mit `===`, nicht strikte Gleichheit mit `==` und die Methode {{jsxref("Object.is()")}}.
- [Aufzählbarkeit und Eigentümerschaft von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
  - : Wie verschiedene Methoden, die eine Gruppe von Objekteigenschaften einzeln durchlaufen, mit der Aufzählbarkeit und Eigentümerschaft von Eigenschaften umgehen.
- [Closures](/de/docs/Web/JavaScript/Guide/Closures)
  - : Eine Closure ist die Kombination aus einer Funktion und der lexikalischen Umgebung, in der diese Funktion deklariert wurde.

### Themen für Erfahrene

- [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
  - : Erläuterung der häufig missverstandenen und unterschätzten prototypbasierten Vererbung.
- [Speicherverwaltung](/de/docs/Web/JavaScript/Guide/Memory_management)
  - : Lebenszyklus des Speichers und Garbage Collection in JavaScript.
- [Kommunikation und Koordination zwischen Agents](/de/docs/Web/JavaScript/Guide/Agent_communication_and_coordination)
  - : Gemeinsame Nutzung von Speicher und Koordination des Zugriffs mit `SharedArrayBuffer`, `Atomics` und `postMessage()`.

## Referenz

Lesen Sie die vollständige [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference).

- [Standardobjekte](/de/docs/Web/JavaScript/Reference/Global_Objects)
  - : Lernen Sie die integrierten Standardobjekte kennen: {{jsxref("Array")}}, {{jsxref("Boolean")}}, {{jsxref("Error")}}, {{jsxref("Function")}}, {{jsxref("JSON")}}, {{jsxref("Math")}}, {{jsxref("Number")}}, {{jsxref("Object")}}, {{jsxref("RegExp")}}, {{jsxref("String")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}} und weitere.
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Reference/Operators)
  - : Erfahren Sie mehr über das Verhalten der JavaScript-Operatoren {{jsxref("instanceof")}}, {{jsxref("Operators/typeof", "typeof")}}, {{jsxref("new")}} und {{jsxref("this")}}, über die [Operatorrangfolge](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) und vieles mehr.
- [Anweisungen und Deklarationen](/de/docs/Web/JavaScript/Reference/Statements)
  - : Erfahren Sie, wie {{jsxref("Statements/do...while", "do-while")}}, {{jsxref("Statements/for...in", "for-in")}}, {{jsxref("Statements/for...of", "for-of")}}, {{jsxref("Statements/try...catch", "try-catch")}}, {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/var", "var")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/if...else", "if-else")}}, {{jsxref("Statements/switch", "switch")}} und weitere JavaScript-Anweisungen und Schlüsselwörter funktionieren.
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
  - : Erfahren Sie, wie Sie mit JavaScript-Funktionen arbeiten, um Ihre Anwendungen zu entwickeln.
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
  - : JavaScript-Klassen sind die geeignetste Möglichkeit zur objektorientierten Programmierung.
