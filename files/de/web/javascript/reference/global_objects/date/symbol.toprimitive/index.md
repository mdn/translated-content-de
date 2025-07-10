---
title: Date.prototype[Symbol.toPrimitive]()
short-title: "[Symbol.toPrimitive]()"
slug: Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`[Symbol.toPrimitive]()`** Methode von {{jsxref("Date")}} Instanzen gibt einen primitiven Wert zurück, der dieses Datum repräsentiert. Je nach angegebenem Hinweis kann es sich entweder um einen String oder eine Zahl handeln.

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

Wenn `hint` `"string"` oder `"default"` ist, gibt diese Methode einen String zurück, indem sie [den `this`-Wert zu einem String zwingt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) (zuerst versucht sie `toString()`, dann `valueOf()`).

Wenn `hint` `"number"` ist, gibt diese Methode eine Zahl zurück, indem sie [den `this`-Wert zu einer Zahl zwingt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) (zuerst versucht sie `valueOf()`, dann `toString()`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das `hint`-Argument nicht einer der drei gültigen Werte ist.

## Beschreibung

Die `[Symbol.toPrimitive]()` Methode ist Teil des [Typerzwingungsprotokolls](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion). JavaScript ruft immer die `[Symbol.toPrimitive]()` Methode mit Vorrang auf, um ein Objekt in einen primitiven Wert zu konvertieren. Sie müssen die `[Symbol.toPrimitive]()` Methode selten selbst aufrufen; JavaScript ruft sie automatisch auf, wenn ein Objekt angetroffen wird, wo ein primitiver Wert erwartet wird.

Die `[Symbol.toPrimitive]()` Methode des {{jsxref("Date")}} Objekts gibt einen primitiven Wert zurück, indem sie entweder {{jsxref("Date/valueOf", "this.valueOf()")}} aufruft und eine Zahl zurückgibt, oder {{jsxref("Date/toString", "this.toString()")}} aufruft und einen String zurückgibt. Sie existiert, um den Standardprozess der [primitiven Zwingung](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) zu überschreiben und einen String anstelle einer Zahl zurückzugeben, weil die primitive Zwingung standardmäßig {{jsxref("Date/valueOf", "valueOf()")}} vor {{jsxref("Date/toString", "toString()")}} aufruft. Mit dem benutzerdefinierten `[Symbol.toPrimitive]()`, gibt `new Date(0) + 1` `"Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)1"` (einen String) anstelle von `1` (einer Zahl) zurück.

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
