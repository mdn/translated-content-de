---
title: Intl.NumberFormat.prototype.formatRange()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange
l10n:
  sourceCommit: 21c2a7fa64659b6d56c3404edac193fd84ebda20
---

{{JSRef}}

Die **`formatRange()`** Methode von {{jsxref("Intl.NumberFormat")}} Instanzen formatiert einen Zahlenbereich gemäß den lokalen und Formatierungsoptionen dieses `Intl.NumberFormat` Objekts.

## Syntax

```js-nolint
formatRange(startRange, endRange)
```

### Parameter

- `startRange`
  - : Eine {{jsxref("Number")}}, ein {{jsxref("BigInt")}}, oder ein String, der formatiert werden soll. Strings werden auf die gleiche Weise wie bei der [Zahlenkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) geparst, mit dem Unterschied, dass `formatRange()` den genauen Wert verwendet, den der String darstellt, um einen Genauigkeitsverlust während der impliziten Umwandlung in eine Zahl zu vermeiden.
- `endRange`
  - : Eine {{jsxref("Number")}}, ein {{jsxref("BigInt")}}, oder ein String, der formatiert werden soll.

### Rückgabewert

Ein String, der den angegebenen Zahlenbereich darstellt, formatiert gemäß den lokalen und Formatierungsoptionen dieses {{jsxref("Intl.NumberFormat")}} Objekts.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn entweder `startRange` oder `endRange` `NaN` oder ein nicht konvertierbarer String ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn entweder `startRange` oder `endRange` undefiniert ist.

## Beschreibung

Die `formatRange` Getter-Funktion formatiert einen Zahlenbereich in einen String gemäß den lokalen und Formatierungsoptionen dieses {{jsxref("Intl.NumberFormat")}} Objekts, von dem er aufgerufen wird.

## Beispiele

### Verwendung von formatRange

Verwenden Sie die `formatRange` Getter-Funktion zur Formatierung eines Bereichs von Währungswerten:

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
