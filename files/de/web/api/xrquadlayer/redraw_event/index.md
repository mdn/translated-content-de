---
title: "XRQuadLayer: redraw-Ereignis"
short-title: redraw
slug: Web/API/XRQuadLayer/redraw_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Das `redraw`-Ereignis wird an das `XRQuadLayer`-Objekt gesendet, wenn die zugrunde liegenden Ressourcen der Ebene verloren gehen oder wenn der XR-Kompositor die Ebene nicht mehr neu projizieren kann. Wenn dieses Ereignis gesendet wird, sollten Autoren den Inhalt der Ebene im nächsten XR-Animationsframe neu zeichnen.

Siehe auch die [`XRCompositionLayer.needsRedraw`](/de/docs/Web/API/XRCompositionLayer/needsRedraw)-Eigenschaft, die auch für `XRQuadLayer`-Objekte durch Vererbung von [`XRCompositionLayer`](/de/docs/Web/API/XRCompositionLayer) verfügbar ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("redraw", (event) => { })

onredraw = (event) => { }
```

## Ereignistyp

Ein [`XRLayerEvent`](/de/docs/Web/API/XRLayerEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind Eigenschaften von der übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event) verfügbar._

- [`layer`](/de/docs/Web/API/XRLayerEvent/layer) {{ReadOnlyInline}}
  - : Der [`XRLayer`](/de/docs/Web/API/XRLayer), der das Ereignis erzeugt hat.

## Beispiele

### Verwendung des `redraw`-Ereignisses

Sie können `redraw` an [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) übergeben:

```js
quadLayer.addEventListener("redraw", (event) => {
  // redraw the layer
});
```

Alternativ können Sie die `onredraw`-Ereignishandler-Eigenschaft verwenden, um einen Handler für das `redraw`-Ereignis einzurichten:

```js
quadLayer.onredraw = (event) => {
  // redraw the layer
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRCompositionLayer.needsRedraw`](/de/docs/Web/API/XRCompositionLayer/needsRedraw)
