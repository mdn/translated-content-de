---
title: Date.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toString
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`toString()`**-Methode von {{jsxref("Date")}}-Instanzen gibt eine Zeichenkette zurück, die dieses Datum interpretiert in der lokalen Zeitzone repräsentiert.

{{InteractiveExample("JavaScript Demo: Date.toString()", "shorter")}}

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

Eine Zeichenkette, die das angegebene Datum repräsentiert (sehen Sie die Beschreibung für das Format). Gibt `"Invalid Date"` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beschreibung

Die `toString()`-Methode ist Teil des [Typumwandlungsprotokolls](/de/docs/Web/JavaScript/Data_structures#type_coercion). Da `Date` eine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive)-Methode besitzt, hat diese Methode immer Vorrang vor `toString()`, wenn ein `Date`-Objekt implizit [in einen String umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) wird. Allerdings ruft `Date.prototype[Symbol.toPrimitive]()` intern dennoch `this.toString()` auf.

Das {{jsxref("Date")}}-Objekt überschreibt die {{jsxref("Object/toString", "toString()")}}-Methode von {{jsxref("Object")}}. `Date.prototype.toString()` gibt eine Zeichenkette zurück, die das Datum interpretiert in der lokalen Zeitzone repräsentiert und sowohl das Datum als auch die Uhrzeit enthält – es kombiniert die durch {{jsxref("Date/toDateString", "toDateString()")}} und {{jsxref("Date/toTimeString", "toTimeString()")}} spezifizierten Zeichenketten, wobei ein Leerzeichen hinzugefügt wird. Beispiel: "Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)".

`Date.prototype.toString()` muss auf {{jsxref("Date")}}-Instanzen aufgerufen werden. Wenn der `this`-Wert nicht von `Date.prototype` erbt, wird ein {{jsxref("TypeError")}} ausgelöst.

- Wenn Sie nur den _Datumsteil_ benötigen, verwenden Sie {{jsxref("Date/toDateString", "toDateString()")}}.
- Wenn Sie nur den _Uhrzeitteil_ benötigen, verwenden Sie {{jsxref("Date/toTimeString", "toTimeString()")}}.
- Wenn Sie möchten, dass das Datum in UTC anstelle der lokalen Zeitzone interpretiert wird, verwenden Sie {{jsxref("Date/toUTCString", "toUTCString()")}}.
- Wenn Sie das Datum in einem benutzerfreundlicheren Format (z. B. mit Lokalisierung) formatieren möchten, verwenden Sie {{jsxref("Date/toLocaleString", "toLocaleString()")}}.

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
