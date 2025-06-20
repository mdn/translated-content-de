---
title: Temporal.Duration.prototype.valueOf()
short-title: valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/valueOf
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`valueOf()`** Methode von {{jsxref("Temporal.Duration")}} Instanzen löst einen {{jsxref("TypeError")}} aus, was verhindert, dass `Temporal.Duration` Instanzen [implizit in primitive Werte umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) werden, wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.

## Syntax

```js-nolint
valueOf()
```

### Parameter

Keine.

### Rückgabewert

Kein.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird immer ausgelöst.

## Beschreibung

Da sowohl [primitive Konvertierung](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) als auch [Zahlenkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) `valueOf()` vor `toString()` aufrufen, würden Ausdrücke wie `duration1 > duration2`, wenn `valueOf()` fehlt, implizit als Zeichenketten verglichen werden. Dies könnte unerwartete Ergebnisse haben, beispielsweise `"PT3S" > "PT1M"`. Durch das Auslösen eines `TypeError` verhindern `Temporal.Duration` Instanzen solche impliziten Konvertierungen. Sie müssen diese explizit in Zahlen umwandeln mit {{jsxref("Temporal/Duration/total", "Temporal.Duration.prototype.total()")}} oder die statische Methode {{jsxref("Temporal/Duration/compare", "Temporal.Duration.compare()")}} verwenden, um sie zu vergleichen.

## Beispiele

### Arithmetische und Vergleichsoperationen auf Temporal.Duration

Alle arithmetischen und Vergleichsoperationen auf `Temporal.Duration` Instanzen sollten die dedizierten Methoden verwenden oder diese explizit in primitive Werte umwandeln.

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
