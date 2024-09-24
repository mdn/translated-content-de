---
title: Symbol.keyFor()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/keyFor
l10n:
  sourceCommit: f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{JSRef}}

Die statische Methode **`Symbol.keyFor()`** ruft einen gemeinsam genutzten Symbolschlüssel aus dem globalen Symbolregister für das gegebene Symbol ab.

{{EmbedInteractiveExample("pages/js/symbol-keyfor.html")}}

## Syntax

```js-nolint
Symbol.keyFor(sym)
```

### Parameter

- `sym`
  - : Symbol, erforderlich. Das Symbol, für das ein Schlüssel gefunden werden soll.

### Rückgabewert

Ein String, der den Schlüssel für das gegebene Symbol repräsentiert, falls einer im [globalen Register](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) gefunden wird; andernfalls {{jsxref("undefined")}}.

## Beispiele

### Verwendung von keyFor()

```js
const globalSym = Symbol.for("foo"); // ein neues globales Symbol erstellen
Symbol.keyFor(globalSym); // "foo"

const localSym = Symbol();
Symbol.keyFor(localSym); // undefined

// Allgemein bekannte Symbole sind keine Symbole,
// die im globalen Symbolregister registriert sind
Symbol.keyFor(Symbol.iterator); // undefined
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Symbol.for()")}}
