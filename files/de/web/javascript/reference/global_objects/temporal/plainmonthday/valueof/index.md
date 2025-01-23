---
title: Temporal.PlainMonthDay.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/valueOf
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`valueOf()`**-Methode von {{jsxref("Temporal.PlainMonthDay")}}-Instanzen wirft einen {{jsxref("TypeError")}}, um zu verhindern, dass `Temporal.PlainMonthDay`-Instanzen [implizit in primitive Werte umgewandelt werden](/de/docs/Web/JavaScript/Data_structures#primitive_coercion), wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.

## Syntax

```js-nolint
valueOf()
```

### Parameter

Keine.

### Rückgabewert

Keine.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird immer ausgelöst.

## Beschreibung

Da sowohl die [primitive Konvertierung](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) als auch die [Zahlenkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) `valueOf()` vor `toString()` aufrufen, würde, wenn `valueOf()` nicht vorhanden ist, ein Ausdruck wie `monthDay1 > monthDay2` sie implizit als Strings vergleichen, was zu unerwarteten Ergebnissen führen kann. Indem ein `TypeError` geworfen wird, verhindern `Temporal.PlainMonthDay`-Instanzen solche impliziten Konvertierungen. Sie müssen sie explizit in Strings umwandeln, indem Sie {{jsxref("Temporal/PlainMonthDay/toString", "Temporal.PlainMonthDay.prototype.toString()")}} verwenden.

## Beispiele

### Arithmetische und Vergleichsoperationen auf Temporal.PlainMonthDay

Alle arithmetischen und Vergleichsoperationen auf `Temporal.PlainMonthDay`-Instanzen sollten die speziellen Methoden verwenden oder sie explizit in primitive Werte umwandeln.

```js
const md1 = Temporal.PlainMonthDay.from("01-01");
const md2 = Temporal.PlainMonthDay.from("07-01");
md1 > md2; // TypeError: can't convert PlainMonthDay to primitive type
Temporal.PlainDate.compare(
  md1.toPlainDate({ year: 2021 }),
  md2.toPlainDate({ year: 2021 }),
); // -1

md2 - md1; // TypeError: can't convert PlainMonthDay to primitive type
md2
  .toPlainDate({ year: 2021 })
  .since(md1.toPlainDate({ year: 2021 }))
  .toString(); // "P181D"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainMonthDay")}}
- {{jsxref("Temporal/PlainMonthDay/toString", "Temporal.PlainMonthDay.prototype.toString()")}}
- {{jsxref("Temporal/PlainMonthDay/toJSON", "Temporal.PlainMonthDay.prototype.toJSON()")}}
- {{jsxref("Temporal/PlainMonthDay/toLocaleString", "Temporal.PlainMonthDay.prototype.toLocaleString()")}}
