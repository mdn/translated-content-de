---
title: Temporal.ZonedDateTime.compare()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/compare
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die **`Temporal.ZonedDateTime.compare()`** statische Methode gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob das erste Datum-Uhrzeit-Wert vor, identisch mit oder nach dem zweiten Datum-Uhrzeit-Wert liegt. Sie ist gleichbedeutend mit dem Vergleich der {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "epochNanoseconds")}} der beiden Datum-Uhrzeit-Werte.

## Syntax

```js-nolint
Temporal.ZonedDateTime.compare(dateTime1, dateTime2)
```

### Parameter

- `dateTime1`
  - : Ein String, ein Objekt, oder eine {{jsxref("Temporal.ZonedDateTime")}} Instanz, die den ersten zu vergleichenden Datum-Uhrzeit-Wert darstellt. Es wird mit dem gleichen Algorithmus wie {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} in ein `Temporal.ZonedDateTime`-Objekt konvertiert.
- `dateTime2`
  - : Der zweite zu vergleichende Datum-Uhrzeit-Wert, ebenfalls mit dem gleichen Algorithmus wie `dateTime1` in ein `Temporal.ZonedDateTime`-Objekt konvertiert.

### Rückgabewert

Gibt `-1` zurück, wenn `dateTime1` vor `dateTime2` liegt, `0` wenn sie identisch sind, und `1` wenn `dateTime1` nach `dateTime2` liegt. Sie werden anhand ihrer zugrunde liegenden Instant-Werte verglichen, wobei ihre Kalender oder Zeitzonen ignoriert werden.

## Beispiele

### Verwendung von Temporal.ZonedDateTime.compare()

```js
const dt1 = Temporal.ZonedDateTime.from("2021-08-01T01:00:00[Europe/London]");
const dt2 = Temporal.ZonedDateTime.from("2021-08-02T00:00:00[Europe/London]");
console.log(Temporal.ZonedDateTime.compare(dt1, dt2)); // -1

const dt3 = Temporal.ZonedDateTime.from("2021-08-01T00:00:00[Europe/London]");
console.log(Temporal.ZonedDateTime.compare(dt1, dt3)); // 1
```

### Sortieren eines Arrays von Datum-Uhrzeit-Werten

Der Zweck dieser `compare()`-Funktion ist es, als Comparator zu fungieren, der an {{jsxref("Array.prototype.sort()")}} und verwandte Funktionen übergeben wird.

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

Beachten Sie, dass sie anhand ihrer Instant-Werte verglichen werden. In dem sehr seltenen Fall, dass Sie sie anhand ihrer Wanduhrenzeiten vergleichen möchten, konvertieren Sie sie zuerst in `PlainDateTime`.

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
