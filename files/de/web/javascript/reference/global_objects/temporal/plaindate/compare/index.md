---
title: Temporal.PlainDate.compare()
short-title: compare()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/compare
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die statische Methode **`Temporal.PlainDate.compare()`** gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob das erste Datum vor, gleich oder nach dem zweiten Datum liegt. Das entspricht dem Vergleichen der Jahr-, Monat- und Tagesfelder der zugrunde liegenden ISO 8601-Daten.

## Syntax

```js-nolint
Temporal.PlainDate.compare(date1, date2)
```

### Parameter

- `date1`
  - : Ein String, ein Objekt oder eine Instanz von {{jsxref("Temporal.PlainDate")}}, die das erste zu vergleichende Datum darstellt. Es wird in ein `Temporal.PlainDate`-Objekt umgewandelt, indem derselbe Algorithmus wie in {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} verwendet wird.
- `date2`
  - : Das zweite zu vergleichende Datum, das mit demselben Algorithmus wie `date1` in ein `Temporal.PlainDate`-Objekt umgewandelt wird.

### Rückgabewert

Gibt `-1` zurück, wenn `date1` vor `date2` liegt, `0`, wenn sie gleich sind, und `1`, wenn `date1` nach `date2` liegt. Sie werden anhand ihrer zugrunde liegenden Datumswerte verglichen, ohne Berücksichtigung ihrer Kalender.

## Beispiele

### Verwendung von Temporal.PlainDate.compare()

```js
const date1 = Temporal.PlainDate.from("2021-08-01");
const date2 = Temporal.PlainDate.from("2021-08-02");
console.log(Temporal.PlainDate.compare(date1, date2)); // -1

const date3 = Temporal.PlainDate.from("2021-07-31");
console.log(Temporal.PlainDate.compare(date1, date3)); // 1
```

### Vergleich von Daten in verschiedenen Kalendern

```js
const date1 = Temporal.PlainDate.from({ year: 2021, month: 8, day: 1 });
const date2 = Temporal.PlainDate.from({
  year: 2021,
  month: 8,
  day: 1,
  calendar: "islamic-umalqura",
});
const date3 = Temporal.PlainDate.from({
  year: 2021,
  month: 8,
  day: 1,
  calendar: "hebrew",
});
console.log(date1.toString()); // "2021-08-01"
console.log(date2.toString()); // "2582-12-17[u-ca=islamic-umalqura]"
console.log(date3.toString()); // "-001739-04-06[u-ca=hebrew]"
console.log(Temporal.PlainDate.compare(date1, date2)); // -1
console.log(Temporal.PlainDate.compare(date1, date3)); // 1
```

### Sortieren eines Arrays von Daten

Das Ziel dieser `compare()`-Funktion ist es, als Vergleichsfunktion für {{jsxref("Array.prototype.sort()")}} und verwandte Funktionen zu dienen.

```js
const dates = [
  Temporal.PlainDate.from({ year: 2021, month: 8, day: 1 }),
  Temporal.PlainDate.from({
    year: 2021,
    month: 8,
    day: 1,
    calendar: "islamic-umalqura",
  }),
  Temporal.PlainDate.from({ year: 2021, month: 8, day: 1, calendar: "hebrew" }),
];

dates.sort(Temporal.PlainDate.compare);
console.log(dates.map((d) => d.toString()));
// [ "-001739-04-06[u-ca=hebrew]", "2021-08-01", "2582-12-17[u-ca=islamic-umalqura]" ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal/PlainDate/equals", "Temporal.PlainDate.prototype.equals()")}}
