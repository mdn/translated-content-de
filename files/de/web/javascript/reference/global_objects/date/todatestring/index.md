---
title: Date.prototype.toDateString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toDateString
l10n:
  sourceCommit: 57970dc6d2221079f08b71a36df1a9f0305da4ed
---

{{JSRef}}

Die **`toDateString()`**-Methode von {{jsxref("Date")}}-Instanzen gibt einen String zurück, der den Datumsanteil dieses Datums im lokalen Zeitzonenformat darstellt.

{{EmbedInteractiveExample("pages/js/date-todatestring.html")}}

## Syntax

```js-nolint
toDateString()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der den Datumsanteil des angegebenen Datums darstellt (siehe Beschreibung für das Format). Gibt `"Invalid Date"` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beschreibung

{{jsxref("Date")}}-Instanzen beziehen sich auf einen spezifischen Zeitpunkt. `toDateString()` interpretiert das Datum in der lokalen Zeitzone und formatiert den _Datums_-Teil auf Englisch. Es verwendet immer das folgende Format, getrennt durch Leerzeichen:

1. Die ersten drei Buchstaben des Wochentagsnamens
2. Die ersten drei Buchstaben des Monatsnamens
3. Zweistelliger Tag des Monats, links mit einer Null aufgefüllt, falls erforderlich
4. Vierstelliges Jahr (mindestens), links mit Nullen aufgefüllt, falls erforderlich. Kann ein negatives Vorzeichen haben

Zum Beispiel: "Thu Jan 01 1970".

- Falls Sie nur den _Zeit_-Teil erhalten möchten, verwenden Sie {{jsxref("Date/toTimeString", "toTimeString()")}}.
- Um sowohl Datum als auch Zeit zu erhalten, verwenden Sie {{jsxref("Date/toString", "toString()")}}.
- Wenn Sie möchten, dass das Datum als UTC statt als lokale Zeitzone interpretiert wird, verwenden Sie {{jsxref("Date/toUTCString", "toUTCString()")}}.
- Falls Sie das Datum in einem benutzerfreundlicheren Format (z.B. Lokalisierung) formatieren möchten, verwenden Sie {{jsxref("Date/toLocaleDateString", "toLocaleDateString()")}}.

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
