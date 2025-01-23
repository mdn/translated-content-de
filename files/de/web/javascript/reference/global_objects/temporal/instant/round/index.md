---
title: Temporal.Instant.prototype.round()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/round
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`round()`** Methode von Instanzen des {{jsxref("Temporal.Instant")}} gibt ein neues `Temporal.Instant`-Objekt zurück, das diesen Zeitpunkt auf die angegebene Einheit gerundet darstellt.

## Syntax

```js-nolint
round(smallestUnit)
round(options)
```

### Parameter

- `smallestUnit`
  - : Ein String, der die [`smallestUnit`](#smallestunit_2)-Option darstellt. Dies ist eine praktische Überladung, sodass `round(smallestUnit)` gleichbedeutend ist mit `round({ smallestUnit })`, wobei `smallestUnit` ein String ist.
- `options`
  - : Ein Objekt, das einige oder alle der folgenden Eigenschaften enthält (in der Reihenfolge, in der sie abgerufen und validiert werden):
    - `roundingIncrement` {{optional_inline}}
      - : Eine Zahl (auf eine Ganzzahl gekürzt), die das Rundungsinkrement in der angegebenen `smallestUnit` darstellt. Standardmäßig `1`. Das Inkrement und die `smallestUnit` müssen 24 Stunden gleichmäßig teilen; zum Beispiel ist 45 Sekunden ein Teiler von 86400 Sekunden und 100 Minuten ein Teiler von 3600 Minuten. Dies ist etwas weniger streng als die `round()`-Methode der anderen Klassen, die alle verlangen, dass das Inkrement ein Teiler des Maximalwerts der Einheit ist.
    - `roundingMode` {{optional_inline}}
      - : Ein String, der angibt, wie die Bruchteile von `smallestUnit` abgerundet werden sollen. Siehe [`Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). Standardmäßig `"halfExpand"`.
    - `smallestUnit`
      - : Ein String, der die kleinste Einheit darstellt, die in die Ausgabe einbezogen werden soll. Der Wert muss einer der folgenden sein: `"hour"`, `"minute"`, `"second"`, `"millisecond"`, `"microsecond"`, `"nanosecond"` oder deren Pluralformen. Für Einheiten größer als `"nanosecond"` werden Bruchteile der `smallestUnit` entsprechend den `roundingIncrement`- und `roundingMode`-Einstellungen gerundet.

### Rückgabewert

Ein neues {{jsxref("Temporal.Instant")}}-Objekt, das diesen Zeitpunkt auf die angegebene Einheit gerundet darstellt, wobei alle Einheiten kleiner als `smallestUnit` auf null gesetzt werden.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.

## Beispiele

### Rundung kleiner Einheiten

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
