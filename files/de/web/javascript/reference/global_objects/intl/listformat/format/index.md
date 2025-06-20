---
title: Intl.ListFormat.prototype.format()
short-title: format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/format
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`format()`**-Methode von {{jsxref("Intl.ListFormat")}}-Instanzen gibt einen string mit einer sprachspezifischen Darstellung der Liste zurück.

{{InteractiveExample("JavaScript Demo: Intl.ListFormat.prototype.format()", "taller")}}

```js interactive-example
const vehicles = ["Motorcycle", "Bus", "Car"];

const formatter = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction",
});
console.log(formatter.format(vehicles));
// Expected output: "Motorcycle, Bus, and Car"

const formatter2 = new Intl.ListFormat("de", {
  style: "short",
  type: "disjunction",
});
console.log(formatter2.format(vehicles));
// Expected output: "Motorcycle, Bus oder Car"

const formatter3 = new Intl.ListFormat("en", { style: "narrow", type: "unit" });
console.log(formatter3.format(vehicles));
// Expected output: "Motorcycle Bus Car"
```

## Syntax

```js-nolint
format(list)
```

### Parameter

- `list`
  - : Ein iterierbares Objekt, wie z. B. ein Array, das Strings enthält. Wird es weggelassen, resultiert dies im Formatieren des leeren Arrays, was etwas verwirrend sein kann. Daher ist es ratsam, immer explizit eine Liste zu übergeben.

### Rückgabewert

Ein sprachspezifisch formatierter String, der die Elemente der Liste darstellt.

> [!NOTE]
> Die Formatierung, die von `format()` zurückgegeben wird, ist meist konsistent. Allerdings kann die Ausgabe zwischen Implementierungen unterschiedlich sein, sogar innerhalb desselben Gebietsschemas — diese Variationen sind absichtlich und von der Spezifikation erlaubt. Sie entspricht möglicherweise auch nicht Ihren Erwartungen. Zum Beispiel könnte der String geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `format()` nicht mit fest codierten Konstanten vergleichen.

## Beispiele

### Verwendung von format

Das folgende Beispiel zeigt, wie ein List Formatter unter Verwendung der englischen Sprache erstellt wird.

```js
const list = ["Motorcycle", "Bus", "Car"];

console.log(
  new Intl.ListFormat("en-GB", { style: "long", type: "conjunction" }).format(
    list,
  ),
);
// Motorcycle, Bus and Car

console.log(
  new Intl.ListFormat("en-GB", { style: "short", type: "disjunction" }).format(
    list,
  ),
);
// Motorcycle, Bus or Car

console.log(
  new Intl.ListFormat("en-GB", { style: "narrow", type: "unit" }).format(list),
);
// Motorcycle Bus Car
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.ListFormat")}}
