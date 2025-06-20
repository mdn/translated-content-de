---
title: Symbol.for()
short-title: for()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/for
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Methode **`Symbol.for()`** durchsucht ein zur Laufzeit gültiges Symbolregister nach vorhandenen Symbolen mit dem angegebenen Schlüssel und gibt es zurück, falls es gefunden wird. Andernfalls wird ein neues Symbol im globalen Symbolregister mit diesem Schlüssel erstellt.

{{InteractiveExample("JavaScript Demo: Symbol.for()")}}

```js interactive-example
console.log(Symbol.for("bar") === Symbol.for("bar"));
// Expected output: true

console.log(Symbol("bar") === Symbol("bar"));
// Expected output: false

const symbol1 = Symbol.for("foo");

console.log(symbol1.toString());
// Expected output: "Symbol(foo)"
```

## Syntax

```js-nolint
Symbol.for(key)
```

### Parameter

- `key`
  - : String, erforderlich. Der Schlüssel für das Symbol (und auch für die Beschreibung des Symbols verwendet).

### Rückgabewert

Ein vorhandenes Symbol mit dem angegebenen Schlüssel, falls gefunden; andernfalls wird ein neues Symbol erstellt und zurückgegeben.

## Beschreibung

Im Gegensatz zu `Symbol()` erstellt die Funktion `Symbol.for()` ein in einer [globalen Symbolregisterliste](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) verfügbares Symbol. `Symbol.for()` erstellt nicht unbedingt bei jedem Aufruf ein neues Symbol, sondern prüft zuerst, ob ein Symbol mit dem angegebenen `key` bereits im Register vorhanden ist. In diesem Fall wird dieses Symbol zurückgegeben. Wenn kein Symbol mit dem angegebenen Schlüssel gefunden wird, erstellt `Symbol.for()` ein neues globales Symbol.

## Beispiele

### Verwendung von Symbol.for()

```js
Symbol.for("foo"); // create a new global symbol
Symbol.for("foo"); // retrieve the already created symbol

// Same global symbol, but not locally
Symbol.for("bar") === Symbol.for("bar"); // true
Symbol("bar") === Symbol("bar"); // false

// The key is also used as the description
const sym = Symbol.for("mario");
sym.toString(); // "Symbol(mario)"
```

Um Namenskonflikte Ihrer globalen Symbolschlüssel mit anderen (Bibliothekscode) globalen Symbolen zu vermeiden, könnte es eine gute Idee sein, Ihre Symbole zu präfixen:

```js
Symbol.for("mdn.foo");
Symbol.for("mdn.bar");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Symbol.keyFor()")}}
