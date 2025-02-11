---
title: Date.prototype.getDay()
slug: Web/JavaScript/Reference/Global_Objects/Date/getDay
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`getDay()`** von {{jsxref("Date")}}-Instanzen gibt den Wochentag für dieses Datum gemäß der lokalen Zeit zurück, wobei 0 für Sonntag steht. Für den Tag des Monats siehe {{jsxref("Date.prototype.getDate()")}}.

{{InteractiveExample("JavaScript Demo: Date.getDay()", "shorter")}}

```js interactive-example
const birthday = new Date("August 19, 1975 23:15:30");
const day1 = birthday.getDay();
// Sunday - Saturday : 0 - 6

console.log(day1);
// Expected output: 2
```

## Syntax

```js-nolint
getDay()
```

### Parameter

Keine.

### Rückgabewert

Eine ganze Zahl zwischen 0 und 6, die den Wochentag für das angegebene Datum gemäß der lokalen Zeit darstellt: 0 für Sonntag, 1 für Montag, 2 für Dienstag, und so weiter. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beschreibung

Der Rückgabewert von `getDay()` ist nullbasiert, was nützlich ist, um beispielsweise auf Arrays von Wochentagen zuzugreifen:

```js
const valentines = new Date("1995-02-14");
const day = valentines.getDay();
const dayNames = ["Sunday", "Monday", "Tuesday" /* , … */];

console.log(dayNames[day]); // "Monday"
```

Für Internationalisierungszwecke sollten Sie jedoch bevorzugt {{jsxref("Intl.DateTimeFormat")}} mit dem Parameter `options` verwenden.

```js
const options = { weekday: "long" };
console.log(new Intl.DateTimeFormat("en-US", options).format(valentines));
// "Monday"
console.log(new Intl.DateTimeFormat("de-DE", options).format(valentines));
// "Montag"
```

## Beispiele

### Verwendung von getDay()

Die Variable `weekday` hat den Wert `1`, basierend auf dem Wert des {{jsxref("Date")}}-Objekts `xmas95`, da der 25. Dezember 1995 ein Montag ist.

```js
const xmas95 = new Date("1995-12-25T23:15:30");
const weekday = xmas95.getDay();

console.log(weekday); // 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.setDate()")}}
