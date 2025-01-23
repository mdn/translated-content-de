---
title: Temporal.PlainDateTime.prototype.round()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/round
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`round()`** Methode von {{jsxref("Temporal.PlainDateTime")}} Instanzen gibt ein neues `Temporal.PlainDateTime`-Objekt zurück, das diesen Datum-Uhrzeit-Wert auf die angegebene Einheit gerundet darstellt.

## Syntax

```js-nolint
round(smallestUnit)
round(options)
```

### Parameter

- `smallestUnit`
  - : Ein String, der die [`smallestUnit`](#smallestunit_2)-Option darstellt. Dies ist eine Komfort-Überladung, sodass `round(smallestUnit)` gleichbedeutend mit `round({ smallestUnit })` ist, wobei `smallestUnit` ein String ist.
- `options`
  - : Ein Objekt, das einige oder alle der folgenden Eigenschaften enthält (in der Reihenfolge, in der sie abgerufen und validiert werden):
    - `roundingIncrement` {{optional_inline}}
      - : Eine Zahl (auf eine ganze Zahl gekürzt), die den Rundungsinkrement in der angegebenen `smallestUnit` darstellt. Standardwert ist `1`. Für alle Werte von `smallestUnit` außer `"day"` muss der Inkrement ein Teiler des Maximalwertes der Einheit sein; zum Beispiel, wenn die Einheit Stunden ist, muss der Inkrement ein Teiler von 24 sein und darf nicht 24 selbst sein, was bedeutet, dass es 1, 2, 3, 4, 6, 8 oder 12 sein kann. Für `"day"` muss der Inkrement 1 sein.
    - `roundingMode` {{optional_inline}}
      - : Ein String, der angibt, wie der Bruchteil der `smallestUnit` gerundet werden soll. Siehe [`Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). Standardwert ist `"halfExpand"`.
    - `smallestUnit`
      - : Ein String, der die kleinste Einheit repräsentiert, die in der Ausgabe enthalten sein soll. Der Wert muss einer der folgenden sein: `"day"`, `"hour"`, `"minute"`, `"second"`, `"millisecond"`, `"microsecond"`, `"nanosecond"` oder deren Pluralformen. Für Einheiten größer als `"nanosecond"` werden Bruchteile der `smallestUnit` entsprechend den Einstellungen `roundingIncrement` und `roundingMode` gerundet.

### Rückgabewert

Ein neues {{jsxref("Temporal.PlainDateTime")}}-Objekt, das diesen Datum-Uhrzeit-Wert auf die angegebene Einheit gerundet darstellt, wobei alle Einheiten kleiner als `smallestUnit` auf null gesetzt sind.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.

## Beispiele

### Abrunden kleiner Einheiten

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
