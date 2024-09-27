---
title: XRCPUDepthInformation
slug: Web/API/XRCPUDepthInformation
l10n:
  sourceCommit: 6c592023efa1f762eaa1eb1f36241750626be51c
---

{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

Das **`XRCPUDepthInformation`**-Interface enthält Tiefeninformationen von der CPU (zurückgegeben von [`XRFrame.getDepthInformation()`](/de/docs/Web/API/XRFrame/getDepthInformation)).

{{InheritanceDiagram}}

Dieses Interface erbt Eigenschaften von seinem Eltern-Interface, [`XRDepthInformation`](/de/docs/Web/API/XRDepthInformation).

## Instanz-Eigenschaften

- [`XRCPUDepthInformation.data`](/de/docs/Web/API/XRCPUDepthInformation/data) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein {{jsxref("ArrayBuffer")}}, der Tiefenpuffer-Informationen im Rohformat enthält.
- [`XRDepthInformation.height`](/de/docs/Web/API/XRDepthInformation/height) {{ReadOnlyInline}}
  - : Enthält die Höhe des Tiefenpuffers (Anzahl der Zeilen).
- [`XRDepthInformation.normDepthBufferFromNormView`](/de/docs/Web/API/XRDepthInformation/normDepthBufferFromNormView) {{ReadOnlyInline}}
  - : Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), der angewendet werden muss, wenn in den Tiefenpuffer indiziert wird. Die Transformation, die die Matrix darstellt, ändert das Koordinatensystem von normalisierten Sichtkoordinaten zu normalisierten Tiefenpuffer-Koordinaten, die dann durch die Breite und Höhe des Tiefenpuffers skaliert werden können, um die absoluten Tiefenpuffer-Koordinaten zu erhalten.
- [`XRDepthInformation.rawValueToMeters`](/de/docs/Web/API/XRDepthInformation/rawValueToMeters) {{ReadOnlyInline}}
  - : Enthält den Skalierungsfaktor, mit dem die Rohwert-Tiefen multipliziert werden müssen, um die Tiefen in Metern zu erhalten.
- [`XRDepthInformation.width`](/de/docs/Web/API/XRDepthInformation/width) {{ReadOnlyInline}}
  - : Enthält die Breite des Tiefenpuffers (Anzahl der Spalten).

## Instanz-Methoden

- [`XRCPUDepthInformation.getDepthInMeters()`](/de/docs/Web/API/XRCPUDepthInformation/getDepthInMeters) {{Experimental_Inline}}
  - : Gibt die Tiefe in Metern bei (x, y) in normalisierten Sichtkoordinaten zurück.

## Beispiele

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRDepthInformation`](/de/docs/Web/API/XRDepthInformation)
- [`XRWebGLDepthInformation`](/de/docs/Web/API/XRWebGLDepthInformation)
- [`XRFrame.getDepthInformation()`](/de/docs/Web/API/XRFrame/getDepthInformation)
