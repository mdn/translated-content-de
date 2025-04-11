---
title: Temporal.PlainDateTime.compare()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/compare
l10n:
  sourceCommit: 35512ec91d6a464ebee803d20c2d47464c9ce4e7
---

{{JSRef}}{{SeeCompatTable}}

Die **`Temporal.PlainDateTime.compare()`** statische Methode gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob das erste Datum-Uhrzeit vor, gleich oder nach dem zweiten Datum-Uhrzeit kommt. Entspricht dem Vergleich der Daten zuerst, und dann, wenn die Daten gleich sind, dem Vergleich der Uhrzeiten.

## Syntax

```js-nolint
Temporal.PlainDateTime.compare(dateTime1, dateTime2)
```

### Parameter

- `dateTime1`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainDateTime")}} Instanz, die das erste zu vergleichende Datum-Uhrzeit darstellt. Es wird in ein `Temporal.PlainDateTime` Objekt konvertiert, indem derselbe Algorithmus wie {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} verwendet wird.
- `dateTime2`
  - : Das zweite zu vergleichende Datum-Uhrzeit, wird in ein `Temporal.PlainDateTime` Objekt konvertiert, indem derselbe Algorithmus wie für `dateTime1` verwendet wird.

### Rückgabewert

Gibt `-1` zurück, wenn `dateTime1` vor `dateTime2` liegt, `0` wenn sie gleich sind, und `1` wenn `dateTime2` nach `dateTime1` kommt. Sie werden nach ihren zugrunde liegenden Datums- und Zeitwerten verglichen, wobei ihre Kalender ignoriert werden.

## Beispiele

### Verwendung von Temporal.PlainDateTime.compare()

```js
const dt1 = Temporal.PlainDateTime.from("2021-08-01T01:00:00");
const dt2 = Temporal.PlainDateTime.from("2021-08-02T00:00:00");
console.log(Temporal.PlainDateTime.compare(dt1, dt2)); // -1

const dt3 = Temporal.PlainDateTime.from("2021-08-01T00:00:00");
console.log(Temporal.PlainDateTime.compare(dt1, dt3)); // 1
```

### Vergleich von Daten in verschiedenen Kalendern

```js
const dt1 = Temporal.PlainDateTime.from({ year: 2021, month: 8, day: 1 });
const dt2 = Temporal.PlainDateTime.from({
  year: 2021,
  month: 8,
  day: 1,
  calendar: "islamic-umalqura",
});
const dt3 = Temporal.PlainDateTime.from({
  year: 2021,
  month: 8,
  day: 1,
  calendar: "hebrew",
});
console.log(dt1.toString()); // "2021-08-01T00:00:00"
console.log(dt2.toString()); // "2582-12-17T00:00:00[u-ca=islamic-umalqura]"
console.log(dt3.toString()); // "-001739-04-06T00:00:00[u-ca=hebrew]"
console.log(Temporal.PlainDateTime.compare(dt1, dt2)); // -1
console.log(Temporal.PlainDateTime.compare(dt1, dt3)); // 1
```

### Sortieren eines Arrays von Datum-Uhrzeiten

Der Zweck dieser `compare()` Funktion ist es, als Vergleichsfunktion zu dienen, die an {{jsxref("Array.prototype.sort()")}} und verwandte Funktionen übergeben wird.

```js
const dateTimes = [
  Temporal.PlainDateTime.from("2021-08-01"),
  Temporal.PlainDateTime.from("2021-08-02"),
  Temporal.PlainDateTime.from("2021-08-01T01:00:00"),
];

dateTimes.sort(Temporal.PlainDateTime.compare);
console.log(dateTimes.map((d) => d.toString()));
// [ "2021-08-01T00:00:00", "2021-08-01T01:00:00", "2021-08-02T00:00:00" ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal/PlainDateTime/equals", "Temporal.PlainDateTime.prototype.equals()")}}
