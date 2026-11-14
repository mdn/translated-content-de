---
title: Intl.ListFormat.prototype.formatToParts()
short-title: formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/formatToParts
l10n:
  sourceCommit: d6148909942b2cb6e43760db183c2b3815f4387a
---

Die Methode **`formatToParts()`** von {{jsxref("Intl.ListFormat")}}-Instanzen gibt ein Array von Objekten zurück, die jeweils einen Teil der formatierten Zeichenfolge darstellen, die {{jsxref("Intl/ListFormat/format", "format()")}} zurückgeben würde. Sie ist nützlich, um aus gebietsschemaspezifischen Bestandteilen eigene Zeichenfolgen zu erstellen.

{{InteractiveExample("JavaScript Demo: Intl.ListFormat.prototype.formatToParts()", "taller")}}

```js interactive-example
const vehicles = ["Motorcycle", "Bus", "Car"];

const formatterEn = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction",
});

const formatterFr = new Intl.ListFormat("fr", {
  style: "long",
  type: "conjunction",
});

const partValuesEn = formatterEn.formatToParts(vehicles).map((p) => p.value);
const partValuesFr = formatterFr.formatToParts(vehicles).map((p) => p.value);

console.log(partValuesEn);
// Expected output: Array ["Motorcycle", ", ", "Bus", ", and ", "Car"]
console.log(partValuesFr);
// Expected output: Array ["Motorcycle", ", ", "Bus", " et ", "Car"]
```

## Syntax

```js-nolint
formatToParts(list)
```

### Parameter

- `list`
  - : Ein iterierbares Objekt, beispielsweise ein Array, das Zeichenfolgen enthält. Wird es weggelassen, wird ein leeres Array formatiert. Da dies etwas verwirrend sein kann, empfiehlt es sich, eine Liste immer ausdrücklich zu übergeben.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, die die formatierte Liste in Teilen enthalten. Jedes Objekt hat zwei Eigenschaften, `type` und `value`, die jeweils eine Zeichenfolge enthalten. Werden die `value`-Zeichenfolgen in der angegebenen Reihenfolge verkettet, ergibt sich dieselbe Zeichenfolge wie bei {{jsxref("Intl/ListFormat/format", "format()")}}. `type` kann einen der folgenden Werte haben:

- `literal`
  - : Eine Zeichenfolge, die Teil des Formatmusters ist, beispielsweise `", "` oder `", and"`.
- `element`
  - : Ein Element der Liste, genau wie übergeben.

## Beispiele

### formatToParts() verwenden

```js
const fruits = ["Apple", "Orange", "Pineapple"];
const myListFormat = new Intl.ListFormat("en-GB", {
  style: "long",
  type: "conjunction",
});

console.table(myListFormat.formatToParts(fruits));
// [
//  { "type": "element", "value": "Apple" },
//  { "type": "literal", "value": ", " },
//  { "type": "element", "value": "Orange" },
//  { "type": "literal", "value": " and " },
//  { "type": "element", "value": "Pineapple" }
// ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.ListFormat")}}
- {{jsxref("Intl/ListFormat/format", "Intl.ListFormat.prototype.format()")}}
