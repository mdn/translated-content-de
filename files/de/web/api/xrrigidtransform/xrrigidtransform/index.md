---
title: "XRRigidTransform: XRRigidTransform() Konstruktor"
short-title: XRRigidTransform()
slug: Web/API/XRRigidTransform/XRRigidTransform
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Der **`XRRigidTransform()`** Konstruktor erstellt ein neues [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform)-Objekt, das die Position und Orientierung eines Punktes oder Objekts repräsentiert. Unter anderem wird `XRRigidTransform` verwendet, wenn ein Transform bereitgestellt werden muss, um zwischen Koordinatensystemen in verschiedenen Räumen zu übersetzen.

## Syntax

```js-nolint
new XRRigidTransform()
new XRRigidTransform(position)
new XRRigidTransform(position, orientation)
```

### Parameter

- `position` {{optional_inline}}
  - : Ein Objekt, das die Koordinaten angibt, an denen sich der Punkt oder das Objekt befindet. Diese Dimensionen sind in Metern angegeben. Wenn dieser Parameter weggelassen wird oder ungültig ist, wird die Position `{x: 0, y: 0, z: 0, w: 1}` angenommen. `w` muss _immer_ 1 sein.
- `orientation` {{optional_inline}}
  - : Ein Objekt, das die Richtung angibt, in die das Objekt blickt. Der Standardwert für `orientation` ist `{x: 0, y: 0, z: 0, w: 1}`. Die angegebene Orientierung wird normalisiert, wenn sie nicht bereits normalisiert ist.

### Rückgabewert

Ein neues [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform)-Objekt, das initialisiert wurde, um eine Transformationsmatrix darzustellen, die die Position und Orientierung eines Objekts vom Ursprung zu der angegebenen `position` und in die durch `orientation` angegebene Richtung anpasst.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Wert der `w`-Koordinate in der angegebenen `position` nicht 1.0 ist.

## Beispiele

In diesem Beispiel wird der Beginn der Animation einer Szene gezeigt, beginnend mit einer Anfrage nach einem Referenzraum eines bestimmten Typs, dann Verschieben des Koordinatensystems basierend auf einem Transform, bevor der erste Animationsframe angefordert wird.

```js
let animationFrameRequestID = 0;

xrSession.requestReferenceSpace("local-floor").then((refSpace) => {
  xrReferenceSpace = refSpace.getOffsetReferenceSpace(
    new XRRigidTransform(viewerPosition, viewerOrientation),
  );
  animationFrameRequestID = xrSession.requestAnimationFrame(drawFrame);
});
```

Nach der Anforderung eines Referenzraums vom Typ `local-floor` wird das zurückgegebene Versprechen schließlich aufgelöst, zu diesem Zeitpunkt wird ein neues Referenzraumobjekt, `refSpace`, erhalten. Nachdem ein `XRRigidTransform` von der Anfangsposition und -orientierung des Betrachters erstellt wurde, übergeben wir den neuen Transform an [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace), um _einen weiteren_ Referenzraum zu erstellen, der jetzt so versetzt ist, dass sein Ursprung an der gleichen Stelle im Raum wie die von `viewerPosition` angegebenen Koordinaten liegt, wobei die Orientierung ebenfalls entsprechend angepasst wird.

Dann wird [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) aufgerufen, um einen neuen Animationsframe zum Zeichnen anzufordern. Der `drawFrame()`-Rückruf wird ausgeführt, wenn das System bereit ist, den nächsten Frame zu zeichnen.

Weitere Beispiele finden Sie unter [Bewegung, Orientierung und Bewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
