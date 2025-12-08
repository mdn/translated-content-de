---
title: Temporal.Duration.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/toString
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`toString()`**-Methode von {{jsxref("Temporal.Duration")}}-Instanzen gibt einen String zurück, der diese Dauer im [ISO 8601-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#iso_8601_duration_format) darstellt.

## Syntax

```js-nolint
toString()
toString(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das einige oder alle der folgenden Eigenschaften enthält (in der Reihenfolge, in der sie abgerufen und validiert werden):
    - `fractionalSecondDigits` {{optional_inline}}
      - : Entweder eine ganze Zahl von 0 bis 9 oder der String `"auto"`. Der Standardwert ist `"auto"`. Wenn `"auto"`, werden führende Nullen der Bruchteile von Sekunden entfernt. Andernfalls enthält der Bruchteil des Sekundenbestandteils so viele Ziffern, die mit Nullen aufgefüllt oder nach Bedarf gerundet werden.
    - `roundingMode` {{optional_inline}}
      - : Ein String, der angibt, wie die Bruchteile von Sekunden über `fractionalSecondDigits` hinaus gerundet werden sollen. Siehe [`Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). Standardwert ist `"trunc"`.
    - `smallestUnit` {{optional_inline}}
      - : Ein String, der die kleinste Einheit angibt, die in die Ausgabe eingeschlossen werden soll. Mögliche Werte sind `"second"`, `"millisecond"`, `"microsecond"` und `"nanosecond"` oder deren Pluralformen, die den `fractionalSecondDigits`-Werten von `0`, `3`, `6`, `9` entsprechen. Wenn angegeben, wird `fractionalSecondDigits` ignoriert.

### Rückgabewert

Ein String, der die angegebene Dauer im [ISO 8601-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#iso_8601_duration_format) darstellt, wobei die subsekundären Komponenten entsprechend den Optionen formatiert sind. Die Null-Dauer wird als `"PT0S"` dargestellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird geworfen, wenn eine der Optionen ungültig ist.

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
