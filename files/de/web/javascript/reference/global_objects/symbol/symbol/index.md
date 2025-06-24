---
title: Symbol() Konstruktor
short-title: Symbol()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/Symbol
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}

Die **`Symbol()`** Funktion gibt primitive Werte vom Typ Symbol zurück.

{{InteractiveExample("JavaScript Demo: Symbol() Konstruktor", "taller")}}

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

> [!NOTE] > `Symbol()` kann nur ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Ein Versuch, es mit `new` zu konstruieren, wirft einen {{jsxref("TypeError")}}.

### Parameter

- `description` {{optional_inline}}
  - : Ein String. Eine Beschreibung des Symbols, die zum Debuggen verwendet werden kann, jedoch nicht, um auf das Symbol selbst zuzugreifen.

## Beispiele

### Symbole erstellen

Um ein neues primitives Symbol zu erstellen, schreiben Sie `Symbol()` mit einer optionalen
Zeichenfolge als Beschreibung:

```js
const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");
```

Der obige Code erstellt drei neue Symbole. Beachten Sie, dass `Symbol("foo")` den String `"foo"` nicht in ein Symbol konvertiert. Es erstellt jedes Mal ein neues Symbol:

```js
Symbol("foo") === Symbol("foo"); // false
```

### new Symbol()

Die folgende Syntax mit dem {{jsxref("Operators/new", "new")}} Operator wird einen
{{jsxref("TypeError")}} werfen:

```js example-bad
const sym = new Symbol(); // TypeError
```

Dies verhindert, dass Autoren ein explizites `Symbol`-Wrapper-Objekt erstellen, anstatt eines neuen Symbolwerts. Dies könnte überraschend sein, da es im Allgemeinen möglich ist, explizite Wrapper-Objekte um primitive Datentypen zu erstellen (zum Beispiel,
`new Boolean`, `new String` und `new Number`).

Wenn Sie wirklich ein `Symbol`-Wrapper-Objekt erstellen möchten, können Sie die
`Object()` Funktion verwenden:

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
