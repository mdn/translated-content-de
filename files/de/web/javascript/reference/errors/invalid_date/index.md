---
title: "RangeError: invalid date"
slug: Web/JavaScript/Reference/Errors/Invalid_date
l10n:
  sourceCommit: 7d4628c5144f459ddb081a3e58d0e56f0c2db673
---

Die JavaScript-Ausnahme "invalid date" tritt auf, wenn versucht wird, ein ungültiges Datum in eine ISO-Datumszeichenkette zu konvertieren.

## Nachricht

```plain
RangeError: Invalid time value (V8-based)
RangeError: invalid date (Firefox)
RangeError: Invalid Date (Safari)
```

## Fehlertyp

{{jsxref("RangeError")}}

## Was ist schiefgelaufen?

Sie konvertieren einen [ungültigen Datumswert](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) in eine ISO-Datumszeichenkette, indem Sie die Methode {{jsxref("Date/toISOString", "toISOString()")}} aufrufen.

Ein _ungültiges Datum_ entsteht, wenn Sie versuchen, einen ungültigen Datumstext zu parsen oder den Zeitstempel auf einen Wert außerhalb der Grenzen festzulegen. Ungültige Daten führen in der Regel dazu, dass alle Datumsverfahren {{jsxref("NaN")}} oder andere Spezialwerte zurückgeben. Solche Daten haben jedoch keine gültigen ISO-Zeichenketten, daher wird ein Fehler ausgelöst, wenn Sie versuchen, dies zu tun.

> [!NOTE]
> {{jsxref("Date/toJSON", "toJSON()")}} löst diesen Fehler nicht aus. Es wird überprüft, ob das Datum endlich ist, bevor es formatiert wird, und gibt für ein ungültiges Datum `null` zurück, anstatt `toISOString()` aufzurufen. {{jsxref("JSON.stringify()")}}, das `toJSON()` aufruft, serialisiert daher ein ungültiges Datum als `null` anstatt einen Fehler auszulösen.

## Beispiele

### Ungültige Fälle

```js example-bad
const invalid = new Date("nothing");
invalid.toISOString(); // RangeError: invalid date
```

Jedoch geben die meisten anderen Methoden spezielle Werte zurück:

```js example-bad
invalid.toString(); // "Invalid Date"
invalid.getDate(); // NaN
invalid.toJSON(); // null
JSON.stringify({ date: invalid }); // '{"date":null}'
```

Für weitere Details siehe die {{jsxref("Date.parse()")}} Dokumentation.

### Gültige Fälle

```js example-good
new Date("05 October 2011 14:48 UTC").toISOString(); // "2011-10-05T14:48:00.000Z"
new Date(1317826080).toISOString(); // "2011-10-05T14:48:00.000Z"
```

## Siehe auch

- {{jsxref("Date")}}
- {{jsxref("Date.prototype.parse()")}}
- {{jsxref("Date.prototype.toISOString()")}}
