---
title: Standard eingebaute Objekte
slug: Web/JavaScript/Reference/Global_Objects
l10n:
  sourceCommit: fb442649a7e91a177a582a3e9c6e1a95a9e8dda5
---

{{jsSidebar("Objects")}}

Dieses Kapitel dokumentiert alle Standard-JavaScript-Objekte, einschließlich ihrer Methoden und Eigenschaften.

Der Begriff "globale Objekte" (oder Standard-eingebaute Objekte) darf nicht mit **dem globalen Objekt** verwechselt werden. Hier bezieht sich "globale Objekte" auf **Objekte im globalen Bereich**.

Das **globale Objekt** selbst kann im globalen Bereich mit dem Operator {{jsxref("Operators/this", "this")}} zugegriffen werden. Tatsächlich **besteht** der globale Bereich aus den Eigenschaften des globalen Objekts, einschließlich geerbter Eigenschaften, falls vorhanden.

Andere Objekte im globalen Bereich werden entweder [durch das Benutzer-Skript erstellt](/de/docs/Web/JavaScript/Guide/Working_with_objects#creating_new_objects) oder von der Host-Anwendung bereitgestellt. Die in Browser-Kontexten verfügbaren Host-Objekte sind in der [API-Referenz](/de/docs/Web/API) dokumentiert.

Weitere Informationen über die Unterscheidung zwischen dem [DOM](/de/docs/Web/API/Document_Object_Model) und dem Kern-[JavaScript](/de/docs/Web/JavaScript) finden Sie in der [Übersicht zu JavaScript-Technologien](/de/docs/Web/JavaScript/JavaScript_technologies_overview).

## Standardobjekte nach Kategorie

### Wert-Eigenschaften

Diese globalen Eigenschaften geben einen einfachen Wert zurück. Sie haben keine Eigenschaften oder Methoden.

- {{jsxref("globalThis")}}
- {{jsxref("Infinity")}}
- {{jsxref("NaN")}}
- {{jsxref("undefined")}}

### Funktionen-Eigenschaften

Diese globalen Funktionen - Funktionen, die global aufgerufen werden, anstatt auf einem Objekt - geben ihre Ergebnisse direkt an den Aufrufer zurück.

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

Fehlerobjekte sind ein spezieller Typ grundlegender Objekte. Sie umfassen den grundlegenden {{jsxref("Error")}}-Typ sowie mehrere spezialisierte Fehlertypen.

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

Dies sind die Basisobjekte, die Zahlen, Daten und mathematische Berechnungen darstellen.

- {{jsxref("Number")}}
- {{jsxref("BigInt")}}
- {{jsxref("Math")}}
- {{jsxref("Date")}}

### Textverarbeitung

Diese Objekte repräsentieren Zeichenfolgen und unterstützen deren Manipulation.

- {{jsxref("String")}}
- {{jsxref("RegExp")}}

### Indizierte Sammlungen

Diese Objekte repräsentieren Sammlungen von Daten, die durch einen Indexwert geordnet sind. Dazu gehören (typisierte) Arrays und arrayähnliche Konstrukte.

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

Diese Objekte repräsentieren Sammlungen, die Schlüssel verwenden. Die iterierbaren Sammlungen ({{jsxref("Map")}} und {{jsxref("Set")}}) enthalten Elemente, die in der Reihenfolge der Einfügeoperation einfach durchlaufen werden können.

- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}

### Strukturierte Daten

Diese Objekte stellen strukturierte Datenpuffer dar und interagieren mit in JavaScript Object Notation (JSON) kodierten Daten.

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

Kontrollabstraktionen können helfen, Code zu strukturieren, insbesondere asynchronen Code (ohne tief verschachtelte Rückrufe zu verwenden, zum Beispiel).

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

Erweiterungen zum ECMAScript-Kern für sprachsensitives Arbeiten.

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
