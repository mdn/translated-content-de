---
title: Temporal.PlainDateTime.compare()
short-title: compare()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/compare
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die statische Methode **`Temporal.PlainDateTime.compare()`** gibt eine Zahl (-1, 0 oder 1) zurück, die anzeigt, ob die erste Datumszeit vor der zweiten liegt, gleich ist oder nach der zweiten kommt. Dies entspricht dem Vergleich der Daten und, falls die Daten gleich sind, dem Vergleich der Zeiten.

## Syntax

```js-nolint
Temporal.PlainDateTime.compare(dateTime1, dateTime2)
```

### Parameter

- `dateTime1`
  - : Ein String, ein Objekt oder eine Instanz von {{jsxref("Temporal.PlainDateTime")}}, die die zu vergleichende erste Datumszeit repräsentiert. Es wird in ein `Temporal.PlainDateTime`-Objekt umgewandelt, indem derselbe Algorithmus wie in {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} verwendet wird.
- `dateTime2`
  - : Die zu vergleichende zweite Datumszeit, die mit demselben Algorithmus wie für `dateTime1` in ein `Temporal.PlainDateTime`-Objekt umgewandelt wird.

### Rückgabewert

Gibt `-1` zurück, wenn `dateTime1` vor `dateTime2` liegt, `0` wenn sie gleich sind, und `1` wenn `dateTime1` nach `dateTime2` liegt. Sie werden anhand ihrer zugrunde liegenden Datums- und Zeitwerte verglichen, wobei ihre Kalender ignoriert werden.

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

### Sortieren eines Arrays von Datumszeiten

Der Zweck dieser `compare()`-Funktion besteht darin, als Vergleichsfunktion zu dienen, die an {{jsxref("Array.prototype.sort()")}} und verwandte Funktionen übergeben wird.

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
