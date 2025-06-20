---
title: Temporal.PlainYearMonth.prototype.equals()
short-title: equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/equals
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`equals()`**-Methode von {{jsxref("Temporal.PlainYearMonth")}}-Instanzen gibt `true` zurück, wenn dieser Jahr-Monat einem anderen Jahr-Monat wertmäßig entspricht (in einer Form, die durch {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} konvertierbar ist), und `false` andernfalls. Sie werden sowohl anhand ihrer zugrunde liegenden ISO-Datumwerte als auch ihrer Kalender verglichen. Daher können zwei Jahr-Monate aus verschiedenen Kalendern durch {{jsxref("Temporal/PlainYearMonth/compare", "Temporal.PlainYearMonth.compare()")}} als gleich angesehen werden, aber nicht durch `equals()`.

> **Hinweis:** `PlainYearMonth`-Objekte behalten einen referenzierten ISO-Tag im Auge, der ebenfalls im Vergleich verwendet wird. Dieser Tag wird automatisch festgelegt, wenn die {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}-Methode verwendet wird, kann aber manuell mit dem {{jsxref("Temporal/PlainYearMonth/PlainYearMonth", "Temporal.PlainYearMonth()")}}-Konstruktor festgelegt werden, was dazu führen kann, dass zwei gleichwertige Jahr-Monate als unterschiedlich angesehen werden, wenn sie unterschiedliche Referenztage haben. Aus diesem Grund sollten Sie vermeiden, den Konstruktor direkt zu verwenden, und die `from()`-Methode bevorzugen.

## Syntax

```js-nolint
equals(other)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainYearMonth")}}-Instanz, die den anderen Jahr-Monat repräsentiert, der verglichen werden soll. Er wird mit demselben Algorithmus in ein `Temporal.PlainYearMonth`-Objekt konvertiert wie {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}.

### Rückgabewert

`true`, wenn dieser Jahr-Monat gleich `other` sowohl in ihrem Datumwert als auch in ihrem Kalender ist, andernfalls `false`.

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
