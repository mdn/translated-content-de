---
title: Temporal.PlainDate.prototype.valueOf()
short-title: valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/valueOf
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`valueOf()`**-Methode von Instanzen von {{jsxref("Temporal.PlainDate")}} wirft einen {{jsxref("TypeError")}}, was verhindert, dass `Temporal.PlainDate`-Instanzen [implizit in Primitive umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) werden, wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.

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

Da sowohl [primitive Umwandlung](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) als auch [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) `valueOf()` vor `toString()` aufrufen, würde, falls `valueOf()` fehlt, ein Ausdruck wie `date1 > date2` diese implizit als Zeichenfolgen vergleichen, was zu unerwarteten Ergebnissen führen kann. Indem ein `TypeError` geworfen wird, verhindern `Temporal.PlainDate`-Instanzen solche impliziten Umwandlungen. Sie müssen diese ausdrücklich in Zeichenfolgen umwandeln, indem Sie {{jsxref("Temporal/PlainDate/toString", "Temporal.PlainDate.prototype.toString()")}} verwenden, oder die {{jsxref("Temporal/PlainDate/compare", "Temporal.PlainDate.compare()")}}-statische Methode nutzen, um sie zu vergleichen.

## Beispiele

### Arithmetische und Vergleichsoperationen auf Temporal.PlainDate

Alle arithmetischen und Vergleichsoperationen auf `Temporal.PlainDate`-Instanzen sollten die dedizierten Methoden verwenden oder sie ausdrücklich in Primitive umwandeln.

```js
const date1 = Temporal.PlainDate.from("2022-01-01");
const date2 = Temporal.PlainDate.from("2022-07-01");
date1 > date2; // TypeError: can't convert PlainDate to primitive type
Temporal.PlainDate.compare(date1, date2); // -1

date2 - date1; // TypeError: can't convert PlainDate to primitive type
date2.since(date1).toString(); // "P181D"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal/PlainDate/toString", "Temporal.PlainDate.prototype.toString()")}}
- {{jsxref("Temporal/PlainDate/toJSON", "Temporal.PlainDate.prototype.toJSON()")}}
- {{jsxref("Temporal/PlainDate/toLocaleString", "Temporal.PlainDate.prototype.toLocaleString()")}}
