---
title: XRWebGLSubImage
slug: Web/API/XRWebGLSubImage
l10n:
  sourceCommit: f8553485fe1d9ab48b9f4816385b43bcbb388c0e
---

{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

Die **`XRWebGLSubImage`**-Schnittstelle wird beim Rendering von WebGL-Schichten verwendet.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem übergeordneten Element, [`XRSubImage`](/de/docs/Web/API/XRSubImage)._

- [`XRWebGLSubImage.colorTexture`](/de/docs/Web/API/XRWebGLSubImage/colorTexture) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Farbübersetzungs-`WebGLTexture`-Objekt für die [`XRCompositionLayer`](/de/docs/Web/API/XRCompositionLayer), das gerendert werden soll.
- [`XRWebGLSubImage.depthStencilTexture`](/de/docs/Web/API/XRWebGLSubImage/depthStencilTexture) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Tiefen-/Stencilüberlagerungs-`WebGLTexture`-Objekt für die [`XRCompositionLayer`](/de/docs/Web/API/XRCompositionLayer), das gerendert werden soll.
- [`XRWebGLSubImage.imageIndex`](/de/docs/Web/API/XRWebGLSubImage/imageIndex) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Zahl, die den Offset im Texturarray darstellt, wenn die Schicht mit `texture-array` angefordert wurde; [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) andernfalls.
- [`XRWebGLSubImage.colorTextureWidth`](/de/docs/Web/API/XRWebGLSubImage/colorTextureWidth) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Zahl, die die Breite in Pixeln des GL-Anhangs darstellt.
- [`XRWebGLSubImage.colorTextureHeight`](/de/docs/Web/API/XRWebGLSubImage/colorTextureHeight) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Zahl, die die Höhe in Pixeln des GL-Anhangs darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRLayer`](/de/docs/Web/API/XRLayer)
- [`XRWebGLBinding.getSubImage()`](/de/docs/Web/API/XRWebGLBinding/getSubImage)
- [`XRWebGLBinding.getViewSubImage()`](/de/docs/Web/API/XRWebGLBinding/getViewSubImage)
