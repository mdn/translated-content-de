---
title: Intl.ListFormat.prototype.formatToParts()
short-title: formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/formatToParts
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die Methode **`formatToParts()`** von {{jsxref("Intl.ListFormat")}}-Instanzen gibt ein Array von Objekten zurück, das jeweils einen Teil des formatierten Strings darstellt, der von {{jsxref("Intl/ListFormat/format", "format()")}} zurückgegeben würde. Dies ist nützlich, um benutzerdefinierte Strings aus den lokal spezifischen Token zu erstellen.

{{InteractiveExample("JavaScript Demo: Intl.listformat.prototype.formatToParts()", "taller")}}

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
// Expected output: "["Motorcycle", ", ", "Bus", ", and ", "Car"]"
console.log(partValuesFr);
// Expected output: "["Motorcycle", ", ", "Bus", " et ", "Car"]"
```

## Syntax

```js-nolint
formatToParts(list)
```

### Parameter

- `list`
  - : Ein iterierbares Objekt, wie z.B. ein Array, das Strings enthält. Wird es weggelassen, wird das leere Array formatiert, was etwas verwirrend sein könnte, daher ist es ratsam, immer ausdrücklich eine Liste zu übergeben.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, das die formatierte Liste in Teilen enthält. Jedes Objekt hat zwei Eigenschaften, `type` und `value`, die jeweils einen String enthalten. Die String-Verkettung von `value` in der angegebenen Reihenfolge resultiert in dem gleichen String wie bei {{jsxref("Intl/ListFormat/format", "format()")}}. Der `type` kann einer der folgenden sein:

- `literal`
  - : Jeder String, der Teil des Formatmusters ist; z.B. `", "`, `", and"` usw.
- `element`
  - : Ein Element der Liste, genau wie angegeben.

## Beispiele

### Verwendung von formatToParts()

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
