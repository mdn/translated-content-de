---
title: Temporal.PlainDateTime.prototype.withPlainTime()
short-title: withPlainTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/withPlainTime
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`withPlainTime()`** Methode von Instanzen des {{jsxref("Temporal.PlainDateTime")}} gibt ein neues `Temporal.PlainDateTime`-Objekt zurück, das diesen Datum-Uhrzeit-Wert darstellt, wobei der Uhrzeit-Teil vollständig durch die neue Uhrzeit ersetzt wird (in einer Form, die durch {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} umgewandelt werden kann).

Diese Methode wird alle Uhrzeiteigenschaften ersetzen und standardmäßig `0` verwenden, wenn Eigenschaften nicht angegeben sind. Wenn Sie nur einige der Uhrzeiteigenschaften ersetzen möchten, verwenden Sie stattdessen die {{jsxref("Temporal/PlainDateTime/with", "with()")}} Methode.

## Syntax

```js-nolint
withPlainTime()
withPlainTime(plainTime)
```

### Parameter

- `plainTime` {{optional_inline}}
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainTime")}}-Instanz, die die neue Uhrzeit darstellt. Es wird mit demselben Algorithmus in ein `Temporal.PlainTime`-Objekt umgewandelt wie {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}. Wenn nicht angegeben, wird der Uhrzeit-Teil auf `00:00:00` gesetzt.

### Rückgabewert

Ein neues `Temporal.PlainDateTime`-Objekt, mit dem Datumsanteil vom ursprünglichen Datum-Uhrzeit-Wert kopiert und dem Uhrzeit-Teil durch die neue Uhrzeit ersetzt.

## Beispiele

### Verwendung von withPlainTime()

```js
const dt = Temporal.PlainDateTime.from("2021-07-01T12:34:56");

// You can pass a string
const newDT = dt.withPlainTime("13:45:00");
console.log(newDT.toString()); // "2021-07-01T13:45:00"

// You can only specify some time properties, and the rest default to 0;
// for the with() method, they would be copied from the original date-time
const newDT2 = dt.withPlainTime({ hour: 13 });
console.log(newDT2.toString()); // "2021-07-01T13:00:00"

// You can pass nothing to set the time to midnight
const newDT3 = dt.withPlainTime();
console.log(newDT3.toString()); // "2021-07-01T00:00:00"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal/PlainDateTime/with", "Temporal.PlainDateTime.prototype.with()")}}
- {{jsxref("Temporal/PlainDateTime/withCalendar", "Temporal.PlainDateTime.prototype.withCalendar()")}}
- {{jsxref("Temporal/PlainDateTime/toPlainTime", "Temporal.PlainDateTime.prototype.toPlainTime()")}}
- {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}}
