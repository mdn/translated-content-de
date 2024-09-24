---
title: "TransformStreamDefaultController: terminate()-Methode"
short-title: terminate()
slug: Web/API/TransformStreamDefaultController/terminate
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`terminate()`**-Methode des {{domxref("TransformStreamDefaultController")}}-Interfaces schließt die lesbare Seite und verursacht einen Fehler auf der schreibbaren Seite des Streams.

## Syntax

```js-nolint
terminate()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Im untenstehenden Beispiel wird die `terminate()`-Methode auf einem {{domxref("TransformStreamDefaultController")}} aufgerufen.

```js
controller.terminate();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
