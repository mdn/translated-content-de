---
title: Date.prototype.setUTCFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCFullYear
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`setUTCFullYear()`**-Methode von {{jsxref("Date")}}-Instanzen ändert das Jahr dieses Datums gemäß der universellen Zeit.

{{InteractiveExample("JavaScript Demo: Date.setUTCFullYear()")}}

```js interactive-example
const event = new Date("December 31, 1975 23:15:30 GMT-3:00");

console.log(event.getUTCFullYear());
// Expected output: 1976

console.log(event.toUTCString());
// Expected output: "Thu, 01 Jan 1976 02:15:30 GMT"

event.setUTCFullYear(1975);

console.log(event.toUTCString());
// Expected output: "Wed, 01 Jan 1975 02:15:30 GMT"
```

## Syntax

```js-nolint
setUTCFullYear(yearValue)
setUTCFullYear(yearValue, monthValue)
setUTCFullYear(yearValue, monthValue, dateValue)
```

### Parameter

- `yearValue`
  - : Eine Ganzzahl, die das Jahr darstellt. Zum Beispiel 1995.
- `monthValue` {{optional_inline}}
  - : Eine Ganzzahl, die den Monat darstellt: 0 für Januar, 1 für Februar usw.
- `dateValue` {{optional_inline}}
  - : Eine Ganzzahl zwischen 1 und 31, die den Tag des Monats darstellt. Wenn Sie `dateValue` angeben, müssen Sie auch `monthValue` angeben.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt direkt und gibt dessen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Falls ein Parameter `NaN` ist (oder andere Werte, die zu `NaN` [umgewandelt werden](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), wie z. B. `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` zurückgegeben.

## Beschreibung

Wenn Sie die Parameter `monthValue` und `dateValue` nicht angeben, werden die Werte aus den
Methoden {{jsxref("Date/getUTCMonth", "getUTCMonth()")}} und
{{jsxref("Date/getUTCDate", "getUTCDate()")}} verwendet.

Falls ein angegebener Parameter außerhalb des erwarteten Bereichs liegt, versucht `setUTCFullYear()`, die anderen Parameter und die Datumsinformationen im {{jsxref("Date")}}-Objekt entsprechend zu aktualisieren. Zum Beispiel wird bei der Angabe von 15 für `monthValue` das Jahr um 1 erhöht (`yearValue + 1`), und es wird 3 als Monat verwendet.

## Beispiele

### Verwendung von setUTCFullYear()

```js
const theBigDay = new Date();
theBigDay.setUTCFullYear(1997);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
