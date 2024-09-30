---
title: Date.prototype.getDay()
slug: Web/JavaScript/Reference/Global_Objects/Date/getDay
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

Die Methode **`getDay()`** von {{jsxref("Date")}}-Instanzen gibt den Wochentag für dieses Datum gemäß lokaler Zeit zurück, wobei 0 für Sonntag steht. Für den Kalendertag siehe {{jsxref("Date.prototype.getDate()")}}.

{{EmbedInteractiveExample("pages/js/date-getday.html", "shorter")}}

## Syntax

```js-nolint
getDay()
```

### Parameter

Keine.

### Rückgabewert

Eine ganze Zahl zwischen 0 und 6, die den Wochentag für das angegebene Datum gemäß lokaler Zeit darstellt: 0 für Sonntag, 1 für Montag, 2 für Dienstag usw. Gibt `NaN` zurück, wenn das Datum [ungültig ist](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).

## Beschreibung

Der Rückgabewert von `getDay()` ist nullbasiert, was nützlich ist zum Indizieren in Arrays von Tagen, zum Beispiel:

```js
const valentines = new Date("1995-02-14");
const day = valentines.getDay();
const dayNames = ["Sunday", "Monday", "Tuesday" /* , … */];

console.log(dayNames[day]); // "Monday"
```

Allerdings sollten Sie für die Zwecke der Internationalisierung stattdessen {{jsxref("Intl.DateTimeFormat")}} mit dem Parameter `options` verwenden.

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
