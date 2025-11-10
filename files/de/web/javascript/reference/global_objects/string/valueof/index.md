---
title: String.prototype.valueOf()
short-title: valueOf()
slug: Web/JavaScript/Reference/Global_Objects/String/valueOf
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die Methode **`valueOf()`** von {{jsxref("String")}}-Werten gibt diesen Zeichenkettenwert zurück.

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

Eine Zeichenkette, die den primitiven Wert eines gegebenen {{jsxref("String")}}-Objekts darstellt.

## Beschreibung

Die `valueOf()`-Methode von {{jsxref("String")}} gibt den primitiven Wert
eines {{jsxref("String")}}-Objekts als Zeichenkettendatentyp zurück. Dieser Wert ist gleichwertig zu
{{jsxref("String.prototype.toString()")}}.

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
