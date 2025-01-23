---
title: Temporal.Instant.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/toString
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

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
      - : Entweder eine ganze Zahl von 0 bis 9 oder der String `"auto"`. Der Standardwert ist `"auto"`. Wenn `"auto"`, werden nachfolgende Nullen von den Bruchteilen der Sekunden entfernt. Andernfalls enthält der Bruchteil der Sekundenkomponente so viele Ziffern, wie nötig mit Nullen aufgefüllt oder gerundet werden.
    - `roundingMode` {{optional_inline}}
      - : Ein String, der angibt, wie die Bruchteile der Sekunden über `fractionalSecondDigits` hinaus gerundet werden sollen. Siehe [`Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). Standardmäßig auf `"trunc"`.
    - `smallestUnit` {{optional_inline}}
      - : Ein String, der die kleinste Einheit festlegt, die in der Ausgabe enthalten sein soll. Mögliche Werte sind `"minute"`, `"second"`, `"millisecond"`, `"microsecond"` und `"nanosecond"`, oder deren Pluralformen, die (außer `"minute"`) äquivalent zu `fractionalSecondDigits`-Werten von `0`, `3`, `6`, `9` sind. Wenn angegeben, wird `fractionalSecondDigits` ignoriert.
    - `timeZone` {{optional_inline}}
      - : Entweder ein String oder eine {{jsxref("Temporal.ZonedDateTime")}}-Instanz, die die zu verwendende Zeitzone repräsentiert. Wenn eine `Temporal.ZonedDateTime`-Instanz, wird deren Zeitzone verwendet. Wenn ein String, kann es sich um eine benannte Zeitzonenkennung, eine Offset-Zeitzonenkennung oder einen Datum-Zeit-String mit einer Zeitzonenkennung oder einem Offset handeln (siehe [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) für weitere Informationen). Standard ist `"UTC"`.

### Rückgabewert

Ein String im [RFC 9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant#rfc_9557_format), der diesen Moment unter Verwendung der angegebenen Zeitzone darstellt. Es sind keine Anmerkungen, wie Zeitzonennamen, enthalten.

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
