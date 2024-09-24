---
title: XRDepthInformation
slug: Web/API/XRDepthInformation
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

Das **`XRDepthInformation`** Interface enthält Informationen über die Entfernung vom Gerät des Benutzers zur realen Geometrie in der Umgebung des Benutzers.

Dieses Interface ist das übergeordnete von:

- {{domxref("XRCPUDepthInformation")}}
  - : Tiefeninformationen von der CPU (zurückgegeben von {{domxref("XRFrame.getDepthInformation()")}}).
- {{domxref("XRWebGLDepthInformation")}}
  - : Tiefeninformationen von WebGL (zurückgegeben von {{domxref("XRWebGLBinding.getDepthInformation()")}}).

In der Regel interagieren Sie mit diesen untergeordneten Interfaces. Allerdings bietet `XRDepthInformation` einige nützliche Eigenschaften, die übernommen werden:

## Instanz-Eigenschaften

- {{domxref("XRDepthInformation.height")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Enthält die Höhe des Tiefenpuffers (Anzahl der Reihen).
- {{domxref("XRDepthInformation.normDepthBufferFromNormView")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein {{domxref("XRRigidTransform")}}, der angewendet werden muss, wenn in den Tiefenpuffer indiziert wird. Die Transformation, die die Matrix darstellt, ändert das Koordinatensystem von normalisierten Ansichtskoordinaten zu normalisierten Tiefenpuffer-Koordinaten, die dann durch die `Breite` und `Höhe` des Tiefenpuffers skaliert werden können, um die absoluten Tiefenpuffer-Koordinaten zu erhalten.
- {{domxref("XRDepthInformation.rawValueToMeters")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Beinhaltet den Skalierungsfaktor, mit dem die Rohwert-Tiefen multipliziert werden müssen, um die Tiefen in Metern zu erhalten.
- {{domxref("XRDepthInformation.width")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Enthält die Breite des Tiefenpuffers (Anzahl der Spalten).

## Instanz-Methoden

Keine.

## Beispiele

Siehe {{domxref("XRCPUDepthInformation")}} und {{domxref("XRWebGLDepthInformation")}} für Code-Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XRCPUDepthInformation")}}
- {{domxref("XRWebGLDepthInformation")}}
- {{domxref("XRFrame.getDepthInformation()")}}
