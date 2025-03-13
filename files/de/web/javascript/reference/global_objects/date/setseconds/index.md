---
title: Date.prototype.setSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setSeconds
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die Methode **`setSeconds()`** von {{jsxref("Date")}}-Instanzen ändert die Sekunden und/oder Millisekunden für dieses Datum gemäß der lokalen Zeit.

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
  - : Ein ganzzahliger Wert zwischen 0 und 59, der die Sekunden darstellt.
- `msValue` {{optional_inline}}
  - : Ein ganzzahliger Wert zwischen 0 und 999, der die Millisekunden darstellt.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt in-place und gibt dessen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn ein Parameter `NaN` ist (oder andere Werte, die zu `NaN` [gezwungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie `undefined`), wird das Datum auf [Ungültiges Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` zurückgegeben.

## Beschreibung

Wenn Sie den `msValue`-Parameter nicht angeben, wird der Wert verwendet, der von der Methode {{jsxref("Date/getMilliseconds", "getMilliseconds()")}} zurückgegeben wird.

Wenn ein von Ihnen angegebener Parameter außerhalb des erwarteten Bereichs liegt, versucht `setSeconds()`, die Datumsinformation im {{jsxref("Date")}}-Objekt entsprechend zu aktualisieren. Wenn Sie zum Beispiel 100 für `secondsValue` verwenden, werden die Minuten, die im {{jsxref("Date")}}-Objekt gespeichert sind, um 1 erhöht und 40 wird für die Sekunden verwendet.

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
