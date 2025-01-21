---
title: Temporal.ZonedDateTime.prototype.equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/equals
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die **`equals()`**-Methode von {{jsxref("Temporal.ZonedDateTime")}}-Instanzen gibt `true` zurück, wenn dieser Datumszeitpunkt in Wert einem anderen Datumszeitpunkt entspricht (in einer Form, die von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konvertierbar ist), und `false` andernfalls. Sie werden sowohl nach ihren Instant-Werten, Zeitzonen als auch ihren Kalendern verglichen, sodass zwei Datumszeiten aus verschiedenen Kalendern oder Zeitzonen von {{jsxref("Temporal.ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}} als gleich angesehen werden können, aber nicht von `equals()`.

## Syntax

```js-nolint
equals(other)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.ZonedDateTime")}}-Instanz, die den anderen zu vergleichenden Datumszeitpunkt repräsentiert. Es wird mithilfe des gleichen Algorithmus wie {{jsxref("Temporal.ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} in ein `Temporal.ZonedDateTime`-Objekt konvertiert.

### Rückgabewert

`true`, wenn dieser Datumszeitpunkt `other` sowohl in ihrem Instant-Wert, ihrer Zeitzone als auch ihrem Kalender entspricht, `false` andernfalls.

Beachten Sie, dass die Zeitzonen vor dem Vergleich kanonisiert werden. Wenn ihre [Zeitzonen-IDs](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) beide benannt sind und dieselbe Zeitzone identifizieren, würden sie als gleich angesehen, selbst wenn die genauen Bezeichnungen Aliase voneinander sein könnten. Offset-Identifikatoren werden nach den von ihnen repräsentierten Offset-Werten verglichen. Offset-Identifikatoren werden niemals als gleich zu benannten Identifikatoren verglichen, selbst wenn die Zeitzone des benannten Identifikators immer diesen Offset verwendet.

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
