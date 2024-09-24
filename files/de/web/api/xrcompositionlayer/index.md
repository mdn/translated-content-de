---
title: XRCompositionLayer
slug: Web/API/XRCompositionLayer
l10n:
  sourceCommit: 867d4e1e8a11aed4a93b65d5c7768b225b7fbd7e
---

{{securecontext_header}}{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`XRCompositionLayer`**-Schnittstelle der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) ist eine Basisklasse, die eine Reihe von gemeinsamen Eigenschaften und Verhaltensweisen für WebXR-Schichttypen definiert. Sie ist nicht eigenständig konstruierbar.

Mehrere Schichttypen erben von `XRCompositionLayer`:

- {{domxref("XREquirectLayer")}}
- {{domxref("XRCubeLayer")}}
- {{domxref("XRCylinderLayer")}}
- {{domxref("XRProjectionLayer")}}
- {{domxref("XRQuadLayer")}}

`XRCompositionLayer` selbst erbt von der allgemeinen Klasse {{domxref("XRLayer")}} (die von {{domxref("EventTarget")}} erbt).

{{InheritanceDiagram}}

## Instanzeigenschaften

- {{domxref("XRCompositionLayer.blendTextureSourceAlpha")}} {{Experimental_Inline}}
  - : Ein boolescher Wert, der den Alpha-Kanal der Schichtstruktur aktiviert.
- {{domxref("XRCompositionLayer.layout")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der Layouttyp der Schicht.
- {{domxref("XRCompositionLayer.mipLevels")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Anzahl der Mip-Level in den Farb- und Strukturdaten für die Schicht.
- {{domxref("XRCompositionLayer.needsRedraw")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein boolescher Wert, der signalisiert, dass die Schicht im nächsten Frame neu gerendert werden soll.

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, {{domxref("EventTarget")}}_.

- {{domxref("XRCompositionLayer.destroy()")}} {{Experimental_Inline}}
  - : Löscht die zugrunde liegenden Schichtanhänge.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XRLayer")}}
- {{domxref("EventTarget")}}
- {{domxref("XREquirectLayer")}}
- {{domxref("XRCubeLayer")}}
- {{domxref("XRCylinderLayer")}}
- {{domxref("XRProjectionLayer")}}
- {{domxref("XRQuadLayer")}}
