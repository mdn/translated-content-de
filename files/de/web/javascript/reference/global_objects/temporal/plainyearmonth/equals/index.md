---
title: Temporal.PlainYearMonth.prototype.equals()
short-title: equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/equals
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die Methode **`equals()`** von {{jsxref("Temporal.PlainYearMonth")}} Instanzen gibt `true` zurück, wenn dieses Jahr-Monat im Wert einem anderen Jahr-Monat (in einer Form, die durch {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} konvertierbar ist) entspricht, und ansonsten `false`. Sie werden sowohl anhand ihrer zugrunde liegenden ISO-Datenwerte als auch ihrer Kalender verglichen, sodass zwei Jahr-Monate aus unterschiedlichen Kalendern möglicherweise von {{jsxref("Temporal/PlainYearMonth/compare", "Temporal.PlainYearMonth.compare()")}} als gleich angesehen werden, aber nicht von `equals()`.

> [!NOTE]
> `PlainYearMonth`-Objekte verfolgen einen Referenz-ISO-Tag, der ebenfalls im Vergleich verwendet wird. Dieser Tag wird automatisch gesetzt, wenn Sie die Methode {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} verwenden, kann aber manuell über den Konstruktor {{jsxref("Temporal/PlainYearMonth/PlainYearMonth", "Temporal.PlainYearMonth()")}} gesetzt werden, wodurch zwei gleichwertige Jahr-Monate als unterschiedlich angesehen werden, wenn sie unterschiedliche Referenztage haben. Aus diesem Grund sollten Sie es vermeiden, den Konstruktor direkt zu verwenden, und die `from()` Methode bevorzugen.

## Syntax

```js-nolint
equals(other)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainYearMonth")}} Instanz, die das andere Jahr-Monat zum Vergleichen darstellt. Es wird mithilfe des gleichen Algorithmus wie {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} in ein `Temporal.PlainYearMonth` Objekt umgewandelt.

### Rückgabewert

`true`, wenn dieses Jahr-Monat `other` sowohl in ihrem Datum als auch ihrem Kalender entspricht, `false` ansonsten.

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
