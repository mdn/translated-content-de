---
title: Temporal.PlainYearMonth.compare()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/compare
l10n:
  sourceCommit: 262c13dcbcd394beddd98e07d9c78bc79ce3513c
---

{{JSRef}}{{SeeCompatTable}}

Die **`Temporal.PlainYearMonth.compare()`** statische Methode gibt eine Zahl (-1, 0 oder 1) zurück, die anzeigt, ob der erste Jahr-Monat vor, gleich oder nach dem zweiten Jahr-Monat liegt. Sie ist äquivalent zum Vergleich ihrer zugrunde liegenden ISO 8601-Daten. Zwei Jahr-Monate aus unterschiedlichen Kalendern können als gleich betrachtet werden, wenn sie am selben ISO-Datum beginnen.

> **Note:** `PlainYearMonth`-Objekte behalten einen Referenz-ISO-Tag, der auch im Vergleich verwendet wird. Dieser Tag wird automatisch gesetzt, wenn Sie die Methode {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} verwenden, kann aber auch manuell über den Konstruktor {{jsxref("Temporal/PlainYearMonth/PlainYearMonth", "Temporal.PlainYearMonth()")}} festgelegt werden. Dadurch können zwei äquivalente Jahr-Monate als unterschiedlich betrachtet werden, wenn sie unterschiedliche Referenztage haben. Aus diesem Grund sollten Sie den Konstruktor direkt vermeiden und stattdessen die `from()`-Methode bevorzugen.

## Syntax

```js-nolint
Temporal.PlainYearMonth.compare(yearMonth1, yearMonth2)
```

### Parameter

- `yearMonth1`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainYearMonth")}}-Instanz, die den ersten Jahr-Monat darstellt, der verglichen werden soll. Sie wird mit demselben Algorithmus in ein `Temporal.PlainYearMonth`-Objekt umgewandelt wie {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}.
- `yearMonth2`
  - : Der zweite Jahr-Monat, der verglichen werden soll, wird mit demselben Algorithmus wie `yearMonth1` in ein `Temporal.PlainYearMonth`-Objekt umgewandelt.

### Rückgabewert

Gibt `-1` zurück, wenn `yearMonth1` vor `yearMonth2` liegt, `0`, wenn beide gleich sind, und `1`, wenn `yearMonth2` nach `yearMonth1` liegt. Sie werden anhand ihrer zugrunde liegenden Datumswerte verglichen (in der Regel der erste Tag des Monats), wobei ihre Kalender ignoriert werden.

## Beispiele

### Verwenden von Temporal.PlainYearMonth.compare()

```js
const ym1 = Temporal.PlainYearMonth.from("2021-08");
const ym2 = Temporal.PlainYearMonth.from("2021-09");
console.log(Temporal.PlainYearMonth.compare(ym1, ym2)); // -1

const ym3 = Temporal.PlainYearMonth.from("2021-07");
console.log(Temporal.PlainYearMonth.compare(ym1, ym3)); // 1
```

### Vergleichen von Jahr-Monaten in verschiedenen Kalendern

```js
const ym1 = Temporal.PlainYearMonth.from({ year: 2021, month: 8 });
const ym2 = Temporal.PlainYearMonth.from({
  year: 2021,
  month: 8,
  calendar: "islamic",
});
const ym3 = Temporal.PlainYearMonth.from({
  year: 2021,
  month: 8,
  calendar: "hebrew",
});
console.log(ym1.toString()); // "2021-08"
console.log(ym2.toString()); // "2582-12-18[u-ca=islamic]"
console.log(ym3.toString()); // "-001739-04-06[u-ca=hebrew]"
console.log(Temporal.PlainYearMonth.compare(ym1, ym2)); // -1
console.log(Temporal.PlainYearMonth.compare(ym1, ym3)); // 1
```

### Sortieren eines Arrays von Jahr-Monaten

Der Zweck dieser `compare()`-Funktion besteht darin, als Vergleichsfunktion zu dienen, die an {{jsxref("Array.prototype.sort()")}} und verwandte Funktionen übergeben werden kann.

```js
const months = [
  Temporal.PlainYearMonth.from({ year: 2021, month: 8 }),
  Temporal.PlainYearMonth.from({
    year: 2021,
    month: 8,
    calendar: "islamic",
  }),
  Temporal.PlainYearMonth.from({ year: 2021, month: 8, calendar: "hebrew" }),
];

months.sort(Temporal.PlainYearMonth.compare);
console.log(months.map((d) => d.toString()));
// [ "-001739-04-06[u-ca=hebrew]", "2021-08", "2582-12-18[u-ca=islamic]" ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainYearMonth")}}
- {{jsxref("Temporal/PlainYearMonth/equals", "Temporal.PlainYearMonth.prototype.equals()")}}
