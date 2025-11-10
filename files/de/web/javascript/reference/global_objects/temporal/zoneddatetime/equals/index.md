---
title: Temporal.ZonedDateTime.prototype.equals()
short-title: equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/equals
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`equals()`** Methode von {{jsxref("Temporal.ZonedDateTime")}} Instanzen gibt `true` zurück, wenn dieses Datum-Uhrzeit-Objekt einem anderen Datum-Uhrzeit-Objekt gleichwertig ist (in einer Form, die durch {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konvertierbar ist), und `false` andererseits. Sie werden sowohl nach ihren Instant-Werten, Zeitzonen als auch ihren Kalendern verglichen. Daher können zwei Datum-Uhrzeit-Objekte in unterschiedlichen Kalendern oder Zeitzonen durch {{jsxref("Temporal.ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}} als gleich betrachtet werden, aber nicht durch `equals()`.

## Syntax

```js-nolint
equals(other)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.ZonedDateTime")}} Instanz, die das andere Datum-Uhrzeit-Objekt darstellt, das verglichen werden soll. Es wird mit demselben Algorithmus wie {{jsxref("Temporal.ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} in ein `Temporal.ZonedDateTime` Objekt konvertiert.

### Rückgabewert

`true`, wenn dieses Datum-Uhrzeit-Objekt `other` sowohl in ihrem Instant-Wert, in der Zeitzone als auch in ihrem Kalender entspricht, `false` andernfalls.

Beachten Sie, dass die Zeitzonen vor dem Vergleich kanonisiert werden. Wenn ihre [Zeitzonen-IDs](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) sowohl benannt als auch dieselbe Zeitzone identifizieren, dann würden sie als gleich betrachtet, selbst wenn die genauen Namen Aliasse voneinander sein können. Offset-Identifikatoren werden durch die Offset-Werte verglichen, die sie repräsentieren. Offset-Identifikatoren sind niemals gleich benannten Identifikatoren, selbst wenn die benannte Zeitzone immer diesen Offset verwendet.

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
