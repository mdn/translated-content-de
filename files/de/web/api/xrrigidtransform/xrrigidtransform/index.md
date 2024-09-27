---
title: "XRRigidTransform: XRRigidTransform()-Konstruktor"
short-title: XRRigidTransform()
slug: Web/API/XRRigidTransform/XRRigidTransform
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Der **`XRRigidTransform()`**-Konstruktor erstellt ein neues [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform)-Objekt, das die Position und Orientierung eines Punktes oder Objekts darstellt. Unter anderem wird `XRRigidTransform` verwendet, um eine Transformation bereitzustellen, die zwischen Koordinatensystemen in verschiedenen Räumen übersetzt.

## Syntax

```js-nolint
new XRRigidTransform()
new XRRigidTransform(position)
new XRRigidTransform(position, orientation)
```

### Parameter

- `position` {{optional_inline}}
  - : Ein Objekt, das die Koordinaten angibt, an denen sich der Punkt oder das Objekt befindet. Diese Dimensionen werden in Metern angegeben. Wenn dieser Parameter weggelassen wird oder ungültig ist, wird angenommen, dass die Position `{x: 0, y: 0, z: 0, w: 1}` ist. `w` muss _immer_ 1 sein.
- `orientation` {{optional_inline}}
  - : Ein Objekt, das die Richtung angibt, in die das Objekt zeigt. Der Standardwert für `orientation` ist `{x: 0, y: 0, z: 0, w: 1}`. Die angegebene Orientierung wird normalisiert, falls sie es noch nicht ist.

### Rückgabewert

Ein neues [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform)-Objekt, das initialisiert wurde, um eine Transformationsmatrix zu repräsentieren, die die Position und Orientierung eines Objekts vom Ursprung zu der angegebenen `position` anpasst und in die durch `orientation` angegebene Richtung zeigt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Wert der `w`-Koordinate in der angegebenen `position` nicht 1.0 ist.

## Beispiele

In diesem Beispiel wird der Beginn der Animation einer Szene gezeigt, beginnend mit dem Anfordern eines Referenzraums eines bestimmten Typs, dann mit der Verschiebung des Koordinatensystems basierend auf einer Transformation, bevor der erste Animationsframe angefordert wird.

```js
let animationFrameRequestID = 0;

xrSession.requestReferenceSpace("local-floor").then((refSpace) => {
  xrReferenceSpace = refSpace.getOffsetReferenceSpace(
    new XRRigidTransform(viewerPosition, viewerOrientation),
  );
  animationFrameRequestID = xrSession.requestAnimationFrame(drawFrame);
});
```

Nach Anforderung eines Referenzraums vom Typ `local-floor` wird das zurückgegebene Versprechen schließlich aufgelöst, woraufhin wir ein neues Referenzraum-Objekt, `refSpace`, erhalten. Nachdem ein `XRRigidTransform` aus der anfänglichen Position und Orientierung des Viewers erstellt wurde, übergeben wir die neue Transformation an [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace), um einen _anderen_ Referenzraum zu erstellen, der jetzt so verschoben ist, dass sein Ursprung sich an der gleichen Stelle im Raum befindet wie die durch `viewerPosition` angegebenen Koordinaten, wobei die Orientierung ebenfalls auf die gleiche Weise geändert wird.

Dann wird [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) aufgerufen, um einen neuen Animationsframe zum Zeichnen anzufordern. Der `drawFrame()`-Callback wird ausgeführt, wenn das System bereit ist, den nächsten Frame zu zeichnen.

Weitere Beispiele finden Sie in [Bewegung, Orientierung und Bewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
