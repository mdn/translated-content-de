---
title: Temporal.Instant.prototype.round()
short-title: round()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/round
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`round()`**-Methode von {{jsxref("Temporal.Instant")}}-Instanzen gibt ein neues `Temporal.Instant`-Objekt zurück, das diesen Zeitpunkt gerundet auf die angegebene Einheit darstellt.

## Syntax

```js-nolint
round(smallestUnit)
round(options)
```

### Parameter

- `smallestUnit`
  - : Ein String, der die [`smallestUnit`](#smallestunit_2)-Option darstellt. Dies ist eine bequeme Überladungsform, sodass `round(smallestUnit)` gleichbedeutend ist mit `round({ smallestUnit })`, wobei `smallestUnit` ein String ist.
- `options`
  - : Ein Objekt, das einige oder alle der folgenden Eigenschaften enthält (in der Reihenfolge, in der sie abgerufen und validiert werden):
    - `roundingIncrement` {{optional_inline}}
      - : Eine Zahl (auf eine ganze Zahl gekürzt), die das Rundungsinkrement in der angegebenen `smallestUnit` darstellt. Standardmäßig `1`. Das Inkrement und die `smallestUnit` müssen 24 Stunden gleichmäßig teilen; beispielsweise sind 45 Sekunden ein Teiler von 86400 Sekunden und 100 Minuten ein Teiler von 3600 Minuten. Dies ist etwas weniger streng als die `round()`-Methode der anderen Klassen, die alle erfordern, dass das Inkrement ein Teiler des Maximalwerts der Einheit ist.
    - `roundingMode` {{optional_inline}}
      - : Ein String, der angibt, wie der Bruchteil von `smallestUnit` gerundet werden soll. Siehe [`Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). Standardmäßig `"halfExpand"`.
    - `smallestUnit`
      - : Ein String, der die kleinste Einheit darstellt, die in die Ausgabe einbezogen werden soll. Der Wert muss einer der folgenden sein: `"hour"`, `"minute"`, `"second"`, `"millisecond"`, `"microsecond"`, `"nanosecond"` oder ihre Pluralformen. Für Einheiten, die größer als `"nanosecond"` sind, werden Bruchteile der `smallestUnit` gemäß den Einstellungen von `roundingIncrement` und `roundingMode` gerundet.

### Rückgabewert

Ein neues {{jsxref("Temporal.Instant")}}-Objekt, das diesen Zeitpunkt gerundet auf die angegebene Einheit darstellt, wobei alle Einheiten kleiner als `smallestUnit` auf null gesetzt sind.

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
