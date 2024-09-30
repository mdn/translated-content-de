---
title: "XREquirectLayer: redraw Ereignis"
short-title: redraw
slug: Web/API/XREquirectLayer/redraw_event
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Das `redraw` Ereignis wird an das `XREquirectLayer` Objekt gesendet, wenn die zugrunde liegenden Ressourcen der Ebene verloren gehen oder wenn der XR Compositor die Ebene nicht mehr reprojizieren kann. Wenn dieses Ereignis gesendet wird, sollten Autoren den Inhalt der Ebene im nächsten XR Animationsframe neu zeichnen.

Siehe auch die [`XRCompositionLayer.needsRedraw`](/de/docs/Web/API/XRCompositionLayer/needsRedraw) Eigenschaft, die auch für `XREquirectLayer` Objekte durch Vererbung von [`XRCompositionLayer`](/de/docs/Web/API/XRCompositionLayer) verfügbar ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("redraw", (event) => {});

onredraw = (event) => {};
```

## Eventtyp

Ein [`XRLayerEvent`](/de/docs/Web/API/XRLayerEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind auch Eigenschaften von der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`layer`](/de/docs/Web/API/XRLayerEvent/layer) {{ReadOnlyInline}}
  - : Der [`XRLayer`](/de/docs/Web/API/XRLayer), der das Ereignis erzeugt hat.

## Beispiele

### Verwendung des `redraw` Ereignisses

Sie können `redraw` an [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) übergeben:

```js
equirectLayer.addEventListener("redraw", (event) => {
  // redraw the layer
});
```

Alternativ können Sie die `onredraw` Ereignishandler-Eigenschaft verwenden, um einen Handler für das `redraw` Ereignis einzurichten:

```js
equirectLayer.onredraw = (event) => {
  // redraw the layer
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRCompositionLayer.needsRedraw`](/de/docs/Web/API/XRCompositionLayer/needsRedraw)
