---
title: Object.getOwnPropertySymbols()
short-title: getOwnPropertySymbols()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`Object.getOwnPropertySymbols()`** statische Methode gibt ein Array aller Symbol-Eigenschaften zurück, die direkt auf einem gegebenen Objekt gefunden werden.

{{InteractiveExample("JavaScript Demo: Object.getOwnPropertySymbols()")}}

```js interactive-example
const object = {};
const a = Symbol("a");
const b = Symbol.for("b");

object[a] = "localSymbol";
object[b] = "globalSymbol";

const objectSymbols = Object.getOwnPropertySymbols(object);

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

Ähnlich wie {{jsxref("Object.getOwnPropertyNames()")}} können Sie alle Symbol-Eigenschaften eines gegebenen Objekts als ein Array von Symbolen erhalten. Beachten Sie, dass {{jsxref("Object.getOwnPropertyNames()")}} selbst keine Symbol-Eigenschaften eines Objekts enthält, sondern nur die String-Eigenschaften.

Da alle Objekte anfangs keine eigenen Symbol-Eigenschaften haben, gibt `Object.getOwnPropertySymbols()` ein leeres Array zurück, es sei denn, Sie haben Symbol-Eigenschaften auf Ihrem Objekt gesetzt.

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
