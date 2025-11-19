---
title: "XRCubeLayer: redraw-Ereignis"
short-title: redraw
slug: Web/API/XRCubeLayer/redraw_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Das `redraw`-Ereignis wird an das `XRCubeLayer`-Objekt gesendet, wenn die zugrunde liegenden Ressourcen der Schicht verloren gehen oder wenn der XR Kompositor die Schicht nicht mehr reprojizieren kann. Wenn dieses Ereignis gesendet wird, sollten Entwickler den Inhalt der Schicht im nächsten XR-Animationsrahmen neu zeichnen.

Siehe auch die [`XRCompositionLayer.needsRedraw`](/de/docs/Web/API/XRCompositionLayer/needsRedraw)-Eigenschaft, die über die Vererbung von [`XRCompositionLayer`](/de/docs/Web/API/XRCompositionLayer) auch für `XRCubeLayer`-Objekte verfügbar ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("redraw", (event) => { })

onredraw = (event) => { }
```

## Ereignistyp

Ein [`XRLayerEvent`](/de/docs/Web/API/XRLayerEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

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

Alternativ können Sie die `onredraw`-Ereignis-Handler-Eigenschaft verwenden, um einen Handler für das `redraw`-Ereignis festzulegen:

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
