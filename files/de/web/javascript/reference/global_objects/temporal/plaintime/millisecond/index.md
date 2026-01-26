---
title: Temporal.PlainTime.prototype.millisecond
short-title: millisecond
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/millisecond
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`millisecond`** Zugriffsproperty von {{jsxref("Temporal.PlainTime")}} Instanzen gibt eine Ganzzahl von 0 bis 999 zurück, die die Millisekundenkomponente (10<sup>-3</sup> Sekunde) dieser Zeit darstellt.

Der Set-Accessor von `millisecond` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die {{jsxref("Temporal/PlainTime/with", "with()")}}-Methode, um ein neues `Temporal.PlainTime`-Objekt mit dem gewünschten neuen Wert zu erstellen.

## Beispiele

### Verwendung von millisecond

```js
const time = Temporal.PlainTime.from("12:34:56");
console.log(time.millisecond); // 0

const time2 = Temporal.PlainTime.from("12:34:56.123456789");
console.log(time2.millisecond); // 123
```

### Änderung von millisecond

```js
const time = Temporal.PlainTime.from("12:34:56");
const newTime = time.with({ millisecond: 100 });
console.log(newTime.toString()); // 12:34:56.1
```

Sie können auch {{jsxref("Temporal/PlainTime/add", "add()")}} oder {{jsxref("Temporal/PlainTime/subtract", "subtract()")}} verwenden, um eine bestimmte Anzahl von Millisekunden von der aktuellen Zeit zu verschieben.

```js
const time = Temporal.PlainTime.from("12:34:56");
const newTime = time.add({ milliseconds: 100 });
console.log(newTime.toString()); // 12:34:56.1
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
- {{jsxref("Temporal/PlainTime/microsecond", "Temporal.PlainTime.prototype.microsecond")}}
- {{jsxref("Temporal/PlainTime/nanosecond", "Temporal.PlainTime.prototype.nanosecond")}}
