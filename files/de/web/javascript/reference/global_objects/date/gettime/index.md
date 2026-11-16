---
title: Date.prototype.getTime()
short-title: getTime()
slug: Web/JavaScript/Reference/Global_Objects/Date/getTime
l10n:
  sourceCommit: 98972b1f827b7374e28aee591a73044ffd8fb758
---

Die Methode **`getTime()`** von {{jsxref("Date")}}-Instanzen gibt die Anzahl der Millisekunden zurück, die zwischen der [Epoche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) und diesem Datum vergangen sind. Die Epoche ist als Mitternacht zu Beginn des 1. Januar 1970 (UTC) definiert.

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

Eine Zahl, die den [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) dieses Datums in Millisekunden darstellt. Ist das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date), wird `NaN` zurückgegeben.

## Beschreibung

`Date`-Objekte werden grundsätzlich durch einen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) dargestellt. Mit dieser Methode können Sie diesen Zeitstempel abrufen. Sie können ihn verwenden, um einem anderen {{jsxref("Date")}}-Objekt dasselbe Datum und dieselbe Uhrzeit zuzuweisen. Die Methode entspricht funktional der Methode {{jsxref("Date/valueOf", "valueOf()")}}.

## Beispiele

### Datumswerte mit getTime() kopieren

So erstellen Sie ein Datumsobjekt mit demselben Zeitwert:

```js
// Since month is zero based, birthday will be January 10, 1995
const birthday = new Date(1994, 12, 10);
const copy = new Date();
copy.setTime(birthday.getTime());
```

### Ausführungszeit messen

Wenn Sie die Rückgabewerte zweier aufeinanderfolgender `getTime()`-Aufrufe auf neu erstellten {{jsxref("Date")}}-Objekten voneinander subtrahieren, erhalten Sie die Zeitspanne zwischen den beiden Aufrufen. Damit können Sie die Ausführungszeit von Vorgängen berechnen. Siehe auch {{jsxref("Date.now()")}}, um die Erstellung unnötiger {{jsxref("Date")}}-Objekte zu vermeiden.

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
> In Browsern, die die Funktion für hochauflösende Zeitmessung der [Performance API](/de/docs/Web/API/Performance_API) unterstützen, kann [`Performance.now()`](/de/docs/Web/API/Performance/now) die verstrichene Zeit zuverlässiger und präziser messen als {{jsxref("Date.now()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.setTime()")}}
- {{jsxref("Date.prototype.valueOf()")}}
- {{jsxref("Date.now()")}}
