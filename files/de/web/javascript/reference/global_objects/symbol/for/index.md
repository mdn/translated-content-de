---
title: Symbol.for()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/for
l10n:
  sourceCommit: f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{JSRef}}

Die statische Methode **`Symbol.for()`** sucht nach vorhandenen Symbolen
in einem laufzeitweiten Symbolregister mit dem angegebenen Schlüssel und gibt es zurück, wenn es gefunden wird. Andernfalls wird ein neues Symbol mit diesem Schlüssel im globalen Symbolregister erstellt.

{{EmbedInteractiveExample("pages/js/symbol-for.html")}}

## Syntax

```js-nolint
Symbol.for(key)
```

### Parameter

- `key`
  - : String, erforderlich. Der Schlüssel für das Symbol (und auch für die Beschreibung des
    Symbols verwendet).

### Rückgabewert

Ein vorhandenes Symbol mit dem angegebenen Schlüssel, falls gefunden; andernfalls wird ein neues Symbol erstellt und zurückgegeben.

## Beschreibung

Im Gegensatz zu `Symbol()` erstellt die Funktion `Symbol.for()`
ein Symbol, das in einer [globalen Symbolregisterliste](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) verfügbar ist. `Symbol.for()` erstellt auch nicht unbedingt bei jedem Aufruf ein neues Symbol, sondern prüft zuerst, ob ein Symbol mit dem
angegebenen `key` bereits im Register vorhanden ist. In diesem Fall wird dieses Symbol
zurückgegeben. Wenn kein Symbol mit dem angegebenen Schlüssel gefunden wird, erstellt `Symbol.for()` ein neues globales Symbol.

## Beispiele

### Verwendung von Symbol.for()

```js
Symbol.for("foo"); // erstellt ein neues globales Symbol
Symbol.for("foo"); // ruft das bereits erstellte Symbol ab

// Gleiches globales Symbol, aber nicht lokal
Symbol.for("bar") === Symbol.for("bar"); // true
Symbol("bar") === Symbol("bar"); // false

// Der Schlüssel wird auch als Beschreibung verwendet
const sym = Symbol.for("mario");
sym.toString(); // "Symbol(mario)"
```

Um Namenskonflikte mit Ihren globalen Symbolschlüsseln und anderen globalen Symbolen (z.B. Bibliothekscode) zu vermeiden, könnte es eine gute Idee sein, Ihre Symbole voranzustellen:

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
