---
title: Intl.RelativeTimeFormat.prototype.format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`format()`**-Methode von {{jsxref("Intl.RelativeTimeFormat")}}-Instanzen formatiert einen `value` und `unit` gemäß den Sprach- und Formatierungsoptionen dieses `Intl.RelativeTimeFormat`-Objekts.

{{EmbedInteractiveExample("pages/js/intl-relativetimeformat-prototype-format.html")}}

## Syntax

```js-nolint
format(value, unit)
```

### Parameter

- `value`
  - : Numerischer Wert, der in der internationalisierten relativen Zeitnachricht verwendet wird.
- `unit`
  - : Einheit, die in der internationalisierten relativen Zeitnachricht verwendet wird. Mögliche Werte sind: `"year"`, `"quarter"`, `"month"`, `"week"`, `"day"`, `"hour"`, `"minute"`, `"second"`. Auch Pluralformen sind erlaubt.

### Rückgabewert

Ein String, der den angegebenen `value` und `unit` formatiert gemäß den Sprach- und Formatierungsoptionen dieses {{jsxref("Intl.RelativeTimeFormat")}}-Objekts.

> [!NOTE]
> Meistens ist das von `format()` zurückgegebene Format konsistent. Das Ergebnis kann jedoch zwischen Implementierungen variieren, selbst innerhalb derselben Sprache — Variationen sind beabsichtigt und von der Spezifikation erlaubt. Es entspricht möglicherweise auch nicht Ihren Erwartungen. Zum Beispiel kann der String geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `format()` nicht mit fest kodierten Konstanten vergleichen.

## Beispiele

### Grundlegende Verwendung von format

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

### Verwendung der automatischen Option

Wenn die Option `numeric:auto` übergeben wird, erzeugt sie die Zeichenfolge `yesterday`, `today` oder `tomorrow` anstelle von `1 day ago`, `in 0 days` oder `in 1 day`. Dies erlaubt es, nicht immer numerische Werte in der Ausgabe verwenden zu müssen.

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
