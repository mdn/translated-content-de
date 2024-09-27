---
title: Object.getOwnPropertySymbols()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols
l10n:
  sourceCommit: 892e4301623f10505dc19e56ba9fb7b505530722
---

{{JSRef}}

Die statische Methode **`Object.getOwnPropertySymbols()`** gibt ein Array aller direkt auf einem bestimmten Objekt gefundenen Symbol-Eigenschaften zurück.

{{EmbedInteractiveExample("pages/js/object-getownpropertysymbols.html")}}

## Syntax

```js-nolint
Object.getOwnPropertySymbols(obj)
```

### Parameter

- `obj`
  - : Das Objekt, dessen Symbol-Eigenschaften zurückgegeben werden sollen.

### Rückgabewert

Ein Array aller direkt auf dem angegebenen Objekt gefundenen Symbol-Eigenschaften.

## Beschreibung

Ähnlich wie {{jsxref("Object.getOwnPropertyNames()")}} können Sie alle Symbol-Eigenschaften eines bestimmten Objekts als Array von Symbolen erhalten. Beachten Sie, dass {{jsxref("Object.getOwnPropertyNames()")}} selbst nicht die Symbol-Eigenschaften eines Objekts enthält und nur die String-Eigenschaften auflistet.

Da alle Objekte anfänglich keine eigenen Symbol-Eigenschaften haben, gibt `Object.getOwnPropertySymbols()` ein leeres Array zurück, es sei denn, Sie haben Symbol-Eigenschaften auf Ihrem Objekt gesetzt.

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
