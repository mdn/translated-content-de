---
title: ImageBitmapRenderingContext
slug: Web/API/ImageBitmapRenderingContext
l10n:
  sourceCommit: 3610b480fe28dcab6de41edb95300ad9be9b5777
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Das **`ImageBitmapRenderingContext`** Interface ist ein Canvas-Rendering-Kontext, der die Funktionalität bereitstellt, den Inhalt des Canvas durch das gegebene [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) zu ersetzen. Seine Kontext-ID (das erste Argument von [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) oder [`OffscreenCanvas.getContext()`](/de/docs/Web/API/OffscreenCanvas/getContext)) ist `"bitmaprenderer"`.

Dieses Interface ist sowohl im Fenster- als auch im [Worker](/de/docs/Web/API/Web_Workers_API) Kontext verfügbar.

## Instanz-Eigenschaften

- [`ImageBitmapRenderingContext.canvas`](/de/docs/Web/API/ImageBitmapRenderingContext/canvas) {{ReadOnlyInline}}
  - : Eine schreibgeschützte Referenz auf das [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)- oder [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Objekt, das mit dem gegebenen Kontext assoziiert ist.

## Instanz-Methoden

- [`ImageBitmapRenderingContext.transferFromImageBitmap()`](/de/docs/Web/API/ImageBitmapRenderingContext/transferFromImageBitmap)
  - : Zeigt das gegebene `ImageBitmap` im Canvas an, das mit diesem Rendering-Kontext verbunden ist. Das Eigentum am `ImageBitmap` wird auf das Canvas übertragen. Dies wurde zuvor `transferImageBitmap()` genannt, aber in einer Spezifikationsänderung umbenannt. Der alte Name wird als Alias beibehalten, um Codebrüche zu vermeiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
