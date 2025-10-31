---
title: Temporal.PlainTime.prototype.hour
short-title: hour
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/hour
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{SeeCompatTable}}

Die **`hour`** Accessor-Eigenschaft von {{jsxref("Temporal.PlainTime")}} Instanzen gibt eine ganze Zahl von 0 bis 23 zurück, die die Stundenkomponente dieser Zeit darstellt.

Der Set-Accessor von `hour` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die {{jsxref("Temporal/PlainTime/with", "with()")}}-Methode, um ein neues `Temporal.PlainTime`-Objekt mit dem gewünschten neuen Wert zu erstellen.

## Beispiele

### Verwendung von hour

```js
const time = Temporal.PlainTime.from("12:34:56");
console.log(time.hour); // 12
```

### Ändern von hour

```js
const time = Temporal.PlainTime.from("12:34:56");
const newTime = time.with({ hour: 15 });
console.log(newTime.toString()); // 15:34:56
```

Sie können auch {{jsxref("Temporal/PlainTime/add", "add()")}} oder {{jsxref("Temporal/PlainTime/subtract", "subtract()")}} verwenden, um eine bestimmte Anzahl von Stunden von der aktuellen Zeit zu verschieben.

```js
const time = Temporal.PlainTime.from("12:34:56");
const newTime = time.add({ hours: 3 });
console.log(newTime.toString()); // 15:34:56
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
