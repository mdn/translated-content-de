---
title: Temporal.PlainMonthDay.prototype.valueOf()
short-title: valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/valueOf
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`valueOf()`**-Methode von {{jsxref("Temporal.PlainMonthDay")}}-Instanzen wirft einen {{jsxref("TypeError")}}, was verhindert, dass `Temporal.PlainMonthDay`-Instanzen [implizit in Primitive konvertiert werden](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion), wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.

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

Da sowohl die [primitive Konvertierung](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) als auch die [Zahlenkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) `valueOf()` vor `toString()` aufrufen, würde bei Fehlen von `valueOf()` ein Ausdruck wie `monthDay1 > monthDay2` sie implizit als Zeichenfolgen vergleichen, was unerwartete Ergebnisse haben kann. Durch das Auslösen eines `TypeError` verhindern `Temporal.PlainMonthDay`-Instanzen solche impliziten Konvertierungen. Sie müssen sie explizit in Zeichenfolgen umwandeln, indem Sie {{jsxref("Temporal/PlainMonthDay/toString", "Temporal.PlainMonthDay.prototype.toString()")}} verwenden.

## Beispiele

### Arithmetische und Vergleichsoperationen auf Temporal.PlainMonthDay

Alle arithmetischen und Vergleichsoperationen auf `Temporal.PlainMonthDay`-Instanzen sollten die dedizierten Methoden verwenden oder sie explizit in Primitive umwandeln.

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
