---
title: "HTMLCanvasElement: Methode transferControlToOffscreen()"
short-title: transferControlToOffscreen()
slug: Web/API/HTMLCanvasElement/transferControlToOffscreen
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("Canvas API")}}

Die Methode **`HTMLCanvasElement.transferControlToOffscreen()`** überträgt die Kontrolle zu einem {{domxref("OffscreenCanvas")}}-Objekt, entweder im Hauptthread oder in einem Worker.

## Syntax

```js-nolint
transferControlToOffscreen()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("OffscreenCanvas")}}-Objekt.

## Beispiele

Das folgende Beispiel zeigt, wie die Kontrolle zu einem {{domxref("OffscreenCanvas")}}-Objekt im Hauptthread übertragen wird.

```js
const htmlCanvas = document.createElement("canvas");
const offscreen = htmlCanvas.transferControlToOffscreen();
const gl = offscreen.getContext("webgl");

// Einige Zeichenoperationen mit dem gl Kontext…
```

Das folgende Beispiel zeigt, wie die Kontrolle zu einem {{domxref("OffscreenCanvas")}}-Objekt in einem Worker übertragen wird.

```js
const offscreen = document.querySelector("canvas").transferControlToOffscreen();
const worker = new Worker("myworkerurl.js");
worker.postMessage({ canvas: offscreen }, [offscreen]);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert, {{domxref("HTMLCanvasElement")}}
- {{domxref("OffscreenCanvas")}}
