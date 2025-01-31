---
title: WebAssembly.Exception.prototype.is()
slug: WebAssembly/Reference/JavaScript_interface/Exception/is
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Die **`is()`** Prototyp-Methode des [`Exception`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception)-Objekts kann verwendet werden, um zu prüfen, ob die `Exception` mit einem gegebenen Tag übereinstimmt.

Die Methode kann verwendet werden, um zu überprüfen, ob ein Tag korrekt ist, bevor es an [`Exception.prototype.getArg()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg) übergeben wird, um die übermittelten Werte zu erhalten. Sie kann auf Tags angewendet werden, die in JavaScript erstellt oder im WebAssembly-Code erstellt und nach JavaScript exportiert wurden.

> [!NOTE]
> Es reicht nicht aus, dass das Tag eine identische Abfolge von Datentypen hat — es muss dieselbe _Identität_ (dasselbe Tag) haben, wie es zur Erstellung der Ausnahme verwendet wurde.

## Syntax

```js-nolint
is(tag)
```

### Parameter

- `tag`
  - : Ein [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag), das überprüft werden kann, um den Typ der Ausnahme zu verifizieren.

### Rückgabewert

Ein boolescher Wert `true`, wenn das angegebene Tag mit der Ausnahme übereinstimmt, andernfalls `false`.

## Beispiele

Der folgende Code zeigt, wie `is()` verwendet wird, um zu überprüfen, ob ein Tag mit einer [`Exception`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception) übereinstimmt.

```js
// Create tag and use it to create an exception
const tag1 = new WebAssembly.Tag({ parameters: ["i32", "f64"] });
const exception1 = new WebAssembly.Exception(tag1, [42, 42.3]);

// Verify that "tag1" matches this exception
console.log(`Tag1: ${exception1.is(tag1)}`);

// Log output:
// Tag1: true
```

Wir können auch demonstrieren, dass diese Ausnahme nicht mit einem anderen Tag übereinstimmt, selbst wenn das Tag mit denselben Parametern erstellt wird.

```js
// Create a new tag (with same parameters) and verify it does not match the exception
const tag2 = new WebAssembly.Tag({ parameters: ["i32", "f64"] });
console.log(`Tag2: ${exception1.is(tag2)}`);

// Log output:
// Tag2: false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Überblick über [WebAssembly](/de/docs/WebAssembly)
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
