---
title: "XRRigidTransform: orientation-Eigenschaft"
short-title: orientation
slug: Web/API/XRRigidTransform/orientation
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform)-Eigenschaft **`orientation`** ist ein [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly), der einen normalisierten [Quaternion](/de/docs/Glossary/quaternion) (auch als **Einheitsquaternion** oder **[Versor](https://en.wikipedia.org/wiki/Versor)** bezeichnet) enthält, der die Rotationskomponente der vom Objekt dargestellten Transformation angibt. Wenn Sie einen Quaternion angeben, dessen Länge nicht genau 1,0 Meter beträgt, wird er für Sie normalisiert.

## Wert

Ein [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)-Objekt, das eine Einheitsquaternion enthält und die Orientierungskomponente der Transformation bereitstellt. Als Einheitsquaternion beträgt die Länge der zurückgegebenen Quaternion immer 1,0 Meter.

## Beispiele

Um einen Bezugsraum zu erstellen, der so ausgerichtet ist, dass er direkt nach oben schaut und 2 Meter über dem Boden positioniert ist:

```js
xrReferenceSpace = refSpace.getOffsetReferenceSpace(
  new XRRigidTransform({ y: -2 }, { x: 0.0, y: 1.0, z: 0.0, w: 1.0 }),
);
```

Die hier angegebene Einheitsquaternion ist \[0.0, 1.0, 0.0, 1.0], um anzuzeigen, dass das Objekt direkt entlang der _y_-Achse ausgerichtet sein soll.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bewegung, Orientierung und Bewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
- [Einheitsquaternionen](https://en.wikipedia.org/wiki/Versor)
- [Quaternionen und räumliche Rotation](https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation)
