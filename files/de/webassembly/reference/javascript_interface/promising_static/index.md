---
title: WebAssembly.promising()
slug: WebAssembly/Reference/JavaScript_interface/promising_static
l10n:
  sourceCommit: 3934778cdfee0d5d2ae4c93b9f5568701008a628
---

Die **`WebAssembly.promising()`** statische Methode wird verwendet, um eine exportierte Wasm-Funktion, die auf einer asynchronen Operation basiert (das heißt, eine importierte aussetzende Funktion, die über den [`WebAssembly.Suspending()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Suspending/Suspending) Konstruktor erstellt wurde), in ein {{jsxref("Promise")}} zu verwandeln.

Siehe [`WebAssembly.Suspending`](/de/docs/WebAssembly/Reference/JavaScript_interface/Suspending) für eine Erklärung, wie diese Funktionalität funktioniert.

## Syntax

```js-nolint
WebAssembly.promising(function)
```

### Parameter

- `function`
  - : Eine Referenz zu einer exportierten Wasm-Funktion, die typischerweise auf dem [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) Objekt verfügbar ist, das im erfüllten Wert einer Methode wie [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) verfügbar ist.

### Rückgabewert

Eine Funktion, die die ursprüngliche, in den `promising()`-Aufruf übergebene Funktion umhüllt und selbst aufgerufen werden kann. Die Wrapper-Funktion nimmt die gleichen Argumente wie die umhüllte Funktion und gibt ein Versprechen zurück, das mit den Ergebnissen der umhüllten Funktion erfüllt wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Die referenzierte `function` ist nicht aufrufbar.

## Beispiele

### Grundlegende Verwendung

```js
WebAssembly.instantiateStreaming(fetch("module.wasm"), { importObj }).then(
  (result) => {
    const fromWasm = WebAssembly.promising(
      result.instance.exports.exportedFunc,
    );
    fromWasm().then((result) => {
      // ...
    });
  },
);
```

Siehe [`WebAssembly.Suspending`](/de/docs/WebAssembly/Reference/JavaScript_interface/Suspending) für ein vollständiges Arbeitsbeispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebAssembly.Suspending`](/de/docs/WebAssembly/Reference/JavaScript_interface/Suspending)
- [`WebAssembly.Suspending()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Suspending/Suspending) Konstruktor
- [WebAssembly](/de/docs/WebAssembly) Überblick
