---
title: Temporal.PlainYearMonth.compare()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/compare
l10n:
  sourceCommit: 35512ec91d6a464ebee803d20c2d47464c9ce4e7
---

{{JSRef}}{{SeeCompatTable}}

Die statische Methode **`Temporal.PlainYearMonth.compare()`** gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob das erste Jahr-Monat vor, gleich oder nach dem zweiten Jahr-Monat liegt. Dies entspricht dem Vergleich ihrer zugrunde liegenden ISO 8601-Daten. Zwei Jahr-Monate aus verschiedenen Kalendern können als gleich angesehen werden, wenn sie am gleichen ISO-Datum beginnen.

> **Hinweis:** `PlainYearMonth`-Objekte behalten einen Referenz-ISO-Tag, der auch beim Vergleich verwendet wird. Dieser Tag wird automatisch gesetzt, wenn die {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} Methode verwendet wird, kann aber manuell mit dem {{jsxref("Temporal/PlainYearMonth/PlainYearMonth", "Temporal.PlainYearMonth()")}} Konstruktor gesetzt werden. Dadurch können zwei äquivalente Jahr-Monate als unterschiedlich angesehen werden, wenn sie unterschiedliche Referenztage haben. Aus diesem Grund sollten Sie auf die direkte Verwendung des Konstruktors verzichten und die `from()` Methode bevorzugen.

## Syntax

```js-nolint
Temporal.PlainYearMonth.compare(yearMonth1, yearMonth2)
```

### Parameter

- `yearMonth1`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainYearMonth")}} Instanz, die das erste zu vergleichende Jahr-Monat darstellt. Es wird mit demselben Algorithmus wie {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} in ein `Temporal.PlainYearMonth`-Objekt umgewandelt.
- `yearMonth2`
  - : Das zweite zu vergleichende Jahr-Monat, das mit demselben Algorithmus wie `yearMonth1` in ein `Temporal.PlainYearMonth`-Objekt umgewandelt wird.

### Rückgabewert

Gibt `-1` zurück, wenn `yearMonth1` vor `yearMonth2` liegt, `0`, wenn sie gleich sind, und `1`, wenn `yearMonth2` nach `yearMonth1` kommt. Sie werden anhand ihrer zugrunde liegenden Datumswerte (normalerweise der erste Tag des Monats) verglichen, wobei ihre Kalender ignoriert werden.

## Beispiele

### Verwendung von Temporal.PlainYearMonth.compare()

```js
const ym1 = Temporal.PlainYearMonth.from("2021-08");
const ym2 = Temporal.PlainYearMonth.from("2021-09");
console.log(Temporal.PlainYearMonth.compare(ym1, ym2)); // -1

const ym3 = Temporal.PlainYearMonth.from("2021-07");
console.log(Temporal.PlainYearMonth.compare(ym1, ym3)); // 1
```

### Vergleich von Jahr-Monaten in verschiedenen Kalendern

```js
const ym1 = Temporal.PlainYearMonth.from({ year: 2021, month: 8 });
const ym2 = Temporal.PlainYearMonth.from({
  year: 2021,
  month: 8,
  calendar: "islamic-umalqura",
});
const ym3 = Temporal.PlainYearMonth.from({
  year: 2021,
  month: 8,
  calendar: "hebrew",
});
console.log(ym1.toString()); // "2021-08"
console.log(ym2.toString()); // "2582-12-17[u-ca=islamic-umalqura]"
console.log(ym3.toString()); // "-001739-04-06[u-ca=hebrew]"
console.log(Temporal.PlainYearMonth.compare(ym1, ym2)); // -1
console.log(Temporal.PlainYearMonth.compare(ym1, ym3)); // 1
```

### Sortieren eines Arrays von Jahr-Monaten

Der Zweck dieser `compare()` Funktion besteht darin, als Vergleichsfunktion zu dienen, die an {{jsxref("Array.prototype.sort()")}} und verwandte Funktionen übergeben wird.

```js
const months = [
  Temporal.PlainYearMonth.from({ year: 2021, month: 8 }),
  Temporal.PlainYearMonth.from({
    year: 2021,
    month: 8,
    calendar: "islamic-umalqura",
  }),
  Temporal.PlainYearMonth.from({ year: 2021, month: 8, calendar: "hebrew" }),
];

months.sort(Temporal.PlainYearMonth.compare);
console.log(months.map((d) => d.toString()));
// [ "-001739-04-06[u-ca=hebrew]", "2021-08", "2582-12-17[u-ca=islamic-umalqura]" ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainYearMonth")}}
- {{jsxref("Temporal/PlainYearMonth/equals", "Temporal.PlainYearMonth.prototype.equals()")}}
