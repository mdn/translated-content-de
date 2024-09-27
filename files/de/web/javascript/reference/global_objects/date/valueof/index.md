---
title: Date.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Date/valueOf
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`valueOf()`**-Methode von {{jsxref("Date")}} Instanzen gibt die Anzahl der Millisekunden seit der [Epoche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) für dieses Datum zurück, die als Mitternacht zu Beginn des 1. Januar 1970 UTC definiert ist.

{{EmbedInteractiveExample("pages/js/date-valueof.html")}}

## Syntax

```js-nolint
valueOf()
```

### Parameter

Keine.

### Rückgabewert

Eine Zahl, die den [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) dieses Datums in Millisekunden darstellt. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beschreibung

Die `valueOf()`-Methode ist Teil des [Typkonvertierungsprotokolls](/de/docs/Web/JavaScript/Data_structures#type_coercion). Da `Date` eine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive)-Methode hat, hat diese Methode immer Vorrang vor `valueOf()`, wenn ein `Date`-Objekt implizit [in eine Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) wird. Jedoch ruft `Date.prototype[Symbol.toPrimitive]()` intern immer noch `this.valueOf()` auf.

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
