---
title: Intl.RelativeTimeFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/formatToParts
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`formatToParts()`**-Methode von {{jsxref("Intl.RelativeTimeFormat")}}-Instanzen gibt ein Array von Objekten zurück, das jedes Teil des formatierten Strings repräsentiert, der von {{jsxref("Intl/RelativeTimeFormat/format", "format()")}} zurückgegeben würde. Diese Methode ist nützlich zum Erstellen von benutzerdefinierten Strings aus den lokalisierungsspezifischen Token.

{{InteractiveExample("JavaScript Demo: Intl.RelativeTimeFormat.prototype.formatToParts")}}

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
  - : Einheit, die in der internationalisierten relativen Zeitnachricht verwendet wird. Mögliche Werte sind: `"year"`, `"quarter"`, `"month"`, `"week"`, `"day"`, `"hour"`, `"minute"`, `"second"`. Pluralformen sind ebenfalls zulässig.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, das die formatierte relative Zeit in Teilen enthält. Jedes Objekt hat zwei oder drei Eigenschaften: `type`, `value` und optional `unit`, wobei jede Eigenschaft einen String enthält. Die String-Konkatenation von `value`, in der bereitgestellten Reihenfolge, ergibt denselben String wie {{jsxref("Intl/RelativeTimeFormat/format", "format()")}}. Die Teile können als direkt aus dem Aufruf von {{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.prototype.formatToParts()")}} mit dem numerischen Wert gewonnen betrachtet werden, wobei nur die Option `numberingSystem` übergeben wird, und indem zusätzliche `type: "literal"`-Token wie `"in "`, `" days ago"` usw. hinzugefügt werden. Alle Token, die durch die `NumberFormat`-Methode erzeugt werden, haben eine zusätzliche Eigenschaft `unit`, die die Einzahlform des Eingabe-`unit` ist; dies dient der programmatischen Nutzung und ist nicht lokalisiert. Die lokalisierte Einheit wird als Teil eines Literal-Tokens ausgegeben.

Wenn `options.numeric` auf `"auto"` gesetzt ist und es einen speziellen String für den Wert gibt, ist das zurückgegebene Array ein einzelnes Literal-Token.

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
