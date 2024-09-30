---
title: "Window: clearImmediate()-Methode"
short-title: clearImmediate()
slug: Web/API/Window/clearImmediate
l10n:
  sourceCommit: 44cf523714745d626317192bfbe849b47144f3ab
---

{{APIRef("HTML DOM")}} {{deprecated_header}}{{non-standard_header}}

Diese Methode löscht die Aktion, die durch [`window.setImmediate`](/de/docs/Web/API/Window/setImmediate) angegeben wurde.

## Syntax

```js-nolint
clearImmediate(immediateID)
```

### Parameter

- `immediateID`

  - : Die ID, die von [`window.setImmediate`](/de/docs/Web/API/Window/setImmediate) zurückgegeben wird.

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

Nicht Teil einer aktuellen Spezifikation.
Die [Efficient Script Yielding](https://w3c.github.io/setImmediate/#si-setImmediate)
Spezifikation wird nicht mehr bearbeitet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `clearImmediate` in `core-js`](https://github.com/zloirock/core-js#setimmediate)
- [`Window.setImmediate()`](/de/docs/Web/API/Window/setImmediate)
