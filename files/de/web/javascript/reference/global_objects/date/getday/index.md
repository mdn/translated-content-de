---
title: Date.prototype.getDay()
slug: Web/JavaScript/Reference/Global_Objects/Date/getDay
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

Die Methode **`getDay()`** von {{jsxref("Date")}}-Instanzen gibt den Wochentag für dieses Datum gemäß der lokalen Zeit zurück, wobei 0 für Sonntag steht. Für den Tag des Monats siehe {{jsxref("Date.prototype.getDate()")}}.

{{EmbedInteractiveExample("pages/js/date-getday.html", "shorter")}}

## Syntax

```js-nolint
getDay()
```

### Parameter

Keine.

### Rückgabewert

Ein ganzzahliger Wert zwischen 0 und 6, der den Wochentag für das angegebene Datum gemäß der lokalen Zeit darstellt: 0 für Sonntag, 1 für Montag, 2 für Dienstag und so weiter. Gibt `NaN` zurück, wenn das Datum [ungültig ist](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).

## Beschreibung

Der Rückgabewert von `getDay()` ist nullbasiert, was nützlich ist, um auf Arrays von Tagen zuzugreifen, wie zum Beispiel:

```js
const valentines = new Date("1995-02-14");
const day = valentines.getDay();
const dayNames = ["Sunday", "Monday", "Tuesday" /* , … */];

console.log(dayNames[day]); // "Monday"
```

Für Internationalisierungszwecke sollten Sie jedoch lieber {{jsxref("Intl.DateTimeFormat")}} mit dem `options` Parameter verwenden.

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
