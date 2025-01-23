---
title: Temporal.PlainDate.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/valueOf
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`valueOf()`**-Methode der {{jsxref("Temporal.PlainDate")}}-Instanzen löst einen {{jsxref("TypeError")}} aus, um zu verhindern, dass `Temporal.PlainDate`-Instanzen [implizit in primitive Werte umgewandelt werden](/de/docs/Web/JavaScript/Data_structures#primitive_coercion), wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.

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

Da sowohl die [primitive Umwandlung](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) als auch die [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) `valueOf()` vor `toString()` aufrufen, würde ein Ausdruck wie `date1 > date2` sie implizit als Zeichenfolgen vergleichen, was zu unerwarteten Ergebnissen führen kann, falls `valueOf()` nicht vorhanden ist. Durch das Auslösen eines `TypeError` verhindern `Temporal.PlainDate`-Instanzen solche impliziten Umwandlungen. Sie müssen sie explizit in Zeichenfolgen umwandeln, indem Sie {{jsxref("Temporal/PlainDate/toString", "Temporal.PlainDate.prototype.toString()")}} verwenden, oder die statische Methode {{jsxref("Temporal/PlainDate/compare", "Temporal.PlainDate.compare()")}} verwenden, um sie zu vergleichen.

## Beispiele

### Arithmetische und Vergleichsoperationen bei Temporal.PlainDate

Alle arithmetischen und Vergleichsoperationen bei `Temporal.PlainDate`-Instanzen sollten die speziellen Methoden verwenden oder sie explizit in primitive Werte umwandeln.

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
