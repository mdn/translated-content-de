---
title: XRWebGLSubImage
slug: Web/API/XRWebGLSubImage
l10n:
  sourceCommit: f8553485fe1d9ab48b9f4816385b43bcbb388c0e
---

{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

Die **`XRWebGLSubImage`**-Schnittstelle wird während des Renderings von WebGL-Schichten verwendet.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`XRSubImage`](/de/docs/Web/API/XRSubImage)._

- [`XRWebGLSubImage.colorTexture`](/de/docs/Web/API/XRWebGLSubImage/colorTexture) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Farbordner-`WebGLTexture`-Objekt, das für die [`XRCompositionLayer`](/de/docs/Web/API/XRCompositionLayer) gerendert wird.
- [`XRWebGLSubImage.depthStencilTexture`](/de/docs/Web/API/XRWebGLSubImage/depthStencilTexture) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Tiefen-/Stencil-`WebGLTexture`-Objekt, das für die [`XRCompositionLayer`](/de/docs/Web/API/XRCompositionLayer) gerendert wird.
- [`XRWebGLSubImage.imageIndex`](/de/docs/Web/API/XRWebGLSubImage/imageIndex) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Zahl, die den Offset im Texturarray darstellt, wenn die Schicht mit `texture-array` angefordert wurde; andernfalls [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).
- [`XRWebGLSubImage.colorTextureWidth`](/de/docs/Web/API/XRWebGLSubImage/colorTextureWidth) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Zahl, die die Breite in Pixeln der GL-Befestigung darstellt.
- [`XRWebGLSubImage.colorTextureHeight`](/de/docs/Web/API/XRWebGLSubImage/colorTextureHeight) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Zahl, die die Höhe in Pixeln der GL-Befestigung darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRLayer`](/de/docs/Web/API/XRLayer)
- [`XRWebGLBinding.getSubImage()`](/de/docs/Web/API/XRWebGLBinding/getSubImage)
- [`XRWebGLBinding.getViewSubImage()`](/de/docs/Web/API/XRWebGLBinding/getViewSubImage)
