---
title: XRPose
slug: Web/API/XRPose
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{APIRef("WebXR Device API")}}{{securecontext_header}}

`XRPose` ist ein [WebXR API](/de/docs/Web/API/WebXR_Device_API) Interface, das eine Position und Orientierung im 3D-Raum darstellt, relativ zum {{domxref("XRSpace")}}, in dem es sich befindet. Der `XRSpace`—entweder ein {{domxref("XRReferenceSpace")}} oder ein {{domxref("XRBoundedReferenceSpace")}}—definiert das Koordinatensystem, das für die Pose verwendet wird, und im Fall eines {{domxref("XRViewerPose")}} seine zugrunde liegenden Ansichten.

Um die `XRPose` für den `XRSpace` zu erhalten, das als lokales Koordinatensystem eines Objekts verwendet wird, rufen Sie {{domxref("XRFrame.getPose()")}} auf und geben Sie diesen lokalen `XRSpace` und den Raum an, in den Sie konvertieren möchten:

```js
thePose = xrFrame.getPose(localSpace, baseSpace);
```

Die Pose für einen Betrachter (oder eine Kamera) wird durch die {{domxref("XRViewerPose")}} Unterklasse von `XRPose` dargestellt. Diese wird mit {{domxref("XRFrame.getViewerPose()")}} anstelle von `getPose()` erhalten, wobei ein Referenzraum angegeben wird, der angepasst wurde, um den Knoten in die gewünschte Position und Orientierung zum Betrachten zu bringen:

```js
viewerPose = xrFrame.getViewerPose(adjReferenceSpace);
```

Hierbei ist `adjReferenceSpace` ein Referenzraum, der mit dem Basisreferenzrahmen des Frames und allen Anpassungen, die erforderlich sind, um den Betrachter basierend auf Bewegungen oder Drehungen zu positionieren, die von einer anderen Quelle als dem XR-Gerät geliefert werden, wie z. B. Tastatur- oder Mauseingaben, aktualisiert wurde.

Sehen Sie sich den Artikel [Bewegung, Orientierung und Bewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion) für weitere Details und ein Beispiel mit gründlichen Erklärungen zu den Vorgängen an.

## Instanz-Eigenschaften

- {{DOMxRef("XRPose.angularVelocity")}} {{ReadOnlyInline}}
  - : Ein {{DOMxRef("DOMPointReadOnly")}}, der die Winkelgeschwindigkeit in Radiant pro Sekunde relativ zur Basis {{DOMxRef("XRSpace")}} beschreibt.
- {{DOMxRef("XRPose.emulatedPosition")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `false` ist, wenn die durch {{DOMxRef("XRPose.transform", "transform")}} angegebene Position und Orientierung direkt von einem vollständigen sechs Freiheitsgrade (6DoF) XR-Gerät stammt (also ein Gerät, das nicht nur die Neigung, Gier und Drehung des Kopfes, sondern auch die Vorwärts-, Rückwärts- und Seitwärtsbewegung des Betrachters verfolgt). Wenn irgendein Bestandteil des `transform` berechnet oder künstlich erzeugt wird (wie durch die Verwendung von Maus- oder Tastatursteuerungen, um im Raum zu bewegen), ist dieser Wert stattdessen `true`, was anzeigt, dass der `transform` teilweise in der Software emuliert wird.
- {{DOMxRef("XRPose.linearVelocity")}} {{ReadOnlyInline}}
  - : Ein {{DOMxRef("DOMPointReadOnly")}}, der die lineare Geschwindigkeit in Metern pro Sekunde relativ zur Basis {{DOMxRef("XRSpace")}} beschreibt.
- {{DOMxRef("XRPose.transform")}} {{ReadOnlyInline}}
  - : Ein {{DOMxRef("XRRigidTransform")}}, das die Position und Orientierung der Pose relativ zur Basis {{DOMxRef("XRSpace")}} bereitstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- {{DOMxRef("XRFrame.getPose()")}}
- {{DOMxRef("XRViewerPose")}}
