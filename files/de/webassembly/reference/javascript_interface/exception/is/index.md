---
title: WebAssembly.Exception.prototype.is()
slug: WebAssembly/Reference/JavaScript_interface/Exception/is
l10n:
  sourceCommit: 48b0dc43b7c13a2c9a5d2c56f110444d2550b90e
---

Die **`is()`**-Methode des [`Exception`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception)-Objekts kann verwendet werden, um zu testen, ob die `Exception` mit einem gegebenen Tag übereinstimmt.

Die Methode kann verwendet werden, um zu testen, ob ein Tag korrekt ist, bevor es an [`Exception.prototype.getArg()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg) übergeben wird, um die übergebenen Werte zu erhalten. Sie kann sowohl auf in JavaScript erstellte Tags als auch auf solche, die in WebAssembly-Code erstellt und nach JavaScript exportiert wurden, angewendet werden.

## Syntax

```js-nolint
is(tag)
```

### Parameter

- `tag`
  - : Ein [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag), der überprüft werden kann, um den Typ der Ausnahme zu verifizieren.

### Rückgabewert

Ein boolescher Wert — `true`, wenn das angegebene Tag mit der Ausnahme übereinstimmt, andernfalls `false`.

Damit `true` zurückgegeben wird, reicht es nicht aus, dass das Tag eine identische Sequenz von Datentypen hat — es muss dieselbe _Identität_ haben (dasselbe Tag sein), die zur Erstellung der Ausnahme verwendet wurde.

## Beispiele

Der folgende Code zeigt, wie `is()` verwendet wird, um zu überprüfen, ob ein Tag mit einer [`Exception`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception) übereinstimmt.

```js
// Create tag and use it to create an exception
const tag1 = new WebAssembly.Tag({ parameters: ["i32", "f64"] });
const exception1 = new WebAssembly.Exception(tag1, [42, 42.3]);

// Verify that "tag1" matches this exception
console.log(`Tag1: ${exception1.is(tag1)}`);
```

Dies wird `Tag1: true` in der Konsole protokollieren.

Wir können auch demonstrieren, dass diese Ausnahme nicht mit einem anderen Tag übereinstimmt, selbst wenn das Tag mit denselben Parametern erstellt wird.

```js
// Create a new tag (with same parameters) and verify it does not match the exception
const tag2 = new WebAssembly.Tag({ parameters: ["i32", "f64"] });
console.log(`Tag2: ${exception1.is(tag2)}`);
```

Dies wird `Tag2: false` in der Konsole protokollieren.

Für ein vollständiges funktionierendes Beispiel siehe die [`throw`](/de/docs/WebAssembly/Reference/Exception_handling/throw)-Instruktionsreferenzseite.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überblick WebAssembly](/de/docs/WebAssembly)
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
