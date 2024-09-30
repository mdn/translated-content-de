---
title: Date.prototype.getUTCFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

Die **`getUTCFullYear()`**-Methode von {{jsxref("Date")}}-Instanzen gibt das Jahr für dieses Datum gemäß der Weltzeit (Universal Time) zurück.

{{EmbedInteractiveExample("pages/js/date-getutcfullyear.html")}}

## Syntax

```js-nolint
getUTCFullYear()
```

### Parameter

Keine.

### Rückgabewert

Eine ganze Zahl, die das Jahr für das angegebene Datum gemäß der Weltzeit darstellt. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beschreibung

Im Gegensatz zu {{jsxref("Date/getYear", "getYear()")}} ist der von `getUTCFullYear()` zurückgegebene Wert eine absolute Zahl. Für Daten zwischen den Jahren 1000 und 9999 gibt `getFullYear()` eine vierstellige Zahl zurück, zum Beispiel 1995. Verwenden Sie diese Funktion, um sicherzustellen, dass ein Jahr mit den Jahren nach 2000 übereinstimmt.

## Beispiele

### Verwendung von getUTCFullYear()

Das folgende Beispiel weist der Variable `year` den vierstelligen Wert des aktuellen Jahres zu.

```js
const today = new Date();
const year = today.getUTCFullYear();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
