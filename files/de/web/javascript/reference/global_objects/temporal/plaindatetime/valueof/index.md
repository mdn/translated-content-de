---
title: Temporal.PlainDateTime.prototype.valueOf()
short-title: valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/valueOf
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`valueOf()`**-Methode von {{jsxref("Temporal.PlainDateTime")}}-Instanzen wirft einen {{jsxref("TypeError")}}, der verhindert, dass `Temporal.PlainDateTime`-Instanzen [implizit in primitive Werte umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) werden, wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.

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

Da sowohl die [primitive Umwandlung](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) als auch die [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) `valueOf()` vor `toString()` aufrufen, würde, falls `valueOf()` nicht vorhanden ist, ein Ausdruck wie `dateTime1 > dateTime2` sie implizit als Zeichenketten vergleichen, was zu unerwarteten Ergebnissen führen könnte. Durch das Auslösen eines `TypeError` verhindern `Temporal.PlainDateTime`-Instanzen solche impliziten Umwandlungen. Es ist erforderlich, sie explizit als Zeichenketten zu konvertieren, indem {{jsxref("Temporal/PlainDateTime/toString", "Temporal.PlainDateTime.prototype.toString()")}} verwendet wird, oder die {{jsxref("Temporal/PlainDateTime/compare", "Temporal.PlainDateTime.compare()")}}-statische Methode zu benutzen, um sie zu vergleichen.

## Beispiele

### Arithmetische und Vergleichsoperationen auf Temporal.PlainDateTime

Alle arithmetischen und Vergleichsoperationen auf `Temporal.PlainDateTime`-Instanzen sollten die spezifischen Methoden verwenden oder sie explizit in primitive Werte umwandeln.

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
