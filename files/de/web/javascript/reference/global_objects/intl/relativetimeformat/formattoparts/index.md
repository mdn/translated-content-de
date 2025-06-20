---
title: Intl.RelativeTimeFormat.prototype.formatToParts()
short-title: formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/formatToParts
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`formatToParts()`**-Methode von {{jsxref("Intl.RelativeTimeFormat")}} Instanzen gibt ein Array von Objekten zurück, die jeweils einen Teil des formatierten Strings darstellen, der von {{jsxref("Intl/RelativeTimeFormat/format", "format()")}} zurückgegeben würde. Sie ist nützlich für den Aufbau benutzerdefinierter Strings aus den lokalspezifischen Tokens.

{{InteractiveExample("JavaScript Demo: Intl.RelativeTimeFormat.prototype.formatToParts()")}}

```js interactive-example
const rtf1 = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
const parts = rtf1.formatToParts(10, "seconds");

console.log(parts[0].value);
// Expected output: "in "

console.log(parts[1].value);
// Expected output: "10"

console.log(parts[2].value);
// Expected output: " seconds"
```

## Syntax

```js-nolint
formatToParts(value, unit)
```

### Parameter

- `value`
  - : Numerischer Wert, der in der internationalisierten relativen Zeitnachricht verwendet wird.
- `unit`
  - : Einheit, die in der internationalisierten relativen Zeitnachricht verwendet wird. Mögliche Werte sind: `"year"`, `"quarter"`, `"month"`, `"week"`, `"day"`, `"hour"`, `"minute"`, `"second"`. Pluralformen sind ebenfalls erlaubt.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, das die formatierte relative Zeit in Teilen enthält. Jedes Objekt hat zwei oder drei Eigenschaften: `type`, `value` und optional `unit`, wobei jede Eigenschaft einen String enthält. Die String-Verkettung von `value`, in der angegebenen Reihenfolge, führt zum gleichen String wie {{jsxref("Intl/RelativeTimeFormat/format", "format()")}}. Die Teile können als direkt aus dem Aufruf von {{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.prototype.formatToParts()")}} mit dem numerischen Wert abgeleitet betrachtet werden, wobei nur die `numberingSystem`-Option übergeben wird, und anschließend zusätzliche `type: "literal"` Tokens hinzugefügt werden, wie zum Beispiel `"in "`, `" days ago"`, usw. Alle Tokens, die von `NumberFormat` produziert werden, haben eine zusätzliche `unit` Eigenschaft, die die Singularform der Eingabeeinheit ist; dies ist für die programmgesteuerte Verwendung gedacht und wird nicht lokalisiert. Die lokalisierte Einheit wird als Teil eines literalen Tokens ausgegeben.

Wenn `options.numeric` den Wert `"auto"` hat und es einen speziellen String für den Wert gibt, ist das zurückgegebene Array ein einzelnes literales Token.

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
