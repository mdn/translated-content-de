---
title: Intl.RelativeTimeFormat.prototype.format()
short-title: format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

Die **`format()`**-Methode von {{jsxref("Intl.RelativeTimeFormat")}}-Instanzen formatiert einen `value` und eine `unit` entsprechend der Sprach- und Formatierungsoptionen dieses `Intl.RelativeTimeFormat`-Objekts.

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
  - : Einheit, die in der internationalisierten relativen Zeitnachricht verwendet wird. Mögliche Werte sind: `"year"`, `"quarter"`, `"month"`, `"week"`, `"day"`, `"hour"`, `"minute"`, `"second"`. Pluralformen sind ebenfalls erlaubt.

### Rückgabewert

Ein String, der den angegebenen `value` und die `unit` formatiert gemäß der Sprach- und Formatierungsoptionen dieses {{jsxref("Intl.RelativeTimeFormat")}}-Objekts.

> [!NOTE]
> Meistens ist das von `format()` zurückgegebene Format konsistent. Es kann jedoch zwischen Implementierungen variieren, selbst innerhalb derselben Sprache – Variationen im Ergebnis sind absichtlich und durch die Spezifikation erlaubt. Es entspricht möglicherweise nicht Ihren Erwartungen. Beispielsweise kann die Zeichenkette geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `format()` nicht mit fest codierten Konstanten vergleichen.

## Beispiele

### Grundlegende Formatverwendung

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

Wenn die Option `numeric: "auto"` übergeben wird, erzeugt sie die Zeichenkette `yesterday`, `today` oder `tomorrow` anstelle von `1 day ago`, `in 0 days` oder `in 1 day`. Dies ermöglicht es, numerische Werte in der Ausgabe zu vermeiden.

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
