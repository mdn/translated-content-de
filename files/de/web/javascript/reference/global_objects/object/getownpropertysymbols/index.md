---
title: Object.getOwnPropertySymbols()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Methode **`Object.getOwnPropertySymbols()`** gibt ein Array aller Symbol-Eigenschaften zurück, die direkt auf einem gegebenen Objekt gefunden werden.

{{InteractiveExample("JavaScript Demo: Object.getOwnPropertySymbols()")}}

```js interactive-example
const object1 = {};
const a = Symbol("a");
const b = Symbol.for("b");

object1[a] = "localSymbol";
object1[b] = "globalSymbol";

const objectSymbols = Object.getOwnPropertySymbols(object1);

console.log(objectSymbols.length);
// Expected output: 2
```

## Syntax

```js-nolint
Object.getOwnPropertySymbols(obj)
```

### Parameter

- `obj`
  - : Das Objekt, dessen Symbol-Eigenschaften zurückgegeben werden sollen.

### Rückgabewert

Ein Array aller Symbol-Eigenschaften, die direkt auf dem gegebenen Objekt gefunden werden.

## Beschreibung

Ähnlich wie {{jsxref("Object.getOwnPropertyNames()")}} können Sie mit dieser Methode alle Symbol-Eigenschaften eines gegebenen Objekts als Array von Symbolen erhalten. Beachten Sie, dass {{jsxref("Object.getOwnPropertyNames()")}} selbst keine Symbol-Eigenschaften eines Objekts enthält und nur die String-Eigenschaften zurückgibt.

Da Objekte anfangs keine eigenen Symbol-Eigenschaften besitzen, gibt `Object.getOwnPropertySymbols()` ein leeres Array zurück, es sei denn, Sie haben Symbol-Eigenschaften auf Ihrem Objekt gesetzt.

## Beispiele

### Verwendung von Object.getOwnPropertySymbols()

```js
const obj = {};
const a = Symbol("a");
const b = Symbol.for("b");

obj[a] = "localSymbol";
obj[b] = "globalSymbol";

const objectSymbols = Object.getOwnPropertySymbols(obj);

console.log(objectSymbols.length); // 2
console.log(objectSymbols); // [Symbol(a), Symbol(b)]
console.log(objectSymbols[0]); // Symbol(a)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Object.getOwnPropertySymbols` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Symbol")}}
