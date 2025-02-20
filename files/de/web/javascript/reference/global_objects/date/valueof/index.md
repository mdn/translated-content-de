---
title: Date.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Date/valueOf
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`valueOf()`**-Methode von {{jsxref("Date")}}-Instanzen gibt die Anzahl der Millisekunden für dieses Datum seit dem [Epoch-Zeitpunkt](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück, welcher als Mitternacht zu Beginn des 1. Januar 1970, UTC, definiert ist.

{{InteractiveExample("JavaScript Demo: Date.valueOf()")}}

```js interactive-example
const date1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));

console.log(date1.valueOf());
// Expected output: 823230245000

const date2 = new Date("02 Feb 1996 03:04:05 GMT");

console.log(date2.valueOf());
// Expected output: 823230245000
```

## Syntax

```js-nolint
valueOf()
```

### Parameter

Keine.

### Rückgabewert

Eine Zahl, die den [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) in Millisekunden für dieses Datum darstellt. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beschreibung

Die `valueOf()`-Methode ist Teil des [Typumwandlungsprotokolls](/de/docs/Web/JavaScript/Data_structures#type_coercion). Da `Date` über eine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive)-Methode verfügt, hat diese Methode immer Vorrang vor `valueOf()`, wenn ein `Date`-Objekt implizit [in eine Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) wird. Dennoch ruft `Date.prototype[Symbol.toPrimitive]()` intern immer noch `this.valueOf()` auf.

Das {{jsxref("Date")}}-Objekt überschreibt die {{jsxref("Object/valueOf", "valueOf()")}}-Methode von {{jsxref("Object")}}. `Date.prototype.valueOf()` gibt den Zeitstempel des Datums zurück, was funktional äquivalent zur Methode {{jsxref("Date.prototype.getTime()")}} ist.

## Beispiele

### Verwendung von valueOf()

```js
const d = new Date(0); // 1970-01-01T00:00:00.000Z
console.log(d.valueOf()); // 0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Object.prototype.valueOf()")}}
- {{jsxref("Date.prototype.getTime()")}}
