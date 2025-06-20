---
title: Temporal.PlainDate.prototype.equals()
short-title: equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/equals
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`equals()`** Methode von {{jsxref("Temporal.PlainDate")}} Instanzen gibt `true` zurück, wenn dieses Datum in seinem Wert einem anderen Datum (in einer Form, die durch {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} konvertierbar ist) entspricht, und `false` andernfalls. Sie werden sowohl anhand ihrer Datumswerte als auch ihrer Kalender verglichen, sodass zwei Daten aus verschiedenen Kalendern möglicherweise von {{jsxref("Temporal/PlainDate/compare", "Temporal.PlainDate.compare()")}} als gleich betrachtet werden, jedoch nicht von `equals()`.

## Syntax

```js-nolint
equals(other)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainDate")}} Instanz, die das andere zu vergleichende Datum darstellt. Es wird mithilfe desselben Algorithmus wie {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} in ein `Temporal.PlainDate` Objekt konvertiert.

### Rückgabewert

`true`, wenn dieses Datum sowohl im Datumswert als auch im Kalender `other` entspricht, `false` andernfalls.

## Beispiele

### Verwendung von equals()

```js
const date1 = Temporal.PlainDate.from("2021-08-01");
const date2 = Temporal.PlainDate.from({ year: 2021, month: 8, day: 1 });
console.log(date1.equals(date2)); // true

const date3 = Temporal.PlainDate.from("2021-08-01[u-ca=japanese]");
console.log(date1.equals(date3)); // false

const date4 = Temporal.PlainDate.from("2021-08-02");
console.log(date1.equals(date4)); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal/PlainDate/compare", "Temporal.PlainDate.compare()")}}
