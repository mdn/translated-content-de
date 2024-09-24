---
title: XRRigidTransform
slug: Web/API/XRRigidTransform
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die **`XRRigidTransform`** ist eine [WebXR-API](/de/docs/Web/API/WebXR_Device_API)-Schnittstelle, die die 3D-geometrische Transformation beschreibt, die durch eine Position und Orientierung definiert ist.

`XRRigidTransform` wird verwendet, um Transformationen in der gesamten WebXR-API anzugeben, einschließlich:

- Der Versatz und die Orientierung relativ zu dem übergeordneten Referenzraum, der verwendet wird, um einen neuen Referenzraum mit {{domxref("XRReferenceSpace.getOffsetReferenceSpace", "getOffsetReferenceSpace()")}} zu erstellen.
- Die {{domxref("XRView.transform", "Transformation")}} eines {{domxref("XRView")}}.
- Die {{domxref("XRPose.transform", "Transformation")}} einer {{domxref("XRPose")}}.
- Die {{domxref("XRReferenceSpaceEvent")}}-Eigenschaft {{domxref("XRReferenceSpaceEvent.transform", "Transformation")}}, wie sie im {{domxref("XRReferenceSpace.reset_event", "reset")}}-Ereignis eines {{domxref("XRReferenceSpace")}} gefunden wird.

Die Verwendung von `XRRigidTransform` an diesen Stellen anstelle von reinen Arrays, die die Matrixdaten bereitstellen, hat einen Vorteil. Es berechnet automatisch die Inverse der Transformation und speichert sie sogar, was nachfolgende Anfragen erheblich beschleunigt.

## Konstruktor

- {{domxref("XRRigidTransform.XRRigidTransform", "XRRigidTransform()")}}
  - : Erstellt ein neues `XRRigidTransform`-Objekt, das eine Transformation repräsentiert, die eine angegebene Position und/oder Orientierung anwendet.

## Instanzeigenschaften

- {{DOMxRef("XRRigidTransform.position")}} {{ReadOnlyInline}}
  - : Ein {{DOMxRef("DOMPointReadOnly")}}, das einen dreidimensionalen Punkt angibt, ausgedrückt in Metern, der die Verschiebungskomponente der Transformation beschreibt. Die {{DOMxRef("DOMPointReadonly.w", "w")}}-Eigenschaft ist immer `1.0`.
- {{DOMxRef("XRRigidTransform.orientation")}} {{ReadOnlyInline}}
  - : Ein {{DOMxRef("DOMPointReadOnly")}}, das ein Einheitsquaternion enthält, das die Rotationskomponente der Transformation beschreibt. Als Einheitsquaternion ist seine Länge immer auf `1.0` normalisiert.
- {{DOMxRef("XRRigidTransform.matrix")}} {{ReadOnlyInline}}
  - : Gibt die Transformationsmatrix in Form eines 16-gliedrigen {{jsxref("Float32Array")}} zurück. Siehe den Abschnitt [Matrixformat](/de/docs/Web/API/XRRigidTransform/matrix#matrix_format), wie das Array verwendet wird, um eine Matrix darzustellen.
- {{DOMxRef("XRRigidTransform.inverse")}} {{ReadOnlyInline}}
  - : Gibt ein `XRRigidTransform` zurück, das die Inverse dieser Transformation ist. Das heißt, wenn es auf ein Objekt angewendet wird, das zuvor durch die ursprüngliche Transformation transformiert wurde, wird es die Transformation rückgängig machen und das ursprüngliche Objekt zurückgeben.

## Verwendungshinweise

Wenn eine `XRRigidTransform` interpretiert wird, wird immer zuerst die Orientierung auf das betroffene Objekt angewendet, bevor die Position angewendet wird.

## Beispiel

Dieser Codeausschnitt erstellt ein `XRRigidTransform`, um den Versatz und die Orientierung in Bezug auf den aktuellen Referenzraum anzugeben, der verwendet wird, um einen neuen Referenzraum zu erstellen. Anschließend wird das erste Animations-Frame-Callback angefordert, indem die Methode {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} der Sitzung aufgerufen wird.

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

## Kompatibilität der Browser

{{Compat}}
