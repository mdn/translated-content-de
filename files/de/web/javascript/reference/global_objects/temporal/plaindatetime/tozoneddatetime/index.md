---
title: Temporal.PlainDateTime.prototype.toZonedDateTime()
short-title: toZonedDateTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/toZonedDateTime
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`toZonedDateTime()`**-Methode von {{jsxref("Temporal.PlainDateTime")}}-Instanzen gibt eine neue {{jsxref("Temporal.ZonedDateTime")}}-Instanz zurück, die das gleiche Datum-Uhrzeit-Datum wie dieses einfache Datum-Uhrzeit enthält, jedoch in der angegebenen Zeitzone.

## Syntax

```js-nolint
toZonedDateTime(timeZone)
toZonedDateTime(timeZone, options)
```

### Parameter

- `timeZone`
  - : Entweder ein String oder eine {{jsxref("Temporal.ZonedDateTime")}}-Instanz, die die zu verwendende Zeitzone darstellt. Wenn eine `Temporal.ZonedDateTime`-Instanz angegeben wird, wird deren Zeitzone verwendet. Wenn ein String angegeben wird, kann es ein benannter Zeitzonenidentifier, ein Offset-Zeitzonenidentifier oder ein Datum-Uhrzeit-String sein, der einen Zeitzonenidentifier oder ein Offset enthält (siehe [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) für weitere Informationen).
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `disambiguation` {{optional_inline}}
      - : Ein String, der angibt, was zu tun ist, wenn diese einfache Zeit mit null oder mehr als einem Zeitpunkt in der Zeitzone übereinstimmt, üblicherweise aufgrund von Verschiebungen der Sommerzeit. Mögliche Werte sind `"compatible"`, `"earlier"`, `"later"` und `"reject"`. Standardmäßig wird `"compatible"` verwendet. Weitere Informationen zu diesen Werten finden Sie unter [Mehrdeutigkeit und Lücken von lokaler Zeit zu UTC-Zeit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time).

### Rückgabewert

Eine neue {{jsxref("Temporal.ZonedDateTime")}}-Instanz, die das gleiche Datum-Uhrzeit-Datum wie dieses einfache Datum-Uhrzeit enthält, jedoch in der angegebenen Zeitzone.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Eine der Optionen ist ungültig.
    - `timeZone` ist kein gültiger Zeitzonenidentifier.
    - Die Uhrzeit an der Wand ist mehrdeutig in der Zeitzone, und `options.disambiguation` ist auf `"reject"` gesetzt.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn eines der Argumente nicht vom erwarteten Typ ist.

## Beispiele

### Verwenden von toZonedDateTime()

```js
const dt = Temporal.PlainDateTime.from("2021-08-01T12:34:56");
const zdt = dt.toZonedDateTime("America/New_York");
console.log(zdt.toString()); // '2021-08-01T12:34:56-04:00[America/New_York]'

const dt2 = Temporal.PlainDateTime.from("2021-01-01T12:34:56");
const zdt2 = dt2.toZonedDateTime("America/New_York");
console.log(zdt2.toString()); // '2021-01-01T12:34:56-05:00[America/New_York]'
```

### Behandlung von mehrdeutigen Zeiten

Unten haben wir zwei Uhrzeiten, die an der Wand angezeigt werden und die wir in der Zeitzone `America/New_York` interpretieren möchten. Die erste, `dtNotExist`, existierte nie aufgrund einer Vorwärtsverschiebung der Sommerzeit, daher müssen wir zwischen den Zeiten `01:05:00-05:00` oder `03:05:00-04:00` wählen. Die zweite, `dtAmbiguous`, erschien zweimal aufgrund einer Rückwärtsverschiebung der Sommerzeit, daher müssen wir zwischen den Zeiten `01:05:00-04:00` oder `01:05:00-05:00` wählen. Für eine detailliertere Erklärung dieser Situation siehe [Mehrdeutigkeit und Lücken von lokaler Zeit zu UTC-Zeit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time).

```js
const dtNotExist = Temporal.PlainDateTime.from("2024-03-10T02:05:00");
const dtAmbiguous = Temporal.PlainDateTime.from("2024-11-03T01:05:00");

// Default: compatible
console.log(dtNotExist.toZonedDateTime("America/New_York").toString());
// '2024-03-10T03:05:00-04:00[America/New_York]'
console.log(dtAmbiguous.toZonedDateTime("America/New_York").toString());
// '2024-11-03T01:05:00-04:00[America/New_York]'

// Use the earlier time for ambiguous times
console.log(
  dtNotExist
    .toZonedDateTime("America/New_York", { disambiguation: "earlier" })
    .toString(),
);
// '2024-03-10T01:05:00-05:00[America/New_York]'
console.log(
  dtAmbiguous
    .toZonedDateTime("America/New_York", { disambiguation: "earlier" })
    .toString(),
);
// '2024-11-03T01:05:00-04:00[America/New_York]'

// Use the later time for ambiguous times
console.log(
  dtNotExist
    .toZonedDateTime("America/New_York", { disambiguation: "later" })
    .toString(),
);
// '2024-03-10T03:05:00-04:00[America/New_York]'
console.log(
  dtAmbiguous
    .toZonedDateTime("America/New_York", { disambiguation: "later" })
    .toString(),
);
// '2024-11-03T01:05:00-05:00[America/New_York]'

// Throw an error for ambiguous times
dtNotExist.toZonedDateTime("America/New_York", { disambiguation: "reject" });
// RangeError: instant is ambiguous
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/PlainDateTime/toPlainDate", "Temporal.PlainDateTime.prototype.toPlainDate()")}}
- {{jsxref("Temporal/PlainDateTime/toPlainTime", "Temporal.PlainDateTime.prototype.toPlainTime()")}}
- {{jsxref("Temporal/ZonedDateTime/toPlainDateTime", "Temporal.ZonedDateTime.prototype.toPlainDateTime()")}}
