---
title: "RangeError: ungültiges Datum"
slug: Web/JavaScript/Reference/Errors/Invalid_date
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die JavaScript-Ausnahme "ungültiges Datum" tritt auf, wenn versucht wird, ein ungültiges Datum in einen ISO-Datumsstring umzuwandeln.

## Nachricht

```plain
RangeError: Invalid time value (V8-based)
RangeError: invalid date (Firefox)
RangeError: Invalid Date (Safari)
```

## Fehlertyp

{{jsxref("RangeError")}}

## Was ist schiefgelaufen?

Sie versuchen, einen [ungültigen Datumswert](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) in einen ISO-Datumsstring umzuwandeln. Dies geschieht normalerweise auf eine der drei folgenden Weisen:

- Aufrufen der Methode {{jsxref("Date/toISOString", "toISOString()")}}
- Aufrufen der Methode {{jsxref("Date/toJSON", "toJSON()")}}, die implizit `toISOString` aufruft
- Verwendung von {{jsxref("JSON.stringify()")}}, um das Datum zu serialisieren, was implizit `toJSON` aufruft

Ein _ungültiges Datum_ entsteht, wenn Sie versuchen, einen ungültigen Datumsstring zu parsen oder den Zeitstempel auf einen außerhalb des zulässigen Bereichs liegenden Wert zu setzen. Ungültige Daten führen in der Regel dazu, dass alle Datumsfunktionen {{jsxref("NaN")}} oder andere Spezialwerte zurückgeben. Solche Daten haben jedoch keine gültigen ISO-String-Darstellungen, sodass ein Fehler ausgelöst wird, wenn Sie versuchen, dies zu tun.

## Beispiele

### Ungültige Fälle

```js example-bad
const invalid = new Date("nothing");
invalid.toISOString(); // RangeError: invalid date
invalid.toJSON(); // RangeError: invalid date
JSON.stringify({ date: invalid }); // RangeError: invalid date
```

Die meisten anderen Methoden geben jedoch spezielle Werte zurück:

```js example-bad
invalid.toString(); // "Invalid Date"
invalid.getDate(); // NaN
```

Weitere Details finden Sie in der Dokumentation zu {{jsxref("Date.parse()")}}.

### Gültige Fälle

```js example-good
new Date("05 October 2011 14:48 UTC").toISOString(); // "2011-10-05T14:48:00.000Z"
new Date(1317826080).toISOString(); // "2011-10-05T14:48:00.000Z"
```

## Siehe auch

- {{jsxref("Date")}}
- {{jsxref("Date.prototype.parse()")}}
- {{jsxref("Date.prototype.toISOString()")}}
