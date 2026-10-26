---
title: Iterator.prototype[Symbol.dispose]()
short-title: "[Symbol.dispose]()"
slug: Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.dispose
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`[Symbol.dispose]()`** von {{jsxref("Iterator")}}-Instanzen implementiert das _Disposable-Protokoll_ und ermöglicht es, die Instanz bei der Verwendung mit {{jsxref("Statements/using", "using")}} freizugeben. Sie ruft die Methode `return()` von `this` auf, falls diese vorhanden ist.

## Syntax

```js-nolint
iterator[Symbol.dispose]()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Einen Iterator mit `using` deklarieren

Die Methode `Symbol.dispose` ist dafür vorgesehen, bei einer `using`-Deklaration automatisch aufgerufen zu werden. Dies ist nützlich, wenn Sie einen Iterator manuell durch Aufrufe seiner Methode `next()` durchlaufen. Wenn Sie ihn mit {{jsxref("Statements/for...of", "for...of")}} oder auf ähnliche Weise durchlaufen, erfolgen Fehlerbehandlung und Bereinigung automatisch.

```js
function* generateNumbers() {
  try {
    yield 1;
    yield 2;
    yield 3;
  } finally {
    console.log("Cleaning up");
  }
}

function doSomething() {
  using numbers = generateNumbers();
  const res1 = numbers.next();
  // Not iterating the rest of the numbers
  // Before the function exits, the async iterator is disposed
  // Logs "Cleaning up"
}

doSomething();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Iterator.prototype[Symbol.dispose]` in `core-js`](https://core-js.io/docs/features/ecmascript/explicit-resource-management)
- [JavaScript-Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("Symbol.dispose")}}
- {{jsxref("Statements/using", "using")}}
