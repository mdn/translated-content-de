---
title: Temporal.PlainTime.prototype.since()
short-title: since()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/since
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`since()`** Methode von {{jsxref("Temporal.PlainTime")}} Instanzen gibt ein neues {{jsxref("Temporal.Duration")}} Objekt zurück, das die Dauer von einer anderen Zeit (in einer Form, die durch {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} konvertierbar ist) bis zu dieser Zeit darstellt. Die Dauer ist positiv, wenn die andere Zeit vor dieser Zeit liegt, und negativ, wenn danach.

Diese Methode führt `this - other` aus. Um `other - this` zu berechnen, verwenden Sie die {{jsxref("Temporal/PlainTime/until", "until()")}} Methode.

## Syntax

```js-nolint
since(other)
since(other, options)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainTime")}} Instanz, die eine Zeit darstellt, die von dieser Zeit abgezogen werden soll. Es wird mit dem gleichen Algorithmus wie {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} in ein `Temporal.PlainTime` Objekt konvertiert.
- `options` {{optional_inline}}
  - : Ein Objekt, das die Optionen für {{jsxref("Temporal/Duration/round", "Temporal.Duration.prototype.round()")}} enthält, einschließlich `largestUnit`, `roundingIncrement`, `roundingMode` und `smallestUnit`. `largestUnit` und `smallestUnit` akzeptieren nur die Einheiten: `"hours"`, `"minutes"`, `"seconds"`, `"milliseconds"`, `"microseconds"`, `"nanoseconds"` oder deren Einzahlformen. Für `largestUnit` bedeutet der Standardwert `"auto"` `"hours"`. Für `smallestUnit` ist der Standardwert `"nanoseconds"`.

### Rückgabewert

Ein neues {{jsxref("Temporal.Duration")}} Objekt, das die Dauer _seit_ `other` bis zu dieser Zeit darstellt. Die Dauer ist positiv, wenn `other` vor dieser Zeit liegt, und negativ, wenn danach.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.

## Beispiele

### Verwendung von since()

```js
const lunchTime = Temporal.PlainTime.from("12:30:00");
const now = Temporal.Now.plainTimeISO();
const duration = now.since(lunchTime);
console.log(`You had lunch ${duration.toLocaleString("en-US")} ago`);
// Example output: "You had lunch 3 hr, 42 min, 21 sec, 343 ms, 131 μs, 718 ns ago"

const duration2 = now.since(lunchTime, { smallestUnit: "minutes" });
console.log(`You had lunch ${duration2.toLocaleString("en-US")} ago`);
// Example output: "You had lunch 3 hr, 42 min ago"

const duration3 = now.since(lunchTime, {
  largestUnit: "minutes",
  smallestUnit: "minutes",
});
console.log(`You had lunch ${duration3.toLocaleString("en-US")} ago`);
// Example output: "You had lunch 222 min ago"
```

### Ergebnis runden

Standardmäßig wird der Bruchteil der `smallestUnit` abgeschnitten. Sie können diesen mit den Optionen `roundingIncrement` und `roundingMode` aufrunden.

```js
const time1 = Temporal.PlainTime.from("12:30:00");
const time2 = Temporal.PlainTime.from("12:30:01");
const duration = time2.since(time1, {
  smallestUnit: "seconds",
  roundingIncrement: 15,
  roundingMode: "ceil",
});
console.log(duration.toString()); // "PT15S"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainTime")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/PlainTime/add", "Temporal.PlainTime.prototype.add()")}}
- {{jsxref("Temporal/PlainTime/subtract", "Temporal.PlainTime.prototype.subtract()")}}
- {{jsxref("Temporal/PlainTime/until", "Temporal.PlainTime.prototype.until()")}}
