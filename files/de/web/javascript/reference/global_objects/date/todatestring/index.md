---
title: Date.prototype.toDateString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toDateString
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{JSRef}}

Die Methode **`toDateString()`** von {{jsxref("Date")}}-Instanzen gibt eine Zeichenkette zurück, die den Datumsanteil dieses Datums darstellt, interpretiert in der lokalen Zeitzone.

{{InteractiveExample("JavaScript Demo: Date.prototype.toDateString()")}}

```js interactive-example
const event = new Date(1993, 6, 28, 14, 39, 7);

console.log(event.toString());
// Expected output: "Wed Jul 28 1993 14:39:07 GMT+0200 (CEST)"
// Note: your timezone may vary

console.log(event.toDateString());
// Expected output: "Wed Jul 28 1993"
```

## Syntax

```js-nolint
toDateString()
```

### Parameter

Keine.

### Rückgabewert

Eine Zeichenkette, die den Datumsanteil des angegebenen Datums darstellt (siehe Beschreibung für das Format). Gibt `"Invalid Date"` zurück, falls das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beschreibung

{{jsxref("Date")}}-Instanzen beziehen sich auf einen bestimmten Zeitpunkt. `toDateString()` interpretiert das Datum in der lokalen Zeitzone und formatiert den _Datumsteil_ auf Englisch. Es verwendet immer das folgende Format, getrennt durch Leerzeichen:

1. Die ersten drei Buchstaben des Wochentagsnamens
2. Die ersten drei Buchstaben des Monatsnamens
3. Zweistelliger Tag des Monats, falls nötig links mit einer Null aufgefüllt
4. Vierstellige Jahreszahl (mindestens), falls nötig links mit Nullen aufgefüllt. Kann ein negatives Vorzeichen haben

Zum Beispiel: "Thu Jan 01 1970".

- Wenn Sie nur den _Zeitteil_ erhalten möchten, verwenden Sie {{jsxref("Date/toTimeString", "toTimeString()")}}.
- Wenn Sie sowohl Datum als auch Uhrzeit erhalten möchten, verwenden Sie {{jsxref("Date/toString", "toString()")}}.
- Wenn Sie möchten, dass das Datum als UTC anstatt der lokalen Zeitzone interpretiert wird, verwenden Sie {{jsxref("Date/toUTCString", "toUTCString()")}}.
- Wenn Sie das Datum in einem benutzerfreundlicheren Format (z. B. Lokalisierung) formatieren möchten, verwenden Sie {{jsxref("Date/toLocaleDateString", "toLocaleDateString()")}}.

## Beispiele

### Verwendung von toDateString()

```js
const d = new Date(0);

console.log(d.toString()); // "Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)"
console.log(d.toDateString()); // "Thu Jan 01 1970"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
