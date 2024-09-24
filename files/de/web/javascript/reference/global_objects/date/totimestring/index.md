---
title: Date.prototype.toTimeString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toTimeString
l10n:
  sourceCommit: 77e46a5b43f828fcc6bd30facddc6fc4bfe84f9b
---

{{JSRef}}

Die **`toTimeString()`**-Methode von {{jsxref("Date")}}-Instanzen gibt einen String zurück, der den Zeitanteil dieses Datums interpretiert in der lokalen Zeitzone darstellt.

{{EmbedInteractiveExample("pages/js/date-totimestring.html", "shorter")}}

## Syntax

```js-nolint
toTimeString()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der den Zeitanteil des angegebenen Datums darstellt (siehe Beschreibung für das Format). Gibt `"Invalid Date"` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beschreibung

{{jsxref("Date")}}-Instanzen beziehen sich auf einen bestimmten Zeitpunkt. `toTimeString()` interpretiert das Datum in der lokalen Zeitzone und formatiert den _Zeit_-Teil auf Englisch. Es verwendet immer das Format `HH:mm:ss GMT±xxxx (TZ)`, wobei:

| Format String | Beschreibung                                                                                         |
| ------------- | ----------------------------------------------------------------------------------------------------- |
| `HH`          | Stunde, als zwei Ziffern mit führender Null, falls erforderlich                                       |
| `mm`          | Minute, als zwei Ziffern mit führender Null, falls erforderlich                                       |
| `ss`          | Sekunden, als zwei Ziffern mit führender Null, falls erforderlich                                     |
| `±xxxx`       | Der Offset der lokalen Zeitzone — zwei Ziffern für Stunden und zwei Ziffern für Minuten (z.B. `-0500`, `+0800`) |
| `TZ`          | Der Name der Zeitzone (z.B. `PDT`, `PST`)                                                             |

Zum Beispiel: "04:42:04 GMT+0000 (Coordinated Universal Time)".

- Wenn Sie nur den _Datums_-Teil erhalten möchten, verwenden Sie {{jsxref("Date/toDateString", "toDateString()")}}.
- Wenn Sie sowohl Datum als auch Zeit erhalten möchten, verwenden Sie {{jsxref("Date/toString", "toString()")}}.
- Wenn Sie möchten, dass das Datum als UTC statt in der lokalen Zeitzone interpretiert wird, verwenden Sie {{jsxref("Date/toUTCString", "toUTCString()")}}.
- Wenn Sie das Datum in einem benutzerfreundlicheren Format formatieren möchten (z.B. Lokalisierung), verwenden Sie {{jsxref("Date/toLocaleTimeString", "toLocaleTimeString()")}}.

## Beispiele

### Verwendung von toTimeString()

```js
const d = new Date(0);

console.log(d.toString()); // "Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)"
console.log(d.toTimeString()); // "00:00:00 GMT+0000 (Coordinated Universal Time)"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- {{jsxref("Date.prototype.toDateString()")}}
- {{jsxref("Date.prototype.toString()")}}
