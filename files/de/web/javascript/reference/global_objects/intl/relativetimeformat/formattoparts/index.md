---
title: Intl.RelativeTimeFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/formatToParts
l10n:
  sourceCommit: 1574e4728b2d31b8898f84843a9832253790c516
---

{{JSRef}}

Die **`formatToParts()`** Methode von {{jsxref("Intl.RelativeTimeFormat")}} Instanzen gibt ein Array von Objekten zurück, die jeweils einen Teil des formatierten Strings repräsentieren, der von {{jsxref("Intl/RelativeTimeFormat/format", "format()")}} zurückgegeben würde. Dies ist nützlich zum Erstellen benutzerdefinierter Zeichenfolgen aus den lokalspezifischen Token.

{{EmbedInteractiveExample("pages/js/intl-relativetimeformat-prototype-formattoparts.html")}}

## Syntax

```js-nolint
formatToParts(value, unit)
```

### Parameter

- `value`
  - : Numerischer Wert, der in der internationalisierten relativen Zeitnachricht verwendet wird.
- `unit`
  - : Einheit, die in der relativen Zeit internationalisierten Nachricht verwendet wird. Mögliche Werte sind: `"year"`, `"quarter"`, `"month"`, `"week"`, `"day"`, `"hour"`, `"minute"`, `"second"`. Pluralformen sind ebenfalls zulässig.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, die die formatierte relative Zeit in Teilen enthalten. Jedes Objekt hat zwei oder drei Eigenschaften: `type`, `value` und optional `unit`, wobei jede einen Zeichenfolgenwert enthält. Die Zeichenfolgenverkettung von `value` in der angegebenen Reihenfolge ergibt denselben String wie {{jsxref("Intl/RelativeTimeFormat/format", "format()")}}. Die Teile können als direkt aus dem Aufruf von {{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.prototype.formatToParts()")}} mit dem numerischen Wert, unter nur Angabe der Option `numberingSystem`, erhalten betrachtet werden, und dann durch zusätzliche `type: "literal"` Tokens ergänzt werden, wie zum Beispiel `"in "`, `" days ago"`, etc. Alle Tokens, die vom `NumberFormat` produziert werden, haben eine zusätzliche `unit` Eigenschaft, die die Singularform der Eingabeeinheit ist; dies ist für die programmgesteuerte Verwendung und nicht lokalisiert. Die lokalisierte Einheit wird als Teil eines Literal-Tokens ausgegeben.

Wenn `options.numeric` auf `"auto"` gesetzt ist und es eine spezielle Zeichenfolge für den Wert gibt, ist das zurückgegebene Array ein einzelnes Literal-Token.

## Beispiele

### Verwendung von formatToParts()

```js
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

// Format relative time using the day unit
rtf.formatToParts(-1, "day");
// [{ type: "literal", value: "yesterday"}]

rtf.formatToParts(100, "day");
// [
//   { type: "literal", value: "in " },
//   { type: "integer", value: "100", unit: "day" },
//   { type: "literal", value: " days" }
// ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.RelativeTimeFormat")}}
- {{jsxref("Intl/RelativeTimeFormat/format", "Intl.RelativeTimeFormat.prototype.format()")}}
