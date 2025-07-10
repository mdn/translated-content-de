---
title: Temporal.PlainDateTime.prototype.equals()
short-title: equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/equals
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`equals()`** Methode von {{jsxref("Temporal.PlainDateTime")}} Instanzen gibt `true` zurück, wenn dieses Datum-Uhrzeit-Wert gleichwertig zu einem anderen Datum-Uhrzeit-Wert ist (in einer Form, die durch {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} konvertierbar ist), und `false` ansonsten. Sie werden sowohl durch ihre Datums- und Zeitwerte als auch durch ihre Kalender verglichen, sodass zwei Datum-Uhrzeite aus verschiedenen Kalendern möglicherweise als gleich durch {{jsxref("Temporal/PlainDateTime/compare", "Temporal.PlainDateTime.compare()")}} angesehen werden, jedoch nicht durch `equals()`.

## Syntax

```js-nolint
equals(other)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainDateTime")}} Instanz, die das andere zu vergleichende Datum-Uhrzeit darstellt. Es wird mithilfe des gleichen Algorithmus wie {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} in ein `Temporal.PlainDateTime` Objekt konvertiert.

### Rückgabewert

`true`, wenn diese Datum-Uhrzeit in ihrem Datum/Zeit-Wert und ihrem Kalender dem `other` gleich ist, sonst `false`.

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
