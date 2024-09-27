---
title: Date.prototype.toDateString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toDateString
l10n:
  sourceCommit: 57970dc6d2221079f08b71a36df1a9f0305da4ed
---

{{JSRef}}

Die **`toDateString()`**-Methode von {{jsxref("Date")}}-Instanzen gibt eine Zeichenkette zurück, die den Datumsanteil dieses Datums darstellt, interpretiert in der lokalen Zeitzone.

{{EmbedInteractiveExample("pages/js/date-todatestring.html")}}

## Syntax

```js-nolint
toDateString()
```

### Parameter

Keine.

### Rückgabewert

Eine Zeichenkette, die den Datumsanteil des angegebenen Datums darstellt (siehe Beschreibung für das Format). Gibt `"Invalid Date"` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beschreibung

{{jsxref("Date")}}-Instanzen beziehen sich auf einen speziellen Zeitpunkt. `toDateString()` interpretiert das Datum in der lokalen Zeitzone und formatiert den _Datums_-Teil auf Englisch. Es verwendet immer das folgende Format, getrennt durch Leerzeichen:

1. Die ersten drei Buchstaben des Wochentagnamens
2. Die ersten drei Buchstaben des Monatsnamens
3. Zweistelliger Tag des Monats, links mit einer Null aufgefüllt, falls nötig
4. Vierstellige Jahreszahl (mindestens), links mit Nullen aufgefüllt, falls nötig. Kann ein negatives Vorzeichen haben

Zum Beispiel: "Thu Jan 01 1970".

- Wenn Sie nur den _Zeit_-Teil erhalten möchten, verwenden Sie {{jsxref("Date/toTimeString", "toTimeString()")}}.
- Wenn Sie sowohl Datum als auch Zeit erhalten möchten, verwenden Sie {{jsxref("Date/toString", "toString()")}}.
- Wenn Sie möchten, dass das Datum als UTC und nicht als lokale Zeitzone interpretiert wird, verwenden Sie {{jsxref("Date/toUTCString", "toUTCString()")}}.
- Wenn Sie das Datum in einem benutzerfreundlicheren Format (z. B. Lokalisation) formatieren möchten, verwenden Sie {{jsxref("Date/toLocaleDateString", "toLocaleDateString()")}}.

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
