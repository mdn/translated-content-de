---
title: Temporal.PlainDate.prototype.equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/equals
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die Methode **`equals()`** von {{jsxref("Temporal.PlainDate")}}-Instanzen gibt `true` zurück, wenn dieses Datum gleichwertig zu einem anderen Datum ist (in einer Form, die durch {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} konvertierbar ist), und `false` andernfalls. Sie werden sowohl nach ihren Datumswerten als auch nach ihren Kalendern verglichen, sodass zwei Daten aus verschiedenen Kalendern möglicherweise von {{jsxref("Temporal/PlainDate/compare", "Temporal.PlainDate.compare()")}} als gleich betrachtet werden, aber nicht von `equals()`.

## Syntax

```js-nolint
equals(other)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainDate")}}-Instanz, die das andere zu vergleichende Datum darstellt. Es wird mit demselben Algorithmus wie {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} in ein `Temporal.PlainDate`-Objekt umgewandelt.

### Rückgabewert

`true`, wenn dieses Datum gleich `other` sowohl in ihrem Datumswert als auch in ihrem Kalender ist, sonst `false`.

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
