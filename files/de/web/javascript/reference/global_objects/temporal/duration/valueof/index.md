---
title: Temporal.Duration.prototype.valueOf()
short-title: valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/valueOf
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`valueOf()`**-Methode von {{jsxref("Temporal.Duration")}}-Instanzen löst einen {{jsxref("TypeError")}} aus, was verhindert, dass `Temporal.Duration`-Instanzen [implizit in primitive Datentypen umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) werden, wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.

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

Da sowohl die [primitive Umwandlung](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) als auch die [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) `valueOf()` vor `toString()` aufrufen, würde bei Abwesenheit von `valueOf()` ein Ausdruck wie `duration1 > duration2` sie implizit als Strings vergleichen, was zu unerwarteten Ergebnissen führen könnte, wie z.B. `"PT3S" > "PT1M"`. Durch das Auslösen eines `TypeError` verhindern `Temporal.Duration`-Instanzen solche impliziten Umwandlungen. Sie müssen sie explizit in Zahlen konvertieren, indem Sie {{jsxref("Temporal/Duration/total", "Temporal.Duration.prototype.total()")}} verwenden, oder Sie verwenden die statische Methode {{jsxref("Temporal/Duration/compare", "Temporal.Duration.compare()")}}, um sie zu vergleichen.

## Beispiele

### Arithmetische und Vergleichsoperationen auf Temporal.Duration

Alle arithmetischen und Vergleichsoperationen auf `Temporal.Duration`-Instanzen sollten die dedizierten Methoden verwenden oder diese explizit in primitive Datentypen umwandeln.

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
