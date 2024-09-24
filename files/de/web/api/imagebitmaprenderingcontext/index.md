---
title: ImageBitmapRenderingContext
slug: Web/API/ImageBitmapRenderingContext
l10n:
  sourceCommit: 3610b480fe28dcab6de41edb95300ad9be9b5777
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Das **`ImageBitmapRenderingContext`**-Interface ist ein Canvas-Rendering-Kontext, der die Funktionalität bietet, den Inhalt des Canvas mit dem gegebenen {{domxref("ImageBitmap")}} zu ersetzen. Seine Kontext-ID (das erste Argument von {{domxref("HTMLCanvasElement.getContext()")}} oder {{domxref("OffscreenCanvas.getContext()")}}) ist `"bitmaprenderer"`.

Dieses Interface ist sowohl im Window-Kontext als auch im [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar.

## Instanz-Eigenschaften

- {{domxref("ImageBitmapRenderingContext.canvas")}} {{ReadOnlyInline}}
  - : Ein schreibgeschützter Verweis auf das {{domxref("HTMLCanvasElement")}} oder {{domxref("OffscreenCanvas")}}-Objekt, das mit dem gegebenen Kontext verknüpft ist.

## Instanz-Methoden

- {{domxref("ImageBitmapRenderingContext.transferFromImageBitmap()")}}
  - : Zeigt das gegebene `ImageBitmap` im Canvas an, das mit diesem Rendering-Kontext verknüpft ist. Das Eigentum des `ImageBitmap` wird an das Canvas übertragen. Dies wurde zuvor `transferImageBitmap()` genannt, aber in einer Spezifikationsänderung umbenannt. Der alte Name wird als Alias beibehalten, um Codebrüche zu vermeiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("OffscreenCanvas")}}
