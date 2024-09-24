---
title: XRCPUTiefeninformation
slug: Web/API/XRCPUDepthInformation
l10n:
  sourceCommit: 6c592023efa1f762eaa1eb1f36241750626be51c
---

{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

Die **`XRCPUDepthInformation`**-Schnittstelle enthält Tiefeninformationen von der CPU (zurückgegeben von {{domxref("XRFrame.getDepthInformation()")}}).

{{InheritanceDiagram}}

Diese Schnittstelle erbt Eigenschaften von ihrem Elternteil, {{domxref("XRDepthInformation")}}.

## Instanz-Eigenschaften

- {{domxref("XRCPUDepthInformation.data")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein {{jsxref("ArrayBuffer")}}, der die Tiefenpuffer-Informationen im Rohformat enthält.
- {{domxref("XRDepthInformation.height")}} {{ReadOnlyInline}}
  - : Beinhaltet die Höhe des Tiefenpuffers (Anzahl der Reihen).
- {{domxref("XRDepthInformation.normDepthBufferFromNormView")}} {{ReadOnlyInline}}
  - : Ein {{domxref("XRRigidTransform")}}, der angewendet werden muss, wenn in den Tiefenpuffer indiziert wird. Die Transformation, die die Matrix darstellt, ändert das Koordinatensystem von den normalisierten Ansicht-Koordinaten zu normalisierten Tiefenpuffer-Koordinaten, die dann durch die `width` und `height` des Tiefenpuffers skaliert werden können, um die absoluten Tiefenpuffer-Koordinaten zu erhalten.
- {{domxref("XRDepthInformation.rawValueToMeters")}} {{ReadOnlyInline}}
  - : Enthält den Skalierungsfaktor, mit dem die rohen Tiefenwerte multipliziert werden müssen, um die Tiefen in Metern zu erhalten.
- {{domxref("XRDepthInformation.width")}} {{ReadOnlyInline}}
  - : Beinhaltet die Breite des Tiefenpuffers (Anzahl der Spalten).

## Instanz-Methoden

- {{domxref("XRCPUDepthInformation.getDepthInMeters()")}} {{Experimental_Inline}}
  - : Gibt die Tiefe in Metern an der Position (x, y) in normalisierten Ansicht-Koordinaten zurück.

## Beispiele

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XRDepthInformation")}}
- {{domxref("XRWebGLDepthInformation")}}
- {{domxref("XRFrame.getDepthInformation()")}}
