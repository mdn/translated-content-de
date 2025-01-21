---
title: Temporal.PlainTime.compare()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/compare
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die statische Methode **`Temporal.PlainTime.compare()`** gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob die erste Zeit vor der zweiten Zeit kommt, gleich ist oder nach der zweiten Zeit kommt. Es ist äquivalent zum Vergleichen der Stunde-, Minuten-, Sekunden-, Millisekunden-, Mikrosekunden- und Nanosekundenfelder nacheinander.

## Syntax

```js-nolint
Temporal.PlainTime.compare(time1, time2)
```

### Parameter

- `time1`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainTime")}} Instanz, die die erste Zeit repräsentiert, die verglichen werden soll. Sie wird mit demselben Algorithmus in ein `Temporal.PlainTime` Objekt konvertiert wie {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}.
- `time2`
  - : Die zweite Zeit, die verglichen werden soll, konvertiert in ein `Temporal.PlainTime` Objekt mit demselben Algorithmus wie `time1`.

### Rückgabewert

Gibt `-1` zurück, wenn `time1` vor `time2` kommt, `0`, wenn sie gleich sind, und `1`, wenn `time2` nach der ersten kommt.

## Beispiele

### Verwendung von Temporal.PlainTime.compare()

```js
const time1 = Temporal.PlainTime.from("12:34:56");
const time2 = Temporal.PlainTime.from("12:34:57");
console.log(Temporal.PlainTime.compare(time1, time2)); // -1

const time3 = Temporal.PlainTime.from("11:34:56");
console.log(Temporal.PlainTime.compare(time1, time3)); // 1
```

### Sortieren eines Zeit-Arrays

Der Zweck dieser `compare()` Funktion ist es, als Comparator zu fungieren, der an {{jsxref("Array.prototype.sort()")}} und verwandte Funktionen übergeben wird.

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
