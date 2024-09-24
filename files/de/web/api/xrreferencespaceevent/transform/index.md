---
title: "XRReferenceSpaceEvent: transform Eigenschaft"
short-title: transform
slug: Web/API/XRReferenceSpaceEvent/transform
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte Eigenschaft **`transform`** des {{domxref("XRReferenceSpaceEvent")}} gibt die Position und Ausrichtung des betroffenen nativen Ursprungs des {{domxref("XRReferenceSpaceEvent.referenceSpace", "referenceSpace")}} an, nachdem die Veränderungen, die das Ereignis darstellt, angewendet wurden. Der `transform` wird im alten Koordinatensystem definiert, was seine Nutzung zur Umwandlung von Koordinaten vom Vor-Ereignis- zum Nach-Ereignis-Koordinatensystem ermöglicht.

## Wert

Ein {{domxref("XRRigidTransform")}}-Objekt, das eine Transformation bereitstellt, die verwendet werden kann, um Koordinaten vom Vor-Ereignis-Koordinatensystem in das Nach-Ereignis-Koordinatensystem umzuwandeln.

## Verwendungshinweise

Bei Erhalt eines `reset`-Ereignisses können Sie den `transform` auf zwischengespeicherte Positions- oder Orientierungsinformationen anwenden, um sie in das aktualisierte Koordinatensystem zu verschieben. Alternativ können Sie alle zwischengespeicherten Positionsinformationen verwerfen und vollständig neu berechnen. Welche Vorgehensweise Sie wählen, hängt von Ihren Anforderungen ab.

Einzelheiten dazu, was ein `reset`-Ereignis auslöst und wie darauf zu reagieren ist, finden Sie in der Dokumentation des {{domxref("XRReferenceSpace.reset_event", "reset")}}-Ereignisses.

## Beispiele

Dieses Beispiel behandelt das `reset`-Ereignis, indem es alle Objekte in einer Szene durchgeht und die Position jedes Objekts durch Multiplikation mit dem im Ereignis angegebenen `transform` aktualisiert. Die Szene wird durch ein `scene`-Objekt dargestellt, in dem sich alle Objekte in einem Array namens `objects` befinden.

```js
xrReferenceSpace.addEventListener("reset", (event) => {
  for (const obj of scene.objects) {
    mat4.multiply(obj.transform, obj.transform, event.transform);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
