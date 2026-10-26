---
title: Symbol()-Konstruktor
short-title: Symbol()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/Symbol
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Funktion **`Symbol()`** gibt primitive Werte vom Typ Symbol zurück.

{{InteractiveExample("JavaScript Demo: Symbol() constructor", "taller")}}

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

> [!NOTE]
> `Symbol()` kann nur ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Der Versuch, es mit `new` zu konstruieren, löst einen {{jsxref("TypeError")}} aus.

### Parameter

- `description` {{optional_inline}}
  - : Eine Zeichenfolge. Eine Beschreibung des Symbols, die zum Debuggen verwendet werden kann, aber nicht, um auf das Symbol selbst zuzugreifen.

## Beispiele

### Symbole erstellen

Um ein neues primitives Symbol zu erstellen, schreiben Sie `Symbol()`, optional mit einer Zeichenfolge als Beschreibung:

```js
const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");
```

Der obige Code erstellt drei neue Symbole. Beachten Sie, dass `Symbol("foo")` die Zeichenfolge `"foo"` nicht in ein Symbol umwandelt. Bei jedem Aufruf wird ein neues Symbol erstellt:

```js
Symbol("foo") === Symbol("foo"); // false
```

### new Symbol()

Die folgende Syntax mit dem Operator {{jsxref("new")}} löst einen {{jsxref("TypeError")}} aus:

```js example-bad
const sym = new Symbol(); // TypeError
```

Dadurch wird verhindert, dass Sie statt eines neuen Symbolwerts ein explizites `Symbol`-Wrapper-Objekt erstellen. Das mag überraschen, da sich explizite Wrapper-Objekte für primitive Datentypen im Allgemeinen erstellen lassen (beispielsweise mit `new Boolean`, `new String` und `new Number`).

Wenn Sie tatsächlich ein `Symbol`-Wrapper-Objekt erstellen möchten, können Sie die Funktion `Object()` verwenden:

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

- [Polyfill für `Symbol` in `core-js`](https://core-js.io/docs/features/ecmascript/symbol)
