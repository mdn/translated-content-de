---
title: Temporal.ZonedDateTime.prototype.equals()
short-title: equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/equals
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`equals()`** Methode von {{jsxref("Temporal.ZonedDateTime")}} Instanzen gibt `true` zurück, wenn diese Datum-Uhrzeit in Wert einer anderen Datum-Uhrzeit entspricht (in einer Form, die von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konvertierbar ist), und `false` andernfalls. Sie werden sowohl anhand ihrer Instant-Werte, Zeitzonen als auch ihrer Kalender verglichen, sodass zwei Datum-Uhrzeiten aus unterschiedlichen Kalendern oder Zeitzonen möglicherweise von {{jsxref("Temporal.ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}} als gleich betrachtet werden, jedoch nicht von `equals()`.

## Syntax

```js-nolint
equals(other)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.ZonedDateTime")}} Instanz, die die andere Datum-Uhrzeit zum Vergleichen darstellt. Es wird mit dem gleichen Algorithmus wie {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} in ein `Temporal.ZonedDateTime` Objekt umgewandelt.

### Rückgabewert

`true`, wenn diese Datum-Uhrzeit sowohl im Instant-Wert, in der Zeitzone als auch im Kalender gleich `other` ist, andernfalls `false`.

Beachten Sie, dass die Zeitzonen vor dem Vergleich kanonisiert werden. Wenn ihre [Zeitzonen-IDs](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) sowohl benannt sind als auch die gleiche Zeitzone identifizieren, werden sie als gleich angesehen, selbst wenn die genauen Namen möglicherweise Aliase voneinander sind. Offset-Identifikatoren werden anhand der Offset-Werte verglichen, die sie repräsentieren. Offset-Identifikatoren sind niemals gleich benannten Identifikatoren, selbst wenn die benannte Zeitzone immer diesen Offset verwendet.

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

### Testen, ob zwei Zeitzonen-Identifikatoren gleichwertig sind

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
