---
title: Temporal.PlainDateTime.compare()
short-title: compare()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/compare
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`Temporal.PlainDateTime.compare()`** statische Methode gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob das erste Datum-Zeit vor, gleich oder nach dem zweiten Datum-Zeit kommt. Dies entspricht zuerst dem Vergleich ihrer Daten und dann dem Vergleich ihrer Zeiten, wenn die Daten gleich sind.

## Syntax

```js-nolint
Temporal.PlainDateTime.compare(dateTime1, dateTime2)
```

### Parameter

- `dateTime1`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainDateTime")}} Instanz, die das erste zu vergleichende Datum-Zeit darstellt. Es wird nach dem gleichen Algorithmus wie {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} in ein `Temporal.PlainDateTime` Objekt umgewandelt.
- `dateTime2`
  - : Das zweite zu vergleichende Datum-Zeit, umgewandelt in ein `Temporal.PlainDateTime` Objekt nach dem gleichen Algorithmus wie `dateTime1`.

### Rückgabewert

Gibt `-1` zurück, wenn `dateTime1` vor `dateTime2` kommt, `0`, wenn sie gleich sind, und `1`, wenn `dateTime1` nach `dateTime2` kommt. Sie werden anhand ihrer zugrunde liegenden Daten- und Zeitwerte verglichen, wobei ihre Kalender ignoriert werden.

## Beispiele

### Nutzung von Temporal.PlainDateTime.compare()

```js
const dt1 = Temporal.PlainDateTime.from("2021-08-01T01:00:00");
const dt2 = Temporal.PlainDateTime.from("2021-08-02T00:00:00");
console.log(Temporal.PlainDateTime.compare(dt1, dt2)); // -1

const dt3 = Temporal.PlainDateTime.from("2021-08-01T00:00:00");
console.log(Temporal.PlainDateTime.compare(dt1, dt3)); // 1
```

### Vergleich von Daten in verschiedenen Kalendern

```js
const dt1 = Temporal.PlainDateTime.from({ year: 2021, month: 8, day: 1 });
const dt2 = Temporal.PlainDateTime.from({
  year: 2021,
  month: 8,
  day: 1,
  calendar: "islamic-umalqura",
});
const dt3 = Temporal.PlainDateTime.from({
  year: 2021,
  month: 8,
  day: 1,
  calendar: "hebrew",
});
console.log(dt1.toString()); // "2021-08-01T00:00:00"
console.log(dt2.toString()); // "2582-12-17T00:00:00[u-ca=islamic-umalqura]"
console.log(dt3.toString()); // "-001739-04-06T00:00:00[u-ca=hebrew]"
console.log(Temporal.PlainDateTime.compare(dt1, dt2)); // -1
console.log(Temporal.PlainDateTime.compare(dt1, dt3)); // 1
```

### Sortierung eines Arrays von Datum-Zeit-Werten

Der Zweck dieser `compare()` Funktion ist es, als Vergleicher zu fungieren, der an {{jsxref("Array.prototype.sort()")}} und verwandte Funktionen übergeben wird.

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
