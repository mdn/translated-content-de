---
title: Intl.NumberFormat.prototype.formatRange()
short-title: formatRange()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`formatRange()`** Methode von {{jsxref("Intl.NumberFormat")}} Instanzen formatiert einen Zahlenbereich gemäß den lokalen und den Formatierungsoptionen dieses `Intl.NumberFormat` Objekts.

## Syntax

```js-nolint
formatRange(startRange, endRange)
```

### Parameter

- `startRange`
  - : Eine {{jsxref("Number")}}, {{jsxref("BigInt")}} oder ein String, um formatiert zu werden. Strings werden auf die gleiche Weise wie bei der [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) analysiert, mit der Ausnahme, dass `formatRange()` den exakten Wert verwendet, den der String darstellt, um Präzisionsverluste bei der impliziten Umwandlung in eine Zahl zu vermeiden.
- `endRange`
  - : Eine {{jsxref("Number")}}, {{jsxref("BigInt")}} oder ein String, um formatiert zu werden.

### Rückgabewert

Ein String, der den angegebenen Bereich von Zahlen darstellt, formatiert gemäß den lokalen und den Formatierungsoptionen dieses {{jsxref("Intl.NumberFormat")}} Objekts. Wenn die Start- und Endwerte zum gleichen String formatiert werden, enthält die Ausgabe nur einen einzigen Wert, möglicherweise mit einem "ungefähr gleich"-Symbol (z. B. "~$3") vorangestellt. Die Einfügung dieses Symbols hängt ausschließlich von den lokalen Einstellungen ab und wird auch eingefügt, wenn `startRange === endRange`.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn entweder `startRange` oder `endRange` `NaN` oder ein nicht konvertierbarer String ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn entweder `startRange` oder `endRange` undefiniert ist.

## Beschreibung

Die `formatRange` Getter-Funktion formatiert einen Bereich von Zahlen zu einem String gemäß den lokalen und den Formatierungsoptionen dieses {{jsxref("Intl.NumberFormat")}} Objekts, von dem sie aufgerufen wird.

## Beispiele

### Verwendung von formatRange

Verwenden Sie die `formatRange` Getter-Funktion, um einen Bereich von Währungswerten zu formatieren:

```js
const nf = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

console.log(nf.formatRange(3, 5)); // "$3 – $5"

// Note: the "approximately equals" symbol is added if
// startRange and endRange round to the same values.
console.log(nf.formatRange(2.9, 3.1)); // "~$3"
```

```js
const nf = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

console.log(nf.formatRange(3, 5)); // "3-5 €"
console.log(nf.formatRange(2.9, 3.1)); // "~3 €"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Number.prototype.toLocaleString()")}}
