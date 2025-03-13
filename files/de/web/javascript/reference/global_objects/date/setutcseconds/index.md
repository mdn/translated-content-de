---
title: Date.prototype.setUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCSeconds
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die Methode **`setUTCSeconds()`** von {{jsxref("Date")}} Instanzen ändert die Sekunden und/oder Millisekunden für dieses Datum in Weltzeit.

{{InteractiveExample("JavaScript Demo: Date.prototype.setUTCSeconds()")}}

```js interactive-example
const date1 = new Date("December 31, 1975, 23:15:30 GMT+11:00");

console.log(date1.getUTCSeconds());
// Expected output: 30

date1.setUTCSeconds(39);

console.log(date1.getUTCSeconds());
// Expected output: 39
```

## Syntax

```js-nolint
setUTCSeconds(secondsValue)
setUTCSeconds(secondsValue, msValue)
```

### Parameter

- `secondsValue`
  - : Eine ganze Zahl zwischen 0 und 59, die die Sekunden repräsentiert.
- `msValue` {{optional_inline}}
  - : Eine ganze Zahl zwischen 0 und 999, die die Millisekunden repräsentiert.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt direkt und gibt seinen neuen [Timestamp](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn ein Parameter `NaN` ist (oder andere Werte, die zu `NaN` [erzwungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` wird zurückgegeben.

## Beschreibung

Wenn Sie den `msValue`-Parameter nicht angeben, wird der Wert, der von der Methode {{jsxref("Date/getUTCMilliseconds", "getUTCMilliseconds()")}} zurückgegeben wird, verwendet.

Wenn ein angegebener Parameter außerhalb des erwarteten Bereichs liegt, versucht `setUTCSeconds()`, die Datumsinformationen im {{jsxref("Date")}}-Objekt entsprechend zu aktualisieren. Wenn Sie beispielsweise 100 für `secondsValue` verwenden, werden die im {{jsxref("Date")}}-Objekt gespeicherten Minuten um 1 erhöht und 40 wird für Sekunden verwendet.

## Beispiele

### Verwendung von setUTCSeconds()

```js
const theBigDay = new Date();
theBigDay.setUTCSeconds(20);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCSeconds()")}}
- {{jsxref("Date.prototype.setSeconds()")}}
