---
title: Intl.RelativeTimeFormat.prototype.format()
short-title: format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`format()`** Methode von {{jsxref("Intl.RelativeTimeFormat")}} Instanzen formatiert einen `value` und `unit` gemäß den Gebietsschema- und Formatierungsoptionen dieses `Intl.RelativeTimeFormat` Objekts.

{{InteractiveExample("JavaScript Demo: Intl.RelativeTimeFormat.prototype.format()")}}

```js interactive-example
const rtf = new Intl.RelativeTimeFormat("en", { style: "short" });

console.log(rtf.format(3, "quarter"));
// Expected output: "in 3 qtrs."

console.log(rtf.format(-1, "day"));
// Expected output: "1 day ago"

console.log(rtf.format(10, "seconds"));
// Expected output: "in 10 sec."
```

## Syntax

```js-nolint
format(value, unit)
```

### Parameter

- `value`
  - : Numerischer Wert, der in der internationalisierten relativen Zeitnachricht verwendet werden soll.
- `unit`
  - : Einheit, die in der internationalisierten relativen Zeitnachricht verwendet werden soll. Mögliche Werte sind: `"year"`, `"quarter"`, `"month"`, `"week"`, `"day"`, `"hour"`, `"minute"`, `"second"`. Pluralformen sind ebenfalls erlaubt.

### Rückgabewert

Ein String, der den angegebenen `value` und `unit` formatiert gemäß den Gebietsschema- und Formatierungsoptionen dieses {{jsxref("Intl.RelativeTimeFormat")}} Objekts darstellt.

> [!NOTE]
> Die Formatierung, die von `format()` zurückgegeben wird, ist meistens konsistent. Trotzdem kann die Ausgabe zwischen Implementierungen variieren, sogar innerhalb desselben Gebietsschemas — Unterschiede in der Ausgabe sind beabsichtigt und von der Spezifikation erlaubt. Sie entspricht möglicherweise auch nicht Ihren Erwartungen. Zum Beispiel könnte der String nicht trennende Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `format()` nicht mit fest codierten Konstanten vergleichen.

## Beispiele

### Grundlegende Verwendung der Formatierung

Das folgende Beispiel zeigt, wie ein relativer Zeit-Formatter mit der englischen Sprache erstellt wird.

```js
// Create a relative time formatter in your locale
// with default values explicitly passed in.
const rtf = new Intl.RelativeTimeFormat("en", {
  localeMatcher: "best fit", // other values: "lookup"
  numeric: "always", // other values: "auto"
  style: "long", // other values: "short" or "narrow"
});

// Format relative time using negative value (-1).
rtf.format(-1, "day"); // "1 day ago"

// Format relative time using positive value (1).
rtf.format(1, "day"); // "in 1 day"
```

### Verwendung der Auto-Option

Wenn die Option `numeric:auto` übergeben wird, wird der String `yesterday`, `today` oder `tomorrow` anstelle von `1 day ago`, `in 0 days` oder `in 1 day` erzeugt. Dies ermöglicht es, nicht immer numerische Werte in der Ausgabe verwenden zu müssen.

```js
// Create a relative time formatter in your locale
// with numeric: "auto" option value passed in.
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

// Format relative time using negative value (-1).
rtf.format(-1, "day"); // "yesterday"

rtf.format(0, "day"); // "today"

// Format relative time using positive day unit (1).
rtf.format(1, "day"); // "tomorrow"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.RelativeTimeFormat")}}
