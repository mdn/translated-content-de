---
title: XRCPUDepthInformation
slug: Web/API/XRCPUDepthInformation
l10n:
  sourceCommit: 6c592023efa1f762eaa1eb1f36241750626be51c
---

{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

Das **`XRCPUDepthInformation`** Interface enthält Tiefeninformationen von der CPU (zurückgegeben von [`XRFrame.getDepthInformation()`](/de/docs/Web/API/XRFrame/getDepthInformation)).

{{InheritanceDiagram}}

Dieses Interface erbt Eigenschaften von seinem Elternelement, [`XRDepthInformation`](/de/docs/Web/API/XRDepthInformation).

## Instanz-Eigenschaften

- [`XRCPUDepthInformation.data`](/de/docs/Web/API/XRCPUDepthInformation/data) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein {{jsxref("ArrayBuffer")}}, das Informationen des Tiefen-Puffers im Rohformat enthält.
- [`XRDepthInformation.height`](/de/docs/Web/API/XRDepthInformation/height) {{ReadOnlyInline}}
  - : Enthält die Höhe des Tiefen-Puffers (Anzahl der Zeilen).
- [`XRDepthInformation.normDepthBufferFromNormView`](/de/docs/Web/API/XRDepthInformation/normDepthBufferFromNormView) {{ReadOnlyInline}}
  - : Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), der bei der Indexierung in den Tiefen-Puffer angewendet werden muss. Die Transformation, die die Matrix darstellt, ändert das Koordinatensystem von normalisierten Ansicht-Koordinaten zu normalisierten Tiefen-Puffer-Koordinaten, die dann durch Breite und Höhe des Tiefen-Puffers skaliert werden können, um die absoluten Tiefen-Puffer-Koordinaten zu erhalten.
- [`XRDepthInformation.rawValueToMeters`](/de/docs/Web/API/XRDepthInformation/rawValueToMeters) {{ReadOnlyInline}}
  - : Enthält den Skalierungsfaktor, mit dem die Roh-Tiefenwerte multipliziert werden müssen, um die Tiefen in Metern zu erhalten.
- [`XRDepthInformation.width`](/de/docs/Web/API/XRDepthInformation/width) {{ReadOnlyInline}}
  - : Enthält die Breite des Tiefen-Puffers (Anzahl der Spalten).

## Instanz-Methoden

- [`XRCPUDepthInformation.getDepthInMeters()`](/de/docs/Web/API/XRCPUDepthInformation/getDepthInMeters) {{Experimental_Inline}}
  - : Gibt die Tiefe in Metern bei (x, y) in normalisierten Ansicht-Koordinaten zurück.

## Beispiele

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRDepthInformation`](/de/docs/Web/API/XRDepthInformation)
- [`XRWebGLDepthInformation`](/de/docs/Web/API/XRWebGLDepthInformation)
- [`XRFrame.getDepthInformation()`](/de/docs/Web/API/XRFrame/getDepthInformation)
