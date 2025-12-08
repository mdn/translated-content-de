---
title: Temporal.Instant.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/toString
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`toString()`**-Methode von {{jsxref("Temporal.Instant")}}-Instanzen gibt einen String zurück, der diesen Moment im [RFC 9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant#rfc_9557_format) unter Verwendung der angegebenen Zeitzone darstellt.

## Syntax

```js-nolint
toString()
toString(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das einige oder alle der folgenden Eigenschaften enthält (in der Reihenfolge, in der sie abgerufen und validiert werden):
    - `fractionalSecondDigits` {{optional_inline}}
      - : Entweder eine Ganzzahl von 0 bis 9 oder der String `"auto"`. Der Standardwert ist `"auto"`. Wenn `"auto"`, werden nachfolgende Nullen von den Bruchteilen der Sekunden entfernt. Andernfalls enthält der Bruchteil der Sekundenkomponente so viele Stellen, wie angegeben, gepolstert mit Nullen oder bei Bedarf gerundet.
    - `roundingMode` {{optional_inline}}
      - : Ein String, der angibt, wie Bruchteile von Sekundenziffern über `fractionalSecondDigits` hinaus gerundet werden sollen. Siehe [`Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). Standardmäßig `"trunc"`.
    - `smallestUnit` {{optional_inline}}
      - : Ein String, der die kleinste Einheit angibt, die in der Ausgabe enthalten sein soll. Mögliche Werte sind `"minute"`, `"second"`, `"millisecond"`, `"microsecond"` und `"nanosecond"`, oder deren Pluralformen, die (außer `"minute"`) den `fractionalSecondDigits`-Werten von `0`, `3`, `6`, `9` entsprechen. Wenn angegeben, wird `fractionalSecondDigits` ignoriert.
    - `timeZone` {{optional_inline}}
      - : Entweder ein String oder eine {{jsxref("Temporal.ZonedDateTime")}}-Instanz, die die zu verwendende Zeitzone darstellt. Wenn es sich um eine `Temporal.ZonedDateTime`-Instanz handelt, wird deren Zeitzone verwendet. Wenn es ein String ist, kann es sich um einen benannten Zeitzonen-Identifier, einen Offset-Zeitzonen-Identifier oder einen Datum-Uhrzeit-String handeln, der einen Zeitzonen-Identifier oder einen Offset enthält (siehe [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) für mehr Informationen). Standardwert ist `"UTC"`.

### Rückgabewert

Ein String im [RFC 9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant#rfc_9557_format), der diesen Moment unter Verwendung der angegebenen Zeitzone darstellt. Keine Anmerkungen, wie Zeitzonen-Namen, sind enthalten.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.

## Beispiele

### Verwendung von toString()

```js
const instant = Temporal.Instant.fromEpochMilliseconds(1627814412345);
console.log(instant.toString()); // '2021-08-01T10:40:12.345Z'

// Stringification implicitly calls toString()
console.log(`${instant}`); // '2021-08-01T10:40:12.345Z'
```

### Verwendung von Optionen

```js
const instant = Temporal.Instant.fromEpochMilliseconds(1627814412345);
console.log(instant.toString({ fractionalSecondDigits: 1 })); // '2021-08-01T10:40:12.3Z'
console.log(instant.toString({ smallestUnit: "minute" })); // '2021-08-01T10:40Z'
console.log(instant.toString({ timeZone: "America/New_York" })); // '2021-08-01T06:40:12.345-04:00'

// The time zone name automatically resolves to the correct offset
// based on the instant; for example, America/New_York is UTC-4 in summer,
// but UTC-5 in winter.
const instant2 = Temporal.Instant.fromEpochMilliseconds(1577836800000);
console.log(instant2.toString({ timeZone: "UTC" })); // '2029-12-31T23:00:00Z'
console.log(instant2.toString({ timeZone: "America/New_York" })); // '2019-12-31T19:00:00-05:00'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Instant")}}
- {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}}
- {{jsxref("Temporal/Instant/toJSON", "Temporal.Instant.prototype.toJSON()")}}
- {{jsxref("Temporal/Instant/toLocaleString", "Temporal.Instant.prototype.toLocaleString()")}}
