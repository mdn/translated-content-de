---
title: Temporal.PlainTime.compare()
short-title: compare()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/compare
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`Temporal.PlainTime.compare()`**-statische Methode gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob die erste Zeit vor, identisch mit oder nach der zweiten Zeit liegt. Sie vergleicht der Reihe nach die Felder für Stunde, Minute, Sekunde, Millisekunde, Mikrosekunde und Nanosekunde.

## Syntax

```js-nolint
Temporal.PlainTime.compare(time1, time2)
```

### Parameter

- `time1`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainTime")}}-Instanz, die die erste zu vergleichende Zeit repräsentiert. Diese wird in ein `Temporal.PlainTime`-Objekt umgewandelt, indem der gleiche Algorithmus wie in {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} verwendet wird.
- `time2`
  - : Die zweite zu vergleichende Zeit, ebenfalls in ein `Temporal.PlainTime`-Objekt umgewandelt, mit demselben Algorithmus wie `time1`.

### Rückgabewert

Gibt `-1` zurück, wenn `time1` vor `time2` liegt, `0`, wenn sie gleich sind, und `1`, wenn `time1` nach `time2` liegt.

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

Der Zweck dieser `compare()`-Funktion ist es, als Comparator zu fungieren, der an {{jsxref("Array.prototype.sort()")}} und verwandte Funktionen übergeben werden kann.

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
