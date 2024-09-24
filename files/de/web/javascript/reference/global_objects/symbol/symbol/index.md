---
title: Symbol()-Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Symbol/Symbol
l10n:
  sourceCommit: 6a557b06944a0a6eaa1e9e352fc58b973b2e03a1
---

{{JSRef}}

Die **`Symbol()`**-Funktion gibt primitive Werte vom Typ Symbol zurück.

{{EmbedInteractiveExample("pages/js/symbol-constructor.html", "taller")}}

## Syntax

```js-nolint
Symbol()
Symbol(description)
```

> **Note:** `Symbol()` kann nur ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Der Versuch, es mit `new` zu konstruieren, wirft einen {{jsxref("TypeError")}}.

### Parameter

- `description` {{optional_inline}}
  - : Ein String. Eine Beschreibung des Symbols, die zum Debuggen verwendet werden kann, aber nicht, um auf das Symbol selbst zuzugreifen.

## Beispiele

### Erstellen von Symbolen

Um ein neues primitives Symbol zu erstellen, schreiben Sie `Symbol()` mit einem optionalen String als Beschreibung:

```js
const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");
```

Der obige Code erstellt drei neue Symbole. Beachten Sie, dass `Symbol("foo")` den String `"foo"` nicht in ein Symbol umwandelt. Es wird jedes Mal ein neues Symbol erstellt:

```js
Symbol("foo") === Symbol("foo"); // false
```

### new Symbol()

Die folgende Syntax mit dem {{jsxref("Operators/new", "new")}}-Operator wird einen {{jsxref("TypeError")}} werfen:

```js example-bad
const sym = new Symbol(); // TypeError
```

Dies verhindert, dass Autoren ein explizites `Symbol`-Wrapper-Objekt anstelle eines neuen Symbolwertes erstellen, und könnte überraschend sein, da das Erstellen expliziter Wrapper-Objekte um primitive Datentypen im Allgemeinen möglich ist (zum Beispiel `new Boolean`, `new String` und `new Number`).

Wenn Sie wirklich ein `Symbol`-Wrapper-Objekt erstellen möchten, können Sie die Funktion `Object()` verwenden:

```js
const sym = Symbol("foo");
const symObj = Object(sym);
typeof sym; // "symbol"
typeof symObj; // "object"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Symbol` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
