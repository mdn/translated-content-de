---
title: Date.prototype.getTime()
slug: Web/JavaScript/Reference/Global_Objects/Date/getTime
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`getTime()`** für {{jsxref("Date")}}-Instanzen gibt die Anzahl der Millisekunden seit der Mitternacht des 1. Januar 1970, UTC, zurück. Diese wird auch als [Epoche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) definiert.

{{InteractiveExample("JavaScript Demo: Date.getTime()", "shorter")}}

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

`Date`-Objekte werden grundlegend durch einen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) dargestellt, und diese Methode ermöglicht es, diesen Zeitstempel abzurufen. Sie können diese Methode verwenden, um einem anderen {{jsxref("Date")}}-Objekt ein Datum und eine Uhrzeit zuzuweisen. Diese Methode ist funktional identisch mit der Methode {{jsxref("Date/valueof", "valueOf()")}}.

## Beispiele

### Verwendung von getTime() zum Kopieren von Daten

Erstellen eines Datumsobjekts mit demselben Zeitwert.

```js
// Since month is zero based, birthday will be January 10, 1995
const birthday = new Date(1994, 12, 10);
const copy = new Date();
copy.setTime(birthday.getTime());
```

### Messen der Ausführungszeit

Die Subtraktion zweier aufeinanderfolgender `getTime()`-Aufrufe auf neu erstellten {{jsxref("Date")}}-Objekten ergibt die Zeitspanne zwischen diesen beiden Aufrufen. Dies kann verwendet werden, um die Ausführungszeit bestimmter Operationen zu berechnen. Siehe auch {{jsxref("Date.now()")}}, um die Erstellung unnötiger {{jsxref("Date")}}-Objekte zu vermeiden.

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
> In Browsern, die die hochauflösende Zeitfunktion der [Performance API](/de/docs/Web/API/Performance_API) unterstützen, kann [`Performance.now()`](/de/docs/Web/API/Performance/now) zuverlässigere und genauere Messungen der verstrichenen Zeit liefern als {{jsxref("Date.now()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.setTime()")}}
- {{jsxref("Date.prototype.valueOf()")}}
- {{jsxref("Date.now()")}}
