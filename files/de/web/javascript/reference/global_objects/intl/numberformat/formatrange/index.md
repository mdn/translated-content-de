---
title: Intl.NumberFormat.prototype.formatRange()
short-title: formatRange()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die Methode **`formatRange()`** von {{jsxref("Intl.NumberFormat")}}-Instanzen formatiert einen Bereich von Zahlen entsprechend der Lokalisierungs- und Formatierungsoptionen dieses `Intl.NumberFormat`-Objekts.

## Syntax

```js-nolint
formatRange(startRange, endRange)
```

### Parameter

- `startRange`
  - : Eine {{jsxref("Number")}}, {{jsxref("BigInt")}} oder ein String, der formatiert werden soll. Strings werden auf die gleiche Weise geparst wie bei der [Zahlenkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), außer dass `formatRange()` den genauen Wert des Strings verwendet, um einen Präzisionsverlust bei der impliziten Umwandlung in eine Zahl zu vermeiden.
- `endRange`
  - : Eine {{jsxref("Number")}}, {{jsxref("BigInt")}} oder ein String, der formatiert werden soll.

### Rückgabewert

Ein String, der den angegebenen Zahlenbereich entsprechend der Lokalisierungs- und Formatierungsoptionen dieses {{jsxref("Intl.NumberFormat")}}-Objekts formatiert darstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn entweder `startRange` oder `endRange` `NaN` oder ein nicht konvertierbarer String ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn entweder `startRange` oder `endRange` undefiniert ist.

## Beschreibung

Die `formatRange`-Getter-Funktion formatiert einen Bereich von Zahlen als String gemäß der Lokalisierungs- und Formatierungsoptionen des {{jsxref("Intl.NumberFormat")}}-Objekts, von dem sie aufgerufen wird.

## Beispiele

### Verwendung von formatRange

Verwenden Sie die `formatRange`-Getter-Funktion, um einen Bereich von Währungswerten zu formatieren:

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
