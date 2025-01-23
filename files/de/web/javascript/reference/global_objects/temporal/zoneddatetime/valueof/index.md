---
title: Temporal.ZonedDateTime.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/valueOf
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`valueOf()`**-Methode von {{jsxref("Temporal.ZonedDateTime")}}-Instanzen löst einen {{jsxref("TypeError")}} aus, was verhindert, dass `Temporal.ZonedDateTime`-Instanzen [implizit in primitive Werte umgewandelt werden](/de/docs/Web/JavaScript/Data_structures#primitive_coercion), wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.

## Syntax

```js-nolint
valueOf()
```

### Parameter

Keine.

### Rückgabewert

Keiner.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird immer ausgelöst.

## Beschreibung

Da sowohl [primitive Umwandlungen](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) als auch [Zahlumwandlungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) `valueOf()` vor `toString()` aufrufen, würde bei Abwesenheit von `valueOf()` ein Ausdruck wie `yearMonth1 > yearMonth2` sie implizit als Zeichenketten vergleichen, was zu unerwarteten Ergebnissen führen kann. Indem ein `TypeError` ausgelöst wird, verhindern `Temporal.ZonedDateTime`-Instanzen solche impliziten Umwandlungen. Sie müssen sie explizit mit {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "Temporal.ZonedDateTime.prototype.epochNanoseconds")}} in Zahlen umwandeln oder die statische Methode {{jsxref("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}} verwenden, um sie zu vergleichen.

## Beispiele

### Arithmetische und Vergleichsoperationen mit Temporal.ZonedDateTime

Alle arithmetischen und Vergleichsoperationen mit `Temporal.ZonedDateTime`-Instanzen sollten die dedizierten Methoden verwenden oder sie explizit in primitive Werte umwandeln.

```js
const zdt1 = Temporal.ZonedDateTime.from(
  "2022-01-01T00:00:00[America/New_York]",
);
const zdt2 = Temporal.ZonedDateTime.from(
  "2022-07-01T00:00:00[America/New_York]",
);
zdt1 > zdt2; // TypeError: can't convert ZonedDateTime to primitive type
Temporal.ZonedDateTime.compare(zdt1, zdt2); // -1

zdt2 - zdt1; // TypeError: can't convert ZonedDateTime to primitive type
zdt2.since(zdt1).toString(); // "PT4343H"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/ZonedDateTime/toString", "Temporal.ZonedDateTime.prototype.toString()")}}
- {{jsxref("Temporal/ZonedDateTime/toJSON", "Temporal.ZonedDateTime.prototype.toJSON()")}}
- {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}}
