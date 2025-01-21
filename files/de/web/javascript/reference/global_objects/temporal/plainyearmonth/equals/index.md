---
title: Temporal.PlainYearMonth.prototype.equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/equals
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die Methode **`equals()`** von {{jsxref("Temporal.PlainYearMonth")}}-Instanzen gibt `true` zurück, wenn dieser Jahr-Monat in seinem Wert einem anderen Jahr-Monat entspricht (in einer Form, die durch {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} umgewandelt werden kann), und `false`, falls nicht. Sie werden sowohl nach ihren zugrunde liegenden ISO-Datumswerten als auch nach ihren Kalendern verglichen. Daher können zwei Jahr-Monate aus verschiedenen Kalendern von {{jsxref("Temporal/PlainYearMonth/compare", "Temporal.PlainYearMonth.compare()")}} als gleich betrachtet werden, nicht jedoch von `equals()`.

> **Note:** `PlainYearMonth`-Objekte verfolgen einen referenzierten ISO-Tag, der ebenfalls im Vergleich verwendet wird. Dieser Tag wird automatisch gesetzt, wenn die Methode {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} verwendet wird, kann jedoch manuell mit dem {{jsxref("Temporal/PlainYearMonth/PlainYearMonth", "Temporal.PlainYearMonth()")}} Konstruktor gesetzt werden. Dies kann dazu führen, dass zwei äquivalente Jahr-Monate als verschieden angesehen werden, wenn sie unterschiedliche Referenztage haben. Aus diesem Grund sollten Sie vermeiden, den Konstruktor direkt zu verwenden und stattdessen die `from()` Methode bevorzugen.

## Syntax

```js-nolint
equals(other)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainYearMonth")}}-Instanz, die den anderen zu vergleichenden Jahr-Monat darstellt. Er wird mit dem gleichen Algorithmus wie {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} in ein `Temporal.PlainYearMonth`-Objekt umgewandelt.

### Rückgabewert

`true`, wenn dieser Jahr-Monat sowohl in seinem Datumswert als auch in seinem Kalender dem `other` entspricht, andernfalls `false`.

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
