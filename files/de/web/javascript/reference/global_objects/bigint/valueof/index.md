---
title: BigInt.prototype.valueOf()
short-title: valueOf()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/valueOf
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`valueOf()`**-Methode von {{jsxref("BigInt")}}-Werten gibt den eingeschlossenen primitiven Wert eines {{jsxref("BigInt")}}-Objekts zurück.

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

Ein BigInt, das den primitiven Wert des angegebenen {{jsxref("BigInt")}}-Objekts darstellt.

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
