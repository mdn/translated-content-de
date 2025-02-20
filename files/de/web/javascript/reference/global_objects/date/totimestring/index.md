---
title: Date.prototype.toTimeString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toTimeString
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`toTimeString()`**-Methode von {{jsxref("Date")}}-Instanzen gibt eine Zeichenkette zurück, die den Zeitanteil dieses Datums im lokalen Zeitformat interpretiert darstellt.

{{InteractiveExample("JavaScript Demo: Date.toTimeString()", "shorter")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

console.log(event.toTimeString());
// Expected output: "23:15:30 GMT+0200 (CEST)"
// Note: your timezone may vary
```

## Syntax

```js-nolint
toTimeString()
```

### Parameter

Keine.

### Rückgabewert

Eine Zeichenkette, die den Zeitanteil des gegebenen Datums darstellt (siehe Beschreibung für das Format). Gibt `"Invalid Date"` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beschreibung

{{jsxref("Date")}}-Instanzen beziehen sich auf einen spezifischen Zeitpunkt. `toTimeString()` interpretiert das Datum im lokalen Zeitformat und formatiert den _Zeit_-Teil auf Englisch. Es verwendet immer das Format `HH:mm:ss GMT±xxxx (TZ)`, wobei:

| Format-Zeichenkette | Beschreibung                                                                                                                 |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `HH`                | Stunde, als zweistellige Zahl mit führender Null, falls erforderlich                                                         |
| `mm`                | Minute, als zweistellige Zahl mit führender Null, falls erforderlich                                                         |
| `ss`                | Sekunden, als zweistellige Zahl mit führender Null, falls erforderlich                                                       |
| `±xxxx`             | Die Zeitzonenverschiebung der lokalen Zeitzone — zwei Stellen für Stunden, zwei Stellen für Minuten (z. B. `-0500`, `+0800`) |
| `TZ`                | Der Name der Zeitzone (z. B. `PDT`, `PST`)                                                                                   |

Beispiel: "04:42:04 GMT+0000 (Coordinated Universal Time)".

- Wenn Sie lediglich den _Datums_-Teil erhalten möchten, verwenden Sie {{jsxref("Date/toDateString", "toDateString()")}}.
- Wenn Sie sowohl Datum als auch Zeit erhalten möchten, verwenden Sie {{jsxref("Date/toString", "toString()")}}.
- Wenn Sie das Datum als UTC anstelle der lokalen Zeitzone interpretieren möchten, verwenden Sie {{jsxref("Date/toUTCString", "toUTCString()")}}.
- Wenn Sie das Datum in einem benutzerfreundlicheren Format (z. B. lokalisiert) formatieren möchten, verwenden Sie {{jsxref("Date/toLocaleTimeString", "toLocaleTimeString()")}}.

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
