---
title: XRCompositionLayer
slug: Web/API/XRCompositionLayer
l10n:
  sourceCommit: 867d4e1e8a11aed4a93b65d5c7768b225b7fbd7e
---

{{securecontext_header}}{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`XRCompositionLayer`**-Schnittstelle der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) ist eine Basisklasse, die eine Reihe gemeinsamer Eigenschaften und Verhaltensweisen für WebXR-Layertypen definiert. Sie kann nicht eigenständig instanziiert werden.

Mehrere Layertypen erben von `XRCompositionLayer`:

- [`XREquirectLayer`](/de/docs/Web/API/XREquirectLayer)
- [`XRCubeLayer`](/de/docs/Web/API/XRCubeLayer)
- [`XRCylinderLayer`](/de/docs/Web/API/XRCylinderLayer)
- [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer)
- [`XRQuadLayer`](/de/docs/Web/API/XRQuadLayer)

`XRCompositionLayer` selbst erbt von der allgemeinen Klasse [`XRLayer`](/de/docs/Web/API/XRLayer) (die von [`EventTarget`](/de/docs/Web/API/EventTarget) erbt).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`XRCompositionLayer.blendTextureSourceAlpha`](/de/docs/Web/API/XRCompositionLayer/blendTextureSourceAlpha) {{Experimental_Inline}}
  - : Ein boolescher Wert, der den Alpha-Kanal der Textur des Layers aktiviert.
- [`XRCompositionLayer.layout`](/de/docs/Web/API/XRCompositionLayer/layout) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der Layout-Typ des Layers.
- [`XRCompositionLayer.mipLevels`](/de/docs/Web/API/XRCompositionLayer/mipLevels) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Anzahl der Mip-Ebenen in den Farb- und Texturdaten für den Layer.
- [`XRCompositionLayer.needsRedraw`](/de/docs/Web/API/XRCompositionLayer/needsRedraw) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein boolescher Wert, der signalisiert, dass der Layer im nächsten Frame neu gerendert werden sollte.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)_.

- [`XRCompositionLayer.destroy()`](/de/docs/Web/API/XRCompositionLayer/destroy) {{Experimental_Inline}}
  - : Löscht die darunterliegenden Layer-Anhänge.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRLayer`](/de/docs/Web/API/XRLayer)
- [`EventTarget`](/de/docs/Web/API/EventTarget)
- [`XREquirectLayer`](/de/docs/Web/API/XREquirectLayer)
- [`XRCubeLayer`](/de/docs/Web/API/XRCubeLayer)
- [`XRCylinderLayer`](/de/docs/Web/API/XRCylinderLayer)
- [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer)
- [`XRQuadLayer`](/de/docs/Web/API/XRQuadLayer)
