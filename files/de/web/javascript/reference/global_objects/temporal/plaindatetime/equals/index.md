---
title: Temporal.PlainDateTime.prototype.equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/equals
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`equals()`** Methode von {{jsxref("Temporal.PlainDateTime")}} Instanzen gibt `true` zurück, wenn dieses Datum-Uhrzeit-Objekt in seinem Wert mit einem anderen Datum-Uhrzeit-Objekt gleichwertig ist (in einer Form, die durch {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDateTime.from()")}} umwandelbar ist), und `false` andernfalls. Sie werden sowohl nach ihren Datums- und Zeitwerten als auch nach ihren Kalendern verglichen, sodass zwei Datum-Zeit-Angaben aus verschiedenen Kalendern möglicherweise von {{jsxref("Temporal/PlainDateTime/compare", "Temporal.PlainDateTime.compare()")}} als gleich betrachtet werden, jedoch nicht von `equals()`.

## Syntax

```js-nolint
equals(other)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainDateTime")}} Instanz, die das andere Datum-Uhrzeit-Objekt repräsentiert, das verglichen werden soll. Es wird unter Verwendung desselben Algorithmus wie {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} in ein `Temporal.PlainDateTime` Objekt umgewandelt.

### Rückgabewert

`true`, wenn dieses Datum-Uhrzeit-Objekt in seinem Datum/Zeit-Wert und seinem Kalender mit `other` gleich ist, andernfalls `false`.

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
