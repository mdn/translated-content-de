---
title: Temporal.PlainTime.prototype.round()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/round
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`round()`** Methode von {{jsxref("Temporal.PlainTime")}} Instanzen gibt ein neues `Temporal.PlainTime` Objekt zurück, das diese Zeit auf die angegebene Einheit gerundet darstellt.

## Syntax

```js-nolint
round(smallestUnit)
round(options)
```

### Parameter

- `smallestUnit`
  - : Ein String, der die [`smallestUnit`](#smallestunit_2) Option darstellt. Dies ist eine Komfortüberladung, d.h. `round(smallestUnit)` ist äquivalent zu `round({ smallestUnit })`, wobei `smallestUnit` ein String ist.
- `options`
  - : Ein Objekt, das einige oder alle der folgenden Eigenschaften enthält (in der Reihenfolge, in der sie abgerufen und validiert werden):
    - `roundingIncrement` {{optional_inline}}
      - : Eine Zahl (auf eine ganze Zahl gekürzt), die den Rundungsinkrement in der angegebenen `smallestUnit` darstellt. Standard ist `1`. Der Inkrement muss ein Teiler des Maximalwerts von `smallestUnit` sein; zum Beispiel, wenn die Einheit Stunden ist, muss der Inkrement ein Teiler von 24 sein und darf nicht 24 selbst sein, was bedeutet, dass er 1, 2, 3, 4, 6, 8 oder 12 sein kann.
    - `roundingMode` {{optional_inline}}
      - : Ein String, der angibt, wie der Bruchteil von `smallestUnit` abgerundet werden soll. Siehe [`Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). Standard ist `"halfExpand"`.
    - `smallestUnit`
      - : Ein String, der die kleinste Einheit darstellt, die in die Ausgabe aufgenommen werden soll. Der Wert muss einer der folgenden sein: `"hour"`, `"minute"`, `"second"`, `"millisecond"`, `"microsecond"`, `"nanosecond"` oder deren Pluralformen. Für Einheiten größer als `"nanosecond"` werden die Bruchteile der `smallestUnit` gemäß den Einstellungen für `roundingIncrement` und `roundingMode` gerundet.

### Rückgabewert

Ein neues {{jsxref("Temporal.PlainTime")}} Objekt, das diese Zeit auf die angegebene Einheit gerundet darstellt, wobei alle Einheiten kleiner als `smallestUnit` auf null gesetzt werden.

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
