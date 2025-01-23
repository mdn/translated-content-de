---
title: Temporal.PlainYearMonth.compare()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/compare
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die statische Methode **`Temporal.PlainYearMonth.compare()`** gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob das erste Jahr-Monat vor, gleich oder nach dem zweiten Jahr-Monat kommt. Sie entspricht dem Vergleich ihrer zugrunde liegenden ISO 8601-Daten. Zwei Jahr-Monate aus verschiedenen Kalendern können als gleich angesehen werden, wenn sie am selben ISO-Datum beginnen.

> **Hinweis:** `PlainYearMonth`-Objekte verfolgen einen Referenz-ISO-Tag, der auch im Vergleich verwendet wird. Dieser Tag wird automatisch gesetzt, wenn die Methode {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} verwendet wird, kann aber manuell mit dem {{jsxref("Temporal/PlainYearMonth/PlainYearMonth", "Temporal.PlainYearMonth()")}} Konstruktor gesetzt werden. Dies kann dazu führen, dass zwei äquivalente Jahr-Monate als unterschiedlich angesehen werden, wenn sie unterschiedliche Referenztage haben. Aus diesem Grund sollten Sie es vermeiden, den Konstruktor direkt zu verwenden, und bevorzugen Sie die Verwendung der `from()` Methode.

## Syntax

```js-nolint
Temporal.PlainYearMonth.compare(yearMonth1, yearMonth2)
```

### Parameter

- `yearMonth1`
  - : Ein String, ein Objekt oder eine Instanz von {{jsxref("Temporal.PlainYearMonth")}}, die das erste Jahr-Monat darstellt, das verglichen werden soll. Es wird mit dem gleichen Algorithmus wie {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} in ein `Temporal.PlainYearMonth`-Objekt konvertiert.
- `yearMonth2`
  - : Das zweite Jahr-Monat, das verglichen werden soll, wird mit dem gleichen Algorithmus wie `yearMonth1` in ein `Temporal.PlainYearMonth`-Objekt konvertiert.

### Rückgabewert

Gibt `-1` zurück, wenn `yearMonth1` vor `yearMonth2` kommt, `0` wenn sie gleich sind, und `1` wenn `yearMonth2` danach kommt. Sie werden nach ihren zugrunde liegenden Datumswerten verglichen, wobei ihre Kalender ignoriert werden.

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

Der Zweck dieser `compare()`-Funktion besteht darin, als Comparator zu fungieren, der an {{jsxref("Array.prototype.sort()")}} und verwandte Funktionen übergeben wird.

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
