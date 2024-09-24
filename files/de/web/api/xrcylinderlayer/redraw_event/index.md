---
title: "XRCylinderLayer: redraw-Ereignis"
short-title: redraw
slug: Web/API/XRCylinderLayer/redraw_event
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Das `redraw`-Ereignis wird an das `XRCylinderLayer`-Objekt gesendet, wenn die zugrunde liegenden Ressourcen der Ebene verloren gehen oder wenn der XR-Kompositor die Ebene nicht mehr reprojizieren kann. Wenn dieses Ereignis gesendet wird, sollten Autoren den Inhalt der Ebene im nächsten XR-Animationsframe neu zeichnen.

Siehe auch die {{domxref("XRCompositionLayer.needsRedraw")}}-Eigenschaft, die `XRCylinderLayer`-Objekten durch Vererbung von {{domxref("XRCompositionLayer")}} zur Verfügung steht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("redraw", (event) => {});

onredraw = (event) => {};
```

## Ereignistyp

Ein {{domxref("XRLayerEvent")}}. Erbt von {{domxref("Event")}}.

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind auch Eigenschaften der Elternschnittstelle {{domxref("Event")}} verfügbar._

- {{domxref("XRLayerEvent.layer", "layer")}} {{ReadOnlyInline}}
  - : Das {{domxref("XRLayer")}}, das das Ereignis erzeugt hat.

## Beispiele

### Verwendung des `redraw`-Ereignisses

Sie können `redraw` an {{domxref("EventTarget.addEventListener()", "addEventListener()")}} übergeben:

```js
cylinderLayer.addEventListener("redraw", (event) => {
  // redraw the layer
});
```

Alternativ können Sie die `onredraw`-Ereignis-Handler-Eigenschaft verwenden, um einen Handler für das `redraw`-Ereignis festzulegen:

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

- {{domxref("XRCompositionLayer.needsRedraw")}}
