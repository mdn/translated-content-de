---
title: Temporal.ZonedDateTime.prototype.valueOf()
short-title: valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/valueOf
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`valueOf()`**-Methode von {{jsxref("Temporal.ZonedDateTime")}}-Instanzen löst einen {{jsxref("TypeError")}} aus, was verhindert, dass `Temporal.ZonedDateTime`-Instanzen [implizit in primitive Werte umgewandelt werden](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion), wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.

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

Da sowohl die [primitive Konvertierung](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) als auch die [Zahlenkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) `valueOf()` vor `toString()` aufrufen, würde ohne `valueOf()` ein Ausdruck wie `yearMonth1 > yearMonth2` diese implizit als Zeichenketten vergleichen, was zu unerwarteten Ergebnissen führen könnte. Durch die Auslösung eines `TypeError` verhindern `Temporal.ZonedDateTime`-Instanzen solche impliziten Konvertierungen. Sie müssen sie explizit in Zahlen umwandeln, indem Sie {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "Temporal.ZonedDateTime.prototype.epochNanoseconds")}} verwenden oder die statische Methode {{jsxref("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}} nutzen, um sie zu vergleichen.

## Beispiele

### Arithmetische und Vergleichsoperationen auf Temporal.ZonedDateTime

Alle arithmetischen und Vergleichsoperationen auf `Temporal.ZonedDateTime`-Instanzen sollten die dedizierten Methoden verwenden oder sie explizit in primitive Werte umwandeln.

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
- {{jsxref("Temporal.ZonedDateTime/toJSON", "Temporal.ZonedDateTime.prototype.toJSON()")}}
- {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}}
