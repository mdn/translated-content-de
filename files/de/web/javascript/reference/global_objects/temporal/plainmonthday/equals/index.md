---
title: Temporal.PlainMonthDay.prototype.equals()
short-title: equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/equals
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`equals()`** Methode von {{jsxref("Temporal.PlainMonthDay")}} Instanzen gibt `true` zurück, wenn dieser Monat-Tag im Wert einem anderen Monat-Tag entspricht (in einer Form umwandelbar durch {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}}), und sonst `false`. Sie werden sowohl durch ihre zugrunde liegenden ISO-Datumswerte als auch durch ihre Kalender verglichen.

> **Note:** `PlainMonthDay`-Objekte behalten ein Referenz-ISO-Jahr, das auch in den Vergleich einfließt. Dieses Jahr wird automatisch gesetzt, wenn die Methode {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} verwendet wird, kann aber manuell mit dem {{jsxref("Temporal/PlainMonthDay/PlainMonthDay", "Temporal.PlainMonthDay()")}} Konstruktor gesetzt werden, wodurch zwei äquivalente Monat-Tage als unterschiedlich angesehen werden können, wenn sie unterschiedliche Referenzjahre haben. Aus diesem Grund sollten Sie den Konstruktor nicht direkt verwenden und die `from()` Methode bevorzugen.

## Syntax

```js-nolint
equals(other)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainMonthDay")}} Instanz, die den anderen Monat-Tag darstellt, der verglichen werden soll. Es wird in ein `Temporal.PlainMonthDay` Objekt umgewandelt, indem derselbe Algorithmus wie bei {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} verwendet wird.

### Rückgabewert

`true`, wenn dieser Monat-Tag dem `other` sowohl in seinem Datumswert als auch in seinem Kalender gleich ist, andernfalls `false`.

## Beispiele

### Verwendung von equals()

```js
const md1 = Temporal.PlainMonthDay.from("2021-08-01");
const md2 = Temporal.PlainMonthDay.from({ year: 2020, month: 8, day: 1 }); // Year doesn't matter
console.log(md1.equals(md2)); // true

const md3 = Temporal.PlainMonthDay.from("2021-08-01[u-ca=japanese]");
console.log(md1.equals(md3)); // false

const md4 = Temporal.PlainMonthDay.from("2021-08-02");
console.log(md1.equals(md4)); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainMonthDay")}}
