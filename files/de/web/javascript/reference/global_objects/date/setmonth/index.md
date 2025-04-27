---
title: Date.prototype.setMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMonth
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{JSRef}}

Die **`setMonth()`**-Methode von {{jsxref("Date")}}-Instanzen ändert den Monat und/oder den Tag des Monats dieses Datums gemäß der Ortszeit.

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
  - : Ein ganzzahliger Wert, der den Monat darstellt: 0 für Januar, 1 für Februar und so weiter.
- `dateValue` {{optional_inline}}
  - : Ein ganzzahliger Wert von 1 bis 31, der den Tag des Monats darstellt.

### Rückgabewert

Verändert das {{jsxref("Date")}}-Objekt an Ort und Stelle und gibt dessen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn ein Parameter `NaN` ist (oder andere Werte, die zu `NaN` [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie z. B. `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` zurückgegeben.

## Beschreibung

Falls Sie den Parameter `dateValue` nicht spezifizieren, wird der gleiche Wert verwendet, wie er von {{jsxref("Date/getDate", "getDate()")}} zurückgegeben wird.

Wenn ein von Ihnen angegebener Parameter außerhalb des erwarteten Bereichs liegt, werden andere Parameter und die Datumsinformationen im {{jsxref("Date")}}-Objekt entsprechend aktualisiert. Wenn Sie beispielsweise 15 für `monthValue` angeben, wird das Jahr um 1 erhöht und 3 als Monat verwendet.

Der aktuelle Tag des Monats wirkt sich auf das Verhalten dieser Methode aus. Konzeptionell wird die Anzahl der Tage, die durch den aktuellen Tag des Monats gegeben sind, zum 1. Tag des neuen Monats, der als Parameter angegeben wird, hinzugefügt, um das neue Datum zu erhalten. Wenn der aktuelle Wert beispielsweise der 31. Januar 2016 ist, wird durch Aufrufen von setMonth mit einem Wert von 1 der 2. März 2016 zurückgegeben. Dies liegt daran, dass der Februar im Jahr 2016 29 Tage hatte.

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
