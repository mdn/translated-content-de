---
title: Temporal.ZonedDateTime.prototype.equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/equals
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`equals()`**-Methode von {{jsxref("Temporal.ZonedDateTime")}} Instanzen gibt `true` zurück, wenn dieses Datum-Zeit gleichwertig ist mit einem anderen Datum-Zeit (in einer Form, die durch {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konvertierbar ist), und `false` andernfalls. Sie werden sowohl nach ihren Instant-Werten, Zeitzonen und Kalender verglichen, so dass zwei Datum-Zeiten aus unterschiedlichen Kalendern oder Zeitzonen durch {{jsxref("Temporal.ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}} als gleich angesehen werden könnten, aber nicht durch `equals()`.

## Syntax

```js-nolint
equals(other)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.ZonedDateTime")}} Instanz, die das andere zu vergleichende Datum-Zeit darstellt. Es wird unter Verwendung des gleichen Algorithmus wie {{jsxref("Temporal.ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} in ein `Temporal.ZonedDateTime`-Objekt konvertiert.

### Rückgabewert

`true`, wenn dieses Datum-Zeit gleich `other` ist, sowohl in ihrem Instant-Wert, der Zeitzone als auch ihrem Kalender, sonst `false`.

Beachten Sie, dass die Zeitzonen vor dem Vergleich kanonisiert werden. Wenn ihre [Zeitzonen-IDs](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) beide benannt sind und dieselbe Zeitzone identifizieren, dann würden sie als gleich betrachtet, auch wenn die genauen Namen möglicherweise Aliase voneinander sind. Offset-Identifikatoren werden nach den Offset-Werten verglichen, die sie repräsentieren. Offset-Identifikatoren werden niemals als gleich zu benannten Identifikatoren verglichen, selbst wenn die benannte Identifikator-Zeitzone immer diesen Offset verwendet.

## Beispiele

### Verwendung von equals()

```js
// Asia/Kolkata and Asia/Calcutta are aliases of each other
const dt1 = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56+05:30[Asia/Kolkata]",
);
const dt2 = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56+05:30[Asia/Calcutta]",
);
console.log(dt1.equals(dt2)); // true

const dt3 = Temporal.ZonedDateTime.from("2021-07-01T12:34:56+05:30[+05:30]");
console.log(dt1.equals(dt3)); // false

const dt4 = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56+05:30[Asia/Kolkata][u-ca=buddhist]",
);
console.log(dt1.equals(dt4)); // false
```

### Testen, ob zwei Zeitzonen-Identifikatoren äquivalent sind

```js
function sameTimeZone(timeZone1, timeZone2) {
  const dt1 = Temporal.ZonedDateTime.from({
    year: 2021,
    month: 7,
    day: 1,
    timeZone: timeZone1,
  });
  const dt2 = Temporal.ZonedDateTime.from({
    year: 2021,
    month: 7,
    day: 1,
    timeZone: timeZone2,
  });
  return dt1.equals(dt2);
}

console.log(sameTimeZone("Asia/Kolkata", "Asia/Calcutta")); // true
console.log(sameTimeZone("Asia/Shanghai", "Asia/Taipei")); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal.ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}}
