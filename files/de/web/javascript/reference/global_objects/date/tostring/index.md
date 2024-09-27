---
title: Date.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toString
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`toString()`** Methode von {{jsxref("Date")}} Instanzen gibt eine Zeichenfolge zurück, die dieses Datum in der lokalen Zeitzone darstellt.

{{EmbedInteractiveExample("pages/js/date-tostring.html", "shorter")}}

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Eine Zeichenfolge, die das angegebene Datum darstellt (siehe Beschreibung für das Format). Gibt `"Invalid Date"` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beschreibung

Die `toString()` Methode ist Teil des [Typenkonvertierungsprotokolls](/de/docs/Web/JavaScript/Data_structures#type_coercion). Da `Date` eine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) Methode hat, hat diese Methode immer Vorrang vor `toString()`, wenn ein `Date` Objekt implizit [in eine Zeichenfolge umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) wird. Dennoch ruft `Date.prototype[Symbol.toPrimitive]()` intern `this.toString()` auf.

Das {{jsxref("Date")}} Objekt überschreibt die {{jsxref("Object/toString", "toString()")}} Methode von {{jsxref("Object")}}. `Date.prototype.toString()` gibt eine Zeichenfolgendarstellung des Datums zurück, wie es in der lokalen Zeitzone interpretiert wird und enthält sowohl das Datum als auch die Uhrzeit — es fügt die Zeichenfolgendarstellungen von {{jsxref("Date/toDateString", "toDateString()")}} und {{jsxref("Date/toTimeString", "toTimeString()")}} zusammen und fügt ein Leerzeichen dazwischen hinzu. Zum Beispiel: "Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)".

`Date.prototype.toString()` muss auf {{jsxref("Date")}} Instanzen aufgerufen werden. Wenn der `this` Wert nicht von `Date.prototype` erbt, wird ein {{jsxref("TypeError")}} ausgelöst.

- Wenn Sie nur den _Datumsteil_ erhalten möchten, verwenden Sie {{jsxref("Date/toDateString", "toDateString()")}}.
- Wenn Sie nur den _Zeitteil_ erhalten möchten, verwenden Sie {{jsxref("Date/toTimeString", "toTimeString()")}}.
- Wenn Sie das Datum als UTC statt als lokale Zeitzone interpretieren möchten, verwenden Sie {{jsxref("Date/toUTCString", "toUTCString()")}}.
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
