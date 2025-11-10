---
title: WebAssembly.Exception.prototype.is()
slug: WebAssembly/Reference/JavaScript_interface/Exception/is
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Die **`is()`** Prototyp-Methode des [`Exception`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception)-Objekts kann verwendet werden, um zu testen, ob die `Exception` mit einem gegebenen Tag übereinstimmt.

Die Methode kann verwendet werden, um zu überprüfen, ob ein Tag korrekt ist, bevor es an [`Exception.prototype.getArg()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg) übergeben wird, um die übergebenen Werte zu erhalten. Sie kann bei in JavaScript erstellten Tags oder in WebAssembly-Code erstellten und nach JavaScript exportierten Tags verwendet werden.

> [!NOTE]
> Es reicht nicht aus, dass das Tag eine identische Sequenz von Datentypen hat — es muss die gleiche _Identität_ (das gleiche Tag) haben, wie es zur Erstellung der Ausnahme verwendet wurde.

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

Wir können auch demonstrieren, dass diese Ausnahme nicht mit einem anderen Tag übereinstimmt, selbst wenn das Tag mit denselben Parametern erstellt wurde.

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

- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
