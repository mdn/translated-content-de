---
title: Intl.RelativeTimeFormat.prototype.formatToParts()
short-title: formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/formatToParts
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die Methode **`formatToParts()`** von {{jsxref("Intl.RelativeTimeFormat")}} Instanzen gibt ein Array von Objekten zurück, die jeweils einen Teil des formatierten Strings repräsentieren, der von {{jsxref("Intl/RelativeTimeFormat/format", "format()")}} zurückgegeben würde. Sie ist nützlich, um benutzerdefinierte Strings aus lokalspezifischen Tokens zu erstellen.

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
  - : Einheit, die in der internationalisierten relativen Zeitnachricht verwendet wird. Mögliche Werte sind: `"year"`, `"quarter"`, `"month"`, `"week"`, `"day"`, `"hour"`, `"minute"`, `"second"`. Auch Pluralformen sind erlaubt.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, die die formatierte relative Zeit in Teilen enthalten. Jedes Objekt hat zwei oder drei Eigenschaften: `type`, `value` und optional `unit`, wobei jede einen String enthält. Die Verkettung der Strings von `value`, in der angegebenen Reihenfolge, ergibt denselben String wie {{jsxref("Intl/RelativeTimeFormat/format", "format()")}}. Die Teile können so betrachtet werden, als würden sie direkt durch den Aufruf von {{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.prototype.formatToParts()")}} mit dem numerischen Wert und der Angabe nur der Option `numberingSystem` erhalten, wobei zusätzliche `type: "literal"` Tokens hinzugefügt werden, wie z.B. `"in "`, `" days ago"`, usw. Alle Tokens, die durch die `NumberFormat` produziert werden, haben eine zusätzliche `unit`-Eigenschaft, die die Singularform der Eingabe-`unit` ist; dies dient der programmatischen Nutzung und ist nicht lokalisiert. Die lokalisierte Einheit wird als Teil eines Literal-Tokens ausgegeben.

Wenn `options.numeric` den Wert `"auto"` hat und es einen speziellen String für den Wert gibt, ist das zurückgegebene Array ein einzelnes Literal-Token.

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
