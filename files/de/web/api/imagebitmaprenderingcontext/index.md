---
title: ImageBitmapRenderingContext
slug: Web/API/ImageBitmapRenderingContext
l10n:
  sourceCommit: 3610b480fe28dcab6de41edb95300ad9be9b5777
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Das **`ImageBitmapRenderingContext`**-Interface ist ein Canvas-Rendering-Kontext, der die Funktionalität bereitstellt, den Inhalt des Canvas mit dem angegebenen [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) zu ersetzen. Seine Kontext-ID (das erste Argument für [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) oder [`OffscreenCanvas.getContext()`](/de/docs/Web/API/OffscreenCanvas/getContext)) ist `"bitmaprenderer"`.

Dieses Interface ist sowohl im Fenster- als auch im [Worker](/de/docs/Web/API/Web_Workers_API)-Kontext verfügbar.

## Instanz-Eigenschaften

- [`ImageBitmapRenderingContext.canvas`](/de/docs/Web/API/ImageBitmapRenderingContext/canvas) {{ReadOnlyInline}}
  - : Eine schreibgeschützte Referenz auf das [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Objekt, das mit dem angegebenen Kontext verbunden ist.

## Instanz-Methoden

- [`ImageBitmapRenderingContext.transferFromImageBitmap()`](/de/docs/Web/API/ImageBitmapRenderingContext/transferFromImageBitmap)
  - : Zeigt das angegebene `ImageBitmap` im Canvas an, das mit diesem Rendering-Kontext verbunden ist. Das Eigentum des `ImageBitmap` wird auf das Canvas übertragen. Dies wurde zuvor `transferImageBitmap()` genannt, aber im Rahmen einer Spezifikationsänderung umbenannt. Der alte Name wird als Alias beibehalten, um zu vermeiden, dass bestehender Code beschädigt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
