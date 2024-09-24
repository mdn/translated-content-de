---
title: WebAssembly.Exception.prototype.is()
slug: WebAssembly/JavaScript_interface/Exception/is
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Die **`is()`** Prototyp-Methode des [`Exception`](/de/docs/WebAssembly/JavaScript_interface/Exception)-Objekts kann verwendet werden, um zu testen, ob die `Exception` mit einem gegebenen Tag übereinstimmt.

Diese Methode könnte verwendet werden, um sicherzustellen, dass ein Tag korrekt ist, bevor es an [`Exception.prototype.getArg()`](/de/docs/WebAssembly/JavaScript_interface/Exception/getArg) übergeben wird, um die übergebenen Werte zu erhalten. Es kann bei Tags verwendet werden, die in JavaScript erstellt wurden, oder solche, die im WebAssembly-Code erstellt und nach JavaScript exportiert wurden.

> [!NOTE]
> Es reicht nicht aus, dass das Tag eine identische Abfolge von Datentypen aufweist – es muss die gleiche _Identität_ (das gleiche Tag) sein, das zur Erstellung der Ausnahme verwendet wurde.

## Syntax

```js-nolint
is(tag)
```

### Parameter

- `tag`
  - : Ein [`WebAssembly.Tag`](/de/docs/WebAssembly/JavaScript_interface/Tag), das geprüft werden kann, um den Typ der Ausnahme zu verifizieren.

### Rückgabewert

Ein boolean `true`, wenn das angegebene Tag mit der Ausnahme übereinstimmt, andernfalls `false`.

## Beispiele

Der folgende Code zeigt, wie `is()` verwendet wird, um zu überprüfen, ob ein Tag mit einer [`Exception`](/de/docs/WebAssembly/JavaScript_interface/Exception) übereinstimmt.

```js
// Tag erstellen und zur Erstellung einer Ausnahme verwenden
const tag1 = new WebAssembly.Tag({ parameters: ["i32", "f64"] });
const exception1 = new WebAssembly.Exception(tag1, [42, 42.3]);

// Überprüfen, dass "tag1" mit dieser Ausnahme übereinstimmt
console.log(`Tag1: ${exception1.is(tag1)}`);

// Log-Ausgabe:
// Tag1: true
```

Wir können auch zeigen, dass diese Ausnahme nicht mit einem anderen Tag übereinstimmt, selbst wenn das Tag mit denselben Parametern erstellt wird.

```js
// Ein neues Tag (mit denselben Parametern) erstellen und überprüfen, dass es nicht mit der Ausnahme übereinstimmt
const tag2 = new WebAssembly.Tag({ parameters: ["i32", "f64"] });
console.log(`Tag2: ${exception1.is(tag2)}`);

// Log-Ausgabe:
// Tag2: false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überblick über WebAssembly](/de/docs/WebAssembly)
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Using_the_JavaScript_API)
