---
title: Temporal.PlainTime.prototype.valueOf()
short-title: valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/valueOf
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`valueOf()`**-Methode von {{jsxref("Temporal.PlainTime")}}-Instanzen wirft einen {{jsxref("TypeError")}}, der verhindert, dass `Temporal.PlainTime`-Instanzen [implizit in Primitive umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) werden, wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.

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

Da sowohl [primitive Umwandlung](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) als auch [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) `valueOf()` vor `toString()` aufrufen, würde, falls `valueOf()` fehlt, ein Ausdruck wie `time1 > time2` diese implizit als Strings vergleichen, was zu unerwarteten Ergebnissen führen könnte. Durch das Auslösen eines `TypeError` verhindern `Temporal.PlainTime`-Instanzen solche impliziten Umwandlungen. Sie müssen sie explizit mit {{jsxref("Temporal/PlainTime/toString", "Temporal.PlainTime.prototype.toString()")}} in Strings umwandeln oder die statische Methode {{jsxref("Temporal/PlainTime/compare", "Temporal.PlainTime.compare()")}} verwenden, um sie zu vergleichen.

## Beispiele

### Arithmetische und Vergleichsoperationen auf Temporal.PlainTime

Alle arithmetischen und Vergleichsoperationen auf `Temporal.PlainTime`-Instanzen sollten die speziellen Methoden verwenden oder explizit in Primitive umgewandelt werden.

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
