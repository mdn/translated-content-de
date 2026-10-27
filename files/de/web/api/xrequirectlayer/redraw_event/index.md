---
title: "XREquirectLayer: redraw-Ereignis"
short-title: redraw
slug: Web/API/XREquirectLayer/redraw_event
l10n:
  sourceCommit: 92c5e81c587ffea6177431743106118984f1675d
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Das Ereignis `redraw` wird an das `XREquirectLayer`-Objekt gesendet, wenn die zugrunde liegenden Ressourcen der Ebene verloren gehen oder der XR Compositor die Ebene nicht mehr reprojizieren kann. Wenn dieses Ereignis gesendet wird, sollten Sie den Inhalt der Ebene im nächsten XR-Animationsframe neu zeichnen.

Siehe auch die Eigenschaft [`XRCompositionLayer.needsRedraw`](/de/docs/Web/API/XRCompositionLayer/needsRedraw), die `XREquirectLayer`-Objekten ebenfalls durch Vererbung von [`XRCompositionLayer`](/de/docs/Web/API/XRCompositionLayer) zur Verfügung steht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("redraw", (event) => { })
```

Alternativ können Sie ihn der [Ereignisbehandlungseigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onredraw = (event) => { }
```

## Ereignistyp

Ein [`XRLayerEvent`](/de/docs/Web/API/XRLayerEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Das Ereignis `redraw` verwenden

Sie können `redraw` an [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) übergeben:

```js
equirectLayer.addEventListener("redraw", (event) => {
  // redraw the layer
});
```

Alternativ können Sie die Ereignisbehandlungseigenschaft `onredraw` verwenden, um einen Handler für das Ereignis `redraw` festzulegen. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onredraw` hinzugefügte Ereignis-Listener ersetzt werden:

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
