---
title: Temporal.Instant.prototype.round()
short-title: round()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/round
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`round()`** Methode von {{jsxref("Temporal.Instant")}} Instanzen gibt ein neues `Temporal.Instant` Objekt zurück, das diesen Zeitpunkt auf die angegebene Einheit gerundet darstellt.

## Syntax

```js-nolint
round(smallestUnit)
round(options)
```

### Parameter

- `smallestUnit`
  - : Ein String, der die [`smallestUnit`](#smallestunit_2) Option darstellt. Dies ist eine Komfortüberladung, sodass `round(smallestUnit)` gleichbedeutend mit `round({ smallestUnit })` ist, wobei `smallestUnit` ein String ist.
- `options`
  - : Ein Objekt, das einige oder alle der folgenden Eigenschaften enthält (in der Reihenfolge, in der sie abgerufen und validiert werden):
    - `roundingIncrement` {{optional_inline}}
      - : Eine Zahl (auf eine ganze Zahl gekürzt), die das Rundungsinkrement in der angegebenen `smallestUnit` darstellt. Standard ist `1`. Das Inkrement und die `smallestUnit` müssen 24 Stunden gleichmäßig teilen; zum Beispiel sind 45 Sekunden ein Teiler von 86400 Sekunden, und 100 Minuten sind ein Teiler von 3600 Minuten. Dies ist etwas weniger streng als die `round()` Methode der anderen Klassen, die alle verlangen, dass das Inkrement ein Teiler des Maximalwertes der Einheit ist.
    - `roundingMode` {{optional_inline}}
      - : Ein String, der angibt, wie der Bruchteil von `smallestUnit` abgerundet wird. Siehe [`Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). Standard ist `"halfExpand"`.
    - `smallestUnit`
      - : Ein String, der die kleinste Einheit darstellt, die in der Ausgabe enthalten sein soll. Der Wert muss einer der folgenden sein: `"hour"`, `"minute"`, `"second"`, `"millisecond"`, `"microsecond"`, `"nanosecond"`, oder ihre Pluralformen. Für Einheiten größer als `"nanosecond"` werden Bruchteile der `smallestUnit` gemäß den Einstellungen `roundingIncrement` und `roundingMode` gerundet.

### Rückgabewert

Ein neues {{jsxref("Temporal.Instant")}} Objekt, das diesen Zeitpunkt auf die angegebene Einheit gerundet darstellt, wobei alle Einheiten kleiner als `smallestUnit` auf null gesetzt sind.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.

## Beispiele

### Abrunden kleiner Einheiten

```js
const instant = Temporal.Instant.fromEpochMilliseconds(1000);
const roundedInstant = instant.round("second");
console.log(roundedInstant.epochMilliseconds); // 1000

const instant2 = instant.round("minute");
console.log(instant2.epochMilliseconds); // 0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Instant")}}
