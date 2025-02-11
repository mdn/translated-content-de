---
title: Date.prototype.toDateString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toDateString
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`toDateString()`**-Methode von {{jsxref("Date")}}-Instanzen gibt einen String zurück, der den Datumsanteil des angegebenen Datums repräsentiert, interpretiert in der lokalen Zeitzone.

{{InteractiveExample("JavaScript Demo: Date.toDateString()")}}

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

Ein String, der den Datumsanteil des angegebenen Datums repräsentiert (siehe Beschreibung für das Format). Gibt `"Invalid Date"` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beschreibung

{{jsxref("Date")}}-Instanzen beziehen sich auf einen spezifischen Zeitpunkt. `toDateString()` interpretiert das Datum in der lokalen Zeitzone und formatiert den _Datums_-Teil auf Englisch. Dabei wird immer folgendes Format, durch Leerzeichen getrennt, verwendet:

1. Die ersten drei Buchstaben des Wochentagnamens
2. Die ersten drei Buchstaben des Monatsnamens
3. Zweistelliger Tag des Monats, links aufgefüllt mit einer Null, falls erforderlich
4. Vierstellige Jahreszahl (mindestens), links aufgefüllt mit Nullen, falls erforderlich. Kann ein negatives Vorzeichen enthalten

Zum Beispiel: "Thu Jan 01 1970".

- Wenn Sie nur den _Zeit_-Teil erhalten möchten, verwenden Sie {{jsxref("Date/toTimeString", "toTimeString()")}}.
- Wenn Sie sowohl das Datum als auch die Uhrzeit erhalten möchten, verwenden Sie {{jsxref("Date/toString", "toString()")}}.
- Wenn das Datum als UTC statt in der lokalen Zeitzone interpretiert werden soll, verwenden Sie {{jsxref("Date/toUTCString", "toUTCString()")}}.
- Wenn Sie das Datum in einem benutzerfreundlicheren Format (z. B. lokalisiert) formatieren möchten, verwenden Sie {{jsxref("Date/toLocaleDateString", "toLocaleDateString()")}}.

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
