---
title: Date.prototype.setMonth()
short-title: setMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMonth
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`setMonth()`**-Methode von {{jsxref("Date")}}-Instanzen ändert den Monat und/oder den Tag des Monats dieses Datums entsprechend der lokalen Zeit.

{{InteractiveExample("JavaScript Demo: Date.prototype.setMonth()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

event.setMonth(3);

console.log(event.getMonth());
// Expected output: 3

console.log(event);
// Expected output: "Sat Apr 19 1975 23:15:30 GMT+0100 (CET)"
// Note: your timezone may vary
```

## Syntax

```js-nolint
setMonth(monthValue)
setMonth(monthValue, dateValue)
```

### Parameter

- `monthValue`
  - : Eine ganze Zahl, die den Monat darstellt: 0 für Januar, 1 für Februar, und so weiter.
- `dateValue` {{optional_inline}}
  - : Eine ganze Zahl von 1 bis 31, die den Tag des Monats darstellt.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt direkt und gibt dessen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn ein Parameter `NaN` ist (oder andere Werte, die zu `NaN` [gezwungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie z.B. `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` wird zurückgegeben.

## Beschreibung

Wenn Sie den `dateValue`-Parameter nicht angeben, wird derselbe Wert verwendet, der von {{jsxref("Date/getDate", "getDate()")}} zurückgegeben wird.

Wenn ein angegebener Parameter außerhalb des erwarteten Bereichs liegt, werden andere Parameter und die Datumsinformationen im {{jsxref("Date")}}-Objekt entsprechend aktualisiert. Zum Beispiel, wenn Sie 15 als `monthValue` angeben, wird das Jahr um 1 erhöht und 3 wird für den Monat verwendet.

Der aktuelle Tag des Monats hat einen Einfluss auf das Verhalten dieser Methode. Konzeptionell wird die Anzahl der Tage, die durch den aktuellen Tag des Monats angegeben wird, zum 1. Tag des neuen Monats addiert, der als Parameter angegeben wurde, um das neue Datum zurückzugeben. Zum Beispiel, wenn der aktuelle Wert der 31. Januar 2016 ist, ergibt ein Aufruf von setMonth mit einem Wert von 1 den 2. März 2016. Dies liegt daran, dass der Februar im Jahr 2016 29 Tage hatte.

## Beispiele

### Verwendung von setMonth()

```js
const theBigDay = new Date();
theBigDay.setMonth(6);

// Watch out for end of month transitions
const endOfMonth = new Date(2016, 7, 31);
endOfMonth.setMonth(1);
console.log(endOfMonth); // Wed Mar 02 2016 00:00:00
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getMonth()")}}
- {{jsxref("Date.prototype.setUTCMonth()")}}
