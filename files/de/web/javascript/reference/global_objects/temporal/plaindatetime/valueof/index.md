---
title: Temporal.PlainDateTime.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/valueOf
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die **`valueOf()`** Methode von {{jsxref("Temporal.PlainDateTime")}} Instanzen wirft einen {{jsxref("TypeError")}}, was verhindert, dass `Temporal.PlainDateTime` Instanzen [implizit in primitive Werte umgewandelt werden](/de/docs/Web/JavaScript/Data_structures#primitive_coercion), wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.

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
  - : Wird immer geworfen.

## Beschreibung

Da sowohl [primitive Umwandlung](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) als auch [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) `valueOf()` vor `toString()` aufrufen, würde in Abwesenheit von `valueOf()` ein Ausdruck wie `dateTime1 > dateTime2` sie implizit als Strings vergleichen, was zu unerwarteten Ergebnissen führen könnte. Indem ein `TypeError` geworfen wird, verhindern `Temporal.PlainDateTime` Instanzen solche impliziten Umwandlungen. Sie müssen diese explizit in Strings umwandeln mithilfe von {{jsxref("Temporal/PlainDateTime/toString", "Temporal.PlainDateTime.prototype.toString()")}}, oder die statische Methode {{jsxref("Temporal/PlainDateTime/compare", "Temporal.PlainDateTime.compare()")}} verwenden, um sie zu vergleichen.

## Beispiele

### Arithmetische und Vergleichsoperationen auf Temporal.PlainDateTime

Alle arithmetischen und Vergleichsoperationen auf `Temporal.PlainDateTime` Instanzen sollten dedizierte Methoden verwenden oder diese explizit in primitive Werte umwandeln.

```js
const dt1 = Temporal.PlainDateTime.from("2022-01-01T00:00:00");
const dt2 = Temporal.PlainDateTime.from("2022-07-01T00:00:00");
dt1 > dt2; // TypeError: can't convert PlainDateTime to primitive type
Temporal.PlainDateTime.compare(dt1, dt2); // -1

dt2 - dt1; // TypeError: can't convert PlainDateTime to primitive type
dt2.since(dt1).toString(); // "P181D"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal/PlainDateTime/toString", "Temporal.PlainDateTime.prototype.toString()")}}
- {{jsxref("Temporal/PlainDateTime/toJSON", "Temporal.PlainDateTime.prototype.toJSON()")}}
- {{jsxref("Temporal/PlainDateTime/toLocaleString", "Temporal.PlainDateTime.prototype.toLocaleString()")}}
