---
title: "ImageBitmap: close() Methode"
short-title: close()
slug: Web/API/ImageBitmap/close
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Canvas API")}}

Die **`ImageBitmap.close()`**-Methode entsorgt alle grafischen Ressourcen, die mit einem `ImageBitmap` verbunden sind.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

```js
const offscreen = new OffscreenCanvas(256, 256);
const gl = offscreen.getContext("webgl");

// Perform some drawing using the gl context

const bitmap = offscreen.transferToImageBitmap();
// ImageBitmap { width: 256, height: 256 }

bitmap.close();
// ImageBitmap { width: 0, height: 0 } — disposed
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert, [`ImageBitmap`](/de/docs/Web/API/ImageBitmap).
