---
title: Temporal.PlainDateTime.compare()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/compare
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`Temporal.PlainDateTime.compare()`** statische Methode gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob der erste Datum-Uhrzeit-Wert vor, gleich oder nach dem zweiten Datum-Uhrzeit-Wert kommt. Dies entspricht einem Vergleich zuerst ihrer Daten, und dann ihrer Zeiten, wenn die Daten gleich sind.

## Syntax

```js-nolint
Temporal.PlainDateTime.compare(dateTime1, dateTime2)
```

### Parameter

- `dateTime1`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainDateTime")}} Instanz, die das erste zu vergleichende Datum-Uhrzeit darstellt. Es wird unter Verwendung desselben Algorithmus in ein `Temporal.PlainDateTime` Objekt konvertiert wie {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}}.
- `dateTime2`
  - : Das zweite zu vergleichende Datum-Uhrzeit, konvertiert in ein `Temporal.PlainDateTime` Objekt unter Verwendung desselben Algorithmus wie `dateTime1`.

### Rückgabewert

Gibt `-1` zurück, wenn `dateTime1` vor `dateTime2` kommt, `0`, wenn sie gleich sind, und `1`, wenn `dateTime2` danach kommt. Sie werden anhand ihrer zugrunde liegenden Datums- und Zeitwerte verglichen, wobei ihre Kalender ignoriert werden.

## Beispiele

### Verwendung von Temporal.PlainDateTime.compare()

```js
const dt1 = Temporal.PlainDateTime.from("2021-08-01T01:00:00");
const dt2 = Temporal.PlainDateTime.from("2021-08-02T00:00:00");
console.log(Temporal.PlainDateTime.compare(dt1, dt2)); // -1

const dt3 = Temporal.PlainDateTime.from("2021-08-01T00:00:00");
console.log(Temporal.PlainDateTime.compare(dt1, dt3)); // 1
```

### Vergleichen von Daten in verschiedenen Kalendern

```js
const dt1 = Temporal.PlainDateTime.from({ year: 2021, month: 8, day: 1 });
const dt2 = Temporal.PlainDateTime.from({
  year: 2021,
  month: 8,
  day: 1,
  calendar: "islamic",
});
const dt3 = Temporal.PlainDateTime.from({
  year: 2021,
  month: 8,
  day: 1,
  calendar: "hebrew",
});
console.log(dt1.toString()); // "2021-08-01T00:00:00"
console.log(dt2.toString()); // "2582-12-17T00:00:00[u-ca=islamic]"
console.log(dt3.toString()); // "-001739-04-06T00:00:00[u-ca=hebrew]"
console.log(Temporal.PlainDateTime.compare(dt1, dt2)); // -1
console.log(Temporal.PlainDateTime.compare(dt1, dt3)); // 1
```

### Sortieren eines Arrays von Datum-Uhrzeiten

Der Zweck dieser `compare()` Funktion besteht darin, als Vergleichsfunktion zu dienen, die an {{jsxref("Array.prototype.sort()")}} und verwandte Funktionen übergeben wird.

```js
const dateTimes = [
  Temporal.PlainDateTime.from("2021-08-01"),
  Temporal.PlainDateTime.from("2021-08-02"),
  Temporal.PlainDateTime.from("2021-08-01T01:00:00"),
];

dateTimes.sort(Temporal.PlainDateTime.compare);
console.log(dateTimes.map((d) => d.toString()));
// [ "2021-08-01T00:00:00", "2021-08-01T01:00:00", "2021-08-02T00:00:00" ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal/PlainDateTime/equals", "Temporal.PlainDateTime.prototype.equals()")}}
