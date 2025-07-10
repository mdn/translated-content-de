---
title: Temporal.PlainTime.compare()
short-title: compare()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/compare
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die statische Methode **`Temporal.PlainTime.compare()`** gibt eine Zahl zurück (-1, 0 oder 1), die angibt, ob die erste Zeit vor der zweiten Zeit liegt, mit ihr identisch ist oder nach ihr folgt. Sie entspricht dem Vergleich der Felder Stunde, Minute, Sekunde, Millisekunde, Mikrosekunde und Nanosekunde nacheinander.

## Syntax

```js-nolint
Temporal.PlainTime.compare(time1, time2)
```

### Parameter

- `time1`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainTime")}} Instanz, die die erste zu vergleichende Zeit repräsentiert. Diese wird in ein `Temporal.PlainTime` Objekt umgewandelt, unter Verwendung des gleichen Algorithmus wie {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}.
- `time2`
  - : Die zweite zu vergleichende Zeit, die unter Verwendung des gleichen Algorithmus wie `time1` in ein `Temporal.PlainTime` Objekt umgewandelt wird.

### Rückgabewert

Gibt `-1` zurück, wenn `time1` vor `time2` kommt, `0` wenn sie identisch sind, und `1` wenn `time1` nach `time2` kommt.

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

Der Zweck dieser `compare()` Funktion ist es, als Vergleichsfunktion zu dienen, die an {{jsxref("Array.prototype.sort()")}} und verwandte Funktionen übergeben wird.

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
