---
title: Temporal.PlainTime.compare()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/compare
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die statische Methode **`Temporal.PlainTime.compare()`** gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob die erste Zeit vor, gleich oder nach der zweiten Zeit liegt. Dies entspricht dem Vergleich der Felder Stunde, Minute, Sekunde, Millisekunde, Mikrosekunde und Nanosekunde nacheinander.

## Syntax

```js-nolint
Temporal.PlainTime.compare(time1, time2)
```

### Parameter

- `time1`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainTime")}}-Instanz, die die erste zu vergleichende Zeit darstellt. Sie wird in ein `Temporal.PlainTime`-Objekt umgewandelt, indem derselbe Algorithmus wie bei {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} verwendet wird.
- `time2`
  - : Die zweite zu vergleichende Zeit, umgewandelt in ein `Temporal.PlainTime`-Objekt unter Verwendung desselben Algorithmus wie `time1`.

### Rückgabewert

Gibt `-1` zurück, wenn `time1` vor `time2` liegt, `0`, wenn sie gleich sind, und `1`, wenn `time2` nach `time1` liegt.

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

Der Zweck dieser `compare()`-Funktion besteht darin, als Vergleichsfunktion zu fungieren, die an {{jsxref("Array.prototype.sort()")}} und verwandte Funktionen übergeben wird.

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
