---
title: Date.prototype[Symbol.toPrimitive]()
slug: Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{JSRef}}

Die **`[Symbol.toPrimitive]()`** Methode von {{jsxref("Date")}} Instanzen gibt einen primitiven Wert zurück, der dieses Datum repräsentiert. Dieser Wert kann entweder ein String oder eine Zahl sein, abhängig vom übergebenen Hinweis.

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
  - : Ein String, der den Typ des zurückzugebenden primitiven Wertes angibt. Die folgenden Werte sind gültig:
    - `"string"` oder `"default"`: Die Methode sollte einen String zurückgeben.
    - `"number"`: Die Methode sollte eine Zahl zurückgeben.

### Rückgabewert

Falls `hint` `"string"` oder `"default"` ist, gibt diese Methode einen String zurück, [indem der `this` Wert in einen String umgewandelt wird](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) (zuerst wird `toString()` versucht, dann `valueOf()`).

Falls `hint` `"number"` ist, gibt diese Methode eine Zahl zurück, [indem der `this` Wert in eine Zahl umgewandelt wird](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) (zuerst wird `valueOf()` versucht, dann `toString()`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das `hint` Argument keiner der drei gültigen Werte ist.

## Beschreibung

Die `[Symbol.toPrimitive]()` Methode ist Teil des [Datentyp-Umwandlungsprotokolls](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion). JavaScript ruft immer die `[Symbol.toPrimitive]()` Methode vorrangig auf, um ein Objekt in einen primitiven Wert zu konvertieren. Es ist selten notwendig, die `[Symbol.toPrimitive]()` Methode selbst aufzurufen; JavaScript ruft sie automatisch auf, wenn ein Objekt erwartet wird, das in einen primitiven Wert umgewandelt werden soll.

Die `[Symbol.toPrimitive]()` Methode des {{jsxref("Date")}} Objekts gibt einen primitiven Wert zurück, indem entweder {{jsxref("Date/valueOf", "this.valueOf()")}} aufgerufen wird und eine Zahl zurückgegeben wird, oder {{jsxref("Date/toString", "this.toString()")}} aufgerufen wird und ein String zurückgegeben wird. Sie existiert, um den standardmäßigen [Datentyp-Umwandlungsprozess](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) zu überschreiben und einen String statt einer Zahl zurückzugeben, da der Umwandlungsprozess standardmäßig {{jsxref("Date/valueOf", "valueOf()")}} vor {{jsxref("Date/toString", "toString()")}} aufruft. Mit dem benutzerdefinierten `[Symbol.toPrimitive]()`, gibt `new Date(0) + 1` `"Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)1"` (einen String) zurück, anstatt `1` (eine Zahl).

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
