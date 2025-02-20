---
title: Date.prototype.setUTCMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMonth
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`setUTCMonth()`**-Methode von {{jsxref("Date")}}-Instanzen ändert den Monat und/oder den Tag des Monats dieses Datums entsprechend der Weltzeit.

{{InteractiveExample("JavaScript Demo: Date.setUTCMonth()")}}

```js interactive-example
const event = new Date("December 31, 1975 23:15:30 GMT-3:00");

console.log(event.toUTCString());
// Expected output: "Thu, 01 Jan 1976 02:15:30 GMT"

console.log(event.getUTCMonth());
// Expected output: 0

event.setUTCMonth(11);

console.log(event.toUTCString());
// Expected output: "Wed, 01 Dec 1976 02:15:30 GMT"
```

## Syntax

```js-nolint
setUTCMonth(monthValue)
setUTCMonth(monthValue, dateValue)
```

### Parameter

- `monthValue`
  - : Eine ganze Zahl, die den Monat darstellt: 0 für Januar, 1 für Februar und so weiter.
- `dateValue` {{optional_inline}}
  - : Eine ganze Zahl von 1 bis 31, die den Tag des Monats darstellt.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt an Ort und Stelle und gibt dessen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Falls ein Parameter `NaN` ist (oder andere Werte, die [erzwungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie z. B. `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` zurückgegeben.

## Beschreibung

Falls der Parameter `dateValue` nicht angegeben wird, wird der Wert der
{{jsxref("Date/getUTCDate", "getUTCDate()")}}-Methode verwendet.

Falls ein angegebener Parameter außerhalb des erwarteten Bereichs liegt, versucht `setUTCMonth()`, die Datumsinformationen im {{jsxref("Date")}}-Objekt entsprechend zu aktualisieren.
Zum Beispiel, wenn Sie 15 für `monthValue` verwenden, wird das Jahr um 1 erhöht und 3 wird als Monat verwendet.

## Beispiele

### Verwendung von setUTCMonth()

```js
const theBigDay = new Date();
theBigDay.setUTCMonth(11);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCMonth()")}}
- {{jsxref("Date.prototype.setMonth()")}}
