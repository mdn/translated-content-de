---
title: Temporal.PlainDateTime.prototype.toZonedDateTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/toZonedDateTime
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die **`toZonedDateTime()`**-Methode von {{jsxref("Temporal.PlainDateTime")}}-Instanzen gibt eine neue {{jsxref("Temporal.ZonedDateTime")}}-Instanz zurück, die dieselbe Datum-Uhrzeit wie diese Plain-DateTime darstellt, jedoch in der angegebenen Zeitzone.

## Syntax

```js-nolint
toZonedDateTime(timeZone)
toZonedDateTime(timeZone, options)
```

### Parameter

- `timeZone`
  - : Entweder ein String oder eine {{jsxref("Temporal.ZonedDateTime")}}-Instanz, die die zu verwendende Zeitzone darstellt. Wenn es sich um eine `Temporal.ZonedDateTime`-Instanz handelt, wird ihre Zeitzone verwendet. Wenn es sich um einen String handelt, kann es sich um einen benannten Zeitzonenbezeichner, einen Offset-Zeitzonenbezeichner oder einen Datum-Uhrzeit-String mit einem Zeitzonenbezeichner oder einem Offset handeln (siehe [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) für weitere Informationen).
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `disambiguation` {{optional_inline}}
      - : Ein String, der angibt, was zu tun ist, wenn diese Plain-Zeit keiner oder mehreren Instanzen in der Zeitzone entspricht, normalerweise wegen einer Umstellung von Sommerzeit. Mögliche Werte sind `"compatible"`, `"earlier"`, `"later"` und `"reject"`. Standardmäßig `"compatible"`. Für weitere Informationen zu diesen Werten siehe [Zweideutigkeit und Lücken von lokaler Zeit zu UTC-Zeit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time).

### Rückgabewert

Eine neue {{jsxref("Temporal.ZonedDateTime")}}-Instanz, die dieselbe Datum-Uhrzeit wie diese Plain-DateTime darstellt, jedoch in der angegebenen Zeitzone.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist oder wenn `timeZone` kein gültiger Zeitzonenbezeichner ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn ein Argument nicht vom erwarteten Typ ist.

## Beispiele

### Verwendung von toZonedDateTime()

```js
const dt = Temporal.PlainDateTime.from("2021-08-01T12:34:56");
const zdt = dt.toZonedDateTime("America/New_York");
console.log(zdt.toString()); // '2021-08-01T12:34:56-04:00[America/New_York]'

const dt2 = Temporal.PlainDateTime.from("2021-01-01T12:34:56");
const zdt2 = dt2.toZonedDateTime("America/New_York");
console.log(zdt2.toString()); // '2021-01-01T12:34:56-05:00[America/New_York]'
```

### Umgang mit mehrdeutigen Zeiten

Unten finden Sie zwei Wand-Uhrzeiten, die wir in der Zeitzone `America/New_York` interpretieren möchten. Die erste, `dtNotExist`, hat nie existiert aufgrund einer Vorwärtsumstellung der Sommerzeit, daher müssen wir zwischen den Zeiten `01:05:00-05:00` oder `03:05:00-04:00` wählen. Die zweite, `dtAmbiguous`, trat zweimal auf aufgrund einer Rückwärtsumstellung der Sommerzeit, daher müssen wir zwischen den Zeiten `01:05:00-04:00` oder `01:05:00-05:00` wählen. Für eine detailliertere Erklärung dieser Situation siehe [Zweideutigkeit und Lücken von lokaler Zeit zu UTC-Zeit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time).

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
