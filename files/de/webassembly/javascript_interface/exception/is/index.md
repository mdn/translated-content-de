---
title: WebAssembly.Exception.prototype.is()
slug: WebAssembly/JavaScript_interface/Exception/is
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Die **`is()`** Prototyp-Methode des [`Exception`](/de/docs/WebAssembly/JavaScript_interface/Exception)-Objekts kann verwendet werden, um zu testen, ob die `Exception` mit einem gegebenen Tag übereinstimmt.

Die Methode kann verwendet werden, um zu testen, ob ein Tag korrekt ist, bevor es an [`Exception.prototype.getArg()`](/de/docs/WebAssembly/JavaScript_interface/Exception/getArg) übergeben wird, um die übergebenen Werte zu erhalten. Sie kann auf Tags angewendet werden, die in JavaScript erstellt oder in WebAssembly-Code erstellt und nach JavaScript exportiert wurden.

> [!NOTE]
> Es ist nicht ausreichend, dass das Tag eine identische Sequenz von Datentypen hat — es muss dieselbe _Identität_ haben (dasselbe Tag sein), die verwendet wurde, um die Ausnahme zu erstellen.

## Syntax

```js-nolint
is(tag)
```

### Parameter

- `tag`
  - : Ein [`WebAssembly.Tag`](/de/docs/WebAssembly/JavaScript_interface/Tag), das überprüft werden kann, um den Typ der Ausnahme zu verifizieren.

### Rückgabewert

Ein Boolean `true`, wenn das angegebene Tag mit der Ausnahme übereinstimmt, andernfalls `false`.

## Beispiele

Der folgende Code zeigt, wie `is()` verwendet wird, um zu überprüfen, ob ein Tag mit einer [`Exception`](/de/docs/WebAssembly/JavaScript_interface/Exception) übereinstimmt.

```js
// Create tag and use it to create an exception
const tag1 = new WebAssembly.Tag({ parameters: ["i32", "f64"] });
const exception1 = new WebAssembly.Exception(tag1, [42, 42.3]);

// Verify that "tag1" matches this exception
console.log(`Tag1: ${exception1.is(tag1)}`);

// Log output:
// Tag1: true
```

Wir können auch demonstrieren, dass diese Ausnahme nicht mit einem anderen Tag übereinstimmen wird, selbst wenn das Tag mit denselben Parametern erstellt wird.

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
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Using_the_JavaScript_API)
