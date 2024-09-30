---
title: "RangeError: invalid date"
slug: Web/JavaScript/Reference/Errors/Invalid_date
l10n:
  sourceCommit: 27b116a3801c7e718e9c68f578e89da2bd87fff2
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "invalid date" tritt auf, wenn ein ungültiges Datum versucht wird, in einen ISO-Datumsstring umgewandelt zu werden.

## Nachricht

```plain
RangeError: Invalid time value (V8-based)
RangeError: invalid date (Firefox)
RangeError: Invalid Date (Safari)
```

## Fehlertyp

{{jsxref("RangeError")}}

## Was ist schiefgelaufen?

Sie konvertieren einen [ungültigen Datumswert](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) in einen ISO-Datumsstring. Dies geschieht normalerweise auf eine der drei folgenden Arten:

- Aufrufen der Methode {{jsxref("Date/toISOString", "toISOString()")}}
- Aufrufen der Methode {{jsxref("Date/toJSON", "toJSON()")}}, welche implizit `toISOString` aufruft
- Verwendung von {{jsxref("JSON.stringify()")}}, um das Datum zu serialisieren, was implizit `toJSON` aufruft

Ein _ungültiges Datum_ entsteht, wenn Sie versuchen, einen ungültigen Datumsstring zu parsen oder den Zeitstempel auf einen Wert außerhalb des zulässigen Bereichs zu setzen. Ungültige Daten führen in der Regel dazu, dass alle Datumsmethoden {{jsxref("NaN")}} oder andere spezielle Werte zurückgeben. Solche Daten haben jedoch keine gültigen ISO-String-Darstellungen, daher wird ein Fehler ausgelöst, wenn Sie versuchen, dies zu tun.

## Beispiele

### Ungültige Fälle

```js example-bad
const invalid = new Date("nothing");
invalid.toISOString(); // RangeError: invalid date
invalid.toJSON(); // RangeError: invalid date
JSON.stringify({ date: invalid }); // RangeError: invalid date
```

Jedoch geben die meisten anderen Methoden spezielle Werte zurück:

```js example-bad
invalid.toString(); // "Invalid Date"
invalid.getDate(); // NaN
```

Für nähere Informationen siehe die Dokumentation zu {{jsxref("Date.parse()")}}.

### Gültige Fälle

```js example-good
new Date("05 October 2011 14:48 UTC").toISOString(); // "2011-10-05T14:48:00.000Z"
new Date(1317826080).toISOString(); // "2011-10-05T14:48:00.000Z"
```

## Siehe auch

- {{jsxref("Date")}}
- {{jsxref("Date.prototype.parse()")}}
- {{jsxref("Date.prototype.toISOString()")}}
