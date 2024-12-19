---
title: JavaScript
slug: Web/JavaScript
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{jsSidebar}}

**JavaScript** (**JS**) ist eine leichtgewichtige interpretierte (oder [just-in-time](https://en.wikipedia.org/wiki/Just-in-time_compilation) kompilierte) Programmiersprache mit {{Glossary("First-class_Function", "Erstklass-Funktionen")}}. Während sie als Skriptsprache für Webseiten am bekanntesten ist, nutzen auch [viele Nicht-Browser-Umgebungen](https://en.wikipedia.org/wiki/JavaScript#Other_usage) JavaScript, wie zum Beispiel {{Glossary("Node.js", "Node.js")}}, [Apache CouchDB](https://couchdb.apache.org/) und [Adobe Acrobat](https://opensource.adobe.com/dc-acrobat-sdk-docs/acrobatsdk/). JavaScript ist prototypenbasiert, unterstützt mehrere Paradigmen, ist {{Glossary("Thread", "Single-Threaded")}} und eine {{Glossary("Dynamic_typing", "dynamische")}} Sprache, die objektorientierte, imperative und deklarative (z. B. funktionale Programmierung) Stile unterstützt.

Die dynamischen Fähigkeiten von JavaScript umfassen die Laufzeitobjektkonstruktion, variable Parameterlisten, Funktionsvariablen, dynamische Skripterstellung (über [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)), Objektintrospektion (über [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) und [`Object`-Utilities](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods)) und Quellcode-Wiederherstellung (JavaScript-Funktionen speichern ihren Quelltext und können über [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/toString) abgerufen werden).

Dieser Abschnitt widmet sich der JavaScript-Sprache selbst und nicht den Teilen, die spezifisch für Webseiten oder andere Host-Umgebungen sind. Für Informationen über {{Glossary("API", "APIs")}}, die spezifisch für Webseiten sind, besuchen Sie bitte [Web APIs](/de/docs/Web/API) und {{Glossary("DOM", "DOM")}}.

Die Standards für JavaScript sind die [ECMAScript Language Specification](https://tc39.es/ecma262/) (ECMA-262) und die [ECMAScript Internationalization API specification](https://tc39.es/ecma402/) (ECMA-402). Sobald ein Browser ein Feature implementiert, versuchen wir es zu dokumentieren. Dies bedeutet, dass in Fällen, in denen einige [Vorschläge für neue ECMAScript-Features](https://github.com/tc39/proposals) bereits in Browsern implementiert wurden, die Dokumentation und Beispiele in MDN-Artikeln einige dieser neuen Features verwenden können. Meist geschieht dies zwischen den [Phasen](https://tc39.es/process-document/) 3 und 4 und gewöhnlich bevor die Spezifikation offiziell veröffentlicht wird.

Verwechseln Sie JavaScript nicht mit der [Java-Programmiersprache](<https://en.wikipedia.org/wiki/Java_(programming_language)>) - **JavaScript ist _kein_ "interpretiertes Java"**. Sowohl "Java" als auch "JavaScript" sind Marken oder eingetragene Marken von Oracle in den USA und anderen Ländern. Die beiden Programmiersprachen haben jedoch sehr unterschiedliche Syntax, Semantik und Anwendungsgebiete.

Die JavaScript-Dokumentation zu Kernsprachenfeatures (hauptsächlich reines [ECMAScript](/de/docs/Web/JavaScript/JavaScript_technologies_overview)) umfasst Folgendes:

- Der [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide)
- Das [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference)

Für weitere Informationen über JavaScript-Spezifikationen und verwandte Technologien siehe [JavaScript-Technologieübersicht](/de/docs/Web/JavaScript/JavaScript_technologies_overview).

## Einsteiger-Tutorials

Lernen Sie, wie man von Grund auf in JavaScript programmiert, mit unseren Einsteiger-Tutorials.

- [Ihre erste Website: Interaktivität hinzufügen](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity)
  - : Dieser Artikel bietet eine kurze Einführung, was JavaScript ist und wie man es verwendet, insbesondere für Personen, die völlig neu in der Webentwicklung sind.
- [Dynamisches Skripting mit JavaScript](/de/docs/Learn_web_development/Core/Scripting)
  - : Das JavaScript-Modul unseres [Leitfaden zur Webentwicklung](/de/docs/Learn_web_development) vermittelt alle Grundlagen zu JavaScript von Grund auf.
- [JavaScript-Frameworks und -Bibliotheken](/de/docs/Learn_web_development/Core/Frameworks_libraries)
  - : JavaScript-Frameworks sind ein wesentlicher Bestandteil der modernen Front-End-Webentwicklung und bieten Entwicklern bewährte Werkzeuge für den Aufbau skalierbarer, interaktiver Webanwendungen. Viele moderne Unternehmen verwenden Frameworks als Standardbestandteil ihrer Werkzeuge, sodass viele Front-End-Entwicklungsjobs jetzt Framework-Erfahrung erfordern. In dieser Artikelsammlung möchten wir Ihnen einen angenehmen Ausgangspunkt bieten, um mit dem Lernen von Frameworks zu beginnen.

## JavaScript-Leitfäden

### Grundlegende Sprachleitfäden

- [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide)
  - : Ein viel detaillierterer Leitfaden zur JavaScript-Sprache, der sich an diejenigen richtet, die bereits Programmiererfahrung entweder in JavaScript oder einer anderen Sprache haben.

### Mittelstufe

- [Fortgeschrittene JavaScript-Objekte](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects)
  - : Die objektorientierte Natur von JavaScript ist wichtig zu verstehen, wenn Sie Ihr Wissen über die Sprache vertiefen und effizienteren Code schreiben möchten. Daher haben wir dieses Modul bereitgestellt, um Ihnen dabei zu helfen.
- [Asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS)
  - : In diesem Modul werfen wir einen Blick auf {{Glossary("asynchronous", "asynchrones")}} JavaScript, warum es wichtig ist und wie es effektiv verwendet werden kann, um potenziell blockierende Operationen, wie das Abrufen von Ressourcen von einem Server, zu handhaben.
- [Client-seitige Web-APIs](/de/docs/Learn_web_development/Extensions/Client-side_APIs)
  - : Erforscht, was APIs sind und wie einige der häufigsten APIs, auf die Sie in Ihrer Entwicklungsarbeit häufig stoßen werden, verwendet werden.
- [JavaScript Spracheinführung](/de/docs/Web/JavaScript/Language_overview)
  - : Ein Überblick über die grundlegende Syntax und Semantik von JavaScript für diejenigen, die aus anderen Programmiersprachen kommen, um sich einzuarbeiten.
- [JavaScript-Datenstrukturen](/de/docs/Web/JavaScript/Data_structures)
  - : Überblick über die verfügbaren Datenstrukturen in JavaScript.
- [Gleichheitsvergleiche und Gleichheit](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness)
  - : JavaScript bietet drei verschiedene Wertvergleichsoperationen: strikte Gleichheit mit `===`, lose Gleichheit mit `==` und die {{jsxref("Object.is()")}} Methode.
- [Enumerierbarkeit und Besitz von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
  - : Wie verschiedene Methoden, die eine Gruppe von Objekteigenschaften einzeln besuchen, mit der Enumerierbarkeit und dem Besitz von Eigenschaften umgehen.
- [Closures](/de/docs/Web/JavaScript/Closures)
  - : Ein Closure ist die Kombination aus einer Funktion und dem lexikalischen Umfeld, in dem diese Funktion deklariert wurde.

### Fortgeschritten

- [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
  - : Erklärung der weithin missverstandenen und unterschätzten prototypenbasierten Vererbung.
- [Speicherverwaltung](/de/docs/Web/JavaScript/Memory_management)
  - : Lebenszyklus des Speichers und Garbage Collection in JavaScript.
- [Die Ereignisschleife](/de/docs/Web/JavaScript/Event_loop)
  - : JavaScript hat ein Laufzeitmodell, das auf einer "Ereignisschleife" basiert.

## Referenz

Durchstöbern Sie die vollständige [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) Dokumentation.

- [Standardobjekte](/de/docs/Web/JavaScript/Reference/Global_Objects)
  - : Lernen Sie Standard-Objekte wie {{jsxref("Array")}}, {{jsxref("Boolean")}}, {{jsxref("Date")}}, {{jsxref("Error")}}, {{jsxref("Function")}}, {{jsxref("JSON")}}, {{jsxref("Math")}}, {{jsxref("Number")}}, {{jsxref("Object")}}, {{jsxref("RegExp")}}, {{jsxref("String")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}} und andere kennen.
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Reference/Operators)
  - : Erfahren Sie mehr über das Verhalten von JavaScript-Operatoren {{jsxref("Operators/instanceof", "instanceof")}}, {{jsxref("Operators/typeof", "typeof")}}, {{jsxref("Operators/new", "new")}}, {{jsxref("Operators/this", "this")}}, die [Operatorpriorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) und mehr.
- [Anweisungen und Deklarationen](/de/docs/Web/JavaScript/Reference/Statements)
  - : Lernen Sie, wie {{jsxref("Statements/do...while", "do-while")}}, {{jsxref("Statements/for...in", "for-in")}}, {{jsxref("Statements/for...of", "for-of")}}, {{jsxref("Statements/try...catch", "try-catch")}}, {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/var", "var")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/if...else", "if-else")}}, {{jsxref("Statements/switch", "switch")}} und weitere JavaScript-Anweisungen und Schlüsselwörter funktionieren.
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
  - : Lernen Sie, wie Sie mit den Funktionen von JavaScript arbeiten, um Ihre Anwendungen zu entwickeln.
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
  - : JavaScript-Klassen sind die geeignetste Art, objektorientierte Programmierung zu betreiben.
