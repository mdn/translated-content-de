---
title: Standard eingebaute Objekte
slug: Web/JavaScript/Reference/Global_Objects
l10n:
  sourceCommit: fb442649a7e91a177a582a3e9c6e1a95a9e8dda5
---

{{jsSidebar("Objects")}}

Dieses Kapitel dokumentiert alle standardmäßigen, eingebauten Objekte von JavaScript, einschließlich ihrer Methoden und Eigenschaften.

Der Begriff "globale Objekte" (oder standardmäßige eingebauten Objekte) sollte nicht mit **dem globalen Objekt** verwechselt werden. Hier beziehen sich "globale Objekte" auf **Objekte im globalen Gültigkeitsbereich**.

Auf das **globale Objekt** selbst kann im globalen Gültigkeitsbereich mit dem {{jsxref("Operators/this", "this")}} Operator zugegriffen werden. Tatsächlich **besteht** der globale Gültigkeitsbereich aus den Eigenschaften des globalen Objekts, einschließlich geerbter Eigenschaften, falls vorhanden.

Andere Objekte im globalen Gültigkeitsbereich werden entweder [vom Benutzerskript erstellt](/de/docs/Web/JavaScript/Guide/Working_with_objects#creating_new_objects) oder vom Host-Anwendungsseite bereitgestellt. Die im Browser-Kontext verfügbaren Host-Objekte sind in der [API-Referenz](/de/docs/Web/API) dokumentiert.

Für weitere Informationen über die Unterscheidung zwischen dem [DOM](/de/docs/Web/API/Document_Object_Model) und dem Kern von [JavaScript](/de/docs/Web/JavaScript), siehe [JavaScript-Technologien Übersicht](/de/docs/Web/JavaScript/JavaScript_technologies_overview).

## Standardobjekte nach Kategorie

### Wert-Eigenschaften

Diese globalen Eigenschaften geben einen einfachen Wert zurück. Sie haben keine Eigenschaften oder Methoden.

- {{jsxref("globalThis")}}
- {{jsxref("Infinity")}}
- {{jsxref("NaN")}}
- {{jsxref("undefined")}}

### Funktionen-Eigenschaften

Diese globalen Funktionen—Funktionen, die global und nicht auf einem Objekt aufgerufen werden—geben ihre Ergebnisse direkt an den Aufrufer zurück.

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

Dies sind die Basisobjekte, die Zahlen, Daten und mathematische Berechnungen darstellen.

- {{jsxref("Number")}}
- {{jsxref("BigInt")}}
- {{jsxref("Math")}}
- {{jsxref("Date")}}

### Textverarbeitung

Diese Objekte repräsentieren Zeichenfolgen und unterstützen deren Manipulation.

- {{jsxref("String")}}
- {{jsxref("RegExp")}}

### Indexierte Sammlungen

Diese Objekte repräsentieren Sammlungen von Daten, die durch einen Indexwert geordnet sind. Dies umfasst (typisierte) Arrays und array-ähnliche Konstrukte.

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

Diese Objekte repräsentieren Sammlungen, die Schlüssel verwenden. Die iterierbaren Sammlungen ({{jsxref("Map")}} und {{jsxref("Set")}}) enthalten Elemente, die leicht in der Einfügereihenfolge durchlaufen werden können.

- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}

### Strukturierte Daten

Diese Objekte repräsentieren und interagieren mit strukturierten Datenpuffern und Daten, die mithilfe von JavaScript Object Notation (JSON) kodiert sind.

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

Kontrollabstraktionen können helfen, Code zu strukturieren, insbesondere asynchronen Code (ohne stark verschachtelte Rückrufe zu verwenden, zum Beispiel).

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

Erweiterungen des ECMAScript-Kerns für sprachsensitive Funktionen.

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
