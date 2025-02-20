---
title: Date.prototype.getMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMonth
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`getMonth()`** von {{jsxref("Date")}}-Instanzen gibt den Monat dieses Datums gemäß der lokalen Zeit als nullbasierten Wert zurück (wobei null den ersten Monat des Jahres angibt).

{{InteractiveExample("JavaScript Demo: Date.getMonth()", "shorter")}}

```js interactive-example
const moonLanding = new Date("July 20, 69 00:20:18");

console.log(moonLanding.getMonth()); // (January gives 0)
// Expected output: 6
```

## Syntax

```js-nolint
getMonth()
```

### Parameter

Keine.

### Rückgabewert

Ein Integer-Wert zwischen 0 und 11, der den Monat für das angegebene Datum gemäß der lokalen Zeit repräsentiert: 0 für Januar, 1 für Februar usw. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beschreibung

Der Rückgabewert von `getMonth()` ist nullbasiert, was nützlich ist, um beispielsweise auf Arrays von Monaten zuzugreifen:

```js
const valentines = new Date("1995-02-14");
const month = valentines.getMonth();
const monthNames = ["January", "February", "March" /* , … */];

console.log(monthNames[month]); // "February"
```

Falls Sie jedoch die Internationalisierung berücksichtigen möchten, sollten Sie stattdessen {{jsxref("Intl.DateTimeFormat")}} mit dem `options`-Parameter verwenden.

```js
const options = { month: "long" };
console.log(new Intl.DateTimeFormat("en-US", options).format(valentines));
// "February"
console.log(new Intl.DateTimeFormat("de-DE", options).format(valentines));
// "Februar"
```

## Beispiele

### Verwendung von getMonth()

Die Variable `month` hat den Wert `11`, basierend auf dem Wert des {{jsxref("Date")}}-Objekts `xmas95`.

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
