---
title: Date.prototype.getUTCDay()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCDay
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

Die **`getUTCDay()`**-Methode von {{jsxref("Date")}}-Instanzen gibt den Wochentag für dieses Datum entsprechend der Universalzeit zurück, wobei 0 für Sonntag steht.

{{EmbedInteractiveExample("pages/js/date-getutcday.html")}}

## Syntax

```js-nolint
getUTCDay()
```

### Parameter

Keine.

### Rückgabewert

Eine ganze Zahl, die dem Wochentag des angegebenen Datums gemäß der Universalzeit entspricht: 0 für Sonntag, 1 für Montag, 2 für Dienstag und so weiter. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beispiele

### Verwendung von getUTCDay()

Das folgende Beispiel weist den Wochentag des aktuellen Datums der Variablen `weekday` zu.

```js
const today = new Date();
const weekday = today.getUTCDay();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getDay()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}
