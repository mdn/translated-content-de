---
title: "XRReferenceSpaceEvent: transform-Eigenschaft"
short-title: transform
slug: Web/API/XRReferenceSpaceEvent/transform
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte [`XRReferenceSpaceEvent`](/de/docs/Web/API/XRReferenceSpaceEvent)-Eigenschaft **`transform`** zeigt die Position und Orientierung des betroffenen [`referenceSpace`](/de/docs/Web/API/XRReferenceSpaceEvent/referenceSpace) nativen Ursprungs, nachdem die im Ereignis dargestellten Änderungen angewendet wurden. Der `transform` wird unter Verwendung des alten Koordinatensystems definiert, was es ermöglicht, Koordinaten vom Vor-Ereignis-Koordinatensystem in das Nach-Ereignis-Koordinatensystem zu konvertieren.

## Wert

Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform)-Objekt, das eine Transformation bietet, die verwendet werden kann, um Koordinaten vom Vor-Ereignis-Koordinatensystem in das Nach-Ereignis-Koordinatensystem zu konvertieren.

## Verwendungshinweise

Beim Empfang eines `reset`-Ereignisses können Sie den `transform` auf zwischengespeicherte Positions- oder Orientierungsinformationen anwenden, um diese in das aktualisierte Koordinatensystem zu verschieben. Alternativ können Sie sämtliche zwischengespeicherten Positionsinformationen verwerfen und von Grund auf neu berechnen. Die von Ihnen gewählte Herangehensweise hängt von Ihren Bedürfnissen ab.

Weitere Informationen zu den Ursachen eines `reset`-Ereignisses und zur Reaktion darauf finden Sie in der Dokumentation zum [`reset`](/de/docs/Web/API/XRReferenceSpace/reset_event)-Ereignis.

## Beispiele

Dieses Beispiel verarbeitet das `reset`-Ereignis, indem es alle Objekte in einer Szene durchgeht und die Position jedes Objekts aktualisiert, indem sie mit dem im Ereignis angegebenen `transform` multipliziert wird. Die Szene wird durch ein `scene`-Objekt dargestellt, wobei alle Objekte in einem Array namens `objects` enthalten sind.

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
