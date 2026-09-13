---
title: "Window: clearImmediate() Methode"
short-title: clearImmediate()
slug: Web/API/Window/clearImmediate
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}} {{non-standard_header}}

Diese Methode beendet die Aktion, die von [`window.setImmediate`](/de/docs/Web/API/Window/setImmediate) spezifiziert wurde.

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

Kein Teil der aktuellen Spezifikationen.
An der [Efficient Script Yielding](https://w3c.github.io/setImmediate/#si-setImmediate)
Spezifikation wird nicht mehr gearbeitet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `clearImmediate` in `core-js`](https://github.com/zloirock/core-js#setimmediate)
- [`Window.setImmediate()`](/de/docs/Web/API/Window/setImmediate)
