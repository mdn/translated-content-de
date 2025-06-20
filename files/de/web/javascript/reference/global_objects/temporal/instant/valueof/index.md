---
title: Temporal.Instant.prototype.valueOf()
short-title: valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/valueOf
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`valueOf()`**-Methode von {{jsxref("Temporal.Instant")}}-Instanzen löst einen {{jsxref("TypeError")}} aus, welcher verhindert, dass `Temporal.Instant`-Instanzen [implizit in primitive Werte umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) werden, wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.

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

Da sowohl die [primitive Umwandlung](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) als auch die [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) `valueOf()` vor `toString()` aufrufen, würde eine Aussage wie `instant1 > instant2` sie implizit als Zeichenketten vergleichen, was zu unerwarteten Ergebnissen führen kann, falls `valueOf()` nicht vorhanden ist. Durch das Auslösen eines `TypeError` verhindern `Temporal.Instant`-Instanzen solche impliziten Umwandlungen. Sie müssen diese ausdrücklich in Zahlen umwandeln, indem Sie {{jsxref("Temporal/Instant/epochNanoseconds", "Temporal.Instant.prototype.epochNanoseconds")}} verwenden, oder die statische Methode {{jsxref("Temporal/Instant/compare", "Temporal.Instant.compare()")}} nutzen, um sie zu vergleichen.

## Beispiele

### Arithmetische und Vergleichsoperationen mit Temporal.Instant

Alle arithmetischen und Vergleichsoperationen auf `Temporal.Instant`-Instanzen sollten die vorgesehenen Methoden verwenden oder diese ausdrücklich in primitive Werte umwandeln.

```js
const instant1 = Temporal.Instant.fromEpochMilliseconds(0);
const instant2 = Temporal.Instant.fromEpochMilliseconds(1000);
instant1 > instant2; // TypeError: can't convert Instant to primitive type
instant1.epochNanoseconds > instant2.epochNanoseconds; // false
Temporal.Instant.compare(instant1, instant2); // -1

instant2 - instant1; // TypeError: can't convert Instant to primitive type
instant2.since(instant1).toString(); // "PT1S"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Instant")}}
- {{jsxref("Temporal/Instant/toString", "Temporal.Instant.prototype.toString()")}}
- {{jsxref("Temporal/Instant/toJSON", "Temporal.Instant.prototype.toJSON()")}}
- {{jsxref("Temporal/Instant/toLocaleString", "Temporal.Instant.prototype.toLocaleString()")}}
