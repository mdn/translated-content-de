---
title: Temporal.Duration.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/valueOf
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{JSRef}}{{SeeCompatTable}}

Die **`valueOf()`** Methode von {{jsxref("Temporal.Duration")}} Instanzen wirft einen {{jsxref("TypeError")}}, der verhindert, dass `Temporal.Duration` Instanzen [implizit in primitive Typen umgewandelt werden](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion), wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.

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

Da sowohl die [primitive Umwandlung](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) als auch die [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) `valueOf()` vor `toString()` aufrufen, würden Ausdrücke wie `duration1 > duration2` die Instanzen implizit als Zeichenketten vergleichen, wenn `valueOf()` fehlt. Dies könnte zu unerwarteten Ergebnissen führen, wie etwa `"PT3S" > "PT1M"`. Durch das Werfen eines `TypeError` verhindern `Temporal.Duration` Instanzen solche impliziten Umwandlungen. Sie müssen sie explizit in Zahlen umwandeln, indem Sie {{jsxref("Temporal/Duration/total", "Temporal.Duration.prototype.total()")}} verwenden, oder die statische Methode {{jsxref("Temporal/Duration/compare", "Temporal.Duration.compare()")}} verwenden, um sie zu vergleichen.

## Beispiele

### Arithmetische und Vergleichsoperationen bei Temporal.Duration

Alle arithmetischen und Vergleichsoperationen bei `Temporal.Duration` Instanzen sollten die dafür vorgesehenen Methoden verwenden oder diese explizit in primitive Typen umwandeln.

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
