---
title: Temporal.PlainTime.prototype.nanosecond
short-title: nanosecond
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/nanosecond
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`nanosecond`** Accessor-Eigenschaft von {{jsxref("Temporal.PlainTime")}}-Instanzen gibt eine ganze Zahl von 0 bis 999 zurück, die die Nanosekundenkomponente (10<sup>-9</sup> Sekunden) dieser Zeit darstellt.

Der Set-Accessor von `nanosecond` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die Methode {{jsxref("Temporal/PlainTime/with", "with()")}}, um ein neues `Temporal.PlainTime`-Objekt mit dem gewünschten neuen Wert zu erstellen.

## Beispiele

### Verwendung von nanosecond

```js
const time = Temporal.PlainTime.from("12:34:56");
console.log(time.nanosecond); // 0

const time2 = Temporal.PlainTime.from("12:34:56.123456789");
console.log(time2.nanosecond); // 789
```

### Ändern von nanosecond

```js
const time = Temporal.PlainTime.from("12:34:56");
const newTime = time.with({ nanosecond: 100 });
console.log(newTime.toString()); // 12:34:56.0000001
```

Sie können auch {{jsxref("Temporal/PlainTime/add", "add()")}} oder {{jsxref("Temporal/PlainTime/subtract", "subtract()")}} verwenden, um eine bestimmte Anzahl von Nanosekunden von der aktuellen Zeit zu verschieben.

```js
const time = Temporal.PlainTime.from("12:34:56");
const newTime = time.add({ nanoseconds: 100 });
console.log(newTime.toString()); // 12:34:56.0000001
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainTime")}}
- {{jsxref("Temporal/PlainTime/with", "Temporal.PlainTime.prototype.with()")}}
- {{jsxref("Temporal/PlainTime/add", "Temporal.PlainTime.prototype.add()")}}
- {{jsxref("Temporal/PlainTime/subtract", "Temporal.PlainTime.prototype.subtract()")}}
- {{jsxref("Temporal/PlainTime/second", "Temporal.PlainTime.prototype.second")}}
- {{jsxref("Temporal/PlainTime/millisecond", "Temporal.PlainTime.prototype.millisecond")}}
- {{jsxref("Temporal/PlainTime/microsecond", "Temporal.PlainTime.prototype.microsecond")}}
