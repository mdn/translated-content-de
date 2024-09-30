---
title: Intl.RelativeTimeFormat.prototype.format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die Methode **`format()`** von {{jsxref("Intl.RelativeTimeFormat")}}-Instanzen formatiert einen `value` und `unit` gemäß den Lokalisierungs- und Formatierungsoptionen dieses `Intl.RelativeTimeFormat`-Objekts.

{{EmbedInteractiveExample("pages/js/intl-relativetimeformat-prototype-format.html")}}

## Syntax

```js-nolint
format(value, unit)
```

### Parameter

- `value`
  - : Der numerische Wert, der in der lokalisierten relativen Zeitangabe verwendet wird.
- `unit`
  - : Die Einheit, die in der internationalisierten relativen Zeitangabe verwendet wird. Mögliche Werte sind: `"year"`, `"quarter"`, `"month"`, `"week"`, `"day"`, `"hour"`, `"minute"`, `"second"`. Pluralformen sind ebenfalls erlaubt.

### Rückgabewert

Ein String, der den gegebenen `value` und `unit` darstellt, formatiert gemäß den Lokalisierungs- und Formatierungsoptionen dieses {{jsxref("Intl.RelativeTimeFormat")}}-Objekts.

> [!NOTE]
> Meistens ist die Formatierung, die von `format()` zurückgegeben wird, konsistent. Jedoch kann die Ausgabe zwischen Implementierungen variieren, sogar innerhalb derselben Lokalisierung — solche Unterschiede sind durch das Design und die Spezifikation erlaubt. Die Ausgabe entspricht möglicherweise auch nicht den Erwartungen. So kann die Zeichenkette z.B. geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `format()` nicht mit fest codierten Konstanten vergleichen.

## Beispiele

### Grundlegende Verwendungsweise der Formatierung

Das folgende Beispiel zeigt, wie ein relativer Zeitformatierer mit der englischen Sprache erstellt wird.

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

Wenn die Option `numeric:auto` übergeben wird, erzeugt sie die Zeichenkette `yesterday`, `today` oder `tomorrow` anstelle von `1 day ago`, `in 0 days` oder `in 1 day`. Dadurch muss nicht immer ein numerischer Wert in der Ausgabe verwendet werden.

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
