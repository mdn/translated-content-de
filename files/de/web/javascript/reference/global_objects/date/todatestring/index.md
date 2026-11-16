---
title: Date.prototype.toDateString()
short-title: toDateString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toDateString
l10n:
  sourceCommit: 98972b1f827b7374e28aee591a73044ffd8fb758
---

Die Methode **`toDateString()`** von {{jsxref("Date")}}-Instanzen gibt einen String zurück, der den Datumsanteil des Datums in der lokalen Zeitzone darstellt.

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

Ein String, der den Datumsanteil des angegebenen Datums darstellt (zum Format siehe Beschreibung). Ist das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date), wird `"Invalid Date"` zurückgegeben.

## Beschreibung

{{jsxref("Date")}}-Instanzen beziehen sich auf einen bestimmten Zeitpunkt. `toDateString()` interpretiert das Datum in der lokalen Zeitzone und formatiert den _Datumsanteil_ auf Englisch. Dabei wird immer das folgende Format verwendet, dessen Bestandteile durch Leerzeichen getrennt sind:

1. Die ersten drei Buchstaben des Wochentagsnamens
2. Die ersten drei Buchstaben des Monatsnamens
3. Zweistelliger Tag des Monats, bei Bedarf links mit einer Null aufgefüllt
4. Mindestens vierstellige Jahreszahl, bei Bedarf links mit Nullen aufgefüllt. Kann ein Minuszeichen haben

Zum Beispiel: „Thu Jan 01 1970“.

- Wenn Sie nur den _Uhrzeitanteil_ erhalten möchten, verwenden Sie {{jsxref("Date/toTimeString", "toTimeString()")}}.
- Wenn Sie sowohl das Datum als auch die Uhrzeit erhalten möchten, verwenden Sie {{jsxref("Date/toString", "toString()")}}.
- Wenn das Datum statt in der lokalen Zeitzone als UTC interpretiert werden soll, verwenden Sie {{jsxref("Date/toUTCString", "toUTCString()")}}.
- Wenn Sie das Datum in einem benutzerfreundlicheren Format ausgeben möchten (z. B. lokalisiert), verwenden Sie {{jsxref("Date/toLocaleDateString", "toLocaleDateString()")}}.

## Beispiele

### `toDateString()` verwenden

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
