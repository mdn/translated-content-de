---
title: Temporal.ZonedDateTime.prototype.equals()
short-title: equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/equals
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`equals()`**-Methode von {{jsxref("Temporal.ZonedDateTime")}}-Instanzen gibt `true` zurück, wenn diese Datum-Uhrzeit-Werte gleichwertig zu einem anderen Datum-Uhrzeit-Wert sind (in einer Form, die durch {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konvertierbar ist), und `false` ansonsten. Sie werden sowohl durch ihre Instant-Werte, Zeitzonen und Kalender verglichen. Daher können zwei Datum-Uhrzeiten aus unterschiedlichen Kalendern oder Zeitzonen von {{jsxref("Temporal.ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}} als gleich betrachtet werden, jedoch nicht von `equals()`.

## Syntax

```js-nolint
equals(other)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.ZonedDateTime")}}-Instanz, die das andere zu vergleichende Datum-Uhrzeit repräsentiert. Sie wird mit dem gleichen Algorithmus wie {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} in ein `Temporal.ZonedDateTime`-Objekt konvertiert.

### Rückgabewert

`true` wenn diese Datum-Uhrzeit sowohl in ihren Instant-Werten, Zeitzone und Kalender mit `other` übereinstimmt, `false` ansonsten.

Beachten Sie, dass die Zeitzonen vor dem Vergleich kanonisiert werden. Wenn ihre [Zeitzonen-IDs](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) benannt sind und dieselbe Zeitzone identifizieren, werden sie als gleich angesehen, auch wenn die genauen Namen möglicherweise Aliasse voneinander sind. Offset-Identifikatoren werden durch die von ihnen repräsentierten Offset-Werte verglichen. Offset-Identifikatoren werden niemals als gleich zu benannten Identifikatoren angesehen, selbst wenn die Zeitzone des benannten Identifikators immer diesen Offset verwendet.

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
