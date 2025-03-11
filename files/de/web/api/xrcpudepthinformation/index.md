---
title: XRCPUDepthInformation
slug: Web/API/XRCPUDepthInformation
l10n:
  sourceCommit: d666d5ed812b56cbc9c6cba853494976da1f1dd2
---

{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

Das **`XRCPUDepthInformation`** Interface enthält Tiefeninformationen von der CPU (zurückgegeben durch [`XRFrame.getDepthInformation()`](/de/docs/Web/API/XRFrame/getDepthInformation)).

{{InheritanceDiagram}}

Dieses Interface erbt Eigenschaften von seinem Elternteil, [`XRDepthInformation`](/de/docs/Web/API/XRDepthInformation).

## Instanz-Eigenschaften

- [`XRCPUDepthInformation.data`](/de/docs/Web/API/XRCPUDepthInformation/data) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein {{jsxref("ArrayBuffer")}}, der Tiefenpufferinformationen im Rohformat enthält.
- [`XRDepthInformation.height`](/de/docs/Web/API/XRDepthInformation/height) {{ReadOnlyInline}}
  - : Enthält die Höhe des Tiefenpuffers (Anzahl der Reihen).
- [`XRDepthInformation.normDepthBufferFromNormView`](/de/docs/Web/API/XRDepthInformation/normDepthBufferFromNormView) {{ReadOnlyInline}}
  - : Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), das angewendet werden muss, wenn in den Tiefenpuffer indiziert wird. Die Transformation, die die Matrix darstellt, ändert das Koordinatensystem von normalisierten Ansichtskoordinaten zu normalisierten Tiefenpufferkoordinaten, die dann mit der `width` und `height` des Tiefenpuffers skaliert werden können, um die absoluten Tiefenpufferkoordinaten zu erhalten.
- [`XRDepthInformation.rawValueToMeters`](/de/docs/Web/API/XRDepthInformation/rawValueToMeters) {{ReadOnlyInline}}
  - : Enthält den Skalierungsfaktor, mit dem die Rohwerttiefen multipliziert werden müssen, um die Tiefen in Metern zu erhalten.
- [`XRDepthInformation.width`](/de/docs/Web/API/XRDepthInformation/width) {{ReadOnlyInline}}
  - : Enthält die Breite des Tiefenpuffers (Anzahl der Spalten).

## Instanz-Methoden

- [`XRCPUDepthInformation.getDepthInMeters()`](/de/docs/Web/API/XRCPUDepthInformation/getDepthInMeters) {{Experimental_Inline}}
  - : Gibt die Tiefe in Metern an der Position (x, y) in normalisierten Ansichtskoordinaten zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRDepthInformation`](/de/docs/Web/API/XRDepthInformation)
- [`XRWebGLDepthInformation`](/de/docs/Web/API/XRWebGLDepthInformation)
- [`XRFrame.getDepthInformation()`](/de/docs/Web/API/XRFrame/getDepthInformation)
