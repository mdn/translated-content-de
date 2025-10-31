---
title: Temporal.PlainTime.prototype.second
short-title: second
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/second
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{SeeCompatTable}}

Die **`second`** Zugriffseigenschaft von {{jsxref("Temporal.PlainTime")}} Instanzen gibt eine ganze Zahl von 0 bis 59 zurück, die die Sekundenkomponente dieser Zeit darstellt.

Der set Zugriff von `second` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die {{jsxref("Temporal/PlainTime/with", "with()")}} Methode, um ein neues `Temporal.PlainTime` Objekt mit dem gewünschten neuen Wert zu erstellen.

## Beispiele

### Verwendung von second

```js
const time = Temporal.PlainTime.from("12:34:56");
console.log(time.second); // 56
```

### Änderung von second

```js
const time = Temporal.PlainTime.from("12:34:56");
const newTime = time.with({ second: 15 });
console.log(newTime.toString()); // 12:34:15
```

Sie können auch {{jsxref("Temporal/PlainTime/add", "add()")}} oder {{jsxref("Temporal/PlainTime/subtract", "subtract()")}} verwenden, um eine bestimmte Anzahl von Sekunden von der aktuellen Zeit zu verschieben.

```js
const time = Temporal.PlainTime.from("12:34:56");
const newTime = time.subtract({ seconds: 41 });
console.log(newTime.toString()); // 12:34:15
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
- {{jsxref("Temporal/PlainTime/millisecond", "Temporal.PlainTime.prototype.millisecond")}}
- {{jsxref("Temporal/PlainTime/microsecond", "Temporal.PlainTime.prototype.microsecond")}}
- {{jsxref("Temporal/PlainTime/nanosecond", "Temporal.PlainTime.prototype.nanosecond")}}
