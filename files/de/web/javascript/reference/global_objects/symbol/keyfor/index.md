---
title: Symbol.keyFor()
short-title: keyFor()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/keyFor
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`Symbol.keyFor()`** statische Methode ruft einen gemeinsamen Symbolschlüssel aus dem globalen Symbolregister für das angegebene Symbol ab.

{{InteractiveExample("JavaScript Demo: Symbol.keyFor()")}}

```js interactive-example
const globalSym = Symbol.for("foo"); // Global symbol

console.log(Symbol.keyFor(globalSym));
// Expected output: "foo"

const localSym = Symbol(); // Local symbol

console.log(Symbol.keyFor(localSym));
// Expected output: undefined

console.log(Symbol.keyFor(Symbol.iterator));
// Expected output: undefined
```

## Syntax

```js-nolint
Symbol.keyFor(sym)
```

### Parameter

- `sym`
  - : Symbol, erforderlich. Das Symbol, für das ein Schlüssel gefunden werden soll.

### Rückgabewert

Ein String, der den Schlüssel für das angegebene Symbol darstellt, falls einer im [globalen Register](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) gefunden wird; andernfalls {{jsxref("undefined")}}.

## Beispiele

### Verwendung von keyFor()

```js
const globalSym = Symbol.for("foo"); // create a new global symbol
Symbol.keyFor(globalSym); // "foo"

const localSym = Symbol();
Symbol.keyFor(localSym); // undefined

// well-known symbols are not symbols registered
// in the global symbol registry
Symbol.keyFor(Symbol.iterator); // undefined
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Symbol.for()")}}
