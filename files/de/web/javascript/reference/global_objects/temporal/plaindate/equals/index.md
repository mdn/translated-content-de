---
title: Temporal.PlainDate.prototype.equals()
short-title: equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/equals
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`equals()`** Methode von {{jsxref("Temporal.PlainDate")}} Instanzen gibt `true` zurück, wenn dieses Datum im Wert einem anderen Datum (in einer Form, die durch {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} konvertierbar ist) entspricht, und andernfalls `false`. Sie werden sowohl nach ihren Datumswerten als auch nach ihren Kalendern verglichen, sodass zwei Daten aus unterschiedlichen Kalendern von {{jsxref("Temporal/PlainDate/compare", "Temporal.PlainDate.compare()")}} als gleich betrachtet werden können, aber nicht von `equals()`.

## Syntax

```js-nolint
equals(other)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainDate")}} Instanz, die das andere zu vergleichende Datum repräsentiert. Es wird mit demselben Algorithmus wie {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} in ein `Temporal.PlainDate` Objekt umgewandelt.

### Rückgabewert

`true`, wenn dieses Datum sowohl im Datumswert als auch im Kalender gleich `other` ist, andernfalls `false`.

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
