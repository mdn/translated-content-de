---
title: Temporal.PlainDate.compare()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/compare
l10n:
  sourceCommit: 35512ec91d6a464ebee803d20c2d47464c9ce4e7
---

{{JSRef}}{{SeeCompatTable}}

Die statische Methode **`Temporal.PlainDate.compare()`** gibt eine Zahl (-1, 0 oder 1) zurück, die anzeigt, ob das erste Datum vor, gleich oder nach dem zweiten Datum liegt. Dies entspricht dem Vergleich der Jahr-, Monat- und Tag-Felder der zugrunde liegenden ISO 8601-Daten.

## Syntax

```js-nolint
Temporal.PlainDate.compare(date1, date2)
```

### Parameter

- `date1`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainDate")}}-Instanz, die das erste zu vergleichende Datum repräsentiert. Es wird unter Verwendung desselben Algorithmus wie {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} in ein `Temporal.PlainDate`-Objekt umgewandelt.
- `date2`
  - : Das zweite zu vergleichende Datum, das unter Verwendung desselben Algorithmus wie `date1` in ein `Temporal.PlainDate`-Objekt umgewandelt wird.

### Rückgabewert

Gibt `-1` zurück, wenn `date1` vor `date2` liegt, `0`, wenn sie gleich sind, und `1`, wenn `date1` nach `date2` kommt. Sie werden anhand ihrer zugrunde liegenden Datumswerte verglichen, wobei ihre Kalender ignoriert werden.

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

Der Zweck dieser Funktion `compare()` ist es, als Vergleichsfunktion zu dienen, die an {{jsxref("Array.prototype.sort()")}} und verwandte Funktionen übergeben wird.

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
