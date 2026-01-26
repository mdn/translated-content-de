---
title: Temporal.PlainYearMonth.compare()
short-title: compare()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/compare
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`Temporal.PlainYearMonth.compare()`** statische Methode gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob das erste Jahr-Monat vor, gleich oder nach dem zweiten Jahr-Monat kommt. Es entspricht dem Vergleich ihrer zugrunde liegenden ISO 8601-Daten. Zwei Jahr-Monate aus verschiedenen Kalendern können als gleich angesehen werden, wenn sie am gleichen ISO-Datum beginnen.

> [!NOTE]
> `PlainYearMonth`-Objekte behalten einen Referenz-ISO-Tag bei, der auch im Vergleich verwendet wird. Dieser Tag wird automatisch gesetzt, wenn die {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}-Methode verwendet wird, kann aber manuell mit dem {{jsxref("Temporal/PlainYearMonth/PlainYearMonth", "Temporal.PlainYearMonth()")}}-Konstruktor gesetzt werden, was dazu führen kann, dass zwei äquivalente Jahr-Monate als unterschiedlich angesehen werden, wenn sie unterschiedliche Referenztage haben. Aus diesem Grund sollten Sie es vermeiden, den Konstruktor direkt zu verwenden und stattdessen die `from()`-Methode bevorzugen.

## Syntax

```js-nolint
Temporal.PlainYearMonth.compare(yearMonth1, yearMonth2)
```

### Parameter

- `yearMonth1`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainYearMonth")}}-Instanz, die das erste Jahr-Monat zum Vergleichen darstellt. Es wird mit demselben Algorithmus wie {{jsxref("Temporal.PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} in ein `Temporal.PlainYearMonth`-Objekt konvertiert.
- `yearMonth2`
  - : Das zweite Jahr-Monat, das verglichen werden soll. Es wird mit demselben Algorithmus wie `yearMonth1` in ein `Temporal.PlainYearMonth`-Objekt konvertiert.

### Rückgabewert

Gibt `-1` zurück, wenn `yearMonth1` vor `yearMonth2` kommt, `0`, wenn sie gleich sind, und `1`, wenn `yearMonth1` nach `yearMonth2` kommt. Sie werden nach ihren zugrunde liegenden Datumswerten (normalerweise der erste Tag des Monats) verglichen, ignorieren ihre Kalender.

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

### Sortierung eines Arrays von Jahr-Monaten

Der Zweck dieser `compare()`-Funktion ist es, als Comparator zu fungieren, der an {{jsxref("Array.prototype.sort()")}} und verwandte Funktionen übergeben wird.

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
