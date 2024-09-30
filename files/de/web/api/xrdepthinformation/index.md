---
title: XRDepthInformation
slug: Web/API/XRDepthInformation
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

Das **`XRDepthInformation`**-Interface enthält Informationen über die Entfernung vom Gerät des Benutzers zur realen Geometrie in der Umgebung des Benutzers.

Dieses Interface ist das übergeordnete von:

- [`XRCPUDepthInformation`](/de/docs/Web/API/XRCPUDepthInformation)
  - : Tiefeninformationen von der CPU (zurückgegeben von [`XRFrame.getDepthInformation()`](/de/docs/Web/API/XRFrame/getDepthInformation)).
- [`XRWebGLDepthInformation`](/de/docs/Web/API/XRWebGLDepthInformation)
  - : Tiefeninformationen von WebGL (zurückgegeben von [`XRWebGLBinding.getDepthInformation()`](/de/docs/Web/API/XRWebGLBinding/getDepthInformation)).

Sie werden in der Regel mit diesen untergeordneten Interfaces interagieren. `XRDepthInformation` bietet jedoch einige nützliche Eigenschaften, die geerbt werden:

## Instanz-Eigenschaften

- [`XRDepthInformation.height`](/de/docs/Web/API/XRDepthInformation/height) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Enthält die Höhe des Tiefenpuffers (Anzahl der Zeilen).
- [`XRDepthInformation.normDepthBufferFromNormView`](/de/docs/Web/API/XRDepthInformation/normDepthBufferFromNormView) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), der angewendet werden muss, wenn in den Tiefenpuffer indiziert wird. Die Transformation, die die Matrix darstellt, ändert das Koordinatensystem von normalisierten Ansichtskonzepten zu normalisierten Tiefenpuffer-Koordinaten, die dann durch die Breite und Höhe des Tiefenpuffers skaliert werden können, um die absoluten Tiefenpuffer-Koordinaten zu erhalten.
- [`XRDepthInformation.rawValueToMeters`](/de/docs/Web/API/XRDepthInformation/rawValueToMeters) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Enthält den Skalierungsfaktor, mit dem die Rohwerter der Tiefenwerte multipliziert werden müssen, um die Tiefen in Metern zu erhalten.
- [`XRDepthInformation.width`](/de/docs/Web/API/XRDepthInformation/width) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Enthält die Breite des Tiefenpuffers (Anzahl der Spalten).

## Instanz-Methoden

Keine.

## Beispiele

Siehe [`XRCPUDepthInformation`](/de/docs/Web/API/XRCPUDepthInformation) und [`XRWebGLDepthInformation`](/de/docs/Web/API/XRWebGLDepthInformation) für Codebeispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRCPUDepthInformation`](/de/docs/Web/API/XRCPUDepthInformation)
- [`XRWebGLDepthInformation`](/de/docs/Web/API/XRWebGLDepthInformation)
- [`XRFrame.getDepthInformation()`](/de/docs/Web/API/XRFrame/getDepthInformation)
