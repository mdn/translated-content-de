---
title: "XRQuadLayer: redraw-Ereignis"
short-title: redraw
slug: Web/API/XRQuadLayer/redraw_event
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Das `redraw`-Ereignis wird an das `XRQuadLayer`-Objekt gesendet, wenn die zugrunde liegenden Ressourcen der Ebene verloren gehen oder wenn der XR-Kompositor die Ebene nicht mehr reprojezieren kann. Wenn dieses Ereignis gesendet wird, sollten Autoren den Inhalt der Ebene im nächsten XR-Animationsframe neu zeichnen.

Siehe auch die {{domxref("XRCompositionLayer.needsRedraw")}}-Eigenschaft, die ebenfalls über Vererbung von {{domxref("XRCompositionLayer")}} für `XRQuadLayer`-Objekte verfügbar ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("redraw", (event) => {});

onredraw = (event) => {};
```

## Ereignistyp

Ein {{domxref("XRLayerEvent")}}. Erbt von {{domxref("Event")}}.

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften der übergeordneten Schnittstelle, {{domxref("Event")}}, verfügbar._

- {{domxref("XRLayerEvent.layer", "layer")}} {{ReadOnlyInline}}
  - : Das {{domxref("XRLayer")}}, das das Ereignis generiert hat.

## Beispiele

### Verwendung des `redraw`-Ereignisses

Sie können `redraw` an {{domxref("EventTarget.addEventListener()", "addEventListener()")}} übergeben:

```js
quadLayer.addEventListener("redraw", (event) => {
  // redraw the layer
});
```

Alternativ können Sie die `onredraw` Ereignis-Handler-Eigenschaft verwenden, um einen Handler für das `redraw`-Ereignis festzulegen:

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

- {{domxref("XRCompositionLayer.needsRedraw")}}
