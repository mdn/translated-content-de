---
title: "XRRigidTransform: XRRigidTransform() Konstruktor"
short-title: XRRigidTransform()
slug: Web/API/XRRigidTransform/XRRigidTransform
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Der **`XRRigidTransform()`**-Konstruktor erzeugt ein neues {{domxref("XRRigidTransform")}}-Objekt, das die Position und Orientierung eines Punktes oder Objekts darstellt. Unter anderem wird `XRRigidTransform` verwendet, um eine Transformation bereitzustellen, um zwischen Koordinatensystemen in verschiedenen Räumen zu übersetzen.

## Syntax

```js-nolint
new XRRigidTransform()
new XRRigidTransform(position)
new XRRigidTransform(position, orientation)
```

### Parameter

- `position` {{optional_inline}}
  - : Ein Objekt, das die Koordinaten angibt, an denen sich der Punkt oder das Objekt befindet. Diese Dimensionen sind in Metern angegeben. Wenn dieser Parameter weggelassen wird oder ungültig ist, wird davon ausgegangen, dass die verwendete Position `{x: 0, y: 0, z: 0, w: 1}` ist. `w` muss _immer_ 1 sein.
- `orientation` {{optional_inline}}
  - : Ein Objekt, das die Richtung angibt, in die das Objekt schaut. Der Standardwert für `orientation` ist `{x: 0, y: 0, z: 0, w: 1}`. Die angegebene Orientierung wird normalisiert, wenn sie noch nicht normalisiert ist.

### Rückgabewert

Ein neues {{domxref("XRRigidTransform")}}-Objekt, das initialisiert wurde, um eine Transformationsmatrix darzustellen, die die Position und Orientierung eines Objekts vom Ursprung zur angegebenen `position` anpasst und in die durch `orientation` angegebene Richtung schaut.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Wert der `w`-Koordinate in der angegebenen `position` nicht 1.0 ist.

## Beispiele

In diesem Beispiel wird der Beginn der Animation einer Szene gezeigt, beginnend mit einer Anforderung für einen Referenzraum eines gegebenen Typs, um dann das Koordinatensystem basierend auf einer Transformation zu verschieben, bevor der erste Animationsframe angefordert wird.

```js
let animationFrameRequestID = 0;

xrSession.requestReferenceSpace("local-floor").then((refSpace) => {
  xrReferenceSpace = refSpace.getOffsetReferenceSpace(
    new XRRigidTransform(viewerPosition, viewerOrientation),
  );
  animationFrameRequestID = xrSession.requestAnimationFrame(drawFrame);
});
```

Nachdem ein Referenzraum vom Typ `local-floor` angefordert wurde, wird das zurückgegebene Versprechen letztendlich erfüllt, woraufhin wir ein neues Referenzraumobjekt, `refSpace`, erhalten. Nachdem ein `XRRigidTransform` aus der Anfangsposition und Orientierung des Betrachters erstellt wurde, übergeben wir die neue Transformation an {{domxref("XRReferenceSpace.getOffsetReferenceSpace", "getOffsetReferenceSpace()")}}, um einen _weiteren_ Referenzraum zu erstellen, der jetzt so versetzt ist, dass sich sein Ursprung an der gleichen Stelle im Raum befindet wie die durch `viewerPosition` angegebenen Koordinaten, mit der Orientierung ebenfalls entsprechend angepasst.

Dann wird {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} aufgerufen, um einen neuen Animationsframe zum Zeichnen anzufordern. Der `drawFrame()`-Callback wird ausgeführt, wenn das System bereit ist, den nächsten Frame zu zeichnen.

Sie finden weitere Beispiele unter [Bewegung, Orientierung und Bewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
