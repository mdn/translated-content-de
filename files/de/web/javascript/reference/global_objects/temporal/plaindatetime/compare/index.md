---
title: Temporal.PlainDateTime.compare()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/compare
l10n:
  sourceCommit: 028c0fe110e66173c3f9ce6c3ab1a3db4b2e8df9
---

{{JSRef}}{{SeeCompatTable}}

Die statische Methode **`Temporal.PlainDateTime.compare()`** gibt eine Zahl (-1, 0 oder 1) zurück, die anzeigt, ob das erste Datum-Uhrzeit-Wert vor, gleich oder nach dem zweiten Datum-Uhrzeit-Wert kommt. Dies entspricht zunächst dem Vergleich ihrer Daten und, wenn die Daten gleich sind, dem Vergleich ihrer Uhrzeiten.

## Syntax

```js-nolint
Temporal.PlainDateTime.compare(dateTime1, dateTime2)
```

### Parameter

- `dateTime1`
  - : Ein String, ein Objekt oder eine Instanz von {{jsxref("Temporal.PlainDateTime")}}, die den ersten zu vergleichenden Datum-Uhrzeit-Wert darstellt. Er wird unter Verwendung desselben Algorithmus wie {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} in ein `Temporal.PlainDateTime`-Objekt umgewandelt.
- `dateTime2`
  - : Der zweite zu vergleichende Datum-Uhrzeit-Wert, der unter demselben Algorithmus wie `dateTime1` in ein `Temporal.PlainDateTime`-Objekt umgewandelt wird.

### Rückgabewert

Gibt `-1` zurück, wenn `dateTime1` vor `dateTime2` kommt, `0` wenn sie gleich sind, und `1` wenn `dateTime1` nach `dateTime2` kommt. Sie werden anhand ihrer zugrunde liegenden Datums- und Zeitwerte verglichen, wobei ihre Kalender ignoriert werden.

## Beispiele

### Verwendung von Temporal.PlainDateTime.compare()

```js
const dt1 = Temporal.PlainDateTime.from("2021-08-01T01:00:00");
const dt2 = Temporal.PlainDateTime.from("2021-08-02T00:00:00");
console.log(Temporal.PlainDateTime.compare(dt1, dt2)); // -1

const dt3 = Temporal.PlainDateTime.from("2021-08-01T00:00:00");
console.log(Temporal.PlainDateTime.compare(dt1, dt3)); // 1
```

### Vergleich von Daten in unterschiedlichen Kalendern

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

### Sortieren eines Arrays von Datum-Uhrzeit-Werten

Der Zweck dieser `compare()`-Funktion besteht darin, als Vergleichsfunktion zu dienen, die an {{jsxref("Array.prototype.sort()")}} und verwandte Funktionen übergeben wird.

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
