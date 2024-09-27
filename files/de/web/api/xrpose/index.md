---
title: XRPose
slug: Web/API/XRPose
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{APIRef("WebXR Device API")}}{{securecontext_header}}

`XRPose` ist eine [WebXR API](/de/docs/Web/API/WebXR_Device_API) Schnittstelle, die eine Position und Orientierung im 3D-Raum darstellt, relativ zum [`XRSpace`](/de/docs/Web/API/XRSpace), in dem sie sich befindet. Das `XRSpace`—entweder ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) oder ein [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace)—definiert das Koordinatensystem, das für die Pose verwendet wird, und im Falle einer [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) ihre zugrunde liegenden Ansichten.

Um die `XRPose` für das `XRSpace` zu erhalten, das als lokales Koordinatensystem eines Objekts verwendet wird, rufen Sie [`XRFrame.getPose()`](/de/docs/Web/API/XRFrame/getPose) auf und geben Sie das lokale `XRSpace` und den Raum an, in den Sie konvertieren möchten:

```js
thePose = xrFrame.getPose(localSpace, baseSpace);
```

Die Pose für einen Betrachter (oder eine Kamera) wird durch die [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) Unterklasse von `XRPose` dargestellt. Diese wird mit [`XRFrame.getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) anstelle von `getPose()` erhalten, indem ein Referenzraum spezifiziert wird, der angepasst wurde, um den Knoten so zu positionieren und auszurichten, dass die gewünschte Betrachtungsposition und der gewünschte Betrachtungswinkel bereitgestellt werden:

```js
viewerPose = xrFrame.getViewerPose(adjReferenceSpace);
```

Hierbei ist `adjReferenceSpace` ein Referenzraum, der mithilfe des Basisreferenzrahmens für den Rahmen und aller Anpassungen aktualisiert wurde, die erforderlich sind, um den Betrachter basierend auf Bewegungen oder Rotationen zu positionieren, die aus einer anderen Quelle als dem XR-Gerät bereitgestellt werden, wie z.B. Tastatur- oder Maus-Eingaben.

Für weitere Details und ein Beispiel mit ausführlichen Erklärungen dazu, was passiert, siehe den Artikel [Bewegung, Orientierung und Bewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion).

## Instanz-Eigenschaften

- [`XRPose.angularVelocity`](/de/docs/Web/API/XRPose/angularVelocity) {{ReadOnlyInline}}
  - : Ein [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly), der die Winkelgeschwindigkeit in Bogenmaß pro Sekunde relativ zum Basis-[`XRSpace`](/de/docs/Web/API/XRSpace) beschreibt.
- [`XRPose.emulatedPosition`](/de/docs/Web/API/XRPose/emulatedPosition) {{ReadOnlyInline}}
  - : Ein Boolescher Wert, der `false` ist, wenn die durch [`transform`](/de/docs/Web/API/XRPose/transform) gegebene Position und Orientierung direkt von einem vollständigen Sechs-Grad-of-Freedom (6DoF) XR-Gerät erhalten wird (das heißt, ein Gerät, das nicht nur die Neigung, das Gieren und Rollen des Kopfes, sondern auch die Vorwärts-, Rückwärts- und Seitenbewegungen des Betrachters verfolgt). Wenn eine Komponente des `transform` berechnet oder künstlich erstellt wird (z.B. durch Verwendung von Maus- oder Tastatursteuerungen, um sich durch den Raum zu bewegen), ist dieser Wert stattdessen `true`, was darauf hinweist, dass der `transform` teilweise in Software emuliert wird.
- [`XRPose.linearVelocity`](/de/docs/Web/API/XRPose/linearVelocity) {{ReadOnlyInline}}
  - : Ein [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly), der die lineare Geschwindigkeit in Metern pro Sekunde relativ zum Basis-[`XRSpace`](/de/docs/Web/API/XRSpace) beschreibt.
- [`XRPose.transform`](/de/docs/Web/API/XRPose/transform) {{ReadOnlyInline}}
  - : Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), das die Position und Orientierung der Pose relativ zum Basis-[`XRSpace`](/de/docs/Web/API/XRSpace) bereitstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [`XRFrame.getPose()`](/de/docs/Web/API/XRFrame/getPose)
- [`XRViewerPose`](/de/docs/Web/API/XRViewerPose)
