---
title: Intl.RelativeTimeFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/formatToParts
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`formatToParts()`**-Methode von {{jsxref("Intl.RelativeTimeFormat")}}-Instanzen gibt ein Array von Objekten zurück, die jeweils einen Teil des formatierten Strings repräsentieren, der von {{jsxref("Intl/RelativeTimeFormat/format", "format()")}} zurückgegeben würde. Dies ist nützlich, um benutzerdefinierte Strings aus den lokalespezifischen Tokens zu erstellen.

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
  - : Einheit, die in der internationalisierten relativen Zeitnachricht verwendet wird. Mögliche Werte sind: `"year"`, `"quarter"`, `"month"`, `"week"`, `"day"`, `"hour"`, `"minute"`, `"second"`. Pluralformen sind ebenfalls zulässig.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, das die formatierte relative Zeit in Teilen enthält. Jedes Objekt hat zwei oder drei Eigenschaften, `type`, `value` und optional `unit`, jeweils mit einem String. Die String-Verkettung von `value` in der angegebenen Reihenfolge ergibt denselben String wie {{jsxref("Intl/RelativeTimeFormat/format", "format()")}}. Die Teile können als direkt aus dem Aufruf von {{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.prototype.formatToParts()")}} mit dem numerischen Wert betrachtet werden, indem nur die Option `numberingSystem` übergeben wird und dann zusätzliche `type: "literal"` Tokens hinzugefügt werden, wie `"in "`, `" days ago"`, usw. Alle Tokens, die vom `NumberFormat` erzeugt werden, haben eine zusätzliche `unit`-Eigenschaft, die die Singularform der Eingabe `unit` ist; dies ist für die programmatische Verwendung und ist nicht lokalisiert. Die lokalisierte Einheit wird als Teil eines Literal-Tokens ausgegeben.

Wenn `options.numeric` auf `"auto"` gesetzt ist und es gibt einen speziellen String für den Wert, ist das zurückgegebene Array ein einzelnes Literal-Token.

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
