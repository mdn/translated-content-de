---
title: "XRRigidTransform: orientation-Eigenschaft"
short-title: orientation
slug: Web/API/XRRigidTransform/orientation
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte {{domxref("XRRigidTransform")}}-Eigenschaft **`orientation`** ist ein {{domxref("DOMPointReadOnly")}}, der ein normalisiertes {{Glossary("quaternion")}} enthält (auch als **Einheitsquaternion** oder **[Versor](https://en.wikipedia.org/wiki/Versor)** bezeichnet), welches die Rotationskomponente der durch das Objekt repräsentierten Transformation angibt. Falls Sie ein Quaternion mit einer Länge ungleich genau 1,0 Meter spezifizieren, wird es für Sie normalisiert.

## Wert

Ein {{domxref("DOMPointReadOnly")}} Objekt, das eine Einheitsquaternion enthält, die die Orientierungs-Komponente der Transformation bereitstellt. Als Einheitsquaternion hat das zurückgegebene Quaternion immer eine Länge von 1,0 Meter.

## Beispiele

Um einen Referenzraum zu erstellen, der so ausgerichtet ist, dass er direkt nach oben schaut und sich 2 Meter über dem Bodenniveau befindet:

```js
xrReferenceSpace = refSpace.getOffsetReferenceSpace(
  new XRRigidTransform({ y: -2 }, { x: 0.0, y: 1.0, z: 0.0, w: 1.0 }),
);
```

Das hier angegebene Einheitsquaternion ist \[0.0, 1.0, 0.0, 1.0], um anzugeben, dass das Objekt direkt entlang der _y_-Achse ausgerichtet sein soll.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bewegung, Orientierung und Bewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
- [Einheitsquaternionen](https://en.wikipedia.org/wiki/Versor)
- [Quaternionen und räumliche Rotation](https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation)