---
title: Intl.RelativeTimeFormat.prototype.formatToParts()
short-title: formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/formatToParts
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`formatToParts()`**-Methode der {{jsxref("Intl.RelativeTimeFormat")}}-Instanzen gibt ein Array von Objekten zurück, das jedes Teil des formatierten Strings repräsentiert, der von {{jsxref("Intl/RelativeTimeFormat/format", "format()")}} zurückgegeben würde. Sie ist nützlich zum Erstellen benutzerdefinierter Strings aus den lokalspezifischen Tokens.

{{InteractiveExample("JavaScript Demo: Intl.RelativeTimeFormat.prototype.formatToParts()")}}

```js interactive-example
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
const parts = rtf.formatToParts(10, "seconds");

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

Ein {{jsxref("Array")}} von Objekten, die die formatierte relative Zeit in Teilen enthalten. Jedes Objekt hat zwei oder drei Eigenschaften: `type`, `value` und optional `unit`, die alle eine Zeichenfolge enthalten. Die Verkettung der `value`-Strings in der angegebenen Reihenfolge ergibt denselben String wie {{jsxref("Intl/RelativeTimeFormat/format", "format()")}}. Die Teile können als direkt aus einem Aufruf von {{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.prototype.formatToParts()")}} mit dem numerischen Wert und nur der `numberingSystem`-Option gedacht werden, wobei zusätzliche `type: "literal"` Tokens wie `"in "`, `" days ago"` usw. hinzugefügt werden. Alle von `NumberFormat` erzeugten Tokens haben eine zusätzliche `unit`-Eigenschaft, die die Singularform der Eingabe-Einheit ist; dies dient der programmatischen Nutzung und ist nicht lokalisiert. Die lokalisierte Einheit wird als Teil eines Literaltokens ausgegeben.

Wenn `options.numeric` auf `"auto"` eingestellt ist und es eine spezielle Zeichenfolge für den Wert gibt, besteht das zurückgegebene Array aus einem einzigen Literaltoken.

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
