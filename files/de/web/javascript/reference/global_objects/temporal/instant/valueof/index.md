---
title: Temporal.Instant.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/valueOf
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`valueOf()`**-Methode von {{jsxref("Temporal.Instant")}}-Instanzen wirft einen {{jsxref("TypeError")}}, um zu verhindern, dass `Temporal.Instant`-Instanzen [implizit in primitive Werte umgewandelt werden](/de/docs/Web/JavaScript/Data_structures#primitive_coercion), wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.

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

Da sowohl die [primitive Umwandlung](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) als auch die [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) `valueOf()` vor `toString()` aufrufen, würde eine fehlende `valueOf()`-Methode dazu führen, dass ein Ausdruck wie `instant1 > instant2` sie implizit als Strings vergleicht, was unerwartete Ergebnisse haben könnte. Durch das Auslösen eines `TypeError` verhindern `Temporal.Instant`-Instanzen solche impliziten Umwandlungen. Sie müssen sie explizit in Zahlen umwandeln, indem Sie {{jsxref("Temporal/Instant/epochNanoseconds", "Temporal.Instant.prototype.epochNanoseconds")}} verwenden oder die statische Methode {{jsxref("Temporal/Instant/compare", "Temporal.Instant.compare()")}} nutzen, um sie zu vergleichen.

## Beispiele

### Arithmetische und Vergleichsoperationen auf Temporal.Instant

Alle arithmetischen und Vergleichsoperationen auf `Temporal.Instant`-Instanzen sollten die speziellen Methoden verwenden oder sie explizit in primitive Werte umwandeln.

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
