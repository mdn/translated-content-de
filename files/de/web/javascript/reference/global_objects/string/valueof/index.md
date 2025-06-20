---
title: String.prototype.valueOf()
short-title: valueOf()
slug: Web/JavaScript/Reference/Global_Objects/String/valueOf
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`valueOf()`** Methode von {{jsxref("String")}}-Werten gibt diesen String-Wert zurück.

{{InteractiveExample("JavaScript Demo: String.prototype.valueOf()")}}

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

Ein string, der den primitiven Wert eines gegebenen {{jsxref("String")}}-Objekts darstellt.

## Beschreibung

Die `valueOf()`-Methode von {{jsxref("String")}} gibt den primitiven Wert
eines {{jsxref("String")}}-Objekts als String-Datentyp zurück. Dieser Wert ist gleichwertig
mit {{jsxref("String.prototype.toString()")}}.

Diese Methode wird normalerweise intern von JavaScript aufgerufen und nicht explizit im Code.

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
