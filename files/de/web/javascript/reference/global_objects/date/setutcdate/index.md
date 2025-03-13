---
title: Date.prototype.setUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCDate
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die Methode **`setUTCDate()`** von {{jsxref("Date")}} Instanzen ändert den Tag des Monats für dieses Datum entsprechend der koordinierten Weltzeit.

{{InteractiveExample("JavaScript Demo: Date.prototype.setUTCDate()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30 GMT-3:00");

console.log(event.getUTCDate());
// Expected output: 20

event.setUTCDate(19);

console.log(event.getUTCDate());
// Expected output: 19
```

## Syntax

```js-nolint
setUTCDate(dateValue)
```

### Parameter

- `dateValue`
  - : Eine ganze Zahl zwischen 1 und 31, die den Tag des Monats repräsentiert.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt direkt und gibt dessen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn `dateValue` `NaN` ist (oder andere Werte, die zu `NaN` [konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` wird zurückgegeben.

## Beschreibung

Wenn `dateValue` außerhalb des Bereichs der Datumswerte für den Monat liegt, wird `setDate()` das {{jsxref("Date")}}-Objekt entsprechend aktualisieren.

Zum Beispiel, wenn 0 für `dateValue` angegeben ist, wird das Datum auf den letzten Tag des vorherigen Monats gesetzt. Wenn Sie 40 für `dateValue` verwenden und der im {{jsxref("Date")}}-Objekt gespeicherte Monat Juni ist, wird der Tag auf den 10. geändert und der Monat auf Juli erhöht.

Wenn eine negative Zahl für `dateValue` angegeben wird, wird das Datum rückwärts vom letzten Tag des vorherigen Monats aus gezählt. -1 würde dazu führen, dass das Datum auf 1 Tag vor dem letzten Tag des vorherigen Monats eingestellt wird.

## Beispiele

### Verwendung von setUTCDate()

```js
const theBigDay = new Date();
theBigDay.setUTCDate(20);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.setDate()")}}
