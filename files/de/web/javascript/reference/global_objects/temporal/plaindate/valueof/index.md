---
title: Temporal.PlainDate.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/valueOf
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{JSRef}}{{SeeCompatTable}}

Die **`valueOf()`**-Methode von {{jsxref("Temporal.PlainDate")}}-Instanzen wirft einen {{jsxref("TypeError")}}, der verhindert, dass `Temporal.PlainDate`-Instanzen bei arithmetischen oder Vergleichsoperationen [implizit in Primitive umgewandelt werden](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion).

## Syntax

```js-nolint
valueOf()
```

### Parameter

Keine.

### Rückgabewert

Keiner.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird immer ausgelöst.

## Beschreibung

Da sowohl die [primitive Umwandlung](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) als auch die [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) `valueOf()` vor `toString()` aufrufen, würde ein Ausdruck wie `date1 > date2` diese implizit als Zeichenfolgen vergleichen, wenn `valueOf()` fehlt, was zu unerwarteten Ergebnissen führen kann. Indem ein `TypeError` ausgelöst wird, verhindern `Temporal.PlainDate`-Instanzen solche impliziten Umwandlungen. Sie müssen diese explizit in Zeichenfolgen umwandeln, indem Sie {{jsxref("Temporal/PlainDate/toString", "Temporal.PlainDate.prototype.toString()")}} verwenden, oder die statische Methode {{jsxref("Temporal/PlainDate/compare", "Temporal.PlainDate.compare()")}} verwenden, um sie zu vergleichen.

## Beispiele

### Arithmetische und Vergleichsoperationen auf Temporal.PlainDate

Alle arithmetischen und Vergleichsoperationen auf `Temporal.PlainDate`-Instanzen sollten die dafür vorgesehenen Methoden verwenden oder sie explizit in Primitive umwandeln.

```js
const date1 = Temporal.PlainDate.from("2022-01-01");
const date2 = Temporal.PlainDate.from("2022-07-01");
date1 > date2; // TypeError: can't convert PlainDate to primitive type
Temporal.PlainDate.compare(date1, date2); // -1

date2 - date1; // TypeError: can't convert PlainDate to primitive type
date2.since(date1).toString(); // "P181D"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal/PlainDate/toString", "Temporal.PlainDate.prototype.toString()")}}
- {{jsxref("Temporal/PlainDate/toJSON", "Temporal.PlainDate.prototype.toJSON()")}}
- {{jsxref("Temporal/PlainDate/toLocaleString", "Temporal.PlainDate.prototype.toLocaleString()")}}
