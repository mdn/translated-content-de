---
title: "HTMLCanvasElement: transferControlToOffscreen() Methode"
short-title: transferControlToOffscreen()
slug: Web/API/HTMLCanvasElement/transferControlToOffscreen
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{APIRef("Canvas API")}}

Die **`HTMLCanvasElement.transferControlToOffscreen()`** Methode überträgt die Kontrolle an ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) Objekt, entweder im Haupt-Thread oder in einem Worker.

## Syntax

```js-nolint
transferControlToOffscreen()
```

### Parameter

Keine.

### Rückgabewert

Ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) Objekt.

## Beispiele

Das folgende Beispiel zeigt, wie die Kontrolle an ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) Objekt im Haupt-Thread übertragen wird.

```js
const htmlCanvas = document.createElement("canvas");
const offscreen = htmlCanvas.transferControlToOffscreen();
const gl = offscreen.getContext("webgl");

// Some drawing using the gl context…
```

Das folgende Beispiel zeigt, wie die Kontrolle an ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) Objekt in einem Worker übertragen wird.

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

- Die Schnittstelle, die diese Methode definiert, [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
