---
title: XRWebGLSubImage
slug: Web/API/XRWebGLSubImage
l10n:
  sourceCommit: f8553485fe1d9ab48b9f4816385b43bcbb388c0e
---

{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

Die **`XRWebGLSubImage`** Schnittstelle wird beim Rendern von WebGL-Schichten verwendet.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("XRSubImage")}}._

- {{domxref("XRWebGLSubImage.colorTexture")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Farb-{{domxref("WebGLTexture")}}-Objekt für die {{domxref("XRCompositionLayer")}}, das gerendert werden soll.
- {{domxref("XRWebGLSubImage.depthStencilTexture")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Tiefen-/Stencil-{{domxref("WebGLTexture")}}-Objekt für die {{domxref("XRCompositionLayer")}}, das gerendert werden soll.
- {{domxref("XRWebGLSubImage.imageIndex")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Zahl, die den Versatz im Textur-Array darstellt, wenn die Schicht mit `texture-array` angefordert wurde; [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) andernfalls.
- {{domxref("XRWebGLSubImage.colorTextureWidth")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Zahl, die die Breite in Pixeln des GL-Anhangs darstellt.
- {{domxref("XRWebGLSubImage.colorTextureHeight")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Zahl, die die Höhe in Pixeln des GL-Anhangs darstellt.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("XRLayer")}}
- {{domxref("XRWebGLBinding.getSubImage()")}}
- {{domxref("XRWebGLBinding.getViewSubImage()")}}
