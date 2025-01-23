---
title: Temporal.ZonedDateTime.compare()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/compare
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die statische Methode **`Temporal.ZonedDateTime.compare()`** gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob die erste Datum-Zeit vor, gleich oder nach der zweiten Datum-Zeit liegt. Sie entspricht dem Vergleich der {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "epochNanoseconds")}} der beiden Datum-Zeiten.

## Syntax

```js-nolint
Temporal.ZonedDateTime.compare(dateTime1, dateTime2)
```

### Parameter

- `dateTime1`
  - : Ein String, ein Objekt oder eine Instanz von {{jsxref("Temporal.ZonedDateTime")}}, die die erste zu vergleichende Datum-Zeit darstellt. Es wird mit demselben Algorithmus wie {{jsxref("Temporal.ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} in ein `Temporal.ZonedDateTime`-Objekt umgewandelt.
- `dateTime2`
  - : Die zweite zu vergleichende Datum-Zeit, die mit demselben Algorithmus wie `dateTime1` in ein `Temporal.ZonedDateTime`-Objekt umgewandelt wird.

### Rückgabewert

Gibt `-1` zurück, wenn `dateTime1` vor `dateTime2` liegt, `0`, wenn sie gleich sind, und `1`, wenn `dateTime2` nach `dateTime1` kommt. Sie werden anhand ihrer zugrundeliegenden Instant-Werte verglichen, wobei ihre Kalender oder Zeitzonen ignoriert werden.

## Beispiele

### Verwendung von Temporal.ZonedDateTime.compare()

```js
const dt1 = Temporal.ZonedDateTime.from("2021-08-01T01:00:00[Europe/London]");
const dt2 = Temporal.ZonedDateTime.from("2021-08-02T00:00:00[Europe/London]");
console.log(Temporal.ZonedDateTime.compare(dt1, dt2)); // -1

const dt3 = Temporal.ZonedDateTime.from("2021-08-01T00:00:00[Europe/London]");
console.log(Temporal.ZonedDateTime.compare(dt1, dt3)); // 1
```

### Sortieren eines Arrays von Datum-Zeiten

Der Zweck dieser `compare()`-Funktion besteht darin, als Komparator zu dienen, der an {{jsxref("Array.prototype.sort()")}} und verwandte Funktionen übergeben wird.

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

Beachten Sie, dass sie nach ihren Instant-Werten verglichen werden. In dem sehr seltenen Fall, dass Sie sie nach ihren Wanduhrenzeiten vergleichen wollen, konvertieren Sie sie zuerst in `PlainDateTime`.

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
