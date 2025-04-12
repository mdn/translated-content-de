---
title: Standardmäßige eingebaute Objekte
slug: Web/JavaScript/Reference/Global_Objects
l10n:
  sourceCommit: b2c8dcdae36907a87d1d1b9393ca4a35ebc765d6
---

{{jsSidebar("Objects")}}

Dieses Kapitel dokumentiert alle standardmäßigen, eingebauten Objekte von JavaScript, einschließlich ihrer Methoden und Eigenschaften.

Der Begriff "globale Objekte" (oder standardmäßige eingebaute Objekte) hier darf nicht mit **dem globalen Objekt** verwechselt werden. Hier beziehen sich "globale Objekte" auf **Objekte im globalen Gültigkeitsbereich**.

Auf das **globale Objekt** selbst kann im globalen Gültigkeitsbereich mit dem Operator {{jsxref("Operators/this", "this")}} zugegriffen werden. Tatsächlich **besteht** der globale Gültigkeitsbereich aus den Eigenschaften des globalen Objekts, einschließlich eventuell geerbter Eigenschaften.

Andere Objekte im globalen Gültigkeitsbereich werden entweder [durch das Benutzerskript erstellt](/de/docs/Web/JavaScript/Guide/Working_with_objects#creating_new_objects) oder von der Host-Anwendung bereitgestellt. Die in Browserkontexten verfügbaren Host-Objekte sind in der [API-Referenz](/de/docs/Web/API) dokumentiert.

Weitere Informationen zum Unterschied zwischen dem [DOM](/de/docs/Web/API/Document_Object_Model) und dem Kern von [JavaScript](/de/docs/Web/JavaScript) finden Sie im [Überblick über JavaScript-Technologien](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview).

## Standardobjekte nach Kategorie

### Werteigenschaften

Diese globalen Eigenschaften liefern einen einfachen Wert zurück. Sie haben keine Eigenschaften oder Methoden.

- {{jsxref("globalThis")}}
- {{jsxref("Infinity")}}
- {{jsxref("NaN")}}
- {{jsxref("undefined")}}

### Funktionseigenschaften

Diese globalen Funktionen—Funktionen, die global aufgerufen werden, anstatt auf einem Objekt—geben ihre Ergebnisse direkt an den Aufrufer zurück.

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

Fehlerobjekte sind eine spezielle Art von grundlegenden Objekten. Sie umfassen den grundlegenden Typ {{jsxref("Error")}} sowie mehrere spezialisierte Fehlertypen.

- {{jsxref("Error")}}
- {{jsxref("AggregateError")}}
- {{jsxref("EvalError")}}
- {{jsxref("RangeError")}}
- {{jsxref("ReferenceError")}}
- {{jsxref("SyntaxError")}}
- {{jsxref("TypeError")}}
- {{jsxref("URIError")}}
- {{jsxref("InternalError")}} {{non-standard_inline}}

### Zahlen und Daten

Dies sind die Basisobjekte, die Zahlen, Daten und mathematische Berechnungen repräsentieren.

- {{jsxref("Number")}}
- {{jsxref("BigInt")}}
- {{jsxref("Math")}}
- {{jsxref("Date")}}
- {{jsxref("Temporal")}}

### Textverarbeitung

Diese Objekte repräsentieren Zeichenfolgen und unterstützen deren Manipulation.

- {{jsxref("String")}}
- {{jsxref("RegExp")}}

### Indexierte Sammlungen

Diese Objekte repräsentieren Sammlungen von Daten, die nach einem Indexwert geordnet sind. Dies schließt (typisierte) Arrays und array-ähnliche Konstrukte ein.

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

Diese Objekte repräsentieren Sammlungen, die Schlüssel verwenden. Die iterierbaren Sammlungen ({{jsxref("Map")}} und {{jsxref("Set")}}) enthalten Elemente, die leicht in der Reihenfolge der Einfügung durchiteriert werden können.

- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}

### Strukturierte Daten

Diese Objekte repräsentieren und interagieren mit gepufferten strukturierten Daten und mit JavaScript Object Notation (JSON) codierten Daten.

- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
- {{jsxref("DataView")}}
- {{jsxref("Atomics")}}
- {{jsxref("JSON")}}

### Speicherverwaltung

Diese Objekte interagieren mit der Speicherbereinigungsmechanismus.

- {{jsxref("WeakRef")}}
- {{jsxref("FinalizationRegistry")}}

### Kontrollabstraktionsobjekte

Kontrollabstraktionen können helfen, Code zu strukturieren, insbesondere asynchronen Code (ohne z.B. tief geschachtelte Rückrufe zu verwenden).

- {{jsxref("Iterator")}}
- {{jsxref("AsyncIterator")}}
- {{jsxref("Promise")}}
- {{jsxref("GeneratorFunction")}}
- {{jsxref("AsyncGeneratorFunction")}}
- {{jsxref("Generator")}}
- {{jsxref("AsyncGenerator")}}
- {{jsxref("AsyncFunction")}}

### Reflexion

- {{jsxref("Reflect")}}
- {{jsxref("Proxy")}}

### Internationalisierung

Ergänzungen zum ECMAScript-Kern für sprachsensitive Funktionen.

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
