---
title: Temporal.PlainTime.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/valueOf
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die **`valueOf()`**-Methode von {{jsxref("Temporal.PlainTime")}}-Instanzen wirft einen {{jsxref("TypeError")}}, wodurch `Temporal.PlainTime`-Instanzen daran gehindert werden, [implizit in primitive Werte umgewandelt zu werden](/de/docs/Web/JavaScript/Data_structures#primitive_coercion), wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.

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

Da sowohl die [primitive Umwandlung](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) als auch die [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) `valueOf()` vor `toString()` aufrufen, würde, falls `valueOf()` fehlt, ein Ausdruck wie `time1 > time2` sie implizit als Zeichenfolgen vergleichen, was zu unerwarteten Ergebnissen führen kann. Durch das Werfen eines `TypeError` verhindern `Temporal.PlainTime`-Instanzen solche impliziten Umwandlungen. Sie müssen sie explizit in Zeichenfolgen umwandeln mit {{jsxref("Temporal/PlainTime/toString", "Temporal.PlainTime.prototype.toString()")}}, oder die {{jsxref("Temporal/PlainTime/compare", "Temporal.PlainTime.compare()")}}-statische Methode verwenden, um sie zu vergleichen.

## Beispiele

### Arithmetische und Vergleichsoperationen auf Temporal.PlainTime

Alle arithmetischen und Vergleichsoperationen auf `Temporal.PlainTime`-Instanzen sollten die dafür vorgesehenen Methoden verwenden oder sie explizit in primitive Werte umwandeln.

```js
const time1 = Temporal.PlainTime.from("00:00:00");
const time2 = Temporal.PlainTime.from("12:00:00");
time1 > time2; // TypeError: can't convert PlainTime to primitive type
Temporal.PlainTime.compare(time1, time2); // -1

time2 - time1; // TypeError: can't convert PlainTime to primitive type
time2.since(time1).toString(); // "PT12H"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainTime")}}
- {{jsxref("Temporal/PlainTime/toString", "Temporal.PlainTime.prototype.toString()")}}
- {{jsxref("Temporal/PlainTime/toJSON", "Temporal.PlainTime.prototype.toJSON()")}}
- {{jsxref("Temporal/PlainTime/toLocaleString", "Temporal.PlainTime.prototype.toLocaleString()")}}
