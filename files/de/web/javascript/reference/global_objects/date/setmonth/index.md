---
title: Date.prototype.setMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMonth
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`setMonth()`** Methode von {{jsxref("Date")}} Instanzen ändert den Monat und/oder Tag des Monats für dieses Datum entsprechend der lokalen Zeit.

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
  - : Eine Ganzzahl, die den Monat darstellt: 0 für Januar, 1 für Februar und so weiter.
- `dateValue` {{optional_inline}}
  - : Eine Ganzzahl von 1 bis 31, die den Tag des Monats darstellt.

### Rückgabewert

Verändert das {{jsxref("Date")}} Objekt vor Ort und gibt seinen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn ein Parameter `NaN` ist (oder andere Werte, die zu `NaN` [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` wird zurückgegeben.

## Beschreibung

Wenn Sie den Parameter `dateValue` nicht angeben, wird derselbe Wert verwendet, der von {{jsxref("Date/getDate", "getDate()")}} zurückgegeben wird.

Wenn ein von Ihnen angegebener Parameter außerhalb des erwarteten Bereichs liegt, werden andere Parameter und die Datumsinformationen im {{jsxref("Date")}} Objekt entsprechend aktualisiert. Beispiel: Wenn Sie 15 für `monthValue` angeben, wird das Jahr um 1 erhöht und 3 für den Monat verwendet.

Der aktuelle Tag des Monats wird das Verhalten dieser Methode beeinflussen. Konzeptionell wird die Anzahl der Tage, die durch den aktuellen Tag des Monats angegeben wird, zum 1. Tag des neuen Monats, der als Parameter angegeben wird, hinzugefügt, um das neue Datum zurückzugeben. Beispiel: Wenn der aktuelle Wert der 31. Januar 2016 ist, wird der Aufruf von `setMonth` mit einem Wert von 1 den 2. März 2016 zurückgeben. Dies liegt daran, dass der Februar 2016 29 Tage hatte.

## Beispiele

### Verwendung von setMonth()

```js
const theBigDay = new Date();
theBigDay.setMonth(6);

//Watch out for end of month transitions
const endOfMonth = new Date(2016, 7, 31);
endOfMonth.setMonth(1);
console.log(endOfMonth); //Wed Mar 02 2016 00:00:00
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getMonth()")}}
- {{jsxref("Date.prototype.setUTCMonth()")}}
