---
title: XRProjectionLayer
slug: Web/API/XRProjectionLayer
l10n:
  sourceCommit: 9f24be2de6158053df593b9b466f5da96e31f928
---

{{securecontext_header}}{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Das **`XRProjectionLayer`**-Interface der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) ist eine Ebene, die die gesamte Sicht des Beobachters ausfüllt und nahezu mit der nativen Bildrate des Geräts aktualisiert wird.

`XRProjectionLayer` wird von allen [`XRSession`](/de/docs/Web/API/XRSession)-Objekten unterstützt (kein `layers`-Feature-Descriptor ist erforderlich).

Um eine neue `XRProjectionLayer` zu erstellen, rufen Sie [`XRWebGLBinding.createProjectionLayer()`](/de/docs/Web/API/XRWebGLBinding/createProjectionLayer) auf.
Um Ebenen auf das XR-Gerät zu präsentieren, fügen Sie diese dem `layers`-Renderstatus mithilfe von [`XRSession.updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) hinzu.

`XRProjectionLayer`-Objekte haben keinen zugeordneten [`XRSpace`](/de/docs/Web/API/XRSpace), da sie auf den gesamten Rahmen rendern.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`XRCompositionLayer`](/de/docs/Web/API/XRCompositionLayer) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`XRProjectionLayer.fixedFoveation`](/de/docs/Web/API/XRProjectionLayer/fixedFoveation) {{Experimental_Inline}}
  - : Eine Zahl, die die Menge an Foveation angibt, die der XR-Compositor für die Ebene verwendet. Fixed Foveated Rendering (FFR) rendert die Ränder der Augen-Texturen in einer niedrigeren Auflösung als das Zentrum und reduziert die GPU-Belastung.
- [`XRProjectionLayer.ignoreDepthValues`](/de/docs/Web/API/XRProjectionLayer/ignoreDepthValues) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Boolean-Wert, der anzeigt, dass der XR-Compositor die Werte des Tiefenpuffers beim Rendern der Ebene nicht verwendet.
- [`XRProjectionLayer.textureArrayLength`](/de/docs/Web/API/XRProjectionLayer/textureArrayLength) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Anzahl der Ebenen für Array-Texturen bei der Verwendung von `texture-array` als `textureType`.
- [`XRProjectionLayer.textureHeight`](/de/docs/Web/API/XRProjectionLayer/textureHeight) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Höhe in Pixeln der Farb-Texturen dieser Ebene.
- [`XRProjectionLayer.textureWidth`](/de/docs/Web/API/XRProjectionLayer/textureWidth) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Breite in Pixeln der Farb-Texturen dieser Ebene.

## Instanz-Methoden

_Erbt Methoden von seinen Elternteilen, [`XRCompositionLayer`](/de/docs/Web/API/XRCompositionLayer) und [`EventTarget`](/de/docs/Web/API/EventTarget)_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRLayer`](/de/docs/Web/API/XRLayer)
- [`EventTarget`](/de/docs/Web/API/EventTarget)
- [`XRCompositionLayer`](/de/docs/Web/API/XRCompositionLayer)
- [`XREquirectLayer`](/de/docs/Web/API/XREquirectLayer)
- [`XRCubeLayer`](/de/docs/Web/API/XRCubeLayer)
- [`XRCylinderLayer`](/de/docs/Web/API/XRCylinderLayer)
- [`XRQuadLayer`](/de/docs/Web/API/XRQuadLayer)
