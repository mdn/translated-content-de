---
title: Temporal.PlainDateTime.prototype.equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/equals
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die **`equals()`** Methode von {{jsxref("Temporal.PlainDateTime")}} Instanzen gibt `true` zurück, wenn dieses Datum-Uhrzeit-Objekt einem anderen Datum-Uhrzeit-Objekt wertmäßig entspricht (in einer Form, die durch {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDateTime.from()")}} konvertierbar ist), und `false` andernfalls. Sie werden sowohl nach ihren Datums- und Uhrzeitwerten als auch nach ihren Kalendern verglichen, so dass zwei Datum-Uhrzeit-Objekte aus verschiedenen Kalendern durch {{jsxref("Temporal/PlainDateTime/compare", "Temporal.PlainDateTime.compare()")}} als gleich betrachtet werden können, jedoch nicht durch `equals()`.

## Syntax

```js-nolint
equals(other)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainDateTime")}} Instanz, die das andere zu vergleichende Datum-Uhrzeit-Objekt darstellt. Es wird unter Verwendung desselben Algorithmus wie bei {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} in ein `Temporal.PlainDateTime` Objekt konvertiert.

### Rückgabewert

`true`, wenn dieses Datum-Uhrzeit-Objekt im Datum/Uhrzeit-Wert und im Kalender mit `other` gleich ist, andernfalls `false`.

## Beispiele

### Verwendung von equals()

```js
const dt1 = Temporal.PlainDateTime.from("2021-08-01");
const dt2 = Temporal.PlainDateTime.from({ year: 2021, month: 8, day: 1 });
console.log(dt1.equals(dt2)); // true

const dt3 = Temporal.PlainDateTime.from("2021-08-01[u-ca=japanese]");
console.log(dt1.equals(dt3)); // false

const dt4 = Temporal.PlainDateTime.from("2021-08-01T01:00:00");
console.log(dt1.equals(dt4)); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal/PlainDateTime/compare", "Temporal.PlainDateTime.compare()")}}
