---
title: Eingebaute Standardobjekte
slug: Web/JavaScript/Reference/Global_Objects
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{jsSidebar("Objects")}}

Dieses Kapitel dokumentiert alle standardmäßigen, eingebauten Objekte von JavaScript, einschließlich ihrer Methoden und Eigenschaften.

Der Begriff "globale Objekte" (oder standardmäßig eingebaute Objekte) ist hier nicht mit **dem globalen Objekt** zu verwechseln. Hier bezieht sich "globale Objekte" auf **Objekte im globalen Gültigkeitsbereich**.

Auf das **globale Objekt** selbst kann im globalen Gültigkeitsbereich mit dem {{jsxref("Operators/this", "this")}} Operator zugegriffen werden. Tatsächlich besteht der globale Gültigkeitsbereich **aus** den Eigenschaften des globalen Objekts, einschließlich geerbter Eigenschaften, falls vorhanden.

Andere Objekte im globalen Gültigkeitsbereich werden entweder [vom Benutzer-Skript erstellt](/de/docs/Web/JavaScript/Guide/Working_with_objects#creating_new_objects) oder von der Hostanwendung bereitgestellt. Die in Browser-Kontexten verfügbaren Hostobjekte sind in der [API-Referenz](/de/docs/Web/API) dokumentiert.

Für weitere Informationen über die Unterscheidung zwischen dem [DOM](/de/docs/Web/API/Document_Object_Model) und dem Kernbereich von [JavaScript](/de/docs/Web/JavaScript) siehe [JavaScript-Technologieübersicht](/de/docs/Web/JavaScript/JavaScript_technologies_overview).

## Standardobjekte nach Kategorie

### Wert-Eigenschaften

Diese globalen Eigenschaften geben einen einfachen Wert zurück. Sie haben keine Eigenschaften oder Methoden.

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

### Fundamentale Objekte

Diese Objekte repräsentieren grundlegende Sprachkonstrukte.

- {{jsxref("Object")}}
- {{jsxref("Function")}}
- {{jsxref("Boolean")}}
- {{jsxref("Symbol")}}

### Fehlerobjekte

Fehlerobjekte sind eine spezielle Art von fundamentalen Objekten. Sie umfassen den grundlegenden {{jsxref("Error")}} Typ sowie mehrere spezialisierte Fehlertypen.

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

Diese Objekte repräsentieren Zeichenketten und unterstützen deren Manipulation.

- {{jsxref("String")}}
- {{jsxref("RegExp")}}

### Indizierte Sammlungen

Diese Objekte repräsentieren Sammlungen von Daten, die nach einem Indexwert geordnet sind. Dies umfasst (typisierte) Arrays und array-ähnliche Konstrukte.

- {{jsxref("Array")}}
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

Diese Objekte repräsentieren Sammlungen, die Schlüssel verwenden. Die iterierbaren Sammlungen ({{jsxref("Map")}} und {{jsxref("Set")}}) enthalten Elemente, die in der Reihenfolge der Einfügung leicht iteriert werden können.

- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}

### Strukturierte Daten

Diese Objekte repräsentieren und interagieren mit strukturierten Datenpuffern und daten, die unter Verwendung von JavaScript Object Notation (JSON) kodiert sind.

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

Kontrollabstraktionen können dabei helfen, Code zu strukturieren, insbesondere asynchronen Code (ohne zum Beispiel tief verschachtelte Rückrufe zu verwenden).

- {{jsxref("Iterator")}}
- {{jsxref("AsyncIterator")}}
- {{jsxref("Promise")}}
- {{jsxref("GeneratorFunction")}}
- {{jsxref("AsyncGeneratorFunction")}}
- {{jsxref("Generator")}}
- {{jsxref("AsyncGenerator")}}
- {{jsxref("AsyncFunction")}}

### Reflektion

- {{jsxref("Reflect")}}
- {{jsxref("Proxy")}}

### Internationalisierung

Erweiterungen des ECMAScript-Kerns für sprachsensible Funktionen.

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
