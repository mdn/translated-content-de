---
title: Symbol() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Symbol/Symbol
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Funktion **`Symbol()`** gibt primitive Werte des Typs Symbol zurück.

{{InteractiveExample("JavaScript Demo: Symbol - Constructor", "taller")}}

```js interactive-example
const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol("foo");

console.log(typeof symbol1);
// Expected output: "symbol"

console.log(symbol2 === 42);
// Expected output: false

console.log(symbol3.toString());
// Expected output: "Symbol(foo)"

console.log(Symbol("foo") === Symbol("foo"));
// Expected output: false
```

## Syntax

```js-nolint
Symbol()
Symbol(description)
```

> **Hinweis:** `Symbol()` kann nur ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Der Versuch, es mit `new` zu instanziieren, wirft einen {{jsxref("TypeError")}}.

### Parameter

- `description` {{optional_inline}}
  - : Ein String. Eine Beschreibung des Symbols, die für Debugging-Zwecke verwendet werden kann, aber nicht, um auf das Symbol selbst zuzugreifen.

## Beispiele

### Symbole erstellen

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

Die folgende Syntax mit dem {{jsxref("Operators/new", "new")}}-Operator wird einen {{jsxref("TypeError")}} auslösen:

```js example-bad
const sym = new Symbol(); // TypeError
```

Dies verhindert, dass Autoren ein explizites `Symbol`-Wrapper-Objekt anstelle eines neuen Symbolwertes erstellen, was überraschend sein könnte, da das Erstellen expliziter Wrapper-Objekte um primitive Datentypen im Allgemeinen möglich ist (zum Beispiel `new Boolean`, `new String` und `new Number`).

Falls Sie wirklich ein `Symbol`-Wrapper-Objekt erstellen möchten, können Sie die Funktion `Object()` verwenden:

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
