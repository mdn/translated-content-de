---
title: Symbol.prototype.valueOf()
short-title: valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/valueOf
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`valueOf()`**-Methode von {{jsxref("Symbol")}}-Werten gibt diesen Symbolwert zurück.

{{InteractiveExample("JavaScript Demo: Symbol.prototype.valueOf()")}}

```js interactive-example
const symbol = Symbol("foo");

console.log(typeof Object(symbol));
// Expected output: "object"

console.log(typeof Object(symbol).valueOf());
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

JavaScript ruft die `valueOf()`-Methode auf, um ein Objekt in einen primitiven Wert zu konvertieren. Es ist selten erforderlich, dass Sie die `valueOf()`-Methode selbst aufrufen; JavaScript ruft sie automatisch auf, wenn es auf ein Objekt trifft, bei dem ein primitiver Wert erwartet wird.

## Beispiele

### Nutzung von valueOf()

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
