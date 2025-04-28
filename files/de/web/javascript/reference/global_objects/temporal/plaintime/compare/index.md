---
title: Temporal.PlainTime.compare()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/compare
l10n:
  sourceCommit: 028c0fe110e66173c3f9ce6c3ab1a3db4b2e8df9
---

{{JSRef}}{{SeeCompatTable}}

Die statische Methode **`Temporal.PlainTime.compare()`** gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob die erste Zeit vor, zur selben Zeit wie oder nach der zweiten Zeit liegt. Es ist gleichbedeutend damit, die Felder Stunde, Minute, Sekunde, Millisekunde, Mikrosekunde und Nanosekunde nacheinander zu vergleichen.

## Syntax

```js-nolint
Temporal.PlainTime.compare(time1, time2)
```

### Parameter

- `time1`
  - : Ein String, ein Objekt oder eine Instanz von {{jsxref("Temporal.PlainTime")}}, die die erste zu vergleichende Zeit darstellt. Es wird mit demselben Algorithmus wie {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} in ein `Temporal.PlainTime`-Objekt umgewandelt.
- `time2`
  - : Die zweite zu vergleichende Zeit, die mit demselben Algorithmus wie `time1` in ein `Temporal.PlainTime`-Objekt umgewandelt wird.

### Rückgabewert

Gibt `-1` zurück, wenn `time1` vor `time2` liegt, `0` wenn sie gleich sind, und `1` wenn `time1` nach `time2` liegt.

## Beispiele

### Verwendung von Temporal.PlainTime.compare()

```js
const time1 = Temporal.PlainTime.from("12:34:56");
const time2 = Temporal.PlainTime.from("12:34:57");
console.log(Temporal.PlainTime.compare(time1, time2)); // -1

const time3 = Temporal.PlainTime.from("11:34:56");
console.log(Temporal.PlainTime.compare(time1, time3)); // 1
```

### Sortieren eines Arrays von Zeiten

Der Zweck dieser `compare()` Funktion ist es, als Komparator zu dienen, der an {{jsxref("Array.prototype.sort()")}} und verwandte Funktionen übergeben wird.

```js
const times = ["12:34:56", "11:34:56", "12:34:57"];

times.sort(Temporal.PlainTime.compare);
console.log(times);
// [ "11:34:56", "12:34:56", "12:34:57" ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainTime")}}
- {{jsxref("Temporal/PlainTime/equals", "Temporal.PlainTime.prototype.equals()")}}
