---
title: "XRCubeLayer: redraw Ereignis"
short-title: redraw
slug: Web/API/XRCubeLayer/redraw_event
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Das `redraw`-Ereignis wird an das `XRCubeLayer`-Objekt gesendet, wenn die zugrunde liegenden Ressourcen der Ebene verloren gehen oder wenn der XR-Kompositor die Ebene nicht mehr reprojizieren kann. Wenn dieses Ereignis gesendet wird, sollten Entwickler den Inhalt der Ebene im nächsten XR-Animationsframe neu zeichnen.

Siehe auch die [`XRCompositionLayer.needsRedraw`](/de/docs/Web/API/XRCompositionLayer/needsRedraw)-Eigenschaft, die auch für `XRCubeLayer`-Objekte durch Vererbung von [`XRCompositionLayer`](/de/docs/Web/API/XRCompositionLayer) verfügbar ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("redraw", (event) => {});

onredraw = (event) => {};
```

## Ereignistyp

Ein [`XRLayerEvent`](/de/docs/Web/API/XRLayerEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften stehen Eigenschaften von der Elternschnittstelle, [`Event`](/de/docs/Web/API/Event), zur Verfügung._

- [`layer`](/de/docs/Web/API/XRLayerEvent/layer) {{ReadOnlyInline}}
  - : Das [`XRLayer`](/de/docs/Web/API/XRLayer), das das Ereignis generiert hat.

## Beispiele

### Verwendung des `redraw`-Ereignisses

Sie können `redraw` an [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) übergeben:

```js
cubeLayer.addEventListener("redraw", (event) => {
  // redraw the layer
});
```

Alternativ können Sie die `onredraw`-Ereignishandler-Eigenschaft verwenden, um einen Handler für das `redraw`-Ereignis festzulegen:

```js
cubeLayer.onredraw = (event) => {
  // redraw the layer
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRCompositionLayer.needsRedraw`](/de/docs/Web/API/XRCompositionLayer/needsRedraw)
