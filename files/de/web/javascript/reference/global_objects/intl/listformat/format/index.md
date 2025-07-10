---
title: Intl.ListFormat.prototype.format()
short-title: format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/format
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`format()`**-Methode von {{jsxref("Intl.ListFormat")}}-Instanzen gibt einen sprachspezifischen String mit der Darstellung der Liste zurück.

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
  - : Ein iterierbares Objekt, wie ein Array, das Zeichenketten enthält. Wenn es weggelassen wird, wird das leere Array formatiert, was leicht verwirrend sein kann. Daher ist es ratsam, immer explizit eine Liste zu übergeben.

### Rückgabewert

Ein sprachspezifisch formatierter String, der die Elemente der Liste darstellt.

> [!NOTE]
> Meistens ist das durch `format()` zurückgegebene Format konsistent. Allerdings kann die Ausgabe zwischen verschiedenen Implementierungen variieren, selbst innerhalb derselben Spracheinstellung – diese Variationen sind im Design vorgesehen und durch die Spezifikation erlaubt. Es ist möglicherweise auch nicht das, was Sie erwarten. Zum Beispiel könnte der String geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `format()` nicht mit fest codierten Konstanten vergleichen.

## Beispiele

### Verwendung von format

Das folgende Beispiel zeigt, wie ein Listen-Formatter mit der englischen Sprache erstellt wird.

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
