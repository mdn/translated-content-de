---
title: Temporal.PlainYearMonth.prototype.valueOf()
short-title: valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/valueOf
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`valueOf()`**-Methode von {{jsxref("Temporal.PlainYearMonth")}}-Instanzen löst einen {{jsxref("TypeError")}} aus, was verhindert, dass `Temporal.PlainYearMonth`-Instanzen bei Verwendung in arithmetischen oder Vergleichsoperationen [implizit in Primitive konvertiert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) werden.

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

Da sowohl die [Primitive Konvertierung](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) als auch die [Zahlenkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) `valueOf()` vor `toString()` aufrufen, würden ohne `valueOf()` Ausdrücke wie `yearMonth1 > yearMonth2` die Objekte implizit als Strings vergleichen, was unerwartete Ergebnisse haben könnte. Indem ein `TypeError` ausgelöst wird, verhindern `Temporal.PlainYearMonth`-Instanzen solche impliziten Konvertierungen. Sie müssen sie explizit mithilfe von {{jsxref("Temporal/PlainYearMonth/toString", "Temporal.PlainYearMonth.prototype.toString()")}} in Strings konvertieren oder die statische Methode {{jsxref("Temporal/PlainYearMonth/compare", "Temporal.PlainYearMonth.compare()")}} verwenden, um sie zu vergleichen.

## Beispiele

### Arithmetische und Vergleichsoperationen auf Temporal.PlainYearMonth

Alle arithmetischen und Vergleichsoperationen auf `Temporal.PlainYearMonth`-Instanzen sollten die dedizierten Methoden verwenden oder diese explizit in Primitive konvertieren.

```js
const ym1 = Temporal.PlainYearMonth.from("2021-01");
const ym2 = Temporal.PlainYearMonth.from("2021-07");
ym1 > ym2; // TypeError: can't convert PlainYearMonth to primitive type
Temporal.PlainYearMonth.compare(ym1, ym2); // -1

ym2 - ym1; // TypeError: can't convert PlainYearMonth to primitive type
ym2.since(ym1).toString(); // "P6M"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainYearMonth")}}
- {{jsxref("Temporal/PlainYearMonth/toString", "Temporal.PlainYearMonth.prototype.toString()")}}
- {{jsxref("Temporal/PlainYearMonth/toJSON", "Temporal.PlainYearMonth.prototype.toJSON()")}}
- {{jsxref("Temporal/PlainYearMonth/toLocaleString", "Temporal.PlainYearMonth.prototype.toLocaleString()")}}
