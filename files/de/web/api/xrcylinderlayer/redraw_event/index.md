---
title: "XRCylinderLayer: redraw-Ereignis"
short-title: redraw
slug: Web/API/XRCylinderLayer/redraw_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Das `redraw`-Ereignis wird an das `XRCylinderLayer`-Objekt gesendet, wenn die zugrundeliegenden Ressourcen der Schicht verloren gehen oder wenn der XR-Compositor die Schicht nicht mehr reprojizieren kann. Sollte dieses Ereignis ausgelöst werden, sollten Autoren den Inhalt der Schicht im nächsten XR-Animationsrahmen neu zeichnen.

Siehe auch die Eigenschaft [`XRCompositionLayer.needsRedraw`](/de/docs/Web/API/XRCompositionLayer/needsRedraw), die ebenfalls für `XRCylinderLayer`-Objekte durch Vererbung von [`XRCompositionLayer`](/de/docs/Web/API/XRCompositionLayer) verfügbar ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("redraw", (event) => { })

onredraw = (event) => { }
```

## Ereignistyp

Ein [`XRLayerEvent`](/de/docs/Web/API/XRLayerEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind die Eigenschaften der Elternschnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`layer`](/de/docs/Web/API/XRLayerEvent/layer) {{ReadOnlyInline}}
  - : Das [`XRLayer`](/de/docs/Web/API/XRLayer), das das Ereignis erzeugt hat.

## Beispiele

### Verwendung des `redraw`-Ereignisses

Sie können `redraw` an [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) übergeben:

```js
cylinderLayer.addEventListener("redraw", (event) => {
  // redraw the layer
});
```

Alternativ können Sie die `onredraw`-Ereignis-Handler-Eigenschaft verwenden, um einen Handler für das `redraw`-Ereignis einzurichten:

```js
cylinderLayer.onredraw = (event) => {
  // redraw the layer
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRCompositionLayer.needsRedraw`](/de/docs/Web/API/XRCompositionLayer/needsRedraw)
