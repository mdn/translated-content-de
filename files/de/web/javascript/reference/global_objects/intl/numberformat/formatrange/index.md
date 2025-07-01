---
title: Intl.NumberFormat.prototype.formatRange()
short-title: formatRange()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange
l10n:
  sourceCommit: 5206afe08e91add1b39cdeaa47d95a5da347a065
---

{{JSRef}}

Die Methode **`formatRange()`** von Instanzen des Objekts {{jsxref("Intl.NumberFormat")}} formatiert einen Bereich von Zahlen entsprechend den Lokalisierungs- und Formatierungsoptionen dieses `Intl.NumberFormat`-Objekts.

## Syntax

```js-nolint
formatRange(startRange, endRange)
```

### Parameter

- `startRange`
  - : Eine {{jsxref("Number")}}, {{jsxref("BigInt")}}, oder eine Zeichenkette, die formatiert werden soll. Zeichenketten werden auf die gleiche Weise wie bei der [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) geparst, außer dass `formatRange()` den genauen Wert verwendet, den die Zeichenkette darstellt, um einen Präzisionsverlust während der impliziten Umwandlung in eine Zahl zu vermeiden.
- `endRange`
  - : Eine {{jsxref("Number")}}, {{jsxref("BigInt")}}, oder eine Zeichenkette, die formatiert werden soll.

### Rückgabewert

Eine Zeichenkette, die den angegebenen Bereich von Zahlen darstellt, formatiert gemäß den Lokalisierungs- und Formatierungsoptionen dieses {{jsxref("Intl.NumberFormat")}}-Objekts. Wenn die Start- und Endwerte zu derselben Zeichenkette formatiert werden, enthält die Ausgabe nur einen einzigen Wert, möglicherweise mit einem "ungefähr gleich"-Symbol (z.B. "~$3") vorangestellt. Die Hinzufügung dieses Symbols hängt nur von den Lokalisierungseinstellungen ab und wird auch eingefügt, wenn `startRange === endRange`.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn entweder `startRange` oder `endRange` `NaN` oder eine unverwertbare Zeichenkette ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn entweder `startRange` oder `endRange` undefiniert ist.

## Beschreibung

Die `formatRange`-Getter-Funktion formatiert einen Bereich von Zahlen in eine Zeichenkette gemäß den Lokalisierungs- und Formatierungsoptionen dieses {{jsxref("Intl.NumberFormat")}}-Objekts, von dem sie aufgerufen wird.

## Beispiele

### Verwendung von formatRange

Verwenden Sie die `formatRange`-Getter-Funktion zum Formatieren eines Bereichs von Währungswerten:

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
