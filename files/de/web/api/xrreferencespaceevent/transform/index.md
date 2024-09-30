---
title: "XRReferenceSpaceEvent: transform-Eigenschaft"
short-title: transform
slug: Web/API/XRReferenceSpaceEvent/transform
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte Eigenschaft [`XRReferenceSpaceEvent`](/de/docs/Web/API/XRReferenceSpaceEvent) **`transform`** gibt die Position und Orientierung des betroffenen `referenceSpace`'s nativer Ursprung nach den Änderungen, die das Ereignis darstellt, an. Der `transform` wird im alten Koordinatensystem definiert, was es ermöglicht, Koordinaten vom Vor-Ereignis-Koordinatensystem ins Nach-Ereignis-Koordinatensystem zu konvertieren.

## Wert

Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform)-Objekt, das eine Transformation bereitstellt, welche genutzt werden kann, um Koordinaten vom Vor-Ereignis-Koordinatensystem ins Nach-Ereignis-Koordinatensystem zu konvertieren.

## Verwendungshinweise

Bei Empfang eines `reset`-Ereignisses können Sie den `transform` auf zwischengespeicherte Positions- oder Orientierungsinformationen anwenden, um diese in das aktualisierte Koordinatensystem zu verschieben. Alternativ können Sie alle zwischengespeicherten Positionsinformationen verwerfen und von Grund auf neu berechnen. Der Ansatz, den Sie wählen, hängt von Ihren Bedürfnissen ab.

Weitere Informationen darüber, was ein `reset`-Ereignis verursacht und wie Sie darauf reagieren können, finden Sie in der Dokumentation des [`reset`](/de/docs/Web/API/XRReferenceSpace/reset_event)-Ereignisses.

## Beispiele

Dieses Beispiel behandelt das `reset`-Ereignis, indem es alle Objekte in einer Szene durchläuft und die Position jedes Objekts aktualisiert, indem es mit dem im Ereignis angegebenen `transform` multipliziert wird. Die Szene wird durch ein `scene`-Objekt dargestellt, mit allen Objekten in einem Array namens `objects` innerhalb davon.

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
