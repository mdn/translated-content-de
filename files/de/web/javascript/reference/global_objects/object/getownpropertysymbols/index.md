---
title: Object.getOwnPropertySymbols()
short-title: getOwnPropertySymbols()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Object.getOwnPropertySymbols()`** gibt ein Array aller Symbol-Eigenschaften zurück, die direkt auf einem angegebenen Objekt vorhanden sind.

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

Ein Array aller Symbol-Eigenschaften, die direkt auf dem angegebenen Objekt vorhanden sind.

## Beschreibung

Ähnlich wie bei {{jsxref("Object.getOwnPropertyNames()")}} können Sie alle Symbol-Eigenschaften eines angegebenen Objekts als Array von Symbolen abrufen. Beachten Sie, dass {{jsxref("Object.getOwnPropertyNames()")}} selbst nicht die Symbol-Eigenschaften eines Objekts zurückgibt, sondern nur dessen String-Eigenschaften.

Da Objekte anfangs keine eigenen Symbol-Eigenschaften haben, gibt `Object.getOwnPropertySymbols()` ein leeres Array zurück, sofern Sie Ihrem Objekt keine Symbol-Eigenschaften hinzugefügt haben.

## Beispiele

### Object.getOwnPropertySymbols() verwenden

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

- [Polyfill für `Object.getOwnPropertySymbols` in `core-js`](https://core-js.io/docs/features/ecmascript/symbol)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Symbol")}}
