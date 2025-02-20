---
title: Symbol.for()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/for
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Methode **`Symbol.for()`** durchsucht ein laufzeitweites Symbol-Register nach vorhandenen Symbolen mit dem angegebenen Schlüssel und gibt dieses zurück, falls gefunden. Andernfalls wird ein neues Symbol mit diesem Schlüssel im globalen Symbol-Register erstellt.

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
  - : String, erforderlich. Der Schlüssel für das Symbol (wird auch als Beschreibung des Symbols verwendet).

### Rückgabewert

Ein vorhandenes Symbol mit dem angegebenen Schlüssel, falls gefunden; andernfalls wird ein neues Symbol erstellt und zurückgegeben.

## Beschreibung

Im Gegensatz zu `Symbol()` erstellt die Funktion `Symbol.for()` ein Symbol, das in einer [globalen Symbol-Registry](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) verfügbar ist. `Symbol.for()` erstellt auch nicht unbedingt bei jedem Aufruf ein neues Symbol, sondern prüft zuerst, ob ein Symbol mit dem angegebenen `key` bereits im Register vorhanden ist. Falls ja, wird dieses Symbol zurückgegeben. Falls kein Symbol mit dem angegebenen Schlüssel gefunden wird, erstellt `Symbol.for()` ein neues globales Symbol.

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

Um Namenskonflikte mit Ihren globalen Symbolschlüsseln und anderen (in Bibliotheken genutzten) globalen Symbolen zu vermeiden, könnte es eine gute Idee sein, Ihre Symbole mit einem Präfix zu versehen:

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
