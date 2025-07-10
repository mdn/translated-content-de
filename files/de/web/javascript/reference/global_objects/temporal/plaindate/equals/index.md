---
title: Temporal.PlainDate.prototype.equals()
short-title: equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/equals
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die Methode **`equals()`** von Instanzen des {{jsxref("Temporal.PlainDate")}} gibt `true` zurück, wenn dieses Datum in seinem Wert einem anderen Datum entspricht (in einer Form, die durch {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} konvertiert werden kann), und `false` andernfalls. Sie werden sowohl nach ihren Datumswerten als auch nach ihren Kalendern verglichen, sodass zwei Daten aus verschiedenen Kalendern durch {{jsxref("Temporal/PlainDate/compare", "Temporal.PlainDate.compare()")}} als gleich betrachtet werden können, jedoch nicht durch `equals()`.

## Syntax

```js-nolint
equals(other)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainDate")}}-Instanz, die das andere zu vergleichende Datum darstellt. Es wird mithilfe des gleichen Algorithmus wie {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} in ein `Temporal.PlainDate`-Objekt umgewandelt.

### Rückgabewert

`true`, wenn dieses Datum dem `other` sowohl in ihrem Datumswert als auch in ihrem Kalender entspricht, `false` andernfalls.

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
