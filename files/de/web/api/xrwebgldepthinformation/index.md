---
title: XRWebGLDepthInformation
slug: Web/API/XRWebGLDepthInformation
l10n:
  sourceCommit: d666d5ed812b56cbc9c6cba853494976da1f1dd2
---

{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

Das **`XRWebGLDepthInformation`**-Interface enthält Tiefeninformationen von der GPU/WebGL (zurückgegeben von [`XRWebGLBinding.getDepthInformation()`](/de/docs/Web/API/XRWebGLBinding/getDepthInformation)).

{{InheritanceDiagram}}

Dieses Interface erbt Eigenschaften von seinem Elternobjekt, [`XRDepthInformation`](/de/docs/Web/API/XRDepthInformation).

## Instanz-Eigenschaften

- [`XRDepthInformation.height`](/de/docs/Web/API/XRDepthInformation/height) {{ReadOnlyInline}}
  - : Enthält die Höhe des Tiefenpuffers (Anzahl der Zeilen).
- [`XRDepthInformation.normDepthBufferFromNormView`](/de/docs/Web/API/XRDepthInformation/normDepthBufferFromNormView) {{ReadOnlyInline}}
  - : Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), der angewendet werden muss, wenn in den Tiefenpuffer indiziert wird. Die Transformation, die die Matrix darstellt, ändert das Koordinatensystem von normalisierten Ansicht-Koordinaten zu normalisierten Tiefenpuffer-Koordinaten, die dann mit der `width` und `height` des Tiefenpuffers skaliert werden können, um die absoluten Tiefenpuffer-Koordinaten zu erhalten.
- [`XRDepthInformation.rawValueToMeters`](/de/docs/Web/API/XRDepthInformation/rawValueToMeters) {{ReadOnlyInline}}
  - : Enthält den Skalierungsfaktor, mit dem die rohen Tiefenwerte multipliziert werden müssen, um die Tiefen in Metern zu erhalten.
- [`XRWebGLDepthInformation.texture`](/de/docs/Web/API/XRWebGLDepthInformation/texture) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`WebGLTexture`](/de/docs/Web/API/WebGLTexture), der Tiefenpufferinformationen als undurchsichtige Textur enthält.
- [`XRDepthInformation.width`](/de/docs/Web/API/XRDepthInformation/width) {{ReadOnlyInline}}
  - : Enthält die Breite des Tiefenpuffers (Anzahl der Spalten).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRDepthInformation`](/de/docs/Web/API/XRDepthInformation)
- [`XRCPUDepthInformation`](/de/docs/Web/API/XRCPUDepthInformation)
- [`XRWebGLBinding.getDepthInformation()`](/de/docs/Web/API/XRWebGLBinding/getDepthInformation)
