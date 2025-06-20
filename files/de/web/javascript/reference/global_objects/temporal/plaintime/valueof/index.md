---
title: Temporal.PlainTime.prototype.valueOf()
short-title: valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/valueOf
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`valueOf()`**-Methode von {{jsxref("Temporal.PlainTime")}}-Instanzen wirft einen {{jsxref("TypeError")}}, was verhindert, dass `Temporal.PlainTime`-Instanzen [implizit in primitive Werte umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) werden, wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.

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
  - : Wird immer geworfen.

## Beschreibung

Da sowohl die [primitive Umwandlung](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) als auch die [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) `valueOf()` vor `toString()` aufrufen, würde ein Ausdruck wie `time1 > time2`, wenn `valueOf()` fehlt, sie implizit als Strings vergleichen, was zu unerwarteten Ergebnissen führen könnte. Durch das Werfen eines `TypeError` verhindern `Temporal.PlainTime`-Instanzen solche impliziten Umwandlungen. Sie müssen sie explizit in Strings umwandeln, indem Sie {{jsxref("Temporal/PlainTime/toString", "Temporal.PlainTime.prototype.toString()")}} verwenden, oder die statische Methode {{jsxref("Temporal/PlainTime/compare", "Temporal.PlainTime.compare()")}} nutzen, um sie zu vergleichen.

## Beispiele

### Arithmetische und Vergleichsoperationen mit Temporal.PlainTime

Alle arithmetischen und Vergleichsoperationen mit `Temporal.PlainTime`-Instanzen sollten die dafür vorgesehenen Methoden verwenden oder sie explizit in primitive Werte umwandeln.

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
