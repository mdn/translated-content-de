---
title: BigInt.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/valueOf
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`valueOf()`**-Methode von {{jsxref("BigInt")}}-Werten gibt den enthaltenen primitiven Wert eines {{jsxref("BigInt")}}-Objekts zurück.

{{InteractiveExample("JavaScript Demo: BigInt.prototype.valueOf()", "shorter")}}

```js interactive-example
console.log(typeof Object(1n));
// Expected output: "object"

console.log(typeof Object(1n).valueOf());
// Expected output: "bigint"
```

## Syntax

```js-nolint
valueOf()
```

### Parameter

Keine.

### Rückgabewert

Ein BigInt, der den primitiven Wert des angegebenen {{jsxref("BigInt")}}-Objekts darstellt.

## Beispiele

### Verwendung von `valueOf`

```js
typeof Object(1n); // object
typeof Object(1n).valueOf(); // bigint
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("BigInt.prototype.toString()")}}
