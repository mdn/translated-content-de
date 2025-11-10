---
title: Date.prototype.getMonth()
short-title: getMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMonth
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`getMonth()`**-Methode von {{jsxref("Date")}}-Instanzen gibt den Monat für dieses Datum gemäß der lokalen Zeit als nullbasierter Wert zurück (wobei null den ersten Monat des Jahres angibt).

{{InteractiveExample("JavaScript Demo: Date.prototype.getMonth()", "shorter")}}

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

Eine ganze Zahl zwischen 0 und 11, die den Monat für das angegebene Datum gemäß der lokalen Zeit darstellt: 0 für Januar, 1 für Februar usw. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beschreibung

Der Rückgabewert von `getMonth()` ist nullbasiert, was nützlich ist, um in Arrays von Monaten zu indizieren, zum Beispiel:

```js
const valentines = new Date("1995-02-14");
const month = valentines.getMonth();
const monthNames = ["January", "February", "March" /* , … */];

console.log(monthNames[month]); // "February"
```

Für den Zweck der Internationalisierung sollten Sie jedoch bevorzugt {{jsxref("Intl.DateTimeFormat")}} mit dem `options`-Parameter verwenden.

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
