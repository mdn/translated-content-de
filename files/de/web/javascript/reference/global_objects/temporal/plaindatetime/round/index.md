---
title: Temporal.PlainDateTime.prototype.round()
short-title: round()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/round
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`round()`** Methode von Instanzen von {{jsxref("Temporal.PlainDateTime")}} gibt ein neues `Temporal.PlainDateTime`-Objekt zurück, das diesen Datum-Uhrzeit-Wert auf die angegebene Einheit gerundet darstellt.

## Syntax

```js-nolint
round(smallestUnit)
round(options)
```

### Parameter

- `smallestUnit`
  - : Ein String, der die [`smallestUnit`](#smallestunit_2) Option darstellt. Dies ist eine Überladung zur Vereinfachung, so dass `round(smallestUnit)` äquivalent zu `round({ smallestUnit })` ist, wobei `smallestUnit` ein String ist.
- `options`
  - : Ein Objekt, das einige oder alle der folgenden Eigenschaften enthält (in der Reihenfolge, in der sie abgerufen und validiert werden):
    - `roundingIncrement` {{optional_inline}}
      - : Eine Zahl (abgerundet auf eine ganze Zahl), die den Rundungsinkrement in der gegebenen `smallestUnit` darstellt. Standardmäßig `1`. Für alle Werte von `smallestUnit` außer `"day"` muss der Inkrement ein Teiler des Maximalwerts der Einheit sein; zum Beispiel, wenn die Einheit Stunden ist, muss der Inkrement ein Teiler von 24 sein und darf nicht 24 selbst sein, was bedeutet, dass es 1, 2, 3, 4, 6, 8 oder 12 sein kann. Für `"day"` muss der Inkrement 1 sein.
    - `roundingMode` {{optional_inline}}
      - : Ein String, der angibt, wie der Bruchteil von `smallestUnit` gerundet werden soll. Siehe [`Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). Standardmäßig `"halfExpand"`.
    - `smallestUnit`
      - : Ein String, der die kleinste Einheit darstellt, die im Ergebnis enthalten sein soll. Der Wert muss einer der folgenden sein: `"day"`, `"hour"`, `"minute"`, `"second"`, `"millisecond"`, `"microsecond"`, `"nanosecond"` oder deren Pluralformen. Für Einheiten größer als `"nanosecond"` werden Bruchteile der `smallestUnit` gemäß den Einstellungen `roundingIncrement` und `roundingMode` gerundet.

### Rückgabewert

Ein neues {{jsxref("Temporal.PlainDateTime")}}-Objekt, das diesen Datum-Uhrzeit-Wert auf die angegebene Einheit gerundet darstellt, wobei alle Einheiten kleiner als `smallestUnit` auf null gesetzt werden.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.

## Beispiele

### Kleine Einheiten runden

```js
const dt = Temporal.PlainDateTime.from("2021-07-01T12:34:56.123456789");
const nearestMillisecond = dt.round("millisecond");
console.log(nearestMillisecond.toString()); // 2021-07-01T12:34:56.123

const nearestHalfHour = dt.round({
  smallestUnit: "minute",
  roundingIncrement: 30,
});
console.log(nearestHalfHour.toString()); // 2021-07-01T12:30:00

const nextDay = dt.round({ smallestUnit: "day", roundingMode: "ceil" });
console.log(nextDay.toString()); // 2021-07-02T00:00:00
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDateTime")}}
