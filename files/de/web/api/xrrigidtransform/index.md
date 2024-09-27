---
title: XRRigidTransform
slug: Web/API/XRRigidTransform
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die **`XRRigidTransform`** ist eine Schnittstelle der [WebXR API](/de/docs/Web/API/WebXR_Device_API), die die 3D-geometrische Transformation darstellt, beschrieben durch eine Position und Orientierung.

`XRRigidTransform` wird verwendet, um Transformationen in der gesamten WebXR-API anzugeben, einschließlich:

- Des Versatzes und der Orientierung relativ zum übergeordneten Referenzraum, die bei der Erstellung eines neuen Referenzraums mit [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) verwendet werden sollen.
- Der [`transform`](/de/docs/Web/API/XRView/transform) eines [`XRView`](/de/docs/Web/API/XRView).
- Der [`transform`](/de/docs/Web/API/XRPose/transform) eines [`XRPose`](/de/docs/Web/API/XRPose).
- Der [`transform`](/de/docs/Web/API/XRReferenceSpaceEvent/transform)-Eigenschaft des [`XRReferenceSpaceEvent`](/de/docs/Web/API/XRReferenceSpaceEvent), wie sie im [`reset`](/de/docs/Web/API/XRReferenceSpace/reset_event)-Ereignis eines [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) zu finden ist.

Die Verwendung von `XRRigidTransform` an diesen Stellen anstelle von reinen Arrays, die die Matrixdaten bereitstellen, hat den Vorteil, dass automatisch die Inverse der Transformation berechnet und sogar zwischengespeichert wird, was nachfolgende Anfragen erheblich beschleunigt.

## Konstruktor

- [`XRRigidTransform()`](/de/docs/Web/API/XRRigidTransform/XRRigidTransform)
  - : Erstellt ein neues `XRRigidTransform`-Objekt, das eine Transformation darstellt, die eine angegebene Position und/oder Orientierung anwendet.

## Instanz-Eigenschaften

- [`XRRigidTransform.position`](/de/docs/Web/API/XRRigidTransform/position) {{ReadOnlyInline}}
  - : Ein [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly), der einen dreidimensionalen Punkt in Metern angibt und die Translationskomponente der Transformation beschreibt. Die [`w`](/de/docs/Web/API/DOMPointReadonly/w)-Eigenschaft ist immer `1.0`.
- [`XRRigidTransform.orientation`](/de/docs/Web/API/XRRigidTransform/orientation) {{ReadOnlyInline}}
  - : Ein [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly), der ein Einheitsquaternion enthält, das die Rotationskomponente der Transformation beschreibt. Als Einheitsquaternion ist seine Länge immer auf `1.0` normalisiert.
- [`XRRigidTransform.matrix`](/de/docs/Web/API/XRRigidTransform/matrix) {{ReadOnlyInline}}
  - : Gibt die Transformationsmatrix in Form eines 16-gliedrigen {{jsxref("Float32Array")}} zurück. In der Sektion [Matrixformat](/de/docs/Web/API/XRRigidTransform/matrix#matrix_format) wird erklärt, wie das Array verwendet wird, um eine Matrix darzustellen.
- [`XRRigidTransform.inverse`](/de/docs/Web/API/XRRigidTransform/inverse) {{ReadOnlyInline}}
  - : Gibt ein `XRRigidTransform` zurück, das die Inverse dieser Transformation ist. Das bedeutet, dass, wenn es auf ein zuvor durch die ursprüngliche Transformation transformiertes Objekt angewendet wird, die Transformation rückgängig gemacht und das ursprüngliche Objekt zurückgegeben wird.

## Verwendungshinweise

Wenn ein `XRRigidTransform` interpretiert wird, wird die Orientierung immer zuerst auf das betroffene Objekt angewendet, bevor die Position angewendet wird.

## Beispiel

Dieses Code-Snippet erstellt ein `XRRigidTransform`, um den Versatz und die Orientierung in Bezug auf den aktuellen Referenzraum anzugeben, der bei der Erstellung eines neuen Referenzraums verwendet werden soll. Anschließend wird der erste Animations-Frame-Callback durch Aufruf der Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) der Sitzung angefordert.

```js
xrSession.requestReferenceSpace(refSpaceType).then((refSpace) => {
  xrReferenceSpace = refSpace;
  xrReferenceSpace = xrReferenceSpace.getOffsetReferenceSpace(
    new XRRigidTransform(viewerStartPosition, cubeOrientation),
  );
  animationFrameRequestID = xrSession.requestAnimationFrame(drawFrame);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
