---
title: Date.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toString
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`toString()`**-Methode von {{jsxref("Date")}}-Instanzen gibt einen String zurück, der dieses Datum in der lokalen Zeitzone darstellt.

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

Die `toString()`-Methode ist Teil des [Typumwandlungsprotokolls](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion). Da `Date` über eine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive)-Methode verfügt, hat diese Methode immer Vorrang vor `toString()`, wenn ein `Date`-Objekt implizit zu einem String [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) wird. Dennoch ruft `Date.prototype[Symbol.toPrimitive]()` intern `this.toString()` auf.

Das {{jsxref("Date")}}-Objekt überschreibt die {{jsxref("Object/toString", "toString()")}}-Methode von {{jsxref("Object")}}. `Date.prototype.toString()` gibt eine String-Darstellung des Datums zurück, wie es in der lokalen Zeitzone interpretiert wird, und enthält sowohl das Datum als auch die Uhrzeit — es verbindet die String-Darstellungen, die in {{jsxref("Date/toDateString", "toDateString()")}} und {{jsxref("Date/toTimeString", "toTimeString()")}} angegeben sind, und fügt ein Leerzeichen dazwischen ein. Beispiel: "Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)".

`Date.prototype.toString()` muss auf {{jsxref("Date")}}-Instanzen aufgerufen werden. Wenn der `this`-Wert nicht von `Date.prototype` erbt, wird ein {{jsxref("TypeError")}} ausgelöst.

- Wenn Sie nur den _Datumsteil_ erhalten möchten, verwenden Sie {{jsxref("Date/toDateString", "toDateString()")}}.
- Wenn Sie nur den _Uhrzeitsteil_ erhalten möchten, verwenden Sie {{jsxref("Date/toTimeString", "toTimeString()")}}.
- Wenn Sie möchten, dass das Datum als UTC statt als lokale Zeitzone interpretiert wird, verwenden Sie {{jsxref("Date/toUTCString", "toUTCString()")}}.
- Wenn Sie das Datum in einem benutzerfreundlicheren Format (z.B. Lokalisierung) formatieren möchten, verwenden Sie {{jsxref("Date/toLocaleString", "toLocaleString()")}}.

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
