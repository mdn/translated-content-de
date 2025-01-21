---
title: Temporal.PlainDate.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/valueOf
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die **`valueOf()`**-Methode der {{jsxref("Temporal.PlainDate")}}-Instanzen löst einen {{jsxref("TypeError")}} aus, der verhindert, dass `Temporal.PlainDate`-Instanzen [implizit in primitive Typen konvertiert](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) werden, wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.

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

Da sowohl die [primitive Konversion](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) als auch die [Zahlkonversion](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) `valueOf()` vor `toString()` aufrufen, würde, wenn `valueOf()` nicht vorhanden ist, ein Ausdruck wie `date1 > date2` sie implizit als Strings vergleichen, was unerwartete Ergebnisse haben kann. Durch das Auslösen eines `TypeError` verhindern `Temporal.PlainDate`-Instanzen solche impliziten Konversionen. Sie müssen sie explizit mit {{jsxref("Temporal/PlainDate/toString", "Temporal.PlainDate.prototype.toString()")}} in Strings konvertieren oder die statische Methode {{jsxref("Temporal/PlainDate/compare", "Temporal.PlainDate.compare()")}} verwenden, um sie zu vergleichen.

## Beispiele

### Arithmetische und Vergleichsoperationen mit Temporal.PlainDate

Alle arithmetischen und Vergleichsoperationen mit `Temporal.PlainDate`-Instanzen sollten die dedizierten Methoden verwenden oder sie explizit in primitive Typen konvertieren.

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
