---
title: Date.prototype.getDay()
short-title: getDay()
slug: Web/JavaScript/Reference/Global_Objects/Date/getDay
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`getDay()`**-Methode von Instanzen des {{jsxref("Date")}} gibt den Wochentag für dieses Datum gemäß der Ortszeit zurück, wobei 0 für Sonntag steht. Für den Tag des Monats siehe {{jsxref("Date.prototype.getDate()")}}.

{{InteractiveExample("JavaScript Demo: Date.prototype.getDay()", "shorter")}}

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

Eine ganze Zahl, zwischen 0 und 6, die den Wochentag für das angegebene Datum gemäß der Ortszeit repräsentiert: 0 für Sonntag, 1 für Montag, 2 für Dienstag, und so weiter. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beschreibung

Der Rückgabewert von `getDay()` ist nullbasiert, was nützlich ist, um in Arrays von Tagen zu indexieren, zum Beispiel:

```js
const valentines = new Date("1995-02-14");
const day = valentines.getDay();
const dayNames = ["Sunday", "Monday", "Tuesday" /* , … */];

console.log(dayNames[day]); // "Monday"
```

Für Internationalisierungszwecke sollte jedoch vorzugsweise {{jsxref("Intl.DateTimeFormat")}} mit dem `options`-Parameter verwendet werden.

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
