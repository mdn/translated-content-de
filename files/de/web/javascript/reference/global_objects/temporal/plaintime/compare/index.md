---
title: Temporal.PlainTime.compare()
short-title: compare()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/compare
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die statische Methode **`Temporal.PlainTime.compare()`** gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob die erste Uhrzeit vor, gleich oder nach der zweiten Uhrzeit liegt. Dies entspricht dem Vergleichen der Felder Stunde, Minute, Sekunde, Millisekunde, Mikrosekunde und Nanosekunde nacheinander.

## Syntax

```js-nolint
Temporal.PlainTime.compare(time1, time2)
```

### Parameter

- `time1`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainTime")}}-Instanz, die die erste zu vergleichende Uhrzeit repräsentiert. Es wird mit dem gleichen Algorithmus wie {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} in ein `Temporal.PlainTime`-Objekt konvertiert.
- `time2`
  - : Die zweite zu vergleichende Uhrzeit, die mit dem gleichen Algorithmus wie `time1` in ein `Temporal.PlainTime`-Objekt konvertiert wird.

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

### Sortieren eines Arrays von Uhrzeiten

Der Zweck dieser `compare()`-Funktion besteht darin, als Vergleichsfunktion für {{jsxref("Array.prototype.sort()")}} und verwandte Funktionen zu dienen.

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
