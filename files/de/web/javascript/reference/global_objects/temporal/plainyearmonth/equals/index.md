---
title: Temporal.PlainYearMonth.prototype.equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/equals
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`equals()`** Methode von {{jsxref("Temporal.PlainYearMonth")}} Instanzen gibt `true` zurück, wenn dieses Jahr-Monat äquivalent zu einem anderen Jahr-Monat ist (in einer Form, die durch {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} konvertierbar ist), und `false` andernfalls. Sie werden sowohl durch ihre zugrunde liegenden ISO-Datenwerte als auch durch ihre Kalender verglichen. Daher können zwei Jahr-Monate aus verschiedenen Kalendern von {{jsxref("Temporal/PlainYearMonth/compare", "Temporal.PlainYearMonth.compare()")}} als gleich angesehen werden, jedoch nicht von `equals()`.

> **Note:** `PlainYearMonth` Objekte behalten einen Referenz-ISO-Tag bei, der auch im Vergleich verwendet wird. Dieser Tag wird automatisch gesetzt, wenn die {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} Methode verwendet wird, kann jedoch manuell mit dem {{jsxref("Temporal/PlainYearMonth/PlainYearMonth", "Temporal.PlainYearMonth()")}} Konstruktor gesetzt werden, was dazu führen kann, dass zwei äquivalente Jahr-Monate als unterschiedlich angesehen werden, wenn sie unterschiedliche Referenztage haben. Aus diesem Grund sollten Sie die direkte Verwendung des Konstruktors vermeiden und die `from()` Methode bevorzugen.

## Syntax

```js-nolint
equals(other)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainYearMonth")}} Instanz, die das andere Jahr-Monat darstellt, mit dem verglichen werden soll. Es wird mit demselben Algorithmus zu einem `Temporal.PlainYearMonth` Objekt konvertiert wie {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}.

### Rückgabewert

`true`, wenn dieses Jahr-Monat identisch ist zu `other` sowohl in ihrem Datumswert als auch ihrem Kalender, `false` andernfalls.

## Beispiele

### Verwendung von equals()

```js
const ym1 = Temporal.PlainYearMonth.from("2021-08");
const ym2 = Temporal.PlainYearMonth.from({ year: 2021, month: 8 });
console.log(ym1.equals(ym2)); // true

const ym3 = Temporal.PlainYearMonth.from("2021-08-01[u-ca=japanese]");
console.log(ym1.equals(ym3)); // false

const ym4 = Temporal.PlainYearMonth.from("2021-09");
console.log(ym1.equals(ym4)); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainYearMonth")}}
- {{jsxref("Temporal/PlainYearMonth/compare", "Temporal.PlainYearMonth.compare()")}}
