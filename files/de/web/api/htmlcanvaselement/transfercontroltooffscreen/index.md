---
title: "HTMLCanvasElement: Methode transferControlToOffscreen()"
short-title: transferControlToOffscreen()
slug: Web/API/HTMLCanvasElement/transferControlToOffscreen
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

{{APIRef("Canvas API")}}

Die Methode **`HTMLCanvasElement.transferControlToOffscreen()`** überträgt die Kontrolle an ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Objekt, entweder im Haupt-Thread oder in einem Worker.

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
    - das Canvas durch Aufrufen von [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) in einen Kontextmodus versetzt wurde.
    - das Canvas seine Kontrolle bereits auf offscreen übertragen hat.

## Beispiele

Das folgende Beispiel zeigt, wie die Kontrolle an ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Objekt im Haupt-Thread übertragen wird.

```js
const htmlCanvas = document.createElement("canvas");
const offscreen = htmlCanvas.transferControlToOffscreen();
const gl = offscreen.getContext("webgl");

// Some drawing using the gl context…
```

Das folgende Beispiel zeigt, wie die Kontrolle an ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Objekt in einem Worker übertragen wird.

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
