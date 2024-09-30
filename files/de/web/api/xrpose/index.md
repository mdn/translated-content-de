---
title: XRPose
slug: Web/API/XRPose
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{APIRef("WebXR Device API")}}{{securecontext_header}}

`XRPose` ist ein [WebXR API](/de/docs/Web/API/WebXR_Device_API)-Interface, das eine Position und Orientierung im 3D-Raum darstellt, relativ zu dem [`XRSpace`](/de/docs/Web/API/XRSpace), in dem es sich befindet. Der `XRSpace`—entweder ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) oder ein [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace)—definiert das Koordinatensystem, das für die Pose verwendet wird und, im Fall eines [`XRViewerPose`](/de/docs/Web/API/XRViewerPose), dessen zugrundeliegende Ansichten.

Um das `XRPose` für den `XRSpace` zu erhalten, das als lokales Koordinatensystem eines Objekts verwendet wird, rufen Sie [`XRFrame.getPose()`](/de/docs/Web/API/XRFrame/getPose) auf, und geben Sie diesen lokalen `XRSpace` und den Raum an, in den Sie umwandeln möchten:

```js
thePose = xrFrame.getPose(localSpace, baseSpace);
```

Die Pose für einen Betrachter (oder eine Kamera) wird durch die [`XRViewerPose`](/de/docs/Web/API/XRViewerPose)-Unterklasse von `XRPose` dargestellt. Diese wird mit [`XRFrame.getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) anstelle von `getPose()` erhalten, indem ein Referenzraum spezifiziert wird, der angepasst wurde, um den Knoten so zu positionieren und auszurichten, dass die gewünschte Betrachtungsposition und -winkel bereitgestellt werden:

```js
viewerPose = xrFrame.getViewerPose(adjReferenceSpace);
```

Hierbei ist `adjReferenceSpace` ein Referenzraum, der unter Verwendung des Basisrahmens des Referenzrahmens und aller Anpassungen, die zur Positionierung des Betrachters aufgrund von Bewegungen oder Rotationen erforderlich sind, aktualisiert wurde, die von einer anderen Quelle als dem XR-Gerät bereitgestellt werden, wie zum Beispiel Eingaben von Tastatur oder Maus.

Siehe den Artikel [Bewegung, Orientierung und Bewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion) für weitere Informationen und ein Beispiel mit ausführlichen Erklärungen zum Ablauf.

## Instanzeigenschaften

- [`XRPose.angularVelocity`](/de/docs/Web/API/XRPose/angularVelocity) {{ReadOnlyInline}}
  - : Ein [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly), der die Winkelgeschwindigkeit in Radianten pro Sekunde relativ zum Basis-`XRSpace` beschreibt.
- [`XRPose.emulatedPosition`](/de/docs/Web/API/XRPose/emulatedPosition) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `false` ist, wenn die von [`transform`](/de/docs/Web/API/XRPose/transform) angegebene Position und Orientierung direkt von einem vollwertigen XR-Gerät mit sechs Freiheitsgraden (6DoF) bezogen wird (also einem Gerät, das nicht nur die Neigung, Gier und Rollbewegung des Kopfes, sondern auch die vorwärts-, rückwärts- und seitwärtsgerichtete Bewegung des Betrachters verfolgt). Wenn eine Komponente des `transform` berechnet oder künstlich erstellt wird (z. B. durch die Verwendung von Maus- oder Tastatursteuerungen, um sich durch den Raum zu bewegen), ist dieser Wert stattdessen `true`, was darauf hinweist, dass der `transform` teilweise softwarebasiert emuliert ist.
- [`XRPose.linearVelocity`](/de/docs/Web/API/XRPose/linearVelocity) {{ReadOnlyInline}}
  - : Ein [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly), der die lineare Geschwindigkeit in Metern pro Sekunde relativ zum Basis-`XRSpace` beschreibt.
- [`XRPose.transform`](/de/docs/Web/API/XRPose/transform) {{ReadOnlyInline}}
  - : Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), das die Position und Orientierung der Pose relativ zum Basis-`XRSpace` bereitstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [`XRFrame.getPose()`](/de/docs/Web/API/XRFrame/getPose)
- [`XRViewerPose`](/de/docs/Web/API/XRViewerPose)
