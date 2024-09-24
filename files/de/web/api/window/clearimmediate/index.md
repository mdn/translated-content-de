---
title: "Fenster: Methode clearImmediate()"
short-title: clearImmediate()
slug: Web/API/Window/clearImmediate
l10n:
  sourceCommit: 44cf523714745d626317192bfbe849b47144f3ab
---

{{APIRef("HTML DOM")}} {{deprecated_header}}{{non-standard_header}}

Diese Methode beendet die Aktion, die durch {{DOMxRef("window.setImmediate")}} angegeben wurde.

## Syntax

```js-nolint
clearImmediate(immediateID)
```

### Parameter

- `immediateID`

  - : Die ID, die von {{DOMxRef("window.setImmediate")}} zurückgegeben wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
let immediateID = setImmediate(() => {
  // Führen Sie etwas Code aus
});

document.getElementById("button").addEventListener(() => {
  clearImmediate(immediateID);
});
```

## Spezifikationen

Teil keiner aktuellen Spezifikationen.
Die [Efficient Script Yielding](https://w3c.github.io/setImmediate/#si-setImmediate)
Spezifikation wird nicht weiter bearbeitet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `clearImmediate` in `core-js`](https://github.com/zloirock/core-js#setimmediate)
- {{DOMxRef("Window.setImmediate()")}}
