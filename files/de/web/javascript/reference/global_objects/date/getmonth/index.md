---
title: Date.prototype.getMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMonth
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}

Die **`getMonth()`**-Methode von {{jsxref("Date")}}-Instanzen gibt den Monat für dieses Datum gemäß der lokalen Zeit zurück, als nullbasierter Wert (wobei null den ersten Monat des Jahres angibt).

{{EmbedInteractiveExample("pages/js/date-getmonth.html", "shorter")}}

## Syntax

```js-nolint
getMonth()
```

### Parameter

Keine.

### Rückgabewert

Ein ganzzahliger Wert, zwischen 0 und 11, der den Monat für das angegebene Datum gemäß der lokalen Zeit darstellt: 0 für Januar, 1 für Februar und so weiter. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beschreibung

Der Rückgabewert von `getMonth()` ist nullbasiert, was nützlich ist zum Indizieren von Arrays von Monaten, zum Beispiel:

```js
const valentines = new Date("1995-02-14");
const month = valentines.getMonth();
const monthNames = ["January", "February", "March" /* , … */];

console.log(monthNames[month]); // "February"
```

Für Internationalisierungszwecke sollten Sie jedoch stattdessen {{jsxref("Intl.DateTimeFormat")}} mit dem `options`-Parameter bevorzugen.

```js
const options = { month: "long" };
console.log(new Intl.DateTimeFormat("en-US", options).format(valentines));
// "February"
console.log(new Intl.DateTimeFormat("de-DE", options).format(valentines));
// "Februar"
```

## Beispiele

### Verwendung von getMonth()

Die `month`-Variable hat den Wert `11`, basierend auf dem Wert des {{jsxref("Date")}}-Objekts `xmas95`.

```js
const xmas95 = new Date("1995-12-25T23:15:30");
const month = xmas95.getMonth();

console.log(month); // 11
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCMonth()")}}
- {{jsxref("Date.prototype.setMonth()")}}
