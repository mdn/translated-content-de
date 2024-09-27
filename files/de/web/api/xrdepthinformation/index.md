---
title: XRDepthInformation
slug: Web/API/XRDepthInformation
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

Das **`XRDepthInformation`**-Interface enthält Informationen über die Entfernung von Ihrem Gerät zur realen Geometrie in Ihrer Umgebung.

Dieses Interface ist das übergeordnete von:

- [`XRCPUDepthInformation`](/de/docs/Web/API/XRCPUDepthInformation)
  - : Tiefeninformationen von der CPU (zurückgegeben von [`XRFrame.getDepthInformation()`](/de/docs/Web/API/XRFrame/getDepthInformation)).
- [`XRWebGLDepthInformation`](/de/docs/Web/API/XRWebGLDepthInformation)
  - : Tiefeninformationen von WebGL (zurückgegeben von [`XRWebGLBinding.getDepthInformation()`](/de/docs/Web/API/XRWebGLBinding/getDepthInformation)).

In der Regel arbeiten Sie mit diesen untergeordneten Interfaces. Dennoch stellt `XRDepthInformation` einige nützliche geerbte Eigenschaften bereit:

## Instanzeigenschaften

- [`XRDepthInformation.height`](/de/docs/Web/API/XRDepthInformation/height) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Enthält die Höhe des Tiefenpuffers (Anzahl der Zeilen).
- [`XRDepthInformation.normDepthBufferFromNormView`](/de/docs/Web/API/XRDepthInformation/normDepthBufferFromNormView) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), das angewendet werden muss, wenn in den Tiefenpuffer indexiert wird. Die Transformation, die die Matrix darstellt, ändert das Koordinatensystem von normalisierten Anzeigekoordinaten zu normalisierten Tiefenpuffer-Koordinaten, die dann durch `width` und `height` des Tiefenpuffers skaliert werden können, um die absoluten Tiefenpuffer-Koordinaten zu erhalten.
- [`XRDepthInformation.rawValueToMeters`](/de/docs/Web/API/XRDepthInformation/rawValueToMeters) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Enthält den Skalierungsfaktor, mit dem die rohen Tiefenwerte multipliziert werden müssen, um die Tiefen in Metern zu erhalten.
- [`XRDepthInformation.width`](/de/docs/Web/API/XRDepthInformation/width) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Enthält die Breite des Tiefenpuffers (Anzahl der Spalten).

## Instanzmethoden

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
