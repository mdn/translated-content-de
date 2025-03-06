---
title: Temporal.Instant.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/valueOf
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{JSRef}}{{SeeCompatTable}}

Die **`valueOf()`**-Methode von Instanzen des {{jsxref("Temporal.Instant")}} wirft einen {{jsxref("TypeError")}}, was verhindert, dass `Temporal.Instant`-Instanzen [implizit in Primitive umgewandelt werden](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion), wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.

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

Da sowohl die [primitive Umwandlung](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) als auch die [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) `valueOf()` vor `toString()` aufrufen, würde, wenn `valueOf()` fehlt, ein Ausdruck wie `instant1 > instant2` sie implizit als Strings vergleichen, was unerwartete Ergebnisse haben könnte. Indem ein `TypeError` ausgelöst wird, verhindern `Temporal.Instant`-Instanzen solche impliziten Umwandlungen. Sie müssen diese explizit in Zahlen umwandeln, indem Sie {{jsxref("Temporal/Instant/epochNanoseconds", "Temporal.Instant.prototype.epochNanoseconds")}} verwenden, oder die statische Methode {{jsxref("Temporal/Instant/compare", "Temporal.Instant.compare()")}} zur Vermeidung von Vergleichen einsetzen.

## Beispiele

### Arithmetische und Vergleichsoperationen auf Temporal.Instant

Alle arithmetischen und Vergleichsoperationen auf `Temporal.Instant`-Instanzen sollten die speziellen Methoden verwenden oder explizit in Primitive umgewandelt werden.

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
