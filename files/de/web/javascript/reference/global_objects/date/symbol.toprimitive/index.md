---
title: Date.prototype[Symbol.toPrimitive]()
short-title: "[Symbol.toPrimitive]()"
slug: Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die Methode **`[Symbol.toPrimitive]()`** von {{jsxref("Date")}}-Instanzen gibt einen primitiven Wert zurück, der dieses Datum darstellt. Es kann entweder ein String oder eine Zahl sein, abhängig vom gegebenen Hinweis.

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
  - : Ein String, der den Typ des zurückzugebenden primitiven Wertes darstellt. Die folgenden Werte sind gültig:
    - `"string"` oder `"default"`: Die Methode sollte einen String zurückgeben.
    - `"number"`: Die Methode sollte eine Zahl zurückgeben.

### Rückgabewert

Wenn `hint` `"string"` oder `"default"` ist, gibt diese Methode einen String zurück, indem der `this`-Wert [zu einem String gezwungen wird](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) (zuerst durch `toString()`, dann durch `valueOf()`).

Wenn `hint` `"number"` ist, gibt diese Methode eine Zahl zurück, indem der `this`-Wert [zu einer Zahl gezwungen wird](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) (zuerst durch `valueOf()`, dann durch `toString()`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das `hint`-Argument nicht einer der drei gültigen Werte ist.

## Beschreibung

Die Methode `[Symbol.toPrimitive]()` ist Teil des [Typumwandlungsprotokolls](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion). JavaScript ruft immer die Methode `[Symbol.toPrimitive]()` vorrangig auf, um ein Objekt in einen primitiven Wert zu konvertieren. Sie müssen die Methode `[Symbol.toPrimitive]()` selten selbst aufrufen; JavaScript ruft sie automatisch auf, wenn es auf ein Objekt stößt, wo ein primitiver Wert erwartet wird.

Die Methode `[Symbol.toPrimitive]()` des {{jsxref("Date")}}-Objekts gibt einen primitiven Wert zurück, indem entweder {{jsxref("Date/valueOf", "this.valueOf()")}} aufgerufen und eine Zahl zurückgegeben wird, oder {{jsxref("Date/toString", "this.toString()")}} aufgerufen und ein String zurückgegeben wird. Sie existiert, um den Standardprozess der [primitiven Umwandlung](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) zu überschreiben und stattdessen einen String zurückzugeben, da die primitive Umwandlung standardmäßig {{jsxref("Date/valueOf", "valueOf()")}} vor {{jsxref("Date/toString", "toString()")}} aufruft. Mit dem benutzerdefinierten `[Symbol.toPrimitive]()`, gibt `new Date(0) + 1` `"Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)1"` (ein String) anstelle von `1` (eine Zahl) zurück.

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
