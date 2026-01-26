---
title: Temporal.PlainTime.prototype.round()
short-title: round()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/round
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`round()`**-Methode von {{jsxref("Temporal.PlainTime")}}-Instanzen gibt ein neues `Temporal.PlainTime`-Objekt zurück, das diese Zeit auf die angegebene Einheit gerundet darstellt.

## Syntax

```js-nolint
round(smallestUnit)
round(options)
```

### Parameter

- `smallestUnit`
  - : Ein String, der die [`smallestUnit`](#smallestunit_2)-Option darstellt. Dies ist eine bequeme Überladung, sodass `round(smallestUnit)` gleichbedeutend mit `round({ smallestUnit })` ist, wobei `smallestUnit` ein String ist.
- `options`
  - : Ein Objekt, das einige oder alle der folgenden Eigenschaften enthält (in der Reihenfolge, in der sie abgerufen und validiert werden):
    - `roundingIncrement` {{optional_inline}}
      - : Eine Zahl (auf eine ganze Zahl gekürzt), die das Rundungsinkrement in der angegebenen `smallestUnit` darstellt. Standardmäßig `1`. Das Inkrement muss ein Teiler des Maximalwerts von `smallestUnit` sein; zum Beispiel, wenn die Einheit Stunden ist, muss das Inkrement ein Teiler von 24 sein und darf nicht 24 selbst sein, was bedeutet, dass es 1, 2, 3, 4, 6, 8 oder 12 sein kann.
    - `roundingMode` {{optional_inline}}
      - : Ein String, der angibt, wie der Bruchteil der `smallestUnit` gerundet werden soll. Siehe [`Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). Standardmäßig `"halfExpand"`.
    - `smallestUnit`
      - : Ein String, der die kleinste Einheit darstellt, die in der Ausgabe enthalten sein soll. Der Wert muss einer der folgenden sein: `"hour"`, `"minute"`, `"second"`, `"millisecond"`, `"microsecond"`, `"nanosecond"`, oder deren Pluralformen. Für größere Einheiten als `"nanosecond"` werden Bruchteile der `smallestUnit` gemäß den Einstellungen von `roundingIncrement` und `roundingMode` gerundet.

### Rückgabewert

Ein neues {{jsxref("Temporal.PlainTime")}}-Objekt, das diese Zeit auf die angegebene Einheit gerundet darstellt, wobei alle Einheiten, die kleiner als `smallestUnit` sind, auf Null gesetzt werden.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.

## Beispiele

### Kleine Einheiten abrunden

```js
const time = Temporal.PlainTime.from("12:34:56.123456789");
const nearestMillisecond = time.round("millisecond");
console.log(nearestMillisecond.toString()); // 12:34:56.123

const nearestHalfHour = time.round({
  smallestUnit: "minute",
  roundingIncrement: 30,
});
console.log(nearestHalfHour.toString()); // 12:30:00

const nextHour = time.round({ smallestUnit: "hour", roundingMode: "ceil" });
console.log(nextHour.toString()); // 13:00:00
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainTime")}}
