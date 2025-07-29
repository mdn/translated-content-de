---
title: Eingebaute Standardobjekte
slug: Web/JavaScript/Reference/Global_Objects
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

Dieses Kapitel dokumentiert alle JavaScript-Standardobjekte, einschließlich ihrer Methoden und Eigenschaften.

Der Begriff "globale Objekte" (oder eingebaute Standardobjekte) darf hier nicht mit **dem globalen Objekt** verwechselt werden. Hier beziehen sich "globale Objekte" auf **Objekte im globalen Geltungsbereich**.

Das **globale Objekt** selbst kann im globalen Geltungsbereich mit dem {{jsxref("Operators/this", "this")}} Operator aufgerufen werden. Tatsächlich besteht der globale Geltungsbereich **aus** den Eigenschaften des globalen Objekts, einschließlich geerbter Eigenschaften, falls vorhanden.

Andere Objekte im globalen Geltungsbereich werden entweder [vom Benutzerskript erstellt](/de/docs/Web/JavaScript/Guide/Working_with_objects#creating_new_objects) oder von der Hostanwendung bereitgestellt. Die in Browserkontexten verfügbaren Hostobjekte sind in der [API-Referenz](/de/docs/Web/API) dokumentiert.

Weitere Informationen über den Unterschied zwischen dem [DOM](/de/docs/Web/API/Document_Object_Model) und dem Kern von [JavaScript](/de/docs/Web/JavaScript) finden Sie im [JavaScript-Technologieüberblick](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview).

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

### Fundamentale Objekte

Diese Objekte repräsentieren grundlegende Sprachkonstrukte.

- {{jsxref("Object")}}
- {{jsxref("Function")}}
- {{jsxref("Boolean")}}
- {{jsxref("Symbol")}}

### Fehlerobjekte

Fehlerobjekte sind eine spezielle Art von fundamentalen Objekten. Sie umfassen den grundlegenden {{jsxref("Error")}}-Typ sowie mehrere spezialisierte Fehlertypen.

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

### Zahlen und Daten

Dies sind die Basisobjekte, die Zahlen, Daten und mathematische Berechnungen darstellen.

- {{jsxref("Number")}}
- {{jsxref("BigInt")}}
- {{jsxref("Math")}}
- {{jsxref("Date")}}
- {{jsxref("Temporal")}}

### Textverarbeitung

Diese Objekte repräsentieren Zeichenfolgen und unterstützen deren Manipulation.

- {{jsxref("String")}}
- {{jsxref("RegExp")}}

### Indizierte Sammlungen

Diese Objekte repräsentieren Datensammlungen, die nach einem Indexwert geordnet sind. Dazu gehören (typisierte) Arrays und Array-ähnliche Konstrukte.

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

Diese Objekte repräsentieren Sammlungen, die Schlüssel verwenden. Die iterierbaren Sammlungen ({{jsxref("Map")}} und {{jsxref("Set")}}) enthalten Elemente, die in der Reihenfolge ihrer Einfügung leicht iteriert werden können.

- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}

### Strukturierte Daten

Diese Objekte repräsentieren und interagieren mit strukturierten Datenpuffern und Daten, die mit JavaScript Object Notation (JSON) kodiert sind.

- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
- {{jsxref("DataView")}}
- {{jsxref("Atomics")}}
- {{jsxref("JSON")}}

### Speicherverwaltung

Diese Objekte interagieren mit dem Garbage-Collection-Mechanismus.

- {{jsxref("WeakRef")}}
- {{jsxref("FinalizationRegistry")}}

### Kontrollabstraktionsobjekte

Kontrollabstraktionen können helfen, Code, insbesondere asynchronen Code, zu strukturieren (ohne z.B. tief verschachtelte Rückrufe zu verwenden).

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

### Reflexion

- {{jsxref("Reflect")}}
- {{jsxref("Proxy")}}

### Internationalisierung

Ergänzungen zum ECMAScript-Kern für sprachensensitive Funktionen.

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
