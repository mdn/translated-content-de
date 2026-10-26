---
title: "Window: Methode clearImmediate()"
short-title: clearImmediate()
slug: Web/API/Window/clearImmediate
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

{{APIRef("HTML DOM")}} {{non-standard_header}}

Diese Methode hebt die mit [`window.setImmediate`](/de/docs/Web/API/Window/setImmediate) geplante Aktion auf.

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

Diese Methode ist nicht Bestandteil einer aktuellen Spezifikation.
An der Spezifikation [Efficient Script Yielding](https://w3c.github.io/setImmediate/#si-setImmediate) wird nicht mehr gearbeitet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `clearImmediate` in `core-js`](https://core-js.io/docs/features/web-standards/set-immediate)
- [`Window.setImmediate()`](/de/docs/Web/API/Window/setImmediate)
