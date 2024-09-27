---
title: XRWebGLDepthInformation
slug: Web/API/XRWebGLDepthInformation
l10n:
  sourceCommit: 6c592023efa1f762eaa1eb1f36241750626be51c
---

{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

Das **`XRWebGLDepthInformation`** Interface enthält Tiefeninformationen aus dem GPU/WebGL (zurückgegeben von [`XRWebGLBinding.getDepthInformation()`](/de/docs/Web/API/XRWebGLBinding/getDepthInformation)).

{{InheritanceDiagram}}

Dieses Interface erbt Eigenschaften von seinem Elterninterface, [`XRDepthInformation`](/de/docs/Web/API/XRDepthInformation).

## Instanz-Eigenschaften

- [`XRDepthInformation.height`](/de/docs/Web/API/XRDepthInformation/height) {{ReadOnlyInline}}
  - : Enthält die Höhe des Tiefenpuffers (Anzahl der Zeilen).
- [`XRDepthInformation.normDepthBufferFromNormView`](/de/docs/Web/API/XRDepthInformation/normDepthBufferFromNormView) {{ReadOnlyInline}}
  - : Eine [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), die angewendet werden muss, wenn man auf den Tiefenpuffer indexiert. Die Transformation, die die Matrix repräsentiert, ändert das Koordinatensystem von normalisierten Ansichtskoordinaten zu normalisierten Tiefenpufferkoordinaten, die dann durch die `width` und `height` des Tiefenpuffers skaliert werden können, um die absoluten Tiefenpufferkoordinaten zu erhalten.
- [`XRDepthInformation.rawValueToMeters`](/de/docs/Web/API/XRDepthInformation/rawValueToMeters) {{ReadOnlyInline}}
  - : Enthält den Skalierungsfaktor, mit dem die rohen Tiefenwerte multipliziert werden müssen, um die Tiefen in Metern zu erhalten.
- [`XRWebGLDepthInformation.texture`](/de/docs/Web/API/XRWebGLDepthInformation/texture) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine [`WebGLTexture`](/de/docs/Web/API/WebGLTexture), die Tiefenpufferinformationen als undurchsichtige Textur enthält.
- [`XRDepthInformation.width`](/de/docs/Web/API/XRDepthInformation/width) {{ReadOnlyInline}}
  - : Enthält die Breite des Tiefenpuffers (Anzahl der Spalten).

## Beispiele

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRDepthInformation`](/de/docs/Web/API/XRDepthInformation)
- [`XRCPUDepthInformation`](/de/docs/Web/API/XRCPUDepthInformation)
- [`XRWebGLBinding.getDepthInformation()`](/de/docs/Web/API/XRWebGLBinding/getDepthInformation)
