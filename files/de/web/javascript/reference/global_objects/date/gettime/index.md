---
title: Date.prototype.getTime()
short-title: getTime()
slug: Web/JavaScript/Reference/Global_Objects/Date/getTime
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`getTime()`** Methode von {{jsxref("Date")}} Instanzen gibt die Anzahl der Millisekunden seit dem [Epoche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) für dieses Datum zurück, das als Mitternacht zu Beginn des 1. Januar 1970, UTC, definiert ist.

{{InteractiveExample("JavaScript Demo: Date.prototype.getTime()", "shorter")}}

```js interactive-example
const moonLanding = new Date("July 20, 69 20:17:40 GMT+00:00");

// Milliseconds since Jan 1, 1970, 00:00:00.000 GMT
console.log(moonLanding.getTime());
// Expected output: -14182940000
```

## Syntax

```js-nolint
getTime()
```

### Parameter

Keine.

### Rückgabewert

Eine Zahl, die den [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) dieses Datums in Millisekunden darstellt. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beschreibung

`Date` Objekte werden grundlegend durch einen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) dargestellt, und diese Methode ermöglicht es Ihnen, den Zeitstempel abzurufen. Sie können diese Methode verwenden, um einem anderen {{jsxref("Date")}} Objekt ein Datum und eine Uhrzeit zuzuweisen. Diese Methode ist funktional äquivalent zur {{jsxref("Date/valueof", "valueOf()")}} Methode.

## Beispiele

### Verwendung von getTime() zum Kopieren von Datumsangaben

Konstruktion eines Date-Objekts mit demselben Zeitwert.

```js
// Since month is zero based, birthday will be January 10, 1995
const birthday = new Date(1994, 12, 10);
const copy = new Date();
copy.setTime(birthday.getTime());
```

### Messen der Ausführungszeit

Das Subtrahieren von zwei aufeinanderfolgenden `getTime()` Aufrufen auf neu erstellten {{jsxref("Date")}} Objekten ergibt die Zeitspanne zwischen diesen beiden Aufrufen. Dies kann verwendet werden, um die Ausführungszeit einiger Vorgänge zu berechnen. Siehe auch {{jsxref("Date.now()")}}, um die Erstellung unnötiger {{jsxref("Date")}} Objekte zu vermeiden.

```js
let end, start;

start = new Date();
for (let i = 0; i < 1000; i++) {
  Math.sqrt(i);
}
end = new Date();

console.log(`Operation took ${end.getTime() - start.getTime()} msec`);
```

> [!NOTE]
> In Browsern, die die High-Resolution Time-Funktion der [Performance-API](/de/docs/Web/API/Performance_API) unterstützen, kann [`Performance.now()`](/de/docs/Web/API/Performance/now) präzisere und zuverlässigere Messungen der verstrichenen Zeit liefern als {{jsxref("Date.now()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.setTime()")}}
- {{jsxref("Date.prototype.valueOf()")}}
- {{jsxref("Date.now()")}}
