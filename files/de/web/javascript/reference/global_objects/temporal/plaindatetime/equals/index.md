---
title: Temporal.PlainDateTime.prototype.equals()
short-title: equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/equals
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`equals()`** Methode von Instanzen des {{jsxref("Temporal.PlainDateTime")}} liefert `true`, wenn dieser Datum-Zeit-Wert einem anderen Datum-Zeit-Wert (in einer Form, die von {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDateTime.from()")}} konvertierbar ist) gleichwertig ist, andernfalls `false`. Sie werden sowohl durch ihre Datums- und Zeitwerte als auch durch ihre Kalender verglichen. Daher können zwei Datum-Zeit-Werte aus unterschiedlichen Kalendern durch {{jsxref("Temporal/PlainDateTime/compare", "Temporal.PlainDateTime.compare()")}} als gleich angesehen werden, aber nicht durch `equals()`.

## Syntax

```js-nolint
equals(other)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainDateTime")}} Instanz, die den anderen zu vergleichenden Datum-Zeit-Wert darstellt. Er wird unter Verwendung des gleichen Algorithmus wie {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} in ein `Temporal.PlainDateTime`-Objekt konvertiert.

### Rückgabewert

`true`, wenn dieser Datum-Zeit-Wert in seinem Datum/Zeit-Wert und seinem Kalender gleich `other` ist, andernfalls `false`.

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
