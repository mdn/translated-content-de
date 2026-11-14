---
title: Intl.NumberFormat.prototype.formatRange()
short-title: formatRange()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange
l10n:
  sourceCommit: d6148909942b2cb6e43760db183c2b3815f4387a
---

Die Methode **`formatRange()`** von {{jsxref("Intl.NumberFormat")}}-Instanzen formatiert einen Zahlenbereich entsprechend dem Gebietsschema und den Formatierungsoptionen dieses `Intl.NumberFormat`-Objekts.

## Syntax

```js-nolint
formatRange(startRange, endRange)
```

### Parameter

- `startRange`
  - : Ein {{jsxref("Number")}}, {{jsxref("BigInt")}} oder String, der formatiert werden soll. Strings werden auf dieselbe Weise wie bei der [Zahlenkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) geparst. Allerdings verwendet `formatRange()` den exakten Wert, den der String darstellt, und vermeidet so einen Präzisionsverlust durch die implizite Konvertierung in eine Zahl.
- `endRange`
  - : Ein {{jsxref("Number")}}, {{jsxref("BigInt")}} oder String, der formatiert werden soll.

### Rückgabewert

Ein String, der den angegebenen Zahlenbereich entsprechend dem Gebietsschema und den Formatierungsoptionen dieses {{jsxref("Intl.NumberFormat")}}-Objekts formatiert darstellt. Wenn Anfangs- und Endwert zum selben String formatiert werden, enthält die Ausgabe nur einen einzelnen Wert, möglicherweise mit einem vorangestellten Symbol für „ungefähr gleich“ (z. B. „~$3“). Ob dieses Symbol eingefügt wird, hängt ausschließlich von den Gebietsschemaeinstellungen ab. Es wird auch dann eingefügt, wenn `startRange === endRange` gilt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `startRange` oder `endRange` `NaN` oder ein nicht konvertierbarer String ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `startRange` oder `endRange` `undefined` ist.

## Beschreibung

Die Methode `formatRange` formatiert einen Zahlenbereich als String entsprechend dem Gebietsschema und den Formatierungsoptionen des {{jsxref("Intl.NumberFormat")}}-Objekts, auf dem sie aufgerufen wird.

## Beispiele

### formatRange verwenden

Verwenden Sie die Methode `formatRange`, um einen Bereich von Währungswerten zu formatieren:

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
