---
title: Temporal.ZonedDateTime.compare()
short-title: compare()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/compare
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **statische Methode `Temporal.ZonedDateTime.compare()`** gibt eine Zahl (-1, 0 oder 1) zurück, die anzeigt, ob das erste Datum-Uhrzeit-Paar vor, gleichzeitig mit oder nach dem zweiten liegt. Es entspricht dem Vergleich der {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "epochNanoseconds")}} der beiden Datum-Uhrzeit-Paare.

## Syntax

```js-nolint
Temporal.ZonedDateTime.compare(dateTime1, dateTime2)
```

### Parameter

- `dateTime1`
  - : Ein String, ein Objekt oder eine Instanz von {{jsxref("Temporal.ZonedDateTime")}}, die das erste zu vergleichende Datum-Uhrzeit-Paar darstellt. Es wird unter Verwendung desselben Algorithmus wie {{jsxref("Temporal.ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} in ein `Temporal.ZonedDateTime`-Objekt konvertiert.
- `dateTime2`
  - : Das zweite zu vergleichende Datum-Uhrzeit-Paar, das unter Verwendung desselben Algorithmus wie `dateTime1` in ein `Temporal.ZonedDateTime`-Objekt konvertiert wird.

### Rückgabewert

Gibt `-1` zurück, wenn `dateTime1` vor `dateTime2` liegt, `0`, wenn sie gleich sind, und `1`, wenn `dateTime1` nach `dateTime2` liegt. Sie werden anhand ihrer zugrunde liegenden Instant-Werte verglichen, wobei ihre Kalender oder Zeitzonen ignoriert werden.

## Beispiele

### Verwendung von Temporal.ZonedDateTime.compare()

```js
const dt1 = Temporal.ZonedDateTime.from("2021-08-01T01:00:00[Europe/London]");
const dt2 = Temporal.ZonedDateTime.from("2021-08-02T00:00:00[Europe/London]");
console.log(Temporal.ZonedDateTime.compare(dt1, dt2)); // -1

const dt3 = Temporal.ZonedDateTime.from("2021-08-01T00:00:00[Europe/London]");
console.log(Temporal.ZonedDateTime.compare(dt1, dt3)); // 1
```

### Sortieren eines Arrays von Datum-Uhrzeit-Paaren

Der Zweck dieser `compare()`-Funktion besteht darin, als Vergleichsfunktion zu dienen, die an {{jsxref("Array.prototype.sort()")}} und verwandte Funktionen übergeben wird.

```js
const dateTimes = [
  Temporal.ZonedDateTime.from("2021-08-01T00:00:00[America/New_York]"),
  Temporal.ZonedDateTime.from("2021-08-01T00:00:00[Asia/Hong_Kong]"),
  Temporal.ZonedDateTime.from("2021-08-01T00:00:00[Europe/London]"),
];

dateTimes.sort(Temporal.ZonedDateTime.compare);
console.log(dateTimes.map((d) => d.toString()));
// [ "2021-08-01T00:00:00+08:00[Asia/Hong_Kong]", "2021-08-01T00:00:00+01:00[Europe/London]", "2021-08-01T00:00:00-04:00[America/New_York]" ]
```

Beachten Sie, dass sie anhand ihrer Instant-Werte verglichen werden. In dem sehr seltenen Fall, dass Sie sie anhand ihrer Wanduhren-Zeiten vergleichen möchten, konvertieren Sie sie zunächst in `PlainDateTime`.

```js
const dateTimes = [
  Temporal.ZonedDateTime.from("2021-08-01T00:00:00[America/New_York]"),
  Temporal.ZonedDateTime.from("2021-08-01T00:00:00[Asia/Hong_Kong]"),
  Temporal.ZonedDateTime.from("2021-08-01T00:00:00[Europe/London]"),
];

dateTimes.sort((a, b) =>
  Temporal.PlainDateTime.compare(a.toPlainDateTime(), b.toPlainDateTime()),
);
console.log(dateTimes.map((d) => d.toString()));
// [ "2021-08-01T00:00:00-04:00[America/New_York]", "2021-08-01T00:00:00+08:00[Asia/Hong_Kong]", "2021-08-01T00:00:00+01:00[Europe/London]" ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal.ZonedDateTime/equals", "Temporal.ZonedDateTime.prototype.equals()")}}
