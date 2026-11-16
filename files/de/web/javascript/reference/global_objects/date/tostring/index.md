---
title: Date.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toString
l10n:
  sourceCommit: 98972b1f827b7374e28aee591a73044ffd8fb758
---

Die Methode **`toString()`** von {{jsxref("Date")}}-Instanzen gibt einen String zurück, der dieses Datum in der lokalen Zeitzone darstellt.

{{InteractiveExample("JavaScript Demo: Date.prototype.toString()", "shorter")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

console.log(event.toString());
// Expected output: "Tue Aug 19 1975 23:15:30 GMT+0200 (CEST)"
// Note: your timezone may vary
```

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der das angegebene Datum darstellt (siehe Beschreibung für das Format). Gibt `"Invalid Date"` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beschreibung

Die Methode `toString()` ist Teil des [Protokolls zur Typumwandlung](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion). Da `Date` über eine Methode [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) verfügt, hat diese immer Vorrang vor `toString()`, wenn ein `Date`-Objekt implizit [in einen String umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) wird. Allerdings ruft `Date.prototype[Symbol.toPrimitive]()` intern weiterhin `this.toString()` auf.

Das Objekt {{jsxref("Date")}} überschreibt die Methode {{jsxref("Object/toString", "toString()")}} von {{jsxref("Object")}}. `Date.prototype.toString()` gibt eine String-Darstellung des Datums in der lokalen Zeitzone zurück, die sowohl das Datum als auch die Uhrzeit enthält. Dazu werden die von {{jsxref("Date/toDateString", "toDateString()")}} und {{jsxref("Date/toTimeString", "toTimeString()")}} erzeugten String-Darstellungen mit einem Leerzeichen dazwischen verbunden. Zum Beispiel: „Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)“.

`Date.prototype.toString()` muss für eine {{jsxref("Date")}}-Instanz aufgerufen werden. Wenn der `this`-Wert keine Instanz von `Date` ist, wird ein {{jsxref("TypeError")}} ausgelöst.

- Wenn Sie nur das _Datum_ benötigen, verwenden Sie {{jsxref("Date/toDateString", "toDateString()")}}.
- Wenn Sie nur die _Uhrzeit_ benötigen, verwenden Sie {{jsxref("Date/toTimeString", "toTimeString()")}}.
- Wenn das Datum in UTC statt in der lokalen Zeitzone interpretiert werden soll, verwenden Sie {{jsxref("Date/toUTCString", "toUTCString()")}}.
- Wenn Sie das Datum in einem benutzerfreundlicheren Format darstellen möchten (z. B. entsprechend einer Sprache oder Region), verwenden Sie {{jsxref("Date/toLocaleString", "toLocaleString()")}}.

## Beispiele

### Verwendung von toString()

```js
const d = new Date(0);
console.log(d.toString()); // "Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Object.prototype.toString()")}}
- {{jsxref("Date.prototype.toDateString()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
