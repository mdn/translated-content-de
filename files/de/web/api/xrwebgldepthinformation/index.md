---
title: XRWebGLDepthInformation
slug: Web/API/XRWebGLDepthInformation
l10n:
  sourceCommit: 6c592023efa1f762eaa1eb1f36241750626be51c
---

{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

Die **`XRWebGLDepthInformation`** Schnittstelle enthält Tiefeninformationsdaten von der GPU/WebGL (zurückgegeben von {{domxref("XRWebGLBinding.getDepthInformation()")}}).

{{InheritanceDiagram}}

Diese Schnittstelle erbt Eigenschaften von ihrem Elternteil, {{domxref("XRDepthInformation")}}.

## Instanzeigenschaften

- {{domxref("XRDepthInformation.height")}} {{ReadOnlyInline}}
  - : Enthält die Höhe des Tiefenpuffers (Anzahl der Zeilen).
- {{domxref("XRDepthInformation.normDepthBufferFromNormView")}} {{ReadOnlyInline}}
  - : Ein {{domxref("XRRigidTransform")}}, das angewendet werden muss, wenn in den Tiefenpuffer indiziert wird. Die Transformation, die die Matrix darstellt, ändert das Koordinatensystem von normalisierten Sichtkoordinaten zu normalisierten Tiefenpufferkoordinaten, die dann mit der `width` und `height` des Tiefenpuffers skaliert werden können, um die absoluten Tiefenpufferkoordinaten zu erhalten.
- {{domxref("XRDepthInformation.rawValueToMeters")}} {{ReadOnlyInline}}
  - : Enthält den Skalierungsfaktor, mit dem die Roh-Tiefenwerte multipliziert werden müssen, um die Tiefen in Metern zu erhalten.
- {{domxref("XRWebGLDepthInformation.texture")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine {{domxref("WebGLTexture")}}, die Tiefenpufferinformationen als undurchsichtige Textur enthält.
- {{domxref("XRDepthInformation.width")}} {{ReadOnlyInline}}
  - : Enthält die Breite des Tiefenpuffers (Anzahl der Spalten).

## Beispiele

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XRDepthInformation")}}
- {{domxref("XRCPUDepthInformation")}}
- {{domxref("XRWebGLBinding.getDepthInformation()")}}
