---
title: Symbol.for()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/for
l10n:
  sourceCommit: f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{JSRef}}

Die statische Methode **`Symbol.for()`** durchsucht ein zur Laufzeit systemweit verfügbares Symbol-Registry nach vorhandenen Symbolen mit dem angegebenen Schlüssel und gibt das Symbol zurück, falls es gefunden wird. Andernfalls wird ein neues Symbol mit diesem Schlüssel im globalen Symbol-Registry erstellt.

{{EmbedInteractiveExample("pages/js/symbol-for.html")}}

## Syntax

```js-nolint
Symbol.for(key)
```

### Parameter

- `key`
  - : String, erforderlich. Der Schlüssel für das Symbol (und auch für die Beschreibung des Symbols verwendet).

### Rückgabewert

Ein vorhandenes Symbol mit dem gegebenen Schlüssel, falls gefunden; andernfalls wird ein neues Symbol erstellt und zurückgegeben.

## Beschreibung

Im Gegensatz zu `Symbol()` erstellt die Funktion `Symbol.for()` ein Symbol, das in einer Liste des [globalen Symbol-Registry](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) verfügbar ist. `Symbol.for()` erstellt nicht zwingend bei jedem Aufruf ein neues Symbol, sondern prüft zunächst, ob ein Symbol mit dem angegebenen `key` bereits im Registry vorhanden ist. In diesem Fall wird dieses Symbol zurückgegeben. Wenn kein Symbol mit dem angegebenen Schlüssel gefunden wird, erstellt `Symbol.for()` ein neues globales Symbol.

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

Um Namenskonflikte mit Ihren globalen Symbolschlüsseln und anderen (Bibliothekscode) globalen Symbolen zu vermeiden, könnte es eine gute Idee sein, Ihren Symbolen Präfixe hinzuzufügen:

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
