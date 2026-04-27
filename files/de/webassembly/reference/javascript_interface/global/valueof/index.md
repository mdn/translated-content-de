---
title: WebAssembly.Global.prototype.valueOf()
short-title: valueOf()
slug: WebAssembly/Reference/JavaScript_interface/Global/valueOf
l10n:
  sourceCommit: a21bf857ac668ad72a36aad0d8ad7e87c6bdc4d8
---

Die **`valueOf`** Methode des [`WebAssembly.Global`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global) Objektprototyps gibt den Wert zurück, der in der globalen Variable enthalten ist.

## Syntax

```js-nolint
valueOf()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der den Wert der globalen Variable angibt.

## Beispiele

### Grundlegende Verwendung

```js
const myGlobal = new WebAssembly.Global({ value: "i32", mutable: true }, 42);

// 42
console.log(myGlobal.valueOf());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Definition von [`global`](/de/docs/WebAssembly/Reference/Definitions/global)
- [WebAssembly](/de/docs/WebAssembly)
