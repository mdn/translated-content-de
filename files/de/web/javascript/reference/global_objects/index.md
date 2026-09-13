---
title: Standardmäßig integrierte Objekte
slug: Web/JavaScript/Reference/Global_Objects
l10n:
  sourceCommit: 31bad7cd99cccf47f6332b81bbff4371e2bc551f
---

Dieses Kapitel dokumentiert alle standardmäßigen, integrierten Objekte von JavaScript, einschließlich ihrer Methoden und Eigenschaften.

Der Begriff „globale Objekte“ (oder standardmäßig integrierte Objekte) ist hier nicht mit **dem globalen Objekt** zu verwechseln. Hier bezieht sich „globale Objekte“ auf **Objekte im globalen Gültigkeitsbereich**.

Auf das **globale Objekt** selbst kann im globalen Gültigkeitsbereich mit dem Operator {{jsxref("this")}} zugegriffen werden. Tatsächlich **besteht** der globale Gültigkeitsbereich aus den Eigenschaften des globalen Objekts, einschließlich geerbter Eigenschaften, falls vorhanden.

Andere Objekte im globalen Gültigkeitsbereich werden entweder [durch das Benutzerskript erstellt](/de/docs/Web/JavaScript/Guide/Working_with_objects#creating_new_objects) oder von der Hostanwendung bereitgestellt. Die in Browser-Kontexten verfügbaren Hostobjekte sind in der [API-Referenz](/de/docs/Web/API) dokumentiert.

Weitere Informationen über die Unterscheidung zwischen dem [DOM](/de/docs/Web/API/Document_Object_Model) und zentralem [JavaScript](/de/docs/Web/JavaScript) finden Sie in der [Übersicht über JavaScript-Technologien](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview).

## Standardobjekte nach Kategorie

### Werteigenschaften

Diese globalen Eigenschaften geben einen einfachen Wert zurück. Sie haben keine Eigenschaften oder Methoden.

- {{jsxref("globalThis")}}
- {{jsxref("Infinity")}}
- {{jsxref("NaN")}}
- {{jsxref("undefined")}}

### Funktionseigenschaften

Diese globalen Funktionen – Funktionen, die global und nicht auf einem Objekt aufgerufen werden – geben ihre Ergebnisse direkt an den Aufrufer zurück.

- {{jsxref("Global_Objects/eval", "eval()")}}
- {{jsxref("isFinite()")}}
- {{jsxref("isNaN()")}}
- {{jsxref("parseFloat()")}}
- {{jsxref("parseInt()")}}
- {{jsxref("decodeURI()")}}
- {{jsxref("decodeURIComponent()")}}
- {{jsxref("encodeURI()")}}
- {{jsxref("encodeURIComponent()")}}
- {{jsxref("escape()")}} {{deprecated_inline}}
- {{jsxref("unescape()")}} {{deprecated_inline}}

### Grundlegende Objekte

Diese Objekte repräsentieren grundlegende Sprachkonstrukte.

- {{jsxref("Object")}}
- {{jsxref("Function")}}
- {{jsxref("Boolean")}}
- {{jsxref("Symbol")}}

### Fehlerobjekte

Fehlerobjekte sind eine spezielle Art grundlegender Objekte. Sie umfassen den grundlegenden Typ {{jsxref("Error")}} sowie mehrere spezialisierte Fehlertypen.

- {{jsxref("Error")}}
- {{jsxref("AggregateError")}}
- {{jsxref("EvalError")}}
- {{jsxref("RangeError")}}
- {{jsxref("ReferenceError")}}
- {{jsxref("SuppressedError")}}
- {{jsxref("SyntaxError")}}
- {{jsxref("TypeError")}}
- {{jsxref("URIError")}}
- {{jsxref("InternalError")}} {{non-standard_inline}}

### Zahlen und Datumsangaben

Dies sind die Basisobjekte für Zahlen, Datumsangaben und mathematische Berechnungen.

- {{jsxref("Number")}}
- {{jsxref("BigInt")}}
- {{jsxref("Math")}}
- {{jsxref("Date")}}
- {{jsxref("Temporal")}}

### Textverarbeitung

Diese Objekte repräsentieren Zeichenketten und unterstützen deren Bearbeitung.

- {{jsxref("String")}}
- {{jsxref("RegExp")}}

### Indizierte Sammlungen

Diese Objekte repräsentieren Datensammlungen, die nach einem Indexwert geordnet sind. Dazu gehören (typisierte) Arrays und arrayähnliche Konstrukte.

- {{jsxref("Array")}}
- {{jsxref("TypedArray")}}
- {{jsxref("Int8Array")}}
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8ClampedArray")}}
- {{jsxref("Int16Array")}}
- {{jsxref("Uint16Array")}}
- {{jsxref("Int32Array")}}
- {{jsxref("Uint32Array")}}
- {{jsxref("BigInt64Array")}}
- {{jsxref("BigUint64Array")}}
- {{jsxref("Float16Array")}}
- {{jsxref("Float32Array")}}
- {{jsxref("Float64Array")}}

### Schlüsselbasierte Sammlungen

Diese Objekte repräsentieren Sammlungen, die Schlüssel verwenden. Die iterierbaren Sammlungen ({{jsxref("Map")}} und {{jsxref("Set")}}) enthalten Elemente, die einfach in der Einfügereihenfolge iteriert werden können.

- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}

### Strukturierte Daten

Diese Objekte repräsentieren strukturierte Datenpuffer und Daten, die mit JavaScript Object Notation (JSON) kodiert sind, und ermöglichen die Interaktion mit ihnen.

- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
- {{jsxref("DataView")}}
- {{jsxref("Atomics")}}
- {{jsxref("JSON")}}

### Speicherverwaltung

Diese Objekte interagieren mit dem Garbage-Collection-Mechanismus.

- {{jsxref("WeakRef")}}
- {{jsxref("FinalizationRegistry")}}

### Objekte zur Kontrollabstraktion

Kontrollabstraktionen können dabei helfen, Code zu strukturieren, insbesondere asynchronen Code (beispielsweise ohne tief verschachtelte Callbacks zu verwenden).

- {{jsxref("Iterator")}}
- {{jsxref("AsyncIterator")}}
- {{jsxref("Promise")}}
- {{jsxref("GeneratorFunction")}}
- {{jsxref("AsyncGeneratorFunction")}}
- {{jsxref("Generator")}}
- {{jsxref("AsyncGenerator")}}
- {{jsxref("AsyncFunction")}}
- {{jsxref("DisposableStack")}}
- {{jsxref("AsyncDisposableStack")}}

### Reflektion

- {{jsxref("AbstractModuleSource")}}
- {{jsxref("Reflect")}}
- {{jsxref("Proxy")}}

### Internationalisierung

Ergänzungen zum ECMAScript-Kern für sprachsensitive Funktionalitäten.

- {{jsxref("Intl")}}
- {{jsxref("Intl.Collator")}}
- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Intl.DisplayNames")}}
- {{jsxref("Intl.DurationFormat")}}
- {{jsxref("Intl.ListFormat")}}
- {{jsxref("Intl.Locale")}}
- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Intl.PluralRules")}}
- {{jsxref("Intl.RelativeTimeFormat")}}
- {{jsxref("Intl.Segmenter")}}
