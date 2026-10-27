---
title: "XRQuadLayer: redraw-Ereignis"
short-title: redraw
slug: Web/API/XRQuadLayer/redraw_event
l10n:
  sourceCommit: 92c5e81c587ffea6177431743106118984f1675d
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Das `redraw`-Ereignis wird an das `XRQuadLayer`-Objekt gesendet, wenn die zugrunde liegenden Ressourcen des Layers verloren gehen oder der XR Compositor den Layer nicht mehr reprojizieren kann. Wenn dieses Ereignis gesendet wird, sollten Sie den Inhalt des Layers im nächsten XR-Animationsframe neu zeichnen.

Siehe auch die Eigenschaft [`XRCompositionLayer.needsRedraw`](/de/docs/Web/API/XRCompositionLayer/needsRedraw), die `XRQuadLayer`-Objekten durch Vererbung von [`XRCompositionLayer`](/de/docs/Web/API/XRCompositionLayer) ebenfalls zur Verfügung steht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("redraw", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
onredraw = (event) => { }
```

## Ereignistyp

Ein [`XRLayerEvent`](/de/docs/Web/API/XRLayerEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Das `redraw`-Ereignis verwenden

Sie können `redraw` an [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) übergeben:

```js
quadLayer.addEventListener("redraw", (event) => {
  // redraw the layer
});
```

Alternativ können Sie mit der Event-Handler-Eigenschaft `onredraw` einen Handler für das `redraw`-Ereignis festlegen. Beachten Sie jedoch, dass dadurch gegebenenfalls andere mit `onredraw` hinzugefügte Event-Listener ersetzt werden:

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
