---
title: String.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/String/valueOf
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`valueOf()`** Methode von {{jsxref("String")}} Werten gibt diesen Zeichenfolgenwert zurück.

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

Eine Zeichenfolge, die den primären Wert eines gegebenen {{jsxref("String")}} Objekts darstellt.

## Beschreibung

Die `valueOf()` Methode von {{jsxref("String")}} gibt den primären Wert
eines {{jsxref("String")}} Objekts als Zeichenfolgen-Datentyp zurück. Dieser Wert entspricht
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
