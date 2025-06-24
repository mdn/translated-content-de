---
title: Temporal.PlainYearMonth.prototype.equals()
short-title: equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/equals
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}{{SeeCompatTable}}

Die **`equals()`** Methode von Instanzen des {{jsxref("Temporal.PlainYearMonth")}} gibt `true` zurück, wenn diese Jahr-Monat-Wert mit einem anderen Jahr-Monat, der durch {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} konvertierbar ist, identisch ist, und `false` ansonsten. Sie werden sowohl anhand ihrer zugrunde liegenden ISO-Datenwerte als auch ihrer Kalender verglichen. Daher können zwei Jahr-Monate aus unterschiedlichen Kalendern von {{jsxref("Temporal/PlainYearMonth/compare", "Temporal.PlainYearMonth.compare()")}} als gleich angesehen werden, aber nicht von `equals()`.

> [!NOTE] > `PlainYearMonth` Objekte verfolgen einen Referenz-ISO-Tag, der ebenfalls im Vergleich verwendet wird. Dieser Tag wird automatisch festgelegt, wenn die Methode {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} verwendet wird, kann aber manuell mit dem {{jsxref("Temporal/PlainYearMonth/PlainYearMonth", "Temporal.PlainYearMonth()")}} Konstruktor festgelegt werden. Dadurch können zwei äquivalente Jahr-Monate als unterschiedlich angesehen werden, wenn sie unterschiedliche Referenztage haben. Aus diesem Grund sollten Sie es vermeiden, den Konstruktor direkt zu verwenden und stattdessen die `from()` Methode bevorzugen.

## Syntax

```js-nolint
equals(other)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainYearMonth")}} Instanz, die das andere Jahr-Monat zum Vergleichen darstellt. Es wird mit demselben Algorithmus in ein `Temporal.PlainYearMonth` Objekt umgewandelt wie {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}.

### Rückgabewert

`true`, wenn dieses Jahr-Monat sowohl in ihrem Datumswert als auch in ihrem Kalender gleich `other` ist, `false` andernfalls.

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
