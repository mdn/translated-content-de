---
title: Symbol.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/valueOf
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`valueOf()`**-Methode von {{jsxref("Symbol")}}-Werten gibt diesen Symbolwert zurück.

{{InteractiveExample("JavaScript Demo: Symbol.prototype.valueOf()")}}

```js interactive-example
const symbol1 = Symbol("foo");

console.log(typeof Object(symbol1));
// Expected output: "object"

console.log(typeof Object(symbol1).valueOf());
// Expected output: "symbol"
```

## Syntax

```js-nolint
valueOf()
```

### Parameter

Keine.

### Rückgabewert

Der primitive Wert des angegebenen {{jsxref("Symbol")}}-Objekts.

## Beschreibung

Die `valueOf()`-Methode von {{jsxref("Symbol")}} gibt den primitiven Wert eines Symbol-Objekts als Symbol-Datentyp zurück.

JavaScript ruft die `valueOf()`-Methode auf, um ein Objekt in einen primitiven Wert zu konvertieren. Es ist selten notwendig, dass Sie die `valueOf()`-Methode selbst aufrufen; JavaScript ruft sie automatisch auf, wenn es auf ein Objekt trifft, wo ein primitiver Wert erwartet wird.

## Beispiele

### Verwendung von valueOf()

```js
const sym = Symbol("example");
sym === sym.valueOf(); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Object.prototype.valueOf()")}}
