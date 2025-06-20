---
title: Temporal.PlainDate.prototype.valueOf()
short-title: valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/valueOf
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`valueOf()`**-Methode von {{jsxref("Temporal.PlainDate")}} Instanzen löst einen {{jsxref("TypeError")}} aus, was verhindert, dass `Temporal.PlainDate`-Instanzen [implizit in Primitive umgewandelt werden](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion), wenn sie in Arithmetik- oder Vergleichsoperatoren verwendet werden.

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

Da sowohl die [primitive Umwandlung](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) als auch die [Zahlumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) `valueOf()` vor `toString()` aufrufen, würde, wenn `valueOf()` fehlt, ein Ausdruck wie `date1 > date2` implizit als String verglichen werden, was zu unerwarteten Ergebnissen führen kann. Durch das Auslösen eines `TypeError` verhindern `Temporal.PlainDate`-Instanzen solche impliziten Umwandlungen. Sie müssen sie explizit in Strings umwandeln, indem Sie {{jsxref("Temporal/PlainDate/toString", "Temporal.PlainDate.prototype.toString()")}} verwenden oder die {{jsxref("Temporal/PlainDate/compare", "Temporal.PlainDate.compare()")}}-Statische Methode zur Vergleich heranziehen.

## Beispiele

### Arithmetische und Vergleichsoperationen auf Temporal.PlainDate

Alle arithmetischen und Vergleichsoperationen auf `Temporal.PlainDate`-Instanzen sollten die dedizierten Methoden verwenden oder sie explizit in Primitive umwandeln.

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
