---
title: "XRFrame: getViewerPose()-Methode"
short-title: getViewerPose()
slug: Web/API/XRFrame/getViewerPose
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`getViewerPose()`**-Methode, ein Mitglied der [`XRFrame`](/de/docs/Web/API/XRFrame)-Schnittstelle, gibt ein [`XRViewerPose`](/de/docs/Web/API/XRViewerPose)-Objekt zurück, welches die Pose (Position und Orientierung) des Betrachters relativ zum angegebenen Referenzraum beschreibt.

Sehen Sie sich die [`getPose()`](/de/docs/Web/API/XRFrame/getPose)-Methode an, um eine Pose zu berechnen, die die Differenz zwischen zwei Räumen darstellt.

## Syntax

```js-nolint
getViewerPose(referenceSpace)
```

### Parameter

- `referenceSpace`
  - : Ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)-Objekt, das den Raum angibt, der als Referenzpunkt oder Basis für die Berechnung der aktuellen Pose des Betrachters verwendet werden soll.

### Rückgabewert

Ein [`XRViewerPose`](/de/docs/Web/API/XRViewerPose), das die Position und Orientierung des Betrachters relativ zum angegebenen Referenzraum beschreibt.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `getViewerPose()` nicht im Kontext eines Rückrufs an [`XRSession.requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) einer Sitzung aufgerufen wurde.

## Beispiele

In dieser Rückruffunktion für [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) wird die [`XRViewerPose`](/de/docs/Web/API/XRViewerPose), die den Blickpunkt des Betrachters auf die Welt beschreibt, durch Aufrufen von `getViewerPose()` auf dem an den Rückruf übergebenen [`XRFrame`](/de/docs/Web/API/XRFrame) erhalten.

```js
viewerPose = xrFrame.getViewerPose(xrReferenceSpace);

if (viewerPose) {
  /* render the pose's views */
}
```

Um ein vollständiges Beispiel zu sehen, schauen Sie sich [Bewegung, Orientierung und Bewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion) an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
