---
title: "HTMLCanvasElement: transferControlToOffscreen() Methode"
short-title: transferControlToOffscreen()
slug: Web/API/HTMLCanvasElement/transferControlToOffscreen
l10n:
  sourceCommit: 46dd9c0c1635e8abd73040c1a71cc0ed3c27cd50
---

{{APIRef("Canvas API")}}

Die **`HTMLCanvasElement.transferControlToOffscreen()`** Methode überträgt die Kontrolle auf ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Objekt, entweder im Haupt-Thread oder in einem Worker.

## Syntax

```js-nolint
transferControlToOffscreen()
```

### Parameter

Keine.

### Rückgabewert

Ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Objekt.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - dem Canvas ein Kontextmodus durch Aufruf von [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) zugewiesen wurde.
    - das Canvas seine Kontrolle durch Aufruf von [`HTMLCanvasElement.transferControlToOffscreen()`](/de/docs/Web/API/HTMLCanvasElement/transferControlToOffscreen) in den Offscreen-Modus übertragen hat.

## Beispiele

Das folgende Beispiel zeigt, wie die Kontrolle auf ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Objekt im Haupt-Thread übertragen wird.

```js
const htmlCanvas = document.createElement("canvas");
const offscreen = htmlCanvas.transferControlToOffscreen();
const gl = offscreen.getContext("webgl");

// Some drawing using the gl context…
```

Das folgende Beispiel zeigt, wie die Kontrolle auf ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Objekt in einem Worker übertragen wird.

```js
const offscreen = document.querySelector("canvas").transferControlToOffscreen();
const worker = new Worker("my-worker-url.js");
worker.postMessage({ canvas: offscreen }, [offscreen]);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, das diese Methode definiert, [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
