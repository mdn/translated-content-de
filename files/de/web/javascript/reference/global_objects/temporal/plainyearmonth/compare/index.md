---
title: Temporal.PlainYearMonth.compare()
short-title: compare()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/compare
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}{{SeeCompatTable}}

Die **`Temporal.PlainYearMonth.compare()`** statische Methode liefert eine Zahl (-1, 0 oder 1) zurück, die anzeigt, ob das erste Jahr-Monat vor, gleich oder nach dem zweiten Jahr-Monat kommt. Es ist äquivalent zum Vergleich ihrer zugrunde liegenden ISO 8601-Daten. Zwei Jahr-Monate aus verschiedenen Kalendern können als gleich betrachtet werden, wenn sie am selben ISO-Datum beginnen.

> [!NOTE] > `PlainYearMonth`-Objekte verfolgen einen Referenz-ISO-Tag, der auch im Vergleich verwendet wird. Dieser Tag wird automatisch gesetzt, wenn die {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} Methode verwendet wird, kann aber manuell mit dem {{jsxref("Temporal/PlainYearMonth/PlainYearMonth", "Temporal.PlainYearMonth()")}}-Konstruktor gesetzt werden, wodurch zwei äquivalente Jahr-Monate als verschieden betrachtet werden, wenn sie unterschiedliche Referenztage haben. Aus diesem Grund sollten Sie vermeiden, den Konstruktor direkt zu verwenden und stattdessen die `from()`-Methode bevorzugen.

## Syntax

```js-nolint
Temporal.PlainYearMonth.compare(yearMonth1, yearMonth2)
```

### Parameter

- `yearMonth1`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainYearMonth")}} Instanz, die das erste Jahr-Monat zum Vergleichen darstellt. Es wird mit demselben Algorithmus in ein `Temporal.PlainYearMonth`-Objekt umgewandelt wie {{jsxref("Temporal.PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}.
- `yearMonth2`
  - : Das zweite Jahr-Monat zum Vergleichen, umgewandelt in ein `Temporal.PlainYearMonth`-Objekt mit demselben Algorithmus wie `yearMonth1`.

### Rückgabewert

Gibt `-1` zurück, wenn `yearMonth1` vor `yearMonth2` kommt, `0` wenn sie gleich sind, und `1` wenn `yearMonth1` nach `yearMonth2` kommt. Sie werden anhand ihrer zugrunde liegenden Datumswerte verglichen (normalerweise der erste Tag des Monats), wobei ihre Kalender ignoriert werden.

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

Der Zweck dieser `compare()`-Funktion ist es, als Vergleichsfunktion zu dienen, die an {{jsxref("Array.prototype.sort()")}} und verwandte Funktionen übergeben wird.

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
