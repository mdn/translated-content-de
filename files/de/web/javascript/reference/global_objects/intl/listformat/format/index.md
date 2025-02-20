---
title: Intl.ListFormat.prototype.format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/format
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`format()`** von {{jsxref("Intl.ListFormat")}}-Instanzen gibt eine Zeichenfolge mit einer sprachspezifischen Darstellung der Liste zurück.

{{InteractiveExample("JavaScript Demo: Intl.ListFormat", "taller")}}

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
  - : Ein iterierbares Objekt, wie ein Array, das Zeichenfolgen enthält. Wenn es weggelassen wird, wird ein leeres Array formatiert, was möglicherweise leicht verwirrend sein kann. Daher wird empfohlen, immer explizit eine Liste zu übergeben.

### Rückgabewert

Eine sprachspezifisch formatierte Zeichenfolge, die die Elemente der Liste darstellt.

> [!NOTE]
> Meistens ist die von `format()` zurückgegebene Formatierung konsistent. Allerdings kann die Ausgabe zwischen Implementierungen variieren, sogar innerhalb derselben Spracheinstellung — Variationen in der Ausgabe sind durch das Design erlaubt und von der Spezifikation vorgeschrieben. Es kann auch sein, dass sie nicht Ihren Erwartungen entspricht. Zum Beispiel könnte die Zeichenfolge geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `format()` nicht mit festkodierten Konstanten vergleichen.

## Beispiele

### Verwendung von format

Das folgende Beispiel zeigt, wie ein Listen-Formatter unter Verwendung der englischen Sprache erstellt wird.

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
