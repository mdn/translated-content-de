---
title: Temporal.Duration.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/toString
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die Methode **`toString()`** von {{jsxref("Temporal.Duration")}} Instanzen gibt eine Zeichenkette zurück, die diese Dauer im [ISO 8601 Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#iso_8601_duration_format) darstellt.

## Syntax

```js-nolint
toString()
toString(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das einige oder alle der folgenden Eigenschaften enthält (in der Reihenfolge, in der sie abgerufen und validiert werden):
    - `fractionalSecondDigits` {{optional_inline}}
      - : Entweder eine Ganzzahl von 0 bis 9 oder die Zeichenkette `"auto"`. Der Standardwert ist `"auto"`. Wenn `"auto"`, werden nachfolgende Nullen aus den Bruchteilen der Sekunden entfernt. Andernfalls enthält der Bruchteilsanteil der Sekundenkomponente so viele Ziffern, aufgefüllt mit Nullen oder gerundet, wie nötig.
    - `roundingMode` {{optional_inline}}
      - : Eine Zeichenkette, die angibt, wie die über `fractionalSecondDigits` hinausgehenden Bruchteilssekundenziffern gerundet werden sollen. Siehe [`Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). Standardmäßig `"trunc"`.
    - `smallestUnit` {{optional_inline}}
      - : Eine Zeichenkette, die die kleinste Einheit angibt, die im Ergebnis enthalten sein soll. Mögliche Werte sind `"second"`, `"millisecond"`, `"microsecond"` und `"nanosecond"` oder ihre Pluralformen, die äquivalent zu `fractionalSecondDigits`-Werten von `0`, `3`, `6`, `9` sind. Falls angegeben, wird `fractionalSecondDigits` ignoriert.

### Rückgabewert

Eine Zeichenkette, die die angegebene Dauer im [ISO 8601 Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#iso_8601_duration_format) darstellt, mit Unterscheidung komponentenspezifischer Formate gemäß den Optionen. Die Null-Dauer wird als `"PT0S"` dargestellt.

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
