---
title: Temporal.PlainDate.prototype.valueOf()
short-title: valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/valueOf
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`valueOf()`**-Methode von {{jsxref("Temporal.PlainDate")}} Instanzen wirft einen {{jsxref("TypeError")}}, welcher verhindert, dass `Temporal.PlainDate` Instanzen [implizit zu primitiven Werten konvertiert werden](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion), wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.

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

Da sowohl die [primitive Konversion](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) als auch die [Zahlenkonversion](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) `valueOf()` vor `toString()` aufrufen, würde ein Ausdruck wie `date1 > date2`, falls `valueOf()` nicht vorhanden ist, sie implizit als Strings vergleichen, was unerwartete Ergebnisse haben könnte. Durch das Werfen eines `TypeError` verhindern `Temporal.PlainDate` Instanzen solche impliziten Konversionen. Sie müssen sie explizit mit {{jsxref("Temporal/PlainDate/toString", "Temporal.PlainDate.prototype.toString()")}} in Strings umwandeln oder die statische Methode {{jsxref("Temporal/PlainDate/compare", "Temporal.PlainDate.compare()")}} verwenden, um sie zu vergleichen.

## Beispiele

### Arithmetische und Vergleichsoperationen auf Temporal.PlainDate

Alle arithmetischen und Vergleichsoperationen auf `Temporal.PlainDate`-Instanzen sollten die dedizierten Methoden verwenden oder die Instanzen explizit in primitive Werte umwandeln.

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
