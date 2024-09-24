---
title: XRProjectionLayer
slug: Web/API/XRProjectionLayer
l10n:
  sourceCommit: 9f24be2de6158053df593b9b466f5da96e31f928
---

{{securecontext_header}}{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`XRProjectionLayer`**-Schnittstelle der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) ist eine Ebene, die die gesamte Sicht des Beobachters ausfüllt und nahe der nativen Bildwiederholfrequenz des Geräts aktualisiert wird.

`XRProjectionLayer` wird von allen {{domxref("XRSession")}}-Objekten unterstützt (kein `layers`-Feature-Deskriptor wird benötigt).

Um eine neue `XRProjectionLayer` zu erstellen, rufen Sie {{domxref("XRWebGLBinding.createProjectionLayer()")}} auf. Um Ebenen auf dem XR-Gerät darzustellen, fügen Sie sie dem `layers`-Render-Zustand mit {{domxref("XRSession.updateRenderState()")}} hinzu.

`XRProjectionLayer`-Objekte haben keinen zugeordneten {{domxref("XRSpace")}}, da sie das gesamte Bild rendern.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Übernimmt Eigenschaften von seinem Elternteil, {{domxref("XRCompositionLayer")}} und {{domxref("EventTarget")}}._

- {{domxref("XRProjectionLayer.fixedFoveation")}} {{Experimental_Inline}}
  - : Eine Zahl, die die Menge an Foveation angibt, die vom XR-Compositor für die Ebene verwendet wird. Fixed Foveated Rendering (FFR) rendert die Ränder der Augentexturen in einer niedrigeren Auflösung als das Zentrum und reduziert die GPU-Belastung.
- {{domxref("XRProjectionLayer.ignoreDepthValues")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein boolescher Wert, der angibt, dass der XR-Compositor keine Tiefenpuffer-Werte beim Rendern der Ebene verwendet.
- {{domxref("XRProjectionLayer.textureArrayLength")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Anzahl der Ebenen des Arrays für Texturen, wenn `texture-array` als `textureType` verwendet wird.
- {{domxref("XRProjectionLayer.textureHeight")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Höhe in Pixeln der Farbtexturen dieser Ebene.
- {{domxref("XRProjectionLayer.textureWidth")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Breite in Pixeln der Farbtexturen dieser Ebene.

## Instanzmethoden

_Übernimmt Methoden von seinen Eltern, {{domxref("XRCompositionLayer")}} und {{domxref("EventTarget")}}_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XRLayer")}}
- {{domxref("EventTarget")}}
- {{domxref("XRCompositionLayer")}}
- {{domxref("XREquirectLayer")}}
- {{domxref("XRCubeLayer")}}
- {{domxref("XRCylinderLayer")}}
- {{domxref("XRQuadLayer")}}
