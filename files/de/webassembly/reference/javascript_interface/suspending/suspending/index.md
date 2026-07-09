---
title: WebAssembly.Suspending() Konstruktor
short-title: WebAssembly.Suspending()
slug: WebAssembly/Reference/JavaScript_interface/Suspending/Suspending
l10n:
  sourceCommit: 3934778cdfee0d5d2ae4c93b9f5568701008a628
---

Der **`WebAssembly.Suspending()`**-Konstruktor erstellt eine neue [`Suspending`](/de/docs/WebAssembly/Reference/JavaScript_interface/Suspending)-Objektinstanz, die eine aussetzende Funktion darstellt.

## Syntax

```js-nolint
new WebAssembly.Suspending(function)
```

### Parameter

- `function`
  - : Eine Referenz auf eine asynchrone ({{jsxref("Promise")}}-basierte) JavaScript-Funktion.

### Rückgabewert

Eine neue `Suspending`-Objektinstanz.

### Ausnahmen

- [`WebAssembly.SuspendError`](/de/docs/WebAssembly/Reference/JavaScript_interface/SuspendError)
  - : Die entsprechende exportierte Funktion wurde nicht in einem [`WebAssembly.promising()`](/de/docs/WebAssembly/Reference/JavaScript_interface/promising_static)-Aufruf eingeschlossen.
- {{jsxref("TypeError")}}
  - : Die referenzierte `function` ist nicht aufrufbar.

## Beispiele

### Grundlegende Verwendung

```js
function someAsyncFunction() {
  return fetch("https://example.com").then((result) => {
    // ...
  });
}

const importObj = {
  someAsyncFunction: new WebAssembly.Suspending(someAsyncFunction),
};
```

Siehe [`WebAssembly.Suspending`](/de/docs/WebAssembly/Reference/JavaScript_interface/Suspending) für ein vollständiges Arbeitsbeispiel und eine Erklärung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebAssembly.Suspending`](/de/docs/WebAssembly/Reference/JavaScript_interface/Suspending)
- [`WebAssembly.promising()`](/de/docs/WebAssembly/Reference/JavaScript_interface/promising_static)
- [WebAssembly](/de/docs/WebAssembly)-Übersicht
