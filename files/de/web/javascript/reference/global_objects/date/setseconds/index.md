---
title: Date.prototype.setSeconds()
short-title: setSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setSeconds
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`setSeconds()`** Methode von {{jsxref("Date")}} Instanzen ändert die Sekunden und/oder Millisekunden für dieses Datum entsprechend der lokalen Zeit.

{{InteractiveExample("JavaScript Demo: Date.prototype.setSeconds()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

event.setSeconds(42);

console.log(event.getSeconds());
// Expected output: 42

console.log(event);
// Expected output: "Sat Apr 19 1975 23:15:42 GMT+0100 (CET)"
// Note: your timezone may vary
```

## Syntax

```js-nolint
setSeconds(secondsValue)
setSeconds(secondsValue, msValue)
```

### Parameter

- `secondsValue`
  - : Eine Ganzzahl zwischen 0 und 59, die die Sekunden repräsentiert.
- `msValue` {{optional_inline}}
  - : Eine Ganzzahl zwischen 0 und 999, die die Millisekunden repräsentiert.

### Rückgabewert

Ändert das {{jsxref("Date")}} Objekt direkt und gibt seinen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn ein Parameter `NaN` ist (oder andere Werte, die zu `NaN` [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` wird zurückgegeben.

## Beschreibung

Wenn Sie den `msValue` Parameter nicht angeben, wird der Wert aus der {{jsxref("Date/getMilliseconds", "getMilliseconds()")}} Methode verwendet.

Wenn ein von Ihnen angegebener Parameter außerhalb des erwarteten Bereichs liegt, versucht `setSeconds()`, die Datumsinformationen im {{jsxref("Date")}} Objekt entsprechend zu aktualisieren. Wenn Sie beispielsweise 100 für `secondsValue` verwenden, werden die im {{jsxref("Date")}} Objekt gespeicherten Minuten um 1 erhöht, und 40 wird für die Sekunden verwendet.

## Beispiele

### Verwendung von setSeconds()

```js
const theBigDay = new Date();
theBigDay.setSeconds(30);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getSeconds()")}}
- {{jsxref("Date.prototype.setUTCSeconds()")}}
