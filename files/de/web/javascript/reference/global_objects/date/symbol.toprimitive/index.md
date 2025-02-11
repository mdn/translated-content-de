---
title: Date.prototype[Symbol.toPrimitive]()
slug: Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`[Symbol.toPrimitive]()`** von {{jsxref("Date")}}-Instanzen gibt einen primitiven Wert zurück, der dieses Datum darstellt. Dieser Wert kann entweder ein String oder eine Zahl sein, abhängig vom angegebenen Hinweis (`hint`).

{{InteractiveExample("JavaScript Demo: Date.prototype[Symbol.toPrimitive]")}}

```js interactive-example
// Depending on timezone, your results will vary
const date = new Date("20 December 2019 14:48");

console.log(date[Symbol.toPrimitive]("string"));
// Expected output: "Fri Dec 20 2019 14:48:00 GMT+0530 (India Standard Time)"

console.log(date[Symbol.toPrimitive]("number"));
// Expected output: 1576833480000
```

## Syntax

```js-nolint
date[Symbol.toPrimitive](hint)
```

### Parameter

- `hint`
  - : Ein String, der die Art des zurückzugebenden primitiven Wertes angibt. Folgende Werte sind gültig:
    - `"string"` oder `"default"`: Die Methode sollte einen String zurückgeben.
    - `"number"`: Die Methode sollte eine Zahl zurückgeben.

### Rückgabewert

Wenn `hint` `"string"` oder `"default"` ist, gibt diese Methode einen String zurück, indem [der `this`-Wert in einen String umgewandelt wird](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) (zuerst wird `toString()` aufgerufen, dann `valueOf()`).

Wenn `hint` `"number"` ist, gibt diese Methode eine Zahl zurück, indem [der `this`-Wert in eine Zahl umgewandelt wird](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) (zuerst wird `valueOf()` aufgerufen, dann `toString()`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das `hint`-Argument nicht einer der drei gültigen Werte ist.

## Beschreibung

Die Methode `[Symbol.toPrimitive]()` ist Teil des [Typumwandlungsprotokolls](/de/docs/Web/JavaScript/Data_structures#type_coercion). JavaScript ruft immer prioritär die Methode `[Symbol.toPrimitive]()` auf, um ein Objekt in einen primitiven Wert umzuwandeln. Es ist selten nötig, die Methode `[Symbol.toPrimitive]()` selbst aufzurufen; JavaScript führt dies automatisch aus, wenn es auf ein Objekt trifft, bei dem ein primitiver Wert erwartet wird.

Die Methode `[Symbol.toPrimitive]()` des {{jsxref("Date")}}-Objekts gibt einen primitiven Wert zurück, indem entweder {{jsxref("Date/valueOf", "this.valueOf()")}} aufgerufen wird, um eine Zahl zurückzugeben, oder {{jsxref("Date/toString", "this.toString()")}}, um einen String zurückzugeben. Sie existiert, um den Standardprozess der [primitiven Umwandlung](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) zu überschreiben, damit ein String anstelle einer Zahl zurückgegeben wird. Denn die primitive Umwandlung ruft standardmäßig {{jsxref("Date/valueOf", "valueOf()")}} vor {{jsxref("Date/toString", "toString()")}} auf. Mit der benutzerdefinierten Methode `[Symbol.toPrimitive]()` gibt `new Date(0) + 1` den String `"Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)1"` zurück, anstatt die Zahl `1`.

## Beispiele

### Verwendung von \[Symbol.toPrimitive]()

```js
const d = new Date(0); // 1970-01-01T00:00:00.000Z

d[Symbol.toPrimitive]("string"); // "Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)"
d[Symbol.toPrimitive]("number"); // 0
d[Symbol.toPrimitive]("default"); // "Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Symbol.toPrimitive")}}
