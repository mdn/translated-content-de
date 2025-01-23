---
title: Temporal.Duration.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/toString
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`toString()`** Methode von {{jsxref("Temporal.Duration")}} Instanzen gibt einen String zurück, der diese Dauer im [ISO 8601 Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#iso_8601_duration_format) darstellt.

## Syntax

```js-nolint
toString()
toString(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das einige oder alle der folgenden Eigenschaften enthält (in der Reihenfolge, in der sie abgerufen und validiert werden):
    - `fractionalSecondDigits` {{optional_inline}}
      - : Entweder eine ganze Zahl von 0 bis 9 oder der String `"auto"`. Der Standardwert ist `"auto"`. Wenn `"auto"`, werden die nachgestellten Nullen von den Bruchteilen der Sekunden entfernt. Andernfalls enthält der Bruchteil der Sekunde diese Anzahl von Ziffern, die bei Bedarf mit Nullen aufgefüllt oder gerundet werden.
    - `roundingMode` {{optional_inline}}
      - : Ein String, der angibt, wie die Bruchteile der Sekunden, die über `fractionalSecondDigits` hinausgehen, gerundet werden sollen. Siehe [`Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). Standardmäßig `"trunc"`.
    - `smallestUnit` {{optional_inline}}
      - : Ein String, der die kleinste Einheit angibt, die in der Ausgabe enthalten sein soll. Mögliche Werte sind `"second"`, `"millisecond"`, `"microsecond"` und `"nanosecond"` oder deren Pluralformen, die den `fractionalSecondDigits`-Werten von `0`, `3`, `6`, `9` entsprechen. Wenn angegeben, wird `fractionalSecondDigits` ignoriert.

### Rückgabewert

Ein String, der die gegebene Dauer im [ISO 8601 Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#iso_8601_duration_format) darstellt, mit Subsekundenkomponenten, die gemäß den Optionen formatiert sind. Die Dauer von null wird als `"PT0S"` dargestellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.

## Beispiele

### Verwendung von toString()

```js
const duration = Temporal.Duration.from({ hours: 1, minutes: 30, seconds: 15 });
console.log(duration.toString()); // 'PT1H30M15S'

// Stringification implicitly calls toString()
console.log(`${duration}`); // 'PT1H30M15S'
```

### Verwendung von Optionen

```js
const worldRecord = Temporal.Duration.from({ seconds: 9, milliseconds: 580 });
console.log(worldRecord.toString()); // 'PT9.58S'
console.log(worldRecord.toString({ fractionalSecondDigits: 1 })); // 'PT9.5S'
console.log(worldRecord.toString({ fractionalSecondDigits: 0 })); // 'PT9S'
console.log(worldRecord.toString({ smallestUnit: "millisecond" })); // 'PT9.580S'
console.log(
  worldRecord.toString({
    fractionalSecondDigits: 1,
    roundingMode: "halfExpand",
  }),
); // 'PT9.6S'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/Duration/toJSON", "Temporal.Duration.prototype.toJSON()")}}
- {{jsxref("Temporal/Duration/toLocaleString", "Temporal.Duration.prototype.toLocaleString()")}}
