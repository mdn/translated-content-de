---
title: "XRRigidTransform: orientation-Eigenschaft"
short-title: orientation
slug: Web/API/XRRigidTransform/orientation
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform)-Eigenschaft **`orientation`** ist ein [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly), der ein normales [Quaternion](/de/docs/Glossary/quaternion) (auch **Einheitsquaternion** oder **[Versor](https://en.wikipedia.org/wiki/Versor)** genannt) enthält. Dieses gibt den Rotationsanteil der durch das Objekt dargestellten Transformation an. Falls Sie ein Quaternion angeben, dessen Länge nicht genau 1,0 Meter beträgt, wird es für Sie normalisiert.

## Wert

Ein [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)-Objekt, das ein Einheitsquaternion enthält, das die Orientierungs-Komponente der Transformation liefert. Als Einheitsquaternion beträgt die Länge des zurückgegebenen Quaternions immer 1,0 Meter.

## Beispiele

Um einen Referenzraum zu erstellen, der so ausgerichtet ist, dass er direkt nach oben schaut und sich 2 Meter über dem Boden befindet:

```js
xrReferenceSpace = refSpace.getOffsetReferenceSpace(
  new XRRigidTransform({ y: -2 }, { x: 0.0, y: 1.0, z: 0.0, w: 1.0 }),
);
```

Das hier angegebene Einheitsquaternion ist \[0.0, 1.0, 0.0, 1.0], um anzugeben, dass das Objekt direkt entlang der _y_-Achse ausgerichtet sein sollte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bewegung, Orientierung und Bewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
- [Einheitsquaternions](https://en.wikipedia.org/wiki/Versor)
- [Quaternionen und räumliche Rotation](https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation)
