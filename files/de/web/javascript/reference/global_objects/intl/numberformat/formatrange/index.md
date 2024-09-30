---
title: Intl.NumberFormat.prototype.formatRange()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die Methode **`formatRange()`** von {{jsxref("Intl.NumberFormat")}}-Instanzen formatiert einen Bereich von Zahlen gemäß der Lokalisierung und den Formatierungsoptionen dieses `Intl.NumberFormat`-Objekts.

## Syntax

```js-nolint
formatRange(startRange, endRange)
```

### Parameter

- `startRange`
  - : Eine {{jsxref("Number")}} oder {{jsxref("BigInt")}}.
- `endRange`
  - : Eine {{jsxref("Number")}} oder {{jsxref("BigInt")}}.

### Rückgabewert

Ein String, der den angegebenen Bereich von Zahlen darstellt, formatiert gemäß der Lokalisierung und den Formatierungsoptionen dieses {{jsxref("Intl.NumberFormat")}}-Objekts.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `startRange` kleiner als `endRange` ist oder einer der Werte `NaN` ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn entweder `startRange` oder `endRange` undefiniert ist.

## Beschreibung

Die `formatRange`-Getter-Funktion formatiert einen Bereich von Zahlen in einen String gemäß der Lokalisierung und den Formatierungsoptionen dieses {{jsxref("Intl.NumberFormat")}}-Objekts, von dem sie aufgerufen wird.

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
