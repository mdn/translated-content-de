---
title: "TransformStreamDefaultController: error()-Methode"
short-title: error()
slug: Web/API/TransformStreamDefaultController/error
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`error()`**-Methode der [`TransformStreamDefaultController`](/de/docs/Web/API/TransformStreamDefaultController)-Schnittstelle bewirkt, dass beide Seiten des Streams auf Fehler gesetzt werden. Jegliche weitere Interaktionen damit werden mit der angegebenen Fehlermeldung fehlschlagen, und alle Chunks in der Warteschlange werden verworfen.

## Syntax

```js-nolint
error(reason)
```

### Parameter

- `reason`
  - : Ein String, der die Fehlermeldung enthält, die bei jeder weiteren Interaktion mit dem Stream zurückgegeben wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

In diesem Beispiel wird die `error()`-Methode verwendet, wenn ein Chunk nicht transformiert werden konnte.

```js
const transformContent = {
  start() {
    /* … */
  },
  async transform(chunk, controller) {
    try {
      chunk = await applyMyTransformation(chunk);
    } catch (err) {
      controller.error(`Unable to transform chunk: ${err}`);
    }
    // …
  },
  // …
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
