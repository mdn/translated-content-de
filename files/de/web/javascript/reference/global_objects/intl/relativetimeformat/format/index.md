---
title: Intl.RelativeTimeFormat.prototype.format()
short-title: format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format
l10n:
  sourceCommit: 1474534461893381d54c502e655f334b5568e597
---

Die **`format()`** Methode von {{jsxref("Intl.RelativeTimeFormat")}} Instanzen formatiert einen `value` und `unit` gemäß der Sprach- und Formatierungsoptionen dieses `Intl.RelativeTimeFormat`-Objekts.

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
  - : Numerischer Wert, der in der internationalisierten relativen Zeitnachricht verwendet wird.
- `unit`
  - : Einheit, die in der internationalisierten relativen Zeitnachricht verwendet wird. Mögliche Werte sind: `"year"`, `"quarter"`, `"month"`, `"week"`, `"day"`, `"hour"`, `"minute"`, `"second"`. Pluralformen sind ebenfalls zulässig.

### Rückgabewert

Ein String, der den gegebenen `value` und `unit` formatiert gemäß der Sprach- und Formatierungsoptionen dieses {{jsxref("Intl.RelativeTimeFormat")}}-Objekts darstellt.

> [!NOTE]
> Meistens ist die Formatierung, die von `format()` zurückgegeben wird, konsistent. Allerdings kann die Ausgabe zwischen Implementierungen variieren, selbst innerhalb der gleichen Sprache — diese Variationen sind gewollt und werden von der Spezifikation erlaubt. Es kann auch nicht das sein, was Sie erwarten. Zum Beispiel kann der String geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `format()` nicht mit fest codierten Konstanten vergleichen.

## Beispiele

### Grundlegende Verwendung der Formatierung

Das folgende Beispiel zeigt, wie man einen relativen Zeitformatierer mit der englischen Sprache erstellt.

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

Wenn die Option `numeric: "auto"` übergeben wird, wird sie die Zeichenkette `yesterday`, `today` oder `tomorrow` erzeugen, anstatt `1 day ago`, `in 0 days` oder `in 1 day`. Dies ermöglicht es, nicht immer numerische Werte in der Ausgabe verwenden zu müssen.

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
