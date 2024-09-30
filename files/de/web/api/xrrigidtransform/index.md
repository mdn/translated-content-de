---
title: XRRigidTransform
slug: Web/API/XRRigidTransform
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die **`XRRigidTransform`** ist eine [WebXR API](/de/docs/Web/API/WebXR_Device_API)-Schnittstelle, die die 3D-geometrische Transformation beschreibt, die durch eine Position und Orientierung dargestellt wird.

`XRRigidTransform` wird verwendet, um Transformationen innerhalb der WebXR APIs anzugeben, einschließlich:

- Der Versatz und die Orientierung relativ zum übergeordneten Referenzraum beim Erstellen eines neuen Referenzraums mit [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace).
- Der [`transform`](/de/docs/Web/API/XRView/transform) einer [`XRView`](/de/docs/Web/API/XRView).
- Der [`transform`](/de/docs/Web/API/XRPose/transform) einer [`XRPose`](/de/docs/Web/API/XRPose).
- Die [`transform`](/de/docs/Web/API/XRReferenceSpaceEvent/transform)-Eigenschaft des [`XRReferenceSpaceEvent`](/de/docs/Web/API/XRReferenceSpaceEvent)-Ereignisses, wie im [`reset`](/de/docs/Web/API/XRReferenceSpace/reset_event)-Ereignis, das durch einen [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) empfangen wird.

Die Verwendung von `XRRigidTransform` an diesen Stellen statt einfacher Arrays, die die Matrixdaten bereitstellen, hat einen Vorteil. Es berechnet automatisch die Inverse der Transformation und speichert sie sogar zwischen, was nachfolgende Anfragen erheblich schneller macht.

## Konstruktor

- [`XRRigidTransform()`](/de/docs/Web/API/XRRigidTransform/XRRigidTransform)
  - : Erstellt ein neues `XRRigidTransform`-Objekt, das eine Transformation darstellt, die eine bestimmte Position und/oder Orientierung anwendet.

## Instanzeigenschaften

- [`XRRigidTransform.position`](/de/docs/Web/API/XRRigidTransform/position) {{ReadOnlyInline}}
  - : Ein [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly), der einen dreidimensionalen Punkt in Metern angibt und die Übersetzungskomponente der Transformation beschreibt. Die [`w`](/de/docs/Web/API/DOMPointReadonly/w)-Eigenschaft ist immer `1.0`.
- [`XRRigidTransform.orientation`](/de/docs/Web/API/XRRigidTransform/orientation) {{ReadOnlyInline}}
  - : Ein [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly), der ein Einheitsquaternion enthält, das die Rotationskomponente der Transformation beschreibt. Als Einheitsquaternion ist seine Länge stets auf `1.0` normalisiert.
- [`XRRigidTransform.matrix`](/de/docs/Web/API/XRRigidTransform/matrix) {{ReadOnlyInline}}
  - : Gibt die Transformationsmatrix in Form eines 16-Elemente-{{jsxref("Float32Array")}} zurück. Siehe den Abschnitt [Matrix Format](/de/docs/Web/API/XRRigidTransform/matrix#matrix_format), um zu verstehen, wie das Array zur Darstellung einer Matrix verwendet wird.
- [`XRRigidTransform.inverse`](/de/docs/Web/API/XRRigidTransform/inverse) {{ReadOnlyInline}}
  - : Gibt ein `XRRigidTransform` zurück, das die Inverse dieser Transformation ist. Das heißt, wenn sie auf ein Objekt angewendet wird, das zuvor durch die ursprüngliche Transformation transformiert wurde, wird sie die Transformation rückgängig machen und das ursprüngliche Objekt zurückgeben.

## Anwendungshinweise

Wenn ein `XRRigidTransform` interpretiert wird, wird die Orientierung immer vor der Position auf das betroffene Objekt angewendet.

## Beispiel

Dieser Codeausschnitt erstellt ein `XRRigidTransform`, um den Versatz und die Orientierung im Verhältnis zum aktuellen Referenzraum anzugeben, der beim Erstellen eines neuen Referenzraums verwendet werden soll. Anschließend wird die erste Animationsrahmenrückruf beantragt, indem die Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) der Sitzung aufgerufen wird.

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
