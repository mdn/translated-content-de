---
title: Temporal.PlainYearMonth.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/valueOf
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`valueOf()`**-Methode von {{jsxref("Temporal.PlainYearMonth")}}-Instanzen wirft einen {{jsxref("TypeError")}}, was verhindert, dass `Temporal.PlainYearMonth`-Instanzen [implizit in primitive Werte umgewandelt](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) werden, wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.

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

Da sowohl die [primitive Umwandlung](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) als auch die [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) `valueOf()` vor `toString()` aufrufen, würde ein Ausdruck wie `yearMonth1 > yearMonth2` sie, falls `valueOf()` fehlt, implizit als Strings vergleichen, was unerwartete Ergebnisse haben kann. Durch das Auslösen eines `TypeError` verhindern `Temporal.PlainYearMonth`-Instanzen solche impliziten Umwandlungen. Sie müssen sie ausdrücklich in Strings umwandeln, indem Sie {{jsxref("Temporal/PlainYearMonth/toString", "Temporal.PlainYearMonth.prototype.toString()")}} verwenden, oder die statische Methode {{jsxref("Temporal/PlainYearMonth/compare", "Temporal.PlainYearMonth.compare()")}} verwenden, um sie zu vergleichen.

## Beispiele

### Arithmetische und Vergleichsoperationen auf Temporal.PlainYearMonth

Alle arithmetischen und Vergleichsoperationen auf `Temporal.PlainYearMonth`-Instanzen sollten die dedizierten Methoden verwenden oder sie ausdrücklich in primitive Werte umwandeln.

```js
const ym1 = Temporal.PlainYearMonth.from("2021-01");
const ym2 = Temporal.PlainYearMonth.from("2021-07");
ym1 > ym2; // TypeError: can't convert PlainYearMonth to primitive type
Temporal.PlainYearMonth.compare(ym1, ym2); // -1

ym2 - ym1; // TypeError: can't convert PlainYearMonth to primitive type
ym2.since(ym1).toString(); // "P6M"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainYearMonth")}}
- {{jsxref("Temporal/PlainYearMonth/toString", "Temporal.PlainYearMonth.prototype.toString()")}}
- {{jsxref("Temporal/PlainYearMonth/toJSON", "Temporal.PlainYearMonth.prototype.toJSON()")}}
- {{jsxref("Temporal/PlainYearMonth/toLocaleString", "Temporal.PlainYearMonth.prototype.toLocaleString()")}}
