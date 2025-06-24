---
title: "Window: clearImmediate() Methode"
short-title: clearImmediate()
slug: Web/API/Window/clearImmediate
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML DOM")}} {{deprecated_header}}{{non-standard_header}}

Diese Methode löscht die Aktion, die von [`window.setImmediate`](/de/docs/Web/API/Window/setImmediate) festgelegt wurde.

## Syntax

```js-nolint
clearImmediate(immediateID)
```

### Parameter

- `immediateID`
  - : Die von [`window.setImmediate`](/de/docs/Web/API/Window/setImmediate) zurückgegebene ID.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
let immediateID = setImmediate(() => {
  // Run some code
});

document.getElementById("button").addEventListener(() => {
  clearImmediate(immediateID);
});
```

## Spezifikationen

Nicht Teil aktueller Spezifikationen.
An der [Efficient Script Yielding](https://w3c.github.io/setImmediate/#si-setImmediate) Spezifikation wird nicht mehr gearbeitet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `clearImmediate` in `core-js`](https://github.com/zloirock/core-js#setimmediate)
- [`Window.setImmediate()`](/de/docs/Web/API/Window/setImmediate)
