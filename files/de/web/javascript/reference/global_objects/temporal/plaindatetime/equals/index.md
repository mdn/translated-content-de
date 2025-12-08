---
title: Temporal.PlainDateTime.prototype.equals()
short-title: equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/equals
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`equals()`**-Methode von {{jsxref("Temporal.PlainDateTime")}}-Instanzen gibt `true` zurück, wenn dieser Datum-Uhrzeit-Wert einem anderen Datum-Uhrzeit-Wert (in einer Form, die durch {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDateTime.from()")}} umgewandelt werden kann) gleichwertig ist, und ansonsten `false`. Sie werden sowohl anhand ihrer Datum- und Uhrzeitwerte als auch ihrer Kalender verglichen, daher können zwei Datum-Uhrzeiten aus verschiedenen Kalendern von {{jsxref("Temporal/PlainDateTime/compare", "Temporal.PlainDateTime.compare()")}} als gleich angesehen werden, jedoch nicht von `equals()`.

## Syntax

```js-nolint
equals(other)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainDateTime")}}-Instanz, die die andere zu vergleichende Datum-Uhrzeit darstellt. Diese wird in ein `Temporal.PlainDateTime`-Objekt konvertiert, indem derselbe Algorithmus wie bei {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} verwendet wird.

### Rückgabewert

`true`, wenn diese Datum-Uhrzeit sowohl in ihrem Datum/Uhrzeit-Wert als auch in ihrem Kalender gleich `other` ist, andernfalls `false`.

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
