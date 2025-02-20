---
title: String.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/String/valueOf
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`valueOf()`** von {{jsxref("String")}}-Werten gibt den Wert dieses Strings zurück.

{{InteractiveExample("JavaScript Demo: String.valueOf()")}}

```js interactive-example
const stringObj = new String("foo");

console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.valueOf());
// Expected output: "foo"
```

## Syntax

```js-nolint
valueOf()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der den primitiven Wert eines gegebenen {{jsxref("String")}}-Objekts darstellt.

## Beschreibung

Die Methode `valueOf()` von {{jsxref("String")}} gibt den primitiven Wert eines {{jsxref("String")}}-Objekts als Datentyp String zurück. Dieser Wert ist gleichwertig mit {{jsxref("String.prototype.toString()")}}.

Diese Methode wird üblicherweise intern von JavaScript aufgerufen und nicht explizit im Code.

## Beispiele

### Verwendung von `valueOf()`

```js
const x = new String("Hello world");
console.log(x.valueOf()); // 'Hello world'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("String.prototype.toString()")}}
- {{jsxref("Object.prototype.valueOf()")}}
