---
title: Date.prototype.getMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`getMilliseconds()`** Methode von {{jsxref("Date")}} Instanzen gibt die Millisekunden für dieses Datum entsprechend der Ortszeit zurück.

{{InteractiveExample("JavaScript Demo: Date.prototype.getMilliseconds()", "shorter")}}

```js interactive-example
const moonLanding = new Date("July 20, 69 00:20:18");
moonLanding.setMilliseconds(123);

console.log(moonLanding.getMilliseconds());
// Expected output: 123
```

## Syntax

```js-nolint
getMilliseconds()
```

### Parameter

Keine.

### Rückgabewert

Ein Integer-Wert, zwischen 0 und 999, der die Millisekunden für das angegebene Datum entsprechend der Ortszeit repräsentiert. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beispiele

### Verwendung von getMilliseconds()

Die Variable `milliseconds` hat den Wert `0`, basierend auf dem Wert des {{jsxref("Date")}} Objekts `xmas95`, das die Millisekundenkomponente nicht spezifiziert, weshalb sie standardmäßig auf 0 gesetzt ist.

```js
const xmas95 = new Date("1995-12-25T23:15:30");
const milliseconds = xmas95.getMilliseconds();

console.log(milliseconds); // 0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
- {{jsxref("Date.prototype.setMilliseconds()")}}
