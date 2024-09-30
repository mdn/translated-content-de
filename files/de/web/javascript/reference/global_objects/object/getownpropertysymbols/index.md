---
title: Object.getOwnPropertySymbols()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols
l10n:
  sourceCommit: 892e4301623f10505dc19e56ba9fb7b505530722
---

{{JSRef}}

Die **`Object.getOwnPropertySymbols()`** statische Methode gibt ein Array aller Symbol-Eigenschaften zurück, die direkt bei einem gegebenen Objekt gefunden wurden.

{{EmbedInteractiveExample("pages/js/object-getownpropertysymbols.html")}}

## Syntax

```js-nolint
Object.getOwnPropertySymbols(obj)
```

### Parameter

- `obj`
  - : Das Objekt, dessen Symbol-Eigenschaften zurückgegeben werden sollen.

### Rückgabewert

Ein Array aller Symbol-Eigenschaften, die direkt bei dem gegebenen Objekt gefunden wurden.

## Beschreibung

Ähnlich wie {{jsxref("Object.getOwnPropertyNames()")}} können Sie alle Symbol-Eigenschaften eines gegebenen Objekts als ein Array von Symbolen erhalten. Beachten Sie, dass {{jsxref("Object.getOwnPropertyNames()")}} selbst keine Symbol-Eigenschaften eines Objekts enthält und nur die String-Eigenschaften.

Da alle Objekte anfangs keine eigenen Symbol-Eigenschaften haben, gibt `Object.getOwnPropertySymbols()` ein leeres Array zurück, es sei denn, Sie haben Symbol-Eigenschaften an Ihrem Objekt festgelegt.

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
