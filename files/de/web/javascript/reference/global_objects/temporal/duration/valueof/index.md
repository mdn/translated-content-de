---
title: Temporal.Duration.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/valueOf
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`valueOf()`** Methode von {{jsxref("Temporal.Duration")}} Instanzen wirft einen {{jsxref("TypeError")}}, was verhindert, dass `Temporal.Duration` Instanzen [implizit zu primitiven Werten konvertiert](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) werden, wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.

## Syntax

```js-nolint
valueOf()
```

### Parameter

Keine.

### Rückgabewert

Keine.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird immer ausgelöst.

## Beschreibung

Da sowohl die [primitive Konversion](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) als auch die [Zahlenkonversion](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) `valueOf()` vor `toString()` aufrufen, würde, wenn `valueOf()` fehlt, ein Ausdruck wie `duration1 > duration2` sie implizit als Strings vergleichen, was unerwartete Ergebnisse wie `"PT3S" > "PT1M"` haben kann. Durch das Auslösen eines `TypeError` verhindern `Temporal.Duration` Instanzen solche impliziten Konversionen. Sie müssen sie explizit in Zahlen umwandeln, indem Sie {{jsxref("Temporal/Duration/total", "Temporal.Duration.prototype.total()")}} verwenden, oder die statische Methode {{jsxref("Temporal/Duration/compare", "Temporal.Duration.compare()")}} verwenden, um sie zu vergleichen.

## Beispiele

### Arithmetische und Vergleichsoperationen auf Temporal.Duration

Alle arithmetischen und Vergleichsoperationen auf `Temporal.Duration` Instanzen sollten die dedizierten Methoden verwenden oder sie explizit in primitive Werte konvertieren.

```js
const duration1 = Temporal.Duration.from({ seconds: 3 });
const duration2 = Temporal.Duration.from({ minutes: 1 });
duration1 > duration2; // TypeError: can't convert Duration to primitive type
duration1.total("seconds") > duration2.total("seconds"); // false
Temporal.Duration.compare(duration1, duration2); // -1

duration1 + duration2; // TypeError: can't convert Duration to primitive type
duration1.total("seconds") + duration2.total("seconds"); // 63
duration1.add(duration2).toString(); // "PT1M3S"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/Duration/toString", "Temporal.Duration.prototype.toString()")}}
- {{jsxref("Temporal/Duration/toJSON", "Temporal.Duration.prototype.toJSON()")}}
- {{jsxref("Temporal/Duration/toLocaleString", "Temporal.Duration.prototype.toLocaleString()")}}
