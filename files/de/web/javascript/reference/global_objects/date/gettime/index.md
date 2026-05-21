---
title: Date.prototype.getTime()
short-title: getTime()
slug: Web/JavaScript/Reference/Global_Objects/Date/getTime
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

Die **`getTime()`**-Methode von {{jsxref("Date")}}-Instanzen gibt die Anzahl der Millisekunden seit dem [Epoche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) für dieses Datum zurück, die als Mitternacht zu Beginn des 1. Januar 1970, UTC, definiert ist.

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

Eine Zahl, die den [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) in Millisekunden für dieses Datum darstellt. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beschreibung

`Date`-Objekte werden grundsätzlich durch einen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) repräsentiert, und diese Methode ermöglicht es Ihnen, den Zeitstempel abzurufen. Sie können diese Methode verwenden, um einem anderen {{jsxref("Date")}}-Objekt ein Datum und eine Uhrzeit zuzuweisen. Diese Methode ist funktional äquivalent zur {{jsxref("Date/valueOf", "valueOf()")}}-Methode.

## Beispiele

### Die Verwendung von getTime() zum Kopieren von Daten

Erstellen eines Date-Objekts mit demselben Zeitwert.

```js
// Since month is zero based, birthday will be January 10, 1995
const birthday = new Date(1994, 12, 10);
const copy = new Date();
copy.setTime(birthday.getTime());
```

### Messen der Ausführungszeit

Die Subtraktion von zwei aufeinanderfolgenden `getTime()`-Aufrufen auf neu generierten {{jsxref("Date")}}-Objekten ergibt die Zeitspanne zwischen diesen beiden Aufrufen. Dies kann zur Berechnung der Ausführungszeit einiger Operationen verwendet werden. Siehe auch {{jsxref("Date.now()")}}, um das Erstellen unnötiger {{jsxref("Date")}}-Objekte zu vermeiden.

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
> In Browsern, die die [Performance API](/de/docs/Web/API/Performance_API) mit dem Feature der hochauflösenden Zeit unterstützen, kann [`Performance.now()`](/de/docs/Web/API/Performance/now) zuverlässigere und genauere Messungen der vergangenen Zeit liefern als {{jsxref("Date.now()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.setTime()")}}
- {{jsxref("Date.prototype.valueOf()")}}
- {{jsxref("Date.now()")}}
