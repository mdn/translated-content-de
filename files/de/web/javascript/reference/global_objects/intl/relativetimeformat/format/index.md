---
title: Intl.RelativeTimeFormat.prototype.format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`format()`** Methode von Instanzen von {{jsxref("Intl.RelativeTimeFormat")}} formatiert einen `value` und eine `unit` entsprechend der Locale und Formatierungsoptionen dieses `Intl.RelativeTimeFormat` Objekts.

{{EmbedInteractiveExample("pages/js/intl-relativetimeformat-prototype-format.html")}}

## Syntax

```js-nolint
format(value, unit)
```

### Parameter

- `value`
  - : Numerischer Wert, der in der internationalisierten relativen Zeitnachricht verwendet werden soll.
- `unit`
  - : Einheit, die in der internationalisierten relativen Zeitnachricht verwendet werden soll. Mögliche Werte sind: `"year"`, `"quarter"`, `"month"`, `"week"`, `"day"`, `"hour"`, `"minute"`, `"second"`. Auch Pluralformen sind erlaubt.

### Rückgabewert

Ein String, der den gegebenen `value` und `unit` entsprechend der Locale und Formatierungsoptionen dieses {{jsxref("Intl.RelativeTimeFormat")}} Objekts formatiert darstellt.

> [!NOTE]
> Meistens ist das von `format()` zurückgegebene Format konsistent. Dennoch kann die Ausgabe zwischen Implementierungen variieren, selbst innerhalb derselben Locale — diese Abweichungen sind absichtlich und durch die Spezifikation erlaubt. Es ist möglicherweise auch nicht das, was Sie erwarten. Zum Beispiel kann die Zeichenkette Leerzeichen ohne Umbruch verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `format()` nicht mit festkodierten Konstanten vergleichen.

## Beispiele

### Grundlegende Nutzung der Formatierung

Das folgende Beispiel zeigt, wie Sie einen relativen Zeitformatierer mit der englischen Sprache erstellen.

```js
// Erstellen Sie einen relativen Zeitformatierer in Ihrer Locale
// mit explizit übergebenen Standardwerten.
const rtf = new Intl.RelativeTimeFormat("en", {
  localeMatcher: "best fit", // andere Werte: "lookup"
  numeric: "always", // andere Werte: "auto"
  style: "long", // andere Werte: "short" oder "narrow"
});

// Relative Zeit mit negativem Wert formatieren (-1).
rtf.format(-1, "day"); // "1 day ago"

// Relative Zeit mit positivem Wert formatieren (1).
rtf.format(1, "day"); // "in 1 day"
```

### Verwendung der Auto-Option

Wenn die `numeric:auto` Option übergeben wird, produziert sie die Zeichenfolge `yesterday`, `today` oder `tomorrow` anstelle von `1 day ago`, `in 0 days` oder `in 1 day`. Dies ermöglicht es, nicht immer numerische Werte in der Ausgabe verwenden zu müssen.

```js
// Erstellen Sie einen relativen Zeitformatierer in Ihrer Locale
// mit übergebenem Wert numeric: "auto".
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

// Relative Zeit mit negativem Wert formatieren (-1).
rtf.format(-1, "day"); // "yesterday"

rtf.format(0, "day"); // "today"

// Relative Zeit mit positivem Einheitentag formatieren (1).
rtf.format(1, "day"); // "tomorrow"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.RelativeTimeFormat")}}
